import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import Product from './product';

import { getTopSellingProducts, getProductsByCategory, getProductsByDemo } from '../../../services';
import { addToCart, toggleWishlist } from '../../../actions';
import _data from '../../../mock_data/data.json';

class TopCollection extends Component {

    render() {
        const { products, addToCart, toggleWishlist } = this.props;
         
        let topProducts = getTopSellingProducts(getProductsByDemo( products, "demo1" ));
        
        return(
            <Tabs defaultIndex={ 0 }  selectedTabClassName="show">
                <div className="container">
                    <div className="heading heading-center mb-3">
                        <h2 className="title">Top Selling Products</h2>
                        <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            { _data.demo1.categories.map( ( cat, index ) =>
                                <Tab className="nav-item" key={ index }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                    { _data.demo1.categories.map( ( cat , index ) =>
                        <TabPanel key={ index }>
                            <div className="products">
                                <div className="row justify-content-center">
                                    { getProductsByCategory( topProducts, cat ).map( ( item, index ) => 
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col"  key={ index }>
                                            <Product type={ 2 } 
                                                product={ item } 
                                                onAddToCartClick={ addToCart } 
                                                onToggleWishlistClick={ toggleWishlist }/>
                                        </div>
                                    ) }
                                </div>
                            </div>
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
) ( TopCollection );
