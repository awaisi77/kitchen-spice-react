import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderNineteen from '../../common/header/header-19';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterThirteen from '../../common/footer/footer-thirteen';
import MobileMenu from '../../common/header/common/mobile-menus/menu-2';
import NewsletterModal from '../../features/newsletter-modal';
import ServiceBox from '../../features/service-list/service-one';

import Banner from './banner';
import BestCollection from './best-collection';
import NewCollection from './new-collection';
import PostGroup from './post-group';
import CTA from './cta';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';

import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexTwenty extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('20'));
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
                    <title>Molla React Ecommerce - Book Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Book Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderNineteen />

                    <div className="main">
                        <div className="intro-section pt-lg-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <Banner banner={ _data.demo20.banners[0] } />
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <Banner banner={ _data.demo20.banners[1] } />
                                    </div>
                                    
                                    <div className="col-sm-6 col-lg-3">
                                        <Banner banner={ _data.demo20.banners[2] } />
                                        <Banner banner={ _data.demo20.banners[3] } />
                                    </div>

                                </div>
                            </div>

                            <div className="icon-boxes-container bg-transparent">
                                <ServiceBox boxAdClass="icon-box-side" start={ 15 } end={ 18 }/>
                            </div>
                        </div>

                        <div className="bestseller-products bg-light pt-5 pb-5 mb-5">
                            <div className="block">
                                <div className="block-wrapper ">
                                    <div className="container">
                                        <div className="heading heading-flex">
                                            <div className="heading-left">
                                                <h2 className="title">Bestsellers</h2>
                                            </div>

                                            <div className="heading-right">
                                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                                            </div>
                                        </div>

                                        <BestCollection type="best" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="heading heading-flex">
                                <div className="heading-left">
                                    <h2 className="title">New Releases</h2>
                                </div>

                                <div className="heading-right">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>

                            <div className="row">
                                <NewCollection />
                            </div>
                        </div>

                        <div className="mb-5"></div>

                        <div className="banner-group mb-2">
                            <div className="container">
                                <div className="row justify-content-center">
                                    {
                                        _data.demo20.banners.slice( 4 , 7 ).map(( item, index ) =>
                                            <div className="col-md-6 col-lg-4" key={ `banner_${index}` }>
                                                <Banner banner={ item } /> 
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="block-wrapper ">
                                <div className="container">
                                    <div className="heading heading-flex">
                                        <div className="heading-left">
                                            <h2 className="title">Picks From Our Experts</h2>
                                        </div>

                                        <div className="heading-right">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                                        </div>
                                    </div>      

                                    <BestCollection type="expert" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-5"></div>
                        
                        <PostGroup />
                        <CTA />
                    </div>
                    <FooterThirteen logo="assets/images/demos/demo-20/logo-footer.png"/>
                </div>

                <MobileMenu/>
                
                <NewsletterModal demo="20"/>

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwenty;