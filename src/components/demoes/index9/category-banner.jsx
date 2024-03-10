import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CatBanner extends Component {
    
    render() {
        const { banner } = this.props;
        return (
            <div className="banner banner-overlay product-banner">
                <Link to="#">
                    <img src={ process.env.PUBLIC_URL + '/' + banner.img } alt="banner" />
                </Link>
                <div className="banner-content">
                    <div className="banner-top">
                        <div className="banner-title text-white text-center">
                            <i className="la la-star-o"></i><h3 className="text-white">{ banner.title }</h3>
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <div className="product-cat">
                            <h4 className="text-white">{ banner.category }</h4>
                        </div>
                        <div className="product-price">
                            <h4 className="text-white">{ banner.price }</h4>
                        </div>
                        <div className="product-txt">
                            <p className="text-white">{ banner.desc }</p>
                        </div>
                        <Link to="#" className="btn btn-outline-white banner-link">Shop Now</Link>
                    </div>
                </div>
            </div>
        );
    }
}