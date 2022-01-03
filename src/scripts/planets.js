
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(250, 50)
export class Planet{
    constructor(x, y, radius, color, vel, orbitRadius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vel = vel;
        this.orbitRadius = orbitRadius;
        this.startX = x;
        this.startY = y;
        this.radian = 0;
        this.moon = {
            x: this.x + this.orbitRadius + this.radius,
            y,
            radian: 0,
            vel: (Math.random() + 0.1) / 30
        };
        
        this.draw
        this.update();

    }

    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.hight);

        // planet path
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(
            this.startX,
            this.startY,
            this.orbitRadius,
            0,
            Math.PI * 2,
            false
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.stroke();

            // planet
        ctx.shadowBlur = 15;
        ctx.shadowClor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0

        // Moon 
        if (this.velocity > 0) {
            c.beginPath();
            c.arc(this.moon.x, this.moon.y, 2, 0, Math.PI * 2, false);
            c.fillStyle = 'gray';
            c.fill();
        }
    }

    update(){
        this.draw();
        this.x += this.vel;
        this.y += this.vel;
        if(this.vel > 0){
            this.radian += this.vel;

            this.moon.radian += this.moon.vel;
            this.moon.x =
                this.x + Math.cos(this.moon.radian) * (this.radius + 5);
            this.moon.y =
                this.y + Math.sin(this.moon.radian) * (this.radius + 5);

            this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
            this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
        }
    }

    animate(){
        // window.requestAnimationFrame(this.animate);

        ctx.clearRect(0, 0, canvas.width, canvas.hight);
        // ctx.fillStyle = 'rgb(0, 0, 0)';
        // ctx.fillStyle = this.color;
        // ctx.fillRect(0, 0, canvas.width, canvas.height);

        // this.update();
        
    }
    

}
