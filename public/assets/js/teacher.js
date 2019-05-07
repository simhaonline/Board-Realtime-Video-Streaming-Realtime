var selected = "pen"
var active = false
var x = []
var y = []
var click = []
var paint;

document.body.onload = init

function init() {
    let canvas = document.getElementById("board")
    let ctx = canvas.getContext("2d")
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    canvas.addEventListener("click", (e) => {
        active = true
        switch (selected) {
            case "pen":
            commandPen(canvas, ctx)
                break;

            default:
                break;
        }
    })
}

function clickPen(xy, yx, dragging){
    x.push(xy);
    y.push(yx);
    click.push(dragging);
}

function commandPen(canvas, ctx) {

    canvas.addEventListener("mousedown", function (e) {
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        paint = true;
        clickPen(mouseX, mouseY);
        drawPen(ctx, x, y, click)
        socket.emit('draw', { x, y, click, width: canvas.width, height: canvas.height});
    })

    canvas.addEventListener("mousemove", function (e) {
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        if(paint){
            clickPen(mouseX, mouseY, true);
            drawPen(ctx, x, y, click)
            socket.emit('draw', { x, y, click, width: canvas.width, height: canvas.height});
        }
    });

    canvas.addEventListener("mouseup", () => {
        x = []
        y = []
        click = []
        paint = false;

    });
     
    canvas.addEventListener("mouseleave", () => {
        x = []
        y = []
        click = []
        paint = false;
    });
}