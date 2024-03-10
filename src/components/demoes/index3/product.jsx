import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product, type = 1, adClass="" } = this.props;

        return(
            product ?  
            <div className={ `product product-2 ${adClass}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-circle label-new">New</span> : '' }
                    { product.top && type !== 3 ? <span className="product-label label-circle label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-circle label-sale">Sale</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                    </div>

                    <div className="product-action product-action-dark">
                        { this.showAddToCartBtn("btn-product btn-cart" , type === 1 ? "add to cart" : "") }
                        { this.showQuickViewBtnWithIcon("btn-product btn-quickview" , type === 1 ? "quick view" : "") }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    {0 === product.stock?
                        <div className="product-price">
                            <span className="out-price">${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                            <span className="out-text">Out of Stock</span>
                        </div> :
                     0 < product.discount? 
                        <div className="product-price">
                            <span className="new-price">${product.salePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                            <span className="old-price">Was ${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                        </div> : 
                        <div className="product-price">${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</div>
                    }
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