//@ts-nocheck
"use client";
import React from 'react'
import "./events.css"
import Nav2 from '../components/navbar2';
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
        <link rel="icon" type="image/x-icon" href="DSS Logo.png" />
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
        <Nav2 />
        <div class="page-event">
          <div class="cover" id="EVENTSHERE">
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
        </div>

        <footer class="md:hidden bg-gray-900 text-white">
          <div class="bg-gray-800 h-40 rounded-3xl">
            <div class="container h-full w-full flex flex-row md:flex-row justify-evenly items-center gap-1">
              <div class="logo w-1/2 h-11/12 mx-1 text-center">
                <a href="https://sdsbitmesra.netlify.app/" target="_blank">
                  <img src="SDS Main Logo.png"></img>
                </a>
              </div>
              <div className="custom-border2"></div>
              <div class="logo mx-1 h-11/12 w-1/2 text-center">
                <a href="https://sdsbitmesra.netlify.app/" target="_blank">
                  <img src="DSS Logo with light text.png"></img>
                </a>
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
                    About Us
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
                        href="https://sdsbitmesra.netlify.app/#about"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/#services"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/#teams"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/#alumini"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Alumini
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
                    Blogs
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
                        href="https://sdsbitmesra.netlify.app/blogs/generic"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Neural Networks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/blogs/generic"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Deep Learning
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/blogs/generic"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Data Mining
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/blogs/generic"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Data Visualisation
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
                    Events
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
                        href="https://eventyay.com/e/fa96ae2c/exhibition/26"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Fossasia
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/events"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Data-Thon
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/events"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        WebD-Bootcamp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sdsbitmesra.netlify.app/events"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        ML-Bootcamp
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
                    Contact Us
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
                        href="https://m.facebook.com/people/Society-for-Data-Science-BIT-Mesra/100063931007042/"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sds.bitm/?igshid=MzRlODBiNWFlZA%3D%3D"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/SDSBitMesra?t=c27b23zF_x4zpavglBqX6Q&s=09"
                        class="inline-block py-2 pl-3 pr-5 hover-effect no-underline text-left" target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="border-t border-white flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-white">
            <div class="mr-4">© 2023 Society For Data Science .</div>
            <div> All rights reserved .</div>
          </div>
        </footer>

        <footer class="hidden md:block bg-gray-900 text-white">
          <div class="bg-gray-800 mx-auto px-11 rounded-3xl">
            <div class="container flex flex-col md:flex-row justify-evenly items-center mx-auto">
              <div class="logo h-1/4 w-1/4 mx-1 text-center">
                <a href="https://sdsbitmesra.netlify.app/" target="_blank">
                  <img src="SDS Main Logo.png"></img>
                </a>
              </div>
              <div className="custom-border"></div>
              <div class="logo h-1/4 w-1/4 mx-1 text-center">
                <a href="https://sdsbitmesra.netlify.app/" target="_blank">
                  <img src="DSS Logo with light text.png"></img>
                </a>
              </div>
            </div>
          </div>
          <div class="container overflow-hidden flex flex-col lg:flex-row justify-between p-1 mt-8 mx-auto">
            <div class="container block md:flex text-sm mt-6 lg:mt-0">
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium text-xl tracking-wide hover-effect cursor-pointer text-center">
                  About Us
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/#about"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    About
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/#services"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Services
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/teams"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Our Team
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/alumni"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Alumini
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect cursor-pointer text-center">
                  Blogs
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/blogs/generic"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Neural Networks
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/blogs/generic"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Deep Learning
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/blogs/generic"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Data Mining
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/blogs/generic"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Data Visualisation
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect cursor-pointer text-center">
                  Events
                </li>
                <li class="text-center">
                  <a
                    href="https://eventyay.com/e/fa96ae2c/exhibition/26"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Fossasia
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/events"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Data-Thon
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/events"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    WebD-Bootcamp
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://sdsbitmesra.netlify.app/events"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    ML-Bootcamp
                  </a>
                </li>
              </ul>
              <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-xl hover-effect cursor-pointer text-center">
                  Contact Us
                </li>
                <li class="text-center">
                  <a
                    href="https://m.facebook.com/people/Society-for-Data-Science-BIT-Mesra/100063931007042/"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://www.instagram.com/sds.bitm/?igshid=MzRlODBiNWFlZA%3D%3D"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li class="text-center">
                  <a
                    href="https://twitter.com/SDSBitMesra?t=c27b23zF_x4zpavglBqX6Q&s=09"
                    class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-200 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-white">
            <div class="mr-4">© 2023 Society For Data Science .</div>
            <div> All rights reserved .</div>
          </div>
        </footer>
      </body>
    </>
  );
}
export default events;