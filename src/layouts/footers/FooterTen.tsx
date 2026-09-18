import { Link } from "react-router-dom";


export default function FooterTen() {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <div className="it-footer-wrap">
          <div className="it-footer-area z-index-1 theme-bg pt-75 pb-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="it-footer-widget">
                    <div className="it-footer-widget-logo">
                      <Link to="/"><img src="assets/img/logo/logo-white.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="it-footer-widget-menu-2">
                    <a href="#">Home</a>
                    <a href="#">About Me </a>
                    <a href="#">Our Services</a>
                    <a href="#">Porfolio</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area  it-copyright-style-3 black-bg it-copyright-ptb">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5 col-md-6">
                  <div className="it-copyright-left text-center text-lg-start">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Ordianit</a> All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-6">
                  <div className="it-copyright-menu text-center text-lg-end">
                    <a className="border-line" href="#">Privacy Policy</a>
                    <span>-</span>
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
