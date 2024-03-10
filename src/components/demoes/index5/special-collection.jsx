import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getDealProducts, getProductsByDemo } from '../../../services';

class SpecialCollection extends Component {

    render() {

        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo5") ,"casual");

        return (
            <div className="pt-6 pb-6" style={ {backgroundColor: "#fff"} }>
                <div className="container">
                    <div className="banner-set">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-set-content text-center">
                                    <div className="set-content-wrapper">
                                        <h4>Special</h4>
                                        <h2>Refine Your Style.</h2>

                                        <p>Get on our exclusive email list and be the first to hear about sales, coupons, new arrivals and more! </p>

                                        <div className="banner-set-products">
                                            <div className="row">
                                                <div className="products">
                                                    { products.map(( item, index ) =>
                                                    <div className="col-6" key = {index + item.name} >
                                                        <Product 
                                                            product={ item }
                                                            onAddToCartClick = {addToCart} 
                                                            onToggleWishlistClick = { toggleWishlist } 
                                                            onAddToCompareClick = { addToCompare }  
                                                            showQuickViewModal = { showQuickViewModal } 
                                                            type = {2}
                                                        />
                                                    </div>
                                                    ) }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-set-image banner-border-hover">
                                    <Link to="#">
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-5/banners/banner-4.jpg` } alt="Banner"  width="574" height="629" />
                                    </Link>
                                    <div className="banner-content">
                                        <h3 className="banner-title"><Link to="#"><span>Casual basics and<br />trendy key pieces.</span></Link></h3>
                                        <h4 className="banner-subtitle">in this look</h4>
                                        
                                        <h4 className="banner-detail">• Rib-knit cardigan <br />• Linen-blend paper bag trousers</h4>
                                        <h4 className="banner-price">$19.99 - $48.00</h4>
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-primary-2 banner-link">buy all</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( SpecialCollection );