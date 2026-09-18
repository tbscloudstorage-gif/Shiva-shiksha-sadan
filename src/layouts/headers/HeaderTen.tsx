 
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";

import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";

export default function HeaderTen() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  return (
    <>
      <header className="it-header-height">

        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-area it-header-style-5 it-header-transparent it-header-ptb p-relative ${sticky ? 'header-sticky' : ''}`}>
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
                  <div className="it-header-search-3 d-none d-md-block">
                    <button className="search-box-outer">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5413 16.3868L13.9862 12.8413C14.9406 11.576 15.4489 9.85917 15.4885 7.71112C15.4037 2.77059 12.6543 0.0324235 7.73983 0C2.76636 0.0316129 0 2.92784 0 7.71031C0 12.7319 2.76878 15.4206 7.74952 15.4498C9.8742 15.4368 11.5794 14.9424 12.8434 13.9867L16.4018 17.5362C16.8204 17.9351 17.3158 17.7721 17.5445 17.533C17.854 17.2104 17.8581 16.7021 17.5413 16.3868ZM1.61634 7.7249C1.69473 3.64359 3.7006 1.6463 7.73902 1.62117C11.7386 1.64711 13.8027 3.70519 13.8722 7.71031C13.7962 11.8605 11.8477 13.8043 7.74952 13.8286C3.64645 13.8043 1.69715 11.8654 1.61634 7.7249Z" fill="#1F2432" />
                      </svg>
                    </button>
                  </div>
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
                    <button className="it-menu-bar" onClick={() => setOffCanvasOpen(true)}>
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
