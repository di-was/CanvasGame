// ADDING VS CODE SNIPPETS FOR CANVAS

/** @type {HTMLCanvasElement} */

//-----------------------------VARIABLES---------------------------------------------

var canvas = (document.querySelector('#canvas'))
let c = canvas.getContext('2d')

let default_bot = {
    speedX: 2,
    speedY: 2,
    x: 10,
    y: 10,
    w: 20,
    h: 20
}
let right_key_pressed = false
let enter_key_pressed = false

//-------------------------DRAW-FUNCTION----------------------------------

function draw() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    default_bot.x += default_bot.speedX

    c.fillRect(default_bot.x, default_bot.y, default_bot.w, default_bot.h)

    requestAnimationFrame(draw)

    if (default_bot.x >= canvas.width - default_bot.w) {
        default_bot.speedX = -default_bot.speedX
    }
    else if (default_bot.x <= 0) {
        default_bot.speedX = -default_bot.speedX
    }

}
//-------------------------KEY-HANDLING-FUNCTIONS-----------------------------

function keys_condition_execute() {
    if (enter_key_pressed) {
        alert("ENTER")
    }
    else if (right_key_pressed) {
        draw()
    }
}
document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowRight") {
        right_key_pressed = true
        keys_condition_execute();

    }
    else if (event.key === "Enter") {
        enter_key_pressed = true
        keys_condition_execute();

    }

});



