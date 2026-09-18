import { Link } from "react-router-dom";

export default function FooterEight() {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <div className="it-footer-wrap it-footer-style-3 gray-bg fix">

          <div className="it-footer-area z-index-1 pb-80" style={{ backgroundImage: `url(/assets/img/shape/footer-9-1.png)` }}>
            <img className="it-footer-shape-1 d-none d-xxl-block" src="assets/img/shape/footer-3-1.png" alt="" />
            <img className="it-footer-shape-2" data-parallax='{"y": -200, "smoothness": 30}' src="assets/img/shape/footer-2-2.png" alt="" />
            <div className="it-footer-border"><span></span></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-1-1">
                    <div className="it-footer-widget-logo mb-30">
                      <Link to="/"><img src="assets/img/logo/logo-black.png" alt="" /></Link>
                    </div>
                    <div className="it-footer-widget-text">
                      <p>Access expert-led courses designed to help you succeed in your career, all from the comfort of your home.</p>
                    </div>
                    <div className="it-footer-widget-btn">
                      <Link to="/contact-us" className="it-btn-yellow theme-bg">
                        <span>
                          <span className="text-1">Contact Us</span>
                          <span className="text-2">Contact Us</span>
                        </span>
                        <i>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Useful Links</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">kindergarten</a></li>
                        <li><a href="#">University</a></li>
                        <li><a href="#">GYM Coaching</a></li>
                        <li><a href="#">Cooking</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-1-3">
                    <h4 className="it-footer-widget-title">Our Company</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Become Teacher</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Instructor</a></li>
                        <li><a href="#">Events</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-1-4 d-flex justify-content-lg-end">
                    <div>
                      <h4 className="it-footer-widget-title">Get Contact</h4>
                      <div className="it-footer-widget-contact mb-25">
                        <ul>
                          <li><span>Phone:</span><a href="tel:+91123456789">(+91) 123-456-789</a></li>
                          <li><span>Email:</span><a href="mailto:educeet@gmail.com">educeet@gmail.com</a></li>
                          <li><span>Location:</span><a target="_blank" href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">North America, USA</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area it-copyright-ptb it-copyright-bg z-index-1 theme-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-6">
                  <div className="it-copyright-left style-2 text-center text-md-start">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Ordianit</a> All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="it-copyright-social text-center text-md-end">
                    <a href="#">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5654 0.183594H18.5978L11.9747 7.75136L19.7656 18.0509H13.6671L8.88712 11.8058L3.42357 18.0509H0.386253L7.46894 9.9544L0 0.183594H6.25335L10.5697 5.89174L15.5654 0.183594ZM14.5006 16.2382H16.1798L5.33837 1.90156H3.53475L14.5006 16.2382Z" fill="currentcolor" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.79502 7.63672L7.17188 5.17969H4.81445V3.58522C4.81445 2.91303 5.14374 2.25781 6.19965 2.25781H7.27148V0.166016C7.27148 0.166016 6.29875 0 5.36878 0C3.42719 0 2.1582 1.17672 2.1582 3.30703V5.17969H0V7.63672H2.1582V13.5764C2.59096 13.6443 3.0345 13.6797 3.48633 13.6797C3.93816 13.6797 4.3817 13.6443 4.81445 13.5764V7.63672H6.79502Z" fill="currentcolor" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6802 1.23535H6.03271C3.64478 1.23535 1.70898 3.17115 1.70898 5.55908V14.2065C1.70898 16.5945 3.64478 18.5303 6.03271 18.5303H14.6802C17.0681 18.5303 19.0039 16.5945 19.0039 14.2065V5.55908C19.0039 3.17115 17.0681 1.23535 14.6802 1.23535Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.8122 9.33833C13.9189 10.058 13.796 10.793 13.4609 11.4388C13.1258 12.0846 12.5956 12.6083 11.9458 12.9354C11.2959 13.2625 10.5594 13.3763 9.8411 13.2608C9.12279 13.1452 8.45921 12.806 7.94476 12.2916C7.4303 11.7771 7.09116 11.1135 6.97557 10.3952C6.85999 9.67692 6.97384 8.94046 7.30094 8.29058C7.62804 7.64071 8.15173 7.11052 8.79752 6.77543C9.44331 6.44034 10.1783 6.31742 10.898 6.42414C11.6321 6.53299 12.3117 6.87507 12.8365 7.39984C13.3613 7.9246 13.7033 8.60423 13.8122 9.33833Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.1094 5.12695H15.1221" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.256 4.73828C11.5122 4.73828 12.7169 5.2373 13.6051 6.12555C14.4934 7.01381 14.9924 8.21854 14.9924 9.47473V15.0006H11.8348V9.47473C11.8348 9.056 11.6684 8.65442 11.3724 8.35834C11.0763 8.06225 10.6747 7.89591 10.256 7.89591C9.83725 7.89591 9.43567 8.06225 9.13958 8.35834C8.8435 8.65442 8.67716 9.056 8.67716 9.47473V15.0006H5.51953V9.47473C5.51953 8.21854 6.01855 7.01381 6.9068 6.12555C7.79506 5.2373 8.99979 4.73828 10.256 4.73828Z" fill="white" />
                        <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="white" />
                        <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-end --> */}

        </div>
        {/* <!-- footer-area-end --> */}

      </footer>
    </>
  )
}
