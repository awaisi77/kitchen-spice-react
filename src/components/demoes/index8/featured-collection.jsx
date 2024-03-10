import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getSaleProducts, getTopRatingProducts, getFeaturedProducts, getProductsByDemo } from '../../../services';

class FeaturedCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getFeaturedProducts(getProductsByDemo(this.props.products, "demo8"));

        return (
            <Tabs className="container" selectedTabClassName="show">
                <TabList className="nav nav-pills nav-big nav-border-anim justify-content-center mb-2 mb-md-3">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>
                    <Tab className="nav-item">
                        <span className="nav-link">On Sale</span>
                    </Tab>
                    <Tab className="nav-item">
                        <span className="nav-link">Top Rated</span>
                    </Tab>
                </TabList>

                <div className="tab-content tab-content-carousel">
                    <TabPanel>
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow"                             
                            carouselOptions={ productSlider  }>
                            {
                                products.map( ( item, index ) => 
                                <Product product={ item }
                                    key={ index + item.name }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                                )
                            }
                        </OwlCarousel>
                    </TabPanel>
                    <TabPanel>
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow"                             
                            carouselOptions={ productSlider  }>
                            {
                                getSaleProducts( products ).map( ( item, index ) => 
                                <Product product={ item }
                                    key={ index + item.name }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                                )
                            }
                        </OwlCarousel>
                    </TabPanel>
                    <TabPanel>
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow"                             
                            carouselOptions={ productSlider  }>
                            {
                                getTopRatingProducts( products ).map( ( item, index ) => 
                                <Product product={ item }
                                    key={ index + item.name }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                                )
                            }
                        </OwlCarousel>
                    </TabPanel>
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( FeaturedCollection );