import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './product';
import Banner from './banner';

// import Action
import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../../actions';

import data from '../../../mock_data/data';
import { getDealProducts, getProductsByDemo } from '../../../services';

class FourthCollection extends Component {
    render() {
        const { addToCart, toggleWishlist, showQuickViewModal, addToCompare } = this.props;

        let products = getDealProducts( getProductsByDemo( this.props.products, "demo15" ), "accessory" );

        return (
            <div className="display-row">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Banner banner = { data.demo15.categoryBanners[3] } />
                        </div>

                        <div className="col-lg-6">
                            <div className="heading text-center">
                                <h2 className="title">About This Look</h2>
                                <p className="title-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="row">
                                        { products.map(( item, index ) => 
                                            <div className="col-6" key={ `4_${index}`  }>
                                                <Product 
                                                    product={ item } 
                                                    onAddToCartClick={ addToCart } 
                                                    onToggleWishlistClick={ toggleWishlist } 
                                                    onAddToCompareClick={ addToCompare }  
                                                    showQuickViewModal={ showQuickViewModal } 
                                                />
                                            </div>
                                        ) }
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

export const mapStateToProps = ( state ) => ({
    products: state.data.products ? state.data.products : []
})

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare } ) ( FourthCollection );