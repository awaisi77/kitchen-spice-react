import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import ProfileOne from '../../features/profile/profile-one';
import OwlCarousels from '../../features/owl-carousel';
import Testimonial from '../../features/testimonial/testimonial';

// import Utils
import { mainSlider5 } from '../settings';

import _data from '../../../mock_data/data.json';
import {hoverIntent, initSettings} from "../../../utils/utils";
import store from "../../../store";
import {changeDemo, outerLoading} from "../../../actions";
import style from "../../demoes/index22/style.scss";

class AboutOne extends Component {

    componentDidMount() {
        document.querySelector(".footer-middle").classList.add("border-0");
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
        return (
            <div className="main">
                <Helmet>
                    <title>Kitchen & Spice Market</title>
                </Helmet>
                
                <h1 className="d-none">Kitchen & Spice Market</h1>

                <Breadcrumb title="About Us" parent1={ ["Pages","pages/about"] } adClass="border-0 mb-0"/>

                <div className="container">
                    <div className="page-header page-header-big text-center" style={ {backgroundImage: `url('assets/images/about-header-bg.jpg')`} }>
                        <h1 className="page-title text-white">About us<span className="text-white">Who we are</span></h1>
                    </div>
                </div>

                <div className="page-content pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-3 mb-lg-0">
                                <h2 className="title">About Us</h2>
                                <p>
                                    We at Kitchen & Spice being your local and family-owned market, where you can find a
                                    variety of groceries. From fresh Indian spices, imported Indian foods, local beers and wines
                                    and variety of whole snacks. While you shop take some fresh deli food, Indian food, or fried
                                    chicken to go and much more to come.

                                </p>
                            </div>
                        </div>

                        <div className="mb-5"></div>
                    </div>

                    <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mb-3 mb-lg-0">
                                    <h2 className="title">Our History</h2>
                                    <p className="lead text-primary mb-3">

                                        From the time we first opened the restaurant called <bold>Love Curry</bold> our customers were always
                                        curious and asking where we can find fresh spices. Then came an idea of opening an 800
                                        square foot store right next to the restaurant. Because of all your love and support we have
                                        now relocated to 3000 square foot store in Richland, WA, where customers can go shop a
                                        variety of goods.
                                    </p>
                                </div>

                                <div className="col-lg-6 offset-lg-1">
                                    <div className="about-images">
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/about/img-1.jpg` } alt="" className="about-img-front"/>
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/about/img-2.jpg` } alt="" className="about-img-back"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <hr className="mt-4 mb-6"/>

                        <h2 className="title text-center mb-4">Meet Our Team</h2>

                        <div className="row">
                            <div className="col-md-12">
                                <ProfileOne image="assets/images/team/member-1.jpg" name="Homeet Singh" title="Founder & CEO" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>
                            </div>
                           {/* <div className="col-md-4">
                                <ProfileOne image="assets/images/team/member-2.jpg" name="Bruce Sutton" title="Sales & Marketing Manager" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>
                            </div>
                            <div className="col-md-4">
                                <ProfileOne image="assets/images/team/member-3.jpg" name="Janet Joy" title="Product Manager" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>
                            </div>*/}
                        </div>
                    </div>

                    <div className="mb-2"></div>

                    <div className="about-testimonials bg-light-2 pt-6 pb-6">
                        <div className="container">
                            <h2 className="title text-center mb-3">What Customer Say About Us</h2>

                            <OwlCarousels adClass="owl-simple owl-testimonials-photo"  carouselOptions={ mainSlider5 } >
                                <Testimonial image="assets/images/testimonials/user-1.jpg" content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br/>In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                    name="Jenson Gregory" job="Customer"/>

                                <Testimonial image="assets/images/testimonials/user-2.jpg" content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
                                    name="Victoria Ventura" job="Customer"/>
                            </OwlCarousels>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutOne;