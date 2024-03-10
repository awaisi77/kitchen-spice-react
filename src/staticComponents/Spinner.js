import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import img2 from "./img/three-dots.svg";
const Spinner = (props) => {
    useEffect(() => {
        console.log('Hi from here :')
    });
    return (
    <div>
   
        {props.loading ===false ?
            <div>
                <div className="loaderContainer">
                    <div className="loader">

                        <img src={img2}/></div>
                </div>
            </div>: ""
        }
    </div>)
      };
 
  const mapStateToProps = (state) => {
      
    return {
      loading: state.spinner
    };
  };
  

  export default connect(mapStateToProps)(Spinner);