import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderEight from '../../common/header/header-8';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterSeven from '../../common/footer/footer-seven';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBox from '../../features/service-list/service-one';

import Introslide from './intro-slide';
import Banner from './banner';
import TrendyCollection from './trendy-collection';
import NewCollection from './new-collection';
import DealCollection from './deal-collection';
import PostGroup from './post-group';
import CTA from './cta'
import { introSlider, brandSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';
import store from '../../../store';
import { changeDemo, outerLoading } from '../../../actions';

import style from './style.scss';


class IndexSix extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("6"));
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
                    <HeaderEight />

                    <div className="main">
                        <div className="intro-slider-container">
                            <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light"  carouselOptions={ introSlider } >
                                {
                                    _data.demo6.introBanners.map(( item, index ) =>
                                        <Introslide slide={ item } key={ `intro_${index}`}/>
                                    )
                                }
                            </OwlCarousel>

                            <span className="slider-loader"></span>
                        </div>

                        <div className="pt-2 pb-3">
                            <div className="container">
                                <div className="row">
                                    {
                                        _data.demo6.banners.slice(0,2).map(( item, index ) =>
                                            <div className="col-sm-6" key={ index  }>
                                                <Banner banner = { item }/>
                                            </div>
                                        )
                                    }
                                </div>
                                <hr className="mt-0 mb-0"/>
                            </div>
                        </div>

                        <div className="mb-5"></div>
                        
                        <TrendyCollection />

                        <div className="mb-5"></div>

                        <DealCollection />
                        
                        <div className="pt-4 pb-3" style={ {backgroundColor: "#222"} }>
                            <ServiceBox background="dark"/>
                        </div>
                        
                        <div className="mb-6"></div>

                        <NewCollection />

                        <div className="pb-3">
                            <div className="container brands pt-5 pt-lg-7 ">
                                <h2 className="title text-center mb-4">shop by brands</h2>                
                                
                                <OwlCarousel  adClass="owl-simple brand-carousel" carouselOptions={ brandSlider }>
                                    { _data.brands.default.slice(0, 6).map(( vari, i ) => {
                                        return (
                                            <Link to="#" className="brand"  key={ i } >
                                                <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name }/>
                                            </Link>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </div>

                            <div className="mb-5 mb-lg-7"></div>

                            <div className="container newsletter">
                                <div className="row">
                                    <div className="col-lg-6 banner-overlay-div">
                                        <Banner banner={ _data.demo6.banners[2] } />
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-stretch subscribe-div">
                                        <CTA />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-2"></div>

                        <PostGroup />
                    </div>
                    <FooterSeven />
                </div>
                <MobileMenu/>
                <NewsletterModal demo="6"/>
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexSix;