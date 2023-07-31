import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';

function Shop(props) {
    return (
        <LayoutMaster>
            <>
                <Breadcrumb breadcrumb_title="Shop" breadcrumb_list="Home" name="Shop Four Column" />
                <div className="shop-product-section sidebar-left overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 section-padding-04">
                                {/* Shop Top Bar Start */}
                                <div className="shop-topbar">
                                    <div className="shop-topbar-item shop-topbar-left">
                                        <p>Showing 1 - 12 of 25 result</p>
                                    </div>
                                    <div className="shop-topbar-right">
                                        <div className="shop-topbar-item">
                                            <select name="SortBy" id="SortBy">
                                                <option value="manual">Sort by Rated</option>
                                                <option value="best-selling">Sort by Latest</option>
                                                <option value="price-ascending">Price ↑</option>
                                                <option value="price-descending">Price ↓</option>
                                            </select>
                                        </div>
                                        <div className="shop-topbar-item">
                                            <select name="paginateBy" id="paginateBy">
                                                <option value={3}>Show 3</option>
                                                <option value={4}>Show 4</option>
                                                <option value={5}>Show 5</option>
                                                <option value={6}>Show 6</option>
                                                <option value={7}>Show 7</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Shop Top Bar End */}
                                {/* Product Section Start */}
                                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row-cols-1 mb-n50">
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
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
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Brownie</a>
                                                </h5>
                                                <span className="product-item__price">$4.99</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-7-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Red Velvet</a>
                                                </h5>
                                                <span className="product-item__price">$5.00</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-6-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Cream Muffin</a>
                                                </h5>
                                                <span className="product-item__price">$7.55</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-5-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Macaron Cake</a>
                                                </h5>
                                                <span className="product-item__price">$9.44</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">Hot</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-4-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">No-bake chocolate</a>
                                                </h5>
                                                <span className="product-item__price">$4.99</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-3-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Chocolate Bake</a>
                                                </h5>
                                                <span className="product-item__price">$5.00</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge">Hot</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-2-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Red Velvet</a>
                                                </h5>
                                                <span className="product-item__price">$7.55</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-1-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Italian Loaf</a>
                                                </h5>
                                                <span className="product-item__price">$9.44</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-5-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Macaron Cake</a>
                                                </h5>
                                                <span className="product-item__price">$9.44</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-6-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Cream Muffin</a>
                                                </h5>
                                                <span className="product-item__price">$7.55</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge">Hot</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-2-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Red Velvet</a>
                                                </h5>
                                                <span className="product-item__price">$7.55</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-7-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Red Velvet</a>
                                                </h5>
                                                <span className="product-item__price">$5.00</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
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
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Brownie</a>
                                                </h5>
                                                <span className="product-item__price">$4.99</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">Hot</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-4-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">No-bake chocolate</a>
                                                </h5>
                                                <span className="product-item__price">$4.99</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                    <div className="col mb-50">
                                        {/* Product Item Start */}
                                        <div className="product-item text-center">
                                            <div className="product-item__badge d-none">badge</div>
                                            <div className="product-item__image border w-100">
                                                <a href="single-product.html">
                                                    <img
                                                        width={350}
                                                        height={350}
                                                        src="assets/images/product/product-5-500x625.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <ul className="product-item__meta">
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-quickview"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Quick View"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleProductModal"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-cart"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to Cart"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCart"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-wishlist"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to wishlist"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalWishlist"
                                                        />
                                                    </li>
                                                    <li className="product-item__meta-action">
                                                        <a
                                                            className="shadow-1 labtn-icon-compare"
                                                            href="#/"
                                                            data-bs-tooltip="tooltip"
                                                            data-bs-placement="top"
                                                            title="Add to compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalCompare"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-item__content pt-5">
                                                <h5 className="product-item__title">
                                                    <a href="single-product.html">Macaron Cake</a>
                                                </h5>
                                                <span className="product-item__price">$9.44</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                </div>
                                {/* Product Section End */}
                                {/* Shop bottom Bar Start */}
                                <div className="shop-bottombar">
                                    <ul className="pagination">
                                        <li className="disabled">
                                            <a href="#prev">←</a>
                                        </li>
                                        <li>
                                            <a className="active" href="#page=1">
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#page=2">2</a>
                                        </li>
                                        <li>
                                            <a href="#page=3">3</a>
                                        </li>
                                        <li>
                                            <a href="#page=4">4</a>
                                        </li>
                                        <li>
                                            <a href="#page=5">5</a>
                                        </li>
                                        <li>
                                            <a href="#next">→</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Shop bottom Bar End */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </LayoutMaster>

    );
}

export default Shop;