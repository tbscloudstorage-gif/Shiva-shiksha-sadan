import { Link } from "react-router-dom";

export default function CtaTwo() {
  return (
    <>
   {/* <!-- cta-area-start --> */}
   <section className="it-cta-3-area z-index-2">
      <div className="container container-1200">
         <div className="it-cta-3-wrap" style={{backgroundImage: `url(/assets/img/shape/cta-bg-3.png)`}}>
            <div className="row align-items-center">
               <div className="col-lg-8 col-md-7">
                  <div className="it-cta-3-left d-flex align-items-center">
                     <img className="d-none d-lg-block" src="assets/img/shape/cta-3-1.png" alt="" />
                     <h5 className="it-cta-3-title mb-0">ClassclassNamees Built To Teach Everything</h5>
                  </div>
               </div>
               <div className="col-lg-4 col-md-5">
                  <div className="it-cta-3-btn text-md-end">
                     <Link to="/contact-us" className="it-btn-yellow white-bg">
                        <span>
                           <span className="text-1">Try 7 Days Free Trial</span>
                           <span className="text-2">Try 7 Days Free Trial</span>
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
   </section> 
   {/* <!-- cta-area-end --> */}
    </>
  )
}
