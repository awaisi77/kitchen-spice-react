import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostFive from '../../features/post/post-five';
import Pagination from '../../features/pagination';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils/utils';

class MaskGrid extends Component {

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">
                <PageHeader title="Blog Mask Grid" subTitle="Blog"/>
                <Breadcrumb title="Mask Grid" parent1={ ["Blog","blog/classic"] } adClass="mb-2"/>

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>9</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>2</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>4</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                <PostFive post={ posts[14] }/>
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-lg-4">
                                <PostFive post = {posts[15] }/>
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
                                <PostFive post = {posts[16] }/>
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFive post = {posts[84] }/>
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-lg-4">
                                <PostFive post = {posts[85] }/>
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-lg-4">
                                <PostFive post = {posts[86] }/>
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFive post = {posts[87] }/>
                            </div>
                            <div className="entry-item fashion col-sm-6 col-lg-4">
                                <PostFive post = {posts[88] }/>
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFive post = {posts[89] }/>
                            </div>
                        </div>

                        <div className="mb-3"></div>

                        <Pagination aclsss="justify-content-center"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
	posts: state.posts.items
})

export default connect(
	mapStateToProps
)(MaskGrid);