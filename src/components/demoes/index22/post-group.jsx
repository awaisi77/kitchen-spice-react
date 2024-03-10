import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(134, 138);

        return (
            <div className="container post">
                <div className="section-title">
                    <div><p className="title"><span>Our Blog Posts</span></p></div>
                    
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="link">See All Posts</Link>
                </div>

                <OwlCarousel adClass="owl-simple mb-4"  
                    carouselOptions={ blogSlider }>
                    { posts.map( ( item, index ) => 
                        <PostOne adClass="" post={ item } key={ index } btnText="Continue reading" />
                    ) }
                </OwlCarousel>
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