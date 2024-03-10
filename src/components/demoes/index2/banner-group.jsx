import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
    <div className="container categories pt-6">
        <h2 className="title-lg text-center mb-4">Shop by Categories</h2>

        <div className="row">
            <div className="col-6 col-lg-4">
                <div className="banner banner-display banner-link-anim">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/banners/home/banner-1.jpg` } alt="Banner" width="376" height="540"/>
                    </Link>

                    <div className="banner-content banner-content-center">
                        <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Outdoor</Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4 order-lg-last">
                <div className="banner banner-display banner-link-anim">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/banners/home/banner-4.jpg` } alt="Banner" width="376" height="540" />
                    </Link>

                    <div className="banner-content banner-content-center">
                        <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Lighting</Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-4 banners-sm">
                <div className="row">
                    <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/banners/home/banner-2.jpg` } alt="Banner" width="376" height="270" />
                        </Link>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Furniture and Design</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/banners/home/banner-3.jpg` } alt="Banner" width="376" height="270" />
                        </Link>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Kitchen & Utensil</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)