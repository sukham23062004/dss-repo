const scriptURL =
  "https://script.google.com/macros/s/AKfycbync6EW-Quy3PGPtydmy3w2K1drcjCYsL49hAz-rUU7xa3wQx7a5eBOT-FE_eLKUad2wQ/exec";
const form = document.forms["submit-to-google-sheet"];
const loadingScreen1 = document.querySelector(".loading-container1");
const loadingScreen2 = document.querySelector(".loading-container2");
const SuccessPage = document.querySelector(".SuccessPage");
const reEnter = document.querySelector(".reEnter");
const form_cont = document.querySelector(".form_wrapper");
const roll_code = document.querySelector("[data-rollcode]");
const data_number = document.querySelector("[data-number]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SubmitData();
});
async function SubmitData() {
  form_cont.classList.add("None");
  loadingScreen2.classList.add("active");
  try {
    const check = await fetch(
      "https://script.google.com/macros/s/AKfycbync6EW-Quy3PGPtydmy3w2K1drcjCYsL49hAz-rUU7xa3wQx7a5eBOT-FE_eLKUad2wQ/exec?action=getUsers"
    );
    const checkResult = await check.json();
    let checked = 1;
    for (var i = 0; i < checkResult.length; i++) {
      if (roll_code.value == checkResult[i]?.Roll_No || data_number.value == checkResult[i]?.Number) {
        checked = 0;
        break;
      }
    }
    if(checked==1){
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
    }else{
      loadingScreen2.classList.remove("active");
      reEnter.classList.add("Success");
    }
  } catch (err) {
    loadingScreen.classList.remove("active");
    console.log("Error : ", err);
    alert(
      "Seems Heavy Traffic for registration . Please refresh the page and try once again"
    );
    form.reset();
  }
}