import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, showQuickViewModal } from '../../../actions';
import { getTopSellingProducts, getProductsByDemo } from '../../../services';

class BestCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, showQuickViewModal } = this.props;

        let products = getTopSellingProducts(getProductsByDemo(this.props.products, "demo24"));

        return (
            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow text-center best-collection" carouselOptions={ productSlider }>
                {
                    products.map( ( item, index ) => 
                        <Product product={ item }
                            onAddToCartClick={ addToCart } 
                            onToggleWishlistClick={ toggleWishlist }
                            showQuickViewModal={ showQuickViewModal } 
                            key={ index }/>  
                    )
                }
            </OwlCarousel>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( BestCollection );