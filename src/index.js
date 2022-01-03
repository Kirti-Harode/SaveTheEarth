import "./styles/canvas.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    ctx.width = "600";
    ctx.height = "600";
    
    // moveTo(100, 0);
    // lineTo(200,100);
    // ctx.stroke();
    console.log("everything is fine, you can do this");

   

    let sun = new Planet(canvas.width/2, canvas.height/2, 50, 'yellow',0, 0); 
   
    let murcury = new Planet(canvas.width/2,canvas.height/2, 5, 'gray', 20/1000, 65);
    murcury.draw();

    let venus = new Planet(canvas.width/2,canvas.height/2, 10,'orange', 4/1000, 90 ); 
    venus.draw();

    let earth = new Planet(canvas.width/2,canvas.height/2, 15, 'blue', 3/1000, 125); 
    earth.draw();
   
    let mars = new Planet(canvas.width/2,canvas.height/2, 20, 'red', 3.5/1000, 175);
    mars.draw();
   
    let stars = [];
    for(let i = 0; i < 500; i++){
        stars.push(new Star());
    }
    
    function animate(){
        window.requestAnimationFrame(animate);
        
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        sun.draw();
        stars.forEach(star =>{
            star.draw();
        });
        murcury.update();
        venus.update();
        earth.update();
        mars.update();
        
        
    }
    animate();
});


