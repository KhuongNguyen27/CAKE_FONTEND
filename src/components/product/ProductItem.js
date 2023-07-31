import React from 'react';

function ProductItem(props) {
    return (
        <div className="product-item text-center">
            <div className="product-item__badge">Hot</div>
            <div className="product-item__image border w-100">
                <a href="single-product.html">
                    <img
                        width={350}
                        height={350}
                        src="assets/images/product/product-8-500x625.jpg"
                        alt="Product"
                    />
                </a>
                <ul className="product-item__meta">
                    <li className="product-item__meta-action">
                        <a
                            className="shadow-1 labtn-icon-cart"
                        />
                    </li>
                    <li className="product-item__meta-action">
                        <a
                            className="shadow-1 labtn-icon-wishlist"
                            
                        />
                    </li>
                    <li className="product-item__meta-action">
                        <a
                            className="shadow-1 labtn-icon-compare"
                            
                        />
                    </li>
                </ul>
            </div>
            <div className="product-item__content pt-5">
                <h5 className="product-item__title">
                    <a href="single-product.html">Brownie</a>
                </h5>
                <span className="product-item__price ">$4.99</span>
            </div>
        </div>
    );
}

export default ProductItem;