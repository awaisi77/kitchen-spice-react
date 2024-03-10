import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getNewProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getNewProducts(getProductsByDemo(this.props.products, "demo18"));

        return (
            products.map( (item, index) => 
                <div className="col-6 col-md-4" key={ index }>
                    <Product 
                        product={ item }
                        onAddToCartClick={ addToCart } 
                        onToggleWishlistClick={ toggleWishlist } 
                        onAddToCompareClick={ addToCompare }  
                        showQuickViewModal={ showQuickViewModal } />
                </div>    
            )
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );