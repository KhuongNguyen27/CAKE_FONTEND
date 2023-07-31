import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../components/product/ProductItem';

function Product(props) {
    return (
        <LayoutMaster>
            <>
                <Breadcrumb breadcrumb_title="Product Details" breadcrumb_list="Home" name="Product Affiliate" backgroundImageUrl="/assets/images/bg/breadcrumb-bg.jpg" />
                <div className="section section-margin-top section-padding-03">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1">
                                {/* Product Details Image Start */}
                                <div className="product-details-img d-flex overflow-hidden flex-row">
                                    {/* Single Product Image Start */}
                                    <div className="single-product-vertical-tab swiper-container order-2">
                                        <div className="swiper-wrapper popup-gallery" id="popup-gallery">
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-1.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-1.png"
                                                    alt="Product"
                                                />
                                            </a>
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-2.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-2.png"
                                                    alt="Product"
                                                />
                                            </a>
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-3.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-3.png"
                                                    alt="Product"
                                                />
                                            </a>
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-4.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-4.png"
                                                    alt="Product"
                                                />
                                            </a>
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-5.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-5.png"
                                                    alt="Product"
                                                />
                                            </a>
                                            <a
                                                className="swiper-slide h-auto"
                                                href="assets/images/product/product-7-6.png"
                                            >
                                                <img
                                                    className="w-100"
                                                    src="assets/images/product/product-7-6.png"
                                                    alt="Product"
                                                />
                                            </a>
                                        </div>
                                        {/* Swiper Pagination Start */}
                                        {/* <div class="swiper-pagination d-none"></div> */}
                                        {/* Swiper Pagination End */}
                                        {/* Next Previous Button Start */}
                                        <div className="swiper-button-vertical-next swiper-button-next">
                                            <i className="lastudioicon-arrow-right" />
                                        </div>
                                        <div className="swiper-button-vertical-prev swiper-button-prev">
                                            <i className="lastudioicon-arrow-left" />
                                        </div>
                                        {/* Next Previous Button End */}
                                    </div>
                                    {/* Single Product Image End */}
                                    {/* Single Product Thumb Start */}
                                    <div className="product-thumb-vertical overflow-hidden swiper-container order-1">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-1.png"
                                                    alt="Product"
                                                />
                                            </div>
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-2.png"
                                                    alt="Product"
                                                />
                                            </div>
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-3.png"
                                                    alt="Product"
                                                />
                                            </div>
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-4.png"
                                                    alt="Product"
                                                />
                                            </div>
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-5.png"
                                                    alt="Product"
                                                />
                                            </div>
                                            <div className="swiper-slide">
                                                <img
                                                    src="assets/images/product/product-tab-6.png"
                                                    alt="Product"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-summery position-relative">
                                    <div className="product-head mb-3">
                                        <span className="product-head-price">$4.99</span>
                                        <div className="review-rating">
                                            <span className="review-rating-bg">
                                                <span
                                                    className="review-rating-active"
                                                    style={{ width: "90%" }}
                                                />
                                            </span>
                                            <a href="#/" className="review-rating-text">
                                                (1 Review)
                                            </a>
                                        </div>
                                    </div>
                                    <p className="desc-content">
                                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                                        qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                                        enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                                        voluptate aute id deserunt nisi.
                                    </p>
                                    <ul className="product-cta">
                                        <li>
                                            <div className="cart-btn">
                                                <div className="add-to_cart">
                                                    <a
                                                        className="btn btn-dark btn-hover-primary"
                                                        href="#/"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modalCart"
                                                    >
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="actions">
                                                <a
                                                    href="#/"
                                                    title="Wishlist"
                                                    className="action compare"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalWishlist"
                                                >
                                                    <i className="lastudioicon-heart-2" />
                                                </a>
                                                <a
                                                    href="#/"
                                                    title="Compare"
                                                    className="action wishlist"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalCompare"
                                                >
                                                    <i className="lastudioicon-ic_compare_arrows_24px" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="product-meta">
                                        <li className="product-meta-wrapper">
                                            <span className="product-meta-name">SKU:</span>
                                            <span className="product-meta-detail">REF. LA-199</span>
                                        </li>
                                        <li className="product-meta-wrapper">
                                            <span className="product-meta-name">category:</span>
                                            <span className="product-meta-detail">
                                                <a href="#">Cake, </a>
                                                <a href="#">New</a>
                                            </span>
                                        </li>
                                        <li className="product-meta-wrapper">
                                            <span className="product-meta-name">Tags:</span>
                                            <span className="product-meta-detail">
                                                <a href="#">Cake 1</a>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="product-share">
                                        <a href="#">
                                            <i className="lastudioicon-b-facebook" />
                                        </a>
                                        <a href="#">
                                            <i className="lastudioicon-b-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="lastudioicon-b-pinterest" />
                                        </a>
                                        <a href="#">
                                            <i className="lastudioicon-b-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row section-margin">
                            {/* Single Product Tab Start */}
                            <div className="col-lg-12 single-product-tab">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            href="#connect-1"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="review-tab"
                                            data-bs-toggle="tab"
                                            href="#connect-4"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Additional information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            href="#connect-2"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Reviews (1)
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content mb-text" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="connect-1"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="product-desc-row">
                                            <div className="product-desc-img">
                                                <img
                                                    src="assets/images/product/product-tab.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="product-desc-content">
                                                <h5 className="product-desc-title">We Love Cake</h5>
                                                <p className="product-desc-text">
                                                    Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                                                    Fusce dignissim luctus sem eu dapibus. Pellentesque
                                                    vulputate quam a quam volutpat, sed ullamcorper erat
                                                    commodo. Vestibulum sit amet ipsum vitae mauris mattis
                                                    vulputate lacinia nec neque. Aenean quis consectetur nisi,
                                                    ac interdum elit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="connect-4"
                                        role="tabpanel"
                                        aria-labelledby="review-tab"
                                    >
                                        <div className="size-tab table-responsive-lg">
                                            <table className="table border mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="cun-name">
                                                            <span>Color</span>
                                                        </td>
                                                        <td>Blue, Gray, Green, Red, Yellow</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cun-name">
                                                            <span>Size</span>
                                                        </td>
                                                        <td>Large, Medium, Small</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="connect-2"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        {/* Start Single Content */}
                                        <div className="review">
                                            {/* Review Top Start */}
                                            <div className="review-top d-flex mb-4 align-items-center">
                                                {/* Review Thumb Start */}
                                                <div className="review_thumb">
                                                    <img
                                                        alt="review images"
                                                        src="assets/images/avatar/testimoial-1.png"
                                                    />
                                                </div>
                                                {/* Review Thumb End */}
                                                {/* Review Details Start */}
                                                <div className="review_details ms-3">
                                                    {/* Rating Start */}
                                                    <div className="review-rating mb-2">
                                                        <span className="review-rating-bg">
                                                            <span
                                                                className="review-rating-active"
                                                                style={{ width: "90%" }}
                                                            />
                                                        </span>
                                                    </div>
                                                    {/* Rating End */}
                                                    {/* Review Title & Date Start */}
                                                    <div className="review-title-date d-flex">
                                                        <h5 className="title me-1">Admin - </h5>
                                                        <span>January 19, 2021</span>
                                                    </div>
                                                    {/* Review Title & Date End */}
                                                    <p>
                                                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                                                        et.
                                                    </p>
                                                </div>
                                                {/* Review Details End */}
                                            </div>
                                            {/* Review Top End */}
                                            {/* Comments ans Replay Start */}
                                            <div className="comments-area comments-reply-area">
                                                <div className="row">
                                                    <div className="col-lg-12 col-custom">
                                                        <h5 className="title mb-2">Add a review</h5>
                                                        <p className="comments-area_text">
                                                            Your email address will not be published. Required
                                                            fields are marked *
                                                        </p>
                                                        {/* Comment form Start */}
                                                        <form action="#" className="comments-area_form">
                                                            <div className="row">
                                                                {/* Input Name Start */}
                                                                <div className="col-md-6 mb-3">
                                                                    <label>
                                                                        Name <span className="required">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="comments-area_input"
                                                                        type="text"
                                                                        required="required"
                                                                        name="Name"
                                                                    />
                                                                </div>
                                                                {/* Input Name End */}
                                                                {/* Input Email Start */}
                                                                <div className="col-md-6 mb-3">
                                                                    <label>
                                                                        Email <span className="required">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="comments-area_input"
                                                                        type="text"
                                                                        required="required"
                                                                        name="email"
                                                                    />
                                                                </div>
                                                                {/* Input Email End */}
                                                            </div>
                                                            {/* Comment Texarea Start */}
                                                            <div className="mb-3">
                                                                <label>Comment</label>
                                                                <textarea
                                                                    className="comments-area_textarea"
                                                                    required="required"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            {/* Comment Texarea End */}
                                                            {/* Comment Submit Button Start */}
                                                            <div className="comment-form-submit">
                                                                <button className="btn btn-dark btn-hover-primary">
                                                                    Submit
                                                                </button>
                                                            </div>
                                                            {/* Comment Submit Button End */}
                                                        </form>
                                                        {/* Comment form End */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Comments ans Replay End */}
                                        </div>
                                        {/* End Single Content */}
                                    </div>
                                </div>
                            </div>
                            {/* Single Product Tab End */}
                        </div>
                    </div>
                </div>
                <div className="section-padding-03 pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="section-title">
                                    <h2 className="section-title__title">Related Product</h2>
                                </div>

                            </div>
                        </div>

                        <div className="product-active">

                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                
                                modules={[Autoplay, Pagination, Navigation]}
                                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                            >
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                            </Swiper>
                           
                        </div>



                    </div>
                </div>
                <a href="#/" className="scroll-top" id="scroll-top">
                    <i className="lastudioicon-up-arrow" />
                </a>

            </>
        </LayoutMaster >
    );

}

export default Product;