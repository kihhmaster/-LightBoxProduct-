$(function() {

	// Custom JS
	const burger = document.querySelector('.burger');
	const closebtn = document.querySelector('.close');
	const overlay = document.querySelector('.overlay');
	const start = document.querySelector('.start__page');
	// const menu = document.querySelector('.overlay .menu');

	let isOpen = false;
	burger.addEventListener("click", () => {
		isOpen = !isOpen;
		overlay.classList.toggle("open");
		if(isOpen) {
			document.body.style.overflow = "hidden";
			// document.body.style.height = "100vh";
			// document.body.parentNode.style.overflowY = "scroll";

		}
		if(!isOpen) {
			document.body.style.overflow = "scroll";
			document.body.style.height = "null";
			document.body.parentNode.style.overflowY = "scroll";

		}
	});
	closebtn.addEventListener("click", () => {
		isOpen = !isOpen;
		overlay.classList.remove("open");
		document.body.style.overflow = "scroll";
	});



		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
	}

	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {

			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}
	

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 0,
			URLhashListener: false,
			startPosition: 'URLHash',
			animateOut: 'bounceOut',
			animateIn: 'bounceInRight',
			// rewind: true,// возврощает к начальному элементу, при достижение конца
			loop: true, //Зацикливаем слайдер
			margin: 0, //Отступ от элемента справа в 50px
			dots: true,
			nav: false, //Отключение навигации 
			autoplay: true, //Автозапуск слайдера
			smartSpeed: 2000, //Время движения слайда
			autoplayTimeout: 15000, //Время смены слайда
			autoplayHoverPause: true,	//Пауза при наведении.
			navText : ["<img src='img/@2x/owl-prev.png'>","<img src='img/@2x/owl-next.png'>"],
			responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
						0:{
								items:1
						},
						600:{
								items:1
						},
						1000:{
								items:1
						}
				}
	
			
		});
	});

		// Based on a Pen by Russell *ttps://codepen.io/Pycb/pen/wWRrjg*
	//Using Jquery 'Cascade Slider jQuery Plugin' by jqueryscript.net 'https://www.jqueryscript.net/demo/Minimal-3D-Image-Rotator-with-jQuery-CSS3-Cascade-Slider/'
	(function($) {
		$.fn.cascadeSlider = function(opt) {
			var $this = this,
				itemClass = opt.itemClass || 'cascade-slider_item',
				arrowClass = opt.arrowClass || 'cascade-slider_arrow',
				$item = $this.find('.' + itemClass),
				$arrow = $this.find('.' + arrowClass),
				itemCount = $item.length;

			var defaultIndex = 0;

			changeIndex(defaultIndex);

			$arrow.on('click', function() {
				var action = $(this).data('action'),
					nowIndex = $item.index($this.find('.now'));

				if(action == 'next') {
					if(nowIndex == itemCount - 1) {
						changeIndex(0);
					} else {
						changeIndex(nowIndex + 1);
					}
				} else if (action == 'prev') {
					if(nowIndex == 0) {
						changeIndex(itemCount - 1);
					} else {
						changeIndex(nowIndex - 1);
					}
				}

				$('.cascade-slider_dot').removeClass('cur');
				// $('.cascade-slider_dot').next().addClass('cur');
			});
			
			// add data attributes
			for (var i = 0; i < itemCount; i++) {
				$('.cascade-slider_item').each(function(i) {
					$(this).attr('data-slide-number', [i]);
				});
			}
			
			// dots
			$('.cascade-slider_dot').bind('click', function(){
				// add class to current dot on click
				$('.cascade-slider_dot').removeClass('cur');
				$(this).addClass('cur');

				var index = $(this).index();

				$('.cascade-slider_item').removeClass('now prev next');
				var slide = $('.cascade-slider_slides').find('[data-slide-number=' + index + ']');
				slide.prev().addClass('prev');
				slide.addClass('now');
				slide.next().addClass('next');

				if(slide.next().length == 0) {
					$('.cascade-slider_item:first-child').addClass('next');
				}

				if(slide.prev().length == 0) {
					$('.cascade-slider_item:last-child').addClass('prev');
				}
			});

			function changeIndex(nowIndex) {
				// clern all class
				$this.find('.now').removeClass('now');
				$this.find('.next').removeClass('next');
				$this.find('.prev').removeClass('prev');
				if(nowIndex == itemCount -1){
					$item.eq(0).addClass('next');
				}
				if(nowIndex == 0) {
					$item.eq(itemCount -1).addClass('prev');
				}

				$item.each(function(index) {
					if(index == nowIndex) {
						$item.eq(index).addClass('now');
					}
					if(index == nowIndex + 1 ) {
						$item.eq(index).addClass('next');
					}
					if(index == nowIndex - 1 ) {
						$item.eq(index).addClass('prev');
					}
				});
			}
		};
	})(jQuery);

	$('#cascade-slider').cascadeSlider({
		itemClass: 'cascade-slider_item',
		arrowClass: 'cascade-slider_arrow'
	});
		

});
