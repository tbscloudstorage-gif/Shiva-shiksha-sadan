 

import NiceSelect from "@/ui/NiceSelect";
import { Link } from "react-router-dom";


export default function SignupForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };
  const selectHandler = (e: any) => { return e; };

  return (
    <>
      {/* <!-- sign-up-area-start --> */}
      <div className="it-signup-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-10 col-lg-11">
              <div className="it-signup-wrap">
                <h4 className="it-signup-title">Hi Welcome Back!</h4>
                <form onSubmit={handleSubmit}>
                  <div className="it-signup-input-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">
                          <label>First Name</label>
                          <input type="text" placeholder="First name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">
                          <label>Last Nme</label>
                          <input type="text" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">
                          <label>User name</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">
                          <label>Subject</label>
                          <div className="contact__select">
                            <NiceSelect
                              className=""
                              options={[
                                { value: "01", text: "Subject" },
                                { value: "02", text: "Computer Science & Engineering" },
                                { value: "03", text: "Electrical & Electronic Engineering" },
                                { value: "04", text: "Textile Engineering" },
                                { value: "05", text: "Pharmacy" },
                                { value: "06", text: "Architecture" },
                                { value: "07", text: "Law" },
                                { value: "08", text: "Economics" },
                                { value: "09", text: "English" },
                                { value: "10", text: "Psychology" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />


                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="it-signup-input mb-20">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="it-signup-input mb-25">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>
                  <div className="it-signup-forget d-flex justify-content-between flex-wrap">
                    <div className="it-contact-agree mb-30">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""
                          id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          By signing up, I agree with the website's Terms and Conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="it-signup-btn mb-25">
                    <button type="submit" className="it-btn-yellow theme-bg w-100">
                      <span>
                        <span className="text-1">Register Now</span>
                        <span className="text-2">Register Now</span>
                      </span>
                    </button>
                  </div>
                  <div className="it-signup-text text-center mb-30">
                    <span>Already Have an account?<Link to="/sign-in"> Sign In</Link></span>
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
      {/* <!-- sign-up-area-end --> */}
    </>
  )
}
