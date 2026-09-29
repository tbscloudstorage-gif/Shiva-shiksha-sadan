

export default function GalleryFour() {
  return (
    <>
      {/* <!-- gallery-area-start --> */}
      <div className="it-gallery-area z-index-1 gray-bg pt-130 pb-130" style={{backgroundImage: `url(/assets/img/shape/gallary-bg-4-1.png)`}}>
        <img className="it-gallery-shape-1" src="assets/img/shape/gallary-4-2.png" alt="" />
      {location.pathname !== "/" && (
        <>
        <img className="it-gallery-shape-2" src="assets/img/shape/gallary-4-1.png" alt="" /> 
        <img className="it-gallery-shape-3" src="assets/img/shape/gallary-4-3.png" alt="" />
        </>
      )}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-contact-section-title-box text-center mb-65">
                      {location.pathname !== "/" && 

                <span className="it-section-subtitle-2">Gallery</span> }
                <h4 className="it-section-title">Check Our Gallery
                  
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="it-gallery-thumb-wrap">
                <div className="it-gallery-thumb-box box-style-1">
                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-1.jpg" alt="" />
                  </div>
                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-2.jpg" alt="" />
                  </div>
                </div>
                <div className="it-gallery-thumb-box box-style-2">
                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-3.jpg" alt="" />
                  </div>
                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-4.jpg" alt="" />
                  </div>
                </div>
                <div className="it-gallery-thumb-box box-style-3">
                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-5.jpg" alt="" />
                  </div>
                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-6.jpg" alt="" />
                  </div>
                </div>
                <div className="it-gallery-thumb-box box-style-4">
                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-7.jpg" alt="" />
                  </div>
                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-8.jpg" alt="" />
                  </div>
                </div>
                <div className="it-gallery-thumb-box box-style-5">
                  <div className="it-gallery-thumb style-1 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-9.jpg" alt="" />
                  </div>
                  <div className="it-gallery-thumb style-2 border-radius-20">
                    <img src="assets/img/gallery/gallery-4-10.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- gallery-area-end --> */}
    </>
  )
}
