import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{

    render(){
        const { product } = this.props;
        return(
            product ?  
            <div className="product product-7 text-center">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new label-circle">New</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out label-circle">Out of Stock</span> : '' }
                    { product.top ? <span className="product-label label-circle label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-circle label-sale">Sale</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                        { this.showQuickViewBtnWithIcon("btn-product-icon btn-quickview", "") }
                    </div>

                    <div className="product-action">
                        { this.showAddToCartBtn() }
                    </div>

                </figure>

                <div className="product-body">
                    { this.showProductName() }
                    { this.showProductPrice() }
                    { this.showProductRating() }
                    { this.showProductVariants("rgb") }
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