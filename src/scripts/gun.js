const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
export class Gun{
    constructor(x, y, image){
        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw(){
        // let height = 200 * Math.cos(Math.PI/6);
        // ctx.save();
        // ctx.translate(this.x, this.y);
        // ctx.rotate(Math.PI);
        ctx.drawImage(this.image, this.x, this.y);
        // ctx.restore();
        ctx.shadowBlur = 0
        // ctx.beginPath();
        // ctx.moveTo(400, 600);
        // ctx.lineTo(450, 800);
        // ctx.lineTo(500, 900 - height);
        // ctx.fillStyle = this.color;
        // ctx.fill();
    }
}