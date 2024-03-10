import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, subtitle, title, btnText="Shop Now" } = props.banner;
    return (
        <div className="banner banner-overlay">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="Banner" width="575" height="600"/>
            </Link>

            <div className="banner-content banner-content-center">
                <h4 className="banner-subtitle text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{subtitle}</Link></h4>
                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }><span dangerouslySetInnerHTML = { safeContent(title) }></span></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white banner-link underline">{btnText}</Link>
            </div>
        </div>
    )
}