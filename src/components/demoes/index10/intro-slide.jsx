import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent , isIEBrowser } from '../../../utils/utils';

export default ( props ) => {
    const { image, srcSet, subtitle, title, price, btnText = "SHOP NOW" } = props.slide;

    return (
        <div className="intro-slide">
            <figure className="slide-image">
                <picture style={ isIEBrowser() ? {height: '100%'} : {} }>
                    <source media="(max-width: 480px)" srcSet={ srcSet} />
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="desc" style={ isIEBrowser() ? {width: 'auto'} : {}} width="1168" height="499"/>
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle">{subtitle}</h3>
                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent(title)  }></h1>

                <div className="intro-price text-white" dangerouslySetInnerHTML={ safeContent(price)  }>
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-white-primary btn-round">
                    <span>{btnText}</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}