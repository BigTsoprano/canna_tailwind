"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comps/Footer.js":
/*!*************************!*\
  !*** ./comps/Footer.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useFirestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFirestore */ \"./hooks/useFirestore.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Footer = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { addDocument , response  } = (0,_hooks_useFirestore__WEBPACK_IMPORTED_MODULE_4__.useFirestore)(\"emailForPromotions\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        addDocument({\n            email\n        });\n        setEmail(\"\");\n    };\n    const footerNavs = [\n        {\n            label: \"Company\",\n            items: [\n                {\n                    href: \"/services\",\n                    name: \"Services\"\n                },\n                {\n                    href: \"/about\",\n                    name: \"About us\"\n                },\n                {\n                    href: \"/price\",\n                    name: \"Pricing\"\n                },\n                {\n                    href: \"https://demo.01ninjas.com/\",\n                    name: \"Demo\"\n                }\n            ]\n        },\n        {\n            label: \"Resources\",\n            items: [\n                {\n                    href: \"/services/ecommerce\",\n                    name: \"Ecommerce\"\n                },\n                {\n                    href: \"/services\",\n                    name: \"Branding\"\n                },\n                {\n                    href: \"/services\",\n                    name: \"Custom software\"\n                },\n                {\n                    href: \"/services\",\n                    name: \"CMS\"\n                },\n                {\n                    href: \"/services\",\n                    name: \"IT services\"\n                }\n            ]\n        },\n        {\n            label: \"More\",\n            items: [\n                {\n                    href: \"javascript:void()\",\n                    name: \"Terms\"\n                },\n                {\n                    href: \"/becomeapartner\",\n                    name: \"Join us\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"jsx-22a2089a5d03b795\" + \" \" + \"text-slate-50 bg-slate-950  px-4 py-4 max-w-screen-xl mx-auto md:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-22a2089a5d03b795\" + \" \" + \"gap-6 justify-between md:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-22a2089a5d03b795\" + \" \" + \" flex row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/ninjas_logo.svg\",\n                                        style: {\n                                            width: \"30px\",\n                                            height: \"30px\"\n                                        },\n                                        alt: \"logo\",\n                                        width: 40,\n                                        height: 40\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"600\",\n                                            paddingLeft: \"6px\"\n                                        },\n                                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"leading-relaxed text-green-500 mt-2 text-xl\",\n                                        children: \"Canna                    \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-22a2089a5d03b795\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"leading-relaxed text-slate-50 max-w-xs mt-2 text-base\",\n                                        children: \"\\uD83D\\uDCF1: +1(201)328-7539\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 18\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"leading-relaxed text-slate-50 max-w-xs mt-2 text-base\",\n                                        children: \"✉️: canna@01ninjas.com\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            alignItems: \"flex-start\"\n                        },\n                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"flex-1 text-slate-50 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0\",\n                        children: footerNavs.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"jsx-22a2089a5d03b795\" + \" \" + \"space-y-4  \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"text-green-500 text-xs\",\n                                        children: item.label\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    item.items.map((el, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"jsx-22a2089a5d03b795\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: el.href,\n                                                className: \"jsx-22a2089a5d03b795\" + \" \" + \"hover:underline hover:text-green-500 text-white\",\n                                                children: el.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, idx, false, {\n                                            fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 37\n                                        }, undefined))\n                                ]\n                            }, idx, true, {\n                                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                lineNumber: 115,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\"\n                        },\n                        className: \"jsx-22a2089a5d03b795\" + \" \" + \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"jsx-22a2089a5d03b795\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"jsx-22a2089a5d03b795\" + \" \" + \"block pt-4 pb-2\",\n                                    children: \"Stay up to date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                    lineNumber: 153,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-22a2089a5d03b795\" + \" \" + \"max-w-sm flex items-center  rounded p-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            style: {\n                                                borderRadius: \"5px 0 0 5px\"\n                                            },\n                                            type: \"text\",\n                                            required: true,\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            value: email,\n                                            placeholder: \"Enter your email\",\n                                            className: \"jsx-22a2089a5d03b795\" + \" \" + \"w-full p-2.5 outline-non bg-slate-50 text-black\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                            lineNumber: 157,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            style: {\n                                                borderRadius: \"0 5px 5px 0\"\n                                            },\n                                            className: \"jsx-22a2089a5d03b795\" + \" \" + \"p-2.5  text-white bg-green-500 outline-none shadow-md focus:shadow-none sm:px-5\",\n                                            children: \"Subscribe\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                            lineNumber: 166,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                                    lineNumber: 156,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                        lineNumber: 149,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-22a2089a5d03b795\" + \" \" + \"mt-8 py-6 border-t text-xs text-slate-400 items-center justify-between sm:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-22a2089a5d03b795\" + \" \" + \"mt-4 sm:mt-0\",\n                    children: \"\\xa9 2023 Canna All rights reserved.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                    lineNumber: 177,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n                lineNumber: 176,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"22a2089a5d03b795\",\n                children: \".svg-icon.jsx-22a2089a5d03b795 path.jsx-22a2089a5d03b795,.svg-icon.jsx-22a2089a5d03b795 polygon.jsx-22a2089a5d03b795,.svg-icon.jsx-22a2089a5d03b795 rect.jsx-22a2089a5d03b795{fill:currentColor}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanon/01ninja_tailwind/comps/Footer.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Footer, \"7Ot5MnaE4xCmNeo/RZMLg3Poc/M=\", false, function() {\n    return [\n        _hooks_useFirestore__WEBPACK_IMPORTED_MODULE_4__.useFirestore\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDBDLGFBQVk7c0ZBQ0Y7Ozs7OztzREFFZCw4REFBQ0M7NENBQU81QixPQUFPO2dEQUFDcUIsY0FBYTs0Q0FBYTtzRkFDNUI7c0RBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFqQiw4REFBQ3ZCOzBEQUFjOzBCQUNYLDRFQUFDQTs4REFBYzs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzFDO0dBM0xNZDs7UUFHZ0NELDZEQUFZQTs7O0tBSDVDQztBQTZMTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9Gb290ZXIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZpcmVzdG9yZSB9IGZyb20gJy4uL2hvb2tzL3VzZUZpcmVzdG9yZSdcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgeyBhZGREb2N1bWVudCwgcmVzcG9uc2UgfSA9IHVzZUZpcmVzdG9yZSgnZW1haWxGb3JQcm9tb3Rpb25zJylcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhZGREb2N1bWVudCh7XG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICB9KVxuICAgICAgICBzZXRFbWFpbCgnJylcbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXJOYXZzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zZXJ2aWNlcycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTZXJ2aWNlcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBYm91dCB1cydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQcmljaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9kZW1vLjAxbmluamFzLmNvbS8nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRGVtbydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zZXJ2aWNlcy9lY29tbWVyY2UnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRWNvbW1lcmNlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3NlcnZpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JyYW5kaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3NlcnZpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0N1c3RvbSBzb2Z0d2FyZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zZXJ2aWNlcycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDTVMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2VydmljZXMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSVQgc2VydmljZXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIk1vcmVcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiAnamF2YXNjcmlwdDp2b2lkKCknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGVybXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvYmVjb21lYXBhcnRuZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSm9pbiB1cydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwIGJnLXNsYXRlLTk1MCAgcHgtNCBweS00IG1heC13LXNjcmVlbi14bCBteC1hdXRvIG1kOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNiBqdXN0aWZ5LWJldHdlZW4gbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9uaW5qYXNfbG9nby5zdmdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiIH19XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonNjAwJywgcGFkZGluZ0xlZnQ6JzZweCd9fSBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmVlbi01MDAgbXQtMiB0ZXh0LXhsXCI+XG5DYW5uYSAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZGluZy1yZWxheGVkIHRleHQtc2xhdGUtNTAgbWF4LXcteHMgbXQtMiB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAg8J+TsTogKzEoMjAxKTMyOC03NTM5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1zbGF0ZS01MCBtYXgtdy14cyBtdC0yIHRleHQtYmFzZVwiID7inInvuI86IGNhbm5hQDAxbmluamFzLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3thbGlnbkl0ZW1zOidmbGV4LXN0YXJ0J319IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXNsYXRlLTUwIG10LTEwIHNwYWNlLXktNiAganVzdGlmeS1iZXR3ZWVuIHNtOmZsZXggbWQ6c3BhY2UteS0wIG1kOm10LTBcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlck5hdnMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNCAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubGFiZWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLml0ZW1zLm1hcCgoKGVsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmVlbi01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fSBjbGFzc05hbWU9XCJcIiA+XG4gICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBwdC00IHBiLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXkgdXAgdG8gZGF0ZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIGZsZXggaXRlbXMtY2VudGVyICByb3VuZGVkIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6JzVweCAwIDAgNXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yLjUgb3V0bGluZS1ub24gYmctc2xhdGUtNTAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JvcmRlclJhZGl1czonMCA1cHggNXB4IDAnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIuNSAgdGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgb3V0bGluZS1ub25lIHNoYWRvdy1tZCBmb2N1czpzaGFkb3ctbm9uZSBzbTpweC01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBweS02IGJvcmRlci10IHRleHQteHMgdGV4dC1zbGF0ZS00MDAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzbTpmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgc206bXQtMFwiPlxuICAgICAgICAgICAgICAgICZjb3B5OyAyMDIzIENhbm5hIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc3ZnLWljb24gcGF0aCxcbiAgICAgICAgICAgIC5zdmctaWNvbiBwb2x5Z29uLFxuICAgICAgICAgICAgLnN2Zy1pY29uIHJlY3Qge1xuICAgICAgICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9vdGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZpcmVzdG9yZSIsIkZvb3RlciIsImVtYWlsIiwic2V0RW1haWwiLCJhZGREb2N1bWVudCIsInJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9vdGVyTmF2cyIsImxhYmVsIiwiaXRlbXMiLCJocmVmIiwibmFtZSIsImZvb3RlciIsImRpdiIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwiYWxpZ25JdGVtcyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJ1bCIsImg0IiwiZWwiLCJsaSIsImEiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiYm9yZGVyUmFkaXVzIiwidHlwZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Footer.js\n"));

/***/ })

});