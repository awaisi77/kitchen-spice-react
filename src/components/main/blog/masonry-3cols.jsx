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

class Masonry3Cols extends Component {

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="main">
                <PageHeader title="Blog Masonry 3 Columns" subTitle="Blog"/>
                <Breadcrumb title="Masonry 3 Columns" parent1={ ["Blog","blog/classic"] } adClass="mb-2"/>

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
                        
                        <div className="entry-container max-col-3">
                            <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                <PostTen post={ posts[55] }/>
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-lg-4">
                                <PostTen post={ posts[56] }/>
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
                                <PostTen post={ posts[57] }/>
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostTen post={ posts[58] }/>
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-lg-4">
                                <PostTen post={ posts[59] }/>
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-lg-4">
                                <PostTen post={ posts[60] }/>
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostTen post={ posts[61] }/>
                            </div>

                            <div className="entry-item fashion col-sm-6 col-lg-4">
                                <PostTen post={ posts[62] }/>
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostTen post={ posts[63] }/>
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
)(Masonry3Cols);