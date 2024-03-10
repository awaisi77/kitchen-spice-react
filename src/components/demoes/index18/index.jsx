import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderEighteen from '../../common/header/header-18';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterTwelve from '../../common/footer/footer-twelve';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';
import InstagramTwo from '../../features/instagram/instagram-two';
import BrandBox from '../../features/brand/brand-one';

import Banner from './banner';
import Sidebar from './sidebar';
import NewCollection from './new-collection';
import { introSlider, brandSlider } from './settings';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings, isIEBrowser } from '../../../utils/utils';
import data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexEighteen extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('18'));
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
                    <title>Molla React Ecommerce - Fashion Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Fashion Store</h1>

                <OuterOverlay/>

                <div className="page-wrapper">
                    <HeaderEighteen />

                    <div className="main">
                        <div className="intro-slider-container mb-3 mb-lg-5">
                            <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light"  carouselOptions={ introSlider }>
                                <div className="intro-slide" style={ {backgroundImage: "url(assets/images/demos/demo-18/slider/slide-1.jpg)"} }>
                                    <div className="container">
                                        <div className="intro-content text-center" style={ { marginTop: isIEBrowser() ? '50%' : '' } }>
                                            <h3 className="intro-subtitle cross-txt text-primary">SEASONAL PICKS</h3>
                                            <h1 className="intro-title text-white">Summer Sale</h1>
                                            <div className="intro-text text-white">up to 70% off</div>
                                            <div className="intro-action cross-txt">
                                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white">
                                                    <span>Discover More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="intro-slide" style={ {backgroundImage: "url(assets/images/demos/demo-18/slider/slide-2.jpg)"} }>
                                    <div className="container">
                                        <div className="intro-content text-center"  style={ { marginTop: isIEBrowser() ? '50%' : '' } }>
                                            <h3 className="intro-subtitle text-primary cross-txt">Women's Accessories</h3>
                                            <h1 className="intro-title text-white">Save up to</h1>
                                            <div className="intro-text text-white">30-50% off</div>
                                            <div className="intro-action cross-txt">
                                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white">
                                                    <span>Discover More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                            <span className="slider-loader text-white"></span>
                        </div>

                        
                        <div className="container banners">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Banner banner={ data.demo18.banners[0] } />
                                </div>
                                
                                <div className="col-sm-6 col-lg-3">
                                    <Banner banner={ data.demo18.banners[1] } />
                                </div>
                                
                                <div className="col-sm-6 col-lg-3">
                                    <Banner banner={ data.demo18.banners[2] } />

                                    <Banner banner={ data.demo18.banners[3] } />
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2 className="title">Recent Arrivals</h2>
                                    <div className="products-container mb-7">
                                        <div className="row justify-content-center">
                                            <NewCollection />
                                        </div>
                                
                                        <div className="more-container text-center mt-0 mb-0">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-primary-2 btn-more">
                                                <span>View more Products</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                <aside className="col-lg-3">
                                    <Sidebar />
                                </aside>
                            </div>

                            <hr className="mt-0 mb-4"/>
                            <h2 className="title text-center brands">Shop by Brands</h2>
                
                            <BrandBox adClass="mt-3 mb-4 owl-simple"
                                sliderOption={ brandSlider } 
                                count={ 7 }/>
                        </div>

                        <div className="bg-lighter pt-5 pb-5">
                            <div className="container">
                                <div className="heading text-center">
                                    <h2 className="title instagram">Let Us Inspire You On Instagram</h2>
                                    <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                                </div>

                                <InstagramTwo adClass="mb-3" />

                                <div className="more-container text-center">
                                    <Link to="#" className="btn btn-outline-primary-2 btn-more">@Molla Instagram</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FooterTwelve logo="assets/images/demos/demo-18/logo-footer.png"/>
                </div>

                <MobileMenu/>

                <NewsletterModal demo="18"/>

                <QuickView />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexEighteen;