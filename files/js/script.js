// слайдер

new Swiper('.specialties', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	touchRatio: 1.2,
	grabCursor: true,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: true,
	watchOverflow: true,
	speed: 500,
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// }
});

new Swiper('.galerie', {
	navigation: {
		nextEl: '.galerie .swiper-button-next',
		prevEl: '.galerie .swiper-button-prev'
	},
	loop: true,
	touchRatio: 1.2,
	grabCursor: true,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: true,
	watchOverflow: true,
	speed: 500,
	spaceBetween: 30,
	//количество слайдов для показа
	slidesPerView: 3,
	//авторокрутка 
	autoplay: {
		//пауза между прокруткой
		delay: 2000,
		//Отключить после ручного переключения
		disableOnInteraction: false,
	},
	//скорость
	speed: 400,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	pagination: {
		el: '.galerie .swiper-pagination',
		clickable: true,
	},

})
$('.header__burger').click(function (event) {
	$('.header__burger, .header__menu-mobile').toggleClass('active')
	$('body').toggleClass('lock')
})//открытие меню бургер

$('.header__menu-mobile li').click(function () {
	$('.header__burger, .header__menu-mobile').removeClass('active');
	$('body').removeClass('lock');
});//закрывание меню бургер при клике на ссылку


$('.home__book-table').click(function (event) {
	$('.home__book-table').toggleClass('active')
	$('.home__explore').removeClass('active')
})
$('.home__explore').click(function (event) {
	$('.home__explore').toggleClass('active')
	$('.home__book-table').removeClass('active')
})// изменение цвета кнопок 

//прокрутка до якорей 
$(document).ready(function () {
	function checkWidth() {
		let windowWidth = $('body').innerWidth();
		/*с фиксированным меню -------------------------------------------------------*/
		if (windowWidth > 767) {
			$('a[href^="#"]').click(function () {
				$('.el').removeClass('_animate')
				let target = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(target).offset().top - 68
				}, 1000);
			});
		}
		/*----------------------------------------------------------------------------*/

		/*с меню бургер --------------------------------------------------------------*/
		else {
			$('a[href^="#"]').click(function () {
				let target = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(target).offset().top - 40
				}, 1000);
			});
		}
	}
	checkWidth(); // проверит при загрузке страницы
});
let date = new Date()
let fullYear = String(date.getFullYear())
let month = String(date.getMonth() + 1)
if (month.length === 1) {
	month = '0' + month
}
let day = String(date.getDate())
if (day.length === 1) {
	day = '0' + day
}
date = fullYear + '-' + month + '-' + day;
$('#booking-date').attr('min', date)// установка минимальной даты

$('.menu__category li').click(function (e) {
	let cateogryId = e.target.id;
	$('.menu__category li').removeClass('active')
	$('#' + cateogryId).addClass('active')
	$('.menu__product').removeClass('active')
	$('#product-' + cateogryId).addClass('active')
})