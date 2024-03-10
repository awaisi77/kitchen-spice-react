import React, { Component } from 'react';

class CTA extends Component{
    render() {
        return (
            <div className="cta cta-box">
                <div className="cta-content">
                    <h3 className="cta-title">Subscribe To Our Newsletter</h3>  
                    <p>Sign up now for <span className="primary-color">10% discount</span> on first order. Customise my news:</p>

                    <form action="#">
                        <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required/>
                        <div className="text-center">
                            <button className="btn btn-outline-dark-2" type="submit"><span>subscribe</span></button>
                        </div>
                    </form>
                </div>
            </div>            
        )
    }
}

export default CTA;