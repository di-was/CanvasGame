import { c } from "./main.js"
import mario from "./player.js"
import { gravity } from "./gravity.js"
//-----------------------------------------------------
// THESE ARE ADDED FOR DEBUG
// DONT REMOVE THEM
let marioswy = document.querySelector('#mariosy')
let mariowy = document.querySelector('#marioy')

//-----------------------------------------------------

function animate_mario() {
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate_mario)
    c.fillRect(mario.x, mario.y, mario.w, mario.h)

    mario.x += mario.speedX
    if (mario.y + mario.h  < canvas.height) {
        mario.y += mario.speedY
        mario.speedY += gravity
    } else {
        mario.speedY = 0
        mario.y = canvas.height - mario.h
    }
    //ADDED FOR DEBUGGING DONT REMOVE
    marioswy.textContent = `X position:  ${mario.x}`
    mariowy.textContent = `Y position:  ${mario.y}`
}

animate_mario()
export default animate_mario
