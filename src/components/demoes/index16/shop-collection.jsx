import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { shopSlider } from './settings';

import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../../actions';
import { getNewProducts, getProductsByDemo } from '../../../services';

class ShopCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getNewProducts(getProductsByDemo(this.props.products, "demo16"));
            
        return (
            <OwlCarousel adClass="owl-simple"  carouselOptions={ shopSlider  }>
                { products.map(( item, index ) => 
                    <Product product={ item }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare} )( ShopCollection );