import React from "react";
import "../css/page.css";

function Footer() {
  return (
    <div className="footer" id="FOOTER">
      <footer class="md:hidden bg-gray-900 text-white">
        <div class="bg-gray-800 h-40 rounded-3xl">
          <div class="container h-full w-full flex flex-row md:flex-row justify-evenly items-center gap-5">
            <div class="logo h-11/12 w-1/2 mx-1 text-center">
              <a href="https://sdsbitmesra.netlify.app/" target="_blank">
                <img src="SDS Main Logo.png"></img>
              </a>
            </div>
            <div className="custom-border"></div>
            <div class="logo h-11/12 w-1/2 mx-1 text-center">
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
                  class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer"
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
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/#services"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/#teams"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/#alumini"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Alumni
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
                  class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer"
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
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Neural Networks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/blogs/generic"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Deep Learning
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/blogs/generic"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Data Mining
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/blogs/generic"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
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
                  class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer"
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
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Fossasia
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/events"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Data-Thon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/events"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      WebD-Bootcamp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sdsbitmesra.netlify.app/events"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
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
                  class="block py-1 px-1 text-white uppercase font-medium tracking-wide cursor-pointer"
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
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sds.bitm/?igshid=MzRlODBiNWFlZA%3D%3D"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/"
                      class="inline-block py-2 pl-3 pr-5 hover-effect no-underline" target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
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
                  Alumni
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
                  class="inline-block py-2 pl-3 pr-5 hover-effect no-underline"
                  target="_blank"
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
    </div>
  );
}
export default Footer;