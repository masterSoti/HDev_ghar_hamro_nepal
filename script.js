//===========================================================jquery=================================================================


//=========================================================javascript===============================================================
//date javascript	
function date_english(){
	var x = new Date();
	document.getElementById("home_date_english").innerHTML = x.toDateString();
}
date_english();