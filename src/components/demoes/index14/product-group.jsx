import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import OwlCarousel from '../../features/owl-carousel';

import CategoryBanner from './category-banner';
import Product from './product';
import { productSlider1 } from './settings';

// import Actions & Services & data
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

import _data from '../../../mock_data/data';
import { getProductsByDemo, getDealProducts } from '../../../services';

class ProductGroup extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal, category } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo14"), category);

        return(
            <div className="row cat-banner-row clothing">
                <div className="col-xl-3 col-xxl-4">
                    <CategoryBanner catban={ _data.demo14.categoryBanners[this.props.index] } />
                </div>

                <div className="col-xl-9 col-xxl-8">
                    <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider1 }>
                        {
                            products.map( ( item, index ) => 
                                <Product product={ item }
                                    key={ index} 
                                    onAddToCartClick={ addToCart } 
                                    onToggleWishlistClick={ toggleWishlist } 
                                    onAddToCompareClick={ addToCompare }  
                                    showQuickViewModal={ showQuickViewModal } />
                            )
                        }
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}


export default (connect) (mapStateToProps, {addToCart, toggleWishlist, addToCompare, showQuickViewModal}) (ProductGroup);