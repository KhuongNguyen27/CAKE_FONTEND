import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';

function Checkout(props) {
    return (
        <LayoutMaster>
            <>
            <Breadcrumb breadcrumb_title="Checkout" breadcrumb_list="Home" name="Checkout" />
                <div className="shop-product-section section section-padding-03">
                    <div className="container custom-container">
                        <form action="#" className="checkout-form">
                            <div className="row g-8">
                                <div className="col-lg-7">
                                    {/* Billing Address */}
                                    <div id="billing-form">
                                        <h4 className="mb-4">Billing Address</h4>
                                        <div className="row row-cols-sm-2 row-cols-1 g-4">
                                            <div className="col">
                                                <label>First Name*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Last Name*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Email Address*</label>
                                                <input className="form-field" type="email" />
                                            </div>
                                            <div className="col">
                                                <label>Phone no*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label>Company Name</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label>Address*</label>
                                                <input
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Address line 1"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Address line 2"
                                                />
                                            </div>
                                            <div className="col">
                                                <label>Country*</label>
                                                <div className="select-wrapper">
                                                    <select className="form-field">
                                                        <option>Bangladesh</option>
                                                        <option>China</option>
                                                        <option>country</option>
                                                        <option>India</option>
                                                        <option>Japan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label>Town/City*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>State*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Zip Code*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col-sm-12 d-flex flex-wrap gap-6">
                                                <div className="form-check m-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="create_account"
                                                    />
                                                    <label className="form-check-label" htmlFor="create_account">
                                                        Create an Acount?
                                                    </label>
                                                </div>
                                                <div className="form-check m-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="shiping_address"
                                                        data-toggle-shipping="#shipping-form"
                                                    />
                                                    <label className="form-check-label" htmlFor="shiping_address">
                                                        Ship to Different Address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shipping Address */}
                                    <div id="shipping-form" className="mt-md-8 mt-6">
                                        <h4 className="mb-4">Shipping Address</h4>
                                        <div className="row row-cols-sm-2 row-cols-1 g-4">
                                            <div className="col">
                                                <label>First Name*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Last Name*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Email Address*</label>
                                                <input className="form-field" type="email" />
                                            </div>
                                            <div className="col">
                                                <label>Phone no*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label>Company Name</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col-sm-12">
                                                <label>Address*</label>
                                                <input
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Address line 1"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Address line 2"
                                                />
                                            </div>
                                            <div className="col">
                                                <label>Country*</label>
                                                <div className="select-wrapper">
                                                    <select className="form-field">
                                                        <option>Bangladesh</option>
                                                        <option>China</option>
                                                        <option>country</option>
                                                        <option>India</option>
                                                        <option>Japan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label>Town/City*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>State*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                            <div className="col">
                                                <label>Zip Code*</label>
                                                <input className="form-field" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    {/* Checkout Summary Start */}
                                    <div className="checkout-box">
                                        <h4 className="mb-4">Cart Total</h4>
                                        <table className="checkout-summary-table table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>House Coffee Original x 1</td>
                                                    <td>$110.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Medium Roast Ground Coffee x 1</td>
                                                    <td>$19.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="border-top">Sub Total</td>
                                                    <td className="border-top">$129.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="border-top">Shipping Fee</td>
                                                    <td className="border-top">$10.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th className="border-top">Grand Total</th>
                                                    <th className="border-top">$139.00</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* Checkout Summary End */}
                                    {/* Payment Method Start */}
                                    <div className="checkout-box">
                                        <h4 className="mb-4">Payment Method</h4>
                                        <div className="checkout-payment-method">
                                            <div className="single-method form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="payment_check"
                                                    name="payment-method"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label" htmlFor="payment_check">
                                                    Check Payment
                                                </label>
                                                <p>
                                                    Please send a Check to Store name with Store Street, Store
                                                    Town, Store State, Store Postcode, Store Country.
                                                </p>
                                            </div>
                                            <div className="single-method form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="payment_bank"
                                                    name="payment-method"
                                                />
                                                <label className="form-check-label" htmlFor="payment_bank">
                                                    Direct Bank Transfer
                                                </label>
                                                <p>
                                                    Please send a Check to Store name with Store Street, Store
                                                    Town, Store State, Store Postcode, Store Country.
                                                </p>
                                            </div>
                                            <div className="single-method form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="payment_cash"
                                                    name="payment-method"
                                                />
                                                <label className="form-check-label" htmlFor="payment_cash">
                                                    Cash on Delivery
                                                </label>
                                                <p>
                                                    Please send a Check to Store name with Store Street, Store
                                                    Town, Store State, Store Postcode, Store Country.
                                                </p>
                                            </div>
                                            <div className="single-method form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="payment_card"
                                                    name="payment-method"
                                                />
                                                <label className="form-check-label" htmlFor="payment_card">
                                                    Card Payment
                                                </label>
                                                <p>
                                                    Please send a Check to Store name with Store Street, Store
                                                    Town, Store State, Store Postcode, Store Country.
                                                </p>
                                            </div>
                                            <div className="single-method form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="accept_terms"
                                                />
                                                <label className="form-check-label" htmlFor="accept_terms">
                                                    I’ve read and accept the terms &amp; conditions
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark btn-primary-hover rounded-0 mt-6">
                                            Place order
                                        </button>
                                    </div>
                                    {/* Payment Method End */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </>
        </LayoutMaster>
    );
}

export default Checkout;