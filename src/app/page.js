//ts-nocheck
import "./css/page.css";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <body className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
      <Script src="DSS.js" />
      <Nav />
      <main>
        <div
          id="about"
          className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ..."
        >
          <section className="hero">
            <div className="about-event">
              <div className="event-heading">Data Science Summit &apos;23</div>
              <div className="event-description">
                Lorem ipsum dolor sit amet consectetur. Faucibus faucibus sed
                etiam senneque arcu. Sapien mauris tincidunt convallis ultricies
                egestas vitae in. Magna ac nulla sodales. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repellat, tincidunt convallis
                ultricies soluta.
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
              <div className="countdown mx-auto" data-count="2023/8/27">
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
          <div className="text">
            <div className="meet-speaker">Meet our Sponsors </div>
            <div className="underline"></div>
          </div>
          <div id="sponsors">
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
            <div className="sponsor">
              <img src="Sponser.jpg" alt="Pic" />
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
        <div className="text">
          <div className="meet-speaker">Meet our speakers</div>
          <div className="underline"></div>
        </div>

        {/* <div className="alumini1"> */}
        <div className="space-y-10 mb-20 mt-10 flex flex-col items-center">
          <div className="w-[80%] justify-between flex">
            <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row w-fit drop-shadow-2xl gap-6">
              <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                <img
                  src={"Sponser.jpg"}
                  alt=""
                  className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="name2 m-5 w-fit">Akshat Sahay</div>
                <div className="text-about">
                  <p>
                    At stutea we believe in making every learner a teacher. That
                    is exactly what our name signifies! Stu-dent + tea-cher.
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
                  src={"Sponser.jpg"}
                  alt=""
                  className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="name2 m-5 w-fit">Akshat Sahay</div>
                <div className="text-about">
                  <p>
                    At stutea we believe in making every learner a teacher. That
                    is exactly what our name signifies! Stu-dent + tea-cher.
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
                  src={"Sponser.jpg"}
                  alt=""
                  className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="name2 m-5 w-fit">Akshat Sahay</div>
                <div className="text-about">
                  <p>
                    At stutea we believe in making every learner a teacher. That
                    is exactly what our name signifies! Stu-dent + tea-cher.
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
                  src={"Sponser.jpg"}
                  alt=""
                  className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="name2 m-5 w-fit">Akshat Sahay</div>
                <div className="text-about">
                  <p>
                    At stutea we believe in making every learner a teacher. That
                    is exactly what our name signifies! Stu-dent + tea-cher.
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
        </div>
      </div>
      {/* <!-- Footer --> */}
      <Footer />
    </body>
  );
}
