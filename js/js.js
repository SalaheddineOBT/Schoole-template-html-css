function selected(o){
	$('.navbar ul li a').removeClass('active');
	$(o).addClass('active');
}
$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('navChang');
	});
	$(window).on("load scroll",function(){
		$("#menu").removeClass('fa-times');
		$('.navbar').removeClass('navChang');
	});
});