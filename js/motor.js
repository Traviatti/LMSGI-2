var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();
}

//Definición de funciones

//Cambiar de imágenes

var src1="../img/nave.gif";
var src2="../img/nave2.gif";
imgelem=null;

window.onload = function(){
  imgelem=document.getElementById('MyImage');
  imgelem.onmousedown=function(){
    cambiar();
  }
}

function cambiar(){
  if (imgelem.src==src1)
    imgelem.src=src2;
  else
    imgelem.src=src1;
}

//Otras funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<80){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();  alunizajeNave();
	}
}

function alunizajeNave()
{
	if (v < 8)
	{
		alert("FELICIDADES!!\nGran alunizaje"); reStart();
		
	}
	else
	{
		//explosion
		alert("LA NAVE HA EXPLOTADO!!\nLamentamos mucho la muerte de los valientes astronautas."); reStart();
	}
	
}

function reStart()
{
	var r = confirm("Otra partida?");
	if (r == true)
	{
    	window.location="jugar.html";
	}
	else
	{
		stop();
	} 
}


function motorOn(){
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
}
