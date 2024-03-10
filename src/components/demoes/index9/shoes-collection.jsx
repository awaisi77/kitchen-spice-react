import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousels from '../../features/owl-carousel';
import Product from './product';
import { featuredSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';
import { getProductsByCategory, getDealProducts, getProductsByDemo } from '../../../services';
import Banner from './category-banner';

class ShoesCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo9"), "shoes");

        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Featured Footwear</h2>
                    </div>

                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center">
                            { _data.demo9.categories.map(( cat, index ) =>
                                <Tab className="nav-item" key={ index  }>
                                    <span className="nav-link">{`${cat}'s Shoes`}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-3">
                        <Banner banner={ _data.demo9.categoryBanners[0] } />
                    </div>

                    <div className="col-lg-9">
                        {_data.demo9.categories.map(( cat, index ) =>
                            <TabPanel  key={ index }>
                                <OwlCarousels adClass="owl-simple carousel-euqal-height carousel-with-shadow" carouselOptions={ featuredSlider  }>
                                    { getProductsByCategory(products, cat).map(( item, index ) => 
                                        <Product 
                                            product={ item } 
                                            type = {2}
                                            key={ index + item.name } 
                                            onAddToCartClick={ addToCart } 
                                            onToggleWishlistClick={ toggleWishlist } 
                                            onAddToCompareClick={ addToCompare }  
                                            showQuickViewModal={ showQuickViewModal } 
                                        />
                                    ) }
                                </OwlCarousels>
                            </TabPanel>
                        ) }
                    </div>
                </div>
            </Tabs>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( ShoesCollection );