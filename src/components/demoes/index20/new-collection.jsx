import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import ProductTwo from './product-2';

import { addToCart, toggleWishlist } from '../../../actions';
import { productSlider1, productSlider2 } from './settings';
import { getNewProducts, getProductsByDemo, getDealProducts } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getNewProducts(getProductsByDemo(this.props.products, "demo20"));
        let big_products = getDealProducts(getProductsByDemo(this.props.products, "demo20"), "big");

        return (
            <React.Fragment>
                <div className="col-xl-4">
                    <OwlCarousel  adClass="carousel-equal-height owl-simple" carouselOptions={ productSlider2 }>
                        { big_products.map(( item, index ) => 
                            <ProductTwo product={ item }
                                key={ index }
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist } /> 
                        ) }
                    </OwlCarousel>

                    <div className="mb-3 d-xl-none"></div>
                </div>
                <div className="col-xl-8">
                    <div className="block-wrapper ">
                        <OwlCarousel  adClass="carousel-equal-height owl-simple" carouselOptions={ productSlider1 }>
                            { products.map(( item, index ) => 
                                <Product product={ item }
                                    key={ index }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } /> 
                            ) }
                        </OwlCarousel>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( TrendyCollection );