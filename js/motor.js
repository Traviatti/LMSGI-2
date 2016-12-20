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
   document.getElementById("showm").onclick = function ()
    {
		document.getElementById("cpanel").style.display = "none";
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("showm").innerHTML="";
		stop();
	}
		
	//ocultar menú móvil. Volvemos a mostrar 'SHOW MENU' y recuperamos 'cpanel'.
	document.getElementById("hidem").onclick = function ()
	{
		document.getElementById("cpanel").style.display = "block";
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("showm").innerHTML="show menu";
	}

	//encender/apagar el motor al hacer click en la pantalla
	document.getElementById("imagen").onclick = function()
	{
     if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
}

//Definición de funciones
function pausa(){
	clearInterval(timer);
	clearInterval(v);
	clearInterval(y);
	document.getElementById("play").innerHTML="Reanudar";
	stop();
	
	}

//Otras funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(motorOn);
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
	if (v <= 5)
	{
		alert("FELICIDADES!!\nGran alunizaje"); reStart();
		
	}
	else
	{
		//explosion
		document.getElementById("imagen").src="img/boom.png";
		setTimeout(function(){mostrarAviso()},300); //0.3 segundos
		function mostrarAviso()
			{
				alert("LA NAVE HA EXPLOTADO!!\nLamentamos mucho la muerte de los valientes astronautas."); reStart();
			}
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
	document.getElementById("imagen").src="img/nave2.gif";
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("imagen").src="img/nave.gif";

}
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if (y<=70){
	fuel-=1;
	if (fuel>=25){
	document.getElementById("fuel").innerHTML=fuel;}
	if (fuel<=0){
			//explosion
		fuel=0;
		document.getElementById("imagen").src="img/boom.png";
		setTimeout(function(){mostrarAviso()},300); //0.3 segundos
		function mostrarAviso()
			{
				alert("LA NAVE HA EXPLOTADO!!\nLamentamos mucho la muerte de los valientes astronautas."); reStart();
			}}
			else{}

	}
	else{
		document.onkeydown = motorOff();
		document.onclick = motorOff();
	}
}
