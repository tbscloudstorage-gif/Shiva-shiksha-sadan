
import React from "react";

const FacebookFeed: React.FC = () => {
  // Replace with your actual Facebook Page URL
  const facebookPageUrl =
    "https://www.facebook.com/shivashikshasadansnp";

  const embedUrl =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
      href: facebookPageUrl,
      tabs: "timeline",
      width: "500",
      height: "400",
      small_header: "false",
      adapt_container_width: "true",
      hide_cover: "false",
      show_facepile: "false",
    }).toString();

  return (
    <section
      style={{
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "#f8faf9",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h5 className="it-feature-title"
          style={{
            
            marginBottom: "12px",
          }}
        >
          Follow Us on Facebook
        </h5>

        <p className="feature-notice-item "
          style={{
            
            marginBottom: "30px",
          }}
        >
          Stay connected with our latest school
          activities, events and achievements.
        </p>

        {/* Facebook Page Embed */}
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            title="Facebook Page Feed"
            src={embedUrl}
            width="500"
            height="400"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              maxWidth: "500px",
              height: "400px",
            }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>

        {/* Visit Facebook Button */}
        
      </div>
    </section>
  );
};

export default FacebookFeed;
