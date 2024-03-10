import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByCategory, getNewProducts, getProductsByDemo } from '../../../services';
import _data from '../../../mock_data/data.json';

class NewCollection extends Component {    
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getNewProducts(getProductsByDemo(this.props.products, "demo8"));

        return(
            <Tabs className="container recent-arrivals" selectedTabClassName="show">
                <div className="heading heading-flex align-items-center mb-3">
                    <h2 className="title title-lg">Recent Arrivals</h2>
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
                        { _data.demo8.categories.map(( cat, index ) =>
                            <Tab className="nav-item" key={ index  }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
                
                <div className="tab-content">
                    { _data.demo8.categories.map(( cat, index ) =>
                        <TabPanel key={ index  }>
                            <div className="products">
                                <div className="row justify-content-center">
                                    {
                                        getProductsByCategory( products, cat ).map( ( item, index ) => 
                                            <div className="col-6 col-md-4 col-lg-3" key={ index + item.name  }>
                                                <Product product={ item}
                                                    key={ index + item.name}
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

                <div className="more-container text-center mt-3 mb-3">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-dark-3 btn-more"><span>View More</span><i className="icon-long-arrow-right"></i></Link>
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( NewCollection );
