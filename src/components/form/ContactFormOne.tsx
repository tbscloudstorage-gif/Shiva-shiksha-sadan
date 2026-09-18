 

import NiceSelect from "@/ui/NiceSelect";
import { useState } from "react";


export default function ContactFormOne() {
    const [result, setResult] = useState("");
 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setResult("Sending....");

  const formData = new FormData(event.currentTarget);

  formData.append(
    "access_key",
    "2263fe21-46f8-4e2b-93af-f7406e5d8a64"
  );

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.currentTarget.reset();
  } else {
    setResult("Error");
  }
};

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Contact form submitted');
  // };
  const selectHandler = (e: any) => { return e; };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="it-signup-input-wrap">
          <div className="row">
            <div className="col-md-6">
              <div className="it-signup-input mb-40">
                <label>First Name</label>
                <input type="text" placeholder="Name"   />
              </div>
            </div>
            <div className="col-md-6">
              <div className="it-signup-input mb-40">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="it-signup-input mb-40">
                <label>Phone</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="it-signup-input mb-40">
                <label>Subject</label>
                <div className="contact__select">
                  <NiceSelect
                    className=""
                    options={[
                      { value: "01", text: "Subject" },
                      { value: "02", text: "Admission Enquiry " },
                      { value: "03", text: "Fee & Payment Enquiry" },
                      { value: "04", text: "Academic Information" },
                      { value: "05", text: "School Visit" },
                      { value: "06", text: "Transport Enquiry" },
                      { value: "07", text: "Activities & Sports" },
                      { value: "08", text: "Career & Teaching Opportunities" },
                      { value: "09", text: "General Enquiry" },
                      { value: "10", text: "Other" },
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
            <div className="it-signup-input mb-40">
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="it-btn-yellow theme-bg">
              <span>
                <span className="text-1">Send Message</span>
                <span className="text-2">Send Message</span>
              </span>
              <i>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                </svg>
              </i>
            </button>
          </div>
        </div>
              <span>{result}</span>

      </form>
    </>
  )
}
