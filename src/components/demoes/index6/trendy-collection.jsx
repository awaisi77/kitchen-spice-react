import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';
import { getProductsByCategory, getTrendyProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo6"));

        return (
            <Tabs className="container" selectedTabClassName="show">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Trending</h2>
                    <TabList className="nav nav-pills justify-content-center">
                        { _data.demo6.categories.map(( cat, index ) =>
                            <Tab key={ index } className="nav-item">
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    { _data.demo6.categories.map(( cat, index ) =>
                        <TabPanel key={ index }>
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" 
                                carouselOptions={ productSlider  }>
                                {
                                    getProductsByCategory( products, cat ).map( ( item, index ) => 
                                    <Product product={ item}
                                        adClass="text-center"
                                        key={ index + item.name }
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare }  
                                        showQuickViewModal={ showQuickViewModal } 
                                    />
                                    )
                                }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );