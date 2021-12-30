/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const SolarSystem = __webpack_require__(/*! ./solarSystem */ \"./src/solarSystem.js\");\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n\n\n    var c = document.getElementById('canvas');\n    var ctx = c.getContext('2d');\n    ctx.moveTo(250, 50);\n    ctx.lineTo(0, 10);\n    ctx.stroke();\n    var sun = new Image();\n    var moon = new Image();\n    var earth = new Image();\nfunction init(){\n  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';\n  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';\n  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';\n  setInterval(draw);\n}\ninit();\n    const solar = new SolarSystem();\n    solar.draw();\n});\n\n\n//# sourceURL=webpack://SaveTheEarth/./src/index.js?");

/***/ }),

/***/ "./src/solarSystem.js":
/*!****************************!*\
  !*** ./src/solarSystem.js ***!
  \****************************/
/***/ (function(module) {

eval("\n\n\nfunction draw() {\n  var ctx = document.getElementById('canvas').getContext('2d');\n\n  ctx.globalCompositeOperation = 'destination-over';\n  ctx.clearRect(0,0,300,300); // clear canvas\n\n  ctx.fillStyle = 'rgba(0,0,0,0.4)';\n  ctx.strokeStyle = 'rgba(0,153,255,0.4)';\n  ctx.save();\n  ctx.translate(150,150);\n\n  // Earth\n  var time = new Date();\n  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );\n  ctx.translate(105,0);\n  ctx.fillRect(0,-12,50,24); // Shadow\n  ctx.drawImage(earth,-12,-12);\n\n  // Moon\n  ctx.save();\n  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );\n  ctx.translate(0,28.5);\n  ctx.drawImage(moon,-3.5,-3.5);\n  ctx.restore();\n\n  ctx.restore();\n  \n  ctx.beginPath();\n  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit\n  ctx.stroke();\n \n  ctx.drawImage(sun,0,0,300,300);\n}\n\n\nmodule.exports = draw;\n\n//# sourceURL=webpack://SaveTheEarth/./src/solarSystem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;