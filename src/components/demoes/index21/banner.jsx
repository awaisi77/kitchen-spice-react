import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        const { banner } = this.props;

        return(
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <img src={ process.env.PUBLIC_URL + '/' + banner.img } alt="desc"/>
                    </Link>
                </figure>
                
                <div className="banner-content">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }><h3 className="category"> { banner.title } </h3></Link>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="action">SHOP NOW</Link>
                </div>
            </div>
        )
    }
}

export default Banner;