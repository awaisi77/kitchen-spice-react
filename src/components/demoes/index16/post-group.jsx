import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(120, 124);

        return (
            <div className="blog-posts">
                <div className="container">
                    <div className="heading text-center">
                        <h2 className="title">New Blog Posts</h2>
                        <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                    </div>

                    <OwlCarousel adClass="owl-carousel owl-simple mb-4"  carouselOptions={ blogSlider  }>
                        { posts.map( ( item, index ) => 
                            <PostOne post={ item } btnText="Read More" adClass="" bodyClass="" key={ index }/>
                        ) }
                    </OwlCarousel>

                    <div className="more-container text-center">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic`} className="btn btn-outline-primary-2 btn-more">
                            <span>View more articles</span><i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>

                    <hr className="mb-3" />
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