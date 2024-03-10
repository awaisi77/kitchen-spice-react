import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderFive from '../../common/header/header-5';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterEleven from '../../common/footer/footer-eleven';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import OwlCarousels from '../../features/owl-carousel';
import VideoBanner from '../../features/videobanner/videobanner-one';
import VideoModal from '../../features/video-modal';
import NewsletterModal from '../../features/newsletter-modal';

import store from '../../../store';

import FirstCollection from './first-collection';
import SecondCollection from './second-collection';
import ThirdCollection from './third-collection';
import FourthCollection from './fourth-collection';
import Blog from './blog';
import CTA from './cta';
import { introSlider } from './settings';

import {  initSettings, scrollToElement } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';

import style from './style.scss';


class IndexFifteen extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("15"));
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
                    <HeaderFive logo="assets/images/demos/demo-15/logo.png"/>
                    
                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousels adClass="intro-slider owl-simple owl-nav-inside owl-light" carouselOptions={ introSlider} >
                                <div className="intro-slide" style={ { backgroundImage: `url(assets/images/demos/demo-15/slider/slide-1.jpg)` } }>
                                    <div className="container intro-content text-center">
                                        <h3 className="intro-subtitle">Want to know what's hot?</h3>
                                        <h1 className="intro-title text-white">Spring Lookbook { (new Date()).getFullYear() }</h1>

                                        <Link to="#scroll-to-content" className="btn btn-outline-primary-2 scroll-to" data-target="#scroll-to-content" onClick={ scrollToElement }>
                                            <span>Start scrolling</span>
                                            <i className="icon-long-arrow-down"></i>
                                        </Link>
                                    </div>
                                </div>
                            </OwlCarousels>

                            <span className="slider-loader text-white"></span>
                        </div>
                        
                        <FirstCollection />

                        <SecondCollection />
                        
                        <VideoBanner image="assets/images/demos/demo-15/bg-1.jpg" content={ `<span>Spring / Summer</span>The New Romantic Collection ${(new Date()).getFullYear() }`} adClass="video-fullheight" />

                        <ThirdCollection />
                        
                        <FourthCollection />

                        <div className="mb-2"></div>

                        <div className="container-fluid">
                            <CTA />
                        </div>

                        <div className="mb-7"></div>

                        <Blog />
                    </div>

                    <FooterEleven logo = "assets/images/demos/demo-15/logo-footer.png" type={ 2}/>
                </div>
                
                <VideoModal />

                <MobileMenu />

                <QuickView />
                
                <NewsletterModal demo='15' />
                
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexFifteen;