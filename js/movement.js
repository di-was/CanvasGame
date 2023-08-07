import { c } from "./main.js"
import mario from "./player.js"
import { gravity } from "./gravity.js"
//debug
let marioswy = document.querySelector('#mariosy')
let mariowy = document.querySelector('#marioy')

function animate_mario() {
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate_mario)
    c.fillRect(mario.x, mario.y, mario.w, mario.h)

    mario.x += mario.speedX
    mario.y += mario.speedY

    if (mario.y + mario.h + mario.speedY >= canvas.height)
     {
        mario.speedY = 0;
    }
    else {

        mario.speedY += gravity

    }
    marioswy.textContent = `Y position:  ${mario.x}`
    mariowy.textContent = `X position:  ${mario.y}`
}

animate_mario()
export default animate_mario
