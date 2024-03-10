import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Helmet } from 'react-helmet';

// import Custom Components
import HeaderThirteen from '../../common/header/header-13';
import OuterOverlay from '../../common/overlay/outer-overlay';
import FooterTen from '../../common/footer/footer-ten';
import OwlCarousels from '../../features/owl-carousel';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import QuickView from '../../features/product/quickview';
import SideBarFilter from '../../features/sidebar/sidebar-filter';
import NewsletterModal from '../../features/newsletter-modal';

import IntroSlider from './intro-slider';
import ProductCollection from './product-collection';
import { introSlider } from './settings';

import { initSettings } from '../../../utils/utils';
import { changeDemo, outerLoading } from '../../../actions';
import _data from '../../../mock_data/data';
import store from '../../../store';
import style from './style.scss';

class IndexEleven extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 12
        };
    }

    UNSAFE_componentWillMount() {
        style.use();
        store.dispatch(outerLoading());
    }

    componentDidMount() {
        initSettings();
        store.dispatch(changeDemo('11'));
    }    

    componentWillUnmount() {
        style.unuse();
    }

    hideSideBar(){
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
            document.querySelector('body').classList.remove('sidebar-filter-active'); 
        document.querySelector('.widget-filter-area').classList.remove('active');
    }


    render() {
        return(
            <React.Fragment>
                <Helmet>
                    <title>Molla React Ecommerce - Furniture Store</title>
                </Helmet>
                
                <h1 className="d-none">Molla React Ecommerce - Furniture Store</h1>
                
                <OuterOverlay/>
                
                <div className="page-wrapper">
                    <HeaderThirteen />

                    <div className="main">
                        <div className="intro-slider-container mb-4">
                            <OwlCarousels adClass="intro-slider owl-simple owl-nav-inside" carouselOptions={ introSlider  }>
                                {
                                    _data.demo11.introBanners.map(( item, index) =>
                                        <IntroSlider slide={ item } key={ `intro_${ index }`} />
                                    )
                                }
                            </OwlCarousels>

                           <span className="slider-loader"></span>
                        </div>

                        <div className="container">
                            <SideBarFilter />
                            
                            <ProductCollection />
                        </div>
                    </div>

                    <FooterTen />
                </div>
                
                <div className="sidebar-filter-overlay" onClick={ this.hideSideBar }></div>

                <MobileMenu />

                <QuickView />

                <NewsletterModal demo='11' />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </React.Fragment>
        )
    }
}

export default IndexEleven;