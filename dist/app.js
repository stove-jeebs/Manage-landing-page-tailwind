"use strict";
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const input = document.getElementById("text-input");
const submit = document.getElementById("submit-btn");
const form = document.getElementById("form");
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
