



const clubs = [
  {
    title: "The English Club",
    description:
      "Encouraging curiosity, experimentation and scientific thinking through practical activities.",
    image: "/assets/img/about/english-club-las.png",
  },
  {
    title: "The Heritage Club(The S.St Club)",
    description:
      "The Heritage Club inspires students to appreciate and preserve cultural and natural heritage while fostering awareness, creativity, independence and self-expression.",
    image: "/assets/img/about/heitage.png",
  },
  {
    title: "Wings Of Fire (The Science Club)",
    description:
      "Nurtures curiosity, innovation and scientific thinking through hands-on experiments, exploration and creative problem-solving.",
    image: "/assets/img/about/science-club.png",
  },
  {
    title: "Aryabhatta (The Maths Club)",
    description:
      "Providing a platform for imagination, creativity and artistic expression.",
    image: "/assets/img/about/maths-club.png",
  },
  {
    title: "Bharat Vani (The Hindi Club)",
    description:
      "Discovering musical interests and developing rhythm, confidence and creativity.",
    image: "/assets/img/about/hindi-club.png",
  },
  {
    title: "Techno Club (The Computer Club)",
    description:
      "Expressing ideas and emotions through movement, performance and dance.",
    image: "/assets/img/about/computer-club.JPG",
  },
   {
    title: "AI INTEGRATION & ROBOTICS CLUB",
    description:
      "Expressing ideas and emotions through movement, performance and dance.",
    image: "/assets/img/about/english-club-las.png",
  },
  {
    title: "Impasto (The Drawing Club)",
    description:
      "Expressing ideas and emotions through movement, performance and dance.",
    image: "/assets/img/about/impasto.png",
  },
];



const gallery = [
  "gallery-1.webp",
  "gallery-2.webp",
  "gallery-3.webp",
  "gallery-4.webp",
  "gallery-5.webp",
  "gallery-6.webp",
  "gallery-7.webp",
  "gallery-8.webp",
];

type ActivityCardProps = {
  title: string;
  description: string;
  image: string;
};

const ActivityCard = ({
  title,
  description,
  image,
}: ActivityCardProps) => (
  <article className="shiva-activity-card">
    <div className="shiva-activity-image">
      <img src={image} alt={title} loading="lazy" decoding="async" />
    </div>
    <div className="shiva-activity-content">
      <h3 className="it-course-title">{title}</h3>
      <p>{description}</p>
    </div>
  </article>
);

const LifeAtShiva = () => {
  return (
    <main className="life-shiva-page">

    
      {/* INTRODUCTION */}
      <section className="life-shiva-intro" id="explore-life">
        <div className="life-shiva-container">
          <div className="life-shiva-intro-grid">
            <div className="life-shiva-intro-text">
              <span className="life-shiva-eyebrow">
                MORE THAN JUST LEARNING
              </span>
              <h4 className="it-section-title">
                Every Day Brings a
                <span> New Opportunity</span>
              </h4>
              <p>
                At Shiva Shiksha Sadan, education extends beyond
                textbooks and classrooms. From sports and creative
                pursuits to scientific exploration and collaborative
                experiences, students are encouraged to discover
                their interests, develop their abilities and grow
                with confidence.
              </p>
              <p>
                Every activity, experience and opportunity contributes
                to shaping curious minds, responsible individuals
                and confident learners.
              </p>
            </div>

            <div className="life-shiva-intro-images">
              <img
                src="assets/img/about/las-1.JPG"
                alt="Students participating in school activities"
                loading="lazy"
              />
              <img
                src="assets/img/about/las-2.jpeg"
                alt="Student activities at Shiva"
                className="life-shiva-intro-small"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS */}
      <section className="life-shiva-section" id="sports">
        <div className="life-shiva-container">
          <div className="life-shiva-section-heading">
            <div>
              <span className="life-shiva-eyebrow">ENERGY IN ACTION</span>
              <h4 className="it-section-title">Sports & Fitness</h4>
              <p>
                Building strength, teamwork and sportsmanship through
                active participation and healthy competition.
              </p>
            </div>
            <span className="life-shiva-section-number">01</span>
          </div>

          <div className="life-shiva-feature-image">
            <img
              src="assets/img/about/banner-sports.JPG"
              alt="Sports activities at Shiva Shiksha Sadan"
              loading="lazy"
            />
            <div className="life-shiva-image-caption">
              <span>Play. Participate. Progress.</span>
              <h4 className="it-section-title text-white"  >Stronger Bodies. Stronger Minds.</h4>
            </div>
          </div>

        

          <div className="life-shiva-gallery-strip">
            {["indorr.JPG", "indor-2.JPG", "indor-4.JPG" ,"indor.JPG", "games.JPG", "indor-3.JPG" ].map(
              (image) => (
                <img
                  key={image}
                  src={`assets/img/about/${image}`}
                  alt="Students enjoying sports"
                  loading="lazy"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* SHIVA HOSPITAL */}
      <section className="life-shiva-hospital" id="hospital">
        <div className="life-shiva-container">
          <div className="life-shiva-hospital-grid">
            <div className="life-shiva-hospital-image">
              <img
                src="assets/img/about/hospital.JPG"
                alt="Shiva Hospital"
                loading="lazy"
              />
            </div>

            <div className="life-shiva-hospital-content">
              <span className="life-shiva-eyebrow">
                CARE & WELL-BEING
              </span>
              <h4 className="it-section-title">
                Shiva Hospital
                <span> Caring Beyond Classrooms</span>
              </h4>
              <p>
                The well-being of students is an important part of
                their learning journey. Shiva Hospital represents
                our commitment to creating a caring environment
                where health and well-being receive attention.
              </p>
              <p>
                Through a focus on health awareness and medical
                support, we strive to make student well-being an
                integral part of school life.
              </p>
             
            </div>
          </div>

          <div className="life-shiva-hospital-gallery">
            {["hospital-1.JPG", "hospital-2.JPG", "hospital-3.JPG"].map(
              (image) => (
                <img
                  key={image}
                  src={`assets/img/about/${image}`}
                  alt="Shiva Hospital facilities"
                  loading="lazy"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section className="life-shiva-section life-shiva-clubs" id="clubs">
        <div className="life-shiva-container">
          <div className="life-shiva-section-heading">
            <div>
              <span className="life-shiva-eyebrow">
                DISCOVER YOUR INTERESTS
              </span>
              <h4 className="it-section-title">Clubs & Activities</h4>
              <p>
                Every student has a unique talent. Our clubs offer
                opportunities to explore interests, learn new skills
                and express individuality.
              </p>
            </div>
            <span className="life-shiva-section-number">02</span>
          </div>

          <div className="life-shiva-card-grid life-shiva-club-grid">
            {clubs.map((item) => (
              <ActivityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* LABORATORIES */}
      {/* <section className="life-shiva-labs" id="laboratories">
        <div className="life-shiva-container">
          <div className="life-shiva-section-heading">
            <div>
              <span className="life-shiva-eyebrow">
                LEARN BY EXPLORING
              </span>
              <h4 className="it-section-title">Laboratories & Innovation</h4>
              <p>
                Where curiosity meets practical learning and
                classroom concepts turn into real experiences.
              </p>
            </div>
            <span className="life-shiva-section-number">03</span>
          </div>

          <div className="life-shiva-lab-grid">
            {laboratories.map((item) => (
              <ActivityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section> */}

      {/* CREATIVE ACTIVITIES */}
      <section className="life-shiva-creative" id="creative-activities">
        <div className="life-shiva-container life-shiva-creative-grid">
          <div className="life-shiva-creative-content">
            <span className="life-shiva-eyebrow">
              IMAGINE. CREATE. EXPRESS.
            </span>
            <h4 className="it-section-title">
              Creativity Has
              <span> No Boundaries</span>
            </h4>
            <p>
              From music and dance to art, craft and cultural
              performances, students get opportunities to discover
              their creative side and express themselves with
              confidence.
            </p>
          </div>

          <div className="life-shiva-creative-images">
            <img
              src="/assets/img/about/"
              alt="Creative activities"
              loading="lazy"
            />
            <img
              src="/images/life-at-shiva/creative/creative-2.webp"
              alt="Student cultural activities"
              loading="lazy"
            />
            <img
              src="/images/life-at-shiva/creative/creative-3.webp"
              alt="Art and craft activities"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="life-shiva-section" id="events">
        <div className="life-shiva-container">
          <div className="life-shiva-section-heading">
            <div>
              <span className="life-shiva-eyebrow">
                MEMORIES THAT LAST
              </span>
              <h4 className="it-section-title">Events & Celebrations</h4>
              <p>
                Celebrating traditions, achievements, festivals
                and special moments that bring our school community
                together.
              </p>
            </div>
            <span className="life-shiva-section-number">04</span>
          </div>

          <div className="life-shiva-events-grid">
            <div className="life-shiva-event-large">
              <img
                src="/images/life-at-shiva/events/event-main.webp"
                alt="School celebrations"
                loading="lazy"
              />
              <div>
                <span>CELEBRATING TOGETHER</span>
                 <h4 className="it-section-title text-white">Every Celebration Creates a Memory</h4>
              </div>
            </div>

            <div className="life-shiva-event-small">
              <img
                src="/images/life-at-shiva/events/event-1.webp"
                alt="School event"
                loading="lazy"
              />
              <img
                src="/images/life-at-shiva/events/event-2.webp"
                alt="School celebration"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <section className="life-shiva-gallery" id="campus-gallery">
        <div className="life-shiva-container">
          <div className="life-shiva-gallery-heading">
            <span className="life-shiva-eyebrow">MOMENTS AT SHIVA</span>
            <h4 className="it-section-title">A Glimpse Into Our World</h4>
            <p>
              Little moments, big achievements and countless
              experiences that make life at Shiva special.
            </p>
          </div>

          <div className="life-shiva-masonry">
            {gallery.map((image, index) => (
              <div className={`life-shiva-gallery-item gallery-item-${index + 1}`} key={image}>
                <img
                  src={`/images/life-at-shiva/gallery/${image}`}
                  alt={`Life at Shiva - campus moment ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    

    </main>
  );
};

export default LifeAtShiva;
