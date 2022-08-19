let header = document.querySelector('.header-container')
let navBar=document.querySelector('.header-first-ul')
let navBars=document.querySelector('.nav-bar .navBar')
navBars.onclick=function () {
	navBar.classList.toggle('active-nav-menu')
}
window.addEventListener('scroll',headerActive)
function headerActive() {
	if (window.scrollY>=10) {
		header.classList.add('active-nav-bar')
	}
	else{
		header.classList.remove('active-nav-bar')
	}
}
