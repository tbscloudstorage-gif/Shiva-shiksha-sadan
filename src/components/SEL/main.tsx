
import {
  FaOm,
  FaHeart,
  FaPrayingHands,
  FaLeaf,
  FaUsers,
  FaBookOpen,
  FaSun,
  FaHands,
  FaArrowRight,
  FaGlobeAsia,
  
 
  FaBalanceScale,
  FaBrain,
  
 
} from "react-icons/fa";


const selPractices = [
  {
    icon: <FaOm />,
    title: "Mantra Chanting",
    description:
      "Beginning with sacred chants helps students experience calmness, focus and a sense of inner balance.",
  },
  {
    icon: <FaSun />,
    title: "Positive Affirmations",
    description:
      "Positive thoughts and affirmations encourage children to develop self-belief, confidence and an optimistic outlook.",
  },
  {
    icon: <FaLeaf />,
    title: "Pranayam",
    description:
      "Simple breathing practices encourage mindfulness, emotional balance and better concentration.",
  },
  {
    icon: <FaHands />,
    title: "Touching Elders' Feet",
    description:
      "A traditional gesture of respect that nurtures gratitude, humility and appreciation for elders.",
  },
  {
    icon: <FaPrayingHands />,
    title: "Guru Vandan",
    description:
      "Honouring teachers and mentors reinforces gratitude, respect and the importance of guidance in lifelong learning.",
  },
];

const communityActivities = [
  {
    title: "Ramoham",
    category: "Cultural & Spiritual Connection",
    image: "/assets/img/about/ramoham.JPG",
    description:
      "Ramoham brings students together through shared cultural experiences, traditional practices and collective participation. It creates opportunities to understand values, develop a sense of belonging and appreciate India's cultural heritage.",
    className: "ramoham-card",
  },
  {
    title: "Kalash Yatra",
    category: "Learning Through Wisdom",
    image: "/assets/img/about/kalash.JPG",
    description:
      "Bhagwat sessions introduce students to timeless teachings and stories that encourage kindness, good conduct, compassion and thoughtful decision-making.",
    className: "bhagwat-card",
  },
  {
    title: "Shiva Hospital",
    category: "Community Care & Responsibility",
    image: "/assets/img/about/shiva-hospital.JPG",
    description:
      "Our connection with Shiva Hospital reflects the importance of care, compassion and service to society. It helps bring attention to community well-being and the value of supporting people around us.",
    className: "hospital-card",
  },
  {
    title: "Hanuman janmutsav",
    category: "Tradition & Togetherness",
    image: "/assets/img/about/hanuman.jpg",
    description:"Hanuman Janmotsav celebrates the strength, courage and devotion of Lord Hanuman, inspiring students to embrace faith, humility, discipline and selfless service in their lives.",
className: "yagna-card",
  },
  {
    title: "Temple Activities",
    category: "Cultural Awareness",
    image: "/assets/img/about/jain.jpg",
    description:
      "Temple visits and related activities help students appreciate Indian traditions, respect cultural heritage and understand the importance of shared values.",
    className: "temple-card",
  },
  {
    title: " Yoga Classes",
    category: "Mind & Body Wellness",
    image: "/assets/img/about/yoga.JPG",
    description:
      " yoga classes encourage healthy routines, mindfulness, physical awareness and emotional well-being in a supportive environment.",
    className: "yoga-card",
  },
 
];

const culturalHighlights = [
  {
  title: "Celebration of Guru Purnima",
  subtitle: "Honouring the Wisdom of Our Gurus",
  image: "/assets/img/about/guru-purnima.JPG",
  description:
    "Guru Purnima is celebrated to honour the invaluable guidance, wisdom and dedication of teachers in shaping young minds. The celebration reminds students of the importance of gratitude, respect, humility and lifelong learning. Through this meaningful occasion, we recognise the profound role of our gurus in guiding students towards knowledge, character and personal growth.",
  className: "kalash-highlight",
},
{
  title: "Jain Mandir",
  subtitle: "A Celebration of Peace & Spiritual Values",
  image: "/assets/img/about/jain-mandir.jpg",
  description:
    "A visit to the Jain Mandir offers students an opportunity to experience peace, reflection and spiritual values. It encourages them to understand the importance of ahimsa, compassion, simplicity, discipline and respect for all living beings. Such experiences deepen cultural awareness and inspire students to embrace kindness, harmony and thoughtful living.",
  className: "ramoham-highlight",
},
];

const socialEmotionalValues = [
  {
    icon: <FaBrain />,
    title: "Self-Awareness",
    text: "Recognising emotions, strengths and personal values.",
  },
  {
    icon: <FaLeaf />,
    title: "Self-Management",
    text: "Developing discipline, patience and emotional balance.",
  },
  {
    icon: <FaHeart />,
    title: "Empathy",
    text: "Understanding others and responding with kindness and care.",
  },
  {
    icon: <FaUsers />,
    title: "Relationship Skills",
    text: "Building meaningful relationships through communication and teamwork.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Responsible Decision-Making",
    text: "Making thoughtful choices guided by strong values.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Social Awareness",
    text: "Respecting different perspectives and contributing positively to society.",
  },
];

const ValuesCultureCommunity = () => {
  return (
    <main className="vcc-page">

      {/* HERO SECTION */}
      <section className="vcc-hero">
        <div className="vcc-hero-decoration vcc-decoration-one"></div>
        <div className="vcc-hero-decoration vcc-decoration-two"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="vcc-hero-content">
                <span className="it-section-subtitle yellow-style">
                  Beyond Academics
                </span>

                <h4 className="it-section-title">
                  Growing Through Meaningful Shared Experiences
                </h4>

                <p className="mb-45">
At Shiva Shiksha Sadan, shared experiences encourage students to express themselves, build self-confidence and develop meaningful connections with others. These interactions nurture empathy, discipline, cooperation, gratitude and a sense of belonging, strengthening their social and emotional growth.                </p>

                <a href="/academics" className="it-btn-yellow theme-bg">
                  Explore Academics <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="vcc-hero-image">
                <img
                  src="/assets/img/about/cultraal.JPG"
                  alt="Students participating in cultural activities at Shiva Shiksha Sadan"
                />

               

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="vcc-intro">
        <div className="container">
          <div className="vcc-section-heading">
            <span className="it-section-subtitle yellow-style">
              Our Educational Philosophy
            </span>

            <h4 className="it-section-title">
              Education That Shapes
              <span> Character & Compassion</span>
            </h4>

            <p>
             We believe strong character is built through everyday experiences. Our school encourages students to develop positive values, emotional awareness and meaningful connections that help them grow into considerate and confident individuals.
            </p>
          </div>

          <div className="row g-4 vcc-intro-points">
            <div className="col-md-4">
              <div className="vcc-intro-card">
                <div className="vcc-intro-icon">
                  <FaBookOpen />
                </div>
                <h6>Learn with Values</h6>
                <p className="">Encouraging honesty, discipline, integrity and respect through daily learning and school practices.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="vcc-intro-card">
                <div className="vcc-intro-icon">
                  <FaHeart />
                </div>
                <h4>Grow with Empathy</h4>
                <p>Helping students understand others, practise kindness and value different perspectives.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="vcc-intro-card">
                <div className="vcc-intro-icon">
                  <FaGlobeAsia />
                </div>
                <h4>Connect with Society</h4>
                <p>Building friendships, cooperation, trust and positive relationships within the school community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: MORAL EDUCATION */}
      <section className="vcc-sel-section" id="moral-education">
        <div className="container">

          <div className="row align-items-center vcc-sel-top">
            <div className="col-lg-6">
              <div className="vcc-sel-image">
                <img
                  src="/assets/img/about/culture-1.jpg"
                  alt="Students participating in moral education and mindfulness activities"
                />

             
              </div>
            </div>

            <div className="col-lg-6">
              <div className="vcc-section-content">
                <span className="it-section-subtitle yellow-style">
                 Everyday Learning
                </span>

                <h4 className="it-section-title">
                  Social & Emotional Learning
                  <span> Begins Within</span>
                </h4>

                <p>
                 At Shiva Shiksha Sadan, learning values begins with small, meaningful experiences. Through morning assemblies, classroom interactions, cultural activities and teacher guidance, students learn to express themselves, respect others, practise discipline and make thoughtful choices.
                </p>

                <p>
                  From the calmness of mantra chanting to the humility of
                  Guru Vandan, every practice offers an opportunity to
                  learn values that extend beyond the classroom.
                </p>

                
              </div>
            </div>
          </div>

          <div className="vcc-practices-heading">
            <span className="it-section-subtitle yellow-style">Everyday Practices</span>
            <h4 className="it-section-title">Small Practices, Lasting Values</h4>
            <p>
             Simple daily practices help students cultivate a positive mindset, self-discipline, emotional balance and a deeper understanding of their responsibilities.
            </p>
          </div>

          <div className="row g-4">
            {selPractices.map((item, index) => (
              
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="vcc-practice-card">
                  <div className="vcc-practice-icon">
                    {item.icon}
                  </div>

                  <span className="vcc-card-number">
                    0{index + 1}
                  </span>

                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KALASH YATRA FEATURE */}
      <section className="vcc-anniversary-section">
        <div className="container">
          <div className="vcc-anniversary-card">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="vcc-anniversary-image">
                  <img
                    src="/assets/img/about/temple.JPG"
                    alt="Kalash Yatra celebrating the 52nd Anniversary of Shiva Shiksha Sadan"
                  />

                
                </div>
              </div>

              <div className="col-lg-6">
                <div className="vcc-anniversary-content">
                  <span className="it-section-subtitle yellow-style">
               Spiritual Harmony
                  </span>

                  <h4 className="it-section-title">
                   A Sacred Space for Peace, Prayer & Reflection
                  </h4>


                  <p>The temple within our school is a serene space where students connect with spirituality, gratitude and inner peace. It inspires them to begin their day with positive thoughts, devotion and a sense of purpose. Through prayer and reflection, students are encouraged to cultivate humility, respect, discipline and compassion. The temple also reflects our commitment to nurturing strong moral values and a mindful approach to life. It stands as a reminder that true education shapes both the mind and the heart.                  </p>


                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMMUNITY CONNECT */}
      <section className="vcc-community-section" id="community-connect">
        <div className="container">

          <div className="vcc-section-heading">
            <span className="it-section-subtitle yellow-style">
              Community Connect
            </span>

            <h4 className="it-section-title">
              Learning to Care,
           Connect & Contribute
            </h4>

            <p>
              Education becomes more meaningful when students connect
              with the world around them. Through cultural gatherings,
              spiritual experiences, wellness activities and community
              initiatives, we encourage children to appreciate the
              importance of kindness, participation and social responsibility.
            </p>
          </div>

          <div className="vcc-community-grid">
            {communityActivities.map((item) => (
              <article
                className={`vcc-community-card ${item.className}`}
                key={item.title}
              >
                <div className="vcc-community-image">
                  <img src={item.image} alt={item.title} />

                 
                </div>

                <div className="vcc-community-content">
                  <span className="vcc-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

   

      {/* SECTION 3: CULTURE & SOCIAL EMOTIONAL LEARNING */}
      <section
        className="vcc-culture-section"
        id="social-emotional-learning"
      >
        <div className="container">

          <div className="vcc-section-heading">
            <span className="it-section-subtitle yellow-style">
              Culture & Character
            </span>

            <h4 className="it-section-title">
              Our Cultural Roots,
             Our Values for Life
            </h4>

            <p>
              Indian traditions offer meaningful opportunities for children
              to understand respect, gratitude, discipline and togetherness.
              At Shiva Shiksha Sadan, cultural experiences form an important
              part of nurturing social and emotional development.
            </p>
          </div>

          <div className="row g-4 vcc-cultural-highlights">
            {culturalHighlights.map((item) => (
              <div className="col-lg-6" key={item.title}>
                <article className="vcc-cultural-card">
                  <div className="vcc-cultural-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="vcc-cultural-content">
                    <span className="vcc-category">
                      {item.subtitle}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="vcc-sel-outcomes">
            <div className="vcc-outcomes-heading">
              <span className="it-section-subtitle yellow-style">
                What These Experiences Nurture
              </span>

              <h4 className="it-section-title">
                Growing Into Confident,
                Compassionate Individuals
              </h4>

              <p>
                Through moral education, cultural participation and
                community connection, students get opportunities to
                strengthen essential social and emotional competencies.
              </p>
            </div>

            <div className="row g-4">
              {socialEmotionalValues.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={item.title}>
                  <div className="vcc-outcome-card">
                    <div className="vcc-outcome-icon">
                      {item.icon}
                    </div>

                    <span>0{index + 1}</span>

                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    

    </main>
  );
};

export default ValuesCultureCommunity;
