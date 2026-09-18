 
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function CategoriesSeven() {
  return (
    <>
      {/* <!-- category-area-start --> */}
      <div className="it-category-4-area pt-120 pb-130">
        <div className="container">
          <div className="mb-70">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-7 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-category-4-left">
                  <h4 className="it-section-title">Top Category</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-category-4-arrow-wrap">
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
          <div className="row">
            <div className="col-12">
              <div className="it-category-4-wrapper p-relative">
                <Swiper
                  loop={true}
                  slidesPerView={5}
                  spaceBetween={35}
                  speed={2000}
                  autoplay={{ delay: 1, disableOnInteraction: true, }}
                  navigation={{
                    prevEl: '.arrow-prev',
                    nextEl: '.arrow-next',
                  }}
                  modules={[Autoplay, Navigation]}
                  breakpoints={{
                    '1400': {
                      slidesPerView: 6,
                    },
                    '1200': {
                      slidesPerView: 6,
                    },
                    '992': {
                      slidesPerView: 4,
                    },
                    '768': {
                      slidesPerView: 3,
                    },
                    '576': {
                      slidesPerView: 3,
                    },
                    '0': {
                      slidesPerView: 2,
                    },
                  }}
                  className="swiper it-category-4-active">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-1.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Horror</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-2.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Romance</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-3.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Philosophy</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-4.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Fantasy</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-5.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">kindergarten</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-5.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Family</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-1.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Horror</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-2.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Romance</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-3.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Philosophy</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-4.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Fantasy</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-5.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">kindergarten</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-category-4-item">
                      <div className="it-category-4-thumb">
                        <img src="assets/img/categories/categories-14-5.png" alt="" />
                      </div>
                      <h4 className="it-category-4-title">Family</h4>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- category-area-end --> */}
    </>
  )
}
