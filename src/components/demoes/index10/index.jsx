import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderTwelve from '../../common/header/header-12';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterThree from '../../common/footer/footer-three';
import OwlCarousel from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ProductCategoryTwo from '../../features/product-category/product-category-two';
import ServiceBoxTwo from '../../features/service-list/service-two';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';

import Introslide from './intro-slide';
import BannerGroup from './banner-group';
import CTAOne from './cta-one';
import CTATwo from './cta-two';
import NewCollection from './new-collection';
import TopCollection from './top-collection';
import PostGroup from './post-group';
import { introSlider } from './settings';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings, hoverIntent } from '../../../utils/utils';
import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexTen extends Component {

    componentDidMount() {
        initSettings();
        hoverIntent();
        store.dispatch(changeDemo('10'));
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
                    <title>Molla React Ecommerce - Shoes Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Shoes Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderTwelve />

                    <div className="main">
                        <div className="container">
                            <div className="intro-slider-container slider-container-ratio mb-2">
                                <OwlCarousel adClass="intro-slider owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider  }>
                                    {
                                        _data.demo10.introBanners.map(( item, index ) =>
                                            <Introslide slide={ item } key={ `intro_${index}`} />
                                        )
                                    }
                                </OwlCarousel>
                                <span className="slider-loader"></span>
                            </div>
                        </div>

                        <div className="banner-group">
                            <BannerGroup />
                        </div>

                        <ServiceBoxTwo adClass="bg-transparent icon-boxes-separator" iconAdClass="text-primary" />

                        <div className="bg-light pt-5 pb-10 mb-3">
                            <NewCollection />
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                {
                                    _data.demo10.categoryBanners.map(( item, index) =>
                                        <div className="col-sm-6 col-md-4" key={ `cat_banner ${index}` }>
                                            <ProductCategoryTwo 
                                                image = { item["image"] } 
                                                adClass = "font-weight-normal"
                                                category = { item["category"] } 
                                                count = { item["count"] } />
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="mb-4"></div>
                        
                        <TopCollection />

                        <div className="mb-5"></div>

                        <div className="container">
                            <CTAOne />
                        </div>

                        <div className="blog-posts">
                            <PostGroup />
                        </div>

                        <CTATwo />
                    </div>

                    <FooterThree logo="assets/images/demos/demo-10/logo-footer.png"/>
                </div>

                <MobileMenu />

                <NewsletterModal demo="10"/>

                <QuickView />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTen;