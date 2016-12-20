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
}