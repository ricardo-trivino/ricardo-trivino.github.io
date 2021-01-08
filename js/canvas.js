var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var width = 0
var height = 0

var draw = () => {
    ctx.beginPath()
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)"
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = "rgba(0, 0, 0, 0.08)"
    ctx.stroke()
}

var process = () => {
    width = canvas.width = innerWidth
    height = canvas.height = innerHeight

    requestAnimationFrame(process)
}
process()