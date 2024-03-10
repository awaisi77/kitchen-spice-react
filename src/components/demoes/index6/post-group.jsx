import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(106, 109)

        return (
            <div className="blog-posts mb-5">
                <div className="container">
                    <h2 className="title text-center mb-4">From Our Blog</h2>

                    <OwlCarousel  adClass="owl-simple mb-3" carouselOptions={ blogSlider  }>
                        { posts.map( ( item, index )=>
                            <PostOne post={ item}
                                adClass=""
                                btnText="Read More"
                                key={ index} />
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