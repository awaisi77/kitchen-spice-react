import React, { Component } from 'react';
import { safeContent } from '../../../utils/utils';

class Testimonial extends Component {
    render() {
        const { image, content, name, job, color, lead } = this.props;

        return(
            <blockquote className={ `testimonial ${ image ? '' : 'testimonial-icon' } text-center ${ 'white' === color ? 'text-white' : '' }` }>
                { image ? <img src={ process.env.PUBLIC_URL + '/' + image } alt="user"/> : '' }
                { lead ? <p className="lead">{lead}</p> : '' }
                <p dangerouslySetInnerHTML = { safeContent(content)  }></p>
                <cite>
                    { name }
                    <span>{ job }</span>
                </cite>
            </blockquote>
        );
    }
}

export default Testimonial;