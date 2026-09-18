 
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";
import { useState } from "react";


export default function HeaderFourteen() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-2-area p-relative it-header-transparent it-header-2-style-3 it-header-2-style-2 it-header-ptb ${sticky ? 'header-sticky' : ''}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-5 col-6">
                <div className="it-header-logo">
                  <Link to="/"><img src="assets/img/logo/logo-yoga.png" alt="" /></Link>
                </div>
                <div className="it-header-logo-3">
                  <Link to="/"><img src="assets/img/logo/logo-yoga-black.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                <div className="it-header-menu it-header-dropdown">
                  <nav className="it-menu-content">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-7 col-6">
                <div className="it-header-2-right-action d-flex justify-content-end align-items-center">
                  <div className="it-header-2-contact d-none d-xl-flex align-items-center">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3766 6.875C14.2109 6.875 14.0519 6.80915 13.9347 6.69194C13.8175 6.57473 13.7516 6.41576 13.7516 6.25C13.7503 4.92433 13.2231 3.65332 12.2857 2.71593C11.3483 1.77853 10.0773 1.25133 8.75165 1.25C8.58589 1.25 8.42692 1.18415 8.30971 1.06694C8.1925 0.949733 8.12665 0.790762 8.12665 0.625001C8.12665 0.459241 8.1925 0.30027 8.30971 0.183059C8.42692 0.0658492 8.58589 1.15822e-06 8.75165 1.15822e-06C10.4087 0.00182091 11.9973 0.660886 13.1691 1.83259C14.3408 3.0043 14.9998 4.59296 15.0016 6.25C15.0016 6.41576 14.9358 6.57473 14.8186 6.69194C14.7014 6.80915 14.5424 6.875 14.3766 6.875ZM12.5016 6.25C12.5016 5.25544 12.1066 4.30161 11.4033 3.59835C10.7 2.89509 9.74621 2.5 8.75165 2.5C8.58589 2.5 8.42692 2.56585 8.30971 2.68306C8.1925 2.80027 8.12665 2.95924 8.12665 3.125C8.12665 3.29076 8.1925 3.44973 8.30971 3.56694C8.42692 3.68415 8.58589 3.75 8.75165 3.75C9.41469 3.75 10.0506 4.01339 10.5194 4.48223C10.9883 4.95108 11.2516 5.58696 11.2516 6.25C11.2516 6.41576 11.3175 6.57473 11.4347 6.69194C11.5519 6.80915 11.7109 6.875 11.8766 6.875C12.0424 6.875 12.2014 6.80915 12.3186 6.69194C12.4358 6.57473 12.5016 6.41576 12.5016 6.25ZM13.866 13.8525L14.4348 13.1969C14.7968 12.8337 15.0001 12.3418 15.0001 11.8291C15.0001 11.3163 14.7968 10.8244 14.4348 10.4613C14.4154 10.4419 12.9116 9.285 12.9116 9.285C12.5507 8.94146 12.0714 8.75016 11.5731 8.75086C11.0748 8.75156 10.596 8.9442 10.236 9.28875L9.04477 10.2925C8.07238 9.89006 7.18908 9.29949 6.44558 8.5547C5.70208 7.80991 5.11303 6.92559 4.71227 5.9525L5.71227 4.765C6.0571 4.40511 6.24996 3.92617 6.25077 3.42775C6.25159 2.92933 6.06029 2.44977 5.71665 2.08875C5.71665 2.08875 4.55852 0.586876 4.53915 0.567501C4.18256 0.208594 3.69907 0.00438992 3.19317 -0.000989602C2.68726 -0.00636912 2.19954 0.187508 1.8354 0.538751L1.11665 1.16375C-3.1296 6.09 6.01415 15.1631 11.1029 15C11.6168 15.003 12.126 14.903 12.6006 14.7059C13.0752 14.5088 13.5054 14.2186 13.866 13.8525Z" fill="currentcolor" />
                      </svg>
                    </span>
                    <a className="border-line" href="tel:761853398">761-853-398</a>
                  </div>
                  <Link to="/courses-with-filter" className="it-btn-yellow white-bg d-none d-lg-flex">
                    <span>
                      <span className="text-1">Join Class</span>
                      <span className="text-2">Join Class</span>
                    </span>
                    <i>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                      </svg>
                    </i>
                  </Link>
                  <div className="it-header-bar d-xl-none">
                    <button className="it-menu-bar" onClick={() => setOffCanvasOpen(!offCanvasOpen)}>
                      <span>
                        <i className="fa-light fa-bars-staggered"></i>
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
