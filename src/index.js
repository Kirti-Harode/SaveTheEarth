import "./styles/canvas.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    ctx.width = "600";
    ctx.height = "600";
    
    
    console.log("everything is fine, you can do this");

    // let sunImg = new Image();
    // sunImg.src = '/images/sun.jpg';

    let sun = new Planet(canvas.width/2, canvas.height/2, 50, "yellow", 0, 0); 
   
    let mercury = new Planet(canvas.width/2,canvas.height/2, 5, 'gray', 20/1000, 65);
    mercury.draw();

    let venus = new Planet(canvas.width/2,canvas.height/2, 15,'orange', 4/1000, 90 ); 
    venus.draw();

    let earth = new Planet(canvas.width/2,canvas.height/2, 20, 'blue', 3/1000, 125); 
    earth.draw();
   
    let mars = new Planet(canvas.width/2,canvas.height/2, 18, 'red', 3.5/1000, 175);
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
        mercury.update();
        venus.update();
        earth.update();
        mars.update();
        
        
    }
    animate();
});


