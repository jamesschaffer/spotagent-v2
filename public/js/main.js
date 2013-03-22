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
			
	}

	$('.btn.search').click(function(){
		//Provides background on button
		$(this).toggleClass('active');

		//Shows search input
		$('.search-container').toggleClass('show');

		//Puts focus right on the input so the keyboard slides up
		$('.search-query').focus();

		$('.parking-result').addClass('hide');
	})

	$('.btn.my-location').click(function(){
		$(this).toggleClass('active');
		$('.parking-result').toggleClass('hide');
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

		$('.parking-result').removeClass('hide');

		loadingWindow();
	});

	//Slides up the history calendar thingy
	$('.history-btn').click(function(){
		var heightReSize = $('.daily-breakdown').css({'height':(($(window).height())-300)+'px'});
		var sectionHeight = $('.daily-breakdown').height();
		
		if (sectionHeight === 0){
			heightReSize
		    $(window).resize(function(){
		    	heightReSize
		    });
		} else if (sectionHeight > 0){
			$('.daily-breakdown').css('height', '0');
		} else {
			return
		}
	})
});

//Toggle for the pop down - DONE
//Ability to clear an input - DONE
//Grab value of input and inject HTML into address div - DONE
//Show loading window 
//Drop or expand pin, animate gradient pulse 
//Slide result up into view with address value
//Delay then run bar animation
//Build Error window