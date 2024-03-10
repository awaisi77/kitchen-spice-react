import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import Product from './product';
import DealProduct from './deal-product';

import { addToCart, toggleWishlist, showQuickViewModal } from '../../../actions'
import { getFeaturedProducts, getProductsByDemo, getDealProducts } from '../../../services';

class FeaturedCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, showQuickViewModal } = this.props;

        let products = getFeaturedProducts(getProductsByDemo(this.props.products, "demo24"));
        let deal_product = getDealProducts(getProductsByDemo(this.props.products, "demo24"), "Helmet");

        return (
            <section className="featured-products">
                <div className="container">
                    <div className="heading">
                        <p className="heading-cat">Featured Products </p>
                        <h3 className="heading-title">Featured Products</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-7 products featured-collection">
                            {
                                products.map( (item, index) => 
                                    <div className="col-6" key={ index }>
                                        <Product product={ item }
                                            onAddToCartClick={ addToCart } 
                                            onToggleWishlistClick={ toggleWishlist }
                                            showQuickViewModal={ showQuickViewModal } />  
                                    </div>
                                )
                            }
                        </div>
                        
                        <div className="col-lg-5 col-md-5 col-sm-8 col-12"> 
                            <DealProduct product={ deal_product[0] }
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist }
                                showQuickViewModal={ showQuickViewModal } />  
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( FeaturedCollection );