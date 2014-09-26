//===========================================================jquery=================================================================


//=========================================================javascript===============================================================
//date javascript	
var date = function(){
	var x = new Date();
	document.getElementById("home_date_english").innerHTML = x.toDateString();
}
date();