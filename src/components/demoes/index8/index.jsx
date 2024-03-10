import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderTen from '../../common/header/header-10';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterNine from '../../common/footer/footer-nine';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ServiceBoxThree from '../../features/service-list/service-three';
import NewsletterModal from '../../features/newsletter-modal';
import Instagram from '../../features/instagram/instagram-one';

import Introslide from './intro-slide';
import Banner from './banner';
import FeaturedCollection from './featured-collection';
import NewCollection from './new-collection';
import { introSlider, brandSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data.json';
import store from '../../../store';

import style from './style.scss';

class IndexEight extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("8"));
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
                    <HeaderTen />

                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light"                                  
                                carouselOptions={ introSlider } >
                                {
                                    _data.demo8.introBanners.map(( item, index ) =>
                                        <Introslide slide={ item } key={ `Intro_${index}`} />
                                    )
                                }
                            </OwlCarousel>

                            <span className="slider-loader"></span>
                        </div>

                        <div className="pt-2 pb-2">
                            <div className="container brands">
                                <div className="banner-group">
                                    <div className="row">
                                        {
                                            _data.demo8.banners.slice(0, 3).map(( item, index ) =>
                                                <div className={ `col-sm-6 col-lg-4 ${ index === 2 ? "d-none d-lg-block" : "" }`} key={ `banner1_${index}` }>
                                                    <Banner banner={ item }/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                <OwlCarousel  adClass="mt-3 mb-3 owl-simple brand-carousel" carouselOptions={ brandSlider  }>
                                    { _data.brands.default.slice(0, 7).map((vari, i) => {
                                        return (
                                            <Link to="#" className="brand"  key={ i } >
                                                <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name }/>
                                            </Link>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="mb-3"></div>

                        <FeaturedCollection />

                        <div className="mb-3 mb-xl-2"></div>

                        <div className="trending">
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-8/banners/banner-4.jpg` } alt="Banner"/>
                            </Link>
                            <div className="banner banner-big d-md-block">
                                <div className="banner-content text-center">
                                    <h4 className="banner-subtitle text-white">Trending</h4>
                                    <h3 className="banner-title text-white">New League</h3>
                                    <p className="d-none d-lg-block text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/>Donec odio. Quisque volutpat mattis eros. </p> 

                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-primary-white">
                                        <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container new-arrivals">
                            <div className="row">
                                {
                                    _data.demo8.banners.slice(3, 5).map(( item, index ) =>
                                        <div className="col-md-6" key={ `banner2_${index}` }>
                                            <Banner banner={ item }/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>        

                        <div className="mb-5"></div>

                        <NewCollection />

                        <div className="mb-7"></div>
            
                        <div className="container">
                            <ServiceBoxThree boxAdClass="icon-box-card text-center" textAdClass=""/>
                        </div>   

                        <div className="container instagram">
                            <div className="heading text-center">
                                <h2 className="title title-lg">Follow Us On Instagram</h2>
                                <p className="title-desc">Wanna share your style with us?</p>
                            </div>
                        </div>
                        <Instagram />
                    </div>
                    <FooterNine />
                </div>
                <MobileMenu/>
                <NewsletterModal demo="8"/>
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexEight;