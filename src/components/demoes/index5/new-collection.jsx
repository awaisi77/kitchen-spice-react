import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'; 

import Product from './product';

import { getProductsByCategory, getProductsByDemo, getNewProducts } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';

class NewCollection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedCount: 8,
            hasMore: true,
            loading: false
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        // fake async api. products should be fetched from backend
        if ( this.state.loadedCount < 16 ) {
            this.setState((state) => {
                return { loading: true } ;
            })

            this.timer = setTimeout(() => {
                this.setState((state) => {
                    return { loadedCount: this.state.loadedCount + 4, loading: false }
                });

                if ( this.state.loadedCount >= 16 ) {
                    this.setState((state) => {
                        return { hasMore: false }
                    });
                }        
            }, 2000);
        }
    }

    componentWillUnmount() {
        if ( this.timer ) clearTimeout( this.timer );
    }

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
         
        let products = getProductsByCategory(getNewProducts(getProductsByDemo(this.props.products, "demo5")), ["Clothing", "Handbags", "Bags",  "Shoes", "Boots", "Accessories"]);

        return(
            <div className="container pt-6 new-arrivals">
                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                    <div className="heading heading-center mb-3">
                        <h2 className="title">New Arrivals</h2>

                        <TabList className="nav nav-pills justify-content-center" role="tablist">
                            { _data.demo5.arrivalCategories.map(( cat, index ) =>
                                <Tab className="nav-item" key={ `arrival_tab_${ index }` }>
                                    <span className="nav-link">{ cat }</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>

                    <div className="tab-content">
                        { _data.demo5.arrivalCategories.map((cat, index1) =>
                            <TabPanel key={ `arrival_tabpanel_${index1}` }>
                                <div className="row justify-content-center">
                                    { getProductsByCategory(products.slice(0, this.state.loadedCount), cat).map((item, index) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index + item.name }>
                                            <Product 
                                                product={ item }
                                                key = {index + item.name} 
                                                onAddToCartClick = {addToCart} 
                                                onToggleWishlistClick = { toggleWishlist } 
                                                onAddToCompareClick = { addToCompare }  
                                                showQuickViewModal = { showQuickViewModal } 
                                            />
                                        </div>
                                    ) }
                                </div>
                            </TabPanel>
                        ) }
                    </div>

                    <div className="more-container text-center mt-1 mb-3">
                        {
                            this.state.hasMore ?
                                <button className="btn btn-outline-primary-2 btn-round btn-more" onClick = { this.loadMore  }><span>Load more</span>
                                    { this.state.loading ?
                                        <i className="icon-refresh load-more-rotating"></i> : ''
                                    }
                                </button>
                            : ''
                        }
                    </div>
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( NewCollection );
