import React, { Component } from 'react';
import { connect } from 'react-redux';
// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { productSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { getTrendyProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo23"));

        return (
            <section className="trending">
                <div className="heading">
                    <p className="heading-cat">new arrivals</p>
                    <h3 className="heading-title">trending now</h3>
                </div>

                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider }>
                    { products.map(( product, index ) =>
                        <Product
                            key={ `product.name ${index}` }
                            product={ product }
                            onAddToCartClick={ addToCart } 
                            onToggleWishlistClick={ toggleWishlist } 
                            onAddToCompareClick={ addToCompare }  
                            showQuickViewModal={ showQuickViewModal } 
                        />
                    ) }
                </OwlCarousel>
            </section>

        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );