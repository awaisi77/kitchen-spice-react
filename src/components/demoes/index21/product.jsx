import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { safeContent, findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product, type = 1 } = this.props;

        return(
            product ?  
            <div className="product demo21">
                <figure className="product-media">
                    { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }
                    { product.new ? <span className="product-label label-new">New</span> : '' }

                    { this.showProductImgSection() }
                </figure>

                <div className="product-body text-center">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice( 'Was' ) }
                    { this.showProductRating() }

                    <div className="product-action"> 
                        { this.showAddToCartBtn() }
                        { 
                            type === 1 ?
                            <button  className={ `btn-addtolist ${this.props.wishlist ? 'wishlisted' : ''}` } onClick={ this.toggleWishList }>
                                <span dangerouslySetInnerHTML={ safeContent( this.props.wishlist ? "&nbsp;go to wishlist" : "&nbsp;add to wishlist" ) }></span>
                            </button>
                            : ""
                        }
                    </div>
                    { 
                        type === 2 ?
                        <button className={ `btn-addtolist ${this.props.wishlist ? 'wishlisted' : ''}` } onClick={ this.toggleWishList }>
                            <span dangerouslySetInnerHTML={ safeContent( this.props.wishlist ? "&nbsp;go to wishlist" : "&nbsp;add to wishlist" ) }></span>
                        </button>
                        : ""
                    }
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