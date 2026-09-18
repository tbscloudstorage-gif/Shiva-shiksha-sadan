import { Link } from "react-router-dom";


export default function FaqArea() {
  return (
    <>
      {/* <!-- faq-area-start --> */}
      <div className="it-faq-area it-faq-inner-style it-faq-style-2 pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-faq-tab-box mb-80">
                <ul className="nav nav-tab justify-content-center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="student-tab" data-bs-toggle="tab" data-bs-target="#student" type="button" role="tab" aria-controls="student" aria-selected="true">Student</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="instructor" aria-selected="false">Instructor</button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
                  <div className="row gx-35">
                    <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s"
                      data-wow-delay=".5s">
                      <div className="it-custom-accordion">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingOne2">
                              <button className="accordion-buttons " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne2" aria-expanded="true"
                                aria-controls="collapseOne2">
                                What is this theme designed for?
                              </button>
                            </h4>
                            <div id="collapseOne2" className="accordion-collapse collapse show"
                              aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingTwo3">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false"
                                aria-controls="collapseTwo3">
                                Is this theme compatible with Elementor?
                              </button>
                            </h4>
                            <div id="collapseTwo3" className="accordion-collapse collapse"
                              aria-labelledby="headingTwo3" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour4">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour4"
                                aria-expanded="false" aria-controls="collapseFour4">
                                Why do we need to use LMS plugins?
                              </button>
                            </h4>
                            <div id="collapseFour4" className="accordion-collapse collapse"
                              aria-labelledby="headingFour4" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour5">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour5"
                                aria-expanded="false" aria-controls="collapseFour4">
                                Do you offer a free trial for Educeet Theme?
                              </button>
                            </h4>
                            <div id="collapseFour5" className="accordion-collapse collapse"
                              aria-labelledby="headingFour5" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s"
                      data-wow-delay=".7s">
                      <div className="it-custom-accordion">
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingOne22">
                              <button className="accordion-buttons " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne22" aria-expanded="true"
                                aria-controls="collapseOne22">
                                Do you provide theme updates?
                              </button>
                            </h4>
                            <div id="collapseOne22" className="accordion-collapse collapse show"
                              aria-labelledby="headingOne22" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingTwo33">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo33" aria-expanded="false"
                                aria-controls="collapseTwo33">
                                Is this theme compatible with Elementor?
                              </button>
                            </h4>
                            <div id="collapseTwo33" className="accordion-collapse collapse"
                              aria-labelledby="headingTwo33" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour44">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour44"
                                aria-expanded="false" aria-controls="collapseFour44">
                                Do you provide theme updates?
                              </button>
                            </h4>
                            <div id="collapseFour44" className="accordion-collapse collapse"
                              aria-labelledby="headingFour44" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour55">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour55"
                                aria-expanded="false" aria-controls="collapseFour4">
                                Are your services available globally?
                              </button>
                            </h4>
                            <div id="collapseFour55" className="accordion-collapse collapse"
                              aria-labelledby="headingFour55" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                  <div className="row gx-35">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="it-faq-tab-content">
                        <h5 className="it-details-title-sm mb-25">Related Topics</h5>
                        <ul className="mb-35">
                          <li><a href="#">Account/Profile (1)</a></li>
                          <li><a href="#">Course Taking (2)</a></li>
                          <li><a href="#">Getting Started (1)</a></li>
                          <li><a href="#">Mobile (1)</a></li>
                          <li><a href="#">Purchase/Refunds (3)</a></li>
                          <li><a href="#">Troubleshooting (2)</a></li>
                        </ul>
                        <Link to="/contact-us" className="it-btn-yellow theme-bg">
                          <span>
                            <span className="text-1">Contact Us</span>
                            <span className="text-2">Contact Us</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8">
                      <div className="it-custom-accordion">
                        <div className="accordion" id="accordionExample3">
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingOne20">
                              <button className="accordion-buttons " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne20" aria-expanded="true"
                                aria-controls="collapseOne20">
                                What is this theme designed for?
                              </button>
                            </h4>
                            <div id="collapseOne20" className="accordion-collapse collapse show"
                              aria-labelledby="headingOne20" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingTwo30">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo30" aria-expanded="false"
                                aria-controls="collapseTwo30">
                                Is this theme compatible with Elementor?
                              </button>
                            </h4>
                            <div id="collapseTwo30" className="accordion-collapse collapse"
                              aria-labelledby="headingTwo30" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour40">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour40"
                                aria-expanded="false" aria-controls="collapseFour40">
                                Why do we need to use LMS plugins?
                              </button>
                            </h4>
                            <div id="collapseFour40" className="accordion-collapse collapse"
                              aria-labelledby="headingFour40" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-items mb-30">
                            <h4 className="accordion-header" id="headingFour50">
                              <button className="accordion-buttons collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour50"
                                aria-expanded="false" aria-controls="collapseFour50">
                                Do you offer a free trial for Educeet Theme?
                              </button>
                            </h4>
                            <div id="collapseFour50" className="accordion-collapse collapse"
                              aria-labelledby="headingFour50" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                <p className="mb-0">This theme is specifically designed for educational institutions, online
                                  courses, schools, universities, and e-learning platforms. If you want to
                                  build a Education or E-learning website Educeet is a perfect theme.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- faq-area-end --> */}
    </>
  )
}
