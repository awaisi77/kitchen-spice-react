import React from 'react';
import { connect }  from 'react-redux';

import { findIndex } from '../../../utils/utils';

import BaseProduct from '../../features/product/common/base-product';

class Product extends BaseProduct{
    render(){
        const { product, adClass="" } = this.props;

        return(
            product ?  
            <div className={ `product product-2 ${adClass}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-circle label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-circle label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-circle label-sale">Sale</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                    </div>

                    <div className="product-action product-action-dark">
                        { this.showAddToCartBtn() }
                        { this.showQuickViewBtnWithIcon() }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
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