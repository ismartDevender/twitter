"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable jsx-a11y/alt-text */ \n\n\n\nfunction Login(param) {\n    var providers = param.providers;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center space-y-100 mt-48\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/twitter-logo-4.png\",\n                width: 300,\n                height: 300,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.values(providers).map(function(provider) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(provider.id, {\n                                    callbackUrl: \"/\"\n                                });\n                            },\n                            className: \"relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold tracking-tighter text-white bg-gray-800 rounded-md group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#87ceeb] rounded-md group-hover:mt-0 group-hover:ml-0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full bg-white rounded-md \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#87ceeb] rounded-md opacity-0 group-hover:opacity-100 \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"relative text-[#87ceeb] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white\",\n                                    children: [\n                                        \"Sign in with \",\n                                        provider.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    }, provider.name, false, {\n                        fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deven\\\\OneDrive\\\\Desktop\\\\twitter-clone-master (1)\\\\twitter-clone-master\\\\components\\\\Login.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9DQUFvQyxHQUNwQztBQUErQjtBQUNMO0FBQ2U7QUFFekMsU0FBU0csS0FBSyxDQUFDLEtBQWEsRUFBRTtRQUFmLFNBQVcsR0FBWCxLQUFhLENBQVhDLFNBQVM7O0lBQ3hCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7OzBCQUMzRCw4REFBQ04sbURBQUs7Z0JBQ0pPLEdBQUcsRUFBQyxxQkFBcUI7Z0JBQ3pCQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hDLFNBQVMsRUFBQyxTQUFTOzs7OztvQkFDbkI7MEJBRUYsOERBQUNMLEtBQUc7MEJBQ0RNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUixTQUFTLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLFFBQVE7eUNBQ3JDLDhEQUFDVCxLQUFHO2tDQUNGLDRFQUFDVSxRQUFNOzRCQUNMQyxPQUFPLEVBQUU7dUNBQU1kLHVEQUFNLENBQUNZLFFBQVEsQ0FBQ0csRUFBRSxFQUFFO29DQUFFQyxXQUFXLEVBQUUsR0FBRztpQ0FBRSxDQUFDOzZCQUFBOzRCQUN4RFosU0FBUyxFQUFDLHVJQUF1STs7OENBRWpKLDhEQUFDYSxNQUFJO29DQUFDYixTQUFTLEVBQUMsNElBQTRJOzs7Ozt5Q0FBUTs4Q0FDcEssOERBQUNhLE1BQUk7b0NBQUNiLFNBQVMsRUFBQyxxREFBcUQ7Ozs7O3lDQUFROzhDQUM3RSw4REFBQ2EsTUFBSTtvQ0FBQ2IsU0FBUyxFQUFDLDZJQUE2STs7Ozs7eUNBQVE7OENBQ3JLLDhEQUFDYSxNQUFJO29DQUFDYixTQUFTLEVBQUMscUdBQXFHOzt3Q0FBQyxlQUN2Rzt3Q0FBQ1EsUUFBUSxDQUFDTSxJQUFJOzs7Ozs7eUNBQ3RCOzs7Ozs7aUNBQ0E7dUJBWEROLFFBQVEsQ0FBQ00sSUFBSTs7Ozs2QkFZakI7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047Q0FDSDtBQTdCUWpCLEtBQUFBLEtBQUs7QUErQmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luLmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5mdW5jdGlvbiBMb2dpbih7IHByb3ZpZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEwMCBtdC00OFwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi90d2l0dGVyLWxvZ28tNC5wbmdcIlxuICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAvPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCwgeyBjYWxsYmFja1VybDogJy8nIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIHRleHQtbGcgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCByb3VuZGVkLW1kIGdyb3VwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG10LTEgbWwtMSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgYmctWyM4N2NlZWJdIHJvdW5kZWQtbWQgZ3JvdXAtaG92ZXI6bXQtMCBncm91cC1ob3ZlcjptbC0wXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC1tZCBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgZGVsYXktMTAwIGJnLVsjODdjZWViXSByb3VuZGVkLW1kIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtWyM4N2NlZWJdIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBkZWxheS0xMDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJjYWxsYmFja1VybCIsInNwYW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Login.js\n"));

/***/ })

});