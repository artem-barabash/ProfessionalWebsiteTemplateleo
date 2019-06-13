$(document).ready(function(){
	$('.tab-content>div:not(":first-of-type")').fadeOut(250);

	$('.tab-menu li').each(function(i){
		$(this).attr('data-tab', 'tab' + i);
	});

	$('.tab-content>div').each(function(i){
		$(this).attr('data-tab', 'tab' + i);
	});
	$('.tab-menu li').on('click', function(i){
		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.tab-content-block');

		getWrapper.find('.tab-menu li').removeClass('active');
		$(this).addClass('active');

		getWrapper.find('.tab-content>div').fadeOut(250);
		getWrapper.find('.tab-content>div[data-tab=' + dataTab + ']').fadeIn(250);
	});



});

