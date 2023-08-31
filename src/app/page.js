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
                  <a href="events" className="email-register-button"> Register Now !
                  </a>
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
            <div className="revealing-soon1">Revealing Soon .....</div>
          </div>
        </main>
        <div className="bg-gradient-to-r from-black via-blue-950  to-purple-950  ...">
          <div className="text" id="SPEAKERS">
            <div className="meet-speaker">Meet our speakers</div>
            <div className="underline"></div>
          </div>
          <div className="revealing-soon2">Revealing Soon .....</div>
        </div>
        {/* <!-- Footer --> */}
        <Footer />
      </body>
    </>
  );
}