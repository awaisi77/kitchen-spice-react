import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderFive from '../../common/header/header-5';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterTwo from '../../common/footer/footer-two';
import OwlCarousels from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import BrandTwo from '../../features/brand/brand-two';
import VideoBanner from '../../features/videobanner/videobanner-one';
import VideoModal from '../../features/video-modal';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceThree from '../../features/service-list/service-three';

import IntroSlide from './intro-slide';
import Banner from './banner';
import CTA from './cta'
import Instagram from './instagram';
import NewCollection from './new-collection';
import SpecialCollection from './special-collection';
import TrendyCollection from './trendy-collection';
import { introSlider } from './settings';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';
import store from '../../../store/index';

import style from './style.scss';

class IndexFive extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("5"));
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

                <OuterOverlay />

                <div className="page-wrapper">
                    <HeaderFive />

                    <div className="main">
                        <div className="intro-slider-container mb-0">
                            <OwlCarousels adClass="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                                {
                                    _data.demo5.introBanners.map(( item, index ) =>
                                        <IntroSlide slide={ item } key={ index } />
                                    )
                                }
                            </OwlCarousels>

                            <span className="slider-loader text-white"></span>
                        </div>

                        <BrandTwo adClass="brands-border owl-simple mb-5" />

                        <div className="container">
                            <div className="banner-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Banner banner={ _data.demo5.banners[0] } />
                                    </div>  

                                    <div className="col-md-6">
                                        <Banner banner={ _data.demo5.banners[1] } />
                                        <Banner banner={ _data.demo5.banners[2] } />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4"></div>

                        <TrendyCollection />

                        <div className="mb-5"></div>

                        <VideoBanner image="assets/images/demos/demo-5/bg-2.jpg" content="<span>New Collection</span><strong>Winter’19 <i>/</i> Spring’20</strong>" />
                        
                        <SpecialCollection />
                        
                        <NewCollection filter/>
                            
                        <div className="mb-2"></div>

                        <CTA />

                        <div className="bg-lighter pt-7 pb-4" style={ {backgroundColor: "#fafafa"} }>
                            <div className="container">
                                <div className="instagram-feed-container">
                                    <div className="row">
                                        {
                                            _data.demo5.instagram.slice(0,2).map(( item, index ) =>
                                                <Instagram insta={ item } key={ index } />
                                            )
                                        }

                                        <div className="feed-col feed-col-title">
                                            <div className="instagram-feed-title">
                                                <i className="icon-instagram"></i>
                                                <p>@Molla_store <br />on instagram</p>
                                                <Link to="#">FOLLOW</Link>
                                            </div>
                                        </div>
                                        
                                        {
                                            _data.demo5.instagram.slice(2,9).map(( item, index ) =>
                                                <Instagram insta={ item } key={ index } />
                                            )
                                        }
                                    </div>
                                </div>

                                <ServiceThree />
                            </div>
                        </div>
                    </div>

                    <FooterTwo type={ 2} />
                </div>

                <VideoModal />
                <MobileMenu />
                <NewsletterModal demo="5"/>
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexFive;