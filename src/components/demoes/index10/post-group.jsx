import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import custom component
import PostTwo from '../../features/post/post-two';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(113, 118);

        return (
            <div className="container">
                <h2 className="title-lg text-center mb-4">From Our Blog</h2>

                <OwlCarousel adClass="owl-simple mb-4"  carouselOptions={ blogSlider  }>
                    {
                        posts.map( ( item, index) => 
                            <PostTwo post={ item } 
                                bodyClass="text-center"
                                key={ index }/>    
                        )
                    }
                </OwlCarousel>

                <div className="more-container text-center mt-1">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic`} className="btn btn-outline-lightgray btn-more btn-round">
                        <span>View more articles</span><i className="icon-long-arrow-right"></i>
                    </Link>
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