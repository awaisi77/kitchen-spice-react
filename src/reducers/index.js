import { combineReducers } from 'redux';

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import postReducer from './post';
import filterReducer from './filter';
import demoReducer from './demo';
import overlayReducer from './overlay';
import spinner from './spinner_reducer'
 
const rootReducer = combineReducers({
    data: productReducer,
    cartlist: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    posts: postReducer,
    filters: filterReducer,
    demo: demoReducer,
    overlay: overlayReducer,
    spinner:spinner,
});

export default rootReducer;