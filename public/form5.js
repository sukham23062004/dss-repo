const scriptURL =
  "https://script.google.com/macros/s/AKfycbzEdbCcTaXiLH8IfT7LYJQdEr0MfFFS6yCbX_pfE0YHZqs0rApG4si79KC5W3pKjR_Y/exec";
const form = document.forms["submit-to-google-sheet"];
const loadingScreen1 = document.querySelector(".loading-container1");
const loadingScreen2 = document.querySelector(".loading-container2");
const SuccessPage = document.querySelector(".SuccessPage");
const reEnter = document.querySelector(".reEnter");
const form_cont = document.querySelector(".form_wrapper");
const roll_code = document.querySelector("[data-rollcode]");
const data_number = document.querySelector("[data-number]");
const emailid = document.querySelector("[data-emailid]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (phonenumber(data_number) && ValidateEmail(emailid)) {
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
      "https://script.google.com/macros/s/AKfycbzEdbCcTaXiLH8IfT7LYJQdEr0MfFFS6yCbX_pfE0YHZqs0rApG4si79KC5W3pKjR_Y/exec?action=getData"
    );
    const checkResult = await check.json();
    let checked = 1;
    for (var i = 0; i < checkResult.length; i++) {
      if (
        roll_code.value == checkResult[i]?.Roll_No || data_number.value == checkResult[i]?.Number || emailid.value == checkResult[i]?.Email
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
      }
      catch(error){
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
