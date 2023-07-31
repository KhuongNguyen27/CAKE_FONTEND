import React from 'react';
import Breadcrumb from '../components/global/Breadcrumb';
import LayoutMaster from '../layouts/LayoutMaster';

function Cart(props) {
    return (
        <LayoutMaster>
            <>
            <Breadcrumb breadcrumb_title="Cart" breadcrumb_list="Home" name="Shopping Cart" />
                <div className="section section-padding-03">
                    <div className="container custom-container">
                        <div className="row mb-n30">
                            <div className="col-lg-8 col-12 mb-30">
                                {/* Cart Table For Tablet & Up Devices Start */}
                                <div className="table-responsive">
                                    <table className="cart-table table text-center align-middle mb-6 d-none d-md-table">
                                        <thead>
                                            <tr>
                                                <th />
                                                <th />
                                                <th className="title text-start">Product</th>
                                                <th className="price">Price</th>
                                                <th className="quantity">Quantity</th>
                                                <th className="total">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-top-0">
                                            <tr>
                                                <th className="cart-remove">
                                                    <button className="remove-btn">
                                                        <i className="lastudioicon lastudioicon-e-remove" />
                                                    </button>
                                                </th>
                                                <th className="cart-thumb">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="assets/images/product/product-tab-1.png"
                                                            alt="Croissant Italy Cake"
                                                        />
                                                    </a>
                                                </th>
                                                <th className="text-start">
                                                    <a href="single-product.html">Croissant Italy Cake</a>
                                                </th>
                                                <td>$110.00</td>
                                                <td className="text-center cart-quantity">
                                                    {/* Quantity Start */}
                                                    <div className="quantity">
                                                        <div className="cart-plus-minus border-0 mx-auto" />
                                                    </div>
                                                    {/* Quantity End */}
                                                </td>
                                                <td>$110.00</td>
                                            </tr>
                                            <tr>
                                                <th className="cart-remove">
                                                    <button className="remove-btn">
                                                        <i className="lastudioicon lastudioicon-e-remove" />
                                                    </button>
                                                </th>
                                                <th className="cart-thumb">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="assets/images/product/product-tab-2.png"
                                                            alt="Chocolate Muffin"
                                                        />
                                                    </a>
                                                </th>
                                                <th className="text-start">
                                                    <a href="single-product.html">Chocolate Muffin</a>
                                                </th>
                                                <td>$19.00</td>
                                                <td className="text-center cart-quantity">
                                                    {/* Quantity Start */}
                                                    <div className="quantity">
                                                        <div className="cart-plus-minus border-0 mx-auto" />
                                                    </div>
                                                    {/* Quantity End */}
                                                </td>
                                                <td>$19.00</td>
                                            </tr>
                                            <tr>
                                                <th className="cart-remove">
                                                    <button className="remove-btn">
                                                        <i className="lastudioicon lastudioicon-e-remove" />
                                                    </button>
                                                </th>
                                                <th className="cart-thumb">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="assets/images/product/product-tab-2.png"
                                                            alt="Chocolate Muffin"
                                                        />
                                                    </a>
                                                </th>
                                                <th className="text-start">
                                                    <a href="single-product.html">Chocolate Muffin</a>
                                                </th>
                                                <td>$19.00</td>
                                                <td className="text-center cart-quantity">
                                                    {/* Quantity Start */}
                                                    <div className="quantity">
                                                        <div className="cart-plus-minus border-0 mx-auto" />
                                                    </div>
                                                    {/* Quantity End */}
                                                </td>
                                                <td>$19.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Cart Table For Tablet & Up Devices End */}
                                {/* Cart Table For Mobile Devices Start */}
                                <div className="cart-products-mobile d-md-none">
                                    <div className="cart-product-mobile">
                                        <div className="cart-product-mobile-thumb">
                                            <a
                                                href="single-product.html"
                                                className="cart-product-mobile-image"
                                            >
                                                <img
                                                    src="assets/images/product/product-tab-1.png"
                                                    alt="Croissant Italy Cake"
                                                    width={90}
                                                    height={103}
                                                />
                                            </a>
                                            <button className="cart-product-mobile-remove">
                                                <i className="lastudioicon lastudioicon-e-remove" />
                                            </button>
                                        </div>
                                        <div className="cart-product-mobile-content">
                                            <h5 className="cart-product-mobile-title">
                                                <a href="single-product.html">Croissant Italy Cake</a>
                                            </h5>
                                            <span className="cart-product-mobile-quantity">1 x $110.00</span>
                                            <span className="cart-product-mobile-total">
                                                <b>Total:</b> $110.00
                                            </span>
                                            {/* Quantity Start */}
                                            <div className="quantity">
                                                <div className="cart-plus-minus border-0" />
                                            </div>
                                            {/* Quantity End */}
                                        </div>
                                    </div>
                                    <div className="cart-product-mobile">
                                        <div className="cart-product-mobile-thumb">
                                            <a
                                                href="single-product.html"
                                                className="cart-product-mobile-image"
                                            >
                                                <img
                                                    src="assets/images/product/product-tab-2.png"
                                                    alt="Chocolate Muffin"
                                                    width={90}
                                                    height={103}
                                                />
                                            </a>
                                            <button className="cart-product-mobile-remove">
                                                <i className="lastudioicon lastudioicon-e-remove" />
                                            </button>
                                        </div>
                                        <div className="cart-product-mobile-content">
                                            <h5 className="cart-product-mobile-title">
                                                <a href="single-product.html">Chocolate Muffin</a>
                                            </h5>
                                            <span className="cart-product-mobile-quantity">1 x $19.00</span>
                                            <span className="cart-product-mobile-total">
                                                <b>Total:</b> $19.00
                                            </span>
                                            {/* Quantity Start */}
                                            <div className="quantity">
                                                <div className="cart-plus-minus border-0" />
                                            </div>
                                            {/* Quantity End */}
                                        </div>
                                    </div>
                                </div>
                                {/* Cart Table For Mobile Devices End */}
                                {/* Cart Action Buttons Start */}
                                <div className="row justify-content-between gap-3">
                                    <div className="col-auto">
                                        <button className="btn btn-outline-dark btn-primary-hover rounded-0">
                                            Continue Shopping
                                        </button>
                                    </div>
                                    <div className="col-auto d-flex flex-wrap gap-3">
                                        <button className="btn btn-outline-dark btn-primary-hover rounded-0">
                                            Update Cart
                                        </button>
                                        <button className="btn btn-outline-dark btn-primary-hover rounded-0">
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                                {/* Cart Action Buttons End */}
                            </div>
                            {/* Cart Totals Start */}
                            <div className="col-lg-4 col-12 mb-30">
                                <div className="cart-totals">
                                    <div className="cart-totals-inner">
                                        <h4 className="title">Cart totals</h4>
                                        <table className="table bg-transparent">
                                            <tbody>
                                                <tr className="subtotal">
                                                    <th className="sub-title">Subtotal</th>
                                                    <td className="amount">
                                                        <span>£148.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="total">
                                                    <th className="sub-title">Total</th>
                                                    <td className="amount">
                                                        <strong>£148.00</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <a
                                        href="checkout.html"
                                        className="btn btn-dark btn-hover-primary rounded-0 w-100"
                                    >
                                        Proceed to checkout
                                    </a>
                                </div>
                            </div>
                            {/* Cart Totals End */}
                        </div>
                    </div>
                </div>

            </>
        </LayoutMaster>
    );
}

export default Cart;