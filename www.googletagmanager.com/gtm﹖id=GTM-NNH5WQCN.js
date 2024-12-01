// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "7",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__csm",
          metadata: ["map"],
          once_per_event: true,
          vtp_clientId: "23384447",
          tag_id: 4,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-SYXE6JCG3M",
          tag_id: 11,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https:\/\/xd.wayin.com\/ui\/ngx.embed.min.js" type="text\/gtmscript"\u003E\u003C\/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 10,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 2],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__csm",
        [46, "a"],
        [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "o"],
        [
          50,
          "l",
          [46, "p", "q"],
          [41, "r", "s", "t", "u"],
          [3, "r", ["f"]],
          [3, "s", [2, [30, [15, "q"], ""], "split", [7, "&"]]],
          [3, "q", ""],
          [3, "t", 0],
          [
            42,
            [23, [15, "t"], [17, [15, "s"], "length"]],
            [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]],
            false,
            [
              46,
              [
                22,
                [16, [15, "s"], [15, "t"]],
                [
                  46,
                  [3, "u", [2, [16, [15, "s"], [15, "t"]], "split", [7, "="]]],
                  [
                    22,
                    [16, [15, "u"], 0],
                    [
                      46,
                      [
                        3,
                        "q",
                        [
                          0,
                          [15, "q"],
                          [
                            0,
                            [0, [0, "&", ["c", [16, [15, "u"], 0]]], "="],
                            [
                              39,
                              [16, [15, "u"], 1],
                              ["c", [16, [15, "u"], 1]],
                              "",
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            36,
            [
              0,
              [
                0,
                [
                  0,
                  [
                    0,
                    [
                      0,
                      [
                        0,
                        [
                          0,
                          [
                            0,
                            [
                              0,
                              [
                                0,
                                [
                                  0,
                                  [
                                    0,
                                    "https://sb.scorecardresearch.com/b?c1=2&c2=",
                                    ["c", [15, "p"]],
                                  ],
                                  "&ns__t=",
                                ],
                                [15, "r"],
                              ],
                              "&ns_c=",
                            ],
                            [30, ["i"], ""],
                          ],
                          "&c8=",
                        ],
                        ["c", [30, ["j"], ""]],
                      ],
                      [15, "q"],
                    ],
                    "&c7=",
                  ],
                  ["c", ["g"]],
                ],
                "&c9=",
              ],
              ["c", ["e"]],
            ],
          ],
        ],
        [
          50,
          "m",
          [46, "p"],
          [41, "q"],
          [
            22,
            [18, [17, [15, "p"], "length"], 2048],
            [
              46,
              [
                3,
                "q",
                [
                  2,
                  [2, [15, "p"], "substring", [7, 0, 2040]],
                  "lastIndexOf",
                  [7, "&"],
                ],
              ],
              [
                3,
                "p",
                [
                  0,
                  [
                    0,
                    [2, [15, "p"], "substring", [7, 0, [15, "q"]]],
                    "&ns_cut=",
                  ],
                  ["c", [2, [15, "p"], "substring", [7, [0, [15, "q"], 1]]]],
                ],
              ],
              [3, "p", [2, [15, "p"], "substring", [7, 0, 2048]]],
            ],
          ],
          [36, [15, "p"]],
        ],
        [
          50,
          "n",
          [46],
          [41, "p"],
          [
            3,
            "p",
            [
              0,
              [
                0,
                "https://sb.scorecardresearch.com/c2/",
                ["c", [17, [15, "a"], "clientId"]],
              ],
              "/cs.js",
            ],
          ],
          [
            "h",
            [15, "p"],
            [17, [15, "a"], "gtmOnSuccess"],
            [17, [15, "a"], "gtmOnFailure"],
          ],
        ],
        [3, "b", ["require", "callOnWindowLoad"]],
        [3, "c", ["require", "encodeUriComponent"]],
        [3, "d", ["require", "getCookieValues"]],
        [3, "e", ["require", "getReferrerUrl"]],
        [3, "f", ["require", "getTimestampMillis"]],
        [3, "g", ["require", "getUrl"]],
        [3, "h", ["require", "injectScript"]],
        [3, "i", ["require", "readCharacterSet"]],
        [3, "j", ["require", "readTitle"]],
        [3, "k", ["require", "sendPixel"]],
        [3, "o", [2, ["d", "comScore", true], "join", [7, "&"]]],
        ["k", ["m", ["l", [17, [15, "a"], "clientId"], [15, "o"]]]],
        ["b", [15, "n"]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__html",
        [46, "a"],
        [52, "b", ["require", "internal.injectHtml"]],
        [
          "b",
          [17, [15, "a"], "html"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          [17, [15, "a"], "useIframe"],
          [17, [15, "a"], "supportDocumentWrite"],
        ],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "7" },
    permissions: {
      __csm: {
        send_pixel: { urls: ["https:\/\/sb.scorecardresearch.com\/b?*"] },
        inject_script: { urls: ["https:\/\/sb.scorecardresearch.com\/c2\/*"] },
        get_cookies: { cookieAccess: "any" },
        get_url: { urlParts: "any" },
        get_referrer: { urlParts: "any" },
        read_character_set: {},
        read_title: {},
        process_dom_events: {
          targets: [{ targetType: "window", eventName: "load" }],
        },
      },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __html: { unsafe_inject_arbitrary_html: {} },
    },

    security_groups: {
      customScripts: ["__html"],
      google: ["__e", "__googtag"],
      nonGoogleScripts: ["__csm"],
    },
  };

  var h,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ja("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ca(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ka =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.po = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ta = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ua = function (a) {
      return a instanceof Array ? a : ta(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.ri = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.ka = function () {
    return Da(this, 1);
  };
  Ca.prototype.Vb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Cb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.sc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.sc || (d ? a.values.ri(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.sc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
        ? this.parent.get(a)
        : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Fd = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.sc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = ta(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ua(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Fd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.oi([a].concat(ua(ya.apply(1, arguments))));
  };
  h.oi = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.wl = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var La = function () {
    this.la = !1;
    this.R = new Ca();
  };
  h = La.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.ri = function (a, b) {
    this.la || this.R.ri(a, b);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  function Na() {
    for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Oa, Qa;
  function Ra(a) {
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Ra(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  var Ya = [],
    Za = {};
  function $a(a) {
    return Ya[a] === void 0 ? !1 : Ya[a];
  }
  function ab() {}
  function bb(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function cb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function db(a) {
    return Array.isArray(a) ? a : [a];
  }
  function eb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function fb(a, b) {
    if (!cb(a) || !cb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function gb(a, b) {
    for (var c = new hb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function ib(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function kb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function lb(a) {
    return Math.round(Number(a)) || 0;
  }
  function mb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function nb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function ob(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function pb() {
    return new Date(Date.now());
  }
  function qb() {
    return pb().getTime();
  }
  var hb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  hb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  hb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  hb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function rb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function sb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function tb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function ub(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function vb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function wb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function xb(a, b) {
    var c = B;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function yb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var zb = /^\w{1,9}$/;
  function Ab(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    ib(a, function (d, e) {
      zb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Bb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Cb(a) {
    if (!a) return a;
    var b = a;
    if ($a(3))
      try {
        b = decodeURIComponent(a);
      } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Db(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Eb = globalThis.trustedTypes,
    Fb;
  function Gb() {
    var a = null;
    if (!Eb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Eb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Hb() {
    Fb === void 0 && (Fb = Gb());
    return Fb;
  }
  var Ib = function (a) {
    this.j = a;
  };
  Ib.prototype.toString = function () {
    return this.j + "";
  };
  function Jb(a) {
    var b = a,
      c = Hb();
    return new Ib(c ? c.createScriptURL(b) : b);
  }
  function Kb(a) {
    if (a instanceof Ib) return a.j;
    throw Error("");
  }
  var Lb = wa([""]),
    Mb = va(["\x00"], ["\\0"]),
    Nb = va(["\n"], ["\\n"]),
    Ob = va(["\x00"], ["\\u0000"]);
  function Pb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Pb(function (a) {
    return a(Lb);
  }) ||
    Pb(function (a) {
      return a(Mb);
    }) ||
    Pb(function (a) {
      return a(Nb);
    }) ||
    Pb(function (a) {
      return a(Ob);
    });
  var Qb = function (a) {
    this.j = a;
  };
  Qb.prototype.toString = function () {
    return this.j;
  };
  var Rb = new Qb("about:invalid#zClosurez");
  var Sb = function (a) {
    this.Lm = a;
  };
  function Tb(a) {
    return new Sb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Ub = [
    Tb("data"),
    Tb("http"),
    Tb("https"),
    Tb("mailto"),
    Tb("ftp"),
    new Sb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Vb(a, b) {
    b = b === void 0 ? Ub : b;
    if (a instanceof Qb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Sb && d.Lm(a)) return new Qb(a);
    }
  }
  function Wb(a) {
    var b;
    b = b === void 0 ? Ub : b;
    return Vb(a, b) || Rb;
  }
  var Xb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Yb(a) {
    var b;
    if (a instanceof Qb)
      if (a instanceof Qb) b = a.j;
      else throw Error("");
    else b = Xb.test(a) ? a : void 0;
    return b;
  }
  var $b = function () {
    this.j = Zb[0].toLowerCase();
  };
  $b.prototype.toString = function () {
    return this.j;
  };
  var ac = function (a) {
    this.j = a;
  };
  ac.prototype.toString = function () {
    return this.j + "";
  };
  function bc(a, b) {
    var c = [new $b()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof $b) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.',
      );
    a.setAttribute(b, "true");
  }
  function cc(a, b) {
    var c = Yb(b);
    c !== void 0 && (a.action = c);
  }
  var dc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ec(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var B = window,
    fc = window.history,
    E = document,
    gc = navigator;
  function hc() {
    var a;
    try {
      a = gc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ic = E.currentScript,
    jc = ic && ic.src;
  function kc(a, b) {
    var c = B[a];
    B[a] = c === void 0 ? b : c;
    return B[a];
  }
  function mc(a) {
    return (gc.userAgent || "").indexOf(a) !== -1;
  }
  var nc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    oc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function pc(a, b, c) {
    b &&
      ib(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function qc(a, b, c, d, e) {
    var f = E.createElement("script");
    pc(f, d, nc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Jb(ec(a));
    f.src = Kb(g);
    var k,
      m = (f.ownerDocument && f.ownerDocument.defaultView) || window;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function rc() {
    if (jc) {
      var a = jc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function sc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    pc(g, c, oc);
    d &&
      ib(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function tc(a, b, c, d) {
    uc(a, b, c, d);
  }
  function vc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function wc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function H(a) {
    B.setTimeout(a, 0);
  }
  function xc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function yc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function zc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ec("A<div>" + a + "</div>"),
      f = Hb();
    d = new ac(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof ac) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function Ac(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function Bc(a, b, c) {
    var d;
    try {
      d = gc.sendBeacon && gc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : uc(a, b, c);
  }
  function Cc(a, b) {
    try {
      return gc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var Dc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ec(a, b, c, d, e) {
    if (Fc()) {
      var f = Object.assign({}, Dc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics));
      try {
        var g = B.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && m.ok ? d == null || d() : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.noFallback) return e == null || e(), !1;
    if (b) {
      var k = Cc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    Bc(a, d, e);
    return !0;
  }
  function Fc() {
    return typeof B.fetch === "function";
  }
  function Gc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Hc() {
    var a = B.performance;
    if (a && bb(a.now)) return a.now();
  }
  function Ic() {
    var a,
      b = B.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Jc() {
    return B.performance || void 0;
  }
  function Kc() {
    var a = B.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var uc = function (a, b, c, d) {
    var e = new Image(1, 1);
    pc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Lc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Mc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Nc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Oc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Pc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Qc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = B.location.href;
        b instanceof La &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Sc = function (a) {
      if (a == null) return String(a);
      var b = Rc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Tc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Uc = function (a) {
      if (!a || Sc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Tc(a, "constructor") &&
          !Tc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Tc(a, b);
    },
    Vc = function (a, b) {
      var c = b || (Sc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Tc(a, d)) {
          var e = a[d];
          Sc(e) == "array"
            ? (Sc(c[d]) != "array" && (c[d] = []), (c[d] = Vc(e, c[d])))
            : Uc(e)
              ? (Uc(c[d]) || (c[d] = {}), (c[d] = Vc(e, c[d])))
              : (c[d] = e);
        }
      return c;
    };
  function Wc(a) {
    if (a == void 0 || Array.isArray(a) || Uc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Xc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Yc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ca();
    this.values = [];
    this.la = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Xc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Yc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Yc
          ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
          : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.la)
      if (a === "length") {
        if (!Xc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Xc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Xc(a)
        ? this.values[Number(a)]
        : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.ka = function () {
    for (var a = this.R.ka(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Vb = function () {
    for (var a = this.R.Vb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Cb = function () {
    for (var a = this.R.Cb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Xc(a) ? delete this.values[Number(a)] : this.la || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ua(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Yc(this.values.splice(a))
      : new Yc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ua(c))),
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ua(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Xc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ia = function () {
    this.la = !0;
    Object.freeze(this.values);
  };
  h.sc = function () {
    return this.la;
  };
  function Zc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var $c = function (a, b) {
    this.functionName = a;
    this.Ed = b;
    this.R = new Ca();
    this.la = !1;
  };
  h = $c.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Ed.call.apply(
      this.Ed,
      [new ad(this, a)].concat(ua(ya.apply(1, arguments))),
    );
  };
  h.nb = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ua(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  var ad = function (a, b) {
    this.Ed = a;
    this.D = b;
  };
  ad.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  ad.prototype.getName = function () {
    return this.Ed.getName();
  };
  ad.prototype.Fd = function () {
    return this.D.Fd();
  };
  var bd = function () {
    this.map = new Map();
  };
  bd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  bd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var cd = function () {
    this.keys = [];
    this.values = [];
  };
  cd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  cd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function dd() {
    try {
      return Map ? new bd() : new cd();
    } catch (a) {
      return new cd();
    }
  }
  var ed = function (a) {
    if (a instanceof ed) return a;
    if (Wc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ed.prototype.getValue = function () {
    return this.value;
  };
  ed.prototype.toString = function () {
    return String(this.value);
  };
  var gd = function (a) {
    this.promise = a;
    this.la = !1;
    this.R = new Ca();
    this.R.set("then", fd(this));
    this.R.set("catch", fd(this, !0));
    this.R.set("finally", fd(this, !1, !0));
  };
  h = gd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  var fd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new $c("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof $c || (d = void 0);
      e instanceof $c || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new gd(k);
    });
  };
  gd.prototype.Ia = function () {
    this.la = !0;
  };
  gd.prototype.sc = function () {
    return this.la;
  };
  function I(a, b, c) {
    var d = dd(),
      e = function (g, k) {
        for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Yc) {
          var m = [];
          d.set(g, m);
          for (var n = g.ka(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof gd) return g.promise;
        if (g instanceof La) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof $c) {
          var r = function () {
            for (
              var v = ya.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = hd(v[w], b, c);
            var x = new Fa(b ? b.Fd() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ua(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ed && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function hd(a, b, c) {
    var d = dd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || kb(g)) {
          var m = new Yc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Uc(g)) {
          var p = new La();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new $c("", function () {
            for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ed(g);
      };
    return f(a);
  }
  function id() {
    var a = !1;
    return a;
  }
  var jd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " ",
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Yc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Yc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Yc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Yc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ua(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Zc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Yc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Zc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ua(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ua(ya.apply(1, arguments)));
    },
  };
  var kd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(kd, Error);
  var ld = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    md = new Ba("break"),
    nd = new Ba("continue");
  function od(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function pd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function qd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Yc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (id()) throw new kd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (ld.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return hd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (id()) throw new kd(n);
      throw Error(n);
    }
    if (a instanceof Yc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof $c) {
          var q = Zc(c);
          return p.invoke.apply(p, [this.D].concat(ua(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (id()) throw new kd(r);
        throw Error(r);
      }
      if (jd.supportedMethods.indexOf(b) >= 0) {
        var u = Zc(c);
        return jd[b].call.apply(jd[b], [a, this.D].concat(ua(u)));
      }
    }
    if (a instanceof $c || a instanceof La || a instanceof gd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof $c) {
          var t = Zc(c);
          return v.invoke.apply(v, [this.D].concat(ua(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (id()) throw new kd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof $c ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ed && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (id()) throw new kd(x);
    throw Error(x);
  }
  function rd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function sd() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Ba) return c;
  }
  function td() {
    return md;
  }
  function ud(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function vd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function wd() {
    return nd;
  }
  function xd(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function yd(a, b) {
    var c = ya.apply(2, arguments),
      d = new Yc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ua(c));
    this.D.add(a, this.evaluate(f));
  }
  function zd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function Ad(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ed,
      d = b instanceof ed;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function Bd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Cd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Dd(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c,
      );
    if (
      b instanceof La ||
      b instanceof gd ||
      b instanceof Yc ||
      b instanceof $c
    ) {
      var d = b.ka(),
        e = d.length;
      return Cd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c,
      );
    }
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c,
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c,
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c,
    );
  }
  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c,
    );
  }
  function Jd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c,
    );
  }
  function Kd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c,
    );
  }
  function Id(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c,
      );
    if (b instanceof Yc)
      return Cd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c,
      );
    if (id()) throw new kd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Ld(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Yc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Ba) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Md(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Yc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new $c(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Ba)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Yc(f));
          var p = Ia(g, c);
          if (p instanceof Ba) return p.type === "return" ? p.data : p;
        };
      })(),
    );
  }
  function Nd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Od && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Pd(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    if (
      a instanceof La ||
      a instanceof gd ||
      a instanceof Yc ||
      a instanceof $c
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Xc(b) && (c = a[b]);
    else if (a instanceof ed) return;
    return c;
  }
  function Qd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Rd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Sd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ed && (a = a.getValue());
    b instanceof ed && (b = b.getValue());
    return a === b;
  }
  function Td(a, b) {
    return !Sd.call(this, a, b);
  }
  function Ud(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Od = !1;
  function Vd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Xd() {
    for (var a = new Yc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Yd() {
    for (var a = new La(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Zd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function $d(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function ae(a) {
    return -this.evaluate(a);
  }
  function be(a) {
    return !this.evaluate(a);
  }
  function ce(a, b) {
    return !Ad.call(this, a, b);
  }
  function de() {
    return null;
  }
  function ee(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function fe(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function he(a) {
    return this.evaluate(a);
  }
  function ie() {
    return ya.apply(0, arguments);
  }
  function je(a) {
    return new Ba("return", this.evaluate(a));
  }
  function ke(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    (a instanceof $c || a instanceof Yc || a instanceof La) &&
      a.set(String(b), c);
    return c;
  }
  function le(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function me(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ba)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ba && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function ne(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function oe(a) {
    a = this.evaluate(a);
    return a instanceof $c ? "function" : typeof a;
  }
  function pe() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function qe(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function re(a) {
    return ~Number(this.evaluate(a));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function ve(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function we(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function xe(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ye() {}
  function ze(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof kd && a)) throw ((f = r instanceof kd), r);
      var k = Ha(this.D),
        m = new ed(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var Be = function () {
    this.j = new Ka();
    Ae(this);
  };
  Be.prototype.execute = function (a) {
    return this.j.oi(a);
  };
  var Ae = function (a) {
    var b = function (c, d) {
      var e = new $c(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Yd);
    b("and", Lc);
    b("contains", Oc);
    b("equals", Mc);
    b("or", Nc);
    b("startsWith", Pc);
    b("variable", Qc);
  };
  var De = function () {
    this.C = !1;
    this.j = new Ka();
    Ce(this);
    this.C = !0;
  };
  De.prototype.execute = function (a) {
    return Ee(this.j.oi(a));
  };
  var Fe = function (a, b, c) {
    return Ee(a.j.wl(b, c));
  };
  De.prototype.Ia = function () {
    this.j.Ia();
  };
  var Ce = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new $c(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, od);
    b(1, pd);
    b(2, qd);
    b(3, rd);
    b(56, ve);
    b(57, se);
    b(58, re);
    b(59, xe);
    b(60, te);
    b(61, ue);
    b(62, we);
    b(53, sd);
    b(4, td);
    b(5, ud);
    b(52, vd);
    b(6, wd);
    b(49, xd);
    b(7, Xd);
    b(8, Yd);
    b(9, ud);
    b(50, yd);
    b(10, zd);
    b(12, Ad);
    b(13, Bd);
    b(51, Md);
    b(47, Ed);
    b(54, Fd);
    b(55, Gd);
    b(63, Ld);
    b(64, Hd);
    b(65, Jd);
    b(66, Kd);
    b(15, Nd);
    b(16, Pd);
    b(17, Pd);
    b(18, Qd);
    b(19, Rd);
    b(20, Sd);
    b(21, Td);
    b(22, Ud);
    b(23, Vd);
    b(24, Wd);
    b(25, Zd);
    b(26, $d);
    b(27, ae);
    b(28, be);
    b(29, ce);
    b(45, de);
    b(30, ee);
    b(32, fe);
    b(33, fe);
    b(34, he);
    b(35, he);
    b(46, ie);
    b(36, je);
    b(43, ke);
    b(37, le);
    b(38, me);
    b(39, ne);
    b(67, ze);
    b(40, oe);
    b(44, ye);
    b(41, pe);
    b(42, qe);
  };
  De.prototype.Fd = function () {
    return this.j.Fd();
  };
  function Ee(a) {
    if (
      a instanceof Ba ||
      a instanceof $c ||
      a instanceof Yc ||
      a instanceof La ||
      a instanceof gd ||
      a instanceof ed ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ge = function (a) {
    this.message = a;
  };
  function He(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ge(
          "Value " + a + " can not be encoded in web-safe base64 dictionary.",
        )
      : b;
  }
  function Ie(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Je = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ke(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + He(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + He(a | b) + c);
  }
  var Le = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Rk: a("consent"),
      Bi: a("convert_case_to"),
      Ci: a("convert_false_to"),
      Di: a("convert_null_to"),
      Ei: a("convert_true_to"),
      Fi: a("convert_undefined_to"),
      En: a("debug_mode_metadata"),
      ra: a("function"),
      uh: a("instance_name"),
      zl: a("live_only"),
      Al: a("malware_disabled"),
      METADATA: a("metadata"),
      Dl: a("original_activity_id"),
      On: a("original_vendor_template_id"),
      Nn: a("once_on_load"),
      Cl: a("once_per_event"),
      Oj: a("once_per_load"),
      Qn: a("priority_override"),
      Rn: a("respected_consent_types"),
      Wj: a("setup_tags"),
      Fe: a("tag_id"),
      dk: a("teardown_tags"),
    };
  })();
  var hf;
  var jf = [],
    kf = [],
    lf = [],
    mf = [],
    nf = [],
    of = {},
    pf,
    qf;
  function rf(a) {
    qf = qf || a;
  }
  function sf(a) {}
  var tf,
    uf = [],
    vf = [];
  function wf(a, b) {
    var c = {};
    c[Le.ra] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function xf(a, b, c) {
    try {
      return pf(yf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function zf(a) {
    var b = a[Le.ra];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!of[b];
  }
  var yf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Af(a[e], b, c));
      return d;
    },
    Af = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Af(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = jf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Le.uh]);
            try {
              var m = yf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Bf(m, { event: b, index: f, type: 2, name: k });
              tf && (d = tf.Sl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Af(a[n], b, c)] = Af(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Af(a[q], b, c);
              qf && (p = p || qf.Im(r));
              d.push(r);
            }
            return qf && p ? qf.Vl(d) : d.join("");
          case "escape":
            d = Af(a[1], b, c);
            if (qf && Array.isArray(a[1]) && a[1][0] === "macro" && qf.Jm(a))
              return qf.dn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Te[a[u]] && (d = Te[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!mf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { jk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[Le.ra] = a[1];
            var w = xf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + ".",
            );
        }
      }
      return a;
    },
    Bf = function (a, b) {
      var c = a[Le.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = of[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          uf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          vb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = jf[q];
                  break;
                case 1:
                  r = mf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[Le.uh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && vf.indexOf(c) === -1) {
        vf.push(c);
        var x = qb();
        v = e(g);
        var y = qb() - x,
          A = qb();
        t = hf(c, k, b);
        w = y - (qb() - A);
      } else if ((e && (v = e(g)), !e || f)) t = hf(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Wc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Uc(v)
                ? Uc(t)
                : typeof v === "function"
                  ? typeof t === "function"
                  : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var Cf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(Cf, Error);
  Cf.prototype.getMessage = function () {
    return this.message;
  };
  function Df(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Df(a[c], b[c]);
    }
  }
  var Ef = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message,
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Vm = a;
    this.j = [];
    this.C = b;
  };
  ra(Ef, Error);
  function Ff() {
    return function (a, b) {
      a instanceof Ef || (a = new Ef(a, Gf));
      b && a instanceof Ef && a.j.push(b);
      throw a;
    };
  }
  function Gf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) cb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Hf(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = If(a), f = 0; f < kf.length; f++) {
      var g = kf[f],
        k = Jf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < mf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Jf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function If(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = xf(lf[c], a));
      return b[c];
    };
  }
  var Kf = {
    Sl: function (a, b) {
      b[Le.Bi] &&
        typeof a === "string" &&
        (a = b[Le.Bi] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Le.Di) && a === null && (a = b[Le.Di]);
      b.hasOwnProperty(Le.Fi) && a === void 0 && (a = b[Le.Fi]);
      b.hasOwnProperty(Le.Ei) && a === !0 && (a = b[Le.Ei]);
      b.hasOwnProperty(Le.Ci) && a === !1 && (a = b[Le.Ci]);
      return a;
    },
  };
  var Lf = function () {
      this.j = {};
    },
    Nf = function (a, b) {
      var c = Mf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ua(ya.apply(0, arguments)));
      });
    };
  function Of(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
                ? g + (": " + k.message)
                : g + ".";
        }
        if (!f) throw new Cf(c, d, g);
      }
  }
  function Pf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Of(e, b, d, g);
          Of(f, b, d, g);
        }
      }
    };
  }
  var Tf = function () {
      var a = data.permissions || {},
        b = Qf.ctid,
        c = this;
      this.C = {};
      this.j = new Lf();
      var d = {},
        e = {},
        f = Pf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      ib(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Rf(
              p,
              {},
              "The requested additional permission " +
                p +
                " is not configured.",
            );
          f.apply(null, [p].concat(ua(q)));
        }
        var n = {};
        ib(k, function (p, q) {
          var r = Sf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.fk && !e[p] && (e[p] = r.fk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Rf(
              p,
              {},
              "The requested permission " + p + " is not configured.",
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ua(u.slice(1))));
        };
      });
    },
    Uf = function (a) {
      return Mf.C[a] || function () {};
    };
  function Sf(a, b) {
    var c = wf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Rf;
    try {
      return Bf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Cf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new Cf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Rf(a, b, c) {
    return new Cf(a, b, c);
  }
  var Vf = !1;
  var Wf = {};
  Wf.Ik = mb("");
  Wf.Zl = mb("");
  var bg = {},
    cg =
      ((bg.uaa = !0),
      (bg.uab = !0),
      (bg.uafvl = !0),
      (bg.uamb = !0),
      (bg.uam = !0),
      (bg.uap = !0),
      (bg.uapv = !0),
      (bg.uaw = !0),
      bg);
  var kg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!ig.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!jg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
              ? vb(d, k) && (d === k || d.charAt(k.length) === ".")
              : d === k
        )
          return !0;
      }
      return !1;
    },
    jg = /^[a-z$_][\w$]*$/i,
    ig = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var lg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function mg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var ng = new hb();
  function og(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = ng.get(e);
      f || ((f = new RegExp(b, d)), ng.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function pg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function qg(a, b) {
    return String(a) === String(b);
  }
  function rg(a, b) {
    return Number(a) >= Number(b);
  }
  function sg(a, b) {
    return Number(a) <= Number(b);
  }
  function tg(a, b) {
    return Number(a) > Number(b);
  }
  function ug(a, b) {
    return Number(a) < Number(b);
  }
  function vg(a, b) {
    return vb(String(a), String(b));
  }
  var wg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    xg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      wg(b, "/*") && (b = b.slice(0, -2));
      wg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    yg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    Bg = function (a, b) {
      var c;
      if (!(c = !yg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!zg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!Ag.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = u.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var t = u.toLowerCase().indexOf(v.toLowerCase());
          r =
            t === -1
              ? !1
              : u.length === v.length
                ? !0
                : u.length !== v.length + t
                  ? !1
                  : u[t - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = xg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    zg = /^[a-z0-9-]+$/i,
    Ag = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Cg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Dg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Cg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied.",
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof $c
          ? (n = "Fn")
          : m instanceof Yc
            ? (n = "List")
            : m instanceof La
              ? (n = "PixieMap")
              : m instanceof gd
                ? (n = "PixiePromise")
                : m instanceof ed && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Dg[n] || n) + ", which does not match required type ") +
              ((Dg[k] || k) + "."),
          );
      }
    }
  }
  function Eg(a) {
    return "" + a;
  }
  function Fg(a, b) {
    var c = [];
    return c;
  }
  function Gg(a, b) {
    var c = new $c(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (id()) throw new kd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Hg(a, b) {
    var c = new La(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        bb(e)
          ? c.set(d, Gg(a + "_" + d, e))
          : Uc(e)
            ? c.set(d, Hg(a + "_" + d, e))
            : (cb(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Ig(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new La();
    return (d = Hg("AssertApiSubject", c));
  }
  function Jg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof gd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.",
      );
    var c = {},
      d = new La();
    return (d = Hg("AssertThatSubject", c));
  }
  function Kg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return hd(a.apply(null, b));
    };
  }
  function Lg() {
    for (var a = Math, b = Mg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Kg(a[e].bind(a)));
    }
    return c;
  }
  function Ng(a) {
    var b;
    return b;
  }
  function Og(a) {
    var b;
    return b;
  }
  function Pg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Qg(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Vg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Wg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return fb(a, b);
  }
  function Xg() {
    return new Date().getTime();
  }
  function Yg(a) {
    if (a === null) return "null";
    if (a instanceof Yc) return "array";
    if (a instanceof $c) return "function";
    if (a instanceof ed) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Zg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Vf || Wf.Ik) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return hd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function $g(a) {
    return lb(I(a, this.D));
  }
  function ah(a) {
    return Number(I(a, this.D));
  }
  function bh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function ch(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments,
    );
    d = new La();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof La &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Mg = "floor ceil round max min abs pow sqrt".split(" ");
  function dh() {
    var a = {};
    return {
      km: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Dk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function eh(a, b) {
    return function () {
      return $c.prototype.invoke.apply(
        a,
        [b].concat(ua(ya.apply(0, arguments))),
      );
    };
  }
  function fh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function gh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var hh = {};
  var ih = function (a) {
    var b = new La();
    if (a instanceof Yc)
      for (var c = a.ka(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof $c)
      for (var f = a.ka(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  hh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd) return new Yc(a.ka());
    return new Yc();
  };
  hh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd) return new Yc(a.Vb());
    return new Yc();
  };
  hh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd)
      return new Yc(
        a.Cb().map(function (b) {
          return new Yc(b);
        }),
      );
    return new Yc();
  };
  hh.freeze = function (a) {
    (a instanceof La ||
      a instanceof gd ||
      a instanceof Yc ||
      a instanceof $c) &&
      a.Ia();
    return a;
  };
  hh.delete = function (a, b) {
    if (a instanceof La && !a.sc()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.ln) {
      try {
        d.gk.apply(null, [b].concat(ua(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.gk.apply(null, [b].concat(ua(c)));
  }
  var jh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  jh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  jh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  jh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + ".",
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " +
          a +
          ".",
      );
    this.C[a] = c ? void 0 : bb(b) ? Gg(a, b) : Hg(a, b);
  };
  function kh(a, b) {
    var c = void 0;
    return c;
  }
  function lh() {
    var a = {};
    return a;
  }
  var O = {
      g: {
        Aa: "ad_personalization",
        O: "ad_storage",
        N: "ad_user_data",
        U: "analytics_storage",
        Jb: "region",
        Yb: "consent_updated",
        vf: "wait_for_update",
        Hi: "app_remove",
        Ii: "app_store_refund",
        Ji: "app_store_subscription_cancel",
        Ki: "app_store_subscription_convert",
        Li: "app_store_subscription_renew",
        Uk: "consent_update",
        zg: "add_payment_info",
        Ag: "add_shipping_info",
        wc: "add_to_cart",
        xc: "remove_from_cart",
        Bg: "view_cart",
        Zb: "begin_checkout",
        yc: "select_item",
        pb: "view_item_list",
        Kb: "select_promotion",
        qb: "view_promotion",
        Ma: "purchase",
        zc: "refund",
        Qa: "view_item",
        Cg: "add_to_wishlist",
        Vk: "exception",
        Mi: "first_open",
        Ni: "first_visit",
        ba: "gtag.config",
        Ya: "gtag.get",
        Oi: "in_app_purchase",
        ac: "page_view",
        Wk: "screen_view",
        Pi: "session_start",
        Xk: "timing_complete",
        Yk: "track_social",
        Uc: "user_engagement",
        Zk: "user_id_update",
        Rd: "gclid_link_decoration_source",
        Sd: "gclid_storage_source",
        rb: "gclgb",
        Za: "gclid",
        yf: "gclgs",
        zf: "gcllp",
        Af: "gclst",
        ia: "ads_data_redaction",
        Qi: "gad_source",
        Ri: "gad_source_src",
        Si: "ndclid",
        Ti: "ngad_source",
        Ui: "ngbraid",
        Vi: "ngclid",
        Wi: "ngclsrc",
        Td: "gclid_url",
        Xi: "gclsrc",
        Dg: "gbraid",
        Bf: "wbraid",
        na: "allow_ad_personalization_signals",
        Cf: "allow_custom_scripts",
        Ud: "allow_direct_google_requests",
        Df: "allow_display_features",
        Vd: "allow_enhanced_conversions",
        sb: "allow_google_signals",
        Fa: "allow_interest_groups",
        al: "app_id",
        bl: "app_installer_id",
        fl: "app_name",
        il: "app_version",
        Lb: "auid",
        Yi: "auto_detection_enabled",
        bc: "aw_remarketing",
        Ef: "aw_remarketing_only",
        Wd: "discount",
        Xd: "aw_feed_country",
        Yd: "aw_feed_language",
        da: "items",
        Zd: "aw_merchant_id",
        Eg: "aw_basket_type",
        Vc: "campaign_content",
        Wc: "campaign_id",
        Xc: "campaign_medium",
        Yc: "campaign_name",
        Zc: "campaign",
        bd: "campaign_source",
        dd: "campaign_term",
        tb: "client_id",
        Zi: "rnd",
        Fg: "consent_update_type",
        aj: "content_group",
        bj: "content_type",
        eb: "conversion_cookie_prefix",
        ed: "conversion_id",
        wa: "conversion_linker",
        cj: "conversion_linker_disabled",
        fc: "conversion_api",
        Ff: "cookie_deprecation",
        Ra: "cookie_domain",
        Sa: "cookie_expires",
        ab: "cookie_flags",
        Ac: "cookie_name",
        vb: "cookie_path",
        Na: "cookie_prefix",
        hc: "cookie_update",
        Bc: "country",
        Ba: "currency",
        Gg: "customer_buyer_stage",
        ae: "customer_lifetime_value",
        Hg: "customer_loyalty",
        Ig: "customer_ltv_bucket",
        fd: "custom_map",
        Jg: "gcldc",
        be: "dclid",
        Kg: "debug_mode",
        fa: "developer_id",
        dj: "disable_merchant_reported_purchases",
        gd: "dc_custom_params",
        ej: "dc_natural_search",
        Lg: "dynamic_event_settings",
        Mg: "affiliation",
        ce: "checkout_option",
        Gf: "checkout_step",
        Ng: "coupon",
        hd: "item_list_name",
        Hf: "list_name",
        fj: "promotions",
        jd: "shipping",
        If: "tax",
        de: "engagement_time_msec",
        ee: "enhanced_client_id",
        fe: "enhanced_conversions",
        Og: "enhanced_conversions_automatic_settings",
        he: "estimated_delivery_date",
        Jf: "euid_logged_in_state",
        kd: "event_callback",
        jl: "event_category",
        fb: "event_developer_id_string",
        kl: "event_label",
        Cc: "event",
        ie: "event_settings",
        je: "event_timeout",
        ml: "description",
        nl: "fatal",
        gj: "experiments",
        Kf: "firebase_id",
        Dc: "first_party_collection",
        ke: "_x_20",
        wb: "_x_19",
        ij: "fledge_drop_reason",
        Pg: "fledge",
        Qg: "flight_error_code",
        Rg: "flight_error_message",
        jj: "fl_activity_category",
        kj: "fl_activity_group",
        Sg: "fl_advertiser_id",
        lj: "fl_ar_dedupe",
        Tg: "match_id",
        mj: "fl_random_number",
        nj: "tran",
        oj: "u",
        me: "gac_gclid",
        Ec: "gac_wbraid",
        Ug: "gac_wbraid_multiple_conversions",
        Vg: "ga_restrict_domain",
        Wg: "ga_temp_client_id",
        ol: "ga_temp_ecid",
        ic: "gdpr_applies",
        Xg: "geo_granularity",
        Mb: "value_callback",
        xb: "value_key",
        Fc: "_google_ng",
        Gc: "google_signals",
        Yg: "google_tld",
        ne: "groups",
        Zg: "gsa_experiment_id",
        pj: "gtm_up",
        Nb: "iframe_state",
        ld: "ignore_referrer",
        Lf: "internal_traffic_results",
        jc: "is_legacy_converted",
        Ob: "is_legacy_loaded",
        oe: "is_passthrough",
        md: "_lps",
        Ta: "language",
        pe: "legacy_developer_id_string",
        xa: "linker",
        Hc: "accept_incoming",
        yb: "decorate_forms",
        X: "domains",
        Pb: "url_position",
        Mf: "merchant_feed_label",
        Nf: "merchant_feed_language",
        Of: "merchant_id",
        ah: "method",
        pl: "name",
        qj: "navigation_type",
        nd: "new_customer",
        bh: "non_interaction",
        rj: "optimize_id",
        eh: "page_hostname",
        od: "page_path",
        Ga: "page_referrer",
        ib: "page_title",
        fh: "passengers",
        gh: "phone_conversion_callback",
        sj: "phone_conversion_country_code",
        hh: "phone_conversion_css_class",
        tj: "phone_conversion_ids",
        ih: "phone_conversion_number",
        jh: "phone_conversion_options",
        ql: "_platinum_request_status",
        kh: "_protected_audience_enabled",
        pd: "quantity",
        qe: "redact_device_info",
        Pf: "referral_exclusion_definition",
        Qb: "restricted_data_processing",
        uj: "retoken",
        rl: "sample_rate",
        Qf: "screen_name",
        Rb: "screen_resolution",
        vj: "_script_source",
        wj: "search_term",
        Oa: "send_page_view",
        kc: "send_to",
        rd: "server_container_url",
        sd: "session_duration",
        se: "session_engaged",
        Rf: "session_engaged_time",
        zb: "session_id",
        te: "session_number",
        Sf: "_shared_user_id",
        ud: "delivery_postal_code",
        sl: "temporary_client_id",
        Tf: "topmost_url",
        xj: "tracking_id",
        Uf: "traffic_type",
        Ca: "transaction_id",
        Sb: "transport_url",
        lh: "trip_type",
        nc: "update",
        cb: "url_passthrough",
        yj: "uptgs",
        Vf: "_user_agent_architecture",
        Wf: "_user_agent_bitness",
        Xf: "_user_agent_full_version_list",
        Yf: "_user_agent_mobile",
        Zf: "_user_agent_model",
        cg: "_user_agent_platform",
        dg: "_user_agent_platform_version",
        eg: "_user_agent_wow64",
        Ha: "user_data",
        mh: "user_data_auto_latency",
        nh: "user_data_auto_meta",
        oh: "user_data_auto_multi",
        ph: "user_data_auto_selectors",
        qh: "user_data_auto_status",
        vd: "user_data_mode",
        ue: "user_data_settings",
        Da: "user_id",
        jb: "user_properties",
        zj: "_user_region",
        wd: "us_privacy_string",
        oa: "value",
        rh: "wbraid_multiple_conversions",
        xd: "_fpm_parameters",
        Gj: "_host_name",
        Hj: "_in_page_command",
        Ij: "_ip_override",
        Jj: "_is_passthrough_cid",
        Tb: "non_personalized_ads",
        De: "_sst_parameters",
        ub: "conversion_label",
        ya: "page_location",
        hb: "global_developer_id_string",
        mc: "tc_privacy_string",
      },
    },
    mh = {},
    nh = Object.freeze(
      ((mh[O.g.na] = 1),
      (mh[O.g.Df] = 1),
      (mh[O.g.Vd] = 1),
      (mh[O.g.sb] = 1),
      (mh[O.g.da] = 1),
      (mh[O.g.Ra] = 1),
      (mh[O.g.Sa] = 1),
      (mh[O.g.ab] = 1),
      (mh[O.g.Ac] = 1),
      (mh[O.g.vb] = 1),
      (mh[O.g.Na] = 1),
      (mh[O.g.hc] = 1),
      (mh[O.g.fd] = 1),
      (mh[O.g.fa] = 1),
      (mh[O.g.Lg] = 1),
      (mh[O.g.kd] = 1),
      (mh[O.g.ie] = 1),
      (mh[O.g.je] = 1),
      (mh[O.g.Dc] = 1),
      (mh[O.g.Vg] = 1),
      (mh[O.g.Gc] = 1),
      (mh[O.g.Yg] = 1),
      (mh[O.g.ne] = 1),
      (mh[O.g.Lf] = 1),
      (mh[O.g.jc] = 1),
      (mh[O.g.Ob] = 1),
      (mh[O.g.xa] = 1),
      (mh[O.g.Pf] = 1),
      (mh[O.g.Qb] = 1),
      (mh[O.g.Oa] = 1),
      (mh[O.g.kc] = 1),
      (mh[O.g.rd] = 1),
      (mh[O.g.sd] = 1),
      (mh[O.g.Rf] = 1),
      (mh[O.g.ud] = 1),
      (mh[O.g.Sb] = 1),
      (mh[O.g.nc] = 1),
      (mh[O.g.ue] = 1),
      (mh[O.g.jb] = 1),
      (mh[O.g.De] = 1),
      mh),
    );
  Object.freeze([
    O.g.ya,
    O.g.Ga,
    O.g.ib,
    O.g.Ta,
    O.g.Qf,
    O.g.Da,
    O.g.Kf,
    O.g.aj,
  ]);
  var oh = {},
    ph = Object.freeze(
      ((oh[O.g.Hi] = 1),
      (oh[O.g.Ii] = 1),
      (oh[O.g.Ji] = 1),
      (oh[O.g.Ki] = 1),
      (oh[O.g.Li] = 1),
      (oh[O.g.Mi] = 1),
      (oh[O.g.Ni] = 1),
      (oh[O.g.Oi] = 1),
      (oh[O.g.Pi] = 1),
      (oh[O.g.Uc] = 1),
      oh),
    ),
    qh = {},
    rh = Object.freeze(
      ((qh[O.g.zg] = 1),
      (qh[O.g.Ag] = 1),
      (qh[O.g.wc] = 1),
      (qh[O.g.xc] = 1),
      (qh[O.g.Bg] = 1),
      (qh[O.g.Zb] = 1),
      (qh[O.g.yc] = 1),
      (qh[O.g.pb] = 1),
      (qh[O.g.Kb] = 1),
      (qh[O.g.qb] = 1),
      (qh[O.g.Ma] = 1),
      (qh[O.g.zc] = 1),
      (qh[O.g.Qa] = 1),
      (qh[O.g.Cg] = 1),
      qh),
    ),
    sh = Object.freeze([
      O.g.na,
      O.g.Ud,
      O.g.sb,
      O.g.hc,
      O.g.Dc,
      O.g.ld,
      O.g.Oa,
      O.g.nc,
    ]),
    th = Object.freeze([].concat(ua(sh))),
    uh = Object.freeze([O.g.Sa, O.g.je, O.g.sd, O.g.Rf, O.g.de]),
    vh = Object.freeze([].concat(ua(uh))),
    wh = {},
    xh =
      ((wh[O.g.O] = "1"),
      (wh[O.g.U] = "2"),
      (wh[O.g.N] = "3"),
      (wh[O.g.Aa] = "4"),
      wh),
    zh = {},
    Dh = Object.freeze(
      ((zh[O.g.Rd] = 1),
      (zh[O.g.Sd] = 1),
      (zh[O.g.na] = 1),
      (zh[O.g.Ud] = 1),
      (zh[O.g.Vd] = 1),
      (zh[O.g.Fa] = 1),
      (zh[O.g.bc] = 1),
      (zh[O.g.Ef] = 1),
      (zh[O.g.Wd] = 1),
      (zh[O.g.Xd] = 1),
      (zh[O.g.Yd] = 1),
      (zh[O.g.da] = 1),
      (zh[O.g.Zd] = 1),
      (zh[O.g.eb] = 1),
      (zh[O.g.wa] = 1),
      (zh[O.g.Ra] = 1),
      (zh[O.g.Sa] = 1),
      (zh[O.g.ab] = 1),
      (zh[O.g.Na] = 1),
      (zh[O.g.Ba] = 1),
      (zh[O.g.Gg] = 1),
      (zh[O.g.ae] = 1),
      (zh[O.g.Hg] = 1),
      (zh[O.g.Ig] = 1),
      (zh[O.g.fa] = 1),
      (zh[O.g.dj] = 1),
      (zh[O.g.fe] = 1),
      (zh[O.g.he] = 1),
      (zh[O.g.Kf] = 1),
      (zh[O.g.Dc] = 1),
      (zh[O.g.jc] = 1),
      (zh[O.g.Ob] = 1),
      (zh[O.g.Ta] = 1),
      (zh[O.g.Mf] = 1),
      (zh[O.g.Nf] = 1),
      (zh[O.g.Of] = 1),
      (zh[O.g.nd] = 1),
      (zh[O.g.ya] = 1),
      (zh[O.g.Ga] = 1),
      (zh[O.g.gh] = 1),
      (zh[O.g.hh] = 1),
      (zh[O.g.ih] = 1),
      (zh[O.g.jh] = 1),
      (zh[O.g.Qb] = 1),
      (zh[O.g.Oa] = 1),
      (zh[O.g.kc] = 1),
      (zh[O.g.rd] = 1),
      (zh[O.g.ud] = 1),
      (zh[O.g.Ca] = 1),
      (zh[O.g.Sb] = 1),
      (zh[O.g.nc] = 1),
      (zh[O.g.cb] = 1),
      (zh[O.g.Ha] = 1),
      (zh[O.g.Da] = 1),
      (zh[O.g.oa] = 1),
      zh),
    ),
    Eh = {},
    Fh = Object.freeze(
      ((Eh.search = "s"),
      (Eh.youtube = "y"),
      (Eh.playstore = "p"),
      (Eh.shopping = "h"),
      (Eh.ads = "a"),
      (Eh.maps = "m"),
      Eh),
    );
  Object.freeze(O.g);
  var P = {},
    Gh =
      ((P[O.g.Yb] = "gcu"),
      (P[O.g.rb] = "gclgb"),
      (P[O.g.Za] = "gclaw"),
      (P[O.g.yf] = "gclgs"),
      (P[O.g.zf] = "gcllp"),
      (P[O.g.Af] = "gclst"),
      (P[O.g.Si] = "ndclid"),
      (P[O.g.Ti] = "ngad_source"),
      (P[O.g.Ui] = "ngbraid"),
      (P[O.g.Vi] = "ngclid"),
      (P[O.g.Wi] = "ngclsrc"),
      (P[O.g.Lb] = "auid"),
      (P[O.g.Wd] = "dscnt"),
      (P[O.g.Xd] = "fcntr"),
      (P[O.g.Yd] = "flng"),
      (P[O.g.Zd] = "mid"),
      (P[O.g.Eg] = "bttype"),
      (P[O.g.ub] = "label"),
      (P[O.g.fc] = "capi"),
      (P[O.g.Ff] = "pscdl"),
      (P[O.g.Ba] = "currency_code"),
      (P[O.g.Gg] = "clobs"),
      (P[O.g.ae] = "vdltv"),
      (P[O.g.Hg] = "clolo"),
      (P[O.g.Ig] = "clolb"),
      (P[O.g.Kg] = "_dbg"),
      (P[O.g.he] = "oedeld"),
      (P[O.g.fb] = "edid"),
      (P[O.g.ij] = "fdr"),
      (P[O.g.Pg] = "fledge"),
      (P[O.g.me] = "gac"),
      (P[O.g.Ec] = "gacgb"),
      (P[O.g.Ug] = "gacmcov"),
      (P[O.g.ic] = "gdpr"),
      (P[O.g.hb] = "gdid"),
      (P[O.g.Fc] = "_ng"),
      (P[O.g.Zg] = "gsaexp"),
      (P[O.g.Nb] = "frm"),
      (P[O.g.oe] = "gtm_up"),
      (P[O.g.md] = "lps"),
      (P[O.g.pe] = "did"),
      (P[O.g.Mf] = "fcntr"),
      (P[O.g.Nf] = "flng"),
      (P[O.g.Of] = "mid"),
      (P[O.g.nd] = void 0),
      (P[O.g.ib] = "tiba"),
      (P[O.g.Qb] = "rdp"),
      (P[O.g.zb] = "ecsid"),
      (P[O.g.Sf] = "ga_uid"),
      (P[O.g.ud] = "delopc"),
      (P[O.g.mc] = "gdpr_consent"),
      (P[O.g.Ca] = "oid"),
      (P[O.g.yj] = "uptgs"),
      (P[O.g.Vf] = "uaa"),
      (P[O.g.Wf] = "uab"),
      (P[O.g.Xf] = "uafvl"),
      (P[O.g.Yf] = "uamb"),
      (P[O.g.Zf] = "uam"),
      (P[O.g.cg] = "uap"),
      (P[O.g.dg] = "uapv"),
      (P[O.g.eg] = "uaw"),
      (P[O.g.mh] = "ec_lat"),
      (P[O.g.nh] = "ec_meta"),
      (P[O.g.oh] = "ec_m"),
      (P[O.g.ph] = "ec_sel"),
      (P[O.g.qh] = "ec_s"),
      (P[O.g.vd] = "ec_mode"),
      (P[O.g.Da] = "userId"),
      (P[O.g.wd] = "us_privacy"),
      (P[O.g.oa] = "value"),
      (P[O.g.rh] = "mcov"),
      (P[O.g.Gj] = "hn"),
      (P[O.g.Hj] = "gtm_ee"),
      (P[O.g.Tb] = "npa"),
      (P[O.g.ed] = null),
      (P[O.g.Rb] = null),
      (P[O.g.Ta] = null),
      (P[O.g.da] = null),
      (P[O.g.ya] = null),
      (P[O.g.Ga] = null),
      (P[O.g.Tf] = null),
      (P[O.g.xd] = null),
      (P[O.g.Rd] = null),
      (P[O.g.Sd] = null),
      P);
  function Hh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Ih(b, "u_w", c[0]), Ih(b, "u_h", c[1]));
    }
  }
  function Jh(a, b) {
    a &&
      (a.length === 2
        ? Ih(b, "hl", a)
        : a.length === 5 &&
          (Ih(b, "hl", a.substring(0, 2)), Ih(b, "gl", a.substring(3, 5))));
  }
  function Kh(a) {
    var b = Lh;
    b = b === void 0 ? Mh : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Nh(q.value)),
          r.push(Nh(q.quantity)),
          r.push(Nh(q.item_id)),
          r.push(Nh(q.start_date)),
          r.push(Nh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Mh(a) {
    return Oh(a.item_id, a.id, a.item_name);
  }
  function Oh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Ph(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Ih(a, b, c) {
    c === void 0 || c === null || (c === "" && !cg[b]) || (a[b] = c);
  }
  function Nh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Qh(a) {
    return Rh ? E.querySelectorAll(a) : null;
  }
  function Sh(a, b) {
    if (!Rh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Th = !1;
  if (E.querySelectorAll)
    try {
      var Uh = E.querySelectorAll(":root");
      Uh && Uh.length == 1 && Uh[0] == E.documentElement && (Th = !0);
    } catch (a) {}
  var Rh = Th;
  function Vh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Wh = /^[0-9A-Fa-f]{64}$/;
  function Xh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
            ? b.push(192 | (d >> 6), 128 | (d & 63))
            : d < 55296 || d >= 57344
              ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
              : ((d =
                  65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
                b.push(
                  240 | (d >> 18),
                  128 | ((d >> 12) & 63),
                  128 | ((d >> 6) & 63),
                  128 | (d & 63),
                ));
      }
      return new Uint8Array(b);
    }
  }
  function Yh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = B.crypto) == null ? 0 : b.subtle) {
      if (Wh.test(a)) return Promise.resolve(a);
      try {
        var c = Xh(a);
        return B.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return B.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Zh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var $h = [];
  function ai(a) {
    switch (a) {
      case 0:
        return 0;
      case 46:
        return 1;
      case 47:
        return 2;
      case 48:
        return 9;
      case 54:
        return 3;
      case 71:
        return 4;
      case 95:
        return 5;
      case 97:
        return 6;
      case 114:
        return 7;
      case 115:
        return 11;
      case 116:
        return 8;
    }
  }
  function bi(a, b) {
    $h[a] = b;
    var c = ai(a);
    c !== void 0 && (Ya[c] = b);
  }
  function Q(a) {
    bi(a, !0);
  }
  Q(35);
  Q(31);
  Q(32);
  Q(33);
  Q(34);
  Q(49);
  Q(87);
  Q(16);
  Q(123);
  Q(15);
  Q(129);
  Q(122);
  Q(72);
  Q(98);
  Q(6);
  Q(50);
  Q(4);
  Q(91);
  Q(118);
  Q(84);
  Q(78);
  Q(96);
  Q(134);
  Q(109);
  Q(110);
  Q(130);
  Q(97);
  Q(5);
  bi(20, !1), Q(21);
  Q(114);
  Q(74);
  Za[1] = Zh("1", 6e4);
  Za[3] = Zh("10", 1);
  Za[2] = Zh("", 50);
  Q(26);
  Q(13);
  Q(77);
  Q(101);
  Q(119);
  var di = !1;
  Q(8);
  Q(102);
  Q(65);
  Q(133);
  Q(116);
  Q(105);
  Q(24);
  Q(54);
  Q(106);
  Q(51);
  Q(68);
  Q(115);
  Q(80);
  Q(83);
  Q(93);
  Q(57);
  Q(55);

  Q(82);
  Q(113);
  Q(81);
  Q(75);
  Q(52);
  function R(a) {
    return !!$h[a];
  }
  function ci(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? Q(b) : Q(a);
  }
  function V(a) {
    Va("GTM", a);
  }
  var Ji = { Bn: "101925629~102067555~102067808~102077855~102081485" };
  var Ki = {},
    Li = (B.google_tag_manager = B.google_tag_manager || {});
  Ki.wh = "4bk0";
  Ki.Ce = Number("0") || 0;
  Ki.ob = "dataLayer";
  Ki.Dn =
    "ChAIgOmlugYQ7amh1ZqK1Z8EEiUA5CRVw9lLBIoFCu1jeizN8UKNpQyWrH9BCfIPednPJFH4DwzhGgLBtg\x3d\x3d";
  var Mi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ni = { __paused: 1, __tg: 1 },
    Oi;
  for (Oi in Mi) Mi.hasOwnProperty(Oi) && (Ni[Oi] = 1);
  var Pi = mb(""),
    Qi = !1,
    Ri,
    Si = !1;
  Ri = Si;
  var Ti,
    Ui = !1;
  Ti = Ui;
  var Vi,
    Wi = !1;
  Vi = Wi;
  Ki.xf = "www.googletagmanager.com";
  var Xi = "" + Ki.xf + (Ri ? "/gtag/js" : "/gtm.js"),
    Yi = null,
    Zi = null,
    $i = {},
    aj = {};
  function bj() {
    var a = Li.sequence || 1;
    Li.sequence = a + 1;
    return a;
  }
  Ki.Sk = "";
  var cj = "";
  Ki.xh = cj;
  var dj = function () {
      this.j = new Set();
    },
    fj = function () {
      return Array.from(ej.aa.j).join("~");
    },
    ej = new (function () {
      this.aa = new dj();
      this.C = !1;
      this.j = 0;
      this.K = this.P = this.Ua = this.H = "";
    })();
  function gj() {
    var a = ej.H.length;
    return ej.H[a - 1] === "/" ? ej.H.substring(0, a - 1) : ej.H;
  }
  function hj() {
    return ej.C ? (R(75) ? ej.j === 0 : ej.j !== 1) : !1;
  }
  function ij(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var jj = new hb(),
    kj = {},
    lj = {},
    oj = {
      name: Ki.ob,
      set: function (a, b) {
        Vc(yb(a, b), kj);
        mj();
      },
      get: function (a) {
        return nj(a, 2);
      },
      reset: function () {
        jj = new hb();
        kj = {};
        mj();
      },
    };
  function nj(a, b) {
    return b != 2 ? jj.get(a) : pj(a);
  }
  function pj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = kj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function qj(a, b) {
    lj.hasOwnProperty(a) || (jj.set(a, b), Vc(yb(a, b), kj), mj());
  }
  function rj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = nj(c, 1);
      if (Array.isArray(d) || Uc(d)) d = Vc(d, null);
      lj[c] = d;
    }
  }
  function mj(a) {
    ib(lj, function (b, c) {
      jj.set(b, c);
      Vc(yb(b), kj);
      Vc(yb(b, c), kj);
      a && delete lj[b];
    });
  }
  function sj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? pj(a) : jj.get(a);
    Sc(d) === "array" || Sc(d) === "object" ? (c = Vc(d, null)) : (c = d);
    return c;
  }
  var xj = /:[0-9]+$/,
    yj = /^\d+\.fls\.doubleclick\.net$/;
  function zj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = ta(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Aj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Bj(a.protocol) || Bj(B.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : B.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : ""),
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || B.location.hostname)
          .replace(xj, "")
          .toLowerCase());
    return Cj(a, b, c, d, e);
  }
  function Cj(a, b, c, d, e) {
    var f,
      g = Bj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Dj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(xj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""),
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = zj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Bj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Dj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Ej = {},
    Fj = 0;
  function Gj(a) {
    var b = Ej[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(xj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Fj < 5 && ((Ej[a] = b), Fj++);
    }
    return b;
  }
  function Hj(a) {
    var b = Gj(B.location.href),
      c = Aj(b, "host", !1);
    if (c && c.match(yj)) {
      var d = Aj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  function Ij(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  }
  var Jj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Kj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Gj("" + c + b).href;
    }
  }
  function Lj(a, b) {
    if (hj() || Ti) return Kj(a, b);
  }
  function Mj() {
    return !!Ki.xh && Ki.xh.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Nj(a) {
    for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function Oj(a, b) {
    return hj() ? "" + gj() + (b ? Jj[a] || "" : "") : a;
  }
  function Pj(a) {
    var b = String(a[Le.ra] || "").replace(/_/g, "");
    return vb(b, "cvt") ? "cvt" : b;
  }
  var Qj =
    B.location.search.indexOf("?gtm_latency=") >= 0 ||
    B.location.search.indexOf("&gtm_latency=") >= 0;
  var Rj = { sampleRate: "0.005000", Ok: "", An: "0.01" },
    Sj = Math.random(),
    Tj;
  if (!(Tj = Qj)) {
    var Uj = Rj.sampleRate;
    Tj = Sj < Number(Uj);
  }
  var Vj = Tj,
    Wj =
      (jc == null ? void 0 : jc.includes("gtm_debug=d")) ||
      Qj ||
      Sj >= 1 - Number(Rj.An);
  var Xj = /gtag[.\/]js/,
    Yj = /gtm[.\/]js/,
    Zj = !1;
  function bk(a) {
    if (Zj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Xj.test(c)) return "3";
      if (Yj.test(c)) return "2";
    }
    return "0";
  }
  function ck(a, b) {
    var c = dk();
    c.pending || (c.pending = []);
    eb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function ek() {
    var a = B.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var fk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = ek();
  };
  function dk() {
    var a = kc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new fk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = ek());
    return c;
  }
  var gk = {},
    hk = !1,
    Qf = {
      ctid: "GTM-NNH5WQCN",
      canonicalContainerId: "176718648",
      tk: "GTM-NNH5WQCN",
      uk: "GTM-NNH5WQCN",
    };
  gk.ze = mb("");
  function ik() {
    return (
      gk.ze &&
      jk().some(function (a) {
        return a === Qf.ctid;
      })
    );
  }
  function kk() {
    var a = lk();
    return hk ? a.map(mk) : a;
  }
  function nk() {
    var a = jk();
    return hk ? a.map(mk) : a;
  }
  function ok() {
    return pk(Qf.ctid);
  }
  function qk() {
    return pk(Qf.canonicalContainerId || "_" + Qf.ctid);
  }
  function lk() {
    return Qf.tk ? Qf.tk.split("|") : [Qf.ctid];
  }
  function jk() {
    return Qf.uk ? Qf.uk.split("|") : [];
  }
  function rk() {
    var a = sk(tk()),
      b = a && a.parent;
    if (b) return sk(b);
  }
  function sk(a) {
    var b = dk();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function pk(a) {
    return hk ? mk(a) : a;
  }
  function mk(a) {
    return "siloed_" + a;
  }
  function uk(a) {
    return hk ? vk(a) : a;
  }
  function vk(a) {
    a = String(a);
    return vb(a, "siloed_") ? a.substring(7) : a;
  }
  function wk() {
    var a = !1;
    if (a) {
      var b = dk();
      if (b.siloed) {
        for (
          var c = [], d = lk().map(mk), e = jk().map(mk), f = {}, g = 0;
          g < b.siloed.length;
          f = { ig: void 0 }, g++
        )
          (f.ig = b.siloed[g]),
            !hk &&
            eb(
              f.ig.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.ig.ctid;
                };
              })(f),
            )
              ? (hk = !0)
              : c.push(f.ig);
        b.siloed = c;
      }
    }
  }
  function xk() {
    var a = dk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = kk(), f = nk(), g = {}, k = 0;
        k < a.pending.length;
        g = { hf: void 0 }, k++
      )
        (g.hf = a.pending[k]),
          eb(
            g.hf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.hf.target.ctid;
              };
            })(g),
          )
            ? d || ((b = g.hf.onLoad), (d = !0))
            : c.push(g.hf);
      a.pending = c;
      if (b)
        try {
          b(qk());
        } catch (m) {}
    }
  }
  function yk() {
    for (
      var a = Qf.ctid,
        b = kk(),
        c = nk(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Qf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ic && (q.scriptElement = ic);
          jc && (q.scriptSource = jc);
          if (rk() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var u;
                b: {
                  var v,
                    t = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (t) {
                    for (
                      var w = ej.C,
                        x = Gj(t),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        A = E.scripts,
                        C = "",
                        D = 0;
                      D < A.length;
                      ++D
                    ) {
                      var G = A[D];
                      if (
                        !(
                          G.innerHTML.length === 0 ||
                          (!w &&
                            G.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET",
                            ) < 0) ||
                          G.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (G.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          u = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      u = C;
                      break b;
                    }
                  }
                  u = void 0;
                }
                var J = u;
                if (J) {
                  Zj = !0;
                  r = J;
                  break a;
                }
              }
              var F = [].slice.call(document.scripts);
              r = q.scriptElement ? String(F.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = bk(q);
          }
          var T = p ? e.destination : e.container,
            M = T[n];
          M ? (p && M.state === 0 && V(93), Object.assign(M, q)) : (T[n] = q);
        },
        e = dk(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[qk()] = {};
    xk();
  }
  function zk(a) {
    return !!dk().container[a];
  }
  function Ak(a) {
    var b = dk().destination[a];
    return !!b && !!b.state;
  }
  function tk() {
    return { ctid: ok(), isDestination: gk.ze };
  }
  function Bk(a) {
    var b = dk();
    (b.siloed = b.siloed || []).push(a);
  }
  function Ck() {
    var a = dk().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Dk() {
    var a = {};
    ib(dk().destination, function (b, c) {
      c.state === 0 && (a[vk(b)] = c);
    });
    return a;
  }
  function Ek(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Fk = "/td?id=" + Qf.ctid,
    Gk = ["v", "t", "pid", "dl", "tdp"],
    Hk = ["mcc"],
    Ik = {},
    Jk = {};
  function Kk(a, b, c) {
    Jk[a] = b;
    (c === void 0 || c) && Lk(a);
  }
  function Lk(a, b) {
    if (Ik[a] === void 0 || (b === void 0 ? 0 : b)) Ik[a] = !0;
  }
  function Mk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Ik)
      .filter(function (c) {
        return Ik[c] === !0 && Jk[c] !== void 0 && (a || !Hk.includes(c));
      })
      .map(function (c) {
        var d = Jk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Oj("https://www.googletagmanager.com") + Fk + ("" + b + "&z=0");
  }
  function Nk() {
    Object.keys(Ik).forEach(function (a) {
      Gk.indexOf(a) < 0 && (Ik[a] = !1);
    });
  }
  function Ok(a) {
    a = a === void 0 ? !1 : a;
    if (Wj && Qf.ctid) {
      var b = Mk(a);
      a ? Ec(b) : uc(b);
      Nk();
    }
  }
  function Pk() {
    Object.keys(Ik).filter(function (a) {
      return Ik[a] && !Gk.includes(a);
    }).length > 0 && Ok(!0);
  }
  var Qk = fb();
  function Rk() {
    Qk = fb();
  }
  function Sk() {
    Kk("v", "3");
    Kk("t", "t");
    Kk("pid", function () {
      return String(Qk);
    });
    vc(B, "pagehide", Pk);
    B.setInterval(Rk, 864e5);
  }
  function Tk() {
    var a = kc("google_tag_data", {});
    return (a.ics = a.ics || new Uk());
  }
  var Uk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Uk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Vk(this, a, b === "granted", c, d, e, f, g);
  };
  Uk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Vk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Vk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        B.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Uk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Wk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Wk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Ed: b });
  };
  var Wk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.vk = !0);
    }
  };
  Uk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.vk) {
        d.vk = !1;
        try {
          d.Ed({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Xk = !1,
    Yk = !1,
    Zk = {},
    $k = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Zk.ad_storage = 1),
        (Zk.analytics_storage = 1),
        (Zk.ad_user_data = 1),
        (Zk.ad_personalization = 1),
        Zk),
      usedContainerScopedDefaults: !1,
    };
  function al(a) {
    var b = Tk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, $k)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function bl(a) {
    var b = Tk();
    b.accessedAny = !0;
    return b.getConsentState(a, $k);
  }
  function cl(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = $k.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function dl(a) {
    var b = Tk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function el() {
    if (!$a(10)) return !1;
    var a = Tk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!$k.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys($k.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if ($k.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function fl(a, b) {
    Tk().addListener(a, b);
  }
  function gl(a, b) {
    Tk().notifyListeners(a, b);
  }
  function hl(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!dl(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      fl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function il(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        al(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      fl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : B.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var jl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    kl = !1,
    ll = !1;
  function ml() {
    !ll &&
      kl &&
      (jl.some(function (a) {
        return $k.containerScopedDefaults[a] !== 1;
      }) ||
        nl("mbc"));
    ll = !0;
  }
  function nl(a) {
    Wj && (Kk(a, "1"), Ok());
  }
  function ol(a) {
    Va("HEALTH", a);
  }
  var pl;
  try {
    pl = JSON.parse(
      Ta(
        "eyIwIjoiQ0giLCIxIjoiQ0gtQUciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jaCIsIjQiOiJyZWdpb24xIiwiNSI6ZmFsc2UsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0",
      ),
    );
  } catch (a) {
    V(123), ol(2), (pl = {});
  }
  function ql() {
    return pl["0"] || "";
  }
  function rl() {
    return pl["1"] || "";
  }
  function sl() {
    var a = !1;
    return a;
  }
  function tl() {
    return pl["6"] !== !1;
  }
  function ul() {
    var a = "";
    return a;
  }
  function vl() {
    var a = !1;
    return a;
  }
  function wl() {
    var a = "";
    return a;
  }
  var xl = [O.g.O, O.g.U, O.g.N, O.g.Aa],
    yl,
    zl;
  function Al(a) {
    for (
      var b = a[O.g.Jb], c = Array.isArray(b) ? b : [b], d = { Ve: 0 };
      d.Ve < c.length;
      d = { Ve: d.Ve }, ++d.Ve
    )
      ib(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== O.g.Jb) {
              var k = c[e.Ve],
                m = ql(),
                n = rl();
              Yk = !0;
              Xk && Va("TAGGING", 20);
              Tk().declare(f, g, k, m, n);
            }
          };
        })(d),
      );
  }
  function Bl(a) {
    ml();
    !zl && yl && nl("crc");
    zl = !0;
    var b = a[O.g.Jb];
    b && V(40);
    var c = a[O.g.vf];
    c && V(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { We: 0 };
      e.We < d.length;
      e = { We: e.We }, ++e.We
    )
      ib(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== O.g.Jb && g !== O.g.vf) {
              var m = d[f.We],
                n = Number(c),
                p = ql(),
                q = rl();
              n = n === void 0 ? 0 : n;
              Xk = !0;
              Yk && Va("TAGGING", 20);
              Tk().default(g, k, m, p, q, n, $k);
            }
          };
        })(e),
      );
  }
  function Cl(a) {
    $k.usedContainerScopedDefaults = !0;
    var b = a[O.g.Jb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(rl()) && !c.includes(ql())) return;
    }
    ib(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      $k.usedContainerScopedDefaults = !0;
      $k.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Dl(a, b) {
    ml();
    yl = !0;
    ib(a, function (c, d) {
      Xk = !0;
      Yk && Va("TAGGING", 20);
      Tk().update(c, d, $k);
    });
    gl(b.eventId, b.priorityId);
  }
  function El(a) {
    a.hasOwnProperty("all") &&
      (($k.selectedAllCorePlatformServices = !0),
      ib(Fh, function (b) {
        $k.corePlatformServices[b] = a.all === "granted";
        $k.usedCorePlatformServices = !0;
      }));
    ib(a, function (b, c) {
      b !== "all" &&
        (($k.corePlatformServices[b] = c === "granted"),
        ($k.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return al(b);
    });
  }
  function Fl(a, b) {
    fl(a, b);
  }
  function Gl(a, b) {
    il(a, b);
  }
  function Hl(a, b) {
    hl(a, b);
  }
  function Il() {
    var a = [O.g.O, O.g.Aa, O.g.N];
    Tk().waitForUpdate(a, 500, $k);
  }
  function Jl(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Tk().clearTimeout(d, void 0, $k);
    }
    gl();
  }
  var Kl = !1,
    Ll = [];
  var Ml = {
      Vj: "service_worker_endpoint",
      yh: "shared_user_id",
      zh: "shared_user_id_requested",
      Ee: "shared_user_id_source",
      wf: "cookie_deprecation_label",
    },
    Nl;
  function Ol(a) {
    if (!Nl) {
      Nl = {};
      for (var b = l(Object.keys(Ml)), c = b.next(); !c.done; c = b.next())
        Nl[Ml[c.value]] = !0;
    }
    return !!Nl[a];
  }
  function Pl(a, b) {
    b = b === void 0 ? !1 : b;
    if (Ol(a)) {
      var c,
        d,
        e =
          (d = (c = kc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Ql(a, b) {
    var c = Pl(a, !0);
    c && c.set(b);
  }
  function Rl(a) {
    var b;
    return (b = Pl(a)) == null ? void 0 : b.get();
  }
  function Sl(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Pl(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Tl(a, b) {
    var c = Pl(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Ul() {
    if (Li.pscdl !== void 0) Rl(Ml.wf) === void 0 && Ql(Ml.wf, Li.pscdl);
    else {
      var a = function (c) {
          Li.pscdl = c;
          Ql(Ml.wf, c);
        },
        b = function () {
          a("error");
        };
      try {
        gc.cookieDeprecationLabel
          ? (a("pending"),
            gc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Vl(a, b) {
    b &&
      ib(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Wl = /[A-Z]+/,
    Xl = /\s/;
  function Yl(a, b) {
    if (z(a)) {
      a = ob(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Wl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Xl.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Zl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Yl(a[d], b);
      e && (c[e.id] = e);
    }
    $l(c);
    var f = [];
    ib(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function $l(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[am[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var bm = {},
    am =
      ((bm[0] = 0),
      (bm[1] = 0),
      (bm[2] = 1),
      (bm[3] = 0),
      (bm[4] = 1),
      (bm[5] = 2),
      (bm[6] = 0),
      (bm[7] = 0),
      (bm[8] = 0),
      bm);
  var cm = Number("") || 500,
    dm = {},
    em = {},
    fm = { initialized: 11, complete: 12, interactive: 13 },
    gm = {},
    hm = Object.freeze(((gm[O.g.Oa] = !0), gm)),
    im =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    jm = void 0;
  function km(a, b) {
    if (b.length && Wj) {
      var c;
      (c = dm)[a] != null || (c[a] = []);
      em[a] != null || (em[a] = []);
      var d = b.filter(function (e) {
        return !em[a].includes(e);
      });
      dm[a].push.apply(dm[a], ua(d));
      em[a].push.apply(em[a], ua(d));
      !jm &&
        d.length > 0 &&
        (Lk("tdc", !0),
        (jm = B.setTimeout(function () {
          Ok();
          dm = {};
          jm = void 0;
        }, cm)));
    }
  }
  function lm(a, b, c) {
    if (Wj && a === "config") {
      var d,
        e = (d = Yl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = kc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Vc(c.K);
        Vc(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = mm(f[n], k);
            p.length && (im && console.log(p), m.push(n));
          }
        m.length && (km(b, m), Va("TAGGING", fm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function nm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function mm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Sc(u) === "object" ? (v = u[r]) : Sc(u) === "array" && (v = u[r]);
        return v === void 0 ? hm[r] : v;
      },
      f = nm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Sc(m) === "object" || Sc(m) === "array",
          q = Sc(n) === "object" || Sc(n) === "array";
        if (p && q) mm(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function om() {
    Kk(
      "tdc",
      function () {
        jm && (B.clearTimeout(jm), (jm = void 0));
        var a = [],
          b;
        for (b in dm) dm.hasOwnProperty(b) && a.push(b + "*" + dm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1,
    );
  }
  var pm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    qm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = l(qm(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    rm = function (a) {
      for (
        var b = {}, c = qm(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    sm = function (a, b, c) {
      function d(n) {
        Uc(n) &&
          ib(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = qm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    tm = function (a) {
      for (
        var b = [O.g.Zc, O.g.Vc, O.g.Wc, O.g.Xc, O.g.Yc, O.g.bd, O.g.dd],
          c = qm(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    um = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    vm = function (a, b) {
      a.C = b;
      return a;
    },
    wm = function (a, b) {
      a.P = b;
      return a;
    },
    xm = function (a, b) {
      a.j = b;
      return a;
    },
    ym = function (a, b) {
      a.H = b;
      return a;
    },
    zm = function (a, b) {
      a.aa = b;
      return a;
    },
    Am = function (a, b) {
      a.K = b;
      return a;
    },
    Bm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Cm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Dm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Em = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Fm = function (a) {
      return new pm(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent,
      );
    };
  var Gm = { Nk: Number("5"), qo: Number("") },
    Hm = [];
  function Im(a) {
    Hm.push(a);
  }
  var Jm = "?id=" + Qf.ctid,
    Km = void 0,
    Lm = {},
    Mm = void 0,
    Nm = new (function () {
      var a = 5;
      Gm.Nk > 0 && (a = Gm.Nk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Om = 1e3;
  function Pm(a, b) {
    var c = Km;
    if (c === void 0)
      if (b) c = bj();
      else return "";
    for (
      var d = [Oj("https://www.googletagmanager.com"), "/a", Jm],
        e = l(Hm),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Tc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Qm() {
    Mm && (B.clearTimeout(Mm), (Mm = void 0));
    if (Km !== void 0 && Rm) {
      var a;
      (a = Lm[Km]) || (a = Nm.j < Nm.C ? !1 : qb() - Nm.H[Nm.j % Nm.C] < 1e3);
      if (a || Om-- <= 0) V(1), (Lm[Km] = !0);
      else {
        var b = Nm.j++ % Nm.C;
        Nm.H[b] = qb();
        var c = Pm(!0);
        uc(c);
        Rm = !1;
      }
    }
  }
  var Rm = !1;
  function Sm(a) {
    Lm[a] ||
      (a !== Km && (Qm(), (Km = a)),
      (Rm = !0),
      Mm || (Mm = B.setTimeout(Qm, 500)),
      Pm().length >= 2022 && Qm());
  }
  var Tm = fb();
  function Um() {
    Tm = fb();
  }
  function Vm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Tm)],
    ];
  }
  var Wm = {};
  function Xm(a, b, c) {
    Vj && a !== void 0 && ((Wm[a] = Wm[a] || []), Wm[a].push(c + b), Sm(a));
  }
  function Ym(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = Wm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Wm[b];
    return d;
  }
  function Zm(a, b) {
    var c = Yl(pk(a), !0);
    c && $m.register(c, b);
  }
  function an(a, b, c, d) {
    var e = Yl(c, d.isGtmEvent);
    e && (R(51) && Qi && (d.deferrable = !0), $m.push("event", [b, a], e, d));
  }
  function bn(a, b, c, d) {
    var e = Yl(c, d.isGtmEvent);
    e && $m.push("get", [a, b], e, d);
  }
  function cn(a) {
    var b = Yl(pk(a), !0),
      c;
    b ? (c = dn($m, b).j) : (c = {});
    return c;
  }
  function en(a, b) {
    var c = Yl(pk(a), !0);
    if (c) {
      var d = $m,
        e = Vc(b, null);
      Vc(dn(d, c).j, e);
      dn(d, c).j = e;
    }
  }
  var fn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    gn = function (a, b, c, d) {
      this.C = qb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    hn = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    dn = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new fn());
    },
    jn = function (a, b, c, d) {
      if (d.j) {
        var e = dn(a, d.j),
          f = e.aa;
        if (f) {
          var g = Vc(c, null),
            k = Vc(e.P[d.j.id], null),
            m = Vc(e.K, null),
            n = Vc(e.j, null),
            p = Vc(a.j, null),
            q = {};
          if (Vj)
            try {
              q = Vc(kj, null);
            } catch (t) {
              V(72);
            }
          var r = d.j.prefix,
            u = function (t) {
              Xm(d.messageContext.eventId, r, t);
            },
            v = Fm(
              Em(
                Dm(
                  Cm(
                    Bm(
                      zm(
                        ym(
                          Am(
                            xm(
                              wm(
                                vm(
                                  new um(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId,
                                  ),
                                  g,
                                ),
                                k,
                              ),
                              m,
                            ),
                            n,
                          ),
                          p,
                        ),
                        q,
                      ),
                      d.messageContext.eventMetadata,
                    ),
                    function () {
                      if (u) {
                        var t = u;
                        u = void 0;
                        t("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    },
                  ),
                  function () {
                    if (u) {
                      var t = u;
                      u = void 0;
                      t("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  },
                ),
                !!d.messageContext.isGtmEvent,
              ),
            );
          try {
            Xm(d.messageContext.eventId, r, "1"),
              lm(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (t) {
            Xm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  hn.prototype.register = function (a, b, c) {
    var d = dn(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Vc(d.j, c), (d.j = c)), this.flush());
  };
  hn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (dn(this, c).status === 1 &&
        ((dn(this, c).status = 2), this.push("require", [{}], c, {})),
      dn(this, c).H && (d.deferrable = !1));
    this.commands.push(new gn(a, c, b, d));
    d.deferrable || this.flush();
  };
  hn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Jc: void 0, Mh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || dn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (dn(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            ib(f.args[0], function (r, u) {
              Vc(yb(r, u), b.j);
            });
            break;
          case "config":
            var k = dn(this, g);
            e.Jc = {};
            ib(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Vc(yb(u, v), r.Jc);
                };
              })(e),
            );
            var m = !!e.Jc[O.g.nc];
            delete e.Jc[O.g.nc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || jn(this, O.g.ba, e.Jc, f);
            k.H = !0;
            n ? Vc(e.Jc, k.K) : (Vc(e.Jc, k.P[g.id]), V(70));
            d = !0;
            break;
          case "event":
            e.Mh = {};
            ib(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Vc(yb(u, v), r.Mh);
                };
              })(e),
            );
            jn(this, f.args[1], e.Mh, f);
            break;
          case "get":
            var p = {},
              q = ((p[O.g.xb] = f.args[0]), (p[O.g.Mb] = f.args[1]), p);
            jn(this, O.g.Ya, q, f);
        }
        this.commands.shift();
        kn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var kn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = dn(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    $m = new hn();
  var ln = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    mn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var nn = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    on = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var pn, qn;
  a: {
    for (var rn = ["CLOSURE_FLAGS"], sn = Aa, tn = 0; tn < rn.length; tn++)
      if (((sn = sn[rn[tn]]), sn == null)) {
        qn = null;
        break a;
      }
    qn = sn;
  }
  var un = qn && qn[610401301];
  pn = un != null ? un : !1;
  function vn() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var wn,
    xn = Aa.navigator;
  wn = xn ? xn.userAgentData || null : null;
  function yn(a) {
    return pn
      ? wn
        ? wn.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function zn(a) {
    return vn().indexOf(a) != -1;
  }
  function An() {
    return pn ? !!wn && wn.brands.length > 0 : !1;
  }
  function Bn() {
    return An() ? !1 : zn("Opera");
  }
  function Cn() {
    return zn("Firefox") || zn("FxiOS");
  }
  function Dn() {
    return An()
      ? yn("Chromium")
      : ((zn("Chrome") || zn("CriOS")) && !(An() ? 0 : zn("Edge"))) ||
          zn("Silk");
  }
  var En = function (a) {
    En[" "](a);
    return a;
  };
  En[" "] = function () {};
  var Fn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Gn = /#|$/,
    Hn = function (a, b) {
      var c = a.search(Gn),
        d = Fn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "),
      );
    },
    In = /[?&]($|#)/,
    Jn = function (a, b, c) {
      for (
        var d, e = a.search(Gn), f = 0, g, k = [];
        (g = Fn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(In, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Kn() {
    return pn ? !!wn && !!wn.platform : !1;
  }
  function Ln() {
    return zn("iPhone") && !zn("iPod") && !zn("iPad");
  }
  function Mn() {
    Ln() || zn("iPad") || zn("iPod");
  }
  Bn();
  An() || zn("Trident") || zn("MSIE");
  zn("Edge");
  !zn("Gecko") ||
    (vn().toLowerCase().indexOf("webkit") != -1 && !zn("Edge")) ||
    zn("Trident") ||
    zn("MSIE") ||
    zn("Edge");
  vn().toLowerCase().indexOf("webkit") != -1 && !zn("Edge") && zn("Mobile");
  Kn() || zn("Macintosh");
  Kn() || zn("Windows");
  (Kn() ? wn.platform === "Linux" : zn("Linux")) || Kn() || zn("CrOS");
  Kn() || zn("Android");
  Ln();
  zn("iPad");
  zn("iPod");
  Mn();
  vn().toLowerCase().indexOf("kaios");
  var Nn = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              En(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    On = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Pn = function (a) {
      if (B.top == B) return 0;
      if (a === void 0 ? 0 : a) {
        var b = B.location.ancestorOrigins;
        if (b) return b[b.length - 1] == B.location.origin ? 1 : 2;
      }
      return Nn(B.top) ? 1 : 2;
    },
    Qn = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Rn = function () {
      for (var a = B, b = a; a && a != a.parent; )
        (a = a.parent), Nn(a) && (b = a);
      return b;
    };
  function Sn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Qn(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = dc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        on(e, "load", f);
        on(e, "error", f);
      };
      nn(e, "load", f);
      nn(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Un = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      On(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Tn(c, b);
    },
    Tn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Sn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Vn = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Vn.prototype.P = !1;
  Vn.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ua());
  };
  Vn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Vn.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Vn.prototype.Ua = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Wn(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
  }
  var Xn = function (a, b) {
    b = b === void 0 ? {} : b;
    Vn.call(this);
    this.j = null;
    this.aa = {};
    this.fg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.xe = (c = b.vn) != null ? c : 500;
    var d;
    this.Ic = (d = b.Yn) != null ? d : !1;
  };
  ra(Xn, Vn);
  Xn.prototype.Ua = function () {
    this.aa = {};
    this.K && (on(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Vn.prototype.Ua.call(this);
  };
  var Zn = function (a) {
    return typeof a.H.__tcfapi === "function" || Yn(a) != null;
  };
  Xn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Ic },
      d = mn(function () {
        return a(c);
      }),
      e = 0;
    this.xe !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.xe));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Wn(c)),
          (c.internalBlockOnErrors = b.Ic),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      $n(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Xn.prototype.removeEventListener = function (a) {
    a && a.listenerId && $n(this, "removeEventListener", null, a.listenerId);
  };
  var bo = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = ao(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && ao(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? ao(a.purpose.legitimateInterests, b) &&
                ao(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    ao = function (a, b) {
      return !(!a || !a[b]);
    },
    $n = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Yn(a)) {
        co(a);
        var g = ++a.fg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*",
          );
        }
      } else c({}, !1);
    },
    Yn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    co = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        nn(a.H, "message", b);
      }
    },
    eo = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Wn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Un({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
            (a.eventStatus !== "tcloaded" &&
              a.eventStatus !== "useractioncomplete")
          ? !1
          : !0;
    };
  var fo = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function go() {
    var a = Li.tcf || {};
    return (Li.tcf = a);
  }
  var po = function () {
    return new Xn(B, { vn: -1 });
  };
  function qo() {
    var a = go(),
      b = po();
    Zn(b) && !ro() && !so() && V(124);
    if (!a.active && Zn(b)) {
      ro() &&
        ((a.active = !0),
        (a.uc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Tk().active = !0),
        (a.tcString = "tcunavailable"));
      Il();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            to(a), Jl([O.g.O, O.g.Aa, O.g.N]), (Tk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            so() && (a.active = !0),
            !uo(c) || ro() || so())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in fo) fo.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (uo(c)) {
              var g = {},
                k;
              for (k in fo)
                if (fo.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { jm: !0 };
                    p = p === void 0 ? {} : p;
                    m = eo(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                          ? !p.pk
                          : (p.pk || n.gdprApplies !== void 0 || p.jm) &&
                              (p.pk ||
                                (typeof n.tcString === "string" &&
                                  n.tcString.length))
                            ? bo(n, "1", 0)
                            : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = bo(c, k, fo[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.uc = d;
              var q = {},
                r = ((q[O.g.O] = a.uc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Jl([O.g.O, O.g.Aa, O.g.N]), (Tk().active = !0))
                : ((r[O.g.Aa] = a.uc["3"] && a.uc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[O.g.N] = a.uc["1"] && a.uc["7"] ? "granted" : "denied")
                    : Jl([O.g.N]),
                  Dl(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: vo() || "",
                    },
                  ));
            }
          } else Jl([O.g.O, O.g.Aa, O.g.N]);
        });
      } catch (c) {
        to(a), Jl([O.g.O, O.g.Aa, O.g.N]), (Tk().active = !0);
      }
    }
  }
  function to(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function uo(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function ro() {
    return B.gtag_enable_tcf_support === !0;
  }
  function so() {
    return go().enableAdvertiserConsentMode === !0;
  }
  function vo() {
    var a = go();
    if (a.active) return a.tcString;
  }
  function wo() {
    var a = go();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function xo(a) {
    if (!fo.hasOwnProperty(String(a))) return !0;
    var b = go();
    return b.active && b.uc ? !!b.uc[String(a)] : !0;
  }
  var yo = [O.g.O, O.g.U, O.g.N, O.g.Aa],
    zo = {},
    Ao = ((zo[O.g.O] = 1), (zo[O.g.U] = 2), zo);
  function Bo(a) {
    if (a === void 0) return 0;
    switch (W(a, O.g.na)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Co(a) {
    if (rl() === "US-CO" && gc.globalPrivacyControl === !0) return !1;
    var b = Bo(a);
    if (b === 3) return !1;
    switch (bl(O.g.Aa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Do() {
    return el() || !al(O.g.O) || !al(O.g.U);
  }
  function Eo() {
    var a = {},
      b;
    for (b in Ao) Ao.hasOwnProperty(b) && (a[Ao[b]] = bl(b));
    return "G1" + Ie(a[1] || 0) + Ie(a[2] || 0);
  }
  var Fo = {},
    Go =
      ((Fo[O.g.O] = 0), (Fo[O.g.U] = 1), (Fo[O.g.N] = 2), (Fo[O.g.Aa] = 3), Fo);
  function Ho(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Io(a) {
    for (var b = "1", c = 0; c < yo.length; c++) {
      var d = b,
        e,
        f = yo[c],
        g = $k.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Go.hasOwnProperty(g) ? 12 | Go[g] : 8;
      var k = Tk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Ho(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Ho(m.declare) << 4) | (Ho(m.default) << 2) | Ho(m.update)
          ]);
    }
    var n = b,
      p = (rl() === "US-CO" && gc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (el() ? 1 : 0) << 2,
      r = Bo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ($k.containerScopedDefaults.ad_storage << 4) |
          ($k.containerScopedDefaults.analytics_storage << 2) |
          $k.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (($k.usedContainerScopedDefaults ? 1 : 0) << 2) |
          $k.containerScopedDefaults.ad_personalization
      ]);
  }
  function Jo() {
    if (!al(O.g.N)) return "-";
    for (
      var a = Object.keys(Fh), b = cl(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += Fh[f]);
    }
    ($k.usedCorePlatformServices ? $k.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Ko() {
    return tl() || ((ro() || so()) && wo() === "1") ? "1" : "0";
  }
  function Lo() {
    return (tl() ? !0 : !(!ro() && !so()) && wo() === "1") || !al(O.g.N);
  }
  function Mo() {
    var a = "0",
      b = "0",
      c;
    var d = go();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = go();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    tl() && (k |= 1);
    wo() === "1" && (k |= 2);
    ro() && (k |= 4);
    var m;
    var n = go();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Tk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function No() {
    return rl() === "US-CO";
  }
  function Oo() {
    var a = !1;
    return a;
  }
  var Po = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Qo(a) {
    a = a === void 0 ? {} : a;
    var b = Qf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Qf.ctid,
        kn: Ki.Ce,
        mn: Ki.wh,
        Mm: gk.ze ? 2 : 1,
        rn: a.ug,
        Ke: Qf.canonicalContainerId,
      };
    c.Ke !== a.qa && (c.qa = a.qa);
    var d = rk();
    c.Wm = d ? d.canonicalContainerId : void 0;
    Ri ? ((c.rg = Po[b]), c.rg || (c.rg = 0)) : (c.rg = Vi ? 13 : 10);
    ej.C
      ? ((c.pg = 0), (c.Ol = 2))
      : Ti
        ? (c.pg = 1)
        : Oo()
          ? (c.pg = 2)
          : (c.pg = 3);
    var e = {};
    e[6] = hk;
    ej.j === 2 ? (e[7] = !0) : ej.j === 1 && (e[2] = !0);
    if (jc) {
      var f = Aj(Gj(jc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Rl = e;
    var g = a.hg,
      k;
    var m = c.rg,
      n = c.pg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ke(1, 1) + He((m << 2) | n)));
    var p = c.Ol,
      q = "4" + k + (p ? "" + Ke(2, 1) + He(p) : ""),
      r,
      u = c.mn;
    r = u && Je.test(u) ? "" + Ke(3, 2) + u : "";
    var v,
      t = c.kn;
    v = t ? "" + Ke(4, 1) + He(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        A = y[0].toUpperCase();
      if (A !== "GTM" && A !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ke(5, 3) + He(1 + C.length) + (c.Mm || 0) + C;
      }
    } else w = "";
    var D = c.rn,
      G = c.Ke,
      J = c.qa,
      F = c.no,
      T =
        q +
        r +
        v +
        w +
        (D ? "" + Ke(6, 1) + He(D) : "") +
        (G ? "" + Ke(7, 3) + He(G.length) + G : "") +
        (J ? "" + Ke(8, 3) + He(J.length) + J : "") +
        (F ? "" + Ke(9, 3) + He(F.length) + F : ""),
      M;
    var aa = c.Rl;
    aa = aa === void 0 ? {} : aa;
    for (
      var da = [], U = l(Object.keys(aa)), S = U.next();
      !S.done;
      S = U.next()
    ) {
      var N = S.value;
      da[Number(N)] = aa[N];
    }
    if (da.length) {
      var la = Ke(10, 3),
        ia;
      if (da.length === 0) ia = He(0);
      else {
        for (var ea = [], sa = 0, Ma = !1, za = 0; za < da.length; za++) {
          Ma = !0;
          var Sa = za % 6;
          da[za] && (sa |= 1 << Sa);
          Sa === 5 && (ea.push(He(sa)), (sa = 0), (Ma = !1));
        }
        Ma && ea.push(He(sa));
        ia = ea.join("");
      }
      var jb = ia;
      M = "" + la + He(jb.length) + jb;
    } else M = "";
    var lc = c.Wm;
    return T + M + (lc ? "" + Ke(11, 3) + He(lc.length) + lc : "");
  }
  function Ro(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function So(a) {
    return a.origin !== "null";
  }
  function To(a, b, c, d) {
    var e;
    if (Uo(d)) {
      for (
        var f = [], g = String(b || Vo()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Wo(a, b, c, d, e) {
    if (Uo(e)) {
      var f = Xo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Yo(
          f,
          function (g) {
            return g.Xl;
          },
          b,
        );
        if (f.length === 1) return f[0].id;
        f = Yo(
          f,
          function (g) {
            return g.Ym;
          },
          c,
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Zo(a, b, c, d) {
    var e = Vo(),
      f = window;
    So(f) && (f.document.cookie = a);
    var g = Vo();
    return e !== g || (c !== void 0 && To(b, g, !1, d).indexOf(c) >= 0);
  }
  function $o(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Uo(c.Hb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = ap(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Qm);
    g = e(g, "samesite", c.nn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = bp(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!cp(v, c.path) && Zo(t, a, b, c.Hb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return cp(n, c.path) ? 1 : Zo(g, a, b, c.Hb) ? 0 : 1;
  }
  function dp(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return $o(a, b, c);
  }
  function Yo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
          ? ((e = [k]), (f = m))
          : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Xo(a, b, c) {
    for (var d = [], e = To(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            Xl: Number(n[0]) || 1,
            Ym: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function ap(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var ep = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    fp = /(^|\.)doubleclick\.net$/i;
  function cp(a, b) {
    return (
      a !== void 0 &&
      (fp.test(window.document.location.hostname) || (b === "/" && ep.test(a)))
    );
  }
  function gp(a) {
    if (!a) return 1;
    var b = a;
    $a(9) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function hp(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function ip(a, b) {
    var c = "" + gp(a),
      d = hp(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var Vo = function () {
      return So(window) ? window.document.cookie : "";
    },
    Uo = function (a) {
      return a && $a(10)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return dl(b) && al(b);
          })
        : !0;
    },
    bp = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      fp.test(e) || ep.test(e) || a.push("none");
      return a;
    };
  function jp(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Ro(a) & 2147483647)) : String(b);
  }
  function kp(a) {
    return [jp(a), Math.round(qb() / 1e3)].join(".");
  }
  function lp(a, b, c, d, e) {
    var f = gp(b);
    return Wo(a, f, hp(c), d, e);
  }
  function mp(a, b, c, d) {
    return [b, ip(c, d), a].join(".");
  }
  function np(a, b, c, d) {
    var e,
      f = Number(a.Fb != null ? a.Fb : void 0);
    f !== 0 && (e = new Date((b || qb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Hb: d,
    };
  }
  var op;
  function pp() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = qp,
      d = rp,
      e = sp();
    if (!e.init) {
      vc(E, "mousedown", a);
      vc(E, "keyup", a);
      vc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function tp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    sp().decorators.push(f);
  }
  function up(a, b, c) {
    for (var d = sp().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && tb(e, g.callback());
      }
    }
    return e;
  }
  function sp() {
    var a = kc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var vp = /(.*?)\*(.*?)\*(.*)/,
    wp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    xp = /^(?:www\.|m\.|amp\.)+/,
    yp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function zp(a) {
    var b = yp.exec(a);
    if (b) return { fi: b[1], query: b[2], fragment: b[3] };
  }
  function Ap(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function Bp(a, b) {
    var c = [
        gc.userAgent,
        new Date().getTimezoneOffset(),
        gc.userLanguage || gc.language,
        Math.floor(qb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = op)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    op = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ op[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Cp(a) {
    return function (b) {
      var c = Gj(B.location.href),
        d = c.search.replace("?", ""),
        e = zj(d, "_gl", !1, !0) || "";
      b.query = Dp(e) || {};
      var f = Aj(c, "fragment"),
        g;
      var k = -1;
      if (vb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Dp(g || "") || {};
      a && Ep(c, d, f);
    };
  }
  function Fp(a, b) {
    var c = Ap(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Ep(a, b, c) {
    function d(g, k) {
      var m = Fp("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (fc && fc.replaceState) {
      var e = Ap("_gl");
      if (e.test(b) || e.test(c)) {
        var f = Aj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        fc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Gp(a, b) {
    var c = Cp(!!b),
      d = sp();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (tb(e, f.query), a && tb(e, f.fragment));
    return e;
  }
  var Dp = function (a) {
    try {
      var b = Hp(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Hp(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = vp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Bp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Ip(a, b, c, d, e) {
    function f(p) {
      p = Fp(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = zp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.fi + k + m;
  }
  function Jp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Ra(String(x))));
          }
        var y = t.join("*");
        v = ["1", Bp(y), y].join("*");
        d
          ? ($a(4) || $a(1) || !p) && Kp("_gl", v, a, p, q)
          : Lp("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = up(b, 1, d),
      f = up(b, 2, d),
      g = up(b, 4, d),
      k = up(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    $a(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Mp(m, k[m], a);
  }
  function Mp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Lp(a, b, c)
      : c.tagName.toLowerCase() === "form" && Kp(a, b, c);
  }
  function Lp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !$a(6) || d)) {
        var k = B.location.href,
          m = zp(c.href),
          n = zp(k);
        g = !(m && n && m.fi === n.fi && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Ip(a, b, c.href, d, e);
      Xb.test(p) && (c.href = p);
    }
  }
  function Kp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Ip(a, b, c.action, d, e);
          Xb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function qp(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Jp(e, e.hostname);
      }
    } catch (g) {}
  }
  function rp(a) {
    try {
      if (a.action) {
        var b = Aj(Gj(a.action), "host");
        Jp(a, b);
      }
    } catch (c) {}
  }
  function Np(a, b, c, d) {
    pp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    tp(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Op(a, b) {
    pp();
    tp(a, [Cj(B.location, "host", !0)], b, !0, !0);
  }
  function Pp() {
    var a = E.location.hostname,
      b = wp.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(xp, ""),
      m = e.replace(xp, "");
    return k === m || wb(k, "." + m);
  }
  function Qp(a, b) {
    return a === !1 ? !1 : a || b || Pp();
  }
  var Rp = ["1"],
    Sp = {},
    Tp = {};
  function Up(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Vp(a.prefix);
    if (!Sp[c])
      if (Wp(c, a.path, a.domain)) {
        var d = Tp[Vp(a.prefix)];
        Xp(a, d ? d.id : void 0, d ? d.Zh : void 0);
      } else {
        var e = Hj("auiddc");
        if (e) Va("TAGGING", 17), (Sp[c] = e);
        else if (b) {
          var f = Vp(a.prefix),
            g = kp();
          Yp(f, g, a);
          Wp(c, a.path, a.domain);
        }
      }
  }
  function Xp(a, b, c) {
    var d = Vp(a.prefix),
      e = Sp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(qb() / 1e3)));
          Yp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Yp(a, b, c, d) {
    var e = mp(b, "1", c.domain, c.path),
      f = np(c, d);
    f.Hb = Zp();
    dp(a, e, f);
  }
  function Wp(a, b, c) {
    var d = lp(a, b, c, Rp, Zp());
    if (!d) return !1;
    $p(a, d);
    return !0;
  }
  function $p(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Sp[a] = c.slice(0, 2).join(".")),
        (Tp[a] = { id: c.slice(2, 4).join("."), Zh: Number(c[4]) || 0 }))
      : c.length === 3
        ? (Tp[a] = { id: c.slice(0, 2).join("."), Zh: Number(c[2]) || 0 })
        : (Sp[a] = b);
  }
  function Vp(a) {
    return (a || "_gcl") + "_au";
  }
  function aq(a) {
    function b() {
      al(c) && a();
    }
    var c = Zp();
    hl(function () {
      b();
      al(c) || il(b, c);
    }, c);
  }
  function bq(a) {
    var b = Gp(!0),
      c = Vp(a.prefix);
    aq(function () {
      var d = b[c];
      if (d) {
        $p(c, d);
        var e = Number(Sp[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = np(a, e);
          f.Hb = Zp();
          var g = mp(d, "1", a.domain, a.path);
          dp(c, g, f);
        }
      }
    });
  }
  function cq(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = lp(a, e.path, e.domain, Rp, Zp());
      k && (g[a] = k);
      return g;
    };
    aq(function () {
      Np(f, b, c, d);
    });
  }
  function Zp() {
    return ["ad_storage", "ad_user_data"];
  }
  var dq = {},
    eq =
      ((dq.k = { La: /^[\w-]+$/ }),
      (dq.b = { La: /^[\w-]+$/, mi: !0 }),
      (dq.i = { La: /^[1-9]\d*$/ }),
      (dq.u = { La: /^[1-9]\d*$/ }),
      dq);
  var fq = {},
    iq =
      ((fq[5] = { Pk: { 2: gq }, Fh: ["k", "i", "b", "u"] }),
      (fq[4] = { Pk: { 2: gq, GCL: hq }, Fh: ["k", "i", "b"] }),
      fq);
  function jq(a) {
    var b = iq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Pk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function gq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = iq[b];
      if (e) {
        for (
          var f = e.Fh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = eq[n];
              q && (q.mi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function kq(a, b) {
    var c = iq[5];
    if (c) {
      for (var d = [], e = l(c.Fh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = eq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.mi && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function hq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var lq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function mq(a) {
    if (iq[5]) {
      for (
        var b = [],
          c = To(a, void 0, void 0, lq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = jq(e.value);
        f && (nq(f), b.push(f));
      }
      return b;
    }
  }
  function oq(a, b, c, d) {
    c = c || {};
    var e = ip(c.domain, c.path),
      f = kq(b, e);
    if (f) {
      var g = np(c, d, void 0, lq.get(5));
      dp(a, f, g);
    }
  }
  function pq(a, b) {
    var c = b.La;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function nq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Me: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Me = eq[e];
      d.Me
        ? d.Me.mi
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return pq(k, g.Me);
                    };
                  })(d),
                )
              : void 0)
          : (typeof f === "string" && pq(f, d.Me)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function qq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$",
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          ui: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function rq(a, b) {
    var c = qq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].ui] || (d[c[e].ui] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].ui].push(g);
      }
    }
    return d;
  }
  var sq = ["ad_storage", "ad_user_data"];
  function tq() {
    var a = uq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function uq() {
    if (!al(sq)) return { error: 3 };
    try {
      if (!B.localStorage) return { error: 1 };
    } catch (d) {
      return { error: 14 };
    }
    var a = { schema: "gcl", version: 1 },
      b = void 0;
    try {
      b = B.localStorage.getItem("_gcl_ls");
    } catch (d) {
      return { error: 13 };
    }
    try {
      if (b) {
        var c = JSON.parse(b);
        if (c && typeof c === "object") a = c;
        else return { error: 12 };
      }
    } catch (d) {
      return { error: 8 };
    }
    if (a.schema !== "gcl") return { error: 4 };
    if (a.version !== 1) return { error: 5 };
    try {
      vq(a);
    } catch (d) {
      return { error: 8 };
    }
    return { value: a, error: 0 };
  }
  function vq(a) {
    if (a && typeof a === "object")
      if ("expires" in a && "value" in a) {
        var b;
        typeof a.expires === "number"
          ? (b = a.expires)
          : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
        (!isNaN(b) && Date.now() <= b) || ((a.value = null), (a.error = 9));
      } else
        for (var c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
          vq(a[d.value]);
  }
  var wq = /^\w+$/,
    xq = /^[\w-]+$/,
    yq = {},
    zq =
      ((yq.aw = "_aw"),
      (yq.dc = "_dc"),
      (yq.gf = "_gf"),
      (yq.gp = "_gp"),
      (yq.gs = "_gs"),
      (yq.ha = "_ha"),
      (yq.ag = "_ag"),
      (yq.gb = "_gb"),
      yq);
  function Aq() {
    return ["ad_storage", "ad_user_data"];
  }
  function Bq(a) {
    return !$a(10) || al(a);
  }
  function Cq(a, b) {
    function c() {
      var d = Bq(b);
      d && a();
      return d;
    }
    hl(function () {
      c() || il(c, b);
    }, b);
  }
  function Dq(a) {
    return Eq(a).map(function (b) {
      return b.W;
    });
  }
  function Fq(a) {
    return Gq(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Gq(a) {
    var b = Hq(a.prefix),
      c = Iq("gb", b),
      d = Iq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Eq(c).map(e("gb")),
      g = Jq(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Kq(a, b, c, d, e, f) {
    var g = eb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Jd = f)),
        (g.labels = Lq(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Jd: f });
  }
  function Jq(a) {
    for (
      var b = mq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Mq(f);
      if (n) {
        var p = void 0;
        $a(11) && (p = f.u);
        Kq(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Eq(a) {
    for (
      var b = [], c = To(a, E.cookie, void 0, Aq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Nq(e.value);
      if (f != null) {
        var g = f;
        Kq(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Oq(b);
  }
  function Pq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Qq(a, b) {
    var c = eb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Jd = b.Jd)),
        (c.Pa = c.Pa
          ? b.Pa
            ? c.timestamp < b.timestamp
              ? b.Pa
              : c.Pa
            : c.Pa || 0
          : b.Pa || 0),
        (c.labels = Pq(c.labels || [], b.labels || [])),
        (c.Sc = Pq(c.Sc || [], b.Sc || [])))
      : a.push(b);
  }
  function Rq() {
    var a = tq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(xq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Pa: c.linkDecorationSource || 0,
            Sc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Sq(a) {
    for (
      var b = [], c = To(a, E.cookie, void 0, Aq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Nq(e.value);
      f != null && ((f.Jd = void 0), (f.Pa = 0), (f.Sc = [1]), Qq(b, f));
    }
    var g = Rq();
    g && ((g.Jd = void 0), (g.Pa = g.Pa || 0), (g.Sc = g.Sc || [2]), Qq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Oq(b);
  }
  function Lq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Hq(a) {
    return a && typeof a === "string" && a.match(wq) ? a : "_gcl";
  }
  function Tq(a, b, c) {
    var d = Gj(a),
      e = Aj(d, "query", !1, void 0, "gclsrc"),
      f = { value: Aj(d, "query", !1, void 0, "gclid"), Pa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = zj(g, "gclid", !1)), (f.Pa = 3));
      e || (e = zj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Uq(a, b) {
    var c = Gj(a),
      d = Aj(c, "query", !1, void 0, "gclid"),
      e = Aj(c, "query", !1, void 0, "gclsrc"),
      f = Aj(c, "query", !1, void 0, "wbraid");
    f = Cb(f);
    var g = Aj(c, "query", !1, void 0, "gbraid"),
      k = Aj(c, "query", !1, void 0, "gad_source"),
      m = Aj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || zj(n, "gclid", !1);
      e = e || zj(n, "gclsrc", !1);
      f = f || zj(n, "wbraid", !1);
      g = g || zj(n, "gbraid", !1);
      k = k || zj(n, "gad_source", !1);
    }
    return Vq(d, e, m, f, g, k);
  }
  function Wq() {
    return Uq(B.location.href, !0);
  }
  function Vq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(xq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && xq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && xq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && xq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Xq(a) {
    var b = Wq();
    if ($a(7)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = Uq(B.document.referrer, !1)), (b.gad_source = void 0));
    }
    Yq(b, !1, a);
  }
  function Zq(a) {
    Xq(a);
    var b = Tq(B.location.href, !0, !1);
    $a(7) && !b.length && (b = Tq(B.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = qb(),
        e = np(a, d, !0),
        f = Aq(),
        g = function () {
          if (Bq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Pa,
                },
                expires: Number(e.expires),
              },
              m = uq();
            if (!m.error && m.value)
              a: if (((m.value.gclid = k), !m.error && m.value)) {
                var n = m.value,
                  p;
                try {
                  p = JSON.stringify(n);
                } catch (q) {
                  break a;
                }
                try {
                  B.localStorage.setItem("_gcl_ls", p);
                } catch (q) {}
              }
          }
        };
      hl(function () {
        g();
        Bq(f) || il(g, f);
      }, f);
    }
  }
  function Yq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Hq(c.prefix),
      g = d || qb(),
      k = Math.round(g / 1e3),
      m = Aq(),
      n = !1,
      p = !1,
      q = function () {
        if (Bq(m)) {
          var r = np(c, g, !0);
          r.Hb = m;
          for (
            var u = function (F, T) {
                var M = Iq(F, f);
                M && (dp(M, T, r), F !== "gb" && (n = !0));
              },
              v = function (F) {
                var T = ["GCL", k, F];
                e.length > 0 && T.push(e.join("."));
                return T.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Iq("gb", f);
            (!b &&
              Eq(A).some(function (F) {
                return F.W === y && F.labels && F.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Bq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Iq("ag", f);
          if (
            b ||
            !Jq(D).some(function (F) {
              return F.W === C && F.labels && F.labels.length > 0;
            })
          ) {
            var G = {},
              J = ((G.k = C), (G.i = "" + k), (G.b = e), G);
            oq(D, J, c, g);
          }
        }
        $q(a, f, g, c);
      };
    hl(function () {
      q();
      Bq(m) || il(q, m);
    }, m);
  }
  function $q(a, b, c, d) {
    if (a.gad_source !== void 0 && Bq("ad_storage")) {
      if ($a(5)) {
        var e = Ic();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Iq("gs", b);
      if (g) {
        var k = Math.round((qb() - (Hc() || 0)) / 1e3),
          m;
        if ($a(11)) {
          var n,
            p = String,
            q = B.location.hostname,
            r = B.location.pathname,
            u = (q = Ij(q));
          u.split(".").length > 2 &&
            (u = u.replace(
              /^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./,
              "",
            ));
          q = u;
          r = Ij(r);
          var v = r.split(";")[0];
          v = v.replace(/\/(ar|slp|web|index)?\/?$/, "");
          n = p(Ro(("" + q + v).toLowerCase()));
          var t = {};
          m = ((t.k = f), (t.i = "" + k), (t.u = n), t);
        } else {
          var w = {};
          m = ((w.k = f), (w.i = "" + k), w);
        }
        oq(g, m, d, c);
      }
    }
  }
  function ar(a, b) {
    var c = Gp(!0);
    Cq(function () {
      for (var d = Hq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (zq[f] !== void 0) {
          var g = Iq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(br(k), qb()),
              n;
            b: {
              for (
                var p = m, q = To(g, E.cookie, void 0, Aq()), r = 0;
                r < q.length;
                ++r
              )
                if (br(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = np(b, m, !0);
              u.Hb = Aq();
              dp(g, k, u);
            }
          }
        }
      }
      Yq(Vq(c.gclid, c.gclsrc), !1, b);
    }, Aq());
  }
  function cr(a) {
    var b = ["ag"],
      c = Gp(!0),
      d = Hq(a.prefix);
    Cq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Iq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = jq(g);
              if (k) {
                var m = Mq(k);
                m || (m = qb());
                var n;
                a: {
                  for (var p = m, q = mq(f), r = 0; r < q.length; ++r)
                    if (Mq(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                oq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"],
    );
  }
  function Iq(a, b) {
    var c = zq[a];
    if (c !== void 0) return b + c;
  }
  function br(a) {
    return dr(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Mq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Nq(a) {
    var b = dr(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function dr(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !xq.test(a[2])
      ? []
      : a;
  }
  function er(a, b, c, d, e) {
    if (Array.isArray(b) && So(B)) {
      var f = Hq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Iq(a[m], f);
            if (n) {
              var p = To(n, E.cookie, void 0, Aq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Cq(function () {
        Np(g, b, c, d);
      }, Aq());
    }
  }
  function fr(a, b, c, d) {
    if (Array.isArray(a) && So(B)) {
      var e = ["ag"],
        f = Hq(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Iq(e[m], f);
            if (!n) return {};
            var p = mq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Mq(u) - Mq(r);
              })[0];
              k[n] = kq(q);
            }
          }
          return k;
        };
      Cq(
        function () {
          Np(g, a, b, c);
        },
        ["ad_storage"],
      );
    }
  }
  function Oq(a) {
    return a.filter(function (b) {
      return xq.test(b.W);
    });
  }
  function gr(a, b) {
    if (So(B)) {
      for (var c = Hq(b.prefix), d = {}, e = 0; e < a.length; e++)
        zq[a[e]] && (d[a[e]] = zq[a[e]]);
      Cq(function () {
        ib(d, function (f, g) {
          var k = To(c + g, E.cookie, void 0, Aq());
          k.sort(function (u, v) {
            return br(v) - br(u);
          });
          if (k.length) {
            var m = k[0],
              n = br(m),
              p = dr(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = dr(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Yq(q, !0, b, n, p);
          }
        });
      }, Aq());
    }
  }
  function hr(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Cq(
      function () {
        for (var d = Hq(a.prefix), e = 0; e < b.length; ++e) {
          var f = Iq(b[e], d);
          if (!f) break;
          var g = mq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Mq(r) - Mq(q);
              })[0],
              m = Mq(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Yq(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"],
    );
  }
  function ir(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function jr(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (el()) {
      var c = Wq(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Gp(!1)._gs);
      if (ir(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Op(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Op(function () {
          return g;
        }, 1);
      }
    }
  }
  function kr(a) {
    if (!$a(1)) return null;
    var b = Gp(!0).gad_source;
    if (b != null) return (B.location.hash = ""), b;
    if ($a(2)) {
      var c = Gj(B.location.href);
      b = Aj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Wq();
      if (ir(d, a)) return "0";
    }
    return null;
  }
  function lr(a) {
    var b = kr(a);
    b != null &&
      Op(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function mr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function nr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Bq(Aq())) return e;
    var f = Eq(a),
      g = mr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = np(c, p, !0);
        r.Hb = Aq();
        dp(a, q, r);
      }
    return e;
  }
  function or(a, b) {
    var c = [];
    b = b || {};
    var d = Gq(b),
      e = mr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Hq(b.prefix),
          n = Iq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          oq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            A = np(b, v, !0);
          A.Hb = Aq();
          dp(n, y, A);
        }
      }
    return c;
  }
  function pr(a, b) {
    var c = Hq(b),
      d = Iq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Jq(d) : Eq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function qr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function rr(a) {
    var b = Math.max(pr("aw", a), qr(Bq(Aq()) ? rq() : {})),
      c = Math.max(pr("gb", a), qr(Bq(Aq()) ? rq("_gac_gb", !0) : {}));
    c = Math.max(c, pr("ag", a));
    return c > b;
  }
  function Hr() {
    Li.dedupe_gclid || (Li.dedupe_gclid = kp());
    return Li.dedupe_gclid;
  }
  var Ir = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Jr = /^www.googleadservices.com$/;
  function Kr(a) {
    a || (a = Lr());
    return a.zn
      ? !1
      : a.ym || a.zm || a.Cm || a.Am || a.Se || a.im || a.Bm || a.mm
        ? !0
        : !1;
  }
  function Lr() {
    var a = {},
      b = Gp(!0);
    a.zn = !!b._up;
    var c = Wq();
    a.ym = c.aw !== void 0;
    a.zm = c.dc !== void 0;
    a.Cm = c.wbraid !== void 0;
    a.Am = c.gbraid !== void 0;
    a.Bm = c.gclsrc === "aw.ds";
    a.Se = ur().Se;
    var d = E.referrer ? Aj(Gj(E.referrer), "host") : "";
    a.mm = Ir.test(d);
    a.im = Jr.test(d);
    return a;
  }
  var Mr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$",
    ),
    Nr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Or = /^\d+\.fls\.doubleclick\.net$/,
    Pr = /;gac=([^;?]+)/,
    Qr = /;gacgb=([^;?]+)/;
  function Rr(a, b) {
    if (Or.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(Mr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Sr(a, b, c) {
    for (
      var d = Bq(Aq()) ? rq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = nr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { hm: f ? e.join(";") : "", gm: Rr(d, Qr) };
  }
  function Tr(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Nr) ? b[1] : void 0;
  }
  function Ur(a) {
    var b = $a(11),
      c = {},
      d,
      e,
      f;
    Or.test(E.location.host) &&
      ((d = Tr("gclgs")), (e = Tr("gclst")), b && (f = Tr("gcllp")));
    if (d && e && (!b || f)) (c.Nh = d), (c.Ph = e), (c.Oh = f);
    else {
      var g = qb(),
        k = Jq((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Jd;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.Nh = m.join(".")),
        (c.Ph = n.join(".")),
        b && p.length > 0 && (c.Oh = p.join(".")));
    }
    return c;
  }
  function Vr(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Or.test(E.location.host)) {
      var e = Tr(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Sq(f) : Eq(f);
      }
      if (b === "wbraid") return Eq((a || "_gcl") + "_gb");
      if (b === "braids") return Gq({ prefix: a });
    }
    return [];
  }
  function Wr(a) {
    return Vr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Xr(a) {
    var b = Vr(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Pa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Sc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, lk: d, mk: e };
  }
  function Yr(a) {
    return Vr(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Zr(a) {
    return Or.test(E.location.host) ? !(Tr("gclaw") || Tr("gac")) : rr(a);
  }
  function $r(a, b, c) {
    var d;
    d = c ? or(a, b) : nr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function as() {
    var a = B.__uspapi;
    if (bb(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function ks(a) {
    var b = W(a.m, O.g.Ob),
      c = W(a.m, O.g.jc);
    b && !c
      ? (a.eventName !== O.g.ba && a.eventName !== O.g.Uc && V(131),
        (a.isAborted = !0))
      : !b && c && (V(132), (a.isAborted = !0));
  }
  function ls(a) {
    var b = X(O.g.O) ? Li.pscdl : "denied";
    b != null && (a.j[O.g.Ff] = b);
  }
  function ms(a) {
    var b = Pn(!0);
    a.j[O.g.Nb] = b;
  }
  function ns(a) {
    No() && (a.j[O.g.Fc] = 1);
  }
  function ds() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function os(a) {
    ps(a, "ce", W(a.m, O.g.Sa));
  }
  function ps(a, b, c) {
    a.j[O.g.xd] || (a.j[O.g.xd] = {});
    a.j[O.g.xd][b] = c;
  }
  function vs(a, b, c, d) {
    var e = rc(),
      f;
    if (e === 1)
      a: {
        var g = Xi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== B.location.protocol ? a : b) + c;
  }
  function Hs(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.m, b);
      },
      Ub: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Os(a) {
    var b,
      c = B,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Ps,
    Qs = !1;
  function Rs() {
    Qs = !0;
    Ps = Ps || {};
  }
  function Ss(a) {
    Qs || Rs();
    return Ps[a];
  }
  function Ts() {
    var a = B.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Us(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !B.getComputedStyle)
      return !0;
    var c = B.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = B.getComputedStyle(d, null));
    }
    return !1;
  }
  var Mf;
  var Vt = Number("") || 5,
    Wt = Number("") || 50,
    Xt = fb();
  var bu = {
    Il: Number("") || 500,
    vl: Number("") || 5e3,
    Lj: Number("20") || 10,
    Tk: Number("") || 5e3,
  };
  function cu(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var du = function (a, b) {
    var c;
    return c;
  };
  var eu;
  function lu() {
    var a = Pf(Mf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function mu(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  var nu = function (a, b, c, d) {};
  function ou(a, b, c, d, e) {}
  function pu(a, b, c, d) {}
  var qu = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Cn();
  Ln() || zn("iPod");
  zn("iPad");
  !zn("Android") || Dn() || Cn() || Bn() || zn("Silk");
  Dn();
  !zn("Safari") ||
    Dn() ||
    (An() ? 0 : zn("Coast")) ||
    Bn() ||
    (An() ? 0 : zn("Edge")) ||
    (An() ? yn("Microsoft Edge") : zn("Edg/")) ||
    (An() ? yn("Opera") : zn("OPR")) ||
    Cn() ||
    zn("Silk") ||
    zn("Android") ||
    Mn();
  var ru = {},
    su = null,
    tu = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!su) {
        su = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                "",
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          ru[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            su[q] === void 0 && (su[q] = p);
          }
        }
      }
      for (
        var r = ru[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          A = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          G = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        u[w++] = "" + C + D + G + J;
      }
      var F = 0,
        T = v;
      switch (b.length - t) {
        case 2:
          (F = b[t + 1]), (T = r[(F & 15) << 2] || v);
        case 1:
          var M = b[t];
          u[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + T + v;
      }
      return u.join("");
    };
  var uu =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " ",
    );
  function vu(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function wu() {
    var a = B.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function xu() {
    var a, b;
    return (b = (a = B.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function yu(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
          ? void 0
          : c.getHighEntropyValues) === "function"
    );
  }
  function zu() {
    var a = B;
    if (!yu(a)) return null;
    var b = vu(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(uu)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function Gu(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Hu() {
    return Gu("join-ad-interest-group") && bb(gc.joinAdInterestGroup);
  }
  function Iu(a, b) {
    var c = Za[3] === void 0 ? 1 : Za[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]',
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Za[2] === void 0 ? 50 : Za[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && qb() - p < (Za[1] === void 0 ? 6e4 : Za[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Ju(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Ju(e[0]) : m && Ju(k[0]);
      sc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: qb() },
      );
    }
  }
  function Ju(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Ku() {
    return "https://td.doubleclick.net";
  }
  function Lu(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Km: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Km: c };
  }
  var Gv = {
    J: {
      wi: "ads_conversion_hit",
      Qd: "container_execute_start",
      zi: "container_setup_end",
      vg: "container_setup_start",
      xi: "container_blocking_end",
      yi: "container_execute_end",
      Ai: "container_yield_end",
      wg: "container_yield_start",
      Bj: "event_execute_end",
      Aj: "event_evaluation_end",
      sh: "event_evaluation_start",
      Cj: "event_setup_end",
      ve: "event_setup_start",
      Ej: "ga4_conversion_hit",
      Ae: "page_load",
      Pn: "pageview",
      oc: "snippet_load",
      Xj: "tag_callback_error",
      Yj: "tag_callback_failure",
      Zj: "tag_callback_success",
      bk: "tag_execute_end",
      yd: "tag_execute_start",
    },
  };
  function Hv() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Iv = !1;
  function qw(a, b) {}
  function rw(a, b) {}
  function sw(a, b) {}
  function tw(a, b) {}
  function uw() {
    var a = {};
    return a;
  }
  function iw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function vw() {}
  function ww(a, b) {}
  function xw(a, b, c) {}
  function yw() {}
  function zw(a, b) {
    var c = B,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Aw(a, b, c, d) {
    var e = Hn(a, "fmt");
    if (b) {
      var f = Hn(a, "random"),
        g = Hn(a, "label") || "";
      if (!f) return !1;
      var k = tu(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " ")),
      );
      if (!zw(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Jn(a, "rfmt", e));
    var m = Jn(a, "fmt", 4);
    qc(
      m,
      function () {
        B.google_noFurtherRedirects &&
          b &&
          ((B.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0,
    );
    return !0;
  }
  function Tw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Uw(a, b, c) {
    c = c === void 0 ? !1 : c;
    Vw().addRestriction(0, a, b, c);
  }
  function Ww(a, b, c) {
    c = c === void 0 ? !1 : c;
    Vw().addRestriction(1, a, b, c);
  }
  function Xw() {
    var a = qk();
    return Vw().getRestrictions(1, a);
  }
  var Yw = function () {
      this.container = {};
      this.j = {};
    },
    Zw = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  Yw.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = Zw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Yw.prototype.getRestrictions = function (a, b) {
    var c = Zw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ua(
          (c == null
            ? void 0
            : (d = c._entity) == null
              ? void 0
              : d.internal) || [],
        ),
        ua(
          (c == null
            ? void 0
            : (e = c._entity) == null
              ? void 0
              : e.external) || [],
        ),
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ua(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            [],
        ),
        ua(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            [],
        ),
      );
    }
    return [];
  };
  Yw.prototype.getExternalRestrictions = function (a, b) {
    var c = Zw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Yw.prototype.removeExternalRestrictions = function (a) {
    var b = Zw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function Vw() {
    var a = Li.r;
    a || ((a = new Yw()), (Li.r = a));
    return a;
  }
  var $w = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/,
    ),
    ax = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    bx = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    cx =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " ",
      );
  function dx() {
    var a = nj("gtm.allowlist") || nj("gtm.whitelist");
    a && V(9);
    Ri && (a = ["google", "gtagfl", "lcl", "zone"]);
    $w.test(B.location && B.location.hostname) &&
      (Ri
        ? V(116)
        : (V(117),
          ex &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && ub(nb(a), ax),
      c = nj("gtm.blocklist") || nj("gtm.blacklist");
    c || ((c = nj("tagTypeBlacklist")) && V(3));
    c ? V(8) : (c = []);
    $w.test(B.location && B.location.hostname) &&
      ((c = nb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    nb(c).indexOf("google") >= 0 && V(2);
    var d = c && ub(nb(c), bx),
      e = {};
    return function (f) {
      var g = f && f[Le.ra];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = aj[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    V(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = gb(d, k || []);
          u && V(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = gb(d, cx));
      return (e[g] = v);
    };
  }
  var ex = !1;
  ex = !0;
  function fx() {
    hk &&
      Uw(qk(), function (a) {
        var b = wf(a.entityId),
          c;
        if (zf(b)) {
          var d = b[Le.ra];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = of[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Tw(b[Le.ra], 4);
        return c;
      });
  }
  function gx(a, b, c, d, e) {
    if (!hx()) {
      var f = d.siloed ? mk(a) : a;
      if (!zk(f)) {
        d.siloed && Bk({ ctid: f, isDestination: !1 });
        var g = tk();
        dk().container[f] = { state: 1, context: d, parent: g };
        ck({ ctid: f, isDestination: !1 }, e);
        var k = ix(a);
        if (R(74) && hj()) qc(gj() + "/" + k);
        else {
          var m = vb(a, "GTM-"),
            n = Mj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Lj(b, p + k);
          if (!q) {
            var r = Ki.xf + p;
            n && jc && m
              ? ((r = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (q = vs("https://", "http://", r + k)))
              : (q = hj() ? gj() + "/" + k : vs("https://", "http://", r + k));
          }
          qc(q);
        }
      }
    }
  }
  function jx(a, b, c, d) {
    if (!hx()) {
      var e = c.siloed ? mk(a) : a;
      if (!Ak(e))
        if (!c.siloed && Ck())
          (dk().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: tk(),
          }),
            ck({ ctid: e, isDestination: !0 }, d),
            V(91);
        else if (
          (c.siloed && Bk({ ctid: e, isDestination: !0 }),
          (dk().destination[e] = { state: 1, context: c, parent: tk() }),
          ck({ ctid: e, isDestination: !0 }, d),
          R(74) && hj())
        )
          qc(gj() + ("/gtd" + ix(a, !0)));
        else {
          var f = "/gtag/destination" + ix(a, !0),
            g = Lj(b, f);
          g ||
            (hj()
              ? ((f = "/gtd" + ix(a, !0)), (g = gj() + f))
              : (g = vs("https://", "http://", Ki.xf + f)));
          qc(g);
        }
    }
  }
  function ix(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ki.ob;
    if (!vb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + Qo();
    Mj() && (c += "&sign=" + Ki.xh);
    var d = ej.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function hx() {
    if (Oo()) {
      return !0;
    }
    return !1;
  }
  var kx = !1,
    lx = 0,
    mx = [];
  function nx(a) {
    if (!kx) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        kx = !0;
        for (var e = 0; e < mx.length; e++) H(mx[e]);
      }
      mx.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) H(f[g]);
        return 0;
      };
    }
  }
  function ox() {
    if (!kx && lx < 140) {
      lx++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        nx();
      } catch (c) {
        B.setTimeout(ox, 50);
      }
    }
  }
  function px(a) {
    kx ? a() : mx.push(a);
  }
  function rx(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: ok(),
    };
  }
  var tx = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      sx(this, a, b);
    },
    ux = function (a, b, c, d) {
      if (Ni.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Uc(d) && (e = Vc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    vx = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    wx = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    sx = function (a, b, c) {
      b !== void 0 && a.Ge(b);
      c &&
        B.setTimeout(function () {
          wx(a);
        }, Number(c));
    };
  tx.prototype.Ge = function (a) {
    var b = this,
      c = sb(function () {
        H(function () {
          a(ok(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var xx = function (a) {
      a.H++;
      return sb(function () {
        a.C++;
        a.P && a.C >= a.H && wx(a);
      });
    },
    yx = function (a) {
      a.P = !0;
      a.C >= a.H && wx(a);
    };
  var zx = {};
  function Ax() {
    return B[Bx()];
  }
  function Bx() {
    return B.GoogleAnalyticsObject || "ga";
  }
  function Ex() {
    var a = ok();
  }
  function Fx(a, b) {
    return function () {
      var c = Ax(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0,
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Kx = ["es", "1"],
    Lx = {},
    Mx = {};
  function Nx(a, b) {
    if (Vj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Lx[a] = [
        ["e", c],
        ["eid", a],
      ];
      Sm(a);
    }
  }
  function Ox(a) {
    var b = a.eventId,
      c = a.Tc;
    if (!Lx[b]) return [];
    var d = [];
    Mx[b] || d.push(Kx);
    d.push.apply(d, ua(Lx[b]));
    c && (Mx[b] = !0);
    return d;
  }
  var Px = {},
    Qx = {},
    Rx = {};
  function Sx(a, b, c, d) {
    Vj &&
      R(98) &&
      ((d === void 0 ? 0 : d)
        ? ((Rx[b] = Rx[b] || 0), ++Rx[b])
        : c !== void 0
          ? ((Qx[a] = Qx[a] || {}), (Qx[a][b] = Math.round(c)))
          : ((Px[a] = Px[a] || {}), (Px[a][b] = (Px[a][b] || 0) + 1)));
  }
  function Tx(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Px[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Px[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Ux(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Qx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Qx[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Vx() {
    for (
      var a = [], b = l(Object.keys(Rx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Rx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Wx = {},
    Xx = {};
  function Yx(a, b, c) {
    if (Vj && b) {
      var d = Pj(b);
      Wx[a] = Wx[a] || [];
      Wx[a].push(c + d);
      var e = (zf(b) ? "1" : "2") + d;
      Xx[a] = Xx[a] || [];
      Xx[a].push(e);
      Sm(a);
    }
  }
  function Zx(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = Wx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Xx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Wx[b], delete Xx[b]);
    return d;
  }
  function $x(a, b, c, d) {
    var e = mf[a],
      f = ay(a, b, c, d);
    if (!f) return null;
    var g = Af(e[Le.Wj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = $x(
        k.index,
        {
          onSuccess: f,
          onFailure: k.jk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d,
      );
    }
    return f;
  }
  function ay(a, b, c, d) {
    function e() {
      function w() {
        ol(3);
        var J = qb() - G;
        Yx(c.id, f, "7");
        vx(c.qc, C, "exception", J);
        R(86) && xw(c, f, Gv.J.Xj);
        D || ((D = !0), k());
      }
      if (f[Le.Al]) k();
      else {
        var x = yf(f, c, []),
          y = x[Le.Rk];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!X(y[A])) {
              k();
              return;
            }
        var C = ux(c.qc, String(f[Le.ra]), Number(f[Le.Fe]), x[Le.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = qb() - G;
            Yx(c.id, mf[a], "5");
            vx(c.qc, C, "success", J);
            R(86) && xw(c, f, Gv.J.Zj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = qb() - G;
            Yx(c.id, mf[a], "6");
            vx(c.qc, C, "failure", J);
            R(86) && xw(c, f, Gv.J.Yj);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Yx(c.id, f, "1");
        R(86) && ww(c, f);
        var G = qb();
        try {
          Bf(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        R(86) && xw(c, f, Gv.J.bk);
      }
    }
    var f = mf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Af(f[Le.dk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = $x(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.jk === 2 ? m : q;
    }
    if (f[Le.Oj] || f[Le.Cl]) {
      var r = f[Le.Oj] ? nf : c.sn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = by(a, r, sb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function by(a, b, c) {
    var d = [],
      e = [];
    b[a] = cy(d, e, c);
    return {
      onSuccess: function () {
        b[a] = dy;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ey;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function cy(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function dy(a) {
    a();
  }
  function ey(a, b) {
    b();
  }
  var hy = function (a, b) {
    for (var c = [], d = 0; d < mf.length; d++)
      if (a[d]) {
        var e = mf[d];
        var f = xx(b.qc);
        try {
          var g = $x(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Le.ra];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = of[k];
            c.push({
              Fk: d,
              wk: (m ? m.priorityOverride || 0 : 0) || Tw(e[Le.ra], 1) || 0,
              execute: g,
            });
          } else fy(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(gy);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function gy(a, b) {
    var c,
      d = b.wk,
      e = a.wk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Fk,
        k = b.Fk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function fy(a, b) {
    if (Vj) {
      var c = function (d) {
        var e = b.isBlocked(mf[d]) ? "3" : "4",
          f = Af(mf[d][Le.Wj], b, []);
        f && f.length && c(f[0].index);
        Yx(b.id, mf[d], e);
        var g = Af(mf[d][Le.dk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var ky = !1,
    iy;
  function my(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(86)) {
    }
    if (d === "gtm.js") {
      if (ky) return !1;
      ky = !0;
    }
    var e = !1,
      f = Xw(),
      g = Vc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Nx(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: ny(g, e),
        sn: [],
        logMacroError: function () {
          V(6);
          ol(0);
        },
        cachedModelValues: oy(),
        qc: new tx(function () {
          if (R(86)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    R(98) && Vj && (n.reportMacroDiscrepancy = Sx);
    R(86) && sw(n.id, n.name);
    var p = Hf(n);
    R(86) && tw(n.id, n.name);
    e && (p = py(p));
    if (R(86)) {
    }
    var q = hy(p, n),
      r = !1;
    yx(n.qc);
    (d !== "gtm.js" && d !== "gtm.sync") || Ex();
    return qy(p, q) || r;
  }
  function oy() {
    var a = {};
    a.event = sj("event", 1);
    a.ecommerce = sj("ecommerce", 1);
    a.gtm = sj("gtm");
    a.eventModel = sj("eventModel");
    return a;
  }
  function ny(a, b) {
    var c = dx();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Le.ra];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = qk();
      f = Vw().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Vc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = aj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function py(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(mf[c][Le.ra]);
        if (Mi[d] || mf[c][Le.Dl] !== void 0 || Tw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function qy(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && mf[c] && !Ni[String(mf[c][Le.ra])]) return !0;
    return !1;
  }
  var ry = 0;
  function sy(a, b) {
    return arguments.length === 1 ? ty("set", a) : ty("set", a, b);
  }
  function uy(a, b) {
    return arguments.length === 1 ? ty("config", a) : ty("config", a, b);
  }
  function vy(a, b, c) {
    c = c || {};
    c[O.g.kc] = a;
    return ty("event", b, c);
  }
  function ty() {
    return arguments;
  }
  var wy = function () {
    this.messages = [];
    this.j = [];
  };
  wy.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  wy.prototype.listen = function (a) {
    this.j.push(a);
  };
  wy.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  wy.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function xy(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Qf.canonicalContainerId;
    yy().enqueue(a, b, c);
  }
  function zy() {
    var a = Ay;
    yy().listen(a);
  }
  function yy() {
    var a = Li.mb;
    a || ((a = new wy()), (Li.mb = a));
    return a;
  }
  var By = {},
    Cy = {};
  function Vy(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { hi: void 0, Rh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.hi = Yl(g, b)), e.hi)) {
          var k = nk();
          eb(
            k,
            (function (r) {
              return function (u) {
                return r.hi.destinationId === u;
              };
            })(e),
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = By[g] || [];
        e.Rh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Rh[u] = !0;
            };
          })(e),
        );
        for (var n = kk(), p = 0; p < n.length; p++)
          if (e.Rh[n[p]]) {
            c = c.concat(nk());
            break;
          }
        var q = Cy[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Om: c, Rm: d };
  }
  function Wy(a) {
    ib(By, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Xy(a) {
    ib(Cy, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var Yy = "HA GF G UA AW DC MC".split(" "),
    Zy = !1,
    $y = !1,
    az = !1,
    bz = !1;
  function cz(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: bj() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var dz = void 0,
    ez = void 0;
  function fz(a, b, c) {
    var d = Vc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && V(136);
    var e = Vc(b, null);
    Vc(c, e);
    xy(uy(kk()[0], e), a.eventId, d);
  }
  function gz(a) {
    for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || $m.j[d];
      if (e) return e;
    }
  }
  var hz = [
      O.g.rd,
      O.g.Sb,
      O.g.Dc,
      O.g.tb,
      O.g.zb,
      O.g.Da,
      O.g.xa,
      O.g.Na,
      O.g.Ra,
      O.g.vb,
    ],
    iz = {
      config: function (a, b) {
        var c = cz(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Uc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Yl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!gk.ze) {
                var m = sk(tk());
                if (Ek(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { Xm: sk(n), Nm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.Xm), (g = q.Nm));
            Nx(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? nk().indexOf(r) === -1 : kk().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[O.g.Ob]) {
                var v = gz(d);
                if (u)
                  jx(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  dz ? fz(b, t, dz) : ez || (ez = Vc(t, null));
                } else
                  gx(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (V(128), g && V(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                ez
                  ? (fz(b, ez, x), (w = !1))
                  : ((!x[O.g.nc] && Pi && dz) || (dz = Vc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!az && ((az = !0), $y))
                for (var A = l(hz), C = A.next(); !C.done; C = A.next())
                  if (y.hasOwnProperty(C.value)) {
                    nl("erc");
                    break;
                  }
              Wj && !hk && (ry === 1 && (Ik.mcc = !1), (ry = 2));
              kl = !0;
              if (Pi && !u && !d[O.g.nc]) {
                var D = bz;
                bz = !0;
                if (D) return;
              }
              Zy || V(43);
              if (!b.noTargetGroup)
                if (u) {
                  Xy(e.id);
                  var G = e.id,
                    J = d[O.g.ne] || "default";
                  J = String(J).split(",");
                  for (var F = 0; F < J.length; F++) {
                    var T = Cy[J[F]] || [];
                    Cy[J[F]] = T;
                    T.indexOf(G) < 0 && T.push(G);
                  }
                } else {
                  Wy(e.id);
                  var M = e.id,
                    aa = d[O.g.ne] || "default";
                  aa = aa.toString().split(",");
                  for (var da = 0; da < aa.length; da++) {
                    var U = By[aa[da]] || [];
                    By[aa[da]] = U;
                    U.indexOf(M) < 0 && U.push(M);
                  }
                }
              delete d[O.g.ne];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") ||
                (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete d[O.g.kd];
              for (var N = u ? [e.id] : nk(), la = 0; la < N.length; la++) {
                var ia = d,
                  ea = N[la],
                  sa = Vc(b, null),
                  Ma = Yl(ea, sa.isGtmEvent);
                Ma && $m.push("config", [ia], Ma, sa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          V(39);
          var c = cz(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[O.g.N] && V(139), e[O.g.Aa] && V(140));
          d === "default"
            ? Bl(e)
            : d === "update"
              ? Dl(e, c)
              : d === "declare" && b.fromContainerExecution && Al(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Uc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Vc(e, null)),
            e[O.g.kd] && (g.eventCallback = e[O.g.kd]),
            e[O.g.je] && (g.eventTimeout = e[O.g.je]));
          var k = cz(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[O.g.kc];
          r === void 0 &&
            ((r = nj(O.g.kc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = Vy(u, b.isGtmEvent),
              t = v.Om,
              w = v.Rm;
            if (w.length)
              for (var x = gz(q), y = 0; y < w.length; y++) {
                var A = Yl(w[y], b.isGtmEvent);
                A &&
                  jx(A.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Zl(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              ($y = !0);
            Nx(m, c);
            for (var G = [], J = 0; J < C.length; J++) {
              var F = C[J],
                T = Vc(b, null);
              if (Yy.indexOf(uk(F.prefix)) !== -1) {
                var M = Vc(d, null),
                  aa = T.eventMetadata || {};
                aa.hasOwnProperty("is_external_event") ||
                  (aa.is_external_event = !T.fromContainerExecution);
                T.eventMetadata = aa;
                delete M[O.g.kd];
                an(c, M, F.id, T);
                Wj && !hk && ry === 0 && (Kk("mcc", "1"), (ry = 1));
                kl = !0;
              }
              G.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[O.g.kc] = G.join())
              : delete g.eventModel[O.g.kc];
            Zy || V(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[O.g.jc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        V(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && bb(a[3])) {
          var c = Yl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Zy || V(43);
            var f = gz();
            if (
              !eb(nk(), function (k) {
                return c.destinationId === k;
              })
            )
              jx(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (Yy.indexOf(uk(c.prefix)) !== -1) {
              kl = !0;
              cz(a, b);
              var g = {};
              Vc(((g[O.g.xb] = d), (g[O.g.Mb] = e), g), null);
              bn(
                d,
                function (k) {
                  H(function () {
                    e(k);
                  });
                },
                c.id,
                b,
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          Zy = !0;
          var c = cz(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && bb(a[2])) {
          if ((Nf(a[1], a[2]), V(74), a[1] === "all")) {
            V(75);
            var b = !1;
            try {
              b = a[2](ok(), "unknown", {});
            } catch (c) {}
            b || V(76);
          }
        } else V(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Uc(a[1])
          ? (c = Vc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Uc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Vc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = cz(a, b),
            e = d.eventId,
            f = d.priorityId;
          Vc(c, null);
          var g = Vc(c, null);
          $m.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    jz = { policy: !0 };
  var lz = function (a) {
    if (kz(a)) return a;
    this.value = a;
  };
  lz.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var kz = function (a) {
    return !a || Sc(a) !== "object" || Uc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  lz.prototype.getUntrustedMessageValue = lz.prototype.getUntrustedMessageValue;
  var mz = !1,
    nz = [];
  function oz() {
    if (!mz) {
      mz = !0;
      for (var a = 0; a < nz.length; a++) H(nz[a]);
    }
  }
  function pz(a) {
    mz ? H(a) : nz.push(a);
  }
  var qz = 0,
    rz = {},
    sz = [],
    tz = [],
    uz = !1,
    vz = !1;
  function wz(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function xz(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return yz(a);
  }
  function zz(a, b) {
    if (!cb(b) || b < 0) b = 0;
    var c = Li[Ki.ob],
      d = 0,
      e = !1,
      f = void 0;
    f = B.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (B.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function Az(a, b) {
    var c = a._clear || b.overwriteModelFields;
    ib(a, function (e, f) {
      e !== "_clear" && (c && qj(e), qj(e, f));
    });
    Yi || (Yi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = bj()), (a["gtm.uniqueEventId"] = d), qj("gtm.uniqueEventId", d));
    return my(a);
  }
  function Bz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (kb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Cz() {
    var a;
    if (tz.length) a = tz.shift();
    else if (sz.length) a = sz.shift();
    else return;
    var b;
    var c = a;
    if (uz || !Bz(c.message)) b = c;
    else {
      uz = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = bj());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      sz.unshift(k, c);
      Wj && Ok();
      b = f;
    }
    return b;
  }
  function Dz() {
    for (var a = !1, b; !vz && (b = Cz()); ) {
      vz = !0;
      delete kj.eventModel;
      mj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) vz = !1;
      else {
        e.fromContainerExecution && rj();
        try {
          if (bb(d))
            try {
              d.call(oj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = nj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (kb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = iz[d[0]];
                  if (p && (!e.fromContainerExecution || !jz[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = Az(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && mj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = rz[String(q)] || [], u = 0; u < r.length; u++)
              tz.push(Ez(r[u]));
            r.length && tz.sort(wz);
            delete rz[String(q)];
            q > qz && (qz = q);
          }
          vz = !1;
        }
      }
    }
    return !a;
  }
  function Fz() {
    if (R(86)) {
      var a = Gz();
    }
    var b = Dz();
    if (R(86)) {
    }
    try {
      var c = ok(),
        d = B[Ki.ob].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Ay(a) {
    if (qz < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      rz[b] = rz[b] || [];
      rz[b].push(a);
    } else
      tz.push(Ez(a)),
        tz.sort(wz),
        H(function () {
          vz || Dz();
        });
  }
  function Ez(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Hz() {
    function a(f) {
      var g = {};
      if (kz(f)) {
        var k = f;
        f = kz(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = kc(Ki.ob, []),
      c = (Li[Ki.ob] = Li[Ki.ob] || {});
    c.pruned === !0 && V(83);
    rz = yy().get();
    zy();
    px(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    pz(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Li.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new lz(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      sz.push.apply(sz, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (V(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return Dz() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    sz.push.apply(sz, e);
    if (Gz()) {
      if (R(86)) {
      }
      H(Fz);
    }
  }
  var Gz = function () {
      var a = !0;
      return a;
    },
    yz = function (a) {
      return B[Ki.ob].push(a);
    };
  function Iz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = qb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Jz(a) {
    return a && a.indexOf("pending:") === 0 ? Iz(a.substr(8)) : !1;
  }
  var Kz = /^(https?:)?\/\//;
  function eA() {}
  var fA = function () {};
  fA.prototype.toString = function () {
    return "undefined";
  };
  var gA = new fA();
  var iA = function () {
      (Li.rm = Li.rm || {})[qk()] = function (a) {
        if (hA.hasOwnProperty(a)) return hA[a];
      };
    },
    lA = function (a, b, c) {
      if (a instanceof jA) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(bj());
        kA[g] = [f, c];
        a = e.call(d, g);
        b = ab;
      }
      return { nk: a, onSuccess: b };
    },
    mA = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        V(a ? 134 : 135);
        var d = kA[c];
        if (d && typeof d[b] === "function") d[b]();
        kA[c] = void 0;
      };
    },
    jA = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === gA ? b : a[d]);
        return c.join("");
      };
    };
  jA.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var hA = {},
    kA = {};
  function nA(a, b) {
    function c(g) {
      var k = Gj(g),
        m = Aj(k, "protocol"),
        n = Aj(k, "host", !0),
        p = Aj(k, "port"),
        q = Aj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function oA(a) {
    return pA(a) ? 1 : 0;
  }
  function pA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Vc(a, {});
        Vc({ arg1: c[d], any_of: void 0 }, e);
        if (oA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return pg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < lg.length; g++) {
                var k = lg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return mg(b, c);
      case "_eq":
        return qg(b, c);
      case "_ge":
        return rg(b, c);
      case "_gt":
        return tg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return sg(b, c);
      case "_lt":
        return ug(b, c);
      case "_re":
        return og(b, c, a.ignore_case);
      case "_sw":
        return vg(b, c);
      case "_um":
        return nA(b, c);
    }
    return !1;
  }
  function qA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function rA() {
    var a = [
      ["cv", R(119) ? qA() : "7"],
      ["rv", Ki.wh],
      [
        "tc",
        mf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ki.Ce && a.push(["x", Ki.Ce]);
    fj() && a.push(["tag_exp", fj()]);
    return a;
  }
  var sA = {},
    tA = {};
  function uA() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function vA(a, b, c, d) {
    if (Vj) {
      var e = String(c) + b;
      sA[a] = sA[a] || [];
      sA[a].push(e);
      tA[a] = tA[a] || [];
      tA[a].push(d + b);
    }
  }
  function wA(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = sA[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = tA[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete sA[b], delete tA[b]);
    return d;
  }
  function xA() {
    return !1;
  }
  function yA() {
    var a = {};
    return function (b, c, d) {};
  }
  function zA() {
    var a = AA;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && R(90)) || BA(c);
      var f = vb(b, "__cvt_") ? void 0 : 1,
        g = new La();
      ib(c, function (r, u) {
        var v = hd(u, void 0, f);
        v === void 0 && u !== void 0 && V(44);
        g.set(r, v);
      });
      a.j.j.C = Ff();
      var k = {
        gk: Uf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Ge:
          e !== void 0
            ? function (r) {
                e.qc.Ge(r);
              }
            : void 0,
        kb: function () {
          return b;
        },
        log: function () {},
        fm: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        ln: !!Tw(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (xA()) {
        var m = yA(),
          n,
          p;
        k.Xa = {
          si: [],
          He: {},
          Db: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          qg: dh(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Fe(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function BA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    bb(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    bb(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function CA(a) {}
  CA.F = "internal.addAdsClickIds";
  function DA(a, b) {
    var c = this;
  }
  DA.T = "addConsentListener";
  var EA = !1;
  function FA(a) {
    for (var b = 0; b < a.length; ++b)
      if (EA)
        try {
          a[b]();
        } catch (c) {
          V(77);
        }
      else a[b]();
  }
  function GA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  GA.F = "internal.addDataLayerEventListener";
  function HA(a, b, c) {}
  HA.T = "addDocumentEventListener";
  function IA(a, b, c, d) {}
  IA.T = "addElementEventListener";
  function JA(a) {
    return a.D.j;
  }
  function KA(a) {}
  KA.T = "addEventCallback";
  function $A(a) {}
  $A.F = "internal.addFormAbandonmentListener";
  function aB(a, b, c, d) {}
  aB.F = "internal.addFormData";
  var bB = {},
    cB = [],
    dB = {},
    eB = 0,
    fB = 0;
  function mB(a, b) {}
  mB.F = "internal.addFormInteractionListener";
  function tB(a, b) {}
  tB.F = "internal.addFormSubmitListener";
  function yB(a) {}
  yB.F = "internal.addGaSendListener";
  function zB(a) {
    if (!a) return {};
    var b = a.fm;
    return rx(b.type, b.index, b.name);
  }
  function AB(a) {
    return a ? { originatingEntity: zB(a) } : {};
  }
  var CB = function (a, b, c) {
      BB().updateZone(a, b, c);
    },
    EB = function (a, b, c, d, e, f) {
      var g = BB();
      c = c && ub(c, DB);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, ok(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (vb(p, "GTM-"))
            gx(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = ty("js", pb());
            gx(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            R(125) || xy(t, q, w);
            xy(uy(p, r), q, w);
          }
        }
      }
      return k;
    },
    BB = function () {
      var a = Li.zones;
      a || (a = Li.zones = new FB());
      return a;
    },
    GB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    DB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    FB = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = FB.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.gi], b)) return !1;
    for (var e = 0; e < c.uf.length; e++) if (this.C[c.uf[e]].Gd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.uf.length; f++) {
      var g = this.C[c.uf[f]];
      g.Gd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.gi], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new HB(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Li[a]) || (!d && zk(a)) || (d && d.gi !== b)) return !1;
    if (d) return d.uf.push(c), !1;
    this.j[a] = { gi: b, uf: [c] };
    return !0;
  };
  var HB = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Gd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  HB.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Gd !== b && this.j.push({ eventId: a, Gd: b }));
  };
  HB.prototype.Gd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Gd;
    return !1;
  };
  HB.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || GB[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function IB(a) {
    var b = Li.zones;
    return b
      ? b.getIsAllowedFn(kk(), a)
      : function () {
          return !0;
        };
  }
  function JB() {
    Ww(qk(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Li.zones;
      return c ? c.isActive(kk(), b) : !0;
    });
    Uw(qk(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return IB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var KB = function (a, b) {
    this.tagId = a;
    this.Ke = b;
  };
  function LB(a, b) {
    var c = this,
      d;
    var e = function (v) {
      Uw(
        v,
        function (t) {
          for (
            var w = Vw().getExternalRestrictions(0, qk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0,
      );
      Ww(
        v,
        function (t) {
          for (
            var w = Vw().getExternalRestrictions(1, qk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0,
      );
      k && k(new KB(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    FA([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Ak(a)) return;
    } else if (zk(a)) return;
    var q = 6,
      r = JA(this);
    n && (q = 7);
    r.kb() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? jx(a, g, u, e) : gx(a, g, !vb(a, "GTM-"), u, e);
    k &&
      r.kb() === "__zone" &&
      EB(Number.MIN_SAFE_INTEGER, [a], null, {}, zB(JA(this)));
    d = p ? mk(a) : a;
    return d;
  }
  LB.F = "internal.loadGoogleTag";
  function MB(a) {
    return new $c("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof $c)
        return new $c("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Vc(JA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.nb.apply(c, [k].concat(ua(g)));
        });
    });
  }
  function NB(a, b, c) {
    var d = this;
  }
  NB.F = "internal.addGoogleTagRestriction";
  var OB = {},
    PB = [];
  function WB(a, b) {}
  WB.F = "internal.addHistoryChangeListener";
  function XB(a, b, c) {}
  XB.T = "addWindowEventListener";
  function YB(a, b) {
    return !0;
  }
  YB.T = "aliasInWindow";
  function ZB(a, b, c) {}
  ZB.F = "internal.appendRemoteConfigParameter";
  function $B(a) {
    var b;
    return b;
  }
  $B.T = "callInWindow";
  function aC(a) {}
  aC.T = "callLater";
  function bC(a) {}
  bC.F = "callOnDomReady";
  function cC(a) {
    K(this.getName(), ["listener:!Fn"], arguments),
      L(this, "process_dom_events", "window", "load"),
      pz(I(a));
  }
  cC.F = "callOnWindowLoad";
  function dC(a, b) {
    var c;
    return c;
  }
  dC.F = "internal.computeGtmParameter";
  function eC(a, b) {
    var c = this;
  }
  eC.F = "internal.consentScheduleFirstTry";
  function fC(a, b) {
    var c = this;
  }
  fC.F = "internal.consentScheduleRetry";
  function gC(a) {
    var b;
    return b;
  }
  gC.F = "internal.copyFromCrossContainerData";
  function hC(a, b) {
    var c;
    var d = hd(c, this.D, vb(JA(this).kb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && V(45);
    return d;
  }
  hC.T = "copyFromDataLayer";
  function iC(a) {
    var b = void 0;
    return b;
  }
  iC.F = "internal.copyFromDataLayerCache";
  function jC(a) {
    var b;
    return b;
  }
  jC.T = "copyFromWindow";
  function kC(a) {
    var b = void 0;
    return hd(b, this.D, 1);
  }
  kC.F = "internal.copyKeyFromWindow";
  var lC = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Vc(c.eventMetadata || {}, {});
  };
  lC.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && R(78))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var Qt = function (a, b, c) {
    var d = Ss(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function mC(a, b) {
    var c;
    return c;
  }
  mC.F = "internal.copyPreHit";
  function nC(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [B, E],
      e = a.split("."),
      f = xb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !bb(k)) return null;
    if (k) return hd(k, this.D, 2);
    var m;
    k = function () {
      if (!bb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = xb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return hd(c, this.D, 2);
  }
  nC.T = "createArgumentsQueue";
  function oC(a) {
    return hd(
      function (c) {
        var d = Ax();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Ax(),
                n = m && m.getByName && m.getByName(f);
              return ln(B.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1,
    );
  }
  oC.F = "internal.createGaCommandQueue";
  function pC(a) {
    return hd(
      function () {
        if (!bb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      vb(JA(this).kb(), "__cvt_") ? 2 : 1,
    );
  }
  pC.T = "createQueue";
  function qC(a, b) {
    var c = null;
    return c;
  }
  qC.F = "internal.createRegex";
  function rC() {
    var a = {};
    return a;
  }
  function sC(a) {}
  sC.F = "internal.declareConsentState";
  function tC(a) {
    var b = "";
    return b;
  }
  tC.F = "internal.decodeUrlHtmlEntities";
  function uC(a, b, c) {
    var d;
    return d;
  }
  uC.F = "internal.decorateUrlWithGaCookies";
  function vC() {}
  vC.F = "internal.deferCustomEvents";
  function wC(a) {
    var b;
    return b;
  }
  wC.F = "internal.detectUserProvidedData";
  function AC(a, b) {
    return b;
  }
  AC.F = "internal.enableAutoEventOnClick";
  function IC(a, b) {
    return b;
  }
  IC.F = "internal.enableAutoEventOnElementVisibility";
  function JC() {}
  JC.F = "internal.enableAutoEventOnError";
  var KC = {},
    LC = [],
    MC = {},
    NC = 0,
    OC = 0;
  function UC(a, b) {
    var c = this;
    return b;
  }
  UC.F = "internal.enableAutoEventOnFormInteraction";
  function ZC(a, b) {
    var c = this;
    return b;
  }
  ZC.F = "internal.enableAutoEventOnFormSubmit";
  function dD() {
    var a = this;
  }
  dD.F = "internal.enableAutoEventOnGaSend";
  var eD = {},
    fD = [];
  function mD(a, b) {
    var c = this;
    return b;
  }
  mD.F = "internal.enableAutoEventOnHistoryChange";
  var nD = ["http://", "https://", "javascript:", "file://"];
  function rD(a, b) {
    var c = this;
    return b;
  }
  rD.F = "internal.enableAutoEventOnLinkClick";
  var sD, tD;
  function ED(a, b) {
    var c = this;
    return b;
  }
  ED.F = "internal.enableAutoEventOnScroll";
  function FD(a) {
    return function () {
      if (a.limit && a.bi >= a.limit) a.og && B.clearInterval(a.og);
      else {
        a.bi++;
        var b = qb();
        yz({
          event: a.eventName,
          "gtm.timerId": a.og,
          "gtm.timerEventNumber": a.bi,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Ek,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ek,
          "gtm.triggers": a.xn,
        });
      }
    };
  }
  function GD(a, b) {
    return b;
  }
  GD.F = "internal.enableAutoEventOnTimer";
  var Zb = wa(["data-gtm-yt-inspected-"]),
    ID = ["www.youtube.com", "www.youtube-nocookie.com"],
    JD,
    KD = !1;
  function UD(a, b) {
    var c = this;
    return b;
  }
  UD.F = "internal.enableAutoEventOnYouTubeActivity";
  function VD(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments,
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  VD.F = "internal.evaluateBooleanExpression";
  var WD;
  function XD(a) {
    var b = !1;
    return b;
  }
  XD.F = "internal.evaluateMatchingRules";
  function EE() {
    return xo(7) && xo(9) && xo(10);
  }
  function zF(a, b, c, d) {}
  zF.F = "internal.executeEventProcessor";
  function AF(a) {
    var b;
    return hd(b, this.D, 1);
  }
  AF.F = "internal.executeJavascriptString";
  function BF(a) {
    var b;
    return b;
  }
  function CF(a) {
    var b = {};
    return hd(b);
  }
  CF.F = "internal.getAdsCookieWritingOptions";
  function DF(a) {
    var b = !1;
    return b;
  }
  DF.F = "internal.getAllowAdPersonalization";
  function EF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  EF.F = "internal.getAuid";
  var FF = null;
  function GF() {
    var a = new La();
    return a;
  }
  GF.T = "getContainerVersion";
  function HF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    K(this.getName(), ["name:!string", "decode:?boolean"], arguments),
      L(this, "get_cookies", a),
      (c = hd(To(a, void 0, !!b), this.D));
    return c;
  }
  HF.T = "getCookieValues";
  function IF() {
    return ql();
  }
  IF.F = "internal.getCountryCode";
  function JF() {
    var a = [];
    return hd(a);
  }
  JF.F = "internal.getDestinationIds";
  function KF(a) {
    var b = new La();
    return b;
  }
  KF.F = "internal.getDeveloperIds";
  function LF(a, b) {
    var c = null;
    return c;
  }
  LF.F = "internal.getElementAttribute";
  function MF(a) {
    var b = null;
    return b;
  }
  MF.F = "internal.getElementById";
  function NF(a) {
    var b = "";
    return b;
  }
  NF.F = "internal.getElementInnerText";
  function OF(a, b) {
    var c = null;
    return c;
  }
  OF.F = "internal.getElementProperty";
  function PF(a) {
    var b;
    return b;
  }
  PF.F = "internal.getElementValue";
  function QF(a) {
    var b = 0;
    return b;
  }
  QF.F = "internal.getElementVisibilityRatio";
  function RF(a) {
    var b = null;
    return b;
  }
  RF.F = "internal.getElementsByCssSelector";
  function SF(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = JA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var C = A.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), G = D.next(); !G.done; G = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[G.value];
        }
        c = f;
      } else c = void 0;
    }
    b = hd(c, this.D, 1);
    return b;
  }
  SF.F = "internal.getEventData";
  var TF = {};
  TF.enableAWFledge = R(31);
  TF.enableAdsConversionValidation = R(15);
  TF.enableAdsSupernovaParams = R(27);
  TF.enableAutoPhoneAndAddressDetection = R(29);
  TF.enableAutoPiiOnPhoneAndAddress = R(30);
  TF.enableCachedEcommerceData = R(37);
  TF.enableCloudRecommentationsErrorLogging = R(38);
  TF.enableCloudRecommentationsSchemaIngestion = R(39);
  TF.enableCloudRetailInjectPurchaseMetadata = R(41);
  TF.enableCloudRetailLogging = R(40);
  TF.enableCloudRetailPageCategories = R(42);
  TF.enableConsentDisclosureActivity = R(44);
  TF.enableDCFledge = R(49);
  TF.enableDecodeUri = R(78);
  TF.enableDeferAllEnhancedMeasurement = R(50);
  TF.enableFormSkipValidation = R(72);
  TF.enableGa4OutboundClicksFix = R(81);
  TF.enableGaAdsConversions = R(99);
  TF.enableMerchantRenameForBasketData = R(94);
  TF.enableUrlDecodeEventUsage = R(118);
  TF.enableZoneConfigInChildContainers = R(121);
  TF.useEnableAutoEventOnFormApis = R(132);
  TF.autoPiiEligible = vl();
  function UF() {
    return hd(TF);
  }
  UF.F = "internal.getFlags";
  function VF() {
    return new ed(gA);
  }
  VF.F = "internal.getHtmlId";
  function WF(a) {
    var b;
    return b;
  }
  WF.F = "internal.getIframingState";
  function XF(a, b) {
    var c = {};
    return hd(c);
  }
  XF.F = "internal.getLinkerValueFromLocation";
  function YF() {
    var a = new La();
    return a;
  }
  YF.F = "internal.getPrivacyStrings";
  function ZF(a, b) {
    var c;
    return c;
  }
  ZF.F = "internal.getProductSettingsParameter";
  function $F(a, b) {
    var c;
    return c;
  }
  $F.T = "getQueryParameters";
  function aG(a, b) {
    var c;
    return c;
  }
  aG.T = "getReferrerQueryParameters";
  function bG(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      L(this, "get_referrer", a),
      (b = Cj(Gj(E.referrer), a));
    return b;
  }
  bG.T = "getReferrerUrl";
  function cG() {
    return rl();
  }
  cG.F = "internal.getRegionCode";
  function dG(a, b) {
    var c;
    return c;
  }
  dG.F = "internal.getRemoteConfigParameter";
  function eG() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  eG.F = "internal.getScreenDimensions";
  function fG() {
    var a = "";
    return a;
  }
  fG.F = "internal.getTopSameDomainUrl";
  function gG() {
    var a = "";
    return a;
  }
  gG.F = "internal.getTopWindowUrl";
  function hG(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      L(this, "get_url", a),
      (b = Aj(Gj(B.location.href), a));
    return b;
  }
  hG.T = "getUrl";
  function iG() {
    L(this, "get_user_agent");
    return gc.userAgent;
  }
  iG.F = "internal.getUserAgent";
  function jG() {
    var a;
    return hd(a ? Au(a) : null);
  }
  jG.F = "internal.getUserAgentClientHints";
  function rG() {
    return (B.gaGlobal = B.gaGlobal || {});
  }
  function sG() {
    var a = rG();
    a.hid = a.hid || fb();
    return a.hid;
  }
  function tG(a, b) {
    var c = rG();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function PG(a) {
    if (Tt(a) || hj()) a.j[O.g.zj] = rl() || ql();
    !Tt(a) && hj() && (a.j[O.g.Ij] = "::");
  }
  function QG(a) {
    if (R(73) && hj()) {
      os(a);
      ps(a, "cpf", W(a.m, O.g.Na));
      var b = W(a.m, O.g.hc);
      ps(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      ps(a, "cf", W(a.m, O.g.ab));
      ps(a, "cd", ip(W(a.m, O.g.Ra), W(a.m, O.g.vb)));
    }
  }
  var fH = function (a) {
      this.H = a;
      this.j = "";
    },
    gH = function (a, b) {
      a.C = b;
      return a;
    },
    hH = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (F) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Uc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Uc(y) ? y : {}, G = l(C), J = G.next();
                !J.done;
                J = G.next()
              )
                A(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function iH(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var VH = window,
    WH = document,
    XH = function (a) {
      var b = VH._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        WH.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && VH["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = VH.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(WH.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return WH.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function hI(a) {
    ib(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[O.g.jb] || {};
    ib(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function MI(a, b) {}
  function NI(a, b) {
    var c = function () {};
    return c;
  }
  function OI(a, b, c) {}
  var PI = NI;
  var QI = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function RI(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments,
    );
    var e = b ? I(b) : {};
    FA([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = JA(this);
    f.originatingEntity = zB(g);
    xy(uy(a, e), g.eventId, f);
  }
  RI.F = "internal.gtagConfig";
  function SI() {
    var a = {};
    return a;
  }
  function UI(a, b) {}
  UI.T = "gtagSet";
  function VI() {
    var a = {};
    return a;
  }
  function WI(a, b) {}
  WI.T = "injectHiddenIframe";
  var XI = uA();
  function YI(a, b, c, d, e) {
    var f = this;
    K(
      this.getName(),
      [
        "html:!*",
        "onSuccess:!Fn",
        "onFailure:!Fn",
        "useIframe:?boolean",
        "supportDocumentWrite:?boolean",
      ],
      arguments,
    );
    var g = JA(this);
    d && XI(3), e && (XI(1), XI(2)), vA(g.eventId, g.kb(), XI(void 0), "p");
    if (d && e)
      throw Error("useIframe and supportDocumentWrite cannot both be true.");
    L(this, "unsafe_inject_arbitrary_html", d, e);
    var k = R(90)
        ? function () {
            return void b.invoke(f.D);
          }
        : I(b, this.D),
      m = R(90)
        ? function () {
            return void c.invoke(f.D);
          }
        : I(c, this.D),
      n = I(a, this.D, 1);
    ZI(n, k, m, d, e, g);
  }
  var $I = function (a, b, c, d) {
      return function () {
        try {
          if (b.length > 0) {
            var e = b.shift(),
              f = $I(a, b, c, d),
              g = e;
            if (
              String(g.nodeName).toUpperCase() === "SCRIPT" &&
              g.type === "text/gtmscript"
            ) {
              var k = g.text || g.textContent || g.innerHTML || "",
                m = g.getAttribute("data-gtmsrc"),
                n = g.charset || "";
              m
                ? qc(m, f, d, { async: !1, id: e.id, text: k, charset: n }, a)
                : ((g = E.createElement("script")),
                  (g.async = !1),
                  (g.type = "text/javascript"),
                  (g.id = e.id),
                  (g.text = k),
                  (g.charset = n),
                  f && (g.onload = f),
                  a.insertBefore(g, null));
              m || f();
            } else if (
              e.innerHTML &&
              e.innerHTML.toLowerCase().indexOf("<script") >= 0
            ) {
              for (var p = []; e.firstChild; )
                p.push(e.removeChild(e.firstChild));
              a.insertBefore(e, null);
              $I(e, p, f, d)();
            } else a.insertBefore(e, null), f();
          } else c();
        } catch (q) {
          d();
        }
      };
    },
    ZI = function (a, b, c, d, e, f) {
      if (E.body) {
        var g = lA(a, b, c);
        a = g.nk;
        b = g.onSuccess;
        if (d) {
        } else e ? aJ(a, b, c) : $I(E.body, zc(a), b, c)();
      } else
        B.setTimeout(function () {
          ZI(a, b, c, d, e, f);
        });
    };
  YI.F = "internal.injectHtml";
  var bJ = {};
  var cJ = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          qc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) H(g[k]);
              g.push = function (m) {
                H(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) H(g[k]);
              e[f] = null;
            },
            b,
          ))
      : qc(a, c, d, b);
  };
  function dJ(a, b, c, d) {
    if (!Oo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments,
      );
      L(this, "inject_script", a);
      var e = this.D;
      cJ(
        a,
        void 0,
        function () {
          b && b.nb(e);
        },
        function () {
          c && c.nb(e);
        },
        bJ,
        d,
      );
    }
  }
  var eJ = { dl: 1, id: 1 },
    fJ = {};
  function gJ(a, b, c, d) {}
  dJ.T = "injectScript";
  gJ.F = "internal.injectScript";
  function hJ(a) {
    var b = !0;
    return b;
  }
  hJ.T = "isConsentGranted";
  function iJ(a) {
    var b = !1;
    return b;
  }
  iJ.F = "internal.isDebugMode";
  function jJ() {
    return tl();
  }
  jJ.F = "internal.isDmaRegion";
  function kJ(a) {
    var b = !1;
    return b;
  }
  kJ.F = "internal.isEntityInfrastructure";
  function lJ() {
    var a = !1;
    return a;
  }
  lJ.F = "internal.isLandingPage";
  function mJ() {
    var a = Zg(function (b) {
      JA(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function nJ(a) {
    var b = void 0;
    return hd(b);
  }
  nJ.F = "internal.legacyParseUrl";
  function oJ() {
    return !1;
  }
  var pJ = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function qJ() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  qJ.T = "logToConsole";
  function rJ(a, b) {}
  rJ.F = "internal.mergeRemoteConfig";
  function sJ(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return hd(d);
  }
  sJ.F = "internal.parseCookieValuesFromString";
  function tJ(a) {
    var b = void 0;
    return b;
  }
  tJ.T = "parseUrl";
  function uJ(a) {}
  uJ.F = "internal.processAsNewEvent";
  function vJ(a, b, c) {
    var d;
    return d;
  }
  vJ.F = "internal.pushToDataLayer";
  function wJ(a) {
    var b = !1;
    return b;
  }
  wJ.T = "queryPermission";
  function xJ() {
    var a = "";
    L(this, "read_character_set"), (a = E.characterSet || "");
    return a;
  }
  xJ.T = "readCharacterSet";
  function yJ() {
    return Ki.ob;
  }
  yJ.F = "internal.readDataLayerName";
  function zJ() {
    var a = "";
    L(this, "read_title"), (a = E.title || "");
    return a;
  }
  zJ.T = "readTitle";
  function AJ(a, b) {
    var c = this;
  }
  AJ.F = "internal.registerCcdCallback";
  function BJ(a) {
    return !0;
  }
  BJ.F = "internal.registerDestination";
  var CJ = ["config", "event", "get", "set"];
  function DJ(a, b, c) {}
  DJ.F = "internal.registerGtagCommandListener";
  function EJ(a, b) {
    var c = !1;
    return c;
  }
  EJ.F = "internal.removeDataLayerEventListener";
  function FJ(a, b) {}
  FJ.F = "internal.removeFormData";
  function GJ() {}
  GJ.T = "resetDataLayer";
  function HJ(a, b, c) {
    var d = void 0;
    return d;
  }
  HJ.F = "internal.scrubUrlParams";
  function IJ(a) {}
  IJ.F = "internal.sendAdsHit";
  function JJ(a, b, c, d) {}
  JJ.F = "internal.sendGtagEvent";
  function KJ(a, b, c) {
    K(
      this.getName(),
      ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"],
      arguments,
    );
    L(this, "send_pixel", a);
    var d = this.D;
    tc(
      a,
      function () {
        b instanceof $c && b.nb(d);
      },
      function () {
        c instanceof $c && c.nb(d);
      },
    );
  }
  KJ.T = "sendPixel";
  function LJ(a, b) {}
  LJ.F = "internal.setAnchorHref";
  function MJ(a) {}
  MJ.F = "internal.setContainerConsentDefaults";
  function NJ(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  NJ.T = "setCookie";
  function OJ(a) {}
  OJ.F = "internal.setCorePlatformServices";
  function PJ(a, b) {}
  PJ.F = "internal.setDataLayerValue";
  function QJ(a) {}
  QJ.T = "setDefaultConsentState";
  function RJ(a, b) {}
  RJ.F = "internal.setDelegatedConsentType";
  function SJ(a, b) {}
  SJ.F = "internal.setFormAction";
  function TJ(a, b, c) {}
  TJ.F = "internal.setInCrossContainerData";
  function UJ(a, b, c) {
    return !1;
  }
  UJ.T = "setInWindow";
  function VJ(a, b, c) {}
  VJ.F = "internal.setProductSettingsParameter";
  function WJ(a, b, c) {}
  WJ.F = "internal.setRemoteConfigParameter";
  function XJ(a, b, c, d) {
    var e = this;
  }
  XJ.T = "sha256";
  function YJ(a, b, c) {}
  YJ.F = "internal.sortRemoteConfigParameters";
  function ZJ(a, b) {
    var c = void 0;
    return c;
  }
  ZJ.F = "internal.subscribeToCrossContainerData";
  var $J = {},
    aK = {};
  $J.getItem = function (a) {
    var b = null;
    return b;
  };
  $J.setItem = function (a, b) {};
  $J.removeItem = function (a) {};
  $J.clear = function () {};
  $J.T = "templateStorage";
  function bK(a, b) {
    var c = !1;
    return c;
  }
  bK.F = "internal.testRegex";
  function cK(a) {
    var b;
    return b;
  }
  function dK(a) {
    var b;
    return b;
  }
  dK.F = "internal.unsiloId";
  function eK(a, b) {
    var c;
    return c;
  }
  eK.F = "internal.unsubscribeFromCrossContainerData";
  function fK(a) {}
  fK.T = "updateConsentState";
  var gK;
  function hK(a, b, c) {
    gK = gK || new jh();
    gK.add(a, b, c);
  }
  function iK(a, b) {
    var c = (gK = gK || new jh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + ".",
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          ".",
      );
    c.j[a] = bb(b) ? Gg(a, b) : Hg(a, b);
  }
  function jK() {
    return function (a) {
      var b;
      var c = gK;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.kb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function kK() {
    var a = function (c) {
        return void iK(c.F, c);
      },
      b = function (c) {
        return void hK(c.T, c);
      };
    b(DA);
    b(KA);
    b(YB);
    b($B);
    b(aC);
    b(hC);
    b(jC);
    b(nC);
    b(mJ());
    b(pC);
    b(GF);
    b(HF);
    b($F);
    b(aG);
    b(bG);
    b(hG);
    b(UI);
    b(WI);
    b(dJ);
    b(hJ);
    b(qJ);
    b(tJ);
    b(wJ);
    b(xJ);
    b(zJ);
    b(KJ);
    b(NJ);
    b(QJ);
    b(UJ);
    b(XJ);
    b($J);
    b(fK);
    hK("Math", Lg());
    hK("Object", hh);
    hK("TestHelper", lh());
    hK("assertApi", Ig);
    hK("assertThat", Jg);
    hK("decodeUri", Ng);
    hK("decodeUriComponent", Og);
    hK("encodeUri", Pg);
    hK("encodeUriComponent", Qg);
    hK("fail", Vg);
    hK("generateRandom", Wg);
    hK("getTimestamp", Xg);
    hK("getTimestampMillis", Xg);
    hK("getType", Yg);
    hK("makeInteger", $g);
    hK("makeNumber", ah);
    hK("makeString", bh);
    hK("makeTableMap", ch);
    hK("mock", fh);
    hK("fromBase64", BF, !("atob" in B));
    hK("localStorage", pJ, !oJ());
    hK("toBase64", cK, !("btoa" in B));
    a(CA);
    a(GA);
    a(aB);
    a(mB);
    a(tB);
    a(yB);
    a(NB);
    a(WB);
    a(ZB);
    a(bC);
    a(cC);
    a(dC);
    a(eC);
    a(fC);
    a(gC);
    a(iC);
    a(kC);
    a(mC);
    a(oC);
    a(qC);
    a(sC);
    a(tC);
    a(uC);
    a(vC);
    a(wC);
    a(AC);
    a(IC);
    a(JC);
    a(UC);
    a(ZC);
    a(dD);
    a(mD);
    a(rD);
    a(ED);
    a(GD);
    a(UD);
    a(VD);
    a(XD);
    a(zF);
    a(AF);
    a(CF);
    a(DF);
    a(EF);
    a(IF);
    a(JF);
    a(KF);
    a(LF);
    a(MF);
    a(NF);
    a(OF);
    a(PF);
    a(QF);
    a(RF);
    a(SF);
    a(UF);
    a(VF);
    a(WF);
    a(XF);
    a(YF);
    a(ZF);
    a(cG);
    a(dG);
    a(eG);
    a(fG);
    a(gG);
    a(jG);
    a(RI);
    a(YI);
    a(gJ);
    a(iJ);
    a(jJ);
    a(kJ);
    a(lJ);
    a(nJ);
    a(LB);
    a(rJ);
    a(sJ);
    a(uJ);
    a(vJ);
    a(yJ);
    a(AJ);
    a(BJ);
    a(DJ);
    a(EJ);
    a(FJ);
    a(HJ);
    a(IJ);
    a(JJ);
    a(LJ);
    a(MJ);
    a(OJ);
    a(PJ);
    a(RJ);
    a(SJ);
    a(TJ);
    a(VJ);
    a(WJ);
    a(YJ);
    a(ZJ);
    a(bK);
    a(dK);
    a(eK);
    iK("internal.CrossContainerSchema", rC());
    iK("internal.GtagSchema", SI());
    iK("internal.IframingStateSchema", VI());
    hK("mockObject", gh);
    return jK();
  }
  var AA;
  function lK() {
    AA.j.j.H = function (a, b, c) {
      Li.SANDBOXED_JS_SEMAPHORE = Li.SANDBOXED_JS_SEMAPHORE || 0;
      Li.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Li.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function mK(a) {
    a &&
      ib(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          aj[e] = aj[e] || [];
          aj[e].push(b);
        }
      });
  }
  function nK(a) {
    xy(sy("developer_id." + a, !0), 0, {});
  }
  var oK = Array.isArray;
  function pK(a, b) {
    return Vc(a, b || null);
  }
  function Y(a) {
    return window.encodeURIComponent(a);
  }
  function qK(a, b, c) {
    uc(a, b, c);
  }
  function rK(a, b) {
    if (!a) return !1;
    var c = Aj(Gj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function sK(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var BK = B.clearTimeout,
    CK = B.setTimeout;
  function DK(a, b, c) {
    if (Oo()) {
      b && H(b);
    } else return qc(a, b, c);
  }
  function EK() {
    return B.location.href;
  }
  function FK(a, b) {
    return nj(a, b || 2);
  }
  function GK(a, b) {
    B[a] = b;
  }
  function HK(a, b, c) {
    b && (B[a] === void 0 || (c && !B[a])) && (B[a] = b);
    return B[a];
  }
  function IK(a, b) {
    if (Oo()) {
      b && H(b);
    } else sc(a, b);
  }
  var JK = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = FK("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Aj(
              Gj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey,
            )
          : Dj(Gj(String(b)))
        : String(b);
    }),
    (Z.__f.o = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q,
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + ".",
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : FK("gtm.url", 1)) || EK();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Dj(Gj(String(c)));
        var e = Gj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Aj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Aj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0,
          );
        return f;
      });
    })();

  (Z.securityGroups.get_referrer = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_referrer = b;
        Z.__get_referrer.o = "get_referrer";
        Z.__get_referrer.isVendorTemplate = !0;
        Z.__get_referrer.priorityOverride = 0;
        Z.__get_referrer.isInfrastructure = !1;
        Z.__get_referrer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!z(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified.",
                  );
                if (!z(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified.",
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.o = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && kg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_title = ["google"]),
    (Z.__read_title = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Z.__read_title.o = "read_title"),
    (Z.__read_title.isVendorTemplate = !0),
    (Z.__read_title.priorityOverride = 0),
    (Z.__read_title.isInfrastructure = !1),
    (Z.__read_title.runInSiloedMode = !1);
  (Z.securityGroups.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Z.__process_dom_events = b;
        Z.__process_dom_events.o = "process_dom_events";
        Z.__process_dom_events.isVendorTemplate = !0;
        Z.__process_dom_events.priorityOverride = 0;
        Z.__process_dom_events.isInfrastructure = !1;
        Z.__process_dom_events.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (k, m, n) {
            if (!e[m]) throw d(k, {}, "Prohibited event target " + m + ".");
            if (e[m].indexOf(n) === -1)
              throw d(
                k,
                {},
                "Prohibited listener registration for DOM event " + n + ".",
              );
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.send_pixel = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__send_pixel = b;
        Z.__send_pixel.o = "send_pixel";
        Z.__send_pixel.isVendorTemplate = !0;
        Z.__send_pixel.priorityOverride = 0;
        Z.__send_pixel.isInfrastructure = !1;
        Z.__send_pixel.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedUrls || "specific",
          d = b.vtp_urls || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "URL must be a string.");
            try {
              if (
                (c === "any" && yg(Gj(g))) ||
                (c === "specific" && Bg(Gj(g), d))
              )
                return;
            } catch (k) {
              throw e(f, {}, "Invalid URL filter.");
            }
            throw e(f, {}, "Prohibited URL: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Bg(Gj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.o = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
        Z.__get_url.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!z(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified.",
                  );
                if (!z(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified.",
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.o = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Bg(Gj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.unsafe_inject_arbitrary_html = ["google"]),
    (function () {
      function a(b, c, d) {
        return { useIframe: c, supportDocumentWrite: d };
      }
      (function (b) {
        Z.__unsafe_inject_arbitrary_html = b;
        Z.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
        Z.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
        Z.__unsafe_inject_arbitrary_html.priorityOverride = 0;
        Z.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
        Z.__unsafe_inject_arbitrary_html.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e && f)
              throw c(
                d,
                {},
                "Only one of useIframe and supportDocumentWrite can be true.",
              );
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "useIframe must be a boolean.");
            if (f !== void 0 && typeof f !== "boolean")
              throw c(d, {}, "supportDocumentWrite must be a boolean.");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.get_cookies = ["google"]),
    (function () {
      function a(b, c) {
        return { name: c };
      }
      (function (b) {
        Z.__get_cookies = b;
        Z.__get_cookies.o = "get_cookies";
        Z.__get_cookies.isVendorTemplate = !0;
        Z.__get_cookies.priorityOverride = 0;
        Z.__get_cookies.isInfrastructure = !1;
        Z.__get_cookies.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_cookieAccess || "specific",
          d = b.vtp_cookieNames || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Cookie name must be a string.");
            if (c !== "any" && !(c === "specific" && d.indexOf(g) >= 0))
              throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_character_set = ["google"]),
    (Z.__read_character_set = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Z.__read_character_set.o = "read_character_set"),
    (Z.__read_character_set.isVendorTemplate = !0),
    (Z.__read_character_set.priorityOverride = 0),
    (Z.__read_character_set.isInfrastructure = !1),
    (Z.__read_character_set.runInSiloedMode = !1);
  var KK = {
    dataLayer: oj,
    callback: function (a) {
      $i.hasOwnProperty(a) && bb($i[a]) && $i[a]();
      delete $i[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
  (KK.onHtmlSuccess = mA(!0)), (KK.onHtmlFailure = mA(!1));
  function LK() {
    Li[ok()] = Li[ok()] || KK;
    yk();
    Ck() ||
      ib(Dk(), function (d, e) {
        jx(d, e.transportUrl, e.context);
        V(92);
      });
    tb(aj, Z.securityGroups);
    var a = sk(tk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || V(142);
    iA(),
      rf({
        Im: function (d) {
          return d === gA;
        },
        Vl: function (d) {
          return new jA(d);
        },
        Jm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        dn: function (d) {
          var e;
          if (d === gA) e = d;
          else {
            var f = bj();
            hA[f] = d;
            e = 'google_tag_manager["rm"]["' + qk() + '"](' + f + ")";
          }
          return e;
        },
      });
    tf = Kf;
  }
  var MK = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Iz(n) && (m = k.Dj);
    }
    function c() {
      m && jc ? g(m) : a();
    }
    if (!B["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Gj(E.referrer);
        d = Cj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = To("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((B["__TAGGY_INSTALLED"] = !0),
        qc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Ri && ((t = "OGT"), (w = "GTAG"));
        var x = B["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (B["google.tagmanager.debugui2.queue"] = x),
          qc(
            "https://" +
              Ki.xf +
              "/debug/bootstrap?id=" +
              Qf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Qo(),
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: jc,
            containerProduct: t,
            debug: !1,
            id: Qf.ctid,
            targetRef: { ctid: Qf.ctid, isDestination: ik() },
            aliases: lk(),
            destinations: jk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ki.Sk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { tl: 1, Fj: 2, Tj: 3, Gi: 4, Dj: 5 };
    k[k.tl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Fj] = "GTM_DEBUG_PARAM";
    k[k.Tj] = "REFERRER";
    k[k.Gi] = "COOKIE";
    k[k.Dj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Aj(B.location, "query", !1, void 0, "gtm_debug");
    Iz(p) && (m = k.Fj);
    if (!m && E.referrer) {
      var q = Gj(E.referrer);
      Cj(q, "host") === "tagassistant.google.com" && (m = k.Tj);
    }
    if (!m) {
      var r = To("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Gi);
    }
    m || b();
    if (!m && Jz(n)) {
      var u = !1;
      vc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1,
      );
      B.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = MK)) {
        var b;
        a: {
          for (var c = dk(), d = l(kk()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        wk();
        if (R(86)) {
        }
        Ya[10] = !0;
        ik();
        if (!Kl) {
          Kl = !0;
          for (var f = Ll.length - 1; f >= 0; f--) Ll[f]();
          Ll = [];
        }
        qo();
        Ul();
        var g = qk();
        if (dk().canonical[g]) {
          var k = Li.zones;
          k && k.unregisterChild(kk());
          Vw().removeExternalRestrictions(qk());
        } else {
          var m = ej.aa,
            n = Ji.Bn;
          m.j = new Set();
          if (n !== "")
            for (var p = l(n.split("~")), q = p.next(); !q.done; q = p.next()) {
              var r = Number(q.value);
              isNaN(r) || m.j.add(r);
            }
          ej.H = "";
          ej.Ua =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          ej.P = "ad_storage|analytics_storage|ad_user_data";
          ej.K = "4bj0";
          ej.K = "4bj0";
          fx();
          for (
            var u = data.resource || {}, v = u.macros || [], t = 0;
            t < v.length;
            t++
          )
            jf.push(v[t]);
          for (var w = u.tags || [], x = 0; x < w.length; x++) mf.push(w[x]);
          for (var y = u.predicates || [], A = 0; A < y.length; A++)
            lf.push(y[A]);
          for (var C = u.rules || [], D = 0; D < C.length; D++) {
            for (var G = C[D], J = {}, F = 0; F < G.length; F++) {
              var T = G[F][0];
              J[T] = Array.prototype.slice.call(G[F], 1);
              (T !== "if" && T !== "unless") || sf(J[T]);
            }
            kf.push(J);
          }
          of = Z;
          pf = oA;
          Mf = new Tf();
          var M = data.sandboxed_scripts,
            aa = data.security_groups;
          a: {
            var da = data.runtime || [],
              U = data.runtime_lines;
            AA = new De();
            lK();
            hf = zA();
            var S = AA,
              N = kK(),
              la = new $c("require", N);
            la.Ia();
            S.j.j.set("require", la);
            for (var ia = [], ea = 0; ea < da.length; ea++) {
              var sa = da[ea];
              if (!Array.isArray(sa) || sa.length < 3) {
                if (sa.length === 0) continue;
                break a;
              }
              U && U[ea] && U[ea].length && Df(sa, U[ea]);
              try {
                AA.execute(sa), R(98) && Vj && sa[0] === 50 && ia.push(sa[1]);
              } catch (ho) {}
            }
            R(98) && (uf = ia);
          }
          if (M && M.length)
            for (var Ma = ["sandboxedScripts"], za = 0; za < M.length; za++) {
              var Sa = M[za].replace(/^_*/, "");
              aj[Sa] = Ma;
            }
          mK(aa);
          LK();
          if (!Vi)
            for (
              var jb = tl() ? ij(ej.P) : ij(ej.Ua), lc = 0;
              lc < xl.length;
              lc++
            ) {
              var ge = xl[lc],
                yh = ge,
                NK = jb[ge] ? "granted" : "denied";
              Tk().implicit(yh, NK);
            }
          Hz();
          kx = !1;
          lx = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            nx();
          else {
            vc(E, "DOMContentLoaded", nx);
            vc(E, "readystatechange", nx);
            if (E.createEventObject && E.documentElement.doScroll) {
              var Dy = !0;
              try {
                Dy = !B.frameElement;
              } catch (ho) {}
              Dy && ox();
            }
            vc(B, "load", nx);
          }
          mz = !1;
          E.readyState === "complete" ? oz() : vc(B, "load", oz);
          Vj &&
            (Im(Vm),
            B.setInterval(Um, 864e5),
            Im(rA),
            Im(Ox),
            Im(Hv),
            Im(Ym),
            Im(wA),
            Im(Zx),
            R(98) && (Im(Tx), Im(Ux), Im(Vx)));
          if (Wj) {
            Sk();
            om();
            var Ey,
              Fy = Gj(B.location.href);
            (Ey = Fy.hostname + Fy.pathname) &&
              Kk("dl", encodeURIComponent(Ey));
            var io;
            var Gy = Qf.ctid;
            if (Gy) {
              var PK = gk.ze ? 1 : 0,
                Ah,
                Hy = sk(tk());
              Ah = Hy && Hy.context;
              io =
                Gy +
                ";" +
                Qf.canonicalContainerId +
                ";" +
                (Ah && Ah.fromContainerExecution ? 1 : 0) +
                ";" +
                ((Ah && Ah.source) || 0) +
                ";" +
                PK;
            } else io = void 0;
            var Iy = io;
            Iy && Kk("tdp", Iy);
            var Jy = Pn(!0);
            Jy !== void 0 && Kk("frm", String(Jy));
            var jo;
            var Bh = sk(tk());
            if (Bh) {
              for (; Bh.parent; ) {
                var Ky = sk(Bh.parent);
                if (!Ky) break;
                Bh = Ky;
              }
              jo = Bh;
            } else jo = void 0;
            var Re = jo;
            if (!Re) V(144);
            else if (R(53) || Re.canonicalContainerId) {
              var ko;
              a: {
                var Ly,
                  My = (Ly = Re.scriptElement) == null ? void 0 : Ly.src;
                if (My) {
                  var lo;
                  try {
                    var Ny;
                    lo =
                      (Ny = Jc()) == null
                        ? void 0
                        : Ny.getEntriesByType("resource");
                  } catch (ho) {}
                  if (lo) {
                    for (
                      var Oy = -1, Py = l(lo), mo = Py.next();
                      !mo.done;
                      mo = Py.next()
                    ) {
                      var Qy = mo.value;
                      if (Qy.initiatorType === "script") {
                        Oy += 1;
                        var no = Qy.name,
                          oo = My;
                        R(52) &&
                          ((no = no.replace(Kz, "")),
                          (oo = oo.replace(Kz, "")));
                        if (no === oo) {
                          ko = Oy;
                          break a;
                        }
                      }
                    }
                    V(146);
                  } else V(145);
                }
                ko = void 0;
              }
              var Ry = ko;
              Ry !== void 0 &&
                (Re.canonicalContainerId &&
                  Kk("rtg", String(Re.canonicalContainerId)),
                Kk("slo", String(Ry)),
                Kk("hlo", Re.htmlLoadOrder || "-1"),
                Kk("lst", String(Re.loadScriptType || "0")));
            }
            var ak;
            var Ch = rk();
            if (Ch)
              if (Ch.canonicalContainerId) ak = Ch.canonicalContainerId;
              else {
                var Sy,
                  Ty =
                    Ch.scriptContainerId ||
                    ((Sy = Ch.destinations) == null ? void 0 : Sy[0]);
                ak = Ty ? "_" + Ty : void 0;
              }
            else ak = void 0;
            var Uy = ak;
            Uy && Kk("pcid", Uy);
            R(36) &&
              (Kk("bt", String(ej.C ? 2 : Ti ? 1 : 0)),
              Kk("ct", String(ej.C ? 0 : Ti ? 1 : Oo() ? 2 : 3)));
          }
          eA();
          ol(1);
          JB();
          Zi = qb();
          KK.bootstrap = Zi;
          if (R(86)) {
          }
          R(113) &&
            (typeof B.name === "string" &&
            vb(B.name, "web-pixel-sandbox-CUSTOM") &&
            Kc()
              ? nK("dMDg0Yz")
              : B.Shopify && Kc() && nK("dNTU0Yz"));
        }
      }
    } catch (ho) {
      if ((ol(4), Vj)) {
        var QK = Pm(!0, !0);
        uc(QK);
      }
    }
  });
})();
