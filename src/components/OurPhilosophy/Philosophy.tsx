
import {
  FaBullseye,
  FaChild,
  FaHeart,
  FaBookOpen,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

export default function Philosophy() {
  const headingStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const iconStyle = {
    color: "#D41A2E",
    fontSize: "25px",
    flexShrink: 0,
  };

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "80px", marginBottom: "200px" }}
      >
        <h1 className="it-breadcrumb-title it-split-text it-split-in-right">
          Our Vision for Holistic Education
        </h1>

        <p>
          At Shiva Shiksha Sadan, we believe education goes beyond
          academics. Our philosophy focuses on nurturing each child's
          potential, building character, and encouraging curiosity,
          confidence, and lifelong learning.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaBullseye style={iconStyle} />
          Education with Purpose
        </h5>

        <p>
          We combine academic excellence with critical thinking,
          creativity, communication, and problem-solving skills,
          helping students apply their knowledge in everyday life.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaChild style={iconStyle} />
          Nurturing the Whole Child
        </h5>

        <p>
          We encourage intellectual, emotional, physical, and social
          development through sports, arts, technology, competitions,
          and activities beyond the classroom.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaHeart style={iconStyle} />
          Values at the Heart of Learning
        </h5>

        <p>
          Respect, honesty, discipline, compassion, and responsibility
          guide our approach, helping students develop strong character
          and become responsible members of society.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaBookOpen style={iconStyle} />
          Tradition with a Progressive Outlook
        </h5>

        <p>
          Since 1974, Shiva Shiksha Sadan has combined traditional
          values with modern teaching methods, preparing students
          to embrace new opportunities while staying grounded
          in strong principles.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaLightbulb style={iconStyle} />
          Empowering Independent Thinkers
        </h5>

        <p>
          We inspire students to ask questions, explore ideas,
          think independently, and learn through practical
          experiences that build confidence and creativity.
        </p>

        <h5 className="mt-4" style={headingStyle}>
          <FaGraduationCap style={iconStyle} />
          Preparing Students for Tomorrow
        </h5>

        <p>
          Our goal is to equip students with the knowledge,
          skills, confidence, and values needed to face
          future challenges and achieve their aspirations.
        </p>

        <p>
          At Shiva Shiksha Sadan, we aim to nurture
          <strong>
            {" "}confident, compassionate, knowledgeable, and
            responsible individuals
          </strong>
          {" "}who contribute positively to society.
        </p>
      </div>
    </>
  );
}
