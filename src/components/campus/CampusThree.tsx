import { Link } from "react-router-dom";

export default function CampusThree() {
  return (
    <>
      {/* <!-- campus-area-start --> */}
      <section className="it-campus-area it-blog-style-2 white-bg z-index-1 pt-130 pb-95">
        <div className="container">
          <div className="it-campus-section-title-wrap mb-70">
            <div className="row align-items-end">
              <div className="col-xl-8 col-lg-7">
                <div className="it-campus-section-title-box">
                  <span className="it-section-subtitle">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 1.66667H16.6667V0.833333C16.6667 0.61232 16.5789 0.400358 16.4226 0.244078C16.2663 0.0877975 16.0543 0 15.8333 0C13.3333 0 10.5708 0.133334 9.16667 1.46667C7.7625 0.133334 5 0 2.5 0C2.27899 0 2.06702 0.0877975 1.91074 0.244078C1.75446 0.400358 1.66667 0.61232 1.66667 0.833333V1.66667H0.833333C0.61232 1.66667 0.400358 1.75446 0.244078 1.91074C0.0877973 2.06702 0 2.27899 0 2.5V12.5C0 12.721 0.0877973 12.933 0.244078 13.0893C0.400358 13.2455 0.61232 13.3333 0.833333 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V2.5C18.3333 2.27899 18.2455 2.06702 18.0893 1.91074C17.933 1.75446 17.721 1.66667 17.5 1.66667ZM15.8333 0.833333V10.8333C13.5542 10.8333 11.0708 10.9417 9.58333 11.9583V2.22917C10.675 0.954167 13.375 0.833333 15.8333 0.833333ZM8.75 2.22917V11.9583C7.2625 10.9417 4.77917 10.8333 2.5 10.8333V0.833333C4.95833 0.833333 7.65833 0.954167 8.75 2.22917ZM0.833333 2.5H1.66667V10.8333C1.66667 11.0543 1.75446 11.2663 1.91074 11.4226C2.06702 11.5789 2.27899 11.6667 2.5 11.6667C4.53333 11.6667 6.72917 11.75 8.04583 12.5H0.833333V2.5ZM17.5 12.5H10.2875C11.6042 11.75 13.8 11.6667 15.8333 11.6667C16.0543 11.6667 16.2663 11.5789 16.4226 11.4226C16.5789 11.2663 16.6667 11.0543 16.6667 10.8333V2.5H17.5V12.5Z" fill="#03594E" />
                    </svg>
                    Campus
                  </span>
                  <h4 className="it-section-title">Growing Beyond the <br /> Classroom
                  </h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="it-campus-text">
                  <p className="mb-0">Enhance your knowledge and grow professionally by <br />
                    learning new skills anytime, anywhere. Access expert-led <br />
                    courses designed to help you succeed in your </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-35 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-campus-item p-relative">
                <h4 className="it-campus-title"><Link className="border-line" to="/about-us-v3">Sustainability</Link></h4>
                <div className="it-campus-thumb">
                  <img src="assets/img/blog/blog-1-2.jpg" alt="" />
                </div>
                <div className="it-campus-arrow">
                  <Link to="/about-us-v3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.0604 2.43985C19.0604 1.61142 18.3888 0.939849 17.5604 0.939849L4.0604 0.939848C3.23197 0.939848 2.5604 1.61142 2.5604 2.43985C2.5604 3.26828 3.23197 3.93985 4.0604 3.93985H16.0604V15.9398C16.0604 16.7683 16.732 17.4398 17.5604 17.4398C18.3888 17.4398 19.0604 16.7683 19.0604 15.9398L19.0604 2.43985ZM1.17285 18.8274L2.23351 19.8881L18.6211 3.50051L17.5604 2.43985L16.4997 1.37919L0.112191 17.7667L1.17285 18.8274Z" fill="currentcolor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-35 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-campus-item p-relative">
                <h4 className="it-campus-title"><Link className="border-line" to="/about-us-v3">Build Confidence
</Link></h4>
                <div className="it-campus-thumb">
                  <img src="assets/img/campus/campus-3-2.jpg" alt="" />
                </div>
                <div className="it-campus-arrow">
                  <Link to="/about-us-v3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.0604 2.43985C19.0604 1.61142 18.3888 0.939849 17.5604 0.939849L4.0604 0.939848C3.23197 0.939848 2.5604 1.61142 2.5604 2.43985C2.5604 3.26828 3.23197 3.93985 4.0604 3.93985H16.0604V15.9398C16.0604 16.7683 16.732 17.4398 17.5604 17.4398C18.3888 17.4398 19.0604 16.7683 19.0604 15.9398L19.0604 2.43985ZM1.17285 18.8274L2.23351 19.8881L18.6211 3.50051L17.5604 2.43985L16.4997 1.37919L0.112191 17.7667L1.17285 18.8274Z" fill="currentcolor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-35 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-campus-item p-relative">
                <h4 className="it-campus-title"><Link className="border-line" to="/about-us-v3">Career Guidance
</Link></h4>
                <div className="it-campus-thumb">
                  <img src="assets/img/campus/campus-3-3.jpg" alt="" />
                </div>
                <div className="it-campus-arrow">
                  <Link to="/about-us-v3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.0604 2.43985C19.0604 1.61142 18.3888 0.939849 17.5604 0.939849L4.0604 0.939848C3.23197 0.939848 2.5604 1.61142 2.5604 2.43985C2.5604 3.26828 3.23197 3.93985 4.0604 3.93985H16.0604V15.9398C16.0604 16.7683 16.732 17.4398 17.5604 17.4398C18.3888 17.4398 19.0604 16.7683 19.0604 15.9398L19.0604 2.43985ZM1.17285 18.8274L2.23351 19.8881L18.6211 3.50051L17.5604 2.43985L16.4997 1.37919L0.112191 17.7667L1.17285 18.8274Z" fill="currentcolor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- campus-area-end --> */}
    </>
  )
}
