import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        const { post } = this.props;
        let date = new Date(post.date);
        let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

        return(
            <article className="entry">
                <figure className="entry-media">
                    <a href={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                        <img src={ process.env.PUBLIC_URL + '/' + post.image } alt="desc" />
                    </a>
                </figure>

                <div className="entry-body text-center">
                    <div className="entry-meta">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{date.toLocaleDateString('en-US',options) }</Link>, {post.comments} Comments
                    </div>

                    <h3 className="entry-title">
                        <a href={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{post.title}</a>
                    </h3>

                    <div className="entry-content">
                        <a href={ `${process.env.PUBLIC_URL}/blog/single/${post.id}`} className="read-more">Read More</a>
                    </div>
                </div>
            </article>
        )
    }
}

export default Post;