"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [287], {
        6132: function (e, t, r) {
            var a = r(5893),
                s = r(9008),
                n = r.n(s);
            t.Z = e => {
                let {
                    data: t
                } = e, r = t.meta_title ? t.meta_title : t.title ? "DGM | ".concat(t.title) : "Pebble Mobility";
                return (0, a.jsxs)(n(), {
                    children: [(0, a.jsx)("title", {
                        children: r
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: r
                    }, "title"), (0, a.jsx)("meta", {
                        property: "og:site_name",
                        content: "Pebble"
                    }), t.meta_description && (0, a.jsx)("meta", {
                        name: "description",
                        content: t.meta_description
                    }), t.meta_image && t.meta_image.url && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("meta", {
                            property: "og:image",
                            content: t.meta_image.url
                        }), (0, a.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/jpg"
                        }), (0, a.jsx)("meta", {
                            property: "og:image:width",
                            content: t.meta_image.dimensions.width
                        }), (0, a.jsx)("meta", {
                            property: "og:image:height",
                            content: t.meta_image.dimensions.height
                        })]
                    }), (0, a.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, a.jsx)("meta", {
                        name: "theme-color",
                        content: "#d7d1c6"
                    }), (0, a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    })]
                })
            }
        },
        6009: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return m
                }
            });
            var a = r(5893),
                s = r(8266),
                n = r(7294),
                l = r(6038),
                i = r(4347),
                o = r.n(i),
                c = r(1831),
                d = () => (0, a.jsxs)("svg", {
                    width: "286",
                    height: "286",
                    viewBox: "0 0 286 286",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsxs)("g", {
                        clipPath: "url(#clip0_4489_62323)",
                        children: [(0, a.jsxs)("mask", {
                            id: "mask0_4489_62323",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "18",
                            y: "-49",
                            width: "271",
                            height: "203",
                            children: [(0, a.jsx)("rect", {
                                x: "224",
                                y: "14.5488",
                                width: "194.476",
                                height: "73.7032",
                                transform: "rotate(149.564 224 14.5488)",
                                fill: "url(#paint0_linear_4489_62323)"
                            }), (0, a.jsx)("rect", {
                                x: "167",
                                y: "-19",
                                width: "122",
                                height: "173",
                                fill: "#D9D9D9"
                            })]
                        }), (0, a.jsx)("g", {
                            mask: "url(#mask0_4489_62323)",
                            children: (0, a.jsx)("path", {
                                opacity: "0.15",
                                d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                                stroke: "#575349"
                            })
                        })]
                    }), (0, a.jsxs)("defs", {
                        children: [(0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_4489_62323",
                            x1: "418.476",
                            y1: "88.252",
                            x2: "224",
                            y2: "88.252",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                stopColor: "#F2EFE9",
                                stopOpacity: "0"
                            }), (0, a.jsx)("stop", {
                                offset: "1",
                                stopColor: "#F2EFE9"
                            })]
                        }), (0, a.jsx)("clipPath", {
                            id: "clip0_4489_62323",
                            children: (0, a.jsx)("rect", {
                                width: "286",
                                height: "286",
                                fill: "white"
                            })
                        })]
                    })]
                }),
                u = r(4319),
                h = r(6546),
                p = r(4508),
                m = e => {
                    let {
                        index: t,
                        slicesLength: r = 1,
                        simple: i = !1,
                        children: m
                    } = e, f = (0, n.useRef)(), x = (0, n.useRef)(), w = (0, n.useRef)(), g = (0, n.useRef)(), j = (0, n.useRef)(), C = (0, n.useRef)(), v = (0, n.useRef)(), y = (0, n.useRef)(), _ = (0, n.useRef)(), b = (0, n.useRef)(), N = (0, n.useRef)(0), L = (0, p.LZ)(), A = (0, s.o)(e => e.startTransition), E = (0, s.o)(e => e.setIsAppear), R = (0, s.o)(e => e.isLoaded), k = (0, s.o)(e => e.isFirstLoaded), T = (0, s.o)(e => e.setCursorHidden), P = () => {
                        y.current && l.p8.set(y.current, {
                            x: window.innerWidth / 2 - 42 - 5,
                            y: window.innerHeight / 2 - 40.5,
                            transformOrigin: "center",
                            rotate: -90,
                            scale: 0
                        })
                    }, S = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = document.querySelector(".fade");
                        t.classList.remove("opacity-0");
                        let r = l.p8.timeline({
                            delay: e ? .5 : .2,
                            onStart: () => {
                                if (e) {
                                    let e = document.querySelector(".loader");
                                    e && l.p8.set(e, {
                                        autoAlpha: 0
                                    })
                                }
                            },
                            onComplete: () => {
                                window.dispatchEvent(new CustomEvent("is-appeared")), L && L.start(), h.ScrollTrigger.refresh()
                            }
                        });
                        r.fromTo(t, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: .4,
                            ease: "power2.out"
                        }, 0).call(() => {
                            E(!0)
                        }, [], 0)
                    }, M = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        P();
                        let t = document.querySelector(".fade"),
                            r = document.querySelector(".loader");
                        v.current && v.current.classList.remove("hidden");
                        let a = window.innerWidth / 83,
                            s = window.innerHeight / 80,
                            n = w.current.querySelectorAll("path"),
                            i = l.p8.timeline({
                                delay: .1,
                                onStart: () => {
                                    l.p8.set([t, r], {
                                        autoAlpha: 0
                                    }), T(!0)
                                },
                                onComplete: () => {
                                    window.dispatchEvent(new CustomEvent("is-appeared")), L && L.start(), h.ScrollTrigger.refresh(), e && window.dispatchEvent(new CustomEvent("introduction-complete")), x.current && (x.current.style.clipPath = null), v.current && v.current.classList.add("hidden"), _.current && _.current.classList.add("hidden")
                                }
                            });
                        i.addLabel("start", 0), e && i.fromTo(N, {
                            current: 0
                        }, {
                            current: 100,
                            ease: "linear",
                            duration: 2.5,
                            onUpdate: () => {
                                b.current.innerHTML = N.current < 100 ? "0" + Math.round(N.current) : Math.round(N.current)
                            }
                        }, 0), i.fromTo(w.current, {
                            rotate: 120,
                            autoAlpha: 0,
                            scale: .2
                        }, {
                            rotate: 0,
                            scale: 1,
                            autoAlpha: 1,
                            ease: "expo.out",
                            duration: 1.9
                        }, "start").fromTo(n, {
                            scale: .1
                        }, {
                            scale: 1,
                            ease: "expo.out",
                            duration: .95
                        }, "start+=0.12").fromTo(g.current, {
                            scale: .45,
                            autoAlpha: 0
                        }, {
                            scale: 1,
                            autoAlpha: 1,
                            ease: "power2.out",
                            duration: 2
                        }, "start").fromTo(g.current, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            ease: "power2.out",
                            duration: 1.2
                        }, "start"), i.fromTo(y.current, {
                            rotate: -90,
                            scale: 0
                        }, {
                            scale: (a > s ? a : s) + 8,
                            rotate: "+=70",
                            duration: 2,
                            ease: "beaucoup.intro"
                        }, e ? "start+=2.7" : "start+=1.5").to([g.current, w.current], {
                            autoAlpha: 0,
                            ease: "power2.out",
                            duration: .4
                        }, "<30%").call(() => {
                            E(!0)
                        }, [], e ? "start+=3.1" : "start+=1.9");
                        let o = l.p8.timeline({
                            delay: .1
                        });
                        e ? o.to(j.current, {
                            rotate: "+=360",
                            repeat: 2,
                            ease: "slow(0.2, 0.67)",
                            repeatRefresh: !0,
                            duration: 2.2
                        }, 0).fromTo(C.current, {
                            rotate: -80
                        }, {
                            rotate: "+=360",
                            repeatRefresh: !0,
                            ease: "slow(0.05, 0.6)",
                            repeat: 2,
                            duration: 2.4
                        }, .12) : o.to(j.current, {
                            rotate: "+=360",
                            repeat: 2,
                            ease: "slow(0.2, 0.67)",
                            repeatRefresh: !0,
                            duration: 1.9
                        }, 0).fromTo(C.current, {
                            rotate: -80
                        }, {
                            rotate: "+=360",
                            repeatRefresh: !0,
                            ease: "slow(0.05, 0.6)",
                            repeat: 2,
                            duration: 2.1
                        }, .12)
                    };
                    return (0, n.useEffect)(() => {
                        l.p8.registerPlugin(u.SlowMo), l.p8.registerPlugin(o()), o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"), k && _.current && _.current.classList.add("hidden")
                    }, []), (0, n.useEffect)(() => {
                        R && !k ? (L && L.stop(), f.current ? S(!0) : M(!0)) : R || P()
                    }, [R, k]), (0, n.useEffect)(() => {
                        if (f.current) {
                            S();
                            return
                        }
                        A && M()
                    }, [A]), 0 !== t || i ? (0, a.jsx)("div", {
                        ref: f,
                        className: "simple-transition-path",
                        children: m
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                            children: (0, a.jsx)("div", {
                                ref: w,
                                className: "svg-wrapper w-[4.267rem]",
                                children: (0, a.jsxs)("svg", {
                                    width: "60",
                                    height: "60",
                                    viewBox: "0 0 599 604",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, n.jsx)("path", {
                                        d: "M504.283 99.441L558.673 192.572C561.567 197.527 559.441 203.896 554.152 206.12L300.679 312.688C292.99 315.921 285.165 308.384 288.108 300.579L342.099 157.378C343.05 154.855 345.028 152.855 347.541 151.877L492.632 95.3795C496.986 93.6841 501.926 95.4064 504.283 99.441Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M297.036 9.05634L401.595 35.4992C407.158 36.9061 410.213 42.8857 408.094 48.218L306.538 303.74C303.457 311.491 292.597 311.793 289.09 304.225L224.742 165.37C223.609 162.923 223.568 160.111 224.63 157.632L285.975 14.5235C287.816 10.2291 292.507 7.91077 297.036 9.05634Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M89.9343 105.498L181.464 48.4537C186.334 45.4187 192.762 47.3606 195.137 52.5841L308.943 302.89C312.395 310.483 305.087 318.521 297.2 315.804L152.507 265.95C149.958 265.072 147.902 263.152 146.852 260.668L86.2092 117.26C84.3894 112.957 85.969 107.969 89.9343 105.498Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M7.8003 312.717L30.3554 207.252C31.5554 201.641 37.4179 198.366 42.825 200.287L301.93 292.316C309.79 295.108 310.494 305.949 303.061 309.734L166.682 379.177C164.28 380.4 161.47 380.545 158.954 379.575L13.673 323.568C9.31345 321.888 6.82316 317.286 7.8003 312.717Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M99.3806 512.987L42.0502 421.636C39 416.776 40.9218 410.342 46.1378 407.95L296.086 293.361C303.669 289.885 311.729 297.169 309.037 305.064L259.636 449.912C258.766 452.464 256.852 454.526 254.372 455.584L111.155 516.675C106.857 518.508 101.864 516.944 99.3806 512.987Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M308.678 595.727L203.249 573.001C197.64 571.792 194.374 565.924 196.304 560.52L288.753 301.564C291.558 293.709 302.4 293.022 306.173 300.462L375.394 436.953C376.614 439.358 376.754 442.167 375.78 444.681L319.538 589.872C317.85 594.229 313.245 596.711 308.678 595.727Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M508.774 509.896L416.247 565.309C411.325 568.257 404.932 566.202 402.65 560.937L293.298 308.653C289.981 301 297.431 293.093 305.268 295.949L449.054 348.36C451.588 349.283 453.609 351.239 454.615 353.741L512.707 498.201C514.45 502.536 512.782 507.495 508.774 509.896Z",
                                        fill: "#FF6200"
                                    }), (0, n.jsx)("path", {
                                        d: "M590.535 294.53L566.085 399.573C564.784 405.161 558.864 408.33 553.492 406.313L296.086 309.633C288.277 306.7 287.768 295.848 295.268 292.197L432.875 225.221C435.3 224.041 438.111 223.947 440.609 224.962L584.859 283.576C589.187 285.334 591.594 289.98 590.535 294.53Z",
                                        fill: "#FF6200"
                                    })]
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            ref: g,
                            className: "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                            children: [(0, a.jsxs)("div", {
                                className: "absolute w-full h-full",
                                ref: j,
                                children: [(0, a.jsx)("div", {
                                    className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                    children: (0, a.jsx)(c.Z, {
                                        color: "#A39B8B"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                    children: (0, a.jsx)(d, {})
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "absolute w-full h-full",
                                ref: C,
                                children: [(0, a.jsx)("div", {
                                    className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                    children: (0, a.jsx)(c.Z, {
                                        color: "#A39B8B"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                    children: (0, a.jsx)(d, {})
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            ref: _,
                            className: "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-light_beige",
                            children: [(0, a.jsx)("span", {
                                ref: b,
                                children: "000"
                            }), (0, a.jsx)("span", {
                                children: "/"
                            }), (0, a.jsx)("span", {
                                children: "100"
                            })]
                        }), (0, a.jsxs)("div", {
                            style: {
                                clipPath: "url(#svgPath)",
                                backfaceVisibility: "hidden",
                                transform: "translate3d(0, 0, 0)",
                                zIndex: r - t
                            },
                            ref: x,
                            className: "transition-path relative",
                            children: [(0, a.jsx)("div", {
                                className: "absolute top-0 left-0 w-full h-screen pointer-events-none",
                                children: (0, a.jsx)("div", {
                                    ref: v,
                                    className: "absolute top-0 left-0 w-full h-full hidden z-1",
                                    children: (0, a.jsx)("svg", {
                                        width: "84",
                                        height: "81",
                                        className: "w-full h-full",
                                        children: (0, a.jsx)("defs", {
                                            children: (0, a.jsx)("clipPath", {
                                                id: "svgPath",
                                                children: (0, a.jsx)("path", {
                                                    ref: y,
                                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), m]
                        })]
                    })
                }
        }
    }
]);