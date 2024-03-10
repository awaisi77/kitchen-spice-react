import React, {Component} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {callApi} from "../../services/api";
import {closeModal} from '../../actions';
import axios from "axios";
import {toast} from "react-toastify";

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formDataLogin: {
                username: null,
                password: null
            },
            formDataSignup: {
                signupUsername: null,
                signupPassword: null,
                signupEmail: null,
                signupName: null,
                signupPhone: null,
                signupCity: null,
                signupState: null,
                signupAddress: null,
            },
            data: {
                user: null,
                token: null,
                status: false
            }
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");

        this.timer = setTimeout(() => {
            this.props.closeModal('login');
        }, 200);
    }

    componentWillUnmount() {
        if (this.timer) clearTimeout(this.timer);
    }

    handleInputChange = (e) => {
        console.log('Name of item', e.target.name);
        console.log('Name of item', e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        const {formDataLogin} = {...this.state};
        // console.log('form input : ', formInput)
        console.log('value : ', e)
        formDataLogin[name] = value;
        this.setState({
            formDataLogin
        });
        // console.log('value  from event', value);
        console.log('state : ', this.state)

    }

    handleInputChangeSignUp = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        const {formDataSignup} = {...this.state};
        // console.log('form input : ', formInput)
        // console.log('value : ', value)
        formDataSignup[name] = value;
        this.setState({
            formDataSignup
        });
        // console.log('value  from event', value);
        console.log('state : ', this.state)
    }

    loginClickHandler = (e) => {
        let {formDataLogin} = {...this.state}
        if (formDataLogin.username !== null && formDataLogin.password) {
            const payload = {
                url: 'https://pos.kitchennspicemarket.com/api/v1/auth/customer/login',
                method: 'POST',
                data: {
                    username: formDataLogin.username,
                    password: formDataLogin.password
                }
            };
            console.log('payload', payload)
            axios(payload).then(response => {
                let {data} = {...this.state};
                console.log(response)
                if (response.data.data) {
                    console.log(response)
                    data.user = response.data.data.detail
                    data.status = response.data.data.status
                    data.token = response.data.data.token
                    localStorage.setItem('user', JSON.stringify(data.user))
                    localStorage.setItem('token', data.token)
                    this.setState(data)
                    this.props.closeModal('login');
                    toast.success("User logged in successfully.");
                    var path = window.location.protocol + '//' + window.location.host;
                    window.location.href = path;
                } else {
                    toast.error("User not found check your credentials.");
                }
            }).catch(
                (err) => {
                    console.log('error', err)
                    toast.error("User not found check your credentials.");
                });
        } else {
            toast.error("Please fill in username and password fields to continue.");
        }
    }

    signUpClickHandler = (e) => {
        e.preventDefault();
        let {formDataSignup} = {...this.state}
        if (formDataSignup.signupUsername !== null &&
            formDataSignup.signupName !== null &&
            formDataSignup.signupPhone !== null &&
            formDataSignup.signupEmail !== null &&
            formDataSignup.signupAddress !== null &&
            formDataSignup.signupState !== null &&
            formDataSignup.signupCity !== null &&
            formDataSignup.signupPassword !== null

        ) {
            const payload = {
                url: 'https://pos.kitchennspicemarket.com/api/v1/auth/customer/signup',
                method: 'POST',
                data: {
                    username: formDataSignup.signupUsername,
                    password: formDataSignup.signupPassword,
                    business_id: 4,
                    name: formDataSignup.signupName,
                    mobile: formDataSignup.signupPhone,
                    email: formDataSignup.signupEmail,
                    city: formDataSignup.signupCity,
                    state: formDataSignup.signupState,
                    country: "USA",
                    address_line_1: formDataSignup.signupAddressLine,
                    alternate_number: "None"
                }
            };
            console.log('payload', payload)
            axios(payload).then(response => {
                let {data} = {...this.state};
                console.log(response)
                if (response.data.data) {
                    console.log(response)
                    data.status = response.data.data.status
                    this.setState(data)

                    this.props.closeModal('login');
                    toast.success("User Registered successfully.");

                } else {
                    toast.error("Cannot register this user.");
                }
            }).catch(
                (err) => {
                    console.log('error', err)
                    toast.error("Cannot register this user.Some internal issue.");
                });
        } else {
            toast.error("Please fill in all required fields to signup.");
        }
    }

    render() {
        const {showModal, modal} = this.props;
        return (
            <Modal
                isOpen={showModal && 'login' === modal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Login Modal"
                className="modal-dialog modal-dialog-centered"
                id="login-modal">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.closeModal}>
                            <span aria-hidden="true"><i className="icon-close"></i></span>
                        </button>
                        <div className="form-box">
                            <div className="form-tab">
                                <Tabs selectedTabClassName="show" defaultIndex={0}>
                                    <TabList className="nav nav-pills nav-fill">
                                        <Tab className="nav-item">
                                            <span className="nav-link">Sign In</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Register</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel style={{paddingTop: "2rem"}}>
                                            <div>
                                                <form action="#">
                                                    <div className="form-group">
                                                        <label htmlFor="singin-email-2">Username or email address
                                                            *</label>
                                                        <input type="text" className="form-control"
                                                               onChange={this.handleInputChange}
                                                               id="singin-email-2" name="username" required/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="singin-password-2">Password *</label>
                                                        <input type="password" className="form-control"
                                                               onChange={this.handleInputChange}
                                                               id="singin-password-2" name="password" required/>
                                                    </div>

                                                    <div className="form-footer">
                                                        <button type="button"
                                                                onClick={this.loginClickHandler}
                                                                onSubmit={this.loginClickHandler}
                                                                className="btn btn-outline-primary-2">
                                                            <span>LOG IN</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>

                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="signin-remember-2"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="signin-remember-2">Remember Me</label>
                                                        </div>

                                                        <a href="pages/login/#a" className="forgot-link">Forgot Your
                                                            Password?</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <form action="#" onSubmit={(e) => {
                                                e.preventDefault();
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="register-name">Your Name *</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="register-name"
                                                           onChange={this.handleInputChangeSignUp}
                                                           name="signupName" required/>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-lg">
                                                        <label htmlFor="register-email-2">Your email address *</label>
                                                        <input type="email"
                                                               className="form-control"
                                                               id="register-email-2"
                                                               onChange={this.handleInputChangeSignUp}
                                                               name="signupEmail" required/>
                                                    </div>
                                                    <div className="form-group col-lg">
                                                        <label htmlFor="register-username">Your Phone No *</label>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="register-phone"
                                                               onChange={this.handleInputChangeSignUp}
                                                               name="signupPhone" required/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-lg">
                                                        <label htmlFor="register-username">Your City *</label>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="register-city"
                                                               onChange={this.handleInputChangeSignUp}
                                                               name="signupCity" required/>
                                                    </div>
                                                    <div className="form-group col-lg">
                                                        <label htmlFor="register-username">Your State *</label>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="register-state"
                                                               onChange={this.handleInputChangeSignUp}
                                                               name="signupState" required/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-username">Your Address Line *</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="register-address"
                                                           onChange={this.handleInputChangeSignUp}
                                                           name="signupAddress" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-username">Your Username *</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="register-username"
                                                           onChange={this.handleInputChangeSignUp}
                                                           name="signupUsername" required/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password-2">Password *</label>
                                                    <input type="password" className="form-control"
                                                           id="register-password-2"
                                                           onChange={this.handleInputChangeSignUp}
                                                           name="signupPassword" required/>
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit"
                                                            onClick={this.signUpClickHandler}
                                                            className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="register-policy-2" required/>
                                                        <label className="custom-control-label" for="register-policy-2">I
                                                            agree to the <a href="pages/login/#a">privacy
                                                                policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            {/*    <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export const mapStateToProps = (state) => ({
    showModal: state.demo.showModal,
    modal: state.demo.modal
})

export default connect(mapStateToProps, {closeModal})(LoginModal);