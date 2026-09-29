import { Link } from "react-router-dom";

export default function HeroNine() {
  return (
    <>
      {/* <!-- hero-area-start --> */}
      <section className="it-hero-6-area theme-bg scene z-index-2 fix" style={{ backgroundImage: `url(/assets/img/shape/hero-8-1.png)` }}>
        <div className="it-hero-6-shape-1">
          <img className="layer" data-depth="0.3" src="assets/img/shape/hero-8-2.png" alt="" />
        </div>
        <div className="it-hero-6-shape-2">
          <img className="layer" data-depth="0.4" src="assets/img/shape/hero-8-2.png" alt="" />
        </div>
        <img className="it-hero-6-shape-3" src="assets/img/shape/hero-8-3.png" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="it-hero-6-content">
                <h1 className="it-hero-6-title wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">Quran Learning <br /> is Most important <br /> of Muslim ummah</h1>
                <div className="it-hero-6-text wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <p>Discover our expert-led yoga courses designed to enhance flexibility, boost strength, calm <br /> the mind, and promote overall well-being for beginners and advanced practitioners alike.</p>
                </div>
                <div className="it-hero-6-btn wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <Link to="/courses-v8" className="it-btn-yellow">
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
              <div className="it-hero-6-thumb text-end border-radius-30">
                <img src="assets/img/hero/hero-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero-area-end --> */}
    </>
  )
}
