function pausa(){clearInterval(timer),clearInterval(v),clearInterval(y),document.getElementById("play").innerHTML="Reanudar",stop()}function start(){timer=setInterval(function(){moverNave()},1e3*dt)}function stop(){clearInterval(motorOn)}function moverNave(){v+=a*dt,document.getElementById("velocidad").innerHTML=v.toFixed(2),y+=v*dt,document.getElementById("altura").innerHTML=y.toFixed(2),y<80?document.getElementById("nave").style.top=y+"%":(stop(),alunizajeNave())}function alunizajeNave(){function a(){alert("LA NAVE HA EXPLOTADO!!\nLamentamos mucho la muerte de los valientes astronautas."),reStart()}v<=5?(alert("FELICIDADES!!\nGran alunizaje"),reStart()):(document.getElementById("imagen").src="img/boom.png",setTimeout(function(){a()},300))}function reStart(){var a=confirm("Otra partida?");1==a?window.location="index.html":stop()}function motorOn(){a=-g,null==timerFuel&&(timerFuel=setInterval(function(){actualizarAltura()},100)),document.getElementById("imagen").src="img/nave2.gif"}function motorOff(){a=g,clearInterval(timerFuel),timerFuel=null,document.getElementById("imagen").src="img/nave.gif"}function actualizarAltura(){function a(){alert("LA NAVE HA EXPLOTADO!!\nLamentamos mucho la muerte de los valientes astronautas."),reStart()}y<=70?(fuel-=1,fuel>=25&&(document.getElementById("fuel").innerHTML=fuel),fuel<=0&&(fuel=0,document.getElementById("imagen").src="img/boom.png",setTimeout(function(){a()},300))):(document.onkeydown=motorOff(),document.onclick=motorOff())}var y=10,v=0,g=1.622,a=g.toFixed(2),dt1=.016683,dt=dt1.toFixed(2),timer=null,timerFuel=null,fuel=100;window.onload=function(){document.getElementById("showm").onclick=function(){document.getElementById("cpanel").style.display="none",document.getElementsByClassName("c")[0].style.display="block",document.getElementById("showm").innerHTML="",stop()},document.getElementById("hidem").onclick=function(){document.getElementById("cpanel").style.display="block",document.getElementsByClassName("c")[0].style.display="none",document.getElementById("showm").innerHTML="show menu"},document.getElementById("imagen").onclick=function(){a==g?motorOn():motorOff()}};
