
const images = [
  {
    url: "/assets/img/about/aw-1.png",
    title: "Utkrisht Shikshak Samman",
  subtitle : "Ms. Pooja Bansal & Ms. Kajal Arora Honoured by Bharat Vikas Parishad"
  },
  {
    url: "/assets/img/about/aw-2.jpg",
    title: "Best Early Curriculum Award",
    subtitle : "Awarded to the School by Bharat Vikas Parishad, Received by Junior School Head Ms. Archana Kamra"
  },
  {
    url: "/assets/img/about/aw-3.png",
    title: "Education Icon of the Year",
    subtitle : "Director Mr. Arun Bansal Honoured at the 2nd National Education Conclave, Greater Noida"
  },
  {
    url: "/assets/img/about/ac-4.png",
    title: "Shikshak Samman Samaroh 2026",
    subtitle:"Ms. Abha Tyagi, Ms. Anju, Ms. Sonu, Ms. Sonam Jawa & Ms. Monika Honoured by Dainik Bhaskar"
  },
  {
    url: "/assets/img/about/ac-4.png",
    title: "O.P. Jindal University",
        subtitle:"2nd Position in GK Quiz, Selected for District Level"

  },
  {
    url: "/assets/img/about/6.png",
    title: "Bharat Vikas Parishad",
    subtitle:"1st Position in State-Level Group Song Competition"
  },
  {
    url: "/assets/img/about/iit.png",
    title: "Kreativity League 2026",
    subtitle:"Selected for Grand Finale at IIT Delhi"
  },
  {
    url: "/assets/img/about/ca.png",
    title: "CA Intermediate Examination",
    subtitle:"Keshav Singla (Batch 2024–25) Secured AIR 6"
  },
  {
    url: "/assets/img/about/6.png",
    title: "Bright Scholar School",
    subtitle:"Super First Position in Inter-School Song & Dance Competition, Winner of Overall Trophy"
  },
  {
    url: "/assets/img/about/6.png",
    title: "Google DevFest 2026",
    subtitle:"Lakshay (Class XI-B) Marked His Presence"
  },
  {
    url: "/assets/img/about/6.png",
    title: "Aadarsh Chhatra Samman",
    subtitle:"Bhuvi Bansal (IX-E) & Tishika (XI) Honoured by Bharat Vikas Parishad"
  },
  {
    url: "/assets/img/about/6.png",
    title: "UPSC NDA 2026",
    subtitle:"Yuvraj (Class XII) Qualified for NDA"
  },
  {
    url: "/assets/img/about/6.png",
    title: "District-Level Hindi Group Song Competition",
    subtitle:"1st Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "District-Level Sanskrit Group Song Competition",
    subtitle:"1st Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "Bharat Ko Jano Quiz – Senior Category",
    subtitle:"2nd Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "Bharat Ko Jano Quiz – Junior Category",
    subtitle:"3rd Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "Indian Classical Dance Competition",
    subtitle:"Sofia Secured 1st Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "Veer Ras Kavita Pathan – Junior",
    subtitle:"Neelakshi Secured 3rd Position at Bharat Vikas Parishad"
  },
   {
    url: "/assets/img/about/6.png",
    title: "Veer Ras Kavita Pathan – Senior",
    subtitle:"Jigyasa Secured 3rd Position at Bharat Vikas Parishad"
  },
  {
    url: "/assets/img/about/6.png",
    title: "NEET Examination",
    subtitle:"Garima Successfully Qualified for NEET"
  },
];

export default function ImageSection() {
  return (
    <section className="awards-section">
      <div className="container">

        <div className="row g-3 g-md-4">
          {images.map((image, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={index}
            >
              <div className="award-card">

                <div className="award-image">
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                  />
                </div>

                <div className="p-3">
                  <h6 className="award-title text-center mb-2">
                    {image.title}
                  </h6>
                                   <p className="text-center ">{image.subtitle}</p>

                 
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .awards-section {
          padding: 60px 0 110px;
          background: #ffffff;
        }

        .award-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e9edf3;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .award-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f7f8fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .award-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.4s ease;
        }

        .award-card:hover .award-image img {
          transform: scale(1.03);
        }

        .award-card-content {
          padding: 20px 16px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-top: 1px solid #f0f0f0;
        }

        .award-title {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.5;
          color: #172b4d;
          margin: 0;
          overflow-wrap: anywhere;
        }

        /* Tablet */
        @media (min-width: 576px) and (max-width: 991px) {
          .awards-section {
            padding: 45px 0 75px;
          }

          .award-image {
            height: 230px;
          }

          .award-title {
            font-size: 16px;
          }
        }

        /* Mobile */
        @media (max-width: 575px) {
          .awards-section {
            padding: 35px 0 60px;
          }

          .award-card {
            border-radius: 12px;
          }

          .award-image {
            height: 240px;
            padding: 10px;
          }

          .award-card-content {
            padding: 16px 12px;
          }

          .award-title {
            font-size: 16px;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .award-image {
            height: 200px;
          }

          .award-title {
            font-size: 15px;
          }
        }

        /* Touch devices */
        @media (hover: none) {
          .award-card:hover {
            transform: none;
          }

          .award-card:hover .award-image img {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .award-card,
          .award-image img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
