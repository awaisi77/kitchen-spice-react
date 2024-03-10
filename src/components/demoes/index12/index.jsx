import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderFourteen from '../../common/header/header-14';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterTen from '../../common/footer/footer-ten';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ServiceBoxTwo from '../../features/service-list/service-two';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';

import Banner from './banner';
import NewCollection from './new-collection';
import { introSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexTwelve extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("12"));
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
                    <HeaderFourteen />

                    <div className="main">
                        <div className="intro-slider-container mb-3 mb-lg-5">
                            <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside owl-light"  carouselOptions={ introSlider  }>
                                <div className="intro-slide" style={ { backgroundImage: "url(assets/images/demos/demo-12/slider/slide-1.jpg)" } }>
                                    <div className="container intro-content text-center">
                                        <h3 className="intro-subtitle text-white">SEASONAL PICKS</h3>
                                        <h1 className="intro-title text-white">Get All The Good Stuff</h1>

                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white">
                                            <span>DISCOVER MORE</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </OwlCarousel>

                            <span className="slider-loader text-white"></span>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Banner banner={ _data.demo12.banners[0] } />
                                </div>

                                <div className="col-md-6">
                                    <Banner banner={ _data.demo12.banners[1] } />

                                    <Banner banner={ _data.demo12.banners[2] } />
                                </div>
                            </div>
                            
                            <div className="mb-3"></div>
                        </div>

                        <div className="bg-lighter pt-5 pb-5 mb-5">
                            <div className="container">
                                <div className="heading text-center mb-4">
                                    <h2 className="title">Recent Arrivals</h2>
                                    <p className="title-desc">Aliquam tincidunt mauris eurisus</p>
                                </div>

                                <NewCollection />
                            </div>
                        </div>

                         <div className="container">
                            <div className="heading text-center mb-4">
                                <h2 className="title">Popular Categories</h2>
                                <p className="title-desc">Vestibulum auctor dapibus neque</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 col-lg-4">
                                    <Banner banner={ _data.demo12.banners[3] } />
                                </div>

                                <div className="col-sm-6 col-lg-4 order-lg-last">
                                    <Banner banner={ _data.demo12.banners[4] } />
                                </div>

                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-12">
                                            <Banner banner={ _data.demo12.banners[5] } />
                                        </div>

                                        <div className="col-sm-6 col-lg-12">
                                            <Banner banner={ _data.demo12.banners[6] } />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ServiceBoxTwo iconAdClass=""/>
                        </div>
                    </div>

                    <FooterTen />
                </div>

                <MobileMenu adClass="mobile-menu-light"/>

                <NewsletterModal demo="12"/>

                <QuickView />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwelve;