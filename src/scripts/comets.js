// import { Planet } from "./planets";
// import { Bullet } from "./bullets";

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Comet {
    constructor (x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() * 1) + 1;
        
        this.dy = (Math.random() * 1) + 1;

        // this.num_comets = 10;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // ctx.fillStyle = '#f00';
        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(100,50);
        // ctx.lineTo(50, 100);
        // ctx.lineTo(0, 90);
        // ctx.closePath();
        // ctx.fill();
    }

    move(){
        this.draw();
        this.x += this.dx;
        this.y += this.dy;

        if((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0){
            this.dx = -this.dx;
        }
        if((this.y + this.radius) > canvas.width || (this.y - this.radius) < 0){
            this.dy = -this.dy;
        }
    }

}