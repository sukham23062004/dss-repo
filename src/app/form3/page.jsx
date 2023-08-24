"use client";
import Script from "next/script";
import "./form3.css";
import React from "react";

function form3() {
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
        <Script src="form3.js" />
      </head>
      <body className="bg-gradient-to-r from-purple-950 via-blue-950  to-black ...">
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2 className="text-black">Registration For Speaker's Session</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form name="submit-to-google-sheet">
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-font"></i>
                    </span>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-graduation-cap"></i>
                    </span>
                    <input
                      type="text"
                      name="College"
                      placeholder="College Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-id-card-clip"></i>
                    </span>
                    <input
                      type="text"
                      name="Roll_No"
                      placeholder="Institute Roll no."
                      data-rollcode
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-code-branch"></i>
                    </span>
                    <input
                      type="text"
                      name="Branch"
                      placeholder="Branch"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-id-badge"></i>
                    </span>
                    <input
                      type="number"
                      name="Number"
                      placeholder="Mobile Number"
                      data-number
                      required
                    />
                  </div>
                  <button class="button" type="submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="loading-container1">
          <img src="Loading.gif" width="150" height="150" alt="Not Avail" />
          <p>Registering</p>
        </div>
        <div class="loading-container2">
          <img src="Validating.gif" width="200" height="200" alt="Not Avail" />
          <p>Validating</p>
        </div>
        <div className="SuccessPage">
          <h1>Registered Successfully</h1>
          <div className="GoBack">
            <i class="fa-solid fa-arrow-left fa-shake"></i>
            <a href="events">Go Back</a>
          </div>
        </div>
        <div className="reEnter">
          <h1>Duplicate Mobile Number Or Roll No. Found</h1>
          <div className="GoBack">
            <i class="fa-solid fa-arrow-left fa-shake"></i>
            <a href="form3">Re Fill The Form</a>
          </div>
        </div>
        <Script src="form3.js" />
      </body>
    </>
  );
}
export default form3;
