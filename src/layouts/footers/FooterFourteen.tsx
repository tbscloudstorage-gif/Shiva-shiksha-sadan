import { Link } from "react-router-dom";


export default function FooterFourteen() {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <section className="it-footer-wrap it-footer-style-6 fix">
          <div className="it-footer-area theme-4-bg z-index-1 pt-130 pb-80" style={{ backgroundImage: `url(/assets/img/shape/footer-7-1.png)` }}>
            <div className="it-footer-border"><span></span></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-1-1">
                    <div className="it-footer-widget-logo mb-30">
                      <Link to="/"><img src="assets/img/logo/logo-yoga.png" alt="" /></Link>
                    </div>
                    <div className="it-footer-widget-text">
                      <p>Access expert-led courses designed to help you succeed in your career, all from the comfort of your home.</p>
                    </div>
                    <div className="it-footer-widget-btn">
                      <Link to="/contact-us" className="it-btn-yellow white-bg">
                        <span>
                          <span className="text-1">Contact Us</span>
                          <span className="text-2">Contact Us</span>
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
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Useful Links</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Curses</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-1-3">
                    <h4 className="it-footer-widget-title">Our Services</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Beginner Yoga Classes</a></li>
                        <li><a href="#">Stress Relief Session</a></li>
                        <li><a href="#">Mindful Meditation</a></li>
                        <li><a href="#">Restorative Yoga</a></li>
                        <li><a href="#">Stress Relief Session</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-1-4 d-flex justify-content-lg-end">
                    <div>
                      <h4 className="it-footer-widget-title">Get Contact</h4>
                      <div className="it-footer-widget-contact mb-25">
                        <ul>
                          <li><span>Phone:</span><a className="border-line" href="tel:+91123456789">(+91) 123-456-789</a></li>
                          <li><span>Email:</span><a className="border-line" href="mailto:educeet@gmail.com">educeet@gmail.com</a></li>
                          <li><span>Location:</span><a className="border-line" target="_blank" href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">North America, USA</a></li>
                        </ul>
                      </div>
                      <div className="it-footer-widget-social">
                        <a href="#">
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5654 0.183594H18.5978L11.9747 7.75136L19.7656 18.0509H13.6671L8.88712 11.8058L3.42357 18.0509H0.386253L7.46894 9.9544L0 0.183594H6.25335L10.5697 5.89174L15.5654 0.183594ZM14.5006 16.2382H16.1798L5.33837 1.90156H3.53475L14.5006 16.2382Z" fill="currentcolor" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7354 0.106445C11.8226 0.106495 12.8712 0.271343 13.8574 0.578125C14.0216 0.629208 14.1841 0.684345 14.3447 0.743164C15.149 1.03761 15.9071 1.4276 16.6055 1.89941C16.7453 1.99386 16.8827 2.09149 17.0176 2.19238C17.8258 2.79687 18.544 3.51504 19.1484 4.32324C19.2493 4.45813 19.347 4.59556 19.4414 4.73535C19.9132 5.43372 20.3032 6.19185 20.5977 6.99609C20.6565 7.15675 20.7116 7.31917 20.7627 7.4834C20.865 7.81236 20.9515 8.14828 21.0215 8.49023C21.1613 9.17368 21.2354 9.88167 21.2354 10.6064C21.2353 11.0975 21.201 11.5806 21.1357 12.0537C20.8746 13.9473 20.1083 15.6794 18.9775 17.1104C18.8833 17.2296 18.7867 17.3469 18.6875 17.4619C18.4891 17.6919 18.2809 17.9131 18.0635 18.125C17.9548 18.231 17.8437 18.3344 17.7305 18.4355C17.0514 19.0427 16.2931 19.563 15.4727 19.9785C14.9255 20.2556 14.3509 20.4861 13.7539 20.665C13.4555 20.7545 13.1517 20.8316 12.8428 20.8945C12.6884 20.926 12.5328 20.9539 12.376 20.9785V13.6416H14.8223L15.2881 10.6064L15.2871 10.6055H12.376V8.63672C12.376 8.58464 12.3775 8.53219 12.3809 8.48047C12.404 8.11993 12.5107 7.77253 12.7422 7.50488C12.8084 7.42839 12.8852 7.35887 12.9727 7.29688C13.1039 7.20392 13.2598 7.12885 13.4443 7.07715C13.6291 7.0254 13.8423 6.99707 14.0869 6.99707H15.4111V4.41211C15.4111 4.41211 15.4104 4.41134 15.4092 4.41113H15.4072C15.405 4.41075 15.4017 4.40989 15.3975 4.40918C15.3884 4.40769 15.3748 4.40609 15.3574 4.40332C15.3223 4.39771 15.2704 4.3895 15.2051 4.37988C15.0745 4.36066 14.888 4.3352 14.666 4.30957C14.3331 4.27113 13.9195 4.23264 13.4912 4.21582L13.0605 4.20703C12.9105 4.20703 12.7635 4.21232 12.6201 4.22363C11.6176 4.30272 10.783 4.65692 10.1777 5.2627C10.048 5.39254 9.92834 5.53377 9.82031 5.68652C9.74833 5.7883 9.68104 5.89506 9.61914 6.00684C9.49525 6.23057 9.3919 6.47431 9.31055 6.7373C9.16824 7.19734 9.09375 7.71732 9.09375 8.29297V10.6055H6.42773V13.6416H9.09375V20.9785C8.93698 20.9539 8.78134 20.926 8.62695 20.8945C8.31805 20.8316 8.01421 20.7545 7.71582 20.665C7.1188 20.4861 6.5442 20.2556 5.99707 19.9785C5.17662 19.563 4.41832 19.0427 3.73926 18.4355C3.62607 18.3344 3.51494 18.231 3.40625 18.125C3.18887 17.9131 2.98065 17.6919 2.78223 17.4619C2.683 17.3469 2.58643 17.2296 2.49219 17.1104C1.36143 15.6794 0.595138 13.9473 0.333984 12.0537C0.268734 11.5806 0.235374 11.0975 0.235352 10.6064C0.235352 9.51906 0.400203 8.46981 0.707031 7.4834C0.758114 7.31917 0.813251 7.15675 0.87207 6.99609C1.16651 6.19185 1.5565 5.43372 2.02832 4.73535C2.12277 4.59556 2.2204 4.45813 2.32129 4.32324C2.92577 3.51504 3.64395 2.79687 4.45215 2.19238C4.58704 2.09149 4.72446 1.99386 4.86426 1.89941C5.56263 1.4276 6.32076 1.03761 7.125 0.743164C7.28566 0.684345 7.44808 0.629208 7.6123 0.578125C8.59872 0.271297 9.64797 0.106445 10.7354 0.106445ZM15.3457 4.40234C15.2506 4.38727 15.0568 4.35951 14.8018 4.32812C14.9643 4.34812 15.102 4.36569 15.2051 4.38086C15.2637 4.3895 15.3112 4.39687 15.3457 4.40234Z" fill="currentcolor" stroke="#618269" strokeWidth="0.000976562" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6821 1.3418H6.03467C3.64674 1.3418 1.71094 3.2776 1.71094 5.66553V14.313C1.71094 16.7009 3.64674 18.6367 6.03467 18.6367H14.6821C17.0701 18.6367 19.0059 16.7009 19.0059 14.313V5.66553C19.0059 3.2776 17.0701 1.3418 14.6821 1.3418Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.8142 9.4438C13.9209 10.1635 13.7979 10.8985 13.4629 11.5443C13.1278 12.1901 12.5976 12.7138 11.9477 13.0409C11.2978 13.368 10.5614 13.4818 9.84305 13.3662C9.12474 13.2506 8.46117 12.9115 7.94671 12.397C7.43225 11.8826 7.09311 11.219 6.97753 10.5007C6.86194 9.78239 6.9758 9.04592 7.3029 8.39605C7.63 7.74618 8.15369 7.21599 8.79948 6.8809C9.44527 6.54581 10.1803 6.42289 10.9 6.52961C11.6341 6.63846 12.3137 6.98054 12.8385 7.5053C13.3632 8.03007 13.7053 8.7097 13.8142 9.4438Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.1094 5.23438H15.1221" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.148 7.19531C15.6999 7.19531 17.1881 7.81177 18.2855 8.90908C19.3828 10.0064 19.9992 11.4947 19.9992 13.0465V19.8729H16.0984V13.0465C16.0984 12.5292 15.893 12.0331 15.5272 11.6674C15.1614 11.3016 14.6653 11.0961 14.148 11.0961C13.6308 11.0961 13.1347 11.3016 12.7689 11.6674C12.4031 12.0331 12.1977 12.5292 12.1977 13.0465V19.8729H8.29688V13.0465C8.29688 11.4947 8.91334 10.0064 10.0106 8.90908C11.108 7.81177 12.5962 7.19531 14.148 7.19531Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.37734 8.16797H1.47656V19.8703H5.37734V8.16797Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.42695 5.24258C4.50412 5.24258 5.37734 4.36936 5.37734 3.29219C5.37734 2.21502 4.50412 1.3418 3.42695 1.3418C2.34978 1.3418 1.47656 2.21502 1.47656 3.29219C1.47656 4.36936 2.34978 5.24258 3.42695 5.24258Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area it-copyright-ptb z-index-1" style={{ backgroundColor: `#708e77` }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div className="it-copyright-left style-2 text-center text-lg-start">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Ordianit</a> All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <div className="it-copyright-menu text-center text-lg-end">
                    <a className="border-line" href="#">Terms of service</a>
                    <span>-</span>
                    <a className="border-line" href="#">Privacy policy</a>
                    <span>-</span>
                    <a className="border-line" href="#">Subscription</a>
                    <span>-</span>
                    <a className="border-line" href="#">Login & Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-end --> */}
        </section>
        {/* <!-- footer-area-end --> */}
      </footer>

    </>
  )
}
