import React, { Component } from 'react';
import { connect } from 'react-redux';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostNine from '../../features/post/post-nine';
import Pagination from '../../features/pagination';
import BlogSidebar from '../../features/sidebar/blog-sidebar';

import { isotopeLoad } from '../../../utils/utils';
class GrideSidebar extends Component {

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">
                <PageHeader title="Blog Grid With Sidebar" subTitle="Blog"/>
                <Breadcrumb title="Grid With Sidebar" parent1={ ["Blog", "blog/classic"] } adClass="mb-3"/>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="entry-container max-col-2" data-layout="fitRows">

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[32] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[33] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[34] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[35] }/> 
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[36] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[37] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[38] }/>
                                    </div>

                                    <div className="entry-item col-sm-6">
                                        <PostNine post = {posts[39] }/>
                                    </div>

                                </div>

                                <Pagination />
                            </div>

                            <div className="col-lg-3">
                                <BlogSidebar />
                            </div>
                        </div>
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
)(GrideSidebar);