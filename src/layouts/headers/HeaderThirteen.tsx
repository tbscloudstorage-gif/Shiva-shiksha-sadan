 
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import OffCanvas from "@/components/common/OffCanvas";

export default function HeaderThirteen() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  return (
    <>
      <header className="it-header-height" style={{ backgroundColor: `#272422` }}>
        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-area header-fashion-style it-header-ptb p-relative ${sticky ? "header-sticky" : ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-5 col-6">
                <div className="it-header-logo">
                  <Link to="/"><img src="assets/img/logo/logo-brown.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block">
                <div className="it-header-menu it-header-dropdown">
                  <nav className="it-menu-content">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-8 col-md-7 col-6">
                <div className="it-header-right-action d-flex justify-content-end align-items-center">
                  <Link to="/contact-us" className="it-btn-border style-2 d-none d-md-flex">
                    <span>
                      <span className="text-1">Get In Touch</span>
                      <span className="text-2">Get In Touch</span>
                    </span>
                  </Link>
                  <div className="it-header-bar d-xl-none">
                    <button className="it-menu-bar" onClick={() => setOffCanvasOpen(true)}>
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
        {/* <!-- header-area-end --> */}
      </header>
      <OffCanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
    </>
  )
}
