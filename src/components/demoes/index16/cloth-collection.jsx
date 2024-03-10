import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Product from './product';
import Banner from './banner';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getDealProducts, getProductsByDemo } from '../../../services';

import _data from '../../../mock_data/data';


class ClothCollection extends Component {

    render() {
        const { type, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo16"), type);
        let productArr = products.slice(0, 2), singleProduct = products[2], bannerId;
        
        if ( type === "Dress" )
            bannerId = 0;
         else 
            bannerId = 1;

        return(
            <div className="row">
                <div className="col-lg-6">
                    <Banner banner={ _data.demo16.banner[bannerId] } />
                </div>

                <div className={ `col-sm-4 col-lg-3 ${ ! bannerId ? 'order-lg-first' : '' }` }>
                    <div className="display-products-col">
                        <Product product={ singleProduct }
                            adClass= { type === "dress" ? "mb-7" : "" }
                            type={ 2 }
                            onAddToCartClick={ addToCart } 
                            onToggleWishlistClick={ toggleWishlist } 
                            onAddToCompareClick={ addToCompare }  
                            showQuickViewModal={ showQuickViewModal } />
                    </div>
                </div>

                <div className={ `col-sm-8 col-lg-3 ${ bannerId ? 'order-lg-first' : ''}` }>
                    <div className="display-products-col">
                        <div className="row">
                            { productArr.map( ( item, index ) => 
                                <div className="col-6 col-lg-12" key={ index } >
                                    <Product product={ item } 
                                        adClass= { type === "dress" ? "mb-7" : "" }
                                        type={ 2 }
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare }  
                                        showQuickViewModal={ showQuickViewModal } />
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
) ( ClothCollection );
