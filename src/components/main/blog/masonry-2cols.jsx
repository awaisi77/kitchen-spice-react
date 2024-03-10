import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Pagination from '../../features/pagination';
import PostTen from '../../features/post/post-ten';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils/utils';

class Masonry2Cols extends Component {

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">
                <PageHeader title="Blog Masonry 2 Columns" subTitle="Blog"/>
                <Breadcrumb title="Masonry 2 Columns" parent1={ ["Blog","blog/classic"] } adClass="mb-2"/>

                <div className="page-content">
                    <div className="container"> 
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>6</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>1</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>2</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                            <div className="entry-container max-col-2">
                                <div className="entry-item lifestyle shopping col-sm-6">
                                    <PostTen post={ posts[49] }/>
                                </div>

                                <div className="entry-item lifestyle col-sm-6">
                                    <PostTen post={ posts[50] }/>
                                </div>

                                <div className="entry-item lifestyle fashion col-sm-6">
                                    <PostTen post={ posts[51] }/>
                                </div>

                                <div className="entry-item travel col-sm-6">
                                    <PostTen post={ posts[52] }/>
                                </div>

                                <div className="entry-item travel hobbies col-sm-6">
                                    <PostTen post={ posts[53] }/>
                                </div>

                                <div className="entry-item hobbies col-sm-6">
                                    <PostTen post={ posts[54] }/>
                                </div>
                            </div>
                        </nav>

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
)(Masonry2Cols);