 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function TestimonialThirteen() {
  return (
    <>

      {/* <!-- testimonial-area-start --> */}
      <div className="it-testimonial-4-area pt-130 pb-130" style={{ backgroundImage: `url(/assets/img/shape/testimonial-bg-13.png)` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-11">
              <div className="it-testimonial-4-wrapper p-relative">
                <Swiper
                  loop={true}
                  speed={1200}
                  spaceBetween={35}
                  autoplay={true}
                  slidesPerView={1}
                  modules={[Autoplay]}
                  className="swiper it-testimonial-4-active">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial-4-item">
                      <div className="it-testimonial-4-quote mb-55">
                        <svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.798828 24.6H13.0988L4.89876 40.9999H17.1987L25.3988 24.6V0H0.798828V24.6Z" fill="white" />
                          <path d="M33.5996 0V24.6H45.8996L37.6995 40.9999H49.9995L58.1996 24.6V0H33.5996Z" fill="white" />
                        </svg>
                      </div>
                      <div className="it-testimonial-4-text">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <div className="it-testimonial-4-avatar-info-box d-flex align-items-center justify-content-center">
                          <div className="it-testimonial-4-avatar-thumb">
                            <img src="assets/img/avatar/avatar-1-7.png" alt="" />
                          </div>
                          <div className="it-testimonial-4-avatar-info text-start">
                            <h5 className="it-testimonial-4-avatar-title">Bill Lancaster</h5>
                            <span>Creative Director Of Visual Narratives</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial-4-item">
                      <div className="it-testimonial-4-quote mb-55">
                        <svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.798828 24.6H13.0988L4.89876 40.9999H17.1987L25.3988 24.6V0H0.798828V24.6Z" fill="white" />
                          <path d="M33.5996 0V24.6H45.8996L37.6995 40.9999H49.9995L58.1996 24.6V0H33.5996Z" fill="white" />
                        </svg>
                      </div>
                      <div className="it-testimonial-4-text">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <div className="it-testimonial-4-avatar-info-box d-flex align-items-center justify-content-center">
                          <div className="it-testimonial-4-avatar-thumb">
                            <img src="assets/img/avatar/avatar-1-5.png" alt="" />
                          </div>
                          <div className="it-testimonial-4-avatar-info text-start">
                            <h5 className="it-testimonial-4-avatar-title">Dorothy Guajardo</h5>
                            <span>Creative Director Of Visual Narratives</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial-4-item">
                      <div className="it-testimonial-4-quote mb-55">
                        <svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.798828 24.6H13.0988L4.89876 40.9999H17.1987L25.3988 24.6V0H0.798828V24.6Z" fill="white" />
                          <path d="M33.5996 0V24.6H45.8996L37.6995 40.9999H49.9995L58.1996 24.6V0H33.5996Z" fill="white" />
                        </svg>
                      </div>
                      <div className="it-testimonial-4-text">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <div className="it-testimonial-4-avatar-info-box d-flex align-items-center justify-content-center">
                          <div className="it-testimonial-4-avatar-thumb">
                            <img src="assets/img/avatar/avatar-1-6.png" alt="" />
                          </div>
                          <div className="it-testimonial-4-avatar-info text-start">
                            <h5 className="it-testimonial-4-avatar-title">Carole Colson</h5>
                            <span>Creative Director Of Visual Narratives</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial-area-end --> */}
    </>
  )
}
