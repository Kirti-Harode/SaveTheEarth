
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
    }

    draw(){

        // ctx.beginPath();
        // ctx.lineWidth = 2;
        // ctx.arc(
        //     this.startX,
        //     this.startY,
        //     this.orbitRadius,
        //     0,
        //     Math.PI * 2,
        //     false
        // );
        // ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        // ctx.stroke();


        ctx.shadowBlur = 15;
        ctx.shadowClor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0
    }

    update(){
        this.draw();
        if(this.vel > 0){
            this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
            this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
        }
    }

    animate(){
        window.requestAnimationFrame(this.animate);
        ctx.clearRect(0, 0, canvas.width, canvas.hight);
        // ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.update();
    }
    

}
