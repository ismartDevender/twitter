"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable jsx-a11y/alt-text */ \n\n\n\nfunction Login(param) {\n    var providers = param.providers;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center space-y-20 mt-38\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/twitter-logo-4.png\",\n                width: 300,\n                height: 300,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.values(providers).map(function(provider) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(provider.id, {\n                                    callbackUrl: \"/\"\n                                });\n                            },\n                            className: \"relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold tracking-tighter text-white bg-gray-800 rounded-md group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#87ceeb] rounded-md group-hover:mt-0 group-hover:ml-0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full bg-white rounded-md \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#87ceeb] rounded-md opacity-0 group-hover:opacity-100 \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"relative text-[#87ceeb] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white\",\n                                    children: [\n                                        \"Sign in with \",\n                                        provider.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    }, provider.name, false, {\n                        fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9DQUFvQyxHQUNwQztBQUErQjtBQUNMO0FBQ2U7QUFFekMsU0FBU0csS0FBSyxDQUFDLEtBQWEsRUFBRTtRQUFmLFNBQVcsR0FBWCxLQUFhLENBQVhDLFNBQVM7O0lBQ3hCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2Q0FBNkM7OzBCQUMxRCw4REFBQ04sbURBQUs7Z0JBQ0pPLEdBQUcsRUFBQyxxQkFBcUI7Z0JBQ3pCQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hDLFNBQVMsRUFBQyxTQUFTOzs7OztvQkFDbkI7MEJBRUYsOERBQUNMLEtBQUc7MEJBQ0RNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUixTQUFTLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLFFBQVE7eUNBQ3JDLDhEQUFDVCxLQUFHO2tDQUNGLDRFQUFDVSxRQUFNOzRCQUNMQyxPQUFPLEVBQUU7dUNBQU1kLHVEQUFNLENBQUNZLFFBQVEsQ0FBQ0csRUFBRSxFQUFFO29DQUFFQyxXQUFXLEVBQUUsR0FBRztpQ0FBRSxDQUFDOzZCQUFBOzRCQUN4RFosU0FBUyxFQUFDLHVJQUF1STs7OENBRWpKLDhEQUFDYSxNQUFJO29DQUFDYixTQUFTLEVBQUMsNElBQTRJOzs7Ozt5Q0FBUTs4Q0FDcEssOERBQUNhLE1BQUk7b0NBQUNiLFNBQVMsRUFBQyxxREFBcUQ7Ozs7O3lDQUFROzhDQUM3RSw4REFBQ2EsTUFBSTtvQ0FBQ2IsU0FBUyxFQUFDLDZJQUE2STs7Ozs7eUNBQVE7OENBQ3JLLDhEQUFDYSxNQUFJO29DQUFDYixTQUFTLEVBQUMscUdBQXFHOzt3Q0FBQyxlQUN2Rzt3Q0FBQ1EsUUFBUSxDQUFDTSxJQUFJOzs7Ozs7eUNBQ3RCOzs7Ozs7aUNBQ0E7dUJBWEROLFFBQVEsQ0FBQ00sSUFBSTs7Ozs2QkFZakI7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047Q0FDSDtBQTdCUWpCLEtBQUFBLEtBQUs7QUErQmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luLmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5mdW5jdGlvbiBMb2dpbih7IHByb3ZpZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTIwIG10LTM4XCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiL3R3aXR0ZXItbG9nby00LnBuZ1wiXG4gICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm92aWRlci5uYW1lfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7IGNhbGxiYWNrVXJsOiAnLycgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTMgdGV4dC1sZyBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgZ3JvdXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgbXQtMSBtbC0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBiZy1bIzg3Y2VlYl0gcm91bmRlZC1tZCBncm91cC1ob3ZlcjptdC0wIGdyb3VwLWhvdmVyOm1sLTBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBiZy13aGl0ZSByb3VuZGVkLW1kIFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBkZWxheS0xMDAgYmctWyM4N2NlZWJdIHJvdW5kZWQtbWQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bIzg3Y2VlYl0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGRlbGF5LTEwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwic3BhbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login.js\n"));

/***/ })

});