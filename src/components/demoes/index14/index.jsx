import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

import store from '../../../store';

// import Custom Components
import HeaderFifteen from '../../common/header/header-15';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterEleven from '../../common/footer/footer-eleven';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenuTwo from '../../common/header/common/mobile-menus/menu-2';
import ServiceBoxTwo from '../../features/service-list/service-two';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';
import BrandBox from '../../features/brand/brand-one';

import Introslide from './intro-slide';
import Sidebar from './sidebar';
import Banner from './banner';
import CTA from './cta';
import { introSlider, brandSlider } from './settings';
import TrendyCollection from './trendy-collection';
import ProductGroup from './product-group';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';

import _data from '../../../mock_data/data';
import style from './style.scss';

class IndexFourteen extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("14"));
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
                    <HeaderFifteen />

                    <div className="main">
                        <div className="mb-lg-2"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                                    <div className="intro-slider-container slider-container-ratio mb-2">
                                        <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside" carouselOptions={ introSlider  }>
                                            {
                                                _data.demo14.introBanners.map(( item, index ) =>
                                                    <Introslide slide={ item } key={ `intro_${ index }`} />                                                    
                                                )
                                            }
                                        </OwlCarousel>
                                        
                                        <span className="slider-loader"></span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-xxl-2 d-none d-xxl-block">
                                    <Banner data={ _data.demo14.banners[7] } />
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-9 col-xxl-10">
                                    <div className="row">
                                        <div className="col-lg-12 col-xxl-4-5col">
                                            <div className="row banner-group">
                                                <div className="col-md-6">
                                                    <Banner data={ _data.demo14.banners[0] } />
                                                </div>

                                                <div className="col-md-6">
                                                    <Banner data={ _data.demo14.banners[1] } />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-xxl-5col d-none d-xxl-block">
                                            <Banner data={ _data.demo14.banners[2] } />
                                        </div>
                                    </div>

                                    <div className="mb-3"></div>

                                    <BrandBox adClass="owl-simple brands-carousel" count={ 7} sliderOption={ brandSlider} />

                                    <div className="mb-5"></div>

                                    <TrendyCollection />

                                    <div className="mb-5"></div>

                                    <ProductGroup 
                                        category = "Electronics"
                                        index = { 0 }
                                    />

                                    <div className="mb-3"></div>

                                    <ProductGroup 
                                        category = "Furniture"
                                        index = { 1 }
                                    />

                                     <div className="mb-3"></div>

                                    <div className="row banner-group">
                                        {
                                            _data.demo14.banners.slice(3, 5).map(( item, index ) =>
                                                <div className="col-md-6" key={ `banner_${index}` }>
                                                    <Banner data={ item } key = {`banner_${index}`}/>
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className="mb-3"></div>

                                    <ProductGroup 
                                        category = "Clothing"
                                        index = { 2 }
                                    />

                                    <div className="mb-3"></div>

                                    <ProductGroup 
                                        category = "Cooking"
                                        index = { 3 }
                                    />

                                    <div className="mb-3"></div>

                                    <ServiceBoxTwo adClass="" />

                                    <div className="mb-5"></div>
                                </div>
                                <Sidebar banners={ _data.demo14.banners.slice(5, 7) }/>
                            </div>
                        </div>
                        <CTA />
                    </div>

                    <FooterEleven />
                </div>
                <MobileMenuTwo />
                <NewsletterModal demo="14"/>
                <QuickView />
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexFourteen;