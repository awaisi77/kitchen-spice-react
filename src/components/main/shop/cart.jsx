import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { quantityInputs, isIEBrowser } from '../../../utils/utils';
import { changetQty, removeFromCart, changeShipping } from '../../../actions';
import style from '../../demoes/index22/style.scss';
import {toast} from "react-toastify";
import { Helmet } from 'react-helmet';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipping: this.props.shipping
        }
        this.onChangeShipping = this.onChangeShipping.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.goToCheckout = this.goToCheckout.bind(this);
    }

    componentDidMount() {
        quantityInputs();
        style.use();
    }

    onChangeShipping(val) {
        this.setState( { shipping: val } );
    }

    onChangeQty(e, product_id) {
        this.props.changetQty( product_id, e.currentTarget.querySelector('input[type="number"]').value );
    }

    goToCheckout(e) {
        if (this.props.cartlist.length > 0) {
            this.props.changeShipping(this.state.shipping);
        }
       else{
           e.preventDefault();
           toast.error("Please add items to cart before checkout.")
        }
    }

    render() {
        const { cartlist, total, removeFromCart } = this.props;
        const shippingPrice = { "free": 0, "standard": 10, "express": 20 };

        return (
            <div className="main">

                <Helmet>
                    <title>Kitchen & Spice Market | Cart</title>
                </Helmet>

                <PageHeader title="Shopping Cart" subTitle="Shop"/>
                <Breadcrumb title="Shopping Cart" parent1={ ["Shop","shop/sidebar/list"] }/>

                <div className="page-content">
                    <div className="cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            { cartlist.length > 0 ? 
                                                cartlist.map( (item, index) => 
                                                    <tr key={ index }>
                                                        <td className="product-col">
                                                            <div className="product">
                                                                <figure className="product-media">
                                                                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${ item.id}` }>
                                                                        <img src={ 'http://shopnew.demo.techno-genes.com/uploads/img'+ '/' + item.image } alt="Product"/>
                                                                    </Link>
                                                                </figure>

                                                                <h3 className="product-title">
                                                                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${ item.id}` }>{ item.name }</Link>
                                                                </h3>
                                                            </div>
                                                        </td>

                                                        <td className="price-col">
                                                            ${ 0 < item.discount ? 

                                                                item.variations[0].sell_price_inc_tax.toLocaleString( undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2} ) :

                                                            item.variations[0].sell_price_inc_tax.toLocaleString( undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2} )

                                                            }
                                                        </td>

                                                        <td className="quantity-col">
                                                            <div className="cart-product-quantity" onClick={ (e) => this.onChangeQty(e, item.id) }>
                                                                <input type="number" 
                                                                    className="form-control" 
                                                                    defaultValue={ item.qty } 
                                                                    min="1"
                                                                    max={ item.stock } 
                                                                    step="1" 
                                                                    data-decimals="0"
                                                                    required 
                                                                />
                                                            </div>
                                                        </td>

                                                        <td className="total-col">
                                                            {console.log('item',item)}
                                                            ${ item.sum.toLocaleString( undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2} ) }
                                                        </td>

                                                        <td className="remove-col">
                                                            <button className="btn-remove" onClick={ (e) => removeFromCart(item.id) }><i className="icon-close"></i></button>
                                                        </td>
                                                    </tr>
                                                )  :
                                                    <p className="pl-2 pt-1 pb-1"> No Products in Cart </p>
                                            }
                                            
                                        </tbody>
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount" style={ { minHeight: isIEBrowser() ? '40px' : 'auto' } }>
                                            <form action="#">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" required="" placeholder="coupon code"/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <button className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></button>
                                    </div>
                                </div>
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">Cart Total</h3>

                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>${ total.toLocaleString( undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2} ) }</td>
                                                </tr>
                                                <tr className="summary-shipping">
                                                    <td>Shipping:</td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" 
                                                                id="free-shipping" 
                                                                name="shipping" 
                                                                className="custom-control-input" 
                                                                onChange={ (e)=>this.onChangeShipping("free") }
                                                                defaultChecked={ "free" === this.props.shipping ? true: false }
                                                            />
                                                            <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                                        </div>
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" 
                                                                id="standard-shipping" 
                                                                name="shipping" 
                                                                className="custom-control-input"
                                                                onChange={ (e)=>this.onChangeShipping("standard") }
                                                                defaultChecked={ "standard" === this.props.shipping ? true: false }
                                                            />
                                                            <label className="custom-control-label" htmlFor="standard-shipping">Standard:</label>
                                                        </div>
                                                    </td>
                                                    <td>$10.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" 
                                                                id="express-shipping" 
                                                                name="shipping" 
                                                                className="custom-control-input"
                                                                onChange={ (e)=>this.onChangeShipping("express") }
                                                                defaultChecked={ "express" === this.props.shipping ? true: false }
                                                            />
                                                            <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                                                        </div>
                                                    </td>
                                                    <td>$20.00</td>
                                                </tr>

                                                <tr className="summary-shipping-estimate">
                                                    <td>Estimate for Your Country<br/> <a href={ `${process.env.PUBLIC_URL}/shop/dashboard` }>Change address</a></td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>
                                                        ${ ( total + shippingPrice[this.state.shipping] ).toLocaleString( undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2} ) }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <Link to={ `${process.env.PUBLIC_URL}/shop/checkout`} 
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                            onClick={this.goToCheckout}
                                        >
                                            PROCEED TO CHECKOUT
                                        </Link>
                                    </div>

                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></Link>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    cartlist: state.cartlist.cart,
    total: getCartTotal(state.cartlist.cart),
    shipping: state.cartlist.shipping
})

export default connect( mapStateToProps, { changetQty, removeFromCart, changeShipping } )( Cart );