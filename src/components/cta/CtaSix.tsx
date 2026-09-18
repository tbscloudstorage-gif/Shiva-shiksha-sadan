import { Link } from "react-router-dom";

export default function CtaSix() {
  return (
    <>

      {/* <!-- cta-area-start --> */}
      <section className="it-cta-5-area z-index-2 fix pt-110 pb-120" style={{backgroundImage: `url(/assets/img/shape/cta-bg-6.png)`}}>
        <img className="it-cta-5-shape-1 d-none d-lg-block" src="assets/img/shape/cta-6-1.png" alt="" />
        <div className="it-cta-5-shape-2"><img src="assets/img/shape/categori-6-2.png" alt="" /></div>
        <div className="container">
          <div className="it-cta-5-thumb">
            <img src="assets/img/cta/cta-6-1.png" alt="" />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="it-cta-5-content">
                <h4 className="it-section-title">Unlock the Science Behind Great Cooking with Our Instructors</h4>
                <p>Enhance your knowledge and grow professionally by learning new skills anytime, anywhere. Access expert-led courses designed to help you succeed in your career.</p>
                <Link to="/event-list" className="it-btn-yellow white-bg border-radius-100">
                  <span>
                    <span className="text-1">View All Event</span>
                    <span className="text-2">View All Event</span>
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
      </section>
      {/* <!-- cta-area-end --> */}
    </>
  )
}
