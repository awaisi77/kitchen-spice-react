import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, width, height, adClass="", contentAdClass="", subtitle, title, btnText="Discover Now" } = props.banner;
    return (
        <div className={ `banner ${ adClass } banner-overlay` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="Banner" width={ width } height={ height } />
            </Link>

            <div className={ `banner-content ${ contentAdClass }` }>
                <h4 className="banner-subtitle text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link></h4>

                {
                    adClass === "banner-big" ?
                    <h2 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML = { safeContent(title) } ></Link></h2>
                    : <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML = { safeContent(title) } ></Link></h3>
                }
                
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white-3 banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}