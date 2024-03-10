import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, width, height, subtitle, adClass="", title, btnText="Shop Now" } = props.banner;
    return (
        <div className="banner banner-overlay">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + img} alt="Banner" width={ width } height={ height }/>
            </Link>

            <div className="banner-content">
                <h4 className={ `banner-subtitle ${adClass}` }><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{subtitle}</Link></h4>
                <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML = { safeContent(title) } ></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-white banner-link">{btnText}<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}