import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import 'react-app-polyfill/ie11';

// Store
import store from './store';

// Actions
import { getAllProducts, getAllPosts, closeQuickViewModal } from './actions';

// Layouts
import Layout from './components/app';

// Demoes
import Index1 from './components/demoes/index1';
import Index2 from './components/demoes/index2';
import Index3 from './components/demoes/index3';
import Index4 from './components/demoes/index4';
import Index5 from './components/demoes/index5';
import Index6 from './components/demoes/index6';
import Index7 from './components/demoes/index7';
import Index8 from './components/demoes/index8';
import Index9 from './components/demoes/index9';
import Index10 from './components/demoes/index10';
import Index11 from './components/demoes/index11';
import Index12 from './components/demoes/index12';
import Index13 from './components/demoes/index13';
import Index14 from './components/demoes/index14';
import Index15 from './components/demoes/index15';
import Index16 from './components/demoes/index16';
import Index17 from './components/demoes/index17';
import Index18 from './components/demoes/index18';
import Index19 from './components/demoes/index19';
import Index20 from './components/demoes/index20';
import Index21 from './components/demoes/index21';
import Index22 from './components/demoes/index22';
import Index23 from './components/demoes/index23';
import Index24 from './components/demoes/index24';

// Elements
import List from './components/main/elements/list';
import Buttons from './components/main/elements/buttons';
import Banners from './components/main/elements/banners';
import Products from './components/main/elements/products';
import Categories from './components/main/elements/categories';
import Titles from './components/main/elements/titles';
import Tabs from './components/main/elements/tabs';
import Accordions from './components/main/elements/accordions';
import Portfolioes from './components/main/elements/portfolioes';
import Testimonials from './components/main/elements/testimonials';
import Typography from './components/main/elements/typography';
import CTA from './components/main/elements/cta';
import IconBoxes from './components/main/elements/iconboxes';
import BlogPosts from './components/main/elements/blogposts';
import VideoBanners from './components/main/elements/videobanners';
import Listing from './components/main/blog/listing';

// Pages
import PageNotFound from './components/main/pages/404';
import AboutOne from './components/main/pages/about-1';
import AboutTwo from './components/main/pages/about-2';
import ContactOne from './components/main/pages/contact-1';
import ContactTwo from './components/main/pages/contact-2';
import LoginOne from './components/main/pages/login';
import FAQ from './components/main/pages/faq';
import ComingSoon from './components/main/pages/coming-soon';

// Blogs
import classic from './components/main/blog/classic';
import Grid2Cols from './components/main/blog/grid-2cols';
import Grid3Cols from './components/main/blog/grid-3cols';
import Grid4Cols from './components/main/blog/grid-4cols';
import GridSidebar from './components/main/blog/grid-sidebar';
import Masonry2Cols from './components/main/blog/masonry-2cols';
import Masonry3Cols from './components/main/blog/masonry-3cols';
import Masonry4Cols from './components/main/blog/masonry-4cols';
import MasonrySidebar from './components/main/blog/masonry-sidebar';
import MaskGrid from './components/main/blog/mask-grid';
import MaskMasonry from './components/main/blog/mask-masonry';
import SingleDefaultPost from './components/main/blog/single-default';
import SingleFullWidth from './components/main/blog/single-fw';
import SingleFwSidebar from './components/main/blog/single-fw-sidebar';

//products
import SingleProduct from './components/main/product/default';
import CenteredProduct from './components/main/product/centered';
import GalleryProduct from './components/main/product/gallery';
import ExtendedProduct from './components/main/product/extended-info';
import StickyInfo from './components/main/product/sticky-info';
import SidebarProduct from './components/main/product/sidebar'
import FullwidthProduct from './components/main/product/fullwidth';
import MasonryProduct from './components/main/product/masonry';

//Shop
import NoSideBar from './components/main/shop/nosidebar';
import ShopList from './components/main/shop/sidebar';
import ShopMarket from './components/main/shop/market';
import ProductCategory from './components/main/shop/product-category';
import MyAccount from './components/main/shop/dashboard';
import Wishlist from './components/main/shop/wishlist';
import Cart from './components/main/shop/cart';
import Checkout from './components/main/shop/checkout';

//Landing Page
import Landing from './components/landing';
import Documentation from './components/docs';

// import Utils
import { initFunctions } from './utils/utils';
import { Helmet } from 'react-helmet';

export class Root extends Component {
    constructor(props) {
        super(props);
        initFunctions();
    }
    componentDidMount() {
        // close quick view modal if it is opened in new page
        store.dispatch(closeQuickViewModal());
    }

    render() {
        store.dispatch(getAllProducts());
        store.dispatch(getAllPosts());

        return (
            <Provider store={ store} >
                <BrowserRouter basename={ '/'} >
                    <ScrollContext>
                        <Switch>
                            {/* Demoes and Individual Pages */}
                          {/*  <Route exact path={ `${process.env.PUBLIC_URL}/`} component={ Landing}/>*/}
                            <Route exact path={ `${process.env.PUBLIC_URL}/`} component={ Index22}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/documentation`} component={ Documentation}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-1`} component={ Index1}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-2`} component={ Index2}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-3`} component={ Index3}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-4`} component={ Index4}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-5`} component={ Index5}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-6`} component={ Index6}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-7`} component={ Index7}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-8`} component={ Index8}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-9`} component={ Index9}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-10`} component={ Index10}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-11`} component={ Index11}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-12`} component={ Index12}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-13`} component={ Index13}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-14`} component={ Index14}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-15`} component={ Index15}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-16`} component={ Index16}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-17`} component={ Index17}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-18`} component={ Index18}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-19`} component={ Index19}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-20`} component={ Index20}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-21`} component={ Index21}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-22`} component={ Index22}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-23`} component={ Index23}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/demo-24`} component={ Index24}/>
            
                            <Route exact path={ `${process.env.PUBLIC_URL}/pages/coming-soon`} component={ ComingSoon}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/product/fullwidth/:id`} component={ FullwidthProduct}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/shop/nosidebar/:type`} component={ NoSideBar}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/shop/market`} component={ ShopMarket}/>
                            <Route exact path={ `${process.env.PUBLIC_URL}/shop/category/:type`} component={ ProductCategory}/>

                            <Layout>

                                {/* Element Pages */}
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/list`} component={ List}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/products`} component={ Products}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/categories`} component={ Categories}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/buttons`} component={ Buttons}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/banners`} component={ Banners}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/titles`} component={ Titles}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/tabs`} component={ Tabs}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/accordions`} component={ Accordions}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/portfolios`} component={ Portfolioes}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/testimonials`} component={ Testimonials}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/typography`} component={ Typography}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/cta`} component={ CTA}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/icon-boxes`} component={ IconBoxes}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/blog-posts`} component={ BlogPosts}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/elements/video-banners`} component={ VideoBanners}/>

                                {/* Blog Pages */}
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/listing`} component={ Listing}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/classic`} component={ classic}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/2cols`} component={ Grid2Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/3cols`} component={ Grid3Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/4cols`} component={ Grid4Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/sidebar`} component={ GridSidebar}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/2cols`} component={ Masonry2Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/3cols`} component={ Masonry3Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/4cols`} component={ Masonry4Cols}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar`} component={ MasonrySidebar}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/mask/grid`} component={ MaskGrid}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/mask/masonry`} component={ MaskMasonry}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single/:id`} component={ SingleDefaultPost}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single-2/:id`} component={ SingleFullWidth}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single-3/:id`} component={ SingleFwSidebar}/>

                                {/* Pages belonged in Page */}
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/404`} component={ PageNotFound}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/about`} component={ AboutOne}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/about-2`} component={ AboutTwo}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/contact`} component={ ContactOne}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/contact-2`} component={ ContactTwo}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/login`} component={ LoginOne}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/pages/faq`} component={ FAQ}/>

                                {/* Product Pages */}
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/default/:id`} component={ SingleProduct}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/centered/:id`} component={ CenteredProduct}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/gallery/:id`} component={ GalleryProduct}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/extended/:id`} component={ ExtendedProduct}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/sticky/:id`} component={ StickyInfo}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/sidebar/:id`} component={ SidebarProduct}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/product/masonry/:id`} component={ MasonryProduct}/>

                                {/* Shop Pages */}
                                <Route exact path={ `${process.env.PUBLIC_URL}/shop/dashboard`} component={ MyAccount}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/shop/sidebar/:grid`} component={ ShopList}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/shop/wishlist`} component={ Wishlist}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/shop/cart`} component={ Cart}/>
                                <Route exact path={ `${process.env.PUBLIC_URL}/shop/checkout`} component={ Checkout}/>

                            </Layout>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));