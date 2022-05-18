"use strict";
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (event) {
    btn.classList.toggle('open');
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('flex');
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hidden');
});
