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

class Grid2Cols extends Component {
    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">

                <PageHeader title="Blog Grid 2 Columns" subTitle="Blog"/>
                <Breadcrumb title="Grid 2 Columns" parent1={ ["Blog","blog/classic"] } adClass="mb-2"/>

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>12</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>1</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>2</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container max-col-2" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6">
                                <PostSeven post = {posts[26] }/>
                            </div>

                            <div className="entry-item lifestyle col-sm-6">
                                <PostSeven post = {posts[27] }/>
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6">
                                <PostSeven post = {posts[28] }/>
                            </div>

                            <div className="entry-item travel col-sm-6">
                                <PostSeven post = {posts[29] }/>
                            </div>

                            <div className="entry-item travel hobbies col-sm-6">
                                <PostSeven post = {posts[30] }/>
                            </div>

                            <div className="entry-item hobbies col-sm-6">
                                <PostSeven post = {posts[31] }/>
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
)(Grid2Cols);