// const imageContainerEl = document.querySelector(".image-container");

// const prevEl = document.getElementById("prev");
// const nextEl = document.getElementById("next");
// let x = 0;
// let timer;






  // var swiper = new Swiper('.swiper', {
  //   slidesPerView: 3,
  //   direction: getDirection(),
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   on: {
  //     resize: function () {
  //       swiper.changeDirection(getDirection());
  //     },
  //   },
  // });

  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  //   return direction;
  // }



  const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
 