
import React from 'react';

function Header(props) {
    return (
       <>
 <>
  {/* Hello world */}
  <div className="header-section header-transparent header-sticky">
    <div className="container position-relative">
      <div className="row align-items-center">
        <div className="col-lg-3 col-xl-3 col-7">
          {/* Header Logo Start */}
          <div className="header-logo">
            <a href="index.html">
              <img
                className="white-logo"
                src="/assets/images/logo-white.svg"
                width={229}
                height={62}
                alt="Logo"
              />
            </a>
          </div>
          {/* Header Logo End */}
        </div>
        <div className="col-lg-7 col-xl-6 d-none d-lg-block">
          {/* Header Menu Start */}
          <div className="header-menu">
            <ul className="header-primary-menu d-flex justify-content-center">
              <li>
                <a href="#" className="menu-item-link active">
                  <span>Home</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-item-link" href="index.html">
                      <span>Cake Shop 01</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-2.html">
                      <span>Cake Shop 02</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-3.html">
                      <span>Cake Shop 03</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-4.html">
                      <span>Cake Shop 04</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-5.html">
                      <span>Cake Shop 05</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-6.html">
                      <span>Cake Shop 06</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-7.html">
                      <span>Bread Shop</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-8.html">
                      <span>Bread Shop 02</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="index-9.html">
                      <span>Cake Shop Fullscreen</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="position-static">
                <a className="menu-item-link" href="#">
                  <span>Shop</span>
                </a>
                <ul className="sub-menu sub-menu-mega">
                  <li className="mega-menu-item">
                    <ul>
                      <li className="mega-menu-item-title">Shop Layouts</li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="shop-right-sidebar.html"
                        >
                          <span>Shop Right Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="shop-left-sidebar.html"
                        >
                          <span>Shop Left Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a className="sub-item-link" href="shop.html">
                          <span>Shop 4 Columns</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="shop-five-columns.html"
                        >
                          <span>Shop 5 Columns</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <ul>
                      <li className="mega-menu-item-title">Product Types</li>
                      <li>
                        <a className="sub-item-link" href="single-product.html">
                          <span>Product Simple</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="single-product-grouped.html"
                        >
                          <span>Product Grouped</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="single-product-variable.html"
                        >
                          <span>Product Variable</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="single-product-affiliate.html"
                        >
                          <span>Product Affiliate</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="single-product-Custom.html"
                        >
                          <span>Custom Layout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <ul>
                      <li className="mega-menu-item-title">Others</li>
                      <li>
                        <a className="sub-item-link" href="shop-account.html">
                          <span>My Account</span>
                        </a>
                      </li>
                      <li>
                        <a className="sub-item-link" href="shop-cart.html">
                          <span>Cart</span>
                        </a>
                      </li>
                      <li>
                        <a className="sub-item-link" href="shop-wishlist.html">
                          <span>Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a className="sub-item-link" href="shop-checkout.html">
                          <span>Checkout</span>
                        </a>
                      </li>
                      <li>
                        <a className="sub-item-link" href="shop-compare.html">
                          <span>Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-item-link"
                          href="shop-order-tracking.html"
                        >
                          <span>Order Tracking</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item banner-menu-content-wrap">
                    <ul>
                      <li>
                        <a href="shop.html">
                          <img
                            src="assets/images/product/featured-product-01.png"
                            alt="Shop"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item-link" href="#">
                  <span>Pages</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-item-link" href="about.html">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="contact.html">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="contact-2.html">
                      <span>Contact 2</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="our-chef.html">
                      <span>Our Chef</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="faq.html">
                      <span>FAQs</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="pricing.html">
                      <span>Pricing Plans</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="404.html">
                      <span>404 Not Found</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="coming-soon.html">
                      <span>Coming Soon</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item-link" href="#">
                  <span>Blog</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-item-link" href="blog-right-sidebar.html">
                      <span>Blog Right Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="blog-left-sidebar.html">
                      <span>Blog Left Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="blog-no-sidebar.html">
                      <span>Blog No Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub-item-link"
                      href="blog-grid-right-sidebar.html"
                    >
                      <span>Blog Grid Right Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub-item-link"
                      href="blog-grid-left-sidebar.html"
                    >
                      <span>Blog Grid Left Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub-item-link"
                      href="blog-grid-no-sidebar.html"
                    >
                      <span>Blog Grid No Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub-item-link"
                      href="blog-details-right-sidebar.html"
                    >
                      <span>Blog Post Right Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="sub-item-link"
                      href="blog-details-left-sidebar.html"
                    >
                      <span>Blog Post Left Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a className="sub-item-link" href="blog-details.html">
                      <span>Blog Details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item-link" href="contact.html">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Header Menu End */}
        </div>
        <div className="col-lg-2 col-xl-3 col-5">
          {/* Header Meta Start */}
          <div className="header-meta">
            <ul className="header-meta__action d-flex justify-content-end">
              <li>
                <button className="action search-open">
                  <i className="lastudioicon-zoom-1" />
                </button>
              </li>
              <li>
                <button
                  className="action"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                >
                  <i className="lastudioicon-shopping-cart-2" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    3
                  </span>
                </button>
              </li>
              <li>
                <a className="action" href="shop-account.html">
                  <i className="lastudioicon-single-01-2" />
                </a>
              </li>
              <li className="d-lg-none">
                <button
                  className="action"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasMenu"
                >
                  <i className="lastudioicon-menu-8-1" />
                </button>
              </li>
            </ul>
          </div>
          {/* Header Meta End */}
        </div>
      </div>
    </div>
  </div>
</>
<div className="search-popup position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-6 bg-black bg-opacity-75">
  <div className="search-popup__form position-relative">
    <form action="#">
      <input
        className="search-popup__field border-0 border-bottom bg-transparent text-white w-100 tra py-3"
        type="text"
        placeholder="Search…"
      />
      <button className="search-popup__icon text-white border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y">
        <i className="lastudioicon-zoom-1" />
      </button>
    </form>
  </div>
  <button className="search-popup__close position-absolute top-0 end-0 m-8 p-3 lh-1 border-0 text-white fs-4">
    <i className="lastudioicon-e-remove" />
  </button>
</div>
<div
  className="offcanvas offcanvas-end offcanvas-menu bg-secondary"
  id="offcanvasMenu"
>
  <div className="offcanvas-header justify-content-end">
    <button
      type="button"
      className="btn-close text-white"
      data-bs-dismiss="offcanvas"
    >
      <i className="lastudioicon-e-remove" />
    </button>
  </div>
  <div className="offcanvas-body">
    <ul className="mobile-primary-menu">
      <li>
        <a href="#" className="menu-item-link active">
          <span>Home</span>
        </a>
        <ul className="sub-menu">
          <li>
            <a className="sub-item-link" href="index.html">
              <span>Cake Shop 01</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-2.html">
              <span>Cake Shop 02</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-3.html">
              <span>Cake Shop 03</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-4.html">
              <span>Cake Shop 04</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-5.html">
              <span>Cake Shop 05</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-6.html">
              <span>Cake Shop 06</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-7.html">
              <span>Bread Shop</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-8.html">
              <span>Bread Shop 02</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="index-9.html">
              <span>Cake Shop Fullscreen</span>
            </a>
          </li>
        </ul>
      </li>
      <li className="position-static">
        <a className="menu-item-link" href="#">
          <span>Shop</span>
        </a>
        <ul className="sub-menu sub-menu-mega">
          <li className="mega-menu-item">
            <ul>
              <li className="mega-menu-item-title">Shop Layouts</li>
              <li>
                <a className="sub-item-link" href="shop-right-sidebar.html">
                  <span>Shop Right Sidebar</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-left-sidebar.html">
                  <span>Shop Left Sidebar</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop.html">
                  <span>Shop 4 Columns</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-five-columns.html">
                  <span>Shop 5 Columns</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <ul>
              <li className="mega-menu-item-title">Product Types</li>
              <li>
                <a className="sub-item-link" href="single-product.html">
                  <span>Product Simple</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="single-product-grouped.html">
                  <span>Product Grouped</span>
                </a>
              </li>
              <li>
                <a
                  className="sub-item-link"
                  href="single-product-variable.html"
                >
                  <span>Product Variable</span>
                </a>
              </li>
              <li>
                <a
                  className="sub-item-link"
                  href="single-product-affiliate.html"
                >
                  <span>Product Affiliate</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="single-product-Custom.html">
                  <span>Custom Layout</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <ul>
              <li className="mega-menu-item-title">Others</li>
              <li>
                <a className="sub-item-link" href="shop-account.html">
                  <span>My Account</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-cart.html">
                  <span>Cart</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-wishlist.html">
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-checkout.html">
                  <span>Checkout</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-compare.html">
                  <span>Compare</span>
                </a>
              </li>
              <li>
                <a className="sub-item-link" href="shop-order-tracking.html">
                  <span>Order Tracking</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item banner-menu-content-wrap">
            <ul>
              <li>
                <a href="shop.html">
                  <img
                    src="assets/images/product/featured-product-01.png"
                    alt="Shop"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a className="menu-item-link" href="#">
          <span>Pages</span>
        </a>
        <ul className="sub-menu">
          <li>
            <a className="sub-item-link" href="about.html">
              <span>About</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="contact.html">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="contact-2.html">
              <span>Contact 2</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="our-chef.html">
              <span>Our Chef</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="faq.html">
              <span>FAQs</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="pricing.html">
              <span>Pricing Plans</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="404.html">
              <span>404 Not Found</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="coming-soon.html">
              <span>Coming Soon</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="menu-item-link" href="#">
          <span>Blog</span>
        </a>
        <ul className="sub-menu">
          <li>
            <a className="sub-item-link" href="blog-right-sidebar.html">
              <span>Blog Right Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-left-sidebar.html">
              <span>Blog Left Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-no-sidebar.html">
              <span>Blog No Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-grid-right-sidebar.html">
              <span>Blog Grid Right Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-grid-left-sidebar.html">
              <span>Blog Grid Left Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-grid-no-sidebar.html">
              <span>Blog Grid No Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-details-right-sidebar.html">
              <span>Blog Post Right Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-details-left-sidebar.html">
              <span>Blog Post Left Sidebar</span>
            </a>
          </li>
          <li>
            <a className="sub-item-link" href="blog-details.html">
              <span>Blog Details</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="menu-item-link" href="contact.html">
          <span>Contact</span>
        </a>
      </li>
    </ul>
    <ul className="hotline-wrapper offcanvas-hotline">
      <li>
        <div className="hotline">
          <i className="lastudioicon lastudioicon-support248" />
          <div className="hotline-content">
            <span className="hotline-text">Hotline</span>
            <a className="hotline-link" href="tel:0123456789">
              (012) 345-6789
            </a>
          </div>
        </div>
      </li>
      <li>
        <div className="hotline">
          <i className="lastudioicon lastudioicon-pin-check" />
          <div className="hotline-content">
            <span className="hotline-text">Store Location</span>
            <a className="hotline-link" href="#/">
              6391 Elgin St. Celina, Delaware 10299
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div className="offcanvas offcanvas-end offcanvas-cart" id="offcanvasCart">
  <div className="offcanvas-header">
    <h4 className="offcanvas-title">My Cart</h4>
    <button
      type="button"
      className="btn-close text-secondary"
      data-bs-dismiss="offcanvas"
    >
      <i className="lastudioicon lastudioicon-e-remove" />
    </button>
  </div>
  <div className="offcanvas-body">
    {/* Offcanvas Cart Items Start  */}
    <ul className="offcanvas-cart-items">
      <li>
        {/* Mini Cart Item Start  */}
        <div className="mini-cart-item">
          <a href="#/" className="mini-cart-item__remove">
            <i className="lastudioicon lastudioicon-e-remove" />
          </a>
          <div className="mini-cart-item__thumbnail">
            <a href="single-product.html">
              <img
                width={70}
                height={88}
                src="assets/images/mini-cart/cart-1.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="mini-cart-item__content">
            <h6 className="mini-cart-item__title">
              <a href="single-product.html">Macaron Cake</a>
            </h6>
            <span className="mini-cart-item__quantity">1 × $4.99</span>
          </div>
        </div>
        {/* Mini Cart Item End  */}
      </li>
      <li>
        {/* Mini Cart Item Start  */}
        <div className="mini-cart-item">
          <a href="#/" className="mini-cart-item__remove">
            <i className="lastudioicon lastudioicon-e-remove" />
          </a>
          <div className="mini-cart-item__thumbnail">
            <a href="single-product.html">
              <img
                width={70}
                height={88}
                src="assets/images/mini-cart/cart-2.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="mini-cart-item__content">
            <h6 className="mini-cart-item__title">
              <a href="single-product.html">Cream Muffin</a>
            </h6>
            <span className="mini-cart-item__quantity">1 × $4.99</span>
          </div>
        </div>
        {/* Mini Cart Item End  */}
      </li>
      <li>
        {/* Mini Cart Item Start  */}
        <div className="mini-cart-item">
          <a href="#/" className="mini-cart-item__remove">
            <i className="lastudioicon lastudioicon-e-remove" />
          </a>
          <div className="mini-cart-item__thumbnail">
            <a href="single-product.html">
              <img
                width={70}
                height={88}
                src="assets/images/mini-cart/cart-3.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="mini-cart-item__content">
            <h6 className="mini-cart-item__title">
              <a href="single-product.html">Brownie</a>
            </h6>
            <span className="mini-cart-item__quantity">1 × $4.99</span>
          </div>
        </div>
        {/* Mini Cart Item End  */}
      </li>
      <li>
        {/* Mini Cart Item Start  */}
        <div className="mini-cart-item">
          <a href="#/" className="mini-cart-item__remove">
            <i className="lastudioicon lastudioicon-e-remove" />
          </a>
          <div className="mini-cart-item__thumbnail">
            <a href="single-product.html">
              <img
                width={70}
                height={88}
                src="assets/images/mini-cart/cart-4.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="mini-cart-item__content">
            <h6 className="mini-cart-item__title">
              <a href="single-product.html">Chocolate Muffin</a>
            </h6>
            <span className="mini-cart-item__quantity">1 × $4.99</span>
          </div>
        </div>
        {/* Mini Cart Item End  */}
      </li>
      <li>
        {/* Mini Cart Item Start  */}
        <div className="mini-cart-item">
          <a href="#/" className="mini-cart-item__remove">
            <i className="lastudioicon lastudioicon-e-remove" />
          </a>
          <div className="mini-cart-item__thumbnail">
            <a href="single-product.html">
              <img
                width={70}
                height={88}
                src="assets/images/mini-cart/cart-5.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="mini-cart-item__content">
            <h6 className="mini-cart-item__title">
              <a href="single-product.html">No-bake chocolate</a>
            </h6>
            <span className="mini-cart-item__quantity">1 × $4.99</span>
          </div>
        </div>
        {/* Mini Cart Item End  */}
      </li>
    </ul>
    {/* Offcanvas Cart Items End  */}
  </div>
  <div className="offcanvas-footer d-flex flex-column gap-4">
    {/* Mini Cart Total End  */}
    <div className="mini-cart-totla">
      <span className="label">Subtotal:</span>
      <span className="value">$24.95</span>
    </div>
    {/* Mini Cart Total End  */}
    {/* Mini Cart Button End  */}
    <div className="mini-cart-btn d-flex flex-column gap-2">
      <a className="d-block btn btn-secondary btn-hover-primary" href="#">
        View cart
      </a>
      <a className="d-block btn btn-secondary btn-hover-primary" href="#">
        Checkout
      </a>
    </div>
    {/* Mini Cart Button End  */}
  </div>
</div>

       </>
    );
}

export default Header;