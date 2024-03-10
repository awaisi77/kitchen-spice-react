import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getRecommendedProducts, getProductsByDemo } from '../../../services';

class ProductCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
         
        let products = getRecommendedProducts(getProductsByDemo(this.props.products, "demo4"));

        return(
            <div className="container for-you">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Recommendation For You</h2>
                    </div>

                    <div className="heading-right">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="title-link">
                            View All Recommendadion <i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <div className="products">
                    <div className="row justify-content-center">
                        { products.map((item, index) => 
                            <div className="col-6 col-md-4 col-lg-3" key={ index} >
                                <Product product={ item }
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                            </div>
                        ) }
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
) ( ProductCollection );
