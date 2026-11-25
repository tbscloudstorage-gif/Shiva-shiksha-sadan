import VideoPopup from "../modals/VideoPopup";
const images = [
  {
    url: "/assets/img/gallery/nishi.jpeg",
    title: "Nidhi Ranga",
  subtitle : "Civil Servant UPSE-CSE 2024",
  link : "https://www.youtube.com/embed/ATUrpcbEcZA"
  },
  {
    url: "/assets/img/about/aw-2.jpg",
    title: "Prof.Dr.Devinder Singh",
    subtitle : "Vice Chancellor National Law University, Sonipat" ,
    link:" https://www.youtube.com/embed/bCD1F82ivLs"
  },
  {
    url: "/assets/img/about/aw-3.png",
    title: "Dr.Ankur Batra",
    subtitle : "Interventional Cardiologist & Healthcare Leader",
    link:" https://www.youtube.com/embed/55Sti5cUIUA"
  },
  {
    url: "/assets/img/about/ac-4.png",
    title: "Kishalay Bhattacharjee",
    subtitle:"Professor & Dean — Jindal School of Journalism and Communication",
    link:" https://www.youtube.com/embed/H6Hy7Sh19yU"
  },
  {
    url: "/assets/img/about/op-jindall.png",
    title: "Kashika Jain",
        subtitle:"Final Year B.Tech Student & AI Enthusiast",
        link:"https://www.youtube.com/embed/Op4MsF-nIxg"

  },
  {
    url: "/assets/img/about/6.png",
    title: "Karnal Singh",
    subtitle:"Former Enforcement Directorate Chief, IPS Officer & Legal Strategist",
    link: " https://www.youtube.com/embed/ccKj0IfZLpY"
  },
  {
    url: "/assets/img/about/iit.png",
    title: "Archana Kamra",
    subtitle:"Head-Foundational Years",
    link:"https://www.youtube.com/embed/dgfPfXzlfQk"
  },
  {
    url: "/assets/img/about/ca.png",
    title: "Gunn Mittal",
    subtitle:"MBBS Pre Final Year Student & Health Advocate   ",
    link:"https://www.youtube.com/embed/1Wl8kNHidj4"
  },
  {
    url: "/assets/img/gallery/hiti.jpeg",
    title: "Hiti Bansal",
    subtitle:"Founder-blogery.org",
    link:"https://www.youtube.com/embed/Iz5gwHJirUw"
  },
  {
    url: "/assets/img/about/ac-22.png",
    title: "Dr.Deepti Garg",
    subtitle:"Orthodontist, MDS",
    link:"https://www.youtube.com/embed/-lhV40mR8Uc"
  },
  {
    url: "/assets/img/about/6.png",
    title: "Ashok k.Pandey",
    subtitle:"Education Leader & Global Citizenship Advocate",
    link:"https://www.youtube.com/embed/EyEgaA67YtY"
  },
  {
    url: "/assets/img/about/ac-43.png",
    title: "Ashok Kumar,IPS",
    subtitle:"Former DGP, Currently Vice Chancellor, Sports University   ",
    link:"https://www.youtube.com/embed/it_uinn_bzI"
  },
  {
     url: "/assets/img/about/ac-43.png",
    title: "Mohan Lal Badoli",
    subtitle:"Thought Leader & Former MLA  ",
    link:"https://www.youtube.com/embed/b1vUCWG_zkI"
  },
   {
    url: "/assets/img/about/ac-43.png",
    title: "Anurag Chandra",
    subtitle:"Educator & Innovator at Thomson Digital",
    link:"https://www.youtube.com/embed/8abkHDh_hik"
  },
   {
    url: "/assets/img/about/ac-43.png",
    title: "Vrinda Khana",
    subtitle:"Author,Youth Leader & Social Change Maker",
    link:"https://www.youtube.com/embed/MtQqUBX4Vb0"
  },
   {
     url: "/assets/img/about/ac-43.png",
    title: "Mukesh garg",
    subtitle:"Social Change Maker",
    link:"https://www.youtube.com/embed/DpS-luhtQW0"
  },
   {
    url: "/assets/img/about/ac-43.png",
    title: "Pracheta Singh",
    subtitle:"CJM & Secretary, District Legal Services Authority     ",
    link:"https://www.youtube.com/embed/CRiB4iFYb7w"
  }
   
   
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
<VideoPopup youtube_url= {image.link}>
                <div className="award-image " style={{cursor:"pointer"}}>
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                  />
                </div>
</VideoPopup>
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
