import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown'; 

import { rendererOne } from '../../common/countdown/renderer';
// import Utils
import { safeContent, findIndex } from '../../../utils/utils';

class DealProduct extends Component {


    render() {
        const { product, type='label', colorType = "rgb", adClass="text-center", height="120", onToggleWishlistClick, onAddToCartClick, showQuickViewModal } = this.props;

        return(
            product ?  
            <div className={ `product product-10 product-lg ${adClass}` }>
                <figure className="product-media">
                    <span className="product-label label-deal">deal of the day</span>

                    { product.new ? <span className="product-label label-new">New</span> : '' }

                    { product.top ? <span className="product-label label-top">Top</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[0] } alt="Product desc" className="product-image" style={ {minHeight: height + "px"} }/>
                        { product.pictures[1] ? <img src={ process.env.PUBLIC_URL + '/' + product.pictures[1] } alt={ 1 } className="product-image-hover"/> : '' }
                    </Link>

                    <div className="product-action-vertical">
                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ () => showQuickViewModal(product.id) }>
                            { 'label' === type ? <span>quick view</span> : '' }
                        </button>
                    </div>
                </figure>

                { product.discount > 0 && product.until ? 
                    <div className="deal">
                        <div className="deal-countdown offer-countdown">
                            <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } />
                        </div>
                    </div> : ''
                }
                
                <div className="product-body">
                    <div className="product-intro">
                        <h3 className="product-title">
                            <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` } dangerouslySetInnerHTML={ safeContent(product.name) }></Link>
                        </h3>

                        { 0 === product.stock?
                            <div className="product-price">
                                <span className="out-price">${ product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                                <span className="out-text">Out of Stock</span>
                            </div> :
                        0 < product.discount? 
                            <div className="product-price">
                                <span className="new-price">${ product.salePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                                <span className="old-price">Was ${ product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                            </div> : 
                            <div className="product-price">${ product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</div>
                        }
                    </div>

                    <div className="product-detail">
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={ {width: product.ratings * 20 + '%' } }></div>
                            </div>
                            <span className="ratings-text">( {product.reviews} Reviews )</span>
                        </div>
                        
                        {product.variants?
                            ("model" === colorType  && product.variants[0].model) || product.variants[0].image ? 
                            <div className="product-nav product-nav-thumbs">
                                {product.variants.map((vari, i) => {
                                    return (
                                        <Link to="#" key={ i} className={ 0 === i?'active':'' }>
                                            <img src={ vari.model ? process.env.PUBLIC_URL + '/' + vari.model : process.env.PUBLIC_URL + '/' + vari.image } alt="product desc" />
                                        </Link>)
                                }) }
                            </div> : 

                            <div className="product-nav product-nav-dots">
                                {product.variants.map((vari, i) => 
                                    <Link to="#" key={ i} className={ 0 === i?'active':''} style={ {background: vari.rgb} }>
                                    </Link>
                                ) }
                            </div> 
                        : ''}
                    </div>
                     
                    <div className="product-action">
                        <button className="btn-cart" onClick={ product.stock > 0 ? ()=>onAddToCartClick(product , 1) : null  }>
                            { 'label' === type ? <span>Add to Cart</span> : '' }
                        </button>
                        
                        <button  className={ `btn-product-icon btn-wishlist ${ this.props.wishlist ? 'added-to-wishlist':''}`} onClick={ ()=> onToggleWishlistClick(product, this.props.wishlist) } title={ this.props.wishlist ? "Remove from wishlist" : "Add to wishlist" }>
                            <span>{ this.props.wishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
                        </button>
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

export default connect( mapStateToProps )( DealProduct );