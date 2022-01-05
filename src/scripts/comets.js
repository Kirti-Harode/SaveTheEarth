import { Planet } from "./planets";
import { Projectile } from "./projectlies";

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

    colision(otherObject){
        if(otherObject instanceof Projectile){
            const distance = Math.hypot(otherObject.x - this.x, otherObject.y - this.y)
            if((distance - this.radius - otherObject.radius) < 1){
                // this.remove();
                // otherObject.remove();
                return true;
            }
        }
        return false;
    }
   
}