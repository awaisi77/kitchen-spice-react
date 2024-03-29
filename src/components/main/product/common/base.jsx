import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';

import store from '../../../../store';
import { innerLoading, outerLoading } from '../../../../actions';

// import Custom Components
import OwlCarousel from '../../../features/owl-carousel';
import ProductEight from '../../../features/product/product-eight';
import Accordion from '../../../features/accordion/accordion';
import Card from '../../../features/accordion/card';

// import Utils
import { productGallery, isIEBrowser } from '../../../../utils/utils';
import { mainSlider8 } from '../../settings';

class SingleProductComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            phIndex: 0,
            isOpen: false,
        };
        this.openLightBox = this.openLightBox.bind(this);
        this.closeLightBox = this.closeLightBox.bind(this);
    }

    componentDidMount() {
        productGallery();
    }

    componentDidUpdate(prevProps) {
        if ( this.props.product.id !== prevProps.product.id ) {
            store.dispatch(innerLoading());
        }
        productGallery();
    }

    componentWillUnmount() {
        store.dispatch(outerLoading());
    }

    openLightBox(e) {
        let index = parseInt(document.querySelector(".product-main-image").getAttribute("index"));
        if ( ! index ) index = 0;

        this.setState({isOpen: true, phIndex: index});
        e.preventDefault();
    }

    closeLightBox() {
        this.setState({ isOpen: false });
    }

    prevLightBox() {
        const bigImages = this.props.product.lgPictures ? this.props.product.lgPictures : this.props.product.pictures;
        
        this.setState({
            phIndex: (this.state.phIndex + bigImages.length - 1) % bigImages.length,
        })
    }

    nextLightBox() {
        const bigImages = this.props.product.lgPictures ? this.props.product.lgPictures : this.props.product.pictures;

        this.setState({
            phIndex: (this.state.phIndex + 1) % bigImages.length,
        })
    }

    lightbox() {
        const { product } = this.props;
        const { phIndex, isOpen } = this.state;
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;

        return (
            isOpen && (
                <Lightbox
                    mainSrc={ bigImages[phIndex] }
                    nextSrc={ bigImages[(phIndex + 1) % bigImages.length] }
                    prevSrc={ bigImages[(phIndex + bigImages.length - 1) % bigImages.length] }
                    onCloseRequest={ this.closeLightBox}
                    onMovePrevRequest={ () =>
                    this.setState({
                        phIndex: (phIndex + bigImages.length - 1) % bigImages.length,
                    })
                    }
                    onMoveNextRequest={ () =>
                        this.setState({
                            phIndex: (phIndex + 1) % bigImages.length,
                        })
                    }
                />
            )
        )
    }

    productDetailTab() {
        const { product } = this.props;
        return (
            <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
                <div className="product-details-tab">
                    <TabList className="nav nav-pills justify-content-center">
                        <Tab className="nav-item">
                            <span className="nav-link"> Description</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link" >Reviews ({ this.props.product.reviews })</span>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel className="tab-pane">
                            <div className="product-desc-content">
                                <h3>Product Information</h3>
                                <p>{product.product_description}</p>
                            </div>
                        </TabPanel>
                        <TabPanel className="tab-pane">
                            <div className="reviews">
                                <h3>Reviews (2)</h3>
                                <div className="review">
                                    <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {} }>
                                        <div className="col-auto">
                                            <h4><Link to="#">Samanta J.</Link></h4>

                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={ {width: "80%"} }></div>
                                                </div>
                                            </div>
                                            <span className="review-date">6 days ago</span>
                                        </div>
                                        <div className="col">
                                            <h4>Good, perfect size</h4>

                                            <div className="review-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                            </div>

                                            <div className="review-action">
                                                <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                                <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="review" >
                                    <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {} }>
                                        <div className="col-auto">
                                            <h4><Link to="#">John Doe</Link></h4>
                                            
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={ {width: "100%"} }></div>
                                                </div>
                                            </div>

                                            <span className="review-date">5 days ago</span>
                                        </div>

                                        <div className="col">
                                            <h4>Very good</h4>

                                            <div className="review-content">
                                                <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                            </div>

                                            <div className="review-action">
                                                <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                                <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        );
    }

    productDetailAccordian() {
        const { product } = this.props;

        return (
            <Accordion adClass="accordion-plus product-details-accordion">
                <Card title="Description" adClass="card-box card-sm">
                    <div className="product-desc-content">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                        <ul>
                            <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                            <li>Vivamus finibus vel mauris ut vehicula.</li>
                            <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.</p>
                    </div>
                </Card>
                <Card title="Additional information" adClass="card-box card-sm">
                    <div className="product-desc-content" >
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>

                        <h3>Fabric & care</h3>
                        <ul>
                            <li>100% Polyester</li>
                            <li>Do not iron</li>
                            <li>Do not wash</li>
                            <li>Do not bleach</li>
                            <li>Do not tumble dry</li>
                            <li>Professional dry clean only</li>
                        </ul>

                        <h3>Size</h3>
                        <p>S, M, L, XL</p>
                    </div>
                </Card>
                <Card title="Shipping & Returns" expanded = {true} adClass="card-box card-sm">
                    <div className="product-desc-content">
                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <Link to="#">Delivery information</Link><br/>
                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <Link to="#">Returns information</Link></p>
                    </div>
                </Card>
                <Card title={ `Reviews (${product.reviews})`} adClass="card-box card-sm">
                    <div className="reviews">
                        <div className="review">
                            <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {}} >
                                <div className="col-auto">
                                    <h4><Link to="#">Samanta J.</Link></h4>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={ {width: "80%"} }></div>
                                        </div>
                                    </div>
                                    <span className="review-date">6 days ago</span>
                                </div>
                                <div className="col">
                                    <h4>Good, perfect size</h4>

                                    <div className="review-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                    </div>

                                    <div className="review-action">
                                        <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                        <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="review">
                            <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {} }>
                                <div className="col-auto">
                                    <h4><Link to="#">John Doe</Link></h4>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={ {width: "100%"} }></div>
                                        </div>
                                    </div>
                                    <span className="review-date">5 days ago</span>
                                </div>
                                <div className="col">
                                    <h4>Very good</h4>

                                    <div className="review-content">
                                        <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                    </div>

                                    <div className="review-action">
                                        <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                        <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Accordion>
        )
        
    }

    relatedProducts( type="model", textAdClass="text-center" ) {
        const { products, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props; 
        return (
            <OwlCarousel  adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ mainSlider8  }>
                <ProductEight colorType={ type} adClass={ textAdClass } product={products[21] } onAddToCartClick={ addToCart} onToggleWishlistClick={ toggleWishlist} onAddToCompareClick={ addToCompare}  showQuickViewModal={ showQuickViewModal}/>
                <ProductEight colorType={ type} adClass={ textAdClass } product={products[22] } onAddToCartClick={ addToCart} onToggleWishlistClick={ toggleWishlist} onAddToCompareClick={ addToCompare}  showQuickViewModal={ showQuickViewModal}/>
                <ProductEight colorType={ type} adClass={ textAdClass } product={products[23] } onAddToCartClick={ addToCart} onToggleWishlistClick={ toggleWishlist} onAddToCompareClick={ addToCompare}  showQuickViewModal={ showQuickViewModal}/>
                <ProductEight colorType={ type} adClass={ textAdClass } product={products[24] } onAddToCartClick={ addToCart} onToggleWishlistClick={ toggleWishlist} onAddToCompareClick={ addToCompare}  showQuickViewModal={ showQuickViewModal}/>
                <ProductEight colorType={ type} adClass={ textAdClass } product={products[25] } onAddToCartClick={ addToCart} onToggleWishlistClick={ toggleWishlist} onAddToCompareClick={ addToCompare}  showQuickViewModal={ showQuickViewModal}/>
            </OwlCarousel>
        );
    }
}

export default SingleProductComponent;