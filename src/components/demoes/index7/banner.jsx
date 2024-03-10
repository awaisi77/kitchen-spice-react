import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, width, height, subtitle, title, btnText, adClass, contentAdClass, textColor="text-white", btnAdClass } = props.banner;
    return (
        <div className={ `banner ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="Banner" width={ width} height={ height}/>
            </Link>

            <div className={ `banner-content ${contentAdClass}` }>
                <h4 className={ `banner-subtitle ${textColor}` }><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{subtitle}</Link></h4>
                <h3 className={ `banner-title ${textColor}` }><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }><span dangerouslySetInnerHTML = { safeContent(title) }></span></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className={ `btn underline ${btnAdClass}` } dangerouslySetInnerHTML = { safeContent(btnText) }></Link>
            </div>
        </div>
    )
}