import React from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

export default(props) => {
    const { img, width, height, className, title, content, text, btnText= "Shop Now" } = props.banner;

    return(
        <div className={ className  }>
            <img src={ process.env.PUBLIC_URL + '/' + img } alt="desc" width={ width } height= { height } />

            <div className="intro">
                <div className="title">
                    <h3>{ title }</h3>
                </div>
                
                <div className="content" dangerouslySetInnerHTML = { safeContent(content) }></div>
                
                {
                    text ? 
                        <p>{ text }</p>
                    : ""
                }

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{ btnText }<i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}