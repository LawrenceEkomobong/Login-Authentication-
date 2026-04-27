const button = document.querySelector("#button");
const input = document.querySelector("#password");
const errorText = document.querySelector("#password-check");

button.addEventListener("click", () => {
   // stop form from submitting

  if (input.value.length < 8) {
    errorText.style.display = "block";
  }
  else {
    errorText.style.display = "none";
  };
});
