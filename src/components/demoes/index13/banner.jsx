import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils'; 

class Banner extends Component {
    render() {
        const { banner } = this.props;

        return(
            <div className={ `banner banner-overlay ${banner.adClass}` }>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                    <img src={ process.env.PUBLIC_URL + '/' + banner.image } alt="Banner" />
                </Link>

                { banner.adClass === "banner-overlay-light" ?
                    <div className="banner-content">
                        <h4 className="banner-subtitle"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{banner.subtitle}</Link></h4>
                        <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML={ safeContent(banner.title) }></Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="banner-link banner-link-dark">{banner.btnText}<i className="icon-long-arrow-right"></i></Link>
                   </div> :
                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{banner.subtitle}</Link></h4>
                        <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML={ safeContent(banner.title) }></Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="banner-link">{banner.btnText}<i className="icon-long-arrow-right"></i></Link>
                   </div>
                }
            </div>
        )
    }
}

export default Banner;