const scriptURL =
  "https://script.google.com/macros/s/AKfycbwt_McxpSRaslN39W98hf6ZFYP5ee_0aHAM1mzV5DhRRlvo3G10HUQYVM82mKBXTZTm/exec";
const form = document.forms["submit-to-google-sheet"];
const loadingScreen1 = document.querySelector(".loading-container1");
const loadingScreen2 = document.querySelector(".loading-container2");
const SuccessPage = document.querySelector(".SuccessPage");
const reEnter = document.querySelector(".reEnter");
const form_cont = document.querySelector(".form_wrapper");
const teamname = document.querySelector("[data-teamname]")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SubmitData();
});
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