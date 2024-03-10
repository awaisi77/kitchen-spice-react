import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderThree from '../../common//header/header-3';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterThree from '../../common//footer/footer-three';
import OwlCarousel from '../../features/owl-carousel'; 
import NewsletterModal from '../../features/newsletter-modal';
import MobileMenu from '.././../common/header/common/mobile-menus/menu-1';
import ServiceBox from '../../features/service-list/service-three';
import BrandOne from '../../features/brand/brand-one';

import TrendyCollection from './trendy-collection';
import RecentCollection from './recent-collection';
import PostGroup from './post-group';
import IntroSlide from './intro-slide';
import CTA from './cta';
import BannerGroup from './banner-group';
import IntroBanner from './intro-banner';
import { introSlider } from './settings';

// import services & actions
import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';
import store from '../../../store/index';
import { changeDemo, outerLoading } from '../../../actions';

import style from './style.scss';


export default class DemoTwo extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch( changeDemo("2") );
        store.dispatch( outerLoading() );
    }

    UNSAFE_componentWillMount() {
        style.use();
    }

    componentWillUnmount() {
        style.unuse();
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Molla React Ecommerce - Furniture Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Furniture Store</h1>

                <OuterOverlay />
                
                <div className="page-wrapper">
                    <HeaderThree />
                    <div className="main">
                        <div className="intro-section bg-lighter pt-5 pb-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                                            <OwlCarousel  adClass="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider }>
                                                {
                                                    _data.demo2.introBanners.map( ( item, index ) => 
                                                        <IntroSlide data={ item } key = { index } />
                                                    )
                                                }
                                            </OwlCarousel>
                                            
                                            <span className="slider-loader"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="intro-banners">
                                        <div className="row row-sm">
                                            {
                                                _data.demo2.banner.map( (item, index ) =>
                                                    <div className="col-md-6 col-lg-12" key = { index }>
                                                        <IntroBanner data= { item } />
                                                    </div>
                                            )}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                <div className="mb-6"></div>

                                <BrandOne adClass="owl-simple"/>
                            </div>
                        </div>

                        <div className="mb-6"></div>

                        <TrendyCollection />

                        <BannerGroup />

                        <div className="mb-5"></div>
                        
                        <RecentCollection />

                        <div className="mb-5"></div>

                        <div className="container">
                            <hr/>

                            <ServiceBox boxAdClass="icon-box-card text-center" />

                            <div className="mb-2"></div>
                        </div>

                        <PostGroup />

                        <CTA />
                    </div>

                    <FooterThree />
                    <ToastContainer autoClose={3000} className="toast-container"/>
                </div>
                <NewsletterModal demo="2" />
                <MobileMenu />
            </React.Fragment>
        );
    };
}
