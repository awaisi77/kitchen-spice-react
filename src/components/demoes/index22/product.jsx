import React from 'react';
import connect from 'react-redux/lib/connect/connect';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product } = this.props;
        console.log('Product@beforeRender:',product)
        return(
            product ?  
            <div className="product product-3 text-center">
                <figure className="product-media">
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                    </div>
                </figure>

                <div className="product-body">
                  {/*  { this.showProductCatSection() }*/}
                    { this.showProductName() }
                 {/*   { this.showProductPrice('Was') }*/}
                </div>

                <div className="product-footer">
                    { this.showProductRating() }
                    { this.showProductVariants("rgb") }

                    <div className="product-action product-action-transparent">
                        {
                            this.showAddToCartBtn("btn-product btn-cart pl-0 pr-0")
                        }
                        { this.showQuickViewBtnWithIcon("btn-product btn-quickview pl-0 pr-0") }
                    </div>
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