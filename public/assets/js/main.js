var socket = io();
var color = "blue"
function drawPen(ctx, x, y, click) {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.height)
    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    for (let i = 0; i < x.length; i++) {
        ctx.beginPath();
        ctx.lineCap = "round"; 
        if (click[i] && i) ctx.moveTo(x[i - 1], y[i - 1]);
        else ctx.moveTo(x[i] - 1, y[i]);

        ctx.lineTo(x[i], y[i]);
        ctx.closePath();
        ctx.stroke();
    }
}