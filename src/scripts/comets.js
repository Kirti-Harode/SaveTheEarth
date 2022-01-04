const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Comet {
    constructor (x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() * 2) + 1;
        
        this.dy = (Math.random() * 2) + 1;

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

   
}