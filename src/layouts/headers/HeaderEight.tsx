 
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";


export default function HeaderEight() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-area it-header-style-5 it-header-transparent it-header-ptb p-relative ${sticky ? "header-sticky" : ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-5 col-6">
                <div className="it-header-logo">
                  <Link to="/"><img src="assets/img/logo/logo-green.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                <div className="it-header-menu it-header-dropdown">
                  <nav className="it-menu-content">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-7 col-6">
                <div className="it-header-2-right-action d-flex justify-content-end align-items-center">
                  <Link className="it-header-cart d-none d-xxl-block" to="/cart">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.0571 26H5.57143C2.50714 26 0 23.4929 0 20.4286V20.2429L0.557143 5.38571C0.65 2.32143 3.15714 0 6.12857 0H19.5C22.4714 0 24.9786 2.32143 25.0714 5.38571L25.6286 20.2429C25.7214 21.7286 25.1643 23.1214 24.1429 24.2357C23.1214 25.35 21.7286 26 20.2429 26C20.2429 26 20.15 26 20.0571 26ZM6.12857 1.85714C4.08571 1.85714 2.50714 3.43571 2.41429 5.38571L1.85714 20.4286C1.85714 22.4714 3.52857 24.1429 5.57143 24.1429H20.2429C21.2643 24.1429 22.1929 23.6786 22.8429 22.9357C23.4929 22.1929 23.8643 21.2643 23.8643 20.2429L23.3071 5.38571C23.2143 3.34286 21.6357 1.85714 19.5929 1.85714H6.12857Z" fill="#6C757D" />
                      <path d="M12.8125 11.1428C9.19107 11.1428 6.3125 8.26423 6.3125 4.6428C6.3125 4.08566 6.68393 3.71423 7.24107 3.71423C7.79821 3.71423 8.16964 4.08566 8.16964 4.6428C8.16964 7.2428 10.2125 9.28566 12.8125 9.28566C15.4125 9.28566 17.4554 7.2428 17.4554 4.6428C17.4554 4.08566 17.8268 3.71423 18.3839 3.71423C18.9411 3.71423 19.3125 4.08566 19.3125 4.6428C19.3125 8.26423 16.4339 11.1428 12.8125 11.1428Z" fill="#6C757D" />
                    </svg>
                    <span>02</span>
                  </Link>
                  <Link to="/courses-with-filter" className="it-btn-yellow theme-bg d-none d-lg-flex">
                    <span>
                      <span className="text-1">Apply Now</span>
                      <span className="text-2">Apply Now</span>
                    </span>
                    <i>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                      </svg>
                    </i>
                  </Link>
                  <div className="it-header-bar d-xl-none">
                    <button className="it-menu-bar">
                      <span>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                            fill="currentcolor" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area-end --> */}

      </header>
      <OffCanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />

    </>
  )
}
