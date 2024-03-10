import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { getFeaturedProducts, getSaleProducts, getTopRatingProducts, getProductsByDemo } from '../../../services';
import { addToCart, toggleWishlist } from '../../../actions';


class SpecialCollection extends Component {

    render() {
        const { products, addToCart, toggleWishlist } = this.props;

        let featuredProducts = getFeaturedProducts(getProductsByDemo( products, "demo1" ));
        
        return(
            <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
                <div className="container">
                    <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                        <Tab className="nav-item">
                            <span className="nav-link">Featured</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">On Sale</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Top Rated</span>
                        </Tab>
                    </TabList>
                </div>
                <div className ="container-fluid">
                    <TabPanel>
                        <OwlCarousel  adClass="owl-simple featrued-slider carousel-with-shadow "
                                carouselOptions={ productSlider  }>
                            { featuredProducts.map( ( item, index ) => 
                                <Product product={ item } 
                                    onAddToCartClick={ addToCart }  
                                    onToggleWishlistClick={ toggleWishlist } 
                                    key={ index }/>
                            ) }
                        </OwlCarousel>
                    </TabPanel>
                    <TabPanel>
                        <OwlCarousel  adClass="owl-simple carousel-with-shadow"
                                carouselOptions={ productSlider  }>

                            { getSaleProducts( featuredProducts ).map( ( item, index ) => 
                                <Product product={ item } 
                                    onAddToCartClick={ addToCart }  
                                    onToggleWishlistClick={ toggleWishlist } 
                                    key={ index }/>
                            ) }

                        </OwlCarousel>
                    </TabPanel>
                    <TabPanel>
                        <OwlCarousel  adClass="owl-simple carousel-with-shadow"
                                carouselOptions={ productSlider  }>

                            { getTopRatingProducts( featuredProducts, 6 ).map( ( item, index ) => 
                                <Product product={ item } 
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    key={ index }/>
                            ) }

                        </OwlCarousel>
                    </TabPanel>
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
) ( SpecialCollection );
