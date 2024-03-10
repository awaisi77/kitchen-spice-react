import React from 'react';
import { Link } from 'react-router-dom';

export default (props) =>  {
    const { adClass, img, title, subtitle, btnText="Shop Now" } = props.banner; 

    return (
        <div className={ `banner banner-display banner-link-anim ${adClass}` }>
            <Link to="#">
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="Banner"/>
            </Link>

            <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white"><Link to="#">{ title }</Link></h3>
                {
                    subtitle ?
                    <h4 className="banner-subtitle text-white"><Link to="#">{ subtitle }</Link></h4> : ''
                }
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white banner-link">{ btnText }</Link>
            </div>
        </div>
    );
}