import React, { Component } from 'react';
import { connect } from 'react-redux';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostSeven from '../../features/post/post-seven';
import Pagination from '../../features/pagination';

import { isotopeLoad } from '../../../utils/utils';

class Grid3Cols extends Component {
    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">

                <PageHeader title="Blog Grid 3 Columns" subTitle="Blog"/>
                <Breadcrumb title="Grid 3 Columns" parent1={ ["Blog","blog/classic"] } adClass="mb-2"/>

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="1#" data-filter="*">All Blog Posts<span>9</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>2</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>4</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container max-col-3" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                <PostSeven post = {posts[32] }/>
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-lg-4">
                                <PostSeven post = {posts[33] }/>
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
                                <PostSeven post = {posts[34] }/>
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSeven post = {posts[35] }/>
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-lg-4">
                                <PostSeven post = {posts[36] }/>
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-lg-4">
                                <PostSeven post = {posts[37] }/>
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSeven post = {posts[38] }/>
                            </div>
                            <div className="entry-item fashion col-sm-6 col-lg-4">
                                <PostSeven post = {posts[39] }/>
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSeven post = {posts[40] }/>
                            </div>
                        </div>

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
)(Grid3Cols);