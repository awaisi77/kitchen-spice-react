import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { getProductsByCategory, getFeaturedProducts, getProductsByDemo } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';


class FeaturedCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getFeaturedProducts(getProductsByDemo(this.props.products, "demo7"));

        return (
            <Tabs defaultIndex={ 0 } selectedTabClassName="show"> 
                <div className="heading heading-center mb-3">
                    <h2 className="title">FEATURED PRODUCTS</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        {
                            _data.demo7.categories.map(( item, index ) =>
                            <Tab className="nav-item" key={ item.key  }>
                                <span className="nav-link">{ item.value }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                {_data.demo7.categories.map(( item, index ) =>
                    <TabPanel key={ item.key }>
                        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                            { getProductsByCategory(products, item.key).map(( item, index ) => 
                                <Product 
                                    product={ item } 
                                    key={ index + item.name }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } 
                                />
                            ) }
                        </OwlCarousel>
                    </TabPanel>
                ) }
            </Tabs>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( FeaturedCollection );