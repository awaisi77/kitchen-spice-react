import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showModal } from '../../../actions';
import { isIEBrowser } from '../../../utils/utils';

class VideoBanner extends Component {
    constructor(props) {
        super(props);

        this.openVideoModal = this.openVideoModal.bind(this);
    }

    openVideoModal(e) {
        this.props.showModal('video');
        e.preventDefault();
    } 

    render() {
        return (
            <section className="video-banner">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-24/video-banner/banner.jpg` } alt="video"/>

                <div className="intro video">
                    <div className="title">
                        <h3><i>Spring / Summer</i></h3>
                    </div>
                    <div className="content">
                        <h4>New & Stylish<br/>Collection {(new Date()).getFullYear() }</h4>
                    </div>
                    <div className="action">
                        <Link to="#" className="btn-iframe" onClick={ this.openVideoModal  }>
                            <i className="icon-play" style={ isIEBrowser() ? {textIndent: ".1rem"} : {} }></i>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}


export default connect(null, { showModal } )( VideoBanner );
    