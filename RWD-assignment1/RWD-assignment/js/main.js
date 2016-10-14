$(document).ready(function(){




	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('header nav').toggleClass('active');
		
	});




	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});

$('.more_listing_btn').click(function(){
       
    $('.properties_list').append('<li><a href="#"><img src="img/property_1.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span>					<div class="property_details">						<h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2>					</div></li><li><a href="#"><img src="img/property_2.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span><div class="property_details"><h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2></div></li><li><a href="#"><img src="img/property_3.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span><div class="property_details"><h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2></div></li><li><a href="#"><img src="img/property_1.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span>					<div class="property_details"><h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2>					</div></li><li><a href="#"><img src="img/property_2.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span><div class="property_details"><h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2></div></li><li><a href="#"><img src="img/property_3.jpg" alt="" title="" class="property_img"/></a><span class="price">$2500</span><div class="property_details"><h1><a href="#">Fuisque dictum tortor at purus libero</a></h1><h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2></div></li>');
       return false;
});
});

//date picker code
  $(function() {
    $( "#check_in_date,#check_out_date" ).datepicker();
  });


