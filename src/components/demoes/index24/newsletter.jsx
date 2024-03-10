import React from 'react';

export default () => (
    <div className="newsletter" style={ {backgroundImage: "url(assets/images/demos/demo-22/newsLetter/background.jpg)"} }>
        <div className="container">
            <div className="subscribe text-center">
                <div className="intro">
                    <h3 className="title">Subscribe for Our Newsletter</h3>
                    <h4 className="content">Learn about new offers and get more deals by joining our newsletter</h4>
                </div>
                <div className="subscribe action">
                    <form action="#">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required/>
                            <div className="input-group-append">
                                <button className="btn btn-subscribe" type="submit"><span>Subscribe now</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);