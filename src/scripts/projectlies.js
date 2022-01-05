const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Projectile {
    constructor(x, y, radius, color, vel){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vel = vel;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        this.draw();
        this.x += this.vel.x * 2;
        this.y += this.vel.y * 2;
    }
}

// addEventListener('click', (event) => {
//     const bullet = new Projectile(event.clintX, event,clintY, 5, 'red', {x: 1, y: 1});
//     bullet.draw()
// })