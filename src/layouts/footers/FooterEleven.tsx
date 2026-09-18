import { Link } from "react-router-dom";


export default function FooterEleven() {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <div className="it-footer-wrap it-footer-style-7 it-footer-style-5 fix">
          <div className="it-footer-area z-index-1 pt-120 pb-40" style={{ backgroundImage: `url(/assets/img/shape/footer-10-bg.jpg)` }}>
            <img className="it-footer-shape-4" src="assets/img/shape/footer-10-1.png" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-7-1">
                    <div className="it-footer-widget-logo mb-30">
                      <Link to="/"><img src="assets/img/logo/logo-fitness-2.png" alt="" /></Link>
                    </div>
                    <div className="it-footer-widget-contact-3">
                      <a href="#">201 S. Grand Ave., 1st Floor New <br /> York City, NY 28020</a>
                      <a className="border-line" href="tel:+17722902999">+1 (772) 290-2999</a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-7-2">
                    <h4 className="it-footer-widget-title">Our Companys</h4>
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
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-7-3">
                    <h4 className="it-footer-widget-title">Useful Links</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">Our Trainers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-7-4">
                    <div>
                      <h4 className="it-footer-widget-title">Recent Post</h4>
                      <div className="it-footer-widget-post-item mb-15">
                        <div className="it-footer-widget-post-thumb">
                          <img src="assets/img/contact/footer-1-1.jpg" alt="" />
                        </div>
                        <div className="it-footer-widget-post-content">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1731_2153)">
                                <path d="M11.0833 1.16667H10.5V0.583333C10.5 0.428624 10.4385 0.280251 10.3291 0.170854C10.2197 0.0614582 10.0714 0 9.91667 0C9.76196 0 9.61358 0.0614582 9.50419 0.170854C9.39479 0.280251 9.33333 0.428624 9.33333 0.583333V1.16667H4.66667V0.583333C4.66667 0.428624 4.60521 0.280251 4.49581 0.170854C4.38642 0.0614582 4.23804 0 4.08333 0C3.92862 0 3.78025 0.0614582 3.67085 0.170854C3.56146 0.280251 3.5 0.428624 3.5 0.583333V1.16667H2.91667C2.1434 1.16759 1.40208 1.47518 0.855295 2.02196C0.308514 2.56874 0.00092625 3.31007 0 4.08333L0 11.0833C0.00092625 11.8566 0.308514 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14H11.0833C11.8566 13.9991 12.5979 13.6915 13.1447 13.1447C13.6915 12.5979 13.9991 11.8566 14 11.0833V4.08333C13.9991 3.31007 13.6915 2.56874 13.1447 2.02196C12.5979 1.47518 11.8566 1.16759 11.0833 1.16667ZM1.16667 4.08333C1.16667 3.6192 1.35104 3.17409 1.67923 2.8459C2.00742 2.51771 2.45254 2.33333 2.91667 2.33333H11.0833C11.5475 2.33333 11.9926 2.51771 12.3208 2.8459C12.649 3.17409 12.8333 3.6192 12.8333 4.08333V4.66667H1.16667V4.08333ZM11.0833 12.8333H2.91667C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833V5.83333H12.8333V11.0833C12.8333 11.5475 12.649 11.9926 12.3208 12.3208C11.9926 12.649 11.5475 12.8333 11.0833 12.8333Z" fill="#FF8703" />
                                <path d="M7 9.625C7.48325 9.625 7.875 9.23325 7.875 8.75C7.875 8.26675 7.48325 7.875 7 7.875C6.51675 7.875 6.125 8.26675 6.125 8.75C6.125 9.23325 6.51675 9.625 7 9.625Z" fill="#FF8703" />
                                <path d="M4.08398 9.625C4.56723 9.625 4.95898 9.23325 4.95898 8.75C4.95898 8.26675 4.56723 7.875 4.08398 7.875C3.60074 7.875 3.20898 8.26675 3.20898 8.75C3.20898 9.23325 3.60074 9.625 4.08398 9.625Z" fill="#FF8703" />
                                <path d="M9.91602 9.625C10.3993 9.625 10.791 9.23325 10.791 8.75C10.791 8.26675 10.3993 7.875 9.91602 7.875C9.43277 7.875 9.04102 8.26675 9.04102 8.75C9.04102 9.23325 9.43277 9.625 9.91602 9.625Z" fill="#FF8703" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1731_2153">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            14 June {new Date().getFullYear()}
                          </span>
                          <h6 className="title"><Link to="/blog-details-right-sidebar">How to Avoid the Biggest College</Link></h6>
                        </div>
                      </div>
                      <div className="it-footer-widget-post-item">
                        <div className="it-footer-widget-post-thumb">
                          <img src="assets/img/contact/footer-1-2.jpg" alt="" />
                        </div>
                        <div className="it-footer-widget-post-content">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1731_2153)">
                                <path d="M11.0833 1.16667H10.5V0.583333C10.5 0.428624 10.4385 0.280251 10.3291 0.170854C10.2197 0.0614582 10.0714 0 9.91667 0C9.76196 0 9.61358 0.0614582 9.50419 0.170854C9.39479 0.280251 9.33333 0.428624 9.33333 0.583333V1.16667H4.66667V0.583333C4.66667 0.428624 4.60521 0.280251 4.49581 0.170854C4.38642 0.0614582 4.23804 0 4.08333 0C3.92862 0 3.78025 0.0614582 3.67085 0.170854C3.56146 0.280251 3.5 0.428624 3.5 0.583333V1.16667H2.91667C2.1434 1.16759 1.40208 1.47518 0.855295 2.02196C0.308514 2.56874 0.00092625 3.31007 0 4.08333L0 11.0833C0.00092625 11.8566 0.308514 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14H11.0833C11.8566 13.9991 12.5979 13.6915 13.1447 13.1447C13.6915 12.5979 13.9991 11.8566 14 11.0833V4.08333C13.9991 3.31007 13.6915 2.56874 13.1447 2.02196C12.5979 1.47518 11.8566 1.16759 11.0833 1.16667ZM1.16667 4.08333C1.16667 3.6192 1.35104 3.17409 1.67923 2.8459C2.00742 2.51771 2.45254 2.33333 2.91667 2.33333H11.0833C11.5475 2.33333 11.9926 2.51771 12.3208 2.8459C12.649 3.17409 12.8333 3.6192 12.8333 4.08333V4.66667H1.16667V4.08333ZM11.0833 12.8333H2.91667C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833V5.83333H12.8333V11.0833C12.8333 11.5475 12.649 11.9926 12.3208 12.3208C11.9926 12.649 11.5475 12.8333 11.0833 12.8333Z" fill="#FF8703" />
                                <path d="M7 9.625C7.48325 9.625 7.875 9.23325 7.875 8.75C7.875 8.26675 7.48325 7.875 7 7.875C6.51675 7.875 6.125 8.26675 6.125 8.75C6.125 9.23325 6.51675 9.625 7 9.625Z" fill="#FF8703" />
                                <path d="M4.08398 9.625C4.56723 9.625 4.95898 9.23325 4.95898 8.75C4.95898 8.26675 4.56723 7.875 4.08398 7.875C3.60074 7.875 3.20898 8.26675 3.20898 8.75C3.20898 9.23325 3.60074 9.625 4.08398 9.625Z" fill="#FF8703" />
                                <path d="M9.91602 9.625C10.3993 9.625 10.791 9.23325 10.791 8.75C10.791 8.26675 10.3993 7.875 9.91602 7.875C9.43277 7.875 9.04102 8.26675 9.04102 8.75C9.04102 9.23325 9.43277 9.625 9.91602 9.625Z" fill="#FF8703" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1731_21532">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            14 June {new Date().getFullYear()}
                          </span>
                          <h6 className="title"><Link to="/blog-details-right-sidebar">How to Avoid the Biggest College</Link></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area it-copyright-ptb black-bg z-index-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-copyright-left style-2 text-center text-md-start">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Ordianit</a> All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-copyright-menu text-center text-md-end">
                    <a className="border-line" href="#">Privacy Policy</a>
                    <span>|</span>
                    <a className="border-line" href="#">Terms of Service</a>
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
