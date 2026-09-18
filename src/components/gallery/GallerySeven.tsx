import { Link } from "react-router-dom";


export default function GallerySeven() {
  return (
    <>
      {/* <!-- bannner-area-start --> */}
      <div className="it-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow itfadeLeft" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-banner-item mb-35" style={{ backgroundImage: "url(/assets/img/shop/banner-1-1.jpg)" }}>
                <span>What Hot In August</span>
                <h4 className="it-banner-title">The Fiction You need <br /> To Read In 2025</h4>
                <Link to="/shop" className="it-btn-yellow black-bg border-radius-0">
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
            <div className="col-lg-6 col-md-6 wow itfadeRight" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-banner-item mb-35" style={{ backgroundImage: "url(/assets/img/shop/banner-1-2.jpg)" }}>
                <span>Novel</span>
                <h4 className="it-banner-title">Summer <br />Sale bozana</h4>
                <Link to="/shop" className="it-btn-yellow black-bg border-radius-0">
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
          </div>
        </div>
      </div>
      {/* <!-- bannner-area-end --> */}
    </>
  )
}
