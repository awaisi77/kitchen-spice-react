import React, { Component } from 'react';
import { connect } from 'react-redux';

import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getProductsByDemo } from '../../../services';

class NewCollection extends Component {    
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getProductsByDemo(this.props.products, "demo12");

        return(
            <OwlCarousel adClass="owl-simple"  carouselOptions={ productSlider  }>
                {products.map((product, index) =>
                    <Product 
                        product={ product } 
                        key={ index } 
                        onAddToCartClick={ addToCart }  
                        onToggleWishlistClick={ toggleWishlist } 
                        onAddToCompareClick={ addToCompare } 
                        showQuickViewModal={ showQuickViewModal } />
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( NewCollection );
