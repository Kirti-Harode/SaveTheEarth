import "./styles/styling.css";
import {Planet} from './scripts/planets';
import {Star} from './scripts/star';
import {Comet} from './scripts/comets';
import {Gun} from './scripts/gun';
import {Bullet} from './scripts/bullets';
import {Explosion} from './scripts/explosion';

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    console.log("everything is fine, you can do this");
    let isColid = false;
// get start button id
    let startButton = document.getElementById("startButton");
// get timer id
    let timeId = document.getElementById("timeId");
// get start model id
    let startBar = document.getElementById("start");
// get collision model id
    let stopId = document.getElementById("stop")
// get restart button id
    let restartButton = document.getElementById("restartButton")
// explosion image
    let explosion = new Image();
    explosion.src = '../images/explosion3d_alpha 2.png'
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
    for(let i = 0; i < 5; i++){
        let radius = Math.floor(Math.random() * 15) + 10;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        // let color = "#505050";
        let color = "grey";
        comets.push(new Comet(x, y, radius, color));
    }
// create a gun
    let gunImg = new Image();
    gunImg.src = '../images/gun_alpha1.png'

    let gun = new Gun(450, 860, gunImg);

// draw bullets when click
    let bullets = [];

    addEventListener('click', (event) => {
        // console.log(event);
        // console.log(bullets);
        // const radian = Math.atan2( event.clientY - canvas.height/2, event.clientX - canvas.width/2);
        const radian = Math.atan2( event.clientY - 860, event.clientX - 470);

        const velocity = {x: Math.cos(radian) * 20, y: Math.sin(radian) * 20};

        const bullet = new Bullet(470, 860, 5, 'white', velocity);
        bullets.push(bullet);
        // console.log(event)
    })
    
// create explosions 
    let explosions = [];
    
// animate and draw everything on canvas
    let animationId;
    function animate(){
        animationId = requestAnimationFrame(animate);
        
        // clear canvas and draw again
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0)';
        // ctx.strokeStyle = 'rgba(0,153,255,0.4)'
        // ctx.save();
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

        // draw explosion for each comet
        explosions.forEach((particle, index) => {
            if(particle.alpha <= 0){
                explosions.splice(index, 1)
            }else{
                particle.update();
            }
         })
        // console.log(bullets);
        // draw bullets when click
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
            // if collides with the earth, end game.
            
            const distance = Math.hypot((earth.x + earthImg.width/2 )- comet.x, (earth.y + earthImg.height/2) - comet.y);
            if((distance - comet.radius - earthImg.width/2 ) < -9.9){
                const customEvent = new Event('colision');
                window.dispatchEvent(customEvent);
                isColid = true;
                ctx.drawImage(explosion, earth.x, earth.y);
                // startBar.style.display = "relative";

                // cancelAnimationFrame(animationId);
            }
            
            // if colids remove comet and bullet
            bullets.forEach((bullet, bulletIndex) => {   
                const distance = Math.hypot(bullet.x - comet.x, bullet.y - comet.y);
                if((distance - comet.radius - bullet.radius) < 1){
                    comet.color = 'orange';

                    // create explosions
                     for(let i = 0; i < (comet.radius) * 2; i++){
                         const evelocity = {x: ((Math.random() - 0.5) * (Math.random() * 8)), y: ((Math.random() - 0.5) * (Math.random() * 8))};
                         explosions.push(new Explosion(bullet.x, bullet.y, Math.random() * 2, 'orange', evelocity));
                     }

                    if(comet.radius - 8 > 8){
                        comet.radius -= 8;
                        bullets.splice(bulletIndex, 1);
                    }
                    else{
                        comets.splice(cometIndex, 1);
                        bullets.splice(bulletIndex, 1);
                    }
                }   
            })
        });
        if(isColid){
            stopId.style.display = "absolute";  
        }
    }
    // animate();
    let myInterval;
 // when clicked on start game button start the game
    startButton.addEventListener("click", (event)=>{
        animate();
        // console.log(startBar.style.display)
        startBar.style.display = "none"; 
        // countdown timer 
        let startMinute = 1;
        let time = startMinute * 60;
        function updateTimer(){
            let minutes = Math.floor(time/60);
            let seconds = time % 60

            seconds = seconds < 10 ? '0' + seconds : seconds;

            timeId.innerHTML = `${minutes}:${seconds}`;
            if(time > 0){
                time--;
            }
        } 
        myInterval = setInterval(updateTimer, 1000);
    })
     

// when clicked on restart game button start the game
    restartButton.addEventListener("click", (event)=>{
        animate();
        // stopId.style.display = "none";
        
    })

    window.addEventListener("colision", (event)=>{
        // console.log(stopId)
        stopId.style.display = "flex";
        cancelAnimationFrame(animationId);
        clearInterval(myInterval);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // startBar.style.display = 'absolute';
        // stopId.reload();
        
    })
});
    
    
    