const carousel = document.querySelector(".carousel2");
let carouselItems = document.querySelectorAll(".carousel__item");
const [btnLeftCarousel, btnRightCarousel] =
  document.querySelectorAll(".carousel-button");
let carouselCount = carouselItems.length;
let pos = 0;
let translateX = 0;

btnLeftCarousel.addEventListener("click", (e) => {
  let calculate = pos > 0 ? (pos - 1) % carouselCount : carouselCount;
  if (pos > 0) translateX = pos === 1 ? 0 : translateX - 100.5;
  else if (pos <= 0) {
    translateX = 100.5 * (carouselCount - 1);
    calculate = carouselCount - 1;
  }

  console.log(pos);

  pos = slide({
    show: calculate,
    disable: pos,
    translateX: translateX,
  });
});

btnRightCarousel.addEventListener("click", (e) => {
  let calculate = (pos + 1) % carouselCount;
  if (pos >= carouselCount - 1) {
    calculate = 0;
    translateX = 0;
  } else {
    translateX += 100.5;
  }

  pos = slide({
    show: calculate,
    disable: pos,
    translateX: translateX,
  });
});

function slide(options) {
  function active(_pos) {
    carouselItems[_pos].classList.toggle("active");
  }

  function inactive(_pos) {
    carouselItems[_pos].classList.toggle("active");
  }

  inactive(options.disable);
  active(options.show);

  document.querySelectorAll(".carousel__item").forEach((item, index) => {
    if (index === options.show) {
      item.style.transform = `translateX(-${options.translateX}%) scale(1)`;
    } else {
      item.style.transform = `translateX(-${options.translateX}%) scale(1)`;
    }
  });

  return options.show;
}
