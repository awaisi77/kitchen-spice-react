import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'; 

import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider2 } from './settings';

import { getTopSellingProducts, getSaleProducts, getTrendyProducts, getProductsByDemo } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class TrendingCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
         
        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo4"));

        return(
            <div className="bg-light pt-5 pb-6">
                <div className="container trending-products">
                    <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                        <div className="heading heading-flex mb-3">
                            <div className="heading-left">
                                <h2 className="title">Trending Products</h2>
                            </div>
                            <div className="heading-right">
                                <TabList className="nav nav-pills nav-border-anim justify-content-center">
                                    <Tab className="nav-item">
                                        <span className="nav-link">Top Rated</span>
                                    </Tab>
                                    <Tab className="nav-item">
                                        <span className="nav-link">Best Selling</span>
                                    </Tab>
                                    <Tab className="nav-item">
                                        <span className="nav-link">On Sale</span>
                                    </Tab>
                                </TabList>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5col d-none d-xl-block">
                                <div className="banner banner-trendy">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-4/banners/banner-4.jpg` } alt="banner"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4-5col">
                                <div className="tab-content tab-content-carousel just-action-icons-sm">
                                    <TabPanel>
                                        <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider2 } >
                                            { products.map((item, index) => 
                                                <Product product={ item }
                                                    key={ index} 
                                                    onAddToCartClick={ addToCart } 
                                                    onToggleWishlistClick={ toggleWishlist } 
                                                    onAddToCompareClick={ addToCompare }  
                                                    showQuickViewModal={ showQuickViewModal } />
                                            ) }
                                        </OwlCarousel>
                                    </TabPanel>
                                    <TabPanel>
                                        <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider2 } >
                                            { getTopSellingProducts( products ).map((item, index) => 
                                                <Product product={ item }
                                                    key={ index} 
                                                    onAddToCartClick={ addToCart } 
                                                    onToggleWishlistClick={ toggleWishlist } 
                                                    onAddToCompareClick={ addToCompare }  
                                                    showQuickViewModal={ showQuickViewModal } />
                                            ) }
                                        </OwlCarousel>
                                    </TabPanel>
                                    <TabPanel>
                                        <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider2 } >
                                            { getSaleProducts( products ).map((item, index) => 
                                                <Product product={ item }
                                                    key={ index} 
                                                    onAddToCartClick={ addToCart } 
                                                    onToggleWishlistClick={ toggleWishlist } 
                                                    onAddToCompareClick={ addToCompare }  
                                                    showQuickViewModal={ showQuickViewModal } />
                                            ) }
                                        </OwlCarousel>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( TrendingCollection );
