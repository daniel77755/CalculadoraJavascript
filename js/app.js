/*
		/*document.querySelectorAll("[class^='item-']")
	}*/
const n5=document.getElementById('display');
let operando='0';
let operando1='0';
let operando2='0';
let op='0';
var cont=0;
function lectura0(){
	//CambioTamañoS();		
	var n4=0;
	capturar(n4);
}
function lectura1(){		
	var n4=1;
	capturar(n4);
}
function lectura2(){		
	var n4=2;
	capturar(n4);
}
function lectura3(){		
	var n4=3;
	capturar(n4);
}
function lectura4(){		
	var n4=4;
	capturar(n4);
}
function lectura5(){		
	var n4=5;
	capturar(n4);
}
function lectura6(){		
	var n4=6;
	capturar(n4);
}
function lectura7(){	
	var n4=7;
	capturar(n4);
}
function lectura8(){		
	var n4=8;
	capturar(n4);
}
function lectura9(){		
	var n4=9;
	capturar(n4);
}
function signopor(){
	x=por;
	Operaciones(x);
}
function signodiv(){
	x=dividido;
	Operaciones(x);
}
function signosum(){
	x=mas;
	Operaciones(x);
}
function signores(){
	x=menos;
	Operaciones(x);
}
function coma(){
	pto=punto;
	especial(pto);
}
function cambio(){
	pto=sign;
	especial(pto);
}

 /*function conteo(i){

	if(i>8){
	n5.innerHTML='lalala';
	}
 }*/

function capturar(n4){
 
	//cont+=1;
	//if(cont!=8)	//if(i<8){
	if (n5.innerHTML.length<8){
		if(n5.innerHTML==='0') {
		n5.innerHTML=n4;	
		}
		else if(n5.innerHTML!=='0'){
			n5.innerHTML+=n4;
	}
}

//conteo(i);
}
	/*else if(n5.innerHTML!=='0'){
		n5.innerHTML+=n4;
	}
	}
*/
	/*var va1 = document.createElement('SPAN');
	var mostrar=document.createTextNode(+n4);
	va1.appendChild(mostrar);
	document.getElementById('display').appendChild(va1);
	*/



function especial(pto){
	operando=n5.innerHTML;
	switch(pto){
		case punto:
		if(n5.innerHTML.indexOf('.')==-1){
		n5.innerHTML=operando+'.';
		}
		break;
		case sign:
		n5.innerHTML=Number(operando)*-1;
	}
}

function Operaciones(x){
		operando1=n5.innerHTML;
		n5.innerHTML='';
		op=x;
}

function Resultado(){
	operando2=n5.innerHTML;
	switch(op){
		case por:
		multi=Number(operando1)*Number(operando2);
		if(multi>=-99999999 && multi<=99999999 && multi%1==0){
		n5.innerHTML=multi;
		}
		else{
		n5.innerHTML=multi.toPrecision(6);
		}
		//if (multi.length>8){
		//	n5.innerHTML=multi[0,1,2];
		//}
		//else{
		//	n5.innerHTML=multi;
		//}
		op='0';
		break;
		case dividido:
		dividir=Number(operando1)/Number(operando2);
		if(dividir>=-99999999 && dividir<=99999999 && dividir%1==0){
		n5.innerHTML=dividir;
		}
		else{
			n5.innerHTML=dividir.toPrecision(6);
		}
		op='0';
		break;
		case mas:
		sumar=Number(operando1)+Number(operando2);
		if(sumar>=-99999999 && sumar<=99999999 && sumar%1==0){
		n5.innerHTML=sumar;
		}
		else{
			n5.innerHTML=sumar.toPrecision(6);
		}
		op='0';
		break;
		case menos:
		restar=Number(operando1)-Number(operando2);
		if(restar>=-99999999 && restar<=99999999 && restar%1==0){
		n5.innerHTML=restar;
		}
		else{
			n5.innerHTML=restar.toPrecision(6);

		}
		op='0';
		break;
	}

	/*
	typeof operando2;
	"number"*/
	//var multiplicacion=parseInt(operando1)*parseInt(operando2);
	//const mult=multiplicacion.toString();
	//n5.innerHTML=Number(operando1)*Number(operando2);
}
//function CambioT(){
function CambioTamañoS(){
	document.getElementById('on').style.width = "21%";
	/*document.querySelectorAll("[class^='tecla'] img")[4].style.width = "18%";
	document.querySelectorAll("[class^='tecla'] img")[5].style.width = "18%";
	document.querySelectorAll("[class^='tecla'] img")[6].style.width = "18%";*/
}
function CambioTamañoB(){
	document.getElementById('on').style.width = "22%";
}

function CambioTamañonsign(){
	document.getElementById('sign').style.width = "20%";
}
function CambioTamañosignn(){
	document.getElementById('sign').style.width = "21%";
}
function CambioTamañonraiz(){
	document.getElementById('raiz').style.width = "20%";
}
function CambioTamañoraizn(){
	document.getElementById('raiz').style.width = "21%";
}
function CambioTamañondividido(){
	document.getElementById('dividido').style.width = "20%";
}
function CambioTamañodivididon(){
	document.getElementById('dividido').style.width = "21%";
}
function CambioTamañonmenos(){
	document.getElementById('menos').style.width = "20%";
}
function CambioTamañomenosn(){
	document.getElementById('menos').style.width = "21%";
}
function CambioTamañonpor(){
	document.getElementById('por').style.width = "20%";
}
function CambioTamañoporn(){
	document.getElementById('por').style.width = "21%";
}
function CambioTamañonmas(){
	document.getElementById('mas').style.width = "86%";
}
function CambioTamañomasn(){
	document.getElementById('mas').style.width = "87%";
}
function CambioTamañonpunto(){
	document.getElementById('punto').style.width = "28%";
}
function CambioTamañopunton(){
	document.getElementById('punto').style.width = "29%";
}
function CambioTamañonigual(){
	document.getElementById('igual').style.width = "28%";
}
function CambioTamañoigualn(){
	document.getElementById('igual').style.width = "29%";
}
function CambioTamañon0(){
	document.getElementById('0').style.width = "28%";
}
function CambioTamaño0n(){
	document.getElementById('0').style.width = "29%";
}
function CambioTamañon1(){
	document.getElementById('1').style.width = "29%";
}
function CambioTamaño1n(){
	document.getElementById('1').style.width = "30%";
}
function CambioTamañon2(){
	document.getElementById('2').style.width = "29%";
}
function CambioTamaño2n(){
	document.getElementById('2').style.width = "30%";
}
function CambioTamañon3(){
	document.getElementById('3').style.width = "29%";
}
function CambioTamaño3n(){
	document.getElementById('3').style.width = "30%";
}
function CambioTamañon4(){
	document.getElementById('4').style.width = "21%";
}
function CambioTamaño4n(){
	document.getElementById('4').style.width = "22%";
}
function CambioTamañon5(){
	document.getElementById('5').style.width = "21%";
}
function CambioTamaño5n(){
	document.getElementById('5').style.width = "22%";
}
function CambioTamañon6(){
	document.getElementById('6').style.width = "21%";
}
function CambioTamaño6n(){
	document.getElementById('6').style.width = "22%";
}
function CambioTamañon7(){
	document.getElementById('7').style.width = "21%";
}
function CambioTamaño7n(){
	document.getElementById('7').style.width = "22%";
}
function CambioTamañon8(){
	document.getElementById('8').style.width = "21%";
}
function CambioTamaño8n(){
	document.getElementById('8').style.width = "22%";
}
function CambioTamañon9(){
	document.getElementById('9').style.width = "21%";
}
function CambioTamaño9n(){
	document.getElementById('9').style.width = "22%";
}
function Clean(){
//CambioTamaño();
n5.innerHTML='0';
op='0';
}

/*---------------------------------------------------*/

var Eventos = {
	init: function(){
document.getElementById('0').addEventListener("click",lectura0);
document.getElementById('1').addEventListener("click",lectura1);
document.getElementById('2').addEventListener("click",lectura2);
document.getElementById('3').addEventListener("click",lectura3);
document.getElementById('4').addEventListener("click",lectura4);
document.getElementById('5').addEventListener("click",lectura5);
document.getElementById('6').addEventListener("click",lectura6);
document.getElementById('7').addEventListener("click",lectura7);
document.getElementById('8').addEventListener("click",lectura8);
document.getElementById('9').addEventListener("click",lectura9);
document.getElementById('menos').onclick = signores;
document.getElementById('mas').onclick = signosum;
document.getElementById('por').onclick = signopor;
document.getElementById('dividido').onclick = signodiv;
document.getElementById('on').onclick = Clean;
document.getElementById('igual').onclick = Resultado;
document.getElementById('punto').onclick = coma;
document.getElementById('sign').onclick = cambio;
document.getElementById('on').onmousedown = CambioTamañoS;
document.getElementById('on').onmouseup = CambioTamañoB;
document.getElementById('sign').onmousedown = CambioTamañonsign;
document.getElementById('sign').onmouseup = CambioTamañosignn;
document.getElementById('raiz').onmousedown = CambioTamañonraiz;
document.getElementById('raiz').onmouseup = CambioTamañoraizn;
document.getElementById('dividido').onmousedown = CambioTamañondividido;
document.getElementById('dividido').onmouseup = CambioTamañodivididon;
document.getElementById('por').onmousedown = CambioTamañonpor;
document.getElementById('por').onmouseup = CambioTamañoporn;
document.getElementById('menos').onmousedown = CambioTamañonmenos;
document.getElementById('menos').onmouseup = CambioTamañomenosn;
document.getElementById('mas').onmousedown = CambioTamañonmas;
document.getElementById('mas').onmouseup = CambioTamañomasn;
document.getElementById('punto').onmousedown = CambioTamañonpunto;
document.getElementById('punto').onmouseup = CambioTamañopunton;
document.getElementById('igual').onmousedown = CambioTamañonigual;
document.getElementById('igual').onmouseup = CambioTamañoigualn;
document.getElementById('0').onmousedown = CambioTamañon0;
document.getElementById('0').onmouseup = CambioTamaño0n;
document.getElementById('1').onmousedown = CambioTamañon1;
document.getElementById('1').onmouseup = CambioTamaño1n;
document.getElementById('2').onmousedown = CambioTamañon2;
document.getElementById('2').onmouseup = CambioTamaño2n;
document.getElementById('3').onmousedown = CambioTamañon3;
document.getElementById('3').onmouseup = CambioTamaño3n;
document.getElementById('4').onmousedown = CambioTamañon4;
document.getElementById('4').onmouseup = CambioTamaño4n;
document.getElementById('5').onmousedown = CambioTamañon5;
document.getElementById('5').onmouseup = CambioTamaño5n;
document.getElementById('6').onmousedown = CambioTamañon6;
document.getElementById('6').onmouseup = CambioTamaño6n;
document.getElementById('7').onmousedown = CambioTamañon7;
document.getElementById('7').onmouseup = CambioTamaño7n;
document.getElementById('8').onmousedown = CambioTamañon8;
document.getElementById('8').onmouseup = CambioTamaño8n;
document.getElementById('9').onmousedown = CambioTamañon9;
document.getElementById('9').onmouseup = CambioTamaño9n;

/*document.getElementById('4').addEventListener("click",CambioTamaño);
document.getElementById('5').addEventListener("click",CambioTamaño);
document.getElementById('6').addEventListener("click",CambioTamaño);
document.getElementById('7').onmousedown("click",CambioTamaño);
document.getElementById('8').addEventListener("click",CambioTamaño);
document.getElementById('9').addEventListener("click",CambioTamaño);*/
}
}
Eventos.init();
