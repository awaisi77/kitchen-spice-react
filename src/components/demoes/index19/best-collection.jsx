import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../../actions';
import { getRecommendedProducts, getProductsByDemo } from '../../../services';

class BestCollection extends Component {
    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getRecommendedProducts(getProductsByDemo(this.props.products, "demo19"));
            
        return (
            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow best-collection" carouselOptions={ productSlider } >
                { products.map(( product, index ) =>
                    <Product
                        type={ 2 }
                        key={`consoles_${index}`}
                        product={ product }
                        onAddToCompareClick={ addToCompare }
                        onToggleWishlistClick={ toggleWishlist }
                        showQuickViewModal={ showQuickViewModal }
                        onAddToCartClick={ addToCart }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare} )( BestCollection );