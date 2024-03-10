import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent , isIEBrowser } from '../../../utils/utils';

export default ( props ) => {
    const { image, srcSet, subtitle, title, text, btnText = "DISCOVER NOW" } = props.slide;

    return (
        <div className="intro-slide">
            <figure className="slide-image">
                <picture style={ isIEBrowser() ? {height: '100%'} : {} }>
                    <source media="(max-width: 480px)" srcSet={ srcSet} />
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="desc" style={ isIEBrowser() ? {height: '100%'} : {}} width="1168" height="499"/>
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle">{subtitle}</h3>
                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent(title)  }>
                </h1>
                {
                    text ?
                    <div className="intro-text text-white" dangerouslySetInnerHTML={ safeContent(text)  }>
                    </div>
                    : ""
                }
                <Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` } className="btn btn-primary">
                    <span>{ btnText }</span>
                </Link>
            </div>
        </div>
    )
}