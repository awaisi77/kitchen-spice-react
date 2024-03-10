import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider3, productSlider4 } from './settings';

import { addToCart, toggleWishlist } from '../../../actions';
import { getTopSellingProducts, getProductsByDemo, getRecommendedProducts } from '../../../services';

class BestColllection extends Component {
    render() {
        const { type, addToCart, toggleWishlist } = this.props;
        let products;

        if ( type === "best" ) 
            products = getTopSellingProducts(getProductsByDemo(this.props.products, "demo20"));
        else 
            products = getRecommendedProducts(getProductsByDemo(this.props.products, "demo20"));
            
        return (
            <OwlCarousel adClass="carousel-equal-height owl-simple" carouselOptions={ type === "best" ? productSlider3 : productSlider4  }>
                { products.map(( item, index ) => 
                    <Product product={ item }
                        key={ index }
                        onAddToCartClick={ addToCart } 
                        onToggleWishlistClick={ toggleWishlist } /> 
                ) }
            </OwlCarousel>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( BestColllection );