import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByCategory, getNewProducts, getProductsByDemo } from '../../../services';
import _data from '../../../mock_data/data.json';

class NewCollection extends Component {    
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getNewProducts(getProductsByDemo(this.props.products, "demo10"));

        return(
            <Tabs className="container" selectedTabClassName="show">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg">New Arrivals</h2>
                    <TabList className="nav nav-pills justify-content-center">
                            {_data.demo10.categories.map((cat, index) =>
                                <Tab className="nav-item" key={ index }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                    </TabList>
                </div>
                <div className="tab-content tab-content-carousel tab-pane-shadow">
                    {_data.demo10.categories.map(( cat, index ) =>
                        <TabPanel key={ index }>
                            <OwlCarousel adClass="owl-simple carousel-equal-height" carouselOptions={ productSlider  }>
                                {
                                    getProductsByCategory( products, cat ).map( ( item, index ) => 
                                        <Product product={ item}
                                            adClass="text-center"
                                            key={ index + item.name}
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( NewCollection );
