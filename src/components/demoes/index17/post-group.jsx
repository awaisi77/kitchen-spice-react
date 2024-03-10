import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(145, 149);

        return (
            <div className="blog-posts">
                <div className="container">
                    <div className="heading text-center">
                        <h2 className="title">New Blog Posts</h2>
                        <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                    </div>
                    
                    <OwlCarousel adClass="owl-simple mb-4" carouselOptions={ blogSlider } >
                        { posts.map((post, index) =>
                            <PostOne 
                                adClass = ""
                                bodyClass = ""
                                btnText = "Read More"
                                post = { post } 
                                key = { `post_${index}` }
                            />
                        ) }
                    </OwlCarousel>

                    <div className="more-container text-center">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic`} className="btn btn-outline-darker btn-more"><span>View more articles</span><i className="icon-long-arrow-right"></i></Link>
                    </div>

                    <hr className="mb-5" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.items
    }
}

export default connect( mapStateToProps ) ( PostGroup );