
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderNine from '../../common/header/header-9';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterEight from '../../common/footer/footer-eight';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ServiceBox from '../../features/service-list/service-four';
import OwlCarousels from '../../features/owl-carousel';
import Testimonial from '../../features/testimonial/testimonial';
import QuickView from '../../features/product/quickview';
import NewsletterModal from '../../features/newsletter-modal';

import Banner from './banner';
import PostGroup from './post-group';
import FeaturedCollection from './featured-collection';
import NewCollection from './new-collection';
import { brandSlider, testiSlider } from './settings';

import { changeDemo, outerLoading } from '../../../actions';
import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data';
import store from '../../../store/index';

import style from './style.scss';

class IndexSeven extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo("7"));
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
                    <HeaderNine />

                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    _data.demo7.banners.slice(0, 2).map(( item , index) =>
                                    <div className="col-lg-6" key={ `banner1_${index}` }>
                                        <Banner banner={ item }/>
                                    </div>
                                    )
                                }
                            </div>

                            <div className="row justify-content-center">
                                {
                                    _data.demo7.banners.slice(2, 5).map(( item , index) =>
                                    <div className="col-md-6 col-lg-4" key={ `banner2_${index}` }>
                                        <Banner banner={ item }/>
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                        <ServiceBox />
                        
                        <div className="bg-light-2 pt-6 pb-6 featured">
                            <div className="container-fluid">
                                <FeaturedCollection />
                            </div>
                        </div>

                        <div className="mb-6"></div>
                        
                        <div className="container-fluid"> 
                            <NewCollection />

                            <hr className="mt-0 mb-6" />

                            <PostGroup />
                        </div>
                        

                        <div className="bg-light-2 pt-7 pb-6 testimonials">
                            <div className="container">
                                <h2 className="title text-center mb-2">Our Customers Say</h2>

                                <OwlCarousels adClass="owl-simple owl-testimonials" carouselOptions={ testiSlider } >
                                    {
                                        _data.demo7.testimonials.map((item, index) =>
                                        <Testimonial key={ index } lead={ item.lead } content={ item.content } name={ item.name } job={ item.job } />
                                    ) }
                                </OwlCarousels>
                            </div>
                        </div>

                        <OwlCarousels  adClass="owl-simple brands-border" carouselOptions={ brandSlider  }>
                            { _data.brands.default.slice(0,7).map(( vari, i ) => {
                                return (
                                    <Link to="#" className="brand"  key={ i } >
                                        <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name }/>
                                    </Link>
                                    )
                                })
                            }
                        </OwlCarousels>
                    </div>

                    <FooterEight/>
                </div>
                
                <QuickView />
                <ToastContainer className="toast-container" autoClose={ 3000 } />
                <NewsletterModal demo="7"/>
                <MobileMenu />
            </React.Fragment>
        )
    }
}

export default IndexSeven;