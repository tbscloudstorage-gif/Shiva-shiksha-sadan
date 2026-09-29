import NiceSelect from "@/ui/NiceSelect";

export default function SignupForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Admission form submitted");
  };

  const selectHandler = (e: any) => {
    return e;
  };

  return (
    <>
      <div className="it-signup-area pt-130 pb-130 admission-page">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-10 col-lg-11">

              <div className="it-signup-wrap admission-form-wrap">

                {/* Header */}
                <div className="admission-form-header">
                  <span className="admission-badge">
                    Admissions Open
                  </span>

                  <h4 className="it-signup-title">
                    Admission Application Form
                  </h4>

                  <p>
                    Please fill in the details below to begin your child's
                    admission process at Shiva Shiksha Sadan.
                  </p>
                </div>


                <form onSubmit={handleSubmit}>

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

                          <div className="contact__select admission-select">

                            <NiceSelect
                              className=""
                              options={[
                                {
                                  value: "",
                                  text: "Select Gender",
                                },
                                {
                                  value: "male",
                                  text: "Male",
                                },
                                {
                                  value: "female",
                                  text: "Female",
                                },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="gender"
                              placeholder=""
                            />

                          </div>

                        </div>
                      </div>


                      {/* Applying Class */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Applying for Class <b>*</b>
                          </label>

                          <div className="contact__select admission-select">

                            <NiceSelect
                              className=""
                              options={[
                                {
                                  value: "",
                                  text: "Select Class",
                                },
                                {
                                  value: "nursery",
                                  text: "Nursery",
                                },
                                {
                                  value: "lkg",
                                  text: "LKG",
                                },
                                {
                                  value: "ukg",
                                  text: "UKG",
                                },
                                {
                                  value: "1",
                                  text: "Class I",
                                },
                                {
                                  value: "2",
                                  text: "Class II",
                                },
                                {
                                  value: "3",
                                  text: "Class III",
                                },
                                {
                                  value: "4",
                                  text: "Class IV",
                                },
                                {
                                  value: "5",
                                  text: "Class V",
                                },
                                {
                                  value: "6",
                                  text: "Class VI",
                                },
                                {
                                  value: "7",
                                  text: "Class VII",
                                },
                                {
                                  value: "8",
                                  text: "Class VIII",
                                },
                                {
                                  value: "9",
                                  text: "Class IX",
                                },
                                {
                                  value: "10",
                                  text: "Class X",
                                },
                                {
                                  value: "11",
                                  text: "Class XI",
                                },
                                {
                                  value: "12",
                                  text: "Class XII",
                                },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="class"
                              placeholder=""
                            />

                          </div>

                        </div>
                      </div>


                      {/* Academic Session */}
                      <div className="col-md-6">
                        <div className="it-signup-input mb-20">

                          <label>
                            Academic Session <b>*</b>
                          </label>

                          <div className="contact__select admission-select">

                            <NiceSelect
                              className=""
                              options={[
                                {
                                  value: "",
                                  text: "Select Academic Session",
                                },
                                {
                                  value: "2026-27",
                                  text: "2026-27",
                                },
                                {
                                  value: "2027-28",
                                  text: "2027-28",
                                },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="academic_session"
                              placeholder=""
                            />

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
                      <h5>Parent / Guardian Details</h5>

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
                            Parent / Guardian Mobile Number <b>*</b>
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
                            School Transport Required
                          </label>

                          <div className="contact__select admission-select">

                            <NiceSelect
                              className=""
                              options={[
                                {
                                  value: "",
                                  text: "Select Option",
                                },
                                {
                                  value: "yes",
                                  text: "Yes",
                                },
                                {
                                  value: "no",
                                  text: "No",
                                },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="transport"
                              placeholder=""
                            />

                          </div>

                        </div>
                      </div>


                      {/* Message */}
                      <div className="col-12">
                        <div className="it-signup-input mb-25">

                          <label>
                            Message / Additional Information
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
                          Submit Application
                        </span>

                        <span className="text-2">
                          Submit Application
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

                </form>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}