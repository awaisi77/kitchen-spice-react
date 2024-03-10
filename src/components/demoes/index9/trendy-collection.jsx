import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousels from '../../features/owl-carousel';
import Product from './product';
import { trendingSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';
import { getProductsByCategory, getTrendyProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo9"));

        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Trending Now</h2>
                    </div>

                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center">
                            {
                                _data.demo9.categories.map((cat, index) =>
                                    <Tab className="nav-item" key={ index }>
                                        <span className="nav-link">{cat}'s Clothing</span>
                                    </Tab>
                                )
                            }
                        </TabList>
                    </div>
                </div>
                
                <div className="tab-content">
                    {_data.demo9.categories.map((cat, index) =>
                        <TabPanel className="p-0 react-tabs__tab-panel" key={ `trending-${cat}` }>
                            <OwlCarousels adClass="owl-simple carousel-euqal-height carousel-with-shadow" carouselOptions={ trendingSlider  }>
                                { getProductsByCategory(products, cat).map((item, index) => 
                                    <Product 
                                        product={ item }
                                        key={ index + item.name} 
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
            </Tabs>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );