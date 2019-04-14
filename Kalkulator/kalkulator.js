var brisi = document.getElementById('brisiSve');
var brisiPoslednji = document.getElementById('brisiPoslednji');
var jednako = document.getElementById('jednako');
var sabiranje = document.getElementById('sabiranje');
var oduzimanje = document.getElementById('oduzimanje');
var mnozenje = document.getElementById('mnozenje');
var deljenje = document.getElementById('deljenje');
var modulo = document.getElementById('modulo');

var jedan = document.getElementById('jedan');
var dva = document.getElementById('dva');
var tri = document.getElementById('tri');
var cetiri = document.getElementById('cetiri');
var pet = document.getElementById('pet');
var sest = document.getElementById('sest');
var sedam = document.getElementById('sedam');
var osam = document.getElementById('osam');
var devet = document.getElementById('devet');
var nula = document.getElementById('nula');

var izlaz = document.getElementById('izlaz');

/* Mnogo neuspelih pokusaja... :(

var brojac = 0;
var unetiBroj = "";
var prviBroj;
var rezultat;
var operator;
var kliknutOperator = false;
izlaz.innerHTML = brojac;

jedan.addEventListener('click', function(){
	unetiBroj += "1";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 1;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 1;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 1;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 1;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 1;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

dva.addEventListener('click', function(){
	unetiBroj += "2";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 2;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 2;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 2;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 2;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 2;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

tri.addEventListener('click', function(){
	unetiBroj += "3";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 3;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 3;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 3;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 3;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 3;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

cetiri.addEventListener('click', function(){
	if(kliknutOperator == false){
	unetiBroj += "4";}
	if(kliknutOperator == true){

	switch (operator){
		case "plus":
		brojac = prviBroj + parseInt(unetiBroj);
		kliknutOperator = false;
		break;
		case "minus":
		brojac = prviBroj - parseInt(unetiBroj);
		kliknutOperator = false;
		break;
		case "pomnozi":
		brojac = prviBroj * parseInt(unetiBroj);
		kliknutOperator = false;
		break;
		case "podeli":
		brojac = prviBroj / parseInt(unetiBroj);
		kliknutOperator = false;
		break;
		case "modulo":
		brojac = prviBroj % parseInt(unetiBroj);
		kliknutOperator = false;
		break;
	}}
	brojac = unetiBroj;
	izlaz.innerHTML = unetiBroj;

});

pet.addEventListener('click', function(){
	unetiBroj += "5";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 5;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 5;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 5;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 5;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 5;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

sest.addEventListener('click', function(){
	unetiBroj += "6";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 6;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 6;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 6;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 6;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 6;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

sedam.addEventListener('click', function(){
	unetiBroj += "7";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 7;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 7;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 7;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 7;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 7;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

osam.addEventListener('click', function(){
	unetiBroj += "8";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 8;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 8;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 8;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 8;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 8;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

devet.addEventListener('click', function(){
	unetiBroj += "9";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 9;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 9;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 9;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 9;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 9;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

nula.addEventListener('click', function(){
	unetiBroj += "0";
	switch (operator){
		case "plus":
		brojac = parseInt(unetiBroj) + 0;
		break;
		case "minus":
		brojac = parseInt(unetiBroj) - 0;
		break;
		case "pomnozi":
		brojac = parseInt(unetiBroj) * 0;
		break;
		case "podeli":
		brojac = parseInt(unetiBroj) / 0;
		break;
		case "modulo":
		brojac = parseInt(unetiBroj) % 0;
		break;
		default:
		brojac = parseInt(unetiBroj);
	}
	izlaz.innerHTML = unetiBroj;
});

sabiranje.addEventListener('click', function(){
	operator = "plus"
	prviBroj = parseInt(unetiBroj);
	rezultat = prviBroj + brojac;
	izlaz.innerHTML = rezultat;
	unetiBroj = "";
});

oduzimanje.addEventListener('click', function(){
	operator = "minus"
	izlaz.innerHTML = brojac;
	prviBroj = parseInt(unetiBroj);
	kliknutOperator = true;
	unetiBroj = "";
});

mnozenje.addEventListener('click', function(){
	operator = "pomnozi"
	izlaz.innerHTML = brojac;
	prviBroj = parseInt(unetiBroj);
	kliknutOperator = true;
	unetiBroj = "";
});

deljenje.addEventListener('click', function(){
	operator = "podeli"
	izlaz.innerHTML = brojac;
	prviBroj = parseInt(unetiBroj);
	kliknutOperator = true;
	unetiBroj = "";
});

modulo.addEventListener('click', function(){
	operator = "modulo"
	izlaz.innerHTML = brojac;
	prviBroj = parseInt(unetiBroj);
	kliknutOperator = true;
	unetiBroj = "";
});

jednako.addEventListener('click', function(){
	
	izlaz.innerHTML = brojac;
	unetiBroj = "";
	
});

brisi.addEventListener('click', function(){
	brojac = 0;
	unetiBroj = "";
	operator = "";
	izlaz.innerHTML = brojac;
});
 */
/* I jos neuspelih pokusaja x(
var brojac = 0;
var unetiBroj = 0;
var rezultat = 0;
izlaz.innerHTML = brojac;

jedan.addEventListener('click', function(){unetiBroj = 1; izlaz.innerHTML = unetiBroj;});
dva.addEventListener('click', function(){unetiBroj = 2; izlaz.innerHTML = unetiBroj;});
tri.addEventListener('click', function(){unetiBroj = 3; izlaz.innerHTML = unetiBroj;});
cetiri.addEventListener('click', function(){unetiBroj = 4; izlaz.innerHTML = unetiBroj;});
pet.addEventListener('click', function(){unetiBroj = 5; izlaz.innerHTML = unetiBroj;});
sest.addEventListener('click', function(){unetiBroj = 6; izlaz.innerHTML = unetiBroj;});
sedam.addEventListener('click', function(){unetiBroj = 7; izlaz.innerHTML = unetiBroj;});
osam.addEventListener('click', function(){unetiBroj = 8; izlaz.innerHTML = unetiBroj;});
devet.addEventListener('click', function(){unetiBroj = 9; izlaz.innerHTML = unetiBroj;});
nula.addEventListener('click', function(){unetiBroj = 0; izlaz.innerHTML = unetiBroj;});

sabiranje.addEventListener('click', function(){
	brojac = brojac + unetiBroj;
	izlaz.innerHTML = brojac;
	unetiBroj = 0;
});

oduzimanje.addEventListener('click', function(){
	brojac = brojac - (+unetiBroj);
	izlaz.innerHTML = brojac;
	unetiBroj = 0;
});

mnozenje.addEventListener('click', function(){
	brojac = brojac * (+unetiBroj);
	izlaz.innerHTML = brojac;
	unetiBroj = 0;
});

deljenje.addEventListener('click', function(){
	brojac = brojac / (+unetiBroj);
	izlaz.innerHTML = brojac;
	unetiBroj = 0;
});

modulo.addEventListener('click', function(){
	brojac = brojac % (+unetiBroj);
	izlaz.innerHTML = brojac;
	unetiBroj = 0;
});

jednako.addEventListener('click', function(){
	
	izlaz.innerHTML = brojac;
	
}); */

var brojac = 0;
var kliknut = false;
izlaz.addEventListener("mousedown", function(event){
  event.preventDefault();
});
document.form.izlaz.value = "";

jedan.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 1;
	kliknut=false;
});

dva.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 2;
	kliknut=false;
});

tri.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 3;
	kliknut=false;
});

cetiri.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 4;
	kliknut=false;
});

pet.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 5;
	kliknut=false;
});

sest.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 6;
	kliknut=false;
});

sedam.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 7;
	kliknut=false;
});

osam.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 8;
	kliknut=false;
});

devet.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 9;
	kliknut=false;
});

nula.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value + 0;
	kliknut=false;
});

sabiranje.addEventListener('click', function(){
	if(kliknut==false){
	document.form.izlaz.value = document.form.izlaz.value + "+";
	kliknut=true;
	}
});

oduzimanje.addEventListener('click', function(){
	if(kliknut==false){
	document.form.izlaz.value = document.form.izlaz.value + "-";
	kliknut=true;}
});

mnozenje.addEventListener('click', function(){
	if(kliknut==false){
	document.form.izlaz.value = document.form.izlaz.value + "*";
	kliknut=true;}
});

deljenje.addEventListener('click', function(){
	if(kliknut==false){
	document.form.izlaz.value = document.form.izlaz.value + "/";
	kliknut=true;}
});

modulo.addEventListener('click', function(){
	if(kliknut==false){
	document.form.izlaz.value = document.form.izlaz.value + "%";
	kliknut=true;}
});

jednako.addEventListener('click', function(){
	var str = document.form.izlaz.value.toString();
	var niz = str.split("");
	var rezStr;
	
	/* if(niz[0] == "*" || niz[0] == "/" || niz[0] == "%") {
		niz.shift();
	} */
	if(niz[niz.length-1]=='+' || niz[niz.length-1]=='-' || niz[niz.length-1]=='*' || niz[niz.length-1]=='/' || niz[niz.length-1]=='%'){
		var x = niz.pop();
		rezStr = niz.join("");
		document.form.izlaz.value = eval(rezStr).toFixed(2);
		if(isNaN(document.form.izlaz.value) ||
			document.form.izlaz.value==Number.POSITIVE_INFINITY ||
			document.form.izlaz.value==Number.NEGATIVE_INFINITY)
			{document.form.izlaz.value = 0;}
	} else {
	document.form.izlaz.value = eval(document.form.izlaz.value).toFixed(2);
	if(isNaN(document.form.izlaz.value) ||
			document.form.izlaz.value==Number.POSITIVE_INFINITY ||
			document.form.izlaz.value==Number.NEGATIVE_INFINITY){document.form.izlaz.value = 0;}
	}
});

brisiPoslednji.addEventListener('click', function(){
	document.form.izlaz.value = document.form.izlaz.value.substring(0,document.form.izlaz.value.length-1);
	kliknut = false;
});

brisi.addEventListener('click', function(){
	document.form.izlaz.value = "";
});





























