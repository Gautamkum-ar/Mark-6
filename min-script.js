const inputData = document.querySelector(".inputtext");
const translateBtn = document.querySelector(".translatebtn");
const translatedata = document.querySelector(".output");

translateBtn.addEventListener("click", () => {
  const API = `https://api.funtranslations.com/translate/minion.json?text=${inputData.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      translatedata.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      alert("Something went error. Try again Later");
    });
});
