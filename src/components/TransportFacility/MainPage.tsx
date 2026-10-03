// import React from "react";
import {
  FaBus,
  FaShuttleVan,
  FaCheck,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaUserShield,
  FaMapMarkedAlt,
  FaFirstAid,
  FaClipboardCheck,
  FaExclamationCircle,
} from "react-icons/fa";


export default function TransportFacility() {

  const transportOptions = [
    {
      icon: <FaBus />,
      title: "School Bus Service",
      type: "bus",
      features: [
        "Spacious seating capacity",
        "GPS tracking enabled",
        "Trained female attendants",
        "First-aid equipped",
        "Regular maintenance checks",
      ],
      info: "Ideal for group transportation with maximum safety",
    },
    {
      icon: <FaShuttleVan />,
      title: "Mini Van Service",
      type: "van",
      features: [
        "Compact and flexible",
        "Quick pick-up and drop",
        "Door-to-door service",
        "Personalized attention",
        "Efficient for smaller groups",
      ],
      info: "Perfect for specific routes with fewer students",
    },
  ];

  const routes = [
    {
      code: "A1",
      title: "Dashrath Puri / Janakpuri Route",
      locations: [
        "Dashrath Puri Main Market",
        "Janakpuri District Center",
        "Janakpuri A-Block",
        "C-2B Janakpuri",
      ],
    },
    {
      code: "A2",
      title: "Uttam Nagar / Check Post Route",
      locations: [
        "Uttam Nagar East Metro",
        "Uttam Nagar West",
        "Dwarka Check Post",
        "Mohan Garden",
      ],
    },
    {
      code: "A3",
      title: "Dada Dev Hospital Route",
      locations: [
        "Dada Dev Hospital Main Gate",
        "Raghuram Nagar",
        "Sector 22 Dwarka",
        "Sector 23 Dwarka",
      ],
    },
    {
      code: "A4",
      title: "Dwarka Route",
      locations: [
        "Dwarka Sector 6",
        "Dwarka Sector 10",
        "Dwarka Sector 12",
        "Dwarka Sector 13",
      ],
    },
  ];

  const safetyStandards = [
    {
      icon: <FaUserShield />,
      title: "Trained Staff",
      description: "Experienced drivers and trained female attendants",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Live Tracking",
      description: "GPS enabled vehicles with real-time tracking",
    },
    {
      icon: <FaFirstAid />,
      title: "Medical Support",
      description: "First-aid kits and emergency response training",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Regular Inspection",
      description: "Routine vehicle checks and safety inspections",
    },
  ];

  const importantInfo = [
    "Transport facility is subject to availability on specific routes",
    "Parents must accompany children to and from pickup points",
    "Any changes in address must be notified in advance",
    "Transport rules and regulations must be strictly followed",
  ];

  return (
    <main className="transport-page">

      


      {/* ============================
          TRANSPORT OPTIONS
      ============================ */}
      <section className="transport-section transport-options-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span>TRANSPORT OPTIONS</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Choose Your Comfort Zone</h2>

          </div>


          <div className="transport-options-grid">

            {transportOptions.map((item, index) => (

              <div className="transport-option-card" key={index}>

                <div
                  className={`transport-option-icon ${
                    item.type === "van" ? "green" : ""
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">{item.title}</h3>


                <div className="transport-feature-list">

                  {item.features.map((feature, featureIndex) => (

                    <div
                      className="transport-feature"
                      key={featureIndex}
                    >
                      <FaCheck />

                      <span>{feature}</span>
                    </div>

                  ))}

                </div>


                <div className="transport-info-box">

                  <FaInfoCircle />

                  <span>{item.info}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ============================
          ROUTES
      ============================ */}
      <section className="transport-section routes-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span>COVERAGE AREA</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Our Transport Routes</h2>

            <p>
              Serving major residential areas in and around Dwarka with
              4 convenient routes
            </p>

          </div>


          <div className="transport-routes-grid">

            {routes.map((route, index) => (

              <div className="transport-route-card" key={index}>

                <div className="route-code">
                  {route.code}
                </div>

                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">{route.title}</h3>


                <div className="route-location-list">

                  {route.locations.map((location, locationIndex) => (

                    <div
                      className="route-location"
                      key={locationIndex}
                    >
                      <FaMapMarkerAlt />

                      <span>{location}</span>
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ============================
          SAFETY
      ============================ */}
      <section className="transport-section safety-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span>SAFETY FIRST</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Our Safety Standards</h2>

            <p>
              Ensuring the highest safety standards for your child's commute
            </p>

          </div>


          <div className="safety-grid">

            {safetyStandards.map((item, index) => (

              <div className="safety-card" key={index}>

                <div className="safety-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ============================
          IMPORTANT INFORMATION
      ============================ */}
      <section className="important-section " style={{marginBottom : "80px"}}>

        <div className="transport-container">

          <div className="important-box">

            <div className="important-heading">

              <FaExclamationCircle />

              <h2>Important Information</h2>

            </div>


            <div className="important-list">

              {importantInfo.map((item, index) => (

                <div className="important-item" key={index}>

                  <FaCheck />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}