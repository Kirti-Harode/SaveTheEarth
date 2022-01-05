const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Explosion {
    constructor(x, y, radius, color, vel){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vel = vel;
        this.alpha = 1;
    }

    draw(){
        ctx.save()
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore()
    }

    update(){
        this.draw();
        this.x += this.vel.x ;
        this.y += this.vel.y ;
        this.alpha -= 0.01;
    }
}