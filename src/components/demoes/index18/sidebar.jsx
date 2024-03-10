import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductTwo from './product-2';
import { sidebarSlider } from './settings';

import OwlCarousel from '../../features/owl-carousel';
import PostTwo from '../../features/post/post-two';
import { getSidebarProducts, getProductsByDemo } from '../../../services';

class Sidebar extends Component {

    render() {
        let products = getSidebarProducts(getProductsByDemo(this.props.products, "demo18"));
        let posts = this.props.posts.slice(124, 126);

        return (
            <div className="sidebar sidebar-home">
                <div className="row">
                    <div className="col-sm-6 col-lg-12">
                        <div className="widget widget-products">
                            <h4 className="widget-title">Best Selling</h4>

                            <div className="products">
                            {
                                products.map( ( item, index ) => 
                                    <ProductTwo product={ item } key={ index }/>
                                )
                            }
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-12">
                        <div className="widget widget-subscribe" style={ {backgroundImage: "url(assets/images/demos/demo-18/bg-newsletter.jpg)"} }>
                            <h2 className="widget-title">Sign up for email <br/>& get 25% off </h2>
                            <p>Subcribe to get information about products and coupons</p>

                            <form action="#">
                                <input type="email" className="form-control" placeholder="Enter your Email Address" required/>

                                <input type="submit" className="btn btn-outline-white" value="Subscribe"/>
                            </form>
                            
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-12">
                        <div className="widget widget-banner">
                            <div className="banner banner-overlay">
                                <Link to="#">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-18/banners/banner-5.jpg` } alt="Banner"/>
                                </Link>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle"><Link to="#">Spring { (new Date()).getFullYear() }</Link></h4>
                                    <h3 className="banner-title"><Link to="#">SAVE UP TO <br/>50% OFF</Link></h3>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="banner-link">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-12">
                        <div className="widget widget-posts">
                            <h4 className="widget-title">New Blog Posts</h4>
                            
                            <OwlCarousel adClass="owl-simple"
                                carouselOptions={ sidebarSlider  }>
                                { posts.map( ( item, index ) => 
                                    <PostTwo post={ item } key={ index } />
                                ) }
                            </OwlCarousel>

                        </div>
                    </div>
                </div>   
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        products: state.data.products,
        posts: state.posts.items ? state.posts.items : []
    }
}

export default connect( mapStateToProps ) (Sidebar);