canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokestyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "red";
ctx.lineWidth = 5;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "pink";
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "green";
ctx.lineWidth = 5;
ctx.arc(220, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "yelow";
ctx.lineWidth = 5;
ctx.arc(370, 300, 40, 0, 2 * Math.PI);
ctx.stroke();
