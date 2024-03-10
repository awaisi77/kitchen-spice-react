import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

import store from '../../../store/index';

// import Custom Components
import HeaderTwo from '../../common/header/header-2';
import FooterTwo from '../../common/footer/footer-two';
import MobileMenuTwo from '../../common/header/common/mobile-menus/menu-2';
import OwlCarousel from '../../features/owl-carousel';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBox from '../../features/service-list/service-two';
import BrandOne from '../../features/brand/brand-one';
import OuterOverlay from '../../common/overlay/outer-overlay';

import SpecialCollection from './special-collection';
import TopCollection from './top-collection';
import PostGroup from './post-group';
import BannerGroup from './banner-group';
import IntroSlide from './intro-slide';
import DealBanner from './deal-banner';
import Newsletter from './newsletter';
import { introSlider, brandSlider } from './settings';
import style from './style.scss';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';


export default class DemoOne extends Component {

    componentDidMount() {
        initSettings( "demo-2", "skin-demo-2" );   
        store.dispatch(changeDemo("1"));
    }

    UNSAFE_componentWillMount() {
        store.dispatch( outerLoading() );
        style.use();
    }

    componentWillUnmount() {
        style.unuse();
    }
    
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Molla React Ecommerce - Furniture Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Furniture Store</h1>

                <OuterOverlay />

                <div className="page-wrapper">
                    <HeaderTwo />
                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousel  adClass="owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider  }>
                                {
                                    _data.demo1.introBanners.map( ( item, index ) => 
                                        <IntroSlide data={ item } key={ index }/>
                                    )
                                }
                            </OwlCarousel>

                            <span className="slider-loader text-white"></span>
                        </div>

                        <BrandOne adClass="brands-border owl-simple" count={ 8} sliderOption={ brandSlider}/>

                        <div className="mb-3 mb-lg-5"></div>
                        
                        <BannerGroup />

                        <div className="mb-3"></div>

                        <SpecialCollection />

                        <div className="mb-5"></div>
    
                        <div className="bg-light deal-container pt-5 pb-3 mb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <DealBanner />
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                                            <Link to="#">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-2/banners/banner-5.jpg` } alt="Banner" width="280" height="500"/>
                                            </Link>

                                            <div className="banner-content banner-content-top banner-content-center">
                                                <h4 className="banner-subtitle">The Best Choice</h4>
                                                <h3 className="banner-title">AGEN</h3>
                                                <div className="banner-text text-primary">$49.99</div>
                                                <Link to="#" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6"></div>

                        <TopCollection />

                        <div className="container">
                            <hr className="mt-1 mb-6"/>
                        </div>
                        
                        <PostGroup />
                    </div>
                    
                    <ServiceBox adClass=""/>

                    <FooterTwo>
                        <Newsletter />
                    </FooterTwo>

                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                    
                </div>
                <NewsletterModal demo="1" />                    
                <MobileMenuTwo adClass="mobile-menu-light"/>
            </React.Fragment>
        );
    };
}
