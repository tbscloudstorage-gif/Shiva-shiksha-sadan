import { useState } from 'react';

export default function SignupForm() {
  const [result, setResult] = useState("");




  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    formData.append("access_key", "19619d88-a2af-43af-8877-fa79ea097158");

    // Check all fields before submitting
    console.log(
      "Form Data:",
      Object.fromEntries(formData.entries())
    );

    setResult("Submitting...");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("Web3Forms Response:", data);

      if (response.ok && data.success) {
        setResult("Application submitted successfully!");

        form.reset();
      } else {
        setResult(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Network error. Please try again.");
    }
  };




  return (
    <>
      <div className="it-signup-area pt-130 pb-130 admission-page">
        <div className="container">
          <div className="mb-70">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="it-team-3-left">
                   <span className="admission-badge">
                    Admissions Open for 2027–28
                  </span>
                  <h4 className="it-section-title">Admissions Open at Shiva Shiksha Sadan</h4>
                  <p className="mt-4">Shiva Shiksha Sadan welcomes students to be part of a legacy of excellence and holistic education. With an advanced global educational approach, we focus on developing academic skills, creativity, confidence and overall personality. Our innovative teaching methods combine international learning practices with experiential education. We provide opportunities in literacy, numeracy, coding, robotics, cultural activities, theatre and sports. Give your child the right foundation for a bright and successful future.</p>
                  <h6  style={{marginTop:"30px" , marginBottom
                    :"30px"
                  }}>Admissions Available For:
                  </h6>
                  <p><strong>Pre-primary:</strong> Children aged 3–4 years.</p>
                  <p><strong>Class 11 (Girls Only)</strong>: Students from other CBSE schools with 75% or above in Pre-Board examinations.</p>
                  <h6 style={{marginTop:"30px" , marginBottom
                    :"30px"
                  }}>Our Educational Highlights:
                  </h6>
                  <ul>
                    <li className='mt-3 mb-2'>50 Years of Educational Excellence (Since 1974).</li>
                    <li className='mt-3 mb-2'>Jolly Phonics and Jolly Grammar (UK).</li>
                    <li className='mt-3 mb-2'>CPA-Based Numeracy Learning (Singapore).</li>
                    <li className='mt-3 mb-2'>Fitzroy Readers (Australia).</li>
                    <li  className='mt-3 mb-2'>Montessori and Reggio Emilia Learning Approach.</li>
                    <li className='mt-3 mb-2'>Coding, Robotics and Experiential Learning.</li>
                    <li className='mt-3 mb-2'>Volleyball, Badminton, Taekwondo, Yoga and Athletics.</li>
                    <li className='mt-3 mb-2'> Transport facilities available in selected areas.</li>
                  </ul>
                  <p className='mb-2' style={{marginTop:"20px"}}>You can place the <strong>Admission Application Form</strong> directly below this section for parents to submit their enquiries.</p>
                </div>
                
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-team-3-btn text-md-end">
                  {/* <Link to="/" className="it-btn-yellow theme-bg border-radius-0">
                    <span>
                      <span className="text-1">Register As Alumni</span>
                      <span className="text-2">Register  As Alumni</span>
                    </span>
                    <i>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                      </svg>
                    </i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-10 col-lg-11">

              <div className="it-signup-wrap admission-form-wrap">

                {/* Header */}
                <div className="admission-form-header">
                 

                  <h6 className="it-breadcrumb-title mb-0 pb-1">
                  Apply For Admission
                  </h6>

                  <p>
                    Please fill in the details below to begin your child's
                    admission process at Shiva Shiksha Sadan.
                  </p>
                </div>


                <form onSubmit={onSubmit}>

                  {/* =====================================
                      STUDENT INFORMATION
                  ====================================== */}

                  <div className="form-section-title text-start">
                    <span>01</span>

                    <div>
                      <h5>Student Information</h5>
                      <p>
                        Enter the student's basic and academic details.
                      </p>
                    </div>
                  </div>


                  <div className="it-signup-input-wrap">

                    <div className="row">

                      {/* Student Name */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Student’s Full Name <b>*</b>
                          </label>

                          <input
                            type="text"
                            name="student_name"
                            placeholder="Enter student's full name"
                            required
                          />

                        </div>
                      </div>


                      {/* DOB */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Date of Birth <b>*</b>
                          </label>

                          <input
                            type="date"
                            name="date_of_birth"
                            required
                          />

                        </div>
                      </div>


                      {/* Gender */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Gender <b>*</b>
                          </label>


                          <div className="contact__select admission-select sss-admission-dropdown-wrap">
                            <select
                              className="sss-admission-dropdown"
                              name="gender"
                              required
                              defaultValue=""
                            >
                              <option value="" disabled>Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>


                        </div>
                      </div>


                      {/* Applying Class */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Applying for Class <b>*</b>
                          </label>


                          <div className="contact__select admission-select sss-admission-dropdown-wrap">
                            <select
                              className="sss-admission-dropdown"
                              name="class"
                              required
                              defaultValue=""
                            >
                              <option value="" disabled>Select Class</option>
                              <option value="nursery">Nursery</option>
                              <option value="lkg">LKG</option>
                              <option value="ukg">UKG</option>
                              
                            
                              <option value="11">Class XI</option>
                            
                            </select>
                          </div>


                        </div>
                      </div>


                      {/* Academic Session */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Academic Session <b>*</b>
                          </label>


                          <div className="contact__select admission-select sss-admission-dropdown-wrap">
                            <select
                              className="sss-admission-dropdown"
                              name="academic_session"
                              required
                              defaultValue=""
                            >
                              <option value="" disabled>Select Academic Session</option>
                              <option value="2026-27">2026-27</option>
                              <option value="2027-28">2027-28</option>
                            </select>
                          </div>


                        </div>
                      </div>


                      {/* Previous School */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Previous School Name
                          </label>

                          <input
                            type="text"
                            name="previous_school"
                            placeholder="Enter previous school name"
                          />

                        </div>
                      </div>

                    </div>

                  </div>


                  {/* =====================================
                      PARENT DETAILS
                  ====================================== */}

                  <div className="form-section-title section-spacing text-start">

                    <span>02</span>

                    <div>
                      <h5>Parent/Guardian Details</h5>

                      <p>
                        Please provide parent or guardian contact information.
                      </p>
                    </div>

                  </div>


                  <div className="it-signup-input-wrap">

                    <div className="row">

                      {/* Father Name */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Father’s Name <b>*</b>
                          </label>

                          <input
                            type="text"
                            name="father_name"
                            placeholder="Enter father's name"
                            required
                          />

                        </div>
                      </div>


                      {/* Mother Name */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Mother’s Name <b>*</b>
                          </label>

                          <input
                            type="text"
                            name="mother_name"
                            placeholder="Enter mother's name"
                            required
                          />

                        </div>
                      </div>


                      {/* Phone */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Parent/Guardian Mobile Number<b>*</b>
                          </label>

                          <input
                            type="tel"
                            name="phone"
                            placeholder="Enter mobile number"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            required
                          />

                        </div>
                      </div>


                      {/* Email */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Email Address <b>*</b>
                          </label>

                          <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            required
                          />

                        </div>
                      </div>

                    </div>

                  </div>


                  {/* =====================================
                      ADDRESS
                  ====================================== */}

                  <div className="form-section-title section-spacing text-start">

                    <span>03</span>

                    <div>
                      <h5>Address & Additional Details</h5>

                      <p>
                        Provide your residential and transport information.
                      </p>
                    </div>

                  </div>


                  <div className="it-signup-input-wrap">

                    <div className="row">

                      {/* Address */}
                      <div className="col-12">
                        <div className="it-signup-input mb-20">

                          <label>
                            Residential Address <b>*</b>
                          </label>

                          <input
                            type="text"
                            name="address"
                            placeholder="Enter complete residential address"
                            required
                          />

                        </div>
                      </div>


                      {/* City */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            City
                          </label>

                          <input
                            type="text"
                            name="city"
                            placeholder="Enter city"
                          />

                        </div>
                      </div>


                      {/* Pincode */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            PIN Code <b>*</b>
                          </label>

                          <input
                            type="text"
                            name="pincode"
                            placeholder="Enter PIN code"
                            maxLength={6}
                            pattern="[0-9]{6}"
                            required
                          />

                        </div>
                      </div>


                      {/* Transport */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Do You Require School Transport?
                          </label>


                          <div className="contact__select admission-select sss-admission-dropdown-wrap">
                            <select
                              className="sss-admission-dropdown"
                              name="transport"
                              defaultValue=""
                            >
                              <option value="" disabled>Select Option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>


                        </div>
                      </div>


                      {/* Message */}
                      <div className="col-12">
                        <div className="it-signup-input mb-25">

                          <label>
                            Message or Additional Information
                          </label>

                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Write any additional information here..."
                          />

                        </div>
                      </div>

                    </div>

                  </div>


                  {/* =====================================
                      DECLARATION
                  ====================================== */}

                  {/* <div className="admission-declaration">

                    <div className="form-check">

                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="admissionDeclaration"
                        required
                      />

                      <label
                        className="form-check-label"
                        htmlFor="admissionDeclaration"
                      >
                        I confirm that the information provided above is
                        accurate and complete to the best of my knowledge.
                      </label>

                    </div>

                  </div> */}


                  {/* Submit */}

                  <div className="it-signup-btn admission-submit-btn">

                    <button
                      type="submit"
                      className="it-btn-yellow theme-bg w-100"
                    >
                      <span>

                        <span className="text-1">
                          Submit Admission Application
                        </span>

                        <span className="text-2">
                          Submit Admission Application
                        </span>

                      </span>
                    </button>

                  </div>


                  <div className="admission-help-text">

                    <p>
                      Need help with your application? Contact our
                      admissions team for assistance.
                    </p>

                  </div>
                  <p className='text-green-500 mt-5 text-sm' style={{ color: "green" }}>{result}</p>
                </form>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}