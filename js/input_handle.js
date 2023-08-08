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

//ADDED FOR DEBUGGING DONT REMOVE
let aupcount = 0
let aup = document.querySelector('#aup')

//UP DOWN FUCNTIONS
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && mario.onGround && mario.canJump) {
        //FOR DEBUG
        aupcount++
        aup.textContent = `Arrow key count :${aupcount}`
        //-------------------------------------------------------
        mario.speedY = mario.dy
        mario.onGround = false
        mario.canJump = false
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
        mario.speedY = 0
    }
})
