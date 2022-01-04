import "./styles/styling.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';
import {Comet} from './scripts/comets';

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    ctx.width = "600";
    ctx.height = "600";
    
    
    console.log("everything is fine, you can do this");

    // let sunImg = new Image();
    // sunImg.src = '/images/sun.jpg';

    let sun = new Planet(canvas.width/2, canvas.height/2, 50, "yellow", 0, 0); 
   
    let mercury = new Planet(canvas.width/2,canvas.height/2, 5, 'gray', 25/1000, 65);
    mercury.draw();

    let venus = new Planet(canvas.width/2,canvas.height/2, 15,'orange', 10/1000, 100 ); 
    venus.draw();

    let earth = new Planet(canvas.width/2,canvas.height/2, 20, 'blue', 4/1000, 175); 
    earth.draw();
   
    let mars = new Planet(canvas.width/2,canvas.height/2, 18, 'red', 3.5/1000, 250);
    mars.draw();

    let jupiter = new Planet(canvas.width/2,canvas.height/2, 30, 'orange', 1.5/1000, 350);
    jupiter.draw();
   
    let stars = [];
    for(let i = 0; i < 500; i++){
        stars.push(new Star());
    }

    let comets = [];
    for(let i = 0; i < 10; i++){
        let radius = Math.floor(Math.random() * 15) + 5;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let color = "#505050";
        comets.push(new Comet(x, y, radius, color));
    }
    
    function animate(){
        window.requestAnimationFrame(animate);
        
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)'
        ctx.save();
        // ctx.translate(150,100);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        sun.draw();

        stars.forEach(star =>{
            star.draw();
        });

        
        mercury.update();
        venus.update();
        earth.update();
        mars.update();
        jupiter.update();
        
        comets.forEach(comet =>{
            comet.move();
        });
    }
    animate();
});


