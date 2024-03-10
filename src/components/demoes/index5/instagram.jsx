import React from 'react';
import { Link } from 'react-router-dom';

export  default (props) => {
    const { img, likes, comments } = props.insta;
    return (
        <div className="feed-col">
            <div className="instagram-feed">
                <img src={ process.env.PUBLIC_URL + '/' + img } alt="img" width="218" height="218"/>

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>{likes}</Link>
                    <Link to="#"><i className="icon-comments"></i>{comments}</Link>
                </div>
            </div>
        </div>
    )
}