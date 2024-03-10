import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import style from '../../demoes/index22/style.scss';
import {hoverIntent, initSettings} from "../../../utils/utils";
import store from "../../../store";
import {changeDemo, outerLoading} from "../../../actions";

class ContactOne extends Component{
    componentDidMount() {
        initSettings();
        hoverIntent();
        store.dispatch(changeDemo("22"));

    }

    UNSAFE_componentWillMount() {
        style.use();
        store.dispatch(outerLoading());
    }

    componentWillUnmount() {
        style.unuse();
    }
    render() {
        return(
            <div className="main">
                <Helmet>
                    <title>Kitchen & Spice Market</title>
                </Helmet>
                
                <h1 className="d-none">Kitchen & Spice Market</h1>

                <Breadcrumb title="Contact Us" parent1={ ["pages","pages/about"] } adClass="border-0 mb-0"/>
                           
                <div className="container">
                    <div className="page-header page-header-big text-center" style={ {backgroundImage: `url('assets/images/contact-header-bg.jpg')`} }>
                        <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
                    </div>
                </div>

                <div className="page-content pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-2 mb-lg-0">
                                <h2 className="title mb-1">Contact Information</h2>
                                <p className="mb-3">Tell us how we can help, and we'll get back to you as soon as possible. If you prefer, you can always call instead @ (509) 943 6715
                                </p>
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="contact-info">
                                            <h3>The Office</h3>

                                            <ul className="contact-list">
                                                <li>
                                                    <i className="icon-map-marker"></i>
                                                    1440 Jadwin Ave Richland, WA 99354
                                                </li>
                                                <li>
                                                    <i className="icon-phone"></i>
                                                    <Link to="tel:#">(509) 943 6715</Link>
                                                </li>
                                                <li>
                                                    <i className="icon-envelope"></i>
                                                    <Link to="mailto:#">info@kitchennspice.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="contact-info">
                                            <h3>The Office</h3>

                                            <ul className="contact-list">
                                                <li>
                                                    <i className="icon-clock-o"></i>
                                                    <span className="text-dark"> Monday -Sunday </span> <br/> 8:00 AM ----- 8 PM PST
                                                </li>
                                                {/*<li>*/}
                                                {/*    <i className="icon-calendar"></i>*/}
                                                {/*    <span className="text-dark">Sunday</span> <br/>11am-6pm ET*/}
                                                {/*</li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="title mb-1">Got Any Questions?</h2>
                                <p className="mb-2">Use the form below to get in touch with the sales team</p>

                                <form action="#" className="contact-form mb-3">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="cname" className="sr-only">Name</label>
                                            <input type="text" className="form-control" id="cname" placeholder="Name *" required/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="cemail" className="sr-only">Email</label>
                                            <input type="email" className="form-control" id="cemail" placeholder="Email *" required/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="cphone" className="sr-only">Phone</label>
                                            <input type="tel" className="form-control" id="cphone" placeholder="Phone"/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="csubject" className="sr-only">Subject</label>
                                            <input type="text" className="form-control" id="csubject" placeholder="Subject"/>
                                        </div>
                                    </div>

                                    <label htmlFor="cmessage" className="sr-only">Message</label>
                                    <textarea className="form-control" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>

                                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                        <span>SUBMIT</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <hr className="mt-4 mb-5"/>

                        <div className="stores mb-4 mb-lg-5">
                            <h2 className="title text-center mb-3">Our Stores</h2>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="store">
                                        <div className="row">
                                            <div className="col-sm-5 col-xl-6">
                                                <figure className="store-media mb-2 mb-lg-0">
                                                    <img src={ `${ process.env.PUBLIC_URL }/assets/images/stores/img-1.jpg` } alt="desc"/>
                                                </figure>
                                            </div>
                                            <div className="col-sm-7 col-xl-6">
                                                <div className="store-content">
                                                    <h3 className="store-title">Wall Street Plaza</h3>
                                                    <address>88 Pine St, New York, NY 10005, USA</address>
                                                    <div><Link to="tel:#">+1 987-876-6543</Link></div>

                                                    <h4 className="store-subtitle">Store Hours:</h4>
                                                    <div>Monday - Saturday 11am to 7pm</div>
                                                    <div>Sunday 11am to 6pm</div>

                                                    <Link to="#" className="btn btn-link" target="_blank"><span>View Map</span><i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="store">
                                        <div className="row">
                                            <div className="col-sm-5 col-xl-6">
                                                <figure className="store-media mb-2 mb-lg-0">
                                                    <img src={ `${ process.env.PUBLIC_URL }/assets/images/stores/img-2.jpg` } alt="desc"/>
                                                </figure>
                                            </div>

                                            <div className="col-sm-7 col-xl-6">
                                                <div className="store-content">
                                                    <h3 className="store-title">One New York Plaza</h3>
                                                    <address>88 Pine St, New York, NY 10005, USA</address>
                                                    <div><Link to="tel:#">+1 987-876-6543</Link></div>

                                                    <h4 className="store-subtitle">Store Hours:</h4>
                                                    <div>Monday - Friday 9am to 8pm</div>
                                                    <div>Saturday - 9am to 2pm</div>
                                                    <div>Sunday - Closed</div>

                                                    <Link to="#" className="btn btn-link" target="_blank"><span>View Map</span><i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="map"></div>
                </div>
            </div>
        )
    }
}

export default ContactOne;