import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

// import Custom Components
import OwlCarousel from '../../features/owl-carousel';

import Product from './product';
import { productSlider2 } from './settings';

// import Actions & Services & data
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByCategory, getTrendyProducts, getProductsByDemo } from '../../../services';

import _data from '../../../mock_data/data';

class TrendyCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo14"));

        return(
            <div className="bg-lighter trending-products">
                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                    <div className="heading heading-flex mb-3">
                        <div className="heading-left">
                            <h2 className="title">Trending Today</h2>
                        </div>

                        <div className="heading-right">
                            <TabList className="nav nav-pills justify-content-center" role="tablist">
                                { _data.demo14.trendyCategories.map((cat, index)=>
                                    <Tab className="nav-item" key={ `Tab1-${index}` }>
                                        <span className="nav-link">{cat}</span>
                                    </Tab>
                                ) }
                            </TabList>
                        </div>
                    </div>
                    <div className="tab-content tab-content-carousel">                
                        { _data.demo14.trendyCategories.map((cat, index)=>
                            <TabPanel key={ `tabpanel1-${index}` }>
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider2  }>
                                    { getProductsByCategory(products,cat).map((item, index) => 
                                        <Product product={ item }
                                            key={ index} 
                                            onAddToCartClick={ addToCart } 
                                            onToggleWishlistClick={ toggleWishlist } 
                                            onAddToCompareClick={ addToCompare }  
                                            showQuickViewModal={ showQuickViewModal } />
                                    ) }
                                </OwlCarousel>
                            </TabPanel>
                        ) }
                    </div>
                </Tabs>
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}


export default (connect) (mapStateToProps, {addToCart, toggleWishlist, addToCompare, showQuickViewModal}) (TrendyCollection);