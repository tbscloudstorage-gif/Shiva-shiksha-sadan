 
import { Link } from "react-router-dom";
import InputRange from "@/ui/InputRange";
import { useState } from "react";




export default function CoursesGridSidebarArea() {

  // Set your actual max price
  const maxPrice = 500;

  // Default range
  const [priceValue, setPriceValue] = useState<number[]>([0, maxPrice]);

  // Handle slider change
  const handleChanges = (val: number[]) => {
    setPriceValue(val);
  };

  // Filter button click
  const handleFilter = () => {
    console.log("Selected Price Range:", priceValue);
  };

  return (
    <>
      {/* <!-- course-area-start --> */}
      <div className="it-course-area it-course-grid-sidebar-style pt-130 pb-130">
        <div className="container">
          <div className="p-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="it-course-filter-top-right d-flex align-items-center">
                  <div className="it-course-filter-tab">
                    <ul className="nav nav-tab" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="Grid-tab" data-bs-toggle="tab" data-bs-target="#Grid" type="button" role="tab" aria-controls="Grid" aria-selected="true">
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
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="List-tab" data-bs-toggle="tab" data-bs-target="#List" type="button" role="tab" aria-controls="List" aria-selected="false">
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
                    </ul>
                  </div>
                  <div className="it-course-filter-result">
                    <span>We Found <b>25</b> Courses Available For you</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="it-course-filter-top-right d-flex justify-content-lg-end align-items-center">
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
                  <div className="it-course-filter-button">
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
            <div className="it-course-filter-dropdown-area it-course-filter-dropdown-wrapper">
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
          <div className="mt-30">
            <div className="row">
              <div className="col-lg-4 order-1 order-lg-0">
                <div className="it-shop-sidebar">
                  <div className="sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Search here</h4>
                    <div className="sidebar-search-box p-relative">
                      <form > 
                        <div className="sidebar-search-input">
                          <input type="text" placeholder="Search keywords" />
                        </div>
                        <div className="sidebar-search-button">
                          <button type="submit">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.0287 15.9397L13.7295 12.6592C14.6152 11.4885 15.087 9.89996 15.1238 7.91246C15.045 3.34121 12.4935 0.80771 7.93275 0.77771C3.31725 0.80696 0.75 3.48671 0.75 7.91171C0.75 12.558 3.3195 15.0457 7.94175 15.0727C9.9135 15.0607 11.496 14.6032 12.669 13.719L15.9713 17.0032C16.3597 17.3722 16.8195 17.2215 17.0317 17.0002C17.319 16.7017 17.3228 16.2315 17.0287 15.9397ZM2.25 7.92521C2.32275 4.14896 4.18425 2.30096 7.932 2.27771C11.6438 2.30171 13.5593 4.20596 13.6238 7.91171C13.5533 11.7517 11.745 13.5502 7.94175 13.5727C4.134 13.5502 2.325 11.7562 2.25 7.92521Z" fill="#03594E" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Category --> */}
                  <div className="sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Category</h4>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Business
                        <span>
                          06
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list active mb-15">
                        Education
                        <span>
                          07
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Family & Divorce
                        <span>
                          09
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Online Marketing
                        <span>
                          06
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Islamic
                        <span>
                          05
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Quran
                        <span>
                          08
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list mb-15">
                        Resturent
                        <span>
                          06
                        </span>
                      </div>
                    </Link>
                    <Link to="/courses-details-v1">
                      <div className="sidebar-widget-list">
                        Web Design
                        <span>
                          05
                        </span>
                      </div>
                    </Link>
                  </div>
                  {/* <!-- filter --> */}
                  <div className="it-shop-widget sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">
                      Price Filter
                    </h4>

                    <div className="it-shop-widget-content">
                      <div className="it-shop-widget-filter">

                        <div className="slider-range">
                          <InputRange
                            MAX={maxPrice}
                            MIN={0}
                            STEP={1}
                            values={priceValue}
                            handleChanges={handleChanges}
                          />
                        </div>

                        <div className="it-shop-widget-filter-info d-flex align-items-center justify-content-between mt-25">

                          <button
                            className="it-shop-widget-filter-btn"
                            type="button"
                            onClick={handleFilter}
                          >
                            Filter
                          </button>

                          <span className="input-range text-end">
                            ${priceValue[0]} - ${priceValue[1]}
                          </span>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- status --> */}
                  <div className="it-shop-widget sidebar-widget mb-60">
                    <h3 className="sidebar-widget-title mb-25">Sold</h3>
                    <div className=" it-shop-widget-content">
                      <div className="it-shop-widget-checkbox">
                        <ul className="filter-items filter-checkbox">
                          <li className="filter-item checkbox">
                            <input id="on_sale" type="checkbox" />
                            <label htmlFor="on_sale">On sale</label>
                          </li>
                          <li className="filter-item checkbox">
                            <input id="in_stock" type="checkbox" />
                            <label htmlFor="in_stock">In Stock</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- rating --> */}
                  <div className="it-shop-widget sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Average Rating</h4>
                    <div className="it-shop-widget-content">
                      <div className="it-shop-widget-rating-list">
                        <ul>
                          <li>
                            <div className="it-shop-widget-rating">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                            </div>
                            <span className="it-shop-widget-rating">(05)</span>
                          </li>
                          <li>
                            <div className="it-shop-widget-rating">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                            </div>
                            <span className="it-shop-widget-rating">(04)</span>
                          </li>
                          <li>
                            <div className="it-shop-widget-rating">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                            </div>
                            <span className="it-shop-widget-rating">(03)</span>
                          </li>
                          <li>
                            <div className="it-shop-widget-rating">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                            </div>
                            <span className="it-shop-widget-rating">(02)</span>
                          </li>
                          <li>
                            <div className="it-shop-widget-rating">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M15.5741 6.24108L12.1247 9.60355L12.9393 14.3526C12.9748 14.5603 12.8895 14.7702 12.7189 14.8942C12.6226 14.9646 12.5079 15 12.3933 15C12.3053 15 12.2167 14.979 12.1358 14.9363L7.8707 12.6941L3.60615 14.9358C3.42008 15.0343 3.19359 15.0183 3.02303 14.8937C2.85247 14.7696 2.76719 14.5598 2.80264 14.3521L3.61723 9.603L0.167264 6.24108C0.0166393 6.09378 -0.0381835 5.87338 0.0271608 5.67347C0.0925052 5.47356 0.265834 5.32681 0.474604 5.29636L5.24198 4.60415L7.37397 0.283667C7.56059 -0.0945556 8.18081 -0.0945556 8.36743 0.283667L10.4994 4.60415L15.2668 5.29636C15.4756 5.32681 15.6489 5.47301 15.7142 5.67347C15.7796 5.87394 15.7248 6.09323 15.5741 6.24108Z"
                                  fill="#F1A300" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.32031 0.510742L10.4492 4.8252L10.5654 5.06152L10.8262 5.09863L15.5928 5.79004V5.79102C15.603 5.79251 15.6125 5.79728 15.6201 5.80371L15.6377 5.82812C15.6405 5.83685 15.6409 5.8469 15.6387 5.85645L15.6221 5.88379L12.1738 9.24512L11.9863 9.42871L12.0303 9.68848L12.8447 14.4375C12.8463 14.4476 12.8456 14.4577 12.8418 14.4668L12.8232 14.4902H12.8223C12.8143 14.496 12.8039 14.4999 12.792 14.5L12.7676 14.4941H12.7666L8.50195 12.252L8.26953 12.1289L8.03613 12.252L3.77148 14.4932L3.77051 14.4941C3.76203 14.4986 3.75248 14.5006 3.74316 14.5L3.7168 14.4902L3.71582 14.4893C3.70746 14.4832 3.70101 14.475 3.69727 14.4658L3.69434 14.4365L4.50879 9.6875L4.55273 9.42871L4.36426 9.24512L0.915039 5.88281H0.914062C0.9069 5.87545 0.902687 5.86642 0.900391 5.85742V5.8291C0.903674 5.81906 0.910268 5.81023 0.917969 5.80371L0.945312 5.79102L5.71191 5.09863L5.97266 5.06152L6.08887 4.8252L8.21777 0.510742C8.22591 0.506337 8.24465 0.5 8.26953 0.5C8.29421 0.500064 8.31222 0.50636 8.32031 0.510742Z"
                                  stroke="#797979" />
                              </svg>
                            </div>
                            <span className="it-shop-widget-rating">(01)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- product --> */}
                  <div className="it-shop-widget sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Recent Products</h4>
                    <div className="it-shop-widget-wrap d-flex align-items-center mb-10">
                      <div className="it-shop-widget-thumb">
                        <img src="assets/img/shop/details-sm-1-1.jpg" alt="" />
                      </div>
                      <div className="it-shop-widget-content">
                        <h5><a href="#">Powerstroke Engines Turbo Air Products</a></h5>
                        <div className="it-shop-widget-content-ratting">
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>

                        </div>
                      </div>
                    </div>
                    <div className="it-shop-widget-wrap d-flex align-items-center mb-10">
                      <div className="it-shop-widget-thumb">
                        <img src="assets/img/shop/details-sm-1-2.jpg" alt="" />
                      </div>
                      <div className="it-shop-widget-content">
                        <h5><a href="#">Powerstroke Engines Turbo Air Products</a></h5>
                        <div className="it-shop-widget-content-ratting">
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>

                        </div>
                      </div>
                    </div>
                    <div className="it-shop-widget-wrap d-flex align-items-center mb-10">
                      <div className="it-shop-widget-thumb">
                        <img src="assets/img/shop/details-1-3.jpg" alt="" />
                      </div>
                      <div className="it-shop-widget-content">
                        <h5><a href="#">Powerstroke Engines Turbo Air Products</a></h5>
                        <div className="it-shop-widget-content-ratting">
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>

                        </div>
                      </div>
                    </div>
                    <div className="it-shop-widget-wrap d-flex align-items-center">
                      <div className="it-shop-widget-thumb">
                        <img src="assets/img/shop/details-1-4.jpg" alt="" />
                      </div>
                      <div className="it-shop-widget-content">
                        <h5><a href="#">Powerstroke Engines Turbo Air Products</a></h5>
                        <div className="it-shop-widget-content-ratting">
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>
                          <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                              fill="#F1A300" />
                          </svg>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- tags --> */}
                  <div className="sidebar-widget tagcloud-widget">
                    <div className="sideba-widge-title-box">
                      <h3 className="sidebar-widget-title sm-border mb-35">Popular Tags</h3>
                    </div>
                    <div className="sidebar-widget-content">
                      <div className="tagcloud">
                        <a href="#">Business</a>
                        <a href="#">Education</a>
                        <a href="#">Students</a>
                        <a href="#">Art</a>
                        <a href="#">Modern</a>
                        <a href="#">School</a>
                        <a href="#">Tech</a>
                        <a href="#">Development</a>
                        <a href="#">UI UX Design</a>
                        <a href="#">Market</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 order-0 order-lg-1">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="Grid" role="tabpanel" aria-labelledby="Grid-tab">
                    <div className="row gx-35">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-1.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Design Thinking Researching for Better UX</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-2.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Discover Highly Rated Learning Programs</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-3.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Boost Your Skills with Popular Courses</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-4.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Learn from the Best â€“ Student Favorite Programs</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-5.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Upgrade Your Knowledge with Expert Courses</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-6.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Discover Highly Rated Learning Programs</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-7.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">First Aid and Child Safety Essentials Course</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="it-course-item mb-35">
                          <div className="it-course-thumb z-index-1 border-radius-20">
                            <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-4-8.jpg" alt="" /></Link>
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
                            <h5 className="it-course-title mb-20"><a className="border-line" href="#">Boost Your Skills with Popular Courses</a></h5>
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
                              <Link to="/courses-details-v1" className="it-btn-yellow w-100">
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
                      <div className="col-12">
                        <div className="it-pagination mt-30">
                          <nav>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-regular fa-arrow-left"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li className="current">
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                              <li className="current">
                                <a href="#">
                                  <i className="fa-regular fa-arrow-right"></i>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="List" role="tabpanel" aria-labelledby="List-tab">
                    <div className="it-course-style-2">
                      <div className="row">
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-2-1.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">Grow Personal Financial Security Thinking </Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-1.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">Learn Figma & Adobe XD for UI/UX Design </Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-2.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1"> Figma UI Design Bootcamp Build Stunning Interfaces</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-3.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">Master Figma from Scratch UI Design Essentials</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-4.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1"> Webflow Masterclass â€“ Build Modern Websites Without Code</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-5.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1"> Advanced Figma Design Techniques for Professionals</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-6.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">UI/UX Design for Beginners â€“ From Idea to Prototype</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-7.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">Adobe Creative Suite (AI, PS, ID) Complete Design Guide</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-8.jpg" alt="" /></Link>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1">Figma for Web & App Designers â€“ Practical Projects</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-course-item mb-30">
                            <div className="row gx-0">
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3">
                                <div className="it-course-thumb border-radius-20">
                                  <Link to="/courses-details-v1"><img className="w-100" src="assets/img/course/course-12-9.jpg" alt="" /></Link>
                                </div>                                4
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="it-course-content p-relative">
                                  <button className="wishlist-btn">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0108 3.37882C10.7673 1.86259 9.69455 0.65038 8.27858 0.290258C7.54744 0.104475 6.78088 0.00913277 5.99853 0.00640869C5.2189 0.00858795 4.45289 0.103931 3.72174 0.290258C2.30577 0.65038 1.23303 1.86259 0.989494 3.37882C0.633184 5.59622 0.674046 7.94437 1.1148 10.5573C1.22867 11.2351 1.71028 11.7766 2.37877 11.9362C3.20253 12.1329 3.81927 11.7652 4.15269 11.3489C4.49756 10.9185 5.81383 9.24158 5.81383 9.24158C5.87594 9.16258 5.95767 9.15059 6.00016 9.15059C6.04266 9.15059 6.12438 9.16203 6.18649 9.24158C6.18649 9.24158 7.50331 10.9191 7.84763 11.3489C8.27694 11.8839 8.95633 12.1095 9.62155 11.9362C10.2868 11.7635 10.7711 11.2351 10.885 10.5578C11.3257 7.94491 11.3671 5.59676 11.0103 3.37936L11.0108 3.37882ZM9.8106 10.3764C9.74795 10.7496 9.44013 10.8575 9.34696 10.8815C9.25489 10.906 8.93345 10.9616 8.69754 10.6668C8.35485 10.2397 7.99201 9.77713 7.62589 9.30968L7.04185 8.566C6.78851 8.24456 6.40877 8.06042 5.99962 8.06042C5.59046 8.06042 5.21127 8.24456 4.95738 8.566L4.37334 9.30968C4.00723 9.77658 3.64438 10.2397 3.30169 10.6668C3.06633 10.9616 2.74543 10.906 2.65227 10.8815C2.55965 10.8575 2.25183 10.7496 2.18863 10.3759C1.76804 7.88226 1.72717 5.64961 2.06441 3.55152C2.2393 2.46462 2.99496 1.5989 3.98979 1.34611C4.63431 1.18212 5.31097 1.09822 5.99798 1.09604C6.68826 1.09822 7.36492 1.18212 8.00944 1.34611C9.00427 1.5989 9.75993 2.46462 9.93482 3.55152C10.2721 5.64961 10.2312 7.88226 9.8106 10.3759V10.3764Z" fill="#03594E" />
                                    </svg>
                                  </button>
                                  <div className="d-flex align-items-center mb-20">
                                    <span className="course-category">Design</span>
                                    <div className="it-course-price-box">
                                      <del>$20.00</del>
                                      <span>$9.00</span>
                                    </div>
                                  </div>
                                  <h5 className="it-course-title mb-15"><Link className="border-line" to="/courses-details-v1"> Adobe XD & Figma Masterclass â€“ Design Real Projects</Link></h5>
                                  <p>Its done really well. Perect for my brain in the way it learns. Lectures are great and the coure really gives as much if not all things you need </p>
                                  <div className="it-course-meta d-flex">
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
                                    <span>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z" fill="#6C757D" />
                                      </svg>
                                      6 months
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="it-pagination mt-30">
                            <nav>
                              <ul>
                                <li>
                                  <Link to="/courses-grid-sidebar">
                                    <i className="fa-regular fa-arrow-left"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/courses-grid-sidebar">1</Link>
                                </li>
                                <li className="current">
                                  <Link to="/courses-grid-sidebar">2</Link>
                                </li>
                                <li>
                                  <Link to="/courses-grid-sidebar">3</Link>
                                </li>
                                <li>
                                  <Link to="/courses-grid-sidebar">4</Link>
                                </li>
                                <li className="current">
                                  <Link to="/courses-grid-sidebar">
                                    <i className="fa-regular fa-arrow-right"></i>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
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
      {/* <!-- course-area-end --> */}
    </>
  )
}

