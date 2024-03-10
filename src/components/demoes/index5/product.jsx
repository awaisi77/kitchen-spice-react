import React from 'react';
import { connect } from 'react-redux'; 

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product, type = 1, adClass="" } = this.props;

        return(
            product ?    
            <div className={ `product product-2 ${adClass}` }>
                <figure className="product-media">
                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn('btn-product-icon btn-wishlist btn-expandable') }
                    </div>
  
                    <div className="product-action product-action-transparent">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    { type === 1 ?
                        this.showProductCatSection() : ''
                    }
                    { this.showProductName() }
                    { this.showProductPrice() }
                    { this.showProductVariants('rgb') }
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