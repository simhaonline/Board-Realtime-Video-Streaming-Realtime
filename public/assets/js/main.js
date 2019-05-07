var socket = io();

function drawPen(ctx, x, y, click) {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.height)
    ctx.strokeStyle = "#df4b26";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    for (let i = 0; i < x.length; i++) {
        ctx.beginPath();

        if (click[i] && i) ctx.moveTo(x[i - 1], y[i - 1]);
        else ctx.moveTo(x[i] - 1, y[i]);

        ctx.lineTo(x[i], y[i]);
        ctx.closePath();
        ctx.stroke();
    }
}