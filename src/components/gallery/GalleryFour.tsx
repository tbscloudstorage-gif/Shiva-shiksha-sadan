export default function GalleryFour() {
  return (
    <>
      {/* Responsive CSS */}
      <style>
        {`
       
          /* =========================
             PHONE RESPONSIVE
          ========================== */
          @media (max-width: 767px) {

            .it-gallery-area {
              padding-top: 50px !important;
              padding-bottom: 50px !important;
              overflow: hidden !important;
            }

            .it-gallery-area .container {
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 15px !important;
              padding-right: 15px !important;
            }

            .it-contact-section-title-box {
              margin-bottom: 30px !important;
            }

            .it-gallery-thumb-wrap {
              display: flex !important;
              flex-direction: column !important;
              width: 100% !important;
              max-width: 100% !important;
              gap: 15px !important;
            }

            .it-gallery-thumb-box,
            .it-gallery-thumb-box.box-style-1,
            .it-gallery-thumb-box.box-style-2,
            .it-gallery-thumb-box.box-style-3,
            .it-gallery-thumb-box.box-style-4,
            .it-gallery-thumb-box.box-style-5 {
              display: flex !important;
              flex-direction: column !important;

              width: 100% !important;
              max-width: 100% !important;
              min-width: 100% !important;
              flex: 0 0 100% !important;

              margin: 0 !important;
              padding: 0 !important;
              gap: 15px !important;

              position: relative !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              bottom: auto !important;
              transform: none !important;
            }

            .it-gallery-thumb,
            .it-gallery-thumb.style-1,
            .it-gallery-thumb.style-2 {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 100% !important;

              height: auto !important;
              min-height: 0 !important;
              max-height: none !important;

              margin: 0 !important;
              padding: 0 !important;

              position: relative !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              bottom: auto !important;

              transform: none !important;

              overflow: hidden !important;
            }

            .it-gallery-thumb img {
              display: block !important;

              width: 100% !important;
              max-width: 100% !important;
              min-width: 100% !important;

              height: auto !important;
              min-height: 0 !important;
              max-height: none !important;

              margin: 0 !important;

              object-fit: cover !important;

              position: relative !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              bottom: auto !important;

              transform: none !important;
            }

            /* Hide shapes on phone */
            .it-gallery-shape-1,
            .it-gallery-shape-2,
            .it-gallery-shape-3 {
              display: none !important;
            }
          }


          /* =========================
             SMALL PHONE
          ========================== */
          @media (max-width: 480px) {

            .it-gallery-area {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }

            .it-gallery-area .container {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }

            .it-gallery-thumb-wrap {
              gap: 12px !important;
            }

            .it-gallery-thumb-box {
              gap: 12px !important;
            }

            .it-gallery-thumb {
              border-radius: 12px !important;
            }
          }
        `}
      </style>


      {/* gallery-area-start */}
      <div
        className="it-gallery-area z-index-1 gray-bg pt-130 pb-130"
        style={{
          backgroundImage: `url(/assets/img/shape/gallary-bg-4-1.png)`,
        }}
      >

        <img
          className="it-gallery-shape-1"
          src="assets/img/shape/gallary-4-2.png"
          alt=""
        />

        {location.pathname !== "/" && (
          <>
            <img
              className="it-gallery-shape-2"
              src="assets/img/shape/gallary-4-1.png"
              alt=""
            />

            <img
              className="it-gallery-shape-3"
              src="assets/img/shape/gallary-4-3.png"
              alt=""
            />
          </>
        )}

        <div className="container">

          <div className="row">
            <div className="col-12">

              <div className="it-contact-section-title-box text-center mb-65">

                {location.pathname !== "/" && (
                  <span className="it-section-subtitle-2">
                    Gallery
                  </span>
                )}

                <h4 className="it-section-title">
                  Check Our Gallery
                </h4>

              </div>

            </div>
          </div>


          <div className="row">
            <div className="col-12">

              <div className="it-gallery-thumb-wrap">

                {/* BOX 1 */}
                <div className="it-gallery-thumb-box box-style-1">

                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-2.jpg"
                      alt=""
                    />
                  </div>

                </div>


                {/* BOX 2 */}
                <div className="it-gallery-thumb-box box-style-2">

                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-3.jpg"
                      alt=""
                    />
                  </div>

                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-4.jpg"
                      alt=""
                    />
                  </div>

                </div>


                {/* BOX 3 */}
                <div className="it-gallery-thumb-box box-style-3">

                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-5.jpg"
                      alt=""
                    />
                  </div>

                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-6.jpg"
                      alt=""
                    />
                  </div>

                </div>


                {/* BOX 4 */}
                <div className="it-gallery-thumb-box box-style-4">

                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-7.jpg"
                      alt=""
                    />
                  </div>

                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-8.jpg"
                      alt=""
                    />
                  </div>

                </div>


                {/* BOX 5 */}
                <div className="it-gallery-thumb-box box-style-5">

                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-9.jpg"
                      alt=""
                    />
                  </div>

                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img
                      src="assets/img/gallery/gallery-4-10.jpg"
                      alt=""
                    />
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
      {/* gallery-area-end */}
    </>
  );
}