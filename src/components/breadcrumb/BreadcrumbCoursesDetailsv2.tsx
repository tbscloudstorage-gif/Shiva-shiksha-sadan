import { Link } from "react-router-dom";


export default function BreadcrumbCoursesDetailsv2() {
  return (
    <>
      {/* <!-- breadcrumb-area-start --> */}
      <div className="it-breadcrumb-area it-breadcrumb-ptb it-breadcrumb-course-details-style fix z-index-1"
        style={{ backgroundImage: `url(/assets/img/shape/breadcrumb-details-bg.png)` }}>
        <img className="it-breadcrumb-shape-1" src="assets/img/shape/breadcrumb-1-1.png" alt="" />
        <img className="it-breadcrumb-shape-3" src="assets/img/shape/breadcrumb-1-2.png" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-12">
              <div className="it-breadcrumb-content z-index-1">
                <div className="it-breadcrumb-list-2 d-none d-md-block">
                  <span><Link to="/">Home</Link></span>
                  <span className="dvdr">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6364 8.1364C14.9879 7.78492 14.9879 7.21508 14.6364 6.8636L8.90883 1.13604C8.55736 0.784567 7.98751 0.784567 7.63604 1.13604C7.28457 1.48751 7.28457 2.05736 7.63604 2.40883L12.7272 7.5L7.63604 12.5912C7.28457 12.9426 7.28457 13.5125 7.63604 13.864C7.98751 14.2154 8.55736 14.2154 8.90883 13.864L14.6364 8.1364ZM0 7.5V8.4H14V7.5V6.6H0V7.5Z" fill="white" />
                    </svg>
                  </span>
                  <span>Courses</span>
                  <span className="dvdr">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6364 8.1364C14.9879 7.78492 14.9879 7.21508 14.6364 6.8636L8.90883 1.13604C8.55736 0.784567 7.98751 0.784567 7.63604 1.13604C7.28457 1.48751 7.28457 2.05736 7.63604 2.40883L12.7272 7.5L7.63604 12.5912C7.28457 12.9426 7.28457 13.5125 7.63604 13.864C7.98751 14.2154 8.55736 14.2154 8.90883 13.864L14.6364 8.1364ZM0 7.5V8.4H14V7.5V6.6H0V7.5Z" fill="white" />
                    </svg>
                  </span>
                  <span>Design Thinking Researching for Better UX</span>
                </div>
                <div className="it-breadcrumb-list-wrap">
                  <span className="it-breadcrumb-subtitle">Design</span>
                </div>
                <div className="it-breadcrumb-title-box">
                  <h3 className="it-section-title text-white">
                    Design Thinking Researching <br /> for Better UX
                  </h3>
                </div>
                <div className="it-breadcrumb-author-wrapper mt-20 d-none d-md-flex align-items-center">
                  <div className="border-style d-flex align-items-center mb-20">
                    <div className="it-breadcrumb-author">
                      <img src="assets/img/avatar/avatar-1-8.png" alt="" />
                    </div>
                    <div className="it-breadcrumb-author-info">
                      <span>Teacher</span>
                      <span className="name">Roboth smith</span>
                    </div>
                  </div>
                  <div className="it-breadcrumb-author-info border-style mb-20">
                    <span>Last Updated</span>
                    <span>June 08,2026</span>
                  </div>
                  <div className="it-breadcrumb-author-info mb-20">
                    <span>Review</span>
                    <span>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8895 7.48386C20.7195 6.96254 20.2687 6.58354 19.7255 6.50442L14.223 5.70487L11.7643 0.736734C11.2774 -0.245578 9.66836 -0.245578 9.18151 0.736734L6.72275 5.70487L1.23329 6.50442C0.691637 6.58354 0.240812 6.96386 0.0708685 7.48541C-0.0990748 8.0054 0.0421395 8.57733 0.435285 8.96031L4.41669 12.8409L3.47747 18.316C3.38532 18.8561 3.60719 19.4035 4.05072 19.7262C4.4958 20.0473 5.08497 20.0893 5.56894 19.8343L10.4723 17.2486L15.3901 19.8343C15.6005 19.9452 15.831 20 16.0599 20C16.358 20 16.6561 19.9063 16.9083 19.7264C17.352 19.4022 17.5737 18.8564 17.4816 18.3163L16.5439 12.8412L20.5253 8.96053C20.9184 8.57866 21.0594 8.0054 20.8895 7.48386Z" fill="#F8C62F" />
                      </svg>
                      (4.7) Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb-area-end --> */}
    </>
  )
}
