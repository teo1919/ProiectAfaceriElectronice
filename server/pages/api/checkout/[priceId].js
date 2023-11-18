"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout/[priceId]";
exports.ids = ["pages/api/checkout/[priceId]"];
exports.modules = {

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/core/utils/index.js":
/*!*********************************!*\
  !*** ./src/core/utils/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SITE_URL\": () => (/* binding */ SITE_URL)\n/* harmony export */ });\nconst production = \"development\" === \"production\";\nconst SITE_URL = production ? \"prod-url\" : \"http://localhost:3000/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29yZS91dGlscy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsYUFBYUMsa0JBQXlCO0FBRXJDLE1BQU1DLFdBQVdGLGFBQWEsYUFBYSx3QkFBd0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VwaWMtc2Fhcy8uL3NyYy9jb3JlL3V0aWxzL2luZGV4LmpzPzc2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCBTSVRFX1VSTCA9IHByb2R1Y3Rpb24gPyAncHJvZC11cmwnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nOyJdLCJuYW1lcyI6WyJwcm9kdWN0aW9uIiwicHJvY2VzcyIsIlNJVEVfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/core/utils/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout/[priceId].js":
/*!*********************************************!*\
  !*** ./src/pages/api/checkout/[priceId].js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pricing/utils/stripe */ \"(api)/./src/pricing/utils/stripe.js\");\n/* harmony import */ var src_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/utils */ \"(api)/./src/core/utils/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__]);\nsrc_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { priceId  } = req.query;\n    const session = await src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n        mode: \"subscription\",\n        payment_method_types: [\n            \"card\"\n        ],\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ],\n        success_url: `${src_core_utils__WEBPACK_IMPORTED_MODULE_2__.SITE_URL}/success`,\n        cancel_url: `${src_core_utils__WEBPACK_IMPORTED_MODULE_2__.SITE_URL}/pricing`\n    });\n    res.send({\n        id: session.id\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0L1twcmljZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNHO0FBQ1I7QUFFM0IsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUU3QixNQUFNQyxVQUFVLE1BQU1QLHFGQUErQixDQUFDO1FBQ3BEVyxNQUFNO1FBQ05DLHNCQUFzQjtZQUFDO1NBQU87UUFDOUJDLFlBQVk7WUFBQztnQkFBRUMsT0FBT1Q7Z0JBQVNVLFVBQVU7WUFBRTtTQUFFO1FBQzdDQyxhQUFhLENBQUMsRUFBRWYsb0RBQVFBLENBQUMsUUFBUSxDQUFDO1FBQ2xDZ0IsWUFBWSxDQUFDLEVBQUVoQixvREFBUUEsQ0FBQyxRQUFRLENBQUM7SUFDbkM7SUFFQUcsSUFBSWMsSUFBSSxDQUFDO1FBQUVDLElBQUlaLFFBQVFZLEVBQUU7SUFBQztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXBpYy1zYWFzLy4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC9bcHJpY2VJZF0uanM/YjBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcInNyYy9wcmljaW5nL3V0aWxzL3N0cmlwZVwiO1xuaW1wb3J0IHsgU0lURV9VUkwgfSBmcm9tIFwic3JjL2NvcmUvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHByaWNlSWQgfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxuICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiBwcmljZUlkLCBxdWFudGl0eTogMSB9XSxcbiAgICBzdWNjZXNzX3VybDogYCR7U0lURV9VUkx9L3N1Y2Nlc3NgLFxuICAgIGNhbmNlbF91cmw6IGAke1NJVEVfVVJMfS9wcmljaW5nYCxcbiAgfSk7XG5cbiAgcmVzLnNlbmQoeyBpZDogc2Vzc2lvbi5pZCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwic3RyaXBlIiwiU0lURV9VUkwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJpY2VJZCIsInF1ZXJ5Iiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiY2FuY2VsX3VybCIsInNlbmQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout/[priceId].js\n");

/***/ }),

/***/ "(api)/./src/pricing/utils/stripe.js":
/*!*************************************!*\
  !*** ./src/pricing/utils/stripe.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"sk_test_51OAF7wE2GvzqOTCpJCIp0T2Z3JN1t4Q4YrqjCoMavIpaZMMXVYOx7RVQZG1yqHK4edhs3JxKOcaoGSAtsf68XIWL00niCLF9Df\", {\n    apiVersion: \"2022-11-15\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcHJpY2luZy91dGlscy9zdHJpcGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFckIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQywrR0FBK0c7SUFDNUlFLFlBQVk7QUFDaEIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2VwaWMtc2Fhcy8uL3NyYy9wcmljaW5nL3V0aWxzL3N0cmlwZS5qcz9lYmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoJ3NrX3Rlc3RfNTFPQUY3d0UyR3Z6cU9UQ3BKQ0lwMFQyWjNKTjF0NFE0WXJxakNvTWF2SXBhWk1NWFZZT3g3UlZRWkcxeXFISzRlZGhzM0p4S09jYW9HU0F0c2Y2OFhJV0wwMG5pQ0xGOURmJywge1xyXG4gICAgYXBpVmVyc2lvbjogXCIyMDIyLTExLTE1XCJcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJhcGlWZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pricing/utils/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout/[priceId].js"));
module.exports = __webpack_exports__;

})();