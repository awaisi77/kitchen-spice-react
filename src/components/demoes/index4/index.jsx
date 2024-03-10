import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderSeven from '../../common/header/header-7';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterFive from '../../common/footer/footer-five';
import OwlCarousel from '../../features/owl-carousel';
import QuickView from '../../features/product/quickview';
import ServiceBox from '../../features/service-list/service-two';
import NewsletterModal from '../../features/newsletter-modal';
import MobileMenuTwo from '../../common/header/common/mobile-menus/menu-2';

import DealProduct from './deal-product';
import IntroSlide from './intro-slide';
import Banner from './banner';
import BannerGroup from './banner-group';
import NewCollection from './new-collection';
import TrendingCollection from './trendy-collection';
import ProductCollection from './product-collection';
import { introSlider, brandSlider } from './settings'

// import Utils
import { initSettings, isIEBrowser } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';
import store from '../../../store'
import { changeDemo, outerLoading } from '../../../actions';

import style from './style.scss';


class IndexFour extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("4"));
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
                    <title>Molla React Ecommerce - Electronic Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Electronic Store</h1>

                <OuterOverlay />

                <div className="page-wrapper">
                    <HeaderSeven />

                    <div className="main">
                        <div className="intro-slider-container mb-5">
                            <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                                {
                                    _data.demo4.introBanners.map( ( item, index ) => 
                                        <IntroSlide data={ item } key={ index } />
                                    )
                                }
                            </OwlCarousel>

                            <span className="slider-loader"></span>
                        </div>

                        <div className="container">
                            <h2 className="title text-center mb-4">Explore Popular Categories</h2>
                            
                            <div className="cat-blocks-container">
                                <div className="row">
                                    {
                                        _data.demo4.bannerCategories.map( ( item, index ) => 
                                            <Banner data={ item } key={ index }/> 
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mb-4"></div>

                        <BannerGroup data={ _data.demo4.bannerContents } />

                        <div className="mb-3"></div>

                        <NewCollection />

                        <div className="mb-6"></div>

                        <div className="container">
                            <div className="cta cta-border mb-5" style={ { backgroundImage: "url(assets/images/demos/demo-4/bg-1.jpg)" } }>
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-4/camera.png` } alt="camera" className="cta-img"/>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="cta-content" style={ { display: !isIEBrowser() ? 'flex' : 'auto'} }>
                                            <div className="cta-text text-right text-white">
                                                <p>Shop Today’s Deals <br/><strong>Awesome Made Easy. HERO7 Black</strong></p>
                                            </div>
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>           
                        
                        <div className="container">
                            <div className="heading text-center mb-3">
                                <h2 className="title">Deals & Outlet</h2>
                                <p className="title-desc">Today’s deal and more</p>
                            </div>

                            <div className="row">
                                { _data.demo4.dealContents.map(( item, index ) =>
                                    <div className="col-lg-6 deal-col" key={ index  }>
                                        <DealProduct data={ item } />
                                    </div>
                                ) }
                            </div>

                            <div className="more-container text-center mt-1 mb-5">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-dark-2 btn-round btn-more">
                                    <span>Shop more Outlet deals</span><i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="container">
                            <hr className="mb-0" />
                            <OwlCarousel  adClass="mt-5 mb-5 owl-simple brand-carousel" carouselOptions={ brandSlider }>
                                { _data.brands.default.slice(0,6).map((vari, i) => {
                                    return (
                                        <Link to="#" className="brand"  key={ i } >
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name }/>
                                        </Link>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>

                        <TrendingCollection />

                        <div className="mb-5"></div>
                        
                        <ProductCollection />

                        <div className="mb-4"></div>

                        <div className="container">
                            <hr className="mb-0"/>
                        </div>
                        
                        <ServiceBox />
                        
                        <QuickView />
                        <ToastContainer autoClose={ 3000 } className="toast-container"/>
                        <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={ {backgroundImage: 'url(assets/images/demos/demo-4/bg-5.jpg)'} }>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-sm-10 col-md-8 col-lg-6">
                                        <div className="cta-heading text-center">
                                            <h3 className="cta-title text-white">Get The Latest Deals</h3>
                                            <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>
                                        </div>
                                    
                                        <form action="#">
                                            <div className="input-group input-group-round">
                                                <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required style={ isIEBrowser() ? { border: 'none' } : {}}/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterFive logo="assets/images/demos/demo-4/logo-footer.png" />
                </div>
                <MobileMenuTwo adClass="mobile-menu-light"/>
                <NewsletterModal demo="4"/>
            </React.Fragment>
        )
    }
}

export default IndexFour;