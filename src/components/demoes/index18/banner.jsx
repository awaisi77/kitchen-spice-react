import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, width, height, title, btnText="Shop Now" } = props.banner;
    return (
        <div className="banner banner-hover">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + img} alt="Banner" width={ width } height={ height } />
            </Link>

            <div className="banner-content">
                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML = { safeContent(title) } ></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="banner-link">{btnText}<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}
