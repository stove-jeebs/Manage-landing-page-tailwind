const btn = document.getElementById("menu-btn") as HTMLButtonElement;
const nav = document.getElementById("menu") as HTMLDivElement;
const input = document.getElementById("text-input") as HTMLInputElement;
const submit = document.getElementById("submit-btn") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLDivElement;

btn.addEventListener("click", function (event) {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value == "") {
    input.classList.add("placeholder-red");
    input.classList.add("form-error");
    input.setAttribute("placeholder", "e.g. abc@email.com");
    form.classList.add("input-error-msg");
  }
});

submit.addEventListener("input", function (event) {
  event.preventDefault();
  if (input.value == "") {
    input.classList.add("placeholder-red");
    input.classList.add("form-error");
    input.setAttribute("placeholder", "e.g. abc@email.com");
    form.classList.add("input-error-msg");
  }
});
