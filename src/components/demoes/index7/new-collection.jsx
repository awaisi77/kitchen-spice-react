import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'; 

import Product from './product';

import { getProductsByCategory } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';

class NewCollection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loadedCount: 10,
            hasMore: true,
            loading: false
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        // fake async api. products should be fetched from backend
        if ( this.state.loadedCount < 20 ) {
            this.setState((state) => {
                return { loading: true } ;
            })

            this.timer = setTimeout(() => {
                this.setState((state) => {
                    return { loadedCount: this.state.loadedCount + 5, loading: false }
                });

                if ( this.state.loadedCount >= 20 ) {
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

        let products = getProductsByCategory(this.props.products.slice(124, 300), ["Women", "Men"]);

        return(
            <React.Fragment>
                <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                    <div className="heading heading-center mb-3">
                        <h2 className="title">NEW ARRIVALS</h2>

                        <TabList className="nav nav-pills justify-content-center" role="tablist">
                            {
                                _data.demo7.categories.map(( item, index ) =>
                                <Tab className="nav-item" key={ item.key  }>
                                    <span className="nav-link">{ item.value }</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>

                    { _data.demo7.categories.map((item, index) =>
                        <TabPanel key={ item.key }>
                            <div className="products">
                                <div className="row justify-content-center">
                                    { 
                                        getProductsByCategory(products.slice(0, this.state.loadedCount), item.key).map(( product, index1 ) => 
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ product.id + product.name  }>
                                            <Product 
                                                product={ product } 
                                                onAddToCartClick={ addToCart } 
                                                onToggleWishlistClick={ toggleWishlist } 
                                                onAddToCompareClick={ addToCompare }  
                                                showQuickViewModal={ showQuickViewModal } 
                                            />
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </TabPanel>
                    ) }
                </Tabs>

                <div className="more-container text-center mt-2">
                    {
                        this.state.hasMore ?
                            <button className="btn btn-outline-dark-3 btn-more" onClick = { this.loadMore  }><span>Load more</span>
                                { this.state.loading ?
                                    <i className="icon-refresh load-more-rotating"></i> : 
                                    <i className="icon-long-arrow-right"></i>
                                }
                            </button>
                        : ''
                    }
                </div>
            </React.Fragment>
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
