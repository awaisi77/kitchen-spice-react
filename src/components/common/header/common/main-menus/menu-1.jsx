import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseMenu from './base';

class MainMenu extends BaseMenu {

    render() {
        const { demo } = this.props;
        return (
            <nav className="main-nav" onClick={ this.activeNav  }>
                <ul className="menu sf-arrows">
                    <li className="megamenu-container active">
                        <Link to={ `${process.env.PUBLIC_URL}/` } className="sf-with-ul">Home</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` } className="sf-with-ul">Shop</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About</Link>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">Contact</Link>
                    </li>
               {/*     <li>
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="sf-with-ul">Blog</Link>

                        <ul>
                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Classic</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/listing` } >Listing</Link></li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` } className="sf-with-ul">Grid</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` }>Grid 2 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/3cols` }>Grid 3 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/4cols` }>Grid 4 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` } className="sf-with-ul">Masonry</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` }>Masonry 2 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` }>Masonry 3 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` }>Masonry 4 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` } className="sf-with-ul">Mask</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Blog mask grid</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/masonry` }>Blog mask masonry</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/single/100` } className="sf-with-ul">Single Post</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single/100` }>Default with sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-2/101` }>Fullwidth no sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-3/102` }>Fullwidth with sidebar</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>*/}
                </ul>
            </nav>
        );
    }
}

export const mapStateToProps = ( state ) => ({
    demo: state.demo.current
})

export default connect( mapStateToProps )( MainMenu );