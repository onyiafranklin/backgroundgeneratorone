

//Munwa44 bu Ezugudor addi dis thing
var css = document.querySelector("hfgdgd3");
>>>>>>> 00f11ebc00b37040bffaf00da870b7d3b716d67f
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
