import { Link } from "react-router-dom";


export default function HeroEleven() {
  return (
    <>
      {/* <!-- hero-area-start --> */}
      <section className="it-hero-8-area scene fix theme-bg z-index-1" style={{backgroundImage: `url(/assets/img/shape/hero-bg-10.jpg)`}}>
        <img className="it-hero-8-shape-1" src="assets/img/shape/hero-10-1.png" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="it-hero-8-content">
                <h1 className="it-hero-8-title wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">Transform Your Body with Expert <span>Fitness Training</span> Today</h1>
                <div className="it-hero-8-text wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <p>Join our expert-led fitness course to build strength, boost energy, and stay motivated. Perfect for all levels—transform your body and live healthier today!</p>
                </div>
                <div className="it-hero-8-btn wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".8s">
                  <Link to="/courses-v10" className="it-btn-yellow theme-5-bg">
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
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="it-hero-8-thumb text-end border-radius-30">
                <img className="layer" data-depth="0.3" src="assets/img/hero/hero-10.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero-area-end --> */}
    </>
  )
}
