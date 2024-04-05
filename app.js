document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: 0,
    focus: "center",
    breakpoints: {
      768: {
        perPage: 2,
        gap: "1rem",
      },
      992: {
        perPage: 3,
        gap: "1.5rem",
      },
    },
  }).mount();

  splide.on("moved", function (splide, newIndex) {
    var slides = splide.Components.Elements.slides;
    slides.forEach(function (slide, index) {
      var scale = index === newIndex ? 1.3 : 1;
      slide.style.transform = "scale(" + scale + ")";
    });
  });
});
