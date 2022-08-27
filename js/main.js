function $(selector) {
	return document.querySelector(selector)
}

const burgerBtn = $('.burger-btn');

burgerBtn.onclick = function() {
	burgerBtn.classList.toggle('open');
	$('.header__navbar').classList.toggle('open');
}


let linksBtn = document.querySelectorAll('.links')

linksBtn.forEach(link => {
	link.onclick = function() {
		burgerBtn.classList.toggle('open');
		$('.header__navbar').classList.toggle('open')
	}
})