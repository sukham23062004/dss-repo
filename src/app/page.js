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
                  <a href="events" className="email-register-button">
                    {" "}
                    Register Now !
                  </a>
                </div>
              </div>
              <div className="event-image mx-auto">
                <img src="hero-img.png" alt="" />
              </div>
            </section>

            <header id="header" className="d-flex align-items-center ">
              <div className="container d-flex flex-column align-items-center mx-auto">
                <div className="countdown mx-auto" data-count="2023/9/9">
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
            <div id="sponsors">
              <div className="sponsor">
                <img src="Adrosonics.png" alt="Pic" />
                <div className="revealing-soon1">Title Partner</div>
              </div>
              <div className="sponsor">
                <img src="DevDungeon.png" alt="Pic" />
                <div className="revealing-soon1">Community Partner</div>
              </div>
              <div className="sponsor">
                <img src="GeeksforGeeks.png" alt="Pic" />
                <div className="revealing-soon2">Coding Partner</div>
              </div>
              <div className="sponsor" id="unstop">
                <img src="Unstop.jpg" alt="Pic" />
                <div className="revealing-soon2">Hosting Partner</div>
              </div>
              <div className="sponsor" id="kareem">
                <img src="Kareem.png" alt="Pic" />
                <div className="revealing-soon2">Food Partner</div>
              </div>
              <div className="sponsor" id="jawed">
                <img src="JawedHabib.png" alt="Pic" />
                <div className="revealing-soon2">Styling Partner</div>
              </div>
            </div>
          </div>
        </main>
        <div className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
          <div className="text" id="SPEAKERS">
            <div className="meet-speaker">Meet our speakers</div>
            <div className="underline"></div>
          </div>
          <div className="alumini1">
            <div className="space-y-10 mb-20 mt-10 flex flex-col items-center">
              <div className="w-[80%] justify-between flex">
                <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row w-fit drop-shadow-2xl gap-6">
                  <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                    <img
                      src={"ShikarGoel.png"}
                      alt=""
                      className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center hello-there">
                    <div className="name2 m-5 w-fit">Shikhar Goel</div>
                    <div className="text-about">
                      <p>
                        Shikhar Goel is the CTO of GeeksforGeeks, a platform
                        that provides computer science resources and coding
                        challenges. He leads the technical team and develops
                        innovative products and services for programmers and
                        technology enthusiasts. He has launched GeeksforGeeks
                        Courses, IDE, Practice, Mock Tests, and Articles. He is
                        also a coder, a competitive programmer, a mentor, a
                        speaker, and a community leader. He graduated from JIIT
                        Noida in 2015 and joined GeeksforGeeks in 2016. He is
                        based in Noida, India. He has been recognized as one of
                        the top 10 young CTOs in India by GPL Awards in 2021. He
                        is passionate about creating impactful products that can
                        empower programmers and technology enthusiasts
                        worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[80%] justify-between flex">
                <div className="bg-slate-800  h-fit p-5 rounded-[50px] flex flex-col md:flex-row-reverse w-fit drop-shadow-2xl">
                  <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                    <img
                      src={"NeerajKumar.png"}
                      alt=""
                      className="w-[100%] rounded-[50%] shadow-xl image-speaker"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center hello-there">
                    <div className="name2 m-5 w-fit">Neeraj Kumar</div>
                    <div className="text-about">
                      <p>
                        Neeraj is responsible for quality best practices and
                        governance. He ensures that individuals and teams across
                        the business have the skills, tools and processes needed
                        to ensure exceptional ,quality for all customer
                        engagements.  An engineering graduate of the prestigious
                        BIT, Mesra, Neeraj later completed the senior management
                        programme from India’s top-ranked IIM, Ahmedabad. He
                        joined ADROSONIC as a Manager Consultant in 2014 and has
                        been a pillar for the organization and for customers. 
                        Neeraj is passionate about learning new technologies and
                        identifying new business strategies. He supports girls’
                        education in India and contributes to the
                        Nanhi Kali Project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <Footer />
      </body>
    </>
  );
}