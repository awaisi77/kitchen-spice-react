import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { matchPath } from 'react-router-dom';

import store from '../store';

// import Custom Components
import HeaderOne from './common/header/header-1';
import FooterOne from './common/footer/footer-one';
import MobileMenu from './common/header/common/mobile-menus/menu-1';
import OuterOverlay from './common/overlay/outer-overlay';

import Error from './main/pages/404';

// import Utils
import { initSettings } from '../utils/utils';

// import Actions
import { outerLoading, closeQuickViewModal } from '../actions';
import HeaderTwenty from "./common/header/header-20";
import FooterThree from "./common/footer/footer-three";
import Spinner from "../staticComponents/Spinner";

class App extends Component {
    componentDidMount() {
        initSettings();
        store.dispatch(outerLoading());
    }

    componentDidUpdate() {
        if ( store.getState() && store.getState().overlay.type === 'outer' ) {
            store.dispatch(outerLoading());
        } 
        
        if (store.getState() && store.getState().data.quickView) {
            store.dispatch(closeQuickViewModal());
        }
    }

    render() {
        let flag = false, i = 0;

        while( i < this.props.children.length &&  ! matchPath(window.location.pathname, { path: this.props.children[i].props.path , exact: true } ) ) {
            i ++;
        }

        if ( i < this.props.children.length ) {
            flag = true;
        }

        return (
            <React.Fragment>
                <OuterOverlay />
                <div className="page-wrapper">

                    <HeaderTwenty  />
                    { flag ?
                        this.props.children :                         
                            <Error />
                    }
                    <FooterThree />
                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                </div>
                <MobileMenu />
            </React.Fragment>
        );
    }
}



export default App;