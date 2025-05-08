const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.remove('active');
			menu.classList.remove('active');
		});
	});
}

// Smooth scroll
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetID = this.getAttribute('href').substring(1);
		const target = document.getElementById(targetID);
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// Active menu link on scroll
const observerSections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.menu__link');

const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			let id = entry.target.getAttribute('id');
			navLinks.forEach(link => {
				link.classList.remove('active');
				if (link.getAttribute('href') === `#${id}`) {
					link.classList.add('active');
				}
			});
		}
	});
}, {
	threshold: 0.3
});

document.querySelector("#myButton").addEventListener("click", function() {
	alert("Кнопка нажата!");
  });
  
observerSections.forEach(section => {
	sectionObserver.observe(section);
});

createSelectedSection(document.querySelector('#page'))