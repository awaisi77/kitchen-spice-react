import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { trendingSlider } from './settings';

import _data from '../../../mock_data/data.json';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByCategory, getTopSellingProducts, getProductsByDemo } from '../../../services';

class TopCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
        
        let products = getTopSellingProducts( getProductsByDemo( this.props.products, "demo3" ) );
        
        return (
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Top Selling Products</h2>
                    </div>

                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            { _data.demo3.categories.map(( cat, index )=>
                                <Tab className="nav-item" key={ `Tab1-${index}` }>
                                    <span className="nav-link">{ cat.name }</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                </div>

                { _data.demo3.categories.map((cat, index)=>
                    <TabPanel key={ `tabpanel1-${index}` }>
                        <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider  }>
                            { getProductsByCategory( products, cat.name).map(( item, index ) => 
                                <Product 
                                    product={ item } 
                                    key={ index } 
                                    colorType="rgb" 
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } 
                                    type={ 3 }
                                />
                            ) }
                        </OwlCarousel>
                    </TabPanel>
                ) }
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