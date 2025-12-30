const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__menu-mobile .nav__link');
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu-mobile');
const faqItems = document.querySelectorAll('.faq__item');
const yearSpan = document.querySelector('.current-year');

function handleNavScroll() {
	if (window.scrollY > 10) {
		nav.classList.add('nav--scrolled');
	} else {
		nav.classList.remove('nav--scrolled');
	}
}

function toggleMobileMenu() {
	mobileMenu.classList.toggle('nav__menu-mobile--active');
}

function closeMobileMenu() {
	mobileMenu.classList.remove('nav__menu-mobile--active');
}

function toggleFaqItem(item) {
	const btn = item.querySelector('.faq__question');

	faqItems.forEach((i) => {
		if (i !== item) {
			i.classList.remove('faq__item--active');
			i.querySelector('.faq__question').classList.remove(
				'faq__question--active'
			);
		}
	});

	item.classList.toggle('faq__item--active');
	btn.classList.toggle('faq__question--active');
}

function setCurrentYear() {
	const currentYear = new Date().getFullYear();
	yearSpan.innerText = currentYear;
}

window.addEventListener('scroll', handleNavScroll);
burger.addEventListener('click', toggleMobileMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
document.addEventListener('click', (e) => {
	const isMenuOpen = mobileMenu.classList.contains('nav__menu-mobile--active');
	if (
		isMenuOpen &&
		!mobileMenu.contains(e.target) &&
		!burger.contains(e.target)
	) {
		closeMobileMenu();
	}
});
faqItems.forEach((item) => {
	const btn = item.querySelector('.faq__question');
	btn.addEventListener('click', () => toggleFaqItem(item));
});
setCurrentYear();
