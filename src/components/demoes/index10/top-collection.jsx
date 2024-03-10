import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import _data from '../../../mock_data/data.json';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByCategory, getTopSellingProducts, getProductsByDemo } from '../../../services';

class TopCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTopSellingProducts(getProductsByDemo(this.props.products, "demo10"));
        
        return (
            <Tabs className="container" selectedTabClassName="show">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg mb-2">Top Selling Products</h2>
                    <TabList className="nav nav-pills justify-content-center">
                            { _data.demo10.categories.map(( cat, index ) =>
                                <Tab className="nav-item" key={ index  }>
                                    <span className="nav-link">{ cat }</span>
                                </Tab>
                            ) }
                    </TabList>
                </div>

                <div className="tab-content">
                    { _data.demo10.categories.map(( cat, index ) =>
                        <TabPanel key={ index }>
                            <div className="products just-action-icons-sm">
                                <div className="row">
                                {
                                    getProductsByCategory( products, cat ).map( ( item, index ) => 
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index  }>
                                            <Product product={ item }
                                                adClass="text-center"
                                                key={ index + item.name }
                                                onAddToCartClick={ addToCart } 
                                                onToggleWishlistClick={ toggleWishlist } 
                                                onAddToCompareClick={ addToCompare }  
                                                showQuickViewModal={ showQuickViewModal } 
                                            />
                                        </div>
                                    ) 
                                }
                                </div>
                            </div>
                        </TabPanel>
                    ) }
                </div>

                <div className="more-container text-center mt-5">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-lightgray btn-more btn-round">
                        <span>View more products</span><i className="icon-long-arrow-right"></i>
                    </Link>
                </div>

            </Tabs>
        )
    }
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } ) (TopCollection);