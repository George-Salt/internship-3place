
let school = document.querySelector(".section-about-school");
let course = document.querySelector(".section-about-course");
let rates = document.querySelector(".section-rates");
let certificate = document.querySelector(".section-certificate");
let license = document.querySelector(".section-license");
let tariffs = document.querySelector(".section-tariffs");

let schoolButton = document.querySelector(".school");
let courseButton = document.querySelector(".course");
let ratesButton = document.querySelector(".rates");
let certificateButton = document.querySelector(".certificate");
let licenseButton = document.querySelector(".license");
let tariffsButton = document.querySelector(".tariffs");

let sections = [school, course, rates, certificate, license, tariffs];

function visibleBlock(target, button) {
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom &&
    targetPosition.right > windowPosition.left &&
    targetPosition.left < windowPosition.right) {

    button.style.color = "#0083fc";
  } else {
    button.style.color = "black";
  }
};

window.addEventListener("scroll", function() {
  visibleBlock(school, schoolButton);
  visibleBlock(course, courseButton);
  visibleBlock(rates, ratesButton);
  visibleBlock(certificate, certificateButton);
  visibleBlock(license, licenseButton);
  visibleBlock(tariffs, tariffsButton);
});
