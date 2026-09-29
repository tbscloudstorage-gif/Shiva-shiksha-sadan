import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";

import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";
import { useState } from "react";


export default function HeaderSix() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  return (
    <>
      <header className="it-header-height it-header-transparent">
        {/* <!-- header-top-area-start --> */}
        <div className="it-header-top-2-area">
          <div className="container container-1750">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7 col-md-7 col-sm-8 d-none d-sm-block">
                <div className="it-header-top-2-text">
                  <span>Free delivery for all orders over $50. Order your food now!</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-5 col-sm-4">
                <div className="it-header-top-right-action d-flex align-items-center justify-content-center justify-content-sm-end">
                  <div className="it-header-top-2-text d-none d-lg-block">
                    <span>Subscribe & Get 10% off</span>
                  </div>
                  <div className="it-header-top-social-box align-items-center  d-flex">
                    <a href="#">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6 0.768661H15.0547L9.69333 6.89466L16 15.232H11.0633L7.194 10.1767L2.77133 15.232H0.312667L6.046 8.678L0 0.768661H5.062L8.556 5.38933L12.6 0.768661ZM11.738 13.7647H13.0973L4.32133 2.15933H2.86133L11.738 13.7647Z" fill="currentcolor" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.18652 5.50098L6.81055 7.95703H4.83008V13.8965C4.39733 13.9644 3.95378 14 3.50195 14C3.16295 14 2.82862 13.98 2.5 13.9414C2.39063 13.9286 2.2819 13.9134 2.17383 13.8965H2.1748V7.95703H0.0166016V5.50098H2.17383L2.1748 5.5V3.62695C2.17483 3.22768 2.21942 2.86203 2.30469 2.53125C2.31887 2.47623 2.33417 2.42222 2.35059 2.36914C2.44932 2.04987 2.58781 1.76584 2.7627 1.51855C2.79186 1.47732 2.82139 1.43665 2.85254 1.39746C2.91477 1.31918 2.98181 1.2458 3.05176 1.17578C3.15673 1.07071 3.27006 0.974838 3.3916 0.888672C3.43209 0.859967 3.47337 0.832244 3.51562 0.805664C3.85398 0.592833 4.24832 0.448632 4.68945 0.375977C4.90988 0.339671 5.14217 0.321289 5.38477 0.321289C6.22482 0.321328 7.0996 0.456257 7.26074 0.482422C7.26661 0.483375 7.27145 0.4847 7.27539 0.485352C7.27905 0.485956 7.28231 0.486014 7.28418 0.486328H7.28711V2.57812H6.21484C6.14891 2.57814 6.08575 2.57999 6.02539 2.58496C5.84405 2.59988 5.68732 2.63641 5.55273 2.69043C5.284 2.7983 5.10278 2.97602 4.98926 3.18945C4.91346 3.33196 4.86786 3.49069 4.8457 3.65527C4.83463 3.73748 4.83009 3.82129 4.83008 3.90527V5.50098H7.18652Z" fill="currentcolor" stroke="currentcolor" strokeWidth="0.000976562" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.7963 7.559C10.8827 8.14157 10.7832 8.73655 10.5119 9.25931C10.2407 9.78207 9.81148 10.206 9.28542 10.4708C8.75935 10.7356 8.16319 10.8277 7.58173 10.7341C7.00027 10.6406 6.46311 10.3661 6.04667 9.94961C5.63022 9.53316 5.35569 8.99601 5.26213 8.41455C5.16856 7.83308 5.26073 7.23692 5.52551 6.71086C5.79029 6.18479 6.21421 5.75562 6.73697 5.48437C7.25973 5.21312 7.85471 5.11361 8.43728 5.2C9.03152 5.28812 9.58167 5.56502 10.0065 5.98981C10.4313 6.4146 10.7082 6.96475 10.7963 7.559Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.8477 4.15039H11.8577" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2599 5.73828C12.5161 5.73828 13.7208 6.2373 14.6091 7.12555C15.4973 8.01381 15.9963 9.21854 15.9963 10.4747V16.0006H12.8387V10.4747C12.8387 10.056 12.6724 9.65442 12.3763 9.35834C12.0802 9.06225 11.6786 8.89591 11.2599 8.89591C10.8412 8.89591 10.4396 9.06225 10.1435 9.35834C9.84741 9.65442 9.68107 10.056 9.68107 10.4747V16.0006H6.52344V10.4747C6.52344 9.21854 7.02245 8.01381 7.91071 7.12555C8.79897 6.2373 10.0037 5.73828 11.2599 5.73828Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.15763 6.52754H1V16.0004H4.15763V6.52754Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.57881 4.15763C3.45077 4.15763 4.15763 3.45077 4.15763 2.57881C4.15763 1.70686 3.45077 1 2.57881 1C1.70686 1 1 1.70686 1 2.57881C1 3.45077 1.70686 4.15763 2.57881 4.15763Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-top-area-end --> */}

        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-2-area it-header-ptb white-bg p-relative ${sticky ? "header-sticky" : ""}`}>
          <div className="container container-1750">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-5 col-6">
                <div className="it-header-logo">
                  <Link to="/"><img src="assets/img/logo/logo-yellow.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-7 d-none d-xl-block">
                <div className="d-flex align-items-center">
                  <div className="it-header-menu it-header-dropdown">
                    <nav className="it-menu-content">
                      <Navmenu />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-3 col-lg-8 col-md-7 col-6">
                <div className="it-header-2-right-action d-flex justify-content-end align-items-center">
                  <div className="it-header-2-contact d-none d-xxl-flex align-items-center">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3766 6.875C14.2109 6.875 14.0519 6.80915 13.9347 6.69194C13.8175 6.57473 13.7516 6.41576 13.7516 6.25C13.7503 4.92433 13.2231 3.65332 12.2857 2.71593C11.3483 1.77853 10.0773 1.25133 8.75165 1.25C8.58589 1.25 8.42692 1.18415 8.30971 1.06694C8.1925 0.949733 8.12665 0.790762 8.12665 0.625001C8.12665 0.459241 8.1925 0.30027 8.30971 0.183059C8.42692 0.0658492 8.58589 1.15822e-06 8.75165 1.15822e-06C10.4087 0.00182091 11.9973 0.660886 13.1691 1.83259C14.3408 3.0043 14.9998 4.59296 15.0016 6.25C15.0016 6.41576 14.9358 6.57473 14.8186 6.69194C14.7014 6.80915 14.5424 6.875 14.3766 6.875ZM12.5016 6.25C12.5016 5.25544 12.1066 4.30161 11.4033 3.59835C10.7 2.89509 9.74621 2.5 8.75165 2.5C8.58589 2.5 8.42692 2.56585 8.30971 2.68306C8.1925 2.80027 8.12665 2.95924 8.12665 3.125C8.12665 3.29076 8.1925 3.44973 8.30971 3.56694C8.42692 3.68415 8.58589 3.75 8.75165 3.75C9.41469 3.75 10.0506 4.01339 10.5194 4.48223C10.9883 4.95108 11.2516 5.58696 11.2516 6.25C11.2516 6.41576 11.3175 6.57473 11.4347 6.69194C11.5519 6.80915 11.7109 6.875 11.8766 6.875C12.0424 6.875 12.2014 6.80915 12.3186 6.69194C12.4358 6.57473 12.5016 6.41576 12.5016 6.25ZM13.866 13.8525L14.4348 13.1969C14.7968 12.8337 15.0001 12.3418 15.0001 11.8291C15.0001 11.3163 14.7968 10.8244 14.4348 10.4613C14.4154 10.4419 12.9116 9.285 12.9116 9.285C12.5507 8.94146 12.0714 8.75016 11.5731 8.75086C11.0748 8.75156 10.596 8.9442 10.236 9.28875L9.04477 10.2925C8.07238 9.89006 7.18908 9.29949 6.44558 8.5547C5.70208 7.80991 5.11303 6.92559 4.71227 5.9525L5.71227 4.765C6.0571 4.40511 6.24996 3.92617 6.25077 3.42775C6.25159 2.92933 6.06029 2.44977 5.71665 2.08875C5.71665 2.08875 4.55852 0.586876 4.53915 0.567501C4.18256 0.208594 3.69907 0.00438992 3.19317 -0.000989602C2.68726 -0.00636912 2.19954 0.187508 1.8354 0.538751L1.11665 1.16375C-3.1296 6.09 6.01415 15.1631 11.1029 15C11.6168 15.003 12.126 14.903 12.6006 14.7059C13.0752 14.5088 13.5054 14.2186 13.866 13.8525Z" fill="currentcolor" />
                      </svg>
                    </span>
                    <a className="border-line" href="tel:761853398">761-853-398</a>
                  </div>
                  <Link to="/courses-with-filter" className="it-btn-yellow border-radius-100 d-none d-md-flex">
                    <span>
                      <span className="text-1">Book A Table</span>
                      <span className="text-2">Book A Table</span>
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
