import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getNewProducts, getProductsByDemo } from '../../../services';

class NewCollection extends Component {    
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
         
        let products = getNewProducts(getProductsByDemo(this.props.products, "demo6"));

        return(
            <div className="container">
                <h2 className="title text-center mb-4">New Arrivals</h2>

                <div className="products">
                    <div className="row justify-content-center">
                        {
                            products.map( ( item, index ) => 
                                <div className="col-6 col-md-4 col-lg-3" key={ index + item.name  }>
                                    <Product product={ item }
                                        adClass="text-center"
                                        key={ index + item.name }
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare }  
                                        showQuickViewModal={ showQuickViewModal } 
                                    />
                                </div>
                            ) 
                        }
                    </div>
                </div>
                <div className="more-container text-center mt-2">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-dark-2 btn-more"><span>show more</span></Link>
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
) ( NewCollection );
