import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import SideBar from '../../common/header/sidebar-header';
import OuterOverlay from '../../common/overlay/outer-overlay';
import HeaderTwentyThree from '../../common/header/header-23';
import FooterEighteen from '../../common/footer/footer-eighteen';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import ServiceBoxSix from '../../features/service-list/service-six';
import OwlCarousels from '../../features/owl-carousel';
import InstagramThree from '../../features/instagram/instagram-three';
import NewsletterModal from '../../features/newsletter-modal';

import Banner from './banner';
import TrendyCollection from './trendy-collection';
import NewCollection from './new-collection';
import { introSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexTwentythree extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('23'));
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
                    <title>Molla React Ecommerce - Tools Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Tools Store</h1>

                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <div className="container page-container">
                        <HeaderTwentyThree/>
                        <SideBar />

                        <div className="page-content-div">
                            <div className="main">
                                <section className="slider">
                                    <div className="intro-slider-container mb-3">
                                        <OwlCarousels adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                                            <div className="intro-slide" style={ {backgroundImage: `url(assets/images/demos/demo-23/slider/slide.jpg)`} }>
                                                <div className="intro">
                                                    <div className="title">
                                                        <h3>End of Season Sale</h3>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Save 40% off</h4>
                                                    </div>
                                                    <div className="action">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>discover now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousels>

                                        <span className="slider-loader"></span>
                                    </div>
                                </section>
                                
                                <ServiceBoxSix adClass="service"/>

                                <section className="new-women row">
                                    <div className="banner col-lg-6 col-md-5 col-sm-6 col-12">
                                        {
                                            <Banner banner={ _data.demo23.banners[0] } />
                                        }
                                    </div>
                                    
                                    <NewCollection type={ "Women" } />
                                </section>

                                <section className="testimonials">
                                    <div className="testimonials-content">
                                        <span className="quote">“</span>
                                        <div className="content">
                                            <h4><i>Sed egestas, antet vulputate volutpat, eros pede semperest, vitae luctus metus</i></h4>
                                            <h4><i>libero eu augue Morobi purus libero, faucibus acipiscing.</i></h4>
                                        </div>
                                        <div className="creater">
                                            <p className="name">Charly Smith,</p>
                                            <p className="role">Customer</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="new-men row mt-12">
                                    <NewCollection type={ "Men" } />

                                    <div className="banner col-lg-6 col-md-5 col-sm-6 col-12">
                                        {
                                            <Banner banner={ _data.demo23.banners[1] } />
                                        }
                                    </div>
                                </section>

                                <section className="banner-section">
                                    {
                                        <Banner banner={ _data.demo23.banners[2] } />
                                    }

                                    {
                                        _data.demo23.banners.slice( 3 , 5 ).map(( item, index ) =>
                                            <div className="col-lg-6 col-md-6 col-12" key={ index }>
                                                <Banner banner={ item } />
                                            </div>
                                        )
                                    }
                                </section>
                                
                                <TrendyCollection />

                                <section className="brands mb-7">
                                    <div className="heading">
                                        <p className="heading-cat">Shop by Brands</p>
                                        <h3 className="heading-title">The World's Premium Brands<br />In One Destination.</h3>
                                    </div>

                                    <div className="brands-content">
                                        { _data.brands.default.slice(0, 8).map(( brand, index ) =>
                                            <div className="col-lg-3 col-md-4 col-6" key={ index }>
                                                <Link to="#" className="brand">
                                                    <img src={ process.env.PUBLIC_URL + '/' + brand.image } alt="Brand Name" />
                                                </Link>
                                            </div>
                                        ) }
                                    </div>
                                </section>

                                <section className="instagram">
                                    <div className="heading">
                                        <h3 className="heading-title">Shop by Instagram</h3>
                                        <p className="heading-cat">@Molla Instagram</p>
                                    </div>
                                    
                                    <InstagramThree 
                                        demo = "demo23"
                                        adClass = "instagram-images"
                                    />
                                </section>
                            </div>

                            <FooterEighteen />
                        </div>
                    </div>
                    
                </div>

                <MobileMenu />

                <QuickView />
                
                <NewsletterModal demo='23' />
                
                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexTwentythree;