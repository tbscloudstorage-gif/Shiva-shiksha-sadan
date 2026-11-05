
import { Link } from "react-router-dom";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroThree() {
  const slides = [
    {
      desktop: "assets/img/slider/slider-1-2.jpg",
      mobile: "assets/img/hero/mobile-banner-1.png",
      title: (
        <>
          Shaping Young Minds <br />
          with Five Decades of Educational{" "}
          <span className="z-index-1">Excellence</span>
        </>
      ),
      description:
        "At Shiva Shiksha Sadan, we foster a supportive learning environment where every child is encouraged to explore, learn, grow with confidence, and develop the knowledge and values needed for a successful future.",
    },
    {
      desktop: "assets/img/slider/slider-1-4.jpg",
      mobile: "assets/img/hero/banner-2-mobile.png",
      title: (
        <>
          Empowering Students to Discover Their True{" "}
          <span className="z-index-1">Potential</span>
        </>
      ),
      description:
        "We nurture confidence, creativity, and curiosity, helping every student discover their strengths and reach their full potential.",
    },
    {
      desktop: "assets/img/slider/slider-1-5.jpg",
      mobile: "assets/img/hero/mobile-banner-3.png",
      title: (
        <>
          Creating Pathways to Knowledge, Growth,{" "}
          <span className="z-index-1">
            <br />
            and Achievement
          </span>
        </>
      ),
      description:
        "Empowering every student with the knowledge, confidence, and opportunities needed to grow, excel, and achieve their aspirations.",
    },
    {
      desktop: "assets/img/slider/slider-1-3.jpg",
      mobile: "assets/img/hero/banner-4-mobile.png",
      title: (
        <>
          Building Brighter Futures Through Quality{" "}
          <span className="z-index-1">Education</span>
        </>
      ),
      description:
        "At Shiva Shiksha Sadan, we inspire curiosity, encourage creativity, and foster a love for learning through a balanced approach to academics, personal growth, and character development.",
    },
  ];

  return (
    <>
      {/* Mobile-only CSS */}
      <style>{`
        @media (max-width: 768px) {

          .it-slider-area .it-slider-box {
            height: 538px !important;
            min-height: 538px !important;
            position: relative;
            overflow: hidden;
          }

          .it-slider-area .it-slider-bg {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          .it-slider-area .it-slider-bg picture {
            display: block;
            width: 100%;
            height: 100%;
          }

          .it-slider-area .it-slider-bg img {
            display: block;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center center;
          }

          .it-slider-area .it-slider-shape-1,
          .it-slider-area .it-slider-shape-2 {
            display: none !important;
          }

          .it-slider-area .it-slider-content {
            position: relative;
            z-index: 2;
          }

          .it-slider-area .swiper {
            width: 100%;
            overflow: hidden;
          }

          .it-slider-area .swiper-slide {
            width: 100%;
          }
        }
      `}</style>

      {/* Slider Area Start */}
      <section className="it-slider-area">
        <div className="it-slider-wrap p-relative">

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={900}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoHeight={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            navigation={false}
            observer={true}
            observeParents={true}
            watchOverflow={true}
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectFade,
            ]}
            className="swiper it-slider-active p-relative"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                className="swiper-slide"
                key={index}
              >
                <div className="it-slider-box it-slider-overlay z-index-1">

                  {/* Original Desktop Shapes */}
                  <img
                    className="it-slider-shape-1"
                    src="assets/img/shape/slider-1-1.png"
                    alt=""
                  />

                  <img
                    className="it-slider-shape-2"
                    src="assets/img/shape/slider-1-2.png"
                    alt=""
                  />

                  {/* Responsive Background */}
                  <div className="it-slider-bg">
                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet={slide.mobile}
                      />

                      <img
                        src={slide.desktop}
                        alt="Shiva Shiksha Sadan"
                      />
                    </picture>
                  </div>

                  {/* Original Slider Content */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-7 col-xl-8 col-lg-9">
                        <div className="it-slider-content">

                          <h1 className="it-slider-title">
                            {slide.title}
                          </h1>

                          <div className="it-slider-content-text">

                            <p className="mb-35">
                              {slide.description}
                            </p>

                            <div className="it-slider-btn">

                              <Link
                                to="/apply-now"
                                className="it-btn-yellow theme-bg border-radius-100"
                              >
                                <span>
                                  <span className="text-1">
                                    Admissions Open
                                  </span>

                                  <span className="text-2">
                                    Admissions Open
                                  </span>
                                </span>

                                <i>
                                  <svg
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </i>
                              </Link>

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}

            <div className="it-slider-arrow-wrap">
              {/* Original slider arrows remain disabled */}
            </div>

          </Swiper>

        </div>
      </section>
      {/* Slider Area End */}
    </>
  );
}
