

const objectives = [
  {
    icon: "♧",
    title: "Conflict Management",
    color: "pink",
  },
  {
    icon: "◎",
    title: "Critical and Creative Thinking Skills",
    color: "purple",
  },
  {
    icon: "♙",
    title: "Emotional Intelligence Skills",
    color: "peach",
  },
  {
    icon: "▣",
    title: "Advanced Use of Technology",
    color: "blue",
  },
];

// Replace these paths with your actual gallery images.
// Add the images inside public/images/train-the-trainers/
const inHouseImages = [
  "tt-1.png",
  "tt-2.png",
  "tt-3.png",
  "tt-4.png",
  "tt-5.png",
  "tt-6.png",
  "tt-7.png",
  "tt-8.png",
  "tt-9.png",
  
  "tt-11.png",
  "tt-12.png",
  "tt-13.png",
];

const engagementImages = [
  "te-1.png",
  "te-2.png",
  "te-4.png",
  "te-5.png",
  "te-6.png",
  "te-7.png",
  "te-8.png",
  "te-9.png",
  "te-10.png",
];

const trainers = [
  {
    name: "Training with Dr. Deny's P. Leighton",
    description:
      "The Communication Enrichment Programme was a specialised Teachers' Programme led by Dr. Deny's P. Leighton, the Dean of India's School of Language and Literature, and his team. This initiative was dedicated to enhancing the communication skills of our educators. By equipping teachers with improved communication techniques, it fosters a more engaging and interactive learning environment for our students. The programme was poised to enhance teaching effectiveness, boost student confidence and provide a comprehensive education that extends beyond knowledge transfer.",
    images: ["td-1.png", "td-2.png", "td-3.png"],
  },
  {
    name: "Training with Mr. Mukesh Kumar",
    description:
      "An informative session unlocking teachers' potential and beyond the curriculum with Mr. Mukesh Kumar.",
    bullets: [
      "An overview of Sundar School, empowering citizens to track mobile connections.",
      "Cyber safety tips, including insights to browsing and email security.",
      "Introduction to WhatsApp tools and websites.",
      "A glimpse into managing Google timelines and online privacy.",
      "On-the-spot group activities, creating blogs on various topics.",
      "Impressive reviews of Digital Diaries.",
      "Learning to stay YouTube videos at specific points to make impactful presentations.",
    ],
    images: [
      "tm-1.png",
      "tm-2.png",
      "tm-3.png",
      "tm-4.png",
      "tm-5.png",
      "tm-6.png",
    ],
  },
  {
    name: "Training with Mr. Rajesh Aggarwal",
    description:
      "A Hindi-learning session was led by the recognised motivational leader and Personal Branding Coach, Mr. Rajesh Aggarwal. He inspired and motivated the teachers through methodological learning. His sessions covered communication, confidence building and effective teaching practices. The programme encouraged teachers to bring innovative approaches to their classrooms and make learning more engaging for students.",
    images: [
      "tr-1.png",
      "tr-2.png",
      "tr-3.png",
      "tr-4.png",
      "tr-5.png",
      "tr-6.png",
    ],
  },
];

const imagePath = (image: string) =>
  `/public/assets/img/faculty/${image}`;

const PhotoGallery = ({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) => (
  <div className={`ttt-gallery ${className}`}>
    {images.map((image, index) => (
      <div className="ttt-gallery-item" key={image}>
        <img
          src={imagePath(image)}
          alt={`Teacher training activity ${index + 1}`}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const TrainTheTrainers = () => {
  return (
    <main className="ttt-page">

 

      <div className="ttt-container mt-5 pt-5">

      

        {/* Objectives */}
        <section className="ttt-objectives ">
          <p className="ttt-section-intro mt-5 ">
            Shiva Shiksha Sadan always stands beside the
            transformative use of technology and digital education.
            To update the knowledge and skills according to the
            ever-changing world and its growing aspirations, training
            of trainers is being conducted here consistently.
          </p>

          <div className="ttt-objective-grid">
            {objectives.map((item) => (
              <div
                className={`ttt-objective-card ${item.color}`}
                key={item.title}
              >
                <span className="ttt-objective-icon">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

         
        </section>

        {/* In House Training */}
        <section className="ttt-section">
          <h4 className="it-section-title text-center mb-5">In House Training</h4>
          <p className="ttt-section-intro ">
            Our educators explored the Corrective-Pedagogical
            approach through specialised training sessions.
            These sessions focus on strengthening teaching
            strategies, nurturing creativity, improving classroom
            engagement and building a strong foundation for
            future-ready learning.
          </p>

          <PhotoGallery
            images={inHouseImages}
            className="ttt-inhouse-gallery"
          />
        </section>

        {/* Time to Engage */}
        <section className="ttt-section ttt-engage-section">
          <h4  className="it-section-title text-center">Time to Engage</h4>
          <p className="ttt-section-intro">
            Teachers participated in interactive language enrichment
            sessions, fostering English language confidence and
            communication skills. Activities such as group discussions,
            presentations, role plays and collaborative exercises
            helped make learning active, engaging and meaningful.
          </p>

          <PhotoGallery
            images={engagementImages}
            className="ttt-engage-gallery"
          />
        </section>

        {/* Trainer Sections */}
        {trainers.map((trainer, index) => (
          <section className="ttt-trainer-section" key={trainer.name}>
            <h4 className="it-section-title text-center">{trainer.name}</h4>

            <p className="ttt-section-intro">
              {trainer.description}
            </p>

            {trainer.bullets && (
              <ul className="ttt-trainer-list">
                {trainer.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            <PhotoGallery
              images={trainer.images}
              className={`ttt-trainer-gallery trainer-gallery-${index + 1}`}
            />
          </section>
        ))}

      </div>
    </main>
  );
};

export default TrainTheTrainers;
