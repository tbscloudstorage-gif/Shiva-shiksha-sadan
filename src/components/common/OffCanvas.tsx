import { Link } from "react-router-dom";
import MobileMenu from "@/layouts/headers/MobileMenu";


interface OffCanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}


export default function OffCanvas({ offCanvasOpen, setOffCanvasOpen }: OffCanvasProps) {
  return (
    <>
      {/* <!-- it-offcanvas-area-start --> */}
      <div className="it-offcanvas-area">
        <div className={`itoffcanvas  ${offCanvasOpen ? "opened" : ""}`}>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setOffCanvasOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img src="assets/img/logo/logo-black.png" alt="" />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non.
              Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            <MobileMenu />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fal fa-envelope"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:info@shivashikshasadan.com" className="border-line">info@shivashikshasadan.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fal fa-phone-alt"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:0130-2242451">0130-2242451 / 2253385</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#"><i className="fas fa-map-marker-alt"></i></a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a href="https://maps.app.goo.gl/QHimyUV1UwvKJK2e9" target="_blank">Dev Nagar , Sonipat -131001, Haryana , India
 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${offCanvasOpen ? "apply" : ""}`} onClick={() => setOffCanvasOpen(false)} style={{cursor: 'pointer'}}></div>
      {/* <!-- it-offcanvas-area-end --> */}
    </>
  )
}
