import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryMenu extends Component {
    render() {
        const { type = 1 } = this.props; 
        return (
            <div className="dropdown category-dropdown">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list`} className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                    Browse Categories
                    { type === 3 ? 
                        <i className="icon-angle-down"></i>
                        : ''
                    }
                </Link>

                <div className="dropdown-menu">
                    <nav className="side-nav">
                        <ul className="menu-vertical sf-arrows">
                            <li className="item-lead"><Link to="#">Daily offers</Link></li>
                            <li className="item-lead"><Link to="#">Gift Ideas</Link></li>
                            <li><Link to="#">Beds</Link></li>
                            <li><Link to="#">Lighting</Link></li>
                            <li><Link to="#">Sofas & Sleeper sofas</Link></li>
                            <li><Link to="#">Storage</Link></li>
                            <li><Link to="#">Armchairs & Chaises</Link></li>
                            <li><Link to="#">Decoration </Link></li>
                            <li><Link to="#">Kitchen Cabinets</Link></li>
                            <li><Link to="#">Coffee & Tables</Link></li>
                            <li><Link to="#">Outdoor Furniture </Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default CategoryMenu; 