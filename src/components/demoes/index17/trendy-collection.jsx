import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getNewProducts, getFeaturedProducts, getTopSellingProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal }=this.props;

        let products = getProductsByDemo(this.props.products, "demo17");

        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <h2 className="title text-center">Currently Popular Items</h2>

                <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <Tab className="nav-item">
                        <span className="nav-link">New</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Best Seller</span>
                    </Tab>
                </TabList>

                <div className="tab-content mt-2">
                    <TabPanel>
                        <div className="row justify-content-center">
                            { getNewProducts(products).map(( product, index ) =>
                                <div className="col-6 col-md-4 col-lg-3" key={ `New_${index}` }>
                                    <Product
                                        product={ product }
                                        onAddToCompareClick={ addToCompare }
                                        onToggleWishlistClick={ toggleWishlist }
                                        showQuickViewModal={ showQuickViewModal }
                                        onAddToCartClick={ addToCart }
                                    />
                                </div>
                            ) }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row justify-content-center">
                            { getFeaturedProducts(products).map(( product, index ) =>
                                <div className="col-6 col-md-4 col-lg-3" key={ `featured_${index}` }>
                                    <Product
                                        product={ product }
                                        onAddToCompareClick={ addToCompare }
                                        onToggleWishlistClick={ toggleWishlist }
                                        showQuickViewModal={ showQuickViewModal }
                                        onAddToCartClick={ addToCart }
                                    />
                                </div>
                            ) }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row justify-content-center">
                            { getTopSellingProducts(products).map(( product, index ) =>
                                <div className="col-6 col-md-4 col-lg-3" key={ `topselling_${index}` }>
                                    <Product
                                        product={ product  }
                                        onAddToCompareClick={ addToCompare }
                                        onToggleWishlistClick={ toggleWishlist }
                                        showQuickViewModal={ showQuickViewModal }
                                        onAddToCartClick={ addToCart }
                                    />
                                </div>
                            ) }
                        </div>
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