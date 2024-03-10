import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderFour from '../../common/header/header-4';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterFive from '../../common/footer/footer-five';
import OwlCarousels from '../../features/owl-carousel';
import QuickView from '../../features/product/quickview';
import ServiceTwo from '../../features/service-list/service-two';
import MobileMenuTwo from '../../common/header/common/mobile-menus/menu-2';
import BrandOne from '../../features/brand/brand-one';
import NewsletterModal from '../../features/newsletter-modal';

import SpecialCollection from './special-collection';
import DealCollection from './deal-collection';
import TrendyCollection from './trendy-collection';
import TopCollection from './top-collection';
import IntroSlide from './intro-slide';
import Banner from './banner';
import CTAOne from './cta-one';
import CTATwo from './cta-two';
import { introSlider } from './settings';
import style from './style.scss';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data.json';
import store from '../../../store/index';

export default class IndexThree extends Component {
   
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("3"));
    }

    UNSAFE_componentWillMount() {
        style.use();
        store.dispatch( outerLoading() );
    }

    componentWillUnmount() {
        style.unuse();
    }

    render() {
        return(
            <React.Fragment>
                <Helmet>
                    <title>Molla React Ecommerce - Electronic Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Electronic Store</h1>
                <OuterOverlay/>
                <div className="page-wrapper">
                    <HeaderFour />      

                    <div className="main">
                        <div className="intro-section pt-3 pb-3 mb-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                                            <OwlCarousels  adClass="intro-slider owl-simple owl-dark owl-nav-inside" carouselOptions={ introSlider  }>
                                                {
                                                    _data.demo3.introBanners.map(( item, index ) => 
                                                        <IntroSlide data={ item } key={ index }/>
                                                    )
                                                }
                                            </OwlCarousels>
                                            
                                            <span className="slider-loader"></span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="intro-banners">
                                            {
                                                _data.demo3.banner.map(( item, index ) => 
                                                    <Banner data={ item } key={ index }/>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container featured">
                            <SpecialCollection />
                        </div>

                        <div className="mb-7 mb-lg-11"></div>

                        <div className = "container">
                            <CTAOne />
                        </div>

                        <DealCollection/>

                        <div className="container">
                            <BrandOne />
                        </div>

                        <div className="container">
                            <hr className="mt-3 mb-6" />
                        </div>

                        <div className="container trending">
                            <TrendyCollection/>
                        </div>

                        <div className="container">
                            <hr className="mt-5 mb-6" />
                        </div>

                        <div className="container trending">
                            <TopCollection />
                        </div>

                        <div className="container">
                            <hr className="mt-5 mb-0"/>
                        </div> 

                        <ServiceTwo adClass="bg-transparent mt-2 mb-2"/>

                        <CTATwo />
                        
                        <QuickView />
                        <ToastContainer autoClose={ 3000 } className="toast-container"/>
                    </div>

                    <FooterFive />
                </div>
                <NewsletterModal demo="3" />                    
                <MobileMenuTwo />
            </React.Fragment>
        )
    }
}