import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, height, subtitle, title, btnText, adClass } = props.banner;
    return (
        <div className={ `banner ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="Banner" width="574" height={ height}/>
            </Link>

            <div className="banner-content">
                <h4 className="banner-subtitle d-lg-none d-xl-block"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{subtitle}</Link></h4>
                <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }><span dangerouslySetInnerHTML = { safeContent(title) }></span></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-primary-2 banner-link">{btnText}<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}