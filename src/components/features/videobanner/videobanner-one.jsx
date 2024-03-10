import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
import { safeContent } from '../../../utils/utils';

import { showModal } from '../../../actions';

class VideoBannerOne extends Component {

    constructor(props) {
        super(props);
        this.openVideoModal = this.openVideoModal.bind(this);
    }

    openVideoModal( e ) {
        this.props.showModal('video');
        e.preventDefault();
    } 

    render() {
        const { content, image, adClass } = this.props;

        return (
            <div className={ `video-banner ${ adClass } video-banner-bg bg-image text-center`} style={ { backgroundImage: "url("+image+")" } }>
                <div className="container">
                    <h3 className="video-banner-title h1 text-white"  dangerouslySetInnerHTML={ safeContent(content)  }></h3>
                    
                    <Link to="#" className="btn-video btn-iframe" onClick={ this.openVideoModal  }>
                        <i className="icon-play"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(null, { showModal } )( VideoBannerOne );