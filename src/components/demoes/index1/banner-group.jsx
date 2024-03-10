import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="banner-group">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <div className="banner banner-large banner-overlay banner-overlay-light banner-lg">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-2/banners/banner-1.jpg` } alt="Banner" width="470" height="510"/>
                        </Link>

                        <div className="banner-content banner-content-top">
                            <h4 className="banner-subtitle">Clearence</h4>
                            <h3 className="banner-title">Coffee Tables</h3>
                            <div className="banner-text">from $19.99</div>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="banner banner-overlay banner-lg">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-2/banners/banner-2.jpg` } alt="Banner" width="290" height="510"/>
                        </Link>

                        <div className="banner-content banner-content-bottom">
                            <h4 className="banner-subtitle text-grey">On Sale</h4>
                            <h3 className="banner-title text-white">Amazing <br/>Armchairs</h3>
                            <div className="banner-text text-white">from $39.99</div>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="banner banner-overlay">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-2/banners/banner-3.jpg` } alt="Banner" width="370" height="245"/>
                                </Link>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle text-grey">New Arrivals</h4>
                                    <h3 className="banner-title text-white">Storage <br/>Boxes & Baskets</h3>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="banner banner-overlay banner-overlay-light">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-2/banners/banner-4.jpg` } alt="Banner" width="370" height="245"/>
                                </Link>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle">On Sale</h4>
                                    <h3 className="banner-title">Lamps Offer</h3>
                                    <div className="banner-text">up to 30% off</div>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
)