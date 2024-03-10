import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct {

   render() {
        const { product } = this.props;

        return (
            product?
            <div className={ `product product-11 text-center ${ this.props.style ? this.props.style : ''}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">NEW</span> : '' }
                    { product.discount ? <span className="product-label label-sale">{product.discount}% OFF</span> : '' }
                    { (0 === product.stock) ? <span className="product-label label-out">OUT OF STOCK</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist") }
                    </div>
                </figure>
                
                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice() }
                    { this.showProductRating() }
                    { this.showProductVariants('rgb') }
                </div>

                <div className="product-action">
                    { this.showAddToCartBtn("btn-product btn-cart") }
                </div>
            </div> : ''
        );
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    let wishlist = false;
    if ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 )
        wishlist = true;
    return {
        wishlist: wishlist
    };
}

export default connect( mapStateToProps )(Product);