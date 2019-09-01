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


function capturar(n4){

	//cont+=1;
	//if(cont!=8){
	if (n5.innerHTML==='0') {
		n5.innerHTML=n4;
	}
	else if(n5.innerHTML!=='0'){
		n5.innerHTML+=n4;
	}
	}
	/*var va1 = document.createElement('SPAN');
	var mostrar=document.createTextNode(+n4);
	va1.appendChild(mostrar);
	document.getElementById('display').appendChild(va1);
	*/



function especial(pto){
	operando=n5.innerHTML;
	switch(pto){
		case punto:
		n5.innerHTML=operando+'.';
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

function Clean(){
n5.innerHTML='0';
op='0';
}
	/*
	document.getElementById('display').parentNode.removeChild('');	
    */
/*---------------------------------------------------*/

var Eventos = {
	init: function(){
document.getElementById('0').onclick=lectura0;
document.getElementById('1').onclick=lectura1;
document.getElementById('2').onclick=lectura2;
document.getElementById('3').onclick=lectura3;
document.getElementById('4').onclick=lectura4;
document.getElementById('5').onclick=lectura5;
document.getElementById('6').onclick=lectura6;
document.getElementById('7').onclick=lectura7;
document.getElementById('8').onclick=lectura8;
document.getElementById('9').onclick=lectura9;
document.getElementById('menos').onclick=signores;
document.getElementById('mas').onclick=signosum;
document.getElementById('por').onclick=signopor;
document.getElementById('dividido').onclick=signodiv;
document.getElementById('on').onclick = Clean;
document.getElementById('igual').onclick = Resultado;
document.getElementById('punto').onclick = coma;
document.getElementById('sign').onclick = cambio;
}
}
Eventos.init();
