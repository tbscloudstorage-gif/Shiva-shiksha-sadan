

export default function NewsletterFour() {
  return (
    <>
      {/* <!-- newsletter-area-start --> */}
      <div className="it-newsletter-2-area pt-150">
        <div className="container container-1200">
          <div className="it-newsletter-2-wrap z-index-2">
            <div className="it-newsletter-2-shape-1 d-none d-lg-block">
              <img src="assets/img/shape/newsletter-bg-4-1.png" alt="" />
              <img className="it-newsletter-2-shape-2" src="assets/img/shape/newsletter-4-1.png" alt="" />
              <img className="it-newsletter-2-shape-3" src="assets/img/shape/newsletter-4-2.png" alt="" />
              <img className="it-newsletter-2-shape-4 d-none d-xl-block" src="assets/img/shape/newsletter-4-3.png" alt="" />
              <img className="it-newsletter-2-shape-5" src="assets/img/shape/newsletter-4-4.png" alt="" />
              <img className="it-newsletter-2-shape-6" src="assets/img/shape/newsletter-4-5.png" alt="" />
              <img className="it-newsletter-2-shape-7 d-none d-xl-block" src="assets/img/shape/newsletter-4-6.png" alt="" />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="it-newsletter-2-content text-center">
                  <h4 className="it-newsletter-2-title mb-0">Subscribe Our Newsletter</h4>
                  <p>Stay updated with the latest news, events, and exclusive educational resources by <br /> subscribing to our newsletter. Never miss an important update again!
                  </p>
                  <div className="it-newsletter-input-box">
                    <form className="input-wrap p-relative" > 
                      <input type="email" placeholder="Enter your Email Address" />
                      <button type="submit" className="it-btn-yellow theme-bg">
                        <span>
                          <span className="text-1">subscribe</span>
                          <span className="text-2">subscribe</span>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- newsletter-area-end --> */}
    </>
  )
}

