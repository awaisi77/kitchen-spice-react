import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

// import Custom Components
import SingleProductComponent from './common/base';
import ProductDetailTwo from './common/detail-two';

import InnerOverlay from '../../common/overlay/inner-overlay';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/quickview';
import ErrorPage from '../../main/pages/404';

import { isotopeLoad, setStickyValues } from '../../../utils/utils';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class StickyInfo extends SingleProductComponent {

    componentDidMount() {
        super.componentDidMount();
        isotopeLoad( isotope, imagesLoaded, '.product-gallery-masonry', '.product-gallery-item' );
        setStickyValues();
    }

    componentDidUpdate(prevProps) {
        super.componentDidUpdate(prevProps);
        isotopeLoad( isotope, imagesLoaded, '.product-gallery-masonry', '.product-gallery-item' );
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        const { product, addToCart, toggleWishlist, addToCompare, showQuickViewModal} = this.props;

        if( ! product ) {
            return (
                <ErrorPage />
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
        const smallImages = product.smPictures ? product.smPictures : product.pictures;

        return(
            <div className="main">
                <InnerOverlay />
                
                <Breadcrumb 
                    title="Masonry Sticky Info" 
                    slug="masonry" 
                    parent1={ ["Products", "product"] } 
                    type="product" 
                    adClass="breadcrumb-nav border-0 mb-0" 
                    productId={ product.id }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery">   
                                        <figure className = "product-main-image">
                                        
                                            { product.discount > 0 ? <span className = "product-label label-sale">Sale</span> : '' }

                                            { product.new ? <span className = "product-label label-new">New</span> : '' }

                                            { product.top ? <span className = "product-label label-top">Top</span> : '' }

                                            <Magnifier
                                                imageSrc={ product.pictures[0] }
                                                imageAlt="Example"
                                                largeImageSrc={ bigImages[0] } // Optional
                                                dragToMove = { false }
                                                mouseActivation = "hover"
                                                cursorStyleActive = "crosshair"
                                                id="product-zoom"
                                            />

                                            <Link to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ this.openLightBox  }>
                                                <i className="icon-arrows"></i>
                                            </Link>
                                        </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery product-gallery-masonry">
                                            {
                                                product.pictures.map((item, index) =>
                                                    parseInt(index) > 0 ?
                                                    <Link className={ `product-gallery-item ${ 2 ===  index ? 'gallery-item-wide' : ''}`} to="#" data-image={ item }data-zoom-image={ bigImages[index] } key={ index }>
                                                        <img src={ process.env.PUBLIC_URL + '/' + smallImages[index] } alt="product back"/>
                                                    </Link> : ''
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <ProductDetailTwo product={ product } 
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare } 
                                        showQuickViewModal={ showQuickViewModal } 
                                        type = "color">

                                        { this.productDetailAccordian() }

                                    </ProductDetailTwo>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 mb-5"/>

                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        { this.relatedProducts("model", "") }
                    </div>

                  
                </div>

                { this.lightbox() }

                <QuickView />
           </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const product_id = props.match.params.id;

    return {
        product: state.data.products.filter(item => item.id.toString() === product_id)[0],
        products: state.data.products ? state.data.products : []
    }
}

export default connect (
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(StickyInfo);