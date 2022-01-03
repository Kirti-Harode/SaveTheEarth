function MovingObject(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius; 
    this.color = options.color;  


}

MovingObject.prototype.draw = function(ctx){
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300);
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150,150);
}

