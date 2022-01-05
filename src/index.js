import "./styles/styling.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';
import {Comet} from './scripts/comets';
import {Gun} from './scripts/gun';
import {Projectile} from './scripts/projectlies';


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
    
    let mercury = new Planet((canvas.width/2 - mercuryImg.width/2),(canvas.height/2 - mercuryImg.height/2), 5, mercuryImg, 25/1000, 120);

    let venus = new Planet((canvas.width/2 - venusImg.width/2),(canvas.height/2 - venusImg.height/2), 15, venusImg, 10/1000, 180 ); 
    
    let earth = new Planet((canvas.width/2 - earthImg.width/2),(canvas.height/2 - earthImg.height/2), 20, earthImg, 4/1000, 230); 
    
    let mars = new Planet((canvas.width/2 - marsImg.width/2),(canvas.height/2 - marsImg.height/2), 20, marsImg, 3/1000, 310); 
   
    let jupiter = new Planet((canvas.width/2 - jupiterImg.width/2),(canvas.height/2 - jupiterImg.height/2), 30, jupiterImg, 1.5/1000, 450);
   
// create stars
    let stars = [];
    for(let i = 0; i < 500; i++){
        stars.push(new Star());
    }
// create comets
    let comets = [];
    for(let i = 0; i < 2; i++){
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

// draw bullets when click
    let bullets = [];

    addEventListener('click', (event) => {
        // const radian = Math.atan2( event.clientY - canvas.height/2, event.clientX - canvas.width/2);
        const radian = Math.atan2( event.clientY - 860, event.clientX - 470);

        const velocity = {x: Math.cos(radian), y: Math.sin(radian)};

        const bullet = new Projectile(470, 860, 5, 'white', velocity);
        bullets.push(bullet);
        // console.log(event)
    })
  
// animate and draw everything on canvas
    let animationId;
    function animate(){
       animationId = window.requestAnimationFrame(animate);
        
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

        // draw gun
         gun.draw();

        // draw projectile/bullets when click
        bullets.forEach((bullet, bulletIndex) => {
            bullet.update();
            // remove bullet from edges 
            if((bullet.x + bullet.radius < 0) || (bullet.x - bullet.radius > canvas.width) ||
               (bullet.y + bullet.radius < 0) || (bullet.y - bullet.radius > canvas.height)){
                bullets.splice(bulletIndex, 1);
            }
        })

        // draw comets
        comets.forEach((comet, cometIndex) =>{
            comet.move();

            // if colids with earth end game 
            const distance = Math.hypot(earth.x - comet.x, earth.y - comet.y);
            if((distance - comet.radius - earth.radius) < 0.5){
                cancelAnimationFrame(animationId);
            }
            // if colids remove comet and bullet
            bullets.forEach((bullet, bulletIndex) => {   
                const distance = Math.hypot(bullet.x - comet.x, bullet.y - comet.y);
                if((distance - comet.radius - bullet.radius) < 1){
                    comets.splice(cometIndex, 1);
                    bullets.splice(bulletIndex, 1);
                }

            })
        });
    }
    animate();
});


