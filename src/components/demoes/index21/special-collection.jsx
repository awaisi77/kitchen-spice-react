import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import custom component
import Product from './product';

import { isIEBrowser } from '../../../utils/utils'; 
import { addToCart, toggleWishlist } from '../../../actions';
import { getDealProducts, getProductsByDemo } from '../../../services';

class SpecialCollection extends Component {

    componentDidMount() {
        if ( isIEBrowser() ) {
            document.querySelector('.banner-intro').style.paddingTop = "25rem";
        }
    }

    render() {
        const { addToCart, toggleWishlist } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo21"), "Men");

        return (
            <div className="choose-style">
                <div className="container row">
                    <div className="banner-intro col-lg-5">
                        <h3 className="title">Get Your<br />Inspiration<br />In The Street.</h3>

                        <p className="darkWhite">IN THIS LOOK</p>
                        <h4 className="content darkWhite">• Stowell Hood Fleece</h4>
                        <h4 className="content darkWhite">• Force Tight </h4>
                        <h4 className="content darkWhite">• Blitzing 3.0 Cap</h4>
                        <p className="price darkWhite">$55.00 - $1,298.00</p>

                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-demoprimary">
                            <span>BUY ALL </span>
                            <i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>
            
                    <div className="carousel col-lg-7">
                        <div className="heading">
                            <h2 className="title">Choose Your Style</h2>
                            <p className="content">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
                        </div>

                        <div className="row">
                            { products.map(( product, index ) =>
                                <div className="col-lg-4 col-md-4 col-6" key={ `choose_${index}` }>
                                    <Product
                                        product={ product }
                                        onAddToCartClick={ addToCart }
                                        onToggleWishlistClick={ toggleWishlist }
                                        type={ 2 }
                                    />
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
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( SpecialCollection );