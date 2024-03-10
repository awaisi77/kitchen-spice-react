import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist, showQuickViewModal } from '../../../actions';
import { getRecommendedProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, showQuickViewModal } = this.props;

       // let products = getRecommendedProducts(getProductsByDemo(this.props.products, "demo22"));
        const { products } = this.props;
        console.log('TrendyCollection@render product:',products)
        return (
            <div className="row products just-action-icons-sm ">
                {
                    products.slice(0,10).map( ( item, index ) =>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                            <Product product={ item }
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist }
                                showQuickViewModal={ showQuickViewModal } />
                        </div>    
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( TrendyCollection );