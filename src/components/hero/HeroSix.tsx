

export default function HeroSix() {
  return (
    <>
      {/* <!-- hero-area-start --> */}
      <section className="it-hero-4-area fix p-relative">
        <div className="it-hero-4-shape-7">
          <svg width="1920" height="250" viewBox="0 904 1920 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bottomRed" x1="960" y1="1154" x2="960" y2="904" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFF" stop-opacity="1" />
                <stop offset="100%" stop-color="#FFF" stop-opacity="1" />
              </linearGradient>
              <radialGradient id="middleDew" cx="0.5" cy="0.5" r="0.4" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
              </radialGradient>
              <filter id="filter0_g_1004_10217" x="-10" y="-18" width="1940" height="1232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feTurbulence type="fractalNoise" baseFrequency="0.1 0.1" numOctaves="3" seed="6138" />
                <feTurbulence type="fractalNoise" baseFrequency="0.1 0.1" numOctaves="3" result="displacementMap" />
                <feDisplacementMap
                  in="shape"
                  in2="displacementMap"
                  scale="20"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage" />
                <feMerge>
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#filter0_g_1004_10217)">
              <path
                d="M0 972.498C0 972.498 583.381 1104.16 961.5 1104C1338.46 1103.84 1920 972.498 1920 972.498V1154H0V972.498Z"
                fill="url(#bottomRed)"
              />
            </g>
            <ellipse cx="960" cy="1050" rx="200" ry="50" fill="url(#middleDew)" />
          </svg>
        </div>
        <div className="it-hero-4-ptb z-index-1 fix">
          <div className="it-hero-4-shape-1 d-none d-xl-block"><img src="assets/img/shape/hero-6-1.png" alt="" /></div>
          <img className="it-hero-4-shape-2 d-none d-xl-block" src="assets/img/shape/categori-6-1.png" alt="" />
          <div className="it-hero-4-shape-3 d-none d-xl-block"><img src="assets/img/shape/hero-6-2.png" alt="" /></div>
          <img className="it-hero-4-shape-4 d-none d-lg-block" src="assets/img/shape/hero-6-3.png" alt="" />
          <img className="it-hero-4-shape-5" src="assets/img/shape/hero-bg-6-2.png" alt="" />
          <img className="it-hero-4-shape-6 d-none d-xl-block" src="assets/img/shape/hero-6-5.png" alt="" />
          <img className="it-hero-4-shape-8 d-none d-xl-block" src="assets/img/shape/hero-6-7.png" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="it-hero-4-content z-index-2">
                  <h1 className="it-hero-title text-black wow itfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".3s">Elevate your  <br /> skills with expert <br />
                    <span className="z-index-1">
                      techniques today.
                      <span className="it-title-shape-2">
                        <svg width="418" height="27" viewBox="0 0 418 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="418" height="27" fill="#F8C62F" />
                        </svg>
                      </span>
                    </span>
                  </h1>
                  <div className="it-hero-text wow itfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".5s">
                    <p>Educaeet offers expert-led courses, modern tools, and a supportive environment to help learners grow, achieve success, and build a brighter future.</p>
                  </div>
                  <div className="it-hero-4-input-box mb-25 wow itfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".7s">
                    <form className="input-wrap p-relative" > 
                      <input type="text" placeholder="Search Here..." />
                      <button type="submit" className="it-btn-yellow border-radius-100">
                        <span>
                          <span className="text-1">Find Courses</span>
                          <span className="text-2">Find Courses</span>
                        </span>
                        <i>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                          </svg>
                        </i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-hero-4-thumb-box">
            <div className="it-hero-4-thumb">
              <img className="thumb-1" src="assets/img/hero/hero-6-2.png" alt="" />
            </div>
            <div className="it-hero-4-ratting-wrap">
              <div className="it-hero-4-ratting-box">
                <div className="it-hero-4-ratting-avatar d-flex align-items-center mb-15">
                  <img src="assets/img/hero/ratting.png" alt="" />
                  <i>4.9</i>
                </div>
                <div className="it-hero-ratting-content d-flex align-items-center">
                  <span>12k Reviews On</span>
                  <div className="ratting">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0309 5.03788C13.9168 4.68668 13.614 4.43226 13.2491 4.37897L9.55423 3.84192L7.90168 0.4963C7.57556 -0.165433 6.49301 -0.165433 6.1669 0.4963L4.51435 3.84192L0.828207 4.37897C0.463497 4.43211 0.160685 4.68757 0.0474275 5.03788C-0.0667206 5.38908 0.0290213 5.77324 0.293239 6.02959L2.96555 8.62739L2.33573 12.304C2.27384 12.6668 2.42287 13.0345 2.72078 13.2512C3.01973 13.467 3.41443 13.4951 3.74054 13.3238L7.03392 11.5871L10.3371 13.3238C10.4784 13.3983 10.6332 13.4351 10.787 13.4351C10.9872 13.4351 11.1875 13.3732 11.3579 13.2514C11.656 13.0336 11.8048 12.667 11.7429 12.3042L11.1131 8.62754L13.7854 6.02974C14.0494 5.77413 14.1451 5.38819 14.0309 5.03788Z" fill="#F8C62F" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0309 5.03788C13.9168 4.68668 13.614 4.43226 13.2491 4.37897L9.55423 3.84192L7.90168 0.4963C7.57556 -0.165433 6.49301 -0.165433 6.1669 0.4963L4.51435 3.84192L0.828207 4.37897C0.463497 4.43211 0.160685 4.68757 0.0474275 5.03788C-0.0667206 5.38908 0.0290213 5.77324 0.293239 6.02959L2.96555 8.62739L2.33573 12.304C2.27384 12.6668 2.42287 13.0345 2.72078 13.2512C3.01973 13.467 3.41443 13.4951 3.74054 13.3238L7.03392 11.5871L10.3371 13.3238C10.4784 13.3983 10.6332 13.4351 10.787 13.4351C10.9872 13.4351 11.1875 13.3732 11.3579 13.2514C11.656 13.0336 11.8048 12.667 11.7429 12.3042L11.1131 8.62754L13.7854 6.02974C14.0494 5.77413 14.1451 5.38819 14.0309 5.03788Z" fill="#F8C62F" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0309 5.03788C13.9168 4.68668 13.614 4.43226 13.2491 4.37897L9.55423 3.84192L7.90168 0.4963C7.57556 -0.165433 6.49301 -0.165433 6.1669 0.4963L4.51435 3.84192L0.828207 4.37897C0.463497 4.43211 0.160685 4.68757 0.0474275 5.03788C-0.0667206 5.38908 0.0290213 5.77324 0.293239 6.02959L2.96555 8.62739L2.33573 12.304C2.27384 12.6668 2.42287 13.0345 2.72078 13.2512C3.01973 13.467 3.41443 13.4951 3.74054 13.3238L7.03392 11.5871L10.3371 13.3238C10.4784 13.3983 10.6332 13.4351 10.787 13.4351C10.9872 13.4351 11.1875 13.3732 11.3579 13.2514C11.656 13.0336 11.8048 12.667 11.7429 12.3042L11.1131 8.62754L13.7854 6.02974C14.0494 5.77413 14.1451 5.38819 14.0309 5.03788Z" fill="#F8C62F" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0309 5.03788C13.9168 4.68668 13.614 4.43226 13.2491 4.37897L9.55423 3.84192L7.90168 0.4963C7.57556 -0.165433 6.49301 -0.165433 6.1669 0.4963L4.51435 3.84192L0.828207 4.37897C0.463497 4.43211 0.160685 4.68757 0.0474275 5.03788C-0.0667206 5.38908 0.0290213 5.77324 0.293239 6.02959L2.96555 8.62739L2.33573 12.304C2.27384 12.6668 2.42287 13.0345 2.72078 13.2512C3.01973 13.467 3.41443 13.4951 3.74054 13.3238L7.03392 11.5871L10.3371 13.3238C10.4784 13.3983 10.6332 13.4351 10.787 13.4351C10.9872 13.4351 11.1875 13.3732 11.3579 13.2514C11.656 13.0336 11.8048 12.667 11.7429 12.3042L11.1131 8.62754L13.7854 6.02974C14.0494 5.77413 14.1451 5.38819 14.0309 5.03788Z" fill="#F8C62F" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0311 5.03773C13.9169 4.68653 13.6141 4.43211 13.2493 4.37882L9.55438 3.84192L7.90183 0.4963C7.57571 -0.165433 6.49316 -0.165433 6.16704 0.4963L4.51449 3.84192L0.828203 4.37882C0.463493 4.43211 0.160685 4.68742 0.0474273 5.03773C-0.0667208 5.38894 0.029022 5.77309 0.29324 6.02944L2.96555 8.62724L2.33573 12.3039C2.27383 12.6667 2.42286 13.0343 2.72078 13.2511C3.01973 13.4667 3.41547 13.4949 3.74054 13.3236L7.03406 11.5869L10.3372 13.3236C10.4785 13.3982 10.6334 13.435 10.7871 13.435C10.9874 13.435 11.1876 13.3731 11.358 13.2512C11.6561 13.0334 11.805 12.6668 11.7431 12.304L11.1133 8.62739L13.7856 6.02959C14.0495 5.77398 14.1452 5.3879 14.0311 5.03773ZM9.39659 7.59486C9.1683 7.81737 9.06276 8.13769 9.11694 8.45208L9.50198 10.6987L7.48279 9.63735C7.34252 9.56284 7.1877 9.52602 7.03288 9.52602C6.87806 9.52602 6.72324 9.56284 6.58296 9.63735L4.57446 10.6959L4.95951 8.45223C5.01368 8.13784 4.9083 7.81662 4.67985 7.595L3.05061 6.01118L5.29616 5.68418C5.61055 5.63875 5.88249 5.44029 6.0238 5.155L7.03288 3.11057L8.04195 5.155C8.18327 5.44133 8.45505 5.63875 8.77048 5.68418L11.0248 6.01222L9.39659 7.59486Z" fill="#F8C62F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* <!-- hero-area-end --> */}
    </>
  )
}

