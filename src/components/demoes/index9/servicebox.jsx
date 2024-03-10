import React, { Component } from 'react';

// import Custom Components
import OwlCarousels from '../../features/owl-carousel';
import _data from '../../../mock_data/data';

import { serviceSlider } from './settings';

class ServiceBox extends Component {

    render() {
        return(
            <OwlCarousels adClass="owl-simple" carouselOptions={ serviceSlider } >
                { _data.services.slice(0,4).map((item, index)=>
                    <div className="icon-box icon-box-side" key={ index }>
                        <span className="icon-box-icon">
                            <i className={ item.icon }></i>
                        </span>

                        <div className="icon-box-content">
                            <h3 className="icon-box-title">{ item.title}</h3>
                            <p>{ item.subtitle}</p>
                        </div>
                    </div>
                ) }
            </OwlCarousels>
        )
    }
}

export default ServiceBox;