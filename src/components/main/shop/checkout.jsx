import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

import {getCartTotal} from '../../../services';
import style from "../../demoes/index22/style.scss";
import store from "../../../store";
import {
    outerLoading,
    emptyCart,
    changetQty,
    removeFromCart,
    changeShipping,
    outerLoadEnd,
    outerLoadBegin
} from "../../../actions";
import moment from "moment";
import axios from "axios";
import {toast} from "react-toastify";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../../stripe";

import {loadStripe} from '@stripe/stripe-js';
import {spinner} from "../../../actions/spinner";
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe('pk_live_51JYyrbJnDWAcWGguttzJ2xjtVeXwU5HI43OK4xvzVGTWv9FrmbMSDjwYe23qIEJPjr07NZpHWpsfxE3q7ut1YGGs00vTKlEATG');

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                user: null
            },
            formCheckout: {
                name: null,
                streetAddress: null,
                appartment: null,
                town: null,
                state: null,
                postCode: null,
                phone: null,
                email: null,
                notes: null
            }
        }
    }

    UNSAFE_componentWillMount() {
        style.use();
        store.dispatch(outerLoading());
    }

    componentDidMount() {
        let item = document.querySelector("#checkout-discount-input");

        item.addEventListener("focus", function (e) {
            e.currentTarget.parentNode.querySelector("label").setAttribute("style", "opacity: 0");
        });

        item.addEventListener("blur", function (e) {
            let $this = e.currentTarget;
            if ($this.value.length !== 0) {
                $this.parentNode.querySelector("label").setAttribute("style", "opacity: 0");
            } else {
                $this.parentNode.querySelector("label").setAttribute("style", "opacity: 1");
            }
        });

        let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        console.log('localStorage:', user)
        let {data} = this.state
        data.user = user;
        this.setState({data});
        console.log('state', this.state)
    }

    handleInputChange = (e) => {
        console.log('Name of item', e.target.name);
        console.log('Name of item', e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        const {formCheckout} = {...this.state};
        // console.log('form input : ', formInput)
        console.log('value : ', e)
        formCheckout[name] = value;
        this.setState({
            formCheckout
        });
        // console.log('value  from event', value);
        console.log('state : ', this.state)

    }

    handleCheckout = async (e) => {
        store.dispatch(outerLoadBegin());
        const {formCheckout} = {...this.state};
        const {cartlist, total} = this.props;
        console.log('cartlist', cartlist);
        let {data} = {...this.state}
        let payload = {
            cart_total: 0,
            cart_quantity: 0,
            orders: null,
            instructions: null,
            addresses: null,
            order_source: "web",
            date: null,
            customer_id: data.user.hasOwnProperty('id') ? data.user.id : 2
        };
        let order = {};
        cartlist.map((item) => {
            console.log('item', item);
            let cartItm = {
                product_id: item.id,
                product_name: item.name,
                quantity: item.qty,
                tax: 0,
                total: item.sum,
                unit_price: item.variations[0].sell_price_inc_tax,
                unit_price_inc_tax: item.variations[0].sell_price_inc_tax,
                variation_id: item.variations[0].id,
                unit: item.unit.name,
                product_variation_id: item.variations[0].id,
                image: item.image,
            }
            console.log('cartItm', cartItm);
            order[item.variations[0].id] = cartItm;
            payload.cart_total = total;
            payload.cart_quantity = parseInt(payload.cart_quantity) + parseInt(item.qty);
        });
        payload.addresses = formCheckout.streetAddress ? formCheckout.streetAddress : 'Test Address';
        payload.instructions = formCheckout.notes ? formCheckout.notes : 'None';
        let date = new Date();
        payload.date = moment(date).format('MM/DD/YYYY');
        console.log('order:', order)

        payload.orders = order;
        const payloadFinal = {
            url: 'https://pos.kitchennspicemarket.com/pos/public/index.php/api/save-order-request',
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        console.log('FinalPayload:', JSON.stringify(payload))

        try {
            const response = await axios(payloadFinal);
            console.log(response)
            if (response.data.statusCode === 200 && response.data.status === true) {
                console.log(response)
                store.dispatch(outerLoadEnd());
                toast.success("Order placed successfully");

                this.props.emptyCart();
            } else {
                store.dispatch(outerLoadEnd());
                toast.error("Order not placed successfully");
            }
        } catch (err) {
            console.log('error', err)
            store.dispatch(outerLoadEnd());
            toast.error("Order not placed successfully");
        }
    }

    handleCheckoutGuest = async (e) => {
        store.dispatch(outerLoadBegin());
        const {formCheckout} = {...this.state};
        if (formCheckout.email !== null && formCheckout.phone !== null) {
            const {cartlist, total} = this.props;
            console.log('cartlist', cartlist);
            let {data} = {...this.state}
            let payload = {
                cart_total: 0,
                cart_quantity: 0,
                orders: null,
                instructions: null,
                addresses: null,
                order_source: "web",
                date: null,
                customer: null
            };
            let customer = {
                name: formCheckout.name,
                mobile: formCheckout.phone,
                email: formCheckout.email,
                city: formCheckout.town,
                country: formCheckout.state,
                zip_code: formCheckout.postCode,
                address_line_1: formCheckout.streetAddress
            };

            let order = {};
            cartlist.map((item) => {
                console.log('item', item);
                let cartItm = {
                    product_id: item.id,
                    product_name: item.name,
                    quantity: item.qty,
                    tax: 0,
                    total: item.sum,
                    unit_price: item.variations[0].sell_price_inc_tax,
                    unit_price_inc_tax: item.variations[0].sell_price_inc_tax,
                    variation_id: item.variations[0].id,
                    unit: item.unit.name,
                    product_variation_id: item.variations[0].id,
                    image: item.image,
                }
                console.log('cartItm', cartItm);
                order[item.variations[0].id] = cartItm;
                payload.cart_total = total;
                payload.cart_quantity = parseInt(payload.cart_quantity) + parseInt(item.qty);
            });
            payload.addresses = formCheckout.streetAddress ? formCheckout.streetAddress : 'Test Address';
            payload.instructions = formCheckout.notes ? formCheckout.notes : 'None';
            let date = new Date();
            payload.date = moment(date).format('MM/DD/YYYY');
            console.log('order:', order)
            console.log('FinalPayload:', payload)
            payload.orders = order;
            payload.customer = customer;
            const payloadFinal = {
                url: 'https://pos.kitchennspicemarket.com/pos/public/index.php/api/save-order-request-guest',
                method: 'POST',
                data: payload,
                headers: {
                    'Content-Type': 'application/json'
                },
            };
            try {
                const response = await axios(payloadFinal);
                console.log(response)
                if (response.data.statusCode === 200 && response.data.status === true) {
                    console.log(response)
                    store.dispatch(outerLoadEnd());
                    toast.success("Order placed successfully.");

                    this.props.emptyCart();
                    var path = window.location.protocol + '//' + window.location.host; // (or whatever)
                    window.location.href = path;

                } else {
                    store.dispatch(outerLoadEnd());
                    toast.error("Order not placed successfully.");
                }
            } catch (err) {
                console.log('error', err)
                store.dispatch(outerLoadEnd());
                toast.error("Order not placed successfully");
            }
        }
    }

    render() {
        const {cartlist, total} = this.props;
        const shippingPrice = {"free": 0, "standard": 10, "express": 20};
        const shippingObj = {"free": "Free shipping", "standard": "Standard", "express": "Express"};
        let {user} = this.state.data
        console.log('state:', this.state.data)
        console.log('user:', user)
        return (
            <div className="main">

                <Helmet>
                    <title>Kitchen & Spice Market | Cart</title>
                </Helmet>

                <PageHeader title="Checkout" subTitle="Shop"/>
                <Breadcrumb title="Checkout" parent1={["Shop", "shop/sidebar/list"]}/>
                <div className="page-content">
                    <div className="checkout">
                        <div className="container">
                            <div className="checkout-discount">
                                <form action="#" onSubmit={(e) => {
                                    e.preventDefault();
                                }}>
                                    <input type="text" className="form-control" required id="checkout-discount-input"/>
                                    <label htmlFor="checkout-discount-input" className="text-truncate">Have a
                                        coupon? <span>Click here to enter your code</span></label>
                                </form>
                            </div>

                            <form action="#" onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <div className="row">
                                    {this.state.data.user !== null ? (<div className="col-lg-9">
                                        <h2 className="checkout-title">Billing Details</h2>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Name *</label>
                                                <input type="text"
                                                       className="form-control"
                                                       readOnly={true}
                                                       value={user ? this.state.data.user.name : ''}
                                                       onChange={this.handleInputChange}
                                                       name="name"
                                                       required/>
                                            </div>
                                        </div>

                                        <label>Street address *</label>
                                        <input type="text"
                                               onChange={this.handleInputChange}
                                               className="form-control"
                                               name="streetAddress"
                                               value={user ? this.state.data.user.address_line_1 : ''}
                                               placeholder="House number and Street name" required/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Town / City *</label>
                                                <input type="text"
                                                       name="town"
                                                       onChange={this.handleInputChange}
                                                       className="form-control" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label>State / County *</label>
                                                <input type="text"
                                                       name="state"
                                                       onChange={this.handleInputChange}
                                                       className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Postcode / ZIP *</label>
                                                <input type="text"
                                                       name="postCode"
                                                       onChange={this.handleInputChange}
                                                       className="form-control" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Phone *</label>
                                                <input type="text"
                                                       name="phone"
                                                       value={user ? user.mobile : null}
                                                       onChange={this.handleInputChange}
                                                       className="form-control" required/>
                                            </div>
                                        </div>
                                        <label>Email address *</label>
                                        <input type="email" className="form-control"
                                               onChange={this.handleInputChange}
                                               name="email"
                                               readOnly={true}
                                               value={user ? user.email : null}
                                               required/>
                                        <label>Order notes (optional)</label>
                                        <textarea
                                            name="notes"
                                            onChange={this.handleInputChange}
                                            className="form-control" cols="30" rows="4"
                                            placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm
                                                formCheckout={this.state.formCheckout}
                                                cartlist={this.props.cartlist}
                                                total={this.props.total}
                                                user={user} handleCheckout={this.handleCheckout}/>
                                        </Elements>


                                    </div>) : (
                                        <div className="col-lg-9">
                                            <h2 className="checkout-title">Billing Details</h2>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label>Name *</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           onChange={this.handleInputChange}
                                                           name="name"
                                                           required/>
                                                </div>
                                            </div>
                                            <label>Street address *</label>
                                            <input type="text"
                                                   onChange={this.handleInputChange}
                                                   className="form-control"
                                                   name="streetAddress"
                                                   placeholder="House number and Street name" required/>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Town / City *</label>
                                                    <input type="text"
                                                           name="town"
                                                           onChange={this.handleInputChange}
                                                           className="form-control" required/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>State / County *</label>
                                                    <input type="text"
                                                           name="state"
                                                           onChange={this.handleInputChange}
                                                           className="form-control" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Postcode / ZIP *</label>
                                                    <input type="text"
                                                           onChange={this.handleInputChange}
                                                           className="form-control" required/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Phone *</label>
                                                    <input type="text"
                                                           name="phone"
                                                           value={user ? user.mobile : null}
                                                           onChange={this.handleInputChange}
                                                           className="form-control" required/>
                                                </div>
                                            </div>
                                            <label>Email address *</label>
                                            <input type="email" className="form-control"
                                                   onChange={this.handleInputChange}
                                                   name="email"
                                                   value={user ? user.email : null}
                                                   required/>
                                            {/*         <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="checkout-create-acc"/>
                                            <label className="custom-control-label" htmlFor="checkout-create-acc">Create
                                                an account?</label>
                                        </div>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="checkout-diff-address"/>
                                            <label className="custom-control-label" htmlFor="checkout-diff-address">Ship
                                                to a different address?</label>
                                        </div>
*/}
                                            <label>Order notes (optional)</label>
                                            <textarea
                                                name="notes"
                                                onChange={this.handleInputChange}
                                                className="form-control" cols="30" rows="4"
                                                placeholder="Notes about your order, e.g. special notes for delivery"></textarea>

                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm user={user}
                                                              formCheckout={this.state.formCheckout}
                                                              cartlist={this.props.cartlist}
                                                              total={this.props.total}
                                                              handleCheckout={this.handleCheckoutGuest}/>
                                            </Elements>
                                        </div>)}


                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">Your Order</h3>
                                            <table className="table table-summary">
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                                </thead>

                                                <tbody>

                                                {cartlist.map((item, index) =>
                                                    <tr key={index}>
                                                        <td><Link to="#">{item.name}</Link></td>
                                                        <td>${item.sum.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })}</td>
                                                    </tr>
                                                )}
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>${total.toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping:</td>
                                                    <td>{shippingObj[this.props.shipping]}</td>
                                                </tr>
                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>${(total + shippingPrice[this.props.shipping]).toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })}</td>
                                                </tr>
                                                </tbody>
                                            </table>
{/*
                                            <Accordion type="checkout">
                                                <Card title="Direct bank transfer" expanded={true}>
                                                    Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order will not be shipped
                                                    until the funds have cleared in our account.
                                                </Card>

                                                <Card title="Check payments">
                                                    Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                                    Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                                </Card>

                                                <Card title="Cash on delivery">
                                                    Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
                                                    eros.
                                                </Card>

                                                <Card title='PayPal'>
                                                    <small className="float-right paypal-link">What is PayPal?</small>
                                                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non,
                                                    semper suscipit, posuere a, pede. Donec nec justo eget felis
                                                    facilisis fermentum.
                                                </Card>

                                                <Card title='Credit Card (Stripe)'>
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/images/payments-summary.png`}
                                                        alt="payments cards"/>
                                                </Card>
                                            </Accordion>
                                            {user ? (<button type="submit"
                                                             className="btn btn-outline-primary-2 btn-order btn-block"
                                                             onClick={this.handleCheckout}>
                                                <span className="btn-text">Place Order</span>
                                                <span className="btn-hover-text">Proceed to Checkout</span>
                                            </button>) : (<button type="submit"
                                                                  className="btn btn-outline-primary-2 btn-order btn-block"
                                                                  onClick={this.handleCheckoutGuest}>
                                                <span className="btn-text">Place Order</span>
                                                <span className="btn-hover-text">Proceed to Checkout</span>
                                            </button>)}*/}
                                        </div>
                                    </aside>
                                </div>
                            </form>
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

export default connect(mapStateToProps, {emptyCart})(Checkout);

