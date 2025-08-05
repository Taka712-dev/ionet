! function () {
    try {
        var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "2bacb28e-a400-4d49-bcd0-2e71da011743", o._sentryDebugIdIdentifier = "sentry-dbid-2bacb28e-a400-4d49-bcd0-2e71da011743")
    } catch (o) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9231], {
        71016: function (o, t, s) {
            s.d(t, {
                StartButton: function () {
                    return c
                }
            });
            var e = s(57437),
                l = s(49354),
                r = s(89733),
                i = s(87600),
                p = s(52376),
                n = s(83981),
                C = s(6432),
                a = s(30190);
            let c = o => {
                let {
                    showDiscord: t,
                    onClick: s,
                    mt: c = "max-md:mt-[24px]",
                    title: d = "Get Started",
                    url: f = n.Z.PRODUCT_URL,
                    inverted: y = !1,
                    target: x = "_blank",
                    trackingEvent: u,
                    className: h,
                    variant: _ = "default",
                    rightIcon: E = "16px",
                    rightIconClassName: L,
                    gtmTrackingEvent: A
                } = o, j = async () => {
                    if (u) {
                        let o = (0, a.Xp)();
                        (0, C.L)(u.trackingType, {
                            url_redirected: f,
                            current_url: window.location.href,
                            ...u.banner_type ? {
                                banner_type: u.banner_type
                            } : {},
                            timestamp: new Date().toISOString(),
                            deviceId: o,
                            type: d
                        })
                    }
                    A && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: A,
                        url_redirected: f,
                        current_url: window.location.href
                    })), null == s || s()
                };
                return (0, e.jsxs)("a", {
                    className: (0, l.cn)((0, r.d)({
                        variant: _
                    }), "group relative w-fit gap-1 bg-white pr-[16px] transition-all", y ? "pr-[40px]" : "hover:pr-[40px]", c, h),
                    href: "".concat(f),
                    onClick: j,
                    target: x,
                    children: [t && (0, e.jsx)("div", {
                        className: "mx-auto flex h-6 w-6 items-center justify-center max-xl:h-4 max-xl:w-4",
                        children: (0, e.jsx)(p.D, {
                            className: "w-[21px] max-xl:w-[14px]"
                        })
                    }), (0, e.jsx)("span", {
                        children: d
                    }), (0, e.jsx)(i.L, {
                        className: (0, l.cn)("absolute h-[16px] text-black transition-opacity", y ? "" : "opacity-0 group-hover:opacity-100", L),
                        style: {
                            right: E
                        }
                    })]
                })
            }
        },
        87600: function (o, t, s) {
            s.d(t, {
                L: function () {
                    return l
                }
            });
            var e = s(57437);
            let l = o => (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                fill: "none",
                ...o,
                children: (0, e.jsx)("path", {
                    d: "M8.53203 13.0713L8.60273 13.1411L8.67298 13.0709L13.7639 7.97998L13.8346 7.90927L13.7639 7.83856L8.67298 2.74765L8.60227 2.67694L8.53156 2.74765L7.65656 3.62265L7.58574 3.69347L7.65667 3.76418L11.0876 7.18427H2H1.9V7.28427V8.53427V8.63427H2H11.0881L7.65656 12.0658L7.58539 12.137L7.65703 12.2077L8.53203 13.0713Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "0.2"
                })
            })
        },
        42439: function (o, t, s) {
            s.d(t, {
                L: function () {
                    return l
                }
            });
            var e = s(57437);
            let l = o => (0, e.jsxs)("svg", {
                width: 16,
                height: 16,
                ...o,
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, e.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.2502 2.92491H6.75017C6.88966 2.40671 7.36317 2.02484 7.92516 2.02484H10.0752C10.6372 2.02484 11.1107 2.40671 11.2502 2.92491ZM14.1626 2.92491H12.5217C12.3662 1.71247 11.3297 0.774841 10.0752 0.774841H7.92516C6.67058 0.774841 5.63413 1.71247 5.47864 2.92491H3.8459C2.09506 2.92491 0.670898 4.3354 0.670898 6.09157V8.96657C0.670898 9.02067 0.677892 9.07378 0.691243 9.12479V12.011C0.691243 12.0267 0.691832 12.0423 0.693009 12.058L0.850509 14.1488L0.850526 14.149C0.981845 15.8839 2.42743 17.2252 4.16708 17.2252H13.8329C15.5726 17.2252 17.0181 15.8839 17.1495 14.149L17.1495 14.1488L17.307 12.058C17.3082 12.0423 17.3087 12.0267 17.3087 12.011V9.12534C17.3222 9.07416 17.3292 9.02086 17.3292 8.96657V6.09991C17.3292 4.34906 15.9187 2.92491 14.1626 2.92491ZM16.0587 10.0137C14.2165 10.8897 12.0009 11.4251 9.62549 11.5059V13.0057C9.62549 13.3509 9.34567 13.6307 9.00049 13.6307C8.65531 13.6307 8.37549 13.3509 8.37549 13.0057V11.5062C5.99739 11.4265 3.78404 10.8908 1.94124 10.0138V11.9875L2.09696 14.0547L2.09698 14.0549C2.1791 15.1383 3.0818 15.9752 4.16708 15.9752H13.8329C14.9182 15.9752 15.8209 15.1383 15.903 14.0549L15.903 14.0547L16.0587 11.9875V10.0137ZM1.9209 6.09157C1.9209 5.03108 2.78007 4.17491 3.8459 4.17491H14.1626C15.2231 4.17491 16.0792 5.03408 16.0792 6.09991V8.60154C14.1765 9.63445 11.7065 10.2649 9.00649 10.2666L9.00049 10.2665L8.99416 10.2666C6.29103 10.2663 3.82511 9.63573 1.9209 8.60158V6.09157Z",
                    fill: "url(#paint0_linear_15314_9567)",
                    style: {}
                }), (0, e.jsx)("defs", {
                    children: (0, e.jsxs)("linearGradient", {
                        id: "paint0_linear_15314_9567",
                        x1: "9.00006",
                        y1: "0.774841",
                        x2: "9.00006",
                        y2: "17.2252",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#E3E3E3",
                            style: {
                                stopColor: "color(display-p3 0.8902 0.8902 0.8902)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#6D6E71",
                            style: {
                                stopColor: "color(display-p3 0.4275 0.4314 0.4431)",
                                stopOpacity: 1
                            }
                        })]
                    })
                })]
            })
        },
        52376: function (o, t, s) {
            s.d(t, {
                D: function () {
                    return l
                }
            });
            var e = s(57437);
            let l = o => (0, e.jsx)("svg", {
                ...o,
                viewBox: "0 0 14 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...o,
                children: (0, e.jsx)("path", {
                    d: "M11.8458 1.55176C10.9591 1.13842 9.99905 0.838408 8.99902 0.66507C8.99025 0.664789 8.98153 0.666435 8.97347 0.66989C8.96541 0.673346 8.9582 0.678528 8.95235 0.68507C8.83235 0.905076 8.69235 1.19175 8.59901 1.41176C7.53832 1.25175 6.45962 1.25175 5.39892 1.41176C5.30559 1.18508 5.16558 0.905076 5.03891 0.68507C5.03225 0.671737 5.01225 0.66507 4.99225 0.66507C3.99222 0.838408 3.03886 1.13842 2.1455 1.55176C2.13883 1.55176 2.13217 1.55843 2.1255 1.56509C0.312118 4.2785 -0.187896 6.91857 0.0587777 9.53198C0.0587777 9.54531 0.0654445 9.55865 0.0787782 9.56531C1.27881 10.4453 2.43218 10.9787 3.57221 11.332C3.59221 11.3387 3.61221 11.332 3.61888 11.3187C3.88555 10.952 4.12556 10.5653 4.33223 10.1587C4.34556 10.132 4.33223 10.1053 4.30556 10.0987C3.92555 9.95199 3.56554 9.77865 3.2122 9.57865C3.18553 9.56531 3.18553 9.52531 3.20553 9.50531C3.27887 9.45198 3.3522 9.39198 3.42554 9.33864C3.43887 9.32531 3.45887 9.32531 3.4722 9.33197C5.7656 10.3787 8.239 10.3787 10.5057 9.33197C10.5191 9.32531 10.5391 9.32531 10.5524 9.33864C10.6257 9.39864 10.6991 9.45198 10.7724 9.51198C10.7991 9.53198 10.7991 9.57198 10.7657 9.58531C10.4191 9.79199 10.0524 9.95866 9.67237 10.1053C9.64571 10.112 9.63904 10.1453 9.64571 10.1653C9.85905 10.572 10.0991 10.9587 10.3591 11.3254C10.3791 11.332 10.3991 11.3387 10.4191 11.332C11.5658 10.9787 12.7191 10.4453 13.9192 9.56531C13.9325 9.55865 13.9392 9.54531 13.9392 9.53198C14.2325 6.5119 13.4525 3.89182 11.8724 1.56509C11.8658 1.55843 11.8591 1.55176 11.8458 1.55176ZM4.6789 7.9386C3.99222 7.9386 3.41887 7.30525 3.41887 6.52523C3.41887 5.74521 3.97889 5.11186 4.6789 5.11186C5.38559 5.11186 5.94561 5.75188 5.93894 6.52523C5.93894 7.30525 5.37892 7.9386 4.6789 7.9386ZM9.3257 7.9386C8.63901 7.9386 8.06566 7.30525 8.06566 6.52523C8.06566 5.74521 8.62568 5.11186 9.3257 5.11186C10.0324 5.11186 10.5924 5.75188 10.5857 6.52523C10.5857 7.30525 10.0324 7.9386 9.3257 7.9386Z",
                    fill: "currentColor"
                })
            })
        },
        15384: function (o, t, s) {
            s.d(t, {
                T: function () {
                    return r
                }
            });
            var e = s(57437),
                l = s(49354);
            let r = o => {
                let {
                    children: t,
                    outerChildren: s,
                    className: r = "",
                    includePadding: i = !0,
                    hasBlur: p = !1,
                    innerClassName: n = "",
                    role: C = ""
                } = o;
                return (0, e.jsxs)("div", {
                    role: C,
                    style: p ? {
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)"
                    } : {},
                    className: (0, l.cn)("relative flex flex-row items-center xl:justify-center", r),
                    children: [s, (0, e.jsx)("div", {
                        className: (0, l.cn)("relative flex max-w-[100vw] flex-row items-center max-xl:flex-1 xl:w-[1200px]", i ? "max-xl:mx-14 max-sm:mx-4" : "", n),
                        children: t
                    })]
                })
            }
        },
        89733: function (o, t, s) {
            s.d(t, {
                d: function () {
                    return n
                },
                z: function () {
                    return C
                }
            });
            var e = s(57437),
                l = s(2265),
                r = s(71538),
                i = s(12218),
                p = s(49354);
            let n = (0, i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", {
                    variants: {
                        variant: {
                            default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                            chat: "bg-grey-1100 text-white font-normal rounded-base leading-[160%] border border-white/10 hover:bg-grey-1100/90 buttonChat",
                            destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
                            outline: "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                            secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                            ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                            link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            md: "h-[40px] rounded-md px-4",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                C = l.forwardRef((o, t) => {
                    let {
                        className: s,
                        variant: l,
                        size: i,
                        asChild: C = !1,
                        ...a
                    } = o, c = C ? r.g7 : "button";
                    return (0, e.jsx)(c, {
                        className: (0, p.cn)(n({
                            variant: l,
                            size: i,
                            className: s
                        })),
                        ref: t,
                        ...a
                    })
                });
            C.displayName = "Button"
        },
        65461: function (o, t, s) {
            var e, l;
            s.d(t, {
                n: function () {
                    return e
                }
            }), (l = e || (e = {})).GET_STARTED_CLICKED = "GET_STARTED_CLICKED", l.TRY_IT_NOW_CLICKED = "TRY_IT_NOW_CLICKED", l.DROPDOWN_TRIGGERED = "DROPDOWN_TRIGGERED", l.DROPDOWN_ELEMENT_CLICKED = "DROPDOWN_ELEMENT_CLICKED", l.DOCS_CLICKED = "DOCS_CLICKED", l.BLOG_CLICKED = "BLOG_CLICKED", l.SOCIALS_CLICKED = "SOCIALS_CLICKED", l.JOIN_DISCORD_CLICKED = "JOIN_DISCORD_CLICKED", l.IO_BANNER_CLICK = "IO_home_banner_click", l.IO_DOCS_CLICKED = "IO_DOCS_CLICKED", l.CONTACT_TEAM_CLICKED = "CONTACT_TEAM_CLICKED", l.INTEL_GET_STARTED_CLICKED = "INTEL_GET_STARTED_CLICKED", l.IO_INTEL_REPO_CLICKED = "IO_INTEL_REPO_CLICKED", l.INTEL_LANDING_CLICKED = "INTEL_LANDING_CLICKED", l.IO_CLOUD_STARTED_CLICKED = "IO_CLOUD_STARTED_CLICKED", l.SALES_FORM_SUBMITTED = "SALES_FORM_SUBMITTED", l.CONTACT_SALES_CLICKED = "CONTACT_SALES_CLICKED", l.IOG_BANNER_CLICKED = "IOG_BANNER_CLICKED", l.IO_HACKATHON_CLICKED = "IO_HACKATHON_CLICKED", l.APPLIED_FOR_ASTRONAUT = "APPLIED_FOR_ASTRONAUT", l.JOIN_EVENT_CLICKED = "JOIN_EVENT_CLICKED", l.EVENT_DETAILS_CLICKED = "EVENT_DETAILS_CLICKED", l.START_EARNING_CLICKED = "START_EARNING_CLICKED"
        },
        93191: function (o, t, s) {
            s.d(t, {
                cI: function () {
                    return u
                },
                Dk: function () {
                    return y
                },
                tn: function () {
                    return h
                },
                vy: function () {
                    return E
                },
                mY: function () {
                    return _
                },
                SA: function () {
                    return L
                },
                fK: function () {
                    return A
                },
                Uz: function () {
                    return x
                }
            });
            var e = s(57437);
            let l = o => (0, e.jsxs)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, e.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.46529 6.45245C7.46529 5.05646 8.59696 3.9248 9.99292 3.9248C11.3889 3.9248 12.5206 5.05648 12.5206 6.45245C12.5206 7.84843 11.3889 8.98013 9.99292 8.98013C8.59697 8.98013 7.46529 7.84845 7.46529 6.45245ZM6.25419 5.90831C6.22856 6.08599 6.21529 6.26767 6.21529 6.45245C6.21529 7.26107 6.46936 8.01036 6.90202 8.62484L6.84222 8.67393C6.56758 8.89939 6.21737 9.03424 5.83398 9.03424C4.95564 9.03424 4.24361 8.32221 4.24361 7.44388C4.24361 6.56555 4.95565 5.85352 5.83398 5.85352C5.9595 5.85352 6.08085 5.86793 6.19678 5.89494L6.25419 5.90831ZM6.63806 4.71426L6.48035 4.67753C6.27211 4.62902 6.05563 4.60352 5.83398 4.60352C4.26529 4.60352 2.99361 5.87519 2.99361 7.44388C2.99361 9.01258 4.26529 10.2842 5.83398 10.2842C6.51709 10.2842 7.14537 10.0423 7.63535 9.64008L7.78447 9.51766C8.40558 9.96597 9.1684 10.2301 9.99292 10.2301C10.8194 10.2301 11.5839 9.96472 12.2058 9.51448C12.7134 9.99132 13.3982 10.2842 14.1501 10.2842C15.7188 10.2842 16.9905 9.01258 16.9905 7.44388C16.9905 5.87519 15.7188 4.60352 14.1501 4.60352C13.873 4.60352 13.6043 4.64338 13.3498 4.71801C12.7214 3.50427 11.454 2.6748 9.99292 2.6748C8.53335 2.6748 7.26712 3.50257 6.63806 4.71426ZM14.1501 9.03424C13.7397 9.03424 13.3667 8.87961 13.0843 8.62427C13.5167 8.0099 13.7706 7.26083 13.7706 6.45245C13.7706 6.26789 13.7574 6.08642 13.7318 5.90894C13.8645 5.87289 14.0046 5.85352 14.1501 5.85352C15.0285 5.85352 15.7405 6.56555 15.7405 7.44388C15.7405 8.32221 15.0285 9.03424 14.1501 9.03424ZM5.83618 10.6592C4.0017 10.6544 2.31745 11.518 1.70434 13.457L1.55664 13.9241L1.97492 14.1791C2.60119 14.5609 3.28057 14.8111 3.98872 14.9596L4.36667 15.0388C4.35799 15.0651 4.34945 15.0914 4.34106 15.118L4.19335 15.5851L4.61164 15.8401C6.20745 16.813 8.05913 17.1713 9.97806 17.1668C11.8971 17.1713 13.7487 16.813 15.3446 15.8401L15.7628 15.5851L15.6151 15.118C15.6074 15.0934 15.5995 15.0689 15.5914 15.0446L15.9967 14.9596C16.7048 14.8111 17.3842 14.5609 18.0105 14.1791L18.4288 13.9241L18.2811 13.457C17.668 11.518 15.9837 10.6544 14.1492 10.6592L13.5242 10.6608L13.5275 11.9108L14.1525 11.9092C15.3984 11.906 16.3883 12.3866 16.8942 13.36C16.5334 13.527 16.1478 13.6507 15.7402 13.7362L15.1285 13.8644L15.1734 14.0784C14.1281 12.1767 12.1466 11.3083 9.97806 11.3135C7.83939 11.3084 5.88639 12.1496 4.82967 13.9943L4.8569 13.8644L4.2452 13.7362C3.83756 13.6507 3.45204 13.527 3.09119 13.36C3.59711 12.3866 4.58698 11.906 5.83294 11.9092L6.45794 11.9108L6.46118 10.6608L5.83618 10.6592ZM9.97653 15.9168C8.40015 15.9207 6.95468 15.6582 5.71023 15.023C6.44201 13.3608 8.02028 12.5585 9.97646 12.5635H9.97967C11.9334 12.5585 13.5142 13.3628 14.2459 15.0231C13.0015 15.6582 11.556 15.9207 9.9796 15.9168H9.97653Z",
                    fill: "url(#paint0_linear_3136_4240)",
                    style: {}
                }), (0, e.jsx)("defs", {
                    children: (0, e.jsxs)("linearGradient", {
                        id: "paint0_linear_3136_4240",
                        x1: "9.9927",
                        y1: "2.6748",
                        x2: "9.9927",
                        y2: "17.1669",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#E3E3E3",
                            style: {
                                stopColor: "color(display-p3 0.8902 0.8902 0.8902)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#6D6E71",
                            style: {
                                stopColor: "color(display-p3 0.4275 0.4314 0.4431)",
                                stopOpacity: 1
                            }
                        })]
                    })
                })]
            });
            var r = s(19377),
                i = s(97759),
                p = s(91825),
                n = s(73665),
                C = s(83981),
                a = s(42439);
            let c = o => (0, e.jsxs)("svg", {
                width: 20,
                ...o,
                height: 16,
                viewBox: "0 0 20 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, e.jsx)("path", {
                    d: "M14.2338 3.50002H2.0852L5.11921 5.62098H14.2338C14.5875 5.62098 14.8788 5.9154 14.8788 6.27707V7.86006L16.964 9.31764V6.27707C16.964 4.75042 15.7365 3.50002 14.2338 3.50002Z",
                    fill: "url(#paint0_linear_3136_4239)",
                    style: {}
                }), (0, e.jsx)("path", {
                    d: "M7.85144 12.5H20L16.966 10.3791H7.85144C7.49765 10.3791 7.2064 10.0828 7.2064 9.72295V8.13996L5.12119 6.68238V9.72295C5.12119 11.2532 6.34694 12.5 7.85144 12.5Z",
                    fill: "url(#paint1_linear_3136_4239)",
                    style: {}
                }), (0, e.jsx)("path", {
                    d: "M2.08521 6.68236H0V12.5H2.08521V6.68236Z",
                    fill: "url(#paint2_linear_3136_4239)",
                    style: {}
                }), (0, e.jsx)("path", {
                    d: "M0 3.5V5.31744L2.01195 6.72414L2.08521 6.68236L2.0852 3.50002L0 3.5Z",
                    fill: "url(#paint3_linear_3136_4239)",
                    style: {}
                }), (0, e.jsxs)("defs", {
                    children: [(0, e.jsxs)("linearGradient", {
                        id: "paint0_linear_3136_4239",
                        x1: "-1.45028",
                        y1: "5.11165",
                        x2: "14.0649",
                        y2: "5.11165",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.0091653",
                            stopColor: "#AAACAF",
                            style: {
                                stopColor: "color(display-p3 0.6667 0.6745 0.6863)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.1095",
                            stopColor: "#C9CACC",
                            style: {
                                stopColor: "color(display-p3 0.7882 0.7922 0.8000)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.203",
                            stopColor: "#DFE0E1",
                            style: {
                                stopColor: "color(display-p3 0.8745 0.8784 0.8824)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.2859",
                            stopColor: "#ECEDEE",
                            style: {
                                stopColor: "color(display-p3 0.9255 0.9294 0.9333)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.35",
                            stopColor: "#F1F2F2",
                            style: {
                                stopColor: "color(display-p3 0.9451 0.9490 0.9490)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.4681",
                            stopColor: "#EAEBEC",
                            style: {
                                stopColor: "color(display-p3 0.9176 0.9216 0.9255)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.6561",
                            stopColor: "#D7D8DA",
                            style: {
                                stopColor: "color(display-p3 0.8431 0.8471 0.8549)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.8892",
                            stopColor: "#B8BABC",
                            style: {
                                stopColor: "color(display-p3 0.7216 0.7294 0.7373)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        })]
                    }), (0, e.jsxs)("linearGradient", {
                        id: "paint1_linear_3136_4239",
                        x1: "-1.45028",
                        y1: "5.11165",
                        x2: "14.0649",
                        y2: "5.11165",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.0091653",
                            stopColor: "#AAACAF",
                            style: {
                                stopColor: "color(display-p3 0.6667 0.6745 0.6863)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.1095",
                            stopColor: "#C9CACC",
                            style: {
                                stopColor: "color(display-p3 0.7882 0.7922 0.8000)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.203",
                            stopColor: "#DFE0E1",
                            style: {
                                stopColor: "color(display-p3 0.8745 0.8784 0.8824)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.2859",
                            stopColor: "#ECEDEE",
                            style: {
                                stopColor: "color(display-p3 0.9255 0.9294 0.9333)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.35",
                            stopColor: "#F1F2F2",
                            style: {
                                stopColor: "color(display-p3 0.9451 0.9490 0.9490)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.4681",
                            stopColor: "#EAEBEC",
                            style: {
                                stopColor: "color(display-p3 0.9176 0.9216 0.9255)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.6561",
                            stopColor: "#D7D8DA",
                            style: {
                                stopColor: "color(display-p3 0.8431 0.8471 0.8549)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.8892",
                            stopColor: "#B8BABC",
                            style: {
                                stopColor: "color(display-p3 0.7216 0.7294 0.7373)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        })]
                    }), (0, e.jsxs)("linearGradient", {
                        id: "paint2_linear_3136_4239",
                        x1: "-1.45028",
                        y1: "5.11165",
                        x2: "14.0649",
                        y2: "5.11165",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.0091653",
                            stopColor: "#AAACAF",
                            style: {
                                stopColor: "color(display-p3 0.6667 0.6745 0.6863)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.1095",
                            stopColor: "#C9CACC",
                            style: {
                                stopColor: "color(display-p3 0.7882 0.7922 0.8000)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.203",
                            stopColor: "#DFE0E1",
                            style: {
                                stopColor: "color(display-p3 0.8745 0.8784 0.8824)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.2859",
                            stopColor: "#ECEDEE",
                            style: {
                                stopColor: "color(display-p3 0.9255 0.9294 0.9333)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.35",
                            stopColor: "#F1F2F2",
                            style: {
                                stopColor: "color(display-p3 0.9451 0.9490 0.9490)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.4681",
                            stopColor: "#EAEBEC",
                            style: {
                                stopColor: "color(display-p3 0.9176 0.9216 0.9255)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.6561",
                            stopColor: "#D7D8DA",
                            style: {
                                stopColor: "color(display-p3 0.8431 0.8471 0.8549)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.8892",
                            stopColor: "#B8BABC",
                            style: {
                                stopColor: "color(display-p3 0.7216 0.7294 0.7373)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        })]
                    }), (0, e.jsxs)("linearGradient", {
                        id: "paint3_linear_3136_4239",
                        x1: "-1.45028",
                        y1: "5.11165",
                        x2: "14.0649",
                        y2: "5.11165",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, e.jsx)("stop", {
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.0091653",
                            stopColor: "#AAACAF",
                            style: {
                                stopColor: "color(display-p3 0.6667 0.6745 0.6863)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.1095",
                            stopColor: "#C9CACC",
                            style: {
                                stopColor: "color(display-p3 0.7882 0.7922 0.8000)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.203",
                            stopColor: "#DFE0E1",
                            style: {
                                stopColor: "color(display-p3 0.8745 0.8784 0.8824)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.2859",
                            stopColor: "#ECEDEE",
                            style: {
                                stopColor: "color(display-p3 0.9255 0.9294 0.9333)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.35",
                            stopColor: "#F1F2F2",
                            style: {
                                stopColor: "color(display-p3 0.9451 0.9490 0.9490)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.4681",
                            stopColor: "#EAEBEC",
                            style: {
                                stopColor: "color(display-p3 0.9176 0.9216 0.9255)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.6561",
                            stopColor: "#D7D8DA",
                            style: {
                                stopColor: "color(display-p3 0.8431 0.8471 0.8549)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: "0.8892",
                            stopColor: "#B8BABC",
                            style: {
                                stopColor: "color(display-p3 0.7216 0.7294 0.7373)",
                                stopOpacity: 1
                            }
                        }), (0, e.jsx)("stop", {
                            offset: 1,
                            stopColor: "#A7A9AC",
                            style: {
                                stopColor: "color(display-p3 0.6549 0.6627 0.6745)",
                                stopOpacity: 1
                            }
                        })]
                    })]
                })]
            });
            var d = s(65461),
                f = s(49354);
            let y = "https://explorer.ionetwork.cloud",
                x = "/",
                u = "https://docs.ionetwork.cloud",
                h = "https://docs.ionetwork.cloud",
                _ = [{
                    label: "IO Intelligence",
                    href: "/intelligence",
                    image: n.default
                }, {
                    label: "Cloud",
                    href: "/cloud",
                    image: r.default
                }, {
                    label: "Worker",
                    href: "https://worker.".concat(C.Z.PRODUCT_DOMAIN, "/worker/devices"),
                    image: i.default,
                    target: "_blank"
                }, {
                    label: "Explorer",
                    href: "https://explorer.".concat(C.Z.PRODUCT_DOMAIN, "/explorer/home"),
                    image: p.default,
                    target: "_blank"
                }],
                E = [{
                    label: "About us",
                    href: "/about-us",
                    description: "Get to know io better",
                    icon: c
                }, {
                    label: "Team and Investors",
                    href: "/team",
                    description: "Team, Investors, and Advisors",
                    icon: l
                }, {
                    label: "FAQs",
                    href: "/faq",
                    description: "Frequently asked questions",
                    icon: o => (0, e.jsxs)("svg", {
                        width: 17,
                        height: 14,
                        ...o,
                        viewBox: "0 0 18 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, e.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.23131 2.19019C5.99999 1.17416 7.23198 0.361679 9 0.361679C10.768 0.361679 12 1.17416 12.7687 2.19018C13.3237 2.92376 13.641 3.76559 13.7669 4.49357C14.6217 4.61856 15.4066 4.97957 16.0195 5.56657C16.7987 6.31296 17.25 7.37744 17.25 8.6441C17.25 10.3487 16.2351 11.815 14.7784 12.4728C14.4009 12.6433 13.9567 12.4755 13.7862 12.098C13.6157 11.7205 13.7836 11.2762 14.1611 11.1057C15.0996 10.6819 15.75 9.73846 15.75 8.6441C15.75 7.74752 15.4387 7.08741 14.9819 6.64982C14.5195 6.20693 13.8579 5.94445 13.0805 5.94411C12.6664 5.94393 12.3308 5.6082 12.3308 5.19411C12.3308 4.67131 12.1139 3.81085 11.5725 3.0952C11.0542 2.41014 10.2457 1.86168 9 1.86168C7.75424 1.86168 6.94582 2.41014 6.42754 3.0952C5.88612 3.81085 5.66919 4.6713 5.66919 5.19411C5.66919 5.60582 5.33731 5.94056 4.92562 5.94409C4.14519 5.95078 3.48123 6.21453 3.01801 6.65656C2.56118 7.09251 2.25 7.74849 2.25 8.6441C2.25 9.73845 2.90044 10.6819 3.83895 11.1057C4.21646 11.2762 4.38428 11.7205 4.2138 12.098C4.04331 12.4755 3.59908 12.6433 3.22158 12.4728C1.76496 11.815 0.75 10.3488 0.75 8.6441C0.75 7.37647 1.2026 6.31557 1.98246 5.57138C2.59569 4.98619 3.37999 4.62635 4.23241 4.49761C4.35786 3.76871 4.67529 2.92513 5.23131 2.19019ZM8.83075 12.1325C9.24496 12.1325 9.58075 12.4683 9.58075 12.8825V12.8883C9.58075 13.3025 9.24496 13.6383 8.83075 13.6383C8.41654 13.6383 8.08075 13.3025 8.08075 12.8883V12.8825C8.08075 12.4683 8.41654 12.1325 8.83075 12.1325ZM8.99958 6.17877C7.66839 6.17877 6.59633 7.2507 6.59633 8.58202C6.59633 8.99623 6.93212 9.33202 7.34633 9.33202C7.76055 9.33202 8.09633 8.99623 8.09633 8.58202C8.09633 8.07918 8.49677 7.67877 8.99958 7.67877C9.49791 7.67877 9.902 8.08036 9.902 8.58202C9.902 8.86626 9.76563 9.0891 9.43707 9.27067L9.43705 9.27062L9.42889 9.27526C9.40657 9.28796 9.38078 9.30226 9.35219 9.31811C9.17337 9.41725 8.88524 9.57698 8.65353 9.7856C8.34887 10.0599 8.07254 10.4724 8.08023 11.0527C8.08572 11.4669 8.42593 11.7982 8.84011 11.7927C9.25428 11.7872 9.58559 11.447 9.5801 11.0328C9.57965 10.9992 9.58571 10.9865 9.58929 10.9794C9.59525 10.9676 9.61183 10.9412 9.65722 10.9003C9.70415 10.8581 9.76936 10.8114 9.86082 10.7558C9.92621 10.716 9.98527 10.683 10.0539 10.6447L10.0539 10.6447C10.0885 10.6254 10.1255 10.6047 10.1669 10.5811C10.8515 10.2013 11.402 9.53461 11.402 8.58202C11.402 7.24952 10.3239 6.17877 8.99958 6.17877Z",
                            fill: "url(#paint0_linear_15314_9545)",
                            style: {}
                        }), (0, e.jsx)("defs", {
                            children: (0, e.jsxs)("linearGradient", {
                                id: "paint0_linear_15314_9545",
                                x1: 9,
                                y1: "0.361679",
                                x2: 9,
                                y2: "13.6383",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, e.jsx)("stop", {
                                    stopColor: "#E3E3E3",
                                    style: {
                                        stopColor: "color(display-p3 0.8902 0.8902 0.8902)",
                                        stopOpacity: 1
                                    }
                                }), (0, e.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#6D6E71",
                                    style: {
                                        stopColor: "color(display-p3 0.4275 0.4314 0.4431)",
                                        stopOpacity: 1
                                    }
                                })]
                            })
                        })]
                    })
                }, {
                    label: "Contact Us",
                    href: C.Z.CONTACT_US_TYPEFORM_URL,
                    description: "We'd love to hear from you!",
                    icon: o => (0, e.jsxs)("svg", {
                        width: 20,
                        height: 20,
                        ...o,
                        viewBox: "0 0 20 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, e.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.61044 10.8943C12.9347 14.2176 13.6888 10.3729 15.8054 12.488C17.8459 14.5279 19.0187 14.9367 16.4333 17.5213C16.1095 17.7815 14.052 20.9125 6.82115 13.6837C-0.410581 6.45398 2.71864 4.39435 2.97896 4.07061C5.57054 1.47886 5.9722 2.65847 8.01273 4.69842C10.1293 6.8144 6.2862 7.571 9.61044 10.8943Z",
                            stroke: "url(#paint0_linear_15314_9584)",
                            style: {},
                            strokeWidth: "1.25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, e.jsx)("defs", {
                            children: (0, e.jsxs)("linearGradient", {
                                id: "paint0_linear_15314_9584",
                                x1: "10.0007",
                                y1: "2.58398",
                                x2: "10.0007",
                                y2: "18.4173",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, e.jsx)("stop", {
                                    stopColor: "#E3E3E3",
                                    style: {
                                        stopColor: "color(display-p3 0.8902 0.8902 0.8902)",
                                        stopOpacity: 1
                                    }
                                }), (0, e.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#6D6E71",
                                    style: {
                                        stopColor: "color(display-p3 0.4275 0.4314 0.4431)",
                                        stopOpacity: 1
                                    }
                                })]
                            })
                        })]
                    }),
                    target: "_blank"
                }],
                L = [{
                    value: "products",
                    label: "Products",
                    items: _
                }, {
                    value: "company",
                    label: "Company",
                    items: E.filter(o => !o.hidden)
                }, {
                    value: "documentation",
                    label: "Docs",
                    href: "https://docs.ionetwork.cloud",
                    target: "_blank"
                }],
                A = [{
                    value: "twitter",
                    label: "X",
                    iconName: "twitter",
                    href: "https://x.com/ionet"
                }, {
                    value: "discord",
                    label: "Discord",
                    iconName: "discord",
                    href: "https://discord.com/invite/ionetofficial"
                }, {
                    value: "telegram",
                    label: "Telegram",
                    iconName: "telegram",
                    href: "https://t.me/io_net"
                }, {
                    value: "linkedin",
                    label: "LinkedIn",
                    iconName: "linkedin",
                    href: "https://www.linkedin.com/company/ionet-official"
                }]
        },
        49354: function (o, t, s) {
            s.d(t, {
                cn: function () {
                    return r
                }
            });
            var e = s(44839),
                l = s(96164);

            function r() {
                for (var o = arguments.length, t = Array(o), s = 0; s < o; s++) t[s] = arguments[s];
                return (0, l.m6)((0, e.W)(t))
            }
        },
        30190: function (o, t, s) {
            s.d(t, {
                XX: function () {
                    return n
                },
                Xp: function () {
                    return c
                },
                _Y: function () {
                    return C
                },
                rG: function () {
                    return a
                }
            });
            var e = s(83981),
                l = s(33529),
                r = s(87358),
                i = s(11714);
            let p = !1,
                n = async () => {
                    if (e.Z.AMPLITUDE_TRACKING_ENABLED && e.Z.AMPLITUDE_KEY) {
                        if (p) {
                            console.log("Amplitude already initialized");
                            return
                        }
                        p = !0, console.log("Initializing Amplitude");
                        try {
                            let o = (0, i.k)();
                            await l.init(e.Z.AMPLITUDE_KEY, {
                                autocapture: {
                                    pageViews: !0,
                                    sessions: !0,
                                    attribution: !0
                                }
                            });
                            let t = new URLSearchParams(window.location.search);
                            return console.log("Amplitude init: searchParams", [...t].length > 0 ? Object.fromEntries(t.entries()) : "none"), l.add(o), l.add((0, r.J8)()), l
                        } catch (o) {
                            console.log(o)
                        }
                    }
                };

            function C(o) {
                try {
                    return new URL(o).hostname
                } catch (o) {
                    return "direct"
                }
            }
            let a = (o, t) => {
                try {
                    if (!e.Z.AMPLITUDE_TRACKING_ENABLED || !e.Z.AMPLITUDE_KEY) {
                        console.log("amplitude track event", o, t);
                        return
                    }
                    l.track(o, {
                        ...t,
                        source: "web"
                    })
                } catch (o) {
                    console.log("amplitude track event error", o)
                }
            };
            window.trackAmplitudeEvent = a;
            let c = () => l.getDeviceId()
        },
        6432: function (o, t, s) {
            s.d(t, {
                L: function () {
                    return l
                }
            });
            var e = s(30190);
            let l = (o, t) => {
                e.rG(o, t)
            }
        },
        19377: function (o, t, s) {
            s.r(t), t.default = {
                src: "/_next/static/media/cloud.aea5aad0.svg",
                height: 9,
                width: 120,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        91825: function (o, t, s) {
            s.r(t), t.default = {
                src: "/_next/static/media/explorer.b14d977d.svg",
                height: 9,
                width: 164,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        73665: function (o, t, s) {
            s.r(t), t.default = {
                src: "/_next/static/media/intelligence.9938a9b0.svg",
                height: 16,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        97759: function (o, t, s) {
            s.r(t), t.default = {
                src: "/_next/static/media/worker.ff0e7c71.svg",
                height: 9,
                width: 136,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);