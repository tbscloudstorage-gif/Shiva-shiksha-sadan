import { Link } from "react-router-dom";


export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted');
  };
  return (
    <>
      {/* <!-- sign-in-area-start --> */}
      <div className="it-signup-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="it-signup-wrap">
                <h4 className="it-signup-title">Hi Welcome Back!</h4>
                <form onSubmit={handleSubmit}>
                  <div className="it-signup-input-wrap">
                    <div className="it-signup-input mb-20">
                      <label>Username or email address</label>
                      <input type="email" placeholder="Email or user id" />
                    </div>
                    <div className="it-signup-input mb-25">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="it-signup-forget d-flex justify-content-between flex-wrap">
                    <div className="it-contact-agree mb-30">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""
                          id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Save Account
                        </label>
                      </div>
                    </div>
                    <a className="mb-30 border-line" href="#">Forgot Password?</a>
                  </div>
                  <div className="it-signup-btn mb-25">
                    <button type="submit" className="it-btn-yellow theme-bg w-100">
                      <span>
                        <span className="text-1">Sign In</span>
                        <span className="text-2">Sign In</span>
                      </span>
                    </button>
                  </div>
                  <div className="it-signup-text text-center mb-30">
                    <span>Don’t Have an Account?<Link to="/sign-up"> Sign Up</Link></span>
                  </div>
                  <div className="it-signup-border text-center">
                    <span>or</span>
                  </div>
                  <div className="it-signup-continue-wrap">
                    <div className="row gx-35">
                      <div className="col-md-6 col-sm-6">
                        <div>
                          <a href="#">
                            <div className="it-signup-continue-item d-flex align-items-center justify-content-center">
                              <img src="assets/img/contact/icon-1.png" alt="" />
                              <span>Sign Up with Google</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div>
                          <a href="#">
                            <div className="it-signup-continue-item d-flex align-items-center justify-content-center">
                              <img src="assets/img/contact/icon-2.png" alt="" />
                              <span>Sign Up with Apple</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sign-in-area-end --> */}
    </>
  )
}
