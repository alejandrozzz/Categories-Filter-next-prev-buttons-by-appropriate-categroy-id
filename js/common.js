$(function() {
	var cat;
	var temp;
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: true,
			}
		},
		navText: "",
		autoplay: true,
	});
	$('.slider_reviews_wrap').slick({
  		dots: true,
  		infinite: false,
 		speed: 300,
 		autoplay: true,
 		autoplaySpeed: 5000,
  		slidesToShow: 4,
  		slidesToScroll: 4,
  		arrows: false,
 		 responsive: [
   		 {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
      	}
    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	// Sliders end

// $(function() {
//     $.mask.definitions['~'] = "[+-]";
//     $(".phone_num").mask("+9 (999) 999-99-99");
// });
	// Phone mask

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//SVG Fallback

	$('.cat_mnu').each( function( i, buttonLinks ) {
  		var $buttonLinks = $( buttonLinks );
 		 $buttonLinks.on( 'click', 'a', function() {
   			 $buttonLinks.find('.active_page').removeClass('active_page');
    		$( this ).addClass('active_page');
  		});
	});

	// About show active

	$(document).on('click', '.about_mnu a', function (e) {
	  e.preventDefault();
	  var valueMnu = $(this).attr('href').substr(1);
	  Hash.add('cheked', valueMnu);
	});
	$(document).ready(function() {
	  var hash = Hash.get();
	  if (hash.cheked) {
	    $('.about_mnu a[href="#' + hash.cheked + '"]').trigger('click');
	  }
	});

	$(document).on('click', '.services_mnu a', function (e) {
	  e.preventDefault();
	  var valueMnu = $(this).attr('href').substr(1);
	  Hash.add('cheked', valueMnu);
	});

	$(document).ready(function() {
		var hash = Hash.get();
		var cat;

		if (hash.cheked) {
			$('.services_mnu a[href="#' + hash.cheked + '"]').trigger('click');
		}
});

// Start
	$('.practice_items_wrap')
		.find('.practice_item')
		.append('<div class="active_arrows"><a class="prev scroll" href="#scrollId"><i class="fa fa-angle-left" aria-hidden="true"></i> Предыдущее</a><a class="next scroll" href="#scrollId">Следующее <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>');

	$(".practice_mnu a").on('click', function(){
		cat = $(this).data('cat');

		$(".practice_items_wrap .practice_item").removeClass("item_active");

		if(cat == "all") return;
			temp = 0;
		$('.practice_item').each(function(indx, element){
			if($(element).data('cat') == cat){
				$(element).addClass("item_active");
				// $(element).find(".item_non_active").addClass("item_active");
				temp++;
				return false;
			}
		});
	});
	/*var elementsArrNext = [];
	var elementsArrPrev = [];
	var lastElement;
	var firstElement;
	var tmp;
	$('.active_arrows .next, .active_arrows .prev').on('click', function(e){
		
		self = $(this);
		
		if (self.hasClass('next')) {
			checkWhich = true;
		} else if (self.hasClass('prev')){
			checkWhich = false;
		}
		catt = self.closest(".practice_item").attr("data-cat");
		
		$(".practice_items_wrap .item_non_active").removeClass("item_active").removeAttr("id", "scrollId");
		if (checkWhich) {
			if (!(typeof elementsArrNext != 'undefined' && elementsArrNext.length)){
				elementsArrNext = $(".practice_item[data-cat='"+catt+"']");
				
				lastElement = elementsArrNext.last();
				elementsArrNext = elementsArrNext.slice(1);
			} else {
				
				if (elementsArrNext.length == 1){
					lastElement = elementsArrNext[0];
				} else {
					
					elementsArrNext = elementsArrNext.slice(1);
				}

			}
			var flag = false;
		
			
			elementsArrNext.each(function(indx, element){
				
				if ($(self.closest(".practice_item")).is(lastElement)){
					elementsArrTmp = $(".practice_item[data-cat='"+catt+"']");
					var firstElement = elementsArrTmp.first();
					$(firstElement).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
					flag = true;
					elementsArrTmp = [];
					elementsArrNext = [];
				}
				
			});
			if (!flag){
				$(elementsArrNext[0]).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
				
			}
		}
		if (!checkWhich){

			if (!(typeof elementsArrPrev != 'undefined' && elementsArrPrev.length)){
				elementsArrPrev = $(".practice_item[data-cat='"+catt+"']");
				
	console.log(elementsArrPrev);
				
				firstElement = elementsArrPrev.first();
				tmp = elementsArrPrev.length;
				//elementsArrPrev = elementsArrPrev.slice(1,-1);
				console.log(elementsArrPrev);
			} else {
				
				if (elementsArrPrev.length == 1){
					firstElement = elementsArrPrev[0];
				} else {
					
					//elementsArrPrev = elementsArrPrev.slice(1,-1);
				}

			}

			var flag = false;
			elementsArrPrev.each(function(indx, element){
				
				if ($(self.closest(".practice_item")).is(firstElement)){
					elementsArrTmp = $(".practice_item[data-cat='"+catt+"']");
					var lastElement = elementsArrTmp.last();
					console.log(lastElement);
					$(lastElement).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
					flag = true;
					elementsArrTmp = [];
					elementsArrPrev = [];
				}
				
			});
			if (!flag){
				$(elementsArrPrev[elementsArrPrev.length-(self.closest(".practice_item")).indexOf]).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
				//elementsArrPrev[elementsArrPrev.prev().indexOf]
	// tmp--;
	// 			console.log('jhkljhkj '+elementsArrPrev);
	// 			$(elementsArrPrev[tmp]).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
				
			}
		}
		
		
		
		
	});*/
	// Stop
	var currentCat;
	$('.practice_item').on('click', '.next', function(){
		currentCat = $('.item_active').attr('data-cat');
		tmp = $('.item_active').nextAll('div[data-cat="'+currentCat+'"]');
		if ($(this).parent().parent().is($('.practice_item[data-cat="'+currentCat+'"]').last())) {
			$('.practice_item[data-cat="'+currentCat+'"]').last().removeClass('item_active');
			$('.practice_item[data-cat="'+currentCat+'"]').first().addClass('item_active');
		} else {
			tmp.first().addClass('item_active');
			$('.item_active').first().removeClass('item_active');
		}
	});

	$('.practice_item').on('click', '.prev', function(){
		currentCat = $('.item_active').attr('data-cat');
		tmp = $('.item_active').prevAll('div[data-cat="'+currentCat+'"]');
		//console.log(tmp);
		if ($(this).parent().parent().is($('.practice_item[data-cat="'+currentCat+'"]').first())) {
			$('.practice_item[data-cat="'+currentCat+'"]').first().removeClass('item_active');
			$('.practice_item[data-cat="'+currentCat+'"]').last().addClass('item_active');
		} else {
			tmp.first().addClass('item_active');
			$('.item_active').last().removeClass('item_active');
		}
	});
});
$('.practice_mnu a').on( 'click', function(e) {
	 		 	e.preventDefault();

	   			$('.practice_mnu').find('.active_page').removeClass('active_page');
	    		$( this ).addClass('active_page');
	  		});
$('.scroll').click( function(e){ 
	e.preventDefault();
	var scroll_el = $(this); 

	$('html, body').animate({ scrollTop: scroll_el.offset().top }, 500);
});


// $('.active_arrows .next').on('click', function(){
// 	self = $(this);
// 	var catt = (self.closest(".practice_item").attr("data-cat"));
// 	elementsArr = $(".practice_item[data-cat='"+catt+"']");
	
// 	var lastElement = elementsArr.last();
// 	elementsArr.each(function(indx, element){
// 		$(".practice_items_wrap .item_non_active").removeClass("item_active").removeAttr("id", "scrollId");
// 		if ($(self.closest(".practice_item")).is(lastElement)){
// 			$(elementsArr[0]).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
// 		}
// 		else {
// 			$(element).find(".item_non_active").addClass("item_active").attr("id", "scrollId");
// 			return;
// 		}
// 	});
// 	elementsArr = [];
// });
// $('.active_arrows .prev').on('click', function(){
// 	self = $(this);
// 	var catt = (self.closest(".practice_item").attr("data-cat"));
// 	elementsArr = $(".practice_item[data-cat='"+catt+"']");
	
// 	var lastElement = elementsArr.last();
// 	elementsArr.each(function(indx, element){
// 		$(".practice_items_wrap .item_non_active").removeClass("item_active").removeAttr("id", "scrollId");
// 		if ($(self.closest(".practice_item")).is(lastElement)){
// 			$(elementsArr[0]).find(".item_non_active").addClass('item_active').attr("id", "scrollId");
// 		}
// 		else {
// 			$(element).find(".item_non_active").addClass("item_active").attr("id", "scrollId");
// 			return;
// 		}
// 	});
// 	elementsArr = [];
// });

	var current = 'about1';
	function show(id) {
	document.getElementById(current).style.display = 'none';
	document.getElementById(id).style.display = 'block';
	current = id;
};
	var current = 'service1';
	function show(id) {
	document.getElementById(current).style.display = 'none';
	document.getElementById(id).style.display = 'block';
	current = id;
};
Hash = {
	// Получаем данные из адреса
	get: function() {
		var vars = {}, hash, splitter, hashes;
		if (!this.oldbrowser()) {
			var pos = window.location.href.indexOf('?');
			hashes = (pos != -1) ? decodeURIComponent(window.location.href.substr(pos + 1)) : '';
			splitter = '&';
		}
		else {
			hashes = decodeURIComponent(window.location.hash.substr(1));
			splitter = '/';
		}

		if (hashes.length == 0) {return vars;}
		else {hashes = hashes.split(splitter);}

		for (var i in hashes) {
			if (hashes.hasOwnProperty(i)) {
				hash = hashes[i].split('=');
				if (typeof hash[1] == 'undefined') {
					vars['anchor'] = hash[0];
				}
				else {
					vars[hash[0]] = hash[1];
				}
			}
		}
		return vars;
	},
	// Заменяем данные в адресе на полученный массив
	set: function(vars) {
		var hash = '';
		for (var i in vars) {
			if (vars.hasOwnProperty(i)) {
				hash += '&' + i + '=' + vars[i];
			}
		}

		if (!this.oldbrowser()) {
			if (hash.length != 0) {
				hash = '?' + hash.substr(1);
			}
			window.history.pushState(hash, '', document.location.pathname + hash);
		}
		else {
			window.location.hash = hash.substr(1);
		}
	},
	// Добавляем одно значение в адрес
	add: function(key, val) {
		var hash = this.get();
		hash[key] = val;
		this.set(hash);
	},
	// Удаляем одно значение из адреса
	remove: function(key) {
		var hash = this.get();
		delete hash[key];
		this.set(hash);
	},
	// Очищаем все значения в адресе
	clear: function() {
		this.set({});
	},
	// Проверка на поддержку history api браузером
	oldbrowser: function() {
		return !(window.history && history.pushState);
	},
};





