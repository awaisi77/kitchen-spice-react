import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { image, subtitle, title, aSubtitle, btnText="SHOP NOW", adClass, subImage, subClass } = props.slide;

    return (
        <div className="intro-slide" style={ {backgroundImage: `url(${image })`} }>
            <div className={ `container intro-content ${adClass}` }>
                <h3 className="intro-subtitle">{ subtitle }</h3>
                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent(title) } ></h1>
                {
                    aSubtitle ?
                    <h3 className="intro-subtitle">{ aSubtitle }</h3>
                    : ""
                }
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
            <img className={ subClass } src={ process.env.PUBLIC_URL + '/' + subImage } alt="slider"/>
        </div>
    )
}