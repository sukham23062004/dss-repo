"use client";
import Script from "next/script";
import "./form2.css";
import React from "react";

function form2() {
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
        <Script src="form2.js" />
      </head>
      <body className="bg-gradient-to-r from-purple-950 via-blue-950  to-black ...">
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2 className="text-black">Registration For Data Hunt</h2>
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
                      name="Team_Name"
                      placeholder="Team Name"
                      data-teamname
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user-plus"></i>
                    </span>
                    <input
                      type="text"
                      name="TL_Name"
                      placeholder="Team Leader Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="TL_Email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-phone-volume"></i>
                    </span>
                    <input
                      type="number"
                      name="TL_Number"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user-plus"></i>
                    </span>
                    <input
                      type="text"
                      name="TM1_Name"
                      placeholder="Member 1 Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="TM1_Email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-phone-volume"></i>
                    </span>
                    <input
                      type="number"
                      name="TM1_Number"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user-plus"></i>
                    </span>
                    <input
                      type="text"
                      name="TM2_Name"
                      placeholder="Member 2 Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input type="email" name="TM2_Email" placeholder="Email" required />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-phone-volume"></i>
                    </span>
                    <input
                      type="number"
                      name="TM2_Number"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user-plus"></i>
                    </span>
                    <input
                      type="text"
                      name="TM3_Name"
                      placeholder="Member 3 Name"
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input type="email" name="TM3_Email" placeholder="Email" />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-phone-volume"></i>
                    </span>
                    <input
                      type="number"
                      name="TM3_Number"
                      placeholder="Mobile Number"
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
          <img src="Loading.gif" width="200" height="200" alt="Not Avail" />
          <p>Registering</p>
        </div>
        <div class="loading-container2">
          <img src="Validating.gif" width="150" height="150" alt="Not Avail" />
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
          <h1>Team Name Already Taken</h1>
          <div className="GoBack">
            <i class="fa-solid fa-arrow-left fa-shake"></i>
            <a href="form2">Re Fill The Form</a>
          </div>
        </div>
        <Script src="form2.js" />
      </body>
    </>
  );
}
export default form2;
