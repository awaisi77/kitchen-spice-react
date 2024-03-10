import React, { Component } from 'react';

// import Utils
import { safeContent } from '../../../utils/utils';

class IntroSlider extends Component {
    render() {
        const { banner } = this.props;

        return(
            <div className="intro-slide" style={ {backgroundImage: `url(${banner.img})`} }>
                <div className="container intro-content">
                    <div className="row">
                        <div className="intro">
                            <div className="title" dangerouslySetInnerHTML = { safeContent(banner.title) }>
                            </div>

                            <div className="content" dangerouslySetInnerHTML = { safeContent(banner.content) }>
                            </div>

                            <div className="price" dangerouslySetInnerHTML = { safeContent(banner.price) }>
                            </div>

                            <div className="action">
                                <a href={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                                    <span>DISCOVER NOW</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroSlider;