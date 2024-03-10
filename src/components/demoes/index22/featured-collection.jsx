import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import Product from './product';
import DealProduct from './deal-product';

import { addToCart, toggleWishlist, showQuickViewModal } from '../../../actions';
import { getTopSellingProducts, getSaleProducts, getFeaturedProducts, getProductsByDemo, getDealProducts } from '../../../services';
import { Link } from 'react-router-dom';

class FeaturedCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, showQuickViewModal } = this.props;

        let products = getFeaturedProducts(getProductsByDemo(this.props.products, "demo22"));
        let dealProduct = getDealProducts(getProductsByDemo(this.props.products, "demo22"), "Dewalt");
        
        return (
            <div className="featured-back" style={ {backgroundImage: "url(assets/images/demos/demo-22/featured/background.jpg)"} }>
                <Tabs className="container" selectedTabClassName="show">
                    <div className="section-title">
                        <TabList className="nav nav-pills nav-border-anim" role="tablist">
                            <Tab className="nav-item">
                                <span className="nav-link"><span>Featured</span></span>
                            </Tab>
                            <Tab className="nav-item">
                                <span className="nav-link"><span>Bestsellers</span></span>
                            </Tab>
                            <Tab className="nav-item">
                                <span className="nav-link"><span>Sale</span></span>
                            </Tab>
                        </TabList>

                    
                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` } className="link">All Featured Products</Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                           <DealProduct product={ dealProduct[0] }/>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="tab-content">
                                <TabPanel id="tab-featured">
                                    <div className="row products all">
                                        {
                                            products.map(( item, index ) => 
                                                <div className="col-lg-4 col-6" key={ index }>
                                                    <Product product={ item }
                                                        onAddToCartClick={ addToCart } 
                                                        onToggleWishlistClick={ toggleWishlist }
                                                        showQuickViewModal={ showQuickViewModal } />
                                                </div>    
                                            )
                                        }
                                    </div>
                                </TabPanel>
                                
                                <TabPanel>
                                    <div className="row products">
                                        {
                                            getTopSellingProducts( products ).map(( item, index ) => 
                                                <div className="col-lg-4 col-6" key={ index }>
                                                <Product product={ item }
                                                    onAddToCartClick={ addToCart } 
                                                    onToggleWishlistClick={ toggleWishlist }
                                                    showQuickViewModal={ showQuickViewModal } />
                                                </div>    
                                            )
                                        }
                                    </div>
                                </TabPanel>
                                
                                <TabPanel>
                                    <div className="row products">
                                        {
                                            getSaleProducts( products ).map(( item, index ) => 
                                                <div className="col-lg-4 col-6" key={ index }>
                                                    <Product product={ item}
                                                        onAddToCartClick={ addToCart } 
                                                        onToggleWishlistClick={ toggleWishlist }
                                                        showQuickViewModal={ showQuickViewModal } />
                                                </div>    
                                            )
                                        }
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2"></div>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( FeaturedCollection );