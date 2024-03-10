import React from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../../utils/utils';

export default(props) => {
        const { className, image, title, text, btnText="discover now" } = props.slider;

        return(
            <div className = { className } style={ {backgroundImage: `url(${ image })`} } >
                <div className="intro"> 
                    <div className="title" dangerouslySetInnerHTML= { safeContent( title ) }>
                    </div>

                    <div className="content" dangerouslySetInnerHTML={ safeContent(text) }>
                    </div>

                    <div className="action">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }>{ btnText }</Link>
                    </div>
                </div>
            </div>
        )
}