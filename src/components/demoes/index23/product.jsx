import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product } = this.props;

        return(
            product ?  
            <div className="product product-9 text-center">
                <figure className="product-media">
                    { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }
                    { product.new ? <span className="product-label label-new">New</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                        { this.showQuickViewBtnWithIcon("btn-product-icon btn-quickview") }
                    </div>
                </figure>

                <div className="product-body" style = {{zIndex: '10'} }>
                    <div className="product-action">
                        { this.showAddToCartBtn() }
                    </div>

                    <div className="product-intro">
                        { this.showProductCatSection() }
                        { this.showProductName() }
                        { this.showProductPrice('Was') }
                    </div>

                    <div className="product-detail">
                        { this.showProductRating() }
                        { this.showProductVariants( 'default' ) }
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