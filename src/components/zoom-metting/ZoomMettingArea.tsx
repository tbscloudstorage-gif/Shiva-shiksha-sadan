 

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function ZoomMettingArea() {
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
      {/* <!-- metting-area-start --> */}
      <div className="it-metting-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="it-metting-left">
                <div className="it-metting-thumb border-radius-10 mb-40">
                  <img src="assets/img/contact/metting.jpg" alt="" />
                </div>
                <h4 className="it-details-title">Developing Your Communication</h4>
                <div className="postbox-dsc mb-55">
                  <p className="mb-10">This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth.</p>
                  <p>Throughout this course, you'll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you'll have the confidence to build complex React applications from scratch.</p>
                </div>
                <h4 className="it-details-title">Key topics to be explored include:</h4>
                <div className="it-details-list mb-30">
                  <ul>
                    <li>
                      <span>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16C5.58634 16 5.48163 15.9144 5.43976 15.8073C5.41885 15.7644 3.618 11.0101 0.833023 9.21113C0.288584 8.86848 -0.130124 8.50439 0.0373593 7.69056C0.204843 6.89818 0.728376 6.44844 1.67062 6.23426C3.34575 5.87017 5.14655 8.52577 5.81666 9.61804C8.16184 6.12724 12.8523 0.644689 19.6786 0.00221658C20.0079 -0.037266 20.1297 0.461976 19.8252 0.601865C19.7205 0.644689 9.96258 5.20638 6.00505 15.8287C5.94227 15.9357 5.83756 16 5.71195 16Z" fill="currentcolor" />
                        </svg>
                        Leveraging big data and analytics for strategic decision-making
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16C5.58634 16 5.48163 15.9144 5.43976 15.8073C5.41885 15.7644 3.618 11.0101 0.833023 9.21113C0.288584 8.86848 -0.130124 8.50439 0.0373593 7.69056C0.204843 6.89818 0.728376 6.44844 1.67062 6.23426C3.34575 5.87017 5.14655 8.52577 5.81666 9.61804C8.16184 6.12724 12.8523 0.644689 19.6786 0.00221658C20.0079 -0.037266 20.1297 0.461976 19.8252 0.601865C19.7205 0.644689 9.96258 5.20638 6.00505 15.8287C5.94227 15.9357 5.83756 16 5.71195 16Z" fill="currentcolor" />
                        </svg>
                        Embracing digital tools to enhance customer experiences
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.71195 16C5.58634 16 5.48163 15.9144 5.43976 15.8073C5.41885 15.7644 3.618 11.0101 0.833023 9.21113C0.288584 8.86848 -0.130124 8.50439 0.0373593 7.69056C0.204843 6.89818 0.728376 6.44844 1.67062 6.23426C3.34575 5.87017 5.14655 8.52577 5.81666 9.61804C8.16184 6.12724 12.8523 0.644689 19.6786 0.00221658C20.0079 -0.037266 20.1297 0.461976 19.8252 0.601865C19.7205 0.644689 9.96258 5.20638 6.00505 15.8287C5.94227 15.9357 5.83756 16 5.71195 16Z" fill="currentcolor" />
                        </svg>
                        Developing agile business models for the digital age
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="postbox-dsc">
                  <p className="mb-0">Throughout this course, you'll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you'll have the confidence to build complex React applications from scratch.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="it-metting-right">
                <div className="it-course-sidebar pt-40">
                  <div className="it-event-countdown-time section-border it-date-countdown" data-date="2027-10-30T13:55:59">
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
                  <div className="course-info">
                    <h5 className="it-details-title-sm mb-5">Course Includes:</h5>
                    <ul>
                      <li>
                        <span>Topic:</span>
                        Developing Your <br /> Communication
                      </li>
                      <li>
                        <span>Hosted By:</span>
                        Robort Jord
                      </li>
                      <li>
                        <span>Start:</span>
                        Dec 24, 2027 8:45 AM
                      </li>
                      <li>
                        <span>Duration:</span>
                        1 hour 15 minutes
                      </li>
                      <li>
                        <span>Language:</span>
                        English
                      </li>
                      <li>
                        <span>Current Timezone:</span>
                        Asia/Dhaka
                      </li>
                      <li>
                        <span> Note:</span>
                        Countdown time is shown based on your local timezone.
                      </li>
                    </ul>
                  </div>
                  <div className="it-btn btn-border contact-section">
                    <Link to="/cart" className="it-btn-yellow theme-bg mb-15 w-100">
                      <span>
                        <span className="text-1">Add To Cart</span>
                        <span className="text-2">Add To Cart</span>
                      </span>
                    </Link>
                    <Link to="/courses-with-filter" className="it-btn-border style-3 w-100">
                      <span>
                        <span className="text-1">Buy Now</span>
                        <span className="text-2">Buy Now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- metting-area-end --> */}
    </>
  )
}
