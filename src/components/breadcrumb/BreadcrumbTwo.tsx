import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title?: string;
  subtitle?: string;
}

export default function BreadcrumbTwo({ title = "About Us", subtitle = "About Us" }: BreadcrumbProps) {
  return (
    <>
    {/* <!-- breadcrumb-area-start --> */}
   <div className="it-breadcrumb-area it-breadcrumb-style-5 fix z-index-1" style={{backgroundImage: `url(/assets/img/breadcrumb/about-v5.jpg)`}}>
      <div className="container">
         <div className="row align-items-center">
            <div className="col-12">
               <div className="it-breadcrumb-content text-center z-index-1">
                  <div className="it-breadcrumb-title-box">
                     <h3 className="it-breadcrumb-title text-white">{title}</h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                     <div className="it-breadcrumb-list">
                        <span><Link to="/">Home</Link></span>
                        <span className="dvdr">
                           <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.6364 7.6364C14.9879 7.28492 14.9879 6.71508 14.6364 6.3636L8.90883 0.636039C8.55736 0.284567 7.98751 0.284567 7.63604 0.636039C7.28457 0.987511 7.28457 1.55736 7.63604 1.90883L12.7272 7L7.63604 12.0912C7.28457 12.4426 7.28457 13.0125 7.63604 13.364C7.98751 13.7154 8.55736 13.7154 8.90883 13.364L14.6364 7.6364ZM0 7V7.9H14V7V6.1H0V7Z" fill="white" />
                           </svg>
                        </span>
                        <i>{subtitle}</i>
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
