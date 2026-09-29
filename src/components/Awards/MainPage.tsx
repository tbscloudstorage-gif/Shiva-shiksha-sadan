// import React from "react";

const images = [
  "/assets/img/about/1.png",
  "/assets/img/about/2.png",
  "/assets/img/about/3.png",
  "/assets/img/about/4.png",
    "/assets/img/about/5.png",

      "/assets/img/about/6.png",

        "/assets/img/about/7.png",

 
];

export default function ImageSection() {
  return (
    <section >
      <div className="container" style={{marginBottom:"178px", marginTop:"50px"}}>
        <div className="row g-4">
          {images.map((image, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-4"
              key={index}
            >
              <div className="gallery-item">
                <img
                  src={image}
                  alt={`School gallery ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .image-gallery-section {
          padding-right: 0;
          padding-top:60px;
          padding-bottom:160px;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .gallery-item {
          width: 100%;
          height: 230px;
          overflow: hidden;
          border-radius: 12px;
          background: #f5f5f5;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 991px) {
          .image-galsectionlery- {
            padding: 50px 0;
          }

          .gallery-item {
            height: 220px;
          }
        }

        @media (max-width: 575px) {
          .image-gallery-section {
            padding: 35px 15px;
          }

          .gallery-item {
            height: 200px;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
}