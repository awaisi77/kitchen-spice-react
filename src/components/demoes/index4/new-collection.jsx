import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'; 

import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { getProductsByCategory, getProductsByDemo, getNewProducts } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';

class NewCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
         
        let products = getNewProducts(getProductsByDemo(this.props.products, "demo4"));

        return(
            <div className="container new-arrivals">
                <Tabs selectedTabClassName="show" className="just-action-icons-sm">
                    <div className="heading heading-flex mb-3">
                        <div className="heading-left">
                            <h2 className="title">New Arrivals</h2>
                        </div>
                        <div className="heading-right">
                            <TabList className="nav nav-pills nav-border-anim justify-content-center">
                                {
                                    _data.demo4.categories.map ( ( item, index ) => 
                                        <Tab className="nav-item" key={ item.id }>
                                            <span className="nav-link">{ item.name}</span>
                                        </Tab>
                                    )
                                }
                            </TabList>
                        </div>
                    </div>
                    {
                        _data.demo4.categories.map ( ( item, index ) => 
                            <TabPanel key={ `${ item.id}-tab-product` }>
                                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                                    { getProductsByCategory( products, item.name ).map((item, index) => 
                                        <Product product={ item }
                                            key={ index} 
                                            onAddToCartClick={ addToCart } 
                                            onToggleWishlistClick={ toggleWishlist } 
                                            onAddToCompareClick={ addToCompare }  
                                            showQuickViewModal={ showQuickViewModal } />
                                    ) }
                                </OwlCarousel>
                            </TabPanel>
                        )
                    }
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
