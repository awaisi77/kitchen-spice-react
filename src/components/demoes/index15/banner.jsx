import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

class Banner extends Component {
    render() {
        const { banner } = this.props;

        return(
            banner.type === 1 ?
                <div className="banner banner-overlay">
                    <Link to="#">
                        <img src={ process.env.PUBLIC_URL + '/' + banner.image } alt="Banner" />
                    </Link>

                    <div className="banner-content men">
                        <h2 className="banner-title text-white" dangerouslySetInnerHTML={ safeContent(banner.title) }></h2>
                        <h3 className="banner-subtitle text-brightblack">IN THIS LOOK</h3>

                        <ul className="text-white">
                            { banner.variety.map((item, index) => 
                                <li key={ index }>{ item}</li>
                            ) }
                        </ul>

                        <div className="banner-text text-brightblack">{banner.text}</div>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-primary-2"><span>Buy All</span><i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div> :
                
            banner.type === 2 ?
                <div className="banner banner-light banner-overlay">
                    <Link to="#">
                        <img src={ process.env.PUBLIC_URL + '/' + banner.image } alt="Banner" />
                    </Link>

                    <div className="banner-content women">
                        <h2 className="banner-title" dangerouslySetInnerHTML={ safeContent(banner.title) }></h2>
                        <h3 className="banner-subtitle text-darkblack">IN THIS LOOK</h3>

                        <ul>
                            { banner.variety.map((item, index) => 
                                <li key={ index }>{ item}</li>
                            ) }
                        </ul>

                        <div className="banner-text text-darkblack">{banner.text}</div>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-primary-2"><span>Buy All</span><i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div> : ''
            
        )
    }
}

export default Banner;