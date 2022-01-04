import "./styles/styling.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';
import {Comet} from './scripts/comets';
import {Gun} from './scripts/gun';


window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    ctx.width = "900";
    ctx.height = "800";
    
    
    console.log("everything is fine, you can do this");
// get new image for each planet from the image folder
    let sunImg = new Image();
    sunImg.src = '../images/sun.jpg';

    let mercuryImg = new Image();
    mercuryImg.src = '../images/mercury_alpha.png';

    let venusImg = new Image();
    venusImg.src = '../images/venus_alpha.png';

    let earthImg = new Image();
    earthImg.src = '../images/earth_alpha.png';

    let marsImg = new Image();
    marsImg.src = '../images/mars_alpha.png';

    let jupiterImg = new Image();
    jupiterImg.src = '../images/jupiter_alpha.png';

// create and draw planets using images
    let sun = new Planet((canvas.width/2 - sunImg.width/2), (canvas.height/2 - sunImg.height/2), 50, sunImg, 0, 0); 
    sun.draw();

    let mercury = new Planet((canvas.width/2 - mercuryImg.width/2),(canvas.height/2 - mercuryImg.height/2), 5, mercuryImg, 25/1000, 120);
    mercury.draw();

    let venus = new Planet((canvas.width/2 - venusImg.width/2),(canvas.height/2 - venusImg.height/2), 15, venusImg, 10/1000, 180 ); 
    venus.draw();

    let earth = new Planet((canvas.width/2 - earthImg.width/2),(canvas.height/2 - earthImg.height/2), 20, earthImg, 4/1000, 230); 
    earth.draw();

    let mars = new Planet((canvas.width/2 - marsImg.width/2),(canvas.height/2 - marsImg.height/2), 20, marsImg, 3/1000, 310); 
    mars.draw();
   
    let jupiter = new Planet((canvas.width/2 - jupiterImg.width/2),(canvas.height/2 - jupiterImg.height/2), 30, jupiterImg, 1.5/1000, 450);
    jupiter.draw();
   
// create stars
    let stars = [];
    for(let i = 0; i < 500; i++){
        stars.push(new Star());
    }
// create comets
    let comets = [];
    for(let i = 0; i < 10; i++){
        let radius = Math.floor(Math.random() * 15) + 5;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let color = "#505050";
        comets.push(new Comet(x, y, radius, color));
    }
// create a gun
    let gunImg = new Image();
    gunImg.src = '../images/gun_alpha1.png'

    let gun = new Gun(450, 860, gunImg);
  
// animate and draw everything on canvas
    function animate(){
        window.requestAnimationFrame(animate);
        
        // clear canvas and draw again
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)'
        ctx.save();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // draw sun
        sun.draw();
        // draw all the stars
        stars.forEach(star =>{
            star.draw();
        });

        // draw and rotate planets
        mercury.update();
        venus.update();
        earth.update();
        mars.update();
        jupiter.update();
        // draw comets
        comets.forEach(comet =>{
            comet.move();
        });
        // draw gun
        gun.draw();
    }
    animate();
});


