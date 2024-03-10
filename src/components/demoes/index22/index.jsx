import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

// import Custom Components
import HeaderTwenty from '../../common/header/header-20';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterThree from '../../common/footer/footer-three';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBox from '../../features/service-list/service-one';
import BrandBox from '../../features/brand/brand-one';
import QuickView from '../../features/product/quickview';

import store from '../../../store';

import IntroSlide from './intro_slider';
import Banner from './banner';
import Newsletter from './newsletter';
import NewCollection from './new-collection';
import FeaturedCollection from './featured-collection';
import PostGroup from './post-group';

import { introSlider, brandSlider } from './settings';

import { initSettings, hoverIntent } from '../../../utils/utils';
import {changeDemo, outerLoading, receiveProducts} from '../../../actions';
import _data from '../../../mock_data/data';
import style from './style.scss';

class IndexTwentytwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                products: [],
                status: false,
            }
        }
    }

    componentDidMount() {
        initSettings();
        hoverIntent();
        store.dispatch(changeDemo("22"));

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
                    <title>Kitchen & Spice Market</title>
                </Helmet>
                
                <h1 className="d-none">Kitchen & Spice Market</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderTwenty />
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="intro-slider-container mt-2">
                                        <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light"  carouselOptions = { introSlider }>
                                            {
                                                _data.demo22.introBanners.slice(0, 4).map(( item, index ) =>
                                                    <IntroSlide slider={ item } key={ `intro_${index}`} />
                                                )   
                                            }
                                        </OwlCarousel>

                                        <span className="slider-loader"></span>
                                    </div>
                                </div>
                                <div className="col-lg-4 banner">
                                    {
                                        _data.demo22.introBanners.slice(4, 7).map(( item, index ) =>
                                            <IntroSlide slider={ item } key={ `introBanners_${index}` } />
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                   {/*     <div className="container text-center shop">
                            <h2 className="title mt-4 mb-5"> Shop by Brands </h2>

                            <BrandBox adClass="mb-5 owl-simple" count={ 7 } sliderOption={ brandSlider }/>
                        </div>*/}
                        
                        <FeaturedCollection />

                     {/*   <Newsletter />    */}

                        <div className="container banner-container">
                            <div className="row">
                                {
                                    _data.demo22.banners.map(( item, index ) =>
                                        <Banner banner={ item } key={ `banner_${index}` } />
                                    )
                                }
                            </div>
                        </div>

                        <ServiceBox container="container service" boxAdClass="icon-box-side" iconAdClass="text-dark" start={ 1 } end={ 4 }/>

                        <div className="container popular">
                            <hr className="mb-5"/>

                            <div className="section-title">
                                <div><p className="title"><span>Popular Products</span></p></div>
                                
                                <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="link">See All Products</Link>
                            </div>
                            <NewCollection />
                        </div>

                        <div className="container bannerad">
                            <div className="banner-lg"  style={ {backgroundImage: "url(assets/images/demos/demo-22/bannerad/background.jpg)"} }>
                                <div className="price">
                                    <h4 className="highlight">from</h4><h3>$39</h3><sup className="highlight">,99</sup>
                                </div>
                                <div className="content">
                                    <h4>woodworking tools</h4>
                                    <h3>from top rated brands</h3>
                                    <div className="action">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }>discover now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <FooterThree logo="assets/images/demos/demo-22/logo.jpg" width="100"/>
                </div>
                <QuickView />

                <MobileMenu adClass="mobile-menu-light"/>
                
              {/*  <NewsletterModal demo="22"/>*/}

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwentytwo;