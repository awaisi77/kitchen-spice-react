import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

import Product from './product';
import { productSlider } from './settings';

import { getProductsByCategory, getProductsByDemo, getTrendyProducts } from '../../../services';
import { addToCart, toggleWishlist } from '../../../actions';

import _data from '../../../mock_data/data.json';

class TrendyCollection extends Component {

    render() {
         
        let products = getProductsByDemo( this.props.products, "demo2" );
        console.log('products : ',products);
        const { addToCart, toggleWishlist } = this.props;
        
        return(
            <Tabs defaultIndex={ 0 }  selectedTabClassName="show" onSelect={ index => {} }>
                <div className="container">
                    <div className="heading heading-center mb-3">
                        <h2 className="title-lg">Trendy Products</h2>

                        <TabList className="nav nav-pills justify-content-center" role="tablist">
                            { _data.demo2.categories.map( ( cat, index ) =>
                                <Tab className="nav-item" key={ index }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>

                    { _data.demo2.categories.map( ( cat , index ) =>
                        <TabPanel key={ index }>
                            <OwlCarousel  adClass="owl-simple carousel-with-shadow" carouselOptions={ productSlider  }>
                                {  getProductsByCategory( getTrendyProducts( products ), cat ).map( ( item, index ) => 
                                    <Product product={ item } 
                                        onAddToCartClick={ addToCart }
                                        onToggleWishlistClick={ toggleWishlist } 
                                        key={ `${cat}_${index}` }
                                    />
                                ) }
                            </OwlCarousel>
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
) ( TrendyCollection );
