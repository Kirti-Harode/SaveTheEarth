
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");


export class Planet{
    constructor(x, y, radius, image, vel, orbitRadius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = image;
        this.vel = vel;
        this.orbitRadius = orbitRadius;
        this.startX = x;
        this.startY = y;
        this.radian = 0;
        
        // this.moon = {
        //     x: this.x + this.orbitRadius + this.radius,
        //     y,
        //     radian: 0,
        //     vel: (Math.random() + 0.1) / 30
        // };

        // this.draw();
        // this.update();
        // this.animate()
    }

    draw(){
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        // planet path
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

            // planet
        // ctx.globalCompositeOperation = 'destination-over';
      //  ctx.shadowBlur = 15;
       // ctx.shadowClor = this.color;
       // ctx.beginPath();
       // ctx.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
        //ctx.fillStyle = this.color;
       // ctx.fill();
        ctx.drawImage(this.image, this.x, this.y);
        ctx.shadowBlur = 0

        // Moon 
       /* if (this.velocity > 0) {
            c.beginPath();
            c.arc(this.moon.x, this.moon.y, 2, 0, Math.PI * 2, false);
            c.fillStyle = 'gray';
            c.fill();
        }*/
    }

    update(){
        this.draw();
        console.log(this);
        if(this.vel > 0){
            this.radian += this.vel;

            // this.moon.radian += this.moon.vel;
            // this.moon.x =
            //     this.x + Math.cos(this.moon.radian) * (this.radius + 5);
            // this.moon.y =
            //     this.y + Math.sin(this.moon.radian) * (this.radius + 5);

            this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
            this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
        }
    }

    

}

