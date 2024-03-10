import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getDealProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    render() {
        
        const { type, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo23"), type);

        return (
            <div className="products col-lg-6 col-md-7 col-12">
                { products.map(( product, index ) =>
                     <div className="col-6" key={ product.name }>
                        <Product
                            product={ product }
                            onAddToCartClick={ addToCart } 
                            onToggleWishlistClick={ toggleWishlist } 
                            onAddToCompareClick={ addToCompare }  
                            showQuickViewModal={ showQuickViewModal } 
                        />
                    </div>
                ) }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );