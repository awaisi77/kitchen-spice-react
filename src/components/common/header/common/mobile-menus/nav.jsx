import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { mobileMenu } from '../../../../../utils/utils';

class MobileMainNav extends Component {

    componentDidMount() {
        mobileMenu();
    }
    
    render() {
        let user = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
        return (
            <nav className="mobile-nav">
                <ul className="mobile-menu">
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}` }>Home</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }>Shop</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact</Link>
                    </li>

                    <li>
                        {user?(  <li><Link to={ `${process.env.PUBLIC_URL}/shop/dashboard` }>Profile</Link></li>):( <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Register/Login</Link></li>)}
                    </li>
                </ul>
            </nav>
        );
    }

}

export default MobileMainNav;