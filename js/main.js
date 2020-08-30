'use strict';

const panels = document.querySelectorAll('.panel');

function growSection() {
  this.classList.toggle('open');
}

function makeTitlesAppear(ev) {
  console.log(ev.propertyName);
  if (ev.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', growSection));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', makeTitlesAppear)
);
