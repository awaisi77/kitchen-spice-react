import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../features/post/post-four';
import OwlCarousels from '../../features/owl-carousel';

import { blogSlider } from './settings';

class Blog extends Component {
    render() {
        let posts = this.props.posts.slice(138,142);

        return(
            <div className="blog-posts mb-9">
                <div className="container-fluid">
                    <div className="heading text-center">
                        <h2 className="title">From Our Blog</h2>
                        <p className="title-desc">Donec odio. Quisque volutpat mattis eros. <br />Nullam malesuada erat</p>
                    </div>

                    <OwlCarousels adClass="owl-simple" carouselOptions={ blogSlider  }>
                        { posts.map((post, index) => 
                            <Post post={ post} key={ `post_${index}`} />
                        ) }
                    </OwlCarousels>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    posts: state.posts.items ? state.posts.items : []
})

export default ( connect ) ( mapStateToProps ) ( Blog );