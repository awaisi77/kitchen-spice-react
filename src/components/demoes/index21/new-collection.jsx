import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist } from '../../../actions';
import _data from '../../../mock_data/data';
import { getProductsByCategory, getProductsByDemo, getDealProducts } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo21"), "arrival");

        return (
            <div className="container new-arrivals">
                <hr className="mb-5 mt-8" />
                
                <Tabs selectedTabClassName="show react-tabs__tab-panel--selected" defaultIndex={ 0 } >
                    <div className="heading heading-center mb-3">
                        <h2 className="title">NEW ARRIVALS </h2>

                        <TabList className="nav nav-pills justify-content-center">
                            { _data.demo21.categories.map(( cat, index ) =>
                                <Tab className="nav-item" key={ `arrival_${cat}` }>
                                    <span className="nav-link">{ cat }</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>

                    <div className="tab-content tab-content-carousel">
                        { _data.demo21.categories.map((cat, index) =>
                            <TabPanel className="tab-pane p-0 react-tabs__tab-panel" key={ `arrivalpanel_${cat}` } selectedClassName = "active show">
                                <div className="row">
                                { getProductsByCategory(products, cat).map(( product, index ) =>
                                    <div className="col-xl-5col col-lg-3 col-md-4 col-6" key={ `${cat}_${index}` }>
                                        <Product
                                            type={ 2 }
                                            product={ product }
                                            onAddToCartClick={ addToCart }
                                            onToggleWishlistClick={ toggleWishlist }
                                        />
                                    </div>
                                ) }
                                </div>
                            </TabPanel>
                        ) }
                    </div>
                </Tabs>

                <div className="text-center">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-viewMore">
                        <span>VIEW MORE PRODUCTS</span>
                        <i className="icon-long-arrow-right"></i>
                    </Link>
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

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( TrendyCollection );