import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getNewProducts, getTopSellingProducts, getTrendyProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo19"));

        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <TabList className="nav nav-pills nav-big nav-border-anim justify-content-center mb-5">
                    <Tab className="nav-item">
                        <span className="nav-link">Now Trending</span>
                    </Tab>
                    <Tab className="nav-item">
                        <span className="nav-link">New Releases</span>
                    </Tab>
                    <Tab className="nav-item">
                        <span className="nav-link">Best-Rated</span>
                    </Tab>
                </TabList>
                
                <div className="tab-content tab-content-carousel mt-2">
                    <TabPanel className="p-0 react-tabs__tab-panel">
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                            { products.map(( product, index ) =>
                                <Product
                                    key={ `trending_${index}` }
                                    product={ product }
                                    onAddToCompareClick={ addToCompare }
                                    onToggleWishlistClick={ toggleWishlist }
                                    showQuickViewModal={ showQuickViewModal }
                                    onAddToCartClick={ addToCart }
                                />
                            ) }
                        </OwlCarousel>
                    </TabPanel>

                    <TabPanel className="p-0 react-tabs__tab-panel">
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                            { getNewProducts(products).map(( product, index ) =>
                                <Product
                                    key={ `new_${index}` }
                                    product={ product }
                                    onAddToCompareClick={ addToCompare }
                                    onToggleWishlistClick={ toggleWishlist }
                                    showQuickViewModal={ showQuickViewModal }
                                    onAddToCartClick={ addToCart }
                                />
                            ) }
                        </OwlCarousel>
                    </TabPanel>

                    <TabPanel className="p-0 react-tabs__tab-panel">
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                            { getTopSellingProducts(products).map(( product, index ) =>
                                <Product
                                    key={ `best_${index}` }
                                    product={ product }
                                    onAddToCompareClick={ addToCompare }
                                    onToggleWishlistClick={ toggleWishlist }
                                    showQuickViewModal={ showQuickViewModal }
                                    onAddToCartClick={ addToCart }
                                />
                            ) }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );