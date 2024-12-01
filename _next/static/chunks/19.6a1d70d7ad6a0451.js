"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [19],
  {
    2692: function (e, r, t) {
      var n = t(5893);
      r.Z = (e) => {
        let { children: r, size: t = "small", blur: a = !0 } = e;
        return (0, n.jsx)("div", {
          className: "p-[1.8rem] lg:p-40\n  "
            .concat(
              a
                ? "backdrop-blur-[105px] text-white"
                : "bg-white text-light_beige",
              "\n  ",
            )
            .concat(
              "small" === t && a ? "w-[26.4rem] lg:w-[31rem]" : "",
              "\n  ",
            )
            .concat(
              "small" !== t || a ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]",
              "\n  ",
            )
            .concat(
              "small" !== t && a ? "w-[26.4rem] lg:w-[36.8rem]" : "",
              "\n  ",
            )
            .concat(
              "small" === t || a ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]",
              "\n  ",
            ),
          children: r,
        });
      };
    },
    6009: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return p;
        },
      });
      var n = t(5893),
        a = t(8266),
        l = t(7294),
        i = t(6038),
        s = t(4347),
        o = t.n(s),
        c = t(1831),
        u = () =>
          (0, n.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, n.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: {
                      maskType: "alpha",
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, n.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, n.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, n.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, n.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, n.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#F2EFE9",
                      }),
                    ],
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, n.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        d = t(4319),
        f = t(6546),
        h = t(4508),
        p = (e) => {
          let {
              index: r,
              slicesLength: t = 1,
              simple: s = !1,
              children: p,
            } = e,
            m = (0, l.useRef)(),
            g = (0, l.useRef)(),
            w = (0, l.useRef)(),
            x = (0, l.useRef)(),
            v = (0, l.useRef)(),
            y = (0, l.useRef)(),
            j = (0, l.useRef)(),
            b = (0, l.useRef)(),
            k = (0, l.useRef)(),
            C = (0, l.useRef)(),
            R = (0, l.useRef)(0),
            _ = (0, h.LZ)(),
            N = (0, a.o)((e) => e.startTransition),
            A = (0, a.o)((e) => e.setIsAppear),
            P = (0, a.o)((e) => e.isLoaded),
            E = (0, a.o)((e) => e.isFirstLoaded),
            L = (0, a.o)((e) => e.setCursorHidden),
            S = () => {
              b.current &&
                i.p8.set(b.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: -90,
                  scale: 0,
                });
            },
            T = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                r = document.querySelector(".fade");
              r.classList.remove("opacity-0");
              let t = i.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e &&
                      i.p8.set(e, {
                        autoAlpha: 0,
                      });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    _ && _.start(),
                    f.ScrollTrigger.refresh();
                },
              });
              t.fromTo(
                r,
                {
                  autoAlpha: 1,
                },
                {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                0,
              ).call(
                () => {
                  A(!0);
                },
                [],
                0,
              );
            },
            Z = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              S();
              let r = document.querySelector(".fade"),
                t = document.querySelector(".loader");
              j.current && j.current.classList.remove("hidden");
              let n = window.innerWidth / 83,
                a = window.innerHeight / 80,
                l = w.current.querySelectorAll("path"),
                s = i.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    i.p8.set([r, t], {
                      autoAlpha: 0,
                    }),
                      L(!0);
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      _ && _.start(),
                      f.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete"),
                        ),
                      g.current && (g.current.style.clipPath = null),
                      j.current && j.current.classList.add("hidden"),
                      k.current && k.current.classList.add("hidden");
                  },
                });
              s.addLabel("start", 0),
                e &&
                  s.fromTo(
                    R,
                    {
                      current: 0,
                    },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.5,
                      onUpdate: () => {
                        C.current.innerHTML =
                          R.current < 100
                            ? "0" + Math.round(R.current)
                            : Math.round(R.current);
                      },
                    },
                    0,
                  ),
                s
                  .fromTo(
                    w.current,
                    {
                      rotate: 120,
                      autoAlpha: 0,
                      scale: 0.2,
                    },
                    {
                      rotate: 0,
                      scale: 1,
                      autoAlpha: 1,
                      ease: "expo.out",
                      duration: 1.9,
                    },
                    "start",
                  )
                  .fromTo(
                    l,
                    {
                      scale: 0.1,
                    },
                    {
                      scale: 1,
                      ease: "expo.out",
                      duration: 0.95,
                    },
                    "start+=0.12",
                  )
                  .fromTo(
                    x.current,
                    {
                      scale: 0.45,
                      autoAlpha: 0,
                    },
                    {
                      scale: 1,
                      autoAlpha: 1,
                      ease: "power2.out",
                      duration: 2,
                    },
                    "start",
                  )
                  .fromTo(
                    x.current,
                    {
                      autoAlpha: 0,
                    },
                    {
                      autoAlpha: 1,
                      ease: "power2.out",
                      duration: 1.2,
                    },
                    "start",
                  ),
                s
                  .fromTo(
                    b.current,
                    {
                      rotate: -90,
                      scale: 0,
                    },
                    {
                      scale: (n > a ? n : a) + 8,
                      rotate: "+=70",
                      duration: 2,
                      ease: "beaucoup.intro",
                    },
                    e ? "start+=2.7" : "start+=1.5",
                  )
                  .to(
                    [x.current, w.current],
                    {
                      autoAlpha: 0,
                      ease: "power2.out",
                      duration: 0.4,
                    },
                    "<30%",
                  )
                  .call(
                    () => {
                      A(!0);
                    },
                    [],
                    e ? "start+=3.1" : "start+=1.9",
                  );
              let o = i.p8.timeline({
                delay: 0.1,
              });
              e
                ? o
                    .to(
                      v.current,
                      {
                        rotate: "+=360",
                        repeat: 2,
                        ease: "slow(0.2, 0.67)",
                        repeatRefresh: !0,
                        duration: 2.2,
                      },
                      0,
                    )
                    .fromTo(
                      y.current,
                      {
                        rotate: -80,
                      },
                      {
                        rotate: "+=360",
                        repeatRefresh: !0,
                        ease: "slow(0.05, 0.6)",
                        repeat: 2,
                        duration: 2.4,
                      },
                      0.12,
                    )
                : o
                    .to(
                      v.current,
                      {
                        rotate: "+=360",
                        repeat: 2,
                        ease: "slow(0.2, 0.67)",
                        repeatRefresh: !0,
                        duration: 1.9,
                      },
                      0,
                    )
                    .fromTo(
                      y.current,
                      {
                        rotate: -80,
                      },
                      {
                        rotate: "+=360",
                        repeatRefresh: !0,
                        ease: "slow(0.05, 0.6)",
                        repeat: 2,
                        duration: 2.1,
                      },
                      0.12,
                    );
            };
          return (
            (0, l.useEffect)(() => {
              i.p8.registerPlugin(d.SlowMo),
                i.p8.registerPlugin(o()),
                o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"),
                E && k.current && k.current.classList.add("hidden");
            }, []),
            (0, l.useEffect)(() => {
              P && !E ? (_ && _.stop(), m.current ? T(!0) : Z(!0)) : P || S();
            }, [P, E]),
            (0, l.useEffect)(() => {
              if (m.current) {
                T();
                return;
              }
              N && Z();
            }, [N]),
            0 !== r || s
              ? (0, n.jsx)("div", {
                  ref: m,
                  className: "simple-transition-path",
                  children: p,
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, n.jsx)("div", {
                        ref: w,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, n.jsxs)("svg", {
                          width: "60",
                          height: "60",
                          viewBox: "0 0 599 604",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsx)("path", {
                              d: "M504.283 99.441L558.673 192.572C561.567 197.527 559.441 203.896 554.152 206.12L300.679 312.688C292.99 315.921 285.165 308.384 288.108 300.579L342.099 157.378C343.05 154.855 345.028 152.855 347.541 151.877L492.632 95.3795C496.986 93.6841 501.926 95.4064 504.283 99.441Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M297.036 9.05634L401.595 35.4992C407.158 36.9061 410.213 42.8857 408.094 48.218L306.538 303.74C303.457 311.491 292.597 311.793 289.09 304.225L224.742 165.37C223.609 162.923 223.568 160.111 224.63 157.632L285.975 14.5235C287.816 10.2291 292.507 7.91077 297.036 9.05634Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M89.9343 105.498L181.464 48.4537C186.334 45.4187 192.762 47.3606 195.137 52.5841L308.943 302.89C312.395 310.483 305.087 318.521 297.2 315.804L152.507 265.95C149.958 265.072 147.902 263.152 146.852 260.668L86.2092 117.26C84.3894 112.957 85.969 107.969 89.9343 105.498Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M7.8003 312.717L30.3554 207.252C31.5554 201.641 37.4179 198.366 42.825 200.287L301.93 292.316C309.79 295.108 310.494 305.949 303.061 309.734L166.682 379.177C164.28 380.4 161.47 380.545 158.954 379.575L13.673 323.568C9.31345 321.888 6.82316 317.286 7.8003 312.717Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M99.3806 512.987L42.0502 421.636C39 416.776 40.9218 410.342 46.1378 407.95L296.086 293.361C303.669 289.885 311.729 297.169 309.037 305.064L259.636 449.912C258.766 452.464 256.852 454.526 254.372 455.584L111.155 516.675C106.857 518.508 101.864 516.944 99.3806 512.987Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M308.678 595.727L203.249 573.001C197.64 571.792 194.374 565.924 196.304 560.52L288.753 301.564C291.558 293.709 302.4 293.022 306.173 300.462L375.394 436.953C376.614 439.358 376.754 442.167 375.78 444.681L319.538 589.872C317.85 594.229 313.245 596.711 308.678 595.727Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M508.774 509.896L416.247 565.309C411.325 568.257 404.932 566.202 402.65 560.937L293.298 308.653C289.981 301 297.431 293.093 305.268 295.949L449.054 348.36C451.588 349.283 453.609 351.239 454.615 353.741L512.707 498.201C514.45 502.536 512.782 507.495 508.774 509.896Z",
                              fill: "#FF6200",
                            }),
                            (0, n.jsx)("path", {
                              d: "M590.535 294.53L566.085 399.573C564.784 405.161 558.864 408.33 553.492 406.313L296.086 309.633C288.277 306.7 287.768 295.848 295.268 292.197L432.875 225.221C435.3 224.041 438.111 223.947 440.609 224.962L584.859 283.576C589.187 285.334 591.594 289.98 590.535 294.53Z",
                              fill: "#FF6200",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      ref: x,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: v,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, {
                                color: "#A39B8B",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: y,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, {
                                color: "#A39B8B",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      ref: k,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-light_beige",
                      children: [
                        (0, n.jsx)("span", {
                          ref: C,
                          children: "000",
                        }),
                        (0, n.jsx)("span", {
                          children: "/",
                        }),
                        (0, n.jsx)("span", {
                          children: "100",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: t - r,
                      },
                      ref: g,
                      className: "transition-path relative",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, n.jsx)("div", {
                            ref: j,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, n.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, n.jsx)("defs", {
                                children: (0, n.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, n.jsx)("path", {
                                    ref: b,
                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        p,
                      ],
                    }),
                  ],
                })
          );
        };
    },
    1019: function (e, r, t) {
      t.r(r);
      var n = t(5893),
        a = t(187),
        l = t(7294),
        i = t(6038),
        s = t(6546),
        o = t(2099),
        c = t(9362),
        u = t(7771),
        d = t(2692),
        f = t(6009),
        h = t(8266),
        p = t(6494);
      r.default = (e) => {
        let { slice: r, slices: t, index: m } = e,
          g = (0, l.useRef)(null),
          w = (0, l.useRef)(null),
          x = (0, l.useRef)(null),
          v = (0, l.useRef)([]),
          y = (0, l.useRef)([]),
          j = (0, l.useRef)([]),
          b = (0, l.useRef)([]),
          k = (0, l.useRef)(null),
          C = (0, l.useRef)(null),
          R = (0, l.useRef)(null),
          _ = (0, l.useRef)(null),
          N = (0, l.useRef)(null),
          A = (0, l.useRef)(null),
          P = (0, l.useRef)(null),
          E = (0, l.useRef)(null),
          L = (0, l.useRef)(null),
          S = (0, h.o)((e) => e.setCursorHidden),
          T = (0, h.o)((e) => e.isAppear),
          [Z, z] = (0, l.useState)(0),
          H = (0, c.a)("(max-width: 1024px)", !0),
          W = (0, l.useRef)(null),
          B = (0, l.useRef)(null),
          O = (0, l.useRef)(null),
          M = (0, l.useRef)(null),
          D = (0, l.useRef)(null),
          F = (0, l.useRef)(null),
          U = (0, l.useRef)(null),
          q = (0, l.useRef)(null),
          V = (0, l.useRef)(null),
          I = () => {
            let e = i.p8.timeline();
            e.to(
              w.current,
              {
                scale: window.innerWidth < 768 ? 0.965 : 0.972,
                borderRadius: 30,
                ease: "none",
              },
              0,
            );
            let r = i.p8.timeline({
                ease: "none",
              }),
              t = window.innerWidth / 40;
            return (
              window.innerWidth < 1024 && (t = window.innerWidth / 15),
              r
                .fromTo(
                  R.current,
                  {
                    y: 0,
                  },
                  {
                    y: window.innerWidth / 15,
                  },
                  0,
                )
                .fromTo(
                  x.current,
                  {
                    y: 0,
                  },
                  {
                    y: t,
                  },
                  0,
                ),
              k.current &&
                r.to(
                  k.current,
                  {
                    y: -window.innerWidth / 15,
                  },
                  0,
                ),
              {
                scaleAnimation: e,
                parallaxAnimation: r,
              }
            );
          },
          G = () => {
            let e = "default" === r.variation ? "-0.96rem" : "-0.66rem";
            window.innerWidth < 1024 &&
              (e = "default" === r.variation ? "-0.368rem" : "-0.252rem"),
              "default" !== r.variation &&
                ((q.current = i.p8.timeline({
                  paused: !0,
                  defaults: {
                    duration: 1.2,
                    ease: "power4.inOut",
                  },
                })),
                (V.current = i.p8.timeline({
                  paused: !0,
                  defaults: {
                    duration: 1.2,
                    ease: "power4.inOut",
                  },
                })),
                window.innerWidth < 768
                  ? (q.current
                      .to(
                        y.current,
                        {
                          autoAlpha: 0,
                          duration: 0.5,
                          ease: "power2.out",
                        },
                        0,
                      )
                      .to(
                        b.current,
                        {
                          autoAlpha: 1,
                          duration: 0.7,
                          ease: "power2.out",
                        },
                        0.45,
                      ),
                    V.current
                      .to(
                        b.current,
                        {
                          autoAlpha: 0,
                          duration: 0.5,
                          ease: "power2.out",
                        },
                        0,
                      )
                      .to(
                        y.current,
                        {
                          autoAlpha: 1,
                          duration: 0.7,
                          ease: "power2.out",
                        },
                        0.45,
                      ))
                  : (q.current
                      .to(
                        y.current,
                        {
                          yPercent: -110,
                          duration: 1.2,
                        },
                        0,
                      )
                      .to(
                        j.current[0],
                        {
                          yPercent: 0,
                          letterSpacing: e,
                          duration: 1.2,
                        },
                        0,
                      )
                      .to(
                        [b.current[0], j.current[1]],
                        {
                          yPercent: 0,
                          stagger: 0.1,
                          duration: 1.4,
                        },
                        "<+=0.6",
                      )
                      .to(
                        v.current[1],
                        {
                          yPercent: -110,
                          duration: 1.4,
                        },
                        "<",
                      )
                      .to(
                        j.current[1],
                        {
                          letterSpacing: e,
                          duration: 1.4,
                        },
                        "<",
                      ),
                    V.current
                      .to(
                        j.current,
                        {
                          yPercent: 100,
                          stagger: -0.1,
                        },
                        0,
                      )
                      .to(
                        j.current[1],
                        {
                          letterSpacing: _.current,
                        },
                        0,
                      )
                      .to(
                        b.current[0],
                        {
                          yPercent: 100,
                        },
                        0.7,
                      )
                      .to(
                        j.current[0],
                        {
                          letterSpacing: _.current,
                        },
                        0.7,
                      )
                      .fromTo(
                        v.current[1],
                        {
                          letterSpacing: _.current,
                        },
                        {
                          yPercent: 0,
                          letterSpacing: e,
                          duration: 1.4,
                        },
                        0,
                      )
                      .to(
                        y.current,
                        {
                          yPercent: 0,
                          duration: 1.4,
                        },
                        "<+=0.7",
                      )
                      .fromTo(
                        v.current[0],
                        {
                          letterSpacing: _.current,
                        },
                        {
                          letterSpacing: e,
                          duration: 1.4,
                        },
                        "<",
                      )));
          },
          K = () => {
            (_.current = "-2.5rem"),
              i.p8.set([P.current, E.current], {
                scale: 1.2,
              }),
              window.innerWidth < 1024 && (_.current = "-1.3rem"),
              window.innerWidth >= 768
                ? (C.current &&
                    i.p8.set(C.current, {
                      autoAlpha: 0,
                    }),
                  k.current &&
                    i.p8.set(k.current, {
                      yPercent: 140,
                    }),
                  j.current.length > 0 &&
                    i.p8.set(j.current, {
                      yPercent: 100,
                    }),
                  y.current[0] &&
                    i.p8.set(y.current[0], {
                      yPercent: 100,
                    }),
                  v.current &&
                    i.p8.set(v.current, {
                      yPercent: 100,
                      letterSpacing: _.current,
                    }),
                  b.current[0] &&
                    i.p8.set(b.current[0], {
                      yPercent: 100,
                    }),
                  j.current.length > 0 &&
                    i.p8.set(j.current, {
                      yPercent: 100,
                      letterSpacing: _.current,
                    }))
                : b.current.length > 0 &&
                  i.p8.set(b.current, {
                    autoAlpha: 0,
                  });
          },
          J = () => {
            A.current =
              "default" === r.variation
                ? window.innerHeight
                : 0.75 * window.innerHeight;
          },
          Q = () => {
            let e = i.p8.timeline(),
              t = "default" === r.variation ? "-0.96rem" : "-0.66rem";
            window.innerWidth < 1024 &&
              (t = "default" === r.variation ? "-0.368rem" : "-0.252rem"),
              e.fromTo(
                [P.current, E.current],
                {
                  scale: 1.2,
                },
                {
                  scale: 1,
                  ease: "expo.out",
                  duration: 1.6,
                },
                0.3,
              ),
              "default" === r.variation
                ? (e.to(
                    v.current,
                    {
                      yPercent: 0,
                      letterSpacing: t,
                      duration: 1.8,
                      ease: "power4.inOut",
                    },
                    0,
                  ),
                  C.current &&
                    e.fromTo(
                      C.current,
                      {
                        autoAlpha: 0,
                      },
                      {
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: "power2.out",
                      },
                      0.8,
                    ))
                : e
                    .to(
                      v.current[0],
                      {
                        yPercent: 0,
                        letterSpacing: t,
                        duration: 1.2,
                        ease: "power4.inOut",
                      },
                      0,
                    )
                    .to(
                      [y.current[0], v.current[1]],
                      {
                        yPercent: 0,
                        stagger: 0.1,
                        duration: 1.4,
                        ease: "power4.inOut",
                      },
                      0.6,
                    )
                    .to(
                      v.current[1],
                      {
                        letterSpacing: t,
                        duration: 1.4,
                        ease: "power4.inOut",
                      },
                      "<",
                    );
          },
          X = () => {
            (L.current = !0),
              N.current &&
                N.current.ref &&
                i.p8.set(N.current.ref, {
                  autoAlpha: 1,
                }),
              k.current && k.current.classList.remove("hidden"),
              z(1);
          };
        return (
          (0, l.useEffect)(() => {
            T && Q();
          }, [T]),
          (0, l.useEffect)(() => {
            K(),
              G(),
              N.current &&
                N.current.ref &&
                i.p8.set(N.current.ref, {
                  autoAlpha: 0,
                });
            let { scaleAnimation: e, parallaxAnimation: t } = I();
            if (
              ((W.current = s.ScrollTrigger.create({
                trigger: g.current,
                start: "bottom bottom",
                end: () => "+=".concat(0.5 * w.current.clientHeight),
                animation: e,
                scrub: !0,
              })),
              (B.current = s.ScrollTrigger.create({
                trigger: g.current,
                start: "bottom bottom",
                animation: t,
                scrub: !0,
                onLeaveBack: () => {
                  k.current &&
                    ((0, o.RE)(U.current),
                    (F.current = i.p8.to(k.current, {
                      yPercent: 0,
                      ease: "power2.inOut",
                      duration: 0.9,
                    })));
                },
              })),
              "default" !== r.variation &&
                (M.current = s.ScrollTrigger.create({
                  trigger: g.current,
                  start: "top top-=10px",
                  onEnter: () => {
                    (0, o.RE)(V.current), q.current.restart();
                  },
                  onLeaveBack: () => {
                    (0, o.RE)(q.current), V.current.restart();
                  },
                })),
              C.current || k.current)
            ) {
              let e = i.p8.timeline({
                paused: !0,
              });
              C.current &&
                e.to(
                  C.current,
                  {
                    autoAlpha: 0,
                    ease: "linear",
                    duration: 0.3,
                  },
                  0,
                ),
                k.current &&
                  e.fromTo(
                    k.current,
                    {
                      yPercent: 140,
                    },
                    {
                      yPercent: 0,
                      ease: "power2.inOut",
                      duration: 0.9,
                    },
                    0,
                  ),
                (O.current = s.ScrollTrigger.create({
                  trigger: g.current,
                  start: "top top-=25%",
                  onEnter: () => {
                    e.play();
                  },
                  onLeaveBack: () => {
                    e.reverse();
                  },
                }));
            }
            return (
              window.addEventListener("resize", J),
              window.addEventListener("is-appeared", X),
              () => {
                window.removeEventListener("resize", J),
                  window.removeEventListener("is-appeared", X),
                  W.current.kill(),
                  (W.current = null),
                  B.current.kill(),
                  (B.current = null),
                  M.current && M.current.kill(),
                  M.current && (M.current = null),
                  O.current && O.current.kill(),
                  O.current && (O.current = null);
              }
            );
          }, []),
          (0, l.useEffect)(
            () => (
              (A.current =
                "default" === r.variation
                  ? window.innerHeight
                  : 0.75 * window.innerHeight),
              H ||
                (D.current = s.ScrollTrigger.create({
                  trigger: g.current,
                  start: "bottom bottom",
                  end: () => "+=".concat(w.current.clientHeight),
                  scrub: !0,
                  onUpdate: () => {
                    N.current && N.current.addScrollValue(A.current);
                  },
                })),
              () => {
                D.current && (D.current.kill(), (D.current = null));
              }
            ),
            [H],
          ),
          (0, n.jsx)(f.Z, {
            index: m,
            slicesLength: t.length,
            children: (0, n.jsx)("section", {
              "data-slice-type": r.slice_type,
              "data-slice-variation": r.variation,
              style: {
                zIndex: t.length - m,
              },
              className: "relative ".concat(
                "White" === r.primary.background_color
                  ? "bg-white"
                  : "Beige light" === r.primary.background_color
                    ? "bg-light_beige"
                    : "Beige dark" === r.primary.background_color
                      ? "bg-dark_beige"
                      : "Grey dark" === r.primary.background_color
                        ? "bg-dark_grey"
                        : "bg-green",
              ),
              ref: g,
              onMouseEnter: () => {
                L.current && z(1), S(!0);
              },
              onMouseLeave: () => {
                z(0), S(!1);
              },
              children: (0, n.jsx)("div", {
                className: "relative ".concat(
                  "default" === r.variation ? "h-[200vh]" : "h-[175vh]",
                  " text-white",
                ),
                children: (0, n.jsx)("div", {
                  className: "sticky top-0 h-screen",
                  children: (0, n.jsxs)("div", {
                    ref: w,
                    className: "relative w-full h-full overflow-hidden",
                    children: [
                      !H &&
                        (0, n.jsx)("div", {
                          className:
                            "absolute hidden xl:block xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-4",
                          children: (0, n.jsx)(u.Z, {
                            ref: N,
                            showBlogFromParent: Z,
                            text: "Keep going \xb7 Scroll down \xb7",
                          }),
                        }),
                      (0, n.jsxs)("div", {
                        ref: R,
                        className: "relative w-full h-full",
                        children: [
                          (0, n.jsx)("div", {
                            ref: P,
                            className:
                              "absolute top-0 left-0 w-full h-full z-0",
                            children: H
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "w-full h-full xl:hidden landscape:hidden",
                                      children: (0, n.jsx)(p.Z, {
                                        field:
                                          r.primary.background_image_mobile,
                                        fallbackAlt: "",
                                        loading: "eager",
                                        priority: !0,
                                        className: "w-full h-full object-cover",
                                        sizes: "100vw",
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "w-full h-full hidden landscape:block",
                                      children: (0, n.jsx)(p.Z, {
                                        field: r.primary.background_image,
                                        fallbackAlt: "",
                                        loading: "eager",
                                        priority: !0,
                                        className: "w-full h-full object-cover",
                                        sizes: "100vw",
                                      }),
                                    }),
                                  ],
                                })
                              : (0, n.jsx)(p.Z, {
                                  field: r.primary.background_image,
                                  fallbackAlt: "",
                                  loading: "eager",
                                  priority: !0,
                                  className: "w-full h-full object-cover",
                                  sizes: "100vw",
                                }),
                          }),
                          (0, n.jsx)("h1", {
                            ref: x,
                            className:
                              "absolute top-[45%] md:top-1/2 left-0 w-full -translate-y-1/2 font-headings text-white text-center overflow-hidden",
                            children:
                              "default" === r.variation
                                ? (0, n.jsx)("div", {
                                    ref: v,
                                    className:
                                      "w-full text-92 leading-[74%] -tracking-[0.368rem] lg:text-160 lg:-tracking-[0.96rem] lg:leading-[100%]",
                                    children: (0, n.jsx)(a.v, {
                                      field: r.primary.title,
                                    }),
                                  })
                                : (0, n.jsxs)("div", {
                                    className:
                                      "w-full text-[5.6rem] leading-[89%] -tracking-[0.252rem] lg:text-120 lg:leading-[80%] lg:-tracking-[0.66rem]",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "relative",
                                        children: r.primary.title.map((e, r) =>
                                          (0, n.jsx)(
                                            "div",
                                            {
                                              ref: (e) => (y.current[r] = e),
                                              children: (0, n.jsx)("div", {
                                                ref: (e) => (v.current[r] = e),
                                                children: e.text,
                                              }),
                                            },
                                            "title1-".concat(r),
                                          ),
                                        ),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                                        children: r.primary.second_title.map(
                                          (e, r) =>
                                            (0, n.jsx)(
                                              "div",
                                              {
                                                ref: (e) => (b.current[r] = e),
                                                children: (0, n.jsx)("div", {
                                                  ref: (e) =>
                                                    (j.current[r] = e),
                                                  children: e.text,
                                                }),
                                              },
                                              "title2-".concat(r),
                                            ),
                                        ),
                                      }),
                                    ],
                                  }),
                          }),
                          (0, n.jsx)("div", {
                            ref: E,
                            className:
                              "absolute top-0 left-0 w-full h-full z-2",
                            children: H
                              ? (0, n.jsx)(p.Z, {
                                  field: r.primary.foreground_image_mobile,
                                  fallbackAlt: "",
                                  className: "w-full h-full object-cover",
                                  sizes: "100vw",
                                })
                              : (0, n.jsx)(p.Z, {
                                  field: r.primary.foreground_image,
                                  fallbackAlt: "",
                                  className: "w-full h-full object-cover",
                                  sizes: "100vw",
                                }),
                          }),
                          "default" === r.variation &&
                            r.primary.bottom_title &&
                            (0, n.jsx)("div", {
                              ref: C,
                              className:
                                "absolute bottom-[35%] md:bottom-[8.4rem] left-1/2 -translate-x-1/2 text-center z-3 text-19 md:text-20 leading-[110%] md:leading-[105%] -tracking-[0.019rem] md:-tracking-[0.06rem]",
                              children: (0, n.jsx)(a.v, {
                                field: r.primary.bottom_title,
                              }),
                            }),
                          "default" === r.variation &&
                            r.primary.right_content &&
                            (0, n.jsx)("div", {
                              ref: k,
                              className:
                                "absolute hidden bottom-10 right-10 md:bottom-20 md:right-20 bg-dark_grey/50 z-3 text-20 leading-[105%] -tracking-[0.06rem]",
                              children: (0, n.jsxs)(d.Z, {
                                size: "large",
                                children: [
                                  r.primary.right_title &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "mb-[0.8rem] md:mb-[1.2rem] uppercase text-10 tracking-[0.05rem] leading-[180%]",
                                      children: r.primary.right_title,
                                    }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "text-17 -tracking-[0.017rem] leading-[141%] md:text-20 md:leading-[130%] md:-tracking-[0.06rem]",
                                    children: (0, n.jsx)(a.v, {
                                      field: r.primary.right_content,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
  },
]);
