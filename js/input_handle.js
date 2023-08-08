import mario from "./player.js"

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        mario.speedX = mario.dx

    }
    if (event.key == "ArrowLeft") {
        mario.speedX = -mario.dx
    }
})

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        mario.speedX = 0
    }
    if (event.key == "ArrowLeft") {
        mario.speedX = 0
    }
})
//UP DOWN FUCNTIONS
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && mario.onGround && mario.canJump) {
        mario.speedY = mario.dy
        mario.onGround = true
        mario.canJump = true 
        
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
        mario.speedY = 0
        mario.onGround = false
        mario.canJump = false 
    }
})
