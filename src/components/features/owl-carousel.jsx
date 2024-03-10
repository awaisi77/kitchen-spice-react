import React, { Component } from 'react';
import Carousel from 'react-owl-carousel2';

export const events = {
    onTranslate: function( e ) {
        if( ! e.target ) return;
        if( e.target.closest(".owl-quickview") ) {
            document.querySelector( "#owl-dots" ).querySelector( ".active" ).classList.remove( "active" );
            document.querySelector( "#owl-dots" ).children[( e.page.index )].classList.add( "active" );
        }

    }
};

class OwlCarousel extends Component {
    
    componentDidMount() {
        if( ( this.props.children.length > 0 || ( this.props.children && this.props.children.length === undefined ) ) && this.refs.carousel.props.className.indexOf( 'owl-quickview' ) > -1 ) {
            let dots;
            let carousel = this.refs.carousel;
                        
            if( document.querySelector( "#owl-dots .carousel-dot" ) ) {
                if( ! document.querySelector( "#owl-dots .carousel-dot.active" ) )
                    document.querySelectorAll( "#owl-dots .carousel-dot" )[0].classList.add( "active" );
                dots = document.querySelectorAll( '#owl-dots .carousel-dot' );
                for ( let i = 0; i < dots.length; i++ ) {
                    dots[i].addEventListener( "click", ( e ) => {
                        carousel.goTo( e.currentTarget.index() );
                    });
                }
            }
        }
    }

    render() {
        const { adClass, carouselOptions } = this.props;
        let slider_default_options = {
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: "true",
            nav: true,
            navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
            dots: true,
            smartSpeed: 400,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                320: {
                    nav: false
                },
                375: {
                    nav: false
                }
            }
        };
        let res = Object.assign( {}, slider_default_options, carouselOptions );
        
        return (
            this.props.children.length > 0 || ( this.props.children && this.props.children.length === undefined ) ?
                <Carousel ref="carousel" className={ `owl-carousel ${ adClass }` }  options={ res } events={ events } >
                    { this.props.children }
                </Carousel>
                : ""
        );
    }
}

export default OwlCarousel;