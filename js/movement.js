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

    c.fillRect(mario.x, mario.y, mario.w, mario.h)

    mario.x += mario.speedX
if (mario.y + mario.h <= canvas.height) {
    mariowy.textContent = `Y position:  ${mario.y}`
    mario.y += mario.speedY
    mario.speedY += gravity
}
  
else {
    mario.canJump = true 
    mario.onGround = true 
    mario.y = canvas.height - mario.h
    mario.speedY = 0;
    marioswy.textContent = `X position:  ${mario.x}`
}
    //ADDED FOR DEBUGGING DONT REMOVE
    requestAnimationFrame(animate_mario)
}

animate_mario()
export default animate_mario
