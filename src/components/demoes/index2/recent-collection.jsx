import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import Product from './product';

import { getProductsByCategory } from '../../../services';
import { addToCart, toggleWishlist } from '../../../actions';
import _data from '../../../mock_data/data.json';

class RecentCollection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadedCount: 8,
            loading: false,
            hasMore: true
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
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
        if ( this.timer )
            clearTimeout(this.timer);
    }
    
    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getProductsByCategory(this.props.products, ["Furniture", "Decoration", "Lighting"]);
        
        return(
            <Tabs defaultIndex={ 0 } selectedTabClassName="show" onSelect={ index => {} }>
                <div className="container">
                    <div className="heading heading-center mb-6">
                        <h2 className="title">Recent Arrivals</h2>

                        <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            { _data.demo2.categories.map( ( cat, index ) =>
                                <Tab className="nav-item" key={ index }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                    
                    { _data.demo2.categories.map( ( cat , index ) =>
                        <TabPanel key={ index }>
                            <div className="products">
                                <div className="row justify-content-center">
                                    { getProductsByCategory( products.slice(0,this.state.loadedCount), cat ).map( (item, index) => 
                                        <div className="col-6 col-md-4 col-lg-3" key={ index  }>
                                            <Product product={ item } 
                                                style={ `mt-v3` } 
                                                onAddToCartClick={ addToCart }  
                                                onToggleWishlistClick={ toggleWishlist } 
                                                key={ index }
                                            />
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </TabPanel>
                    ) }

                    <div className="more-container text-center">
                        {
                            this.state.hasMore ?
                                <button className="btn btn-outline-darker btn-more" onClick = { this.loadMore  }><span>Load more products</span>
                                    { this.state.loading ?
                                        <i className="icon-refresh load-more-rotating"></i> :
                                        <i className="icon-long-arrow-down"></i>
                                    }
                                </button>
                            : ''
                        }
                    </div>
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
) ( RecentCollection );
