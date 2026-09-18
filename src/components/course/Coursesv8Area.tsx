 
import NiceSelect from "@/ui/NiceSelect";
import { Link } from "react-router-dom";

export default function Coursesv8Area() {
  const selectHandler = (e: any) => { return e; };
  return (
    <>
      {/* <!-- course-area-start --> */}
      <div className="it-course-area it-course-style-8 it-course-style-6 pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-shop-top-wrap d-flex justify-content-between align-items-center mb-60">
                <div className="it-shop-text">
                  <span>Showing all 11 results</span>
                </div>
                <div className="it-shop-filter-box d-flex align-items-center">
                  <span>Show 9 / 12 / 15</span>
                  <div className="it-shop-filter p-relative text-md-end ml-30">
                    <NiceSelect
                      className=""
                      options={[
                        { value: "01", text: "Default Sorting" },
                        { value: "02", text: "Low to High" },
                        { value: "03", text: "High to Low" },
                        { value: "04", text: "New Added" },
                        { value: "05", text: "On Sale" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name=""
                      placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-35">
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-1.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Easy Learn Quran Ramadan Month Free For Adult</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-2.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Quran for All – Free Ramadan Learning</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-3.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Ramadan Special: Easy Quran Study for Adults</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-4.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Easy Learn Quran Ramadan Month Free For Adult</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-5.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Quran for All – Free Ramadan Learning</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-6.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Ramadan Special: Easy Quran Study for Adults</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-7.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Easy Learn Quran Ramadan Month Free For Adult</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-8.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Quran for All – Free Ramadan Learning</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
            <div className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-course-item mb-35">
                <div className="it-course-thumb z-index-1 border-radius-20">
                  <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-8-9.jpg" alt="" /></Link>
                </div>
                <div className="it-course-content p-relative">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="it-course-price-box">
                      <del>$20.00</del>
                      <span>$9.00</span>
                    </div>
                    <div className="it-course-rating mb-10">
                      <div>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>(4.7 Rating)</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="it-course-title"><Link className="border-line" to="/courses-details-v2">Ramadan Special: Easy Quran Study for Adults</Link></h5>
                  <p>Learn Quran, Hadith, and Islamic teachings with expert guidance to strengthen your knowledge.</p>
                  <div className="it-course-btn">
                    <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                      <span>
                        <span className="text-1">Enroll The Course</span>
                        <span className="text-2">Enroll The Course</span>
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
          <div className="row">
            <div className="col-12">
              <div className="it-pagination text-center mt-45">
                <nav>
                  <ul>
                    <li>
                      <Link to="/courses-v8">
                        <i className="fa-regular fa-arrow-left"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses-v8">1</Link>
                    </li>
                    <li className="current">
                      <Link to="/courses-v8">2</Link>
                    </li>
                    <li>
                      <Link to="/courses-v8">3</Link>
                    </li>
                    <li>
                      <Link to="/courses-v8">4</Link>
                    </li>
                    <li>
                      <Link to="/courses-v8">
                        <i className="fa-regular fa-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- course-area-end --> */}
    </>
  )
}
