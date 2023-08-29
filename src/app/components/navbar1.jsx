//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "../css/page.css";

function Nav1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbarhere">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-css h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[4rem] w-[7rem] no-underline"
                  src="SDS Main Logo.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden lg:block ">
                <div className="ml-10 flex items-baseline justify-between space-x-5 h-fit">
                  <a
                    href="#about"
                    className=" hover:bg-gray-500 text-white px-3 text-center py-3 rounded-md text-sm font-semibold no-underline"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#SPONSORS"
                    className="hover:bg-gray-500 text-white px-3 text-center py-3 rounded-md text-sm font-semibold no-underline"
                  >
                    Sponsors
                  </a>

                  <a
                    href="#SPEAKERS"
                    className="hover:bg-gray-500 text-white px-3 text-center py-3 rounded-md text-sm font-semibold no-underline"
                  >
                    Speakers
                  </a>

                  <a
                    href="events"
                    className="hover:bg-gray-500 text-white px-3 text-center py-3 rounded-md text-sm font-semibold no-underline"
                  >
                    Events
                  </a>

                  <a
                    href="#FOOTER"
                    className="hover:bg-gray-500 text-white px-3 text-center py-3 rounded-md text-sm font-semibold no-underline"
                  >
                    Contact
                  </a>
                  <a
                    className="flex flex-row items-center bg-slate-500 py-2 px-4 rounded-md justify-center no-underline"
                    href="https://drive.google.com/uc?export=download&id=16uR14DTupgmtKasaFSPFVe0Zk_xcR5Bn"
                  >
                    <img
                      src="/file.png"
                      className="w-[1rem] mr-2 flex justify-center items-center"
                    />
                    <div className="text-white flex justify-center items-center">
                      Brochure
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#about"
                  className="hover:bg-gray-500 no-underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Dashboard
                </a>
                <a
                  href="#SPONSORS"
                  className="hover:bg-gray-500 no-underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Sponsors
                </a>
                <a
                  href="#SPEAKERS"
                  className="hover:bg-gray-500 no-underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Speakers
                </a>
                <a
                  href="events"
                  className="hover:bg-gray-500 no-underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Events
                </a>
                <a
                  href="#FOOTER"
                  className="hover:bg-gray-500 no-underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Contact
                </a>
                <a
                  className="flex flex-row items-center bg-slate-500 py-2 px-2 rounded-md justify-center w-[9rem] no-underline"
                  href="https://drive.google.com/uc?export=download&id=16uR14DTupgmtKasaFSPFVe0Zk_xcR5Bn"
                >
                  <img
                    src="/file.png"
                    className="w-[1rem] mr-3 flex justify-center items-center "
                  />
                  <div className="font-semibold text-white flex justify-center items-center ">
                    Brochure
                  </div>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
export default Nav1;