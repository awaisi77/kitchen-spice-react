import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import PostTwo from '../../features/post/post-two';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(126, 130);

        return (
            <div className="blog-posts bg-light pt-4 pb-4">
                <div className="container">
                    <h2 className="title">From Our Blog</h2>

                    <OwlCarousel adClass="owl-simple" carouselOptions={ blogSlider }>
                        { posts.map( ( item, index ) => 
                            <PostTwo post={ item } key={ index } btnText="Continue read ..." />
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