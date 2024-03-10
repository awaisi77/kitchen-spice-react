import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { image, subtitle, title, btnText="Discover More" } = props.slide;
    return (
        <div className="intro-slide" style={ {backgroundImage: `url(${image })`} }>
            <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">{ subtitle }</h3>
                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent(title) } ></h1>
                
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white-4">
                    <span>{ btnText }</span>
                </Link>
            </div>
        </div>
    )
}