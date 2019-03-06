//Tableau pour residentiel corporate hybrid commercial hide/show debut //

$(document).ready(function () {
	console.log("ready!");

	$("#sub1").hide();
	$("#sub2").hide();
	$("#sub3").hide();
	$("#sub4").hide();

	$('#select_department').change(function () {



		if ($('#select_department').val() == "Residential") {
			$('#sub1').show(100);

		}

		else {
			$("#sub1").hide();
		}

		if ($('#select_department').val() == "Commercial") {
			$('#sub2').show(100);

		}

		else {
			$("#sub2").hide();

		}

		if ($('#select_department').val() == "Corporate") {
			$('#sub3').show(100);

		}

		else {
			$("#sub3").hide();

		}
		if ($('#select_department').val() == "Hybrid") {
			$('#sub4').show(100);

		}

		else {
			$("#sub4").hide();

		}


	});



});

//Tableau pour residentiel corporate hybrid commercial hide/show fin //

//bouton radio pour residentiel corporate hybrid commercial hide/show debut //

$(document).ready(function () {
	console.log("ready!");

	$("#radio1").hide();
	$("#radio2").hide();
	$("#radio3").hide();
	$("#radio4").hide();

	$('#select_department').change(function () {



		if ($('#select_department').val() == "Residential") {
			$('#radio1').show(500);

		}

		else {
			$("#radio1").hide();
		}

		if ($('#select_department').val() == "Corporate") {
			$('#radio2').show(500);
		}

		else {
			$("#radio2").hide();

		}
		if ($('#select_department').val() == "Hybrid") {
			$('#radio3').show(500);

		}

		else {
			$("#radio3").hide();

		}
		if ($('#select_department').val() == "Commercial") {
			$('#radio4').show(500);

		}

		else {
			$("#radio4").hide();

		}

	});



});
//bouton radio pour residentiel corporate hybrid commercial hide/show fin //

//totale pour residentiel corporate hybrid commercial hide/show debut //

$(document).ready(function () {


	$("#total1").hide();
	$("#total2").hide();
	$("#total3").hide();
	$("#total4").hide();

	$('#select_department').change(function () {

		if ($('#select_department').val() == "Residential") {
			$('#total1').show(500);


		}

		else {
			$("#total1").hide();
			


		}

		 if ($('#select_department').val() == "Corporate") {
			$('#total2').show(500);

		}

		else {
			$("#total2").hide();

		}

		if ($('#select_department').val() == "Hybrid") {
			$('#total3').show(500);

		}

		else {
			$("#total3").hide();

		}

		if ($('#select_department').val() == "Commercial") {
			$('#total4').show(500);

		}

		else {
			$("#total4").hide();


		}

	});

});







//Totale pour residentiel corporate hybrid commercial hide/show //

//Calcul formulaire pour residentiel
function residential() {

	var nombreApp = parseInt(document.getElementById("nbapp1").value);
	console.log("nombre d'apartement" + nombreApp);

	var nombreFloor = parseInt(document.getElementById("nbfl1").value);
	console.log("nombre étage" + nombreFloor);

	var nombreBasements = parseInt(document.getElementById("nbbase1").value);
	console.log("nombre sous sol " + nombreBasements);

	var appRatio = Math.ceil(nombreApp /= nombreFloor); // 

	console.log("appartement par etage " + appRatio);

	var ascNumber = Math.ceil(appRatio / 6);
	console.log("nombre d'ascenceur " + ascNumber);

	var numberColonne = Math.ceil(nombreFloor / 20);
	console.log("nombre de colonne" + numberColonne);

	var totaleAsc = Math.ceil(ascNumber *= numberColonne);
	console.log("ascenceur totale1 " + totaleAsc);


	var unitCage1 = (totaleAsc);
	console.log("ascenceur totale1 " + unitCage1);


	//If standard is choose * 7,565$			
	if (document.getElementById('standard').checked) {
		var result1 = (totaleAsc *= 7565);
		var result2 = (totaleAsc *= 10 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)
		var rangePrice = (7565);
		installFee1 = (10);
		installFee = Math.ceil(result1 * 10 / 100);

	}
	else if (document.getElementById('premium').checked) {
		var result3 = (totaleAsc *= 12345);
		var result4 = (totaleAsc *= 13 / 100);
		var rangePrice = (12345);
		installFee1 = (13);
		installFee = Math.ceil(result3 * 13 / 100);
		totaleAsc = Math.ceil(result3 + result4)

	}
	else if (document.getElementById('excellent').checked) {
		var result5 = (totaleAsc *= 15400);
		var result6 = (totaleAsc *= 16 / 100);
		totaleAsc = Math.ceil(result5 + result6)
		console.log("Cout total en dollard " + ascNumber)
		var rangePrice = (15400);
		installFee1 = (16);
		installFee = Math.ceil(result5 * 16 / 100);
	}

	if (Number.isNaN(unitCage1) || unitCage1 == "Infinity" || unitCage1 === null)  {
		unitCage1 = 0;
	}
	if (Number.isNaN(installFee) || installFee == "nfinity" || installFee === null) {
		installFee = 0;
	}

	if (Number.isNaN(totaleAsc) || totaleAsc == "nfinity" || totaleAsc === null) {
		totaleAsc = 0;
	}

	document.getElementById("installfee1").innerHTML = "Installation fee: " + installFee + " $";
	document.getElementById("installfee").innerHTML = "Installation: " + installFee1 + " %";
	document.getElementById("result1").innerHTML = "Total: " + totaleAsc + " $";
	document.getElementById("resultinstall1").innerHTML = "Range Unit price : " + rangePrice + " $";
	document.getElementById("uniteprice1").innerHTML = "Number of elevators: " + unitCage1 + " ";

}
//Calcul formulaire pour residentiel fin 



//Calcul pour formulaire Corporate 

function corporate() {

	var nombreOccupants = document.getElementById("nboccfloor3").value;
	console.log("nombre occupants par plancher " + nombreOccupants);

	var nombreFloor = parseInt(document.getElementById("nbfloor3").value);
	console.log("nombre d'étages " + nombreFloor);

	var nombreBasements = parseInt(document.getElementById("nbbase3").value);
	console.log("nombre de sous sol " + nombreBasements);

	var floorTotale = Math.ceil(nombreFloor += nombreBasements);//
	console.log("Étage totale " + floorTotale);

	var nombreOccupantsTotales = Math.ceil(nombreOccupants *= floorTotale)
	console.log(" nombre occupant total " + nombreOccupantsTotales)

	var ascNumberRequis = Math.ceil(nombreOccupantsTotales / 1000)
	console.log(" nombre ascenceur requis " + ascNumberRequis)


	var nombreColonne = Math.ceil(floorTotale / 20) //5
	console.log(" nombre de colonnes  " + nombreColonne)

	var totaleAsc = Math.ceil(ascNumberRequis / nombreColonne)
	console.log(" ascenceur / colone   " + totaleAsc)

	var totaleAsc = (nombreColonne *= totaleAsc)

	var unitCage = (totaleAsc)

	if (document.getElementById("standard1").checked) {
		var result1 = (totaleAsc *= 7565);
		var result2 = (totaleAsc *= 10 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)
		var rangePrice = (7565);
		var pourCent = (10);
		installFee = Math.ceil(result1 * 10 / 100);

	}
	else if (document.getElementById("premium1").checked) {
		var result1 = (totaleAsc *= 12345);
		var result2 = (totaleAsc *= 13 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)
		var rangePrice = (12345);
		pourCent = (13);
		installFee = Math.ceil(result1 * 13 / 100);
	}
	else if (document.getElementById("excellent1").checked) {
		var result1 = (totaleAsc *= 15400);
		var result2 = (totaleAsc *= 16 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		var rangePrice = (15400);
		pourCent = (16);
		installFee = Math.ceil(result1 * 16 / 100);
		console.log("Cout total en dollard " + totaleAsc)
	}

	if (Number.isNaN(unitCage) || unitCage == "Infinity" || unitCage === null) {
		unitCage = 0;
	}

	if (Number.isNaN(installFee) || installFee == "Infinity" || installFee === null) {
		installFee = 0;
	}

	if (Number.isNaN(totaleAsc) || totaleAsc == "Infinity" || totaleAsc === null) {
		totaleAsc = 0;
	}

	document.getElementById("pourcent").innerHTML = "installation :" + pourCent + "%";
	document.getElementById("installfee2").innerHTML = "Installation fee: " + installFee + " $";
	document.getElementById("result2").innerHTML = "Total: " + totaleAsc + " $";
	document.getElementById("resultinstall2").innerHTML = "Range unit price : " + rangePrice + " $";
	document.getElementById("uniteprice2").innerHTML = "Number of elevators: " + unitCage + " ";

}
//Calcul pour formulaire Corporate fin

//Calcul pour formulaire hybrid

function hybrid() {

	var nombreOccupants = document.getElementById("nboccfloor4").value;
	console.log("nombre occupants par plancher " + nombreOccupants);

	var nombreFloor = parseInt(document.getElementById("nbfloor4").value);
	console.log("nombre d'étages " + nombreFloor);

	var nombreBasements = parseInt(document.getElementById("nbbase4").value);
	console.log("nombre de sous sol " + nombreBasements);

	var floorTotale = Math.ceil(nombreFloor += nombreBasements);
	console.log("Étage totale " + floorTotale);

	var nombreOccupantsTotales = Math.ceil(nombreOccupants *= floorTotale)
	console.log(" nombre occupant total " + nombreOccupantsTotales)

	var ascNumberRequis = Math.ceil(nombreOccupantsTotales / 1000)
	console.log(" nombre ascenceur requis " + ascNumberRequis)


	var nombreColonne = Math.ceil(floorTotale / 20)
	console.log(" nombre de colonnes  " + nombreColonne)


	var totaleAsc = Math.ceil(ascNumberRequis / nombreColonne)
	console.log(" ascenceur x colone   " + totaleAsc)


	var totaleAsc = (nombreColonne *= totaleAsc)

	var unitCage = (totaleAsc);

	if (document.getElementById("standard2").checked) {
		var result1 = (totaleAsc *= 7565);
		var result2 = (totaleAsc *= 10 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		var rangePrice = (7565);
		pourCent1 = (10);
		installFee = Math.ceil(result1 * 10 / 100);
		console.log("Cout total en dollard " + totaleAsc)

	}

	else if (document.getElementById("premium2").checked) {
		var result1 = (totaleAsc *= 12345);
		var result2 = (totaleAsc *= 13 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		var rangePrice = (12345);
		pourCent1 = (13);
		installFee = Math.ceil(result1 * 13 / 100);
		console.log("Cout total en dollard " + totaleAsc)
	}

	else if (document.getElementById("excellent2").checked) {
		var result1 = (totaleAsc *= 15400);
		var result2 = (totaleAsc *= 16 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		var rangePrice = (15400);
		pourCent1 = (16);
		installFee = Math.ceil(result1 * 16 / 100);
		console.log("Cout total en dollard " + totaleAsc)

	}

	if (Number.isNaN(unitCage) || unitCage == "Infinity" || unitCage === null) {
		unitCage = 0;
	}

	if (Number.isNaN(installFee) || installFee == "Infinity" || installFee === null) {
		installFee = 0;
	}

	if (Number.isNaN(totaleAsc) || totaleAsc == "Infinity" || totaleAsc === null) {
		totaleAsc = 0;
	}

	document.getElementById("pourcent1").innerHTML = "installation :" + pourCent1 + "%";
	document.getElementById("installfee3").innerHTML = "Installation fee: " + installFee + " $";
	document.getElementById("result3").innerHTML = "Total: " + totaleAsc + " $";
	document.getElementById("resultinstall3").innerHTML = "Range unit price : " + rangePrice + " $";
	document.getElementById("uniteprice3").innerHTML = "Number of elevators: " + unitCage + " ";
}

// formulaire hybrid

//formulaire commercial

function commercial() {


	var nbCage = document.getElementById("nbcage2").value;
	console.log("nombre cage requis " + nbCage)

	if (document.getElementById("standard3").checked) {
		var unitCage = (nbCage);
		var result1 = (nbCage *= 7565);
		var result2 = (nbCage *= 10 / 100);
		var rangePrice = (7565);
		var pourCent1 = (10);
		installFee = Math.ceil(result1 * 10 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)

	}

	else if (document.getElementById("premium3").checked) {
		var unitCage = (nbCage);
		var result1 = (nbCage *= 12345);
		var result2 = (nbCage *= 13 / 100);
		var rangePrice = (12345);
		var pourCent1 = (13);
		installFee = Math.ceil(result1 * 13 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)
	}

	else if (document.getElementById("excellent3").checked) {
		var unitCage = (nbCage);
		var result1 = (nbCage *= 15400);
		var result2 = (nbCage *= 16 / 100);
		var rangePrice = (15400);
		var pourCent1 = (16);
		installFee = Math.ceil(result1 * 16 / 100);
		totaleAsc = Math.ceil(result1 + result2)
		console.log("Cout total en dollard " + totaleAsc)

	}

	if (Number.isNaN(unitCage) || unitCage == "" || unitCage === null) {
		unitCage = 0;
	}

	if (Number.isNaN(installFee) || installFee == "" || installFee === null) {
		installFee = 0;
	}

	if (Number.isNaN(totaleAsc) || totaleAsc == "" || totaleAsc === null) {
		totaleAsc = 0;
	}

	document.getElementById("pourcent4").innerHTML = "installation :" + pourCent1 + "%";
	document.getElementById("installfee4").innerHTML = "Installation fee: " + installFee + " $";
	document.getElementById("result4").innerHTML = "Total: " + totaleAsc + " $";
	document.getElementById("resultinstall4").innerHTML = "Range unit price : " + rangePrice + " $";
	document.getElementById("uniteprice4").innerHTML = "Number of elevators: " + unitCage + " ";
}

 //formulaire commercial fin








