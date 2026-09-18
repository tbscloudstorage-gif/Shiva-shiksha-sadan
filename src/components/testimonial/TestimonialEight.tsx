 
import VideoPopup from "@/components/modals/VideoPopup";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  arrows: false,
  dots: false,
  cssEase: 'linear',
  infinite: true,
  pauseOnHover: false,
  
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
}

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Daniel Johnson",
    title: "Founder & CEO UIPainter",
    text: "Educeet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I've gained real skills and confidence."
  },
  {
    id: 2,
    name: "Edwin Lyon",
    title: "Founder & CEO UIPainter",
    text: "Educeet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I've gained real skills and confidence."
  },
  {
    id: 3,
    name: "Christian Hastings",
    title: "Founder & CEO UIPainter",
    text: "Educeet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I've gained real skills and confidence."
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Product Manager",
    text: "The best learning platform I've ever used! The instructors are knowledgeable and the community is very supportive."
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Software Engineer",
    text: "Thanks to Educeet, I was able to switch careers successfully. The practical projects really helped me build my portfolio."
  }
];

export default function TestimonialEight() {
  return (
    <section className="it-testimonial-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-testimonial-section-title-box text-center mb-70">
              <span className="it-section-subtitle">Testimonial</span>
              <h4 className="it-section-title">
                What Our Learners Say About Educeet's Impact and Value
              </h4>
            </div>
          </div>
        </div>
        
        <div className="row gx-35">
          <div className="col-xl-6 col-lg-6">
            <div className="it-testimonial-3-thumb p-relative">
              <img src="assets/img/testimonial/thumb-9-1.jpg" alt="Testimonial" />
              <div className="it-testimonial-3-play-icon">
                <VideoPopup>
                  <a className="pulse-theme popup-video"  style={{ cursor: "pointer" }}>
                    <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.6017 20.6866C40.0189 21.5049 40.0189 23.5505 38.6017 24.3687L3.52475 44.6204C2.1075 45.4387 0.335938 44.4159 0.335938 42.7794V2.27602C0.335937 0.639517 2.1075 -0.383292 3.52475 0.434958L38.6017 20.6866Z" fill="currentcolor" />
                    </svg>
                  </a>
                </VideoPopup>
              </div>
            </div>
          </div>
          
          <div className="col-xl-6 col-lg-6">
            <div className="it-testimonial-3-right" style={{ height: "600px" }}>
              <Slider {...settings} className="it-testimonial-3-active">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="it-testimonial-2-content-wrap">
                    <div className="it-testimonial-2-content">
                      <div className="it-testimonial-2-ratting">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="it-testimonial-2-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                        <div className="it-testimonial-2-avatar-info">
                          <h5 className="it-testimonial-2-avatar-name">{testimonial.name}</h5>
                          <span>{testimonial.title}</span>
                        </div>
                        <div className="it-testimonial-2-quote">
                          <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                            <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}