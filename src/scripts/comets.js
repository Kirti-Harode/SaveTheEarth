const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Comet {
    constructor (){
        this.x = 0;
        this.y = 10;
        this.radius = 4;
        this.vel = 8/1000;
        this.color = "#505050";
        this.num_comets = 10;
    }

    // addComets(){
    //     for(let i = 0; i < this.num_comets; i++){

    //     }
    // }

    draw(){
        this.y += 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();

        setInterval(this.draw, 10);
    }

   
}