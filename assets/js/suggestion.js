let navLi=document.querySelectorAll('.header-first-ul li')
let nextBtn=document.querySelector('.next-btn-suggestionPage')
let prevBtn=document.querySelector('.prev-btn-suggestionPage')
let navBar=document.querySelector('.header-first-ul')
let navBars=document.querySelector('.nav-bar .navBar')
navBars.onclick=function () {
	navBar.classList.toggle('active-nav-menu')
}
var swiper = new Swiper(".suggestion-page-mySwiper", {
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
        992:{
            slidesPerView:3,
        },
    }
});
function liActive() {
	for (let i = 0; i < navLi.length; i++) {
		if (window.scrollY>=0 && window.scrollY<180) {
			navLi[2].classList.add('active-li')
		}
		else{
			navLi[2].classList.remove('active-li')
		}
	}
}