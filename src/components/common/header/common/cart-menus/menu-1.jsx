import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartCount } from '../../../../../services';
import { removeFromCart } from '../../../../../actions';
import { safeContent } from '../../../../../utils/utils';

class CartMenu extends Component {

    render() {
        const { cartlist, removeFromCart } = this.props;
        console.log('Cart menu-1.jsx',cartlist)
        return (
            // no-label
            <div className="dropdown cart-dropdown">
                <a href={ `${process.env.PUBLIC_URL}/shop/cart` } className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{getCartCount(cartlist) }</span>
                </a>
                <div className={ `dropdown-menu dropdown-menu-right ${ cartlist.length === 0 ? 'text-center' : '' }` } style = { cartlist.length === 0 ? {width: '200px'} : {} }>
                    <div className="dropdown-cart-products">
                        { cartlist.map((item, index) => (
                            <div className="product" key={ index }>
                                <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } dangerouslySetInnerHTML={ safeContent(item.name) }></Link>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">{ item.qty}</span>
                                        x ${ item.discount ? item.variations[0].sell_price_inc_tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}):item.variations[0].sell_price_inc_tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${item.id}` } className="product-image">
                                        <img src={ 'https://pos.kitchennspicemarket.com/pos/public/uploads/img' + '/' + item.image } data-oi={ 'https://pos.kitchennspicemarket.com/pos/public/uploads/img'+ '/' + item.image } alt="product" />
                                    </Link>
                                </figure>
                                <button className="btn-remove" title="Remove Product" onClick={ () => removeFromCart(item.id) }><i className="icon-close"></i></button>
                            </div>
                        )) }
                    </div>

                    { cartlist.length === 0 ?
                        <p>Your Cart is Empty.</p> : ''
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartlist: state.cartlist.cart ? state.cartlist.cart : []
    }
}

export default connect(mapStateToProps, {removeFromCart})(CartMenu);