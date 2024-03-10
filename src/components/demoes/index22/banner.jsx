import React from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

export default(props) => {
    const { img, title, content, btnText } = props.banner;

    return(
        <div className="col-lg-6 col-md-6 col-sm-6 banner-lg" style = {{minHeight: '21rem'} }>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>
                    <img src={ process.env.PUBLIC_URL + '/' + img } alt="desc" width="575" height="320"/>
                </Link>

                <div className="banner-content">
                    <div className="title">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{ title }</Link>
                    </div>
                    
                    <div className="content">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } dangerouslySetInnerHTML={ safeContent(content) }></Link>
                    </div>

                    <div className="action">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }>
                            { btnText }
                        </Link>
                    </div>
                </div>
        </div>
    )
}