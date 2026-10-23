
// import React from "react";

export default function MainPage({ pdfUrl }) {


  return (
    <section className="magazine-section">
      <div className="container">

        {/* Desktop PDF Viewer */}
        <div className="magazine-desktop">
          <iframe
            src={pdfUrl}
            title="School Magazine"
            width="100%"
            height="800px"
            style={{
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Mobile Magazine Cover */}
        <div className="magazine-mobile">
         {location.pathname == "/mandatory-public-disclosure" ? (  <img
            src="/assets/img/breadcrumb/course-v1-breadcrumb.jpg"
            alt="Shiva Shiksha Sadan Magazine Cover"
            className="magazine-cover"
          />) : (
          <img
            src="/assets/img/academics.JPG"
            alt="Shiva Shiksha Sadan Magazine Cover"
            className="magazine-cover"
          /> )}
         
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magazine-open-btn"
          >
            Open PDF
          </a>
        </div>

      </div>
    </section>
  );
}
