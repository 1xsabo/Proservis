let nextBtn=document.querySelector('.next-btn-suggestion')
let prevBtn=document.querySelector('.prev-btn-suggestion')
let nextBtn1=document.querySelector('.next-btn-ourJob')
let prevBtn1=document.querySelector('.prev-btn-ourJob')
let nextBtn2=document.querySelector('.next-btn-referance')
let prevBtn2=document.querySelector('.prev-btn-referance')
let nextBtn3=document.querySelector('.next-btn-partners')
let prevBtn3=document.querySelector('.prev-btn-partners')
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
      },
    loop:true,
  });
  var swiper = new Swiper(".suggestion-mySwiper", {
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      autoplay: {
        delay: 5000,
      },
      loop:true,
      slidesPerView:3,
      breakpoints:{
          276:{
              slidesPerView:1,
          },
          576:{
              slidesPerView:2,
          },
          998:{
              slidesPerView:3,
          },
      }
    });
  var swiper = new Swiper(".ourJob-mySwiper", {
      navigation: {
        nextEl: nextBtn1,
        prevEl: prevBtn1,
      },
      autoplay: {
        delay: 5000,
      },
      loop:true,
      slidesPerView:3,
      breakpoints:{
          276:{
              slidesPerView:1,
          },
          576:{
              slidesPerView:2,
          },
          998:{
              slidesPerView:3,
          },
          
      }
  });
  var swiper = new Swiper(".referance-mySwiper", {
      navigation: {
        nextEl: nextBtn2,
        prevEl: prevBtn2,
      },
      autoplay: {
        delay: 5000,
      },
      loop:true,
      slidesPerView:3,
      breakpoints:{
          276:{
              slidesPerView:1,
          },
          576:{
              slidesPerView:2,
          },
          998:{
              slidesPerView:3,
          },
      }
  });
  var swiper = new Swiper(".partners-mySwiper", {
      navigation: {
        nextEl: nextBtn3,
        prevEl: prevBtn3,
      },
      autoplay: {
        delay: 5000,
      },
      loop:true,
      slidesPerView:3,
      breakpoints:{
          276:{
              slidesPerView:1,
          },
          576:{
              slidesPerView:2,
          },
          998:{
              slidesPerView:3,
          },
      }
  });