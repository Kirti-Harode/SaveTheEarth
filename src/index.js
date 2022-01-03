import {Planet} from './scripts/planets';
window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    ctx.width = window.innerWidth;
    ctx.height = window.innerHeight;

    ctx.fillStyle = "rgb(1, 10, 10)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("everything is fine, you can do this");


    // let planets = [];

    // function init(){
    //     planets.push(new Planet(canvas.width/2,canvas.height/2, 35, 0, 0, 'yellow')); // sun
    //     planets.push(new Planet(canvas.width/2,canvas.height/2, 5, 5, 65, 'gray')); // mercury
    //     planets.push(new Planet(canvas.width/2,canvas.height/2, 10, 4, 90, 'orange')); // venus
    //     planets.push(new Planet(canvas.width/2,canvas.height/2, 15, 3, 125, 'blue')); // earth
    //     planets.push(new Planet(canvas.width/2,canvas.height/2, 20, 3.5, 175, 'red')); // mars
    // }

    let sun = new Planet(canvas.width/2, canvas.height/2, 35, 'yellow',0, 0); 
    sun.draw();

    let murcury = new Planet(canvas.width/2,canvas.height/2, 5, 'gray', 5, 65);
    murcury.draw();
    // murcury.animate();
    // murcury.update();
    // window.requestAnimationFrame(murcury.animate);
    
    let venus = new Planet(canvas.width/2,canvas.height/2, 10,'orange', 4, 90 ); 
    venus.draw();
    window.requestAnimationFrame(venus.animate);
    venus.update();


    let earth = new Planet(canvas.width/2,canvas.height/2, 15, 'blue', 3, 125); 
    earth.draw();

    let mars = new Planet(canvas.width/2,canvas.height/2, 20, 'red', 3.5, 175);
    mars.draw();


});


