/*const slides = document.getElementsByClassName("swiper-slide");
const slidesLength = slides.length;
var el = document.getElementById("swiper-wrapper-ie");
var el2 = document.getElementById("swiper-ie");
if (window.isIE) {
  document.documentElement.classList.add("ie");
  el.style = null;
  el2.style = null;
}
if (slidesLength > 1 && !window.isIE) {
  var MySwiper = new Swiper(".swiper-container", {
    observer: true,
    observeParents: true,

    speed: 1200,
    direction: "vertical",
    mousewheel: { releaseOnEdges: false },

    followFinger: false,
    touchReleaseOnEdges: true,
    longSwipes: false,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    on: {
      slideChange: (swiper) => {
        const { offsetTop } = swiper.el;
        window.pageYOffset !== offsetTop &&
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
      },
      slideChangeTransitionEnd: (swiper) => {
        const activeIndex = swiper.activeIndex;
        swiper.params.mousewheel.releaseOnEdges =
          activeIndex === 0 || activeIndex === slidesLength - 1;
      },
    },
  });
}*/

// Check if running in Internet Explorer
/*
if (window.isIE) {
  document.documentElement.classList.add("ie");
  document.getElementById("swiper-wrapper-ie").style = null;
  document.getElementById("swiper-ie").style = null;
}*/
$(".slider-fullscreen_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: "auto",
    speed: 700,
    direction: "vertical",
    keyboard: true,
    parallax: true,
    loop: true,
    mousewheel: { releaseOnEdges: false },
  });
}); /*
// Initialize Swiper only if there are multiple slides and not in IE
const slides = document.getElementsByClassName("swiper-slide");
const slidesLength = slides.length;
if (slidesLength > 1 && !window.isIE) {
  var MySwiper = new Swiper(".swiper-container", {
    observer: true,
    observeParents: true,
    speed: 1200,
    direction: "vertical",
    mousewheel: { releaseOnEdges: false },
    followFinger: false,
    touchReleaseOnEdges: true,
    longSwipes: false,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // Changed to bullets for the internal pagination
    },
    on: {
      slideChange: function (swiper) {
        // Scroll to the top of the swiper container
        const { offsetTop } = swiper.el;
        if (window.pageYOffset !== offsetTop) {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }

        // Update the external progress bar
        const progressBar = document.getElementById("externalProgressBar");
        if (progressBar) {
          // Ensure progress never goes below 10%
          const minimumProgress = 0.1; // 10%
          let progress = swiper.activeIndex / (slidesLength - 1);
          progress = Math.max(progress, minimumProgress);
          progressBar.style.height = progress * 100 + "%";
        }
      },
      slideChangeTransitionEnd: function (swiper) {
        // Enable or disable mousewheel control at the start/end of the swiper
        const activeIndex = swiper.activeIndex;
        swiper.params.mousewheel.releaseOnEdges =
          activeIndex === 0 || activeIndex === slidesLength - 1;
      },
    },
  });
}

// Test
function extractSlideData(slide) {
  return {
    id: slide.id,
    href: slide.querySelector("a").getAttribute("href"),
    imageUrl: slide.querySelector("img").getAttribute("src"),
    heading: slide.querySelector(".work_card-heading").textContent,
  };
}

const slidesSwiper = document.querySelectorAll(".swiper-slide");

let slidesData = [];

slidesSwiper.forEach((slide) => {
  slidesData.push(extractSlideData(slide));
});

const lastSlide = slidesSwiper[slidesSwiper.length - 1];

lastSlide.addEventListener("mouseenter", function () {
  if (lastSlide.classList.contains("swiper-slide-active")) {
    console.log("Letztes Element");
    document.querySelector(".footer_component").style.display = "block";
  }
});

const secondLastSlide = slidesSwiper[slidesSwiper.length - 2];

secondLastSlide.addEventListener("mouseleave", function () {
  if (!lastSlide.classList.contains("swiper-slide-active")) {
    console.log("Zweitletztes Element");
    document.querySelector(".footer_component").style.display = "none";
  }
});
console.log(slidesData);
*/
