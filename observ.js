
const header = document.querySelector("header");
const social = document.querySelector(".social");
const navigation = document.querySelector(".navigation");
const sectionOne = document.querySelector(".home-intro");
const sectionSlider = document.querySelector(".towels-creation");

const sectionOneOptions = {
  rootMargin: "-100px 0px -100px 0px"
};


const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add("nav-white");
      social.classList.add("social-white")
      navigation.classList.add("white")
    } else {
      
    }
  });
},
sectionOneOptions);


const sectionSliderOptions = {
  rootMargin: "-100px 0px -100px 0px"
};

const sectionSliderObserver = new IntersectionObserver(function(
  entries,
  sectionSliderObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add("nav-white");
      social.classList.add("social-white")
      navigation.classList.add("white")
    } else {
      
    }
  });
},
sectionSliderOptions);

sectionOneObserver.observe(sectionOne);
sectionSliderObserver.observe(sectionSlider);

let observerOptions = {
  rootMargin: '-20px',
  threshold: 0.5
}

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        header.classList.remove("nav-white");
        social.classList.remove("social-white")
        navigation.classList.remove("white")
      }
  });
};

let target = '.about,.exhibition, .partners, .towel1, .towel2, .towel3, .towel4, .towel5, .support, .platform'
document.querySelectorAll(target).forEach((i) => {
  if (i) {
      observer.observe(i);
  }
});