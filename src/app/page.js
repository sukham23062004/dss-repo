//ts-nocheck
import "./css/page.css";
import Nav1 from "./components/navbar1";
import Footer from "./components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Data Science Summit 2023</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="icon" type="image/x-icon" href="DSS Logo.png" />
      </head>
      <body className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
        <Script src="DSS.js" />
        <Nav1 />
        <main id="RedirectHere">
          <div
            id="about"
            className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ..."
          >
            <section className="hero">
              <div className="about-event">
                <div className="event-heading">
                  Data Science Summit &apos;23
                </div>
                <div className="event-description">
                  Welcome to Data Science Summit 2023, organized by the Society
                  for Data Science at BIT Mesra. Our event is a platform for
                  enthusiasts to explore the latest trends, insights, and
                  innovations in the field of data science. Join us to connect
                  with experts, engage in thought-provoking discussions, and
                  expand your knowledge in this ever-evolving realm of data.
                  Let's unravel the power of data together!
                </div>
                <div className="email-register">
                  <div className="email-register-text-image">
                    <div className="email-register-image">
                      <img src="Email Logo.png" alt="" />
                    </div>
                    <div className="email-register-text">
                      <input
                        type="text"
                        class="register-space"
                        name="Email"
                        placeholder="Your Email Here"
                        id="TheEmail"
                        required
                      />
                    </div>
                  </div>
                  <div className="email-register-button">
                    <button>Register Now!</button>
                  </div>
                </div>
              </div>
              <div className="event-image mx-auto">
                <img src="hero-img.png" alt="" />
              </div>
            </section>

            <header id="header" className="d-flex align-items-center ">
              <div className="container d-flex flex-column align-items-center mx-auto">
                <div className="countdown mx-auto" data-count="2023/9/8">
                  <div className="text-gray-300">
                    <h3>%d</h3>
                    <h4>Days</h4>
                  </div>
                  <div className="text-gray-300">
                    <h3>%h</h3>
                    <h4>Hours</h4>
                  </div>
                  <div className="text-gray-300">
                    <h3>%m</h3>
                    <h4>Minutes</h4>
                  </div>
                  <div className="text-gray-300">
                    <h3>%s</h3>
                    <h4>Seconds</h4>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="another-wrapper bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
            <div className="text" id="SPONSORS">
              <div className="meet-speaker">Meet our Sponsors </div>
              <div className="underline"></div>
            </div>
            {/* <div id="sponsors">
              <div className="sponsor">
                <img src="gdsc.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="cn.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="newton school.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="dphi.png" alt="Pic" />
              </div>
              <div className="sponsor floxus">
                <img src="floxus.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="tmlc.png" alt="Pic" />
              </div>
              <div className="sponsor taskade">
                <img src="taskade.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="unstop.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="devs.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="unfold_ds.png" alt="Pic" />
              </div>
              <div className="sponsor">
                <img src="skilllync.png" alt="Pic" />
              </div>
              <div className="sponsor truscholar">
                <img src="truscholar.png" alt="Pic" />
              </div>
            </div> */}
            <div className="revealing-soon1">Revealing Soon .....</div>
          </div>
        </main>
        <div className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
          <div className="text" id="SPEAKERS">
            <div className="meet-speaker">Meet our speakers</div>
            <div className="underline"></div>
          </div>

          {/* <div className="alumini1"> */}
          {/* <div className="space-y-10 mb-20 mt-10 flex flex-col items-center">
            <div className="w-[80%] justify-between flex">
              <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row w-fit drop-shadow-2xl gap-6">
                <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                  <img
                    src={"speaker 2.jpeg"}
                    alt=""
                    className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="name2 m-5 w-fit">Love Babbar</div>
                  <div className="text-about">
                    <p>
                      At stutea we believe in making every learner a teacher.
                      That is exactly what our name signifies! Stu-dent +
                      tea-cher.
                    </p>
                    <p>
                      We a group of college students came up with the idea of
                      providing students with a platform wherein they can post
                      their doubts and solve other students’ doubts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[80%] justify-between flex">
              <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row-reverse w-fit drop-shadow-2xl">
                <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                  <img
                    src={"speaker 1.jpeg"}
                    alt=""
                    className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="name2 m-5 w-fit">Akshat Sahay</div>
                  <div className="text-about">
                    <p>
                      At stutea we believe in making every learner a teacher.
                      That is exactly what our name signifies! Stu-dent +
                      tea-cher.
                    </p>
                    <p>
                      We a group of college students came up with the idea of
                      providing students with a platform wherein they can post
                      their doubts and solve other students’ doubts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[80%] justify-between flex">
              <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row w-fit drop-shadow-2xl">
                <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                  <img
                    src={"speaker 2.jpeg"}
                    alt=""
                    className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="name2 m-5 w-fit">Emily Rose</div>
                  <div className="text-about">
                    <p>
                      At stutea we believe in making every learner a teacher.
                      That is exactly what our name signifies! Stu-dent +
                      tea-cher.
                    </p>
                    <p>
                      We a group of college students came up with the idea of
                      providing students with a platform wherein they can post
                      their doubts and solve other students’ doubts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[80%] justify-between flex">
              <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row-reverse w-fit drop-shadow-2xl">
                <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                  <img
                    src={"speaker 1.jpeg"}
                    alt=""
                    className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="name2 m-5 w-fit">Brad Pitt</div>
                  <div className="text-about">
                    <p>
                      At stutea we believe in making every learner a teacher.
                      That is exactly what our name signifies! Stu-dent +
                      tea-cher.
                    </p>
                    <p>
                      We a group of college students came up with the idea of
                      providing students with a platform wherein they can post
                      their doubts and solve other students’ doubts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="revealing-soon2">Revealing Soon .....</div>
        </div>
        {/* <!-- Footer --> */}
        <Footer />
      </body>
    </>
  );
}
