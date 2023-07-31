import React from 'react';

function Contents(props) {
    return (
        <div>
            <>
                {/* Product Section Strat */}
                <div className="section-padding-01">
                    <div className="container">
                        {/* Section Title Strat */}
                        <div className="section-title text-center max-width-720 mx-auto">
                            <h2 className="section-title__title">FOR A SWEET DAY</h2>
                            <p>
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
                                cillum dolor. Voluptate exercitation incididunt
                            </p>
                        </div>
                        {/* Section Title End */}
                        <div className="row g-6 gx-lg-10">
                            <div className="col-lg-4 col-md-6">
                                {/* Product Item Start */}
                                <div className="product-item border text-center">
                                    <div className="product-item__badge">Hot</div>
                                    <div className="product-item__image">
                                        <a href="single-product.html">
                                            <img
                                                width={350}
                                                height={350}
                                                src="/assets/images/product/product-1.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                        <ul className="product-item__meta meta-middle">
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-quickview"
                                                    href="#"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleProductModal"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-cart"
                                                    href="#/"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Select options"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalCart"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-wishlist"
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
                                                    className="labtn-icon-compare"
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
                                    <div className="product-item__content pb-3">
                                        <h5 className="product-item__title">
                                            <a href="single-product.html">Italian Loaf</a>
                                        </h5>
                                        <span className="product-item__price fs-2">$4.99</span>
                                        <a href="single-product.html" className="product-item__arrow">
                                            <img
                                                width={40}
                                                height={15}
                                                src="assets/images/arrow.svg"
                                                alt="arrow"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* Product Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Product Item Start */}
                                <div className="product-item border text-center">
                                    <div className="d-none">Hot</div>
                                    <div className="product-item__image">
                                        <a href="single-product.html">
                                            <img
                                                width={350}
                                                height={350}
                                                src="assets/images/product/product-2.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                        <ul className="product-item__meta meta-middle">
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-quickview"
                                                    href="#"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleProductModal"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-cart"
                                                    href="#/"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Select options"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalCart"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-wishlist"
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
                                                    className="labtn-icon-compare"
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
                                    <div className="product-item__content pb-3">
                                        <h5 className="product-item__title">
                                            <a href="single-product.html">Croissant Italy Cake</a>
                                        </h5>
                                        <span className="product-item__price fs-2">$5.00</span>
                                        <a href="single-product.html" className="product-item__arrow">
                                            <img
                                                width={40}
                                                height={15}
                                                src="assets/images/arrow.svg"
                                                alt="arrow"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* Product Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Product Item Start */}
                                <div className="product-item border text-center">
                                    <div className="d-none">Hot</div>
                                    <div className="product-item__image">
                                        <a href="single-product.html">
                                            <img
                                                width={350}
                                                height={350}
                                                src="assets/images/product/product-3.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                        <ul className="product-item__meta meta-middle">
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-quickview"
                                                    href="#"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleProductModal"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-cart"
                                                    href="#/"
                                                    data-bs-tooltip="tooltip"
                                                    data-bs-placement="top"
                                                    title="Select options"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalCart"
                                                />
                                            </li>
                                            <li className="product-item__meta-action">
                                                <a
                                                    className="labtn-icon-wishlist"
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
                                                    className="labtn-icon-compare"
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
                                    <div className="product-item__content pb-3">
                                        <h5 className="product-item__title">
                                            <a href="single-product.html">Chocolate Muffin</a>
                                        </h5>
                                        <span className="product-item__price fs-2">$7.55</span>
                                        <a href="single-product.html" className="product-item__arrow">
                                            <img
                                                width={40}
                                                height={15}
                                                src="assets/images/arrow.svg"
                                                alt="arrow"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* Product Item End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Section End */}
                {/* Call to Action Section Strat */}
                <div
                    className="call-to-action"
                    style={{ backgroundImage: "url(assets/images/call-to-action-bg.jpg)" }}
                >
                    <div className="container">
                        <div className="row align-items-center gy-8 gx-0">
                            <div className="col-lg-6">
                                {/* Call to Action box Strat */}
                                <div className="call-to-action-box">
                                    <h3 className="call-to-action-box__title text-white">
                                        <span>Come with us</span>
                                    </h3>
                                    <ul className="call-to-action-box__list text-white">
                                        <li>
                                            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                                            Fusce dignissim <u>luctus sem eu dapibus.</u>
                                        </li>
                                        <li>
                                            Pellentesque vulputate quam a quam volutpat, sed ullamcorper
                                            erat commodo. Vestibulum sit amet ipsum vitae mauris mattis
                                            vulputate lacinia nec neque.
                                        </li>
                                    </ul>
                                </div>
                                {/* Call to Action box End */}
                            </div>
                            <div className="col-lg-6">
                                {/* Call to Action box Start */}
                                <div className="call-to-action-more text-center position-relative">
                                    <a
                                        className="call-to-action-more__arrow text-white lh-1"
                                        href="contact.html"
                                    >
                                        <i className="lastudioicon-arrow-right" />
                                    </a>
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <img
                                            className="call-to-action-more__svg"
                                            src="assets/images/svg-text.svg"
                                            alt="Svg Text"
                                        />
                                    </div>
                                </div>
                                {/* Call to Action box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action Section End */}
                {/* Brand Section Strat */}
                <div className="brand-section">
                    <div className="container">
                        {/* Brand Action Strat */}
                        <div className="brand-active">
                            <div className="swiper">
                                <div className="swiper-wrapper align-items-center">
                                    {/* Brand Item Strat */}
                                    <div className="swiper-slide brand-item">
                                        <img src="assets/images/brand/partner-1.png" alt="Brand" />
                                    </div>
                                    {/* Brand Item End */}
                                    {/* Brand Item Strat */}
                                    <div className="swiper-slide brand-item">
                                        <img src="assets/images/brand/partner-2.png" alt="Brand" />
                                    </div>
                                    {/* Brand Item End */}
                                    {/* Brand Item Strat */}
                                    <div className="swiper-slide brand-item">
                                        <img src="assets/images/brand/partner-3.png" alt="Brand" />
                                    </div>
                                    {/* Brand Item End */}
                                    {/* Brand Item Strat */}
                                    <div className="swiper-slide brand-item">
                                        <img src="assets/images/brand/partner-4.png" alt="Brand" />
                                    </div>
                                    {/* Brand Item End */}
                                    {/* Brand Item Strat */}
                                    <div className="swiper-slide brand-item">
                                        <img src="assets/images/brand/partner-5.png" alt="Brand" />
                                    </div>
                                    {/* Brand Item End */}
                                </div>
                            </div>
                        </div>
                        {/* Brand Action End */}
                    </div>
                </div>
                {/* Brand Section End */}
                {/* Banner Section Strat */}
                <div className="banner-section">
                    <div className="row row-cols-1 row-cols-md-2 g-0">
                        <div className="col">
                            {/* Banner Item Strat */}
                            <a
                                href="shop.html"
                                className="banner-item"
                                style={{ backgroundImage: "url(assets/images/banner-01.jpg)" }}
                            >
                                <div className="banner-item__content">
                                    <h3 className="banner-item__title text-white">Cupcake</h3>
                                    <span className="banner-item__btn text-white">Shop Now</span>
                                </div>
                                <div className="banner-item__badge text-white">01.</div>
                            </a>
                            {/* Banner Item End */}
                        </div>
                        <div className="col">
                            {/* Banner Item Strat */}
                            <a
                                href="shop.html"
                                className="banner-item"
                                style={{ backgroundImage: "url(assets/images/banner-02.jpg)" }}
                            >
                                <div className="banner-item__content">
                                    <h3 className="banner-item__title text-white">Pastry</h3>
                                    <span className="banner-item__btn text-white">Shop Now</span>
                                </div>
                                <div className="banner-item__badge text-white">01.</div>
                            </a>
                            {/* Banner Item End */}
                        </div>
                        <div className="col">
                            {/* Banner Item Strat */}
                            <a
                                href="shop.html"
                                className="banner-item"
                                style={{ backgroundImage: "url(assets/images/banner-03.jpg)" }}
                            >
                                <div className="banner-item__content">
                                    <h3 className="banner-item__title text-white">Muffin</h3>
                                    <span className="banner-item__btn text-white">Shop Now</span>
                                </div>
                                <div className="banner-item__badge text-white">01.</div>
                            </a>
                            {/* Banner Item End */}
                        </div>
                        <div className="col">
                            {/* Banner Item Strat */}
                            <a
                                href="shop.html"
                                className="banner-item"
                                style={{ backgroundImage: "url(assets/images/banner-04.jpg)" }}
                            >
                                <div className="banner-item__content">
                                    <h3 className="banner-item__title text-white">Waffle</h3>
                                    <span className="banner-item__btn text-white">Shop Now</span>
                                </div>
                                <div className="banner-item__badge text-white">01.</div>
                            </a>
                            {/* Banner Item End */}
                        </div>
                    </div>
                </div>
                {/* Banner Section End */}
                {/* Product Section End */}
                <div className="section-padding-01">
                    <div className="container">
                        {/* Section Title Strat */}
                        <div className="section-title text-center max-width-720 mx-auto">
                            <h2 className="section-title__title">OUR PRODUCTS</h2>
                            <p>
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
                                cillum dolor. Voluptate exercitation incididunt
                            </p>
                        </div>
                        {/* Section Title End */}
                        {/* Product Tab Menu Strat */}
                        <div className="product-tab-menu pb-8">
                            <ul className="nav justify-content-center">
                                <li>
                                    <button
                                        className="active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab1"
                                    >
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button data-bs-toggle="tab" data-bs-target="#tab2">
                                        Cupcake
                                    </button>
                                </li>
                                <li>
                                    <button data-bs-toggle="tab" data-bs-target="#tab3">
                                        Pastry
                                    </button>
                                </li>
                                <li>
                                    <button data-bs-toggle="tab" data-bs-target="#tab4">
                                        Muffin
                                    </button>
                                </li>
                                <li>
                                    <button data-bs-toggle="tab" data-bs-target="#tab5">
                                        Waffle
                                    </button>
                                </li>
                                <li>
                                    <button data-bs-toggle="tab" data-bs-target="#tab6">
                                        Tart
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* Product Tab Menu End */}
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab1">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab2">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab3">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab4">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                                    <a href="single-product.html">Chocolate Bake</a>
                                                </h5>
                                                <span className="product-item__price">$5.00</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab5">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                                    <a href="single-product.html">Italian Loaf</a>
                                                </h5>
                                                <span className="product-item__price">$9.44</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab6">
                                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
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
                                                    <a href="single-product.html">Red Velvet</a>
                                                </h5>
                                                <span className="product-item__price">$5.00</span>
                                            </div>
                                        </div>
                                        {/* Product Item End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Section End */}
                {/* Call to Action Section Strat */}
                <div
                    className="call-to-action-02"
                    style={{ backgroundImage: "url(assets/images/call-to-action-bg-02.jpg)" }}
                >
                    {/* Call to Action Section Strat */}
                    <div className="call-to-action-02-wrapper section-padding-01">
                        <div className="container">
                            {/* Call to Action Section Strat */}
                            <div className="call-to-action-02-content text-center">
                                <h4 className="call-to-action-02-content__sub-title text-primary">
                                    Bakerfresh
                                </h4>
                                <h2 className="call-to-action-02-content__title text-white mt-1">
                                    The most amazing cakes
                                </h2>
                                <p className="mt-6 text-white">
                                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                                    qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                                    enim
                                </p>
                                <a
                                    className="btn btn-outline-white btn-hover-primary"
                                    href="shop.html"
                                >
                                    Shop Now
                                </a>
                            </div>
                            {/* Call to Action Section End */}
                        </div>
                    </div>
                    {/* Call to Action Section End */}
                    {/* Call to Action Meta Strat */}
                    <div className="call-to-action-02-meta">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* Call to Action Meta Strat */}
                                    <div className="call-to-action-02-meta-item text-center">
                                        <a href="shop.html">
                                            <div className="call-to-action-02-meta-item__icon text-primary">
                                                <i className="dlicon tech_mobile" />
                                            </div>
                                            <div className="call-to-action-02-meta-item__text text-white">
                                                Contact us
                                            </div>
                                        </a>
                                    </div>
                                    {/* Call to Action Meta End */}
                                </div>
                                <div className="col-md-4">
                                    {/* Call to Action Meta Strat */}
                                    <div className="call-to-action-02-meta-item text-center">
                                        <a href="shop.html">
                                            <div className="call-to-action-02-meta-item__icon text-primary">
                                                <i className="dlicon shopping_bag-09" />
                                            </div>
                                            <div className="call-to-action-02-meta-item__text text-white">
                                                Shopping Online
                                            </div>
                                        </a>
                                    </div>
                                    {/* Call to Action Meta End */}
                                </div>
                                <div className="col-md-4">
                                    {/* Call to Action Meta Strat */}
                                    <div className="call-to-action-02-meta-item text-center">
                                        <a href="shop.html">
                                            <div className="call-to-action-02-meta-item__icon text-primary">
                                                <i className="lastudioicon lastudioicon-pin-3-2" />
                                            </div>
                                            <div className="call-to-action-02-meta-item__text text-white">
                                                Store Location
                                            </div>
                                        </a>
                                    </div>
                                    {/* Call to Action Meta End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Call to Action Meta End */}
                </div>
                {/* Call to Action Section End */}
                {/* Instagram Section Strat */}
               
               
            </>

          </div >
    );
}

export default Contents;