
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import FooterThree from "@/layouts/footers/FooterThree";

export default function AboutEight() {
  return (
    <>
      <HeaderOne />

      <Breadcrumb
        title="Principal's Message"
        subtitle="Principal's Message"
        breadcrumb_img="/assets/img/breadcrumb/Principal-breadcrumb.png"
      />

      {/* About Area Start */}
      <section className="it-about-area it-about-style-3 z-index-1 gray-bg pt-190 pb-130">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Image Section */}
            <div
              className="col-lg-6 order-1 order-lg-0 wow itfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-about-left z-index-1">
                <div className="row gx-0">

                  <div className="col-lg-6 col-md-6">
                    <div className="it-about-thumb style-1 z-index-1">
                      <img
                        src="assets/img/about/about-9-1.jpg"
                        alt="Shiva Shiksha Sadan"
                      />
                    </div>

                    <div className="it-about-experience-box mb-20 d-inline-flex align-items-center text-white">
                      <h5 className="text-white">50 +</h5>
                      <span className="text-white">
                        Years of <br />
                        Educational Excellence
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="it-about-thumb style-2 z-index-1">
                      <img
                        src="assets/img/about/about-9-2.jpg"
                        alt="Principal of Shiva Shiksha Sadan"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div
              className="col-lg-6 order-0 order-lg-1 wow itfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-about-right">

                <div className="it-about-section-title-box mb-25">
                  <span className="it-section-subtitle">
                    Principal's Message
                  </span>

                  <h4 className="it-section-title">
                    A Message from Our <br />
                    <span className="z-index-1">
                      Principal
                    </span>
                  </h4>
                </div>

                <div className="it-about-text">

                  <p className="mb-25">
                    <strong>
                      Ms. Veenu Sharma, Principal of Shiva Shiksha Sadan
                    </strong>
                    , believes that education is the foundation for
                    shaping confident, compassionate, and responsible
                    individuals. At Shiva Shiksha Sadan, our focus is
                    on creating a nurturing and engaging learning
                    environment where every child feels valued,
                    encouraged, and inspired to achieve their best.
                    We strive to provide a balanced education that
                    combines academic excellence with creativity,
                    critical thinking, and holistic development.
                    Through innovative teaching practices, experiential
                    learning, and the dedication of our educators,
                    we aim to help students develop the knowledge,
                    skills, and confidence needed to succeed in an
                    ever-changing world.
                  </p>

                  <p className="mb-45">
                    We are committed to fostering a culture of
                    curiosity, discipline, mutual respect, and
                    lifelong learning. By encouraging students to
                    explore their interests, embrace challenges,
                    and develop strong moral values, we prepare
                    them to become independent thinkers and
                    responsible citizens. With the continued
                    support of parents and teachers, our mission
                    is to ensure that every student grows into
                    a capable, confident, and compassionate
                    individual, ready to make a meaningful
                    contribution to society.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* About Area End */}

      <FooterThree />
    </>
  );
}
