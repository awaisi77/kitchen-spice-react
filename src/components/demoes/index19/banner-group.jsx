import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BannerGroupTwo extends Component { 

    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                    <div className="banner banner-overlay banner-sm banner-ad content-right align-center">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-6.jpg` } alt="Banner" />
                        </Link>
                        <div className="banner-content">
                            <h4 className="banner-subtitle">Weekend Offer</h4>
                            <img className="banner-title-img" src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-6-title.png` } alt="Banner-6" />
                            <h4 className="banner-price"><span className="price">Save $19.99</span></h4>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="banner banner-overlay banner-sm banner-ad content-left align-center">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-7.jpg` } alt="Banner" />
                        </Link>
                        <div className="banner-content">
                            <h4 className="banner-subtitle">Amazing Deal on an</h4>
                            <img className="banner-title-img" src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-7-title.png` } alt="Banner-7" />
                            <h4 className="banner-txt">Console</h4>
                            <h4 className="banner-price color-black mt-3">Save $50</h4>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="banner banner-overlay banner-sm banner-ad content-left align-center">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-8.jpg` } alt="Banner" />
                        </Link>
                        <div className="banner-content">
                            <h4 className="banner-price text-white mb-1">Save $29.00</h4>
                            <img className="banner-title-img mb-2" src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-19/banners/banner-8-title.png` } alt="Banner-8" />
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerGroupTwo;