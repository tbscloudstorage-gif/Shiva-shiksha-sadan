
import { useRef } from "react";

export default function FacebookSlider() {
const sliderRef = useRef<HTMLDivElement | null>(null);
  const posts = [
    "https://www.facebook.com/story.php?story_fbid=1521481419779454&id=100057528314849&mibextid=wwXIfr&rdid=KC7g9EZqDjrvvmJR#",
    "https://www.facebook.com/story.php?story_fbid=1583923916868537&id=100057528314849&mibextid=wwXIfr&rdid=yGHEvPTTUFoRireI#",
    "https://www.facebook.com/story.php?story_fbid=1583130373614558&id=100057528314849",
    "https://www.facebook.com/story.php?story_fbid=1557279919532937&id=100057528314849&mibextid=wwXIfr&rdid=1Nac7MgOxCMxYC4s#",
    "https://www.facebook.com/story.php?story_fbid=1549498376977758&id=100057528314849&mibextid=wwXIfr&rdid=5jD7kQqUuSYNUvi1#",
    "https://www.facebook.com/story.php?story_fbid=1601545985106330&id=100057528314849&mibextid=wwXIfr&rdid=Fo1Qj0XYKjtYQzuy#",
    "https://www.facebook.com/story.php?story_fbid=1596705385590390&id=100057528314849&mibextid=wwXIfr&rdid=nCnliuMcsxDvrFez#",
    "https://www.facebook.com/story.php?story_fbid=1594238952503700&id=100057528314849&mibextid=wwXIfr&rdid=aWNPpqSdMixWwBeC#",
    "https://www.facebook.com/story.php?story_fbid=1588958833031712&id=100057528314849&mibextid=wwXIfr&rdid=DF5wVBf1tXNSP2SX#",
    "https://www.facebook.com/story.php?story_fbid=1583923916868537&id=100057528314849&mibextid=wwXIfr&rdid=0UwVJ4kSKZyiXPGL#",
    "https://www.facebook.com/story.php?story_fbid=1514546307139632&id=100057528314849&mibextid=wwXIfr&rdid=hmjeoJaNbw0bp4Z0#",
  ];

  // Save post images in public/assets/img/facebook/
  const images = [
    "post-1.png",
    "post-2.png",
    "post-3.png",
    "post-4.png",
    "post-5.png",
    "post-6.png",
    "post-7.png",
    "post-8.png",
    "post-9.png",
    "post-10.png",
    "post-11.png",
  ];

const scroll = (direction: number) => {
  if (!sliderRef.current) return;

  const card = sliderRef.current.querySelector(".fb-post-card");

  const distance = card
    ? card.getBoundingClientRect().width + 20
    : 380;

  sliderRef.current.scrollBy({
    left: direction * distance,
    behavior: "smooth",
  });
};

  return (
    <section className="fb-section">
      <style>{`
        .fb-section {
          padding: 40px 20px;
          max-width: 1100px;
          margin: auto;
        }

        .fb-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 10px 0 18px;
          scrollbar-width: thin;
          scrollbar-color: #1e214a #e8e8e8;
        }

        .fb-slider::-webkit-scrollbar {
          height: 8px;
        }

        .fb-slider::-webkit-scrollbar-thumb {
          background: #1e214a;
          border-radius: 10px;
        }

        .fb-post-card {
          flex: 0 0 calc((100% - 20px) / 2);
          height: 270px;
          min-width: 0;
          overflow: hidden;
          border-radius: 12px;
          background: #f5f5f5;
          scroll-snap-align: start;
          position: relative;
        }

        .fb-post-card a {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .fb-post-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .fb-post-card:hover img {
          transform: scale(1.04);
        }

        .fb-nav {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }

        .fb-nav button {
          background: #1e214a;
          color: white;
          border: none;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          cursor: pointer;
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .fb-section {
            padding: 25px 15px;
          }

          .fb-post-card {
            flex-basis: 100%;
          }
        }
      `}</style>

      <h5 className="it-feature-title">
        Follow Us on Facebook
      </h5>

      <div className="fb-slider" ref={sliderRef}>
        {posts.map((post, index) => (
          <div className="fb-post-card" key={post}>
            <a
              href={post}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Facebook post ${index + 1 }`}
            >
              <img
                src={`/assets/img/about/${images[index]}`}
                alt={`Shiva Shiksha Sadan Facebook post ${index + 1 }`}
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="fb-nav">
        <button
          type="button"
          aria-label="Previous Facebook post"
          onClick={() => scroll(-1)}
        >
          &#8592;
        </button>

        <button
          type="button"
          aria-label="Next Facebook post"
          onClick={() => scroll(1)}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
