//===========================================================jquery=================================================================

//=========================================================javascript===============================================================
//date picker
window.onload = setTimeout(function(){
	var dt = new Date();
	document.getElementById("home_date_english").innerHTML = (dt.toDateString() + " || ");
}, 500);