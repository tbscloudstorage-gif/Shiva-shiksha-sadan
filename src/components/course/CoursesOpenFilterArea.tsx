import { Link } from "react-router-dom";


export default function CoursesOpenFilterArea() {
  return (
    <>
      {/* <!-- course-area-start --> */}
      <div className="it-course-area it-course-filter-open-style pt-130 pb-130">
        <div className="container">
          <div className="p-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="it-course-filter-top-right pb-30 d-flex align-items-center">
                  <div className="it-course-filter-tab">
                    <ul className="nav nav-tab" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="List-tab" data-bs-toggle="tab" data-bs-target="#List" type="button" role="tab" aria-controls="List" aria-selected="false">
                          <span>
                            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.92857 1.85714H19.5C19.7462 1.85714 19.9824 1.75931 20.1566 1.58517C20.3307 1.41103 20.4285 1.17484 20.4285 0.92857C20.4285 0.682298 20.3307 0.446113 20.1566 0.271972C19.9824 0.0978314 19.7462 0 19.5 0H0.92857C0.682298 0 0.446112 0.0978314 0.271972 0.271972C0.0978312 0.446113 0 0.682298 0 0.92857C0 1.17484 0.0978312 1.41103 0.271972 1.58517C0.446112 1.75931 0.682298 1.85714 0.92857 1.85714Z" fill="currentcolor" />
                              <path d="M19.5 5.57141H0.92857C0.682298 5.57141 0.446112 5.66924 0.271972 5.84338C0.0978312 6.01752 0 6.25371 0 6.49998C0 6.74625 0.0978312 6.98244 0.271972 7.15658C0.446112 7.33072 0.682298 7.42855 0.92857 7.42855H19.5C19.7462 7.42855 19.9824 7.33072 20.1566 7.15658C20.3307 6.98244 20.4285 6.74625 20.4285 6.49998C20.4285 6.25371 20.3307 6.01752 20.1566 5.84338C19.9824 5.66924 19.7462 5.57141 19.5 5.57141Z" fill="currentcolor" />
                              <path d="M19.5 11.1429H0.92857C0.682298 11.1429 0.446112 11.2407 0.271972 11.4149C0.0978312 11.589 0 11.8252 0 12.0715C0 12.3177 0.0978312 12.5539 0.271972 12.7281C0.446112 12.9022 0.682298 13 0.92857 13H19.5C19.7462 13 19.9824 12.9022 20.1566 12.7281C20.3307 12.5539 20.4285 12.3177 20.4285 12.0715C20.4285 11.8252 20.3307 11.589 20.1566 11.4149C19.9824 11.2407 19.7462 11.1429 19.5 11.1429Z" fill="currentcolor" />
                            </svg>
                          </span>
                          List
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Grid-tab" data-bs-toggle="tab" data-bs-target="#Grid" type="button" role="tab" aria-controls="Grid" aria-selected="true">
                          <span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1355_675)">
                                <path d="M5.25 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 5.25C0 6.04565 0.316071 6.80871 0.87868 7.37132C1.44129 7.93393 2.20435 8.25 3 8.25H5.25C6.04565 8.25 6.80871 7.93393 7.37132 7.37132C7.93393 6.80871 8.25 6.04565 8.25 5.25V3C8.25 2.20435 7.93393 1.44129 7.37132 0.87868C6.80871 0.316071 6.04565 0 5.25 0ZM6.75 5.25C6.75 5.64782 6.59196 6.02936 6.31066 6.31066C6.02936 6.59196 5.64782 6.75 5.25 6.75H3C2.60218 6.75 2.22064 6.59196 1.93934 6.31066C1.65804 6.02936 1.5 5.64782 1.5 5.25V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.25C5.64782 1.5 6.02936 1.65804 6.31066 1.93934C6.59196 2.22064 6.75 2.60218 6.75 3V5.25Z" fill="currentcolor" />
                                <path d="M15 0H12.75C11.9544 0 11.1913 0.316071 10.6287 0.87868C10.0661 1.44129 9.75 2.20435 9.75 3V5.25C9.75 6.04565 10.0661 6.80871 10.6287 7.37132C11.1913 7.93393 11.9544 8.25 12.75 8.25H15C15.7956 8.25 16.5587 7.93393 17.1213 7.37132C17.6839 6.80871 18 6.04565 18 5.25V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16.5 5.25C16.5 5.64782 16.342 6.02936 16.0607 6.31066C15.7794 6.59196 15.3978 6.75 15 6.75H12.75C12.3522 6.75 11.9706 6.59196 11.6893 6.31066C11.408 6.02936 11.25 5.64782 11.25 5.25V3C11.25 2.60218 11.408 2.22064 11.6893 1.93934C11.9706 1.65804 12.3522 1.5 12.75 1.5H15C15.3978 1.5 15.7794 1.65804 16.0607 1.93934C16.342 2.22064 16.5 2.60218 16.5 3V5.25Z" fill="currentcolor" />
                                <path d="M5.25 9.75H3C2.20435 9.75 1.44129 10.0661 0.87868 10.6287C0.316071 11.1913 0 11.9544 0 12.75L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H5.25C6.04565 18 6.80871 17.6839 7.37132 17.1213C7.93393 16.5587 8.25 15.7956 8.25 15V12.75C8.25 11.9544 7.93393 11.1913 7.37132 10.6287C6.80871 10.0661 6.04565 9.75 5.25 9.75ZM6.75 15C6.75 15.3978 6.59196 15.7794 6.31066 16.0607C6.02936 16.342 5.64782 16.5 5.25 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V12.75C1.5 12.3522 1.65804 11.9706 1.93934 11.6893C2.22064 11.408 2.60218 11.25 3 11.25H5.25C5.64782 11.25 6.02936 11.408 6.31066 11.6893C6.59196 11.9706 6.75 12.3522 6.75 12.75V15Z" fill="currentcolor" />
                                <path d="M15 9.75H12.75C11.9544 9.75 11.1913 10.0661 10.6287 10.6287C10.0661 11.1913 9.75 11.9544 9.75 12.75V15C9.75 15.7956 10.0661 16.5587 10.6287 17.1213C11.1913 17.6839 11.9544 18 12.75 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15V12.75C18 11.9544 17.6839 11.1913 17.1213 10.6287C16.5587 10.0661 15.7956 9.75 15 9.75ZM16.5 15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5H12.75C12.3522 16.5 11.9706 16.342 11.6893 16.0607C11.408 15.7794 11.25 15.3978 11.25 15V12.75C11.25 12.3522 11.408 11.9706 11.6893 11.6893C11.9706 11.408 12.3522 11.25 12.75 11.25H15C15.3978 11.25 15.7794 11.408 16.0607 11.6893C16.342 11.9706 16.5 12.3522 16.5 12.75V15Z" fill="currentcolor" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1355_675">
                                  <rect width="18" height="18" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          Grid
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="it-course-filter-result">
                    <span>We Found <b>25</b> Courses Available For you</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="it-course-filter-top-right pb-30 d-flex justify-content-lg-end align-items-center">
                  <div className="it-course-filter-search p-relative">
                    <form > 
                      <input type="text" placeholder="Search keywords" />
                      <button className="icon" type="submit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.0287 15.9398L13.7295 12.6593C14.6152 11.4885 15.087 9.90002 15.1238 7.91252C15.045 3.34127 12.4935 0.807771 7.93275 0.777771C3.31725 0.807021 0.75 3.48677 0.75 7.91177C0.75 12.558 3.3195 15.0458 7.94175 15.0728C9.9135 15.0608 11.496 14.6033 12.669 13.719L15.9713 17.0033C16.3597 17.3723 16.8195 17.2215 17.0317 17.0003C17.319 16.7018 17.3228 16.2315 17.0287 15.9398ZM2.25 7.92527C2.32275 4.14902 4.18425 2.30102 7.932 2.27777C11.6438 2.30177 13.5593 4.20602 13.6238 7.91177C13.5533 11.7518 11.745 13.5503 7.94175 13.5728C4.134 13.5503 2.325 11.7563 2.25 7.92527Z" fill="#03594E" />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div className="it-course-filter-button it-course-filter-open-button">
                    <span>
                      <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.65625 3.48016H11.3414C11.6361 4.67101 12.7133 5.55666 13.994 5.55666C15.2746 5.55666 16.3518 4.67101 16.6466 3.48016H20.3438C20.7062 3.48016 21 3.18633 21 2.82391C21 2.4615 20.7062 2.16766 20.3438 2.16766H16.6465C16.3518 0.976817 15.2746 0.0911255 13.9939 0.0911255C12.7132 0.0911255 11.636 0.976817 11.3413 2.16766H0.65625C0.293836 2.16766 0 2.4615 0 2.82391C0 3.18633 0.293836 3.48016 0.65625 3.48016ZM13.994 1.40363C14.7771 1.40363 15.4142 2.04076 15.4142 2.82387C15.4142 3.60703 14.7771 4.24416 13.994 4.24416C13.2108 4.24416 12.5737 3.60703 12.5737 2.82387C12.5737 2.04076 13.2108 1.40363 13.994 1.40363ZM0.65625 9.15623H4.35348C4.64822 10.3471 5.72541 11.2327 7.00608 11.2327C8.28676 11.2327 9.36395 10.3471 9.65869 9.15623H20.3438C20.7062 9.15623 21 8.8624 21 8.49998C21 8.13757 20.7062 7.84373 20.3438 7.84373H9.65865C9.36391 6.65289 8.28671 5.7672 7.00604 5.7672C5.72537 5.7672 4.64818 6.65289 4.35344 7.84373H0.65625C0.293836 7.84373 0 8.13757 0 8.49998C0 8.8624 0.293795 9.15623 0.65625 9.15623ZM7.00604 7.0797C7.7892 7.0797 8.42633 7.71683 8.42633 8.49998C8.42633 9.2831 7.7892 9.92023 7.00604 9.92023C6.22289 9.92023 5.58575 9.2831 5.58575 8.49998C5.58575 7.71683 6.22289 7.0797 7.00604 7.0797ZM20.3438 13.5198H16.6465C16.3518 12.329 15.2746 11.4433 13.9939 11.4433C12.7132 11.4433 11.6361 12.329 11.3413 13.5198H0.65625C0.293836 13.5198 0 13.8136 0 14.1761C0 14.5385 0.293836 14.8323 0.65625 14.8323H11.3414C11.6361 16.0232 12.7133 16.9088 13.994 16.9088C15.2746 16.9088 16.3518 16.0232 16.6466 14.8323H20.3438C20.7062 14.8323 21 14.5385 21 14.1761C21 13.8136 20.7062 13.5198 20.3438 13.5198ZM13.994 15.5963C13.2108 15.5963 12.5737 14.9592 12.5737 14.1761C12.5737 13.3929 13.2108 12.7558 13.994 12.7558C14.7771 12.7558 15.4142 13.3929 15.4142 14.1761C15.4142 14.9592 14.7771 15.5963 13.994 15.5963Z" fill="#1F2432" />
                      </svg>
                    </span>
                    Filter
                  </div>
                </div>
              </div>
            </div>
            <div className="it-course-filter-dropdown-area it-course-filter-dropdown-wrapper it-course-filter-dropdown-style-2">
              <div className="row mb-25 gx-0">
                <div className="col-12">
                  <div className="d-flex-wrap d-md-flex">
                    <div className="filter-group sort-group mr-20">
                      <h4 className="filter-title">Sort by</h4>
                      <div className="sort-options">
                        <label>
                          <input type="checkbox" name="sort" value="latest" />
                          <span>Latest</span>
                        </label>
                        <label className="sort-option">
                          <input type="checkbox" name="sort" value="trending" />
                          <span>Trending</span>
                        </label>

                        <label className="sort-option">
                          <input type="checkbox" name="sort" value="popularity" />
                          <span>Popularity</span>
                        </label>

                        <label className="sort-option">
                          <input type="checkbox" name="sort" value="price-low-high" />
                          <span>Price: Low to High</span>
                        </label>

                        <label className="sort-option">
                          <input type="checkbox" name="sort" value="price-high-low" />
                          <span>Price: High to Low</span>
                        </label>
                      </div>
                    </div>
                    <div className="filter-group language-group">
                      <h4 className="filter-title">Language</h4>
                      <div className="filter-tags sort-options">
                        <label className="language-option">
                          <input type="checkbox" name="language" value="english" />
                          <span>ðŸ‡¬ðŸ‡§ English <i className="count">(21)</i></span>
                        </label>

                        <label className="language-option">
                          <input type="checkbox" name="language" value="russian" />
                          <span>ðŸ‡·ðŸ‡º Russian <i className="count">(1)</i></span>
                        </label>

                        <label className="language-option">
                          <input type="checkbox" name="language" value="german" />
                          <span>ðŸ‡©ðŸ‡ª German <i className="count">(5)</i></span>
                        </label>

                        <label className="language-option">
                          <input type="checkbox" name="language" value="italian" />
                          <span>ðŸ‡®ðŸ‡¹ Italian <i className="count">(6)</i></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-25">
                <div className="col-12">
                  <div className="filter-group categories-group">
                    <h4 className="filter-title">Categories</h4>
                    <div className="filter-tags sort-options">
                      <label className="category-option">
                        <input type="checkbox" name="category" value="design" />
                        <span>Design <i className="count">(9)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="business" />
                        <span>Business <i className="count">(12)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="development" />
                        <span>Development <i className="count">(10)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="music" />
                        <span>Music <i className="count">(8)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="marketing" />
                        <span>Marketing <i className="count">(8)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="data-science" />
                        <span>Data Science <i className="count">(8)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="lifestyle" />
                        <span>Lifestyle <i className="count">(9)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="development-2" />
                        <span>Development <i className="count">(10)</i></span>
                      </label>

                      <label className="category-option">
                        <input type="checkbox" name="category" value="business-2" />
                        <span>Business <i className="count">(12)</i></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-0">
                <div className="col-12">
                  <div className="d-flex-wrap d-md-flex">
                    <div className="filter-group price-group">
                      <h4 className="filter-title">Price</h4>
                      <div className="filter-tags sort-options">
                        <label className="price-option">
                          <input type="checkbox" name="price" value="all" />
                          <span>All <i className="count">(20)</i></span>
                        </label>

                        <label className="price-option">
                          <input type="checkbox" name="price" value="free" />
                          <span>Free <i className="count">(2)</i></span>
                        </label>

                        <label className="price-option">
                          <input type="checkbox" name="price" value="paid" />
                          <span>Paid <i className="count">(18)</i></span>
                        </label>
                      </div>
                    </div>
                    <div className="filter-group instructors-group">
                      <h4 className="filter-title">Instructors</h4>
                      <div className="filter-tags sort-options">
                        <label className="instructor-option">
                          <input type="checkbox" name="instructor" value="madison-clark" />
                          <span>Madison Clark <i className="count">(9)</i></span>
                        </label>

                        <label className="instructor-option">
                          <input type="checkbox" name="instructor" value="emilee-logand" />
                          <span>Emilee Logand <i className="count">(6)</i></span>
                        </label>

                        <label className="instructor-option">
                          <input type="checkbox" name="instructor" value="michael-johnson" />
                          <span>Michael Johnson <i className="count">(7)</i></span>
                        </label>

                        <label className="instructor-option">
                          <input type="checkbox" name="instructor" value="james-anderson" />
                          <span>James Anderson <i className="count">(8)</i></span>
                        </label>

                        <label className="instructor-option">
                          <input type="checkbox" name="instructor" value="benjamin-miller" />
                          <span>Benjamin Miller <i className="count">(9)</i></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content " id="myTabContent">
            <div className="tab-pane fade show active" id="Grid" role="tabpanel" aria-labelledby="Grid-tab">
              <div className="row gx-35">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-1.jpg" alt="" /></Link>
                      <span className="course-category">Design</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-1.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Design Thinking Researching for Better UX</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-2.jpg" alt="" /></Link>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-3.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Discover Highly Rated Learning Programs</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-3.jpg" alt="" /></Link>
                      <span className="course-category">Business</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-4.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Boost Your Skills with Popular Courses</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-4.jpg" alt="" /></Link>
                      <span className="course-category">Technology</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-5.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Learn from the Best â€“ Student Favorite Programs</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-5.jpg" alt="" /></Link>
                      <span className="course-category">Cooking</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-6.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Upgrade Your Knowledge with Expert Courses</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-6.jpg" alt="" /></Link>
                      <span className="course-category">Design</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-1.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Discover Highly Rated Learning Programs</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-7.jpg" alt="" /></Link>
                      <span className="course-category">Technology</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-2.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">First Aid and Child Safety Essentials Course</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-8.jpg" alt="" /></Link>
                      <span className="course-category">Cooking</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-3.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Boost Your Skills with Popular Courses</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="it-course-item mb-35">
                    <div className="it-course-thumb z-index-1 border-radius-20">
                      <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-1-9.jpg" alt="" /></Link>
                      <span className="course-category">Design</span>
                      <button className="wishlist-btn">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                        </svg>
                      </button>
                    </div>
                    <div className="it-course-content p-relative">
                      <div className="d-flex justify-content-between align-items-center mb-20">
                        <div className="it-course-author">
                          <img src="assets/img/avatar/avatar-1-1.png" alt="" />
                          <span>Samantha</span>
                        </div>
                        <div className="it-course-price-box">
                          <del>$20.00</del>
                          <span>$9.00</span>
                        </div>
                      </div>
                      <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Design Thinking Researching for Better UX</Link></h5>
                      <div className="it-course-rating mb-10">
                        <div>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-regular fa-star"></i>
                          <span>(4.7/5 Customer Rating)</span>
                        </div>
                      </div>
                      <div className="it-course-meta mb-30 d-flex justify-content-between">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                          </svg>
                          20 Lessons
                        </span>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                          </svg>
                          50 Sutudents
                        </span>
                      </div>
                      <div className="it-course-btn">
                        <Link to="/courses-details-v2" className="it-btn-yellow w-100">
                          <span>
                            <span className="text-1">Preview This Course</span>
                            <span className="text-2">Preview This Course</span>
                          </span>
                          <i>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="List" role="tabpanel" aria-labelledby="List-tab">
              <div className="it-course-style-2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-1.jpg" alt="" /></Link>
                            <span className="course-category">Arts</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-1.jpg" alt="" />
                                <span>Samantha</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Early Childhood Care and Education Foundation Course</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-2.jpg" alt="" /></Link>
                            <span className="course-category">Development</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-2.png" alt="" />
                                <span>William</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Professional Training for Daycare and Preschool Teachers</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-3.jpg" alt="" /></Link>
                            <span className="course-category">Design</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-3.png" alt="" />
                                <span>Shannon</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Boost Your Skills with Popular Courses</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-4.jpg" alt="" /></Link>
                            <span className="course-category">Design</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-5.png" alt="" />
                                <span>Claire</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Health, Hygiene, and Nutrition for Children</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-1.jpg" alt="" /></Link>
                            <span className="course-category">Arts</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-1.jpg" alt="" />
                                <span>Samantha</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Design Thinking Researching for Better UX</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-2.jpg" alt="" /></Link>
                            <span className="course-category">Development</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-2.png" alt="" />
                                <span>William</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Creative Arts and Play-Based Learning Program</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-3.jpg" alt="" /></Link>
                            <span className="course-category">Design</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-3.png" alt="" />
                                <span>Shannon</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">First Aid and Child Safety Essentials Course</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-course-item mb-35">
                      <div className="row gx-0">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-5">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v2"><img className="w-100" src="assets/img/course/course-2-4.jpg" alt="" /></Link>
                            <span className="course-category">Design</span>
                            <button className="wishlist-btn">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6811 4.50134C13.3564 2.47755 11.9261 0.859544 10.0381 0.378868C9.06325 0.130895 8.04117 0.00363597 6.99804 0C5.95853 0.00290878 4.93718 0.130168 3.96232 0.378868C2.07436 0.859544 0.644035 2.47755 0.319325 4.50134C-0.155754 7.46102 -0.101273 10.5952 0.486402 14.0829C0.638224 14.9875 1.28038 15.7103 2.1717 15.9234C3.27005 16.1859 4.09235 15.695 4.53692 15.1395C4.99675 14.565 6.75178 12.3267 6.75178 12.3267C6.83459 12.2212 6.94355 12.2052 7.00021 12.2052C7.05688 12.2052 7.16584 12.2205 7.24865 12.3267C7.24865 12.3267 9.00441 14.5657 9.46351 15.1395C10.0359 15.8536 10.9418 16.1546 11.8287 15.9234C12.7157 15.6929 13.3615 14.9875 13.5133 14.0836C14.101 10.596 14.1562 7.46175 13.6804 4.50206L13.6811 4.50134ZM12.0808 13.8414C11.9973 14.3396 11.5868 14.4835 11.4626 14.5155C11.3399 14.5483 10.9113 14.6224 10.5967 14.229C10.1398 13.6589 9.65601 13.0415 9.16785 12.4176L8.38913 11.425C8.05134 10.9959 7.54503 10.7501 6.99949 10.7501C6.45395 10.7501 5.94836 10.9959 5.60985 11.425L4.83112 12.4176C4.34297 13.0408 3.85917 13.6589 3.40225 14.229C3.08844 14.6224 2.66058 14.5483 2.53636 14.5155C2.41287 14.4835 2.00244 14.3396 1.91818 13.8407C1.35738 10.5123 1.3029 7.53228 1.75255 4.73186C1.98573 3.2811 2.99328 2.12559 4.31972 1.78817C5.17908 1.56929 6.08129 1.4573 6.99731 1.45439C7.91768 1.4573 8.8199 1.56929 9.67925 1.78817C11.0057 2.12559 12.0132 3.2811 12.2464 4.73186C12.6961 7.53228 12.6416 10.5123 12.0808 13.8407V13.8414Z" fill="currentcolor" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-7">
                          <div className="it-course-content p-relative">
                            <div className="d-flex justify-content-between align-items-center mb-20">
                              <div className="it-course-author">
                                <img src="assets/img/avatar/avatar-1-5.png" alt="" />
                                <span>Claire</span>
                              </div>
                              <div className="it-course-price-box">
                                <del>$20.00</del>
                                <span>$9.00</span>
                              </div>
                            </div>
                            <h5 className="it-course-title mb-20"><Link className="border-line" to="/courses-details-v2">Parent Communication and Relationship Building Skills</Link></h5>
                            <div className="it-course-rating mb-10">
                              <div>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-regular fa-star"></i>
                                <span>(4.7/5 Customer Rating)</span>
                              </div>
                            </div>
                            <div className="it-course-meta d-flex justify-content-between">
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.5 1.80239C18.0315 1.41066 17.4826 1.12688 16.8921 0.971189C16.3016 0.815501 15.684 0.791726 15.0833 0.901552L11.8983 1.47989C11.163 1.61492 10.4944 1.99324 10 2.55405C9.5043 1.99227 8.8338 1.61387 8.09667 1.47989L4.91667 0.901552C4.31596 0.79163 3.69844 0.815094 3.10781 0.970282C2.51718 1.12547 1.96789 1.40859 1.4988 1.7996C1.02972 2.19061 0.652322 2.67994 0.393318 3.23297C0.134315 3.78601 4.0677e-05 4.38921 0 4.99989L0 13.9941C4.78799e-05 14.9697 0.342481 15.9144 0.967611 16.6635C1.59274 17.4126 2.46092 17.9186 3.42083 18.0932L8.65917 19.0457C9.5458 19.2068 10.4542 19.2068 11.3408 19.0457L16.5833 18.0932C17.5425 17.9177 18.4097 17.4114 19.034 16.6624C19.6583 15.9134 20.0001 14.9691 20 13.9941V4.99989C20.0004 4.38942 19.8662 3.78638 19.6069 3.23371C19.3476 2.68104 18.9697 2.19233 18.5 1.80239ZM9.16667 17.4399C9.09667 17.4299 9.02667 17.4182 8.95667 17.4057L3.71917 16.4541C3.14314 16.3493 2.62216 16.0456 2.24707 15.596C1.87198 15.1465 1.66658 14.5795 1.66667 13.9941V4.99989C1.66667 4.33684 1.93006 3.70096 2.3989 3.23212C2.86774 2.76328 3.50363 2.49989 4.16667 2.49989C4.31758 2.50025 4.46816 2.51391 4.61667 2.54072L7.8 3.12405C8.18301 3.19414 8.52939 3.39611 8.77904 3.69492C9.02868 3.99373 9.16582 4.37052 9.16667 4.75989V17.4399ZM18.3333 13.9941C18.3334 14.5795 18.128 15.1465 17.7529 15.596C17.3778 16.0456 16.8569 16.3493 16.2808 16.4541L11.0433 17.4057C10.9733 17.4182 10.9033 17.4299 10.8333 17.4399V4.75989C10.8333 4.36956 10.9702 3.9916 11.2203 3.69189C11.4703 3.39219 11.8176 3.18975 12.2017 3.11989L15.3858 2.53655C15.7464 2.47094 16.117 2.48543 16.4714 2.57898C16.8258 2.67253 17.1553 2.84285 17.4365 3.07789C17.7178 3.31293 17.9439 3.60693 18.0988 3.93907C18.2538 4.27121 18.3339 4.63337 18.3333 4.99989V13.9941Z" fill="#6C757D" />
                                </svg>
                                20 Lessons
                              </span>
                              <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM6.66667 17.6367V17.5C6.66667 15.6617 8.16167 14.1667 10 14.1667C11.8383 14.1667 13.3333 15.6617 13.3333 17.5V17.6367C12.3117 18.0842 11.185 18.3333 10 18.3333C8.815 18.3333 7.68833 18.0842 6.66667 17.6367ZM14.9375 16.7092C14.5575 14.3267 12.4883 12.5 10 12.5C7.51167 12.5 5.44333 14.3267 5.0625 16.7092C3.00417 15.19 1.66667 12.7483 1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667C14.595 1.66667 18.3333 5.405 18.3333 10C18.3333 12.7483 16.9958 15.19 14.9375 16.7092ZM10 4.16667C8.16167 4.16667 6.66667 5.66167 6.66667 7.5C6.66667 9.33833 8.16167 10.8333 10 10.8333C11.8383 10.8333 13.3333 9.33833 13.3333 7.5C13.3333 5.66167 11.8383 4.16667 10 4.16667ZM10 9.16667C9.08083 9.16667 8.33333 8.41917 8.33333 7.5C8.33333 6.58083 9.08083 5.83333 10 5.83333C10.9192 5.83333 11.6667 6.58083 11.6667 7.5C11.6667 8.41917 10.9192 9.16667 10 9.16667Z" fill="#6C757D" />
                                </svg>
                                50 Sutudents
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="it-pagination text-center mt-45">
              <nav>
                <ul>
                  <li>
                    <Link to="/courses-open-filter">
                      <i className="fa-regular fa-arrow-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses-open-filter">1</Link>
                  </li>
                  <li className="current">
                    <Link to="/courses-open-filter">2</Link>
                  </li>
                  <li>
                    <Link to="/courses-open-filter">3</Link>
                  </li>
                  <li>
                    <Link to="/courses-open-filter">4</Link>
                  </li>
                  <li>
                    <Link to="/courses-open-filter">
                      <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- course-area-end --> */}
    </>
  )
}

