import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderSixteen from '../../common/header/header-16';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterSix from '../../common/footer/footer-six';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import Brand from '../../features/brand/brand-one';
import OwlCarousel from '../../features/owl-carousel';
import ServiceBoxTwo from '../../features/service-list/service-two';
import NewsletterModal from '../../features/newsletter-modal';

import Banner from './banner';
import IntroSlider from './intro_slider';
import CTA from './cta';
import ProductGroup from './product-group';
import HotCollection from './hot-collection';
import PostGroup from './post-group';

import { introSlider, brandSlider } from './settings';


import store from '../../../store';
import data from '../../../mock_data/data';
import style from './style.scss';

import { outerLoading, changeDemo } from '../../../actions';
import { initSettings, isIEBrowser } from '../../../utils/utils';


export default class IndexThirteen extends Component {
    componentDidMount() {
        initSettings();

        if ( isIEBrowser ) {
            document.querySelector('.header-center .header-search').style.marginLeft = "-1.1rem";
            document.querySelector('.header-center .header-search').style.paddingLeft = "1rem";    
        }
        store.dispatch(changeDemo("13"));
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
                    <title>Molla React Ecommerce - Market</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Market</h1>
                
                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderSixteen />
                    
                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside" data-toggle="owl" carouselOptions={ introSlider } >
                                { data.demo13.introBanners.map((slider, index) => 
                                    <IntroSlider slider = {slider} key = {`introSlider_${index}`}/>
                                ) }
                            </OwlCarousel>

                            <span className="slider-loader"></span>
                        </div>

                        <div className="mb-4"></div>

                        <div className="container">
                            <h2 className="title text-center mb-2">Explore Popular Categories</h2>

                            <div className="cat-blocks-container">
                                <div className="row">
                                    { data.demo13.categories.map((cat, index) => 
                                        <div className="col-6 col-sm-4 col-lg-2" key={ `popular_${index}` }>
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed`} className="cat-block">
                                                <figure>
                                                    <span>
                                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-13/cats/${parseInt(index) + 1 }.jpg`} alt="Category" />
                                                    </span>
                                                </figure>

                                                <h3 className="cat-block-title">{cat}</h3>
                                            </Link>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </div>

                        <div className="mb-2"></div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3" >
                                    <Banner banner = { data.demo13.categoryBanners[0] }  />
                                </div>
                                <div className="col-sm-6 col-lg-3 order-lg-last" >
                                    <Banner banner = { data.demo13.categoryBanners[1] } />
                                </div>
                                <div className="col-lg-6" >
                                    <Banner banner = { data.demo13.categoryBanners[2] } />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3"></div>
                        
                        <div className="bg-light pt-3 pb-5">
                            <div className="container">
                                <HotCollection />
                            </div>
                        </div>

                        <div className="mb-3"></div>

                        <div className="container electronics">
                            <ProductGroup category="Electronics"/>
                        </div>

                        <div className="mb-3"></div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Banner banner = { data.demo13.categoryBanners[3] } />
                                </div>

                                <div className="col-lg-6">
                                    <Banner banner = { data.demo13.categoryBanners[4] } />
                                </div>
                            </div>
                        </div>

                        <div className="mb-1"></div>

                        <div className="container furniture">
                            <ProductGroup category="Furniture"/>
                        </div>

                        <div className="mb-3"></div>

         
                        <div className="container clothing">
                            <ProductGroup category="Clothing & Apparel"/>
                        </div>

                        <div className="mb-3"></div>

                        <div className="container">
                            <h2 className="title title-border mb-5">Shop by Brands</h2>
                            <Brand introSlider={ JSON.stringify(brandSlider) } count={ 7} />
                        </div>

                        <CTA />

                        <PostGroup/>
                    </div>

                    <FooterSix logo="assets/images/demos/demo-13/logo-footer.png" width={105} height={25}>
                        <ServiceBoxTwo />
                    </FooterSix>
                </div>

                <NewsletterModal demo='13' />

                <MobileMenu />

                <QuickView />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}