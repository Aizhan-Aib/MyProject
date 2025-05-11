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

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu__link');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			navLinks.forEach(link => link.classList.remove('active'));
			const id = entry.target.getAttribute('id');
			const activeLink = document.querySelector(`.menu__link[href="#${id}"]`);
			if (activeLink) activeLink.classList.add('active');
		}
	});
}, {
	threshold: 0.3
});

sections.forEach(section => {
	observer.observe(section);
});

const cards = document.querySelectorAll('.menu__card');

cards.forEach(card => {
	card.addEventListener('click', () => {
		card.classList.toggle('highlighted');
	});
});


  
function showModal(imageSrc, title, text) {
	document.getElementById("modalImage").src = imageSrc;
	document.getElementById("modalTitle").innerText = title;
	document.getElementById("modalText").innerText = text;
	document.getElementById("modal").style.display = "block";
	}

	
	function closeModal() {
	document.getElementById("modal").style.display = "none";
	}

	
	document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".menu__card");
	cards.forEach(card => {
		card.addEventListener("click", function () {
		const img = this.querySelector("img");
		const title = this.querySelector("h3").innerText;
		const text = this.querySelector("p")?.innerText || "";
		showModal(img.src, title, text);
		});
	});
});
