(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[307], {
		4319: function (e, t) {
			! function (e) {
				"use strict";
				/*!
				 * EasePack 3.12.2
				 * https://greensock.com
				 *
				 * @license Copyright 2008-2023, GreenSock. All rights reserved.
				 * Subject to the terms at https://greensock.com/standard-license or for
				 * Club GreenSock members, the agreement issued with that membership.
				 * @author: Jack Doyle, jack@greensock.com
				 */
				var t, r, n = function () {
						return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
					},
					a = function (e, t) {
						return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"))
					},
					s = function (e) {
						if (t = e || n()) {
							r = t.registerEase;
							var a, s = t.parseEase(),
								i = function (e) {
									return function (t) {
										var r = .5 + t / 2;
										e.config = function (t) {
											return e(2 * (1 - t) * t * r + t * t)
										}
									}
								};
							for (a in s) s[a].config || i(s[a]);
							for (a in r("slow", u), r("expoScale", d), r("rough", f), p) "version" !== a && t.core.globals(a, p[a])
						}
					},
					i = function (e, t, r) {
						var n = (e = Math.min(1, e || .7)) < 1 ? t || 0 === t ? t : .7 : 0,
							s = (1 - e) / 2,
							i = s + e,
							l = a(r);
						return function (e) {
							var t = e + (.5 - e) * n;
							return e < s ? l ? 1 - (e = 1 - e / s) * e : t - (e = 1 - e / s) * e * e * e * t : e > i ? l ? 1 === e ? 0 : 1 - (e = (e - i) / s) * e : t + (e - t) * (e = (e - i) / s) * e * e * e : l ? 1 : t
						}
					},
					l = function (e, r, n) {
						var a = Math.log(r / e),
							s = r - e;
						return n && (n = t.parseEase(n)),
							function (t) {
								return (e * Math.exp(a * (n ? n(t) : t)) - e) / s
							}
					},
					o = function (e, t, r) {
						this.t = e, this.v = t, r && (this.next = r, r.prev = this, this.c = r.v - t, this.gap = r.t - e)
					},
					c = function (e) {
						"object" != typeof e && (e = {
							points: +e || 20
						});
						for (var r, n, s, i, l, c, u, d = e.taper || "none", f = [], p = 0, h = 0 | (+e.points || 20), m = h, x = a(e.randomize, !0), g = a(e.clamp), v = t ? t.parseEase(e.template) : 0, w = .4 * (+e.strength || 1); --m > -1;) r = x ? Math.random() : 1 / h * m, n = v ? v(r) : r, s = "none" === d ? w : "out" === d ? (i = 1 - r) * i * w : "in" === d ? r * r * w : r < .5 ? (i = 2 * r) * i * .5 * w : (i = (1 - r) * 2) * i * .5 * w, x ? n += Math.random() * s - .5 * s : m % 2 ? n += .5 * s : n -= .5 * s, g && (n > 1 ? n = 1 : n < 0 && (n = 0)), f[p++] = {
							x: r,
							y: n
						};
						for (f.sort(function (e, t) {
								return e.x - t.x
							}), c = new o(1, 1, null), m = h; m--;) l = f[m], c = new o(l.x, l.y, c);
						return u = new o(0, 0, c.t ? c : c.next),
							function (e) {
								var t = u;
								if (e > t.t) {
									for (; t.next && e >= t.t;) t = t.next;
									t = t.prev
								} else
									for (; t.prev && e <= t.t;) t = t.prev;
								return u = t, t.v + (e - t.t) / t.gap * t.c
							}
					},
					u = i(.7);
				u.ease = u, u.config = i;
				var d = l(1, 2);
				d.config = l;
				var f = c();
				f.ease = f, f.config = c;
				var p = {
					SlowMo: u,
					RoughEase: f,
					ExpoScaleEase: d
				};
				for (var h in p) p[h].register = s, p[h].version = "3.12.2";
				n() && t.registerPlugin(u), e.EasePack = p, e.ExpoScaleEase = d, e.RoughEase = f, e.SlowMo = u, e.default = p, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t)
		},
		640: function (e, t, r) {
			"use strict";
			var n = r(5893),
				a = r(7294),
				s = r(4179),
				i = r(6038);
			let l = (0, a.forwardRef)((e, t) => {
				let {
					children: l,
					href: o,
					target: c,
					mode: u = "white",
					...d
				} = e, f = (0, a.useRef)(null), p = (0, a.useRef)(null), h = (0, a.useRef)(null);
				(0, a.useImperativeHandle)(t, () => ({
					getChars: m,
					getAnimation: x
				}));
				let m = () => p.current,
					x = () => g(),
					g = () => (h.current = i.p8.effects.blink(p.current), h.current),
					v = () => {
						g()
					};
				return (0, a.useEffect)(() => (f.current.addEventListener("mouseenter", v), () => {
					f.current && f.current.removeEventListener("mouseenter", v)
				}), []), (0, a.useEffect)(() => {
					let e = r(8041);
					p.current = new e({
						target: f.current,
						by: "chars"
					})[0].chars
				}, []), (0, n.jsx)("div", {
					ref: f,
					children: (0, n.jsx)(s.Z, {
						href: o,
						target: c,
						className: "button-" + u + " inline-block py-[2.4rem] px-[2.5rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
						...d,
						children: l
					})
				})
			});
			l.displayName = "Button", t.Z = l
		},
		6892: function (e, t, r) {
			"use strict";
			var n = r(5893),
				a = r(7294),
				s = r(6546),
				i = r(8266),
				l = r(2099);
			t.Z = e => {
				let {
					children: t,
					sticky: r = !1,
					zIndex: o = 0
				} = e, c = (0, a.useRef)(null), u = (0, a.useRef)(null), d = (0, i.o)(e => e.headerLoaded), f = (0, i.o)(e => e.setHeaderDark);
				return (0, a.useEffect)(() => {
					if (!d) return;
					let e = document.querySelector(".header");
					return r ? u.current = s.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
						end: () => "bottom-=".concat((0, l.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							f(!0)
						},
						onLeave: () => {
							f(!1)
						},
						onEnterBack: () => {
							f(!0)
						},
						onLeaveBack: () => {
							f(!1)
						}
					}) : u.current = s.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
						end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							f(!0)
						},
						onLeave: () => {
							f(!1)
						},
						onEnterBack: () => {
							f(!0)
						},
						onLeaveBack: () => {
							f(!1)
						}
					}), () => {
						u.current && (u.current.kill(), u.current = null), f(!1)
					}
				}, [d]), (0, n.jsx)("div", {
					ref: c,
					style: {
						zIndex: o
					},
					className: "relative w-full",
					children: t
				})
			}
		},
		6009: function (e, t, r) {
			"use strict";
			r.d(t, {
				Z: function () {
					return h
				}
			});
			var n = r(5893),
				a = r(8266),
				s = r(7294),
				i = r(6038),
				l = r(4347),
				o = r.n(l),
				c = r(1831),
				u = () => (0, n.jsxs)("svg", {
					width: "286",
					height: "286",
					viewBox: "0 0 286 286",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, n.jsxs)("g", {
						clipPath: "url(#clip0_4489_62323)",
						children: [(0, n.jsxs)("mask", {
							id: "mask0_4489_62323",
							style: {
								maskType: "alpha"
							},
							maskUnits: "userSpaceOnUse",
							x: "18",
							y: "-49",
							width: "271",
							height: "203",
							children: [(0, n.jsx)("rect", {
								x: "224",
								y: "14.5488",
								width: "194.476",
								height: "73.7032",
								transform: "rotate(149.564 224 14.5488)",
								fill: "url(#paint0_linear_4489_62323)"
							}), (0, n.jsx)("rect", {
								x: "167",
								y: "-19",
								width: "122",
								height: "173",
								fill: "#D9D9D9"
							})]
						}), (0, n.jsx)("g", {
							mask: "url(#mask0_4489_62323)",
							children: (0, n.jsx)("path", {
								opacity: "0.15",
								d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
								stroke: "#575349"
							})
						})]
					}), (0, n.jsxs)("defs", {
						children: [(0, n.jsxs)("linearGradient", {
							id: "paint0_linear_4489_62323",
							x1: "418.476",
							y1: "88.252",
							x2: "224",
							y2: "88.252",
							gradientUnits: "userSpaceOnUse",
							children: [(0, n.jsx)("stop", {
								stopColor: "#F2EFE9",
								stopOpacity: "0"
							}), (0, n.jsx)("stop", {
								offset: "1",
								stopColor: "#F2EFE9"
							})]
						}), (0, n.jsx)("clipPath", {
							id: "clip0_4489_62323",
							children: (0, n.jsx)("rect", {
								width: "286",
								height: "286",
								fill: "white"
							})
						})]
					})]
				}),
				d = r(4319),
				f = r(6546),
				p = r(4508),
				h = e => {
					let {
						index: t,
						slicesLength: r = 1,
						simple: l = !1,
						children: h
					} = e, m = (0, s.useRef)(), x = (0, s.useRef)(), g = (0, s.useRef)(), v = (0, s.useRef)(), w = (0, s.useRef)(), j = (0, s.useRef)(), y = (0, s.useRef)(), C = (0, s.useRef)(), b = (0, s.useRef)(), E = (0, s.useRef)(), k = (0, s.useRef)(0), L = (0, p.LZ)(), N = (0, a.o)(e => e.startTransition), _ = (0, a.o)(e => e.setIsAppear), R = (0, a.o)(e => e.isLoaded), M = (0, a.o)(e => e.isFirstLoaded), S = (0, a.o)(e => e.setCursorHidden), B = () => {
						C.current && i.p8.set(C.current, {
							x: window.innerWidth / 2 - 42 - 5,
							y: window.innerHeight / 2 - 40.5,
							transformOrigin: "center",
							rotate: -90,
							scale: 0
						})
					}, T = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = document.querySelector(".fade");
						t.classList.remove("opacity-0");
						let r = i.p8.timeline({
							delay: e ? .5 : .2,
							onStart: () => {
								if (e) {
									let e = document.querySelector(".loader");
									e && i.p8.set(e, {
										autoAlpha: 0
									})
								}
							},
							onComplete: () => {
								window.dispatchEvent(new CustomEvent("is-appeared")), L && L.start(), f.ScrollTrigger.refresh()
							}
						});
						r.fromTo(t, {
							autoAlpha: 1
						}, {
							autoAlpha: 0,
							duration: .4,
							ease: "power2.out"
						}, 0).call(() => {
							_(!0)
						}, [], 0)
					}, A = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						B();
						let t = document.querySelector(".fade"),
							r = document.querySelector(".loader");
						y.current && y.current.classList.remove("hidden");
						let n = window.innerWidth / 83,
							a = window.innerHeight / 80,
							s = g.current.querySelectorAll("path"),
							l = i.p8.timeline({
								delay: .1,
								onStart: () => {
									i.p8.set([t, r], {
										autoAlpha: 0
									}), S(!0)
								},
								onComplete: () => {
									window.dispatchEvent(new CustomEvent("is-appeared")), L && L.start(), f.ScrollTrigger.refresh(), e && window.dispatchEvent(new CustomEvent("introduction-complete")), x.current && (x.current.style.clipPath = null), y.current && y.current.classList.add("hidden"), b.current && b.current.classList.add("hidden")
								}
							});
						l.addLabel("start", 0), e && l.fromTo(k, {
							current: 0
						}, {
							current: 100,
							ease: "linear",
							duration: 2.5,
							onUpdate: () => {
								E.current.innerHTML = k.current < 100 ? "0" + Math.round(k.current) : Math.round(k.current)
							}
						}, 0), l.fromTo(g.current, {
							rotate: 120,
							autoAlpha: 0,
							scale: .2
						}, {
							rotate: 0,
							scale: 1,
							autoAlpha: 1,
							ease: "expo.out",
							duration: 1.9
						}, "start").fromTo(s, {
							scale: .1
						}, {
							scale: 1,
							ease: "expo.out",
							duration: .95
						}, "start+=0.12").fromTo(v.current, {
							scale: .45,
							autoAlpha: 0
						}, {
							scale: 1,
							autoAlpha: 1,
							ease: "power2.out",
							duration: 2
						}, "start").fromTo(v.current, {
							autoAlpha: 0
						}, {
							autoAlpha: 1,
							ease: "power2.out",
							duration: 1.2
						}, "start"), l.fromTo(C.current, {
							rotate: -90,
							scale: 0
						}, {
							scale: (n > a ? n : a) + 8,
							rotate: "+=70",
							duration: 2,
							ease: "beaucoup.intro"
						}, e ? "start+=2.7" : "start+=1.5").to([v.current, g.current], {
							autoAlpha: 0,
							ease: "power2.out",
							duration: .4
						}, "<30%").call(() => {
							_(!0)
						}, [], e ? "start+=3.1" : "start+=1.9");
						let o = i.p8.timeline({
							delay: .1
						});
						e ? o.to(w.current, {
							rotate: "+=360",
							repeat: 2,
							ease: "slow(0.2, 0.67)",
							repeatRefresh: !0,
							duration: 2.2
						}, 0).fromTo(j.current, {
							rotate: -80
						}, {
							rotate: "+=360",
							repeatRefresh: !0,
							ease: "slow(0.05, 0.6)",
							repeat: 2,
							duration: 2.4
						}, .12) : o.to(w.current, {
							rotate: "+=360",
							repeat: 2,
							ease: "slow(0.2, 0.67)",
							repeatRefresh: !0,
							duration: 1.9
						}, 0).fromTo(j.current, {
							rotate: -80
						}, {
							rotate: "+=360",
							repeatRefresh: !0,
							ease: "slow(0.05, 0.6)",
							repeat: 2,
							duration: 2.1
						}, .12)
					};
					return (0, s.useEffect)(() => {
						i.p8.registerPlugin(d.SlowMo), i.p8.registerPlugin(o()), o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"), M && b.current && b.current.classList.add("hidden")
					}, []), (0, s.useEffect)(() => {
						R && !M ? (L && L.stop(), m.current ? T(!0) : A(!0)) : R || B()
					}, [R, M]), (0, s.useEffect)(() => {
						if (m.current) {
							T();
							return
						}
						N && A()
					}, [N]), 0 !== t || l ? (0, n.jsx)("div", {
						ref: m,
						className: "simple-transition-path",
						children: h
					}) : (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							children: (0, n.jsx)("div", {
								ref: g,
								className: "svg-wrapper w-[4.267rem]",
								children: (0, n.jsxs)("svg", {
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
						}), (0, n.jsxs)("div", {
							ref: v,
							className: "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							children: [(0, n.jsxs)("div", {
								className: "absolute w-full h-full",
								ref: w,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(c.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(u, {})
								})]
							}), (0, n.jsxs)("div", {
								className: "absolute w-full h-full",
								ref: j,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(c.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(u, {})
								})]
							})]
						}), (0, n.jsxs)("div", {
							ref: b,
							className: "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-light_beige",
							children: [(0, n.jsx)("span", {
								ref: E,
								children: "000"
							}), (0, n.jsx)("span", {
								children: "/"
							}), (0, n.jsx)("span", {
								children: "100"
							})]
						}), (0, n.jsxs)("div", {
							style: {
								clipPath: "url(#svgPath)",
								backfaceVisibility: "hidden",
								transform: "translate3d(0, 0, 0)",
								zIndex: r - t
							},
							ref: x,
							className: "transition-path relative",
							children: [(0, n.jsx)("div", {
								className: "absolute top-0 left-0 w-full h-screen pointer-events-none",
								children: (0, n.jsx)("div", {
									ref: y,
									className: "absolute top-0 left-0 w-full h-full hidden z-1",
									children: (0, n.jsx)("svg", {
										width: "84",
										height: "81",
										className: "w-full h-full",
										children: (0, n.jsx)("defs", {
											children: (0, n.jsx)("clipPath", {
												id: "svgPath",
												children: (0, n.jsx)("path", {
													ref: C,
													d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z"
												})
											})
										})
									})
								})
							}), h]
						})]
					})
				}
		},
		8307: function (e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				default: function () {
					return d
				}
			});
			var n = r(5893),
				a = r(640),
				s = r(6892),
				i = r(6009),
				l = () => (0, n.jsx)("svg", {
					width: "7",
					height: "11",
					viewBox: "0 0 7 11",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, n.jsxs)("g", {
						id: "Group 20639",
						children: [(0, n.jsx)("path", {
							id: "Vector 247",
							d: "M3.56762 0.628806V7.77202M3.56762 7.77202L0.800781 5.00518M3.56762 7.77202L6.33446 5.00518",
							stroke: "#575349"
						}), (0, n.jsx)("line", {
							id: "Line 318",
							x1: "0.800781",
							y1: "10.5",
							x2: "6.37012",
							y2: "10.5",
							stroke: "#575349"
						})]
					})
				}),
				o = r(8266),
				c = r(7294);
			let u = e => {
				let {
					slice: t,
					popup: r = !1
				} = e, i = (0, c.useRef)(null), u = (0, o.o)(e => e.setCursorHidden), d = () => {
					i.current.classList.remove("pointer-events-none")
				};
				return (0, c.useEffect)(() => (window.addEventListener("is-appeared", d), () => {
					window.removeEventListener("is-appeared", d)
				}), []), (0, n.jsx)(s.Z, {
					children: (0, n.jsxs)("section", {
						ref: i,
						className: "bg-white pb-[1.2rem] pointer-events-none",
						"data-slice-type": t.slice_type,
						"data-slice-variation": t.variation,
						onMouseEnter: () => {
							r || u(!1)
						},
						children: ["default" === t.variation && (0, n.jsxs)("div", {
							className: "mx-container border-b-dark_grey",
							children: [(0, n.jsx)("div", {
								className: "flex justify-center items-center pt-[20rem] mb-[17.1rem]",
								children: (0, n.jsx)("h1", {
									className: "heading-60 text-light_beige",
									children: t.primary.title
								})
							}), (0, n.jsx)("div", {
								className: "flex justify-start",
								children: (0, n.jsx)("div", {
									className: "font-body-mono text-light_beige uppercase",
									children: new Date(t.primary.date).toLocaleDateString("en", {
										month: "long",
										year: "2-digit",
										day: "2-digit"
									})
								})
							})]
						}), "coverWithButton" === t.variation && (0, n.jsxs)("div", {
							className: "flex flex-col justify-center items-center gap-y-[3.6rem] w-full pt-[22rem] pb-[16.4rem]",
							children: [(0, n.jsx)("h1", {
								className: "w-full lg:w-[43.5%] px-container lg:px-0 font-headings font-medium text-60 leading-[85%] -tracking-0.04 lg:text-160 lg:leading-[75%] lg:-tracking-0.06 text-light_beige text-center lowercase",
								children: t.primary.title
							}), (0, n.jsxs)(a.Z, {
								href: "".concat(t.primary.link.url),
								target: "_blank",
								mode: "light_beige",
								download: !0,
								children: [t.primary.link_title, (0, n.jsx)("span", {
									className: "ml-[0.8rem] inline-block align-middle",
									children: (0, n.jsx)(l, {})
								})]
							})]
						})]
					})
				})
			};
			var d = e => {
				let {
					slice: t,
					slices: r,
					index: a,
					context: s
				} = e;
				return s && s.popup ? (0, n.jsx)(u, {
					slice: t,
					popup: !0
				}) : (0, n.jsx)(i.Z, {
					index: a,
					slicesLength: r.length,
					simple: !0,
					children: (0, n.jsx)(u, {
						slice: t
					})
				})
			}
		}
	}
]);