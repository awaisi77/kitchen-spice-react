import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';  

// import Custom Components
import MainMenu from './common/main-menus/menu-1';
import CartMenu from '../header/common/cart-menus/menu-1';

import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderFive extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }

    render() {
        const { logo = "assets/images/demos/demo-5/logo.png" } = this.props;

        return(
            <header className="header header-5">
                <div className="header-middle sticky-header">
                    <div className="container-fluid">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <Link  to={ `${process.env.PUBLIC_URL}/`} className="logo">
                                <img src={ process.env.PUBLIC_URL + '/' + logo } alt="Molla Logo" width="105" height="25" />
                            </Link>

                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <div className="header-search header-search-extended header-search-visible">
                                <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper">
                                        <label htmlFor="q" className="sr-only">Search</label>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            
                            <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist`} className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ this.props.wishlist.length}</span>
                            </Link>

                            <CartMenu/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export const mapStateToProps = (state) => ({
    wishlist: state.wishlist.list
})

export default ( connect ) (mapStateToProps) (HeaderFive);