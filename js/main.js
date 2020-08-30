'use strict';

const panels = document.querySelectorAll('.panel');

function growSection() {
  this.classList.toggle('open');

  this.classList.toggle('open-active');
}

panels.forEach((panel) => panel.addEventListener('click', growSection));
