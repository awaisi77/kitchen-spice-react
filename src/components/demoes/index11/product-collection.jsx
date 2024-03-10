import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import Product from './product';

import InnerOverlay from '../../common/overlay/inner-overlay';

import { toggleWishlist, showQuickViewModal } from '../../../actions';
import { getVisibleProducts } from '../../../services';
import { isotopeLoad } from '../../../utils/utils';

class ProductCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedCount: 8,
            hasMore: true,
            loading: false
        }

        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.products-container', '.product-item', '.product-filter' );
    }

    componentDidUpdate() {
        isotopeLoad( isotope, imagesLoaded, '.products-container', '.product-item', '.product-filter' );
    }

    loadMore() {
        // fake async api. products should be fetched from backend
        if ( this.state.loadedCount < 12 ) {
            this.setState((state) => {
                return { loading: true } ;
            })

            this.timer = setTimeout(() => {
                this.setState((state) => {
                    return { loadedCount: this.state.loadedCount + 4, loading: false }
                });

                if ( this.state.loadedCount >= 12 ) {
                    document.querySelector('.more-container').style.display = 'none';
                }        
            }, 2000);
        }
    }

    componentWillUnmount() {
        if ( this.timer )
            clearTimeout( this.timer );
    }

    render() {
        let { products, filters, toggleWishlist, showQuickViewModal } = this.props;

        products = getVisibleProducts(products.slice(170, 182), filters);

        return(
            <React.Fragment>
                <div className="products-container" data-layout="fitRows" key={ JSON.stringify(filters) }>
                    <InnerOverlay/>
                    { products.slice(0, this.state.loadedCount).map((item, index) => 
                        <div className={ `product-item col-6 col-md-4 col-lg-3 ${ item.category } ${ item.discount > 0 ? 'Sale' : '' }` } key={ `product_${ index }_${ item.name }` }>
                            <Product 
                                product={ item } 
                                key={ index + item.name } 
                                onToggleWishlistClick={ toggleWishlist } 
                                showQuickViewModal={ showQuickViewModal } 
                            />
                        </div>
                    ) }
                </div>

                <div className="more-container text-center mt-0 mb-7">
                    {   
                        this.state.hasMore ?
                            true === this.state.loading ?
                                <button className="btn btn-outline-dark-3 btn-more" onClick = { this.loadMore }><span>more products</span><i className="icon-refresh load-more-rotating"></i>
                                </button>
                            :
                            <button className="btn btn-outline-dark-3 btn-more" onClick = { this.loadMore }><span>more products</span><i className="icon-refresh"></i>
                            </button>
                        : ''
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }
}

export default connect(
    mapStateToProps, { toggleWishlist, showQuickViewModal }
) ( ProductCollection );
