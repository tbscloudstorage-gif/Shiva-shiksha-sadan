import { Link } from "react-router-dom";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";

export default function ErrorPage() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="404 Error Page" subtitle2="404 Error" style_3={true} />
        
        {/* Error Section Start */}
        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-8 col-lg-10">
                <div className="it-error-content text-center">
                  <div className="it-error-thumb mb-45">
                    <img src="/assets/img/contact/error.png" alt="404 Error" className="img-fluid" />
                  </div>
                  <h3 className="it-error-title mb-15" style={{ fontSize: "36px", fontWeight: "700" }}>Page not found</h3>
                  <p className="mb-30" style={{ fontSize: "16px", color: "#6f6f6f" }}>
                    Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
                  </p>
                  <div className="it-error-btn">
                    <Link to="/" className="it-btn" style={{
                      display: "inline-block",
                      padding: "15px 35px",
                      backgroundColor: "#0e1133",
                      color: "#fff",
                      borderRadius: "5px",
                      fontWeight: "600",
                      textDecoration: "none"
                    }}>
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Error Section End */}
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  );
}
