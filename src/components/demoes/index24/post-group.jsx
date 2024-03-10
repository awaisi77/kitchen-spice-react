import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import PostOne from '../../features/post/post-one';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(142, 145);

        return (
            <section className="blog mb-6">
                <div className="container">
                    <div className="heading">
                        <p className="heading-cat">Our Fresh News</p>
                        <h3 className="heading-title">New Blog Posts</h3>
                    </div>

                    <OwlCarousel adClass="owl-simple mb-4"  
                        carouselOptions={ blogSlider }>
                        { posts.map( ( item, index ) => 
                            <PostOne adClass="" post={ item } key={ index } btnText="Read more" />
                        ) }
                    </OwlCarousel>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.items
    }
}

export default connect( mapStateToProps ) ( PostGroup );