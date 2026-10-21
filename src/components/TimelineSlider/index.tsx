
import  { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Academic Excellence & Curriculum",
    image: "/assets/img/about/ac-2.png",
    link: "/",
  },
  {
    title: "Innovative Teaching & Learning",
    image: "/assets/img/about/ac-3.png",
    link: "/",
  },
  {
    title: "Sports & Extracurricular Activities",
    image: "/assets/img/about/ac-4.png",
    link: "/",
  },
  {
    title: "School Healthcare & Medical Facilities",
    image: "/assets/img/about/ac-5.JPG",
    link: "/",
  },
];

const SLIDE_DURATION = 4000;

export default function TimelineSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

 const activeRef = useRef<number>(0);
const startRef = useRef<number | null>(null);
const frameRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

useEffect(() => {
  if (paused) return;

  startRef.current = null;

  const animate = (timestamp: number) => {
    if (startRef.current === null) {
      startRef.current = timestamp;
    }

    const elapsed = timestamp - startRef.current;

    const percentage = Math.min(
      elapsed / SLIDE_DURATION,
      1
    );

    setProgress(percentage);

    if (percentage >= 1) {
      const nextIndex =
        (activeRef.current + 1) % slides.length;

      activeRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setProgress(0);
      startRef.current = timestamp;
    }

    frameRef.current = requestAnimationFrame(animate);
  };

  frameRef.current = requestAnimationFrame(animate);

  return () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };
}, [paused]);

const handleTimelineClick = (index: number) => {    activeRef.current = index;
    setActiveIndex(index);
    setProgress(0);

    // Restart the animation timer
    setPaused(true);
  };

  useEffect(() => {
    if (!paused) return;

    const id = requestAnimationFrame(() => {
      setPaused(false);
    });

    return () => cancelAnimationFrame(id);
  }, [paused]);

  // Progress position between timeline points
  const currentPosition =
    activeIndex === slides.length - 1
      ? 100
      : ((activeIndex + progress) /
          (slides.length - 1)) *
        100;

  return (
    <>
    <section className="container mb-40 mt-40">
         <div className="it-campus-section-title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-xl-8 col-lg-7">
                <div className="it-campus-section-title-box">
                  <span className="it-section-subtitle">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 1.66667H16.6667V0.833333C16.6667 0.61232 16.5789 0.400358 16.4226 0.244078C16.2663 0.0877975 16.0543 0 15.8333 0C13.3333 0 10.5708 0.133334 9.16667 1.46667C7.7625 0.133334 5 0 2.5 0C2.27899 0 2.06702 0.0877975 1.91074 0.244078C1.75446 0.400358 1.66667 0.61232 1.66667 0.833333V1.66667H0.833333C0.61232 1.66667 0.400358 1.75446 0.244078 1.91074C0.0877973 2.06702 0 2.27899 0 2.5V12.5C0 12.721 0.0877973 12.933 0.244078 13.0893C0.400358 13.2455 0.61232 13.3333 0.833333 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V2.5C18.3333 2.27899 18.2455 2.06702 18.0893 1.91074C17.933 1.75446 17.721 1.66667 17.5 1.66667ZM15.8333 0.833333V10.8333C13.5542 10.8333 11.0708 10.9417 9.58333 11.9583V2.22917C10.675 0.954167 13.375 0.833333 15.8333 0.833333ZM8.75 2.22917V11.9583C7.2625 10.9417 4.77917 10.8333 2.5 10.8333V0.833333C4.95833 0.833333 7.65833 0.954167 8.75 2.22917ZM0.833333 2.5H1.66667V10.8333C1.66667 11.0543 1.75446 11.2663 1.91074 11.4226C2.06702 11.5789 2.27899 11.6667 2.5 11.6667C4.53333 11.6667 6.72917 11.75 8.04583 12.5H0.833333V2.5ZM17.5 12.5H10.2875C11.6042 11.75 13.8 11.6667 15.8333 11.6667C16.0543 11.6667 16.2663 11.5789 16.4226 11.4226C16.5789 11.2663 16.6667 11.0543 16.6667 10.8333V2.5H17.5V12.5Z" fill="#181348" />
                    </svg>
                    Campus
                  </span>
                  <h4 className="it-section-title">Education Is More Than Learning. <br/>It's a Foundation for Life.</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="it-campus-text">
                  <p className="mb-0"> At Shiva Shiksha Sadan, we focus on holistic development through quality education, sports, extracurricular activities, and life skills, nurturing well-rounded individuals ready for the future.

 </p>
                </div>
              </div>
            </div>
          </div>

        </section>

    <section className="school-timeline-section mb-40 pb-40">
      <div className="school-timeline-wrapper">

        {/* Full background image slider */}
     <div className="school-timeline-images">
  {slides.map((slide, index) => (
    <a
      key={index}
      href={slide.link}
      className={`school-timeline-img ${
        activeIndex === index ? "active" : ""
      }`}
      style={{
        display: "block",
        position: "absolute",
        inset: 0,
        pointerEvents: activeIndex === index ? "auto" : "none",
      }}
      tabIndex={activeIndex === index ? 0 : -1}
      aria-label={`Explore ${slide.title}`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </a>
  ))}
</div>

        {/* White timeline overlay */}
        <div className="school-timeline-overlay">

          <div className="school-timeline-list">

            {/* Grey vertical line */}
            <div className="school-timeline-track" />

            {/* Animated green progress line */}
            <div
              className="school-timeline-progress"
              style={{
                height: `${
                  currentPosition * 0.75
                }%`,
              }}
            />

            {/* Timeline points */}
            {slides.map((slide, index) => (
              <button
                type="button"
                key={index}
                className={`school-timeline-point ${
                  activeIndex === index
                    ? "active"
                    : ""
                } ${
                  activeIndex > index
                    ? "completed"
                    : ""
                }`}
                onClick={() =>
                  handleTimelineClick(index)
                }
                aria-label={`Show ${slide.title}`}
                aria-current={
                  activeIndex === index
                    ? "step"
                    : undefined
                }
              >
                <span className="school-timeline-circle">
                  {activeIndex === index ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <span className="school-timeline-dot" />
                  )}
                </span>

                <span className="school-timeline-text">
                  {slide.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
