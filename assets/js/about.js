let navLi=document.querySelectorAll('.header-first-ul li')
let navBar=document.querySelector('.header-first-ul')
let navBars=document.querySelector('.nav-bar .navBar')
navBars.onclick=function () {
	navBar.classList.toggle('active-nav-menu')
}
function liActive() {
	for (let i = 0; i < navLi.length; i++) {
		if (window.scrollY>=0 && window.scrollY<180) {
			navLi[1].classList.add('active-li')
		}
		else{
			navLi[1].classList.remove('active-li')
		}
	}
}