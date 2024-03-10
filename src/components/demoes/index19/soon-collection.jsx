import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Product from './product';
import CategoryBanner from './category-banner';
import OwlCarousel from '../../features/owl-carousel';
import { bannerSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data';
import { getProductsByDemo, getDealProducts } from '../../../services';

class SoonCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getDealProducts(getProductsByDemo(this.props.products, "demo19"), "Soon");

        return(
            <React.Fragment>
                <div className="col-lg-7">
                    <div className="products">
                        <div className="row">
                            { products.map(( product, index ) =>
                                <div className="col-6 col-md-4" key={ `gamesoon_${index}` }>
                                    <Product
                                        key={`trending_${index}`}
                                        product={ product }
                                        onAddToCompareClick={ addToCompare }
                                        onToggleWishlistClick={ toggleWishlist }
                                        showQuickViewModal={ showQuickViewModal }
                                        onAddToCartClick={ addToCart }
                                    />
                                </div>
                            ) }
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 order-lg-first">
                    <OwlCarousel adClass="games-banners-slider owl-simple" carouselOptions={ bannerSlider } >
                        { _data.demo19.categoryBanners.map(( banner, index ) =>
                            <CategoryBanner banner={ banner } key={ banner.img }/>
                        ) }
                    </OwlCarousel>
                </div>
            </React.Fragment>
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
) ( SoonCollection );
