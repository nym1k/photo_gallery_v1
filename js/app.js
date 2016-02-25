//Problem: Link goes to a dead end when clicking on image
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#photoGallery a").click(function(event){
	event.preventDefault();
	var photoLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", photoLocation);

	//Show the overlay
	$overlay.show();

	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText); 
});
	
//When overlay is clicked
$overlay.click(function(){
	//Hide the overlay
	$overlay.hide();
});
	