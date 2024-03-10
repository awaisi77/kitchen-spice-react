import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist } from '../../../actions';
import { getTopSellingProducts, getProductsByDemo } from '../../../services';

class BestCollection extends Component {
    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getTopSellingProducts(getProductsByDemo(this.props.products, "demo21"));

        return (
            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                { products.map((product, index) =>
                    <Product
                        key={ `best_${index}` }
                        product={ product }
                        onAddToCartClick={ addToCart }
                        onToggleWishlistClick={ toggleWishlist }
                    />
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

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( BestCollection );