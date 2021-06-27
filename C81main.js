canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "grey";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 150, 500, 250);
ctx.stroke();

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(500, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(450, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

