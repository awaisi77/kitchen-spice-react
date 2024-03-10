import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        const { width="105", height="25" } = this.props;

        return (
            <Link to={ `${ process.env.PUBLIC_URL }/`} className={ `logo ${ this.props.className }` }>
                <img src={ `${ process.env.PUBLIC_URL }/assets/images/${ this.props.logo }` } alt="Molla Logo" width={ width } height={ height } />
            </Link>
        )    
    }
}

export default Logo;