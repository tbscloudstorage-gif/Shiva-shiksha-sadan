 

import { useEffect, useState } from "react";

export default function BreadcrumbEventDetails() {
  const targetDate = new Date("2027-10-30T13:55:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      {/* <!-- breadcrumb-area-start --> */}
      <div
        className="it-breadcrumb-area it-breadcrumb-ptb it-breadcrumb-event-details-style fix z-index-1"
        style={{
          backgroundImage: `url(/assets/img/shape/event-details.png)`,
        }}
      >
        <img
          className="it-breadcrumb-shape-1"
          src="/assets/img/shape/breadcrumb-1-1.png"
          alt=""
        />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-breadcrumb-content">
                <div className="it-breadcrumb-title-box text-center">
                  <h3 className="it-breadcrumb-title">
                    Impact of Artificial Intelligence <br />
                    on the Future of Education
                  </h3>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <div className="it-event-countdown-time">
                    <div
                      className="d-flex align-items-center"
                      id="countdown"
                    >
                      {/* Days */}
                      <div>
                        <span>{timeLeft.days}</span>
                        <span className="countdown-heading">Days</span>
                      </div>

                      <i>
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 8 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="3.98047"
                            cy="3.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                          <circle
                            cx="3.98047"
                            cy="16.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                        </svg>
                      </i>

                      {/* Hours */}
                      <div>
                        <span>{timeLeft.hours}</span>
                        <span className="countdown-heading">Hours</span>
                      </div>

                      <i>
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 8 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="3.98047"
                            cy="3.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                          <circle
                            cx="3.98047"
                            cy="16.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                        </svg>
                      </i>

                      {/* Minutes */}
                      <div>
                        <span>{timeLeft.minutes}</span>
                        <span className="countdown-heading">Minute</span>
                      </div>

                      <i>
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 8 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="3.98047"
                            cy="3.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                          <circle
                            cx="3.98047"
                            cy="16.5"
                            r="3.5"
                            fill="#1F2432"
                          />
                        </svg>
                      </i>

                      {/* Seconds */}
                      <div>
                        <span>{timeLeft.seconds}</span>
                        <span className="countdown-heading">Second</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb-area-end --> */}
    </>
  );
}