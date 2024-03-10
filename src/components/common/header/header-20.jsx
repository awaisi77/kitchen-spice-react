import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-1';
import SearchForm from './common/search-form';
import CompareMenu from './common/compare-menus/menu-1';
import CategoryMenuFour from './common/category-menus/menu-4';
import LoginModal from '../../features/login-modal';

import { showModal } from '../../../actions';
import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderTwenty extends Component {

    constructor(props) {
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }

    openLoginModal(e) {
        this.props.showModal('login');
        e.preventDefault();
    }
    
    render() {
        let user = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
        // console.log('user',user)
        return (
            <header className="header header-22">
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <Link  to={ `${process.env.PUBLIC_URL}/`} className="logo">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-22/logo.jpg` } alt="Kitchen & Spice Market" width="95" height="30"/>
                            </Link>
                        </div>

                        <div className="header-center">
                            <SearchForm adClass="header-search-extended header-search-visible header-search-no-round" />
                        </div>

                        <div className="header-right">
                            <CompareMenu />

                            <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist`} className="wishlist-link" title="Wishlist">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ this.props.wishlist.length}</span>
                            </Link>

                            <CartMenu/>
                        </div>
                    </div>
                </div>

                <div className="wrap-container sticky-header">
                    <div className="header-bottom">
                        <div className="container">
                            <div className="header-left">
{/*
                                <CategoryMenuFour adClass="" />
*/}
                            </div>
                            <div className="header-center">
                                <MainMenu />
                            </div>

                            <div className="header-right">
                                <div className="header-text">
                                    <ul className="top-menu top-link-menu">
                                        <li>
                                            <ul>
                                                {user?(<li><Link to={`${process.env.PUBLIC_URL}/shop/dashboard`}><i className="icon-user"></i>{user.name}</Link></li>
                                                ):(                                                <li><Link to="#signin-modal" data-toggle="modal" onClick={ this.openLoginModal  }><i className="icon-user"></i>Login / Registration</Link></li>
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal />
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps, { showModal } )( HeaderTwenty );