var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(255,255);
ctx.lineTo(0,500);
ctx.lineTo(500,255);
ctx.lineTo(255,255);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.strokeStyle = "blue";
ctx.stroke();

/*
.beginPath();  comensar ruta
c.moveTo(w/2,h/2);  coordenada inicio
c.lineTo(w*0.75,h*0.75);  cordenada punto final linea
c.lineTo(w*0.25,h*0.75);  cordenada punto final linea siguiento el anterior
c.strokeStyle="red";    color de borde
c.lineWidth=5;      ancho de borde
c.closePath();    cerrar ruta  encerrar figura 
c.fillStyle="green";   color rellenno
c.fill();                rellenar

c.stroke();            diburar borde o linea


*/  
var canvas2 = document.getElementById("mycanvas2");
var w = canvas2.width;
var h = canvas2.height;

var c = canvas2.getContext("2d");

c.beginPath();
c.moveTo(w/2,h/2);
c.lineTo(w*0.75,h*0.75);
c.lineTo(w*0.25,h*0.75);
c.strokeStyle="red";
c.lineWidth=5;
c.closePath();
c.fillStyle="green";
c.fill();

c.stroke();




c.beginPath();
c.strokeStyle="yellow";
c.rect(10,10,100,100);    //crear rectangulo x(origen),y(origen),ancho,alto
c.lineWidth=2
c.fillStyle="red";
c.fill();
c.stroke();


c.beginPath();
c.fillRect(w*0.78,h*0.78,100,100);  // crear rectangulo relleno
c.closePath();





var g = Math.PI*2;//una vuelta entera
c.arc(w*0.10,h*0.30,20,0,g/2,true);
// [x(origen-centro)],[y(origen-centro)],[radio],[angulo de inicio],[cantidad de vuelta(horario en pi(3.14))],true (dibuja el complemento)
c.strokeStyle="blue";
c.closePath();
c.fillStyle ="blue";
c.fill();
c.stroke();

c.beginPath();
c.fillStyle="green";
c.font ="italic 30px Georgia";
c.fillText("hola mundo",w*0.05,h*0.85);


c.beginPath();
c.strokeStyle="blue";
c.font ="italic 30px Georgia";
c.strokeText("hola mundo",w*0.05,h*0.95);



