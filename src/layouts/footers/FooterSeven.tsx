import { Link } from "react-router-dom";

export default function FooterSeven() {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <section className="it-footer-wrap it-footer-shop-style fix">
          <div className="it-footer-area gray-bg pt-90 pb-45">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-14-1">
                    <h4 className="it-footer-widget-title">Explore</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Bookmarks</a></li>
                        <li><a href="#">Sign in/Join</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-14-2">
                    <h4 className="it-footer-widget-title">Categories</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">English Courses</a></li>
                        <li><a href="#">China Courses</a></li>
                        <li><a href="#">German Courses</a></li>
                        <li><a href="#">Spanish Courses</a></li>
                        <li><a href="#">Another Languages</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-14-3">
                    <h4 className="it-footer-widget-title">follow us</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Pinterest</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-14-4 d-flex justify-content-lg-end">
                    <div>
                      <h4 className="it-footer-widget-title">Our Service</h4>
                      <div className="it-footer-widget-menu">
                        <ul>
                          <li><a href="#">Help Center</a></li>
                          <li><a href="#">Returns</a></li>
                          <li><a href="#">Product Recalls</a></li>
                          <li><a href="#">Accessibility</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Store Pickup</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area z-index-1 gray-bg">
            <div className="container">
              <div className="it-copyright-border it-copyright-ptb">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-7 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <div className="it-copyright-left style-2 text-center text-md-start">
                      <p className="mb-0">Copyright © {new Date().getFullYear()} Ordianit All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 d-none d-lg-block wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    <div className="it-copyright-logo">
                      <Link to="/"><img src="assets/img/logo/logo-black-sm.png" alt="" /></Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-5 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                    <div className="it-copyright-payment-methods text-center text-md-end">
                      <img src="assets/img/contact/footer-14.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-end --> */}

        </section>
        {/* <!-- footer-area-end --> */}
      </footer>
    </>
  )
}
