import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderTwentyFour from '../../common/header/header-24';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterThree from '../../common/footer/footer-three';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBoxTwo from '../../features/service-list/service-two';

import BannerGroup from './banner-group';
import Banner from './banner';
import SideNavBar from './sidenav';
import Newsletter from './newsletter';
import TrendyCollection from './trendy-collection';
import SoonCollection from './soon-collection';
import BestCollection from './best-collection';
import PostGroup from './post-group';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data.json';
import store from '../../../store';
import style from './style.scss';

class IndexNineteen extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('19'));
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
                    <title>Molla React Ecommerce - Game Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Game Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <div className="wrap-container">
                        <HeaderTwentyFour logo="assets/images/demos/demo-15/logo.png"/>

                        <div className="main">
                            <div className="mb-2"></div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 d-none d-xl-block">
                                        <SideNavBar />
                                    </div>

                                    <div className="col-lg-8 col-xl-6">
                                        <Banner banner={ _data.demo19.banners[0] } />
                                    </div>

                                    <div className="col-sm-6 col-lg-4 col-xl-3">
                                        <Banner banner={ _data.demo19.banners[1] } />

                                        <Banner banner={ _data.demo19.banners[2] } />
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <Banner banner={ _data.demo19.banners[3] } />
                                    </div>

                                    <div className="col-lg-9">
                                        <Banner banner={ _data.demo19.banners[4] } />
                                    </div>
                                </div>
                            </div>

                            <ServiceBoxTwo />

                            <div className="bg-light pt-3 pb-5 mb-5">
                                <div className="container">
                                    <TrendyCollection />
                                </div>
                            </div>

                            <div className="container">
                                <BannerGroup />
                            </div>

                            <div className="container">
                                <hr className="mt-0 mb-4" />
                            </div>
                            
                            <div className="container">
                                <div className="heading heading-flex mb-2 mb-lg-3">
                                    <div className="heading-left">
                                        <h2 className="title mb-0">Games Coming Soon</h2>
                                    </div>

                                    <div className="heading-right">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="title-link">View more products <i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="games-soon">
                                    <div className="row">
                                        <SoonCollection />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3"></div>

                            <div className="container">
                                <Newsletter />
                            </div>

                            <div className="container">
                                <div className="heading heading-flex mb-2">
                                    <div className="heading-left">
                                        <h2 className="title mb-5">Consoles & Accessories</h2>
                                    </div>

                                    <div className="heading-right">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="title-link">View more products <i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <BestCollection />
                                <div className="mb-5"></div>
                            </div>

                            <PostGroup />
                        </div>

                        <FooterThree logo = "assets/images/demos/demo-19/logo-footer.png" />
                    </div>
                </div>
                
                <NewsletterModal demo="19"/>

                <MobileMenu />

                <ToastContainer autoClose={ 3000 } className="toast-container" />

            </React.Fragment>
        )
    }
}

export default IndexNineteen;