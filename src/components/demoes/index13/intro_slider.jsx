import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

class Slider extends Component {
    render() {
        const { slider } = this.props;

        return(
            <div className="intro-slide" style={ {backgroundImage: `url(${slider.image })`}} key={ slider.image }>
                <div className="container intro-content">
                    <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                            <h3 className="intro-subtitle">{slider.subtitle}</h3>
                            <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent(slider.title) }></h1>

                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-primary-2">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;