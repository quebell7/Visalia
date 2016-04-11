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
		// $(this)addClass("close");
	}

		

}