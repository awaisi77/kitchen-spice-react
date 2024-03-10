import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DealProduct extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className={ `deal-product ${ this.props.adClass}` }>
                <figure className="product-media">
                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[0] } alt="Product" className="product-image"/>
                    </Link>

                </figure>

                <div className="product-body">
                    <h3 className="product-title">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>{ product.name }</Link>
                    </h3>

                    <div className="product-price">
                        <span className="new-price">Now ${ product.salePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                        <span className="old-price">Was ${ product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</span>
                    </div>
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` } className="action">shop now</Link>
            </div>
        );
    }
}

export default DealProduct;