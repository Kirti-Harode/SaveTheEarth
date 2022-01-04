
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

export class Star {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

