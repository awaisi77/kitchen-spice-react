import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderTwentytwo from '../../common/header/header-22';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterOne from '../../common/footer/footer-one';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import InstagramThree from '../../features/instagram/instagram-three';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBox from '../../features/service-list/service-one';
import VideoModal from '../../features/video-modal';
import BrandBoxOne from '../../features/brand/brand-one';

import store from '../../../store';

import Banner from './banner';
import VideoBanner from './video-banner';
import BestCollection from './best-collection';
import FeaturedCollection from './featured-collection';
import PostGroup from './post-group';
import CTA from './cta';

import { initSettings, isIEBrowser } from '../../../utils/utils';
import { brandSlider } from './settings';

import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data';
import style from './style.scss';


class IndexTwentyfour extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('24'));
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
                    <title>Molla React Ecommerce - Extreme Sport Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Extreme Sport Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <div className="background" style={ {backgroundImage: "url(assets/images/demos/demo-24/slider/back-1.jpg)"} }>
                        <HeaderTwentytwo />
                        <div className="slider">
                            <div className="intro">
                                <div className="title">
                                    <h3>Premium Outdoor Gear & Clothing</h3>
                                </div>
                                <div className="content">
                                    <h4><i>Our New Collections { (new Date()).getFullYear() }</i></h4>
                                    <h5>Ski & Snowboard</h5>
                                </div>
                                <div className="action">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>discover now</Link>
                                </div>
                            </div>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-24/slider/back-2.png` } alt="intro" width="1903" height="1080" 
                                style={ isIEBrowser() ? { width: '100%' } : {} }/>
                        </div>
                    </div>
                    <div className="main">
                        <section className="logos">
                            <div className="container">
                                <hr className="mb-4" />
                                <div className="heading">
                                    <p className="heading-cat">trending brands</p>
                                </div>

                                <BrandBoxOne sliderOption={ brandSlider } count={ 7 } adClass= "mb-5 owl-simple" />
                            </div>
                        </section>

                        <section className="banners center">
                            <div className="container">
                                <div className="row">
                                {
                                    _data.demo24.banners.slice(0, 3).map(( item, index ) =>
                                        <Banner banner={ item } key={ `banner1_${ index }` } />
                                    )
                                }
                                </div>
                            </div>
                        </section>

                        <section className="best-sellers">
                            <div className="container">
                                <div className="heading">
                                    <p className="heading-cat">favourite from every category</p>
                                    <h3 className="heading-title">Best Sellers</h3>
                                </div>
                                
                                <BestCollection />
                            </div>
                        </section>

                        <section className="banners stretch mt-2">
                            <div className="container">
                                <div className="row">
                                    {
                                        <Banner banner={ _data.demo24.banners[3] } />
                                    }

                                    <div className="col-lg-6 col-md-6 col-12 banner-sm-div">
                                    {
                                        _data.demo24.banners.slice(4, 8).map(( item, index ) =>
                                            <Banner banner={ item } key={ `banner_2${index}` } />
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                        </section>

                        <FeaturedCollection />

                        <VideoBanner />

                        <CTA />

                        <PostGroup />

                        <section className="instagram mb-3">
                            <div className="container">
                                <div className="heading">
                                    <p className="heading-cat">Follow Us On Instagram <span className="highlight">@molla_store<span></span></span></p>
                                </div>
                                
                                <InstagramThree />
                            </div>
                        </section>
                    </div>
                    <FooterOne adClass="mt-3" logo="assets/images/demos/demo-24/logo.png" width="110">
                        <ServiceBox container="container service" boxAdClass="icon-box-side" start={ 1 } end={ 4 }/>
                    </FooterOne>
                </div>

                <VideoModal />
                
                <QuickView />

                <MobileMenu adClass="mobile-menu-light"/>

                <NewsletterModal demo="24"/>
                
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwentyfour;