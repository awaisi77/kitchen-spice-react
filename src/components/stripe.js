import React from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {toast} from "react-toastify";
import moment from "moment";
import axios from "axios";
import {spinner} from "../actions/spinner";
import store from "../store";
import {outerLoadBegin, outerLoadEnd, outerLoading} from "../actions";
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#000",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "#000"
            }
        },
        invalid: {
            iconColor: "red",
            color: "red"
        }
    }
};

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    console.log("CheckoutForm",stripe)
    console.log("CheckoutForm",elements)

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        store.dispatch(outerLoadBegin());
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            store.dispatch(outerLoadEnd());
            return;
        }

        let res = await checkOut(event);

        console.log(res);
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        let user = props.user;
        let billing_details = {};
        if (user!==null){
            billing_details.name = user.name;
            billing_details.email = user.email;
        }else{
            let user = props.formCheckout;
            billing_details.name = user.name;
            billing_details.email = user.email;
        }
        if (res.status ===true) {
            const paymentResult = await stripe.confirmCardPayment(res.client_secret, {
                payment_method: {
                    card: cardElement,
                    billing_details: billing_details
                },
            });
            if (paymentResult.error) {
                toast.error("Payment failed" + paymentResult.error.message);
                console.log(paymentResult.error.message);
                store.dispatch(outerLoadEnd());
              //  props.handleCheckout();
            } else {
                if (paymentResult.paymentIntent.status === "succeeded") {
                    toast.success("Payment successful.");
                    console.log(paymentResult);
                    props.handleCheckout();
                    store.dispatch(outerLoadEnd());
                }
            }
        }
        else{
            toast.error("Unable to process payment and order");
            store.dispatch(outerLoadEnd());
        }
        // Use your card Element with other Stripe.js APIs

      /*  const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }*/
    };

    const checkOut = async (e) => {
        console.log('props',props)
        const {formCheckout} = {...props};
        console.log('formCheckout', formCheckout);
        const {cartlist, total} = {...props};
        console.log('cartlist', cartlist);
        let user = props.user;
        let payload ={};
        if (user !==null) {
             payload = {
                cart_total: 0,
                cart_quantity: 0,
                orders: null,
                instructions: null,
                addresses: null,
                order_source: "web",
                date: null,
                customer_id: user.hasOwnProperty('id') ? user.id : 2
            };
        }else{
             payload = {
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
            payload.customer = customer;
        }


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
            url: 'https://pos.kitchennspicemarket.com/api/v1/pub/checkout',
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
            if (response.data && response.data.status === "OK") {
                console.log(response)
             return {status:true, client_secret:response.data.data.client_secret,data:response.data.data.checkout}
            } else {
                console.log('response intent:',response)
                return {status:false, client_secret:null,data:null}
            }
        } catch (err) {
            console.log('error', err)
            return {status:false, client_secret:null,data:null}
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className="form-control"
                options={CARD_OPTIONS}
            />
      {/*      <button type="submit" disabled={!stripe}>
                Pay
            </button>
*/}
{props.user ? (<button type="submit"
                             disabled={!stripe}
                             className="btn btn-outline-primary-2 btn-order btn-block"
                            /* onClick={this.handleCheckout}*/
>
                <span className="btn-text">Place Order</span>
                <span className="btn-hover-text">Proceed to Checkout</span>
            </button>) : (<button type="submit"
                                  disabled={!stripe}
                                  className="btn btn-outline-primary-2 btn-order btn-block"
                                /*  onClick={this.handleCheckoutGuest}*/
>
                <span className="btn-text">Place Order</span>
                <span className="btn-hover-text">Proceed to Checkout</span>
            </button>)}
        </form>
    );
};

export default CheckoutForm