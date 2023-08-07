/** @type {HTMLCanvasElement} */

let canvas = document.querySelector('#canvas')
let c = canvas.getContext('2d')

canvas.width = window.innerWidth / 2
canvas.height = window.innerHeight / 2


export { c}