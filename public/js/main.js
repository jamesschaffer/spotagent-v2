$(function(){
	//Loading window
	var loadingWindow = function(){
		$('.loading').addClass('show');
			setTimeout(function(){
				$('.loading').removeClass('show');
			}, 2000);
			setTimeout(function(){
				$('.pin-wrap .pin:first-child').addClass('main');
				$('.pin-wrap .pin:last-child').addClass('pulse');
			}, 2200);		
	};

	var resultTimeOut = function(){
		setTimeout(function(){
			$('.parking-result').removeClass('hide');
		}, 3000);
	};

	var chartRender = function(){
		
		var $chart = $('.chart');

		for(var i = 0; i <= 95; i++){
		    var randomNumber = Math.ceil(Math.random()*100);
		    var li = $('<li></li>');
		    li.css('height', randomNumber + '%');
		    $chart.append(li);
		    
		};

		$('.chart li').each(function(){
		    if ($(this).height() < 33) {
		        $(this).addClass("low");
		    } else if ($(this).height() < 66) {
		        $(this).addClass("med");
		    } else {
		        $(this).addClass("high");
		    }
		});
	}

	chartRender();

	//Handles bottom chart with
	/*
	var historyWidth = $('.history-contain');
	var dayWidth = $('.day');
	
	historyWidth.width(($(window).width()) * 7);

	$(window).resize(function(){
	   var newwidth = $(window).innerWidth();   
	   historyWidth.width((newwidth * 7));   
	});
	*/

	$('.btn.search').click(function(){
		//Provides background on button
		$(this).toggleClass('active');

		//Shows search input
		$('.search-container').toggleClass('show');

		//Puts focus right on the input so the keyboard slides up
		$('.search-query').focus();

		$('.parking-result').addClass('hide');
	});

	$('.btn.my-location').click(function(){
		$(this).toggleClass('active');
		
		resultTimeOut();
		
		loadingWindow();
		$('.address').text('267 W 31st St');
	});

	//Allows user to blank input clicking the X
	$('.icon-remove').click(function(){
		$('.search-query').val(" ");
	});

	//Form submission
	$('.form-search').submit(function(e){
		
		e.preventDefault();
		//Removes the focus on the input so the iOS keyboard drops down
		$('.search-query').blur();

		//Hides the search bar
		$('.search-container').toggleClass('show');

		//Puts text into address div
		$('.address').text($('.search-query').val());	

		resultTimeOut();

		loadingWindow();
	});


	$('.history-btn').click(function(){
		$('.parking-result').toggleClass('show-chart');
		$('#map').toggleClass('small');
	});

});

//Toggle for the pop down - DONE
//Ability to clear an input - DONE
//Grab value of input and inject HTML into address div - DONE
//Show loading window - DONE
//Drop or expand pin, animate gradient pulse  - DONE
//Slide result up into view with address value - DONE
//Delay then run bar animation - DONE
//Build Error window 