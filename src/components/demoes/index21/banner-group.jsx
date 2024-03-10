import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { isIEBrowser, safeContent } from '../../../utils/utils';

class BannerGroup extends Component {
    render() {
        const { banners } = this.props;

        return(
            <div className="container banner-container">
                {
                    banners.map((banner, index) => 
                        <div className="col-lg-4 col-md-8 col-sm-10 col-12 col-pd1" key={ `banner_group ${index}` }>
                            { isIEBrowser() ?
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                    <img src={ process.env.PUBLIC_URL + '/' + banner.img } alt="desc" style={ {minHeight: "26rem"} } />
                                </Link> :

                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                    <img src={ process.env.PUBLIC_URL + '/' + banner.img } alt="desc"/>
                                </Link>
                            }

                            <div className="banner-content">
                                <div className="title">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }><h3 className="darkWhite">{ banner.title }</h3></Link>
                                </div>
                                
                                <div className="content">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML = { safeContent(banner.content) }>
                                    </Link>
                                </div>

                                <div className="action">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-demoprimary">
                                        <span>{ banner.btnText }</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default BannerGroup;