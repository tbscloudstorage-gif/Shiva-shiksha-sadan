


export default function BlogDetailsWithoutSidebarArea() {
  const learningTips = [
    {
      title: "1. Create a Consistent Daily Learning Routine",
      paragraphs: [
        "A structured daily routine helps children develop discipline, time management, and concentration. Set aside dedicated hours for homework, revision, reading, and recreational activities.",
        "Consistency is more important than long study sessions. Short, focused learning periods with regular breaks can improve understanding and help children retain information.",
      ],
    },
    {
      title: "2. Encourage Reading Every Day",
      paragraphs: [
        "Reading is one of the most effective ways to improve vocabulary, communication, imagination, and critical thinking.",
        "Encourage children to read age-appropriate books, newspapers, educational stories, and informative articles. Discussing what they read can further strengthen comprehension and communication skills.",
      ],
    },
    {
      title: "3. Make Learning Interactive and Enjoyable",
      paragraphs: [
        "Children often learn better when educational activities are interesting and engaging.",
        "Practical experiments, educational games, storytelling, puzzles, and creative projects can make complex concepts easier to understand.",
        "Interactive learning also encourages students to participate actively rather than simply memorising information.",
      ],
    },
    {
      title: "4. Develop Curiosity and Critical Thinking",
      paragraphs: [
        "Encourage children to ask questions and explore different solutions instead of immediately providing answers.",
        "Simple conversations about everyday situations can help children develop analytical abilities, independent thinking, and problem-solving skills.",
        "A curious mind creates a strong foundation for lifelong learning.",
      ],
    },
    {
      title: "5. Maintain a Healthy Balance Between Studies and Activities",
      paragraphs: [
        "Academic achievement is important, but physical fitness, creativity, and emotional well-being are equally essential.",
        "Sports, music, art, and extracurricular activities help children develop teamwork, leadership, confidence, and social skills.",
        "Maintaining a balanced routine supports children's overall development and encourages a positive attitude towards education.",
      ],
    },
    {
      title: "6. Appreciate Effort and Progress",
      paragraphs: [
        "Recognising children's efforts can motivate them to perform better and develop confidence.",
        "Instead of focusing only on marks, appreciate improvements in understanding, discipline, creativity, and participation.",
        "Positive encouragement helps children overcome challenges and develop a growth mindset.",
      ],
    },
    {
      title: "7. Build Strong Communication Between Parents and Teachers",
      paragraphs: [
        "Regular communication between parents and teachers helps identify students' strengths, learning requirements, and areas for improvement.",
        "When parents and educators work together, children receive consistent guidance and support throughout their academic journey.",
      ],
    },
    {
      title: "8. Encourage Independent Learning",
      paragraphs: [
        "Allow children to complete age-appropriate tasks and assignments independently while providing guidance whenever necessary.",
        "This helps develop responsibility, decision-making abilities, and confidence in their own capabilities.",
        "Independent learning also prepares students to manage academic challenges effectively.",
      ],
    },
    {
      title: "9. Support Emotional Well-Being",
      paragraphs: [
        "A supportive and encouraging environment plays an important role in children's academic performance.",
        "Listen to their concerns, understand their challenges, and encourage open communication.",
        "Children who feel emotionally supported are often more comfortable participating in classroom activities, asking questions, and exploring new opportunities.",
      ],
    },
    {
      title: "10. Celebrate Learning Beyond the Classroom",
      paragraphs: [
        "Learning opportunities are present everywhere, from visiting museums and exploring nature to participating in family discussions and everyday activities.",
        "Encourage children to observe their surroundings, discover new interests, and connect classroom knowledge with real-life experiences.",
        "These activities can make education more meaningful and enjoyable.",
      ],
    },
  ];

  return (
    <>
      {/* Blog Details Area Start */}
      <div className="it-blog-details-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="postbox-details-wrapper it-career-details-area">

                {/* Blog Featured Image */}
                <div className="postbox-thumb-box mb-60">
                  <div className="postbox-main-thumb border-radius-20 mb-35">
                    <img
                      className="w-100"
                      src="assets/img/blog/blog-2.JPG"
                      alt="Improving children's learning every day at Shiva Shiksha Sadan Sonipat"
                      loading="lazy"
                    />
                  </div>

                  <div className="postbox-content-box">

                    {/* Blog Meta */}
                    <div className="it-blog-meta mb-20">
                      <span>September 08, 2026</span>
                      <span>Education & Learning</span>
                      <span>Shiva Shiksha Sadan</span>
                    </div>

                    {/* Blog Title */}
                    <h1 className="it-section-title">
                      How to Make Your Children’s Learning Better Every Single Day?
                    </h1>

                    {/* Introduction */}
                    <div className="postbox-dsc mt-20 mb-40">
                      <p className="mb-15">
                        Every parent wants their child to succeed academically,
                        develop confidence, and grow into a responsible
                        individual. However, meaningful learning is not
                        limited to textbooks, classrooms, or examinations.
                        It is a continuous process that develops through
                        everyday experiences, curiosity, creativity, and
                        consistent support from parents and teachers.
                      </p>

                      <p className="mb-20">
                        At <strong>Shiva Shiksha Sadan, Sonipat</strong>,
                        we believe that effective learning begins with a
                        positive environment where students feel encouraged
                        to explore, ask questions, and develop essential
                        life skills. By adopting simple learning habits,
                        parents can play an important role in improving
                        their children's educational journey.
                      </p>
                    </div>

                    {/* Main Blog Content */}
                    {learningTips.map((tip, index) => (
                      <section
                        key={index}
                        className="mb-40"
                      >
                        <h2
                          className="it-details-title-sm mb-20"
                          style={{
                            fontSize: "25px",
                            lineHeight: "1.4",
                          }}
                        >
                          {tip.title}
                        </h2>

                        <div className="postbox-dsc">
                          {tip.paragraphs.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="mb-15"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    ))}

                    {/* Conclusion */}
                    <div className="mb-40">
                      <h2 className="it-section-title mb-20">
                        Helping Every Child Learn, Grow, and Succeed
                      </h2>

                      <div className="postbox-dsc">
                        <p className="mb-15">
                          Improving children's learning does not require
                          major changes. Small, consistent efforts such
                          as encouraging reading, maintaining healthy
                          routines, supporting creativity, and celebrating
                          progress can make a lasting difference.
                        </p>

                        <p className="mb-15">
                          At <strong>Shiva Shiksha Sadan, a CBSE-affiliated
                          school in Sonipat</strong>, we believe in nurturing
                          academic excellence alongside character development,
                          confidence, and essential life skills.
                        </p>

                        <p className="mb-15">
                          By encouraging collaboration between parents,
                          teachers, and students, we aim to create an
                          educational environment where every child has
                          the opportunity to discover their potential
                          and build a strong foundation for the future.
                        </p>

                        <p className="mb-20">
                          <strong>
                            Because better learning begins with small
                            steps taken every single day.
                          </strong>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Blog Tags */}
                <div className="postbox-tag-box mb-65">
                  <div className="row align-items-center">
                    <div className="col-xl-12">
                      <div className="postbox-tag d-flex align-items-center flex-wrap">
                        <span className="postbox-tag-title">
                          Tags:
                        </span>

                        <div className="postbox-tag-content">
                          <a href="#" className="active">
                            Child Development
                          </a>
                          <a href="#">
                            Learning Tips
                          </a>
                          <a href="#">
                            Education
                          </a>
                          <a href="#">
                            CBSE School in Sonipat
                          </a>
                          <a href="#">
                            Parenting Tips
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Section */}
                <div className="postbox-comment mb-70">
                  <h3 className="it-section-title">
                    Comments
                  </h3>
                </div>

                {/* Comment Form */}
                <div className="postbox-contact-box">
                  <h4 className="it-section-title">
                    Leave a Reply
                  </h4>

                  <div className="pt-15">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="row gx-20">

                        <div className="col-12 mb-40">
                          <div className="postbox-input-box p-relative">
                            <input
                              type="text"
                              placeholder="Full Name*"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-sm-6 col-12 mb-30">
                          <div className="postbox-input-box p-relative">
                            <input
                              type="email"
                              placeholder="Email here*"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-sm-6 col-12 mb-30">
                          <div className="postbox-input-box p-relative">
                            <input
                              type="text"
                              placeholder="Website"
                            />
                          </div>
                        </div>

                        <div className="col-12 mb-40">
                          <div className="postbox-input-box p-relative">
                            <textarea
                              placeholder="Write your comment*"
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="postbox-btn">
                          <button
                            type="submit"
                            className="it-btn-yellow theme-bg"
                          >
                            <span>
                              <span className="text-1">
                                Submit Now
                              </span>
                              <span className="text-2">
                                Submit Now
                              </span>
                            </span>
                          </button>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Details Area End */}
    </>
  );
}

