import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, text, adClass="", contentAdClass="", title, btnText="Discover Now " } = props.banner;
    return (
        <div className={ `banner banner-main ${ adClass } banner-overlay` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + img} alt="Banner" width="514" height="700" />
            </Link>

            <div className={ `banner-content ${ contentAdClass }` }>
                <div className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} dangerouslySetInnerHTML = { safeContent(title) } ></Link></div>

                <p>{ text }</p>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}