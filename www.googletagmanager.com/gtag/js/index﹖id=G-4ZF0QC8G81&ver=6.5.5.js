// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "7",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "google.ch" },
        { function: "__c", vtp_value: 0 },
      ],
      tags: [
        {
          function: "__ogt_cross_domain",
          priority: 23,
          vtp_rules: [
            "list",
            "realestate\\.robbreport\\.com",
            "^robbreport\\.com$",
            "^robbreport\\-com\\.translate\\.goog$",
            "^ultimategiftguide\\.robbreport\\.com$",
          ],
          tag_id: 10,
        },
        {
          function: "__ogt_auto_events",
          priority: 23,
          vtp_enableScroll: false,
          vtp_enableOutboundClick: true,
          vtp_enableDownload: false,
          vtp_enableHistoryEvents: false,
          vtp_enableForm: false,
          vtp_enableVideo: false,
          vtp_enablePageView: true,
          tag_id: 12,
        },
        {
          function: "__ogt_dma",
          priority: 13,
          vtp_delegationMode: "ON",
          vtp_dmaDefault: "DENIED",
          tag_id: 13,
        },
        {
          function: "__ogt_1p_data_v2",
          priority: 13,
          vtp_isAutoEnabled: true,
          vtp_autoCollectExclusionSelectors: [
            "list",
            ["map", "exclusionSelector", ""],
          ],
          vtp_isEnabled: true,
          vtp_cityType: "CSS_SELECTOR",
          vtp_manualEmailEnabled: false,
          vtp_firstNameType: "CSS_SELECTOR",
          vtp_countryType: "CSS_SELECTOR",
          vtp_cityValue: "",
          vtp_emailType: "CSS_SELECTOR",
          vtp_regionType: "CSS_SELECTOR",
          vtp_autoEmailEnabled: true,
          vtp_postalCodeValue: "",
          vtp_lastNameValue: "",
          vtp_phoneType: "CSS_SELECTOR",
          vtp_phoneValue: "",
          vtp_streetType: "CSS_SELECTOR",
          vtp_autoPhoneEnabled: false,
          vtp_postalCodeType: "CSS_SELECTOR",
          vtp_emailValue: "",
          vtp_firstNameValue: "",
          vtp_streetValue: "",
          vtp_lastNameType: "CSS_SELECTOR",
          vtp_autoAddressEnabled: false,
          vtp_regionValue: "",
          vtp_countryValue: "",
          vtp_isAutoCollectPiiEnabledFlag: false,
          tag_id: 15,
        },
        {
          function: "__ccd_ga_first",
          priority: 12,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 28,
        },
        {
          function: "__set_product_settings",
          priority: 11,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 27,
        },
        {
          function: "__ccd_ga_ads_link",
          priority: 10,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 26,
        },
        {
          function: "__ogt_google_signals",
          priority: 9,
          vtp_googleSignals: "ENABLED",
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 25,
        },
        {
          function: "__ccd_ga_regscope",
          priority: 8,
          vtp_settingsTable: [
            "list",
            [
              "map",
              "redactFieldGroup",
              "DEVICE_AND_GEO",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
            [
              "map",
              "redactFieldGroup",
              "GOOGLE_SIGNALS",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
          ],
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 24,
        },
        {
          function: "__ccd_em_download",
          priority: 7,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 23,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 6,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 22,
        },
        {
          function: "__ccd_em_scroll",
          priority: 5,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 21,
        },
        {
          function: "__ccd_em_site_search",
          priority: 4,
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 20,
        },
        {
          function: "__ccd_em_video",
          priority: 3,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 19,
        },
        {
          function: "__ccd_conversion_marking",
          priority: 2,
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 18,
        },
        {
          function: "__ccd_auto_redact",
          priority: 1,
          vtp_redactEmail: false,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 17,
        },
        {
          function: "__gct",
          vtp_trackingId: "G-4ZF0QC8G81",
          vtp_sessionDuration: 0,
          tag_id: 7,
        },
        {
          function: "__ccd_ga_last",
          priority: 0,
          vtp_instanceDestinationId: "G-4ZF0QC8G81",
          tag_id: 16,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init_consent" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 16],
        ],
        [
          ["if", 1],
          ["add", 0, 1, 3, 17, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
        ],
        [
          ["if", 2],
          ["add", 2],
        ],
      ],
    },
    runtime: [
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__ccd_auto_redact",
        [46, "a"],
        [
          50,
          "v",
          [46, "bk"],
          [36, [2, [15, "bk"], "replace", [7, [15, "u"], "\\$1"]]],
        ],
        [
          50,
          "w",
          [46, "bk"],
          [52, "bl", ["c", [15, "bk"]]],
          [52, "bm", [7]],
          [
            65,
            "bn",
            [2, [15, "bl"], "split", [7, ""]],
            [
              46,
              [
                53,
                [52, "bo", [7, ["v", [15, "bn"]]]],
                [52, "bp", ["d", [15, "bn"]]],
                [
                  22,
                  [12, [15, "bp"], [45]],
                  [46, [36, ["d", ["v", [15, "bk"]]]]],
                ],
                [
                  22,
                  [21, [15, "bp"], [15, "bn"]],
                  [
                    46,
                    [2, [15, "bo"], "push", [7, [15, "bp"]]],
                    [
                      22,
                      [21, [15, "bn"], [2, [15, "bn"], "toLowerCase", [7]]],
                      [
                        46,
                        [
                          2,
                          [15, "bo"],
                          "push",
                          [7, ["d", [2, [15, "bn"], "toLowerCase", [7]]]],
                        ],
                      ],
                      [
                        46,
                        [
                          22,
                          [21, [15, "bn"], [2, [15, "bn"], "toUpperCase", [7]]],
                          [
                            46,
                            [
                              2,
                              [15, "bo"],
                              "push",
                              [7, ["d", [2, [15, "bn"], "toUpperCase", [7]]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [18, [17, [15, "bo"], "length"], 1],
                  [
                    46,
                    [
                      2,
                      [15, "bm"],
                      "push",
                      [
                        7,
                        [0, [0, "(?:", [2, [15, "bo"], "join", [7, "|"]]], ")"],
                      ],
                    ],
                  ],
                  [46, [2, [15, "bm"], "push", [7, [16, [15, "bo"], 0]]]],
                ],
              ],
            ],
          ],
          [36, [2, [15, "bm"], "join", [7, ""]]],
        ],
        [
          50,
          "x",
          [46, "bk", "bl", "bm"],
          [52, "bn", ["z", [15, "bk"], [15, "bm"]]],
          [22, [28, [15, "bn"]], [46, [36, [15, "bk"]]]],
          [22, [28, [17, [15, "bn"], "search"]], [46, [36, [15, "bk"]]]],
          [41, "bo"],
          [3, "bo", [17, [15, "bn"], "search"]],
          [
            65,
            "bp",
            [15, "bl"],
            [
              46,
              [
                53,
                [52, "bq", [7, ["v", [15, "bp"]], ["w", [15, "bp"]]]],
                [
                  65,
                  "br",
                  [15, "bq"],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "bs",
                        [
                          30,
                          [16, [15, "t"], [15, "br"]],
                          [
                            43,
                            [15, "t"],
                            [15, "br"],
                            [
                              "b",
                              [0, [0, "([?&]", [15, "br"]], "=)([^&]*)"],
                              "gi",
                            ],
                          ],
                        ],
                      ],
                      [
                        3,
                        "bo",
                        [
                          2,
                          [15, "bo"],
                          "replace",
                          [7, [15, "bs"], [0, "$1", [15, "r"]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            22,
            [20, [15, "bo"], [17, [15, "bn"], "search"]],
            [46, [36, [15, "bk"]]],
          ],
          [
            22,
            [20, [16, [15, "bo"], 0], "&"],
            [46, [3, "bo", [2, [15, "bo"], "substring", [7, 1]]]],
          ],
          [
            22,
            [21, [16, [15, "bo"], 0], "?"],
            [46, [3, "bo", [0, "?", [15, "bo"]]]],
          ],
          [22, [20, [15, "bo"], "?"], [46, [3, "bo", ""]]],
          [43, [15, "bn"], "search", [15, "bo"]],
          [36, ["ba", [15, "bn"], [15, "bm"]]],
        ],
        [
          50,
          "z",
          [46, "bk", "bl"],
          [
            22,
            [20, [15, "bl"], [17, [15, "s"], "PATH"]],
            [46, [3, "bk", [0, [15, "y"], [15, "bk"]]]],
          ],
          [36, ["g", [15, "bk"]]],
        ],
        [
          50,
          "ba",
          [46, "bk", "bl"],
          [41, "bm"],
          [3, "bm", ""],
          [
            22,
            [20, [15, "bl"], [17, [15, "s"], "URL"]],
            [
              46,
              [
                53,
                [41, "bn"],
                [3, "bn", ""],
                [
                  22,
                  [
                    30,
                    [17, [15, "bk"], "username"],
                    [17, [15, "bk"], "password"],
                  ],
                  [
                    46,
                    [
                      3,
                      "bn",
                      [
                        0,
                        [15, "bn"],
                        [
                          0,
                          [
                            0,
                            [
                              0,
                              [17, [15, "bk"], "username"],
                              [39, [17, [15, "bk"], "password"], ":", ""],
                            ],
                            [17, [15, "bk"], "password"],
                          ],
                          "@",
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  3,
                  "bm",
                  [
                    0,
                    [0, [0, [17, [15, "bk"], "protocol"], "//"], [15, "bn"]],
                    [17, [15, "bk"], "host"],
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
                [0, [15, "bm"], [17, [15, "bk"], "pathname"]],
                [17, [15, "bk"], "search"],
              ],
              [17, [15, "bk"], "hash"],
            ],
          ],
        ],
        [
          50,
          "bb",
          [46, "bk", "bl"],
          [41, "bm"],
          [3, "bm", [2, [15, "bk"], "replace", [7, [15, "n"], [15, "r"]]]],
          [
            22,
            [
              30,
              [20, [15, "bl"], [17, [15, "s"], "URL"]],
              [20, [15, "bl"], [17, [15, "s"], "PATH"]],
            ],
            [
              46,
              [
                53,
                [52, "bn", ["z", [15, "bm"], [15, "bl"]]],
                [22, [20, [15, "bn"], [44]], [46, [36, [15, "bm"]]]],
                [52, "bo", [17, [15, "bn"], "search"]],
                [
                  52,
                  "bp",
                  [2, [15, "bo"], "replace", [7, [15, "o"], [15, "r"]]],
                ],
                [22, [20, [15, "bo"], [15, "bp"]], [46, [36, [15, "bm"]]]],
                [43, [15, "bn"], "search", [15, "bp"]],
                [3, "bm", ["ba", [15, "bn"], [15, "bl"]]],
              ],
            ],
          ],
          [36, [15, "bm"]],
        ],
        [
          50,
          "bc",
          [46, "bk"],
          [
            22,
            [20, [15, "bk"], [15, "q"]],
            [46, [36, [17, [15, "s"], "PATH"]]],
            [
              46,
              [
                22,
                [21, [2, [15, "p"], "indexOf", [7, [15, "bk"]]], [27, 1]],
                [46, [36, [17, [15, "s"], "URL"]]],
                [46, [36, [17, [15, "s"], "TEXT"]]],
              ],
            ],
          ],
        ],
        [
          50,
          "bd",
          [46, "bk", "bl"],
          [41, "bm"],
          [3, "bm", false],
          [52, "bn", ["f", [15, "bk"]]],
          [
            38,
            [15, "bn"],
            [46, "string", "array", "object"],
            [
              46,
              [
                5,
                [
                  46,
                  [52, "bo", ["bb", [15, "bk"], [15, "bl"]]],
                  [22, [21, [15, "bk"], [15, "bo"]], [46, [36, [15, "bo"]]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [
                    53,
                    [41, "bp"],
                    [3, "bp", 0],
                    [
                      63,
                      [7, "bp"],
                      [23, [15, "bp"], [17, [15, "bk"], "length"]],
                      [33, [15, "bp"], [3, "bp", [0, [15, "bp"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "bq",
                            [
                              "bd",
                              [16, [15, "bk"], [15, "bp"]],
                              [17, [15, "s"], "TEXT"],
                            ],
                          ],
                          [
                            22,
                            [21, [15, "bq"], [44]],
                            [
                              46,
                              [43, [15, "bk"], [15, "bp"], [15, "bq"]],
                              [3, "bm", true],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [
                    54,
                    "bp",
                    [15, "bk"],
                    [
                      46,
                      [
                        53,
                        [
                          52,
                          "bq",
                          [
                            "bd",
                            [16, [15, "bk"], [15, "bp"]],
                            [17, [15, "s"], "TEXT"],
                          ],
                        ],
                        [
                          22,
                          [21, [15, "bq"], [44]],
                          [
                            46,
                            [43, [15, "bk"], [15, "bp"], [15, "bq"]],
                            [3, "bm", true],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [4],
                ],
              ],
            ],
          ],
          [36, [39, [15, "bm"], [15, "bk"], [44]]],
        ],
        [
          50,
          "bj",
          [46, "bk", "bl"],
          [
            52,
            "bm",
            [30, [2, [15, "bk"], "getMetadata", [7, [15, "bi"]]], [7]],
          ],
          [
            22,
            [20, [2, [15, "bm"], "indexOf", [7, [15, "bl"]]], [27, 1]],
            [46, [2, [15, "bm"], "push", [7, [15, "bl"]]]],
          ],
          [2, [15, "bk"], "setMetadata", [7, [15, "bi"], [15, "bm"]]],
        ],
        [52, "b", ["require", "internal.createRegex"]],
        [52, "c", ["require", "decodeUriComponent"]],
        [52, "d", ["require", "encodeUriComponent"]],
        [
          52,
          "e",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "parseUrl"]],
        [52, "h", ["require", "internal.registerCcdCallback"]],
        [52, "i", [17, [15, "a"], "instanceDestinationId"]],
        [52, "j", [17, [15, "a"], "redactEmail"]],
        [52, "k", [17, [15, "a"], "redactQueryParams"]],
        [52, "l", [39, [15, "k"], [2, [15, "k"], "split", [7, ","]], [7]]],
        [52, "m", "is_sgtm_prehit"],
        [
          22,
          [1, [28, [17, [15, "l"], "length"]], [28, [15, "j"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]],
        [
          52,
          "o",
          [
            "b",
            [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"],
            "gi",
          ],
        ],
        [
          52,
          "p",
          [
            7,
            "page_location",
            "page_referrer",
            "page_path",
            "link_url",
            "video_url",
            "form_destination",
          ],
        ],
        [52, "q", "page_path"],
        [52, "r", "(redacted)"],
        [52, "s", [8, "TEXT", 0, "URL", 1, "PATH", 2]],
        [52, "t", [8]],
        [52, "u", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]],
        [52, "y", "http://."],
        [52, "be", 15],
        [52, "bf", 16],
        [52, "bg", 23],
        [52, "bh", 24],
        [52, "bi", "event_usage"],
        [
          "h",
          [15, "i"],
          [
            51,
            "",
            [7, "bk"],
            [
              22,
              [15, "j"],
              [
                46,
                [
                  53,
                  [52, "bl", [2, [15, "bk"], "getHitKeys", [7]]],
                  [
                    65,
                    "bm",
                    [15, "bl"],
                    [
                      46,
                      [
                        53,
                        [22, [20, [15, "bm"], "_sst_parameters"], [46, [6]]],
                        [
                          52,
                          "bn",
                          [2, [15, "bk"], "getHitData", [7, [15, "bm"]]],
                        ],
                        [22, [28, [15, "bn"]], [46, [6]]],
                        [52, "bo", ["bc", [15, "bm"]]],
                        [52, "bp", ["bd", [15, "bn"], [15, "bo"]]],
                        [
                          22,
                          [21, [15, "bp"], [44]],
                          [
                            46,
                            [
                              2,
                              [15, "bk"],
                              "setHitData",
                              [7, [15, "bm"], [15, "bp"]],
                            ],
                            [
                              "bj",
                              [15, "bk"],
                              [
                                39,
                                [2, [15, "bk"], "getMetadata", [7, [15, "m"]]],
                                [15, "bg"],
                                [15, "be"],
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
              22,
              [17, [15, "l"], "length"],
              [
                46,
                [
                  65,
                  "bl",
                  [15, "p"],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "bm",
                        [2, [15, "bk"], "getHitData", [7, [15, "bl"]]],
                      ],
                      [22, [28, [15, "bm"]], [46, [6]]],
                      [
                        52,
                        "bn",
                        [
                          39,
                          [20, [15, "bl"], [15, "q"]],
                          [17, [15, "s"], "PATH"],
                          [17, [15, "s"], "URL"],
                        ],
                      ],
                      [52, "bo", ["x", [15, "bm"], [15, "l"], [15, "bn"]]],
                      [
                        22,
                        [21, [15, "bo"], [15, "bm"]],
                        [
                          46,
                          [
                            2,
                            [15, "bk"],
                            "setHitData",
                            [7, [15, "bl"], [15, "bo"]],
                          ],
                          [
                            "bj",
                            [15, "bk"],
                            [
                              39,
                              [2, [15, "bk"], "getMetadata", [7, [15, "m"]]],
                              [15, "bh"],
                              [15, "bf"],
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
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.copyPreHit"]],
        [52, "c", ["require", "internal.evaluateBooleanExpression"]],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", "is_conversion"],
        [52, "f", "is_first_visit"],
        [52, "g", "is_first_visit_conversion"],
        [52, "h", "is_session_start"],
        [52, "i", "is_session_start_conversion"],
        [52, "j", "first_visit"],
        [52, "k", "session_start"],
        [41, "l"],
        [41, "m"],
        [
          "d",
          [17, [15, "a"], "instanceDestinationId"],
          [
            51,
            "",
            [7, "n"],
            [52, "o", [8, "preHit", [15, "n"]]],
            [
              65,
              "p",
              [17, [15, "a"], "conversionRules"],
              [
                46,
                [
                  22,
                  ["c", [17, [15, "p"], "matchingRules"], [15, "o"]],
                  [
                    46,
                    [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                    [4],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, "n"], "getMetadata", [7, [15, "f"]]],
              [
                46,
                [
                  22,
                  [28, [15, "l"]],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "p",
                        [
                          "b",
                          [15, "n"],
                          [8, "omitHitData", true, "omitMetadata", true],
                        ],
                      ],
                      [2, [15, "p"], "setEventName", [7, [15, "j"]]],
                      [3, "l", [8, "preHit", [15, "p"]]],
                    ],
                  ],
                ],
                [
                  65,
                  "p",
                  [17, [15, "a"], "conversionRules"],
                  [
                    46,
                    [
                      22,
                      ["c", [17, [15, "p"], "matchingRules"], [15, "l"]],
                      [
                        46,
                        [2, [15, "n"], "setMetadata", [7, [15, "g"], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, "n"], "getMetadata", [7, [15, "h"]]],
              [
                46,
                [
                  22,
                  [28, [15, "m"]],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "p",
                        [
                          "b",
                          [15, "n"],
                          [8, "omitHitData", true, "omitMetadata", true],
                        ],
                      ],
                      [2, [15, "p"], "setEventName", [7, [15, "k"]]],
                      [3, "m", [8, "preHit", [15, "p"]]],
                    ],
                  ],
                ],
                [
                  65,
                  "p",
                  [17, [15, "a"], "conversionRules"],
                  [
                    46,
                    [
                      22,
                      ["c", [17, [15, "p"], "matchingRules"], [15, "m"]],
                      [
                        46,
                        [2, [15, "n"], "setMetadata", [7, [15, "i"], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
        [36],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "r",
          [46, "x"],
          [
            36,
            [
              1,
              [15, "x"],
              [
                21,
                [
                  2,
                  [2, [15, "x"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "q"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "s",
          [46, "x"],
          [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]],
          [
            52,
            "z",
            [
              39,
              [18, [17, [15, "y"], "length"], 1],
              [16, [15, "y"], [37, [17, [15, "y"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "t",
          [46, "x"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "x"], "pathname"],
              [0, "/", [17, [15, "x"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "u",
          [46, "x"],
          [41, "y"],
          [3, "y", ""],
          [
            22,
            [1, [15, "x"], [17, [15, "x"], "href"]],
            [
              46,
              [
                53,
                [41, "z"],
                [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "y",
                  [
                    39,
                    [23, [15, "z"], 0],
                    [17, [15, "x"], "href"],
                    [
                      2,
                      [17, [15, "x"], "href"],
                      "substring",
                      [7, 0, [15, "z"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "y"]],
        ],
        [
          50,
          "w",
          [46, "x"],
          [52, "y", [8]],
          [43, [15, "y"], [15, "j"], true],
          [43, [15, "y"], [15, "f"], true],
          [43, [15, "x"], "eventMetadata", [15, "y"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmDownloadActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_downloads"],
        [52, "h", "file_download"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerDownloadActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "parseUrl"]],
        [52, "p", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "q",
          [
            0,
            "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$",
          ],
        ],
        [52, "v", ["m", [8, "checkValidation", true]]],
        [22, [28, [15, "v"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "x", "y"],
            ["y"],
            [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "z"], "deferrable", true]],
            ],
            [52, "ba", [16, [15, "x"], "gtm.elementUrl"]],
            [52, "bb", ["o", [15, "ba"]]],
            [22, [28, [15, "bb"]], [46, [36]]],
            [52, "bc", ["s", [15, "bb"]]],
            [22, [28, ["r", [15, "bc"]]], [46, [36]]],
            [
              52,
              "bd",
              [
                8,
                "link_id",
                [16, [15, "x"], "gtm.elementId"],
                "link_url",
                ["u", [15, "bb"]],
                "link_text",
                [16, [15, "x"], "gtm.elementText"],
                "file_name",
                ["t", [15, "bb"]],
                "file_extension",
                [15, "bc"],
              ],
            ],
            ["w", [15, "z"]],
            ["p", ["n"], [15, "h"], [15, "bd"], [15, "z"]],
          ],
          [15, "v"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "s",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", ""],
          [
            22,
            [1, [15, "y"], [17, [15, "y"], "href"]],
            [
              46,
              [
                53,
                [41, "ba"],
                [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "z",
                  [
                    39,
                    [23, [15, "ba"], 0],
                    [17, [15, "y"], "href"],
                    [
                      2,
                      [17, [15, "y"], "href"],
                      "substring",
                      [7, 0, [15, "ba"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "t",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", [17, [15, "y"], "hostname"]],
          [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "ba"], [16, [15, "ba"], 0]],
            [
              46,
              [
                3,
                "z",
                [
                  2,
                  [15, "z"],
                  "substring",
                  [7, [17, [16, [15, "ba"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "u",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, false]]],
          [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]],
          [
            22,
            [1, [17, [15, "b"], "enableGa4OutboundClicksFix"], [28, [15, "z"]]],
            [46, [36, false]],
          ],
          [41, "ba"],
          [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]],
          [41, "bb"],
          [
            3,
            "bb",
            [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]],
          ],
          [
            22,
            [
              1,
              [18, [15, "bb"], 0],
              [29, [2, [15, "ba"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]],
              [3, "ba", [0, ".", [15, "ba"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "bb"], 0],
              [
                12,
                [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]],
                [15, "bb"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [
          50,
          "x",
          [46, "y"],
          [52, "z", [8]],
          [43, [15, "z"], [15, "j"], true],
          [43, [15, "z"], [15, "f"], true],
          [43, [15, "y"], "eventMetadata", [15, "z"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmOutboundClickActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_outbound_click"],
        [52, "h", "click"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerOutbackClickActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "internal.getRemoteConfigParameter"]],
        [52, "p", ["require", "getUrl"]],
        [52, "q", ["require", "parseUrl"]],
        [52, "r", ["require", "internal.sendGtagEvent"]],
        [52, "v", ["o", [15, "k"], "cross_domain_conditions"]],
        [
          52,
          "w",
          [
            "m",
            [
              8,
              "affiliateDomains",
              [15, "v"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "y", "z"],
            [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]],
            [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]],
            [
              52,
              "bb",
              [
                8,
                "link_id",
                [16, [15, "y"], "gtm.elementId"],
                "link_classes",
                [16, [15, "y"], "gtm.elementClasses"],
                "link_url",
                ["s", [15, "ba"]],
                "link_domain",
                ["t", [15, "ba"]],
                "outbound",
                true,
              ],
            ],
            [43, [15, "bb"], "event_callback", [15, "z"]],
            [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "bc"], "deferrable", true]],
            ],
            ["x", [15, "bc"]],
            ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]],
          ],
          [15, "w"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [
          50,
          "q",
          [46, "r"],
          [52, "s", [8]],
          [43, [15, "s"], [15, "j"], true],
          [43, [15, "s"], [15, "f"], true],
          [43, [15, "r"], "eventMetadata", [15, "s"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmScrollActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_scroll"],
        [52, "h", "scroll"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerScrollActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "p",
          [
            "m",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "r", "s"],
            ["s"],
            [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "t"], "deferrable", true]],
            ],
            [
              52,
              "u",
              [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]],
            ],
            ["q", [15, "t"]],
            ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]],
          ],
          [15, "p"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", [15, "__module_ccdEmSiteSearchActivity"]],
        [
          52,
          "f",
          [
            2,
            [15, "e"],
            "getSearchTerm",
            [7, [17, [15, "a"], "searchQueryParams"], [15, "b"]],
          ],
        ],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          52,
          "h",
          [
            8,
            "deferrable",
            true,
            "eventId",
            [17, [15, "a"], "gtmEventId"],
            "eventMetadata",
            [8, "em_event", true],
          ],
        ],
        [
          22,
          [15, "f"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  [
                    2,
                    [15, "e"],
                    "buildEventParams",
                    [
                      7,
                      [15, "f"],
                      [17, [15, "a"], "additionalQueryParams"],
                      [15, "b"],
                    ],
                  ],
                  [8],
                ],
              ],
              ["c", [15, "g"], "view_search_results", [15, "i"], [15, "h"]],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_video",
        [46, "a"],
        [
          50,
          "s",
          [46, "t"],
          [52, "u", [8]],
          [43, [15, "u"], [15, "l"], true],
          [43, [15, "u"], [15, "f"], true],
          [43, [15, "t"], "eventMetadata", [15, "u"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmVideoActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_video"],
        [52, "h", "video_start"],
        [52, "i", "video_progress"],
        [52, "j", "video_complete"],
        [52, "k", "isRegistered"],
        [52, "l", "em_event"],
        [52, "m", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "m"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerVideoActivityCallback",
          [7, [15, "m"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "k"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["require", "internal.addDataLayerEventListener"]],
        [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "p", ["require", "internal.getDestinationIds"]],
        [52, "q", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "r",
          [
            "o",
            [
              8,
              "captureComplete",
              true,
              "captureStart",
              true,
              "progressThresholdsPercent",
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "k"], true]],
        [
          "n",
          "gtm.video",
          [
            51,
            "",
            [7, "t", "u"],
            ["u"],
            [52, "v", [16, [15, "t"], "gtm.videoStatus"]],
            [41, "w"],
            [
              22,
              [20, [15, "v"], "start"],
              [46, [3, "w", [15, "h"]]],
              [
                46,
                [
                  22,
                  [20, [15, "v"], "progress"],
                  [46, [3, "w", [15, "i"]]],
                  [
                    46,
                    [
                      22,
                      [20, [15, "v"], "complete"],
                      [46, [3, "w", [15, "j"]]],
                      [46, [36]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "x",
              [
                8,
                "video_current_time",
                [16, [15, "t"], "gtm.videoCurrentTime"],
                "video_duration",
                [16, [15, "t"], "gtm.videoDuration"],
                "video_percent",
                [16, [15, "t"], "gtm.videoPercent"],
                "video_provider",
                [16, [15, "t"], "gtm.videoProvider"],
                "video_title",
                [16, [15, "t"], "gtm.videoTitle"],
                "video_url",
                [16, [15, "t"], "gtm.videoUrl"],
                "visible",
                [16, [15, "t"], "gtm.videoVisible"],
              ],
            ],
            [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "y"], "deferrable", true]],
            ],
            ["s", [15, "y"]],
            ["q", ["p"], [15, "w"], [15, "x"], [15, "y"]],
          ],
          [15, "r"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_ga_ads_link",
        [46, "a"],
        [
          50,
          "j",
          [46, "l"],
          [41, "m"],
          [
            3,
            "m",
            [
              2,
              [15, "l"],
              "getHitData",
              [7, [17, [17, [15, "c"], "EventParameters"], "USER_ID"]],
            ],
          ],
          [
            22,
            [28, [15, "m"]],
            [
              46,
              [
                53,
                [
                  52,
                  "p",
                  [
                    30,
                    [
                      2,
                      [15, "l"],
                      "getHitData",
                      [
                        7,
                        [
                          17,
                          [17, [15, "c"], "EventParameters"],
                          "USER_PROPERTIES",
                        ],
                      ],
                    ],
                    [8],
                  ],
                ],
                [
                  3,
                  "m",
                  [
                    16,
                    [15, "p"],
                    [17, [17, [15, "c"], "EventParameters"], "USER_ID"],
                  ],
                ],
              ],
            ],
          ],
          [22, [28, [15, "m"]], [46, [36]]],
          [52, "n", ["d", [17, [15, "b"], "SHARED_USER_ID"]]],
          [22, [15, "n"], [46, [36]]],
          ["e", [17, [15, "b"], "SHARED_USER_ID"], [15, "m"]],
          [
            "e",
            [17, [15, "b"], "SHARED_USER_ID_SOURCE"],
            [17, [15, "a"], "instanceDestinationId"],
          ],
          [52, "o", ["d", [17, [15, "b"], "SHARED_USER_ID_REQUESTED"]]],
          [
            22,
            [15, "o"],
            [
              46,
              [
                53,
                [
                  52,
                  "p",
                  [30, [2, [15, "l"], "getMetadata", [7, [15, "h"]]], [7]],
                ],
                [
                  22,
                  [23, [2, [15, "p"], "indexOf", [7, [15, "i"]]], 0],
                  [
                    46,
                    [2, [15, "p"], "push", [7, [15, "i"]]],
                    [2, [15, "l"], "setMetadata", [7, [15, "h"], [15, "p"]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          "k",
          [46, "l", "m"],
          [2, [15, "g"], "processEvent", [7, [15, "l"], [15, "m"]]],
        ],
        [52, "b", ["require", "internal.CrossContainerSchema"]],
        [52, "c", ["require", "internal.GtagSchema"]],
        [52, "d", ["require", "internal.copyFromCrossContainerData"]],
        [52, "e", ["require", "internal.setInCrossContainerData"]],
        [52, "f", [15, "__module_gaAdsLinkActivity"]],
        [52, "g", [15, "__module_processors"]],
        [52, "h", "event_usage"],
        [52, "i", 27],
        [
          2,
          [15, "f"],
          "run",
          [7, [17, [15, "a"], "instanceDestinationId"], [15, "j"], [15, "k"]],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
      [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
      [
        50,
        "__ccd_ga_regscope",
        [46, "a"],
        [52, "b", [15, "__module_ccdGaRegionScopedSettings"]],
        [52, "c", [2, [15, "b"], "extractRedactedLocations", [7, [15, "a"]]]],
        [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"], [15, "c"]]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
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
        "__ogt_1p_data_v2",
        [46, "a"],
        [
          50,
          "k",
          [46, "m", "n", "o"],
          [
            22,
            [20, [16, [15, "n"], "type"], [15, "o"]],
            [
              46,
              [22, [28, [15, "m"]], [46, [3, "m", [8]]]],
              [
                22,
                [28, [16, [15, "m"], [15, "o"]]],
                [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]],
              ],
            ],
          ],
          [36, [15, "m"]],
        ],
        [
          50,
          "l",
          [46, "m", "n", "o"],
          [22, [28, [16, [15, "a"], [15, "o"]]], [46, [36]]],
          [43, [15, "m"], [15, "n"], [8, "value", [16, [15, "a"], [15, "o"]]]],
        ],
        [
          22,
          [28, [17, [15, "a"], "isEnabled"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getDestinationIds"]],
        [52, "d", ["require", "internal.getProductSettingsParameter"]],
        [52, "e", ["require", "internal.detectUserProvidedData"]],
        [52, "f", ["require", "queryPermission"]],
        [52, "g", ["require", "internal.setRemoteConfigParameter"]],
        [52, "h", ["require", "internal.registerCcdCallback"]],
        [52, "i", [30, ["c"], [7]]],
        [52, "j", [8, "enable_code", true]],
        [
          22,
          [17, [15, "a"], "isAutoEnabled"],
          [
            46,
            [
              53,
              [52, "m", [7]],
              [
                22,
                [
                  1,
                  [17, [15, "a"], "autoCollectExclusionSelectors"],
                  [
                    17,
                    [17, [15, "a"], "autoCollectExclusionSelectors"],
                    "length",
                  ],
                ],
                [
                  46,
                  [
                    53,
                    [41, "p"],
                    [3, "p", 0],
                    [
                      63,
                      [7, "p"],
                      [
                        23,
                        [15, "p"],
                        [
                          17,
                          [17, [15, "a"], "autoCollectExclusionSelectors"],
                          "length",
                        ],
                      ],
                      [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "q",
                            [
                              17,
                              [
                                16,
                                [
                                  17,
                                  [15, "a"],
                                  "autoCollectExclusionSelectors",
                                ],
                                [15, "p"],
                              ],
                              "exclusionSelector",
                            ],
                          ],
                          [
                            22,
                            [15, "q"],
                            [46, [2, [15, "m"], "push", [7, [15, "q"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                52,
                "n",
                [
                  30,
                  [16, [15, "b"], "enableAutoPhoneAndAddressDetection"],
                  [17, [15, "a"], "isAutoCollectPiiEnabledFlag"],
                ],
              ],
              [
                52,
                "o",
                [
                  39,
                  [17, [15, "a"], "isAutoCollectPiiEnabledFlag"],
                  [17, [15, "a"], "autoEmailEnabled"],
                  true,
                ],
              ],
              [
                43,
                [15, "j"],
                "auto_detect",
                [
                  8,
                  "email",
                  [15, "o"],
                  "phone",
                  [1, [15, "n"], [17, [15, "a"], "autoPhoneEnabled"]],
                  "address",
                  [1, [15, "n"], [17, [15, "a"], "autoAddressEnabled"]],
                  "exclude_element_selectors",
                  [15, "m"],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "isManualEnabled"],
          [
            46,
            [
              53,
              [52, "m", [8]],
              [
                22,
                [17, [15, "a"], "manualEmailEnabled"],
                [46, ["l", [15, "m"], "email", "emailValue"]],
              ],
              [
                22,
                [17, [15, "a"], "manualPhoneEnabled"],
                [46, ["l", [15, "m"], "phone", "phoneValue"]],
              ],
              [
                22,
                [17, [15, "a"], "manualAddressEnabled"],
                [
                  46,
                  [
                    53,
                    [52, "n", [8]],
                    ["l", [15, "n"], "first_name", "firstNameValue"],
                    ["l", [15, "n"], "last_name", "lastNameValue"],
                    ["l", [15, "n"], "street", "streetValue"],
                    ["l", [15, "n"], "city", "cityValue"],
                    ["l", [15, "n"], "region", "regionValue"],
                    ["l", [15, "n"], "country", "countryValue"],
                    ["l", [15, "n"], "postal_code", "postalCodeValue"],
                    [43, [15, "m"], "name_and_address", [7, [15, "n"]]],
                  ],
                ],
              ],
              [43, [15, "j"], "selectors", [15, "m"]],
            ],
          ],
        ],
        [
          65,
          "m",
          [15, "i"],
          [
            46,
            [
              53,
              ["g", [15, "m"], "user_data_settings", [15, "j"]],
              [52, "n", [16, [15, "j"], "auto_detect"]],
              [22, [28, [15, "n"]], [46, [6]]],
              [
                52,
                "o",
                [
                  51,
                  "",
                  [7, "p"],
                  [
                    52,
                    "q",
                    [
                      2,
                      [15, "p"],
                      "getMetadata",
                      [7, "user_data_from_automatic"],
                    ],
                  ],
                  [22, [15, "q"], [46, [36, [15, "q"]]]],
                  [41, "r"],
                  [
                    22,
                    ["f", "detect_user_provided_data", "auto"],
                    [
                      46,
                      [
                        3,
                        "r",
                        [
                          "e",
                          [
                            8,
                            "excludeElementSelectors",
                            [16, [15, "n"], "exclude_element_selectors"],
                            "fieldFilters",
                            [
                              8,
                              "email",
                              [16, [15, "n"], "email"],
                              "phone",
                              [16, [15, "n"], "phone"],
                              "address",
                              [16, [15, "n"], "address"],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [52, "s", [1, [15, "r"], [16, [15, "r"], "elements"]]],
                  [52, "t", [8]],
                  [
                    22,
                    [1, [15, "s"], [18, [17, [15, "s"], "length"], 0]],
                    [
                      46,
                      [
                        53,
                        [41, "u"],
                        [
                          53,
                          [41, "v"],
                          [3, "v", 0],
                          [
                            63,
                            [7, "v"],
                            [23, [15, "v"], [17, [15, "s"], "length"]],
                            [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]],
                            [
                              46,
                              [
                                53,
                                [52, "w", [16, [15, "s"], [15, "v"]]],
                                ["k", [15, "t"], [15, "w"], "email"],
                                [
                                  22,
                                  [
                                    16,
                                    [15, "b"],
                                    "enableAutoPiiOnPhoneAndAddress",
                                  ],
                                  [
                                    46,
                                    ["k", [15, "t"], [15, "w"], "phone_number"],
                                    [
                                      3,
                                      "u",
                                      ["k", [15, "u"], [15, "w"], "first_name"],
                                    ],
                                    [
                                      3,
                                      "u",
                                      ["k", [15, "u"], [15, "w"], "last_name"],
                                    ],
                                    [
                                      3,
                                      "u",
                                      ["k", [15, "u"], [15, "w"], "country"],
                                    ],
                                    [
                                      3,
                                      "u",
                                      [
                                        "k",
                                        [15, "u"],
                                        [15, "w"],
                                        "postal_code",
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          22,
                          [1, [15, "u"], [28, [16, [15, "t"], "address"]]],
                          [46, [43, [15, "t"], "address", [15, "u"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "p"],
                    "setMetadata",
                    [7, "user_data_from_automatic", [15, "t"]],
                  ],
                  [36, [15, "t"]],
                ],
              ],
              [
                "h",
                [15, "m"],
                [
                  51,
                  "",
                  [7, "p"],
                  [
                    2,
                    [15, "p"],
                    "setMetadata",
                    [7, "user_data_from_automatic_getter", [15, "o"]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_auto_events",
        [46, "a"],
        [52, "b", ["require", "internal.getDestinationIds"]],
        [52, "c", ["require", "internal.setProductSettingsParameter"]],
        [41, "d"],
        [3, "d", [30, ["b"], [7]]],
        [
          52,
          "e",
          [
            51,
            "",
            [7, "f", "g"],
            [22, [15, "f"], [46, [36]]],
            [65, "h", [15, "d"], [46, ["c", [15, "h"], [15, "g"], true]]],
          ],
        ],
        ["e", [17, [15, "a"], "enableHistoryEvents"], "ae_block_history"],
        ["e", [17, [15, "a"], "enableScroll"], "ae_block_scroll"],
        [
          "e",
          [17, [15, "a"], "enableOutboundClick"],
          "ae_block_outbound_click",
        ],
        ["e", [17, [15, "a"], "enableForm"], "ae_block_form"],
        ["e", [17, [15, "a"], "enableVideo"], "ae_block_video"],
        ["e", [17, [15, "a"], "enableDownload"], "ae_block_downloads"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_cross_domain",
        [46, "a"],
        [52, "b", [15, "__module_convertDomainConditions"]],
        [52, "c", ["require", "internal.getDestinationIds"]],
        [52, "d", ["require", "internal.setRemoteConfigParameter"]],
        [
          52,
          "e",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          22,
          [17, [15, "a"], "rules"],
          [
            46,
            [
              53,
              [41, "f"],
              [3, "f", [30, ["c"], [7]]],
              [
                65,
                "g",
                [15, "f"],
                [
                  46,
                  [
                    53,
                    [41, "h"],
                    [3, "h", [17, [15, "a"], "rules"]],
                    [
                      "d",
                      [15, "g"],
                      "cross_domain_conditions",
                      [17, [15, "a"], "rules"],
                    ],
                    [
                      22,
                      [17, [15, "h"], "length"],
                      [
                        46,
                        [
                          3,
                          "h",
                          [
                            2,
                            [15, "b"],
                            "convertDomainConditions",
                            [7, [15, "h"]],
                          ],
                        ],
                        [
                          "d",
                          [15, "g"],
                          "linker",
                          [
                            8,
                            "domains",
                            [15, "h"],
                            "decorate_forms",
                            true,
                            "accept_incoming",
                            true,
                            "url_position",
                            "query",
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
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_dma",
        [46, "a"],
        [52, "b", ["require", "internal.declareConsentState"]],
        [52, "c", ["require", "internal.isDmaRegion"]],
        [52, "d", ["require", "internal.setDelegatedConsentType"]],
        [
          22,
          [1, [20, [17, [15, "a"], "delegationMode"], "ON"], ["c"]],
          [46, ["d", "ad_user_data", "ad_storage"]],
        ],
        [
          22,
          [20, [17, [15, "a"], "dmaDefault"], "GRANTED"],
          [46, ["b", [8, "ad_user_data", "granted"]]],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "d"],
          "google_signals",
          [20, [17, [15, "a"], "googleSignals"], "ENABLED"],
        ],
        [
          "b",
          [15, "d"],
          "google_ng",
          [20, [17, [15, "a"], "googleSignals"], "NON_GAIA_REMARKETING"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_convertDomainConditions",
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
                  "e",
                  [46, "g"],
                  [36, [2, [15, "g"], "replace", [7, [15, "d"], "\\$&"]]],
                ],
                [
                  50,
                  "f",
                  [46, "g"],
                  [52, "h", [7]],
                  [
                    53,
                    [41, "i"],
                    [3, "i", 0],
                    [
                      63,
                      [7, "i"],
                      [23, [15, "i"], [17, [15, "g"], "length"]],
                      [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
                      [
                        46,
                        [
                          53,
                          [41, "j"],
                          [
                            22,
                            [20, ["c", [16, [15, "g"], [15, "i"]]], "object"],
                            [
                              46,
                              [
                                53,
                                [
                                  52,
                                  "l",
                                  [16, [16, [15, "g"], [15, "i"]], "matchType"],
                                ],
                                [
                                  52,
                                  "m",
                                  [
                                    16,
                                    [16, [15, "g"], [15, "i"]],
                                    "matchValue",
                                  ],
                                ],
                                [
                                  38,
                                  [15, "l"],
                                  [
                                    46,
                                    "BEGINS_WITH",
                                    "ENDS_WITH",
                                    "EQUALS",
                                    "REGEX",
                                    "CONTAINS",
                                  ],
                                  [
                                    46,
                                    [
                                      5,
                                      [
                                        46,
                                        [3, "j", [0, "^", ["e", [15, "m"]]]],
                                        [4],
                                      ],
                                    ],
                                    [
                                      5,
                                      [
                                        46,
                                        [3, "j", [0, ["e", [15, "m"]], "$"]],
                                        [4],
                                      ],
                                    ],
                                    [
                                      5,
                                      [
                                        46,
                                        [
                                          3,
                                          "j",
                                          [0, [0, "^", ["e", [15, "m"]]], "$"],
                                        ],
                                        [4],
                                      ],
                                    ],
                                    [5, [46, [3, "j", [15, "m"]], [4]]],
                                    [5, [46]],
                                    [9, [46, [3, "j", ["e", [15, "m"]]], [4]]],
                                  ],
                                ],
                              ],
                            ],
                            [46, [3, "j", [16, [15, "g"], [15, "i"]]]],
                          ],
                          [41, "k"],
                          [22, [15, "j"], [46, [3, "k", ["b", [15, "j"]]]]],
                          [
                            22,
                            [15, "k"],
                            [46, [2, [15, "h"], "push", [7, [15, "k"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "h"]],
                ],
                [52, "b", ["require", "internal.createRegex"]],
                [52, "c", ["require", "getType"]],
                [52, "d", ["b", "[.*+\\-?^${}()|[\\]\\\\]", "g"]],
                [36, [8, "convertDomainConditions", [15, "f"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_activities",
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
                  "b",
                  [46, "c", "d"],
                  [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]],
                ],
                [36, [8, "withRequestContext", [15, "b"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_gtagMetadataSchema",
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
                [52, "b", "add_tag_timing"],
                [52, "c", "allow_ad_personalization"],
                [52, "d", "batch_on_navigation"],
                [52, "e", "client_id_source"],
                [52, "f", "consent_event_id"],
                [52, "g", "consent_priority_id"],
                [52, "h", "consent_state"],
                [52, "i", "consent_updated"],
                [52, "j", "conversion_linker_enabled"],
                [52, "k", "cookie_options"],
                [52, "l", "create_dc_join"],
                [52, "m", "create_google_join"],
                [52, "n", "em_event"],
                [52, "o", "endpoint_for_debug"],
                [52, "p", "enhanced_client_id_source"],
                [52, "q", "euid_mode_enabled"],
                [52, "r", "event_start_timestamp_ms"],
                [52, "s", "event_usage"],
                [52, "t", "add_parameter"],
                [52, "u", "attribution_reporting_experiment"],
                [52, "v", "counting_method"],
                [52, "w", "parameter_order"],
                [52, "x", "parsed_target"],
                [52, "y", "send_as_iframe"],
                [52, "z", "ga4_collection_subdomain"],
                [52, "ba", "gbraid_cookie_marked"],
                [52, "bb", "hit_type"],
                [52, "bc", "hit_type_override"],
                [52, "bd", "is_config_command"],
                [52, "be", "is_consent_update"],
                [52, "bf", "is_conversion"],
                [52, "bg", "is_ecommerce"],
                [52, "bh", "is_external_event"],
                [52, "bi", "is_fallback_aw_conversion_ping_allowed"],
                [52, "bj", "is_first_visit"],
                [52, "bk", "is_first_visit_conversion"],
                [52, "bl", "is_gcp_conversion"],
                [52, "bm", "is_merchant_center"],
                [52, "bn", "is_new_to_site"],
                [52, "bo", "is_server_side_destination"],
                [52, "bp", "is_session_start"],
                [52, "bq", "is_session_start_conversion"],
                [52, "br", "is_sgtm_service_worker"],
                [52, "bs", "is_sw_selected"],
                [52, "bt", "is_syn"],
                [52, "bu", "join_timer_sec"],
                [52, "bv", "promises"],
                [52, "bw", "record_aw_latency"],
                [52, "bx", "redact_ads_data"],
                [52, "by", "redact_click_ids"],
                [52, "bz", "remarketing_only"],
                [52, "ca", "send_ccm_parallel_ping"],
                [52, "cb", "send_fledge_experiment"],
                [52, "cc", "send_user_data_hit"],
                [52, "cd", "source_canonical_id"],
                [52, "ce", "speculative"],
                [52, "cf", "speculative_in_message"],
                [52, "cg", "suppress_script_load"],
                [52, "ch", "syn_or_mod"],
                [52, "ci", "user_data"],
                [52, "cj", "user_data_from_automatic"],
                [52, "ck", "user_data_from_code"],
                [52, "cl", "user_data_from_manual"],
                [52, "cm", "user_data_mode"],
                [52, "cn", "user_id_updated"],
                [
                  36,
                  [
                    8,
                    "ADD_TAG_TIMING",
                    [15, "b"],
                    "ALLOW_AD_PERSONALIZATION",
                    [15, "c"],
                    "BATCH_ON_NAVIGATION",
                    [15, "d"],
                    "CLIENT_ID_SOURCE",
                    [15, "e"],
                    "CONSENT_EVENT_ID",
                    [15, "f"],
                    "CONSENT_PRIORITY_ID",
                    [15, "g"],
                    "CONSENT_STATE",
                    [15, "h"],
                    "CONSENT_UPDATED",
                    [15, "i"],
                    "CONVERSION_LINKER_ENABLED",
                    [15, "j"],
                    "COOKIE_OPTIONS",
                    [15, "k"],
                    "CREATE_DC_JOIN",
                    [15, "l"],
                    "CREATE_GOOGLE_JOIN",
                    [15, "m"],
                    "EM_EVENT",
                    [15, "n"],
                    "ENDPOINT_FOR_DEBUG",
                    [15, "o"],
                    "ENHANCED_CLIENT_ID_SOURCE",
                    [15, "p"],
                    "EUID_MODE_ENABLED",
                    [15, "q"],
                    "EVENT_START_TIMESTAMP_MS",
                    [15, "r"],
                    "EVENT_USAGE",
                    [15, "s"],
                    "FL_ADD_PARAMETER",
                    [15, "t"],
                    "FL_ATTRIBUTION_REPORTING_EXPERIMENT",
                    [15, "u"],
                    "FL_COUNTING_METHOD",
                    [15, "v"],
                    "FL_PARAMETER_ORDER",
                    [15, "w"],
                    "FL_PARSED_TARGET",
                    [15, "x"],
                    "FL_SEND_AS_IFRAME",
                    [15, "y"],
                    "GA4_COLLECTION_SUBDOMAIN",
                    [15, "z"],
                    "GBRAID_COOKIE_MARKED",
                    [15, "ba"],
                    "HIT_TYPE",
                    [15, "bb"],
                    "HIT_TYPE_OVERRIDE",
                    [15, "bc"],
                    "IS_CONFIG_COMMAND",
                    [15, "bd"],
                    "IS_CONSENT_UPDATE",
                    [15, "be"],
                    "IS_CONVERSION",
                    [15, "bf"],
                    "IS_ECOMMERCE",
                    [15, "bg"],
                    "IS_EXTERNAL_EVENT",
                    [15, "bh"],
                    "IS_FALLBACK_AW_CONVERSION_PING_ALLOWED",
                    [15, "bi"],
                    "IS_FIRST_VISIT",
                    [15, "bj"],
                    "IS_FIRST_VISIT_CONVERSION",
                    [15, "bk"],
                    "IS_GCP_CONVERSION",
                    [15, "bl"],
                    "IS_MERCHANT_CENTER",
                    [15, "bm"],
                    "IS_NEW_TO_SITE",
                    [15, "bn"],
                    "IS_SERVER_SIDE_DESTINATION",
                    [15, "bo"],
                    "IS_SESSION_START",
                    [15, "bp"],
                    "IS_SESSION_START_CONVERSION",
                    [15, "bq"],
                    "IS_SGTM_SERVICE_WORKER",
                    [15, "br"],
                    "IS_SW_SELECTED",
                    [15, "bs"],
                    "IS_SYNTHETIC_EVENT",
                    [15, "bt"],
                    "JOIN_TIMER_SEC",
                    [15, "bu"],
                    "PROMISES",
                    [15, "bv"],
                    "RECORD_AW_LATENCY",
                    [15, "bw"],
                    "REDACT_ADS_DATA",
                    [15, "bx"],
                    "REDACT_CLICK_IDS",
                    [15, "by"],
                    "REMARKETING_ONLY",
                    [15, "bz"],
                    "SEND_CCM_PARALLEL_PING",
                    [15, "ca"],
                    "SEND_FLEDGE_EXPERIMENT",
                    [15, "cb"],
                    "SEND_USER_DATA_HIT",
                    [15, "cc"],
                    "SOURCE_CANONICAL_ID",
                    [15, "cd"],
                    "SPECULATIVE",
                    [15, "ce"],
                    "SPECULATIVE_IN_MESSAGE",
                    [15, "cf"],
                    "SUPPRESS_SCRIPT_LOAD",
                    [15, "cg"],
                    "SYNTHETIC_OR_MODIFIED_EVENT",
                    [15, "ch"],
                    "USER_DATA",
                    [15, "ci"],
                    "USER_DATA_FROM_AUTOMATIC",
                    [15, "cj"],
                    "USER_DATA_FROM_CODE",
                    [15, "ck"],
                    "USER_DATA_FROM_MANUAL",
                    [15, "cl"],
                    "USER_DATA_MODE",
                    [15, "cm"],
                    "USER_ID_UPDATED",
                    [15, "cn"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_gtagSchema",
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
                [52, "b", "ad_personalization"],
                [52, "c", "ad_storage"],
                [52, "d", "ad_user_data"],
                [52, "e", "analytics_storage"],
                [52, "f", "region"],
                [52, "g", "consent_updated"],
                [52, "h", "wait_for_update"],
                [52, "i", "app_remove"],
                [52, "j", "app_store_refund"],
                [52, "k", "app_store_subscription_cancel"],
                [52, "l", "app_store_subscription_convert"],
                [52, "m", "app_store_subscription_renew"],
                [52, "n", "consent_update"],
                [52, "o", "add_payment_info"],
                [52, "p", "add_shipping_info"],
                [52, "q", "add_to_cart"],
                [52, "r", "remove_from_cart"],
                [52, "s", "view_cart"],
                [52, "t", "begin_checkout"],
                [52, "u", "select_item"],
                [52, "v", "view_item_list"],
                [52, "w", "select_promotion"],
                [52, "x", "view_promotion"],
                [52, "y", "purchase"],
                [52, "z", "refund"],
                [52, "ba", "view_item"],
                [52, "bb", "add_to_wishlist"],
                [52, "bc", "exception"],
                [52, "bd", "first_open"],
                [52, "be", "first_visit"],
                [52, "bf", "gtag.config"],
                [52, "bg", "gtag.get"],
                [52, "bh", "in_app_purchase"],
                [52, "bi", "page_view"],
                [52, "bj", "screen_view"],
                [52, "bk", "session_start"],
                [52, "bl", "timing_complete"],
                [52, "bm", "track_social"],
                [52, "bn", "user_engagement"],
                [52, "bo", "user_id_update"],
                [52, "bp", "gclid_link_decoration_source"],
                [52, "bq", "gclid_storage_source"],
                [52, "br", "gclgb"],
                [52, "bs", "gclid"],
                [52, "bt", "gclgs"],
                [52, "bu", "gcllp"],
                [52, "bv", "gclst"],
                [52, "bw", "ads_data_redaction"],
                [52, "bx", "gad_source"],
                [52, "by", "gad_source_src"],
                [52, "bz", "ndclid"],
                [52, "ca", "ngad_source"],
                [52, "cb", "ngbraid"],
                [52, "cc", "ngclid"],
                [52, "cd", "ngclsrc"],
                [52, "ce", "gclid_url"],
                [52, "cf", "gclsrc"],
                [52, "cg", "gbraid"],
                [52, "ch", "wbraid"],
                [52, "ci", "allow_ad_personalization_signals"],
                [52, "cj", "allow_custom_scripts"],
                [52, "ck", "allow_direct_google_requests"],
                [52, "cl", "allow_display_features"],
                [52, "cm", "allow_enhanced_conversions"],
                [52, "cn", "allow_google_signals"],
                [52, "co", "allow_interest_groups"],
                [52, "cp", "app_id"],
                [52, "cq", "app_installer_id"],
                [52, "cr", "app_name"],
                [52, "cs", "app_version"],
                [52, "ct", "auid"],
                [52, "cu", "auto_detection_enabled"],
                [52, "cv", "aw_remarketing"],
                [52, "cw", "aw_remarketing_only"],
                [52, "cx", "discount"],
                [52, "cy", "aw_feed_country"],
                [52, "cz", "aw_feed_language"],
                [52, "da", "items"],
                [52, "db", "aw_merchant_id"],
                [52, "dc", "aw_basket_type"],
                [52, "dd", "campaign_content"],
                [52, "de", "campaign_id"],
                [52, "df", "campaign_medium"],
                [52, "dg", "campaign_name"],
                [52, "dh", "campaign"],
                [52, "di", "campaign_source"],
                [52, "dj", "campaign_term"],
                [52, "dk", "client_id"],
                [52, "dl", "rnd"],
                [52, "dm", "consent_update_type"],
                [52, "dn", "content_group"],
                [52, "do", "content_type"],
                [52, "dp", "conversion_cookie_prefix"],
                [52, "dq", "conversion_id"],
                [52, "dr", "conversion_linker"],
                [52, "ds", "conversion_linker_disabled"],
                [52, "dt", "conversion_api"],
                [52, "du", "cookie_deprecation"],
                [52, "dv", "cookie_domain"],
                [52, "dw", "cookie_expires"],
                [52, "dx", "cookie_flags"],
                [52, "dy", "cookie_name"],
                [52, "dz", "cookie_path"],
                [52, "ea", "cookie_prefix"],
                [52, "eb", "cookie_update"],
                [52, "ec", "country"],
                [52, "ed", "currency"],
                [52, "ee", "customer_buyer_stage"],
                [52, "ef", "customer_lifetime_value"],
                [52, "eg", "customer_loyalty"],
                [52, "eh", "customer_ltv_bucket"],
                [52, "ei", "custom_map"],
                [52, "ej", "gcldc"],
                [52, "ek", "dclid"],
                [52, "el", "debug_mode"],
                [52, "em", "developer_id"],
                [52, "en", "disable_merchant_reported_purchases"],
                [52, "eo", "dc_custom_params"],
                [52, "ep", "dc_natural_search"],
                [52, "eq", "dynamic_event_settings"],
                [52, "er", "affiliation"],
                [52, "es", "checkout_option"],
                [52, "et", "checkout_step"],
                [52, "eu", "coupon"],
                [52, "ev", "item_list_name"],
                [52, "ew", "list_name"],
                [52, "ex", "promotions"],
                [52, "ey", "shipping"],
                [52, "ez", "tax"],
                [52, "fa", "engagement_time_msec"],
                [52, "fb", "enhanced_client_id"],
                [52, "fc", "enhanced_conversions"],
                [52, "fd", "enhanced_conversions_automatic_settings"],
                [52, "fe", "estimated_delivery_date"],
                [52, "ff", "euid_logged_in_state"],
                [52, "fg", "event_callback"],
                [52, "fh", "event_category"],
                [52, "fi", "event_developer_id_string"],
                [52, "fj", "event_label"],
                [52, "fk", "event"],
                [52, "fl", "event_settings"],
                [52, "fm", "event_timeout"],
                [52, "fn", "description"],
                [52, "fo", "fatal"],
                [52, "fp", "experiments"],
                [52, "fq", "firebase_id"],
                [52, "fr", "first_party_collection"],
                [52, "fs", "_x_20"],
                [52, "ft", "_x_19"],
                [52, "fu", "fledge_drop_reason"],
                [52, "fv", "fledge"],
                [52, "fw", "flight_error_code"],
                [52, "fx", "flight_error_message"],
                [52, "fy", "fl_activity_category"],
                [52, "fz", "fl_activity_group"],
                [52, "ga", "fl_advertiser_id"],
                [52, "gb", "fl_ar_dedupe"],
                [52, "gc", "match_id"],
                [52, "gd", "fl_random_number"],
                [52, "ge", "tran"],
                [52, "gf", "u"],
                [52, "gg", "gac_gclid"],
                [52, "gh", "gac_wbraid"],
                [52, "gi", "gac_wbraid_multiple_conversions"],
                [52, "gj", "ga_restrict_domain"],
                [52, "gk", "ga_temp_client_id"],
                [52, "gl", "ga_temp_ecid"],
                [52, "gm", "gdpr_applies"],
                [52, "gn", "geo_granularity"],
                [52, "go", "value_callback"],
                [52, "gp", "value_key"],
                [52, "gq", "_google_ng"],
                [52, "gr", "google_signals"],
                [52, "gs", "google_tld"],
                [52, "gt", "groups"],
                [52, "gu", "gsa_experiment_id"],
                [52, "gv", "gtm_up"],
                [52, "gw", "iframe_state"],
                [52, "gx", "ignore_referrer"],
                [52, "gy", "internal_traffic_results"],
                [52, "gz", "is_legacy_converted"],
                [52, "ha", "is_legacy_loaded"],
                [52, "hb", "is_passthrough"],
                [52, "hc", "_lps"],
                [52, "hd", "language"],
                [52, "he", "legacy_developer_id_string"],
                [52, "hf", "linker"],
                [52, "hg", "accept_incoming"],
                [52, "hh", "decorate_forms"],
                [52, "hi", "domains"],
                [52, "hj", "url_position"],
                [52, "hk", "merchant_feed_label"],
                [52, "hl", "merchant_feed_language"],
                [52, "hm", "merchant_id"],
                [52, "hn", "method"],
                [52, "ho", "name"],
                [52, "hp", "navigation_type"],
                [52, "hq", "new_customer"],
                [52, "hr", "non_interaction"],
                [52, "hs", "optimize_id"],
                [52, "ht", "page_hostname"],
                [52, "hu", "page_path"],
                [52, "hv", "page_referrer"],
                [52, "hw", "page_title"],
                [52, "hx", "passengers"],
                [52, "hy", "phone_conversion_callback"],
                [52, "hz", "phone_conversion_country_code"],
                [52, "ia", "phone_conversion_css_class"],
                [52, "ib", "phone_conversion_ids"],
                [52, "ic", "phone_conversion_number"],
                [52, "id", "phone_conversion_options"],
                [52, "ie", "_platinum_request_status"],
                [52, "if", "_protected_audience_enabled"],
                [52, "ig", "quantity"],
                [52, "ih", "redact_device_info"],
                [52, "ii", "referral_exclusion_definition"],
                [52, "ij", "restricted_data_processing"],
                [52, "ik", "retoken"],
                [52, "il", "sample_rate"],
                [52, "im", "screen_name"],
                [52, "in", "screen_resolution"],
                [52, "io", "_script_source"],
                [52, "ip", "search_term"],
                [52, "iq", "send_page_view"],
                [52, "ir", "send_to"],
                [52, "is", "server_container_url"],
                [52, "it", "session_duration"],
                [52, "iu", "session_engaged"],
                [52, "iv", "session_engaged_time"],
                [52, "iw", "session_id"],
                [52, "ix", "session_number"],
                [52, "iy", "_shared_user_id"],
                [52, "iz", "delivery_postal_code"],
                [52, "ja", "temporary_client_id"],
                [52, "jb", "topmost_url"],
                [52, "jc", "tracking_id"],
                [52, "jd", "traffic_type"],
                [52, "je", "transaction_id"],
                [52, "jf", "transport_url"],
                [52, "jg", "trip_type"],
                [52, "jh", "update"],
                [52, "ji", "url_passthrough"],
                [52, "jj", "uptgs"],
                [52, "jk", "_user_agent_architecture"],
                [52, "jl", "_user_agent_bitness"],
                [52, "jm", "_user_agent_full_version_list"],
                [52, "jn", "_user_agent_mobile"],
                [52, "jo", "_user_agent_model"],
                [52, "jp", "_user_agent_platform"],
                [52, "jq", "_user_agent_platform_version"],
                [52, "jr", "_user_agent_wow64"],
                [52, "js", "user_data"],
                [52, "jt", "user_data_auto_latency"],
                [52, "ju", "user_data_auto_meta"],
                [52, "jv", "user_data_auto_multi"],
                [52, "jw", "user_data_auto_selectors"],
                [52, "jx", "user_data_auto_status"],
                [52, "jy", "user_data_mode"],
                [52, "jz", "user_data_settings"],
                [52, "ka", "user_id"],
                [52, "kb", "user_properties"],
                [52, "kc", "_user_region"],
                [52, "kd", "us_privacy_string"],
                [52, "ke", "value"],
                [52, "kf", "wbraid_multiple_conversions"],
                [52, "kg", "_fpm_parameters"],
                [52, "kh", "_host_name"],
                [52, "ki", "_in_page_command"],
                [52, "kj", "_ip_override"],
                [52, "kk", "_is_passthrough_cid"],
                [52, "kl", "non_personalized_ads"],
                [52, "km", "_sst_parameters"],
                [52, "kn", "conversion_label"],
                [52, "ko", "page_location"],
                [52, "kp", "global_developer_id_string"],
                [52, "kq", "tc_privacy_string"],
                [
                  36,
                  [
                    8,
                    "CONSENT_AD_PERSONALIZATION",
                    [15, "b"],
                    "CONSENT_AD_STORAGE",
                    [15, "c"],
                    "CONSENT_AD_USER_DATA",
                    [15, "d"],
                    "CONSENT_ANALYTICS_STORAGE",
                    [15, "e"],
                    "CONSENT_REGION",
                    [15, "f"],
                    "CONSENT_UPDATED",
                    [15, "g"],
                    "CONSENT_WAIT_PERIOD",
                    [15, "h"],
                    "EN_APP_REMOVE",
                    [15, "i"],
                    "EN_APP_STORE_REFUND",
                    [15, "j"],
                    "EN_APP_STORE_SUBSCRIPTION_CANCEL",
                    [15, "k"],
                    "EN_APP_STORE_SUBSCRIPTION_CONVERT",
                    [15, "l"],
                    "EN_APP_STORE_SUBSCRIPTION_RENEW",
                    [15, "m"],
                    "EN_CONSENT_UPDATE",
                    [15, "n"],
                    "EN_ECOMMERCE_ADD_PAYMENT",
                    [15, "o"],
                    "EN_ECOMMERCE_ADD_SHIPPING",
                    [15, "p"],
                    "EN_ECOMMERCE_CART_ADD",
                    [15, "q"],
                    "EN_ECOMMERCE_CART_REMOVE",
                    [15, "r"],
                    "EN_ECOMMERCE_CART_VIEW",
                    [15, "s"],
                    "EN_ECOMMERCE_CHECKOUT",
                    [15, "t"],
                    "EN_ECOMMERCE_ITEM_LIST_CLICK",
                    [15, "u"],
                    "EN_ECOMMERCE_ITEM_LIST_VIEW",
                    [15, "v"],
                    "EN_ECOMMERCE_PROMOTION_CLICK",
                    [15, "w"],
                    "EN_ECOMMERCE_PROMOTION_VIEW",
                    [15, "x"],
                    "EN_ECOMMERCE_PURCHASE",
                    [15, "y"],
                    "EN_ECOMMERCE_REFUND",
                    [15, "z"],
                    "EN_ECOMMERCE_VIEW_ITEM",
                    [15, "ba"],
                    "EN_ECOMMERCE_WISHLIST_ADD",
                    [15, "bb"],
                    "EN_EXCEPTION",
                    [15, "bc"],
                    "EN_FIRST_OPEN",
                    [15, "bd"],
                    "EN_FIRST_VISIT",
                    [15, "be"],
                    "EN_GTAG_CONFIG",
                    [15, "bf"],
                    "EN_GTAG_GET",
                    [15, "bg"],
                    "EN_IN_APP_PURCHASE",
                    [15, "bh"],
                    "EN_PAGE_VIEW",
                    [15, "bi"],
                    "EN_SCREEN_VIEW",
                    [15, "bj"],
                    "EN_SESSION_START",
                    [15, "bk"],
                    "EN_TIMING_COMPLETE",
                    [15, "bl"],
                    "EN_TRACK_SOCIAL",
                    [15, "bm"],
                    "EN_USER_ENGAGEMENT",
                    [15, "bn"],
                    "EN_USER_ID_UPDATE",
                    [15, "bo"],
                    "EP_ADS_CLICK_ID_LINK_DECORATION_SOURCE",
                    [15, "bp"],
                    "EP_ADS_CLICK_ID_STORAGE_SOURCE",
                    [15, "bq"],
                    "EP_ADS_COOKIE_BRAID",
                    [15, "br"],
                    "EP_ADS_COOKIE_CLICK_ID",
                    [15, "bs"],
                    "EP_ADS_COOKIE_GAD_SOURCE",
                    [15, "bt"],
                    "EP_ADS_COOKIE_LANDING_PAGE_CODE",
                    [15, "bu"],
                    "EP_ADS_COOKIE_SUPERNOVA_TIMESTAMP",
                    [15, "bv"],
                    "EP_ADS_DATA_REDACTION",
                    [15, "bw"],
                    "EP_ADS_GAD_SOURCE",
                    [15, "bx"],
                    "EP_ADS_GAD_SOURCE_SRC",
                    [15, "by"],
                    "EP_ADS_NAVIGATION_API_DCLID",
                    [15, "bz"],
                    "EP_ADS_NAVIGATION_API_GAD_SOURCE",
                    [15, "ca"],
                    "EP_ADS_NAVIGATION_API_GBRAID",
                    [15, "cb"],
                    "EP_ADS_NAVIGATION_API_GCLID",
                    [15, "cc"],
                    "EP_ADS_NAVIGATION_API_GCLSRC",
                    [15, "cd"],
                    "EP_ADS_URL_CLICK_ID",
                    [15, "ce"],
                    "EP_ADS_URL_CLICK_ID_SOURCE",
                    [15, "cf"],
                    "EP_ADS_URL_GBRAID",
                    [15, "cg"],
                    "EP_ADS_URL_WBRAID",
                    [15, "ch"],
                    "EP_ALLOW_AD_PERSONALIZATION",
                    [15, "ci"],
                    "EP_ALLOW_CUSTOM_SCRIPTS",
                    [15, "cj"],
                    "EP_ALLOW_DIRECT_GOOGLE_REQUESTS",
                    [15, "ck"],
                    "EP_ALLOW_DISPLAY_FEATURES",
                    [15, "cl"],
                    "EP_ALLOW_ENHANCED_CONVERSIONS",
                    [15, "cm"],
                    "EP_ALLOW_GOOGLE_SIGNALS",
                    [15, "cn"],
                    "EP_ALLOW_INTEREST_GROUPS",
                    [15, "co"],
                    "EP_APP_ID",
                    [15, "cp"],
                    "EP_APP_INSTALLER_ID",
                    [15, "cq"],
                    "EP_APP_NAME",
                    [15, "cr"],
                    "EP_APP_VERSION",
                    [15, "cs"],
                    "EP_AUID",
                    [15, "ct"],
                    "EP_AUTO_DETECTION_ENABLED",
                    [15, "cu"],
                    "EP_AW_REMARKETING",
                    [15, "cv"],
                    "EP_AW_REMARKETING_ONLY",
                    [15, "cw"],
                    "EP_BASKET_DISCOUNT",
                    [15, "cx"],
                    "EP_BASKET_FEED_COUNTRY",
                    [15, "cy"],
                    "EP_BASKET_FEED_LANGUAGE",
                    [15, "cz"],
                    "EP_BASKET_ITEMS",
                    [15, "da"],
                    "EP_BASKET_MERCHANT_ID",
                    [15, "db"],
                    "EP_BASKET_TYPE",
                    [15, "dc"],
                    "EP_CAMPAIGN_CONTENT",
                    [15, "dd"],
                    "EP_CAMPAIGN_ID",
                    [15, "de"],
                    "EP_CAMPAIGN_MEDIUM",
                    [15, "df"],
                    "EP_CAMPAIGN_NAME",
                    [15, "dg"],
                    "EP_CAMPAIGN_OBJECT",
                    [15, "dh"],
                    "EP_CAMPAIGN_SOURCE",
                    [15, "di"],
                    "EP_CAMPAIGN_TERM",
                    [15, "dj"],
                    "EP_CLIENT_ID",
                    [15, "dk"],
                    "EP_CONSENT_MODELING_DEDUPE",
                    [15, "dl"],
                    "EP_CONSENT_UPDATE_TYPE",
                    [15, "dm"],
                    "EP_CONTENT_GROUP",
                    [15, "dn"],
                    "EP_CONTENT_TYPE",
                    [15, "do"],
                    "EP_CONVERSION_COOKIE_PREFIX",
                    [15, "dp"],
                    "EP_CONVERSION_ID",
                    [15, "dq"],
                    "EP_CONVERSION_LINKER",
                    [15, "dr"],
                    "EP_CONVERSION_LINKER_DISABLED",
                    [15, "ds"],
                    "EP_CONVERSION_MEASUREMENT_API",
                    [15, "dt"],
                    "EP_COOKIE_DEPRECATION_LABEL",
                    [15, "du"],
                    "EP_COOKIE_DOMAIN",
                    [15, "dv"],
                    "EP_COOKIE_EXPIRES",
                    [15, "dw"],
                    "EP_COOKIE_FLAGS",
                    [15, "dx"],
                    "EP_COOKIE_NAME",
                    [15, "dy"],
                    "EP_COOKIE_PATH",
                    [15, "dz"],
                    "EP_COOKIE_PREFIX",
                    [15, "ea"],
                    "EP_COOKIE_UPDATE",
                    [15, "eb"],
                    "EP_COUNTRY",
                    [15, "ec"],
                    "EP_CURRENCY",
                    [15, "ed"],
                    "EP_CUSTOMER_BUYER_STAGE",
                    [15, "ee"],
                    "EP_CUSTOMER_LIFETIME_VALUE",
                    [15, "ef"],
                    "EP_CUSTOMER_LOYALTY",
                    [15, "eg"],
                    "EP_CUSTOMER_LTV_BUCKET",
                    [15, "eh"],
                    "EP_CUSTOM_MAP",
                    [15, "ei"],
                    "EP_DC_COOKIE_CLICK_ID",
                    [15, "ej"],
                    "EP_DC_URL_CLICK_ID",
                    [15, "ek"],
                    "EP_DEBUG_MODE",
                    [15, "el"],
                    "EP_DEVELOPER_ID",
                    [15, "em"],
                    "EP_DISABLE_MERCHANT_REPORTED_PURCHASES",
                    [15, "en"],
                    "EP_DOUBLECLICK_CUSTOM_PARAMS",
                    [15, "eo"],
                    "EP_DOUBLECLICK_NATURAL_SEARCH",
                    [15, "ep"],
                    "EP_DYNAMIC_EVENT_SETTINGS",
                    [15, "eq"],
                    "EP_ECOMMERCE_AFFILIATION",
                    [15, "er"],
                    "EP_ECOMMERCE_CHECKOUT_OPTION",
                    [15, "es"],
                    "EP_ECOMMERCE_CHECKOUT_STEP",
                    [15, "et"],
                    "EP_ECOMMERCE_COUPON",
                    [15, "eu"],
                    "EP_ECOMMERCE_ITEM_LIST_NAME",
                    [15, "ev"],
                    "EP_ECOMMERCE_LIST_NAME",
                    [15, "ew"],
                    "EP_ECOMMERCE_PROMOTIONS",
                    [15, "ex"],
                    "EP_ECOMMERCE_SHIPPING",
                    [15, "ey"],
                    "EP_ECOMMERCE_TAX",
                    [15, "ez"],
                    "EP_ENGAGEMENT_TIME_MILLIS",
                    [15, "fa"],
                    "EP_ENHANCED_CLIENT_ID",
                    [15, "fb"],
                    "EP_ENHANCED_CONVERSIONS",
                    [15, "fc"],
                    "EP_ENHANCED_CONVERSION_AUTOMATIC_SETTINGS",
                    [15, "fd"],
                    "EP_ESTIMATED_DELIVERY_DATE",
                    [15, "fe"],
                    "EP_EUID_LOGGED_IN_STATE",
                    [15, "ff"],
                    "EP_EVENT_CALLBACK",
                    [15, "fg"],
                    "EP_EVENT_CATEGORY",
                    [15, "fh"],
                    "EP_EVENT_DEVELOPER_ID_STRING",
                    [15, "fi"],
                    "EP_EVENT_LABEL",
                    [15, "fj"],
                    "EP_EVENT_NAME",
                    [15, "fk"],
                    "EP_EVENT_SETTINGS",
                    [15, "fl"],
                    "EP_EVENT_TIMEOUT",
                    [15, "fm"],
                    "EP_EXCEPTION_DESCRIPTION",
                    [15, "fn"],
                    "EP_EXCEPTION_FATAL",
                    [15, "fo"],
                    "EP_EXPERIMENTS",
                    [15, "fp"],
                    "EP_FIREBASE_ID",
                    [15, "fq"],
                    "EP_FIRST_PARTY_COLLECTION",
                    [15, "fr"],
                    "EP_FIRST_PARTY_DUAL_TAGGING_ID",
                    [15, "fs"],
                    "EP_FIRST_PARTY_URL",
                    [15, "ft"],
                    "EP_FLEDGE_DROP_REASON",
                    [15, "fu"],
                    "EP_FLEDGE_EXPERIMENT",
                    [15, "fv"],
                    "EP_FLIGHT_ERROR_CODE",
                    [15, "fw"],
                    "EP_FLIGHT_ERROR_MESSAGE",
                    [15, "fx"],
                    "EP_FL_ACTIVITY_CATEGORY",
                    [15, "fy"],
                    "EP_FL_ACTIVITY_GROUP",
                    [15, "fz"],
                    "EP_FL_ADVERTISER_ID",
                    [15, "ga"],
                    "EP_FL_ATTRIBUTION_REPORTING_DEDUPE_PARAM",
                    [15, "gb"],
                    "EP_FL_MATCH_ID",
                    [15, "gc"],
                    "EP_FL_RANDOM_NUMBER",
                    [15, "gd"],
                    "EP_FL_TRAN_VARIABLE",
                    [15, "ge"],
                    "EP_FL_U_VARIABLE",
                    [15, "gf"],
                    "EP_GAC_CLICK_ID",
                    [15, "gg"],
                    "EP_GAC_WBRAID",
                    [15, "gh"],
                    "EP_GAC_WBRAID_MULTIPLE_CONVERSIONS",
                    [15, "gi"],
                    "EP_GA_RESTRICT_DOMAIN",
                    [15, "gj"],
                    "EP_GA_TEMP_CLIENT_ID",
                    [15, "gk"],
                    "EP_GA_TEMP_ENHANCED_CLIENT_ID",
                    [15, "gl"],
                    "EP_GDPR_APPLIES",
                    [15, "gm"],
                    "EP_GEOLOCATION_GRANULARITY",
                    [15, "gn"],
                    "EP_GET_VALUE_CALLBACK",
                    [15, "go"],
                    "EP_GET_VALUE_KEY",
                    [15, "gp"],
                    "EP_GOOGLE_NON_GAIA",
                    [15, "gq"],
                    "EP_GOOGLE_SIGNALS",
                    [15, "gr"],
                    "EP_GOOGLE_TLD",
                    [15, "gs"],
                    "EP_GROUPS",
                    [15, "gt"],
                    "EP_GSA_EXPERIMENT_ID",
                    [15, "gu"],
                    "EP_GTM_UP",
                    [15, "gv"],
                    "EP_IFRAME_STATE",
                    [15, "gw"],
                    "EP_IGNORE_REFERRER",
                    [15, "gx"],
                    "EP_INTERNAL_TRAFFIC_RESULTS",
                    [15, "gy"],
                    "EP_IS_LEGACY_CONVERTED",
                    [15, "gz"],
                    "EP_IS_LEGACY_LOADED",
                    [15, "ha"],
                    "EP_IS_PASSTHROUGH",
                    [15, "hb"],
                    "EP_LANDING_PAGE_SIGNAL",
                    [15, "hc"],
                    "EP_LANGUAGE",
                    [15, "hd"],
                    "EP_LEGACY_DEVELOPER_ID_STRING",
                    [15, "he"],
                    "EP_LINKER",
                    [15, "hf"],
                    "EP_LINKER_ACCEPT_INCOMING",
                    [15, "hg"],
                    "EP_LINKER_DECORATE_FORMS",
                    [15, "hh"],
                    "EP_LINKER_DOMAINS",
                    [15, "hi"],
                    "EP_LINKER_URL_POSITION",
                    [15, "hj"],
                    "EP_MERCHANT_FEED_LABEL",
                    [15, "hk"],
                    "EP_MERCHANT_FEED_LANGUAGE",
                    [15, "hl"],
                    "EP_MERCHANT_ID",
                    [15, "hm"],
                    "EP_METHOD",
                    [15, "hn"],
                    "EP_NAME",
                    [15, "ho"],
                    "EP_NAVIGATION_TYPE",
                    [15, "hp"],
                    "EP_NEW_CUSTOMER",
                    [15, "hq"],
                    "EP_NON_INTERACTION",
                    [15, "hr"],
                    "EP_OPTIMIZE_ID",
                    [15, "hs"],
                    "EP_PAGE_HOSTNAME",
                    [15, "ht"],
                    "EP_PAGE_PATH",
                    [15, "hu"],
                    "EP_PAGE_REFERRER",
                    [15, "hv"],
                    "EP_PAGE_TITLE",
                    [15, "hw"],
                    "EP_PASSENGERS",
                    [15, "hx"],
                    "EP_PHONE_CONVERSION_CALLBACK",
                    [15, "hy"],
                    "EP_PHONE_CONVERSION_COUNTRY",
                    [15, "hz"],
                    "EP_PHONE_CONVERSION_CSS_CLASS",
                    [15, "ia"],
                    "EP_PHONE_CONVERSION_IDS",
                    [15, "ib"],
                    "EP_PHONE_CONVERSION_NUMBER",
                    [15, "ic"],
                    "EP_PHONE_CONVERSION_OPTIONS",
                    [15, "id"],
                    "EP_PLATINUM_REQUEST_STATUS",
                    [15, "ie"],
                    "EP_PROTECTED_AUDIENCE_ENABLED",
                    [15, "if"],
                    "EP_QUANTITY",
                    [15, "ig"],
                    "EP_REDACT_DEVICE_INFORMATION",
                    [15, "ih"],
                    "EP_REFERRAL_EXCLUSION_DEFINITION",
                    [15, "ii"],
                    "EP_RESTRICTED_DATA_PROCESSING",
                    [15, "ij"],
                    "EP_RETOKEN",
                    [15, "ik"],
                    "EP_SAMPLE_RATE",
                    [15, "il"],
                    "EP_SCREEN_NAME",
                    [15, "im"],
                    "EP_SCREEN_RESOLUTION",
                    [15, "in"],
                    "EP_SCRIPT_SOURCE",
                    [15, "io"],
                    "EP_SEARCH_TERM",
                    [15, "ip"],
                    "EP_SEND_PAGE_VIEW",
                    [15, "iq"],
                    "EP_SEND_TO",
                    [15, "ir"],
                    "EP_SERVER_CONTAINER_URL",
                    [15, "is"],
                    "EP_SESSION_DURATION",
                    [15, "it"],
                    "EP_SESSION_ENGAGED",
                    [15, "iu"],
                    "EP_SESSION_ENGAGED_TIME_MILLIS",
                    [15, "iv"],
                    "EP_SESSION_ID",
                    [15, "iw"],
                    "EP_SESSION_NUMBER",
                    [15, "ix"],
                    "EP_SHARED_USER_ID",
                    [15, "iy"],
                    "EP_SHOPPING_DELIVERY_POSTAL_CODE",
                    [15, "iz"],
                    "EP_TEMP_CLIENT_ID",
                    [15, "ja"],
                    "EP_TOPMOST_URL",
                    [15, "jb"],
                    "EP_TRACKING_ID",
                    [15, "jc"],
                    "EP_TRAFFIC_TYPE",
                    [15, "jd"],
                    "EP_TRANSACTION_ID",
                    [15, "je"],
                    "EP_TRANSPORT_URL",
                    [15, "jf"],
                    "EP_TRIP_TYPE",
                    [15, "jg"],
                    "EP_UPDATE",
                    [15, "jh"],
                    "EP_URL_PASSTHROUGH",
                    [15, "ji"],
                    "EP_URL_PASSTHROUGH_GAD_SOURCE",
                    [15, "jj"],
                    "EP_USER_AGENT_ARCHITECTURE",
                    [15, "jk"],
                    "EP_USER_AGENT_BITNESS",
                    [15, "jl"],
                    "EP_USER_AGENT_FULL_VERSION_LIST",
                    [15, "jm"],
                    "EP_USER_AGENT_MOBILE",
                    [15, "jn"],
                    "EP_USER_AGENT_MODEL",
                    [15, "jo"],
                    "EP_USER_AGENT_PLATFORM",
                    [15, "jp"],
                    "EP_USER_AGENT_PLATFORM_VERSION",
                    [15, "jq"],
                    "EP_USER_AGENT_WOW64",
                    [15, "jr"],
                    "EP_USER_DATA",
                    [15, "js"],
                    "EP_USER_DATA_AUTO_LATENCY",
                    [15, "jt"],
                    "EP_USER_DATA_AUTO_META",
                    [15, "ju"],
                    "EP_USER_DATA_AUTO_MULTI",
                    [15, "jv"],
                    "EP_USER_DATA_AUTO_SELECTORS",
                    [15, "jw"],
                    "EP_USER_DATA_AUTO_STATUS",
                    [15, "jx"],
                    "EP_USER_DATA_MODE",
                    [15, "jy"],
                    "EP_USER_DATA_SETTINGS",
                    [15, "jz"],
                    "EP_USER_ID",
                    [15, "ka"],
                    "EP_USER_PROPERTIES",
                    [15, "kb"],
                    "EP_USER_REGION",
                    [15, "kc"],
                    "EP_US_PRIVACY_STRING",
                    [15, "kd"],
                    "EP_VALUE",
                    [15, "ke"],
                    "EP_WBRAID_MULTIPLE_CONVERSIONS",
                    [15, "kf"],
                    "FIRST_PARTY_MODE_PARAMETERS",
                    [15, "kg"],
                    "HOST_NAME",
                    [15, "kh"],
                    "IN_PAGE_COMMAND",
                    [15, "ki"],
                    "IP_OVERRIDE",
                    [15, "kj"],
                    "IS_PASSTHROUGH_CID",
                    [15, "kk"],
                    "NON_PERSONALIZED_ADS",
                    [15, "kl"],
                    "SERVER_SIDE_TAG_PARAMETERS",
                    [15, "km"],
                    "EP_CONVERSION_LABEL",
                    [15, "kn"],
                    "EP_PAGE_LOCATION",
                    [15, "ko"],
                    "EP_GLOBAL_DEVELOPER_ID_STRING",
                    [15, "kp"],
                    "EP_TC_PRIVACY_STRING",
                    [15, "kq"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmDownloadActivity",
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
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [2, [15, "k"], "setHitData", [7, "link_id", [44]]],
                          [2, [15, "k"], "setHitData", [7, "link_url", [44]]],
                          [2, [15, "k"], "setHitData", [7, "link_text", [44]]],
                          [2, [15, "k"], "setHitData", [7, "file_name", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "file_extension", [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_downloads"],
                [52, "f", "file_download"],
                [52, "g", "em_event"],
                [36, [8, "registerDownloadActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmOutboundClickActivity",
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
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [2, [15, "k"], "setHitData", [7, "link_id", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "link_classes", [44]],
                          ],
                          [2, [15, "k"], "setHitData", [7, "link_url", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "link_domain", [44]],
                          ],
                          [2, [15, "k"], "setHitData", [7, "outbound", [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_outbound_click"],
                [52, "f", "click"],
                [52, "g", "em_event"],
                [36, [8, "registerOutbackClickActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmSiteSearchActivity",
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
                  "b",
                  [46, "d", "e"],
                  [52, "f", [2, [30, [15, "d"], ""], "split", [7, ","]]],
                  [
                    53,
                    [41, "g"],
                    [3, "g", 0],
                    [
                      63,
                      [7, "g"],
                      [23, [15, "g"], [17, [15, "f"], "length"]],
                      [33, [15, "g"], [3, "g", [0, [15, "g"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "h",
                            ["e", [2, [16, [15, "f"], [15, "g"]], "trim", [7]]],
                          ],
                          [22, [21, [15, "h"], [44]], [46, [36, [15, "h"]]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "c",
                  [46, "d", "e", "f"],
                  [52, "g", [8, "search_term", [15, "d"]]],
                  [52, "h", [2, [30, [15, "e"], ""], "split", [7, ","]]],
                  [
                    53,
                    [41, "i"],
                    [3, "i", 0],
                    [
                      63,
                      [7, "i"],
                      [23, [15, "i"], [17, [15, "h"], "length"]],
                      [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "j",
                            [2, [16, [15, "h"], [15, "i"]], "trim", [7]],
                          ],
                          [52, "k", ["f", [15, "j"]]],
                          [
                            22,
                            [21, [15, "k"], [44]],
                            [
                              46,
                              [43, [15, "g"], [0, "q_", [15, "j"]], [15, "k"]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "g"]],
                ],
                [
                  36,
                  [
                    8,
                    "getSearchTerm",
                    [15, "b"],
                    "buildEventParams",
                    [15, "c"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmScrollActivity",
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
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "percent_scrolled", [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_scroll"],
                [52, "f", "scroll"],
                [52, "g", "em_event"],
                [36, [8, "registerScrollActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmVideoActivity",
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
                  "j",
                  [46, "k", "l"],
                  [
                    "c",
                    [15, "k"],
                    [
                      51,
                      "",
                      [7, "m"],
                      [52, "n", [2, [15, "m"], "getEventName", [7]]],
                      [
                        52,
                        "o",
                        [
                          30,
                          [
                            30,
                            [20, [15, "n"], [15, "f"]],
                            [20, [15, "n"], [15, "g"]],
                          ],
                          [20, [15, "n"], [15, "h"]],
                        ],
                      ],
                      [
                        22,
                        [
                          30,
                          [28, [15, "o"]],
                          [28, [2, [15, "m"], "getMetadata", [7, [15, "i"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "k"], [15, "e"]],
                        [46, [2, [15, "m"], "abort", [7]], [36]],
                      ],
                      [2, [15, "m"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "l"]],
                        [
                          46,
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_current_time", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_duration", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_percent", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_provider", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_title", [44]],
                          ],
                          [2, [15, "m"], "setHitData", [7, "video_url", [44]]],
                          [2, [15, "m"], "setHitData", [7, "visible", [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_video"],
                [52, "f", "video_start"],
                [52, "g", "video_progress"],
                [52, "h", "video_complete"],
                [52, "i", "em_event"],
                [36, [8, "registerVideoActivityCallback", [15, "j"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_webAdsTasks",
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
                  "ba",
                  [46, "bm"],
                  [22, [28, [15, "bm"]], [46, [36, ""]]],
                  [52, "bn", ["x", [15, "bm"]]],
                  [52, "bo", [2, [15, "bn"], "substring", [7, 0, 512]]],
                  [52, "bp", [2, [15, "bo"], "indexOf", [7, "#"]]],
                  [
                    22,
                    [20, [15, "bp"], [27, 1]],
                    [46, [36, [15, "bo"]]],
                    [
                      46,
                      [36, [2, [15, "bo"], "substring", [7, 0, [15, "bp"]]]],
                    ],
                  ],
                ],
                [
                  50,
                  "bb",
                  [46, "bm"],
                  [
                    22,
                    [
                      2,
                      [15, "bm"],
                      "getMetadata",
                      [7, [17, [15, "t"], "CONSENT_UPDATED"]],
                    ],
                    [46, [36]],
                  ],
                  [52, "bn", ["y", "get_url"]],
                  [52, "bo", ["k", false]],
                  [
                    2,
                    [15, "bm"],
                    "setHitData",
                    [7, [17, [15, "u"], "EP_IFRAME_STATE"], [15, "bo"]],
                  ],
                  [41, "bp"],
                  [
                    3,
                    "bp",
                    [
                      2,
                      [15, "bm"],
                      "getFromEventContext",
                      [7, [17, [15, "u"], "EP_PAGE_LOCATION"]],
                    ],
                  ],
                  [
                    22,
                    [1, [28, [15, "bp"]], [15, "bn"]],
                    [
                      46,
                      [
                        22,
                        [
                          20,
                          [15, "bo"],
                          [17, [15, "c"], "SAME_DOMAIN_IFRAMING"],
                        ],
                        [46, [3, "bp", ["q"]]],
                        [46, [3, "bp", ["r"]]],
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "bm"],
                    "setHitData",
                    [
                      7,
                      [17, [15, "u"], "EP_PAGE_LOCATION"],
                      ["ba", [15, "bp"]],
                    ],
                  ],
                  [
                    22,
                    ["y", "get_referrer"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [17, [15, "u"], "EP_PAGE_REFERRER"], ["n"]],
                      ],
                    ],
                  ],
                  [
                    22,
                    ["y", "read_title"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [17, [15, "u"], "EP_PAGE_TITLE"], ["z"]],
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "bm"],
                    "copyToHitData",
                    [7, [17, [15, "u"], "EP_LANGUAGE"]],
                  ],
                  [52, "bq", ["o"]],
                  [
                    2,
                    [15, "bm"],
                    "setHitData",
                    [
                      7,
                      [17, [15, "u"], "EP_SCREEN_RESOLUTION"],
                      [
                        0,
                        [0, ["x", [17, [15, "bq"], "width"]], "x"],
                        ["x", [17, [15, "bq"], "height"]],
                      ],
                    ],
                  ],
                  [
                    22,
                    [15, "bn"],
                    [
                      46,
                      [
                        53,
                        [52, "br", ["p"]],
                        [
                          22,
                          [1, [15, "br"], [21, [15, "br"], [15, "bp"]]],
                          [
                            46,
                            [
                              2,
                              [15, "bm"],
                              "setHitData",
                              [
                                7,
                                [17, [15, "u"], "EP_TOPMOST_URL"],
                                ["ba", [15, "br"]],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bc",
                  [46, "bm"],
                  [52, "bn", ["j", [15, "bm"]]],
                  [
                    65,
                    "bo",
                    [
                      7,
                      [17, [15, "u"], "EP_GLOBAL_DEVELOPER_ID_STRING"],
                      [17, [15, "u"], "EP_EVENT_DEVELOPER_ID_STRING"],
                    ],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [15, "bo"], [16, [15, "bn"], [15, "bo"]]],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bd",
                  [46, "bm"],
                  [52, "bn", [8]],
                  [
                    43,
                    [15, "bn"],
                    [17, [15, "u"], "CONSENT_AD_STORAGE"],
                    ["v", [17, [15, "u"], "CONSENT_AD_STORAGE"]],
                  ],
                  [
                    43,
                    [15, "bn"],
                    [17, [15, "u"], "CONSENT_AD_USER_DATA"],
                    ["v", [17, [15, "u"], "CONSENT_AD_USER_DATA"]],
                  ],
                  [
                    43,
                    [15, "bn"],
                    [17, [15, "u"], "CONSENT_AD_PERSONALIZATION"],
                    ["h", [15, "bm"]],
                  ],
                  [
                    2,
                    [15, "bm"],
                    "setMetadata",
                    [7, [17, [15, "t"], "CONSENT_STATE"], [15, "bn"]],
                  ],
                ],
                [
                  50,
                  "be",
                  [46, "bm"],
                  [
                    2,
                    [15, "bm"],
                    "setMetadata",
                    [
                      7,
                      [17, [15, "t"], "CONVERSION_LINKER_ENABLED"],
                      [
                        21,
                        [
                          2,
                          [15, "bm"],
                          "getFromEventContext",
                          [7, [17, [15, "u"], "EP_CONVERSION_LINKER"]],
                        ],
                        false,
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "bm"],
                    "setMetadata",
                    [7, [17, [15, "t"], "COOKIE_OPTIONS"], ["g", [15, "bm"]]],
                  ],
                  [
                    52,
                    "bn",
                    [
                      2,
                      [15, "bm"],
                      "getFromEventContext",
                      [7, [17, [15, "u"], "EP_ADS_DATA_REDACTION"]],
                    ],
                  ],
                  [
                    2,
                    [15, "bm"],
                    "setMetadata",
                    [
                      7,
                      [17, [15, "t"], "REDACT_ADS_DATA"],
                      [1, [29, [15, "bn"], [45]], [21, [15, "bn"], false]],
                    ],
                  ],
                ],
                [50, "bf", [46, "bm"], ["d", [15, "bm"]]],
                [
                  50,
                  "bg",
                  [46, "bm"],
                  [
                    52,
                    "bn",
                    [
                      30,
                      [
                        2,
                        [15, "bm"],
                        "getMetadata",
                        [7, [17, [15, "t"], "CONSENT_STATE"]],
                      ],
                      [8],
                    ],
                  ],
                  [
                    22,
                    [
                      30,
                      [
                        30,
                        [
                          28,
                          [
                            2,
                            [15, "bm"],
                            "getMetadata",
                            [7, [17, [15, "t"], "CONVERSION_LINKER_ENABLED"]],
                          ],
                        ],
                        [
                          28,
                          [
                            16,
                            [15, "bn"],
                            [17, [15, "u"], "CONSENT_AD_STORAGE"],
                          ],
                        ],
                      ],
                      [
                        28,
                        [
                          16,
                          [15, "bn"],
                          [17, [15, "u"], "CONSENT_AD_USER_DATA"],
                        ],
                      ],
                    ],
                    [46, [36]],
                  ],
                  [52, "bo", ["i", [15, "bm"]]],
                  [
                    22,
                    [15, "bo"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [17, [15, "u"], "EP_AUID"], [15, "bo"]],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bh",
                  [46, "bm"],
                  [52, "bn", ["m"]],
                  [
                    65,
                    "bo",
                    [
                      7,
                      [17, [15, "u"], "EP_US_PRIVACY_STRING"],
                      [17, [15, "u"], "EP_GDPR_APPLIES"],
                      [17, [15, "u"], "EP_TC_PRIVACY_STRING"],
                    ],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [15, "bo"], [16, [15, "bn"], [15, "bo"]]],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bi",
                  [46, "bm"],
                  [52, "bn", [16, ["l", false], "_up"]],
                  [
                    22,
                    [20, [15, "bn"], "1"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [17, [15, "u"], "EP_IS_PASSTHROUGH"], true],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bj",
                  [46, "bm"],
                  [41, "bn"],
                  [3, "bn", [44]],
                  [
                    52,
                    "bo",
                    [
                      2,
                      [15, "bm"],
                      "getMetadata",
                      [7, [17, [15, "t"], "CONSENT_STATE"]],
                    ],
                  ],
                  [
                    22,
                    [
                      1,
                      [15, "bo"],
                      [16, [15, "bo"], [17, [15, "u"], "CONSENT_AD_STORAGE"]],
                    ],
                    [
                      46,
                      [
                        3,
                        "bn",
                        ["e", [17, [15, "b"], "COOKIE_DEPRECATION_LABEL"]],
                      ],
                    ],
                    [46, [3, "bn", "denied"]],
                  ],
                  [
                    22,
                    [29, [15, "bn"], [45]],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [
                          7,
                          [17, [15, "u"], "EP_COOKIE_DEPRECATION_LABEL"],
                          [15, "bn"],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bk",
                  [46, "bm"],
                  [22, [28, ["y", "get_user_agent"]], [46, [36]]],
                  [52, "bn", ["s"]],
                  [22, [28, [15, "bn"]], [46, [36]]],
                  [
                    52,
                    "bo",
                    [
                      7,
                      [17, [15, "u"], "EP_USER_AGENT_ARCHITECTURE"],
                      [17, [15, "u"], "EP_USER_AGENT_BITNESS"],
                      [17, [15, "u"], "EP_USER_AGENT_FULL_VERSION_LIST"],
                      [17, [15, "u"], "EP_USER_AGENT_MOBILE"],
                      [17, [15, "u"], "EP_USER_AGENT_MODEL"],
                      [17, [15, "u"], "EP_USER_AGENT_PLATFORM"],
                      [17, [15, "u"], "EP_USER_AGENT_PLATFORM_VERSION"],
                      [17, [15, "u"], "EP_USER_AGENT_WOW64"],
                    ],
                  ],
                  [
                    65,
                    "bp",
                    [15, "bo"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [15, "bp"], [16, [15, "bn"], [15, "bp"]]],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "bl",
                  [46, "bm"],
                  [
                    22,
                    [
                      2,
                      [15, "bm"],
                      "getMetadata",
                      [7, [17, [15, "t"], "CONSENT_UPDATED"]],
                    ],
                    [46, [36]],
                  ],
                  [
                    22,
                    [28, [17, [15, "f"], "enableAdsSupernovaParams"]],
                    [46, [36]],
                  ],
                  [
                    22,
                    ["w"],
                    [
                      46,
                      [
                        2,
                        [15, "bm"],
                        "setHitData",
                        [7, [17, [15, "u"], "EP_LANDING_PAGE_SIGNAL"], "1"],
                      ],
                      [
                        2,
                        [15, "bm"],
                        "setMetadata",
                        [7, [17, [15, "t"], "ADD_TAG_TIMING"], true],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.CrossContainerSchema"]],
                [52, "c", ["require", "internal.IframingStateSchema"]],
                [52, "d", ["require", "internal.addAdsClickIds"]],
                [52, "e", ["require", "internal.copyFromCrossContainerData"]],
                [
                  52,
                  "f",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "g", ["require", "internal.getAdsCookieWritingOptions"]],
                [52, "h", ["require", "internal.getAllowAdPersonalization"]],
                [52, "i", ["require", "internal.getAuid"]],
                [52, "j", ["require", "internal.getDeveloperIds"]],
                [52, "k", ["require", "internal.getIframingState"]],
                [52, "l", ["require", "internal.getLinkerValueFromLocation"]],
                [52, "m", ["require", "internal.getPrivacyStrings"]],
                [52, "n", ["require", "getReferrerUrl"]],
                [52, "o", ["require", "internal.getScreenDimensions"]],
                [52, "p", ["require", "internal.getTopSameDomainUrl"]],
                [52, "q", ["require", "internal.getTopWindowUrl"]],
                [52, "r", ["require", "getUrl"]],
                [52, "s", ["require", "internal.getUserAgentClientHints"]],
                [52, "t", [15, "__module_gtagMetadataSchema"]],
                [52, "u", [15, "__module_gtagSchema"]],
                [52, "v", ["require", "isConsentGranted"]],
                [52, "w", ["require", "internal.isLandingPage"]],
                [52, "x", ["require", "makeString"]],
                [52, "y", ["require", "queryPermission"]],
                [52, "z", ["require", "readTitle"]],
                [
                  36,
                  [
                    8,
                    "taskAddPageParameters",
                    [15, "bb"],
                    "taskAddDeveloperIds",
                    [15, "bc"],
                    "taskSetConsentStateMetadata",
                    [15, "bd"],
                    "taskSetConfigParams",
                    [15, "be"],
                    "taskAddAdsClickIds",
                    [15, "bf"],
                    "taskAddFirstPartyId",
                    [15, "bg"],
                    "taskAddPrivacyStrings",
                    [15, "bh"],
                    "taskAddPassthroughSessionMarker",
                    [15, "bi"],
                    "taskAddCookieDeprecationLabel",
                    [15, "bj"],
                    "taskAddUachParams",
                    [15, "bk"],
                    "taskAddLandingPageParams",
                    [15, "bl"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_commonAdsTasks",
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
                  "j",
                  [46, "t"],
                  [52, "u", ["b"]],
                  [
                    22,
                    [20, [15, "u"], "US-CO"],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [7, [17, [15, "e"], "EP_GOOGLE_NON_GAIA"], 1],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "k",
                  [46, "t"],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_TRANSACTION_ID"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_VALUE"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_CURRENCY"]],
                  ],
                ],
                [
                  50,
                  "l",
                  [46, "t"],
                  [
                    22,
                    [
                      21,
                      [2, [15, "t"], "getEventName", [7]],
                      [17, [15, "e"], "EN_ECOMMERCE_PURCHASE"],
                    ],
                    [46, [36]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_BASKET_ITEMS"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_BASKET_MERCHANT_ID"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_BASKET_FEED_COUNTRY"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_BASKET_FEED_LANGUAGE"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_BASKET_DISCOUNT"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "setHitData",
                    [
                      7,
                      [17, [15, "e"], "EP_BASKET_TYPE"],
                      [17, [15, "e"], "EN_ECOMMERCE_PURCHASE"],
                    ],
                  ],
                ],
                [
                  50,
                  "m",
                  [46, "t"],
                  [
                    22,
                    [
                      2,
                      [15, "t"],
                      "getMetadata",
                      [7, [17, [15, "f"], "CONSENT_UPDATED"]],
                    ],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [7, [17, [15, "e"], "CONSENT_UPDATED"], true],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "n",
                  [46, "t"],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_NEW_CUSTOMER"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_CUSTOMER_LIFETIME_VALUE"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_ESTIMATED_DELIVERY_DATE"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_COUNTRY"]],
                  ],
                  [
                    2,
                    [15, "t"],
                    "copyToHitData",
                    [7, [17, [15, "e"], "EP_ECOMMERCE_SHIPPING"]],
                  ],
                ],
                [
                  50,
                  "o",
                  [46, "t"],
                  [
                    52,
                    "u",
                    [
                      2,
                      [15, "t"],
                      "getMetadata",
                      [7, [17, [15, "f"], "CONSENT_STATE"]],
                    ],
                  ],
                  [
                    22,
                    [15, "u"],
                    [
                      46,
                      [
                        53,
                        [
                          52,
                          "v",
                          [
                            1,
                            [
                              16,
                              [15, "u"],
                              [17, [15, "e"], "CONSENT_AD_USER_DATA"],
                            ],
                            [
                              16,
                              [15, "u"],
                              [17, [15, "e"], "CONSENT_AD_STORAGE"],
                            ],
                          ],
                        ],
                        [
                          2,
                          [15, "t"],
                          "setMetadata",
                          [
                            7,
                            [17, [15, "f"], "REDACT_CLICK_IDS"],
                            [
                              1,
                              [
                                28,
                                [
                                  28,
                                  [
                                    2,
                                    [15, "t"],
                                    "getMetadata",
                                    [7, [17, [15, "f"], "REDACT_ADS_DATA"]],
                                  ],
                                ],
                              ],
                              [28, [15, "v"]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "p",
                  [46, "t"],
                  [
                    52,
                    "u",
                    [
                      2,
                      [15, "t"],
                      "getFromEventContext",
                      [7, [17, [15, "e"], "EP_RESTRICTED_DATA_PROCESSING"]],
                    ],
                  ],
                  [
                    22,
                    [30, [20, [15, "u"], true], [20, [15, "u"], false]],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [
                          7,
                          [17, [15, "e"], "EP_RESTRICTED_DATA_PROCESSING"],
                          [15, "u"],
                        ],
                      ],
                    ],
                  ],
                  [
                    52,
                    "v",
                    [
                      2,
                      [15, "t"],
                      "getMetadata",
                      [7, [17, [15, "f"], "CONSENT_STATE"]],
                    ],
                  ],
                  [
                    22,
                    [15, "v"],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [
                          7,
                          [17, [15, "e"], "NON_PERSONALIZED_ADS"],
                          [
                            28,
                            [
                              16,
                              [15, "v"],
                              [17, [15, "e"], "CONSENT_AD_PERSONALIZATION"],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "q",
                  [46, "t"],
                  [
                    22,
                    [
                      2,
                      [15, "t"],
                      "getMetadata",
                      [7, [17, [15, "f"], "IS_EXTERNAL_EVENT"]],
                    ],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [7, [17, [15, "e"], "IN_PAGE_COMMAND"], true],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "r",
                  [46, "t"],
                  [
                    22,
                    ["c", [15, "t"]],
                    [
                      46,
                      [
                        2,
                        [15, "t"],
                        "setHitData",
                        [7, [17, [15, "e"], "EP_DEBUG_MODE"], true],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "s",
                  [46, "t"],
                  [
                    22,
                    [
                      28,
                      [
                        2,
                        [15, "t"],
                        "getMetadata",
                        [7, [17, [15, "f"], "REDACT_CLICK_IDS"]],
                      ],
                    ],
                    [46, [36]],
                  ],
                  [
                    52,
                    "u",
                    [
                      51,
                      "",
                      [7, "v"],
                      [52, "w", [2, [15, "t"], "getHitData", [7, [15, "v"]]]],
                      [
                        22,
                        [15, "w"],
                        [
                          46,
                          [
                            2,
                            [15, "t"],
                            "setHitData",
                            [
                              7,
                              [15, "v"],
                              ["d", [15, "w"], [15, "h"], [15, "i"]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  ["u", [17, [15, "e"], "EP_PAGE_LOCATION"]],
                  ["u", [17, [15, "e"], "EP_PAGE_REFERRER"]],
                  ["u", [17, [15, "e"], "EP_TOPMOST_URL"]],
                ],
                [52, "b", ["require", "internal.getRegionCode"]],
                [52, "c", ["require", "internal.isDebugMode"]],
                [52, "d", ["require", "internal.scrubUrlParams"]],
                [52, "e", [15, "__module_gtagSchema"]],
                [52, "f", [15, "__module_gtagMetadataSchema"]],
                [
                  52,
                  "g",
                  [
                    7,
                    [17, [15, "e"], "CONSENT_AD_STORAGE"],
                    [17, [15, "e"], "CONSENT_AD_USER_DATA"],
                  ],
                ],
                [
                  52,
                  "h",
                  [
                    7,
                    "gclid",
                    "dclid",
                    "gbraid",
                    "wbraid",
                    "gclaw",
                    "gcldc",
                    "gclha",
                    "gclgf",
                    "gclgb",
                    "_gl",
                  ],
                ],
                [52, "i", "0"],
                [
                  36,
                  [
                    8,
                    "taskAddGoogleNonGaiaHitData",
                    [15, "j"],
                    "taskAddBasicParameters",
                    [15, "k"],
                    "taskAddBasketItems",
                    [15, "l"],
                    "taskApplyConsentRules",
                    [15, "m"],
                    "taskAddShoppingData",
                    [15, "n"],
                    "taskSetRedactClickIdsMetadata",
                    [15, "o"],
                    "taskCheckPersonalizationSettings",
                    [15, "p"],
                    "taskAddInPageCommandParameter",
                    [15, "q"],
                    "taskCheckDebugMode",
                    [15, "r"],
                    "taskRedactClickIds",
                    [15, "s"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_gaAdsLinkActivity",
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
                  "m",
                  [46, "u", "v", "w"],
                  ["e", [15, "u"], "ga4_ads_linked", true],
                  [
                    "d",
                    [15, "u"],
                    [
                      51,
                      "",
                      [7, "x", "y"],
                      ["v", [15, "x"]],
                      ["n", [15, "w"], [15, "x"], [15, "y"]],
                    ],
                  ],
                ],
                [
                  50,
                  "n",
                  [46, "u", "v", "w"],
                  [22, [28, ["p", [15, "v"]]], [46, [36]]],
                  [22, ["q", [15, "v"], [15, "w"]], [46, [36]]],
                  [
                    22,
                    [
                      2,
                      [15, "v"],
                      "getMetadata",
                      [7, [17, [15, "i"], "IS_CONVERSION"]],
                    ],
                    [46, ["o", [15, "u"], [15, "v"]]],
                  ],
                  [
                    22,
                    [
                      2,
                      [15, "v"],
                      "getMetadata",
                      [7, [17, [15, "i"], "IS_FIRST_VISIT_CONVERSION"]],
                    ],
                    [46, ["o", [15, "u"], [15, "v"], "first_visit"]],
                  ],
                  [
                    22,
                    [
                      2,
                      [15, "v"],
                      "getMetadata",
                      [7, [17, [15, "i"], "IS_SESSION_START_CONVERSION"]],
                    ],
                    [46, ["o", [15, "u"], [15, "v"], "session_start"]],
                  ],
                ],
                [
                  50,
                  "o",
                  [46, "u", "v", "w"],
                  [
                    52,
                    "x",
                    [
                      "b",
                      [15, "v"],
                      [8, "omitHitData", true, "useHitData", true],
                    ],
                  ],
                  [
                    22,
                    [15, "w"],
                    [46, [2, [15, "x"], "setEventName", [7, [15, "w"]]]],
                  ],
                  [
                    2,
                    [15, "x"],
                    "setMetadata",
                    [7, [17, [15, "i"], "HIT_TYPE"], "ga_conversion"],
                  ],
                  [
                    52,
                    "y",
                    [
                      2,
                      [15, "v"],
                      "getHitData",
                      [7, [17, [15, "j"], "EP_USER_ID"]],
                    ],
                  ],
                  [
                    22,
                    [21, [15, "y"], [44]],
                    [
                      46,
                      [
                        2,
                        [15, "x"],
                        "setHitData",
                        [7, [17, [15, "j"], "EP_USER_ID"], [15, "y"]],
                      ],
                    ],
                  ],
                  ["u", "ga_conversion", [15, "x"]],
                ],
                [
                  50,
                  "p",
                  [46, "u"],
                  [
                    22,
                    [28, [17, [15, "f"], "enableGaAdsConversions"]],
                    [46, [36, false]],
                  ],
                  [
                    22,
                    [
                      28,
                      [
                        30,
                        [
                          30,
                          [
                            2,
                            [15, "u"],
                            "getMetadata",
                            [7, [17, [15, "i"], "IS_CONVERSION"]],
                          ],
                          [
                            2,
                            [15, "u"],
                            "getMetadata",
                            [7, [17, [15, "i"], "IS_FIRST_VISIT_CONVERSION"]],
                          ],
                        ],
                        [
                          2,
                          [15, "u"],
                          "getMetadata",
                          [7, [17, [15, "i"], "IS_SESSION_START_CONVERSION"]],
                        ],
                      ],
                    ],
                    [46, [36, false]],
                  ],
                  [
                    22,
                    [
                      2,
                      [15, "u"],
                      "getMetadata",
                      [7, [17, [15, "i"], "IS_SERVER_SIDE_DESTINATION"]],
                    ],
                    [46, [36, false]],
                  ],
                  [36, true],
                ],
                [
                  50,
                  "q",
                  [46, "u", "v"],
                  [41, "w"],
                  [3, "w", false],
                  [52, "x", [7]],
                  [
                    52,
                    "y",
                    [
                      51,
                      "",
                      [7, "z", "ba"],
                      [
                        22,
                        ["z", [15, "u"], [15, "v"]],
                        [
                          46,
                          [3, "w", true],
                          [2, [15, "x"], "push", [7, [15, "ba"]]],
                        ],
                      ],
                    ],
                  ],
                  ["y", [15, "r"], [17, [15, "k"], "GOOGLE_SIGNAL_DISABLED"]],
                  ["y", [15, "s"], [17, [15, "k"], "GA4_SUBDOMAIN_ENABLED"]],
                  [
                    "y",
                    [15, "t"],
                    [17, [15, "k"], "DEVICE_DATA_REDACTION_ENABLED"],
                  ],
                  [
                    22,
                    [28, [15, "w"]],
                    [
                      46,
                      [
                        2,
                        [15, "x"],
                        "push",
                        [7, [17, [15, "k"], "BEACON_SENT"]],
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "u"],
                    "setHitData",
                    [
                      7,
                      [17, [15, "j"], "EP_PLATINUM_REQUEST_STATUS"],
                      [2, [15, "x"], "join", [7, "."]],
                    ],
                  ],
                  [36, [15, "w"]],
                ],
                [50, "r", [46, "u"], [36, false]],
                [
                  50,
                  "s",
                  [46, "u"],
                  [
                    36,
                    [
                      28,
                      [
                        28,
                        [
                          2,
                          [15, "u"],
                          "getMetadata",
                          [7, [17, [15, "i"], "GA4_COLLECTION_SUBDOMAIN"]],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "t",
                  [46, "u", "v"],
                  [52, "w", ["l", [15, "c"], [15, "v"]]],
                  [
                    36,
                    [
                      30,
                      [
                        20,
                        [
                          "w",
                          [2, [15, "u"], "getDestinationId", [7]],
                          "redact_device_info",
                        ],
                        true,
                      ],
                      [
                        20,
                        [
                          "w",
                          [2, [15, "u"], "getDestinationId", [7]],
                          "geo_granularity",
                        ],
                        true,
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.copyPreHit"]],
                [52, "c", ["require", "internal.getRemoteConfigParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "internal.setProductSettingsParameter"]],
                [
                  52,
                  "f",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "g", ["require", "Object"]],
                [52, "h", [15, "__module_activities"]],
                [52, "i", [15, "__module_gtagMetadataSchema"]],
                [52, "j", [15, "__module_gtagSchema"]],
                [
                  52,
                  "k",
                  [
                    2,
                    [15, "g"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "BEACON_SENT",
                        "ok",
                        "GOOGLE_SIGNAL_DISABLED",
                        "gs",
                        "GA4_SUBDOMAIN_ENABLED",
                        "wg",
                        "DEVICE_DATA_REDACTION_ENABLED",
                        "rd",
                      ],
                    ],
                  ],
                ],
                [52, "l", [17, [15, "h"], "withRequestContext"]],
                [36, [8, "run", [15, "m"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdGaRegionScopedSettings",
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
                  "n",
                  [46, "q", "r", "s"],
                  [
                    50,
                    "x",
                    [46, "z"],
                    [52, "ba", [16, [15, "m"], [15, "z"]]],
                    [22, [28, [15, "ba"]], [46, [36]]],
                    [
                      53,
                      [41, "bb"],
                      [3, "bb", 0],
                      [
                        63,
                        [7, "bb"],
                        [23, [15, "bb"], [17, [15, "ba"], "length"]],
                        [33, [15, "bb"], [3, "bb", [0, [15, "bb"], 1]]],
                        [
                          46,
                          [
                            53,
                            [52, "bc", [16, [15, "ba"], [15, "bb"]]],
                            [
                              "u",
                              [15, "t"],
                              [17, [15, "bc"], "name"],
                              [17, [15, "bc"], "value"],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    50,
                    "y",
                    [46, "z"],
                    [
                      22,
                      [30, [28, [15, "v"]], [21, [17, [15, "v"], "length"], 2]],
                      [46, [36, false]],
                    ],
                    [41, "ba"],
                    [3, "ba", [16, [15, "z"], [15, "w"]]],
                    [
                      22,
                      [20, [15, "ba"], [44]],
                      [46, [3, "ba", [16, [15, "z"], [15, "v"]]]],
                    ],
                    [36, [28, [28, [15, "ba"]]]],
                  ],
                  [22, [28, [15, "r"]], [46, [36]]],
                  [
                    52,
                    "t",
                    [
                      30,
                      [17, [15, "q"], "instanceDestinationId"],
                      [17, ["d"], "containerId"],
                    ],
                  ],
                  [52, "u", ["i", [15, "g"], [15, "s"]]],
                  [
                    52,
                    "v",
                    [
                      13,
                      [41, "$0"],
                      [3, "$0", ["i", [15, "e"], [15, "s"]]],
                      ["$0"],
                    ],
                  ],
                  [
                    52,
                    "w",
                    [
                      13,
                      [41, "$0"],
                      [3, "$0", ["i", [15, "f"], [15, "s"]]],
                      ["$0"],
                    ],
                  ],
                  [
                    53,
                    [41, "z"],
                    [3, "z", 0],
                    [
                      63,
                      [7, "z"],
                      [23, [15, "z"], [17, [15, "r"], "length"]],
                      [33, [15, "z"], [3, "z", [0, [15, "z"], 1]]],
                      [
                        46,
                        [
                          53,
                          [52, "ba", [16, [15, "r"], [15, "z"]]],
                          [
                            22,
                            [
                              30,
                              [17, [15, "ba"], "disallowAllRegions"],
                              ["y", [17, [15, "ba"], "disallowedRegions"]],
                            ],
                            [46, ["x", [17, [15, "ba"], "redactFieldGroup"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "o",
                  [46, "q"],
                  [52, "r", [8]],
                  [22, [28, [15, "q"]], [46, [36, [15, "r"]]]],
                  [52, "s", [2, [15, "q"], "split", [7, ","]]],
                  [
                    53,
                    [41, "t"],
                    [3, "t", 0],
                    [
                      63,
                      [7, "t"],
                      [23, [15, "t"], [17, [15, "s"], "length"]],
                      [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "u",
                            [2, [16, [15, "s"], [15, "t"]], "trim", [7]],
                          ],
                          [22, [28, [15, "u"]], [46, [6]]],
                          [52, "v", [2, [15, "u"], "split", [7, "-"]]],
                          [52, "w", [16, [15, "v"], 0]],
                          [
                            52,
                            "x",
                            [
                              39,
                              [20, [17, [15, "v"], "length"], 2],
                              [15, "u"],
                              [44],
                            ],
                          ],
                          [
                            22,
                            [
                              30,
                              [28, [15, "w"]],
                              [21, [17, [15, "w"], "length"], 2],
                            ],
                            [46, [6]],
                          ],
                          [
                            22,
                            [
                              1,
                              [21, [15, "x"], [44]],
                              [
                                30,
                                [23, [17, [15, "x"], "length"], 4],
                                [18, [17, [15, "x"], "length"], 6],
                              ],
                            ],
                            [46, [6]],
                          ],
                          [43, [15, "r"], [15, "u"], true],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "r"]],
                ],
                [
                  50,
                  "p",
                  [46, "q"],
                  [22, [28, [17, [15, "q"], "settingsTable"]], [46, [36, [7]]]],
                  [52, "r", [8]],
                  [
                    53,
                    [41, "s"],
                    [3, "s", 0],
                    [
                      63,
                      [7, "s"],
                      [
                        23,
                        [15, "s"],
                        [17, [17, [15, "q"], "settingsTable"], "length"],
                      ],
                      [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "t",
                            [16, [17, [15, "q"], "settingsTable"], [15, "s"]],
                          ],
                          [52, "u", [17, [15, "t"], "redactFieldGroup"]],
                          [22, [28, [16, [15, "m"], [15, "u"]]], [46, [6]]],
                          [
                            43,
                            [15, "r"],
                            [15, "u"],
                            [
                              8,
                              "redactFieldGroup",
                              [15, "u"],
                              "disallowAllRegions",
                              false,
                              "disallowedRegions",
                              [8],
                            ],
                          ],
                          [52, "v", [16, [15, "r"], [15, "u"]]],
                          [
                            22,
                            [17, [15, "t"], "disallowAllRegions"],
                            [
                              46,
                              [43, [15, "v"], "disallowAllRegions", true],
                              [6],
                            ],
                          ],
                          [
                            43,
                            [15, "v"],
                            "disallowedRegions",
                            ["o", [17, [15, "t"], "disallowedRegions"]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [2, [15, "b"], "values", [7, [15, "r"]]]],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "d", ["require", "getContainerVersion"]],
                [52, "e", ["require", "internal.getCountryCode"]],
                [52, "f", ["require", "internal.getRegionCode"]],
                [52, "g", ["require", "internal.setRemoteConfigParameter"]],
                [52, "h", [15, "__module_activities"]],
                [52, "i", [17, [15, "h"], "withRequestContext"]],
                [41, "j"],
                [41, "k"],
                [41, "l"],
                [
                  52,
                  "m",
                  [
                    8,
                    "GOOGLE_SIGNALS",
                    [7, [8, "name", "allow_google_signals", "value", false]],
                    "DEVICE_AND_GEO",
                    [
                      7,
                      [8, "name", "geo_granularity", "value", true],
                      [8, "name", "redact_device_info", "value", true],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "applyRegionScopedSettings",
                    [15, "n"],
                    "extractRedactedLocations",
                    [15, "p"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_gaConversionProcessor",
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
                  "j",
                  [46, "k"],
                  [
                    52,
                    "l",
                    [
                      7,
                      [17, [15, "g"], "CONSENT_AD_STORAGE"],
                      [17, [15, "g"], "CONSENT_AD_USER_DATA"],
                    ],
                  ],
                  [
                    52,
                    "m",
                    [
                      51,
                      "",
                      [7],
                      [
                        2,
                        [15, "c"],
                        "taskSetConsentStateMetadata",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "c"], "taskSetConfigParams", [7, [15, "k"]]],
                      [
                        2,
                        [15, "b"],
                        "taskAddGoogleNonGaiaHitData",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "b"], "taskCheckDebugMode", [7, [15, "k"]]],
                      [2, [15, "c"], "taskAddPageParameters", [7, [15, "k"]]],
                      [2, [15, "b"], "taskAddBasicParameters", [7, [15, "k"]]],
                      [2, [15, "c"], "taskAddDeveloperIds", [7, [15, "k"]]],
                      [2, [15, "b"], "taskAddBasketItems", [7, [15, "k"]]],
                      [2, [15, "b"], "taskAddShoppingData", [7, [15, "k"]]],
                      [
                        2,
                        [15, "b"],
                        "taskAddInPageCommandParameter",
                        [7, [15, "k"]],
                      ],
                      [
                        2,
                        [15, "c"],
                        "taskAddLandingPageParams",
                        [7, [15, "k"]],
                      ],
                      [
                        2,
                        [15, "b"],
                        "taskCheckPersonalizationSettings",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "c"], "taskAddPrivacyStrings", [7, [15, "k"]]],
                      [
                        2,
                        [15, "c"],
                        "taskAddPassthroughSessionMarker",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "c"], "taskAddAdsClickIds", [7, [15, "k"]]],
                      [
                        2,
                        [15, "c"],
                        "taskAddCookieDeprecationLabel",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "c"], "taskAddFirstPartyId", [7, [15, "k"]]],
                      [
                        2,
                        [15, "b"],
                        "taskSetRedactClickIdsMetadata",
                        [7, [15, "k"]],
                      ],
                      [2, [15, "b"], "taskApplyConsentRules", [7, [15, "k"]]],
                      [2, [15, "c"], "taskAddUachParams", [7, [15, "k"]]],
                      [
                        22,
                        [28, [2, [15, "k"], "isAborted", [7]]],
                        [46, ["i", [15, "k"]]],
                      ],
                    ],
                  ],
                  [
                    "d",
                    [
                      51,
                      "",
                      [7],
                      ["m"],
                      [
                        22,
                        [28, ["f", [15, "l"]]],
                        [
                          46,
                          [
                            "e",
                            [
                              51,
                              "",
                              [7],
                              [
                                22,
                                ["f", [15, "l"]],
                                [
                                  46,
                                  [
                                    2,
                                    [15, "k"],
                                    "setMetadata",
                                    [
                                      7,
                                      [17, [15, "h"], "CONSENT_UPDATED"],
                                      true,
                                    ],
                                  ],
                                  ["m"],
                                ],
                              ],
                            ],
                            [15, "l"],
                          ],
                        ],
                      ],
                    ],
                    [15, "l"],
                  ],
                ],
                [52, "b", [15, "__module_commonAdsTasks"]],
                [52, "c", [15, "__module_webAdsTasks"]],
                [52, "d", ["require", "internal.consentScheduleFirstTry"]],
                [52, "e", ["require", "internal.consentScheduleRetry"]],
                [52, "f", ["require", "isConsentGranted"]],
                [52, "g", [15, "__module_gtagSchema"]],
                [52, "h", [15, "__module_gtagMetadataSchema"]],
                [52, "i", ["require", "internal.sendAdsHit"]],
                [36, [8, "process", [15, "j"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_processors",
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
                  "e",
                  [46, "g", "h"],
                  [43, [15, "d"], [15, "g"], [8, "process", [15, "h"]]],
                ],
                [
                  50,
                  "f",
                  [46, "g", "h"],
                  [52, "i", [16, [15, "d"], [15, "g"]]],
                  [2, [15, "i"], "process", [7, [15, "h"]]],
                ],
                [52, "b", [15, "__module_gaConversionProcessor"]],
                [52, "c", "ga_conversion"],
                [52, "d", [8]],
                ["e", [15, "c"], [17, [15, "b"], "process"]],
                [
                  36,
                  [
                    8,
                    "HIT_TYPE_GA_CONVERSION",
                    [15, "c"],
                    "processEvent",
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
      __c: { 2: true, 4: true },
      __ccd_auto_redact: { 2: true, 4: true },
      __ccd_conversion_marking: { 2: true, 4: true },
      __ccd_em_download: { 2: true, 4: true },
      __ccd_em_outbound_click: { 2: true, 4: true },
      __ccd_em_scroll: { 2: true, 4: true },
      __ccd_em_site_search: { 2: true, 4: true },
      __ccd_em_video: { 2: true, 4: true },
      __ccd_ga_ads_link: { 2: true, 4: true },
      __ccd_ga_first: { 2: true, 4: true },
      __ccd_ga_last: { 2: true, 4: true },
      __ccd_ga_regscope: { 2: true, 4: true },
      __e: { 2: true, 4: true },
      __ogt_1p_data_v2: { 2: true },
      __ogt_auto_events: { 2: true },
      __ogt_cross_domain: { 2: true },
      __ogt_dma: { 2: true, 4: true },
      __ogt_google_signals: { 2: true, 4: true },
      __set_product_settings: { 2: true, 4: true },
    },
    blob: { 1: "7" },
    permissions: {
      __c: {},
      __ccd_auto_redact: {},
      __ccd_conversion_marking: {},
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: "" },
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: "" },
      },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        access_template_storage: {},
        detect_scroll_events: {},
      },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
      __ccd_em_video: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.video"],
        },
        access_template_storage: {},
        detect_youtube_activity_events: { allowFixMissingJavaScriptApi: false },
      },
      __ccd_ga_ads_link: {
        get_user_agent: {},
        read_event_data: { eventDataAccess: "any" },
        read_title: {},
        read_screen_dimensions: {},
        access_consent: {
          consentTypes: [
            { consentType: "ad_personalization", read: true, write: false },
            { consentType: "ad_storage", read: true, write: false },
            { consentType: "ad_user_data", read: true, write: false },
          ],
        },
        get_url: { urlParts: "any" },
        get_referrer: { urlParts: "any" },
      },
      __ccd_ga_first: {},
      __ccd_ga_last: {},
      __ccd_ga_regscope: { read_container_data: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __ogt_1p_data_v2: {
        detect_user_provided_data: {
          limitDataSources: true,
          allowAutoDataSources: true,
          allowManualDataSources: false,
          allowCodeDataSources: false,
        },
      },
      __ogt_auto_events: {},
      __ogt_cross_domain: {},
      __ogt_dma: {
        access_consent: {
          consentTypes: [
            { consentType: "ad_user_data", read: false, write: true },
            { consentType: "ad_storage", read: true, write: false },
          ],
        },
      },
      __ogt_google_signals: { read_container_data: {} },
      __set_product_settings: {},
    },

    security_groups: {
      google: [
        "__c",
        "__ccd_auto_redact",
        "__ccd_conversion_marking",
        "__ccd_em_download",
        "__ccd_em_outbound_click",
        "__ccd_em_scroll",
        "__ccd_em_site_search",
        "__ccd_em_video",
        "__ccd_ga_ads_link",
        "__ccd_ga_first",
        "__ccd_ga_last",
        "__ccd_ga_regscope",
        "__e",
        "__ogt_1p_data_v2",
        "__ogt_auto_events",
        "__ogt_cross_domain",
        "__ogt_dma",
        "__ogt_google_signals",
        "__set_product_settings",
      ],
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
  var $f = function (a) {
      var b = {},
        c = 0;
      ib(a, function (e, f) {
        if (f != null) {
          var g = ("" + f).replace(/~/g, "~~");
          if (Xf.hasOwnProperty(e)) b[Xf[e]] = g;
          else if (Yf.hasOwnProperty(e)) {
            var k = Yf[e];
            b.hasOwnProperty(k) || (b[k] = g);
          } else if (e === "category")
            for (var m = g.split("/", 5), n = 0; n < m.length; n++) {
              var p = b,
                q = Zf[n],
                r = m[n];
              p.hasOwnProperty(q) || (p[q] = r);
            }
          else if (c < 27) {
            var u = String.fromCharCode(c < 10 ? 48 + c : 65 + c - 10);
            b["k" + u] = ("" + String(e)).replace(/~/g, "~~");
            b["v" + u] = g;
            c++;
          }
        }
      });
      var d = [];
      ib(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Xf = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    Yf = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    Zf = ["ca", "c2", "c3", "c4", "c5"];
  var ag = function () {
    this.events = [];
    this.j = "";
    this.ja = {};
    this.baseUrl = "";
    this.H = 0;
    this.K = this.C = !1;
  };
  ag.prototype.add = function (a) {
    return this.P(a)
      ? (this.events.push(a),
        (this.j = a.C),
        (this.ja = a.ja),
        (this.baseUrl = a.baseUrl),
        (this.H += a.K),
        (this.C = a.H),
        !0)
      : !1;
  };
  ag.prototype.P = function (a) {
    return this.events.length
      ? this.events.length >= 20 || a.K + this.H >= 16384
        ? !1
        : this.baseUrl === a.baseUrl && this.C === a.H && this.aa(a)
      : !0;
  };
  ag.prototype.aa = function (a) {
    var b = this;
    if (!this.K) return this.j === a.C;
    var c = Object.keys(this.ja);
    return (
      c.length === Object.keys(a.ja).length &&
      c.every(function (d) {
        return a.ja.hasOwnProperty(d) && String(b.ja[d]) === String(a.ja[d]);
      })
    );
  };
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
  var fg = function (a, b) {
      var c = a.events;
      if (c.length === 1) return dg(c[0], b);
      var d = [];
      a.j && d.push(a.j);
      for (var e = {}, f = 0; f < c.length; f++)
        ib(c[f].Rc, function (u, v) {
          v != null &&
            ((e[u] = e[u] || {}), (e[u][String(v)] = e[u][String(v)] + 1 || 1));
        });
      var g = {};
      ib(e, function (u, v) {
        var t,
          w = -1,
          x = 0;
        ib(v, function (y, A) {
          x += A;
          var C = (y.length + u.length + 2) * (A - 1);
          C > w && ((t = y), (w = C));
        });
        x === c.length && (g[u] = t);
      });
      eg(g, d);
      b && d.push("_s=" + b);
      for (
        var k = d.join("&"), m = [], n = {}, p = 0;
        p < c.length;
        n = { ai: void 0 }, p++
      ) {
        var q = [];
        n.ai = {};
        ib(
          c[p].Rc,
          (function (u) {
            return function (v, t) {
              g[v] !== "" + t && (u.ai[v] = t);
            };
          })(n),
        );
        c[p].j && q.push(c[p].j);
        eg(n.ai, q);
        m.push(q.join("&"));
      }
      var r = m.join("\r\n");
      return { params: k, body: r };
    },
    dg = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push("_s=" + b);
      eg(a.Rc, c);
      var d = !1;
      a.j && (c.push(a.j), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.baseUrl.length + 1;
      d && g > 2048 && ((f = c.pop()), (e = c.join("&")));
      return { params: e, body: f };
    },
    eg = function (a, b) {
      ib(a, function (c, d) {
        d != null &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    };
  var gg = function (a) {
      var b = [];
      ib(a, function (c, d) {
        d != null &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    hg = function (a, b, c, d, e) {
      this.baseUrl = b;
      this.endpoint = c;
      this.ja = a.ja;
      this.Rc = a.Rc;
      this.Lh = a.Lh;
      this.H = d;
      this.C = gg(a.ja);
      this.j = gg(a.Lh);
      this.K = this.j.length;
      if (e && this.K > 16384) throw Error("EVENT_TOO_LARGE");
    };
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
    K(this.getName(), ["uri:!string"], arguments);
    try {
      b = decodeURIComponent(a);
    } catch (c) {}
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
  var Rg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (a === void 0) return;
        a = a[b[c]];
      }
      return a;
    },
    Sg = function (a, b) {
      var c = b.preHit;
      if (c) {
        var d = a[0];
        switch (d) {
          case "hitData":
            return a.length < 2 ? void 0 : Rg(c.getHitData(a[1]), a.slice(2));
          case "metadata":
            return a.length < 2 ? void 0 : Rg(c.getMetadata(a[1]), a.slice(2));
          case "eventName":
            return c.getEventName();
          case "destinationId":
            return c.getDestinationId();
          default:
            throw Error(
              d +
                " is not a valid field that can be accessed\n                      from PreHit data.",
            );
        }
      }
    },
    Ug = function (a, b) {
      if (a) {
        if (a.contextValue !== void 0) {
          var c;
          a: {
            var d = a.contextValue,
              e = d.keyParts;
            if (e && e.length !== 0) {
              var f = d.namespaceType;
              switch (f) {
                case 1:
                  c = Sg(e, b);
                  break a;
                case 2:
                  var g = b.macro;
                  c = g ? g[e[0]] : void 0;
                  break a;
                default:
                  throw Error("Unknown Namespace Type used: " + f);
              }
            }
            c = void 0;
          }
          return c;
        }
        if (a.booleanExpressionValue !== void 0)
          return Tg(a.booleanExpressionValue, b);
        if (a.booleanValue !== void 0) return !!a.booleanValue;
        if (a.stringValue !== void 0) return String(a.stringValue);
        if (a.integerValue !== void 0) return Number(a.integerValue);
        if (a.doubleValue !== void 0) return Number(a.doubleValue);
        throw Error(
          "Unknown field used for variable of type ExpressionValue:" + a,
        );
      }
    },
    Tg = function (a, b) {
      var c = a.args;
      if (!Array.isArray(c) || c.length === 0)
        throw Error(
          'Invalid boolean expression format. Expected "args":' +
            c +
            " property to\n         be non-empty array.",
        );
      var d = function (g) {
        return Ug(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return c.length > 0;
        case 3:
          return !d(c[0]);
        case 4:
          return og(d(c[0]), d(c[1]), !1);
        case 5:
          return qg(d(c[0]), d(c[1]));
        case 6:
          return vg(d(c[0]), d(c[1]));
        case 7:
          return mg(d(c[0]), d(c[1]));
        case 8:
          return pg(d(c[0]), d(c[1]));
        case 9:
          return ug(d(c[0]), d(c[1]));
        case 10:
          return sg(d(c[0]), d(c[1]));
        case 11:
          return tg(d(c[0]), d(c[1]));
        case 12:
          return rg(d(c[0]), d(c[1]));
        default:
          throw Error(
            'Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.',
          );
      }
    };
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
  var ii = function (a) {
      var b = R(108);
      b = b === void 0 ? !1 : b;
      var c = {},
        d = ["tv.1"],
        e = 0;
      for (var f = l(a), g = f.next(); !g.done; g = f.next()) {
        var k = g.value;
        if (k.value !== "") {
          var m,
            n = void 0,
            p = k.name,
            q = k.value,
            r = ei[p];
          if (r) {
            var u = (n = k.index) != null ? n : "",
              v = r + "__" + e;
            !fi(p) || gi(q)
              ? (m = encodeURIComponent(encodeURIComponent(q)))
              : ((m = "${userData." + v + "|sha256}"), (c[v] = q), e++);
            d.push("" + r + u + "." + m);
          }
        }
      }
      var t = d.join("~"),
        w = { userData: c };
      return b
        ? {
            Gk: t,
            rf: w,
            Jk: e,
            Yl: "tv.1~${" + (t + "|encrypt}"),
            encryptionKeyString: hi(),
          }
        : { Gk: t, rf: w, Jk: e };
    },
    fi = function (a) {
      return ji.indexOf(a) !== -1;
    },
    hi = function () {
      return "{\x22keys\x22:[{\x22id\x22:\x228b1ac2c2-2ee9-4b8a-9572-4d139e9fce20\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BM8pORkHngFDAgT/oUXDo6aRoQG+vaV5VpO6bFsXUETttG0bZqoaTNr+zmUJvN/qC8t29iK47vbNqrujAfDGwZk\x3d\x22}},{\x22id\x22:\x22661f27c5-02da-45f8-8f52-e63e93961812\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BCXMPHMwMCMenU5TH56UrQ08EdKKdSrco5PZwNWkylAGUUCFx6YVQYskoC49KqUtDyLdlHN0qHYdbAblCeJ4Ae4\x3d\x22}},{\x22id\x22:\x220a32fa21-e223-4d3a-8b89-8be15e951c2c\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BO6lo75L8qpqXxjlu2jmyRJ6XNn44fXlW8Oymn7FfYVyll7RzTCHRSF8JNLa5K6sNo+2kB/XBWmM10/PbRPNiCw\x3d\x22}},{\x22id\x22:\x2209f51f79-7188-428c-8048-cd159791ec92\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BABldfgq4NekeyRdn4+ELkTuzVJ9GnqhSq4Cg140oDkus5GjOwc6FqcprdkiZlI+VTLL/g4rfpgXLQALdrLAQEc\x3d\x22}},{\x22id\x22:\x220308342f-cc92-4f19-9f75-9e0b8c473d8d\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BIhZ5C2HZRFyPFBCP+mSbzQEI3E309fsvozxVnL01/553/3eea1FJZoCnAOcIbvwvGbqTz0M2fpThLk46T8klsY\x3d\x22}}]}";
    },
    li = function (a, b) {
      if (B.Promise) {
        var c = void 0;
        return c;
      }
    },
    ni = function (a, b, c) {
      if (B.Promise)
        try {
          var d = new Promise(function (e) {
            mi(a, e);
          });
          return d;
        } catch (e) {}
    },
    oi = function (a) {
      if (B.Promise)
        try {
          return new Promise(function (b) {
            mi(a, function (c) {
              b(c);
            });
          });
        } catch (b) {}
    },
    pi = function (a) {
      for (
        var b = a.kf, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0;
        g < b.length;
        ++g
      ) {
        var k = b[g].name,
          m = b[g].value,
          n = b[g].index,
          p = ei[k];
        p &&
          m &&
          (!fi(k) || gi(m)) &&
          (n !== void 0 && (p += n), d.push(p + "." + m), e++);
      }
      b.length === 1 && b[0].name === "error_code" && ((e = 0), (f = !0));
      return { Gb: encodeURIComponent(d.join("~")), Ld: e, time: c, mg: f };
    },
    mi = function (a, b) {
      qi(a, function (c) {
        b(pi(c));
      });
    },
    gi = function (a) {
      return /^e\d+$/.test(a) || ri.test(a) || Wh.test(a);
    },
    zi = function (a) {
      function b(r, u, v, t) {
        var w = si(r);
        w !== "" &&
          (Wh.test(w)
            ? k.push({ name: u, value: w, index: t })
            : k.push({ name: u, value: v(w), index: t }));
      }
      function c(r, u) {
        var v = r;
        if (z(v) || Array.isArray(v)) {
          v = db(r);
          for (var t = 0; t < v.length; ++t) {
            var w = si(v[t]),
              x = Wh.test(w);
            u && !x && V(89);
            !u && x && V(88);
          }
        }
      }
      function d(r, u) {
        var v = r[u];
        c(v, !1);
        var t = ti[u];
        r[t] && (r[u] && V(90), (v = r[t]), c(v, !0));
        return v;
      }
      function e(r, u, v) {
        for (var t = db(d(r, u)), w = 0; w < t.length; ++w) b(t[w], u, v);
      }
      function f(r, u, v, t) {
        var w = d(r, u);
        b(w, u, v, t);
      }
      function g(r) {
        return function (u) {
          V(64);
          return r(u);
        };
      }
      var k = [];
      if (B.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", ui);
      e(a, "phone_number", vi);
      e(a, "first_name", g(wi));
      e(a, "last_name", g(wi));
      var m = a.home_address || {};
      e(m, "street", g(xi));
      e(m, "city", g(xi));
      e(m, "postal_code", g(yi));
      e(m, "region", g(xi));
      e(m, "country", g(yi));
      for (var n = db(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", wi, p);
        f(q, "last_name", wi, p);
        f(q, "street", xi, p);
        f(q, "city", xi, p);
        f(q, "postal_code", yi, p);
        f(q, "region", xi, p);
        f(q, "country", yi, p);
      }
      return k;
    },
    Ai = function (a) {
      var b = a ? zi(a) : [];
      return pi({ kf: b });
    },
    Bi = function (a) {
      return a && a != null && Object.keys(a).length > 0 && B.Promise
        ? zi(a).some(function (b) {
            return b.value && fi(b.name) && !Wh.test(b.value);
          })
        : !1;
    },
    qi = function (a, b) {
      var c = zi(a);
      Ci(c, b);
    },
    si = function (a) {
      return a == null ? "" : z(a) ? ob(String(a)) : "e0";
    },
    yi = function (a) {
      return a.replace(Di, "");
    },
    wi = function (a) {
      return xi(a.replace(/\s/g, ""));
    },
    xi = function (a) {
      return ob(a.replace(Ei, "").toLowerCase());
    },
    vi = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Fi.test(a) ? a : "e0";
    },
    ui = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Gi.test(c)) return c;
      }
      return "e0";
    },
    Ci = function (a, b) {
      var c = !1;
      if (
        (c = R(57)
          ? !a.some(function (e) {
              return e.value && fi(e.name);
            })
          : a.some(function (e) {
              e.value && fi(e.name);
            }))
      )
        b({ kf: a });
      else if (B.Promise) {
        var d;
        if (R(56) || R(89)) d = Hc();
        Promise.all(
          a.map(function (e) {
            return e.value && fi(e.name)
              ? Yh(e.value).then(function (f) {
                  e.value = f;
                })
              : Promise.resolve();
          }),
        )
          .then(function () {
            var e = { kf: a };
            if (d !== void 0) {
              var f = Hc();
              d && f && (e.time = Math.round(f) - Math.round(d));
            }
            b(e);
          })
          .catch(function () {
            b({ kf: [] });
          });
      } else b({ kf: [] });
    },
    Ei = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Gi = /^\S+@\S+\.\S+$/,
    Fi = /^\+\d{10,15}$/,
    Di = /[.~]/g,
    ri = /^[0-9A-Za-z_-]{43}$/,
    Hi = {},
    ei =
      ((Hi.email = "em"),
      (Hi.phone_number = "pn"),
      (Hi.first_name = "fn"),
      (Hi.last_name = "ln"),
      (Hi.street = "sa"),
      (Hi.city = "ct"),
      (Hi.region = "rg"),
      (Hi.country = "co"),
      (Hi.postal_code = "pc"),
      (Hi.error_code = "ec"),
      Hi),
    Ii = {},
    ti =
      ((Ii.email = "sha256_email_address"),
      (Ii.phone_number = "sha256_phone_number"),
      (Ii.first_name = "sha256_first_name"),
      (Ii.last_name = "sha256_last_name"),
      (Ii.street = "sha256_street"),
      Ii);
  var ji = Object.freeze([
    "email",
    "phone_number",
    "first_name",
    "last_name",
    "street",
  ]);
  var Ji = { Bn: "101925629~102067555~102067808~102077855~102081485" };
  var Ki = {},
    Li = (B.google_tag_manager = B.google_tag_manager || {});
  Ki.wh = "4bk0";
  Ki.Ce = Number("0") || 0;
  Ki.ob = "dataLayer";
  Ki.Dn =
    "ChAIgOmlugYQ7amh1ZqK1Z8EEiUA5CRVw11P8fPb+LpbMn9gKI5Ye/16nA5XxuGrCuyiO95U/Z7jGgKx/Q\x3d\x3d";
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
  Si = !0;
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
  var tj = function (a, b, c) {
      if (!c) return !1;
      for (
        var d = String(c.value),
          e,
          f = d
            .replace(/\["?'?/g, ".")
            .replace(/"?'?\]/g, "")
            .split(","),
          g = 0;
        g < f.length;
        g++
      ) {
        var k = f[g].trim();
        if (k && !vb(k, "#") && !vb(k, ".")) {
          if (vb(k, "dataLayer.")) e = nj(k.substring(10));
          else {
            var m = k.split(".");
            e = B[m.shift()];
            for (var n = 0; n < m.length; n++) e = e && e[m[n]];
          }
          if (e !== void 0) break;
        }
      }
      if (e === void 0 && Rh)
        try {
          var p = Qh(d);
          if (p && p.length > 0) {
            e = [];
            for (
              var q = 0;
              q < p.length &&
              q < (b === "email" || b === "phone_number" ? 5 : 1);
              q++
            )
              e.push(yc(p[q]) || ob(p[q].value));
            e = e.length === 1 ? e[0] : e;
          }
        } catch (r) {
          V(149);
        }
      return e ? ((a[b] = e), !0) : !1;
    },
    uj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = tj(b, "email", a.email) || c;
        c = tj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = tj(f, "first_name", d[e].first_name) || c;
          c = tj(f, "last_name", d[e].last_name) || c;
          c = tj(f, "street", d[e].street) || c;
          c = tj(f, "city", d[e].city) || c;
          c = tj(f, "region", d[e].region) || c;
          c = tj(f, "country", d[e].country) || c;
          c = tj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    vj = function (a, b) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          if (b && Uc(b)) return b;
          var c = a.enhanced_conversions_manual_var;
          if (c !== void 0) return c;
          var d = B.enhanced_conversion_data;
          d && V(154);
          return d;
        case "automatic":
          return uj(a[O.g.Og]);
      }
    },
    wj = function (a) {
      return Uc(a) ? !!a.enable_code : !1;
    };
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
      ctid: "G-4ZF0QC8G81",
      canonicalContainerId: "71186131",
      tk: "G-4ZF0QC8G81",
      uk: "G-4ZF0QC8G81",
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
    a = !!pl["2"];
    return a;
  }
  function tl() {
    return pl["6"] !== !1;
  }
  function ul() {
    var a = "";
    a = pl["4"] || "";
    return a;
  }
  function vl() {
    var a = !1;
    a = !!pl["5"];
    return a;
  }
  function wl() {
    var a = "";
    a = pl["3"] || "";
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
  var sr = function (a, b) {
      var c = (Li.ads_pageview = Li.ads_pageview || {});
      if (c[a]) return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0;
    },
    tr = function (a) {
      var b = Gj(a);
      return Db(
        "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
          " ",
        ),
        b,
        "0",
      );
    },
    Br = function (a, b, c, d, e) {
      var f = Hq(a.prefix);
      if (sr(f, !0)) {
        var g = Wq(),
          k = [],
          m = g.gclid,
          n = g.dclid,
          p = g.gclsrc || "aw",
          q = ur(),
          r = q.Se,
          u = q.kk;
        !m ||
          (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
          k.push({ W: m, Te: p });
        n && k.push({ W: n, Te: "ds" });
        k.length === 2 && V(147);
        k.length === 0 && g.wbraid && k.push({ W: g.wbraid, Te: "gb" });
        k.length === 0 && p === "aw.ds" && k.push({ W: "", Te: "aw.ds" });
        vr(function () {
          var v = X(wr());
          if (v) {
            Up(a);
            var t = [],
              w = v ? Sp[Vp(a.prefix)] : void 0;
            w && t.push("auid=" + w);
            if (X(O.g.N)) {
              e && t.push("userId=" + e);
              var x = Rl(Ml.yh);
              if (x === void 0) Ql(Ml.zh, !0);
              else {
                var y = Rl(Ml.Ee);
                t.push("ga_uid=" + y + "." + x);
              }
            }
            var A = E.referrer ? Aj(Gj(E.referrer), "host") : "",
              C = v || !d ? k : [];
            C.length === 0 &&
              (xr.test(A) || yr.test(A)) &&
              C.push({ W: "", Te: "" });
            if (C.length !== 0 || r !== void 0) {
              A && t.push("ref=" + encodeURIComponent(A));
              var D = zr();
              t.push("url=" + encodeURIComponent(D));
              t.push("tft=" + qb());
              var G = Hc();
              G !== void 0 && t.push("tfd=" + Math.round(G));
              var J = Pn(!0);
              t.push("frm=" + J);
              r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
              u !== void 0 &&
                t.push("gad_source_src=" + encodeURIComponent(u.toString()));
              if (!c) {
                var F = {};
                c = Fm(vm(new um(0), ((F[O.g.na] = $m.j[O.g.na]), F)));
              }
              t.push("gtm=" + Qo({ qa: b }));
              Do() && t.push("gcs=" + Eo());
              t.push("gcd=" + Io(c));
              Lo() && t.push("dma_cps=" + Jo());
              t.push("dma=" + Ko());
              Co(c) ? t.push("npa=0") : t.push("npa=1");
              No() && t.push("_ng=1");
              Zn(po()) && t.push("tcfd=" + Mo());
              var T = wo();
              T && t.push("gdpr=" + T);
              var M = vo();
              M && t.push("gdpr_consent=" + M);
              R(20) && t.push("apve=0");
              R(102) && Gp(!1)._up && t.push("gtm_up=1");
              fj() && t.push("tag_exp=" + fj());
              if (C.length > 0)
                for (var aa = 0; aa < C.length; aa++) {
                  var da = C[aa],
                    U = da.W,
                    S = da.Te;
                  if (!Ar(a.prefix, S + "." + U, w !== void 0)) {
                    var N =
                      "https://adservice.google.com/pagead/regclk?" +
                      t.join("&");
                    U !== ""
                      ? (N =
                          S === "gb"
                            ? N + "&wbraid=" + U
                            : N + "&gclid=" + U + "&gclsrc=" + S)
                      : S === "aw.ds" && (N += "&gclsrc=aw.ds");
                    Bc(N);
                  }
                }
              else if (r !== void 0 && !Ar(a.prefix, "gad", w !== void 0)) {
                var la =
                  "https://adservice.google.com/pagead/regclk?" + t.join("&");
                Bc(la);
              }
            }
          }
        });
      }
    },
    Ar = function (a, b, c) {
      var d = (Li.joined_auid = Li.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    ur = function () {
      var a = Gj(B.location.href),
        b = void 0,
        c = void 0,
        d = Aj(a, "query", !1, void 0, "gad_source"),
        e,
        f = a.hash.replace("#", "").match(Cr);
      e = f ? f[1] : void 0;
      d && e
        ? ((b = d), (c = 1))
        : d
          ? ((b = d), (c = 2))
          : e && ((b = e), (c = 3));
      return { Se: b, kk: c };
    },
    zr = function () {
      var a = Pn(!1) === 1 ? B.top.location.href : B.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Dr = function (a) {
      var b = [];
      ib(a, function (c, d) {
        d = Oq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Fr = function (a, b) {
      return Er("dc", a, b);
    },
    Gr = function (a, b) {
      return Er("aw", a, b);
    },
    Er = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = Hj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Hq(b);
      if (e === "_gcl") {
        var f = !X(wr()) && c,
          g;
        g = Wq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = Iq(a, e);
      return k ? Dq(k) : [];
    },
    vr = function (a) {
      var b = wr();
      Hl(function () {
        a();
        X(b) || il(a, b);
      }, b);
    },
    wr = function () {
      return [O.g.O, O.g.N];
    },
    xr = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
    yr = /^www\.googleadservices\.com$/,
    Cr = /^gad_source[_=](\d+)$/;
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
  var es = function (a) {
      if (a.eventName === O.g.ba && a.metadata.hit_type === "page_view")
        if (R(21)) {
          a.metadata.redact_click_ids =
            W(a.m, O.g.ia) != null &&
            W(a.m, O.g.ia) !== !1 &&
            !X([O.g.O, O.g.N]);
          var b = bs(a),
            c = W(a.m, O.g.wa) !== !1;
          c || (a.j[O.g.cj] = "1");
          var d = Hq(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = W(a.m, O.g.cb),
              g = W(a.m, O.g.xa) || {};
            cs({ Bd: c, Kd: g, Pd: f, rc: b });
            if (!e && !sr(d)) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.j[O.g.Cc] = O.g.ac;
            if (a.metadata.consent_updated)
              (a.j[O.g.Cc] = O.g.Uk), (a.j[O.g.Yb] = "1");
            else if (a.metadata.user_id_updated) a.j[O.g.Cc] = O.g.Zk;
            else {
              var k = Wq();
              a.j[O.g.Td] = k.gclid;
              a.j[O.g.be] = k.dclid;
              a.j[O.g.Xi] = k.gclsrc;
              a.j[O.g.Td] ||
                a.j[O.g.be] ||
                ((a.j[O.g.Bf] = k.wbraid), (a.j[O.g.Dg] = k.gbraid));
              a.j[O.g.Ga] = E.referrer ? Aj(Gj(E.referrer), "host") : "";
              a.j[O.g.ya] = zr();
              if (R(24) && jc) {
                var m = Aj(Gj(jc), "host");
                m && (a.j[O.g.vj] = m);
              }
              var n = ur(),
                p = n.kk;
              a.j[O.g.Qi] = n.Se;
              a.j[O.g.Ri] = p;
              a.j[O.g.Nb] = Pn(!0);
              var q = Lr();
              Kr(q) && (a.j[O.g.md] = "1");
              a.j[O.g.Zi] = Hr();
              Gp(!1)._up === "1" && (a.j[O.g.pj] = "1");
            }
            kl = !0;
            var r = X([O.g.O, O.g.N]);
            r &&
              (R(25) && (a.j[O.g.ib] = ds()),
              c && (Up(b), (a.j[O.g.Lb] = Sp[Vp(b.prefix)])));
            a.j[O.g.rb] = void 0;
            a.j[O.g.Za] = void 0;
            if (!a.j[O.g.Td] && !a.j[O.g.be] && Zr(d)) {
              var u = Fq(b);
              u.length > 0 && (a.j[O.g.rb] = u.join("."));
            } else if (!a.j[O.g.Bf] && r) {
              var v = Dq(d + "_aw");
              v.length > 0 && (a.j[O.g.Za] = v.join("."));
            }
            R(28) && (a.j[O.g.qj] = Ic());
            a.m.isGtmEvent && (a.m.j[O.g.na] = $m.j[O.g.na]);
            Co(a.m) ? (a.j[O.g.Tb] = !1) : (a.j[O.g.Tb] = !0);
            a.metadata.add_tag_timing = !0;
            var t = as();
            t !== void 0 && (a.j[O.g.wd] = t || "error");
            var w = wo();
            w && (a.j[O.g.ic] = w);
            var x = vo();
            x && (a.j[O.g.mc] = x);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    bs = function (a) {
      var b = {
        prefix: W(a.m, O.g.eb) || W(a.m, O.g.Na),
        domain: W(a.m, O.g.Ra),
        Fb: W(a.m, O.g.Sa),
        flags: W(a.m, O.g.ab),
      };
      a.m.isGtmEvent && (b.path = W(a.m, O.g.vb));
      return b;
    },
    fs = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.Bd;
      d = a.Kd;
      e = a.Pd;
      f = a.qa;
      g = a.m;
      k = a.Md;
      m = a.ao;
      n = a.Lk;
      cs({ Bd: c, Kd: d, Pd: e, rc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Br(b, f, g, k, n));
    },
    cs = function (a) {
      var b, c, d, e;
      b = a.Bd;
      c = a.Kd;
      d = a.Pd;
      e = a.rc;
      b &&
        (Qp(c[O.g.Hc], !!c[O.g.X]) && (ar(gs, e), cr(e), bq(e)),
        R(92) || R(120) ? Zq(e) : Xq(e),
        gr(gs, e),
        hr(e));
      c[O.g.X] &&
        (er(gs, c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix),
        fr(c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix),
        cq(Vp(e.prefix), c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e),
        cq("FPAU", c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e));
      d && (R(82) ? jr(hs) : jr(is));
      lr(is);
    },
    js = function (a, b, c, d) {
      var e, f, g;
      e = a.Mk;
      f = a.callback;
      g = a.rk;
      if (typeof f === "function")
        if (e === O.g.Za && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === O.g.Lb ? (V(65), Up(b, !1), f(Sp[Vp(b.prefix)])) : f(g);
    },
    gs = ["aw", "dc", "gb"],
    is = ["aw", "dc", "gb", "ag"],
    hs = ["aw", "dc", "gb", "ag", "gad_source"];
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
  var qs = function (a) {
      var b = a && a[O.g.Og];
      return b && !!b[O.g.Yi];
    },
    rs = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    };
  var ss = function (a, b) {
      var c = a && !X([O.g.O, O.g.N]);
      return b && c ? "0" : b;
    },
    us = function (a) {
      var b = a.rc === void 0 ? {} : a.rc,
        c = Hq(b.prefix);
      sr(c) &&
        Hl(
          function () {
            function d(x) {
              var y = X([O.g.O, O.g.N]),
                A = m && y,
                C = b.prefix || "_gcl",
                D;
              Li.reported_gclid || (Li.reported_gclid = {});
              D = Li.reported_gclid;
              var G =
                (A ? C : "") +
                "." +
                (X(O.g.O) ? 1 : 0) +
                "." +
                (X(O.g.N) ? 1 : 0);
              if (!D[G]) {
                D[G] = !0;
                var J = {},
                  F = function (S, N) {
                    if (N || typeof N === "number") J[S] = N.toString();
                  },
                  T = "https://www.google.com";
                Do() && (F("gcs", Eo()), x && F("gcu", 1));
                F("gcd", Io(k));
                fj() && F("tag_exp", fj());
                if (el()) {
                  F("rnd", Hr());
                  if ((!p || (q && q !== "aw.ds")) && y) {
                    var M = Dq(C + "_aw");
                    F("gclaw", M.join("."));
                  }
                  F("url", String(B.location).split(/[?#]/)[0]);
                  F("dclid", ss(f, r));
                  y || (T = "https://pagead2.googlesyndication.com");
                }
                Lo() && F("dma_cps", Jo());
                F("dma", Ko());
                F("npa", Co(k) ? 0 : 1);
                No() && F("_ng", 1);
                Zn(po()) && F("tcfd", Mo());
                F("gdpr_consent", vo() || "");
                F("gdpr", wo() || "");
                Gp(!1)._up === "1" && F("gtm_up", 1);
                F("gclid", ss(f, p));
                F("gclsrc", q);
                if (
                  !(
                    J.hasOwnProperty("gclid") ||
                    J.hasOwnProperty("dclid") ||
                    J.hasOwnProperty("gclaw")
                  ) &&
                  (F("gbraid", ss(f, u)),
                  !J.hasOwnProperty("gbraid") && el() && y)
                ) {
                  var aa = Dq(C + "_gb");
                  aa.length > 0 && F("gclgb", aa.join("."));
                }
                F(
                  "gtm",
                  Qo({ qa: k.eventMetadata.source_canonical_id, hg: !g }),
                );
                m &&
                  X(O.g.O) &&
                  (Up(b || {}), A && F("auid", Sp[Vp(b.prefix)] || ""));
                ts || (a.ik && F("did", a.ik));
                a.Qh && F("gdid", a.Qh);
                a.Kh && F("edid", a.Kh);
                a.Sh !== void 0 && F("frm", a.Sh);
                R(20) && F("apve", "0");
                var da = Object.keys(J).map(function (S) {
                    return S + "=" + encodeURIComponent(J[S]);
                  }),
                  U = T + "/pagead/landing?" + da.join("&");
                Bc(U);
              }
            }
            var e = !!a.Gh,
              f = !!a.Md,
              g = a.targetId,
              k = a.m,
              m = a.ng === void 0 ? !0 : a.ng,
              n = Wq(),
              p = n.gclid || "",
              q = n.gclsrc,
              r = n.dclid || "",
              u = n.wbraid || "",
              v = !e && ((!p || (q && q !== "aw.ds") ? !1 : !0) || u),
              t = el();
            if (v || t)
              if (t) {
                var w = [O.g.O, O.g.N, O.g.Aa];
                d();
                (function () {
                  X(w) ||
                    Gl(function (x) {
                      d(!0, x.consentEventId, x.consentPriorityId);
                    }, w);
                })();
              } else d();
          },
          [O.g.O, O.g.N, O.g.Aa],
        );
    },
    ts = !1;
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
  var As = function (a, b) {
      if (a)
        if (Oo()) {
        } else if ((a = z(a) ? Yl(uk(a)) : Yl(uk(a.id)))) {
          var c = void 0,
            d = !1,
            e = W(b, O.g.tj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Yl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id ||
                  (a.id === a.destinationId &&
                    a.destinationId === g.destinationId)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = W(b, O.g.ih),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = W(b, O.g.gh),
                p = W(b, O.g.hh),
                q = W(b, O.g.jh),
                r = W(b, O.g.sj),
                u = n || p,
                v = 1;
              a.prefix !== "UA" || c || (v = 5);
              for (var t = 0; t < m.length; t++)
                if (t < v)
                  if (c) ws(c, m[t], r, b, { Wb: u, options: q });
                  else if (a.prefix === "AW" && a.ids[am[2]])
                    R(131)
                      ? ws([a], m[t], r || "US", b, { Wb: u, options: q })
                      : xs(a.ids[am[1]], a.ids[am[2]], m[t], b, {
                          Wb: u,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (R(131)) ws([a], m[t], r || "US", b, { Wb: u });
                    else {
                      var w = a.destinationId,
                        x = m[t],
                        y = { Wb: u };
                      V(23);
                      if (x) {
                        y = y || {};
                        var A = ys(zs, y, w),
                          C = {};
                        y.Wb !== void 0 ? (C.receiver = y.Wb) : (C.replace = x);
                        C.ga_wpid = w;
                        C.destination = x;
                        A(2, pb(), C);
                      }
                    }
            }
          }
        }
    },
    ws = function (a, b, c, d, e) {
      V(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: pb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Bs[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
              ? ((f.adData = { ak: k.ids[am[1]], cl: k.ids[am[2]] }),
                Cs(f.adData, d),
                (Bs[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.destinationId }), (Bs[k.id] = !0)));
        }
        (f.gaData || f.adData) && ys(Ds, e)(e.Wb, f, e.options);
      }
    },
    xs = function (a, b, c, d, e) {
      V(22);
      if (c) {
        e = e || {};
        var f = ys(Es, e, a),
          g = { ak: a, cl: b };
        e.Wb === void 0 && (g.autoreplace = c);
        Cs(g, d);
        f(2, e.Wb, g, c, 0, pb(), e.options);
      }
    },
    Cs = function (a, b) {
      R(5) &&
        ((a.dma = Ko()),
        Lo() && (a.dmaCps = Jo()),
        Co(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    ys = function (a, b, c) {
      if (B[a.functionName]) return b.ei && H(b.ei), B[a.functionName];
      var d = Fs();
      B[a.functionName] = d;
      if (a.additionalQueues)
        for (var e = 0; e < a.additionalQueues.length; e++)
          B[a.additionalQueues[e]] = B[a.additionalQueues[e]] || Fs();
      a.idKey && B[a.idKey] === void 0 && (B[a.idKey] = c);
      qc(vs("https://", "http://", a.scriptUrl), b.ei, b.Um);
      return d;
    },
    Fs = function () {
      function a() {
        a.q = a.q || [];
        a.q.push(arguments);
      }
      return a;
    },
    Es = {
      functionName: "_googWcmImpl",
      idKey: "_googWcmAk",
      scriptUrl: "www.gstatic.com/wcm/loader.js",
    },
    zs = {
      functionName: "_gaPhoneImpl",
      idKey: "ga_wpid",
      scriptUrl: "www.gstatic.com/gaphone/loader.js",
    },
    Gs = { Qk: "9", Fl: "5" },
    Ds = {
      functionName: "_googCallTrackingImpl",
      additionalQueues: [zs.functionName, Es.functionName],
      scriptUrl:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Gs.Qk || Gs.Fl) +
        ".js",
    },
    Bs = {};
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
  var Js = function (a) {
      var b = Is[a.target.destinationId];
      if (!a.isAborted && b)
        for (var c = Hs(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Ks = function (a, b) {
      var c = Is[a];
      c || (c = Is[a] = []);
      c.push(b);
    },
    Is = {};
  var Ms = function (a) {
      if (X(Ls)) {
        a = a || {};
        Up(a, !1);
        var b = Tp[Vp(Hq(a.prefix))];
        if (b && !(qb() - b.Zh * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(qb() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    Ls = O.g.O;
  var Ns = function () {
    var a = (gc && gc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
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
  var Ws = function (a) {
      var b = Vs(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1,
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1,
              ))
        : 0;
    },
    Vs = function () {
      var a = E.body,
        b = E.documentElement || (a && a.parentElement),
        c,
        d;
      if (E.compatMode && E.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var Zs = function (a) {
      if (Xs) {
        if (a >= 0 && a < Ys.length && Ys[a]) {
          var b;
          (b = Ys[a]) == null || b.disconnect();
          Ys[a] = void 0;
        }
      } else B.clearInterval(a);
    },
    bt = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
      if (Xs) {
        var e = !1;
        H(function () {
          e || $s(a, b, c)();
        });
        return at(
          function (f) {
            e = !0;
            for (var g = { Xe: 0 }; g.Xe < f.length; g = { Xe: g.Xe }, g.Xe++)
              H(
                (function (k) {
                  return function () {
                    a(f[k.Xe]);
                  };
                })(g),
              );
          },
          b,
          c,
        );
      }
      return B.setInterval($s(a, b, c), 1e3);
    },
    $s = function (a, b, c) {
      function d(k, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: m > 0,
            rootBounds: n,
            target: k,
            time: qb(),
          };
        H(function () {
          a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = Ws(b[k]);
          if (m > e[k])
            for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
              d(b[k], m), f[k]++;
          else if (m < e[k])
            for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    at = function (a, b, c) {
      for (
        var d = new B.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Ys.length; f++) if (!Ys[f]) return (Ys[f] = d), f;
      return Ys.push(d) - 1;
    },
    Ys = [],
    Xs = !(!B.IntersectionObserver || !B.IntersectionObserverEntry);
  var dt = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + ct.test(a.Z)
      );
    },
    rt = function (a) {
      a = a || { Hd: !0, Id: !0, sg: void 0 };
      a.Bb = a.Bb || { email: !0, phone: !1, address: !1 };
      var b = et(a),
        c = ft[b];
      if (c && qb() - c.timestamp < 200) return c.result;
      var d = gt(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!R(30)) {
        if (a.Bb && a.Bb.email) {
          var n = ht(d.elements);
          f = it(n, a && a.Ne);
          g = jt(f);
          n.length > 10 && (e = "3");
        }
        !a.sg && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(kt(f[p], !!a.Hd, !!a.Id));
        m = m.slice(0, 10);
      } else if (a.Bb) {
      }
      g && (k = kt(g, !!a.Hd, !!a.Id));
      var D = { elements: m, ii: k, status: e };
      ft[b] = { timestamp: qb(), result: D };
      return D;
    },
    qt = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.sa, tagName: d.tagName };
      b && (e.querySelector = st(d));
      c && (e.isVisible = !Us(d));
      return e;
    },
    kt = function (a, b, c) {
      return qt({ element: a.element, Z: a.Z, sa: pt.vc }, b, c);
    },
    et = function (a) {
      var b = !(a == null || !a.Hd) + "." + !(a == null || !a.Id);
      a && a.Ne && a.Ne.length && (b += "." + a.Ne.join("."));
      a &&
        a.Bb &&
        (b += "." + a.Bb.email + "." + a.Bb.phone + "." + a.Bb.address);
      return b;
    },
    jt = function (a) {
      if (a.length !== 0) {
        var b;
        b = tt(a, function (c) {
          return !ut.test(c.Z);
        });
        b = tt(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = tt(b, function (c) {
          return !Us(c.element);
        });
        return b[0];
      }
    },
    it = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Sh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    tt = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    st = function (a) {
      var b;
      if (a === E.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = st(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    ht = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(vt);
          if (f) {
            var g = f[0],
              k;
            if (B.location) {
              var m = Cj(B.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    gt = function () {
      var a = [],
        b = E.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(wt.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(xt.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (R(30) && zt.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    At = !1;
  var vt = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    ct = /@(gmail|googlemail)\./i,
    ut = /support|noreply/i,
    wt = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    xt = ["BR"],
    pt = { vc: "1", Be: "2", we: "3", ye: "4", xg: "5", vh: "6", gg: "7" },
    ft = {},
    zt = ["INPUT", "SELECT"];
  var Pt = function (a, b, c) {
      a.j[O.g.De] || (a.j[O.g.De] = {});
      a.j[O.g.De][b] = c;
    },
    Rt = function (a, b) {
      var c = Qt(a, O.g.ie, a.m.C[O.g.ie]);
      if (c && c[b || a.eventName] !== void 0) return c[b || a.eventName];
    },
    St = function (a) {
      var b = a.metadata.user_data;
      if (Uc(b)) return b;
    },
    Tt = function (a) {
      if (a.metadata.is_merchant_center || !Nj(a.m)) return !1;
      if (!W(a.m, O.g.rd)) {
        var b = W(a.m, O.g.Dc);
        return b === !0 || b === "true";
      }
      return !0;
    },
    Ut = function (a) {
      return Qt(a, O.g.Gc, W(a.m, O.g.Gc)) || !!Qt(a, "google_ng", !1);
    };
  var Mf;
  var Vt = Number("") || 5,
    Wt = Number("") || 50,
    Xt = fb();
  var Zt = function (a, b) {
      a &&
        (Yt("sid", a.targetId, b),
        Yt("cc", a.clientCount, b),
        Yt("tl", a.totalLifeMs, b),
        Yt("hc", a.heartbeatCount, b),
        Yt("cl", a.clientLifeMs, b));
    },
    Yt = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    $t = function () {
      var a = E.referrer;
      if (a) {
        var b;
        return Aj(Gj(a), "host") ===
          ((b = B.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    au = function (a) {
      this.P = a;
      this.H = 0;
    };
  au.prototype.C = function (a, b, c, d) {
    var e = $t(),
      f,
      g = [];
    f =
      B === B.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
            ? 0
            : 3
        : 4;
    a && Yt("si", a.Ze, g);
    Yt("m", 0, g);
    Yt("iss", f, g);
    Yt("if", c, g);
    Zt(b, g);
    d && Yt("fm", encodeURIComponent(d.substring(0, Wt)), g);
    this.K(g);
  };
  au.prototype.j = function (a, b, c, d, e) {
    var f = [];
    Yt("m", 1, f);
    Yt("s", a, f);
    Yt("po", $t(), f);
    b && (Yt("st", b.state, f), Yt("si", b.Ze, f), Yt("sm", b.qf, f));
    Zt(c, f);
    Yt("c", d, f);
    e && Yt("fm", encodeURIComponent(e.substring(0, Wt)), f);
    this.K(f);
  };
  au.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !Vj ||
      this.H >= Vt ||
      (Yt("pid", Xt, a),
      Yt("bc", ++this.H, a),
      a.unshift("ctid=" + Qf.ctid + "&t=s"),
      this.P("https://www.googletagmanager.com/a?" + a.join("&")));
  };
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
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Jl = e;
      this.j = f;
      this.H = g;
      this.aa = this.Ua = this.heartbeatCount = this.Hl = 0;
      this.Mj = !1;
      this.C = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.Ze = cu(this.j);
      this.qf = cu(this.j);
      this.P = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.Ic();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        Ze: Math.round(cu(this.j) - this.Ze),
        qf: Math.round(cu(this.j) - this.qf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.qf = cu(this.j)));
    };
    d.prototype.Pj = function () {
      return String(this.Hl++);
    };
    d.prototype.Ic = function () {
      var e = this;
      this.heartbeatCount++;
      this.xe(
        {
          type: 0,
          clientId: this.id,
          requestId: this.Pj(),
          maxDelay: this.Nj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats),
                e.aa++,
                f.isDead || e.aa > bu.Lj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.P = k || 10;
                e.K(4);
                e.Gl();
                var m, n;
                (n = (m = e.H).Sm) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.Rj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + bu.Lj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.Mj) {
                  var u, v;
                  (v = (u = e.H).jo) == null || v.call(u);
                } else {
                  e.Mj = !0;
                  var t, w;
                  (w = (t = e.H).Tm) == null || w.call(t);
                }
              e.aa = 0;
              e.Kl();
              e.Rj();
            }
          }
        },
      );
    };
    d.prototype.Nj = function () {
      return this.state === 2 ? bu.vl : bu.Il;
    };
    d.prototype.Rj = function () {
      var e = this;
      this.j.setTimeout(
        function () {
          e.Ic();
        },
        Math.max(0, this.Nj() - (cu(this.j) - this.Ua)),
      );
    };
    d.prototype.Nl = function (e, f, g) {
      var k = this;
      this.xe(
        { type: 1, clientId: this.id, requestId: this.Pj(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                u,
                v;
              (v = (u = k.H).onFailure) == null || v.call(u, r);
              g(r);
            }
        },
      );
    };
    d.prototype.xe = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.P }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.C[m];
              r && g.Kj(r, 7);
            },
            (n = e.maxDelay) != null ? n : bu.Tk,
          ),
          q = { request: e, Bk: f, xk: k, Pm: p };
        this.C[m] = q;
        k || this.sendRequest(q);
      }
    };
    d.prototype.sendRequest = function (e) {
      this.Ua = cu(this.j);
      e.xk = !1;
      this.Jl(e.request);
    };
    d.prototype.Kl = function () {
      for (
        var e = l(Object.keys(this.C)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.C[f.value];
        g.xk && this.sendRequest(g);
      }
    };
    d.prototype.Gl = function () {
      for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next())
        this.Kj(this.C[f.value], this.P);
    };
    d.prototype.Kj = function (e, f) {
      this.fg(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Bk(g);
    };
    d.prototype.fg = function (e) {
      delete this.C[e.request.requestId];
      this.j.clearTimeout(e.Pm);
    };
    d.prototype.wm = function (e) {
      this.Ua = cu(this.j);
      var f = this.C[e.requestId];
      if (f) this.fg(f), f.Bk(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, B, b);
    return c;
  };
  var eu;
  var fu = function () {
      eu ||
        (eu = new au(function (a) {
          return void uc(a);
        }));
      return eu;
    },
    gu = function (a) {
      var b = "&1p=1";
      if (!R(110)) return b;
      var c = a.substring(0, a.indexOf("/_/service_worker"));
      return (b += c ? "&path=" + encodeURIComponent(c) : "");
    },
    iu = function (a) {
      a = hu(a);
      var b;
      try {
        b = new URL(a);
      } catch (c) {
        return null;
      }
      return b.protocol !== "https:" ? null : b;
    },
    ju = function (a) {
      var b = Rl(Ml.Vj);
      return b && b[a];
    },
    hu = function (a) {
      var b = ej.K;
      if (!a)
        return (
          "https://www.googletagmanager.com/static/service_worker/" + b + "/"
        );
      if (!R(110)) return a;
      a.charAt(a.length - 1) !== "/" && (a += "/");
      return a + b;
    },
    ku = function (a, b, c, d, e) {
      var f = this;
      this.C = d;
      this.P = this.K = !1;
      this.aa = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.Ul(a);
      B.setTimeout(function () {
        f.initialize();
      }, 1e3);
      H(function () {
        f.Fm(a, b, e);
      });
    };
  h = ku.prototype;
  h.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.C.j(
          this.j,
          {
            state: this.getState(),
            Ze: this.initTime,
            qf: Math.round(qb()) - this.initTime,
          },
          void 0,
          a.commandType,
        ),
        c({ failureType: this.j }))
      : this.H.Nl(a, b, c);
  };
  h.getState = function () {
    return this.H.getState().state;
  };
  h.Fm = function (a, b, c) {
    var d = B.location.origin,
      e = this,
      f = sc();
    try {
      var g = f.contentDocument.createElement("iframe"),
        k = a.pathname,
        m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
        n = b ? gu(k) : "",
        p;
      R(112) && (p = { sandbox: "allow-same-origin allow-scripts" });
      sc(
        m +
          "sw_iframe.html?origin=" +
          encodeURIComponent(d) +
          n +
          (c ? "&e=1" : ""),
        void 0,
        p,
        void 0,
        g,
      );
      var q = function () {
        f.contentDocument.body.appendChild(g);
        g.addEventListener("load", function () {
          e.aa = g.contentWindow;
          f.contentWindow.addEventListener("message", function (r) {
            r.origin === a.origin && e.H.wm(r.data);
          });
          e.initialize();
        });
      };
      f.contentDocument.readyState === "complete"
        ? q()
        : f.contentWindow.addEventListener("load", function () {
            q();
          });
    } catch (r) {
      f.parentElement.removeChild(f),
        (this.j = 11),
        this.C.C(void 0, void 0, this.j, r.toString());
    }
  };
  h.Ul = function (a) {
    var b = this,
      c = du(
        function (d) {
          var e;
          (e = b.aa) == null || e.postMessage(d, a.origin);
        },
        {
          Tm: function () {
            b.K = !0;
            b.C.C(c.getState(), c.stats);
          },
          Sm: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.C.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data,
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.C.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        },
      );
    return c;
  };
  h.initialize = function () {
    this.P || this.H.init();
    this.P = !0;
  };
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
    var d = B.location.origin;
    if (!d || !lu()) return;
    hj() && ((a = "" + d + gj() + "/_"), R(110) && (a += "/service_worker"));
    var e = iu(a);
    if (e === null || ju(e.origin)) return;
    if (!hc()) {
      fu().C(void 0, void 0, 6);
      return;
    }
    var f = new ku(e, !!a, b || Math.round(qb()), fu(), c),
      g;
    a: {
      var k = Ml.Vj,
        m = {},
        n = Pl(k);
      if (!n) {
        n = Pl(k, !0);
        if (!n) {
          g = void 0;
          break a;
        }
        n.set(m);
      }
      g = n.get();
    }
    g[e.origin] = f;
  }
  var nu = function (a, b, c, d) {
    var e;
    if ((e = ju(a)) == null || !e.delegate) {
      var f = hc() ? 16 : 6;
      fu().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    ju(a).delegate(b, c, d);
  };
  function ou(a, b, c, d, e) {
    var f = iu();
    if (f === null) {
      d(hc() ? 16 : 6);
      return;
    }
    var g,
      k = (g = ju(f.origin)) == null ? void 0 : g.initTime,
      m = Math.round(qb()),
      n = {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: k ? m - k : void 0,
        },
      };
    e && (n.params.encryptionKeyString = e);
    nu(
      f.origin,
      n,
      function (p) {
        c(p);
      },
      function (p) {
        d(p.failureType);
      },
    );
  }
  function pu(a, b, c, d) {
    var e = iu(a);
    if (e === null) {
      d("_is_sw=f" + (hc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(qb()),
      k,
      m = (k = ju(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    nu(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          u = (r = ju(e.origin)) == null ? void 0 : r.getState();
        u !== void 0 && (q += "s" + u);
        d(n ? q + ("t" + n) : q + "te");
      },
    );
  }
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
  var Bu = function (a, b) {
      if (a) {
        var c = Au(a);
        Object.assign(b.j, c);
      }
    },
    Au = function (a) {
      var b = {};
      b[O.g.Vf] = a.architecture;
      b[O.g.Wf] = a.bitness;
      a.fullVersionList &&
        (b[O.g.Xf] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[O.g.Yf] = a.mobile ? "1" : "0";
      b[O.g.Zf] = a.model;
      b[O.g.cg] = a.platform;
      b[O.g.dg] = a.platformVersion;
      b[O.g.eg] = a.wow64 ? "1" : "0";
      return b;
    },
    Du = function (a) {
      var b = Cu.yn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = wu();
      if (d) c(d);
      else {
        var e = xu();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = B.setTimeout(function () {
            c.af || ((c.af = !0), V(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.af || ((c.af = !0), V(104), B.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.af || ((c.af = !0), V(105), B.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Fu = function () {
      if (yu(B) && ((Eu = qb()), !xu())) {
        var a = zu();
        a &&
          (a.then(function () {
            V(95);
          }),
          a.catch(function () {
            V(96);
          }));
      }
    },
    Eu;
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
  var Mu = function () {
      return [O.g.O, O.g.N];
    },
    Ou = function (a) {
      R(21) &&
      a.eventName === O.g.ba &&
      Nu(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? As(a.target, a.m)
        : Nu(a, "call_conversion") && (As(a.target, a.m), (a.isAborted = !0));
    },
    Qu = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Pu(a);
            break;
          case "user_data_lead":
            b = 98;
            Pu(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && V(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Ru = function (a) {
      if (!a.metadata.consent_updated && R(27) && Nu(a, ["conversion"])) {
        var b = Lr();
        Kr(b) && ((a.j[O.g.md] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Su = function (a) {
      Nu(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.j[O.g.Hj] = !0);
    },
    Tu = function (a) {
      var b = X(Mu());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.j[O.g.Yb] = !0);
      }
    },
    Uu = function (a) {
      if (Nu(a, ["conversion"])) {
        var b = Ms(a.metadata.cookie_options);
        if (b && !a.j[O.g.Ca]) {
          var c = kp(a.j[O.g.ub]);
          a.j[O.g.Ca] = c;
        }
        b && ((a.j[O.g.zb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Vu = function (a) {
      if (Nu(a, ["conversion", "user_data_web"])) {
        var b;
        if (
          !(R(58) || R(59) || R(60) || R(61) || R(62) || R(63) || R(64)) ||
          (Nu(a, ["user_data_web"]) &&
            !a.metadata.speculative_ecw_stitching_ping)
        )
          b = !1;
        else {
          var c = a.metadata.user_data;
          b = !c || Object.keys(c).length > 0 ? !1 : !0;
        }
        if (b) {
          a.metadata.fake_user_data = {
            email: "test@example.com",
            lo: "+1234567890",
            co: "Fake",
            io: "Name",
            fo: {
              oo: "123 Fake St",
              city: "Non-Applicable",
              state: "Somewhere",
              country: "US",
              mo: "12345",
            },
          };
          var d = Nu(a, ["user_data_web"]);
          R(58)
            ? (a.metadata.split_experiment_arm = 1)
            : R(59)
              ? (a.metadata.split_experiment_arm = 2)
              : R(60)
                ? ((a.metadata.split_experiment_arm = 3), d && Pu(a))
                : R(61)
                  ? ((a.metadata.split_experiment_arm = 4), d && Pu(a))
                  : R(62)
                    ? ((a.metadata.split_experiment_arm = 5), d && Pu(a))
                    : R(63)
                      ? ((a.metadata.split_experiment_arm = 6), d && Pu(a))
                      : R(64) &&
                        ((a.metadata.split_experiment_arm = 7), d && Pu(a));
        } else a.metadata.speculative_ecw_stitching_ping && (a.isAborted = !0);
      }
    },
    Wu = function (a) {
      R(58) ||
        R(59) ||
        R(60) ||
        R(61) ||
        R(62) ||
        hj() ||
        Ti ||
        Nj(a.m) ||
        (R(109) && mu(void 0, Math.round(qb()), R(108)));
    },
    Xu = function (a) {
      if (
        Nu(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        X(O.g.O)
      ) {
        var b = !R(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          Up(c, a.metadata.hit_type === "conversion" && a.eventName !== O.g.Ya);
          X(O.g.N) && (a.j[O.g.Lb] = Sp[Vp(c.prefix)]);
        }
      }
    },
    Zu = function (a) {
      Nu(a, ["conversion", "user_data_lead", "user_data_web"]) && Yu(a);
    },
    $u = function (a) {
      Nu(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !X(Mu()));
    },
    av = function (a) {
      Nu(a, ["conversion"]) && Gp(!1)._up === "1" && (a.j[O.g.oe] = !0);
    },
    bv = function (a) {
      if (Nu(a, ["conversion", "remarketing"])) {
        var b = as();
        b !== void 0 && (a.j[O.g.wd] = b || "error");
        var c = wo();
        c && (a.j[O.g.ic] = c);
        var d = vo();
        d && (a.j[O.g.mc] = d);
      }
    },
    cv = function (a) {
      if (Nu(a, ["conversion", "remarketing"]) && B.__gsaExp && B.__gsaExp.id) {
        var b = B.__gsaExp.id;
        if (bb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.j[O.g.Zg] = c);
          } catch (d) {}
      }
    },
    dv = function (a) {
      Js(a);
    },
    ev = function (a) {
      R(43) &&
        Nu(a, "conversion") &&
        (a.copyToHitData(O.g.Hg),
        a.copyToHitData(O.g.Ig),
        a.copyToHitData(O.g.Gg));
    },
    fv = function (a) {
      Nu(a, "conversion") &&
        (a.copyToHitData(O.g.nd),
        a.copyToHitData(O.g.ae),
        a.copyToHitData(O.g.ud),
        a.copyToHitData(O.g.he),
        a.copyToHitData(O.g.Bc),
        a.copyToHitData(O.g.jd));
    },
    gv = function (a) {
      if (
        Nu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Nu(a, ["conversion", "remarketing"])) {
          var c = W(b, O.g.Qb);
          if (c === !0 || c === !1) a.j[O.g.Qb] = c;
        }
        Co(b)
          ? (a.j[O.g.Tb] = !1)
          : ((a.j[O.g.Tb] = !0), Nu(a, "remarketing") && (a.isAborted = !0));
      }
    },
    hv = function (a) {
      if (Nu(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== O.g.Ma) ||
          (a.copyToHitData(O.g.da),
          b &&
            (a.copyToHitData(O.g.Zd),
            a.copyToHitData(O.g.Xd),
            a.copyToHitData(O.g.Yd),
            a.copyToHitData(O.g.Wd),
            (a.j[O.g.Eg] = a.eventName),
            R(94) &&
              (a.copyToHitData(O.g.Of),
              a.copyToHitData(O.g.Mf),
              a.copyToHitData(O.g.Nf))));
      }
    },
    iv = function (a) {
      var b = R(7),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = sm(c, O.g.fa);
        d = Ab(Uc(g) ? g : {});
      }
      var k = sm(c, O.g.fa, 1),
        m = sm(c, O.g.fa, 2);
      e = Ab(Uc(k) ? k : {}, ".");
      f = Ab(Uc(m) ? m : {}, ".");
      b || (a.j[O.g.pe] = d);
      a.j[O.g.hb] = e;
      a.j[O.g.fb] = f;
    },
    jv = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c === -1 ? b : b.substring(0, c);
      }
      return "";
    },
    kv = function (a) {
      if (Nu(a, "conversion") && X(O.g.O) && (a.j[O.g.rb] || a.j[O.g.Ec])) {
        var b = a.j[O.g.ub],
          c = Vc(a.metadata.cookie_options, null),
          d = Hq(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.j[O.g.rb]) {
          var e = $r(b, c, !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.j[O.g.rh] = e);
        }
        if (a.j[O.g.Ec]) {
          var f = Sr(b, c).hm;
          f && (a.j[O.g.Ug] = f);
        }
      }
    },
    lv = function (a) {
      if (a.eventName === O.g.Ya && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Nu(a, "conversion")) {
          var b = W(a.m, O.g.Mb);
          if (typeof b !== "function") return;
          var c = String(W(a.m, O.g.xb)),
            d = a.j[c],
            e = W(a.m, c);
          c === O.g.Za || c === O.g.Lb
            ? js(
                { Mk: c, callback: b, rk: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Gr,
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    mv = function (a) {
      if (
        !Qt(a, "hasPreAutoPiiCcdRule", !1) &&
        Nu(a, "conversion") &&
        X(O.g.O)
      ) {
        var b = (W(a.m, O.g.fe) || {})[String(a.j[O.g.ub])],
          c = a.j[O.g.ed],
          d;
        if (!(d = qs(b)))
          if (vl())
            if (At) d = !0;
            else {
              var e = Ss("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = qb(),
            g = rt({ Hd: !0, Id: !0, sg: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + dt(n) + "*" + n.type);
            }
            a.j[O.g.oh] = k.join("~");
            var p = g.ii;
            p && ((a.j[O.g.ph] = p.querySelector), (a.j[O.g.nh] = dt(p)));
            a.j[O.g.mh] = String(qb() - f);
            a.j[O.g.qh] = g.status;
          }
        }
      }
    },
    nv = function (a) {
      if (
        a.eventName === O.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Nu(a, "conversion") && (a.metadata.speculative = !0),
        !Nu(a, "remarketing") ||
          (W(a.m, O.g.bc) !== !1 && W(a.m, O.g.Oa) !== !1) ||
          (a.metadata.speculative = !0),
        Nu(a, "landing_page"))
      ) {
        var b = W(a.m, O.g.xa) || {},
          c = W(a.m, O.g.cb),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            Bd: d,
            Kd: b,
            Pd: c,
            qa: a.metadata.source_canonical_id,
            m: a.m,
            Md: e,
            Lk: W(a.m, O.g.Da),
          },
          g = a.metadata.cookie_options;
        fs(f, g);
        As(a.target, a.m);
        us({
          Gh: !1,
          Md: e,
          targetId: a.target.id,
          m: a.m,
          rc: d ? g : void 0,
          ng: d,
          ik: a.j[O.g.pe],
          Qh: a.j[O.g.hb],
          Kh: a.j[O.g.fb],
          Sh: a.j[O.g.Nb],
        });
        a.isAborted = !0;
      }
    },
    ov = function (a) {
      Nu(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.j[O.g.Cc] = a.eventName)
          : (a.j[O.g.Cc] = a.eventName),
        ib(a.m.j, function (b, c) {
          Dh[b.split(".")[0]] || (a.j[b] = c);
        }));
    },
    pv = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Nu(a, ["conversion", "user_data_web"]),
        c = !Qt(a, "ccd_add_1p_data", !1) && Nu(a, "user_data_lead");
      if ((b || c) && X(O.g.O)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = W(e, O.g.Ha);
        if (d || a.metadata.speculative_ecw_stitching_ping) {
          var k = (W(e, O.g.fe) || {})[String(a.j[O.g.ub])];
          if (W(e, O.g.Vd) === !0 || k) {
            var m;
            var n;
            k ? (n = vj(k, g)) : (n = B.enhanced_conversion_data) && V(154);
            var p = (k || {}).enhanced_conversions_mode,
              q;
            if (n) {
              if (p === "manual")
                switch (n._tag_mode) {
                  case "CODE":
                    q = "c";
                    break;
                  case "AUTO":
                    q = "a";
                    break;
                  case "MANUAL":
                    q = "m";
                    break;
                  default:
                    q = "c";
                }
              else q = p === "automatic" ? (qs(k) ? "a" : "m") : "c";
              m = { Z: n, Kk: q };
            } else m = { Z: n, Kk: void 0 };
            var r = m,
              u = r.Kk;
            f = r.Z;
            a.j[O.g.vd] = u;
          }
        } else if (a.m.isGtmEvent) {
          Pu(a);
          a.metadata.user_data = g;
          a.j[O.g.vd] = rs(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    qv = function (a) {
      if (Qt(a, "ccd_add_1p_data", !1) && X(Mu())) {
        var b = a.m.C[O.g.ue];
        if (wj(b)) {
          var c = W(a.m, O.g.Ha);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Uc(c) && (a.metadata.user_data_from_code = c),
              Uc(b.selectors) &&
                (a.metadata.user_data_from_manual = uj(b.selectors)));
        }
      }
    },
    rv = function (a) {
      a.metadata.conversion_linker_enabled = W(a.m, O.g.wa) !== !1;
      a.metadata.cookie_options = bs(a);
      a.metadata.redact_ads_data =
        W(a.m, O.g.ia) != null && W(a.m, O.g.ia) !== !1;
      a.metadata.allow_ad_personalization = Co(a.m);
    },
    sv = function (a) {
      if (Nu(a, ["conversion", "remarketing"]) && R(31)) {
        var b = function (c) {
          return R(33) ? (Va("fdr", c), !0) : !1;
        };
        if (X(O.g.O) || b(0))
          if (X(O.g.N) || b(1))
            if (W(a.m, O.g.Fa) !== !1 || b(2))
              if (Co(a.m) || b(3))
                if (W(a.m, O.g.bc) !== !1 || b(4))
                  if (
                    (R(34)
                      ? a.eventName === O.g.ba
                        ? W(a.m, O.g.Oa)
                        : void 0
                      : W(a.m, O.g.Oa)) !== !1 ||
                    b(5)
                  )
                    if (Hu() || b(6))
                      R(33) && Xa()
                        ? ((a.j[O.g.ij] = Wa("fdr")), delete Ua.fdr)
                        : ((a.j[O.g.Pg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    tv = function (a) {
      Nu(a, ["conversion"]) &&
        X(O.g.N) &&
        (B._gtmpcm === !0 || Ns()
          ? (a.j[O.g.fc] = "2")
          : R(35) && Gu("attribution-reporting") && (a.j[O.g.fc] = "1"));
    },
    uv = function (a) {
      if (!yu(B)) V(87);
      else if (Eu !== void 0) {
        V(85);
        var b = wu();
        b ? Bu(b, a) : V(86);
      }
    },
    vv = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (Nu(a, b) && X(O.g.N)) {
        a.copyToHitData(O.g.Da);
        var c = Rl(Ml.yh);
        if (c === void 0) Ql(Ml.zh, !0);
        else {
          var d = Rl(Ml.Ee);
          a.j[O.g.Sf] = d + "." + c;
        }
      }
    },
    wv = function (a) {
      Nu(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(O.g.Ca),
        a.copyToHitData(O.g.oa),
        a.copyToHitData(O.g.Ba));
    },
    xv = function (a) {
      if (!a.metadata.consent_updated && Nu(a, ["conversion", "remarketing"])) {
        var b = Pn(!1);
        a.j[O.g.Nb] = b;
        var c = W(a.m, O.g.ya);
        c || (c = b === 1 ? B.top.location.href : B.location.href);
        a.j[O.g.ya] = jv(c);
        a.copyToHitData(O.g.Ga, E.referrer);
        a.j[O.g.ib] = ds();
        a.copyToHitData(O.g.Ta);
        var d = Ts();
        a.j[O.g.Rb] = d.width + "x" + d.height;
        var e = Rn(),
          f = Lu(e);
        f.url && c !== f.url && (a.j[O.g.Tf] = jv(f.url));
      }
    },
    yv = function (a) {
      Nu(a, ["conversion", "remarketing"]);
    },
    Av = function (a) {
      if (
        Nu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.j[O.g.ub],
          c = W(a.m, O.g.Ef) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Pu(a);
            zv() && (a.metadata.is_gcp_conversion = !0);
            (zv() ? 0 : R(133)) &&
              (a.metadata.is_fallback_aw_conversion_ping_allowed = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c &&
              b &&
              (R(60) || R(61) || R(62) || R(63) || R(64)
                ? (a.metadata.speculative_ecw_stitching_ping = !0)
                : (a.isAborted = !0));
            break;
          case "remarketing":
            (!c && b) || Pu(a);
        }
        Nu(a, ["conversion", "remarketing"]) &&
          (a.j[O.g.Gj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    zv = function () {
      return (
        gc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
        mc("Edg/") ||
        mc("EdgA/") ||
        mc("EdgiOS/")
      );
    },
    Bv = function (a) {
      var b = a.target.ids[am[1]];
      if (b) {
        a.j[O.g.ed] = b;
        var c = a.target.ids[am[2]];
        c && (a.j[O.g.ub] = c);
      } else a.isAborted = !0;
    },
    Pu = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Nu = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    };
  var Yu = function (a) {
    R(82) && Nu(a, ["conversion"]) && (a.j[O.g.yj] = Gp(!1)._gs);
    if (R(18)) {
      var b = X(O.g.O) && X(O.g.N),
        c = a.metadata.redact_ads_data && !b;
      a.j[O.g.Wi] = Os("gclsrc");
      a.j[O.g.Ti] = Os("gad_source");
      var d = Os("gbraid");
      d && (a.j[O.g.Ui] = c ? "0" : d);
      var e = Os("gclid");
      e && (a.j[O.g.Vi] = b ? e : "0");
      var f = Os("dclid");
      f && (a.j[O.g.Si] = b ? f : "0");
    }
    if (X(O.g.O) && a.metadata.conversion_linker_enabled) {
      var g = a.metadata.cookie_options,
        k = Hq(g.prefix);
      k === "_gcl" && (k = "");
      var m = Ur(k);
      a.j[O.g.yf] = m.Nh;
      a.j[O.g.Af] = m.Ph;
      R(115) && (a.j[O.g.zf] = m.Oh);
      if (Zr(k)) {
        var n = Yr(k);
        n && (a.j[O.g.rb] = n);
        if (!k) {
          var p = a.j[O.g.ub];
          g = Vc(g, null);
          g.prefix = k;
          var q = Sr(p, g, !0).gm;
          q && (a.j[O.g.Ec] = q);
        }
      } else {
        var r = "";
        if ((R(92) || R(101)) && a.metadata.hit_type === "conversion") {
          var u = Xr(k);
          u.W && (r = u.W);
          u.lk && (a.j[O.g.Rd] = u.lk);
          u.mk && (a.j[O.g.Sd] = u.mk);
        } else r = Wr(k);
        r && (a.j[O.g.Za] = r);
        if (!k) {
          var v = Rr(Bq(Aq()) ? rq() : {}, Pr);
          v && (a.j[O.g.me] = v);
        }
      }
    }
  };
  var Dv = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      ib(a.j, function (f, g) {
        var k = Cv[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== O.g.Td && f !== O.g.be && f !== O.g.Bf && f !== O.g.Dg) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", Qo({ qa: a.metadata.source_canonical_id }));
      Do() && d("gcs", Eo());
      d("gcd", Io(a.m));
      Lo() && d("dma_cps", Jo());
      d("dma", Ko());
      Zn(po()) && d("tcfd", Mo());
      fj() && d("tag_exp", fj());
      if (a.metadata.add_tag_timing) {
        d("tft", qb());
        var e = Hc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      R(21) && d("apve", "1");
      R(22) && d("apvf", Fc() ? (R(23) ? "f" : "sb") : "nf");
      b(c);
    },
    Ev = function (a) {
      Dv(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          ib(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            Oj(
              X([O.g.O, O.g.N])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0,
            ) +
            "/ccm/collect?" +
            c.join("&");
          R(22) && R(23) && Fc() ? Ec(d, void 0, { noFallback: !0 }) : Bc(d);
          if (bb(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    Fv = {},
    Cv =
      ((Fv[O.g.Yb] = "gcu"),
      (Fv[O.g.rb] = "gclgb"),
      (Fv[O.g.Za] = "gclaw"),
      (Fv[O.g.Qi] = "gad_source"),
      (Fv[O.g.Ri] = "gad_source_src"),
      (Fv[O.g.Td] = "gclid"),
      (Fv[O.g.Xi] = "gclsrc"),
      (Fv[O.g.Dg] = "gbraid"),
      (Fv[O.g.Bf] = "wbraid"),
      (Fv[O.g.Lb] = "auid"),
      (Fv[O.g.Zi] = "rnd"),
      (Fv[O.g.cj] = "ncl"),
      (Fv[O.g.Jg] = "gcldc"),
      (Fv[O.g.be] = "dclid"),
      (Fv[O.g.fb] = "edid"),
      (Fv[O.g.Cc] = "en"),
      (Fv[O.g.ic] = "gdpr"),
      (Fv[O.g.hb] = "gdid"),
      (Fv[O.g.Fc] = "_ng"),
      (Fv[O.g.pj] = "gtm_up"),
      (Fv[O.g.Nb] = "frm"),
      (Fv[O.g.md] = "lps"),
      (Fv[O.g.pe] = "did"),
      (Fv[O.g.qj] = "navt"),
      (Fv[O.g.ya] = "dl"),
      (Fv[O.g.Ga] = "dr"),
      (Fv[O.g.ib] = "dt"),
      (Fv[O.g.vj] = "scrsrc"),
      (Fv[O.g.Sf] = "ga_uid"),
      (Fv[O.g.mc] = "gdpr_consent"),
      (Fv[O.g.Da] = "uid"),
      (Fv[O.g.wd] = "us_privacy"),
      (Fv[O.g.Tb] = "npa"),
      Fv);
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
  var Bw = function () {
      var a = !1;
      if (jc) {
        var b = Aj(Gj(jc), "host");
        b && (a = b.match(/^(www\.)?googletagmanager\.com$/) !== null);
      }
      return a;
    },
    Cw = function (a) {
      if (a !== void 0) return Math.round(a / 10) * 10;
    },
    Dw = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Ew = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Lh(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e),
          );
        }
      }
      return b;
    },
    Lh = function (a) {
      a.item_id != null &&
        (a.id != null ? (V(138), a.id !== a.item_id && V(148)) : V(153));
      return R(17) ? Mh(a) : a.id;
    },
    Gw = function (a, b) {
      var c = Fw(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Fw = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      ib(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Hw(d[k]);
            m !== void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Hw(d);
        e = f;
        var n = Hw(c);
        n && e !== void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Hw = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Iw = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = cg[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing" && e !== "ga_conversion") ||
        d("random", a.metadata.event_start_timestamp_ms);
      ib(b, d);
      return c.join("&");
    },
    Jw = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.j[O.g.ed],
        e = X([O.g.O, O.g.N]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = Oo() ? 2 : 3,
        p = 0,
        q = void 0,
        r = function (A) {
          f.push(A);
          A.ma && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var u = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (q = 8))
              : ((g = "https://www.googleadservices.com"), (q = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 6));
          a.metadata.is_gcp_conversion &&
            (u = "&gcp=1&sscte=1&ct_cookie_present=1");
          var v = {
            Ea: "" + Oj(g, !0) + m + "/" + d + "/?" + Iw(a, b) + u,
            format: n,
            ma: !0,
            endpoint: q,
          };
          X(O.g.N) && (v.attributes = { attributionsrc: "" });
          e &&
            a.metadata.is_fallback_aw_conversion_ping_allowed &&
            ((v.Pe =
              "" +
              Oj("https://www.google.com", !0) +
              "/pagead/1p-conversion/" +
              d +
              "/?" +
              Iw(a, b) +
              "&gcp=1&sscte=1&ct_cookie_present=1"),
            (v.Oe = 8));
          r(v);
          if (a.metadata.send_ccm_parallel_ping) {
            q = a.metadata.is_gcp_conversion ? 23 : 22;
            var t;
            b.eme && !R(9) ? ((t = {}), tb(t, b), (t.eme = "*")) : (t = b);
            r({
              Ea: "" + Oj(g, !0) + "/ccm/conversion/" + d + "/?" + Iw(a, t) + u,
              format: 2,
              ma: !0,
              endpoint: q,
            });
          }
          a.metadata.is_gcp_conversion &&
            e &&
            ((u = "&gcp=1&ct_cookie_present=1"),
            r({
              Ea:
                "" +
                Oj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Iw(a, b) +
                u,
              format: n,
              ma: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var w = b.data || "",
            x = Dw(Ew(a.j[O.g.da]));
          if (x.length) {
            for (var y = 0; y < x.length; y++)
              (b.data = Gw(w, x[y])),
                r({
                  Ea:
                    "" +
                    Oj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Iw(a, b),
                  format: n,
                  ma: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  r({
                    Ea: "" + Ku() + "/td/rul/" + d + "?" + Iw(a, b),
                    format: 4,
                    ma: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            r({
              Ea:
                "" +
                Oj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Iw(a, b),
              format: n,
              ma: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          r({
            Ea:
              "" +
              Oj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Iw(a, b),
            format: 1,
            ma: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          r({
            Ea:
              "" +
              Oj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Iw(a, b),
            format: 1,
            ma: !0,
            endpoint: 21,
          });
          break;
        case "ga_conversion":
          e
            ? ((g = "https://www.google.com"), (q = 54))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 55)),
            r({
              Ea: "" + Oj(g, !0) + "/measurement/conversion/?" + Iw(a, b),
              format: 5,
              ma: !0,
              endpoint: q,
            });
      }
      f.length > 1 && bb(a.m.onSuccess) && (k = Bb(a.m.onSuccess, p));
      Oo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (R(32) && c === "conversion" && (b.ct_cookie_present = 0),
        r({
          Ea: "" + Ku() + "/td/rul/" + d + "?" + Iw(a, b),
          format: 4,
          ma: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, Dm: f };
    },
    Kw = function (a, b, c, d, e, f, g, k) {
      rw(c.m.eventId, c.eventName);
      var m = function () {
        f && f();
      };
      switch (b) {
        case 1:
          Bc(a);
          f && f();
          break;
        case 2:
          uc(a, m, g, k);
          break;
        case 3:
          var n = !1;
          try {
            n = Aw(a, m, g, k);
          } catch (r) {
            n = !1;
          }
          n || Kw(a, 2, c, d, e, m, g, k);
          break;
        case 4:
          var p = "AW-" + c.j[O.g.ed],
            q = c.j[O.g.ub];
          q && (p = p + "/" + q);
          Iu(a, p);
          break;
        case 5:
          Ec(a, void 0, void 0, f, g);
      }
    },
    Lw = function (a) {
      switch (a) {
        case "conversion":
          return R(65);
        case "user_data_lead":
          return R(66);
        case "user_data_web":
          return R(67);
        default:
          return !1;
      }
    },
    Mw = function (a) {
      if (!a.j[O.g.Rd] || !a.j[O.g.Sd]) return "";
      var b = a.j[O.g.Rd].split("."),
        c = a.j[O.g.Sd].split(".");
      if (!b.length || !c.length || b.length !== c.length) return "";
      for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
      return d.join(".");
    },
    Pw = function (a, b, c) {
      function d(k, m) {
        c._ece = Nw(f, k, m === void 0 ? !1 : m);
        a === "user_data_web" && (c.em = "tv.1~em.e0");
      }
      function e(k, m) {
        m = m === void 0 ? !1 : m;
        if (k)
          return k.then(function (n) {
            d(n, m);
          });
        d();
      }
      var f = b.metadata.split_experiment_arm,
        g = b.metadata.fake_user_data;
      if (f && g)
        if (f === 1) a === "conversion" && d();
        else if (f === 2) {
          if (a === "conversion") return e(Ow(0, g));
        } else if (f === 3)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Ow(1, g));
          }
        else if (f === 4)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Ow(2, g), !0);
          }
        else
          f === 5
            ? a === "conversion"
              ? d()
              : a === "user_data_web" && d()
            : (f !== 6 && f !== 7) || a !== "conversion" || d();
    },
    Ow = function (a, b) {
      if (a === 0) return ni(b, !1);
      if (a === 1) return ni(b, !0, !0);
      if (a === 2)
        return li(
          {
            Gb: "tv.1~em.test@example.com~fn.Fake~ln.Name~co.US~sa.123 Fake St~ct.Non-Applicable~pn.+1234567890~pc.12345~rg.ca",
            Ld: 9,
            mg: !1,
          },
          !0,
        );
    },
    Qw = function (a, b) {
      var c, d;
      if (a === "user_data_web") {
        var e = b.metadata.split_experiment_arm;
        if (e === 6 || e === 7) {
          var f = zi(b.metadata.fake_user_data),
            g = {},
            k = ["tv.1"],
            m = 0;
          for (var n = l(f), p = n.next(); !p.done; p = n.next()) {
            var q = p.value;
            if (q.value !== "") {
              var r,
                u = void 0,
                v = q.name,
                t = q.value,
                w = ei[v];
              if (w) {
                var x = (u = q.index) != null ? u : "",
                  y = w + "__" + m;
                e === 7 || !fi(v) || gi(t)
                  ? (r = encodeURIComponent(encodeURIComponent(t)))
                  : ((r = "${userData." + y + "|sha256}"), (g[y] = t), m++);
                k.push("" + w + x + "." + r);
              }
            }
          }
          var A = k.join("~");
          c = { userData: g };
          d = hi();
          var C = "tv.1~${" + A + "|encrypt}",
            D = [
              "&em=tv.1~em.e0&_ece=a." +
                e +
                ("~s." + (Bw() ? 1 : 0)) +
                ("&feme=" + C),
            ];
          return { Ck: !0, rf: c, Hk: D, sk: f, encryptionKeyString: d };
        }
      }
    },
    Nw = function (a, b, c) {
      function d(f, g) {
        e.push(f + "." + g);
      }
      c = c === void 0 ? !1 : c;
      var e = [];
      d("a", a);
      d("s", Bw() ? 1 : 0);
      b !== void 0 &&
        (b.Gb &&
          !c &&
          (d("fem", b.Gb.replace(/./g, "*")),
          b.time !== void 0 && d("ht", String(b.time))),
        b.za &&
          (b.za.Cd && d("feme", b.za.Cd.replace(/./g, "*")),
          d("est", b.za.time),
          d("es", b.za.status)));
      return e.join("~");
    },
    Sw = function (a) {
      if (a.metadata.hit_type === "page_view") Ev(a);
      else {
        var b = R(19) ? sb(a.m.onFailure) : void 0;
        Rw(a, function (c, d) {
          R(103) && delete c.em;
          for (
            var e = Jw(a, c), f = e.onSuccess, g = e.Dm, k = {}, m = 0;
            m < g.length;
            k = {
              Pe: void 0,
              Oe: void 0,
              ma: void 0,
              Je: void 0,
              Ea: void 0,
              kg: void 0,
              jg: void 0,
            },
              m++
          ) {
            var n = g[m];
            k.Ea = n.Ea;
            k.kg = n.format;
            k.ma = n.ma;
            k.Je = n.attributes;
            k.jg = n.endpoint;
            k.Pe = n.Pe;
            k.Oe = n.Oe;
            var p = void 0;
            if ((p = d) != null && p.Ck) {
              var q = (function (x) {
                  return function (y) {
                    var A = a.metadata.split_experiment_arm;
                    if (A === 6 || A === 7) {
                      var C = function (G) {
                          var J = Nw(A, G, A === 7),
                            F = x.Ea;
                          if (y) {
                            var T = Qo({
                              qa: a.metadata.source_canonical_id,
                              ug: y,
                            });
                            F = F.replace(c.gtm, T);
                          }
                          Kw(
                            F + "&em=tv.1~em.e0&_ece=" + encodeURIComponent(J),
                            x.kg,
                            a,
                            c,
                            x.jg,
                            x.ma ? f : void 0,
                            void 0,
                            x.Je,
                          );
                        },
                        D = Ow(A === 6 ? 1 : 2, a.metadata.fake_user_data);
                      D
                        ? D.then(function (G) {
                            C(G);
                          })
                        : C(void 0);
                    } else
                      Ci(d.sk, function (G) {
                        var J = pi(G),
                          F = x.Ea;
                        if (y) {
                          var T = Qo({
                            qa: a.metadata.source_canonical_id,
                            ug: y,
                          });
                          F = F.replace(c.gtm, T);
                        }
                        Kw(
                          F + "&em=" + encodeURIComponent(J.Gb),
                          x.kg,
                          a,
                          c,
                          x.jg,
                          x.ma ? f : void 0,
                          void 0,
                          x.Je,
                        );
                      });
                  };
                })(k),
                r = d,
                u = r.rf,
                v = r.encryptionKeyString,
                t = "" + k.Ea + r.Hk.join("");
              ou(
                t,
                u,
                (function (x) {
                  return function () {
                    x.ma && typeof f === "function" && f();
                  };
                })(k),
                q,
                v,
              );
            } else {
              var w = b;
              k.Pe &&
                k.Oe &&
                (w = (function (x) {
                  return function () {
                    Kw(
                      x.Pe,
                      5,
                      a,
                      c,
                      x.Oe,
                      x.ma ? f : void 0,
                      x.ma ? b : void 0,
                      x.Je,
                    );
                  };
                })(k));
              Kw(
                k.Ea,
                k.kg,
                a,
                c,
                k.jg,
                k.ma ? f : void 0,
                k.ma ? w : void 0,
                k.Je,
              );
            }
          }
        });
      }
    },
    Rw = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = void 0,
        g = [],
        k = a.metadata.event_start_timestamp_ms;
      c === "conversion" || c === "remarketing"
        ? ((d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1"))
        : c === "ga_conversion" &&
          ((d.cv = "11"),
          (d.tid = a.target.destinationId),
          (d.fst = k),
          (d.fmt = 6),
          (d.en = a.eventName));
      var m = kr(["aw", "dc"]);
      m != null && (d.gad_source = m);
      d.gtm = Qo({ qa: a.metadata.source_canonical_id });
      c !== "remarketing" && Do() && (d.gcs = Eo());
      d.gcd = Io(a.m);
      Lo() && (d.dma_cps = Jo());
      d.dma = Ko();
      Zn(po()) && (d.tcfd = Mo());
      fj() && (d.tag_exp = fj());
      a.j[O.g.Rb] && Hh(a.j[O.g.Rb], d);
      a.j[O.g.Ta] && Jh(a.j[O.g.Ta], d);
      var n = a.metadata.redact_click_ids,
        p = function (U, S) {
          var N = a.j[S];
          N && (d[U] = n ? tr(N) : N);
        };
      p("url", O.g.ya);
      p("ref", O.g.Ga);
      p("top", O.g.Tf);
      var q = Mw(a);
      q && (d.gclaw_src = q);
      ib(a.j, function (U, S) {
        if (Gh.hasOwnProperty(U)) {
          var N = Gh[U];
          N && (d[N] = S);
        } else e[U] = S;
      });
      Vl(d, a.j[O.g.xd]);
      var r = a.j[O.g.nd];
      r !== void 0 && r !== "" && (d.vdnc = String(r));
      var u = a.j[O.g.jd];
      u !== void 0 && (d.shf = u);
      var v = a.j[O.g.Bc];
      v !== void 0 && (d.delc = v);
      if (R(27) && a.metadata.add_tag_timing) {
        d.tft = qb();
        var t = Hc();
        t !== void 0 && (d.tfd = Math.round(t));
      }
      c !== "ga_conversion" && (d.data = Fw(e));
      var w = a.j[O.g.da];
      !w ||
        (c !== "conversion" && c !== "ga_conversion") ||
        ((d.iedeld = Ph(w)), (d.item = Kh(w)));
      if (
        (c === "conversion" ||
          c === "user_data_lead" ||
          c === "user_data_web") &&
        a.metadata.user_data
      )
        if (!X(O.g.N) || (R(16) && !X(O.g.O))) d.ec_mode = void 0;
        else {
          var x = function () {
            if (c === "user_data_web") {
              var U;
              var S = a.metadata.cookie_options;
              S = S || {};
              var N;
              if (X(Ls)) {
                (N = Ms(S)) || (N = kp());
                var la = S,
                  ia = Vp(la.prefix);
                Xp(la, N);
                delete Sp[ia];
                delete Tp[ia];
                Wp(ia, la.path, la.domain);
                U = Ms(S);
              } else U = void 0;
              d.ecsid = U;
            }
          };
          if (a.metadata.split_experiment_arm && a.metadata.fake_user_data) {
            var y = Pw(c, a, d);
            f = Qw(c, a);
            y && g.push(y);
            d.gtm = Qo({ qa: a.metadata.source_canonical_id, ug: 3 });
          } else if (c !== "conversion" && R(109) && !R(103)) {
            d.gtm = Qo({ qa: a.metadata.source_canonical_id, ug: 3 });
            var A = zi(a.metadata.user_data),
              C = ii(A),
              D = C.Jk,
              G = C.Yl,
              J = C.encryptionKeyString,
              F = ["&em=" + C.Gk];
            f = { Ck: !0, rf: C.rf, Hk: F, sk: A };
            R(108) && (F.push("&eme=" + G), (f.encryptionKeyString = J));
            D > 0 && x();
          } else {
            var T,
              M = a.metadata.user_data,
              aa = Lw(c);
            if ((T = R(88) || R(89) ? ni(M, R(89) && aa) : oi(M))) {
              var da = T.then(function (U) {
                var S = U.Gb;
                R(103) || (d.em = S);
                if ((R(56) || R(89)) && U.Ld > 0 && U.time !== void 0) {
                  var N = Cw(U.time);
                  d._ht =
                    "t." + (N === void 0 ? "" : N) + ("~l." + Cw(S.length));
                }
                U.Ld > 0 && x();
                if (aa) {
                }
              });
              g.push(da);
            }
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (U) {}
      b(d, f);
    };
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
  var qx = function () {
    this.H = 0;
    this.j = {};
  };
  qx.prototype.addListener = function (a, b, c) {
    var d = ++this.H;
    this.j[a] = this.j[a] || {};
    this.j[a][String(d)] = { listener: b, Ib: c };
    return d;
  };
  qx.prototype.removeListener = function (a, b) {
    var c = this.j[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  qx.prototype.C = function (a, b) {
    var c = [];
    ib(this.j[a], function (d, e) {
      c.indexOf(e.listener) < 0 &&
        (e.Ib === void 0 || b.indexOf(e.Ib) >= 0) &&
        c.push(e.listener);
    });
    return c;
  };
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
  var jy = function (a, b) {
    if (!iy) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = iy.C(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = xx(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
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
  var ly = function () {
    iy || (iy = new qx());
    return iy;
  };
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
    r = jy(a, n.qc);
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
  function CA(a) {
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var b = I(a, this.D, 1).Ub();
    Yu(b);
  }
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
    K(
      this.getName(),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments,
    ),
      FA([
        function () {
          L(d, "listen_data_layer", a);
        },
      ]),
      (e = ly().addListener(a, I(b), c));
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
  var LA = function (a) {
      return typeof a === "string" ? a : String(bj());
    },
    OA = function (a, b) {
      MA(a, "init", !1) || (NA(a, "init", !0), b());
    },
    MA = function (a, b, c) {
      var d = PA(a);
      return rb(d, b, c);
    },
    QA = function (a, b, c, d) {
      var e = PA(a),
        f = rb(e, b, d);
      e[b] = c(f);
    },
    NA = function (a, b, c) {
      PA(a)[b] = c;
    },
    PA = function (a) {
      Li.hasOwnProperty("autoEventsSettings") || (Li.autoEventsSettings = {});
      var b = Li.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    RA = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Gc(a, "className"),
        "gtm.elementId": a.for || xc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Gc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Gc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
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
  function cC(a) {}
  cC.F = "callOnWindowLoad";
  function dC(a, b) {
    var c;
    return c;
  }
  dC.F = "internal.computeGtmParameter";
  function eC(a, b) {
    var c = this;
    K(
      this.getName(),
      ["callback:!Fn", "requiredConsentTypes:!List"],
      arguments,
    ),
      Hl(function () {
        a.invoke(c.D);
      }, I(b));
  }
  eC.F = "internal.consentScheduleFirstTry";
  function fC(a, b) {
    var c = this;
    K(
      this.getName(),
      ["callback:!Fn", "requiredConsentTypes:!List"],
      arguments,
    ),
      Gl(function (d) {
        a.invoke(c.D, hd(d));
      }, I(b));
  }
  fC.F = "internal.consentScheduleRetry";
  function gC(a) {
    var b;
    K(this.getName(), ["key:!string"], arguments);
    if (!Ol(a))
      throw Error(
        "copyFromCrossContainerData requires valid CrossContainerSchema key.",
      );
    var c = Rl(a);
    b = hd(c, this.D, 1);
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
    K(this.getName(), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
    var d = I(b) || {},
      e = I(a, this.D, 1).Ub(),
      f = e.m;
    d.omitEventContext && (f = Fm(new um(e.m.eventId, e.m.priorityId)));
    var g = new lC(e.target, e.eventName, f);
    d.omitHitData || Vc(e.j, g.j);
    d.omitMetadata ? (g.metadata = {}) : Vc(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = hd(Hs(g), this.D, 1);
    return c;
  }
  mC.F = "internal.copyPreHit";
  function nC(a, b) {
    var c = null;
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
    K(this.getName(), ["pattern:!string", "flags:?string"], arguments);
    try {
      var d = (b || "")
        .split("")
        .filter(function (e) {
          return "ig".indexOf(e) >= 0;
        })
        .join("");
      c = new ed(new RegExp(a, d));
    } catch (e) {}
    return c;
  }
  qC.F = "internal.createRegex";
  function rC() {
    var a = {};
    a = {
      COOKIE_DEPRECATION_LABEL: Ml.wf,
      SHARED_USER_ID: Ml.yh,
      SHARED_USER_ID_REQUESTED: Ml.zh,
      SHARED_USER_ID_SOURCE: Ml.Ee,
    };
    return a;
  }
  function sC(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    for (var b = a.ka(), c = l(b), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      e !== O.g.Jb && L(this, "access_consent", e, "write");
    }
    var f = JA(this),
      g = f.eventId,
      k = AB(f),
      m = ty("consent", "declare", I(a));
    xy(m, g, k);
  }
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
    L(this, "detect_user_provided_data", "auto");
    var c = I(a) || {},
      d = rt({
        Hd: !!c.includeSelector,
        Id: !!c.includeVisibility,
        Ne: c.excludeElementSelectors,
        Bb: c.fieldFilters,
        sg: !!c.selectMultipleElements,
      });
    b = new La();
    var e = new Yc();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(xC(f[g]));
    d.ii !== void 0 && b.set("preferredEmailElement", xC(d.ii));
    b.set("status", d.status);
    return b;
  }
  var xC = function (a) {
    var b = new La();
    b.set("userData", a.Z);
    b.set("tagName", a.tagName);
    a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
    a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
    if (R(30)) {
    } else
      switch (a.type) {
        case pt.vc:
          b.set("type", "email");
      }
    return b;
  };
  wC.F = "internal.detectUserProvidedData";
  function AC(a, b) {
    return b;
  }
  AC.F = "internal.enableAutoEventOnClick";
  var DC = function (a) {
      if (!BC) {
        var b = function () {
          var c = E.body;
          if (c)
            if (CC)
              new MutationObserver(function () {
                for (var e = 0; e < BC.length; e++) H(BC[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              vc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  H(function () {
                    d = !1;
                    for (var e = 0; e < BC.length; e++) H(BC[e]);
                  }));
              });
            }
        };
        BC = [];
        E.body ? b() : H(b);
      }
      BC.push(a);
    },
    CC = !!B.MutationObserver,
    BC;
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
  var oD = function (a, b) {
      if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Gc(b, "href");
      if (
        c.indexOf(":") !== -1 &&
        !nD.some(function (k) {
          return vb(c, k);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = Gc(b, "target");
      if ((e && e !== "_self" && e !== "_parent" && e !== "_top") || d === 0)
        return !1;
      if (d > 0) {
        var f = Dj(Gj(c)),
          g = Dj(Gj(B.location.href));
        return f !== g;
      }
      return !0;
    },
    pD = function (a, b) {
      for (
        var c = Aj(
            Gj(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Gc(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                "",
            ),
            "host",
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    qD = function () {
      function a(c) {
        var d = c.target;
        if (
          d &&
          c.which !== 3 &&
          !(c.j || (c.timeStamp && c.timeStamp === b))
        ) {
          b = c.timeStamp;
          d = Ac(d, ["a", "area"], 100);
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = MA("lcl", e ? "nv.mwt" : "mwt", 0),
            g;
          g = e ? MA("lcl", "nv.ids", []) : MA("lcl", "ids", []);
          for (var k = [], m = 0; m < g.length; m++) {
            var n = g[m],
              p = MA("lcl", "aff.map", {})[n];
            (p && !pD(p, d)) || k.push(n);
          }
          if (k.length) {
            var q = oD(c, d),
              r = RA(d, "gtm.linkClick", k);
            r["gtm.elementText"] = yc(d);
            r["gtm.willOpenInNewWindow"] = !q;
            if (q && !e && f && d.href) {
              var u = !!eb(String(Gc(d, "rel") || "").split(" "), function (x) {
                  return x.toLowerCase() === "noreferrer";
                }),
                v = B[(Gc(d, "target") || "_self").substring(1)],
                t = !0,
                w = zz(function () {
                  var x;
                  if ((x = t && v)) {
                    var y;
                    a: if (u) {
                      var A;
                      try {
                        A = new MouseEvent(c.type, { bubbles: !0 });
                      } catch (C) {
                        if (!E.createEvent) {
                          y = !1;
                          break a;
                        }
                        A = E.createEvent("MouseEvents");
                        A.initEvent(c.type, !0, !0);
                      }
                      A.j = !0;
                      c.target.dispatchEvent(A);
                      y = !0;
                    } else y = !1;
                    x = !y;
                  }
                  x && (v.location.href = Gc(d, "href"));
                }, f);
              if (xz(r, w, f)) t = !1;
              else
                return (
                  c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                );
            } else xz(r, function () {}, f || 2e3);
            return !0;
          }
        }
      }
      var b = 0;
      vc(E, "click", a, !1);
      vc(E, "auxclick", a, !1);
    };
  function rD(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = I(a);
    FA([
      function () {
        L(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = LA(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      (k > 0 && isFinite(k)) || (k = 2e3);
      var m = function (p) {
        return Math.max(k, p);
      };
      QA("lcl", "mwt", m, 0);
      f || QA("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    QA("lcl", "ids", n, []);
    f || QA("lcl", "nv.ids", n, []);
    g &&
      QA(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {},
      );
    MA("lcl", "init", !1) || (qD(), NA("lcl", "init", !0));
    return b;
  }
  rD.F = "internal.enableAutoEventOnLinkClick";
  var sD, tD;
  var uD = function (a) {
      return MA("sdl", a, {});
    },
    vD = function (a, b, c) {
      if (b) {
        var d = Array.isArray(a) ? a : [a];
        QA(
          "sdl",
          c,
          function (e) {
            for (var f = 0; f < d.length; f++) {
              var g = String(d[f]);
              e.hasOwnProperty(g) || (e[g] = []);
              e[g].push(b);
            }
            return e;
          },
          {},
        );
      }
    },
    yD = function () {
      function a() {
        wD();
        xD(a, !0);
      }
      return a;
    },
    zD = function () {
      function a() {
        f ? (e = B.setTimeout(a, c)) : ((e = 0), wD(), xD(b));
        f = !1;
      }
      function b() {
        d && sD();
        e ? (f = !0) : ((e = B.setTimeout(a, c)), NA("sdl", "pending", !0));
      }
      var c = 250,
        d = !1;
      E.scrollingElement && E.documentElement && ((c = 50), (d = !0));
      var e = 0,
        f = !1;
      return b;
    },
    xD = function (a, b) {
      MA("sdl", "init", !1) &&
        !AD() &&
        (b ? wc(B, "scrollend", a) : wc(B, "scroll", a),
        wc(B, "resize", a),
        NA("sdl", "init", !1));
    },
    wD = function () {
      var a = sD(),
        b = a.depthX,
        c = a.depthY,
        d = (b / tD.scrollWidth) * 100,
        e = (c / tD.scrollHeight) * 100;
      BD(b, "horiz.pix", "PIXELS", "horizontal");
      BD(d, "horiz.pct", "PERCENT", "horizontal");
      BD(c, "vert.pix", "PIXELS", "vertical");
      BD(e, "vert.pct", "PERCENT", "vertical");
      NA("sdl", "pending", !1);
    },
    BD = function (a, b, c, d) {
      var e = uD(b),
        f = {},
        g;
      for (g in e)
        if (((f = { Od: f.Od }), (f.Od = g), e.hasOwnProperty(f.Od))) {
          var k = Number(f.Od);
          if (!(a < k)) {
            var m = {};
            yz(
              ((m.event = "gtm.scrollDepth"),
              (m["gtm.scrollThreshold"] = k),
              (m["gtm.scrollUnits"] = c.toLowerCase()),
              (m["gtm.scrollDirection"] = d),
              (m["gtm.triggers"] = e[f.Od].join(",")),
              m),
            );
            QA(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.Od];
                  return p;
                };
              })(f),
              {},
            );
          }
        }
    },
    DD = function () {
      QA(
        "sdl",
        "scr",
        function (a) {
          a || (a = E.scrollingElement || (E.body && E.body.parentNode));
          return (tD = a);
        },
        !1,
      );
      QA(
        "sdl",
        "depth",
        function (a) {
          a || (a = CD());
          return (sD = a);
        },
        !1,
      );
    },
    CD = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Vs(),
          d = c.height;
        a = Math.max(tD.scrollLeft + c.width, a);
        b = Math.max(tD.scrollTop + d, b);
        return { depthX: a, depthY: b };
      };
    },
    AD = function () {
      return !!(
        Object.keys(uD("horiz.pix")).length ||
        Object.keys(uD("horiz.pct")).length ||
        Object.keys(uD("vert.pix")).length ||
        Object.keys(uD("vert.pct")).length
      );
    };
  function ED(a, b) {
    var c = this;
    K(this.getName(), ["options:!PixieMap", "triggerId:?*"], arguments);
    FA([
      function () {
        L(c, "detect_scroll_events");
      },
    ]);
    DD();
    if (!tD) return;
    b = LA(b);
    var d = I(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        vD(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        vD(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        vD(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        vD(d.verticalThresholds, b, "vert.pct");
    }
    MA("sdl", "init", !1)
      ? MA("sdl", "pending", !1) ||
        H(function () {
          wD();
        })
      : (NA("sdl", "init", !0),
        NA("sdl", "pending", !0),
        H(function () {
          wD();
          if (AD()) {
            var e = zD();
            "onscrollend" in B
              ? ((e = yD()), vc(B, "scrollend", e))
              : vc(B, "scroll", e);
            vc(B, "resize", e);
          } else NA("sdl", "init", !1);
        }));
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
  var HD = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((qb() - e) * g.playbackRate) / 1e3 : 0;
      e = qb();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.Jh,
          q = m ? Math.round(m) : k ? Math.round(n.Jh * k) : Math.round(n.hk),
          r =
            k !== void 0
              ? Math.round(k * 100)
              : p <= 0
                ? 0
                : Math.round((q / p) * 100),
          u = E.hidden ? !1 : Ws(c) >= 0.5;
        d();
        var v = void 0;
        b !== void 0 && (v = [b]);
        var t = RA(c, "gtm.video", v);
        t["gtm.videoProvider"] = "youtube";
        t["gtm.videoStatus"] = g;
        t["gtm.videoUrl"] = n.url;
        t["gtm.videoTitle"] = n.title;
        t["gtm.videoDuration"] = Math.round(p);
        t["gtm.videoCurrentTime"] = Math.round(q);
        t["gtm.videoElapsedTime"] = Math.round(f);
        t["gtm.videoPercent"] = r;
        t["gtm.videoVisible"] = u;
        return t;
      },
      Ak: function () {
        e = qb();
      },
      zd: function () {
        d();
      },
    };
  };
  var Zb = wa(["data-gtm-yt-inspected-"]),
    ID = ["www.youtube.com", "www.youtube-nocookie.com"],
    JD,
    KD = !1;
  var LD = function (a, b, c) {
      var d = a.map(function (g) {
        return { Ja: g, nf: g, jf: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { Ja: g * c, nf: void 0, jf: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, k) {
        return g.Ja - k.Ja;
      });
      return f;
    },
    MD = function (a) {
      a = a === void 0 ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) a[c] < 0 || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    ND = function (a) {
      a = a === void 0 ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        a[c] > 100 || a[c] < 0 || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    OD = function (a, b) {
      var c, d;
      function e() {
        u = HD(
          function () {
            return {
              url: w,
              title: x,
              Jh: t,
              hk: a.getCurrentTime(),
              playbackRate: y,
            };
          },
          b.Ib,
          a.getIframe(),
        );
        t = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(G) {
        switch (G) {
          case 1:
            t = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var J = a.getVideoData();
              x = J ? J.title : "";
            }
            y = a.getPlaybackRate();
            b.Dh ? yz(u.createEvent("start")) : u.zd();
            v = LD(b.ki, b.ji, a.getDuration());
            return g(G);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        C = pb().getTime();
        u.Ak();
        r();
        return k;
      }
      function k(G) {
        var J;
        switch (G) {
          case 0:
            return n(G);
          case 2:
            J = "pause";
          case 3:
            var F = a.getCurrentTime() - A;
            J =
              Math.abs(((pb().getTime() - C) / 1e3) * y - F) > 1
                ? "seek"
                : J || "buffering";
            a.getCurrentTime() && (b.Ch ? yz(u.createEvent(J)) : u.zd());
            q();
            return m;
          case -1:
            return e(G);
          default:
            return k;
        }
      }
      function m(G) {
        switch (G) {
          case 0:
            return n(G);
          case 1:
            return g(G);
          case -1:
            return e(G);
          default:
            return m;
        }
      }
      function n() {
        for (; d; ) {
          var G = c;
          B.clearTimeout(d);
          G();
        }
        b.Bh && yz(u.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (B.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (v.length && y !== 0) {
          var G = -1,
            J;
          do {
            J = v[0];
            if (J.Ja > a.getDuration()) return;
            G = (J.Ja - a.getCurrentTime()) / y;
            if (G < 0 && (v.shift(), v.length === 0)) return;
          } while (G < 0);
          c = function () {
            d = 0;
            c = p;
            v.length > 0 &&
              v[0].Ja === J.Ja &&
              (v.shift(), yz(u.createEvent("progress", J.jf, J.nf)));
            r();
          };
          d = B.setTimeout(c, G * 1e3);
        }
      }
      var u,
        v = [],
        t,
        w,
        x,
        y,
        A,
        C,
        D = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (G) {
          D = D(G);
        },
        onPlaybackRateChange: function (G) {
          A = a.getCurrentTime();
          C = pb().getTime();
          u.zd();
          y = G;
          q();
          r();
        },
      };
    },
    QD = function (a) {
      H(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            PD(d[f], a);
        }
        var c = E;
        b();
        DC(b);
      });
    },
    PD = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.Ib) &&
        (bc(a, "data-gtm-yt-inspected-" + b.Ib), RD(a, b.Re))
      ) {
        a.id || (a.id = SD());
        var c = B.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = OD(d, b),
          f = {},
          g;
        for (g in e)
          (f = { bf: f.bf }),
            (f.bf = g),
            e.hasOwnProperty(f.bf) &&
              d.addEventListener(
                f.bf,
                (function (k) {
                  return function (m) {
                    return e[k.bf](m.data);
                  };
                })(f),
              );
      }
    },
    RD = function (a, b) {
      var c = a.getAttribute("src");
      if (TD(c, "embed/")) {
        if (c.indexOf("enablejsapi=1") > 0) return !0;
        if (b) {
          var d;
          var e = c.indexOf("?") !== -1 ? "&" : "?";
          c.indexOf("origin=") > -1
            ? (d = c + e + "enablejsapi=1")
            : (JD ||
                ((JD = E.location.protocol + "//" + E.location.hostname),
                E.location.port && (JD += ":" + E.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(JD)));
          var f;
          f = Jb(d);
          a.src = Kb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    TD = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < ID.length; c++)
        if (a.indexOf("//" + ID[c] + "/" + b) >= 0) return !0;
      return !1;
    },
    SD = function () {
      var a = "" + Math.round(Math.random() * 1e9);
      return E.getElementById(a) ? SD() : a;
    };
  function UD(a, b) {
    var c = this;
    var d = function () {
      QD(p);
    };
    K(this.getName(), ["dustOptions:!PixieMap", "triggerId:?*"], arguments);
    FA([
      function () {
        L(c, "detect_youtube_activity_events", {
          fixMissingApi: !!a.get("fixMissingApi"),
        });
      },
    ]);
    b = LA(b);
    var e = !!a.get("captureStart"),
      f = !!a.get("captureComplete"),
      g = !!a.get("capturePause"),
      k = ND(I(a.get("progressThresholdsPercent"))),
      m = MD(I(a.get("progressThresholdsTimeInSeconds"))),
      n = !!a.get("fixMissingApi");
    if (!(e || f || g || k.length || m.length)) return;
    var p = { Dh: e, Bh: f, Ch: g, ji: k, ki: m, Re: n, Ib: b },
      q = B.YT;
    if (q) return q.ready && q.ready(d), b;
    var r = B.onYouTubeIframeAPIReady;
    B.onYouTubeIframeAPIReady = function () {
      r && r();
      d();
    };
    H(function () {
      for (
        var u = E.getElementsByTagName("script"), v = u.length, t = 0;
        t < v;
        t++
      ) {
        var w = u[t].getAttribute("src");
        if (TD(w, "iframe_api") || TD(w, "player_api")) return b;
      }
      for (
        var x = E.getElementsByTagName("iframe"), y = x.length, A = 0;
        A < y;
        A++
      )
        if (!KD && RD(x[A], p.Re))
          return qc("https://www.youtube.com/iframe_api"), (KD = !0), b;
    });
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
    var f = JSON.parse(d);
    if (!f) throw Error("Invalid boolean expression string was given.");
    e = Tg(f, c);
    return e;
  }
  VD.F = "internal.evaluateBooleanExpression";
  var WD;
  function XD(a) {
    var b = !1;
    return b;
  }
  XD.F = "internal.evaluateMatchingRules";
  var YD = function (a) {
      switch (a) {
        case "page_view":
          return [os, ns, es, Ou, vv, iv, Wu, dv];
        case "call_conversion":
          return [ns, Ou];
        case "conversion":
          return [
            ks,
            ns,
            rv,
            Bv,
            ov,
            Av,
            yv,
            xv,
            wv,
            vv,
            iv,
            hv,
            fv,
            ev,
            cv,
            Su,
            Ru,
            gv,
            Wu,
            nv,
            bv,
            av,
            Zu,
            qv,
            mv,
            Uu,
            os,
            ls,
            lv,
            Xu,
            uv,
            dv,
            pv,
            Vu,
            Qu,
            kv,
            $u,
            sv,
            tv,
            Tu,
          ];
        case "landing_page":
          return [
            ks,
            ns,
            rv,
            Bv,
            iv,
            ms,
            Wu,
            nv,
            qv,
            ls,
            os,
            lv,
            uv,
            dv,
            pv,
            Qu,
            Tu,
          ];
        case "remarketing":
          return [
            ks,
            ns,
            rv,
            Bv,
            ov,
            Av,
            yv,
            xv,
            wv,
            vv,
            iv,
            hv,
            cv,
            gv,
            Wu,
            nv,
            bv,
            qv,
            ls,
            os,
            lv,
            Xu,
            uv,
            dv,
            pv,
            Qu,
            sv,
            Tu,
          ];
        case "user_data_lead":
          return [
            ks,
            ns,
            rv,
            Bv,
            Av,
            vv,
            iv,
            gv,
            Wu,
            ms,
            nv,
            Zu,
            qv,
            ls,
            os,
            lv,
            Xu,
            uv,
            dv,
            pv,
            Qu,
            Tu,
          ];
        case "user_data_web":
          return [
            ks,
            ns,
            rv,
            Bv,
            Av,
            vv,
            iv,
            gv,
            Wu,
            ms,
            nv,
            Zu,
            qv,
            ls,
            os,
            lv,
            Xu,
            uv,
            dv,
            pv,
            Vu,
            Qu,
            Tu,
          ];
        default:
          return [
            ks,
            ns,
            rv,
            Bv,
            ov,
            Av,
            yv,
            xv,
            wv,
            vv,
            iv,
            hv,
            fv,
            ev,
            cv,
            Su,
            Ru,
            gv,
            Wu,
            nv,
            bv,
            av,
            Zu,
            qv,
            mv,
            Uu,
            ls,
            os,
            lv,
            Xu,
            uv,
            dv,
            pv,
            Qu,
            kv,
            $u,
            sv,
            tv,
            Tu,
          ];
      }
    },
    ZD = function (a) {
      for (
        var b = YD(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    $D = function (a, b, c, d) {
      var e = new lC(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = qb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    aE = function (a, b, c, d) {
      function e(u, v) {
        for (var t = l(k), w = t.next(); !w.done; w = t.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = qb();
          x.metadata.consent_event_id = u;
          x.metadata.consent_priority_id = v;
        }
      }
      function f(u) {
        for (var v = {}, t = 0; t < k.length; v = { Va: void 0 }, t++)
          if (((v.Va = k[t]), !u || u(v.Va.metadata.hit_type)))
            if (
              !v.Va.metadata.consent_updated ||
              v.Va.metadata.hit_type === "page_view" ||
              X(q)
            )
              ZD(k[t]),
                v.Va.metadata.speculative ||
                  v.Va.isAborted ||
                  (Sw(v.Va),
                  v.Va.metadata.hit_type === "page_view" &&
                    v.Va.j[O.g.Sf] === void 0 &&
                    r === void 0 &&
                    (r = Sl(
                      Ml.Ee,
                      (function (w) {
                        return function () {
                          X(O.g.N) &&
                            ((w.Va.metadata.user_id_updated = !0),
                            (w.Va.metadata.consent_updated = !1),
                            (w.Va.j[O.g.Yb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Va.metadata.user_id_updated = !1),
                            Tl(Ml.Ee, r),
                            (r = void 0));
                        };
                      })(v),
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", destinationId: "", ids: [] }
          : Yl(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          (R(60) || R(61) || R(62) || R(63) || R(64)) &&
            m.indexOf("conversion") >= 0 &&
            m.indexOf("user_data_web") < 0 &&
            m.push("user_data_web");
          for (var n = 0; n < m.length; n++) {
            var p = $D(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === O.g.ba &&
            (R(21)
              ? k.push($D("page_view", g, b, d))
              : k.push($D("landing_page", g, b, d))),
            k.push($D("conversion", g, b, d)),
            k.push($D("user_data_lead", g, b, d)),
            k.push($D("user_data_web", g, b, d)),
            k.push($D("remarketing", g, b, d));
        var q = [O.g.O, O.g.N],
          r = void 0;
        Hl(function () {
          f();
          R(26) &&
            (X([O.g.Aa]) ||
              Gl(
                function (u) {
                  e(u.consentEventId, u.consentPriorityId);
                  f(function (v) {
                    return v === "remarketing";
                  });
                },
                [O.g.Aa],
              ));
          X(q) ||
            Gl(function (u) {
              e(u.consentEventId, u.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
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
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var c = I(a, this.D, 1).Ub();
    b = bs(c);
    return hd(b);
  }
  CF.F = "internal.getAdsCookieWritingOptions";
  function DF(a) {
    var b = !1;
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var c = I(a, this.D, 1).Ub();
    b = Co(c.m);
    return b;
  }
  DF.F = "internal.getAllowAdPersonalization";
  function EF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    K(
      this.getName(),
      ["preHit:!PixieMap", "createCookieIfNeeded:?boolean"],
      arguments,
    );
    var d = I(a, this.D, 1).Ub().metadata.cookie_options || {};
    Up(d, b);
    c = Sp[Vp(d.prefix)];
    return c;
  }
  EF.F = "internal.getAuid";
  var FF = null;
  function GF() {
    var a = new La();
    L(this, "read_container_data"),
      R(45) && FF
        ? (a = FF)
        : (a.set("containerId", "G-4ZF0QC8G81"),
          a.set("version", "7"),
          a.set("environmentName", ""),
          a.set("debugMode", Vf),
          a.set("previewMode", Wf.Ik),
          a.set("environmentMode", Wf.Zl),
          a.set("firstPartyServing", hj() || Ti),
          a.set("containerUrl", jc),
          a.Ia(),
          R(45) && (FF = a));
    return a;
  }
  GF.T = "getContainerVersion";
  function HF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  HF.T = "getCookieValues";
  function IF() {
    return ql();
  }
  IF.F = "internal.getCountryCode";
  function JF() {
    var a = [];
    a = nk();
    return hd(a);
  }
  JF.F = "internal.getDestinationIds";
  function KF(a) {
    var b = new La();
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var c = I(a, this.D, 1).Ub(),
      d = function (e, f) {
        var g = sm(c.m, O.g.fa, e),
          k = Ab(Uc(g) ? g : {}, ".");
        k && b.set(f, k);
      };
    d(1, O.g.hb);
    d(2, O.g.fb);
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
    K(this.getName(), ["avoidWarnings:!boolean"], arguments), (b = Pn(a));
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
    K(this.getName(), [], arguments);
    var b = as();
    b !== void 0 && a.set(O.g.wd, b || "error");
    var c = wo();
    c && a.set(O.g.ic, c);
    var d = vo();
    d && a.set(O.g.mc, d);
    return a;
  }
  YF.F = "internal.getPrivacyStrings";
  function ZF(a, b) {
    var c;
    K(this.getName(), ["targetId:!string", "name:!string"], arguments);
    var d = Ss(a) || {};
    c = hd(d[b], this.D);
    return c;
  }
  ZF.F = "internal.getProductSettingsParameter";
  function $F(a, b) {
    var c;
    K(this.getName(), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    L(this, "get_url", "query", a);
    var d = Aj(Gj(B.location.href), "query"),
      e = zj(d, a, b);
    c = hd(e, this.D);
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
    K(this.getName(), ["targetId:!string", "name:!string"], arguments);
    var d = cn(a);
    c = hd(d[b], this.D);
    return c;
  }
  dG.F = "internal.getRemoteConfigParameter";
  function eG() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    L(this, "read_screen_dimensions");
    var b = Ts();
    a.set("width", b.width);
    a.set("height", b.height);
    return a;
  }
  eG.F = "internal.getScreenDimensions";
  function fG() {
    var a = "";
    L(this, "get_url");
    var b = Rn();
    a = Lu(b).url;
    return a;
  }
  fG.F = "internal.getTopSameDomainUrl";
  function gG() {
    var a = "";
    L(this, "get_url"), (a = B.top.location.href);
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
    L(this, "get_user_agent");
    if (!yu(B) || Eu === void 0) return;
    a = wu();
    return hd(a ? Au(a) : null);
  }
  jG.F = "internal.getUserAgentClientHints";
  var lG = function (a) {
      var b = a.eventName === O.g.ac && el() && Tt(a),
        c = a.metadata.is_sgtm_service_worker,
        d = a.metadata.batch_on_navigation,
        e = a.metadata.is_conversion,
        f = a.metadata.is_session_start,
        g = a.metadata.create_dc_join,
        k = a.metadata.create_google_join,
        m = a.metadata.euid_mode_enabled && !!St(a);
      return !(
        (!Fc() && gc.sendBeacon === void 0) ||
        e ||
        m ||
        f ||
        g ||
        k ||
        b ||
        c ||
        (!d && kG)
      );
    },
    kG = !1;
  var mG = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = qb();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Uh() && (d = qb() - b);
          return d + c;
        },
      };
    },
    nG = function () {
      this.j = void 0;
      this.C = 0;
      this.isActive = this.isVisible = this.H = !1;
      this.P = this.K = void 0;
    };
  h = nG.prototype;
  h.xl = function (a) {
    var b = this;
    if (!this.j) {
      this.H = E.hasFocus();
      this.isVisible = !E.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        vc(d, e, function (g) {
          b.j.stop();
          f(g);
          b.Uh() && b.j.start();
        });
      };
      c(B, "focus", function () {
        b.H = !0;
      });
      c(B, "blur", function () {
        b.H = !1;
      });
      c(B, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && V(56);
        b.P && b.P();
      });
      c(B, "pagehide", function () {
        b.isActive = !1;
        b.K && b.K();
      });
      c(E, "visibilitychange", function () {
        b.isVisible = !E.hidden;
      });
      Tt(a) &&
        !mc("Firefox") &&
        !mc("FxiOS") &&
        c(B, "beforeunload", function () {
          kG = !0;
        });
      this.ni();
      this.C = 0;
    }
  };
  h.ni = function () {
    this.C += this.lg();
    this.j = mG(this);
    this.Uh() && this.j.start();
  };
  h.wn = function (a) {
    var b = this.lg();
    b > 0 && (a.j[O.g.de] = b);
  };
  h.xm = function (a) {
    a.j[O.g.de] = void 0;
    this.ni();
    this.C = 0;
  };
  h.Uh = function () {
    return this.H && this.isVisible && this.isActive;
  };
  h.lm = function () {
    return this.C + this.lg();
  };
  h.lg = function () {
    return (this.j && this.j.get()) || 0;
  };
  h.jn = function (a) {
    this.K = a;
  };
  h.zk = function (a) {
    this.P = a;
  };
  var pG = function (a) {
      var b = a.metadata.event_usage;
      if (Array.isArray(b)) for (var c = 0; c < b.length; c++) oG(b[c]);
      var d = Wa("GA4_EVENT");
      d && (a.j._eu = d);
    },
    qG = function () {
      delete Ua.GA4_EVENT;
    },
    oG = function (a) {
      Va("GA4_EVENT", a);
    };
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
  var uG = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (d === void 0 || c <= d)
        (a.j[O.g.tb] = b), (a.metadata.client_id_source = c);
    },
    wG = function (a, b) {
      var c = a.j[O.g.tb];
      if ((W(a.m, O.g.Ob) && W(a.m, O.g.jc)) || (b && c === b)) return c;
      if (c) {
        c = "" + c;
        if (!vG(c, a)) return V(31), (a.isAborted = !0), "";
        tG(c, X(O.g.U));
        return c;
      }
      V(32);
      a.isAborted = !0;
      return "";
    },
    xG = ["GA1"],
    yG = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = lp(c, b.domain, b.path, xG, O.g.U);
      if (!d) {
        var e = String(W(a.m, O.g.Ac, ""));
        e && e !== c && (d = lp(e, b.domain, b.path, xG, O.g.U));
      }
      return d;
    },
    vG = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = np(d, void 0, void 0, O.g.U);
      if (W(b.m, O.g.hc) === !1 && yG(b) === a) c = !0;
      else {
        var g = mp(a, xG[0], d.domain, d.path);
        c = dp(e, g, f) !== 1;
      }
      return c;
    };
  var BG = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = zG(a);
      if (!d) return b;
      var e,
        f = lb((e = W(c.m, O.g.sd)) != null ? e : 30);
      if (
        !(Math.floor(c.metadata.event_start_timestamp_ms / 1e3) > d.df + f * 60)
      )
        return a;
      var g = zG(b);
      if (!g) return a;
      g.Qc = d.Qc + 1;
      var k;
      return (k = AG(g.sessionId, g.Qc, g.Nd, g.df, g.Yh, g.Mc, g.Dd)) != null
        ? k
        : b;
    },
    EG = function (a, b) {
      var c = b.metadata.cookie_options,
        d = CG(b, c),
        e = mp(a, DG[0], c.domain, c.path),
        f = {
          Hb: O.g.U,
          domain: c.domain,
          path: c.path,
          expires: c.Fb ? new Date(qb() + Number(c.Fb) * 1e3) : void 0,
          flags: c.flags,
        };
      dp(d, void 0, f);
      return dp(d, e, f) !== 1;
    },
    FG = function (a) {
      var b = a.metadata.cookie_options,
        c = CG(a, b),
        d = lp(c, b.domain, b.path, DG, O.g.U);
      if (!d) return d;
      var e = To(c, void 0, void 0, O.g.U);
      if (d && e.length > 1) {
        V(114);
        for (var f = void 0, g = void 0, k = 0; k < e.length; k++) {
          var m = e[k].split(".");
          if (!(m.length < 7)) {
            var n = Number(m[5]);
            n && (!g || n > g) && ((g = n), (f = e[k]));
          }
        }
        f && !wb(f, d) && (V(115), (d = f.split(".").slice(2).join(".")));
      }
      return d;
    },
    GG = function (a) {
      return AG(
        a.j[O.g.zb],
        a.j[O.g.te],
        a.j[O.g.se],
        Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        a.metadata.join_timer_sec || 0,
        !!a.metadata[O.g.Jf],
        a.j[O.g.ee],
      );
    },
    AG = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var k = [a, b, lb(c), d, e];
        k.push(f ? "1" : "0");
        k.push(g || "0");
        return k.join(".");
      }
    },
    CG = function (a, b) {
      return b.prefix + "_ga_" + a.target.ids[am[0]];
    },
    DG = ["GS1"],
    zG = function (a) {
      if (a) {
        var b = a.split(".");
        if (!(b.length < 5 || b.length > 7)) {
          b.length < 7 && V(67);
          var c = Number(b[1]),
            d = Number(b[3]),
            e = Number(b[4] || 0);
          c || V(118);
          d || V(119);
          isNaN(e) && V(120);
          if (c && d && !isNaN(e))
            return {
              sessionId: b[0],
              Qc: c,
              Nd: !!Number(b[2]),
              df: d,
              Yh: e,
              Mc: b[5] === "1",
              Dd: b[6] !== "0" ? b[6] : void 0,
            };
        }
      }
    };
  var HG = function (a) {
      var b = W(a.m, O.g.xa),
        c = a.m.C[O.g.xa];
      if (c === b) return c;
      var d = Vc(b, null);
      c && c[O.g.X] && (d[O.g.X] = (d[O.g.X] || []).concat(c[O.g.X]));
      return d;
    },
    IG = function (a, b) {
      var c = Gp(!0);
      return c._up !== "1" ? {} : { clientId: c[a], Wa: c[b] };
    },
    JG = function (a, b, c) {
      var d = Gp(!0),
        e = d[b];
      e && (uG(a, e, 2), vG(e, a));
      var f = d[c];
      f && EG(f, a);
      return { clientId: e, Wa: f };
    },
    KG = function () {
      var a = Cj(B.location, "host"),
        b = Cj(Gj(E.referrer), "host");
      return a && b
        ? a === b || a.indexOf("." + b) >= 0 || b.indexOf("." + a) >= 0
          ? !0
          : !1
        : !1;
    },
    LG = function (a) {
      if (!W(a.m, O.g.cb)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = CG(a, b);
      Op(function () {
        var e;
        if (X("analytics_storage")) e = {};
        else {
          var f = {};
          e = ((f._up = "1"), (f[c] = a.j[O.g.tb]), (f[d] = GG(a)), f);
        }
        return e;
      }, 1);
      return !X("analytics_storage") && KG() ? IG(c, d) : {};
    },
    NG = function (a) {
      var b = HG(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = CG(a, c),
        f = {};
      Qp(b[O.g.Hc], !!b[O.g.X]) &&
        ((f = JG(a, d, e)), f.clientId && f.Wa && (MG = !0));
      b[O.g.X] &&
        Np(
          function () {
            var g = {},
              k = yG(a);
            k && (g[d] = k);
            var m = FG(a);
            m && (g[e] = m);
            var n = To("FPLC", void 0, void 0, O.g.U);
            n.length && (g._fplc = n[0]);
            return g;
          },
          b[O.g.X],
          b[O.g.Pb],
          !!b[O.g.yb],
        );
      return f;
    },
    MG = !1;
  var OG = function (a) {
    if (!a.metadata.is_merchant_center && Nj(a.m)) {
      var b = HG(a) || {},
        c =
          (Qp(b[O.g.Hc], !!b[O.g.X]) ? Gp(!0)._fplc : void 0) ||
          (To("FPLC", void 0, void 0, O.g.U).length > 0 ? void 0 : "0");
      a.j._fplc = c;
    }
  };
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
  var SG = function (a, b) {
      var c = Li.grl;
      c || ((c = RG()), (Li.grl = c));
      c(b) || (V(35), (a.isAborted = !0));
    },
    RG = function () {
      var a = qb(),
        b = a + 864e5,
        c = 20,
        d = 5e3;
      return function (e) {
        var f = qb();
        f >= b && ((b = f + 864e5), (d = 5e3));
        c = Math.min(c + ((f - a) / 1e3) * 5, 20);
        a = f;
        var g = !1;
        d < 1 || c < 1 || ((g = !0), d--, c--);
        e && ((e.Wl = d), (e.Ql = c));
        return g;
      };
    };
  var TG = function (a) {
    if (W(a.m, O.g.ld) !== void 0) a.copyToHitData(O.g.ld);
    else {
      var b = W(a.m, O.g.Pf),
        c,
        d;
      a: {
        if (MG) {
          var e = HG(a) || {};
          if (e && e[O.g.X])
            for (
              var f = Aj(Gj(a.j[O.g.Ga]), "host", !0), g = e[O.g.X], k = 0;
              k < g.length;
              k++
            )
              if (g[k] instanceof RegExp) {
                if (g[k].test(f)) {
                  d = !0;
                  break a;
                }
              } else if (f.indexOf(g[k]) >= 0) {
                d = !0;
                break a;
              }
        }
        d = !1;
      }
      if (!(c = d)) {
        var m;
        if ((m = b))
          a: {
            for (
              var n = b.include_conditions || [],
                p = Aj(Gj(a.j[O.g.Ga]), "host", !0),
                q = 0;
              q < n.length;
              q++
            )
              if (n[q].test(p)) {
                m = !0;
                break a;
              }
            m = !1;
          }
        c = m;
      }
      c && ((a.j[O.g.ld] = "1"), oG(4));
    }
  };
  var UG = function (a, b) {
      Do() && ((a.gcs = Eo()), b.metadata.is_consent_update && (a.gcu = "1"));
      a.gcd = Io(b.m);
      Co(b.m) ? (a.npa = "0") : (a.npa = "1");
      No() && (a._ng = "1");
    },
    XG = function (a) {
      if (a.metadata.is_merchant_center)
        return {
          url: Oj("https://www.merchant-center-analytics.goog") + "/mc/collect",
          endpoint: 20,
        };
      var b = Kj(Nj(a.m), "/g/collect");
      if (b) return { url: b, endpoint: 16 };
      if (hj()) return { url: "" + gj() + "/g/collect", endpoint: 16 };
      var c = Ut(a),
        d = W(a.m, O.g.sb);
      return c && !sl() && d !== !1 && EE() && X(O.g.O) && X(O.g.U)
        ? { url: VG(), endpoint: 17 }
        : { url: WG(), endpoint: 16 };
    },
    VG = function () {
      var a;
      YG && ul() !== "" && (a = ul());
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    WG = function () {
      var a = "www";
      YG && ul() && (a = ul());
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    YG = !1;
  YG = !0;
  var ZG = {};
  ZG[O.g.tb] = "cid";
  ZG[O.g.Fg] = "gcut";
  ZG[O.g.fc] = "are";
  ZG[O.g.Ff] = "pscdl";
  ZG[O.g.Kf] = "_fid";
  ZG[O.g.Xg] = "_geo";
  ZG[O.g.hb] = "gdid";
  ZG[O.g.Fc] = "_ng";
  ZG[O.g.Nb] = "frm";
  ZG[O.g.ld] = "ir";
  ZG[O.g.Ta] = "ul";
  ZG[O.g.kh] = "pae";
  ZG[O.g.qe] = "_rdi";
  ZG[O.g.Rb] = "sr";
  ZG[O.g.xj] = "tid";
  ZG[O.g.Uf] = "tt";
  ZG[O.g.vd] = "ec_mode";
  ZG[O.g.Jj] = "gtm_up";
  ZG[O.g.Vf] = "uaa";
  ZG[O.g.Wf] = "uab";
  ZG[O.g.Xf] = "uafvl";
  ZG[O.g.Yf] = "uamb";
  ZG[O.g.Zf] = "uam";
  ZG[O.g.cg] = "uap";
  ZG[O.g.dg] = "uapv";
  ZG[O.g.eg] = "uaw";
  ZG[O.g.zj] = "ur";
  ZG[O.g.Ij] = "_uip";
  ZG[O.g.md] = "lps";
  (ZG[O.g.yf] = "gclgs"), (ZG[O.g.Af] = "gclst"), (ZG[O.g.zf] = "gcllp");
  var $G = {};
  $G[O.g.Vc] = "cc";
  $G[O.g.Wc] = "ci";
  $G[O.g.Xc] = "cm";
  $G[O.g.Yc] = "cn";
  $G[O.g.bd] = "cs";
  $G[O.g.dd] = "ck";
  $G[O.g.Ba] = "cu";
  $G[O.g.ya] = "dl";
  $G[O.g.Ga] = "dr";
  $G[O.g.ib] = "dt";
  $G[O.g.se] = "seg";
  $G[O.g.zb] = "sid";
  $G[O.g.te] = "sct";
  $G[O.g.Da] = "uid";
  R(123) && ($G[O.g.od] = "dp");
  var aH = {};
  aH[O.g.de] = "_et";
  aH[O.g.fb] = "edid";
  var bH = {};
  bH[O.g.Vc] = "cc";
  bH[O.g.Wc] = "ci";
  bH[O.g.Xc] = "cm";
  bH[O.g.Yc] = "cn";
  bH[O.g.bd] = "cs";
  bH[O.g.dd] = "ck";
  var cH = {},
    dH = ((cH[O.g.Ha] = 1), cH),
    eH = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = "2";
      d.tid = a.target.destinationId;
      d.gtm = Qo({ qa: a.metadata.source_canonical_id });
      d._p = R(134) ? Yi : sG();
      if (c && (c.Ld > 0 || c.mg) && (R(103) || (d.em = c.Gb), c.za)) {
        var g = c.za.Cd;
        g && !R(12) && (g = g.replace(/./g, "*"));
        g && (d.eme = g);
        d._es = c.za.status;
        c.za.time !== void 0 && (d._est = c.za.time);
      }
      a.metadata.create_google_join && (d._gaz = 1);
      UG(d, a);
      Lo() && (d.dma_cps = Jo());
      d.dma = Ko();
      Zn(po()) && (d.tcfd = Mo());
      fj() && (d.tag_exp = fj());
      var k = a.j[O.g.hb];
      k && (d.gdid = k);
      e.en = String(a.eventName);
      a.metadata.is_first_visit &&
        (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start &&
        (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var m = a.j[O.g.da] || W(a.m, O.g.da);
        if (Array.isArray(m))
          for (var n = 0; n < m.length && n < 200; n++)
            e["pr" + (n + 1)] = $f(m[n]);
      }
      var p = a.j[O.g.fb];
      p && (e.edid = p);
      var q = function (v, t) {
        if (typeof t !== "object" || !dH[v]) {
          var w = "ep." + v,
            x = "epn." + v;
          v = cb(t) ? x : w;
          var y = cb(t) ? w : x;
          e.hasOwnProperty(y) && delete e[y];
          e[v] = String(t);
        }
      };
      ib(a.j, function (v, t) {
        if (t !== void 0 && !nh.hasOwnProperty(v)) {
          t === null && (t = "");
          var w;
          var x = t;
          v !== O.g.ee
            ? (w = !1)
            : a.metadata.euid_mode_enabled || Tt(a)
              ? ((d.ecid = x), (w = !0))
              : (w = void 0);
          if (!w && v !== O.g.Jf) {
            var y = t;
            t === !0 && (y = "1");
            t === !1 && (y = "0");
            y = String(y);
            var A;
            if (ZG[v]) (A = ZG[v]), (d[A] = y);
            else if ($G[v]) (A = $G[v]), (f[A] = y);
            else if (aH[v]) (A = aH[v]), (e[A] = y);
            else if (v.charAt(0) === "_") d[v] = y;
            else {
              var C;
              bH[v]
                ? (C = !0)
                : v !== O.g.Zc
                  ? (C = !1)
                  : (typeof t !== "object" && q(v, t), (C = !0));
              C || q(v, t);
            }
          }
        }
      });
      (function (v) {
        Tt(a) &&
          typeof v === "object" &&
          ib(v || {}, function (t, w) {
            typeof w !== "object" && (d["sst." + t] = String(w));
          });
      })(a.j[O.g.De]);
      Vl(d, a.j[O.g.xd]);
      var r = a.j[O.g.jb] || {};
      R(87) && W(a.m, O.g.sb, void 0, 4) === !1 && (d.ngs = "1");
      ib(r, function (v, t) {
        t !== void 0 &&
          ((t === null && (t = ""), v !== O.g.Da || f.uid)
            ? b[v] !== t &&
              ((e[(cb(t) ? "upn." : "up.") + String(v)] = String(t)),
              (b[v] = t))
            : (f.uid = String(t)));
      });
      var u = XG(a);
      hg.call(this, { ja: d, Rc: f, Lh: e }, u.url, u.endpoint, Tt(a), void 0);
    };
  ra(eH, hg);
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
  var jH = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    kH = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      d >= 0 && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    lH = function (a, b, c) {
      var d = 0,
        e = new B.XMLHttpRequest();
      e.withCredentials = !0;
      e.onprogress = function (f) {
        if (e.status === 200) {
          var g = e.responseText.substring(d);
          d = f.loaded;
          hH(c, g);
        }
      };
      e.open(b ? "POST" : "GET", a);
      e.setAttributionReporting &&
        e.setAttributionReporting({
          eventSourceEligible: !1,
          triggerEligible: !0,
        });
      e.send(b);
    },
    nH = function (a, b, c) {
      var d = Object.assign({}, mH);
      b && ((d.body = b), (d.method = "POST"));
      B.fetch(a, d)
        .then(function (e) {
          if (e.ok && e.body) {
            var f = e.body.getReader(),
              g = new TextDecoder();
            return new Promise(function (k) {
              function m() {
                f.read()
                  .then(function (n) {
                    var p;
                    p = n.done;
                    var q = g.decode(n.value, { stream: !p });
                    hH(c, q);
                    p ? k() : m();
                  })
                  .catch(function () {
                    k();
                  });
              }
              m();
            });
          }
        })
        .catch(function () {
          R(107) && ((a += "&_z=retryFetch"), b ? Cc(a, b) : Bc(a));
        });
    },
    oH = function (a, b) {
      return gH(
        new fH(function (c, d) {
          var e = jH(c, a);
          b && (e = e.replace("_is_sw=0", b));
          var f = {};
          d.attribution_reporting && (f.attributionsrc = "");
          uc(e, void 0, void 0, f);
        }),
        function (c, d) {
          var e = jH(c, a),
            f = d.dedupe_key;
          f && Iu(e, f);
        },
      );
    },
    pH = function (a, b, c, d) {
      var e = oH(c, d);
      R(106) && Fc() ? nH(a, b, e) : lH(a, b, e);
    },
    qH = function (a, b) {
      var c = Gj(a),
        d = kH(c),
        e = iH(c);
      R(111)
        ? pu(e, b, d, function (f) {
            pH(e, b, d, f);
          })
        : pH(e, b, d);
    },
    mH = Object.freeze({
      cache: "no-store",
      credentials: "include",
      method: "GET",
      keepalive: !0,
      redirect: "follow",
    });
  var rH = function (a, b) {
      return a ? [a, b].join("&") : b;
    },
    sH = function (a, b, c) {
      var d = a + "?" + b;
      c ? Cc(d, c) : Bc(d);
    },
    uH = function (a, b, c, d) {
      var e = b,
        f = Hc();
      f !== void 0 && (e += "&tfd=" + Math.round(f));
      b = e;
      var g = a + "?" + b;
      tH && (d = !vb(g, WG()) && !vb(g, VG()));
      if (d && !kG) qH(g, c);
      else {
        var k = b;
        Fc()
          ? Ec(a + "?" + k, c, { noFallback: !0 }) ||
            sH(a, rH(k, "_z=failedfetch"), c)
          : sH(a, rH(k, "_z=nofetch"), c);
      }
    },
    vH = function (a, b) {
      function c(v) {
        n.push(v + "=" + encodeURIComponent("" + a.ja[v]));
      }
      var d = b.pn,
        e = b.qn,
        f = b.om,
        g = b.Hm,
        k = b.Gm,
        m = b.hn;
      if (d || e) {
        var n = [];
        a.ja._ng && c("_ng");
        c("tid");
        c("cid");
        c("gtm");
        n.push("aip=1");
        a.Rc.uid && !k && n.push("uid=" + encodeURIComponent("" + a.Rc.uid));
        var p = function () {
          c("dma");
          a.ja.dma_cps != null && c("dma_cps");
          a.ja.gcs != null && c("gcs");
          c("gcd");
          a.ja.npa != null && c("npa");
        };
        p();
        a.ja.frm != null && c("frm");
        d &&
          (fj() && n.push("tag_exp=" + fj()),
          sH("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")),
          n.join("&"));
        if (e) {
          var q = function () {
            var v = Ku() + "/td/ga/rul?";
            n = [];
            c("tid");
            n.push("gacid=" + encodeURIComponent(String(a.ja.cid)));
            c("gtm");
            p();
            c("pscdl");
            a.ja._ng != null && c("_ng");
            n.push("aip=1");
            n.push("fledge=1");
            a.ja.frm != null && c("frm");
            fj() && n.push("tag_exp=" + fj());
            n.push("z=" + fb());
            var t = v + n.join("&");
            Iu(t, a.ja.tid);
          };
          fj() && n.push("tag_exp=" + fj());
          n.push("z=" + fb());
          if (!g) {
            var r =
              f && vb(f, "google.") && f !== "google.com"
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f,
                  )
                : void 0;
            if (r) {
              var u = r + n.join("&");
              uc(u);
            }
          }
          R(87) && m && !kG && q();
        }
      }
    },
    tH = !1;
  var wH = function () {
    this.K = 1;
    this.P = {};
    this.H = -1;
    this.C = new ag();
  };
  wH.prototype.j = function (a, b) {
    var c = this,
      d = new eH(a, this.P, b),
      e = lG(a);
    (e && this.C.P(d)) || this.flush();
    if (e && this.C.add(d)) {
      if (this.H < 0) {
        var f = B.setTimeout,
          g;
        Tt(a) ? (xH ? ((xH = !1), (g = yH)) : (g = zH)) : (g = 5e3);
        this.H = f.call(
          B,
          function () {
            c.flush();
          },
          g,
        );
      }
    } else {
      var k = dg(d, this.K++);
      uH(d.baseUrl, k.params, k.body, d.H);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = W(a.m, O.g.Fa) !== !1,
        q = Co(a.m),
        r = { eventId: a.m.eventId, priorityId: a.m.priorityId },
        u = a.j[O.g.kh],
        v = {
          pn: m,
          qn: n,
          om: wl(),
          Xn: p,
          Wn: q,
          Hm: sl(),
          Gm: a.metadata.euid_mode_enabled,
          bo: r,
          hn: u,
          m: a.m,
        };
      vH(d, v);
    }
    qw(a.m.eventId, a.eventName);
  };
  wH.prototype.add = function (a) {
    !a.metadata.euid_mode_enabled || kG || R(103) ? this.j(a) : this.aa(a);
  };
  wH.prototype.flush = function () {
    if (this.C.events.length) {
      var a = fg(this.C, this.K++);
      uH(this.C.baseUrl, a.params, a.body, this.C.C);
      this.C = new ag();
      this.H >= 0 && (B.clearTimeout(this.H), (this.H = -1));
    }
  };
  wH.prototype.aa = function (a) {
    var b = this,
      c = St(a);
    if (Bi(c)) {
      var d = ni(c, R(79));
      d
        ? d.then(
            function (g) {
              b.j(a, g);
            },
            function () {
              b.j(a);
            },
          )
        : this.j(a);
    } else {
      var e = Ai(c);
      if (R(79)) {
        var f = li(e);
        f
          ? f.then(
              function (g) {
                b.j(a, g);
              },
              function () {
                b.j(a, e);
              },
            )
          : this.j(a, e);
      } else this.j(a, e);
    }
  };
  var yH = Zh("", 500),
    zH = Zh("", 5e3),
    xH = !0;
  var AH = function (a, b, c) {
      c === void 0 && (c = {});
      if (b == null) return c;
      if (typeof b === "object")
        for (var d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next()) {
          var f = e.value;
          AH(a + "." + f, b[f], c);
        }
      else c[a] = b;
      return c;
    },
    BH = function (a) {
      for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = !!X(e);
      }
      return b;
    },
    DH = function (a, b) {
      var c = CH.filter(function (e) {
        return !X(e);
      });
      if (c.length) {
        var d = BH(c);
        Fl(c, function () {
          for (
            var e = BH(c), f = [], g = l(c), k = g.next();
            !k.done;
            k = g.next()
          ) {
            var m = k.value;
            !d[m] && e[m] && f.push(m);
            e[m] && (d[m] = !0);
          }
          if (f.length) {
            b.metadata.is_consent_update = !0;
            var n = f
              .map(function (p) {
                return xh[p];
              })
              .join(".");
            n && Pt(b, "gcut", n);
            a(b);
          }
        });
      }
    },
    EH = function (a) {
      if (R(128) && Tt(a)) {
        var b = W(a.m, O.g.Qb),
          c;
        b === !0 && (c = "1");
        b === !1 && (c = "0");
        c && Pt(a, "rdp", c);
      }
    },
    FH = function (a) {
      R(126) && Tt(a) && W(a.m, O.g.Ud, !0) === !1 && (a.j[O.g.Ud] = 0);
    },
    GH = function (a, b) {
      if (Tt(b)) {
        var c = b.metadata.is_conversion;
        (b.eventName === "page_view" || c) && DH(a, b);
      }
    },
    HH = function (a) {
      if (Tt(a) && a.eventName === O.g.Uc && a.metadata.is_consent_update) {
        var b = a.j[O.g.Fg];
        b && (Pt(a, "gcut", b), Pt(a, "syn", 1));
      }
    },
    IH = function (a) {
      R(127) &&
        Tt(a) &&
        W(a.m, O.g.Fa) !== !1 &&
        Gu("join-ad-interest-group") &&
        bb(gc.joinAdInterestGroup) &&
        Pt(a, "flg", 1);
    },
    JH = function (a) {
      Tt(a) && (a.metadata.speculative = !1);
    },
    KH = function (a) {
      Tt(a) &&
        (a.metadata.speculative && Pt(a, "sp", 1),
        a.metadata.is_syn && Pt(a, "syn", 1),
        a.metadata.em_event && (Pt(a, "em_event", 1), Pt(a, "sp", 1)));
    },
    LH = function (a) {
      if (Tt(a)) {
        var b = Yi;
        b && Pt(a, "tft", Number(b));
      }
    },
    MH = function (a) {
      function b(e) {
        var f = AH(O.g.Ha, e);
        ib(f, function (g, k) {
          a.j[g] = k;
        });
      }
      if (Tt(a)) {
        var c = Qt(a, "ccd_add_1p_data", !1) ? 1 : 0;
        Pt(a, "ude", c);
        var d = W(a.m, O.g.Ha);
        d !== void 0 ? (b(d), (a.j[O.g.vd] = "c")) : b(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    },
    NH = function (a) {
      if (Tt(a)) {
        var b = as();
        b && Pt(a, "us_privacy", b);
        var c = wo();
        c && Pt(a, "gdpr", c);
        var d = vo();
        d && Pt(a, "gdpr_consent", d);
      }
    },
    OH = function (a) {
      Tt(a) && el() && W(a.m, O.g.ia) && Pt(a, "adr", 1);
    },
    PH = function (a) {
      if (Tt(a)) {
        var b = YG ? ul() : "";
        b && Pt(a, "gcsub", b);
      }
    },
    QH = function (a) {
      if (Tt(a)) {
        W(a.m, O.g.sb, void 0, 4) === !1 && Pt(a, "ngs", 1);
        sl() && Pt(a, "ga_rd", 1);
        EE() || Pt(a, "ngst", 1);
        var b = wl();
        b && Pt(a, "etld", b);
      }
    },
    RH = function (a) {},
    SH = function (a) {
      Tt(a) && el() && Pt(a, "rnd", Hr());
    },
    CH = [O.g.O, O.g.N];
  var TH = function (a, b) {
      var c;
      a: {
        var d = GG(a);
        if (d) {
          if (EG(d, a)) {
            c = d;
            break a;
          }
          V(25);
          a.isAborted = !0;
        }
        c = void 0;
      }
      var e = c;
      return { clientId: wG(a, b), Wa: e };
    },
    UH = function (a, b, c, d, e) {
      var f = W(a.m, O.g.tb);
      if (W(a.m, O.g.Ob) && W(a.m, O.g.jc))
        f ? uG(a, f, 1) : (V(127), (a.isAborted = !0));
      else {
        var g = f ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        f || ((f = yG(a)), (g = 3));
        f || ((f = b), (g = 5));
        if (!f) {
          var k = X(O.g.U),
            m = rG();
          f = !m.from_cookie || k ? m.vid : void 0;
          g = 6;
        }
        f
          ? (f = "" + f)
          : ((f = kp()),
            (g = 7),
            (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0));
        uG(a, f, g);
      }
      var n = Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        p = void 0;
      a.metadata.is_new_to_site || (p = FG(a) || c);
      var q = lb(W(a.m, O.g.sd, 30));
      q = Math.min(475, q);
      q = Math.max(5, q);
      var r = lb(W(a.m, O.g.Rf, 1e4)),
        u = zG(p);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      u &&
        u.Yh &&
        (a.metadata.join_timer_sec = Math.max(0, u.Yh - Math.max(0, n - u.df)));
      var v = !1;
      u ||
        ((v = a.metadata.is_first_visit = !0),
        (u = {
          sessionId: String(n),
          Qc: 1,
          Nd: !1,
          df: n,
          Mc: !1,
          Dd: void 0,
        }));
      n > u.df + q * 60 &&
        ((v = !0),
        (u.sessionId = String(n)),
        u.Qc++,
        (u.Nd = !1),
        (u.Dd = void 0));
      if (v) (a.metadata.is_session_start = !0), d.xm(a);
      else if (d.lm() > r || a.eventName === O.g.ac) u.Nd = !0;
      a.metadata.euid_mode_enabled
        ? W(a.m, O.g.Da)
          ? (u.Mc = !0)
          : (u.Mc && !R(13) && (u.Dd = void 0), (u.Mc = !1))
        : (u.Mc = !1);
      var t = u.Dd;
      if (a.metadata.euid_mode_enabled || Tt(a)) {
        var w = W(a.m, O.g.ee),
          x = w ? 1 : 8;
        w || ((w = t), (x = 4));
        w || ((w = jp()), (x = 7));
        var y = w.toString(),
          A = x,
          C = a.metadata.enhanced_client_id_source;
        if (C === void 0 || A <= C)
          (a.j[O.g.ee] = y), (a.metadata.enhanced_client_id_source = A);
      }
      e
        ? (a.copyToHitData(O.g.zb, u.sessionId),
          a.copyToHitData(O.g.te, u.Qc),
          a.copyToHitData(O.g.se, u.Nd ? 1 : 0))
        : ((a.j[O.g.zb] = u.sessionId),
          (a.j[O.g.te] = u.Qc),
          (a.j[O.g.se] = u.Nd ? 1 : 0));
      a.metadata[O.g.Jf] = u.Mc ? 1 : 0;
    };
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
  var ZH = function (a) {
      return !a || YH.test(a) || ph.hasOwnProperty(a);
    },
    $H = function (a) {
      var b = O.g.Rb,
        c;
      c || (c = function () {});
      a.j[b] !== void 0 && (a.j[b] = c(a.j[b]));
    },
    aI = function (a) {
      var b = a.indexOf("?"),
        c = b === -1 ? a : a.substring(0, b);
      try {
        c = decodeURIComponent(c);
      } catch (d) {}
      return b === -1 ? c : "" + c + a.substring(b);
    },
    bI = function (a) {
      W(a.m, O.g.cb) && (X(O.g.U) || W(a.m, O.g.tb) || (a.j[O.g.Jj] = !0));
      var b;
      var c;
      c = c === void 0 ? 3 : c;
      var d = B.location.href;
      if (d) {
        var e = Gj(d).search.replace("?", ""),
          f = zj(e, "_gl", !1, !0) || "";
        b = f ? Hp(f, c) !== void 0 : !1;
      } else b = !1;
      b && Tt(a) && Pt(a, "glv", 1);
      if (a.eventName !== O.g.ba) return {};
      W(a.m, O.g.cb) && jr(["aw", "dc"]);
      lr(["aw", "dc"]);
      var g = NG(a),
        k = LG(a);
      return Object.keys(g).length ? g : k;
    },
    cI = function (a) {
      var b = Ab(sm(a.m, O.g.fa, 1), ".");
      b && (a.j[O.g.hb] = b);
      var c = Ab(sm(a.m, O.g.fa, 2), ".");
      c && (a.j[O.g.fb] = c);
    },
    Cu = { bm: "", yn: Number("") },
    dI = {},
    eI =
      ((dI[O.g.Vc] = 1),
      (dI[O.g.Wc] = 1),
      (dI[O.g.Xc] = 1),
      (dI[O.g.Yc] = 1),
      (dI[O.g.bd] = 1),
      (dI[O.g.dd] = 1),
      dI),
    YH = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    fI = [es, cI, Js],
    gI = function (a) {
      this.H = a;
      this.j = this.Wa = this.clientId = void 0;
      this.Ua = this.P = !1;
      this.Ic = 0;
      this.K = !1;
      this.aa = new wH();
      this.C = new nG();
    };
  h = gI.prototype;
  h.fn = function (a, b, c) {
    var d = this,
      e = Yl(this.H);
    if (e)
      if (c.eventMetadata.is_external_event && a.charAt(0) === "_")
        c.onFailure();
      else {
        a !== O.g.ba && a !== O.g.Ya && ZH(a) && V(58);
        hI(c.j);
        var f = new lC(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [O.g.U],
          k = Tt(f);
        f.metadata.is_server_side_destination = k;
        if (Qt(f, O.g.Gc, W(f.m, O.g.Gc)) || k) g.push(O.g.O), g.push(O.g.N);
        Du(function () {
          Hl(function () {
            d.gn(f);
          }, g);
        });
        this.bn(a, c, f);
      }
    else c.onFailure();
  };
  h.bn = function (a, b, c) {
    var d = Yl(this.H);
    if (R(76) && a === O.g.ba && Qt(c, "ga4_ads_linked", !1)) {
      var e = function () {
          for (var k = l(fI), m = k.next(); !m.done; m = k.next()) {
            var n = m.value;
            n(f);
            if (f.isAborted) break;
          }
          f.metadata.speculative || f.isAborted || Ev(f);
        },
        f = new lC(d, a, b);
      f.metadata.hit_type = "page_view";
      f.metadata.speculative = !0;
      f.metadata.is_server_side_destination =
        c.metadata.is_server_side_destination;
      var g = [O.g.O, O.g.N];
      Hl(function () {
        e();
        X(g) ||
          Gl(function (k) {
            var m, n;
            m = k.consentEventId;
            n = k.consentPriorityId;
            f.metadata.consent_updated = !0;
            f.metadata.consent_event_id = m;
            f.metadata.consent_priority_id = n;
            e();
          }, g);
      }, g);
    }
  };
  h.gn = function (a) {
    var b = this;
    this.j = a;
    try {
      iI(a);
      jI(a);
      kI(a);
      lI(a);
      R(117) && (a.isAborted = !0);
      ks(a);
      var c = {};
      SG(a, c);
      if (a.isAborted) {
        a.m.onFailure();
        qG();
        return;
      }
      var d = c.Ql;
      c.Wl === 0 && oG(25);
      d === 0 && oG(26);
      mI(a);
      nI(a);
      this.yl(a);
      this.C.wn(a);
      oI(a);
      pI(a);
      qI(a);
      this.yk(bI(a));
      var e = a.eventName === O.g.ba;
      e && (this.K = !0);
      rI(a);
      e && !a.isAborted && this.Ic++ > 0 && oG(17);
      sI(a);
      UH(a, this.clientId, this.Wa, this.C, !this.Ua);
      tI(a);
      uI(a);
      vI(a);
      wI(a);
      xI(a);
      yI(a);
      zI(a);
      OG(a);
      TG(a);
      SH(a);
      RH(a);
      QH(a);
      PH(a);
      OH(a);
      NH(a);
      LH(a);
      KH(a);
      IH(a);
      HH(a);
      FH(a);
      EH(a);
      PG(a);
      QG(a);
      AI(a);
      BI(a);
      CI(a);
      DI(a);
      ms(a);
      ls(a);
      EI(a);
      FI(a);
      Js(a);
      GI(a);
      MH(a);
      JH(a);
      HI(a);
      !this.K && a.metadata.em_event && oG(18);
      pG(a);
      if (a.metadata.speculative || a.isAborted) {
        a.m.onFailure();
        qG();
        return;
      }
      this.yk(TH(a, this.clientId));
      this.Ua = !0;
      this.tn(a);
      II(a);
      GH(function (f) {
        b.ek(f);
      }, a);
      this.C.ni();
      JI(a);
      if (a.isAborted) {
        a.m.onFailure();
        qG();
        return;
      }
      this.ek(a);
      a.m.onSuccess();
    } catch (f) {
      a.m.onFailure();
    }
    qG();
  };
  h.ek = function (a) {
    this.aa.add(a);
  };
  h.yk = function (a) {
    var b = a.clientId,
      c = a.Wa;
    b && c && ((this.clientId = b), (this.Wa = c));
  };
  h.flush = function () {
    this.aa.flush();
  };
  h.tn = function (a) {
    var b = this;
    if (!this.P) {
      var c = X(O.g.N),
        d = X(O.g.U);
      Fl([O.g.N, O.g.U], function () {
        var e = X(O.g.N),
          f = X(O.g.U),
          g = !1,
          k = {},
          m = {};
        if (d !== f && b.j && b.Wa && b.clientId) {
          var n = b.clientId,
            p;
          var q = zG(b.Wa);
          p = q ? q.Dd : void 0;
          if (f) {
            var r = yG(b.j);
            if (r) {
              b.clientId = r;
              var u = FG(b.j);
              u && (b.Wa = BG(u, b.Wa, b.j));
            } else vG(b.clientId, b.j), tG(b.clientId, !0);
            EG(b.Wa, b.j);
            g = !0;
            k[O.g.Wg] = n;
            R(68) && p && (k[O.g.ol] = p);
          } else (b.Wa = void 0), (b.clientId = void 0), (B.gaGlobal = {});
        }
        e &&
          !c &&
          ((g = !0), (m.is_consent_update = !0), (k[O.g.Fg] = xh[O.g.N]));
        if (g) {
          var v = vy(b.H, O.g.Uc, k);
          xy(v, a.m.eventId, { eventMetadata: m });
        }
        d = f;
        c = e;
      });
      this.P = !0;
    }
  };
  h.yl = function (a) {
    a.eventName !== O.g.Ya && this.C.xl(a);
  };
  var kI = function (a) {
      var b = E.location.protocol;
      b !== "http:" && b !== "https:" && (V(29), (a.isAborted = !0));
    },
    lI = function (a) {
      gc && gc.loadPurpose === "preview" && (V(30), (a.isAborted = !0));
    },
    mI = function (a) {
      var b = {
        prefix: String(W(a.m, O.g.Na, "")),
        path: String(W(a.m, O.g.vb, "/")),
        flags: String(W(a.m, O.g.ab, "")),
        domain: String(W(a.m, O.g.Ra, "auto")),
        Fb: Number(W(a.m, O.g.Sa, 63072e3)),
      };
      a.metadata.cookie_options = b;
    },
    oI = function (a) {
      if (a.metadata.is_merchant_center) a.metadata.euid_mode_enabled = !1;
      else if (
        Qt(a, "ccd_add_1p_data", !1) ||
        Qt(a, "ccd_add_ec_stitching", !1)
      )
        a.metadata.euid_mode_enabled = !0;
    },
    pI = function (a) {
      if (a.metadata.euid_mode_enabled && Qt(a, "ccd_add_1p_data", !1)) {
        var b = a.m.C[O.g.ue];
        if (wj(b)) {
          var c = W(a.m, O.g.Ha);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Uc(c) && (a.metadata.user_data_from_code = c),
              Uc(b.selectors) &&
                !a.metadata.user_data_from_manual &&
                (a.metadata.user_data_from_manual = uj(b.selectors)));
        }
      }
    },
    qI = function (a) {
      if (
        R(77) &&
        !R(76) &&
        Qt(a, "ga4_ads_linked", !1) &&
        a.eventName === O.g.ba
      ) {
        var b = W(a.m, O.g.wa) !== !1;
        if (b) {
          var c = bs(a);
          c.Fb && (c.Fb = Math.min(c.Fb, 7776e3));
          cs({ Bd: b, Kd: W(a.m, O.g.xa) || {}, Pd: W(a.m, O.g.cb), rc: c });
        }
      }
    },
    AI = function (a) {
      if (!yu(B)) V(87);
      else if (Eu !== void 0) {
        V(85);
        var b = wu();
        b ? (W(a.m, O.g.qe) && !Tt(a)) || Bu(b, a) : V(86);
      }
    },
    rI = function (a) {
      a.eventName === O.g.ba &&
        (W(a.m, O.g.Oa, !0)
          ? (a.m.j[O.g.fa] &&
              ((a.m.H[O.g.fa] = a.m.j[O.g.fa]),
              (a.m.j[O.g.fa] = void 0),
              (a.j[O.g.fa] = void 0)),
            (a.eventName = O.g.ac))
          : (a.isAborted = !0));
    },
    nI = function (a) {
      function b(c, d) {
        nh[c] || d === void 0 || (a.j[c] = d);
      }
      ib(a.m.H, b);
      ib(a.m.j, b);
    },
    tI = function (a) {
      var b = tm(a.m),
        c = function (d, e) {
          eI[d] && (a.j[d] = e);
        };
      Uc(b[O.g.Zc])
        ? ib(b[O.g.Zc], function (d, e) {
            c((O.g.Zc + "_" + d).toLowerCase(), e);
          })
        : ib(b, c);
    },
    sI = cI,
    II = function (a) {
      if (R(111) && X(O.g.U)) {
        Tt(a) &&
          ((a.metadata.is_sgtm_service_worker = !0),
          Tt(a) && Pt(a, "sw_exp", 1));
        a: {
          if (!R(111)) break a;
          if (Tt(a)) {
            var b = "/_";
            R(110) && (b += "/service_worker");
            var c = Kj(Nj(a.m), b);
            mu(c, Math.round(qb()));
            break a;
          }
          Ti || mu(void 0, Math.round(qb()));
        }
      }
    },
    EI = function (a) {
      if (a.eventName === O.g.Ya) {
        var b = W(a.m, O.g.xb);
        W(a.m, O.g.Mb)(a.j[b] || W(a.m, b));
        a.isAborted = !0;
      }
    },
    uI = function (a) {
      if (!W(a.m, O.g.jc) || !W(a.m, O.g.Ob)) {
        var b = a.copyToHitData,
          c = O.g.ya,
          d = "",
          e = E.location;
        if (e) {
          var f = e.pathname || "";
          f.charAt(0) !== "/" && (f = "/" + f);
          var g = e.search || "";
          if (g && g[0] === "?")
            for (var k = g.substring(1).split("&"), m = 0; m < k.length; ++m) {
              var n = k[m].split("=");
              n &&
                n.length === 2 &&
                n[0] === "wbraid" &&
                (g = g.replace(/([?&])wbraid=[^&]+/, "$1wbraid=" + Cb(n[1])));
            }
          d = e.protocol + "//" + e.hostname + f + g;
        }
        b.call(a, c, d, aI);
        var p = a.copyToHitData,
          q = O.g.Ga,
          r;
        a: {
          var u = To("_opt_expid", void 0, void 0, O.g.U)[0];
          if (u) {
            var v = decodeURIComponent(u).split("$");
            if (v.length === 3) {
              r = v[2];
              break a;
            }
          }
          if (Li.ga4_referrer_override !== void 0) r = Li.ga4_referrer_override;
          else {
            var t = nj("gtm.gtagReferrer." + a.target.destinationId),
              w = E.referrer;
            r = t ? "" + t : w;
          }
        }
        p.call(a, q, r || void 0, aI);
        a.copyToHitData(O.g.ib, E.title);
        a.copyToHitData(O.g.Ta, (gc.language || "").toLowerCase());
        var x = Ts();
        a.copyToHitData(O.g.Rb, x.width + "x" + x.height);
        R(123) && a.copyToHitData(O.g.od, void 0, aI);
        R(84) && Kr() && a.copyToHitData(O.g.md, "1");
      }
    },
    wI = function (a) {
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (
        !(
          hj() ||
          (R(6) && Tt(a)) ||
          a.metadata.is_merchant_center ||
          W(a.m, O.g.sb) === !1
        ) &&
        EE() &&
        X(O.g.O)
      ) {
        var b = Ut(a);
        (a.metadata.is_session_start || W(a.m, O.g.Wg)) &&
          (a.metadata.create_dc_join = !!b);
        var c = a.metadata.join_timer_sec;
        b &&
          (c || 0) === 0 &&
          ((a.metadata.join_timer_sec = 60),
          (a.metadata.create_google_join = !0));
      }
    },
    zI = function (a) {
      a.copyToHitData(O.g.Uf);
      for (var b = W(a.m, O.g.Lf) || [], c = 0; c < b.length; c++) {
        var d = b[c];
        if (d.rule_result) {
          a.copyToHitData(O.g.Uf, d.traffic_type);
          oG(3);
          break;
        }
      }
    },
    JI = function (a) {
      a.copyToHitData(O.g.Xg);
      W(a.m, O.g.qe) && ((a.j[O.g.qe] = !0), Tt(a) || $H(a));
    },
    FI = function (a) {
      a.copyToHitData(O.g.Da);
      a.copyToHitData(O.g.jb);
    },
    vI = function (a) {
      Qt(a, "google_ng") && !sl() ? a.copyToHitData(O.g.Fc, 1) : ns(a);
    },
    CI = function (a) {
      if (W(a.m, O.g.Fa) !== !1 && Co(a.m)) {
        var b = Ut(a),
          c = W(a.m, O.g.sb);
        b &&
          c !== !1 &&
          EE() &&
          X(O.g.O) &&
          al(O.g.N) &&
          cl(["ads"]).ads &&
          Hu() &&
          (a.j[O.g.kh] = !0);
      }
    },
    HI = function (a) {
      var b = W(a.m, O.g.Ob);
      b && oG(12);
      a.metadata.em_event && oG(14);
      var c = sk(tk());
      (b || Ek(c) || (c && c.parent && c.context && c.context.source === 5)) &&
        oG(19);
    },
    iI = function (a) {
      if (XH(a.target.destinationId)) V(28), (a.isAborted = !0);
      else if (R(122)) {
        var b = rk();
        if (b && Array.isArray(b.destinations))
          for (var c = 0; c < b.destinations.length; c++)
            if (XH(b.destinations[c])) {
              V(125);
              a.isAborted = !0;
              break;
            }
      }
    },
    BI = function (a) {
      Gu("attribution-reporting") && (a.j[O.g.fc] = "1");
    },
    jI = function (a) {
      if (Cu.bm.replace(/\s+/g, "").split(",").indexOf(a.eventName) >= 0)
        a.isAborted = !0;
      else {
        var b = Rt(a);
        b && b.blacklisted && (a.isAborted = !0);
      }
    },
    xI = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(Rt(a));
      a.metadata.is_first_visit &&
        (a.metadata.is_first_visit_conversion = b(Rt(a, "first_visit")));
      a.metadata.is_session_start &&
        (a.metadata.is_session_start_conversion = b(Rt(a, "session_start")));
    },
    yI = function (a) {
      rh.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0),
        a.copyToHitData(O.g.da),
        a.copyToHitData(O.g.Ba));
    },
    GI = function (a) {
      if (
        R(83) &&
        a.metadata.is_conversion &&
        X(O.g.O) &&
        Qt(a, "ga4_ads_linked", !1)
      ) {
        var b = bs(a),
          c = Hq(b.prefix),
          d = Ur(c);
        a.j[O.g.yf] = d.Nh;
        a.j[O.g.Af] = d.Ph;
        a.j[O.g.zf] = d.Oh;
      }
    },
    DI = function (a) {
      if (R(99)) {
        var b = ul();
        b && (a.metadata.ga4_collection_subdomain = b);
      }
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
  var LI = function (a) {
      if (!KI(a)) {
        var b = !1,
          c = function () {
            !b &&
              KI(a) &&
              ((b = !0),
              wc(E, "visibilitychange", c),
              R(4) && wc(E, "prerenderingchange", c),
              V(55));
          };
        vc(E, "visibilitychange", c);
        R(4) && vc(E, "prerenderingchange", c);
        V(54);
      }
    },
    KI = function (a) {
      if (
        R(4) && "prerendering" in E
          ? E.prerendering
          : E.visibilityState === "prerender"
      )
        return !1;
      a();
      return !0;
    };
  function MI(a, b) {
    LI(function () {
      var c = Yl(a);
      if (c) {
        var d = NI(c, b);
        Zm(a, d);
      }
    });
  }
  function NI(a, b) {
    var c = function () {};
    var d = new gI(a.id),
      e = a.prefix === "MC";
    c = function (f, g, k, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.fn(g, k, m);
    };
    hk || OI(a, d, b);
    return c;
  }
  function OI(a, b, c) {
    var d = b.C,
      e = {},
      f = { eventId: c, eventMetadata: ((e.batch_on_navigation = !0), e) };
    R(50) && (f.deferrable = !0);
    d.jn(function () {
      kG = !0;
      $m.flush();
      d.lg() >= 1e3 && gc.sendBeacon !== void 0 && an(O.g.Uc, {}, a.id, f);
      b.flush();
      d.zk(function () {
        kG = !1;
        d.zk();
      });
    });
  }
  var PI = NI;
  function RI(a, b, c) {
    var d = this;
  }
  RI.F = "internal.gtagConfig";
  function SI() {
    var a = {};
    a = {
      EventNames: {
        APP_REMOVE: O.g.Hi,
        APP_STORE_REFUND: O.g.Ii,
        APP_STORE_SUBSCRIPTION_CANCEL: O.g.Ji,
        APP_STORE_SUBSCRIPTION_CONVERT: O.g.Ki,
        APP_STORE_SUBSCRIPTION_RENEW: O.g.Li,
        ECOMMERCE_ADD_PAYMENT: O.g.zg,
        ECOMMERCE_ADD_SHIPPING: O.g.Ag,
        ECOMMERCE_CART_ADD: O.g.wc,
        ECOMMERCE_CART_REMOVE: O.g.xc,
        ECOMMERCE_CART_VIEW: O.g.Bg,
        ECOMMERCE_CHECKOUT: O.g.Zb,
        ECOMMERCE_ITEM_LIST_CLICK: O.g.yc,
        ECOMMERCE_ITEM_LIST_VIEW: O.g.pb,
        ECOMMERCE_PROMOTION_CLICK: O.g.Kb,
        ECOMMERCE_PROMOTION_VIEW: O.g.qb,
        ECOMMERCE_PURCHASE: O.g.Ma,
        ECOMMERCE_REFUND: O.g.zc,
        ECOMMERCE_VIEW_ITEM: O.g.Qa,
        ECOMMERCE_WISHLIST_ADD: O.g.Cg,
        FIRST_OPEN: O.g.Mi,
        FIRST_VISIT: O.g.Ni,
        GTAG_CONFIG: O.g.ba,
        GTAG_GET: O.g.Ya,
        IN_APP_PURCHASE: O.g.Oi,
        PAGE_VIEW: O.g.ac,
        SESSION_START: O.g.Pi,
        USER_ENGAGEMENT: O.g.Uc,
      },
      EventParameters: {
        ACCEPT_INCOMING: O.g.Hc,
        ADS_DATA_REDACTION: O.g.ia,
        AFFILIATION: O.g.Mg,
        ALLOW_AD_PERSONALIZATION_SIGNALS: O.g.na,
        ALLOW_CUSTOM_SCRIPTS: O.g.Cf,
        ALLOW_DISPLAY_FEATURES: O.g.Df,
        ALLOW_ENHANCED_CONVERSIONS: O.g.Vd,
        ALLOW_GOOGLE_SIGNALS: O.g.sb,
        ALLOW_INTEREST_GROUPS: O.g.Fa,
        AUID: O.g.Lb,
        AUTO_DETECTION_ENABLED: O.g.Yi,
        AW_BASKET_ITEMS: O.g.da,
        AW_BASKET_TYPE: O.g.Eg,
        AW_FEED_COUNTRY: O.g.Xd,
        AW_FEED_LANGUAGE: O.g.Yd,
        AW_MERCHANT_ID: O.g.Zd,
        AW_REMARKETING: O.g.bc,
        AW_REMARKETING_ONLY: O.g.Ef,
        CAMPAIGN: O.g.Zc,
        CAMPAIGN_CONTENT: O.g.Vc,
        CAMPAIGN_ID: O.g.Wc,
        CAMPAIGN_MEDIUM: O.g.Xc,
        CAMPAIGN_NAME: O.g.Yc,
        CAMPAIGN_SOURCE: O.g.bd,
        CAMPAIGN_TERM: O.g.dd,
        CHECKOUT_OPTION: O.g.ce,
        CHECKOUT_STEP: O.g.Gf,
        CLIENT_ID: O.g.tb,
        CONTENT_GROUP: O.g.aj,
        CONTENT_TYPE: O.g.bj,
        CONVERSION_API: O.g.fc,
        CONVERSION_COOKIE_PREFIX: O.g.eb,
        CONVERSION_ID: O.g.ed,
        CONVERSION_LABEL: O.g.ub,
        CONVERSION_LINKER: O.g.wa,
        COOKIE_DOMAIN: O.g.Ra,
        COOKIE_EXPIRES: O.g.Sa,
        COOKIE_FLAGS: O.g.ab,
        COOKIE_NAME: O.g.Ac,
        COOKIE_PATH: O.g.vb,
        COOKIE_PREFIX: O.g.Na,
        COOKIE_UPDATE: O.g.hc,
        COUNTRY: O.g.Bc,
        COUPON: O.g.Ng,
        CURRENCY: O.g.Ba,
        CUSTOMER_LIFETIME_VALUE: O.g.ae,
        CUSTOM_MAP: O.g.fd,
        DC_CUSTOM_PARAMS: O.g.gd,
        DC_NATURAL_SEARCH: O.g.ej,
        DEBUG_MODE: O.g.Kg,
        DECORATE_FORMS: O.g.yb,
        DELIVERY_POSTAL_CODE: O.g.ud,
        DEVELOPER_ID: O.g.fa,
        DISABLE_MERCHANT_REPORTED_PURCHASES: O.g.dj,
        DISCOUNT: O.g.Wd,
        DYNAMIC_EVENT_SETTINGS: O.g.Lg,
        ENGAGEMENT_TIME_MSEC: O.g.de,
        ENHANCED_CLIENT_ID: O.g.ee,
        ENHANCED_CONVERSIONS: O.g.fe,
        ENHANCED_CONVERSIONS_AUTOMATIC_SETTINGS: O.g.Og,
        ESTIMATED_DELIVERY_DATE: O.g.he,
        EUID_LOGGED_IN_STATE: O.g.Jf,
        EVENT: O.g.Cc,
        EVENT_CALLBACK: O.g.kd,
        EVENT_DEVELOPER_ID_STRING: O.g.fb,
        EVENT_SETTINGS: O.g.ie,
        EVENT_TIMEOUT: O.g.je,
        EXPERIMENTS: O.g.gj,
        FIREBASE_ID: O.g.Kf,
        FIRST_PARTY_COLLECTION: O.g.Dc,
        FIRST_PARTY_DUAL_TAGGING_ID: O.g.ke,
        FIRST_PARTY_URL: O.g.wb,
        FLEDGE: O.g.Pg,
        FLIGHT_ERROR_CODE: O.g.Qg,
        FLIGHT_ERROR_MESSAGE: O.g.Rg,
        GAC_GCLID: O.g.me,
        GAC_WBRAID: O.g.Ec,
        GAC_WBRAID_MULTIPLE_CONVERSIONS: O.g.Ug,
        GA_RESTRICT_DOMAIN: O.g.Vg,
        GA_TEMP_CLIENT_ID: O.g.Wg,
        GCLID: O.g.Za,
        GDPR_APPLIES: O.g.ic,
        GEO_GRANULARITY: O.g.Xg,
        GLOBAL_DEVELOPER_ID_STRING: O.g.hb,
        GOOGLE_NG: O.g.Fc,
        GOOGLE_SIGNALS: O.g.Gc,
        GOOGLE_TLD: O.g.Yg,
        GROUPS: O.g.ne,
        GSA_EXPERIMENT_ID: O.g.Zg,
        IFRAME_STATE: O.g.Nb,
        IGNORE_REFERRER: O.g.ld,
        INTERNAL_TRAFFIC_RESULTS: O.g.Lf,
        IS_LEGACY_LOADED: O.g.Ob,
        IS_PASSTHROUGH: O.g.oe,
        ITEM_LIST_NAME: O.g.hd,
        LANGUAGE: O.g.Ta,
        LEGACY_DEVELOPER_ID_STRING: O.g.pe,
        LINKER: O.g.xa,
        LINKER_DOMAINS: O.g.X,
        LINKER_URL_POSITION: O.g.Pb,
        LIST_NAME: O.g.Hf,
        METHOD: O.g.ah,
        NEW_CUSTOMER: O.g.nd,
        NON_INTERACTION: O.g.bh,
        OPTIMIZE_ID: O.g.rj,
        PAGE_HOSTNAME: O.g.eh,
        PAGE_LOCATION: O.g.ya,
        PAGE_PATH: O.g.od,
        PAGE_REFERRER: O.g.Ga,
        PAGE_TITLE: O.g.ib,
        PASSENGERS: O.g.fh,
        PHONE_CONVERSION_CALLBACK: O.g.gh,
        PHONE_CONVERSION_COUNTRY_CODE: O.g.sj,
        PHONE_CONVERSION_CSS_CLASS: O.g.hh,
        PHONE_CONVERSION_IDS: O.g.tj,
        PHONE_CONVERSION_NUMBER: O.g.ih,
        PHONE_CONVERSION_OPTIONS: O.g.jh,
        PROMOTIONS: O.g.fj,
        QUANTITY: O.g.pd,
        REDACT_DEVICE_INFO: O.g.qe,
        REFERRAL_EXCLUSION_DEFINITION: O.g.Pf,
        RESTRICTED_DATA_PROCESSING: O.g.Qb,
        RETOKEN: O.g.uj,
        SCREEN_NAME: O.g.Qf,
        SCREEN_RESOLUTION: O.g.Rb,
        SEARCH_TERM: O.g.wj,
        SEND_PAGE_VIEW: O.g.Oa,
        SEND_TO: O.g.kc,
        SESSION_DURATION: O.g.sd,
        SESSION_ENGAGED: O.g.se,
        SESSION_ENGAGED_TIME: O.g.Rf,
        SESSION_ID: O.g.zb,
        SESSION_NUMBER: O.g.te,
        SHIPPING: O.g.jd,
        TAX: O.g.If,
        TC_PRIVACY_STRING: O.g.mc,
        TEMPORARY_CLIENT_ID: O.g.sl,
        TOPMOST_URL: O.g.Tf,
        TRACKING_ID: O.g.xj,
        TRAFFIC_TYPE: O.g.Uf,
        TRANSACTION_ID: O.g.Ca,
        TRANSPORT_URL: O.g.Sb,
        TRIP_TYPE: O.g.lh,
        UPDATE: O.g.nc,
        URL_PASSTHROUGH: O.g.cb,
        USER_DATA: O.g.Ha,
        USER_DATA_AUTO_LATENCY: O.g.mh,
        USER_DATA_AUTO_META: O.g.nh,
        USER_DATA_AUTO_MULTI: O.g.oh,
        USER_DATA_AUTO_SELECTORS: O.g.ph,
        USER_DATA_AUTO_STATUS: O.g.qh,
        USER_DATA_MODE: O.g.vd,
        USER_DATA_SETTINGS: O.g.ue,
        USER_ID: O.g.Da,
        USER_PROPERTIES: O.g.jb,
        US_PRIVACY_STRING: O.g.wd,
        VALUE: O.g.oa,
        VALUE_CALLBACK: O.g.Mb,
        VALUE_KEY: O.g.xb,
        WBRAID: O.g.rb,
        WBRAID_MULTIPLE_CONVERSIONS: O.g.rh,
      },
      Consent: {
        AD_STORAGE: O.g.O,
        ANALYTICS_STORAGE: O.g.U,
        CONSENT_UPDATED: O.g.Yb,
        REGION: O.g.Jb,
        WAIT_FOR_UPDATE: O.g.vf,
      },
    };
    return a;
  }
  function UI(a, b) {}
  UI.T = "gtagSet";
  function VI() {
    var a = {};
    a = { NO_IFRAMING: 0, SAME_DOMAIN_IFRAMING: 1, CROSS_DOMAIN_IFRAMING: 2 };
    return a;
  }
  function WI(a, b) {}
  WI.T = "injectHiddenIframe";
  var XI = uA();
  function YI(a, b, c, d, e) {
    var f = this;
  }
  YI.F = "internal.injectHtml";
  var bJ = {};
  function dJ(a, b, c, d) {}
  var eJ = { dl: 1, id: 1 },
    fJ = {};
  function gJ(a, b, c, d) {}
  dJ.T = "injectScript";
  gJ.F = "internal.injectScript";
  function hJ(a) {
    var b = !0;
    K(
      this.getName(),
      [z(a) ? "consentType:!string" : "consentType:!List"],
      arguments,
    );
    var c = I(a);
    if (z(c)) L(this, "access_consent", c, "read");
    else
      for (var d = l(c), e = d.next(); !e.done; e = d.next())
        L(this, "access_consent", e.value, "read");
    b = X(c);
    return b;
  }
  hJ.T = "isConsentGranted";
  function iJ(a) {
    var b = !1;
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var c = I(a, this.D, 1).Ub();
    b = !!W(c.m, O.g.Kg);
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
    L(this, "get_url"), L(this, "get_referrer"), (a = Kr());
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
  function qJ() {}
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
    if (typeof a !== "string") return;
    a && vb(a, "//") && (a = E.location.protocol + a);
    if (typeof URL === "function") {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var k = f[g][0],
            m = f[g][1];
          e.hasOwnProperty(k)
            ? typeof e[k] === "string"
              ? (e[k] = [e[k], m])
              : e[k].push(m)
            : (e[k] = m);
        }
        c = hd({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = Gj(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var u = q[r].split("="),
          v = u[0],
          t = decodeURIComponent(u.splice(1).join("=")).replace(/\+/g, " ");
        p.hasOwnProperty(v)
          ? typeof p[v] === "string"
            ? (p[v] = [p[v], t])
            : p[v].push(t)
          : (p[v] = t);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = hd(n);
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
    K(this.getName(), ["permission:!string"], [a]);
    for (
      var c = Array.prototype.slice.call(arguments, 0), d = 0;
      d < c.length;
      ++d
    )
      c[d] = I(c[d], this.D, 1);
    c.unshift(this);
    try {
      L.apply(null, c), (b = !0);
    } catch (e) {
      return !1;
    }
    return b;
  }
  wJ.T = "queryPermission";
  function xJ() {
    var a = "";
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
    K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments),
      Ks(a, function (d) {
        b.invoke(c.D, hd(d, c.D, 1));
      });
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
    K(
      this.getName(),
      ["url:!string", "dustParams:!List", "valueReplacement:?string"],
      arguments,
    );
    var e = I(b),
      f = c,
      g = Gj(a);
    d = Db(e, g, f);
    return d;
  }
  HJ.F = "internal.scrubUrlParams";
  function IJ(a) {
    K(this.getName(), ["preHit:!PixieMap"], arguments);
    var b = I(a, this.D, 1).Ub();
    Sw(b);
  }
  IJ.F = "internal.sendAdsHit";
  function JJ(a, b, c, d) {
    K(
      this.getName(),
      [
        "destinationIds:!*",
        "eventName:!*",
        "eventParameters:?PixieMap",
        "messageContext:?PixieMap",
      ],
      arguments,
    );
    var e = c ? I(c) : {},
      f = I(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? I(d) : {},
      k = JA(this);
    g.originatingEntity = zB(k);
    var m = f;
    for (var n = 0; n < m.length; n++) {
      var p = m[n];
      if (typeof p === "string") {
        var q = {};
        Vc(e, q);
        var r = {};
        Vc(g, r);
        var u = vy(p, b, q);
        xy(u, g.eventId || k.eventId, r);
      }
    }
  }
  JJ.F = "internal.sendGtagEvent";
  function KJ(a, b, c) {}
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
  function RJ(a, b) {
    K(
      this.getName(),
      ["requestedConsentType:!string", "delegatedConsentType:!string"],
      arguments,
    ),
      L(this, "access_consent", a, "write"),
      L(this, "access_consent", b, "read"),
      tl() && ($k.delegatedConsentTypes[a] = b);
  }
  RJ.F = "internal.setDelegatedConsentType";
  function SJ(a, b) {}
  SJ.F = "internal.setFormAction";
  function TJ(a, b, c) {
    K(
      this.getName(),
      ["key:!string", "value:?*", "overrideExisting:?boolean"],
      arguments,
    );
    if (!Ol(a))
      throw Error(
        "setInCrossContainerData requires valid CrossContainerSchema key.",
      );
    (c || Rl(a) === void 0) && Ql(a, I(b, this.D, 1));
  }
  TJ.F = "internal.setInCrossContainerData";
  function UJ(a, b, c) {
    return !1;
  }
  UJ.T = "setInWindow";
  function VJ(a, b, c) {
    K(
      this.getName(),
      ["targetId:!string", "name:!string", "value:!*"],
      arguments,
    );
    var d = Ss(a) || {};
    d[b] = I(c, this.D);
    var e = a;
    Qs || Rs();
    Ps[e] = d;
  }
  VJ.F = "internal.setProductSettingsParameter";
  function WJ(a, b, c) {
    K(
      this.getName(),
      ["targetId:!string", "name:!string", "value:!*"],
      arguments,
    );
    for (var d = b.split("."), e = cn(a), f = 0; f < d.length - 1; f++) {
      if (e[d[f]] === void 0) e[d[f]] = {};
      else if (!Uc(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f],
        );
      e = e[d[f]];
    }
    e[d[f]] = I(c, this.D, 1);
  }
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
    L(this, "access_template_storage");
    var c = JA(this).kb();
    aK[c] && (b = aK[c].hasOwnProperty("gtm." + a) ? aK[c]["gtm." + a] : null);
    return b;
  };
  $J.setItem = function (a, b) {
    L(this, "access_template_storage");
    var c = JA(this).kb();
    aK[c] = aK[c] || {};
    aK[c]["gtm." + a] = b;
  };
  $J.removeItem = function (a) {
    L(this, "access_template_storage");
    var b = JA(this).kb();
    if (!aK[b] || !aK[b].hasOwnProperty("gtm." + a)) return;
    delete aK[b]["gtm." + a];
  };
  $J.clear = function () {
    L(this, "access_template_storage"), delete aK[JA(this).kb()];
  };
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

  (Z.securityGroups.access_template_storage = ["google"]),
    (Z.__access_template_storage = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Z.__access_template_storage.o = "access_template_storage"),
    (Z.__access_template_storage.isVendorTemplate = !0),
    (Z.__access_template_storage.priorityOverride = 0),
    (Z.__access_template_storage.isInfrastructure = !1),
    (Z.__access_template_storage.runInSiloedMode = !1);
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = FK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.o = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

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
  (Z.securityGroups.detect_youtube_activity_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: { fixMissingApi: !!c.fixMissingApi } };
      }
      (function (b) {
        Z.__detect_youtube_activity_events = b;
        Z.__detect_youtube_activity_events.o = "detect_youtube_activity_events";
        Z.__detect_youtube_activity_events.isVendorTemplate = !0;
        Z.__detect_youtube_activity_events.priorityOverride = 0;
        Z.__detect_youtube_activity_events.isInfrastructure = !1;
        Z.__detect_youtube_activity_events.runInSiloedMode = !1;
      })(function (b) {
        var c = !!b.vtp_allowFixMissingJavaScriptApi,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.fixMissingApi)
              throw d(e, {}, "Prohibited option: fixMissingApi.");
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_screen_dimensions = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__read_screen_dimensions = b;
        Z.__read_screen_dimensions.o = "read_screen_dimensions";
        Z.__read_screen_dimensions.isVendorTemplate = !0;
        Z.__read_screen_dimensions.priorityOverride = 0;
        Z.__read_screen_dimensions.isInfrastructure = !1;
        Z.__read_screen_dimensions.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Z.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_link_click_events = b;
        Z.__detect_link_click_events.o = "detect_link_click_events";
        Z.__detect_link_click_events.isVendorTemplate = !0;
        Z.__detect_link_click_events.priorityOverride = 0;
        Z.__detect_link_click_events.isInfrastructure = !1;
        Z.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_container_data = ["google"]),
    (Z.__read_container_data = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Z.__read_container_data.o = "read_container_data"),
    (Z.__read_container_data.isVendorTemplate = !0),
    (Z.__read_container_data.priorityOverride = 0),
    (Z.__read_container_data.isInfrastructure = !1),
    (Z.__read_container_data.runInSiloedMode = !1);

  (Z.securityGroups.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        Z.__listen_data_layer = b;
        Z.__listen_data_layer.o = "listen_data_layer";
        Z.__listen_data_layer.isVendorTemplate = !0;
        Z.__listen_data_layer.priorityOverride = 0;
        Z.__listen_data_layer.isInfrastructure = !1;
        Z.__listen_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!(c === "any" || (c === "specific" && d.indexOf(g) >= 0)))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event.",
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.detect_user_provided_data = ["google"]),
    (function () {
      function a(b, c) {
        return { dataSource: c };
      }
      (function (b) {
        Z.__detect_user_provided_data = b;
        Z.__detect_user_provided_data.o = "detect_user_provided_data";
        Z.__detect_user_provided_data.isVendorTemplate = !0;
        Z.__detect_user_provided_data.priorityOverride = 0;
        Z.__detect_user_provided_data.isInfrastructure = !1;
        Z.__detect_user_provided_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e) {
            if (e !== "auto" && e !== "manual" && e !== "code")
              throw c(d, {}, "Unknown user provided data source.");
            if (b.vtp_limitDataSources)
              if (e !== "auto" || b.vtp_allowAutoDataSources) {
                if (e === "manual" && !b.vtp_allowManualDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data via manually specified CSS selectors is not allowed.",
                  );
                if (e === "code" && !b.vtp_allowCodeDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data from an in-page variable is not allowed.",
                  );
              } else
                throw c(
                  d,
                  {},
                  "Automatic detection of user provided data is not allowed.",
                );
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
  (Z.securityGroups.access_consent = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { consentType: c, read: !1, write: !1 };
        switch (d) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + d);
        }
        return e;
      }
      (function (b) {
        Z.__access_consent = b;
        Z.__access_consent.o = "access_consent";
        Z.__access_consent.isVendorTemplate = !0;
        Z.__access_consent.priorityOverride = 0;
        Z.__access_consent.isInfrastructure = !1;
        Z.__access_consent.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_consentTypes || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g],
            m = k.consentType;
          k.read && e.push(m);
          k.write && f.push(m);
        }
        return {
          assert: function (n, p, q) {
            if (!z(p)) throw d(n, {}, "Consent type must be a string.");
            if (q === "read") {
              if (e.indexOf(p) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(p) > -1) return;
            } else
              throw d(
                n,
                {},
                "Access type must be either 'read', or 'write', was " + q,
              );
            throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.gct = ["google"]),
    (function () {
      function a(b) {
        for (var c = [], d = 0; d < b.length; d++)
          try {
            c.push(new RegExp(b[d]));
          } catch (e) {}
        return c;
      }
      (function (b) {
        Z.__gct = b;
        Z.__gct.o = "gct";
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0;
        Z.__gct.isInfrastructure = !1;
        Z.__gct.runInSiloedMode = !0;
      })(function (b) {
        var c = {},
          d = b.vtp_sessionDuration;
        d > 0 && (c[O.g.sd] = d);
        c[O.g.ie] = b.vtp_eventSettings;
        c[O.g.Lg] = b.vtp_dynamicEventSettings;
        c[O.g.Gc] = b.vtp_googleSignals === 1;
        c[O.g.Yg] = b.vtp_foreignTld;
        c[O.g.Vg] = b.vtp_restrictDomain === 1;
        c[O.g.Lf] = b.vtp_internalTrafficResults;
        var e = O.g.xa,
          f = b.vtp_linker;
        f && f[O.g.X] && (f[O.g.X] = a(f[O.g.X]));
        c[e] = f;
        var g = O.g.Pf,
          k = b.vtp_referralExclusionDefinition;
        k &&
          k.include_conditions &&
          (k.include_conditions = a(k.include_conditions));
        c[g] = k;
        var m = uk(b.vtp_trackingId);
        en(m, c);
        MI(m, b.vtp_gtmEventId);
        H(b.vtp_gtmOnSuccess);
      });
    })();

  (Z.securityGroups.get = ["google"]),
    (Z.__get = function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = vy(String(b.streamId), d, c);
      xy(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    }),
    (Z.__get.o = "get"),
    (Z.__get.isVendorTemplate = !0),
    (Z.__get.priorityOverride = 0),
    (Z.__get.isInfrastructure = !1),
    (Z.__get.runInSiloedMode = !1);
  (Z.securityGroups.detect_scroll_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_scroll_events = b;
        Z.__detect_scroll_events.o = "detect_scroll_events";
        Z.__detect_scroll_events.isVendorTemplate = !0;
        Z.__detect_scroll_events.priorityOverride = 0;
        Z.__detect_scroll_events.isInfrastructure = !1;
        Z.__detect_scroll_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();
  (Z.securityGroups.get_user_agent = ["google"]),
    (Z.__get_user_agent = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Z.__get_user_agent.o = "get_user_agent"),
    (Z.__get_user_agent.isVendorTemplate = !0),
    (Z.__get_user_agent.priorityOverride = 0),
    (Z.__get_user_agent.isInfrastructure = !1),
    (Z.__get_user_agent.runInSiloedMode = !1);

  var KK = {
    dataLayer: oj,
    callback: function (a) {
      $i.hasOwnProperty(a) && bb($i[a]) && $i[a]();
      delete $i[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
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
          Fu();
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
