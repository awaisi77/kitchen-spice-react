import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderEleven from '../../common/header/header-11';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterTen from '../../common/footer/footer-ten';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import ServiceBoxTwo from '../../features/service-list/service-two';
import InstagramTwo from '../../features/instagram/instagram-two';
import NewsletterModal from '../../features/newsletter-modal';

import store from '../../../store';

import CTA from './cta';
import Banner from './banner';
import TrendyCollection from './trendy-collection';
import PostGroup from './post-group';

// import Utils
import { changeDemo, outerLoading } from '../../../actions';
import { initSettings, isIEBrowser } from '../../../utils/utils';

import data from '../../../mock_data/data';
import style from './style.scss';


class IndexSeventeen extends Component {

    componentDidMount() {
        initSettings();
        if (isIEBrowser())
            document.querySelector('.form-control').setAttribute("style", "padding-left: 30px");
        store.dispatch(changeDemo('17'));
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
                    <HeaderEleven logo="assets/images/demos/demo-15/logo.png"/>
                    
                    <div className="main">
                        <div className="intro-section bg-lighter pt-3">
                            <div className="container">
                                <div className="banner-group">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <Banner banner = { data.demo17.categoryBanners[0] }/>
                                        </div>

                                        <div className="col-lg-7">
                                            <Banner banner = { data.demo17.categoryBanners[1] }/>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Banner banner = { data.demo17.categoryBanners[2] }/>
                                                </div>

                                                <div className="col-sm-6">
                                                    <Banner banner = { data.demo17.categoryBanners[3] }/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ServiceBoxTwo />
                        </div>

                        <div className="container">
                            <TrendyCollection />
                            <div className="mb-3"></div>
                        </div>

                        <CTA />

                        <PostGroup />

                        <div className="container-fluid">
                            <div className="heading text-center">
                                <h2 className="title">Follow us on instagram</h2>
                                <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                            </div>

                            <InstagramTwo demo = "demo17"/>
                        </div>
                    </div>
                    
                    <FooterTen adClass=""/>
                </div>

                <MobileMenu />

                <QuickView />

                <NewsletterModal demo='17' />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexSeventeen;