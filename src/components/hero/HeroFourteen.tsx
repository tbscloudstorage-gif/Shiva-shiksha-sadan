import { Link } from "react-router-dom";


export default function HeroFourteen() {
  return (
    <>
      {/* <!-- hero-area-start --> */}
      <section className="it-hero-5-area z-index-1" style={{ backgroundImage: `url(/assets/img/shape/hero-bg-7.png)` }}>
        <img className="it-hero-5-shape-1" src="assets/img/shape/hero-7-1.png" alt="" />
        <div className="it-hero-5-shape-2"><img src="assets/img/shape/hero-7-2.png" alt="" /></div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
              <div className="it-hero-5-thumb mb-35 border-radius-30">
                <img className="wow img-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1" src="assets/img/hero/hero-7-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="it-hero-5-content">
                <h1 className="it-hero-5-title wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">TRANSFORM YOUR LIFE THROUGH YOGA AND MEDITATION</h1>
                <div className="it-hero-5-text wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <p>Discover our expert-led yoga courses designed to enhance flexibility, boost strength, calm the mind, and promote overall well-being—for beginners and advanced practitioners alike.</p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="it-hero-5-btn wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                      <Link to="/courses-v7" className="it-btn-yellow white-bg">
                        <span>
                          <span className="text-1">Find Courses</span>
                          <span className="text-2">Find Courses</span>
                        </span>
                        <i>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="it-hero-5-thumb-sm text-end border-radius-30">
                      <img className="wow img-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1" src="assets/img/hero/hero-7-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero-area-end --> */}
    </>
  )
}
