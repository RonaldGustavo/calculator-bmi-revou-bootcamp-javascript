const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const ageEl = document.getElementById("age");
const radioEls = document.querySelectorAll('input[type="radio"]');

const subHeadingTextEl = document.querySelector(".sub-heading-text");
const resultStatusEl = document.querySelector(".result-text");
const resultBMIEl = document.querySelector(".result-BMI");
const resultStatusTextEl = document.querySelector(".result-status-text");
const viewRecommendEl = document.querySelector(".view-recommend");

const maleEl = document.querySelector(".male");
const femaleEl = document.querySelector(".female");

const btnClear = document.querySelector(".btn-clear");
const btnSubmit = document.querySelector(".btn-submit");

[weightEl, heightEl, ageEl].forEach((el) =>
  el.addEventListener("input", handleInputClear)
);
[weightEl, heightEl, ageEl, maleEl, femaleEl].forEach((el) =>
  el.addEventListener("input", handleInputSubmit)
);

const handleSubmit = () => {
  const height = heightEl.value / 100; // Convert cm to m
  const weight = weightEl.value; // Already in kg
  console.log("Weight:", weight, "Height:", height);
  const calcBmiCalculator = weight / Math.pow(height, 2);
  let resultBMI = Math.round(calcBmiCalculator);
  console.log(resultBMI);

  if (resultBMI < 18.5) {
    resultStatusEl.innerHTML = "Kekurangan berat badan";
    resultStatusTextEl.innerHTML = "Anda Kekurangan berat badan";
  } else if (resultBMI >= 18.5 && resultBMI < 25) {
    resultStatusEl.innerHTML = "Normal (ideal)";
    resultStatusTextEl.innerHTML = "Anda Normal (ideal)";
  } else if (resultBMI >= 25 && resultBMI < 30) {
    resultStatusEl.innerHTML = "Kelebihan berat badan";
    resultStatusTextEl.innerHTML = "Anda Kelebihan berat badan";
    viewRecommendEl.classList.remove("visibility");
  } else if (resultBMI >= 30) {
    resultStatusEl.innerHTML = "Kegemukan (Obesitas)";
    resultStatusTextEl.innerHTML = "Anda Kegemukan (Obesitas)";
    viewRecommendEl.classList.remove("visibility");
  }
  subHeadingTextEl.classList.remove("visibility");

  resultBMIEl.innerHTML = resultBMI;
};

function handleInputClear() {
  if (weightEl.value === "" && heightEl.value === "" && ageEl.value === "") {
    btnClear.disabled = true;
    btnClear.style.cursor = "not-allowed";
  } else {
    btnClear.disabled = false;
    btnClear.style.cursor = "pointer";
  }
}
function handleInputSubmit() {
  if (
    weightEl.value === "" ||
    heightEl.value === "" ||
    ageEl.value === "" ||
    (maleEl.checked === false && femaleEl.checked === false)
  ) {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = "not-allowed";
  } else {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = "pointer";
  }
}

const handleClear = () => {
  const radioEls = document.querySelectorAll("input[type='radio']");
  for (let i = 0; i < radioEls.length; i++) {
    radioEls[i].checked = false;
  }

  heightEl.value = "";
  weightEl.value = "";
  ageEl.value = "";
  btnClear.disabled = true;
  btnClear.style.cursor = "not-allowed";
  resultBMIEl.innerHTML = "";
  resultStatusEl.innerHTML = "";
  resultStatusTextEl.innerHTML = "";
  viewRecommendEl.classList.add("visibility");
  subHeadingTextEl.classList.add("visibility");
  btnSubmit.disabled = true;
  btnSubmit.style.cursor = "not-allowed";
};
