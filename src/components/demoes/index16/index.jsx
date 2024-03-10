import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderSeventeen from '../../common/header/header-17';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterSeven from '../../common/footer/footer-seven';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ServiceBox from '../../features/service-list/service-one';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';
import VideoBannerOne from '../../features/videobanner/videobanner-one';
import InstagramTwo from '../../features/instagram/instagram-two';
import VideoModal from '../../features/video-modal';

import store from '../../../store';

import CTA from './cta';
import ShopCollection from './shop-collection';
import ClothCollection from './cloth-collection';
import PostGroup from './post-group';
import { introSlider } from './settings';

import { scrollToElement, initSettings, isIEBrowser } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';

import style from './style.scss';



class IndexSixteen extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('16'));
    }

    UNSAFE_componentWillMount() {
        style.use();
        store.dispatch(outerLoading());
    }

    componentWillUnmount() {
        style.unuse();
    }

    render() {        
        return(
            <React.Fragment>
                <Helmet>
                    <title>Molla React Ecommerce - Lookbook Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Lookbook Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderSeventeen />

                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside owl-light"  carouselOptions={ introSlider  }>
                                <div className="intro-slide" style={ { backgroundImage: "url(assets/images/demos/demo-16/slider/slide-1.jpg)" } }>
                                    <div className="container intro-content text-center" style={ isIEBrowser() ? { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } : {} }>
                                        <h3 className="intro-subtitle">Want to know what's hot?</h3>
                                        <h1 className="intro-title text-white">For Spring In The City</h1>

                                        <Link to="#" className="btn btn-outline-white" data-target="#scroll-to-content" onClick={ scrollToElement }>
                                            <span>Start scrolling</span>
                                            <i className="icon-long-arrow-down"></i>
                                        </Link>
                                    </div>
                                </div>
                            </OwlCarousel>

                            <span className="slider-loader text-white"></span>
                        </div>

                        <div className="container" id="scroll-to-content">
                            <div className="pt-7"></div>

                            <ServiceBox adClass="" container="" iconAdClass="text-dark" />

                            <hr className="mt-2 mb-6" />

                            <div className="products-display">
                                <div className="heading text-center">
                                    <h4 className="subtitle text-primary">Womens Clothing</h4>
                                    <h2 className="title">Refresh Your Wardrobe</h2>
                                    <p className="title-desc">Discover this season’s latest trends with the newest additions to <br/>our women’s clothing collection.</p>
                                </div>

                                <ClothCollection type="Dress" />

                                <ClothCollection type="Coat&jacket" />
                            </div>
                        </div>

                        <div className="bg-lighter pt-6 pb-9">
                            <div className="container">
                                <div className="heading text-center">
                                    <h2 className="title">Shop The Collection</h2>
                                    <p className="title-desc">Donec nec justo eget felis facilisis fermentum. <br/>Aliquam porttitor mauris sit amet orci..</p>
                                </div>
                                
                                <ShopCollection />
                            </div>
                        </div>

                        <VideoBannerOne content={ `<span>Spring / Summer</span><strong>New & Stylish</strong><br> Collection ${(new Date()).getFullYear() }`}
                            image="assets/images/demos/demo-16/bg-1.jpg"/>

                        <div className="mb-6"></div>

                        <PostGroup />
                        <CTA />

                        <div className="bg-lighter instagram pb-5">
                            <div className="container">
                                <h2 className="title text-center mb-3 mb-md-4">Let Us Inspire You On Instagram</h2>

                                <InstagramTwo />
                            </div>
                        </div>

                    </div>

                    <FooterSeven logo="assets/images/demos/demo-16/logo-footer.png"/>
                </div>

                <VideoModal />

                <MobileMenu adClass="mobile-menu-light"/>
                
                <NewsletterModal demo="16"/>
                
                <QuickView />
                
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexSixteen;