(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ comps_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "google-maps-react"
const external_google_maps_react_namespaceObject = require("google-maps-react");
;// CONCATENATED MODULE: ./comps/Gmaps.js



class Gmaps extends external_react_.Component {
    render() {
        const coords = {
            lat: 40.330388,
            lng: -73.981526
        };
        const MONMOUTH_COUNTY_BOUNDS = {
            north: 40.29,
            west: -74.15
        };
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                maxHeight: "300px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Map, {
                className: "gmap_map",
                google: this.props.google,
                style: {
                    width: "300px",
                    height: "200px",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                },
                zoom: 10,
                initialCenter: {
                    lat: 40.330388,
                    lng: -73.981526
                },
                restriction: {
                    latLngBounds: MONMOUTH_COUNTY_BOUNDS,
                    strictBounds: true
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Circle, {
                    radius: 10000,
                    center: coords,
                    onMouseover: ()=>console.log("mouseover"),
                    onClick: ()=>console.log("click"),
                    onMouseout: ()=>console.log("mouseout"),
                    strokeColor: "transparent",
                    strokeOpacity: 0,
                    strokeWeight: 5,
                    fillColor: "#FF0000",
                    fillOpacity: 0.2
                })
            })
        });
    }
}
/* harmony default export */ const comps_Gmaps = ((0,external_google_maps_react_namespaceObject.GoogleApiWrapper)({
    apiKey: "AIzaSyADaZ17gHP5P7vFvjUajEcJpbvxxBdCoYY"
})(Gmaps));

;// CONCATENATED MODULE: ./comps/Footer.js




const Footer = ()=>{
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: "javascript:void()",
                    name: "Partners"
                },
                {
                    href: "javascript:void()",
                    name: "Blog"
                },
                {
                    href: "javascript:void()",
                    name: "Team"
                },
                {
                    href: "javascript:void()",
                    name: "Careers"
                }
            ]
        },
        {
            label: "Resources",
            items: [
                {
                    href: "javascript:void()",
                    name: "contact"
                },
                {
                    href: "javascript:void()",
                    name: "Support"
                },
                {
                    href: "javascript:void()",
                    name: "Docs"
                },
                {
                    href: "javascript:void()",
                    name: "Pricing"
                }
            ]
        },
        {
            label: "About",
            items: [
                {
                    href: "javascript:void()",
                    name: "Terms"
                },
                {
                    href: "javascript:void()",
                    name: "License"
                },
                {
                    href: "javascript:void()",
                    name: "Privacy"
                },
                {
                    href: "javascript:void()",
                    name: "About US"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "jsx-22a2089a5d03b795" + " " + "text-slate-50 bg-slate-950  px-4 py-4 max-w-screen-xl mx-auto md:px-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-22a2089a5d03b795" + " " + "gap-6 justify-between md:flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-22a2089a5d03b795" + " " + "flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-22a2089a5d03b795" + " " + " flex row items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/ninjas_logo.svg",
                                        style: {
                                            width: "30px",
                                            height: "30px"
                                        },
                                        alt: "logo",
                                        width: 40,
                                        height: 40
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontWeight: "600",
                                            paddingLeft: "6px"
                                        },
                                        className: "jsx-22a2089a5d03b795" + " " + "leading-relaxed text-green-500 mt-2 text-xl",
                                        children: "Canna                    "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-22a2089a5d03b795",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-22a2089a5d03b795" + " " + "leading-relaxed text-slate-50 max-w-xs mt-2 text-base",
                                        children: "\uD83D\uDCF1: +1(201)328-7539"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-22a2089a5d03b795" + " " + "leading-relaxed text-slate-50 max-w-xs mt-2 text-base",
                                        children: "✉️: canna@01ninjas.com"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-22a2089a5d03b795" + " " + "flex-1 text-slate-50 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0",
                        children: footerNavs.map((item, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "jsx-22a2089a5d03b795" + " " + "space-y-4  ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "jsx-22a2089a5d03b795" + " " + "text-green-500 text-xs",
                                        children: item.label
                                    }),
                                    item.items.map((el, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-22a2089a5d03b795",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: el.href,
                                                className: "jsx-22a2089a5d03b795" + " " + "hover:underline hover:text-green-500 text-white",
                                                children: el.name
                                            })
                                        }, idx))
                                ]
                            }, idx))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        className: "jsx-22a2089a5d03b795" + " " + "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: (e)=>e.preventDefault(),
                            className: "jsx-22a2089a5d03b795",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "jsx-22a2089a5d03b795" + " " + "block pt-4 pb-2",
                                    children: "Stay up to date"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-22a2089a5d03b795" + " " + "max-w-sm flex items-center  rounded p-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            style: {
                                                borderRadius: "5px 0 0 5px"
                                            },
                                            type: "email",
                                            placeholder: "Enter your email",
                                            className: "jsx-22a2089a5d03b795" + " " + "w-full p-2.5 outline-non bg-slate-50 text-black"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            style: {
                                                borderRadius: "0 5px 5px 0"
                                            },
                                            className: "jsx-22a2089a5d03b795" + " " + "p-2.5  text-white bg-green-500 outline-none shadow-md focus:shadow-none sm:px-5",
                                            children: "Subscribe"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-22a2089a5d03b795" + " " + "mt-8 py-6 border-t text-xs text-slate-400 items-center justify-between sm:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-22a2089a5d03b795" + " " + "mt-4 sm:mt-0",
                    children: "\xa9 2023 Canna All rights reserved."
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "22a2089a5d03b795",
                children: ".svg-icon.jsx-22a2089a5d03b795 path.jsx-22a2089a5d03b795,.svg-icon.jsx-22a2089a5d03b795 polygon.jsx-22a2089a5d03b795,.svg-icon.jsx-22a2089a5d03b795 rect.jsx-22a2089a5d03b795{fill:currentColor}"
            })
        ]
    });
};
/* harmony default export */ const comps_Footer = (Footer);


/***/ }),

/***/ 8985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4156);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6080);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_7__]);
framer_motion__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function HideOnScroll({ children  }) {
    const trigger = _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Slide__WEBPACK_IMPORTED_MODULE_3___default()), {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children
    });
}
const Navbar = ()=>{
    // const [clientWindowHeight, setClientWindowHeight] = useState("");
    // const [isScrolled, setIsScrolled] = useState(false);
    // const handleScroll = () => {
    //   setClientWindowHeight(window.scrollY);
    //   setIsScrolled(window.scrollY > 0);
    // };
    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    // const [show, setShow] = useState(false);
    // const handleShow = () => {
    //   setShow(!show);
    // };
    // const [boxShadow, setBoxShadow] = useState(0);
    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const changeBackground = ()=>{
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        window.addEventListener("scroll", changeBackground);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HideOnScroll, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: navbar ? "navbar active" : "navbar",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "navbar-start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        tabIndex: 0,
                                        className: "btn btn-ghost lg:hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M4 6h16M4 12h8m-8 6h16"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        style: {
                                            color: "#000 !important"
                                        },
                                        tabIndex: 0,
                                        className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box w-52",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "p-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: "Submenu 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: "Submenu 2"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/about",
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Pricing"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Demo"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingLeft: "2rem"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        src: "/ninjas_logo.svg",
                                        style: {
                                            width: "30px",
                                            height: "30px"
                                        },
                                        alt: "logo",
                                        width: 40,
                                        height: 40
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "rgb(34 197 94)",
                                            fontWeight: "600",
                                            paddingLeft: "6px"
                                        },
                                        className: "text-xl",
                                        children: "Canna"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "navbar-center hidden lg:flex",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "menu menu-horizontal px-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    tabIndex: 0,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "p-2 bg-green-500",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: "Submenu 1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: "Submenu 2"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/about",
                                        children: "About us"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "Pricing"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "Demo"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "navbar-end ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            style: {
                                marginRight: "2rem"
                            },
                            className: "rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                            children: "Join us"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8985);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_comps_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_comps_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_comps_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                strategy: "afterInteractive",
                src: "https://www.googletagmanager.com/gtag/js?id=G-MYBLBE82C9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                id: "google-analytics",
                strategy: "afterInteractive",
                children: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-MYBLBE82C9');
        `
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1658:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7372:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 6080:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 4156:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useScrollTrigger");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,835], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();