//@ts-nocheck
"use client";
import React from 'react'
import "./events.css"
import Nav from '../components/navbar';
import Script from 'next/script';

function events() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Event Page SDS</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="icon" type="image/x-icon" href="Favicon.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/36f3a0ef1b.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="Event.css" />
      </head>
      <body className="bg-gradient-to-r from-purple-950 via-blue-950  to-black ...">
        <Nav />
        <div class="page-event">
          <div class="cover">
            <div class="heading flex flex-row items-center justify-center">
              <div className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pruple-900 bg-clip-text text-transparent special-text">
                E
              </div>
              vents
            </div>
          </div>
          <div class="container">
            <div class="upcoming-sec">
              <div class="heading2">Upcoming Events :</div>
            </div>
            <div class="upcoming-event-list Hello">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">8</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Speaker's session</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>CAT Hall</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>Sept 8 , 2023 , from 6:30PM to 7:30PM</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      {" "}
                      This will be a Fireside Chat featuring one of the most
                      distinguished and renowned figures in the realm of
                      technology and data science. Our guest is a household name
                      among tech enthusiasts and is celebrated for their
                      exceptional contributions to the field. During this
                      engaging session, attendees will have the extraordinary
                      opportunity to have their inquiries addressed directly by
                      our esteemed speaker
                    </div>
                    <div class="group-of-btn">
                      <a href="form1" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">9</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Power Plot Presentation</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>Room No. 233A, 237</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>Sept 9, 2023, from 09:00AM to 12:00PM</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      {" "}
                      This will be a data-driven competition that challenges
                      your analytical prowess! Each team will receive the same
                      dataset and have 12 hours to study and extract valuable
                      insights. Utilize your classroom time to present your
                      findings to the judge's panel. This is your chance to
                      showcase your data analysis skills, creativity, and
                      ability to derive meaningful conclusions from data. The
                      winner will be crowned based on the judges' evaluation of
                      your insights and presentation. Get ready to make data
                      speak and unleash the power of visual storytelling!
                    </div>
                    <div class="group-of-btn">
                      <a href="form4" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">9</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Charades</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>Room No. 231, 233A, 237</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>Sept 9, 2023, from 01:00PM to 02:30PM</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      {" "}
                      Get ready to have a blast while acting out data science
                      terms and concepts in this fun- filled event. Participants
                      will showcase their communication skills, quick thinking,
                      and data science acumen as they creatively act out and
                      guess various data-related terms. It's a unique
                      opportunity to learn, laugh, and connect with like-minded
                      data enthusiasts
                    </div>
                    <div class="group-of-btn">
                      <a href="form3" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">9</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Workshop session</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>CAT Hall</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>Sept 9, 2023, from 03:00PM to 05:00PM</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      This will be a session/workshop, where attendees will gain
                      exclusive insights into the transformative realm of
                      emerging technologies poised to revolutionize industries.
                      By securing early access and engaging in hands-on
                      experiences, participants will gain a competitive edge,
                      propelling them to the forefront of their respective
                      fields. Don't miss this opportunity to stay ahead of the
                      curve and embrace the future of innovation
                    </div>
                    <div class="group-of-btn">
                      <a href="form5" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">9</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Hackathon Kickstart</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>R & D Building</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>06:00PM [Sept 8] To 06:00PM [Sept 9]</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      {" "}
                      Are you ready for an exhilarating hackathon experience?
                      Join us as we tackle an open-ended problem statement and
                      unleash the power of innovation! During this intensive
                      hackathon, participants will have the freedom to explore
                      diverse approaches to resolve the given problem. Fuel your
                      creativity, collaborate with your team, and push the
                      boundaries of technology. Prizes await the most
                      exceptional solutions and brilliant minds. Don't miss this
                      incredible opportunity to showcase your skills and make a
                      real impact
                    </div>
                    <div class="group-of-btn">
                      <a href="form6" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">10</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Hunt</div>
                    <div class="venue">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-map-marker"></i>
                          </td>
                          <td>
                            <div>Near Mehak Canteen</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="time">
                      <table>
                        <tr>
                          <td>
                            <i class="fa fa-clock-o"></i>
                          </td>
                          <td>
                            <div>Sept 10, 2023, from 09:00AM to 12:00PM</div>
                            <div class="dim-color"></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="Description">
                      {" "}
                      This will be a treasure hunt event where teams decode
                      hints, and progress from the iconic Mehak Canteen to
                      diverse spots, unraveling new clues and reaching the
                      ultimate destination. Multiple tracks ensure safe
                      distancing. Hints and clues involve the basics of data
                      science which every person comes across in their schools.{" "}
                    </div>
                    <div class="group-of-btn">
                      <a href="form2" target="blank" class="btn book-ticket">
                        Book Your Entry Pass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-12">
            <div class="upcoming-sec">
              <div class="heading2">Our Past Events :</div>
            </div>
            <div class="upcoming-event-list Hello">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Science Hackathon</div>
                    <div class="Description mt-8">
                      One could have called it the soul of the Data Science
                      Summit. With 50 questions, the core concepts of Linear
                      Algebra, Probability, Machine Learning, and Deep Learning
                      were tested. The final round was a 2-day long event in
                      which each of the selected teams had to identify a
                      real-life problem, come up with a solution, and build a
                      working prototype of the solution. The solutions had to be
                      implemented using Open Source technologies only. This
                      challenging and practical final round showcased the
                      participants' ability to apply their data science skills
                      to real-world scenarios and fostered creativity and
                      problem-solving
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Dig</div>
                    <div class="Description mt-8">
                      {" "}
                      We hosted fun data science events with puzzles,
                      crosswords, grids, and rapid-fire questions to test
                      participants' familiarity with essential tools and
                      libraries. The goal was to assess and improve their data
                      science skills with the guidance of mentors. Learning was
                      made interactive and enjoyable throughout the event.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Visualization Quiz</div>
                    <div class="Description mt-8">
                      Since our events were exclusively designed concerning the
                      recruitment process of the industry, we introduced Data
                      Visualization quizzes for participants to attempt some
                      frequently asked questions in placement/internship
                      opportunities. They had to apply different data
                      visualization methods and their own intuition to crack
                      these questions. This ensured the industry relevance of
                      their skills and prepared them for real-world challenges
                      in data visualization.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Data Analytics Challenge</div>
                    <div class="Description mt-8">
                      {" "}
                      The event challenged the participants' wits and agility.
                      The time limit of 20 minutes for 30 questions pumped up
                      the thrill in the participants during the first round.
                      This challenge was designed to test the overall smartness
                      of the candidates. In the subsequent rounds, the
                      candidates had to present solutions and demonstrate the
                      algorithms and logic behind their solutions to the
                      problems.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block even">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Blogathon</div>
                    <div class="Description mt-8">
                      As data exploitation became crucial in today's corporate
                      world, being a tech blogger allows us to manifest our
                      adroitness and contribute to the field of data science.
                      The event, Blogathon contest of Data Science Summit'22,
                      provided participants with an avenue to express their
                      insights and knowledge in the form of a blog, empowering
                      them to be data science bloggers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="upcoming-event-list">
              <div class="event-block odd">
                <div class="row">
                  <div class="col-lg-2 sec-1">
                    <table>
                      <tr>
                        <td>
                          <div class="month">September</div>
                          <div class="month-date-devider"></div>
                          <div class="date">2022</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-5 sec-2">
                    <img src="Sample.png" />
                  </div>
                  <div class="col-lg-5 sec-3">
                    <div class="title">Machine Learning Contest</div>
                    <div class="Description mt-8">
                      {" "}
                      We presented the exhilarating event of Machine Learning
                      Contests, where participants showcased their adroitness.
                      Round 1 - Contest on DPhi: Participants gained core
                      insights into Machine Learning. Round 2 - Solution
                      Application Presentation: Participants demonstrated their
                      problem-solving expertise through innovative solutions.
                      The event provided an opportunity for participants to
                      enhance their skills and knowledge in the field of Machine
                      Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="md:hidden bg-gray-900 text-white">
          <div class="bg-gray-800 mx-auto px-11 rounded-3xl">
            <div class="container flex flex-col md:flex-row justify-between items-center mx-auto">
              <div class="logo w-full mx-1 my-2 text-lg justify-center text-center">
                Logo
              </div>
              <div class="social w-full mx-1 my-2 flex justify-around text-center">
                <a
                  class="flex items-center text-gray-300 hover:text-white mr-6 no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
                </a>
                <a
                  class="flex items-center text-gray-300 hover:text-white mr-6 no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  class="flex items-center text-gray-300 hover:text-white no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div class="newsletter w-full text-lg mx-1 my-2 justify-center text-center">
                Newsletter Form
              </div>
            </div>
          </div>
          <div class="container overflow-hidden flex flex-col lg:flex-row mx-auto p-4">
            <div class="w-full mx-auto p-1">
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute hidden opacity-0"
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <div class="label relative leading-10">
                  <label
                    class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer text-left hover-effect"
                    for="tab-multi-one"
                  >
                    Product
                  </label>
                  <div class="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                    <svg
                      class="icon w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div class="tab-content overflow-hidden leading-normal">
                  <ul class="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab w-full overflow-hidden">
                <input
                  className="absolute hidden opacity-0"
                  id="tab-multi-two"
                  type="checkbox"
                  name="tabs"
                />
                <div class="label relative leading-10">
                  <label
                    class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer text-left hover-effect"
                    for="tab-multi-two"
                  >
                    Company
                  </label>
                  <div class="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                    <svg
                      class="icon w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div class="tab-content overflow-hidden leading-normal">
                  <ul class="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Shipping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab w-full overflow-hidden">
                <input
                  className="absolute hidden opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <div class="label relative leading-10">
                  <label
                    class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer text-left hover-effect"
                    for="tab-multi-three"
                  >
                    Developers
                  </label>
                  <div class="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                    <svg
                      class="icon w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div class="tab-content overflow-hidden leading-normal">
                  <ul class="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Developer API
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Guides
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab w-full overflow-hidden">
                <input
                  className="absolute hidden opacity-0"
                  id="tab-multi-four"
                  type="checkbox"
                  name="tabs"
                />
                <div class="label relative leading-10">
                  <label
                    class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer text-left hover-effect"
                    for="tab-multi-four"
                  >
                    Explore
                  </label>
                  <div class="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                    <svg
                      class="icon w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div class="tab-content overflow-hidden leading-normal">
                  <ul class="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Product Series
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-white flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-300">
            <div class="mr-4">© 2023 Society For Data Science .</div>
            <div> All rights reserved .</div>
          </div>
        </footer>

        <footer class="hidden md:block bg-gray-900 text-white">
          <div class="bg-gray-800 mx-auto px-11 rounded-3xl">
            <div class="container flex flex-col md:flex-row justify-between items-center mx-auto">
              <div class="logo w-1/5 mx-1 my-5">Logo</div>
              <div class="social w-1/5 mx-1 my-5 flex flex-start">
                <a
                  class="flex items-center text-gray-300 hover:text-white mr-6 no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
                </a>
                <a
                  class="flex items-center text-gray-300 hover:text-white mr-6 no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  class="flex items-center text-gray-300 hover:text-white no-underline hover-effect"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div class="newsletter w-1/5 mx-1 my-5">Newsletter Form</div>
            </div>
          </div>

          <div class="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto p-1">
            <div class="container block md:flex text-sm mt-6 lg:mt-0">
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium text-xl tracking-wide hover-effect text-center">
                  Product
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Features
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Integrations
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Pricing
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect text-center">
                  Company
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Privacy
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect text-center">
                  Team
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Developer API
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Documentation
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect text-center">
                  Support
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Support
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Guides
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect text-center">
                  Programs
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Affiliates
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Rewards
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="#"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  >
                    Resellers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-600">
            <div class="mr-4">© 2023 Society For Data Science .</div>
            <div> All rights reserved .</div>
          </div>
        </footer>

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script> */}
      </body>
    </>
  );
}

export default events