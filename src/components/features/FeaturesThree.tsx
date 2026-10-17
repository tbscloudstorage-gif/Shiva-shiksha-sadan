import { Link } from "react-router-dom";


export default function FeaturesThree() {
  return (
    <>
      {/* <!-- feature-area-start --> */}
      <section className="it-feature-area">
        <div className="container">
          <div className="it-feature-wrap z-index-2">
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="it-feature-item d-flex justify-content-center">
                  <div className="it-feature-icon">
                    <span>
                                         <img src="assets/img/logo/news.png"  style={{width:"35px"}}/>

                    </span>
                  </div>
                  <div className="it-feature-content" >
                    <h5 className="it-feature-title">News/Announcement/Notices

</h5>

                    <div className="feature-notice-window">
                      <div className="feature-notice-track">
                        {[
                          "Admission Enquiries for the Upcoming Academic Session",
                          "Latest School Circulars and Important Updates",
                          "Upcoming School Events and Activities",
                          "Academic Calendar and Examination Updates",
                          "Important Information for Parents",
                          "Admission Enquiries for the Upcoming Academic Session",
                          "Latest School Circulars and Important Updates",
                          "Upcoming School Events and Activities",
                          "Academic Calendar and Examination Updates",
                          "Important Information for Parents",
                        ].map((notice, index) => (
                          <div className="feature-notice-item" key={index}>
                            <span className="feature-notice-dot"></span>
                            <p>{notice}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="#">
                      View All Notices{" "}
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6364 7.6364C14.9879 7.28492 14.9879 6.71508 14.6364 6.3636L8.90883 0.636039C8.55736 0.284567 7.98751 0.284567 7.63604 0.636039C7.28457 0.987511 7.28457 1.55736 7.63604 1.90883L12.7272 7L7.63604 12.0912C7.28457 12.4426 7.28457 13.0125 7.63604 13.364C7.98751 13.7154 8.55736 13.7154 8.90883 13.364L14.6364 7.6364ZM0 7V7.9H14V7V6.1H0V7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div></div>
              </div>
               <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="it-feature-item d-flex justify-content-start">
                  <div className="it-feature-icon">
                    <span>
                    <img src="assets/img/logo/event.png"  style={{width:"35px"}}/>
                    </span>
                  </div>
                  <div className="it-feature-content" >
                    <h5 className="it-feature-title">Events 2026-2027
</h5>

                    <div className="feature-notice-window">
                      <div className="feature-notice-track">
                        {[
                          
                           "Dussehra Celebration",
                          "Maharishi Valmiki Jayanti",
                          "National Unity Day",
                          "Diwali",
                          "National Education Day",
                          "Children's Day Celebration",
                          " Chhath Puja",
                          "Guru Nanak Jayanti",
                          "Human Rights Day",
                         
                          " National Energy Conservation Day",
                          " National Mathematics Day",
                          "Christmas",
                        ].map((notice, index) => (
                          <div className="feature-notice-item" key={index}>
                            <span className="feature-notice-dot"></span>
                            <p>{notice}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="#">
                      View Upcoming Event{" "}
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6364 7.6364C14.9879 7.28492 14.9879 6.71508 14.6364 6.3636L8.90883 0.636039C8.55736 0.284567 7.98751 0.284567 7.63604 0.636039C7.28457 0.987511 7.28457 1.55736 7.63604 1.90883L12.7272 7L7.63604 12.0912C7.28457 12.4426 7.28457 13.0125 7.63604 13.364C7.98751 13.7154 8.55736 13.7154 8.90883 13.364L14.6364 7.6364ZM0 7V7.9H14V7V6.1H0V7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div></div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature-area-end --> */}
    </>
  )
}
