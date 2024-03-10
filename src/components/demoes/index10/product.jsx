import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import BaseProduct from '../../features/product/common/base-product';
import { rendererTwo } from '../../common/countdown/renderer';

// import Utils
import { findIndex, hoverIntent } from '../../../utils/utils';


class Product extends BaseProduct{
    componentDidMount() {
        hoverIntent();
    }

    render(){
        const { product, adClass="" } = this.props;

        return(
            product ?  
            <div className={ `product product-3 text-center ${adClass}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-primary">New</span> : '' }
                    { product.top ? <span className="product-label label-primary">Top</span> : '' }
                    { product.discount ? <span className="product-label label-primary">Sale</span> : '' }
                    { product.discount ? <span className="product-label label-sale">{product.discount}% off</span> : '' }
                    { 0 === product.stock ? <span className="product-label label-primary">Out Of Stock</span> : '' }

                    { this.showProductImgSection() }

                    {0 < product.discount && product.until ?
                    <div className="product-countdown-container">
                        <span className="product-contdown-title">offer ends in:</span>
                        <div className="product-countdown countdown-compact">
                            <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererTwo } />
                        </div>
                    </div> : ''}

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice('','Now') }
                </div>
 
                <div className="product-footer">
                    { this.showProductRating() }
                    { this.showProductVariants('rgb') }
                    <div className="product-action">
                        { this.showAddToCartBtn() }
                        { this.showQuickViewBtnWithIcon() }
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