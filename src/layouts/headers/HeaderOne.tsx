
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  return (
    <>
      <header className="it-header-height">

        {/* Mobile Announcement Bar - Hidden on Desktop */}
        <div className="it-header-top-area black-bg it-header-top-ptb d-block d-md-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="it-header-top-contact-wrap d-flex justify-content-center align-items-center">
                  <ul
                    className="d-flex flex-wrap align-items-center justify-content-center"
                    style={{
                      gap: "8px 15px",
                      margin: 0,
                      padding: 0,
                      listStyle: "none"
                    }}
                  >
                    {/* Phone Number */}
               

                    {/* Email */}
                    <li>
                      <div className="it-header-top-contact d-flex align-items-center">
                        <span>
                          <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20 10C20 16 12 22 12 22S4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
    stroke="#d41a2e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="3"
    stroke="#d41a2e"
    strokeWidth="2"
  />
</svg>
                        </span>

                        <a
                          className="border-line"
                          href="https://www.google.com/maps/dir/?api=1&destination=Shiva+Shiksha+Sadan%2C+Dev+Nagar%2C+Sonipat%2C+Haryana&waypoints=Street+No+8%2C+Dev+Nagar%2C+Sonipat%2C+Haryana&travelmode=driving"
                        >
                          Get Direction Now
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Announcement Bar End */}

        {/* Main Header */}
        <div
          id="header-sticky"
          className={`it-header-area it-header-ptb p-relative ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">

              {/* Logo */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-6">
                <div className="it-header-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/logo-black.png"
                      alt="Shiva Shiksha Sadan"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                <div className="it-header-menu it-header-dropdown">
                  <nav className="it-menu-content">
                    <Navmenu />
                  </nav>
                </div>
              </div>

              {/* Right Actions */}
              <div className="col-xxl-4 col-xl-3 col-lg-8 col-md-7 col-6 d-flex justify-content-end">
                <div className="it-header-right-action d-flex justify-content-end align-items-center">

                  {/* Connect With Us Button */}
                  <Link
                    to="/contact-us"
                    className="it-btn-yellow d-none d-md-flex"
                  >
                    <span>
                      <span className="text-1 text-white">
                        Connect With Us
                      </span>
                      <span className="text-2 text-white">
                        Connect With Us
                      </span>
                    </span>

                    <i>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "white" }}
                      >
                        <path
                          d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                  </Link>

                  {/* Mobile Menu Button */}
                  <div className="it-header-bar d-xl-none">
                    <button
                      className="it-menu-bar"
                      onClick={() =>
                        setOffCanvasOpen(!offCanvasOpen)
                      }
                      aria-label="Open navigation menu"
                    >
                      <span>
                        <i className="fa-light fa-bars-staggered"></i>
                      </span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Main Header End */}

      </header>

      {/* Mobile Offcanvas Menu */}
      <OffCanvas
        offCanvasOpen={offCanvasOpen}
        setOffCanvasOpen={setOffCanvasOpen}
      />
    </>
  );
}
