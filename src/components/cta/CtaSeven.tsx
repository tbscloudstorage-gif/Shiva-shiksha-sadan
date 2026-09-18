import { Link } from "react-router-dom";


export default function CtaSeven() {
  return (
    <>
      {/* <!-- cta-area-start --> */}
      <div className="it-cta-7-area mb-130">
        <div className="container">
          <div className="it-cta-7-wrap z-index-1 black-bg wow itfadeUp" data-wow-duration=".9s"
            data-wow-delay=".9s">
            <img className="it-cta-7-shape-1" src="assets/img/shape/cta-14-1.png" alt="" />
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-7">
                <div className="it-cta-7-left">
                  <h5 className="it-cta-7-title">Up to 15% discount on your first purchase! <span>FREEFIRST</span></h5>
                  <Link to="/shop" className="it-btn-yellow border-radius-0">
                    <span>
                      <span className="text-1">Shop Now</span>
                      <span className="text-2">Shop Now</span>
                    </span>
                    <i>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5">
                <div className="it-cta-7-right text-md-end">
                  <img src="assets/img/cta/cta-14-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cta-area-end --> */}

    </>
  )
}
