import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderTwentyOne from '../../common/header/header-21';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterFifteen from '../../common/footer/footer-fifteen';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ServiceBoxFive from '../../features/service-list/service-five';
import Brand from '../../features/brand/brand-one';
import OwlCarousels from '../../features/owl-carousel';
import NewsletterModal from '../../features/newsletter-modal';

import BannerGroup from './banner-group';
import Banner from './banner';
import Instagram from './instagram';
import IntroSlider from './intro_slider';
import Newsletter from './newsletter';
import BestCollection from './best-collection';
import SpecialCollection from './special-collection';
import NewCollection from './new-collection';
import { introSlider, brandSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexTwentyOne extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('21'));
   }

   UNSAFE_componentWillMount() {
       style.use();
       store.dispatch(outerLoading());
   }

   componentWillUnmount() {
       style.unuse();
   }

   hideNotification(e) {
        document.querySelector('.notification').style.display = "none";
        e.preventDefault();
   }

    render() {
        return(
            <React.Fragment>
                
                <Helmet>
                    <title>Molla React Ecommerce - Sport Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Sport Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <div className="notification" style={ {backgroundImage: `url(assets/images/demos/demo-21/notification-back.jpg)`} }>
                        <div className="notify-content">
                            <h3>FREE SHIPPING FOR ALL ORDERS OVER $50</h3>
                        </div>
                        <div className="notify-action">
                            <Link to="#"><i className="icon-close" onClick={ this.hideNotification }></i></Link>
                        </div>
                    </div>

                    <HeaderTwentyOne/>
                    
                    <div className="main">
                        <div className="intro-slider-container mb-5">
                            <OwlCarousels adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                                { _data.demo21.introBanners.map(( banner, index ) =>
                                    <IntroSlider banner={ banner } key={ banner.img + banner.title }/>
                                ) }
                            </OwlCarousels>

                            <span className="slider-loader"></span>
                        </div>

                        <BannerGroup banners={ _data.demo21.categoryBanners.slice(0, 3) } />

                        <div className="container logos">
                            <Brand sliderOption={ brandSlider } adClass="mb-5 owl-simple" count={ 7 } />
                        </div>

                        <div className="container bestsellers">
                            <hr className="mb-3" />
                            <div className="heading">
                                <h2 className="title text-center">BEST SELLERS</h2>
                                <p className="content text-center mb-4">The Trends Boutique: The latest fashion trends from top brands!</p>
                            </div>
                                
                            <BestCollection />
                        </div>
                        
                        <SpecialCollection />

                        <div className="container category-banner">
                            <div className="row">
                                { _data.demo21.categoryBanners.slice(3,7).map(( banner, index ) => 
                                    <Banner banner={ banner } key={ banner.img + banner.title }/>
                                ) }
                            </div>
                        </div>
                        
                        <NewCollection />

                        <div className="container newsletter">
                            <Newsletter />
                        </div>

                        <ServiceBoxFive 
                            container="container service mt-4"
                            start={ 15 }
                            end={ 19 }
                            boxAdClass="icon-box-side"
                            iconAdClass="text-dark"
                            adClass=""
                        />
                        
                        <Instagram />

                        <FooterFifteen />
                    </div>
                </div>

                <MobileMenu />

                <NewsletterModal demo="21"/>
                
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwentyOne;