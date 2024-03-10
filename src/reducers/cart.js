import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CHANGE_SHIPPING,EMPTY_CART } from "../constants/action-types";
import { findIndex } from "../utils/utils";

export default function cartReducer(state = {
    cart: [],
    shipping: "free"
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id;
            console.log('cartjs@addtocart product:',action.product);
            if (findIndex(state.cart, product => product.id === productId) !== -1) {

                const cart = state.cart.reduce((cartAcc, product) => {

                    if (product.id === productId) {

                        cartAcc.push({ ...product, qty: parseInt(product.qty) + parseInt(action.qty),
                            sum: ( product.discount ? product.variations[0].sell_price_inc_tax :product.variations[0].sell_price_inc_tax) * (parseInt(product.qty) + parseInt(action.qty)) }) // Increment qty
                       // cartAcc.push({ ...product, qty: parseInt(product.qty) + parseInt(action.qty), sum: (product.sell_price_inc_tax) * (parseInt(product.qty) + parseInt(action.qty)) }) // Increment qty
                    } else {
                      //  product.sum = (product.sell_price_inc_tax) * product.qty;
                        console.log(product.variations[0].sell_price_inc_tax)
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])

                console.log('cartitem',cart)
                return { ...state, cart }
            }
            return { 
                ...state, 
                cart: [
                    ...state.cart, 
                    { 
                        ...action.product, 
                        qty: action.qty, 
                        //sum: (action.product.sell_price_inc_tax) * action.qty
                        sum: (action.product.discount ? action.product.variations[0].sell_price_inc_tax : action.product.variations[0].sell_price_inc_tax) * action.qty
                    }
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.productId)
            };
        case CHANGE_QTY:
            const cart = state.cart.reduce((cartAcc, product) => {
                if ( product.id === action.productId ) {
                    cartAcc.push( { ...product, qty: action.qty, sum: ( product.discount ? product.variations[0].sell_price_inc_tax : product.variations[0].sell_price_inc_tax) * action.qty } ) // Increment qty
                } else {
                    cartAcc.push( product )
                }
                return cartAcc
            }, [])

            return { ...state, cart };
        case CHANGE_SHIPPING:
            return { ...state, shipping: action.shipping };
        case EMPTY_CART:
            console.log('state:Empty',state)
            return {cart:[],shipping:"free"}
        default:
            return state;
    }
}
