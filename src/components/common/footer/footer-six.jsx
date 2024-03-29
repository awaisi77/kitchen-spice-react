import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SocialLink } from '../../features/social-link';

class FooterSix extends Component {
    render() {
        const { logo = "assets/images/demos/demo-13/logo.png", width = 110, height = 25 } = this.props;
        
        return (
            <footer className="footer footer-2">
                { this.props.children }
                <div className="footer-middle border-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="widget widget-about">
                                    <img src={ process.env.PUBLIC_URL + '/' + logo } className="footer-logo" alt="Footer Logo" width={ width} height={ height}/>
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
                                    
                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <span className="widget-about-title">Got Question? Call us 24/7</span>
                                                <Link to="tel:123456789">+0123 456 789</Link>
                                            </div>
                                            <div className="col-sm-6 col-md-8">
                                                <span className="widget-about-title">Payment Method</span>
                                                <figure className="footer-payments">
                                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>

                                    <ul className="widget-list">
                                        <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="widget-list">
                                        <li><Link to="#">Payment Methods</Link></li>
                                        <li><Link to="#">Money-back guarantee!</Link></li>
                                        <li><Link to="#">Returns</Link></li>
                                        <li><Link to="#">Shipping</Link></li>
                                        <li><Link to="#">Terms and conditions</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>

                                    <ul className="widget-list">
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link  to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                        <li><Link  to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                        <li><Link to="#">Track My Order</Link></li>
                                        <li><Link to="#">Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © { (new Date()).getFullYear() } Molla Store. All Rights Reserved.</p>
                        <ul className="footer-menu">
                            <li><Link to="#">Terms Of Use</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>

                        <SocialLink label={ true } />
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterSix;