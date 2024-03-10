import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product, type = 1} = this.props;

        return(
            product ?  
            <div className="product product-7 text-center">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out">Out of Stock</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { type === 1 && product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { type === 2 && product.discount ? <span className="product-label label-sale">{product.discount}% OFF</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                        { this.showQuickViewBtnWithIcon("btn-product-icon btn-quickview") }
                    </div>

                    <div className="product-action product-action-transparent">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductName() }
                    { this.showProductPrice('Was','Now') }
                    { this.showProductRating() }
                    { this.showProductVariants("model") }
                </div>
            </div> : ''           
        )
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