import {
  FaBookOpen,
  FaUserCheck,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaMobileAlt,
  FaBan,
  FaHandshake,
  FaExclamationTriangle,
} from "react-icons/fa";


interface Rule {
  title: string;
  description: string;
}

const studentRules: Rule[] = [
  {
    title: "Regular Attendance",
    description:
      "Students are expected to attend school regularly and maintain the required attendance throughout the academic year.",
  },
  {
    title: "Punctuality",
    description:
      "Students must reach the school on time and attend all classes according to the prescribed timetable.",
  },
  {
    title: "Proper Uniform",
    description:
      "Students should wear the complete school uniform neatly and maintain a clean and presentable appearance.",
  },
  {
    title: "Respectful Behaviour",
    description:
      "Students must show respect towards teachers, staff members, classmates and school property at all times.",
  },
];

const parentRules: Rule[] = [
  {
    title: "Regular Communication",
    description:
      "Parents are encouraged to stay connected with the school and regularly review important notices and updates.",
  },
  {
    title: "Parent-Teacher Meetings",
    description:
      "Parents should attend scheduled meetings to remain informed about their child's academic progress.",
  },
  {
    title: "Support School Policies",
    description:
      "Parents are expected to support school rules and encourage discipline, punctuality and responsible behaviour.",
  },
  {
    title: "Update Information",
    description:
      "Any change in contact details, address or important student information should be communicated promptly.",
  },
];

const disciplineRules: Rule[] = [
  {
    title: "Maintain Discipline",
    description:
      "Students must follow classroom instructions and maintain appropriate behaviour within the school campus.",
  },
  {
    title: "Academic Integrity",
    description:
      "Students must complete their work honestly and avoid cheating, copying or other unfair practices.",
  },
  {
    title: "Protect School Property",
    description:
      "School furniture, books, equipment and other facilities should be handled responsibly.",
  },
  {
    title: "Positive Conduct",
    description:
      "Bullying, fighting, abusive language or behaviour that affects the safety of others is strictly prohibited.",
  },
];

const prohibitedItems = [
  "Mobile phones and unauthorized electronic devices",
  "Sharp or potentially dangerous objects",
  "Tobacco, alcohol or prohibited substances",
  "Any material considered inappropriate for school",
];

export default function SchoolRules() {
  return (
    <section className="school-rules-section">
      <div className="container">

        {/* Heading */}
        <div className="rules-heading">
          <span className="rules-subtitle">STUDENT GUIDELINES</span>
          <h2 className="it-breadcrumb-title it-split-text it-split-in-right">School Rules & Code of Conduct</h2>
          <p className="it-feature-content ">
            Our school rules help create a safe, respectful and disciplined
            environment where every student can learn, grow and succeed.
          </p>
        </div>

        {/* First Row */}
        <div className="rules-grid">

          <div className="rule-card blue-card">
            <div className="card-title">
              <div className="title-icon blue-icon">
                <FaBookOpen />
              </div>

              <div>
                <span>GUIDELINES FOR</span>
                <h3>Students</h3>
              </div>
            </div>

            <div className="rule-list">
              {studentRules.map((rule, index) => (
                <div className="rule-item" key={index}>
                  <FaCheckCircle className="check blue-check" />

                  <div>
                    <h4>{rule.title}</h4>
                    <p className="it-feature-content ">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rule-card green-card">
            <div className="card-title">
              <div className="title-icon green-icon">
                <FaUsers />
              </div>

              <div>
                <span>GUIDELINES FOR</span>
                <h3>Parents</h3>
              </div>
            </div>

            <div className="rule-list">
              {parentRules.map((rule, index) => (
                <div className="rule-item" key={index}>
                  <FaCheckCircle className="check green-check" />

                  <div>
                    <h4>{rule.title}</h4>
                    <p className="it-feature-content " >{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Discipline */}
        <div className="rule-card discipline-card">
          <div className="card-title">
            <div className="title-icon blue-icon">
              <FaUserCheck />
            </div>

            <div>
              <span>CODE OF CONDUCT</span>
              <h3>Discipline & Behaviour Guidelines</h3>
            </div>
          </div>

          <div className="discipline-grid">
            {disciplineRules.map((rule, index) => (
              <div className="rule-item" key={index}>
                <FaCheckCircle className="check green-check" />

                <div>
                  <h4>{rule.title}</h4>
                  <p className="it-feature-content ">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prohibited */}
        <div className="prohibited-card">
          <div className="card-title">
            <div className="title-icon red-icon">
              <FaBan />
            </div>

            <div>
              <span>IMPORTANT</span>
              <h3>Prohibited Items & Strict Regulations</h3>
            </div>
          </div>

          <div className="warning-box">
            <FaExclamationTriangle />

            <div>
              <h4>Important School Policy</h4>
              <p className="it-feature-content ">
                Students should not bring unauthorized or potentially harmful
                items to the school campus.
              </p>
            </div>
          </div>

          <div className="prohibited-list">
            {prohibitedItems.map((item, index) => (
              <div className="prohibited-item" key={index}>
                <span>×</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Parent Cooperation */}
        <div className="cooperation-card">

          <div className="cooperation-icon">
            <FaHandshake />
          </div>

          <h3>Parental Cooperation & Support</h3>

          <p className="it-feature-content ">
            A strong partnership between parents and the school plays an
            important role in a child's academic and personal development.
            We encourage parents to stay actively involved in their child's
            educational journey.
          </p>

          <div className="cooperation-points">
            <div>
              <FaClock />
              <span>Ensure Regular Attendance</span>
            </div>

            <div>
              <FaMobileAlt />
              <span>Stay Connected With School</span>
            </div>

            <div>
              <FaUserCheck />
              <span>Encourage Positive Discipline</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}