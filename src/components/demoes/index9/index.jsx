import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderEleven from '../../common/header/header-11';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterSix from '../../common/footer/footer-six';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import OwlCarousels from '../../features/owl-carousel';
import Instagram from '../../features/instagram/instagram-one';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';
import BrandSlider from '../../features/brand/brand-one';

import IntroSlider from './intro-slide';
import Banner from './banner';
import TrendyCollection from './trendy-collection';
import ShoesCollection from './shoes-collection';
import BagCollection from './bag-collection';
import CTA from './cta';
import ServiceBox from './servicebox';
import { introSlider  } from './settings';

import { initSettings, isIEBrowser } from '../../../utils/utils';
import _data from '../../../mock_data/data';
import { changeDemo, outerLoading } from '../../../actions';
import store from '../../../store';

import style from './style.scss';

class IndexNine extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('9'));

        if ( isIEBrowser ) {
            document.querySelector('.header-search-wrapper .btn').style.minWidth = "2rem";
        }
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
                    <HeaderEleven />

                    <div className="main">
                       <div className="intro-section">
                            <div className="intro-section-slider">
                                <div className="container">
                                    <div className="intro-slider-container slider-container-ratio mb-0">
                                        <OwlCarousels adClass="intro-slider owl-simple owl-light" carouselOptions={ introSlider } >
                                            {
                                                _data.demo9.introBanners.map(( item, index ) =>
                                                    <IntroSlider slide={ item }key={ `intro_${index}`} />
                                                )
                                            }
                                        </OwlCarousels>
                                                
                                        <span className="slider-loader"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="icon-boxes-container pt-0 pb-0">
                                <div className="container">
                                    <ServiceBox />
                                </div>
                            </div>
                        </div>

                        <div className="pt-3 pb-3">
                            <div className="container">
                                <div className="banner-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4">
                                            <Banner banner={ _data.demo9.banners[0] } />
                                        </div>

                                        <div className="col-sm-6 col-lg-4 order-lg-last">
                                            <Banner banner={ _data.demo9.banners[1] } />
                                        </div>

                                        <div className="col-12 col-lg-4">
                                            <div className="row">
                                                {
                                                    _data.demo9.banners.slice( 2, 4 ).map(( item, index ) =>
                                                        <div className="col-sm-6 col-lg-12" key={ `banner_${index}` }>
                                                            <Banner banner={ item }/> 
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <BrandSlider adClass="owl-carousel mt-4 mb-3 owl-simple" />
                            </div>
                        </div>

                        <div className="bg-lighter pt-6">
                            <div className="container">
                                <TrendyCollection />
                            </div>
                        </div>

                        <div className="container featured mt-4 pb-2">
                            <ShoesCollection />
                        </div>

                        <div className="container">
                            <hr className="mt-3 mb-4" />
                        </div>

                        <div className="container pb-2">
                            <BagCollection />
                        </div>

                        <div className="container">
                            <hr className="mt-3 mt-xl-1 mb-0" />

                            <CTA />
                        </div>
                        
                        <Instagram />
                    </div>
                    
                    <QuickView />
                    <ToastContainer autoClose={ 3000 } className="toast-container"/>
                    <FooterSix logo="assets/images/demos/demo-9/logo-footer.png" width="82" height="25"/>
                </div>

                <NewsletterModal demo="9"/>                            
                <MobileMenu />
            </React.Fragment>
        )
    }
}

export default IndexNine;