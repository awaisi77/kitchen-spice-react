import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="banner banner-overlay">
                                <Link to="#">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-10/banners/banner-1.jpg` } alt="Banner"/>
                                </Link>

                                <div className="banner-content banner-content-right">
                                    <h4 className="banner-subtitle"><Link to="#">New Arrivals</Link></h4>
                                    <h3 className="banner-title text-white"><Link to="#">Sneakers & <br/>Athletic Shoes</Link></h3>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white banner-link btn-round">Discover Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="banner banner-overlay banner-overlay-light">
                                <Link to="#">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-10/banners/banner-2.jpg` } alt="Banner"/>
                                </Link>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle bright-black"><Link to="#">Clearance</Link></h4>
                                    <h3 className="banner-title"><Link to="#">Sandals</Link></h3>
                                    <div className="banner-text"><Link to="#">up to 70% off</Link></div>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-gray banner-link btn-round">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner banner-large banner-overlay d-none d-sm-block">
                        <Link to="#">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-10/banners/banner-3.jpg` } alt="Banner"/>
                        </Link>

                        <div className="banner-content">
                            <h4 className="banner-subtitle text-white"><Link to="#">On Sale</Link></h4>
                            <h3 className="banner-title text-white"><Link to="#">Slip-On Loafers</Link></h3>
                            <div className="banner-text text-white"><Link to="#">up to 30% off</Link></div>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white banner-link btn-round">Shop Now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 d-sm-none d-lg-block">
                    <div className="banner banner-middle banner-overlay">
                        <Link to="#">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-10/banners/banner-4.jpg` } alt="Banner"/>
                        </Link>

                        <div className="banner-content banner-content-bottom">
                            <h4 className="banner-subtitle text-white"><Link to="#">On Sale</Link></h4>
                            <h3 className="banner-title text-white"><Link to="#">Amazing <br/>Lace Up Boots</Link></h3>
                            <div className="banner-text text-white"><Link to="#">from $39.00</Link></div>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white banner-link btn-round">Discover Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}