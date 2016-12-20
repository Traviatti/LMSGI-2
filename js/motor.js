var y = 10; // altura inicial y0=10%,debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;
//al cargar por completo la página...
window.onload = function(){documentgetelementsbyclassnamec0styledisplay:block}//ocultar menú móvil. Volvemos a mostrar 'SHOW MENU' y recuperamos cpanel.
document.getElementById(hidem).onclick = function (){documentgetelementbyidcpanelstyledisplay:block;documentgetelementsbyclassnamec0styledisplay:none;documentgetelementbyidshowminnerhtml:"show menu"}//encender/apagar el motor al hacer click en la pantalla
document.getElementById(imagen).onclick = function(){ifa:=g){ motorOn()}function left() //moves image to the left{documentgetelementbyidasonclick:0;documentgetelementbyidasstyleleft:0}//Definición de funciones
function pausa(){documentgetelementbyidplayinnerhtml:Reanudar}//Otras funciones
function start(){timer:setInterval(function(){ moverNave(); },dt*1000)}function moverNave(){v:a*dt;documentgetelementbyidvelocidadinnerhtml:v;y:v*dt;documentgetelementbyidalturainnerhtml:y}function alunizajeNave(){ifv:5) { alert("FELICIDADES!!\nGran alunizaje")}else{}function reStart(){varr:confirm("Otra partida?");ifr:= true) { window.location=jugar.html}function motorOn(){a:-g;iftimerfuel:=null) timerFuel=setInterval(function(){ actualizarAltura(); },100);documentgetelementbyidimagensrc:img/nave2.gif}function motorOff(){a:g;timerfuel:null;documentgetelementbyidimagensrc:img/nave.gif}function actualizarAltura(){iffuel:25){ document.getElementById(fuel).innerHTML=fuel}if (fuel<=0){documentgetelementbyidimagensrc:img/boom.png}else{documentonkeydown:motorOff();documentonclick:motorOff()}