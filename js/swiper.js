const projectsSwiper = new Swiper('.projects__slider', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	centeredSlides: false,
	snapOnRelease: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
