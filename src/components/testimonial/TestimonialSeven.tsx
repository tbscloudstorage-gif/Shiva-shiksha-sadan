 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSeven() {
  return (
    <>
      {/* <!-- testimonial-area-start --> */}
      <div className="it-testimonial-2-area it-testimonial-2-style-4 pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-testimonial-section-box text-center mb-65">
                <h4 className="it-section-title">What Our Learners Say About <br /> Educeet’s Impact and Value</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="it-testimonial-2-wrapper p-relative">
                <Swiper 
                 loop={true}
                  slidesPerView={2}
                  spaceBetween={35}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  pagination={{
                    clickable: true,
                    el: '.it-testimonial-dots'
                  }}
                  navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev'
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  breakpoints={{
                    '1400': {
                      slidesPerView: 2,
                    },
                    '1200': {
                      slidesPerView: 2,
                    },
                    '992': {
                      slidesPerView: 2,
                    },
                    '768': {
                      slidesPerView: 1,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                className="swiper it-testimonial-2-active">
               
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay">
                              <img src="assets/img/testimonial/thumb-5-1.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Roddi San</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay">
                              <img src="assets/img/testimonial/thumb-5-2.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Bill Lancaster</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay">
                              <img src="assets/img/testimonial/thumb-5-1.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Roddi San</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay">
                              <img src="assets/img/testimonial/thumb-5-2.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Bill Lancaster</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
              
                  <div className="it-testimonial-dots text-center mt-60"></div>
                </Swiper>
                <div className="it-testimonial-arrow-wrap">
                  <button className="arrow-prev">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.81934 0.0849609C8.5201 0.0849894 8.32582 0.116974 8.23633 0.180664C8.14697 0.244474 8.07504 0.390586 8.02246 0.619141C7.94886 1.12972 7.813 1.65424 7.61328 2.19141C7.05586 3.90448 6.13205 5.43175 4.84375 6.77246C3.55528 8.11319 2.0533 9.07686 0.338867 9.66211C0.113122 9.74189 0.000144992 9.8831 0 10.085C8.0099e-05 10.2869 0.11313 10.428 0.338867 10.5078C2.05323 11.093 3.55532 12.0568 4.84375 13.3975C6.13205 14.7382 7.05586 16.2654 7.61328 17.9785C7.78677 18.5157 7.92256 19.0267 8.02246 19.5107C8.07505 19.7661 8.14694 19.9264 8.23633 19.9902C8.32595 20.0538 8.52042 20.0849 8.81934 20.085C9.35038 20.085 9.61705 19.944 9.61719 19.6621C9.6169 19.5869 9.53985 19.2677 9.3877 18.7051C8.6041 15.5128 6.85008 12.8947 4.12598 10.8516H21V9.31934H4.12598C5.91933 7.9679 7.30756 6.33338 8.29102 4.41797C8.92196 3.1891 9.33728 1.97626 9.53711 0.779297C9.53712 0.726125 9.54576 0.672313 9.56152 0.619141C9.57193 0.57166 9.57712 0.534295 9.57715 0.507812C9.57693 0.226057 9.324 0.0849609 8.81934 0.0849609Z" fill="currentcolor" />
                      <path d="M8.81934 0.0849609C8.5201 0.0849894 8.32582 0.116974 8.23633 0.180664C8.14697 0.244474 8.07504 0.390586 8.02246 0.619141C7.94886 1.12972 7.813 1.65424 7.61328 2.19141C7.05586 3.90448 6.13205 5.43175 4.84375 6.77246C3.55528 8.11319 2.0533 9.07686 0.338867 9.66211C0.113122 9.74189 0.000144992 9.8831 0 10.085C8.0099e-05 10.2869 0.11313 10.428 0.338867 10.5078C2.05323 11.093 3.55532 12.0568 4.84375 13.3975C6.13205 14.7382 7.05586 16.2654 7.61328 17.9785C7.78677 18.5157 7.92256 19.0267 8.02246 19.5107C8.07505 19.7661 8.14694 19.9264 8.23633 19.9902C8.32595 20.0538 8.52042 20.0849 8.81934 20.085C9.35038 20.085 9.61705 19.944 9.61719 19.6621C9.6169 19.5869 9.53985 19.2677 9.3877 18.7051C8.6041 15.5128 6.85008 12.8947 4.12598 10.8516H21V9.31934H4.12598C5.91933 7.9679 7.30756 6.33338 8.29102 4.41797C8.92196 3.1891 9.33728 1.97626 9.53711 0.779297C9.53712 0.726125 9.54576 0.672313 9.56152 0.619141C9.57193 0.57166 9.57712 0.534295 9.57715 0.507812C9.57693 0.226057 9.324 0.0849609 8.81934 0.0849609Z" stroke="#03594E" />
                    </svg>
                  </button>
                  <button className="arrow-next">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1807 0.0849609C12.4799 0.0849894 12.6742 0.116974 12.7637 0.180664C12.853 0.244474 12.925 0.390586 12.9775 0.619141C13.0511 1.12972 13.187 1.65424 13.3867 2.19141C13.9441 3.90448 14.868 5.43175 16.1562 6.77246C17.4447 8.11319 18.9467 9.07686 20.6611 9.66211C20.8869 9.74189 20.9999 9.8831 21 10.085C20.9999 10.2869 20.8869 10.428 20.6611 10.5078C18.9468 11.093 17.4447 12.0568 16.1562 13.3975C14.868 14.7382 13.9441 16.2654 13.3867 17.9785C13.2132 18.5157 13.0774 19.0267 12.9775 19.5107C12.925 19.7661 12.8531 19.9264 12.7637 19.9902C12.6741 20.0538 12.4796 20.0849 12.1807 20.085C11.6496 20.085 11.3829 19.944 11.3828 19.6621C11.3831 19.5869 11.4602 19.2677 11.6123 18.7051C12.3959 15.5128 14.1499 12.8947 16.874 10.8516H0V9.31934H16.874C15.0807 7.9679 13.6924 6.33338 12.709 4.41797C12.078 3.1891 11.6627 1.97626 11.4629 0.779297C11.4629 0.726125 11.4542 0.672313 11.4385 0.619141C11.4281 0.57166 11.4229 0.534295 11.4229 0.507812C11.4231 0.226057 11.676 0.0849609 12.1807 0.0849609Z" fill="currentcolor" />
                      <path d="M12.1807 0.0849609C12.4799 0.0849894 12.6742 0.116974 12.7637 0.180664C12.853 0.244474 12.925 0.390586 12.9775 0.619141C13.0511 1.12972 13.187 1.65424 13.3867 2.19141C13.9441 3.90448 14.868 5.43175 16.1562 6.77246C17.4447 8.11319 18.9467 9.07686 20.6611 9.66211C20.8869 9.74189 20.9999 9.8831 21 10.085C20.9999 10.2869 20.8869 10.428 20.6611 10.5078C18.9468 11.093 17.4447 12.0568 16.1562 13.3975C14.868 14.7382 13.9441 16.2654 13.3867 17.9785C13.2132 18.5157 13.0774 19.0267 12.9775 19.5107C12.925 19.7661 12.8531 19.9264 12.7637 19.9902C12.6741 20.0538 12.4796 20.0849 12.1807 20.085C11.6496 20.085 11.3829 19.944 11.3828 19.6621C11.3831 19.5869 11.4602 19.2677 11.6123 18.7051C12.3959 15.5128 14.1499 12.8947 16.874 10.8516H0V9.31934H16.874C15.0807 7.9679 13.6924 6.33338 12.709 4.41797C12.078 3.1891 11.6627 1.97626 11.4629 0.779297C11.4629 0.726125 11.4542 0.672313 11.4385 0.619141C11.4281 0.57166 11.4229 0.534295 11.4229 0.507812C11.4231 0.226057 11.676 0.0849609 12.1807 0.0849609Z" stroke="#03594E" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial-area-end --> */}
    </>
  )
}
