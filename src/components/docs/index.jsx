import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';
import StickyBox from 'react-sticky-box';

import store from '../../store';
import { outerLoading } from '../../actions';

import OuterOverlay from '../common/overlay/outer-overlay';
import SearchResult from './search-result';

// import Utils
import { setStickyValues, setParallax, scrollToElement, safeContent } from '../../utils/utils';

// import from json
import _data from '../../mock_data/data.json';

import style from './style.scss';

class Documentation extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            tabIndex: 0,
            content: _data.documentation[0].list[0],
            matchArr: [],
            type: 1,
        };

        this.searchText = this.searchText.bind(this);
        this.getContent = this.getContent.bind(this);
        this.replacer = this.replacer.bind(this);
    }

    componentDidMount() {
        setParallax();
        setStickyValues(20);
    }

    componentWillMount() {
        store.dispatch(outerLoading());
        style.use();
    }

    componentWillUnmount() {
        style.unuse();
    }

    replacer( match, offset, str ) {
        while( offset >= 0 ) {
            offset--;
             if( str[offset] === '>' ) return "<span class='match-text'> " + match + " </span>";
             else if( str[offset] === '<' ) return match;
        }

        return "<span class='match-text'> " + this.props.searchTxt + " </span>";
    }

    searchText(e) {
        this.setState((state, props) => {
            return {
                type: 2
            }
        });

        let targetText = document.querySelector('.form-control').value;
        if ( ! targetText || targetText.length < 3 ) {
            return;
        }

        let regExp = new RegExp( targetText, "gi" );
        let matchArr = [];

        _data.documentation.map(( item1, index1 ) => (
            item1.list.map(( item2, index2 ) => (
                item2.list.map(( item3, index3 ) => (
                    (( item3["entry-content"].search( regExp ) > -1 ) || ( item3["entry-subtitle"].search( regExp ) > -1 )) ?
                        matchArr.push({ index1, index2, index3 })
                    :   ""
                ))
            ))
        ))

        if ( matchArr.length > 0 ) {
            this.setState(( state, props ) => {
                return {
                    matchArr: matchArr,
                    searchTxt: targetText
                }
            })
        }
    }

    getContent( e ) {
        e.preventDefault();
        let index = e.currentTarget.getAttribute( "index" ),
            subIndex = e.currentTarget.getAttribute( "subindex" );

        this.setState(( state, props ) => {
            return {
                content: _data.documentation[index].list[subIndex],
                type: 1
            }
        })

        let menu = document.querySelector( ".sidebar-menu" );

        if ( menu.querySelector( ".active" ) ) {
            menu.querySelector( ".active" ).classList.remove( "active" );
        }

        if ( menu.childNodes[index].querySelector( ".sub-menu" ) ) {
            menu.childNodes[index].querySelector( ".sub-menu" ).childNodes[subIndex].querySelector( "a" ).classList.add( "active" );
        } else {
            menu.childNodes[index].querySelector( "a" ).classList.add( "active" );
        }
    }

    render() {

        return(
            <React.Fragment>
                <OuterOverlay/>
                <div className="page-wrapper">
                    <header id="header" className="bg-parallax header-parallax" style = { {backgroundImage : `url("assets/images/doc-bg.jpg")`} }>
                        <div className="overlay">
                        </div>
                        <div className="header-top">
                            <div className="container">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link to="#" target = "_black"><img src={ `${process.env.PUBLIC_URL}/assets/images/demos-img/logo.png` } alt="Molla Logo" /></Link>
                                    </div>
                                </div>

                                <div className="header-right">
                                    <ul className="menu">
                                        <li>
                                            <Link to={ `${process.env.PUBLIC_URL}/`} target = "_black" className="go-home" >Home</Link>
                                        </li>

                                        <li>
                                        <Link to={ `${process.env.PUBLIC_URL}/#`} className="go-support" data-target=".section-support" onClick={ scrollToElement }>Support</Link>
                                        </li>

                                        <li>
                                            <Link to="#buymolla">Buy Molla</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                        </div>

                        <div className="header-main">
                            <div className="container">
                                <div className="header-center d-lg-flex justify-content-center">
                                    <div className="banner-text text-center">
                                        <h2 className="m-title">MOLLA DOCS</h2>
                                        <h3 className="m-subtitle">How can we help you?</h3>

                                        <div className="search-wrapper-wide">
                                            <input 
                                                type = "text"
                                                className = "form-control" 
                                                placeholder = "Search ..." 
                                                autoComplete = "off"
                                            /> 
                                            <button className="btn btn-search" type="submit" onClick= { this.searchText } ><i className="icon-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="main">
                        <h1 className="d-none"> Molla eCommerce React Documentation </h1>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <aside className="col-lg-3">
                                        <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={ 20 }>
                                            <ul className="sidebar-menu">
                                                {
                                                    _data.documentation.map((item, index) =>
                                                        item.list.length > 1 ? 
                                                        <li className="with-sf-arrow" key={ index  }>
                                                            <SlideToggle>
                                                                {
                                                                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                        <Fragment>
                                                                            <Link to="#" onClick={ ( e ) => { e.preventDefault(); onToggle(); } }>{ item.title }</Link>
                                                                            <ul className="sub-menu" ref={ setCollapsibleElement } style={ {overflow: 'hidden'} }>
                                                                                {
                                                                                    item.list.map(( subItem, subIndex ) => (
                                                                                        <li key={ subIndex  }>
                                                                                            <Link to="#" index={ index } subindex={ subIndex } onClick={ this.getContent }>{ subItem["entry-title"] }</Link>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </Fragment>
                                                                    )
                                                                }
                                                            </SlideToggle>
                                                        </li>
                                                    :
                                                        <li key={ index  }>
                                                            <Link to="#" index={ index } subindex={ 0 } onClick={ this.getContent }>{ item.title }</Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </StickyBox>
                                    </aside>

                                    <div className="col-lg-9 content-wrapper">

                                        {
                                            this.state.type === 1 ? 
                                                <div className="content">
                                                    <h2 className="entry-title">
                                                        { this.state.content["entry-title"] }
                                                    </h2>
                                                    {
                                                        this.state.content.list.map(( item, index ) => (
                                                            <div className="entry-content" key={ index  }>
                                                                <h6 className="entry-subtitle">{ item["entry-subtitle"] }</h6>
                                                                <div className="entry-subcontent" dangerouslySetInnerHTML={ safeContent( item["entry-content"])  }>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            : <SearchResult results={ this.state.matchArr } onClick={ this.getContent } searchTxt={ this.state.searchTxt } />
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section section-light section-ready text-center bg-parallax" style = {{backgroundImage : `url("assets/images/backgrounds/bg-large.jpg")`} }>
                            <div className="black-back"></div>

                            <h2 className="mb-3">Molla Is Ready To Use. Get It Now!</h2>

                            <p>DON'T FORGET TO APPRECIATE OUR WORK. RATE US NOW!</p>

                            <div className="star-rating mb-2 pb-1">
                                <i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i>
                            </div>

                            <Link  to="#" className="btn btn-primary btn-outline"><i className="icon-shopping-cart"></i>Buy Molla</Link>
                        </section>

                    </main>

                    <footer id="footer" className="container-lg">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
                                <p className="copyright mb-0">Copyright © {(new Date()).getFullYear() } Molla Store. All Rights Reserved.<Link to="#">Terms Of Use</Link>  | <Link to="#">Privacy Policy</Link></p>
                            </div>

                            <div className="col-md-6 text-center text-md-right social-icons">
                                <label className="mr-3">Social Media</label>
                            <Link to="#" title="Facebook"><i className="icon-facebook-f"></i></Link>
                            <Link to="#" title="Twitter"><i className="icon-twitter"></i></Link>
                            <Link to="#" title="Instagram"><i className="icon-instagram"></i></Link>
                            <Link to="#" title="Youtube"><i className="icon-youtube"></i></Link>
                            <Link to="#" title="Pinterest"><i className="icon-pinterest"></i></Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}

export default Documentation;