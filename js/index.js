$(document).ready(pageReady);

function pageReady() {
		$('#carousel').slick({
			dots: true,
		});

///nav links

$(".navLine").hover(function showRollover() {
		 event.preventDefault();
    $(this).addClass("rollover");
    // $(this).show("thickline");

 }, function removeRollover() {
 		 event.preventDefault();
    $(this).removeClass("rollover");
} );

		

}