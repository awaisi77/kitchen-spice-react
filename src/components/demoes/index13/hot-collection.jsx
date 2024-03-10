import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import Product from './product';
import OwlCarousels from '../../features/owl-carousel';

import {
    getProductsByCategory,
    getTopSellingProducts,
    getProductsByDemo
} from '../../../services';


import { 
    addToCart, 
    toggleWishlist, 
    addToCompare, 
    showQuickViewModal
} from '../../../actions';

import data from '../../../mock_data/data';

import { productSlider } from './settings';

class HotCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props; 

        let products = getTopSellingProducts(getProductsByDemo(this.props.products, "demo13"));

        return(
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-flex heading-border mb-3">
                    <div className="heading-left">
                        <h2 className="title">Hot Deals Products</h2>
                    </div>

                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            { data.demo13.productCategories.map((cat, index)=>
                                <Tab className="nav-item" key={ `deal_tab_${index}` }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>
                </div>
                
                { data.demo13.productCategories.map((cat, index) =>
                    <TabPanel key={ `deal_${index}` }>
                        <OwlCarousels adClass="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                            { getProductsByCategory(products, cat).map((item, index) => 
                                <Product 
                                    product={ item }
                                    key={ index + item.name} 
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                            ) }
                        </OwlCarousels>
                    </TabPanel>
                ) }
            </Tabs>
        )
    }
}

export const mapStateToProps = (state,props) =>{
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } ) (HotCollection);