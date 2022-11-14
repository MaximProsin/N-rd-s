const swiper = new Swiper('.swiper', {
	speed: 2000,
	spaceBetween: 100,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dinamicBullets: true,
	},
});