//===========================================================jquery=================================================================

//=========================================================javascript===============================================================
//date picker
window.onload = setTimeout(function(){
	var dt = new Date();
	document.getElementById("date").innerHTML = (dt.toDateString() + " || ");
}, 500);
$(document).ready(function(){
	$('td').click(function(){
		alert("Sorry, but this page has not been finished");
	});
});