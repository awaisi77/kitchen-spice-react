import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Post from './post';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(109, 113);

        return (
            <div className="blog-posts mb-4">
                <h2 className="title text-center mb-3">From Our Blog</h2>
                
                <OwlCarousel adClass="owl-simple mb-2" carouselOptions={ blogSlider } >
                    { 
                        posts.map(( item, index ) => 
                            <Post post={ item } key={ index } />
                    ) }
                </OwlCarousel>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.items ? state.posts.items : []
    }
}

export default connect( mapStateToProps ) ( PostGroup );