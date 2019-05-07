

document.body.onload = init

function init(){
    let canvas = document.getElementById("board")
    let ctx = canvas.getContext("2d")
    let first = true

    socket.on('drawData', function (data) {
        if(first){
            first = false
            canvas.width = data.width
            canvas.height = data.height
        }
        drawPen(ctx, data.x, data.y, data.click)
    });
}