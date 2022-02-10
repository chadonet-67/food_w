const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
let slide = document.querySelector(".slide");



menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
     navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    },
});


var swiper = new Swiper(".food-slide", {
    slidesPerView: 1,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween : 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
    },
  });
  let previewContainer = document.querySelector(".food-preview-container");
  let previewBox = document.querySelectorAll(".food-preview");

  document.querySelectorAll(".food .slide").forEach(food =>{
      food.onclick = ()=>{
          previewContainer.style.display = 'flex';
          let name = food.getAttribute('data-name');
          previewBox.forEach(preview =>{
              let target = preview.getAttribute('data-target');
              if(name == target)
              {
                  preview.classList.add('active')
              }
          });
      };
  });

  previewContainer.querySelector('#close-preview').onclick = ()=>{
      previewContainer.style.display = 'none';
      previewBox.forEach(close =>{
          close.classList.remove('active');
      });
  };

  var swiper = new Swiper(".menu-slide", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight : true,
    spaceBetween : 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });

  var swiper = new Swiper(".blogs-slider", {
    slidesPerView: 1,
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween : 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
    },
  });