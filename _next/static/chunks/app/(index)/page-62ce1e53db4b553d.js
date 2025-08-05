! function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "694296fb-b464-4a3a-897f-5ef60bebe16e", e._sentryDebugIdIdentifier = "sentry-dbid-694296fb-b464-4a3a-897f-5ef60bebe16e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2123], {
        47003: function (e, t, l) {
            Promise.resolve().then(l.bind(l, 8244))
        },
        50551: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
            let s = l(99920);
            l(57437), l(2265);
            let r = s._(l(40148));

            function a(e, t) {
                var l;
                let s = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: l,
                            pastDelay: s
                        } = e;
                        return null
                    }
                };
                "function" == typeof e && (s.loader = e);
                let a = {
                    ...s,
                    ...t
                };
                return (0, r.default)({
                    ...a,
                    modules: null == (l = a.loadableGenerated) ? void 0 : l.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        10912: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
            let s = l(55592);

            function r(e) {
                let {
                    reason: t,
                    children: l
                } = e;
                if ("undefined" == typeof window) throw new s.BailoutToCSRError(t);
                return l
            }
        },
        40148: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return d
                }
            });
            let s = l(57437),
                r = l(2265),
                a = l(10912),
                i = l(61481);

            function n(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let o = {
                    loader: () => Promise.resolve(n(() => null)),
                    loading: null,
                    ssr: !0
                },
                d = function (e) {
                    let t = {
                            ...o,
                            ...e
                        },
                        l = (0, r.lazy)(() => t.loader().then(n)),
                        d = t.loading;

                    function c(e) {
                        let n = d ? (0, s.jsx)(d, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            o = t.ssr ? (0, s.jsxs)(s.Fragment, {
                                children: ["undefined" == typeof window ? (0, s.jsx)(i.PreloadCss, {
                                    moduleIds: t.modules
                                }) : null, (0, s.jsx)(l, {
                                    ...e
                                })]
                            }) : (0, s.jsx)(a.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, s.jsx)(l, {
                                    ...e
                                })
                            });
                        return (0, s.jsx)(r.Suspense, {
                            fallback: n,
                            children: o
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        61481: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
            let s = l(57437),
                r = l(58512);

            function a(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let l = (0, r.getExpectedRequestStore)("next/dynamic css"),
                    a = [];
                if (l.reactLoadableManifest && t) {
                    let e = l.reactLoadableManifest;
                    for (let l of t) {
                        if (!e[l]) continue;
                        let t = e[l].files.filter(e => e.endsWith(".css"));
                        a.push(...t)
                    }
                }
                return 0 === a.length ? null : (0, s.jsx)(s.Fragment, {
                    children: a.map(e => (0, s.jsx)("link", {
                        precedence: "dynamic",
                        rel: "stylesheet",
                        href: l.assetPrefix + "/_next/" + encodeURI(e),
                        as: "style"
                    }, e))
                })
            }
        },
        8244: function (e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function () {
                    return el
                }
            });
            var s = l(57437),
                r = l(2265),
                a = e => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7",
                    height: "7",
                    viewBox: "0 0 7 7",
                    fill: "none",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M4 3H7V4H4V7H3V4H0V3H3V0H4V3Z",
                        fill: "white",
                        fillOpacity: "0.1"
                    })
                });
            let i = [{
                    icon: e => (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "33",
                        height: "32",
                        viewBox: "0 0 33 32",
                        fill: "none",
                        ...e,
                        children: [(0, s.jsx)("path", {
                            d: "M20.2891 5.89473V4M25.2651 7.23452L26.6048 5.89473M26.6179 12.2105H28.5125",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M27.1905 18.0117V21.974C27.1905 25.678 24.5678 28.0003 20.8565 28.0003H10.8418C7.13041 28.0003 4.50781 25.6891 4.50781 21.974V11.3463C4.50781 7.63003 7.13041 5.31763 10.8418 5.31763H14.1898",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M15.8672 11.5793H20.9199V16.632",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M4.5 18.3337C5.32349 18.4609 6.1672 18.5268 7.02631 18.5268C12.567 18.5268 17.4668 15.7828 20.4406 11.5795",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }),
                    title: "On Demand",
                    description: "Scale from single GPUs to massive clusters instantly. Auto-scaling infrastructure that grows with your workloads."
                }, {
                    icon: e => (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "33",
                        height: "32",
                        viewBox: "0 0 33 32",
                        fill: "none",
                        ...e,
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18.3793 19.9693H14.6225C13.4662 19.9693 12.5273 19.0319 12.5273 17.8742V14.1174C12.5273 12.9596 13.4662 12.0208 14.6225 12.0208H18.3793C19.537 12.0208 20.4758 12.9596 20.4758 14.1174V17.8742C20.4758 19.0319 19.537 19.9693 18.3793 19.9693Z",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M28.5014 4L23.2539 9.24755",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M23.0781 4.012L28.4967 4L28.4847 9.41852",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M28.5014 27.9976L23.2539 22.75",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M23.0781 27.9847L28.4967 27.9967L28.4847 22.5781",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M4.5 4L9.74755 9.24755",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M9.91852 4.012L4.5 4L4.512 9.41852",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M4.5 27.9976L9.74755 22.75",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M9.91852 27.9847L4.5 27.9967L4.512 22.5781",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }),
                    title: "Scalable",
                    description: "Instant access to over 30k verifIed GPUs across 130+ countries. No approvals, contracts, or wait lists, deploy in minutes."
                }, {
                    icon: e => (0, s.jsxs)("svg", {
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e,
                        children: [(0, s.jsx)("path", {
                            d: "M15.9853 19.9291L18.2673 15.9993H13.7305L16.0099 12.0684",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M6.69141 20.1107C6.69141 23.1479 8.59205 25.2988 11.6383 25.2988H20.3553C23.4028 25.2988 25.293 23.1479 25.293 20.1107V11.8958C25.293 8.84959 23.4028 6.69727 20.3553 6.69727H11.6383C8.60113 6.69727 6.69141 8.84959 6.69141 11.8958V20.1107Z",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M12.8164 27.9973V25.3027M19.1816 27.9973V25.3027",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M6.69463 12.8242H4M6.69463 19.1793H4",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M12.8164 6.70047V4.00586M19.1816 6.70047V4.00586",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M27.998 12.8223H25.293M27.998 19.1773H25.293",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }),
                    title: "Reliable & Fast",
                    description: "Enterprise-grade performance with proven uptime across global infrastructure. io.cloud streamlines deployment, eliminating infrastructure bottlenecks."
                }, {
                    icon: e => (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "33",
                        height: "32",
                        viewBox: "0 0 33 32",
                        fill: "none",
                        ...e,
                        children: [(0, s.jsx)("path", {
                            d: "M28.4974 19.2082H23.4211C21.5569 19.2082 20.0469 17.6968 20.0469 15.8327C20.0469 13.9698 21.5569 12.4584 23.4211 12.4584H28.4974",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M23.1605 15.7579H23.1562",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            d: "M4.5 14.2273V11.4978C4.5 7.86279 7.44616 4.91663 11.0812 4.91663H21.9188C25.5539 4.91663 28.5 7.86279 28.5 11.4978V20.4972C28.5 24.1322 25.5539 27.0784 21.9188 27.0784H17.3511",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.05629 27.0096C7.98732 26.3519 6.99358 25.5774 6.09326 24.7018C5.45888 24.0699 4.97629 23.3019 4.6831 22.4562C4.1551 20.8072 4.77132 18.9236 6.50192 18.3658C7.41261 18.0726 8.40894 18.2399 9.17434 18.8146C9.93716 18.2412 10.9322 18.0751 11.8416 18.3658C13.5722 18.9236 14.1923 20.8072 13.6656 22.4562C13.3724 23.3032 12.8898 24.0726 12.2554 24.7043C11.3551 25.5787 10.3614 26.3519 9.2924 27.0096L9.17694 27.081L9.05629 27.0096Z",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }),
                    title: "Cheaper",
                    description: "Access top-tier GPUs like H100s at up to 70% lower cost than centralized alternatives. Startups report saving up to $10k/month compared to AWS and GCP."
                }],
                n = () => (0, s.jsxs)("section", {
                    className: "relative mt-[100px] flex flex-col gap-12 overflow-hidden px-4 lg:mt-[121px] lg:items-center lg:gap-[56px]",
                    children: [(0, s.jsxs)("h2", {
                        className: "text-center text-5xl font-medium leading-[44px] text-white",
                        children: ["Built for AI Teams, ", (0, s.jsx)("br", {}), "Not Big Tech Margins"]
                    }), (0, s.jsxs)("div", {
                        className: "relative flex w-full max-w-[1198px] flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-0",
                        children: [i.map(e => {
                            let {
                                icon: t,
                                title: l,
                                description: r
                            } = e;
                            return (0, s.jsxs)("div", {
                                className: "flex flex-shrink-0 flex-col items-center gap-3 px-[6px] text-center lg:mx-auto lg:items-start lg:justify-center lg:px-0 lg:py-9 lg:text-left",
                                children: [(0, s.jsx)(t, {
                                    className: "h-8 w-8 text-white"
                                }), (0, s.jsx)("h3", {
                                    className: "text-xl font-medium leading-[32px] text-white",
                                    children: l
                                }), (0, s.jsx)("p", {
                                    className: "text-base font-normal leading-[150%] text-grey-500 lg:max-w-[327px]",
                                    children: r
                                })]
                            }, l)
                        }), (0, s.jsx)("div", {
                            className: "absolute left-[50%] top-0 h-full w-[1px] border-r border-[#191919] max-lg:hidden"
                        }), (0, s.jsx)("div", {
                            className: "absolute left-0 top-0 h-full w-[1px] border-r border-[#191919] max-lg:hidden"
                        }), (0, s.jsx)("div", {
                            className: "absolute right-0 top-0 h-full w-[1px] border-r border-[#191919] max-lg:hidden"
                        }), (0, s.jsx)(a, {
                            className: "absolute bottom-[247px] left-[50%] z-[4] translate-x-[-3px] max-lg:hidden"
                        }), (0, s.jsx)(a, {
                            className: "absolute bottom-[247px] left-0 z-[4] translate-x-[-3px] max-lg:hidden"
                        }), (0, s.jsx)(a, {
                            className: "absolute bottom-[247px] right-0 z-[4] translate-x-[3px] max-lg:hidden"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "absolute bottom-[250px] h-[1px] w-[100vw] border-b border-[#191919] max-lg:hidden"
                    })]
                });
            var o = l(87600),
                d = l(66648),
                c = {
                    src: "/_next/static/media/containers-icon.e47c3a32.svg",
                    height: 16,
                    width: 16,
                    blurWidth: 0,
                    blurHeight: 0
                },
                x = l(65461),
                p = l(83981),
                h = l(6432);
            let u = [{
                    icon: e => (0, s.jsx)(d.default, {
                        src: c,
                        alt: "containersIcon",
                        ...e,
                        width: "16",
                        height: "16"
                    }),
                    title: "Containers",
                    description: "Native Support For Containerized AI Workloads With Familiar Tooling",
                    imgSrc: "containers-card-bg.svg",
                    url: "container"
                }, {
                    icon: e => (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        ...e,
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.68719 1.3544C7.33328 1.41785 7.00266 1.58497 6.7458 1.83027C6.46961 2.09401 6.2915 2.41844 6.21067 2.80505C6.17944 2.95438 6.17585 3.29254 6.20382 3.44892C6.32119 4.10501 6.79406 4.6558 7.4199 4.86538C7.86841 5.01557 8.38774 4.97795 8.8125 4.76447L8.92997 4.70544L10.1101 5.885L11.2902 7.06454L11.225 7.19907C11.1892 7.27307 11.1443 7.3819 11.1253 7.44092L11.0908 7.54823L10.4243 7.55195L9.75782 7.55567L9.73588 7.48021C9.58851 6.97355 9.18783 6.52805 8.69639 6.3245C8.01408 6.04187 7.23499 6.19642 6.71329 6.71788C6.50753 6.92355 6.33091 7.21591 6.25521 7.4762L6.2321 7.55567L5.56689 7.55195L4.90167 7.54823L4.85973 7.42346C4.65206 6.80576 4.1404 6.3564 3.48516 6.21623C3.33571 6.18427 2.98521 6.18026 2.82724 6.20872C2.12731 6.33483 1.5613 6.85917 1.37801 7.55128C1.3353 7.71256 1.33334 7.73212 1.33334 7.99894C1.33334 8.26576 1.3353 8.28532 1.37801 8.4466C1.53779 9.04997 1.98854 9.53151 2.57126 9.72138C2.653 9.74802 2.76819 9.77851 2.82724 9.78916C2.98521 9.81762 3.33571 9.81361 3.48516 9.78165C4.1404 9.64149 4.65206 9.19212 4.85973 8.57442L4.90167 8.44965L5.56689 8.44593L6.2321 8.44221L6.25521 8.52168C6.33091 8.78197 6.50753 9.07433 6.71329 9.28C7.55718 10.1235 8.95922 9.94047 9.56679 8.90751C9.63114 8.79813 9.70148 8.63593 9.73588 8.51767L9.75782 8.44221L10.4243 8.44593L11.0908 8.44965L11.1253 8.55696C11.1443 8.61598 11.1892 8.72481 11.225 8.79881L11.2902 8.93334L10.1101 10.1129L8.92997 11.2924L8.8125 11.2334C8.38774 11.0199 7.86841 10.9823 7.4199 11.1325C6.87699 11.3143 6.43807 11.7606 6.26594 12.3057C6.20295 12.5052 6.1846 12.6317 6.18493 12.8637C6.18553 13.2662 6.30367 13.6218 6.54252 13.9399C6.88762 14.3995 7.42146 14.6666 7.99496 14.6666C8.68592 14.6666 9.31264 14.2772 9.6259 13.6531C9.87372 13.1595 9.86977 12.5399 9.6156 12.041L9.5573 11.9266L10.7397 10.7436L11.9222 9.56071L12.045 9.62228C12.7273 9.96431 13.5526 9.83864 14.1056 9.3085C14.6042 8.83047 14.7878 8.12432 14.5863 7.45943C14.5382 7.30076 14.4144 7.05793 14.3106 6.91867C14.1493 6.70214 13.8973 6.49114 13.6565 6.37101C13.159 6.12274 12.5459 6.12449 12.045 6.3756L11.9222 6.43717L10.7397 5.25425L9.5573 4.07133L9.6156 3.95686C9.73287 3.72667 9.79335 3.49678 9.80758 3.22714C9.85552 2.31891 9.20074 1.51031 8.29012 1.35323C8.13299 1.32612 7.84175 1.32669 7.68719 1.3544ZM7.76966 2.24712C7.59318 2.29335 7.48602 2.3553 7.34901 2.49027C7.24664 2.59112 7.21576 2.63265 7.16812 2.73351C7.03305 3.01953 7.03422 3.2823 7.17179 3.55966C7.27859 3.77499 7.45351 3.9294 7.69088 4.01796C7.81977 4.06605 8.07196 4.07884 8.21006 4.04428C8.7881 3.89968 9.08701 3.26743 8.82638 2.74066C8.6302 2.34418 8.18785 2.13758 7.76966 2.24712ZM3.03481 7.0769C3.01906 7.08052 2.97075 7.09042 2.92745 7.09888C2.88415 7.10735 2.79396 7.14029 2.72704 7.1721C2.62658 7.21983 2.58415 7.25143 2.48368 7.35329C2.39754 7.44066 2.34826 7.50486 2.31492 7.57317C2.13096 7.95013 2.19718 8.35997 2.48915 8.65155C2.5825 8.74477 2.62931 8.77898 2.72704 8.82537C2.88924 8.90236 2.97709 8.92179 3.15649 8.92036C3.28069 8.91938 3.32666 8.91238 3.42117 8.8801C3.67048 8.79492 3.85672 8.63337 3.96453 8.40873C4.03917 8.2532 4.05833 8.1695 4.05833 7.99894C4.05833 7.82839 4.03917 7.74468 3.96453 7.58915C3.82108 7.29024 3.5235 7.09349 3.18944 7.07666C3.12014 7.07317 3.05056 7.07328 3.03481 7.0769ZM7.84842 7.08274C7.6501 7.11888 7.48341 7.20586 7.34245 7.34674C7.15941 7.52972 7.07254 7.7396 7.07254 7.99894C7.07254 8.25828 7.15941 8.46816 7.34245 8.65114C7.52551 8.8341 7.7355 8.92092 7.99496 8.92092C8.25917 8.92092 8.46584 8.83407 8.65345 8.64417C8.83286 8.46258 8.91679 8.25969 8.91743 8.00609C8.91786 7.83324 8.89759 7.74348 8.82252 7.58586C8.71887 7.3682 8.50323 7.18659 8.26075 7.11276C8.14883 7.07866 7.95011 7.0642 7.84842 7.08274ZM12.6949 7.08368C12.3685 7.14228 12.1021 7.36902 11.9767 7.695C11.9429 7.78286 11.9396 7.81 11.9396 7.99894C11.9396 8.18788 11.9429 8.21502 11.9767 8.30288C12.0308 8.44334 12.099 8.55095 12.1967 8.64974C12.3026 8.75683 12.4187 8.82879 12.5687 8.88026C12.666 8.91362 12.7067 8.91953 12.8406 8.91976C13.1153 8.92023 13.3123 8.84154 13.502 8.65556C13.6038 8.55575 13.6714 8.45092 13.7251 8.30936C13.767 8.19918 13.7696 8.18043 13.7696 7.99894C13.7696 7.81745 13.767 7.7987 13.7251 7.68852C13.5856 7.32116 13.2753 7.09476 12.8855 7.07599C12.8214 7.0729 12.7357 7.07636 12.6949 7.08368ZM7.76592 11.9567C7.27347 12.0889 6.97778 12.5825 7.09502 13.0767C7.10364 13.113 7.13653 13.1975 7.16812 13.2644C7.21576 13.3652 7.24664 13.4068 7.34901 13.5076C7.43642 13.5937 7.50065 13.643 7.56899 13.6763C8.04803 13.9098 8.5934 13.7281 8.82638 13.2572C9.04764 12.81 8.86169 12.2504 8.42001 12.0343C8.35551 12.0027 8.26434 11.9672 8.21741 11.9553C8.10929 11.9279 7.87042 11.9287 7.76592 11.9567Z",
                            fill: "#737373"
                        })
                    }),
                    title: "Ray Cluster",
                    description: "One-Line Deployment For ML Workloads With Pre-Configured Environments",
                    imgSrc: "ray-card-bg.svg",
                    url: "clusters"
                }, {
                    icon: e => (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        ...e,
                        children: (0, s.jsx)("path", {
                            d: "M7.44395 4C7.1421 4 6.89747 4.24246 6.89747 4.54165V5.58419C6.89747 5.88316 7.1421 6.12591 7.44395 6.12591H8.5294C8.83126 6.12591 9.07629 5.88316 9.07629 5.58419V4.54165C9.07629 4.24246 8.83126 4 8.5294 4H7.44395ZM10.1119 5.64959C9.88519 5.64959 9.7013 5.83501 9.7013 6.06312V6.85866C9.7013 7.08701 9.88519 7.2723 10.1119 7.2723H10.9275C11.1542 7.2723 11.3379 7.08701 11.3379 6.85866V6.06312C11.3379 5.83501 11.1542 5.64959 10.9275 5.64959H10.1119ZM5.04588 5.64959C4.81921 5.64959 4.6353 5.83501 4.6353 6.06312V6.85866C4.6353 7.08701 4.81921 7.2723 5.04588 7.2723H5.86135C6.08798 7.2723 6.27197 7.08701 6.27197 6.85866V6.06312C6.27197 5.83501 6.08798 5.64959 5.86135 5.64959H5.04588ZM7.44395 6.56208C7.1421 6.56208 6.89747 6.80441 6.89747 7.10379V8.14624C6.89747 8.44538 7.1421 8.68805 7.44395 8.68805H8.5294C8.83126 8.68805 9.07629 8.44538 9.07629 8.14624V7.10379C9.07629 6.80441 8.83126 6.56208 8.5294 6.56208H7.44395ZM12.2098 7.05081C12.0412 7.05081 11.9045 7.18848 11.9045 7.35849V7.95029C11.9045 8.11994 12.0412 8.25771 12.2098 8.25771H12.8165C12.9851 8.25771 13.1218 8.11994 13.1218 7.95029V7.35849C13.1218 7.18848 12.9851 7.05081 12.8165 7.05081H12.2098ZM3.18361 7.05081C3.01503 7.05081 2.87818 7.18848 2.87818 7.35849V7.95029C2.87818 8.11994 3.01503 8.25771 3.18361 8.25771H3.79012C3.95891 8.25771 4.0956 8.11994 4.0956 7.95029V7.35849C4.0956 7.18848 3.95891 7.05081 3.79012 7.05081H3.18361ZM10.1119 7.67367C9.88519 7.67367 9.7013 7.8588 9.7013 8.08693V8.88273C9.7013 9.1109 9.88519 9.29611 10.1119 9.29611H10.9275C11.1542 9.29611 11.3379 9.1109 11.3379 8.88273V8.08693C11.3379 7.8588 11.1542 7.67367 10.9275 7.67367H10.1119ZM5.04588 7.67367C4.81921 7.67367 4.6353 7.8588 4.6353 8.08693V8.88273C4.6353 9.1109 4.81921 9.29611 5.04588 9.29611H5.86135C6.08798 9.29611 6.27197 9.1109 6.27197 8.88273V8.08693C6.27197 7.8588 6.08798 7.67367 5.86135 7.67367H5.04588ZM12.2098 8.67615C12.0412 8.67615 11.9045 8.81374 11.9045 8.98354V9.57537C11.9045 9.74505 12.0412 9.88285 12.2098 9.88285H12.8165C12.9851 9.88285 13.1218 9.74505 13.1218 9.57537V8.98354C13.1218 8.81374 12.9851 8.67615 12.8165 8.67615H12.2098ZM3.18361 8.67615C3.01503 8.67615 2.87818 8.81374 2.87818 8.98354V9.57537C2.87818 9.74505 3.01503 9.88285 3.18361 9.88285H3.79012C3.95891 9.88285 4.0956 9.74505 4.0956 9.57537V8.98354C4.0956 8.81374 3.95891 8.67615 3.79012 8.67615H3.18361ZM7.44395 9.10187C7.1421 9.10187 6.89747 9.34444 6.89747 9.64365V10.6862C6.89747 10.9854 7.1421 11.2277 7.44395 11.2277H8.5294C8.83126 11.2277 9.07629 10.9854 9.07629 10.6862V9.64365C9.07629 9.34444 8.83126 9.10187 8.5294 9.10187H7.44395ZM14.0028 9.54728C13.8774 9.54728 13.7759 9.64959 13.7759 9.77562V10.2149C13.7759 10.341 13.8774 10.4431 14.0028 10.4431H14.4531C14.5781 10.4431 14.6795 10.341 14.6795 10.2149V9.77562C14.6795 9.64959 14.5781 9.54728 14.4531 9.54728H14.0028ZM1.54715 9.54728C1.42193 9.54728 1.32049 9.64959 1.32049 9.77562V10.2149C1.32049 10.341 1.42193 10.4431 1.54715 10.4431H1.99728C2.12257 10.4431 2.22399 10.341 2.22399 10.2149V9.77562C2.22399 9.64959 2.12257 9.54728 1.99728 9.54728H1.54715ZM10.1119 9.69811C9.88519 9.69811 9.7013 9.88311 9.7013 10.1113V10.9069C9.7013 11.1353 9.88519 11.3204 10.1119 11.3204H10.9275C11.1542 11.3204 11.3379 11.1353 11.3379 10.9069V10.1113C11.3379 9.88311 11.1542 9.69811 10.9275 9.69811H10.1119ZM5.04588 9.69811C4.81921 9.69811 4.6353 9.88311 4.6353 10.1113V10.9069C4.6353 11.1353 4.81921 11.3204 5.04588 11.3204H5.86135C6.08798 11.3204 6.27197 11.1353 6.27197 10.9069V10.1113C6.27197 9.88311 6.08798 9.69811 5.86135 9.69811H5.04588ZM12.2098 10.3136C12.0412 10.3136 11.9045 10.4516 11.9045 10.6216V11.2132C11.9045 11.3832 12.0412 11.5206 12.2098 11.5206H12.8165C12.9851 11.5206 13.1218 11.3832 13.1218 11.2132V10.6216C13.1218 10.4516 12.9851 10.3136 12.8165 10.3136H12.2098ZM3.18361 10.3136C3.01503 10.3136 2.87818 10.4516 2.87818 10.6216V11.2132C2.87818 11.3832 3.01503 11.5206 3.18361 11.5206H3.79012C3.95891 11.5206 4.0956 11.3832 4.0956 11.2132V10.6216C4.0956 10.4516 3.95891 10.3136 3.79012 10.3136H3.18361ZM14.0028 10.8853C13.8774 10.8853 13.7759 10.9875 13.7759 11.1135V11.5528C13.7759 11.6786 13.8774 11.7812 14.0028 11.7812H14.4531C14.5781 11.7812 14.6795 11.6786 14.6795 11.5528V11.1135C14.6795 10.9875 14.5781 10.8853 14.4531 10.8853H14.0028ZM1.54715 10.8853C1.42193 10.8853 1.32049 10.9875 1.32049 11.1135V11.5528C1.32049 11.6786 1.42193 11.7812 1.54715 11.7812H1.99728C2.12257 11.7812 2.22399 11.6786 2.22399 11.5528V11.1135C2.22399 10.9875 2.12257 10.8853 1.99728 10.8853H1.54715ZM15.4894 11.3242C15.3949 11.3242 15.3181 11.4013 15.3181 11.4965V11.8279C15.3181 11.9228 15.3949 12 15.4894 12H15.8291C15.9233 12 16 11.9228 16 11.8279V11.4965C16 11.4013 15.9233 11.3242 15.8291 11.3242H15.4894ZM0.17116 11.3242C0.0766894 11.3242 0 11.4013 0 11.4965V11.8279C0 11.9228 0.0766894 12 0.17116 12H0.510606C0.605104 12 0.68158 11.9228 0.68158 11.8279V11.4965C0.68158 11.4013 0.605104 11.3242 0.510606 11.3242H0.17116Z",
                            fill: "#737373"
                        })
                    }),
                    title: "Bare Metal",
                    description: "Direct GPU Access With Root-Level Control for Maximum Performance",
                    imgSrc: "bare-metal-card-bg.svg",
                    url: "bare-metal"
                }],
                m = () => (0, s.jsxs)("section", {
                    className: "relative mt-[100px] flex flex-col gap-12 px-4 lg:mt-[120px] lg:gap-[56px]",
                    children: [(0, s.jsx)("h2", {
                        className: "text-center text-5xl font-medium leading-[44px] text-white",
                        children: "Deploy Your Way"
                    }), (0, s.jsx)("div", {
                        className: "flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-4 xl:gap-6",
                        children: u.map(e => {
                            let {
                                icon: t,
                                title: l,
                                description: r,
                                imgSrc: a,
                                url: i
                            } = e;
                            return (0, s.jsxs)("a", {
                                target: "_blank",
                                href: "https://cloud.".concat(p.Z.PRODUCT_DOMAIN, "/cloud/").concat(i),
                                onClick: () => {
                                    (0, h.L)(x.n.TRY_IT_NOW_CLICKED, {
                                        type: l
                                    })
                                },
                                "aria-description": "Try ".concat(l, " on io.cloud"),
                                className: "group relative flex h-[343px] w-[343px] flex-shrink-0 cursor-pointer flex-col overflow-hidden border border-[#262626] pt-4 text-left lg:w-[325px] xl:h-[550px] xl:w-[384px] xl:pt-6",
                                children: [(0, s.jsxs)("div", {
                                    className: "ml-4 flex w-fit items-center gap-[6px] rounded-md border border-[#262626] p-1 pr-2 text-[#737373] xl:ml-6",
                                    children: [(0, s.jsx)(t, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "text-xs font-medium leading-4",
                                        children: l
                                    })]
                                }), (0, s.jsx)("h3", {
                                    className: "ml-4 mt-4 text-lg font-medium leading-[160%] text-white xl:ml-6 xl:pr-6",
                                    children: l
                                }), (0, s.jsx)("p", {
                                    className: "ml-4 mt-2 text-base font-normal leading-[150%] text-grey-500 xl:ml-6 xl:pr-6",
                                    children: r
                                }), (0, s.jsx)(d.default, {
                                    src: "/images/home/mobile/".concat(a),
                                    alt: l,
                                    fill: !0,
                                    className: "absolute bottom-0 object-cover xl:hidden"
                                }), (0, s.jsx)(d.default, {
                                    src: "/images/home/desktop/".concat(a),
                                    alt: l,
                                    fill: !0,
                                    className: "absolute bottom-0 object-cover max-xl:hidden"
                                }), (0, s.jsxs)("div", {
                                    className: "absolute bottom-[-100px] flex w-full items-center justify-center gap-1 rounded-none bg-white px-4 py-[10px] text-grey-1500 transition-all duration-200 ease-in-out group-hover:bottom-0",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-sm font-normal leading-5 text-grey-1500",
                                        children: "Try It Today"
                                    }), (0, s.jsx)(o.L, {
                                        className: "h-4 w-4"
                                    })]
                                })]
                            }, l)
                        })
                    })]
                });
            var g = l(71016);
            let f = () => (0, s.jsxs)("section", {
                    className: "relative mt-[100px] flex w-full items-center justify-center gap-4 overflow-hidden mix-blend-luminosity md:h-[436px] md:items-end xl:mx-auto xl:max-w-[1440px]",
                    children: [(0, s.jsx)("div", {
                        className: "absolute left-[50%] top-0 z-[-1] h-full w-full translate-x-[-50%]",
                        style: {
                            background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 75%, #000 100%)"
                        }
                    }), (0, s.jsx)("video", {
                        src: "/world-map-pins.mp4",
                        width: "100%",
                        height: "100%",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        className: "absolute top-[-105px] z-[-2] aspect-[720/199] h-full min-w-[1440px] max-w-[1440px] object-cover"
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-end lg:justify-between xl:w-[1198px]",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-4 px-4 lg:items-start lg:px-0 lg:text-left",
                            children: [(0, s.jsxs)("h2", {
                                className: "text-center text-5xl font-medium leading-[44px] text-white lg:text-left lg:text-7xl lg:leading-[64px]",
                                children: ["GPUs in 130+", (0, s.jsx)("br", {}), "Countries"]
                            }), (0, s.jsxs)("p", {
                                className: "text-center text-base font-normal leading-[150%] text-grey-500 lg:text-left",
                                children: ["Powering a vast network of GPUs seamlessly connected across", (0, s.jsx)("br", {}), "130+ countries — delivering unmatched scalability, speed, and performance"]
                            }), (0, s.jsx)(g.StartButton, {
                                className: "!mt-0 pr-4 max-lg:hidden",
                                title: "Try io.cloud",
                                trackingEvent: {
                                    trackingType: x.n.GET_STARTED_CLICKED
                                },
                                url: "/cloud",
                                rightIconClassName: "relative",
                                rightIcon: "0px",
                                inverted: !0
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex h-[128px] w-[343px] items-center justify-center rounded-[20px] lg:mb-[56px] lg:h-[148px] lg:w-[403px]",
                            style: {
                                background: "linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.05) -18.41%, rgba(0, 0, 0, 0.05) 100%)",
                                backdropFilter: "blur(4px)",
                                boxShadow: "0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset, 0px 24px 48px 0px rgba(255, 255, 255, 0.06) inset, 0px 0px 0px 1px rgba(255, 255, 255, 0.12) inset"
                            },
                            children: (0, s.jsxs)("div", {
                                className: "relative flex h-[112px] w-[327px] items-center justify-between rounded-[12px] bg-black p-6 lg:h-[132px] lg:w-[387px]",
                                style: {
                                    boxShadow: "0px -5px 1px 0px rgba(0, 0, 0, 0.75) inset, 0px 1px 1px 0px #171717 inset"
                                },
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1 lg:gap-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-2xl font-medium leading-9 text-white lg:text-[40px] lg:leading-[48px]",
                                        children: "5671+"
                                    }), (0, s.jsx)("div", {
                                        className: "text-base font-medium leading-6 text-[#737373] lg:text-md",
                                        children: "Active GPUs"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1 lg:gap-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-2xl font-medium leading-9 text-white lg:text-[40px] lg:leading-[48px]",
                                        children: "828+"
                                    }), (0, s.jsx)("div", {
                                        className: "text-base font-medium leading-6 text-[#737373] lg:text-md",
                                        children: "Active CPUs"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "absolute left-[50%] h-[84px] w-[1.5px] translate-x-[-50%] bg-[#ffffff0a]"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex w-[100vw] items-start justify-center px-4 md:w-fit lg:hidden",
                            children: (0, s.jsx)(g.StartButton, {
                                className: "!mt-0 w-full pr-4",
                                title: "Try io.cloud",
                                trackingEvent: {
                                    trackingType: x.n.GET_STARTED_CLICKED
                                },
                                url: "/cloud",
                                rightIconClassName: "relative",
                                rightIcon: "0px",
                                inverted: !0
                            })
                        })]
                    })]
                }),
                b = e => (0, s.jsxs)("svg", {
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M28 16.2618V11.6071C28 8.35089 25.9723 6.05078 22.7135 6.05078H9.28648C6.03676 6.05078 4 8.35089 4 11.6071V20.3898C4 23.646 6.02768 25.9462 9.28648 25.9462H14.2849",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                        d: "M4 13.1133H28",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                        d: "M22.4609 22.7266H27.9991",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.4606 25.4074L18.4766 22.7259L22.4606 20.043V25.4074Z",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                        d: "M9.57031 20.2637H13.5284",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                w = e => (0, s.jsxs)("svg", {
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.4914 8.45224C16.9742 8.72048 17.1481 9.3293 16.8798 9.81206L16.0669 11.2752H18.2994C18.6537 11.2752 18.9815 11.4627 19.1613 11.7681C19.3409 12.0735 19.3455 12.4511 19.1735 12.7609L17.535 15.7097C17.2667 16.1924 16.6579 16.3664 16.1751 16.0981C15.6923 15.8299 15.5185 15.2211 15.7867 14.7383L16.5997 13.2752H14.3671C14.0129 13.2752 13.685 13.0876 13.5053 12.7822C13.3256 12.4769 13.321 12.0992 13.4931 11.7894L15.1315 8.84065C15.3998 8.35788 16.0086 8.18398 16.4914 8.45224Z",
                        fill: "white"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.38781 8.56548C5.38781 6.21879 7.29005 4.31836 9.63493 4.31836H23.032C25.3785 4.31836 27.2792 6.21904 27.2792 8.56548V19.0199L29.0891 22.9584C29.1001 22.9825 29.1103 23.0071 29.1193 23.0319C29.9475 25.2919 28.2748 27.6867 25.8673 27.6867H6.79844C4.39277 27.6867 2.71832 25.2937 3.54633 23.0321C3.55549 23.0071 3.56566 22.9824 3.57681 22.9583L5.38781 19.0197V8.56548ZM9.63493 6.31836C8.39409 6.31836 7.38781 7.32387 7.38781 8.56548V19.2387C7.38781 19.3828 7.35661 19.5253 7.29636 19.6564L5.41273 23.7528C5.0908 24.6987 5.79356 25.6867 6.79844 25.6867H25.8673C26.8731 25.6867 27.5751 24.6979 27.2531 23.7528L25.3705 19.6561C25.3103 19.5252 25.2792 19.3828 25.2792 19.2387V8.56548C25.2792 7.32361 24.2739 6.31836 23.032 6.31836H9.63493Z",
                        fill: "white"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.5938 23.0059C13.5938 22.4536 14.0414 22.0059 14.5938 22.0059H18.0808C18.6331 22.0059 19.0808 22.4536 19.0808 23.0059C19.0808 23.5581 18.6331 24.0059 18.0808 24.0059H14.5938C14.0414 24.0059 13.5938 23.5581 13.5938 23.0059Z",
                        fill: "white"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.41406 19.2363C5.41406 18.6841 5.86178 18.2363 6.41406 18.2363H26.2601C26.8123 18.2363 27.2601 18.6841 27.2601 19.2363C27.2601 19.7886 26.8123 20.2363 26.2601 20.2363H6.41406C5.86178 20.2363 5.41406 19.7886 5.41406 19.2363Z",
                        fill: "white"
                    })]
                });
            var C = l(93191),
                j = l(49354),
                A = l(87138);
            let v = e => {
                    let {
                        title: t,
                        description: l,
                        mobileBgImg: r,
                        desktopBgImg: a,
                        imgAlt: i,
                        className: n = "",
                        ...c
                    } = e;
                    return (0, s.jsxs)(A.default, {
                        href: C.Uz,
                        onClick: () => {
                            (0, h.L)(x.n.START_EARNING_CLICKED, {
                                type: t
                            })
                        },
                        target: "_blank",
                        className: (0, j.cn)("group relative flex h-[343px] w-[343px] cursor-pointer flex-col items-start justify-end gap-2 overflow-hidden border border-[#262626] p-4 md:rounded-xl lg:h-[362px] lg:p-6", n),
                        children: [(0, s.jsx)(c.icon, {
                            className: "h-8 w-8 flex-shrink-0 text-white"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-1 lg:gap-2",
                            children: [(0, s.jsx)("h3", {
                                className: "text-lg font-medium leading-[140%] text-white lg:text-xl lg:leading-8",
                                children: t
                            }), (0, s.jsx)("p", {
                                className: "text-sm font-normal leading-5 text-[#8E8E8E] transition-all duration-500 group-hover:pb-7 lg:max-w-[388px] lg:text-base lg:leading-6 lg:group-hover:pb-8",
                                children: l
                            })]
                        }), (0, s.jsx)(d.default, {
                            src: r,
                            alt: i,
                            className: "absolute left-0 top-0 z-[-1] h-full w-full object-cover lg:hidden",
                            style: {
                                mixBlendMode: "luminosity"
                            },
                            fill: !0
                        }), (0, s.jsx)(d.default, {
                            src: a,
                            alt: i,
                            className: "absolute left-0 top-0 z-[-1] h-full w-full object-cover max-lg:hidden",
                            style: {
                                mixBlendMode: "luminosity"
                            },
                            fill: !0
                        })]
                    })
                },
                k = () => (0, s.jsxs)("section", {
                    className: "relative mt-[100px] flex flex-col items-center justify-center gap-12 overflow-hidden px-4 lg:mx-auto lg:mt-[120px] lg:w-full lg:gap-[56px] xl:w-[1200px] xl:px-0",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, s.jsxs)("h2", {
                            className: "text-center text-5xl font-medium leading-[44px] text-white lg:text-7xl lg:leading-[56px]",
                            children: ["Put Your", (0, s.jsx)("br", {}), " GPUs to Work"]
                        }), (0, s.jsx)("p", {
                            className: "text-center text-base font-normal leading-[150%] text-grey-500 lg:w-[442px]",
                            children: "Unlock new revenue streams. Maximize GPU utilization. Join the infrastructure revolution."
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6 md:grid md:w-full md:grid-cols-[1fr] md:grid-rows-[auto_auto]",
                        children: [(0, s.jsx)(v, {
                            title: (0, s.jsxs)(s.Fragment, {
                                children: ["The Decentralized ", (0, s.jsx)("br", {}), "GPU Ecosystem"]
                            }),
                            imgAlt: "Decentralized GPU Ecosystem",
                            description: "Join 300k+ verified GPUs Across 130+ countries with transparent on chain compensation",
                            mobileBgImg: "/images/home/mobile/decentralized-gpu-card-bg.svg",
                            desktopBgImg: "/images/home/desktop/decentralized-gpu-card-bg.svg",
                            className: "md:col-span-2 md:w-full",
                            icon: w
                        }), (0, s.jsx)(v, {
                            title: (0, s.jsxs)(s.Fragment, {
                                children: ["Next Era of ", (0, s.jsx)("br", {}), "AI Innovation"]
                            }),
                            imgAlt: "Next Era of AI Innovation",
                            description: (0, s.jsxs)(s.Fragment, {
                                children: ["Become part of the network powering the ", (0, s.jsx)("br", {}), " next generation of Ai innovation"]
                            }),
                            mobileBgImg: "/images/home/mobile/ai-innovation-card-bg.svg",
                            desktopBgImg: "/images/home/desktop/ai-innovation-card-bg.png",
                            className: "md:w-full",
                            icon: b
                        }), (0, s.jsx)(v, {
                            title: (0, s.jsxs)(s.Fragment, {
                                children: ["Maximize Your Earnings ", (0, s.jsx)("br", {}), "With Decentralized AI"]
                            }),
                            imgAlt: "Maximize Your Earnings With Decentralized AI",
                            description: (0, s.jsxs)(s.Fragment, {
                                children: ["Earn up to 80% more than with ", (0, s.jsx)("br", {}), " centralized platforms"]
                            }),
                            mobileBgImg: "/images/home/mobile/maximize-earnings-card-bg.svg",
                            desktopBgImg: "/images/home/desktop/maximize-earnings-card-bg.svg",
                            className: "",
                            icon: b
                        })]
                    })]
                });
            var y = l(69063),
                N = l.n(y);
            let L = [{
                    value: "nesaAI",
                    logo: {
                        src: "/_next/static/media/nesa-ai.42dcd9ed.svg",
                        height: 18,
                        width: 78,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 18
                }, {
                    value: "publicAI",
                    logo: {
                        src: "/_next/static/media/public-ai.9b5203dc.svg",
                        height: 27,
                        width: 112,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 27
                }, {
                    value: "kreaAI",
                    logo: {
                        src: "/_next/static/media/krea-ai.e691027c.svg",
                        height: 28,
                        width: 85,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 28
                }, {
                    value: "sharpeAI",
                    logo: {
                        src: "/_next/static/media/sharpe-ai.1421db2a.svg",
                        height: 31,
                        width: 114,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 28
                }, {
                    value: "wonderAI",
                    logo: {
                        src: "/_next/static/media/wonder-ai.bc958e79.svg",
                        height: 20,
                        width: 142,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 20
                }, {
                    value: "leonardoAI",
                    logo: {
                        src: "/_next/static/media/leonardo-ai.5deb3862.svg",
                        height: 27,
                        width: 162,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 28
                }, {
                    value: "tersorplexAI",
                    logo: {
                        src: "/_next/static/media/tersorplex-ai.104b8e0b.svg",
                        height: 20,
                        width: 151,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    height: 20
                }],
                I = () => (0, s.jsxs)("section", {
                    className: "relative mt-4 flex flex-col gap-4 overflow-hidden lg:mt-6 lg:gap-6",
                    children: [(0, s.jsx)("p", {
                        className: "text-center text-base font-normal leading-[150%] text-grey-500",
                        children: "Trusted by Top AI Startups"
                    }), (0, s.jsx)(N(), {
                        width: "226px",
                        duration: 40,
                        pauseOnHover: !0,
                        blurBorders: !1,
                        blurBoderColor: "#fff",
                        children: L.map((e, t) => {
                            let {
                                value: l,
                                logo: r,
                                height: a
                            } = e;
                            return (0, s.jsx)(N().Slide, {
                                children: (0, s.jsx)("div", {
                                    className: "flex h-[81px] min-w-[226px] flex-row flex-wrap items-center justify-center border border-grey-100",
                                    children: (0, s.jsx)(d.default, {
                                        src: r,
                                        alt: l,
                                        height: a
                                    })
                                })
                            }, t)
                        })
                    })]
                }),
                H = e => {
                    let {
                        children: t,
                        className: l = "",
                        ...r
                    } = e;
                    return (0, s.jsx)("th", {
                        className: "border-r border-grey-100 px-2 py-2 font-medium md:min-w-[132px] md:px-4 md:py-3 ".concat(l),
                        ...r,
                        children: t
                    })
                },
                M = e => {
                    let {
                        children: t,
                        className: l = "",
                        ...r
                    } = e;
                    return (0, s.jsx)("td", {
                        className: "w-[80px] border-r border-grey-100 p-2 md:min-w-[132px] md:px-4 md:py-5 ".concat(l),
                        ...r,
                        children: t
                    })
                },
                E = e => {
                    let {
                        cells: t,
                        className: l = ""
                    } = e;
                    return (0, s.jsxs)("tr", {
                        className: l,
                        children: [(0, s.jsx)("td", {
                            className: "h-[62px] w-[132px] border-r border-grey-100 max-md:hidden"
                        }), t.map((e, t) => (0, s.jsx)(M, {
                            children: e
                        }, t)), (0, s.jsx)("td", {
                            className: "h-[62px] w-[132px] max-md:hidden"
                        })]
                    })
                },
                _ = () => (0, s.jsxs)("section", {
                    className: "relative mt-[100px] flex flex-col gap-8 xl:mx-auto xl:mt-[120px] xl:w-[1198px] xl:flex-row xl:justify-between",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col gap-4 px-4 xl:gap-6 xl:px-0 xl:pt-[70px]",
                        children: [(0, s.jsx)("h2", {
                            className: "text-left text-5xl font-medium leading-[44px] text-white xl:w-[481px] xl:text-7xl xl:leading-[64px]",
                            children: "Save Up to 70% on GPU Costs"
                        }), (0, s.jsx)("p", {
                            className: "text-left text-base font-normal leading-[150%] text-grey-500 xl:w-[486px]",
                            children: "Deploy H100s for $2.19/hr vs $12.29 on AWS. Over 30k GPUs ready across 130+ countries, no contracts or waitlists."
                        }), (0, s.jsx)("p", {
                            className: "text-left text-sm font-normal leading-5 text-[#525252]",
                            children: "*Subject to change and availability by Region"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex w-[100vw] flex-col items-start justify-center gap-2 overflow-hidden xl:w-fit xl:items-center",
                        children: [(0, s.jsx)("div", {
                            className: "md:[WebkitMaskImage:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)] md:[WebkitMaskSize:contain] md:[WebkitMaskRepeat:no-repeat] relative flex h-[386px] w-[626px] -translate-x-1/2 items-center justify-center rounded-full bg-black [mask-repeat:no-repeat] max-xl:left-1/2 max-md:h-auto max-md:w-auto max-md:rounded-none md:[mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)] md:[mask-size:contain] xl:translate-x-0",
                            children: (0, s.jsxs)("table", {
                                className: "w-full table-auto border-collapse text-sm font-medium text-white max-md:w-[100vw] max-md:overflow-auto md:text-base",
                                children: [(0, s.jsxs)("thead", {
                                    children: [(0, s.jsxs)("tr", {
                                        className: "max-md:hidden",
                                        children: [(0, s.jsx)("th", {
                                            className: "h-[31px] w-[132px] border-r border-grey-100"
                                        }), (0, s.jsx)("th", {
                                            className: "h-[31px] w-[132px] border-r border-grey-100"
                                        }), (0, s.jsx)("th", {
                                            className: "h-[31px] w-[132px] border-r border-grey-100"
                                        }), (0, s.jsx)("th", {
                                            className: "h-[31px] w-[132px] border-r border-grey-100"
                                        }), (0, s.jsx)("th", {
                                            className: "h-[31px] w-[132px]"
                                        })]
                                    }), (0, s.jsxs)("tr", {
                                        className: "bg-grey-1500 text-left leading-5",
                                        children: [(0, s.jsx)("th", {
                                            className: "h-[62px] w-[132px] border-r border-grey-100 max-md:hidden"
                                        }), (0, s.jsxs)(H, {
                                            children: ["GPU ", (0, s.jsx)("br", {
                                                className: ""
                                            }), "Type"]
                                        }), (0, s.jsxs)(H, {
                                            children: ["Ray ", (0, s.jsx)("br", {}), "Cluster"]
                                        }), (0, s.jsxs)(H, {
                                            children: ["Container ", (0, s.jsx)("br", {}), "as a Service"]
                                        }), (0, s.jsxs)(H, {
                                            children: ["Bare ", (0, s.jsx)("br", {}), "Metal"]
                                        }), (0, s.jsx)("th", {
                                            className: "h-[62px] w-[132px] max-md:hidden"
                                        })]
                                    })]
                                }), (0, s.jsx)("tbody", {
                                    className: "max-md:text-xs",
                                    children: [
                                        ["GeForce RTX 4090", "$0.25/hr", "$0.50/hr", "$0.50/hr"],
                                        ["H100 PCle", "$0.89/hr", "$1.70/hr", "$1.70/hr"],
                                        ["H100SXM5", "$1.19/hr", "$1.99/hr", "$1.99/hr"],
                                        ["H200", "$2.39/hr", "$2.49/hr", "$2.49/hr"]
                                    ].map((e, t) => (0, s.jsx)(E, {
                                        cells: e,
                                        className: "border-b border-grey-100 leading-6"
                                    }, t))
                                })]
                            })
                        }), (0, s.jsx)("p", {
                            className: "px-4 text-left text-base font-normal leading-[150%] text-grey-500 lg:w-full lg:text-center xl:max-w-[486px] xl:px-0",
                            children: "100x H100 GPUs on AWS cost ~$300K/month. On io.cloud, the same cost ~30K/month = $270k monthly savings"
                        })]
                    })]
                });
            var B = l(2097),
                S = l(89733);
            let V = () => {
                let [e, t] = (0, r.useState)(!1);
                return (0, s.jsxs)("section", {
                    className: "relative my-[100px] flex h-[400px] flex-col items-center justify-center gap-6 overflow-hidden px-4 lg:mb-0 lg:mt-[120px] lg:w-full",
                    children: [(0, s.jsx)(d.default, {
                        src: "/images/home/mobile/scale-your-ai-section-bg.svg",
                        alt: "Scale Your AI Section Background",
                        className: "absolute left-0 top-0 z-[-1] h-full w-full object-cover md:hidden",
                        style: {
                            mixBlendMode: "luminosity"
                        },
                        fill: !0
                    }), (0, s.jsx)(d.default, {
                        src: "/images/home/desktop/scale-your-ai-section-bg.svg",
                        alt: "Scale Your AI Section Background",
                        className: "absolute left-0 top-0 z-[-1] h-full w-full object-cover max-md:hidden",
                        style: {
                            mixBlendMode: "luminosity"
                        },
                        fill: !0
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: [(0, s.jsx)("h2", {
                            className: "w-[341px] text-center text-5xl font-medium leading-[44px] text-white lg:w-full lg:text-7xl lg:leading-[56px]",
                            children: "Ready to Scale Your AI?"
                        }), (0, s.jsx)("p", {
                            className: "text-center text-base font-normal leading-[150%] text-grey-500 md:max-w-[531px]",
                            children: "Deploy AI workloads on your terms, without Big Tech's cloud markup. Run more experiments, train larger models, stay under budget."
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full items-center justify-center gap-3",
                        children: [(0, s.jsx)(g.StartButton, {
                            mt: "mt-0",
                            gtmTrackingEvent: "GET_STARTED_CLICKED",
                            url: C.Dk,
                            trackingEvent: {
                                trackingType: x.n.GET_STARTED_CLICKED
                            }
                        }), (0, s.jsx)(S.z, {
                            variant: "outline",
                            onClick: () => {
                                t(!0), (0, h.L)(x.n.CONTACT_SALES_CLICKED, {
                                    type: "home"
                                }), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                    event: "CONTACT_SALES_CLICKED"
                                })
                            },
                            children: "Book a Demo"
                        })]
                    }), (0, s.jsx)(B.Z, {
                        open: e,
                        isOpen: t
                    })]
                })
            };
            var R = {
                    src: "/_next/static/media/deploy-your-gpu-section-bg.7804cea8.svg",
                    height: 400,
                    width: 375,
                    blurWidth: 0,
                    blurHeight: 0
                },
                W = {
                    src: "/_next/static/media/deploy-your-gpu-section-bg.b97dcade.svg",
                    height: 400,
                    width: 1440,
                    blurWidth: 0,
                    blurHeight: 0
                };
            let D = () => (0, s.jsxs)("section", {
                className: "relative mt-[100px] flex h-[400px] flex-col items-center justify-center gap-6 overflow-hidden py-6",
                children: [(0, s.jsx)(d.default, {
                    src: R,
                    alt: "Deploy Your GPU Section Background",
                    className: "absolute bottom-0 left-0 z-[-1] h-[376px] w-full object-cover md:hidden"
                }), (0, s.jsx)(d.default, {
                    src: W,
                    alt: "Deploy Your GPU Section Background",
                    className: "absolute bottom-0 left-0 z-[-1] h-[400px] w-full object-cover max-md:hidden"
                }), (0, s.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 px-4",
                    children: [(0, s.jsx)("h2", {
                        className: "w-[277px] text-center text-5xl font-medium leading-[44px] text-white md:w-full lg:text-7xl lg:leading-[56px]",
                        children: "Scale Instantly With GPUs"
                    }), (0, s.jsx)("p", {
                        className: "text-center text-base font-normal leading-[150%] text-grey-500 lg:max-w-[531px]",
                        children: "Deploy AI workloads on your terms, without Big Tech's cloud markup. Run more experiments, train larger models, stay under budget."
                    })]
                })]
            });
            var T = l(59676),
                z = l(15384),
                P = l(50551),
                U = l.n(P),
                Z = () => {
                    let [e, t] = (0, r.useState)(!1);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(g.StartButton, {
                            mt: "mt-0",
                            gtmTrackingEvent: "GET_STARTED_CLICKED",
                            trackingEvent: {
                                trackingType: x.n.GET_STARTED_CLICKED
                            }
                        }), (0, s.jsx)(S.z, {
                            variant: "outline",
                            onClick: () => {
                                t(!0), (0, h.L)(x.n.CONTACT_SALES_CLICKED, {
                                    type: "home"
                                }), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                    event: "CONTACT_SALES_CLICKED"
                                })
                            },
                            children: "Book a Demo"
                        }), (0, s.jsx)(B.Z, {
                            open: e,
                            isOpen: t
                        })]
                    })
                },
                G = l(47402),
                Q = l(80624);
            let O = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "fixed bottom-14 right-14 z-[10] h-[163px] w-[372px] rounded-xl bg-[url('/images/home/desktop/io-intelligence-popup.webp')] bg-contain bg-center py-6 pl-[26px] pr-4 max-sm:hidden",
                        children: (0, s.jsxs)("div", {
                            className: "relative",
                            children: [(0, s.jsx)(S.z, {
                                variant: "ghost",
                                className: "absolute right-0 top-[0.175rem] h-6 w-6 p-0 dark:hover:bg-transparent",
                                children: (0, s.jsx)(G.a, {
                                    onClick: t,
                                    className: "h-6 w-6 cursor-pointer text-[#999999]"
                                })
                            }), (0, s.jsxs)("h3", {
                                className: "mb-1 font-inter text-[20px]/[28px] font-normal capitalize text-white",
                                children: ["We Launched ", (0, s.jsx)("span", {
                                    className: "font-semibold",
                                    children: "IO Intelligence!"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "font-inter text-[16px] font-normal text-white/50",
                                children: "Powering Decentralized AI on io.net"
                            }), (0, s.jsx)(g.StartButton, {
                                trackingEvent: {
                                    banner_type: "side",
                                    trackingType: x.n.INTEL_LANDING_CLICKED
                                },
                                url: "/intelligence",
                                title: "Get Started",
                                target: "_self",
                                inverted: !1,
                                mt: "py-2.5 mt-4"
                            })]
                        })
                    })
                },
                F = e => {
                    let {
                        onClose: t,
                        showIntelligencePopup: l
                    } = e, {
                        ref: r
                    } = (0, Q.I)(t);
                    return (0, s.jsx)("div", {
                        className: "".concat(l ? "z-[999] opacity-100" : "-z-10 scale-0 opacity-0", " bg-black/14 fixed left-0 top-0 min-h-[100%] min-w-[100%] backdrop-blur-[6.75px] transition-all duration-200"),
                        children: (0, s.jsxs)("div", {
                            ref: r,
                            className: "fixed left-[50%] top-[50%] z-[6] flex h-[428px] w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-8 rounded-[16px] bg-black bg-[url('/images/home/desktop/io-intelligence-modal.webp')] bg-contain bg-center bg-no-repeat p-6",
                            children: [(0, s.jsx)(S.z, {
                                variant: "ghost",
                                className: "absolute right-6 top-6 h-6 w-6 p-0 dark:hover:bg-transparent",
                                children: (0, s.jsx)(G.a, {
                                    onClick: t,
                                    className: "h-6 w-6 cursor-pointer text-[#999999]"
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex-1"
                            }), (0, s.jsxs)("h4", {
                                className: "px-2 text-center text-[40px]/[48px] font-medium capitalize leading-[48px]",
                                children: ["We Launched ", (0, s.jsx)("span", {
                                    className: "font-semibold",
                                    children: "IO Intelligence! "
                                })]
                            }), (0, s.jsx)("p", {
                                className: "px-2 text-center text-base font-normal leading-6 text-white/50",
                                children: "Custom AI models, smart agents, and easy API integration to power your workflows!"
                            }), (0, s.jsx)(g.StartButton, {
                                url: "/intelligence",
                                target: "_self",
                                onClick: () => {
                                    null == t || t()
                                },
                                trackingEvent: {
                                    banner_type: "top",
                                    trackingType: x.n.INTEL_LANDING_CLICKED
                                },
                                mt: "w-full tracking-[-0.084px] leading-5 font-medium",
                                title: "Get Started",
                                inverted: !1
                            })]
                        })
                    })
                },
                K = () => {
                    let [e, t] = (0, r.useState)(!1), [l, a] = (0, r.useState)(!1);
                    return ((0, r.useEffect)(() => {
                        if (!p.Z.HIDE_INTELLIGENCE_BANNERS) {
                            var e;
                            (null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("popup-closed-intelligence")) || t(!0), a(!0)
                        }
                    }, []), p.Z.HIDE_INTELLIGENCE_BANNERS) ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(F, {
                            showIntelligencePopup: e,
                            onClose: () => {
                                var e;
                                null === (e = localStorage) || void 0 === e || e.setItem("popup-closed-intelligence", "true"), t(!1)
                            }
                        }), l && (0, s.jsx)(O, {
                            onClose: () => a(!1)
                        })]
                    })
                };
            var Y = {
                    src: "/_next/static/media/glowLines.6a009b08.webp",
                    height: 823,
                    width: 1180,
                    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSA8AAAABBxAREQAIwv+2iYj+hwAAVlA4ICAAAAAwAQCdASoIAAYAAkA4JaQAA3AA/vt+DWA3eiz602UAAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                J = {
                    src: "/_next/static/media/heroGradient.29a6145b.webp",
                    height: 2952,
                    width: 5760,
                    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAGFhYGAAAAAQ4YGA4BAAEDBggIBgMBAAAAAAAAAAAAVlA4IDAAAACwAQCdASoIAAQAAkA4JaQAAxZhglUAAP6KRKYJ0GZ8N6fr/ZRezsyZNqRt+lyAAAA=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                $ = {
                    src: "/_next/static/media/heroLines.3ba3fd64.webp",
                    height: 2952,
                    width: 5760,
                    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSBwAAAABFyAgSZEVEaGhqG0b6NUyKK9rwAY/ov/xPMEwVlA4IBgAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vtAAAA=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                q = {
                    src: "/_next/static/media/procesor.521c0545.webp",
                    height: 880,
                    width: 864,
                    blurDataURL: "data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCwAAAABL6CmbQOGP6y8wdRBIyLi5AYKIVuBmgwugJsgghTyBwohov+hRIsA9uuZA1ZQOCA6AAAA0AEAnQEqCAAIAAJAOCWkAAKrEgcQ9oAA/vtxrvmhq2z8mwvl6AUNLqfVF/rCj4yJV5ibhzEU0AAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                X = {
                    src: "/_next/static/media/procesorLight.98529aa6.webp",
                    height: 1208,
                    width: 1920,
                    blurDataURL: "data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAABAgIBAAAABhYgIBYGAAEQQl1dQRABAAYWHx8WBgAAAAECAgEAAABWUDggNAAAAJABAJ0BKggABQACQDglpAAC5pvbkAD+/KD5qRqBsn1U5qM5PkbYw2sFVCzJ/o1IPaSOAAA=",
                    blurWidth: 8,
                    blurHeight: 5
                };
            let ee = U()(() => l.e(941).then(l.bind(l, 50941)), {
                    loadableGenerated: {
                        webpack: () => [50941]
                    },
                    ssr: !1
                }),
                et = () => (0, s.jsxs)(z.T, {
                    includePadding: !1,
                    className: "z-[3] overflow-hidden",
                    outerChildren: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "absolute z-[0] h-full w-full bg-gradient-to-b from-black/0 to-black"
                        }), (0, s.jsxs)("div", {
                            className: "absolute left-0 top-0 flex h-[1px] w-full flex-col items-center justify-center bg-[#191919]",
                            children: [(0, s.jsx)("div", {
                                className: "h-full w-[95%] bg-[linear-gradient(90deg,#592CFF00,#a855f7,#a855f7,#592CFF00)]"
                            }), " ", (0, s.jsx)("div", {
                                className: "io-banner-shadow w-3/5"
                            })]
                        })]
                    }),
                    children: [!p.Z.HIDE_INTELLIGENCE_BANNERS && (0, s.jsx)(ee, {}), (0, s.jsxs)("div", {
                        className: (0, j.cn)("relative flex w-[100%] flex-col bg-[url('/images/home/desktop/hero-lines.webp')] bg-cover bg-center bg-no-repeat", !p.Z.HIDE_INTELLIGENCE_BANNERS && "max-lg:pt-20"),
                        children: [(0, s.jsxs)("section", {
                            className: "relative z-[3] mt-[177px] flex h-full w-full flex-col items-center justify-center gap-4 px-4 max-lg:mt-[40px] lg:gap-6",
                            children: [(0, s.jsxs)("h1", {
                                className: "text-center text-8xl font-medium leading-[120%] text-white max-lg:text-[40px] max-lg:font-medium lg:leading-[72px]",
                                children: ["The Intelligent Stack ", (0, s.jsx)("br", {}), "for Powering AI"]
                            }), (0, s.jsx)("p", {
                                className: "text-center text-base font-normal leading-[150%] text-grey-500",
                                children: "Scale your AI workloads with instant access to enterprise-grade compute at up to 70% lower cost."
                            }), (0, s.jsx)("div", {
                                className: "flex gap-3 rounded-base border border-[#ffffff1a] bg-black px-2 py-[6px]",
                                children: (0, s.jsx)(Z, {})
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative w-full",
                            children: [(0, s.jsx)(T.U, {
                                src: "/riv/dooooown.riv",
                                className: "homeProcesorRive pointer-events-none absolute left-[50%] top-[43%] z-[2] size-[1440px] translate-x-[-50%] translate-y-[-50%] border-none max-md:top-[54%]",
                                width: 1440,
                                height: 1440,
                                animateOnAllDevices: !0
                            }), (0, s.jsxs)("div", {
                                className: "relative w-[100%]",
                                children: [(0, s.jsx)(d.default, {
                                    src: q,
                                    alt: "Processor",
                                    draggable: "false",
                                    width: 216,
                                    className: "relative z-10 mx-auto mt-[56px] h-[auto] max-md:w-[160px]"
                                }), (0, s.jsx)("div", {
                                    style: {
                                        boxShadow: "0px 0px 78px 0px rgba(255,255,255,0.56)"
                                    },
                                    className: "z-1 absolute bottom-0 left-0 right-0 top-0 m-auto h-[102px] w-[130px] bg-transparent md:w-[195px]"
                                }), (0, s.jsx)(d.default, {
                                    src: X,
                                    draggable: "false",
                                    alt: "Processor",
                                    width: 480,
                                    className: "pointer-events-none absolute left-[50%] top-[50%] z-[-5] translate-x-[-50%] translate-y-[-50%] max-md:opacity-50"
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "pointer-events-none absolute left-[50%] top-[-100px] z-[-5] translate-x-[-50%]",
                            children: (0, s.jsx)(d.default, {
                                width: 1440,
                                src: Y,
                                alt: "background",
                                className: "l-[0px] absolute top-[0px] h-[auto] w-[100%]"
                            })
                        }), (0, s.jsxs)("div", {
                            "data-testid": "up",
                            className: "pointer-events-none absolute left-[50%] top-[32px] z-[-5] size-[1440px] translate-x-[-50%] max-md:top-[-20%] max-md:scale-[0.85] max-md:opacity-50",
                            children: [(0, s.jsxs)("div", {
                                className: "l-[0px] absolute top-[0px] h-[auto] w-[100%]",
                                children: [(0, s.jsx)(d.default, {
                                    src: $,
                                    alt: "background",
                                    width: 1440,
                                    className: "l-[0px] absolute top-[0px] opacity-10"
                                }), (0, s.jsx)(T.U, {
                                    src: "/riv/hero.riv",
                                    className: "absolute left-[0px] top-[250px] size-[1440px] translate-y-[-50%] border-none xl:size-[1440px]",
                                    width: 1440,
                                    height: 1440,
                                    animateOnAllDevices: !0
                                })]
                            }), (0, s.jsx)(d.default, {
                                src: J,
                                alt: "background",
                                className: "l-[0px] absolute top-[0px] h-[auto]",
                                height: 738,
                                width: 1440
                            })]
                        })]
                    }), (0, s.jsx)(K, {})]
                });

            function el() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(et, {}), (0, s.jsx)(I, {}), (0, s.jsx)(n, {}), (0, s.jsx)(m, {}), (0, s.jsx)(_, {}), (0, s.jsx)(D, {}), (0, s.jsx)(f, {}), (0, s.jsx)(k, {}), (0, s.jsx)(V, {})]
                })
            }
        },
        59676: function (e, t, l) {
            "use strict";
            l.d(t, {
                U: function () {
                    return c
                }
            });
            var s = l(57437),
                r = l(2265),
                a = l(66648),
                i = l(49354),
                n = l(7544);
            let o = e => {
                let {
                    src: t,
                    width: l,
                    height: a,
                    className: i = "",
                    ...o
                } = e, {
                    RiveComponent: d
                } = (0, n.useRive)({
                    src: t,
                    stateMachines: "State Machine 1",
                    autoplay: !0
                }, {
                    useDevicePixelRatio: !0,
                    customDevicePixelRatio: 1
                }), c = (0, r.useMemo)(() => ({
                    ...l ? {
                        width: "".concat(l, "px")
                    } : {},
                    ...a ? {
                        height: "".concat(a, "px")
                    } : {}
                }), [l, a]);
                return (0, s.jsx)(d, {
                    width: l,
                    height: a,
                    style: c,
                    className: i,
                    ...o
                })
            };
            var d = l(99223);
            let c = e => {
                let {
                    id: t,
                    src: l,
                    width: n,
                    height: c,
                    allow: x = "autoplay",
                    responsive: p,
                    className: h = "",
                    device: u,
                    animateOnAllDevices: m = !1,
                    onClick: g
                } = e, f = (0, d.F)(), b = (0, r.useRef)(null), [w, C] = (0, r.useState)(null), j = "https://rive.app/s/".concat(t, "/embed");
                return (0, r.useEffect)(() => {
                    let {
                        image: e,
                        ...r
                    } = (null == p ? void 0 : p[u || f]) || {};
                    if (!m && (e || "desktop" !== (u || f))) {
                        if (!e) {
                            C(null);
                            return
                        }
                        C((0, s.jsx)(a.default, {
                            src: e,
                            alt: t || l,
                            className: h,
                            ...r,
                            onClick: g
                        }));
                        return
                    }
                    if (l) {
                        C((0, s.jsx)(o, {
                            src: l,
                            width: n,
                            height: c,
                            className: h,
                            onClick: g
                        }));
                        return
                    }
                    console.log("Swap iframe rive animation to canvas embed for improved performance- ".concat(j)), C((0, s.jsx)("iframe", {
                        ref: b,
                        className: (0, i.cn)("border-0", h),
                        width: n,
                        height: c,
                        src: j,
                        allowFullScreen: !0,
                        allow: x,
                        ...r
                    }))
                }, [p, t, l, n, c, h, x, j, b, u, m, g, f]), w
            }
        },
        47402: function (e, t, l) {
            "use strict";
            l.d(t, {
                a: function () {
                    return r
                }
            });
            var s = l(57437);
            let r = e => (0, s.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 25 24",
                fill: "none",
                ...e,
                children: [(0, s.jsx)("path", {
                    d: "M6.04386 18.7912C5.88718 18.6349 5.81196 18.4103 5.83474 18.1667C5.85751 17.9231 5.97642 17.6804 6.16529 17.4921L18.9843 4.71038C19.1732 4.52205 19.4166 4.40349 19.6609 4.38078C19.9053 4.35807 20.1306 4.43308 20.2872 4.58929C20.4439 4.74551 20.5191 4.97014 20.4964 5.21377C20.4736 5.4574 20.3547 5.70007 20.1658 5.8884L7.34676 18.6701C7.15788 18.8584 6.9145 18.977 6.67016 18.9997C6.42582 19.0224 6.20053 18.9474 6.04386 18.7912Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M6.66936 4.3805C6.9137 4.40321 7.15708 4.52176 7.34596 4.71009L20.165 17.4918C20.3539 17.6801 20.4728 17.9228 20.4956 18.1664C20.5183 18.41 20.4431 18.6347 20.2864 18.7909C20.1298 18.9471 19.9045 19.0221 19.6601 18.9994C19.4158 18.9767 19.1724 18.8581 18.9835 18.6698L6.1645 5.88811C5.97562 5.69978 5.85671 5.45711 5.83394 5.21348C5.81116 4.96985 5.88639 4.74522 6.04306 4.58901C6.19973 4.43279 6.42502 4.35779 6.66936 4.3805Z",
                    fill: "currentColor"
                })]
            })
        },
        80624: function (e, t, l) {
            "use strict";
            l.d(t, {
                I: function () {
                    return r
                }
            });
            var s = l(2265);
            let r = e => {
                let t = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let l = l => {
                        t.current && !t.current.contains(l.target) && (null == e || e())
                    };
                    return document.addEventListener("click", l, !0), () => {
                        document.removeEventListener("click", l, !0)
                    }
                }, [e]), {
                    ref: t
                }
            }
        },
        99223: function (e, t, l) {
            "use strict";
            l.d(t, {
                F: function () {
                    return n
                }
            });
            var s = l(2265),
                r = l(762),
                a = l(22916);

            function i(e) {
                let t = (0, a.ac)({
                        query: "(min-width: ".concat(r.AV[e], ")")
                    }),
                    l = e[0].toUpperCase() + e.substring(1);
                return {
                    ["is".concat(l)]: t
                }
            }
            let n = () => {
                let {
                    isMd: e
                } = i("md"), {
                    isXl: t
                } = i("xl");
                return (0, s.useMemo)(() => e ? t ? "desktop" : "tablet" : "phone", [e, t])
            }
        },
        762: function (e, t, l) {
            "use strict";
            l.d(t, {
                AV: function () {
                    return s
                },
                C3: function () {
                    return n
                },
                J_: function () {
                    return i
                },
                Ss: function () {
                    return r
                },
                _Q: function () {
                    return a
                }
            });
            let s = {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1374px"
                },
                r = e => {
                    if ("string" != typeof e) return null;
                    let [t, l, s] = e.split("/").map(Number);
                    return t && l && s ? new Date(s, l - 1, t) : null
                },
                a = (e, t) => {
                    let l = new Intl.DateTimeFormat("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        }),
                        s = r(e),
                        a = r(t);
                    return s || a ? s && !a ? l.format(s) : !s && a ? l.format(a) : "".concat(l.format(s), " - ").concat(l.format(a)) : "TBD"
                },
                i = e => e instanceof Date,
                n = e => {
                    if (console.log(e), "string" == typeof e) return e.includes("://") ? e : "https://".concat(e)
                }
        }
    },
    function (e) {
        e.O(0, [4370, 8173, 4868, 1374, 231, 4514, 7287, 9636, 5817, 1131, 5827, 5373, 9231, 2097, 2971, 5318, 1744], function () {
            return e(e.s = 47003)
        }), _N_E = e.O()
    }
]);