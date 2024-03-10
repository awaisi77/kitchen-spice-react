import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from './banner';
import ProductTwo from './product-2';
import PostTwo from '../../features/post/post-two';
import ProductThree from './product-3';
import OwlCarousel from '../../features/owl-carousel';

// import Actions
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { sidebarSlider } from './settings';
import { getSidebarProducts, getProductsByDemo, getDealProducts } from '../../../services';

class Sidebar extends Component {

    render() {
        const { banners, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
        let products = getSidebarProducts(getProductsByDemo(this.props.products, "demo14"));
        let posts = this.props.posts.slice(117, 120);

        return (
            <aside className="col-xl-3 col-xxl-2 order-xl-first">
                <div className="sidebar sidebar-home">
                    <div className="row">
                        <div className="col-sm-6 col-xl-12">
                            <div className="widget widget-banner">
                                <Banner data={ banners[0] }/>
                            </div>
                        </div>

                        <div className="col-sm-6 col-xl-12 mb-2">
                            <div className="widget widget-products">
                                <h4 className="widget-title"><span>Bestsellers</span></h4>

                                <div className="products">
                                    {
                                        getDealProducts(products, "best").map( ( item, index ) => 
                                            <ProductThree product={ item }key={ index} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="widget widget-deals">
                                <h4 className="widget-title"><span>Special Offer</span></h4>

                                <div className="row">
                                    {
                                        getDealProducts(products, "special").slice( 0, 2 ).map( ( item, index ) => 
                                            <div className="col-sm-6 col-xl-12" key={ index} >
                                                <ProductTwo product={ item }
                                                            colorType = "rgb" 
                                                            onAddToCartClick={ addToCart } 
                                                            onToggleWishlistClick={ toggleWishlist } 
                                                            onAddToCompareClick={ addToCompare }  
                                                            showQuickViewModal={ showQuickViewModal } />
                                            
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-xl-12">
                            <div className="widget widget-banner">
                                <Banner data={ banners[1] }/>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-xl-12">
                            <div className="widget widget-posts">
                                <h4 className="widget-title"><span>Latest Blog Posts</span></h4>

                                <OwlCarousel adClass="owl-simple"  
                                    carouselOptions={ sidebarSlider  }>
                                    { posts.map( ( item, index ) => 
                                        <PostTwo post={ item } key={ index } />
                                    ) }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export const mapStateToProps = (state) =>{
    return{
        products: state.data.products ? state.data.products : [],
        posts: state.posts.items ? state.posts.items : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } ) ( Sidebar );