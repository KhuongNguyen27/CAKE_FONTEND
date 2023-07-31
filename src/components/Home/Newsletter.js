import React from 'react';

function Newsletter(props) {
    return (
        <div>
            <>
                <div
                    className="newsletter-section"
                    style={{ backgroundImage: "url(assets/images/newsletter-bg.jpg)" }}
                >
                    <div className="container">
                        {/* Newsletter Section Strat */}
                        <div className="newsletter text-center">
                            <h2 className="newsletter__title text-white">
                                Stay in touch &amp; get 10% off
                            </h2>
                            <div className="newsletter__form">
                                <form action="#">
                                    <input
                                        className="newsletter__field"
                                        type="text"
                                        placeholder="Your email address"
                                    />
                                    <button className="newsletter__btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        {/* Newsletter Section End */}
                    </div>
                </div>
                {/* Newsletter Section End */}
                {/* Scroll Top Start */}
                <a href="#" className="scroll-top" id="scroll-top">
                    <i className="lastudioicon-up-arrow" />
                </a>
            </>
        </div>
    );
}

export default Newsletter;