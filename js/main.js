'use strict';

const panels = document.querySelectorAll('.panel');

function openSection() {
  this.classList.toggle('open');
  this.classList.toggle('open-active');
}

panels.forEach((panel) => panel.addEventListener('click', openSection));
