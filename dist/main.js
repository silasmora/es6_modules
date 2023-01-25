/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id\n    this.make = make\n    this.model = model\n    this.year = year\n  }\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\n//Selection statement\n\nconst submitForm = document.getElementById(\"submitForm\")\n\nconst makeInput = document.querySelector(\"#makeInput\")\nconst modelInput = document.querySelector(\"#modelInput\")\nconst yearInput = document.querySelector(\"#yearInput\")\n\nconst makeDisplay = document.querySelector(\"#car-make\")\nconst modelDisplay = document.querySelector(\"#car-model\")\nconst yearDisplay = document.querySelector(\"#car-year\")\n\nconst removeBtn = document.querySelector(\"#removeBtn\")\n \nconst wishlistUl = document.querySelector(\"#wishListContainer > ul\")\n\n//event listeners\n\nsubmitForm.addEventListener(\"submit\", addCar)\n\nremoveBtn.addEventListener(\"click\", removeCar)\n\n//exercise 6\n\nfunction showCarDetails(car) {\n  //update car displays texts\n  makeDisplay.textContent = car.make\n  modelDisplay.textContent = car.model\n  yearDisplay.textContent = car.year\n\n  //enable the remove button\n  removeBtn.disabled = false\n  //set the current car's id to the data-carId attribute of removeBtn\n  console.log(car.id)\n  removeBtn.setAttribute(\"data-cardId\", car.id)\n\n}\n\n//exercise 7\n\nfunction updateDOMlist() {\n  //clear the unordered list\n  wishlistUl.innerHTML = \"\"\n  //iterate over the wishlist\n  // for (let i = 0; i < wishlist.length; i++) {\n  //   const newLi = document.createElement(\"11\")\n\n  //   newLi.textContent = `${wishlist[i].make} ${wishlist[i].model}`\n\n  //   newLi.addEventListener(\"click\", () => {\n  //     showCarDetails(wishlist[i])\n  //   })\n\n  //   wishlistUl.appendChild(newLi)\n  // }\n\n  //iterate over the wishlist\n  console.log(wishlist)\n  wishlist.list.forEach((car) => {\n    //add a le to the ul for each car\n    const newLi = document.createElement(\"li\")\n    newLi.textContent = `${car.make} ${car.model}`\n    //add a click event listener to showCarDetails per list item click\n    newLi.addEventListener(\"click\", () => showCarDetails(car))\n    wishlistUl.appendChild(newLi)\n  })\n}\n\n//exercise 8\n\nfunction addCar(event) {\n  event.preventDefault()\n\n  let make = makeInput.value;\n  let model = modelInput.value\n  let year = yearInput.value\n\n  wishlist.add(make, model, year)\n\n  updateDOMlist()\n\n  //reset form values\n  makeInput.value = \"\"\n  modelInput.value = \"\"\n  yearInput.value = \"\"\n\n}\n\n//exercise 9\n\nfunction removeCar() {\n  //get the displayed car's id\n  let carId = Number(removeBtn.getAttribute(\"data-cardId\"))\n  //remove the selected car\n  wishlist.remove(carId)\n\n  //update the dom list\n  updateDOMlist()\n\n  //reset display values\n  makeDisplay.textContent = \"\"\n  modelDisplay.textContent = \"\"\n  yearDisplay.textContent = \"\"\n\n  //disable remove button\n  removeBtn.disabled = true\n}\n\n//construction\n\n\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n// wishlist.add(\"ford\", \"Mustang\", \"2021\")\n// wishlist.add(\"toyota\", \"corolla\", \"2005\")\n// wishlist.add(\"honda\", \"civic\", \"2012\")\n// console.log(wishlist.list)\n\n// wishlist.remove(0)\n// console.log(wishlist.list)\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass Wishlist {\n  //class properties\n  //list\n  //nextId\n  constructor() {\n    //instances properties\n    this.list = []\n    this.nextId = 0\n  }\n\n  add(make, model, year) {\n    //use the car class to create a new car\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year)\n\n    //add that car to the wishlist list\n    this.list.push(car)\n  }\n\n  remove(carId) {\n    //How can we remove a specific item in an array?\n    //filter\n    console.log(carId)\n    this.list = this.list.filter((car) => {\n      console.log(car)\n\n      return car.id != carId});\n      \n    // this.list.forEach((value, index) => {\n    //   if (value.id == carId) {\n    //     //remove this value from the array\n    //     this.list.splice(index, 1)\n    //   }\n    // })\n\n    \n  }\n}\n\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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