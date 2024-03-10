import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        const { banner } = this.props;

        return(
            <div className={ `banner banner-overlay product-banner` }>
                <Link to="#">
                    <img src={ process.env.PUBLIC_URL + '/' + banner.img } alt="Banner" />
                </Link>
                <div className={ `banner-content ${banner.contentAdClass}` }>
                    <h4 className="banner-subtitle  text-white">Out 14 May {(new Date()).getFullYear() }</h4>
                    
                    <img className="banner-title-img" src={ process.env.PUBLIC_URL + '/' + banner.titleImg } alt="desc" />

                    { banner.banner_txt ? 
                        <h4 className="banner-txt">{ banner.banner_txt }</h4> : ''
                    }

                    { banner.subtitleImg ?
                        <img className="banner-title-img" src={ process.env.PUBLIC_URL + '/' + banner.subtitleImg } alt="Banner-11" /> : ''
                    }

                    <h4 className={ `banner-price ${ banner.price_adClass }` }>${banner.price}</h4>

                    <Link to="#" className="banner-link">PRE-ORDER NOW<i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        )
    }
}

export default Banner;