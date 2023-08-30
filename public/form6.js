const scriptURL =
  "https://script.google.com/macros/s/AKfycbwt_McxpSRaslN39W98hf6ZFYP5ee_0aHAM1mzV5DhRRlvo3G10HUQYVM82mKBXTZTm/exec";
const form = document.forms["submit-to-google-sheet"];
const loadingScreen1 = document.querySelector(".loading-container1");
const loadingScreen2 = document.querySelector(".loading-container2");
const SuccessPage = document.querySelector(".SuccessPage");
const reEnter = document.querySelector(".reEnter");
const form_cont = document.querySelector(".form_wrapper");
const teamname = document.querySelector("[data-teamname]")
const email1 = document.querySelector("[data-email1]");
const email2 = document.querySelector("[data-email2]");
const email3 = document.querySelector("[data-email3]");
const email4 = document.querySelector("[data-email4]");
const number1 = document.querySelector("[data-number1]");
const number2 = document.querySelector("[data-number2]");
const number3 = document.querySelector("[data-number3]");
const number4 = document.querySelector("[data-number4]");
let veremail3 = true;
let vernumber3 = true;
let veremail4 = true;
let vernumber4 = true;
if (email3.value != "") {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email3.value.match(mailformat)) {
    veremail3 = true;
  } else {
    alert("You have entered an invalid email address !");
    veremail3 = false;
  }
}
if (number3.value != "") {
  var phoneno = /^\d{10}$/;
  if (number3.value.match(phoneno)) {
    vernumber3 = true;
  } else {
    alert("You have entered an invalid Mobile Number !");
    vernumber3 = false;
  }
}
if (email4.value != "") {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email4.value.match(mailformat)) {
    veremail4 = true;
  } else {
    alert("You have entered an invalid email address !");
    veremail4 = false;
  }
}
if (number4.value != "") {
  var phoneno = /^\d{10}$/;
  if (number4.value.match(phoneno)) {
    vernumber4 = true;
  } else {
    alert("You have entered an invalid Mobile Number !");
    vernumber4 = false;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    ValidateEmail(email1) &&
    ValidateEmail(email2) &&
    veremail3 &&
    veremail4 &&
    phonenumber(number1) &&
    phonenumber(number2) &&
    vernumber3 &&
    vernumber4
  ) {
    SubmitData();
  }
});
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address !");
    return false;
  }
}
function phonenumber(inputtxt) {
  var phoneno = /^\d{10}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert("You have entered an invalid Mobile Number !");
    return false;
  }
}
async function SubmitData() {
  form_cont.classList.add("None");
  loadingScreen2.classList.add("active");
  try {
    const check = await fetch(
      "https://script.google.com/macros/s/AKfycbwt_McxpSRaslN39W98hf6ZFYP5ee_0aHAM1mzV5DhRRlvo3G10HUQYVM82mKBXTZTm/exec?action=getData"
    );
    const checkResult = await check.json();
    let checked = 1;
    for (var i = 0; i < checkResult.length; i++) {
      if (
        teamname.value == checkResult[i].Team_Name
      ) {
        checked = 0;
        break;
      }
    }
    if (checked == 1) {
      try{
        loadingScreen2.classList.remove("active");
        loadingScreen1.classList.add("active");
        const sukham = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(form),
          });
        const result = await sukham.json();
        if (result?.result == "success") {
          console.log("Success!");
          loadingScreen1.classList.remove("active");
          SuccessPage.classList.add("Success");
          form.reset();
        }
      }catch(error){
        loadingScreen1.classList.remove("active");
        loadingScreen2.classList.remove("active");
        console.log("Error : ", error);
        alert(
          "Seems Heavy Traffic for registration . Please refresh the page and try once again"
        );
        form.reset();
      }
    } else {
      loadingScreen2.classList.remove("active");
      reEnter.classList.add("Success");
    }
  } catch (err) {
    loadingScreen1.classList.remove("active");
    loadingScreen2.classList.remove("active");
    console.log("Error : ", err);
    alert(
      "Seems Heavy Traffic for registration . Please refresh the page and try once again"
    );
    form.reset();
  }
}