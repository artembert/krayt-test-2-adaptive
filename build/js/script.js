'use strict';

var pageHeader = document.querySelector('.page-header');

var startHomeWrapper = pageHeader.querySelector('.start-home__wrapper');

startHomeWrapper.addEventListener("mouseover", function () {
  pageHeader.classList.add('animation-iphone-rise');

  // setTimeout(function() {
  //   pageHeader.classList.remove('animation-iphone-rise');
  // }, 3000);
});

startHomeWrapper.addEventListener("mouseout", function () {
  pageHeader.classList.remove('animation-iphone-rise');
});
//# sourceMappingURL=script.js.map
