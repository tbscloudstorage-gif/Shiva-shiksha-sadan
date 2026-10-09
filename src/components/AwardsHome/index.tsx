
import  { useRef, useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awards = [
  {
    image: "/assets/img/about/1.1.png",
    title: "Honoured by the President of Mauritius",
  },
  {
    image: "/assets/img/about/2.1.png",
    title: "Best School in Haryana ",
  },
  {
    image: "/assets/img/about/3.1.png",
    title: "Best School Award 2024 By Education Today",
  },
  {
    image: "/assets/img/about/4.1.png",
    title: "School Excellence Award By Dainik Bhaskar Group",
  },
  {
    image: "/assets/img/about/5.1.png",
    title: "AAAA ranking in Foundational Years Pedagogical Practices",
  },
  
];

export default function AwardsSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    swipe: true,
    beforeChange: (_current, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <section className="container awards-section">
      <div className="awards-container">
        <div className="awards-row">

          {/* Left Content */}
          <div className="awards-left">
            <div className="awards-content">
              <h4 className="it-section-title mb-5">
                Celebrating Our Journey of Excellence
                and Achievements
              </h4>

              <p className="awards-description " style={{marginTop : "24px"}}>
                Discover the remarkable milestones, prestigious
                recognitions, and achievements that reflect
                Shiva Shiksha Sadan's commitment to academic
                excellence and inspiring leadership.
              </p>
            </div>

            {/* Navigation */}
            <div className="awards-navigation">

              <button
                type="button"
                className="awards-arrow"
                aria-label="Previous award"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <span>←</span>
              </button>

              <div className="awards-dots">
                {awards.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`awards-dot ${
                      activeSlide === index ? "active" : ""
                    }`}
                    aria-label={`Go to award ${index + 1}`}
                    aria-current={
                      activeSlide === index ? "true" : undefined
                    }
                    onClick={() =>
                      sliderRef.current?.slickGoTo(index)
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                className="awards-arrow"
                aria-label="Next award"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <span>→</span>
              </button>

            </div>
          </div>

          {/* Right Slider */}
          <div className="awards-right">
            <Slider ref={sliderRef} {...settings}>
              {awards.map((award, index) => (
                <div key={index}>
                  <div className="awards-slide">
                    <div className="awards-image">
                      <img
                        src={award.image}
                        alt={award.title}
                      />
                    </div>

                    <div className="awards-caption">
                      <span className="awards-number">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <h3 className="awards-title">
                        {award.title}
                      </h3>

                      <span className="awards-line"></span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
}
