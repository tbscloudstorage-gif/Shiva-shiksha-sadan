import React, { useState } from "react";
import {
  FaBookOpen,
  FaChartBar,
  FaClipboardCheck,
  FaGraduationCap,
  FaCheck,
} from "react-icons/fa";


type TabType = "pre-primary" | "middle" | "senior";

interface AssessmentCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AssessmentData {
  heading: string;
  session: string;
  evaluation: string;
  cards: AssessmentCard[];
  areas: string[];
}

export default function AssessmentPolicy() {
  const [activeTab, setActiveTab] =
    useState<TabType>("pre-primary");

  const assessmentData: Record<TabType, AssessmentData> = {
    "pre-primary": {
      heading: "Pre-Primary To Class III Assessment System",

      session: "Academic Session 2026-2027",

      evaluation:
        "Two Evaluation Periods: Evaluation I (April 2026 – September 2026) & Evaluation II (October 2026 – March 2027)",

      cards: [
        {
          title: "Continuous Comprehensive Evaluation",
          description:
            "Learning as an ongoing, wholesome process evaluated through daily progress in academic and co-curricular activities.",
          icon: <FaBookOpen />,
        },
        {
          title: "Multi-Dimensional Assessment",
          description:
            "Based on classroom interaction, general awareness, work quality, concept internalization, and learning outcomes.",
          icon: <FaChartBar />,
        },
        {
          title: "Cycle Tests & Assignments",
          description:
            "Each Evaluation comprises Two Cycle Tests per subject with Revision Assignments and Subject Specific Tasks.",
          icon: <FaClipboardCheck />,
        },
        {
          title: "7-Point Grading System",
          description:
            "Letter grades based on a 7-point scale awarded for Scholastic and Co-Scholastic skills assessment.",
          icon: <FaGraduationCap />,
        },
      ],

      areas: [
        "Social & Emotional Development",
        "Physical Education/Sports",
        "Cleanliness and Discipline",
        "Dance, Music and Art",
        "Work Habits",
      ],
    },

    middle: {
      heading: "Class IV To VIII Assessment System",

      session: "Academic Session 2026-2027",

      evaluation:
        "Students are evaluated through periodic tests, subject enrichment activities, assignments and term examinations.",

      cards: [
        {
          title: "Periodic Assessments",
          description:
            "Regular assessments are conducted throughout the academic session to evaluate understanding and academic progress.",
          icon: <FaClipboardCheck />,
        },
        {
          title: "Subject Enrichment",
          description:
            "Practical work, projects, activities and classroom participation form an important part of the assessment.",
          icon: <FaBookOpen />,
        },
        {
          title: "Term Examinations",
          description:
            "Structured examinations are conducted according to the school's academic calendar and CBSE guidelines.",
          icon: <FaChartBar />,
        },
        {
          title: "Co-Scholastic Development",
          description:
            "Students are assessed in discipline, sports, art, work habits, communication and other developmental areas.",
          icon: <FaGraduationCap />,
        },
      ],

      areas: [
        "Work Education",
        "Health & Physical Education",
        "Art Education",
        "Discipline",
        "Communication Skills",
        "Social Development",
      ],
    },

    senior: {
      heading: "Class IX To XII Assessment System",

      session: "Academic Session 2026-2027",

      evaluation:
        "Assessment and promotion are conducted in accordance with the latest CBSE examination and academic guidelines.",

      cards: [
        {
          title: "Periodic Tests",
          description:
            "Periodic assessments are conducted to continuously evaluate students' academic understanding and progress.",
          icon: <FaClipboardCheck />,
        },
        {
          title: "Internal Assessment",
          description:
            "Internal assessment includes projects, practical work, subject enrichment activities and classroom performance.",
          icon: <FaBookOpen />,
        },
        {
          title: "Annual Examination",
          description:
            "Annual examinations evaluate the complete academic syllabus according to the prescribed examination pattern.",
          icon: <FaChartBar />,
        },
        {
          title: "CBSE Evaluation",
          description:
            "Board classes follow assessment, practical examination and evaluation requirements prescribed by CBSE.",
          icon: <FaGraduationCap />,
        },
      ],

      areas: [
        "Academic Performance",
        "Practical & Project Work",
        "Internal Assessment",
        "Health & Physical Education",
        "Work Experience",
        "Art Education",
      ],
    },
  };

  const currentData = assessmentData[activeTab];

  const importantNotes = [
    "Assessment patterns are subject to change as per latest CBSE guidelines",
    "Change of subjects in Class XI allowed until July 15th",
    "Best two out of three Periodic Assessments considered for final assessment",
    "No subject change permitted after passing Class XI",
    "Computer Science and AI assessed through internal and external evaluations",
  ];

  return (
    <main className="assessment-page">

      {/* ================= HERO ================= */}

      <section className="assessment-hero">
        <div className="assessment-container">

          <div className="assessment-subtitle">
            Academic Excellence Through Comprehensive Evaluation
          </div>

          <h1 className="it-breadcrumb-title it-split-text it-split-in-right">
            Assessment &amp; Promotion Policy 2026-27
          </h1>

          <div className="assessment-intro">
            <p>
              In today's competitive environment, effective internal
              assessment processes are key to keeping students engaged.
              The assessment includes pen paper tests, projects, class
              enrichment activities and so on according to a well drafted
              schedule.
            </p>

            <p>
              Various parameters related to different subjects will be
              assessed on the basis of artistically designed activities
              to analyse the entire personality of the child. The
              assessment shall continue throughout the year.
            </p>
          </div>


          {/* ================= TABS ================= */}

          <div
            className="assessment-tabs"
            role="tablist"
            aria-label="Assessment Classes"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "pre-primary"}
              className={
                activeTab === "pre-primary" ? "active" : "" 
              }
              onClick={() => setActiveTab("pre-primary")}
            >
              Pre-Primary to Class III
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "middle"}
              className={activeTab === "middle" ? "active" : ""}
              onClick={() => setActiveTab("middle")}
            >
              Class IV to VIII
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "senior"}
              className={activeTab === "senior" ? "active" : ""}
              onClick={() => setActiveTab("senior")}
            >
              Class IX to XII
            </button>
          </div>

        </div>
      </section>


      {/* ================= TAB CONTENT ================= */}

      <section className="assessment-content-section">
        <div className="assessment-container">

          <div
            className="assessment-content-card"
            key={activeTab}
            role="tabpanel"
          >

            <h2>{currentData.heading}</h2>


            {/* Session Box */}

            <div className="academic-session-box">
              <h3>{currentData.session}</h3>

              <p>{currentData.evaluation}</p>
            </div>


            <div className="assessment-divider" />


            {/* Assessment Cards */}

            <div className="assessment-card-grid">
              {currentData.cards.map((card, index) => (
                <div
                  className="assessment-feature-card"
                  key={index}
                >
                  <div className="assessment-icon">
                    {card.icon}
                  </div>

                  <div className="assessment-card-text">
                    <h3>{card.title}</h3>

                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Co-Scholastic */}

            <div className="co-scholastic">
              <h3>Co-Scholastic Areas Assessed:</h3>

              <div className="co-scholastic-grid">
                {currentData.areas.map((area, index) => (
                  <div
                    className="check-list-item"
                    key={index}
                  >
                    <FaCheck />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* ================= IMPORTANT NOTES ================= */}

          <div className="important-notes">
            <h2>Important Notes</h2>

            <div className="important-notes-grid">
              {importantNotes.map((note, index) => (
                <div
                  className="check-list-item"
                  key={index}
                >
                  <FaCheck />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}