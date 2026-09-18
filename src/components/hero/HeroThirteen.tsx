import { Link } from "react-router-dom";
import VideoPopup from "@/components/modals/VideoPopup";

export default function HeroThirteen() {
  return (
    <>

      {/* <!-- hero-area-start --> */}
      <div className="it-hero-11-area z-index-1 overflow-hidden" style={{ backgroundColor: `#272422` }}>
        <img className="it-hero-11-shape-2" src="assets/img/shape/hero-13-2.png" alt="" />
        <div className="it-hero-11-shape-1">
          <img src="assets/img/shape/hero-13-1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10">
              <div className="it-hero-11-title-box z-index-1">
                <h1 className="it-hero-11-title wow img-anim-bottom" data-wow-duration="1.5s" data-wow-delay="0.1">
                  <span className="z-index-1">
                    Passionate work
                    <span className="it-title-shape">
                      <svg width="690" height="31" viewBox="0 0 690 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="690" height="31" fill="#CD935A" />
                      </svg>
                    </span>
                  </span>
                  with Fashion Brands.</h1>
              </div>
            </div>
          </div>
          <div className="it-hero-11-content-wrap">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 wow itfadeLeft" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="it-hero-11-content">
                  <p>At Educeet, we believe language is the key to connecting people, cultures, and opportunities. Our mission is to make language learning </p>
                  <Link to="/contact-me" className="it-btn-yellow style-2">
                    <span>
                      <span className="text-1">See portfolio</span>
                      <span className="text-2">See portfolio</span>
                    </span>
                    <i>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7463 2.07463C12.7875 1.66247 12.4868 1.29494 12.0746 1.25372L5.35813 0.582071C4.94597 0.540856 4.57844 0.841563 4.53722 1.25372C4.49601 1.66588 4.79671 2.03341 5.20887 2.07463L11.1791 2.67165L10.5821 8.64187C10.5409 9.05403 10.8416 9.42156 11.2537 9.46278C11.6659 9.50399 12.0334 9.20329 12.0746 8.79113L12.7463 2.07463ZM1 11L1.47493 11.5805L12.4749 2.58047L12 2L11.5251 1.41953L0.525072 10.4195L1 11Z" fill="#CD935A" />
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-hero-11-thumb" data-parallax='{"y": 70, "smoothness": 30}'>
                  <img src="assets/img/hero/hero-13-1.png" alt="" />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 wow itfadeRight" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-hero-11-play-btn">
                  <VideoPopup>
                    <a className="popup-video" style={{ cursor: "pointer" }}>
                      <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2344 12.6723L0.360746 24.7237V0.620911L21.2344 12.6723Z" fill="#CD935A" />
                      </svg>
                    </a>
                  </VideoPopup>
                  <span>01 <br />
                    I fell in love <br />
                    with modelling.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero-area-end --> */}
    </>
  )
}
