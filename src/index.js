const SolarSystem = require("./solarSystem");
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    ctx.moveTo(250, 50);
    ctx.lineTo(0, 10);
    ctx.stroke();
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  setInterval(draw);
}
init();
    const solar = new SolarSystem();
    solar.draw();
});
