import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Pagination from '../../features/pagination';
import PostTen from '../../features/post/post-ten';
import BlogSidebar from '../../features/sidebar/blog-sidebar';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils/utils';

class MasonrySidebar extends Component {

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' )
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">

                <PageHeader title="Blog Masonry With Sidebar" subTitle="Blog"/>
                <Breadcrumb title="Masonry With Sidebar" parent1={ ["Blog","blog/classic"] } adClass="mb-3"/>

                <div className="page-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-9">
                                <nav className="blog-nav">
                                    <div className="entry-container max-col-2">
                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[76] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[77] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[78] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[79] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[80] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[81] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[82] }/>
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostTen post={ posts[83] }/>
                                        </div>
                                    </div>
                                </nav>

                                <Pagination/>   

                            </div>

                            <div className="col-lg-3">
                                <BlogSidebar  />
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
)(MasonrySidebar);