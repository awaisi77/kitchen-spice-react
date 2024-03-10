import React, { Component } from 'react';
import { safeContent } from '../../utils/utils';
import { Link } from 'react-router-dom';

import _data from '../../mock_data/data.json';

export default class SearchResult extends Component {
    
    constructor( props ) {
        super( props );
        this.replacer = this.replacer.bind( this );
    }

    replacer( match, offset, string ) {
        while( offset >= 0 ) {
            offset--;
             if( string[offset] === '>' ) return "<span class='match-text'> " + match + " </span>";
             else if( string[offset] === '<' ) return match;
        }

        return "<span class='match-text'> " + this.props.searchTxt + " </span>";
    }
    
    render() {
        const { searchTxt, results, onClick } = this.props;
        const repTxt = "<span class='match-text'> " + searchTxt + " </span>";
        const regex = new RegExp( searchTxt, 'gi' );

        if ( results.length === 0 )
            return(
                <div className="content search-content no-content">
                    <h2 className="entry-title">No matched result</h2>
                    <span>Sorry, no results are found. Maybe, words are too short or mistyped. Please try again with different words</span>
                </div>
            )
        else 
            return(
                <div className="content search-content">
                    {
                        results.map(( elem, index ) => (
                            <div className="entry-content" key={ index  }>
                                <h2 className="entry-title"><Link to={ `${process.env.PUBLIC_URL}` } index={ elem.index1 } subindex={ elem.index2 } onClick={ onClick } dangerouslySetInnerHTML={ safeContent( ( _data.documentation[elem.index1].list[elem.index2].list[elem.index3]["entry-subtitle"]).replace( regex, repTxt ) ) }></Link></h2>
                                <div className="entry-subcontent" dangerouslySetInnerHTML={ safeContent( ( _data.documentation[elem.index1].list[elem.index2].list[elem.index3]["entry-content"]).replace( regex, repTxt ) ) }>
                                </div>
                                <Link to={ `${process.env.PUBLIC_URL}` } onClick={ onClick }  index={ elem.index1 } subindex={ elem.index2 } className="btn btn-link">Read More...</Link>
                            </div>
                        ))
                    }
                </div>
            )
    }
}