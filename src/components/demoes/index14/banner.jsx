import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) =>  {
    const { adClass="", contentAdClass="", image, title, subtitle, price, btnText="Shop Now" } = props.data; 

    return (
        <div className={ `banner banner-overlay ${adClass}` }>
            <Link to="#">
                <img src={ process.env.PUBLIC_URL + '/' + image } alt="Banner"/>
            </Link>

            <div className={ `banner-content ${contentAdClass}` }>
                {
                    subtitle ?
                    <h4 className="banner-subtitle text-white d-none d-sm-block"><Link to="#">{ subtitle }</Link></h4>
                    : ""
                }

                {
                    title ?
                    <h3 className="banner-title text-white"><Link to="#" dangerouslySetInnerHTML={ safeContent(title)  }></Link></h3>
                    : ""
                }

                {
                    price ?
                    <div className="price text-center" dangerouslySetInnerHTML={ safeContent(price)  }></div>
                    : ""
                }
                
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    );
}