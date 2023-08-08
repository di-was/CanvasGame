let mario = {
    x: 20,
    w: 20,
    h: 40,
    speedX: 0,
    speedY: 10,
    dx: 4,
    dy: -7,
    color: "black",
    canJump: true,
    onGround: true,
}
//DYNAMIC DECLARATION 
mario.y = canvas.height - mario.h;
export default mario;
