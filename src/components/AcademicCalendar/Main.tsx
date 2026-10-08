// import React from 'react'

export default function Main() {
  return (
    <div>
      <div className="container" style={{marginTop : "80px"}}>

        <div className="d-flex justify-content-center mt-5 mb-5" style={{marginTop : "20px"}}>
          <span className="it-section-subtitle">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 1.66667H16.6667V0.833333C16.6667 0.61232 16.5789 0.400358 16.4226 0.244078C16.2663 0.0877975 16.0543 0 15.8333 0C13.3333 0 10.5708 0.133334 9.16667 1.46667C7.7625 0.133334 5 0 2.5 0C2.27899 0 2.06702 0.0877975 1.91074 0.244078C1.75446 0.400358 1.66667 0.61232 1.66667 0.833333V1.66667H0.833333C0.61232 1.66667 0.400358 1.75446 0.244078 1.91074C0.0877973 2.06702 0 2.27899 0 2.5V12.5C0 12.721 0.0877973 12.933 0.244078 13.0893C0.400358 13.2455 0.61232 13.3333 0.833333 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V2.5C18.3333 2.27899 18.2455 2.06702 18.0893 1.91074C17.933 1.75446 17.721 1.66667 17.5 1.66667ZM15.8333 0.833333V10.8333C13.5542 10.8333 11.0708 10.9417 9.58333 11.9583V2.22917C10.675 0.954167 13.375 0.833333 15.8333 0.833333ZM8.75 2.22917V11.9583C7.2625 10.9417 4.77917 10.8333 2.5 10.8333V0.833333C4.95833 0.833333 7.65833 0.954167 8.75 2.22917ZM0.833333 2.5H1.66667V10.8333C1.66667 11.0543 1.75446 11.2663 1.91074 11.4226C2.06702 11.5789 2.27899 11.6667 2.5 11.6667C4.53333 11.6667 6.72917 11.75 8.04583 12.5H0.833333V2.5ZM17.5 12.5H10.2875C11.6042 11.75 13.8 11.6667 15.8333 11.6667C16.0543 11.6667 16.2663 11.5789 16.4226 11.4226C16.5789 11.2663 16.6667 11.0543 16.6667 10.8333V2.5H17.5V12.5Z"
                fill="#181348"
              />
            </svg>
            Academic Calendar
          </span>
        </div>

        <h2 className="it-section-title text-center mt-5 mb-5">
          School Academic Calendar
        </h2>

        <p className="academic-description">
          Shiva Shiksha Sadan follows the curriculum prescribed by the Central
          Board of Secondary Education (CBSE), with English as the primary
          medium of instruction. Hindi is taught as the second language, while
          Sanskrit and French are offered as third-language options up to Class
          VIII.
          <br /><br />
          Our curriculum is designed to encourage academic excellence,
          intellectual growth, and meaningful learning. A well-structured
          academic calendar keeps students and faculty organised throughout
          the session, ensuring timely completion of academic activities,
          assessments, and important milestones.
        </p>


        {/* Academic Calendar Download Card */}

        <div className="academic-calendar-wrapper">

          <div className="academic-calendar-card">

            <div className="calendar-icon">
              <i className="bi bi-calendar3"></i>
            </div>

            <h3>Download Academic Calendar</h3>

            <p>
              Get the complete academic calendar for 2026-27
              <br />
              session in PDF format
            </p>

            <a
              href="/assets/pdf/academic-calendar-2026-27.pdf"
              download="Shiva-Shiksha-Sadan-Academic-Calendar-2026-27.pdf"
              className="calendar-download-btn"
            >
              <i className="bi bi-download"></i>
              Download PDF Calendar
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}