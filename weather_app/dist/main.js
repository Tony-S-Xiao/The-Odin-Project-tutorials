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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/dom.js */ \"./src/viewer/dom.js\");\n/* harmony import */ var _model_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/weather.js */ \"./src/model/weather.js\");\n\n\n\nlet button = document.querySelector('button');\nbutton.addEventListener('click', (e)=>{\n    let fetched = (0,_model_weather_js__WEBPACK_IMPORTED_MODULE_1__.default)(document.querySelector('input').value);\n    document.querySelector('input').value = \"\";\n    fetched.then((result)=>{\n    if(result.cod != '404')\n    (0,_viewer_dom_js__WEBPACK_IMPORTED_MODULE_0__.addWeather)(result.name, result.weather[0].main, result.main.temp);\n    else\n    (0,_viewer_dom_js__WEBPACK_IMPORTED_MODULE_0__.alertErr)('city not found!');\n    });\n})\nlet input = document.querySelector('input');\ninput.addEventListener('keydown', (e)=> {\n    if(e.code == 'Enter' || e.code == 'NumpadEnter') {\n        button.click();\n    }\n});\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/model/key.js":
/*!**************************!*\
  !*** ./src/model/key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst api_key = '54e9f973e37fb9ea660ca34ddcc1d80e';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_key);\n\n//# sourceURL=webpack://weather_app/./src/model/key.js?");

/***/ }),

/***/ "./src/model/prefix_tree.js":
/*!**********************************!*\
  !*** ./src/model/prefix_tree.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PrefixTree {\n    constructor(dict) {\n        this._root = new Node('');\n        this.displayState = \"\";\n        for(let word of dict) {\n            this.insert(word);\n        }\n    }\n    insert(word) {\n        let curr_node = this._root;\n        for(let i = 0; i < word.length - 1; ++i) {\n            if(curr_node.pointers.has(word[i])) {\n                curr_node = curr_node.pointers.get(word[i]);\n            } else {\n                curr_node.pointers.set(word[i], new Node(word[i]));\n                curr_node = curr_node.pointers.get(word[i]);\n            }\n        }\n        curr_node.pointers.set(word[word.length - 1], new Node(word[word.length - 1], true));\n    }\n    displayAllWords() {\n        this.displayHelp(this._root);\n    }\n    displayHelp(node) {\n        let pointer_map = node.pointers;\n        if(node._isEnd == true) {\n            console.log(this.displayState);\n        }\n        let nodes = pointer_map.values();\n        for(let pair of nodes) {\n            let curr_state = this.displayState;\n            this.displayState = this.displayState + pair._val;\n            this.displayHelp(pair);\n            this.displayState = curr_state;\n        }\n    }\n    getTop10Suggestion(prefix) {\n\n    }\n}\nclass Node {\n    constructor(val, isEnd = false) {\n        this._val = val;\n        this.pointers = new Map();\n        this._isEnd = isEnd;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrefixTree);\n\n//# sourceURL=webpack://weather_app/./src/model/prefix_tree.js?");

/***/ }),

/***/ "./src/model/weather.js":
/*!******************************!*\
  !*** ./src/model/weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ \"./src/model/key.js\");\n/* harmony import */ var _prefix_tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefix_tree.js */ \"./src/model/prefix_tree.js\");\n\n\n/*\nfetch('./city_data.json')\n.then((value)=>{\n    return value.json();\n}).then((value)=> {\n    for(let city of value) {\n        console.log(city.name);\n    }\n});\n*/\n\nlet tree = new _prefix_tree_js__WEBPACK_IMPORTED_MODULE_1__.default(['wow', 'wow1', 'wat', 'aawwwa1', 'apple', 'wateverlah']);\ntree.displayAllWords();\nconsole.log(tree);\nconst getCurrWeather = async (city) => {\n    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_key_js__WEBPACK_IMPORTED_MODULE_0__.default}&mode=metric`);\n    let result = await response.json();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrWeather);\n\n//# sourceURL=webpack://weather_app/./src/model/weather.js?");

/***/ }),

/***/ "./src/viewer/dom.js":
/*!***************************!*\
  !*** ./src/viewer/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addWeather\": () => (/* binding */ addWeather),\n/* harmony export */   \"alertErr\": () => (/* binding */ alertErr)\n/* harmony export */ });\nconst body = document.querySelector('body');\n\nconst addWeather = (city, weather, temp) => {\n    let city_dom = document.createElement('div');\n    city_dom.textContent = city;\n    body.appendChild(city_dom);\n    let weather_dom = document.createElement('div');\n    weather_dom.textContent = weather;\n    body.appendChild(weather_dom);\n    let temp_dom = document.createElement('div');\n    temp_dom.textContent = temp;\n    body.appendChild(temp_dom);\n}\n\nconst alertErr = (err) => {\n    alert(err);\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/viewer/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;