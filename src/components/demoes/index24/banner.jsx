import React from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

export default(props) => {
    const { img, width, height, imgPercent, className, title, content, btnText= "Shop Now" } = props.banner;
    return(
        <div className={ className  }>
            <img src={ process.env.PUBLIC_URL + '/' + img } alt="desc" width={ width } height= { height } />

            <div className="intro">
                <div className="title" dangerouslySetInnerHTML = { safeContent(title) }></div>
                {
                    imgPercent ? 
                        <div className="img-percent">
                            <img src={ process.env.PUBLIC_URL + '/' + imgPercent } width="190" height="75"  alt="banner"/>
                        </div>
                    : ""
                }

                <div className="content" dangerouslySetInnerHTML = { safeContent(content) }></div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{ btnText }</Link>
                </div>
            </div>
        </div>
    )
}