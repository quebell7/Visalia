$(document).ready(pageReady);

function pageReady() {
		$('#carousel').slick({
			dots: true,
		});

///nav links

$(".navline").hover(function showRollover() {
		 event.preventDefault();
    $(this).addClass("rollover");
    // $(this).show("thickline");

 }, function removeRollover() {
 		 event.preventDefault();
    $(this).removeClass("rollover");
} );


$(".mobile-nav-button").click(mobileNavToggle);
	
	function mobileNavToggle() {
		$(".mobile-nav").slideToggle();
		$(".line").toggleClass("active");
		$(".orders, #logo").hide();
	}

}




// function clickHandler() {
//     $('#hide').toggle();
//     $('#show').toggle();
//     $('.orders').toggle();
// }
    
// $(document).ready(function(){
//     $('#show').hide();
    
//     $('#hide, #show').on('click', clickHandler);
// });