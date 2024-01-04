// Typed animation

var typed = new Typed('.typing', {
	strings: [ '','Software Engineer', 'Web Developer', 'Graphic Designer' ],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
});

// Aside

const nav = document.querySelector('.nav'),
	navList = nav.querySelectorAll('li'),
	totalNavList = navList.length,
	allSection = document.querySelectorAll('.section'),
	totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
	const a = navList[i].querySelector('a');
	a.addEventListener('click', function() {
		
		for (let j = 0; j < totalNavList; j++) {
			if (navList[j].querySelector('a').classList.contains('active')) {
				allSection[j].classList.add('back-section');
			}
			navList[j].querySelector('a').classList.remove('active');
		}
		this.classList.add('active');
		showSection(this);
		if (window.innerWidth < 1200) {
			asideSectionTogglerBtn();
		}
	});
}


const navTogglerBtn = document.querySelector('.nav-toggler'),
	aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
	asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
	aside.classList.toggle('open');
	navTogglerBtn.classList.toggle('open');
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.toggle('open');
	}
}


// Add event listener to each link inside the sidebar
const sidebarLinks = document.querySelectorAll('.aside a');
sidebarLinks.forEach(link => {
	link.addEventListener('click', () => {
		aside.classList.remove('open');
		navTogglerBtn.classList.remove('open');
		for (let i = 0; i < totalSection; i++) {
			allSection[i].classList.remove('open');
		}
	});
});

function asideSectionTogglerBtn() {
	aside.classList.toggle('open');
	navTogglerBtn.classList.toggle('open');
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.toggle('open');
	}
}




//Scroll Btn


const scrollBtn = document.querySelector('.scroll-to-top');

const refreshBtnVisibility = () => {
	if (document.documentElement.scrollTop < 50) {
		scrollBtn.style.display = 'none';
	} else {
        
		scrollBtn.style.display = 'block';
	}
};

refreshBtnVisibility();

scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	
});

document.addEventListener('scroll', (e) => {
	refreshBtnVisibility();
});





 // Scroll to top when the page is refreshed

// const scrollBtn = document.querySelector('.scroll-to-top');

// const refreshBtnVisibility = () => {
// 	if (document.documentElement.scrollTop < 50) {
// 		scrollBtn.style.display = 'none';
// 	} else {
// 		scrollBtn.style.display = 'block';
// 	}
// };


// window.addEventListener('beforeunload', () => {
// 	window.scrollTo(0, 0);
// });

// refreshBtnVisibility();

// scrollBtn.addEventListener('click', () => {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// });

// document.addEventListener('scroll', () => {
// 	refreshBtnVisibility();
// });

