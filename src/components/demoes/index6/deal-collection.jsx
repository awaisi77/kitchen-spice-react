import React, { Component } from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import { rendererThree } from '../../common/countdown/renderer';
// import custom component
import DealProduct from './deal-product';
import { getDealProducts, getProductsByDemo } from '../../../services';

class DealCollection extends Component {
    
    render() {
        
        let products = getDealProducts(getProductsByDemo(this.props.products, "demo6"), "suit");

        return (
            <div className="deal bg-image pt-8 pb-8" style={ {backgroundImage: "url(assets/images/demos/demo-6/deal/bg-1.jpg)"} }>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div className="deal-content text-center">
                                <h4>Limited quantities. </h4>
                                <h2>Deal of the Day</h2>
                                <div className="deal-countdown">
                                    <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererThree } />
                                </div>
                            </div>
                            <div className="row deal-products">
                                <DealProduct product={ products[0] }
                                    adClass="col-6 text-center" />
                                <DealProduct product={ products[1] } 
                                    adClass="col-6 text-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( DealCollection );