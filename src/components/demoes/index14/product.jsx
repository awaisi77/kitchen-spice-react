import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import BaseProduct from '../../features/product/common/base-product';
import { rendererOne } from '../../common/countdown/renderer';

// import Utils
import { findIndex } from '../../../utils/utils';


class Product extends BaseProduct{

    render(){
        const { product } = this.props;

        return(
            product ?  
            <div className="product text-center">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { 0 < product.discount && product.until ?
                        <div className="product-countdown" id={ product.id  }><Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } /></div> 
                        : '' 
                    }

                    { this.showProductImgSection() }


                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                        { this.showQuickViewBtnWithIcon("btn-product-icon btn-quickview") }
                        { this.showAddToCompareBtn("btn-product-icon btn-compare") }
                    </div>

                    <div className="product-action product-action-transparent">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice( 'Was' ) }
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