$(document).ready(pageReady);

function pageReady() {
	

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
		$("#logo").toggle();
		
		$(".orders").toggle();
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