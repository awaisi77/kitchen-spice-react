import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { trendingSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';
import { getProductsByCategory } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = this.props.products.slice(50, 66);

        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Trending Products</h2>
                    </div>

                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            { _data.demo3.categories.map((cat, index)=>
                                <Tab className="nav-item" key={ index }>
                                    <span className="nav-link">{cat.name}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-5col d-none d-xl-block">
                        <div className="banner">
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-3/banners/banner-4.jpg` } alt="Banner" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-xl-4-5col">
                        { _data.demo3.categories.map(( cat, index )=>
                            <TabPanel key={ index  }>
                                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider  }>
                                    { getProductsByCategory(products.slice(6, 11), cat.name).map((item, index) => 
                                        <Product 
                                            product={ item } 
                                            key={ index } 
                                            colorType="rgb" 
                                            onAddToCartClick={ addToCart } 
                                            onToggleWishlistClick={ toggleWishlist } 
                                            onAddToCompareClick={ addToCompare }  
                                            showQuickViewModal={ showQuickViewModal } 
                                            type={ 2 }
                                        />
                                    ) }
                                </OwlCarousel>
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );