import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(149, 153);

        return (
            <div className="blog-posts bg-light pt-4 pb-5">
                <div className="container">
                    <div className="heading heading-flex mb-2">
                        <div className="heading-left">
                            <h2 className="title mb-0">From Our Blog</h2>
                        </div>

                        <div className="heading-right">
                            <Link  to={ `${process.env.PUBLIC_URL}/blog/classic` } className="title-link">View more articles <i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>

                    <OwlCarousel adClass="owl-simple carousel-equal-height" carouselOptions={ blogSlider } carousel_id = "post">
                        { posts.map((post, index) =>
                            <PostOne 
                                post={ post } 
                                adClass=''
                                btnText=''
                                key={ `blog_${index}` }
                            />
                        ) }
                    </OwlCarousel>
                </div>
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