import React, { Component } from 'react';

// import jsons
import _data from '../../../mock_data/data';

class ServiceBoxSix extends Component {
    render() {
        const { adClass="bg-transparent", iconAdClass = "text-dark" } = this.props;

        return(
            <div className={ `container ${adClass}` }>
                { _data.services.slice(0,4).map((item, index)=>
                    <div className="col-sm-6 col-lg-3" key={ index }>
                        <div className="icon-box icon-box-side">
                            <span className={ `icon-box-icon ${iconAdClass}` }>
                                <i className={ item.icon }></i>
                            </span>
                            <div className="icon-box-content">
                                <h3 className="icon-box-title">{ item.title}</h3>
                                <p>{ item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        )
    }
}

export default ServiceBoxSix;