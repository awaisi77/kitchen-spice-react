import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, width, height, adClass="", contentAdClass="", subtitle, title, text, btnText = "Discover Now" } = props.banner;
    return (
        <div className={ `banner banner-overlay ${adClass}` }>
            <Link to="#">
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="banner" width={ width} height={ height}/>
            </Link>
            <div className={ `banner-content ${contentAdClass}` }>
                <h4 className="banner-subtitle text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{subtitle}</Link></h4>
                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML = { safeContent(title) }></Link></h3>
                {
                    text ?
                    <div className="banner-text text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{text}</Link></div>
                    : ""                
                }

                <Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` } className="btn btn-outline-white banner-link">{btnText}</Link>
            </div>
        </div>
    );
}