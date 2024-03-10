import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { rendererOne } from '../../common/countdown/renderer';

export default (props) => {
    const { headerTitle, headerSubTitle, productTitle, newPrice, oldPrice, bigImage, linkTitle } = props.data;
    return (
        <div className="deal" style={ {backgroundImage: `url(${ bigImage })`} }>
            <div className="deal-top">
                <h2>{ headerTitle }</h2>
                <h4>{ headerSubTitle }</h4>
            </div>

            <div className="deal-content">
                <h3 className="product-title"><a href={ `${process.env.PUBLIC_URL}/product/default/27` }>{ productTitle }</a></h3>

                <div className="product-price">
                    <span className="new-price">{ newPrice }</span>
                    { oldPrice ? <span className="old-price">Was { oldPrice }</span> : "" }
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-link">
                    <span>{ linkTitle }</span><i className="icon-long-arrow-right"></i>
                </Link>
            </div>

            <div className="deal-bottom">
                <div className="deal-countdown offer-countdown"><Countdown date={ Date.now() + 100000000 } renderer={ rendererOne } /></div>
            </div>
        </div>
    );
}