$(function() {

	
       $("#my-menu").mmenu({
       	extensions: [ 'theme-white' ,"pagedim-black", "fx-panels-none",  "fx-listitems-drop" ,],
       	navbar: {
       		title: 'ТОО Нур-Шапагат-курылыс'
       	},
       offCanvas: {
       	position: 'right'
       }

       });

       var api = $('#my-menu').data('mmenu');
       api.bind('open:finish', function(){
       	$('.hamburger').addClass('is-active');
       }).bind('close:finish', function(){
       	$('.hamburger').removeClass('is-active');
});

});

 AOS.init();
// $(".welcome h1").animatedCss("fadeIn");



