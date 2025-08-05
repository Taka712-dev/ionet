! function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b22289e2-b440-4323-b5b1-da4c682216bc", e._sentryDebugIdIdentifier = "sentry-dbid-b22289e2-b440-4323-b5b1-da4c682216bc")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1374], {
        33529: function (e, t, n) {
            n.r(t), n.d(t, {
                Identify: function () {
                    return _
                },
                Revenue: function () {
                    return M
                },
                Types: function () {
                    return h
                },
                add: function () {
                    return nX
                },
                createInstance: function () {
                    return nW
                },
                extendSession: function () {
                    return nZ
                },
                flush: function () {
                    return nY
                },
                getDeviceId: function () {
                    return nQ
                },
                getSessionId: function () {
                    return n0
                },
                getUserId: function () {
                    return n1
                },
                groupIdentify: function () {
                    return n2
                },
                identify: function () {
                    return n3
                },
                init: function () {
                    return n4
                },
                logEvent: function () {
                    return n5
                },
                remove: function () {
                    return n8
                },
                reset: function () {
                    return n6
                },
                revenue: function () {
                    return n7
                },
                runQueuedFunctions: function () {
                    return ef
                },
                setDeviceId: function () {
                    return n9
                },
                setGroup: function () {
                    return re
                },
                setOptOut: function () {
                    return rt
                },
                setSessionId: function () {
                    return rn
                },
                setTransport: function () {
                    return rr
                },
                setUserId: function () {
                    return ri
                },
                track: function () {
                    return ro
                }
            });
            var r, i, o, s, a, u, c, l, d, f, h = {};
            n.r(h), n.d(h, {
                DEFAULT_CSS_SELECTOR_ALLOWLIST: function () {
                    return nH
                },
                DEFAULT_DATA_ATTRIBUTE_PREFIX: function () {
                    return n$
                },
                IdentifyOperation: function () {
                    return a
                },
                LogLevel: function () {
                    return em.i
                },
                OfflineDisabled: function () {
                    return ed
                },
                RevenueProperty: function () {
                    return u
                },
                ServerZone: function () {
                    return nK.J
                },
                SpecialEventType: function () {
                    return c
                },
                Status: function () {
                    return m.q
                }
            });
            var p = n(86166),
                v = n(11735),
                g = n(91305),
                m = n(34854),
                y = n(89514),
                b = function (e, t) {
                    var n = Math.max(t, 1);
                    return e.reduce(function (e, t, r) {
                        var i = Math.floor(r / n);
                        return e[i] || (e[i] = []), e[i].push(t), e
                    }, [])
                },
                S = function (e, t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = m.q.Unknown), {
                        event: e,
                        code: t,
                        message: n
                    }
                },
                w = n(50797),
                I = function (e) {
                    return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, I)
                };

            function E(e) {
                var t = "";
                try {
                    "body" in e && (t = JSON.stringify(e.body, null, 2))
                } catch (e) {}
                return t
            }
            var C = function () {
                function e() {
                    this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduled = null, this.queue = []
                }
                return e.prototype.setup = function (e) {
                    var t;
                    return (0, v.mG)(this, void 0, void 0, function () {
                        var n, r = this;
                        return (0, v.Jh)(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    return this.config = e, this.storageKey = "".concat(y.f1, "_").concat(this.config.apiKey.substring(0, 10)), [4, null === (t = this.config.storageProvider) || void 0 === t ? void 0 : t.get(this.storageKey)];
                                case 1:
                                    return (n = i.sent()) && n.length > 0 && Promise.all(n.map(function (e) {
                                        return r.execute(e)
                                    })).catch(), [2, Promise.resolve(void 0)]
                            }
                        })
                    })
                }, e.prototype.execute = function (e) {
                    var t = this;
                    return e.insert_id || (e.insert_id = I()), new Promise(function (n) {
                        t.addToQueue({
                            event: e,
                            attempts: 0,
                            callback: function (e) {
                                return n(e)
                            },
                            timeout: 0
                        })
                    })
                }, e.prototype.getTryableList = function (e) {
                    var t = this;
                    return e.filter(function (e) {
                        return e.attempts < t.config.flushMaxRetries ? (e.attempts += 1, !0) : (t.fulfillRequest([e], 500, "Event rejected due to exceeded retry count"), !1)
                    })
                }, e.prototype.scheduleTryable = function (e, t) {
                    var n = this;
                    void 0 === t && (t = !1), e.forEach(function (e) {
                        if (t && (n.queue = n.queue.concat(e)), 0 === e.timeout) {
                            n.schedule(n.config.flushIntervalMillis);
                            return
                        }
                        setTimeout(function () {
                            e.timeout = 0, n.schedule(0)
                        }, e.timeout)
                    })
                }, e.prototype.addToQueue = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.getTryableList(e);
                    this.scheduleTryable(n, !0), this.saveEvents()
                }, e.prototype.schedule = function (e) {
                    var t = this;
                    this.scheduled || this.config.offline || (this.scheduled = setTimeout(function () {
                        t.flush(!0).then(function () {
                            t.queue.length > 0 && t.schedule(e)
                        })
                    }, e))
                }, e.prototype.flush = function (e) {
                    return void 0 === e && (e = !1), (0, v.mG)(this, void 0, void 0, function () {
                        var t, n, r = this;
                        return (0, v.Jh)(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    if (this.config.offline) return this.config.loggerProvider.debug("Skipping flush while offline."), [2];
                                    return t = [], n = [], this.queue.forEach(function (e) {
                                        return 0 === e.timeout ? t.push(e) : n.push(e)
                                    }), this.scheduled && (clearTimeout(this.scheduled), this.scheduled = null), [4, Promise.all(b(t, this.config.flushQueueSize).map(function (t) {
                                        return r.send(t, e)
                                    }))];
                                case 1:
                                    return i.sent(), this.scheduleTryable(n), [2]
                            }
                        })
                    })
                }, e.prototype.send = function (e, t) {
                    return void 0 === t && (t = !0), (0, v.mG)(this, void 0, void 0, function () {
                        var n, r, i, o;
                        return (0, v.Jh)(this, function (s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                    n = {
                                        api_key: this.config.apiKey,
                                        events: e.map(function (e) {
                                            var t = e.event;
                                            return t.extra, (0, v._T)(t, ["extra"])
                                        }),
                                        options: {
                                            min_id_length: this.config.minIdLength
                                        },
                                        client_upload_time: new Date().toISOString(),
                                        request_metadata: this.config.requestMetadata
                                    }, this.config.requestMetadata = new w.Dg, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), r = (0, w.RG)(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, [4, this.config.transportProvider.send(r, n)];
                                case 2:
                                    if (null === (i = s.sent())) return this.fulfillRequest(e, 0, "Unexpected error occurred"), [2];
                                    if (!t) return "body" in i ? this.fulfillRequest(e, i.statusCode, "".concat(i.status, ": ").concat(E(i))) : this.fulfillRequest(e, i.statusCode, i.status), [2];
                                    return this.handleResponse(i, e), [3, 4];
                                case 3:
                                    var a;
                                    return o = (a = s.sent()) instanceof Error ? a.message : String(a), this.config.loggerProvider.error(o), this.handleResponse({
                                        status: m.q.Failed,
                                        statusCode: 0
                                    }, e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.handleResponse = function (e, t) {
                    var n = e.status;
                    switch (n) {
                        case m.q.Success:
                            this.handleSuccessResponse(e, t);
                            break;
                        case m.q.Invalid:
                            this.handleInvalidResponse(e, t);
                            break;
                        case m.q.PayloadTooLarge:
                            this.handlePayloadTooLargeResponse(e, t);
                            break;
                        case m.q.RateLimit:
                            this.handleRateLimitResponse(e, t);
                            break;
                        default:
                            this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(n, "' provided for ").concat(t.length, ' events"}')), this.handleOtherResponse(t)
                    }
                }, e.prototype.handleSuccessResponse = function (e, t) {
                    this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
                }, e.prototype.handleInvalidResponse = function (e, t) {
                    var n = this;
                    if (e.body.missingField || e.body.error.startsWith("Invalid API key")) {
                        this.fulfillRequest(t, e.statusCode, e.body.error);
                        return
                    }
                    var r = new Set((0, v.ev)((0, v.ev)((0, v.ev)((0, v.ev)([], (0, v.CR)(Object.values(e.body.eventsWithInvalidFields)), !1), (0, v.CR)(Object.values(e.body.eventsWithMissingFields)), !1), (0, v.CR)(Object.values(e.body.eventsWithInvalidIdLengths)), !1), (0, v.CR)(e.body.silencedEvents), !1).flat()),
                        i = t.filter(function (t, i) {
                            if (r.has(i)) {
                                n.fulfillRequest([t], e.statusCode, e.body.error);
                                return
                            }
                            return !0
                        });
                    i.length > 0 && this.config.loggerProvider.warn(E(e));
                    var o = this.getTryableList(i);
                    this.scheduleTryable(o)
                }, e.prototype.handlePayloadTooLargeResponse = function (e, t) {
                    if (1 === t.length) {
                        this.fulfillRequest(t, e.statusCode, e.body.error);
                        return
                    }
                    this.config.loggerProvider.warn(E(e)), this.config.flushQueueSize /= 2;
                    var n = this.getTryableList(t);
                    this.scheduleTryable(n)
                }, e.prototype.handleRateLimitResponse = function (e, t) {
                    var n = this,
                        r = Object.keys(e.body.exceededDailyQuotaUsers),
                        i = Object.keys(e.body.exceededDailyQuotaDevices),
                        o = e.body.throttledEvents,
                        s = new Set(r),
                        a = new Set(i),
                        u = new Set(o),
                        c = t.filter(function (t, r) {
                            if (t.event.user_id && s.has(t.event.user_id) || t.event.device_id && a.has(t.event.device_id)) {
                                n.fulfillRequest([t], e.statusCode, e.body.error);
                                return
                            }
                            return u.has(r) && (t.timeout = n.throttleTimeout), !0
                        });
                    c.length > 0 && this.config.loggerProvider.warn(E(e));
                    var l = this.getTryableList(c);
                    this.scheduleTryable(l)
                }, e.prototype.handleOtherResponse = function (e) {
                    var t = this,
                        n = e.map(function (e) {
                            return e.timeout = e.attempts * t.retryTimeout, e
                        }),
                        r = this.getTryableList(n);
                    this.scheduleTryable(r)
                }, e.prototype.fulfillRequest = function (e, t, n) {
                    this.removeEvents(e), e.forEach(function (e) {
                        return e.callback(S(e.event, t, n))
                    })
                }, e.prototype.saveEvents = function () {
                    if (this.config.storageProvider) {
                        var e = this.queue.map(function (e) {
                            return e.event
                        });
                        this.config.storageProvider.set(this.storageKey, e)
                    }
                }, e.prototype.removeEvents = function (e) {
                    this.queue = this.queue.filter(function (t) {
                        return !e.some(function (e) {
                            return e.event.insert_id === t.event.insert_id
                        })
                    }), this.saveEvents()
                }, e
            }();
            (r = a || (a = {})).SET = "$set", r.SET_ONCE = "$setOnce", r.ADD = "$add", r.APPEND = "$append", r.PREPEND = "$prepend", r.REMOVE = "$remove", r.PREINSERT = "$preInsert", r.POSTINSERT = "$postInsert", r.UNSET = "$unset", r.CLEAR_ALL = "$clearAll", (i = u || (u = {})).REVENUE_PRODUCT_ID = "$productId", i.REVENUE_QUANTITY = "$quantity", i.REVENUE_PRICE = "$price", i.REVENUE_TYPE = "$revenueType", i.REVENUE = "$revenue", (o = c || (c = {})).IDENTIFY = "$identify", o.GROUP_IDENTIFY = "$groupidentify", o.REVENUE = "revenue_amount";
            var k = function (e) {
                    if (Object.keys(e).length > 1e3) return !1;
                    for (var t in e) {
                        var n = e[t];
                        if (!T(t, n)) return !1
                    }
                    return !0
                },
                T = function (e, t) {
                    var n, r;
                    if ("string" != typeof e) return !1;
                    if (Array.isArray(t)) {
                        var i = !0;
                        try {
                            for (var o = (0, v.XA)(t), s = o.next(); !s.done; s = o.next()) {
                                var a = s.value;
                                if (Array.isArray(a)) return !1;
                                if ("object" == typeof a) i = i && k(a);
                                else if (!["number", "string"].includes(typeof a)) return !1;
                                if (!i) return !1
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    } else if (null == t) return !1;
                    else if ("object" == typeof t) return k(t);
                    else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
                    return !0
                },
                _ = function () {
                    function e() {
                        this._propertySet = new Set, this._properties = {}
                    }
                    return e.prototype.getUserProperties = function () {
                        return (0, v.pi)({}, this._properties)
                    }, e.prototype.set = function (e, t) {
                        return this._safeSet(a.SET, e, t), this
                    }, e.prototype.setOnce = function (e, t) {
                        return this._safeSet(a.SET_ONCE, e, t), this
                    }, e.prototype.append = function (e, t) {
                        return this._safeSet(a.APPEND, e, t), this
                    }, e.prototype.prepend = function (e, t) {
                        return this._safeSet(a.PREPEND, e, t), this
                    }, e.prototype.postInsert = function (e, t) {
                        return this._safeSet(a.POSTINSERT, e, t), this
                    }, e.prototype.preInsert = function (e, t) {
                        return this._safeSet(a.PREINSERT, e, t), this
                    }, e.prototype.remove = function (e, t) {
                        return this._safeSet(a.REMOVE, e, t), this
                    }, e.prototype.add = function (e, t) {
                        return this._safeSet(a.ADD, e, t), this
                    }, e.prototype.unset = function (e) {
                        return this._safeSet(a.UNSET, e, y.q$), this
                    }, e.prototype.clearAll = function () {
                        return this._properties = {}, this._properties[a.CLEAR_ALL] = y.q$, this
                    }, e.prototype._safeSet = function (e, t, n) {
                        if (this._validate(e, t, n)) {
                            var r = this._properties[e];
                            return void 0 === r && (r = {}, this._properties[e] = r), r[t] = n, this._propertySet.add(t), !0
                        }
                        return !1
                    }, e.prototype._validate = function (e, t, n) {
                        return !(void 0 !== this._properties[a.CLEAR_ALL] || this._propertySet.has(t)) && (e === a.ADD ? "number" == typeof n : e === a.UNSET || e === a.REMOVE || T(t, n))
                    }, e
                }(),
                M = function () {
                    function e() {
                        this.productId = "", this.quantity = 1, this.price = 0
                    }
                    return e.prototype.setProductId = function (e) {
                        return this.productId = e, this
                    }, e.prototype.setQuantity = function (e) {
                        return e > 0 && (this.quantity = e), this
                    }, e.prototype.setPrice = function (e) {
                        return this.price = e, this
                    }, e.prototype.setRevenueType = function (e) {
                        return this.revenueType = e, this
                    }, e.prototype.setRevenue = function (e) {
                        return this.revenue = e, this
                    }, e.prototype.setEventProperties = function (e) {
                        return k(e) && (this.properties = e), this
                    }, e.prototype.getEventProperties = function () {
                        var e = this.properties ? (0, v.pi)({}, this.properties) : {};
                        return e[u.REVENUE_PRODUCT_ID] = this.productId, e[u.REVENUE_QUANTITY] = this.quantity, e[u.REVENUE_PRICE] = this.price, e[u.REVENUE_TYPE] = this.revenueType, e[u.REVENUE] = this.revenue, e
                    }, e
                }(),
                x = function () {
                    function e(e) {
                        this.client = e, this.queue = [], this.applying = !1, this.plugins = []
                    }
                    return e.prototype.register = function (e, t) {
                        var n, r;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.plugins.some(function (t) {
                                                return t.name === e.name
                                            })) return t.loggerProvider.warn("Plugin with name ".concat(e.name, " already exists, skipping registration")), [2];
                                        return void 0 === e.name && (e.name = I(), t.loggerProvider.warn("Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(e.name, ". \n      Set a name for the plugin to prevent it from being added multiple times."))), e.type = null !== (n = e.type) && void 0 !== n ? n : "enrichment", [4, null === (r = e.setup) || void 0 === r ? void 0 : r.call(e, t, this.client)];
                                    case 1:
                                        return i.sent(), this.plugins.push(e), [2]
                                }
                            })
                        })
                    }, e.prototype.deregister = function (e) {
                        var t;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var n, r;
                            return (0, v.Jh)(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.plugins.findIndex(function (t) {
                                            return t.name === e
                                        }), r = this.plugins[n], this.plugins.splice(n, 1), [4, null === (t = r.teardown) || void 0 === t ? void 0 : t.call(r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function (e) {
                        this.applying = !1, this.plugins.map(function (e) {
                            var t;
                            return null === (t = e.teardown) || void 0 === t ? void 0 : t.call(e)
                        }), this.plugins = [], this.client = e
                    }, e.prototype.push = function (e) {
                        var t = this;
                        return new Promise(function (n) {
                            t.queue.push([e, n]), t.scheduleApply(0)
                        })
                    }, e.prototype.scheduleApply = function (e) {
                        var t = this;
                        this.applying || (this.applying = !0, setTimeout(function () {
                            t.apply(t.queue.shift()).then(function () {
                                t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                            })
                        }, e))
                    }, e.prototype.apply = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t, n, r, i, o, s, a, u, c, l, d, f, h, p;
                            return (0, v.Jh)(this, function (g) {
                                switch (g.label) {
                                    case 0:
                                        if (!e) return [2];
                                        t = (0, v.CR)(e, 1)[0], n = (0, v.CR)(e, 2)[1], r = this.plugins.filter(function (e) {
                                            return "before" === e.type
                                        }), g.label = 1;
                                    case 1:
                                        g.trys.push([1, 6, 7, 8]), o = (i = (0, v.XA)(r)).next(), g.label = 2;
                                    case 2:
                                        if (o.done) return [3, 5];
                                        if (!(s = o.value).execute) return [3, 4];
                                        return [4, s.execute((0, v.pi)({}, t))];
                                    case 3:
                                        if (null === (a = g.sent())) return n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = a, g.label = 4;
                                    case 4:
                                        return o = i.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return d = {
                                            error: g.sent()
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            o && !o.done && (f = i.return) && f.call(i)
                                        } finally {
                                            if (d) throw d.error
                                        }
                                        return [7];
                                    case 8:
                                        u = this.plugins.filter(function (e) {
                                            return "enrichment" === e.type || void 0 === e.type
                                        }), g.label = 9;
                                    case 9:
                                        g.trys.push([9, 14, 15, 16]), l = (c = (0, v.XA)(u)).next(), g.label = 10;
                                    case 10:
                                        if (l.done) return [3, 13];
                                        if (!(s = l.value).execute) return [3, 12];
                                        return [4, s.execute((0, v.pi)({}, t))];
                                    case 11:
                                        if (null === (a = g.sent())) return n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = a, g.label = 12;
                                    case 12:
                                        return l = c.next(), [3, 10];
                                    case 13:
                                        return [3, 16];
                                    case 14:
                                        return h = {
                                            error: g.sent()
                                        }, [3, 16];
                                    case 15:
                                        try {
                                            l && !l.done && (p = c.return) && p.call(c)
                                        } finally {
                                            if (h) throw h.error
                                        }
                                        return [7];
                                    case 16:
                                        return Promise.all(this.plugins.filter(function (e) {
                                            return "destination" === e.type
                                        }).map(function (e) {
                                            var n = (0, v.pi)({}, t);
                                            return e.execute(n).catch(function (e) {
                                                return S(n, 0, String(e))
                                            })
                                        })).then(function (e) {
                                            var r = (0, v.CR)(e, 1)[0] || S(t, 100, "Event not tracked, no destination plugins on the instance");
                                            n(r)
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.flush = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var e, t = this;
                            return (0, v.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.queue, this.queue = [], [4, Promise.all(e.map(function (e) {
                                            return t.apply(e)
                                        }))];
                                    case 1:
                                        return n.sent(), [4, Promise.all(this.plugins.filter(function (e) {
                                            return "destination" === e.type
                                        }).map(function (e) {
                                            return e.flush && e.flush()
                                        }))];
                                    case 2:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e
                }(),
                O = function (e, t) {
                    return (0, v.pi)((0, v.pi)({}, t), {
                        event_type: c.IDENTIFY,
                        user_properties: e.getUserProperties()
                    })
                },
                R = function (e, t, n, r) {
                    var i;
                    return (0, v.pi)((0, v.pi)({}, r), {
                        event_type: c.GROUP_IDENTIFY,
                        group_properties: n.getUserProperties(),
                        groups: ((i = {})[e] = t, i)
                    })
                },
                N = function (e, t, n) {
                    var r, i = new _;
                    return i.set(e, t), (0, v.pi)((0, v.pi)({}, n), {
                        event_type: c.IDENTIFY,
                        user_properties: i.getUserProperties(),
                        groups: ((r = {})[e] = t, r)
                    })
                },
                P = function () {
                    function e(e) {
                        void 0 === e && (e = "$default"), this.initializing = !1, this.isReady = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new x(this), this.name = e
                    }
                    return e.prototype._init = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.config = e, this.timeline.reset(this), [4, this.runQueuedFunctions("q")];
                                    case 1:
                                        return t.sent(), this.isReady = !0, [2]
                                }
                            })
                        })
                    }, e.prototype.runQueuedFunctions = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t, n, r, i, o, s;
                            return (0, v.Jh)(this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        t = this[e], this[e] = [], a.label = 1;
                                    case 1:
                                        a.trys.push([1, 8, 9, 10]), r = (n = (0, v.XA)(t)).next(), a.label = 2;
                                    case 2:
                                        if (r.done) return [3, 7];
                                        if (!((i = (0, r.value)()) && "promise" in i)) return [3, 4];
                                        return [4, i.promise];
                                    case 3:
                                        return a.sent(), [3, 6];
                                    case 4:
                                        return [4, i];
                                    case 5:
                                        a.sent(), a.label = 6;
                                    case 6:
                                        return r = n.next(), [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        return o = {
                                            error: a.sent()
                                        }, [3, 10];
                                    case 9:
                                        try {
                                            r && !r.done && (s = n.return) && s.call(n)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                        return [7];
                                    case 10:
                                        if (!this[e].length) return [3, 12];
                                        return [4, this.runQueuedFunctions(e)];
                                    case 11:
                                        a.sent(), a.label = 12;
                                    case 12:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.track = function (e, t, n) {
                        var r = (0, v.pi)((0, v.pi)((0, v.pi)({}, "string" == typeof e ? {
                            event_type: e
                        } : e), n), t && {
                            event_properties: t
                        });
                        return (0, g.S)(this.dispatch(r))
                    }, e.prototype.identify = function (e, t) {
                        var n = O(e, t);
                        return (0, g.S)(this.dispatch(n))
                    }, e.prototype.groupIdentify = function (e, t, n, r) {
                        var i = R(e, t, n, r);
                        return (0, g.S)(this.dispatch(i))
                    }, e.prototype.setGroup = function (e, t, n) {
                        var r = N(e, t, n);
                        return (0, g.S)(this.dispatch(r))
                    }, e.prototype.revenue = function (e, t) {
                        var n = (0, v.pi)((0, v.pi)({}, t), {
                            event_type: c.REVENUE,
                            event_properties: e.getEventProperties()
                        });
                        return (0, g.S)(this.dispatch(n))
                    }, e.prototype.add = function (e) {
                        return this.isReady ? this._addPlugin(e) : (this.q.push(this._addPlugin.bind(this, e)), (0, g.S)())
                    }, e.prototype._addPlugin = function (e) {
                        return (0, g.S)(this.timeline.register(e, this.config))
                    }, e.prototype.remove = function (e) {
                        return this.isReady ? this._removePlugin(e) : (this.q.push(this._removePlugin.bind(this, e)), (0, g.S)())
                    }, e.prototype._removePlugin = function (e) {
                        return (0, g.S)(this.timeline.deregister(e))
                    }, e.prototype.dispatchWithCallback = function (e, t) {
                        if (!this.isReady) return t(S(e, 0, "Client not initialized"));
                        this.process(e).then(t)
                    }, e.prototype.dispatch = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t = this;
                            return (0, v.Jh)(this, function (n) {
                                return this.isReady ? [2, this.process(e)] : [2, new Promise(function (n) {
                                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                                })]
                            })
                        })
                    }, e.prototype.process = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t, n;
                            return (0, v.Jh)(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        if (r.trys.push([0, 2, , 3]), this.config.optOut) return [2, S(e, 0, "Event skipped due to optOut config")];
                                        return [4, this.timeline.push(e)];
                                    case 1:
                                        return 200 === (t = r.sent()).code ? this.config.loggerProvider.log(t.message) : 100 === t.code ? this.config.loggerProvider.warn(t.message) : this.config.loggerProvider.error(t.message), [2, t];
                                    case 2:
                                        return n = String(r.sent()), this.config.loggerProvider.error(n), [2, t = S(e, 0, n)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setOptOut = function (e) {
                        if (!this.isReady) {
                            this.q.push(this._setOptOut.bind(this, !!e));
                            return
                        }
                        this._setOptOut(e)
                    }, e.prototype._setOptOut = function (e) {
                        this.config.optOut = !!e
                    }, e.prototype.flush = function () {
                        return (0, g.S)(this.timeline.flush())
                    }, e
                }(),
                L = function (e, t) {
                    return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1
                },
                A = function (e) {
                    return L(e, "attribution")
                },
                D = function (e) {
                    return L(e, "pageViews")
                },
                q = function (e) {
                    return L(e, "sessions")
                },
                j = function (e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.elementInteractions || "object" == typeof e.elementInteractions)
                },
                F = function (e) {
                    if (j(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.elementInteractions) return e.autocapture.elementInteractions
                },
                G = function (e) {
                    var t, n = function () {
                            return !1
                        },
                        r = void 0,
                        i = e.pageCounter;
                    return D(e.defaultTracking) && (n = void 0, t = void 0, e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (n = e.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges), "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))), {
                        trackOn: n,
                        trackHistoryChanges: r,
                        eventType: t,
                        pageCounter: i
                    }
                },
                U = "dclid",
                J = "fbclid",
                z = "gbraid",
                B = "gclid",
                W = "ko_click_id",
                V = "li_fat_id",
                K = "msclkid",
                H = "rtd_cid",
                $ = "ttclid",
                X = "twclid",
                Z = "wbraid",
                Y = {
                    utm_campaign: void 0,
                    utm_content: void 0,
                    utm_id: void 0,
                    utm_medium: void 0,
                    utm_source: void 0,
                    utm_term: void 0,
                    referrer: void 0,
                    referring_domain: void 0,
                    dclid: void 0,
                    gbraid: void 0,
                    gclid: void 0,
                    fbclid: void 0,
                    ko_click_id: void 0,
                    li_fat_id: void 0,
                    msclkid: void 0,
                    rtd_cid: void 0,
                    ttclid: void 0,
                    twclid: void 0,
                    wbraid: void 0
                },
                Q = function (e) {
                    var t = e.split(".");
                    return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
                },
                ee = function (e, t, n, r) {
                    void 0 === r && (r = !0), e.referrer;
                    var i = e.referring_domain,
                        o = (0, v._T)(e, ["referrer", "referring_domain"]),
                        s = t || {},
                        a = (s.referrer, s.referring_domain),
                        u = (0, v._T)(s, ["referrer", "referring_domain"]);
                    if (et(n.excludeReferrers, e.referring_domain) || !r && Object.values(e).every(function (e) {
                            return !e
                        }) && t) return !1;
                    var c = JSON.stringify(o) !== JSON.stringify(u),
                        l = Q(i || "") !== Q(a || "");
                    return !t || c || l
                },
                et = function (e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = ""), e.some(function (e) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    })
                },
                en = function (e) {
                    var t = e;
                    return t ? (t.startsWith(".") && (t = t.substring(1)), [new RegExp("".concat(t.replace(".", "\\."), "$"))]) : []
                },
                er = n(89866),
                ei = function () {
                    var e, t = (0, er.l)();
                    return (null === (e = null == t ? void 0 : t.location) || void 0 === e ? void 0 : e.search) ? t.location.search.substring(1).split("&").filter(Boolean).reduce(function (e, t) {
                        var n = t.split("=", 2),
                            r = eo(n[0]),
                            i = eo(n[1]);
                        return i && (e[r] = i), e
                    }, {}) : {}
                },
                eo = function (e) {
                    void 0 === e && (e = "");
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        return ""
                    }
                },
                es = function () {
                    function e() {}
                    return e.prototype.parse = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (e) {
                                return [2, (0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)({}, Y), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                            })
                        })
                    }, e.prototype.getUtmParam = function () {
                        var e = ei();
                        return {
                            utm_campaign: e.utm_campaign,
                            utm_content: e.utm_content,
                            utm_id: e.utm_id,
                            utm_medium: e.utm_medium,
                            utm_source: e.utm_source,
                            utm_term: e.utm_term
                        }
                    }, e.prototype.getReferrer = function () {
                        var e, t, n = {
                            referrer: void 0,
                            referring_domain: void 0
                        };
                        try {
                            n.referrer = document.referrer || void 0, n.referring_domain = null !== (t = null === (e = n.referrer) || void 0 === e ? void 0 : e.split("/")[2]) && void 0 !== t ? t : void 0
                        } catch (e) {}
                        return n
                    }, e.prototype.getClickIds = function () {
                        var e, t = ei();
                        return (e = {})[U] = t[U], e[J] = t[J], e[z] = t[z], e[B] = t[B], e[W] = t[W], e[V] = t[V], e[K] = t[K], e[H] = t[H], e[$] = t[$], e[X] = t[X], e[Z] = t[Z], e
                    }, e
                }(),
                ea = function (e, t) {
                    return void 0 === t && (t = Date.now()), Date.now() - t > e
                },
                eu = function () {
                    function e(e, t) {
                        var n, r, i, o;
                        this.shouldTrackNewCampaign = !1, this.options = (0, v.pi)({
                            initialEmptyValue: "EMPTY",
                            resetSessionOnNewCampaign: !1,
                            excludeReferrers: en(null === (n = t.cookieOptions) || void 0 === n ? void 0 : n.domain)
                        }, e), this.storage = t.cookieStorage, this.storageKey = (r = t.apiKey, i = "MKTG", void 0 === o && (o = 10), [y.xp, i, r.substring(0, o)].filter(Boolean).join("_")), this.currentCampaign = Y, this.sessionTimeout = t.sessionTimeout, this.lastEventTime = t.lastEventTime, t.loggerProvider.log("Installing web attribution tracking.")
                    }
                    return e.prototype.init = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var e, t;
                            return (0, v.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.fetchCampaign()];
                                    case 1:
                                        if (t = v.CR.apply(void 0, [n.sent(), 2]), this.currentCampaign = t[0], this.previousCampaign = t[1], e = !this.lastEventTime || ea(this.sessionTimeout, this.lastEventTime), !ee(this.currentCampaign, this.previousCampaign, this.options, e)) return [3, 3];
                                        return this.shouldTrackNewCampaign = !0, [4, this.storage.set(this.storageKey, this.currentCampaign)];
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.fetchCampaign = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([new es().parse(), this.storage.get(this.storageKey)])];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            })
                        })
                    }, e.prototype.generateCampaignEvent = function (e) {
                        this.shouldTrackNewCampaign = !1;
                        var t, n, r = (t = this.currentCampaign, n = this.options, O(Object.entries((0, v.pi)((0, v.pi)({}, Y), t)).reduce(function (e, t) {
                            var r, i = (0, v.CR)(t, 2),
                                o = i[0],
                                s = i[1];
                            return (e.setOnce("initial_".concat(o), null !== (r = null != s ? s : n.initialEmptyValue) && void 0 !== r ? r : "EMPTY"), s) ? e.set(o, s) : e.unset(o)
                        }, new _)));
                        return e && (r.event_id = e), r
                    }, e.prototype.shouldSetSessionIdOnNewCampaign = function () {
                        return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign
                    }, e
                }(),
                ec = n(36789),
                el = function () {
                    function e() {
                        this.name = "identity", this.type = "before", this.identityStore = (0, ec.bM)().identityStore
                    }
                    return e.prototype.execute = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, v.Jh)(this, function (n) {
                                return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                            })
                        })
                    }, e.prototype.setup = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                return e.instanceName && (this.identityStore = (0, ec.bM)(e.instanceName).identityStore), [2]
                            })
                        })
                    }, e
                }(),
                ed = null,
                ef = function (e, t) {
                    eh(e, t)
                },
                eh = function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.name,
                            o = r.args,
                            s = r.resolve,
                            a = e && e[i];
                        if ("function" == typeof a) {
                            var u = a.apply(e, o);
                            "function" == typeof s && s(null == u ? void 0 : u.promise)
                        }
                    }
                    return e
                },
                ep = function (e) {
                    return e && void 0 !== e._q
                },
                ev = function () {
                    if ("undefined" == typeof navigator) return "";
                    var e, t, n, r, i = navigator.userLanguage;
                    return null !== (r = null !== (n = null !== (t = null === (e = navigator.languages) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : navigator.language) && void 0 !== n ? n : i) && void 0 !== r ? r : ""
                },
                eg = function () {
                    function e() {
                        this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "amplitude-ts/".concat("2.10.0"), "undefined" != typeof navigator && (this.userAgent = navigator.userAgent)
                    }
                    return e.prototype.setup = function (e) {
                        return this.config = e, Promise.resolve(void 0)
                    }, e.prototype.execute = function (e) {
                        var t, n;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var r, i, o;
                            return (0, v.Jh)(this, function (s) {
                                return r = new Date().getTime(), i = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1, o = null !== (n = e.event_id) && void 0 !== n ? n : i + 1, this.config.lastEventId = o, e.time || (this.config.lastEventTime = r), [2, (0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)((0, v.pi)({
                                    user_id: this.config.userId,
                                    device_id: this.config.deviceId,
                                    session_id: this.config.sessionId,
                                    time: r
                                }, this.config.appVersion && {
                                    app_version: this.config.appVersion
                                }), this.config.trackingOptions.platform && {
                                    platform: "Web"
                                }), this.config.trackingOptions.language && {
                                    language: ev()
                                }), this.config.trackingOptions.ipAddress && {
                                    ip: "$remote"
                                }), {
                                    insert_id: I(),
                                    partner_id: this.config.partnerId,
                                    plan: this.config.plan
                                }), this.config.ingestionMetadata && {
                                    ingestion_metadata: {
                                        source_name: this.config.ingestionMetadata.sourceName,
                                        source_version: this.config.ingestionMetadata.sourceVersion
                                    }
                                }), e), {
                                    event_id: o,
                                    library: this.library,
                                    user_agent: this.userAgent
                                })]
                            })
                        })
                    }, e
                }(),
                em = n(15558),
                ey = function () {
                    function e() {
                        this.memoryStorage = new Map
                    }
                    return e.prototype.isEnabled = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (e) {
                                return [2, !0]
                            })
                        })
                    }, e.prototype.get = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                return [2, this.memoryStorage.get(e)]
                            })
                        })
                    }, e.prototype.getRaw = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, v.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                                }
                            })
                        })
                    }, e.prototype.set = function (e, t) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (n) {
                                return this.memoryStorage.set(e, t), [2]
                            })
                        })
                    }, e.prototype.remove = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                return this.memoryStorage.delete(e), [2]
                            })
                        })
                    }, e.prototype.reset = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (e) {
                                return this.memoryStorage.clear(), [2]
                            })
                        })
                    }, e
                }(),
                eb = n(531),
                eS = function (e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), [y.xp, t, e.substring(0, n)].filter(Boolean).join("_")
                },
                ew = function () {
                    function e(e) {
                        this.options = (0, v.pi)({}, e)
                    }
                    return e.prototype.isEnabled = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t, n;
                            return (0, v.Jh)(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        if (!(0, er.l)()) return [2, !1];
                                        e.testValue = String(Date.now()), t = new e(this.options), n = "AMP_TEST", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)];
                                    case 2:
                                        return r.sent(), [4, t.get(n)];
                                    case 3:
                                        return [2, r.sent() === e.testValue];
                                    case 4:
                                        return r.sent(), [2, !1];
                                    case 5:
                                        return [4, t.remove(n)];
                                    case 6:
                                        return r.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function (e) {
                        var t;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var n, r;
                            return (0, v.Jh)(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.getRaw(e)];
                                    case 1:
                                        if (!(n = i.sent())) return [2, void 0];
                                        try {
                                            if (r = null !== (t = eI(n)) && void 0 !== t ? t : eE(n), void 0 === r) return console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0];
                                            return [2, JSON.parse(r)]
                                        } catch (t) {
                                            return console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0]
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getRaw = function (e) {
                        var t, n;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var r, i;
                            return (0, v.Jh)(this, function (o) {
                                return (i = (null !== (n = null === (t = null == (r = (0, er.l)()) ? void 0 : r.document) || void 0 === t ? void 0 : t.cookie.split("; ")) && void 0 !== n ? n : []).find(function (t) {
                                    return 0 === t.indexOf(e + "=")
                                })) ? [2, i.substring(e.length + 1)] : [2, void 0]
                            })
                        })
                    }, e.prototype.set = function (e, t) {
                        var n;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var r, i, o, s, a, u, c;
                            return (0, v.Jh)(this, function (l) {
                                try {
                                    r = null !== (n = this.options.expirationDays) && void 0 !== n ? n : 0, i = null !== t ? r : -1, o = void 0, i && ((s = new Date).setTime(s.getTime() + 864e5 * i), o = s), a = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))), o && (a += "; expires=".concat(o.toUTCString())), a += "; path=/", this.options.domain && (a += "; domain=".concat(this.options.domain)), this.options.secure && (a += "; Secure"), this.options.sameSite && (a += "; SameSite=".concat(this.options.sameSite)), (u = (0, er.l)()) && (u.document.cookie = a)
                                } catch (t) {
                                    c = t instanceof Error ? t.message : String(t), console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(e, ". Error: ").concat(c))
                                }
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.set(e, null)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (e) {
                                return [2]
                            })
                        })
                    }, e
                }(),
                eI = function (e) {
                    try {
                        return decodeURIComponent(atob(e))
                    } catch (e) {
                        return
                    }
                },
                eE = function (e) {
                    try {
                        return decodeURIComponent(atob(decodeURIComponent(e)))
                    } catch (e) {
                        return
                    }
                },
                eC = n(77166),
                ek = function () {
                    function e(e) {
                        this.storage = e
                    }
                    return e.prototype.isEnabled = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t, n, r;
                            return (0, v.Jh)(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2, !1];
                                        t = String(Date.now()), n = new e(this.storage), r = "AMP_TEST", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                                    case 2:
                                        return i.sent(), [4, n.get(r)];
                                    case 3:
                                        return [2, i.sent() === t];
                                    case 4:
                                        return i.sent(), [2, !1];
                                    case 5:
                                        return [4, n.remove(r)];
                                    case 6:
                                        return i.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function (e) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, v.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent())) return [2, void 0];
                                        return [2, JSON.parse(t)];
                                    case 2:
                                        return n.sent(), console.error("[Amplitude] Error: Could not get value from storage"), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getRaw = function (e) {
                        var t;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (n) {
                                return [2, (null === (t = this.storage) || void 0 === t ? void 0 : t.getItem(e)) || void 0]
                            })
                        })
                    }, e.prototype.set = function (e, t) {
                        var n;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (r) {
                                try {
                                    null === (n = this.storage) || void 0 === n || n.setItem(e, JSON.stringify(t))
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function (e) {
                        var t;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (n) {
                                try {
                                    null === (t = this.storage) || void 0 === t || t.removeItem(e)
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.reset = function () {
                        var e;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            return (0, v.Jh)(this, function (t) {
                                try {
                                    null === (e = this.storage) || void 0 === e || e.clear()
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e
                }(),
                eT = function (e) {
                    function t(t) {
                        var n, r = this;
                        return (r = e.call(this, null === (n = (0, er.l)()) || void 0 === n ? void 0 : n.localStorage) || this).loggerProvider = null == t ? void 0 : t.loggerProvider, r
                    }
                    return (0, v.ZT)(t, e), t.prototype.set = function (t, n) {
                        var r;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var i;
                            return (0, v.Jh)(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        if (!(Array.isArray(n) && n.length > 1e3)) return [3, 2];
                                        return i = n.length - 1e3, [4, e.prototype.set.call(this, t, n.slice(0, 1e3))];
                                    case 1:
                                        return o.sent(), null === (r = this.loggerProvider) || void 0 === r || r.error("Failed to save ".concat(i, " events because the queue length exceeded ").concat(1e3, ".")), [3, 4];
                                    case 2:
                                        return [4, e.prototype.set.call(this, t, n)];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(ek),
                e_ = function (e) {
                    function t() {
                        var t;
                        return e.call(this, null === (t = (0, er.l)()) || void 0 === t ? void 0 : t.sessionStorage) || this
                    }
                    return (0, v.ZT)(t, e), t
                }(ek),
                eM = n(17358),
                ex = function (e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            done: 4
                        }, t
                    }
                    return (0, v.ZT)(t, e), t.prototype.send = function (e, t) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var n = this;
                            return (0, v.Jh)(this, function (r) {
                                return [2, new Promise(function (r, i) {
                                    "undefined" == typeof XMLHttpRequest && i(Error("XHRTransport is not supported."));
                                    var o = new XMLHttpRequest;
                                    o.open("POST", e, !0), o.onreadystatechange = function () {
                                        if (o.readyState === n.state.done) {
                                            var e = o.responseText;
                                            try {
                                                r(n.buildResponse(JSON.parse(e)))
                                            } catch (e) {
                                                r(n.buildResponse({
                                                    code: o.status
                                                }))
                                            }
                                        }
                                    }, o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "*/*"), o.send(JSON.stringify(t))
                                })]
                            })
                        })
                    }, t
                }(eM.d),
                eO = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, v.ZT)(t, e), t.prototype.send = function (e, t) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var n = this;
                            return (0, v.Jh)(this, function (r) {
                                return [2, new Promise(function (r, i) {
                                    var o = (0, er.l)();
                                    if (!(null == o ? void 0 : o.navigator.sendBeacon)) throw Error("SendBeaconTransport is not supported");
                                    try {
                                        var s = JSON.stringify(t);
                                        if (o.navigator.sendBeacon(e, JSON.stringify(t))) return r(n.buildResponse({
                                            code: 200,
                                            events_ingested: t.events.length,
                                            payload_size_bytes: s.length,
                                            server_upload_time: Date.now()
                                        }));
                                        return r(n.buildResponse({
                                            code: 500
                                        }))
                                    } catch (e) {
                                        i(e)
                                    }
                                })]
                            })
                        })
                    }, t
                }(eM.d),
                eR = function (e) {
                    var t = parseInt(e, 32);
                    if (!isNaN(t)) return t
                },
                eN = function (e) {
                    if (atob && escape && e) try {
                        return decodeURIComponent(escape(atob(e)))
                    } catch (e) {
                        return
                    }
                },
                eP = "[Amplitude]",
                eL = "".concat(eP, " Form Started"),
                eA = "".concat(eP, " Form Submitted"),
                eD = "".concat(eP, " File Downloaded"),
                eq = "session_start",
                ej = "session_end",
                eF = "".concat(eP, " File Extension"),
                eG = "".concat(eP, " File Name"),
                eU = "".concat(eP, " Link ID"),
                eJ = "".concat(eP, " Link Text"),
                ez = "".concat(eP, " Link URL"),
                eB = "".concat(eP, " Form ID"),
                eW = "".concat(eP, " Form Name"),
                eV = "".concat(eP, " Form Destination"),
                eK = "cookie",
                eH = function (e) {
                    function t(t, n, r, i, o, s, a, u, c, l, d, f, h, p, v, g, m, y, b, S, w, I, E, C, k, T, _, M, x, O, R, N, P, L) {
                        void 0 === r && (r = new ey), void 0 === i && (i = {
                            domain: "",
                            expiration: 365,
                            sameSite: "Lax",
                            secure: !1,
                            upgrade: !0
                        }), void 0 === u && (u = 1e3), void 0 === c && (c = 5), void 0 === l && (l = 30), void 0 === d && (d = eK), void 0 === g && (g = new eb.Y), void 0 === m && (m = em.i.Warn), void 0 === b && (b = !1), void 0 === S && (S = !1), void 0 === E && (E = ""), void 0 === C && (C = "US"), void 0 === T && (T = 18e5), void 0 === _ && (_ = new eT({
                            loggerProvider: g
                        })), void 0 === M && (M = {
                            ipAddress: !0,
                            language: !0,
                            platform: !0
                        }), void 0 === x && (x = "fetch"), void 0 === O && (O = !1), void 0 === R && (R = !1);
                        var A = e.call(this, {
                            apiKey: t,
                            storageProvider: _,
                            transportProvider: eX(x)
                        }) || this;
                        return A.apiKey = t, A.appVersion = n, A.cookieOptions = i, A.defaultTracking = o, A.autocapture = s, A.flushIntervalMillis = u, A.flushMaxRetries = c, A.flushQueueSize = l, A.identityStorage = d, A.ingestionMetadata = f, A.instanceName = h, A.loggerProvider = g, A.logLevel = m, A.minIdLength = y, A.offline = b, A.partnerId = w, A.plan = I, A.serverUrl = E, A.serverZone = C, A.sessionTimeout = T, A.storageProvider = _, A.trackingOptions = M, A.transport = x, A.useBatch = O, A.fetchRemoteConfig = R, A._optOut = !1, A._cookieStorage = r, A.deviceId = a, A.lastEventId = p, A.lastEventTime = v, A.optOut = S, A.sessionId = k, A.pageCounter = P, A.userId = N, A.debugLogsEnabled = L, A.loggerProvider.enable(L ? em.i.Debug : A.logLevel), A
                    }
                    return (0, v.ZT)(t, e), Object.defineProperty(t.prototype, "cookieStorage", {
                        get: function () {
                            return this._cookieStorage
                        },
                        set: function (e) {
                            this._cookieStorage !== e && (this._cookieStorage = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "deviceId", {
                        get: function () {
                            return this._deviceId
                        },
                        set: function (e) {
                            this._deviceId !== e && (this._deviceId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userId", {
                        get: function () {
                            return this._userId
                        },
                        set: function (e) {
                            this._userId !== e && (this._userId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "sessionId", {
                        get: function () {
                            return this._sessionId
                        },
                        set: function (e) {
                            this._sessionId !== e && (this._sessionId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optOut", {
                        get: function () {
                            return this._optOut
                        },
                        set: function (e) {
                            this._optOut !== e && (this._optOut = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventTime", {
                        get: function () {
                            return this._lastEventTime
                        },
                        set: function (e) {
                            this._lastEventTime !== e && (this._lastEventTime = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventId", {
                        get: function () {
                            return this._lastEventId
                        },
                        set: function (e) {
                            this._lastEventId !== e && (this._lastEventId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pageCounter", {
                        get: function () {
                            return this._pageCounter
                        },
                        set: function (e) {
                            this._pageCounter !== e && (this._pageCounter = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "debugLogsEnabled", {
                        set: function (e) {
                            this._debugLogsEnabled !== e && (this._debugLogsEnabled = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.updateStorage = function () {
                        var e = {
                            deviceId: this._deviceId,
                            userId: this._userId,
                            sessionId: this._sessionId,
                            optOut: this._optOut,
                            lastEventTime: this._lastEventTime,
                            lastEventId: this._lastEventId,
                            pageCounter: this._pageCounter,
                            debugLogsEnabled: this._debugLogsEnabled
                        };
                        this.cookieStorage.set(eS(this.apiKey), e)
                    }, t
                }(w.De),
                e$ = function (e, t) {
                    switch (void 0 === e && (e = eK), void 0 === t && (t = {}), e) {
                        case "localStorage":
                            return new eT;
                        case "sessionStorage":
                            return new e_;
                        case "none":
                            return new ey;
                        default:
                            return new ew((0, v.pi)((0, v.pi)({}, t), {
                                expirationDays: t.expiration
                            }))
                    }
                },
                eX = function (e) {
                    return "xhr" === e ? new ex : "beacon" === e ? new eO : new eC.V
                },
                eZ = function (e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        r && (t[n] = r)
                    }
                    return t
                },
                eY = function (e) {
                    void 0 === e && (e = {});
                    var t, n, r, i = (0, er.l)(),
                        o = void 0,
                        s = e.trackOn,
                        a = e.trackHistoryChanges,
                        u = e.eventType,
                        c = void 0 === u ? "[Amplitude] Page Viewed" : u,
                        l = function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var e, t;
                                return (0, v.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = {
                                                event_type: c
                                            }, e = [{}], [4, eQ()];
                                        case 1:
                                            return [2, (t.event_properties = v.pi.apply(void 0, [v.pi.apply(void 0, e.concat([n.sent()])), {
                                                "[Amplitude] Page Domain": "undefined" != typeof location && location.hostname || "",
                                                "[Amplitude] Page Location": "undefined" != typeof location && location.href || "",
                                                "[Amplitude] Page Path": "undefined" != typeof location && location.pathname || "",
                                                "[Amplitude] Page Title": "undefined" != typeof document && document.title || "",
                                                "[Amplitude] Page URL": "undefined" != typeof location && location.href.split("?")[0] || ""
                                            }]), t)]
                                    }
                                })
                            })
                        },
                        d = function () {
                            return void 0 === s || "function" == typeof s && s()
                        },
                        f = "undefined" != typeof location ? location.href : null,
                        h = function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var e, n, r, i;
                                return (0, v.Jh)(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            if (n = e1(a, e = location.href, f || "") && d(), f = e, !n) return [3, 4];
                                            if (null == o || o.log("Tracking page view event"), null != t) return [3, 1];
                                            return [3, 3];
                                        case 1:
                                            return i = (r = t).track, [4, l()];
                                        case 2:
                                            i.apply(r, [s.sent()]), s.label = 3;
                                        case 3:
                                            s.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        },
                        p = function () {
                            h()
                        };
                    return {
                        name: "@amplitude/plugin-page-view-tracking-browser",
                        type: "enrichment",
                        setup: function (e, s) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var a, u;
                                return (0, v.Jh)(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            if (t = s, r = e, (o = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"), i && (i.addEventListener("popstate", p), n = i.history.pushState, i.history.pushState = new Proxy(i.history.pushState, {
                                                    apply: function (e, t, n) {
                                                        var r = (0, v.CR)(n, 3),
                                                            i = r[0],
                                                            o = r[1],
                                                            s = r[2];
                                                        e.apply(t, [i, o, s]), h()
                                                    }
                                                })), !d()) return [3, 2];
                                            return o.log("Tracking page view event"), u = (a = t).track, [4, l()];
                                        case 1:
                                            u.apply(a, [c.sent()]), c.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function (e) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var t;
                                return (0, v.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!("attribution" === s && e0(e))) return [3, 2];
                                            return null == o || o.log("Enriching campaign event to page view event with campaign parameters"), [4, l()];
                                        case 1:
                                            t = n.sent(), e.event_type = t.event_type, e.event_properties = (0, v.pi)((0, v.pi)({}, e.event_properties), t.event_properties), n.label = 2;
                                        case 2:
                                            return r && e.event_type === c && (r.pageCounter = r.pageCounter ? r.pageCounter + 1 : 1, e.event_properties = (0, v.pi)((0, v.pi)({}, e.event_properties), {
                                                "[Amplitude] Page Counter": r.pageCounter
                                            })), [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (e) {
                                    return i && (i.removeEventListener("popstate", p), n && (i.history.pushState = n)), [2]
                                })
                            })
                        }
                    }
                },
                eQ = function () {
                    return (0, v.mG)(void 0, void 0, void 0, function () {
                        var e;
                        return (0, v.Jh)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e = eZ, [4, new es().parse()];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent()])]
                            }
                        })
                    })
                },
                e0 = function (e) {
                    if ("$identify" === e.event_type && e.user_properties) {
                        var t = e.user_properties,
                            n = t[a.SET] || {},
                            r = t[a.UNSET] || {},
                            i = (0, v.ev)((0, v.ev)([], (0, v.CR)(Object.keys(n)), !1), (0, v.CR)(Object.keys(r)), !1);
                        return Object.keys(Y).every(function (e) {
                            return i.includes(e)
                        })
                    }
                    return !1
                },
                e1 = function (e, t, n) {
                    return "pathOnly" === e ? t.split("?")[0] !== n.split("?")[0] : t !== n
                },
                e2 = function () {
                    var e, t = [],
                        n = function (e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function () {
                            t.forEach(function (e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-form-interaction-tracking-browser",
                        type: "enrichment",
                        setup: function (t, r) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var i;
                                return (0, v.Jh)(this, function (o) {
                                    return null === (i = (0, er.l)()) || void 0 === i || i.addEventListener("load", function () {
                                        if (!r) {
                                            t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                                            return
                                        }
                                        if ("undefined" != typeof document) {
                                            var i = function (e) {
                                                var t = !1;
                                                n(e, "change", function () {
                                                    var n;
                                                    t || r.track(eL, ((n = {})[eB] = e3(e.id), n[eW] = e3(e.name), n[eV] = e.action, n)), t = !0
                                                }), n(e, "submit", function () {
                                                    var n, i;
                                                    t || r.track(eL, ((n = {})[eB] = e3(e.id), n[eW] = e3(e.name), n[eV] = e.action, n)), r.track(eA, ((i = {})[eB] = e3(e.id), i[eW] = e3(e.name), i[eV] = e.action, i)), t = !1
                                                })
                                            };
                                            Array.from(document.getElementsByTagName("form")).forEach(i), "undefined" != typeof MutationObserver && (e = new MutationObserver(function (e) {
                                                e.forEach(function (e) {
                                                    e.addedNodes.forEach(function (e) {
                                                        "FORM" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("form")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }), [2]
                                })
                            })
                        },
                        execute: function (e) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                e3 = function (e) {
                    if ("string" == typeof e) return e
                },
                e4 = function () {
                    var e, t = [],
                        n = function (e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function () {
                            t.forEach(function (e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-file-download-tracking-browser",
                        type: "enrichment",
                        setup: function (t, r) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var i;
                                return (0, v.Jh)(this, function (o) {
                                    return null === (i = (0, er.l)()) || void 0 === i || i.addEventListener("load", function () {
                                        if (!r) {
                                            t.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                                            return
                                        }
                                        if ("undefined" != typeof document) {
                                            var i = function (e) {
                                                    try {
                                                        t = new URL(e.href, window.location.href)
                                                    } catch (e) {
                                                        return
                                                    }
                                                    var t, i = o.exec(t.href),
                                                        s = null == i ? void 0 : i[1];
                                                    s && n(e, "click", function () {
                                                        var n;
                                                        s && r.track(eD, ((n = {})[eF] = s, n[eG] = t.pathname, n[eU] = e.id, n[eJ] = e.text, n[ez] = e.href, n))
                                                    })
                                                },
                                                o = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/;
                                            Array.from(document.getElementsByTagName("a")).forEach(i), "undefined" != typeof MutationObserver && (e = new MutationObserver(function (e) {
                                                e.forEach(function (e) {
                                                    e.addedNodes.forEach(function (e) {
                                                        "A" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("a")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }), [2]
                                })
                            })
                        },
                        execute: function (e) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                e5 = !1,
                e8 = function (e) {
                    e5 || void 0 !== e.defaultTracking || (e.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."), e5 = !0)
                },
                e6 = function () {
                    var e = (0, er.l)(),
                        t = [],
                        n = function (n, r) {
                            e && (e.addEventListener(n, r), t.push({
                                type: n,
                                handler: r
                            }))
                        },
                        r = function () {
                            t.forEach(function (t) {
                                var n = t.type,
                                    r = t.handler;
                                e && e.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-network-checker-browser",
                        type: "before",
                        setup: function (e, t) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (r) {
                                    return e.offline = !navigator.onLine, n("online", function () {
                                        e.loggerProvider.debug("Network connectivity changed to online."), e.offline = !1, setTimeout(function () {
                                            t.flush()
                                        }, e.flushIntervalMillis)
                                    }), n("offline", function () {
                                        e.loggerProvider.debug("Network connectivity changed to offline."), e.offline = !0
                                    }), [2]
                                })
                            })
                        },
                        teardown: function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (e) {
                                    return r(), [2]
                                })
                            })
                        }
                    }
                },
                e7 = n(24194),
                e9 = function () {
                    function e(e) {
                        this.config = e, this.config.loggerProvider.debug("Local configuration before merging with remote config", JSON.stringify(this.config, null, 2))
                    }
                    return e.prototype.initialize = function () {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var e;
                            return (0, v.Jh)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this, [4, (0, e7.p)({
                                            localConfig: this.config,
                                            configKeys: ["analyticsSDK"]
                                        })];
                                    case 1:
                                        return e.remoteConfigFetch = t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.generateJoinedConfig = function () {
                        var e, t, n;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var r, i, o;
                            return (0, v.Jh)(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        if (s.trys.push([0, 3, , 4]), !(i = this.remoteConfigFetch)) return [3, 2];
                                        return [4, this.remoteConfigFetch.getRemoteConfig("analyticsSDK", "browserSDK", this.config.sessionId)];
                                    case 1:
                                        i = s.sent(), s.label = 2;
                                    case 2:
                                        return r = i, this.config.loggerProvider.debug("Remote configuration:", JSON.stringify(r, null, 2)), r && "autocapture" in r && (this.config.autocapture = r.autocapture, this.config.defaultTracking = this.config.autocapture), this.config.loggerProvider.debug("Joined configuration: ", JSON.stringify(this.config, null, 2)), null !== (e = (n = this.config).requestMetadata) && void 0 !== e || (n.requestMetadata = new w.Dg), this.config.requestMetadata.recordHistogram("remote_config_fetch_time", null === (t = this.remoteConfigFetch) || void 0 === t ? void 0 : t.fetchTime), [3, 4];
                                    case 3:
                                        return o = s.sent(), this.config.loggerProvider.error("Failed to fetch remote configuration because of error: ", o), [3, 4];
                                    case 4:
                                        return [2, this.config]
                                }
                            })
                        })
                    }, e
                }(),
                te = "[Amplitude] Element Clicked",
                tt = "[Amplitude] Element Tag",
                tn = "[Amplitude] Element Text",
                tr = "[Amplitude] Element Selector",
                ti = "[Amplitude] Page URL",
                to = "https://app.amplitude.com",
                ts = {
                    US: to,
                    EU: "https://app.eu.amplitude.com",
                    STAGING: "https://apps.stag2.amplitude.com"
                },
                ta = "amp-visual-tagging-selector-highlight",
                tu = function (e) {
                    return e && "number" == typeof e.length && "function" != typeof e
                };

            function tc(e) {
                return "function" == typeof e
            }

            function tl(e) {
                return tc(null == e ? void 0 : e.then)
            }

            function td(e) {
                var t = e(function (e) {
                    Error.call(e), e.stack = Error().stack
                });
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            var tf = td(function (e) {
                return function (t) {
                    e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (e, t) {
                        return t + 1 + ") " + e.toString()
                    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
                }
            });

            function th(e, t) {
                if (e) {
                    var n = e.indexOf(t);
                    0 <= n && e.splice(n, 1)
                }
            }
            var tp = function () {
                var e;

                function t(e) {
                    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                }
                return t.prototype.unsubscribe = function () {
                    if (!this.closed) {
                        this.closed = !0;
                        var e, t, n, r, i, o = this._parentage;
                        if (o) {
                            if (this._parentage = null, Array.isArray(o)) try {
                                for (var s = (0, v.XA)(o), a = s.next(); !a.done; a = s.next()) a.value.remove(this)
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    a && !a.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            } else o.remove(this)
                        }
                        var u = this.initialTeardown;
                        if (tc(u)) try {
                            u()
                        } catch (e) {
                            i = e instanceof tf ? e.errors : [e]
                        }
                        var c = this._finalizers;
                        if (c) {
                            this._finalizers = null;
                            try {
                                for (var l = (0, v.XA)(c), d = l.next(); !d.done; d = l.next()) {
                                    var f = d.value;
                                    try {
                                        tg(f)
                                    } catch (e) {
                                        i = null != i ? i : [], e instanceof tf ? i = (0, v.ev)((0, v.ev)([], (0, v.CR)(i)), (0, v.CR)(e.errors)) : i.push(e)
                                    }
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    d && !d.done && (r = l.return) && r.call(l)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        if (i) throw new tf(i)
                    }
                }, t.prototype.add = function (e) {
                    var n;
                    if (e && e !== this) {
                        if (this.closed) tg(e);
                        else {
                            if (e instanceof t) {
                                if (e.closed || e._hasParent(this)) return;
                                e._addParent(this)
                            }(this._finalizers = null !== (n = this._finalizers) && void 0 !== n ? n : []).push(e)
                        }
                    }
                }, t.prototype._hasParent = function (e) {
                    var t = this._parentage;
                    return t === e || Array.isArray(t) && t.includes(e)
                }, t.prototype._addParent = function (e) {
                    var t = this._parentage;
                    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                }, t.prototype._removeParent = function (e) {
                    var t = this._parentage;
                    t === e ? this._parentage = null : Array.isArray(t) && th(t, e)
                }, t.prototype.remove = function (e) {
                    var n = this._finalizers;
                    n && th(n, e), e instanceof t && e._removeParent(this)
                }, t.EMPTY = ((e = new t).closed = !0, e), t
            }();

            function tv(e) {
                return e instanceof tp || e && "closed" in e && tc(e.remove) && tc(e.add) && tc(e.unsubscribe)
            }

            function tg(e) {
                tc(e) ? e() : e.unsubscribe()
            }
            tp.EMPTY;
            var tm = {
                    onUnhandledError: null,
                    onStoppedNotification: null,
                    Promise: void 0,
                    useDeprecatedSynchronousErrorHandling: !1,
                    useDeprecatedNextContext: !1
                },
                ty = {
                    setTimeout: function (e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var i = ty.delegate;
                        return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, (0, v.ev)([e, t], (0, v.CR)(n))) : setTimeout.apply(void 0, (0, v.ev)([e, t], (0, v.CR)(n)))
                    },
                    clearTimeout: function (e) {
                        var t = ty.delegate;
                        return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                    },
                    delegate: void 0
                };

            function tb(e) {
                ty.setTimeout(function () {
                    var t = tm.onUnhandledError;
                    if (t) t(e);
                    else throw e
                })
            }

            function tS() {}
            var tw = tI("C", void 0, void 0);

            function tI(e, t, n) {
                return {
                    kind: e,
                    value: t,
                    error: n
                }
            }
            var tE = null,
                tC = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.isStopped = !1, t ? (n.destination = t, tv(t) && t.add(n)) : n.destination = tR, n
                    }
                    return (0, v.ZT)(t, e), t.create = function (e, t, n) {
                        return new tM(e, t, n)
                    }, t.prototype.next = function (e) {
                        this.isStopped ? tO(tI("N", e, void 0), this) : this._next(e)
                    }, t.prototype.error = function (e) {
                        this.isStopped ? tO(tI("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function () {
                        this.isStopped ? tO(tw, this) : (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function () {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                    }, t.prototype._next = function (e) {
                        this.destination.next(e)
                    }, t.prototype._error = function (e) {
                        try {
                            this.destination.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    }, t.prototype._complete = function () {
                        try {
                            this.destination.complete()
                        } finally {
                            this.unsubscribe()
                        }
                    }, t
                }(tp),
                tk = Function.prototype.bind;

            function tT(e, t) {
                return tk.call(e, t)
            }
            var t_ = function () {
                    function e(e) {
                        this.partialObserver = e
                    }
                    return e.prototype.next = function (e) {
                        var t = this.partialObserver;
                        if (t.next) try {
                            t.next(e)
                        } catch (e) {
                            tx(e)
                        }
                    }, e.prototype.error = function (e) {
                        var t = this.partialObserver;
                        if (t.error) try {
                            t.error(e)
                        } catch (e) {
                            tx(e)
                        } else tx(e)
                    }, e.prototype.complete = function () {
                        var e = this.partialObserver;
                        if (e.complete) try {
                            e.complete()
                        } catch (e) {
                            tx(e)
                        }
                    }, e
                }(),
                tM = function (e) {
                    function t(t, n, r) {
                        var i, o, s = e.call(this) || this;
                        return tc(t) || !t ? i = {
                            next: null != t ? t : void 0,
                            error: null != n ? n : void 0,
                            complete: null != r ? r : void 0
                        } : s && tm.useDeprecatedNextContext ? ((o = Object.create(t)).unsubscribe = function () {
                            return s.unsubscribe()
                        }, i = {
                            next: t.next && tT(t.next, o),
                            error: t.error && tT(t.error, o),
                            complete: t.complete && tT(t.complete, o)
                        }) : i = t, s.destination = new t_(i), s
                    }
                    return (0, v.ZT)(t, e), t
                }(tC);

            function tx(e) {
                tm.useDeprecatedSynchronousErrorHandling ? tm.useDeprecatedSynchronousErrorHandling && tE && (tE.errorThrown = !0, tE.error = e) : tb(e)
            }

            function tO(e, t) {
                var n = tm.onStoppedNotification;
                n && ty.setTimeout(function () {
                    return n(e, t)
                })
            }
            var tR = {
                    closed: !0,
                    next: tS,
                    error: function (e) {
                        throw e
                    },
                    complete: tS
                },
                tN = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function tP(e) {
                return e
            }
            var tL = function () {
                function e(e) {
                    e && (this._subscribe = e)
                }
                return e.prototype.lift = function (t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }, e.prototype.subscribe = function (e, t, n) {
                    var r, i = this,
                        o = (r = e) && r instanceof tC || r && tc(r.next) && tc(r.error) && tc(r.complete) && tv(r) ? e : new tM(e, t, n);
                    return function (e) {
                        if (tm.useDeprecatedSynchronousErrorHandling) {
                            var t = !tE;
                            if (t && (tE = {
                                    errorThrown: !1,
                                    error: null
                                }), e(), t) {
                                var n = tE,
                                    r = n.errorThrown,
                                    i = n.error;
                                if (tE = null, r) throw i
                            }
                        } else e()
                    }(function () {
                        var e = i.operator,
                            t = i.source;
                        o.add(e ? e.call(o, t) : t ? i._subscribe(o) : i._trySubscribe(o))
                    }), o
                }, e.prototype._trySubscribe = function (e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        e.error(t)
                    }
                }, e.prototype.forEach = function (e, t) {
                    var n = this;
                    return new(t = tA(t))(function (t, r) {
                        var i = new tM({
                            next: function (t) {
                                try {
                                    e(t)
                                } catch (e) {
                                    r(e), i.unsubscribe()
                                }
                            },
                            error: r,
                            complete: t
                        });
                        n.subscribe(i)
                    })
                }, e.prototype._subscribe = function (e) {
                    var t;
                    return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
                }, e.prototype[tN] = function () {
                    return this
                }, e.prototype.pipe = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0 === e.length ? tP : 1 === e.length ? e[0] : function (t) {
                        return e.reduce(function (e, t) {
                            return t(e)
                        }, t)
                    })(this)
                }, e.prototype.toPromise = function (e) {
                    var t = this;
                    return new(e = tA(e))(function (e, n) {
                        var r;
                        t.subscribe(function (e) {
                            return r = e
                        }, function (e) {
                            return n(e)
                        }, function () {
                            return e(r)
                        })
                    })
                }, e.create = function (t) {
                    return new e(t)
                }, e
            }();

            function tA(e) {
                var t;
                return null !== (t = null != e ? e : tm.Promise) && void 0 !== t ? t : Promise
            }

            function tD(e) {
                return Symbol.asyncIterator && tc(null == e ? void 0 : e[Symbol.asyncIterator])
            }

            function tq(e) {
                return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            var tj = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

            function tF(e) {
                return tc(null == e ? void 0 : e[tj])
            }

            function tG(e) {
                return (0, v.FC)(this, arguments, function () {
                    var t, n, r;
                    return (0, v.Jh)(this, function (i) {
                        switch (i.label) {
                            case 0:
                                t = e.getReader(), i.label = 1;
                            case 1:
                                i.trys.push([1, , 9, 10]), i.label = 2;
                            case 2:
                                return [4, (0, v.qq)(t.read())];
                            case 3:
                                if (r = (n = i.sent()).value, !n.done) return [3, 5];
                                return [4, (0, v.qq)(void 0)];
                            case 4:
                                return [2, i.sent()];
                            case 5:
                                return [4, (0, v.qq)(r)];
                            case 6:
                                return [4, i.sent()];
                            case 7:
                                return i.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return t.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    })
                })
            }

            function tU(e) {
                return tc(null == e ? void 0 : e.getReader)
            }

            function tJ(e) {
                if (e instanceof tL) return e;
                if (null != e) {
                    if (tc(e[tN])) return new tL(function (t) {
                        var n = e[tN]();
                        if (tc(n.subscribe)) return n.subscribe(t);
                        throw TypeError("Provided object does not correctly implement Symbol.observable")
                    });
                    if (tu(e)) return new tL(function (t) {
                        for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
                        t.complete()
                    });
                    if (tl(e)) return new tL(function (t) {
                        e.then(function (e) {
                            t.closed || (t.next(e), t.complete())
                        }, function (e) {
                            return t.error(e)
                        }).then(null, tb)
                    });
                    if (tD(e)) return tz(e);
                    if (tF(e)) return new tL(function (t) {
                        var n, r;
                        try {
                            for (var i = (0, v.XA)(e), o = i.next(); !o.done; o = i.next()) {
                                var s = o.value;
                                if (t.next(s), t.closed) return
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        t.complete()
                    });
                    if (tU(e)) return tz(tG(e))
                }
                throw tq(e)
            }

            function tz(e) {
                return new tL(function (t) {
                    (function (e, t) {
                        var n, r, i, o;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var s;
                            return (0, v.Jh)(this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        a.trys.push([0, 5, 6, 11]), n = (0, v.KL)(e), a.label = 1;
                                    case 1:
                                        return [4, n.next()];
                                    case 2:
                                        if ((r = a.sent()).done) return [3, 4];
                                        if (s = r.value, t.next(s), t.closed) return [2];
                                        a.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return i = {
                                            error: a.sent()
                                        }, [3, 11];
                                    case 6:
                                        if (a.trys.push([6, , 9, 10]), !(r && !r.done && (o = n.return))) return [3, 8];
                                        return [4, o.call(n)];
                                    case 7:
                                        a.sent(), a.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (i) throw i.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return t.complete(), [2]
                                }
                            })
                        })
                    })(e, t).catch(function (e) {
                        return t.error(e)
                    })
                })
            }

            function tB(e) {
                return function (t) {
                    if (tc(null == t ? void 0 : t.lift)) return t.lift(function (t) {
                        try {
                            return e(t, this)
                        } catch (e) {
                            this.error(e)
                        }
                    });
                    throw TypeError("Unable to lift unknown Observable type")
                }
            }

            function tW(e, t, n, r, i) {
                return new tV(e, t, n, r, i)
            }
            var tV = function (e) {
                function t(t, n, r, i, o, s) {
                    var a = e.call(this, t) || this;
                    return a.onFinalize = o, a.shouldUnsubscribe = s, a._next = n ? function (e) {
                        try {
                            n(e)
                        } catch (e) {
                            t.error(e)
                        }
                    } : e.prototype._next, a._error = i ? function (e) {
                        try {
                            i(e)
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._error, a._complete = r ? function () {
                        try {
                            r()
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._complete, a
                }
                return (0, v.ZT)(t, e), t.prototype.unsubscribe = function () {
                    var t;
                    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                        var n = this.closed;
                        e.prototype.unsubscribe.call(this), n || null === (t = this.onFinalize) || void 0 === t || t.call(this)
                    }
                }, t
            }(tC);

            function tK(e, t) {
                return tB(function (n, r) {
                    var i = 0;
                    n.subscribe(tW(r, function (n) {
                        r.next(e.call(t, n, i++))
                    }))
                })
            }

            function tH(e, t, n, r, i) {
                void 0 === r && (r = 0), void 0 === i && (i = !1);
                var o = t.schedule(function () {
                    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe()
                }, r);
                if (e.add(o), !i) return o
            }

            function t$(e, t, n) {
                return (void 0 === n && (n = 1 / 0), tc(t)) ? t$(function (n, r) {
                    return tK(function (e, i) {
                        return t(n, e, r, i)
                    })(tJ(e(n, r)))
                }, n) : ("number" == typeof t && (n = t), tB(function (t, r) {
                    var i, o, s, a, u, c, l, d, f;
                    return i = n, s = [], a = 0, u = 0, c = !1, l = function () {
                            !c || s.length || a || r.complete()
                        }, d = function (e) {
                            return a < i ? f(e) : s.push(e)
                        }, f = function (t) {
                            a++;
                            var n = !1;
                            tJ(e(t, u++)).subscribe(tW(r, function (e) {
                                o ? d(e) : r.next(e)
                            }, function () {
                                n = !0
                            }, void 0, function () {
                                if (n) try {
                                    for (a--; s.length && a < i;) ! function () {
                                        var e = s.shift();
                                        f(e)
                                    }();
                                    l()
                                } catch (e) {
                                    r.error(e)
                                }
                            }))
                        }, t.subscribe(tW(r, d, function () {
                            c = !0, l()
                        })),
                        function () {}
                }))
            }
            var tX = Array.isArray,
                tZ = ["addListener", "removeListener"],
                tY = ["addEventListener", "removeEventListener"],
                tQ = ["on", "off"];

            function t0(e, t, n, r) {
                if (tc(n) && (r = n, n = void 0), r) return t0(e, t, n).pipe((i = r, tK(function (e) {
                    return tX(e) ? i.apply(void 0, (0, v.ev)([], (0, v.CR)(e))) : i(e)
                })));
                var i, o = (0, v.CR)(tc(e.addEventListener) && tc(e.removeEventListener) ? tY.map(function (r) {
                        return function (i) {
                            return e[r](t, i, n)
                        }
                    }) : tc(e.addListener) && tc(e.removeListener) ? tZ.map(t1(e, t)) : tc(e.on) && tc(e.off) ? tQ.map(t1(e, t)) : [], 2),
                    s = o[0],
                    a = o[1];
                if (!s && tu(e)) return t$(function (e) {
                    return t0(e, t, n)
                })(tJ(e));
                if (!s) throw TypeError("Invalid event target");
                return new tL(function (e) {
                    var t = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return e.next(1 < t.length ? t : t[0])
                    };
                    return s(t),
                        function () {
                            return a(t)
                        }
                })
            }

            function t1(e, t) {
                return function (n) {
                    return function (r) {
                        return e[n](t, r)
                    }
                }
            }

            function t2(e, t, n) {
                for (var r = null, i = [], o = e, s = 0; o && "break" !== function () {
                        var e, a, u, c, d = ne((e = o.getAttribute("id")) && l.idName(e) ? {
                                name: "#" + CSS.escape(e),
                                penalty: 0
                            } : null) || ne.apply(void 0, (0, v.ev)([], (0, v.CR)(Array.from(o.attributes).filter(function (e) {
                                return l.attr(e.name, e.value)
                            }).map(function (e) {
                                return {
                                    name: "[".concat(CSS.escape(e.name), '="').concat(CSS.escape(e.value), '"]'),
                                    penalty: .5
                                }
                            })), !1)) || ne.apply(void 0, (0, v.ev)([], (0, v.CR)(Array.from(o.classList).filter(l.className).map(function (e) {
                                return {
                                    name: "." + CSS.escape(e),
                                    penalty: 1
                                }
                            })), !1)) || ne((a = o.tagName.toLowerCase(), l.tagName(a) ? {
                                name: a,
                                penalty: 2
                            } : null)) || [t6()],
                            f = function (e) {
                                var t = e.parentNode;
                                if (!t) return null;
                                var n = t.firstChild;
                                if (!n) return null;
                                for (var r = 0; n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);) n = n.nextSibling;
                                return r
                            }(o);
                        if ("all" == t) f && (d = d.concat(d.filter(t9).map(function (e) {
                            return t7(e, f)
                        })));
                        else if ("two" == t) d = d.slice(0, 1), f && (d = d.concat(d.filter(t9).map(function (e) {
                            return t7(e, f)
                        })));
                        else if ("one" == t) {
                            var h = (0, v.CR)(d = d.slice(0, 1), 1)[0];
                            f && t9(h) && (d = [t7(h, f)])
                        } else "none" == t && (d = [t6()], f && (d = [t7(d[0], f)]));
                        try {
                            for (var p = (u = void 0, (0, v.XA)(d)), g = p.next(); !g.done; g = p.next()) {
                                var h = g.value;
                                h.level = s
                            }
                        } catch (e) {
                            u = {
                                error: e
                            }
                        } finally {
                            try {
                                g && !g.done && (c = p.return) && c.call(p)
                            } finally {
                                if (u) throw u.error
                            }
                        }
                        if (i.push(d), i.length >= l.seedMinLength && (r = t3(i, n))) return "break";
                        o = o.parentElement, s++
                    }(););
                return (r || (r = t3(i, n)), !r && n) ? n() : r
            }

            function t3(e, t) {
                var n, r, i = nn(function e(t, n) {
                    var r, i, o, s, a;
                    return void 0 === n && (n = []), (0, v.Jh)(this, function (u) {
                        switch (u.label) {
                            case 0:
                                if (!(t.length > 0)) return [3, 9];
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 6, 7, 8]), i = (r = (0, v.XA)(t[0])).next(), u.label = 2;
                            case 2:
                                if (i.done) return [3, 5];
                                return o = i.value, [5, (0, v.XA)(e(t.slice(1, t.length), n.concat(o)))];
                            case 3:
                                u.sent(), u.label = 4;
                            case 4:
                                return i = r.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return s = {
                                    error: u.sent()
                                }, [3, 8];
                            case 7:
                                try {
                                    i && !i.done && (a = r.return) && a.call(r)
                                } finally {
                                    if (s) throw s.error
                                }
                                return [7];
                            case 8:
                                return [3, 11];
                            case 9:
                                return [4, n];
                            case 10:
                                u.sent(), u.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                }(e));
                if (i.length > l.threshold) return t ? t() : null;
                try {
                    for (var o = (0, v.XA)(i), s = o.next(); !s.done; s = o.next()) {
                        var a = s.value;
                        if (t8(a)) return a
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }

            function t4(e) {
                for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
                    var i = e[r].level || 0;
                    n = t.level === i - 1 ? "".concat(e[r].name, " > ").concat(n) : "".concat(e[r].name, " ").concat(n), t = e[r]
                }
                return n
            }

            function t5(e) {
                return e.map(function (e) {
                    return e.penalty
                }).reduce(function (e, t) {
                    return e + t
                }, 0)
            }

            function t8(e) {
                var t = t4(e);
                switch (d.querySelectorAll(t).length) {
                    case 0:
                        throw Error("Can't select any node with this selector: ".concat(t));
                    case 1:
                        return !0;
                    default:
                        return !1
                }
            }

            function t6() {
                return {
                    name: "*",
                    penalty: 3
                }
            }

            function t7(e, t) {
                return {
                    name: e.name + ":nth-child(".concat(t, ")"),
                    penalty: e.penalty + 1
                }
            }

            function t9(e) {
                return "html" !== e.name && !e.name.startsWith("#")
            }

            function ne() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.filter(nt);
                return n.length > 0 ? n : null
            }

            function nt(e) {
                return null != e
            }

            function nn(e) {
                return (0, v.ev)([], (0, v.CR)(e), !1).sort(function (e, t) {
                    return t5(e) - t5(t)
                })
            }
            var nr = ["input", "select", "textarea"],
                ni = function (e, t) {
                    return function (n, r) {
                        var i, o, s, a = e.pageUrlAllowlist,
                            u = e.shouldTrackEventResolver,
                            c = null === (o = null === (i = null == r ? void 0 : r.tagName) || void 0 === i ? void 0 : i.toLowerCase) || void 0 === o ? void 0 : o.call(i);
                        if (!c) return !1;
                        if (u) return u(n, r);
                        if (!nc(window.location.href, a)) return !1;
                        var l = (null == r ? void 0 : r.type) || "";
                        if ("string" == typeof l) switch (l.toLowerCase()) {
                            case "hidden":
                            case "password":
                                return !1
                        }
                        if (t && !t.some(function (e) {
                                var t;
                                return !!(null === (t = null == r ? void 0 : r.matches) || void 0 === t ? void 0 : t.call(r, e))
                            })) return !1;
                        switch (c) {
                            case "input":
                            case "select":
                            case "textarea":
                                return "change" === n || "click" === n;
                            default:
                                var d = null === (s = null == window ? void 0 : window.getComputedStyle) || void 0 === s ? void 0 : s.call(window, r);
                                if (d && "pointer" === d.getPropertyValue("cursor") && "click" === n) return !0;
                                return "click" === n
                        }
                    }
                },
                no = function (e) {
                    return !(null == e || "string" == typeof e && (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(e)))
                },
                ns = function (e) {
                    var t, n, r, i = null === (n = null === (t = null == e ? void 0 : e.tagName) || void 0 === t ? void 0 : t.toLowerCase) || void 0 === n ? void 0 : n.call(t),
                        o = e instanceof HTMLElement && (null === (r = e.getAttribute("contenteditable")) || void 0 === r ? void 0 : r.toLowerCase()) === "true";
                    return !nr.includes(i) && !o
                },
                na = function (e) {
                    var t = "";
                    return ns(e) && e.childNodes && e.childNodes.length && e.childNodes.forEach(function (e) {
                        var n = "";
                        e && 3 === e.nodeType ? e.textContent && (n = e.textContent) : n = na(e), t += n.split(/(\s+)/).filter(no).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
                    }), t
                },
                nu = function (e, t) {
                    var n, r, i = "";
                    try {
                        return i = function (e, t) {
                            if (e.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type.");
                            if ("html" === e.tagName.toLowerCase()) return "html";
                            var n, r = {
                                root: document.body,
                                idName: function (e) {
                                    return !0
                                },
                                className: function (e) {
                                    return !0
                                },
                                tagName: function (e) {
                                    return !0
                                },
                                attr: function (e, t) {
                                    return !1
                                },
                                seedMinLength: 1,
                                optimizedMinLength: 2,
                                threshold: 1e3,
                                maxNumberOfTries: 1e4
                            };
                            d = (n = (l = (0, v.pi)((0, v.pi)({}, r), t)).root).nodeType === Node.DOCUMENT_NODE ? n : n === r.root ? n.ownerDocument : n;
                            var i = t2(e, "all", function () {
                                return t2(e, "two", function () {
                                    return t2(e, "one", function () {
                                        return t2(e, "none")
                                    })
                                })
                            });
                            if (i) {
                                var o = nn(function e(t, n, r) {
                                    var i, o, s;
                                    return void 0 === r && (r = {
                                        counter: 0,
                                        visited: new Map
                                    }), (0, v.Jh)(this, function (a) {
                                        switch (a.label) {
                                            case 0:
                                                if (!(t.length > 2 && t.length > l.optimizedMinLength)) return [3, 5];
                                                i = 1, a.label = 1;
                                            case 1:
                                                var u;
                                                if (!(i < t.length - 1)) return [3, 5];
                                                if (r.counter > l.maxNumberOfTries || (r.counter += 1, (o = (0, v.ev)([], (0, v.CR)(t), !1)).splice(i, 1), s = t4(o), r.visited.has(s))) return [2];
                                                if (!(t8(o) && (u = o, d.querySelector(t4(u)) === n))) return [3, 4];
                                                return [4, o];
                                            case 2:
                                                return a.sent(), r.visited.set(s, !0), [5, (0, v.XA)(e(o, n, r))];
                                            case 3:
                                                a.sent(), a.label = 4;
                                            case 4:
                                                return i++, [3, 1];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                }(i, e));
                                return o.length > 0 && (i = o[0]), t4(i)
                            }
                            throw Error("Selector was not found.")
                        }(e, {
                            className: function (e) {
                                return e !== ta
                            }
                        })
                    } catch (e) {
                        t && t.warn("Failed to get selector with finder, use fallback strategy instead: ".concat(e.toString()))
                    }
                    var o = null === (r = null === (n = null == e ? void 0 : e.tagName) || void 0 === n ? void 0 : n.toLowerCase) || void 0 === r ? void 0 : r.call(n);
                    if (o && (i = o), e.id) i = "#".concat(e.id);
                    else if (e.className) {
                        var s = e.className.split(" ").filter(function (e) {
                            return e !== ta
                        }).join(".");
                        s && (i = "".concat(i, ".").concat(s))
                    }
                    return i
                },
                nc = function (e, t) {
                    return !t || !t.length || t.some(function (t) {
                        return "string" == typeof t ? e === t : e.match(t)
                    })
                },
                nl = function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                        var r = e[n];
                        return null == r || "object" == typeof r && 0 === Object.keys(r).length || "string" == typeof r && 0 === r.trim().length || (t[n] = r), t
                    }, {})
                },
                nd = function (e) {
                    var t = e.parentElement;
                    if (!t) return "";
                    var n = t.querySelector(":scope>span,h1,h2,h3,h4,h5,h6");
                    if (n) {
                        var r = n.textContent || "";
                        return no(r) ? r : ""
                    }
                    return nd(t)
                },
                nf = function (e, t) {
                    return e ? t.some(function (t) {
                        var n;
                        return null === (n = null == e ? void 0 : e.matches) || void 0 === n ? void 0 : n.call(e, t)
                    }) ? e : nf(null == e ? void 0 : e.parentElement, t) : null
                },
                nh = function (e, t) {
                    if (!e) return {};
                    var n, r, i, o = null === (i = null === (r = null == e ? void 0 : e.tagName) || void 0 === r ? void 0 : r.toLowerCase) || void 0 === i ? void 0 : i.call(r),
                        s = nu(e, t);
                    return nl(((n = {})[tt] = o, n[tn] = na(e), n[tr] = s, n[ti] = window.location.href.split("?")[0], n))
                },
                np = function (e) {
                    return null !== e.event.target && !!e.closestTrackedAncestor
                },
                nv = function () {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).origin,
                            n = this;
                        this.endpoint = to, this.requestCallbacks = {}, this.onSelect = function (e) {
                            n.notify({
                                action: "element-selected",
                                data: e
                            })
                        }, this.onTrack = function (e, t) {
                            "selector-mode-changed" === e ? n.notify({
                                action: "track-selector-mode-changed",
                                data: t
                            }) : "selector-moved" === e && n.notify({
                                action: "track-selector-moved",
                                data: t
                            })
                        }, this.endpoint = void 0 === t ? to : t
                    }
                    return e.prototype.notify = function (e) {
                        var t, n, r, i;
                        null === (n = null === (t = this.logger) || void 0 === t ? void 0 : t.debug) || void 0 === n || n.call(t, "Message sent: ", JSON.stringify(e)), null === (i = null === (r = window.opener) || void 0 === r ? void 0 : r.postMessage) || void 0 === i || i.call(r, e, this.endpoint)
                    }, e.prototype.sendRequest = function (e, t, n) {
                        var r = this;
                        void 0 === n && (n = {
                            timeout: 15e3
                        });
                        var i = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            o = {
                                id: i,
                                action: e,
                                args: t
                            };
                        return new Promise(function (t, s) {
                            r.requestCallbacks[i] = {
                                resolve: t,
                                reject: s
                            }, r.notify(o), (null == n ? void 0 : n.timeout) > 0 && setTimeout(function () {
                                s(Error("".concat(e, " timed out (id: ").concat(i, ")"))), delete r.requestCallbacks[i]
                            }, n.timeout)
                        })
                    }, e.prototype.handleResponse = function (e) {
                        var t;
                        if (!this.requestCallbacks[e.id]) {
                            null === (t = this.logger) || void 0 === t || t.warn("No callback found for request id: ".concat(e.id));
                            return
                        }
                        this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
                    }, e.prototype.setup = function (e) {
                        var t = this,
                            n = void 0 === e ? {} : e,
                            r = n.logger,
                            i = n.endpoint,
                            o = n.isElementSelectable,
                            s = n.cssSelectorAllowlist,
                            a = n.actionClickAllowlist;
                        this.logger = r, i && this.endpoint === to && (this.endpoint = i);
                        var u = null;
                        window.addEventListener("message", function (e) {
                            if (null === (r = null === (n = t.logger) || void 0 === n ? void 0 : n.debug) || void 0 === r || r.call(n, "Message received: ", JSON.stringify(e)), t.endpoint === e.origin) {
                                var n, r, i, c, l, d = null == e ? void 0 : e.data,
                                    f = null == d ? void 0 : d.action;
                                if (f) {
                                    if ("id" in d) null === (c = null === (i = t.logger) || void 0 === i ? void 0 : i.debug) || void 0 === c || c.call(i, "Received Response to previous request: ", JSON.stringify(e)), t.handleResponse(d);
                                    else if ("ping" === f) t.notify({
                                        action: "pong"
                                    });
                                    else if ("initialize-visual-tagging-selector" === f) {
                                        var h, p = null == d ? void 0 : d.data;
                                        (h = "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz", new Promise(function (e, t) {
                                            var n;
                                            try {
                                                var r = document.createElement("script");
                                                r.type = "text/javascript", r.async = !0, r.src = h, r.addEventListener("load", function () {
                                                    e({
                                                        status: !0
                                                    })
                                                }, {
                                                    once: !0
                                                }), r.addEventListener("error", function () {
                                                    t({
                                                        status: !1,
                                                        message: "Failed to load the script ".concat(h)
                                                    })
                                                }), null === (n = document.head) || void 0 === n || n.appendChild(r)
                                            } catch (e) {
                                                t(e)
                                            }
                                        })).then(function () {
                                            var e;
                                            u = null === (e = null == window ? void 0 : window.amplitudeVisualTaggingSelector) || void 0 === e ? void 0 : e.call(window, {
                                                getEventTagProps: nh,
                                                isElementSelectable: function (e) {
                                                    return !o || o((null == p ? void 0 : p.actionType) || "click", e)
                                                },
                                                onTrack: t.onTrack,
                                                onSelect: t.onSelect,
                                                visualHighlightClass: ta,
                                                messenger: t,
                                                cssSelectorAllowlist: s,
                                                actionClickAllowlist: a
                                            }), t.notify({
                                                action: "selector-loaded"
                                            })
                                        }).catch(function () {
                                            var e;
                                            null === (e = t.logger) || void 0 === e || e.warn("Failed to initialize visual tagging selector")
                                        })
                                    } else "close-visual-tagging-selector" === f && (null === (l = null == u ? void 0 : u.close) || void 0 === l || l.call(u))
                                }
                            }
                        }), this.notify({
                            action: "page-loaded"
                        })
                    }, e
                }(),
                ng = ["id", "class", "style", "value", "onclick", "onchange", "oninput", "onblur", "onsubmit", "onfocus", "onkeydown", "onkeyup", "onkeypress", "data-reactid", "data-react-checksum", "data-reactroot"],
                nm = ["type"],
                ny = ["svg", "path", "g"],
                nb = ["password", "hidden"];

            function nS(e, t) {
                return tB(function (n, r) {
                    var i = 0;
                    n.subscribe(tW(r, function (n) {
                        return e.call(t, n, i++) && r.next(n)
                    }))
                })
            }
            var nw = function (e) {
                    function t(t, n) {
                        return e.call(this) || this
                    }
                    return (0, v.ZT)(t, e), t.prototype.schedule = function (e, t) {
                        return void 0 === t && (t = 0), this
                    }, t
                }(tp),
                nI = {
                    setInterval: function (e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var i = nI.delegate;
                        return (null == i ? void 0 : i.setInterval) ? i.setInterval.apply(i, (0, v.ev)([e, t], (0, v.CR)(n))) : setInterval.apply(void 0, (0, v.ev)([e, t], (0, v.CR)(n)))
                    },
                    clearInterval: function (e) {
                        var t = nI.delegate;
                        return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e)
                    },
                    delegate: void 0
                },
                nE = function (e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return r.scheduler = t, r.work = n, r.pending = !1, r
                    }
                    return (0, v.ZT)(t, e), t.prototype.schedule = function (e, t) {
                        if (void 0 === t && (t = 0), this.closed) return this;
                        this.state = e;
                        var n, r = this.id,
                            i = this.scheduler;
                        return null != r && (this.id = this.recycleAsyncId(i, r, t)), this.pending = !0, this.delay = t, this.id = null !== (n = this.id) && void 0 !== n ? n : this.requestAsyncId(i, this.id, t), this
                    }, t.prototype.requestAsyncId = function (e, t, n) {
                        return void 0 === n && (n = 0), nI.setInterval(e.flush.bind(e, this), n)
                    }, t.prototype.recycleAsyncId = function (e, t, n) {
                        if (void 0 === n && (n = 0), null != n && this.delay === n && !1 === this.pending) return t;
                        null != t && nI.clearInterval(t)
                    }, t.prototype.execute = function (e, t) {
                        if (this.closed) return Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(e, t);
                        if (n) return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, t.prototype._execute = function (e, t) {
                        var n, r = !1;
                        try {
                            this.work(e)
                        } catch (e) {
                            r = !0, n = e || Error("Scheduled action threw falsy error")
                        }
                        if (r) return this.unsubscribe(), n
                    }, t.prototype.unsubscribe = function () {
                        if (!this.closed) {
                            var t = this.id,
                                n = this.scheduler,
                                r = n.actions;
                            this.work = this.state = this.scheduler = null, this.pending = !1, th(r, this), null != t && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null, e.prototype.unsubscribe.call(this)
                        }
                    }, t
                }(nw),
                nC = {
                    now: function () {
                        return (nC.delegate || Date).now()
                    },
                    delegate: void 0
                },
                nk = function () {
                    function e(t, n) {
                        void 0 === n && (n = e.now), this.schedulerActionCtor = t, this.now = n
                    }
                    return e.prototype.schedule = function (e, t, n) {
                        return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t)
                    }, e.now = nC.now, e
                }(),
                nT = new(function (e) {
                    function t(t, n) {
                        void 0 === n && (n = nk.now);
                        var r = e.call(this, t, n) || this;
                        return r.actions = [], r._active = !1, r
                    }
                    return (0, v.ZT)(t, e), t.prototype.flush = function (e) {
                        var t, n = this.actions;
                        if (this._active) {
                            n.push(e);
                            return
                        }
                        this._active = !0;
                        do
                            if (t = e.execute(e.state, e.delay)) break; while (e = n.shift());
                        if (this._active = !1, t) {
                            for (; e = n.shift();) e.unsubscribe();
                            throw t
                        }
                    }, t
                }(nk))(nE);

            function n_(e) {
                return void 0 === e && (e = 1 / 0), t$(tP, e)
            }
            var nM = new tL(function (e) {
                return e.complete()
            });

            function nx(e) {
                return e && tc(e.schedule)
            }

            function nO(e) {
                return e[e.length - 1]
            }

            function nR(e) {
                return nx(nO(e)) ? e.pop() : void 0
            }

            function nN(e, t) {
                return void 0 === t && (t = 0), tB(function (n, r) {
                    n.subscribe(tW(r, function (n) {
                        return tH(r, e, function () {
                            return r.next(n)
                        }, t)
                    }, function () {
                        return tH(r, e, function () {
                            return r.complete()
                        }, t)
                    }, function (n) {
                        return tH(r, e, function () {
                            return r.error(n)
                        }, t)
                    }))
                })
            }

            function nP(e, t) {
                return void 0 === t && (t = 0), tB(function (n, r) {
                    r.add(e.schedule(function () {
                        return n.subscribe(r)
                    }, t))
                })
            }

            function nL(e, t) {
                if (!e) throw Error("Iterable cannot be null");
                return new tL(function (n) {
                    tH(n, t, function () {
                        var r = e[Symbol.asyncIterator]();
                        tH(n, t, function () {
                            r.next().then(function (e) {
                                e.done ? n.complete() : n.next(e.value)
                            })
                        }, 0, !0)
                    })
                })
            }

            function nA(e, t) {
                return t ? function (e, t) {
                    if (null != e) {
                        if (tc(e[tN])) return tJ(e).pipe(nP(t), nN(t));
                        if (tu(e)) return new tL(function (n) {
                            var r = 0;
                            return t.schedule(function () {
                                r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
                            })
                        });
                        if (tl(e)) return tJ(e).pipe(nP(t), nN(t));
                        if (tD(e)) return nL(e, t);
                        if (tF(e)) return new tL(function (n) {
                            var r;
                            return tH(n, t, function () {
                                    r = e[tj](), tH(n, t, function () {
                                        var e, t, i;
                                        try {
                                            t = (e = r.next()).value, i = e.done
                                        } catch (e) {
                                            n.error(e);
                                            return
                                        }
                                        i ? n.complete() : n.next(t)
                                    }, 0, !0)
                                }),
                                function () {
                                    return tc(null == r ? void 0 : r.return) && r.return()
                                }
                        });
                        if (tU(e)) return nL(tG(e), t)
                    }
                    throw tq(e)
                }(e, t) : tJ(e)
            }

            function nD() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = nR(t),
                    i = (e = 1 / 0, "number" == typeof nO(t) ? t.pop() : e);
                return t.length ? 1 === t.length ? tJ(t[0]) : n_(i)(nA(t, r)) : nM
            }

            function nq(e) {
                return e <= 0 ? function () {
                    return nM
                } : tB(function (t, n) {
                    var r = 0;
                    t.subscribe(tW(n, function (t) {
                        ++r <= e && (n.next(t), e <= r && n.complete())
                    }))
                })
            }

            function nj(e) {
                return e instanceof Date && !isNaN(e)
            }
            var nF = td(function (e) {
                return function (t) {
                    void 0 === t && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
                }
            });

            function nG(e) {
                throw new nF(e)
            }
            var nU = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"],
                nJ = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"];
            (s = f || (f = {})).ClickObservable = "clickObservable", s.ChangeObservable = "changeObservable", s.NavigateObservable = "navigateObservable", s.MutationObservable = "mutationObservable";
            var nz = function (e) {
                    void 0 === e && (e = {});
                    var t, n, r, i = e.dataAttributePrefix,
                        o = void 0 === i ? "data-amp-track-" : i,
                        s = e.visualTaggingOptions,
                        a = void 0 === s ? {
                            enabled: !0,
                            messenger: new nv
                        } : s;
                    e.cssSelectorAllowlist = null !== (t = e.cssSelectorAllowlist) && void 0 !== t ? t : nU, e.actionClickAllowlist = null !== (n = e.actionClickAllowlist) && void 0 !== n ? n : nJ, e.debounceTime = null !== (r = e.debounceTime) && void 0 !== r ? r : 0;
                    var u = "@amplitude/plugin-autocapture-browser",
                        c = [],
                        l = void 0,
                        d = function () {
                            var e, t, n = t0(document, "click", {
                                    capture: !0
                                }).pipe(tK(function (e) {
                                    return p(e, "click")
                                })),
                                r = t0(document, "change", {
                                    capture: !0
                                }).pipe(tK(function (e) {
                                    return p(e, "change")
                                }));
                            window.navigation && (t = t0(window.navigation, "navigate").pipe(tK(function (e) {
                                return p(e, "navigate")
                            })));
                            var i = new tL(function (e) {
                                var t = new MutationObserver(function (t) {
                                    e.next(t)
                                });
                                return t.observe(document.body, {
                                        childList: !0,
                                        attributes: !0,
                                        characterData: !0,
                                        subtree: !0
                                    }),
                                    function () {
                                        return t.disconnect()
                                    }
                            }).pipe(tK(function (e) {
                                return p(e, "mutation")
                            }));
                            return (e = {})[f.ClickObservable] = n, e[f.ChangeObservable] = r, e[f.NavigateObservable] = t, e[f.MutationObservable] = i, e
                        },
                        h = function (e, t) {
                            var n, r, i, s, a = null === (s = null === (i = null == t ? void 0 : t.tagName) || void 0 === i ? void 0 : i.toLowerCase) || void 0 === s ? void 0 : s.call(i),
                                u = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                    left: null,
                                    top: null
                                },
                                c = t.getAttribute("aria-label"),
                                d = t.getAttributeNames().reduce(function (e, n) {
                                    if (n.startsWith(o)) {
                                        var r = n.replace(o, ""),
                                            i = t.getAttribute(n);
                                        r && (e[r] = i || "")
                                    }
                                    return e
                                }, {}),
                                f = nd(t),
                                h = nu(t, l),
                                p = ((r = {})["[Amplitude] Element ID"] = t.id, r["[Amplitude] Element Class"] = t.className, r["[Amplitude] Element Hierarchy"] = (n = t) ? function (e, t) {
                                    for (var n = 0, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if (null === i) n += 4;
                                        else {
                                            var o = function e(t, n) {
                                                void 0 === n && (n = !1);
                                                try {
                                                    if (null == t) {
                                                        if (n) return "None";
                                                        return null
                                                    }
                                                    if ("string" == typeof t) {
                                                        if (n) {
                                                            if ((t = t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r")).includes('"')) return "'".concat(t, "'");
                                                            if (t.includes("'")) return '"'.concat(t.replace(/'/g, "\\'"), '"');
                                                            return "'".concat(t, "'")
                                                        }
                                                        return t
                                                    }
                                                    if ("boolean" == typeof t) return t ? "True" : "False";
                                                    if (Array.isArray(t)) {
                                                        var r = t.map(function (t) {
                                                            return e(t, !0)
                                                        });
                                                        return "[".concat(r.join(", "), "]")
                                                    } else if ("object" == typeof t) {
                                                        var i = Object.entries(t).filter(function (e) {
                                                                var t = (0, v.CR)(e, 1)[0];
                                                                return null != t
                                                            }).map(function (t) {
                                                                var n = (0, v.CR)(t, 2),
                                                                    r = n[0],
                                                                    i = n[1];
                                                                return "".concat(String(e(r, !0)), ": ").concat(String(e(i, !0)))
                                                            }),
                                                            o = "{".concat(i.join(", "), "}");
                                                        return o.includes("\\'") && (o = o.replace(/'/g, "'").replace(/'/g, "\\'")), o
                                                    }
                                                    return t.toString()
                                                } catch (e) {
                                                    return null
                                                }
                                            }(i);
                                            n += o ? Array.from(o).length : 4
                                        }
                                        if (n > 1024) return e.slice(0, r)
                                    }
                                    return e
                                }((function (e) {
                                    var t = [];
                                    if (!e) return t;
                                    t.push(e);
                                    for (var n = e.parentElement; n && "HTML" !== n.tagName;) t.push(n), n = n.parentElement;
                                    return t
                                })(n).map(function (e) {
                                    return function (e) {
                                        if (null === e) return null;
                                        var t, n, r, i, o, s, a = e.tagName.toLowerCase(),
                                            u = {
                                                tag: a
                                            },
                                            c = Array.from(null !== (i = null === (r = e.parentElement) || void 0 === r ? void 0 : r.children) && void 0 !== i ? i : []);
                                        c.length && (u.index = c.indexOf(e), u.indexOfType = c.filter(function (t) {
                                            return t.tagName === e.tagName
                                        }).indexOf(e));
                                        var l = null === (s = null === (o = e.previousElementSibling) || void 0 === o ? void 0 : o.tagName) || void 0 === s ? void 0 : s.toLowerCase();
                                        l && (u.prevSib = l);
                                        var d = e.id;
                                        d && (u.id = d);
                                        var f = Array.from(e.classList);
                                        f.length && (u.classes = f);
                                        var h = {},
                                            p = Array.from(e.attributes).filter(function (e) {
                                                return !ng.includes(e.name)
                                            }),
                                            g = !ns(e);
                                        if (!nb.includes(e.type) && !ny.includes(a)) try {
                                            for (var m = (0, v.XA)(p), y = m.next(); !y.done; y = m.next()) {
                                                var b = y.value;
                                                (!g || nm.includes(b.name)) && (h[b.name] = String(b.value).substring(0, 128))
                                            }
                                        } catch (e) {
                                            t = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                y && !y.done && (n = m.return) && n.call(m)
                                            } finally {
                                                if (t) throw t.error
                                            }
                                        }
                                        return Object.keys(h).length && (u.attrs = h), u
                                    }(e)
                                }), 0) : [], r[tt] = a, r[tn] = na(t), r["[Amplitude] Element Position Left"] = null == u.left ? null : Math.round(u.left), r["[Amplitude] Element Position Top"] = null == u.top ? null : Math.round(u.top), r["[Amplitude] Element Aria Label"] = c, r["[Amplitude] Element Attributes"] = d, r[tr] = h, r["[Amplitude] Element Parent Label"] = f, r[ti] = window.location.href.split("?")[0], r["[Amplitude] Page Title"] = "undefined" != typeof document && document.title || "", r["[Amplitude] Viewport Height"] = window.innerHeight, r["[Amplitude] Viewport Width"] = window.innerWidth, r);
                            return "a" === a && "click" === e && t instanceof HTMLAnchorElement && (p["[Amplitude] Element Href"] = t.href), nl(p)
                        },
                        p = function (t, n) {
                            var r = {
                                event: t,
                                timestamp: Date.now(),
                                type: n
                            };
                            if (("click" === r.type || "change" === r.type) && null !== r.event.target) {
                                var i = nf(r.event.target, e.cssSelectorAllowlist);
                                i && (r.closestTrackedAncestor = i, r.targetElementProperties = h(r.type, i))
                            }
                            return r
                        };
                    return {
                        name: u,
                        type: "enrichment",
                        setup: function (t, n) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var r, i, o, s, f, p, g, m, y, b, S;
                                return (0, v.Jh)(this, function (w) {
                                    var I, E, C, k, T, _, M, x, O, R, N, P, L, A, D, q, j, F, G, U, J, z, B, W, V, K, H, $, X, Z, Y, Q, ee, et;
                                    return n ? (l = t.loggerProvider, "undefined" == typeof document || (r = ni(e, e.cssSelectorAllowlist), i = ni(e, e.actionClickAllowlist), E = (I = {
                                        allObservables: o = d(),
                                        options: e,
                                        amplitude: n,
                                        shouldTrackEvent: r
                                    }).amplitude, C = I.allObservables, k = I.options, T = I.shouldTrackEvent, O = nD((_ = C.clickObservable).pipe(tB(function (e, t) {
                                        var n, r = !1;
                                        e.subscribe(tW(t, function (e) {
                                            var i = n;
                                            n = e, r && t.next([i, e]), r = !0
                                        }))
                                    }), nS(function (e) {
                                        var t = (0, v.CR)(e, 2),
                                            n = t[0],
                                            r = t[1],
                                            i = n.event.target !== r.event.target,
                                            o = 20 >= Math.abs(r.event.screenX - n.event.screenX) && 20 >= Math.abs(r.event.screenY - n.event.screenY);
                                        return i && !o
                                    })), _.pipe((M = k.debounceTime, void 0 === x && (x = nT), tB(function (e, t) {
                                        var n = null,
                                            r = null,
                                            i = null,
                                            o = function () {
                                                if (n) {
                                                    n.unsubscribe(), n = null;
                                                    var e = r;
                                                    r = null, t.next(e)
                                                }
                                            };

                                        function s() {
                                            var e = i + M,
                                                r = x.now();
                                            if (r < e) {
                                                n = this.schedule(void 0, e - r), t.add(n);
                                                return
                                            }
                                            o()
                                        }
                                        e.subscribe(tW(t, function (e) {
                                            r = e, i = x.now(), n || (n = x.schedule(s, M), t.add(n))
                                        }, function () {
                                            o(), t.complete()
                                        }, void 0, function () {
                                            r = n = null
                                        }))
                                    })), tK(function () {
                                        return "timeout"
                                    }))), s = _.pipe((void 0 === R && (R = nT), N = 0, P = R, void 0 === N && (N = 0), void 0 === L && (L = nT), A = -1, null != P && (nx(P) ? L = P : A = P), D = new tL(function (e) {
                                        var t = nj(N) ? +N - L.now() : N;
                                        t < 0 && (t = 0);
                                        var n = 0;
                                        return L.schedule(function () {
                                            e.closed || (e.next(n++), 0 <= A ? this.schedule(void 0, A) : e.complete())
                                        }, t)
                                    }), function e(t, n) {
                                        return n ? function (r) {
                                            return function () {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                return n_(1)(nA(e, nR(e)))
                                            }(n.pipe(nq(1), tB(function (e, t) {
                                                e.subscribe(tW(t, tS))
                                            })), r.pipe(e(t)))
                                        } : t$(function (e, n) {
                                            return tJ(t(e, n)).pipe(nq(1), tK(function () {
                                                return e
                                            }))
                                        })
                                    }(function () {
                                        return D
                                    })), nS(np), nS(function (e) {
                                        return T("click", e.closestTrackedAncestor)
                                    }), tB(function (e, t) {
                                        var n = [];
                                        return e.subscribe(tW(t, function (e) {
                                                return n.push(e)
                                            }, function () {
                                                t.next(n), t.complete()
                                            })), tJ(O).subscribe(tW(t, function () {
                                                var e = n;
                                                n = [], t.next(e)
                                            }, tS)),
                                            function () {
                                                n = null
                                            }
                                    })).subscribe(function (e) {
                                        var t, n, r = (e.length, te);
                                        try {
                                            for (var i = (0, v.XA)(e), o = i.next(); !o.done; o = i.next()) {
                                                var s = o.value;
                                                null == E || E.track(r, s.targetElementProperties, {
                                                    time: s.timestamp
                                                })
                                            }
                                        } catch (e) {
                                            t = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                o && !o.done && (n = i.return) && n.call(i)
                                            } finally {
                                                if (t) throw t.error
                                            }
                                        }
                                    }), c.push(s), j = (q = {
                                        allObservables: o,
                                        getEventProperties: h,
                                        amplitude: n,
                                        shouldTrackEvent: r
                                    }).amplitude, F = q.allObservables, G = q.getEventProperties, U = q.shouldTrackEvent, f = F.changeObservable.pipe(nS(np), nS(function (e) {
                                        return U("change", e.closestTrackedAncestor)
                                    })).subscribe(function (e) {
                                        null == j || j.track("[Amplitude] Element Changed", G("change", e.closestTrackedAncestor))
                                    }), c.push(f), z = (J = {
                                        allObservables: o,
                                        options: e,
                                        getEventProperties: h,
                                        amplitude: n,
                                        shouldTrackEvent: r,
                                        shouldTrackActionClick: i
                                    }).amplitude, B = J.allObservables, W = J.options, V = J.getEventProperties, K = J.shouldTrackEvent, H = J.shouldTrackActionClick, $ = B.clickObservable, X = B.mutationObservable, Z = B.navigateObservable, Y = $.pipe(nS(function (e) {
                                        return !K("click", e.closestTrackedAncestor)
                                    }), tK(function (e) {
                                        var t = nf(e.event.target, W.actionClickAllowlist);
                                        return e.closestTrackedAncestor = t, null !== e.closestTrackedAncestor && (e.targetElementProperties = V(e.type, e.closestTrackedAncestor)), e
                                    }), nS(np), nS(function (e) {
                                        return H("click", e.closestTrackedAncestor)
                                    })), Q = [X], Z && Q.push(Z), ee = nD.apply(void 0, (0, v.ev)([], (0, v.CR)(Q), !1)), p = Y.pipe((et = function (e) {
                                        return ee.pipe(nq(1), function (e, t) {
                                            var n = nj(e) ? {
                                                    first: e
                                                } : "number" == typeof e ? {
                                                    each: e
                                                } : e,
                                                r = n.first,
                                                i = n.each,
                                                o = n.with,
                                                s = void 0 === o ? nG : o,
                                                a = n.scheduler,
                                                u = void 0 === a ? nT : a,
                                                c = n.meta,
                                                l = void 0 === c ? null : c;
                                            if (null == r && null == i) throw TypeError("No timeout provided.");
                                            return tB(function (e, t) {
                                                var n, o, a = null,
                                                    c = 0,
                                                    d = function (e) {
                                                        o = tH(t, u, function () {
                                                            try {
                                                                n.unsubscribe(), tJ(s({
                                                                    meta: l,
                                                                    lastValue: a,
                                                                    seen: c
                                                                })).subscribe(t)
                                                            } catch (e) {
                                                                t.error(e)
                                                            }
                                                        }, e)
                                                    };
                                                n = e.subscribe(tW(t, function (e) {
                                                    null == o || o.unsubscribe(), c++, t.next(a = e), i > 0 && d(i)
                                                }, void 0, void 0, function () {
                                                    (null == o ? void 0 : o.closed) || null == o || o.unsubscribe(), a = null
                                                })), c || d(null != r ? "number" == typeof r ? r : +r - u.now() : i)
                                            })
                                        }({
                                            first: 500,
                                            with: function () {
                                                return nM
                                            }
                                        }), tK(function () {
                                            return e
                                        }))
                                    }, tB(function (e, t) {
                                        var n = null,
                                            r = 0,
                                            i = !1,
                                            o = function () {
                                                return i && !n && t.complete()
                                            };
                                        e.subscribe(tW(t, function (e) {
                                            null == n || n.unsubscribe(), tJ(et(e, r++)).subscribe(n = tW(t, function (e) {
                                                return t.next(e)
                                            }, function () {
                                                n = null, o()
                                            }))
                                        }, function () {
                                            i = !0, o()
                                        }))
                                    }))).subscribe(function (e) {
                                        null == z || z.track(te, V("click", e.closestTrackedAncestor), {
                                            time: e.timestamp
                                        })
                                    }), c.push(p), null === (b = null == t ? void 0 : t.loggerProvider) || void 0 === b || b.log("".concat(u, " has been successfully added.")), window.opener && a.enabled && (g = e.cssSelectorAllowlist, m = e.actionClickAllowlist, null === (S = a.messenger) || void 0 === S || S.setup((0, v.pi)((0, v.pi)({
                                        logger: null == t ? void 0 : t.loggerProvider
                                    }, (null == t ? void 0 : t.serverZone) && {
                                        endpoint: ts[t.serverZone]
                                    }), {
                                        isElementSelectable: ni(e, (0, v.ev)((0, v.ev)([], (0, v.CR)(g), !1), (0, v.CR)(m), !1)),
                                        cssSelectorAllowlist: g,
                                        actionClickAllowlist: m
                                    }))))) : null === (y = null == t ? void 0 : t.loggerProvider) || void 0 === y || y.warn("".concat(u, " plugin requires a later version of @amplitude/analytics-browser. Events are not tracked.")), [2]
                                })
                            })
                        },
                        execute: function (e) {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                return (0, v.Jh)(this, function (t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function () {
                            return (0, v.mG)(void 0, void 0, void 0, function () {
                                var e, t, n, r;
                                return (0, v.Jh)(this, function (i) {
                                    try {
                                        for (t = (e = (0, v.XA)(c)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            t && !t.done && (r = e.return) && r.call(e)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                    return [2]
                                })
                            })
                        }
                    }
                },
                nB = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, v.ZT)(t, e), t.prototype.init = function (e, t, n) {
                        var r, i;
                        return void 0 === e && (e = ""), arguments.length > 2 ? (r = t, i = n) : "string" == typeof t ? (r = t, i = void 0) : (r = null == t ? void 0 : t.userId, i = t), (0, g.S)(this._init((0, v.pi)((0, v.pi)({}, i), {
                            userId: r,
                            apiKey: e
                        })))
                    }, t.prototype._init = function (t) {
                        var n, r, i;
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var o, s, a, u, c, l = this;
                            return (0, v.Jh)(this, function (d) {
                                var f, h, p, g, m;
                                switch (d.label) {
                                    case 0:
                                        if (this.initializing) return [2];
                                        return this.initializing = !0, [4, (f = t.apiKey, h = t, p = this, void 0 === h && (h = {}), (0, v.mG)(void 0, void 0, void 0, function () {
                                            var e, t, n, r, i, o, s, a, u, c, l, d, g, m, b, S, w, E, C, k, T, _, M, x, O, R, N, P, L, A, D, q, j, F, G, U, J, z, B, W, V, K, H;
                                            return (0, v.Jh)(this, function ($) {
                                                var X, Z, Y;
                                                switch ($.label) {
                                                    case 0:
                                                        if (e = h.identityStorage || eK, C = {}, !(e !== eK)) return [3, 1];
                                                        return n = "", [3, 5];
                                                    case 1:
                                                        if (!(null !== (T = null === (k = h.cookieOptions) || void 0 === k ? void 0 : k.domain) && void 0 !== T)) return [3, 2];
                                                        return r = T, [3, 4];
                                                    case 2:
                                                        return [4, (0, v.mG)(void 0, void 0, void 0, function () {
                                                            var e, t, n, r, i, o;
                                                            return (0, v.Jh)(this, function (s) {
                                                                switch (s.label) {
                                                                    case 0:
                                                                        return [4, new ew().isEnabled()];
                                                                    case 1:
                                                                        if (!s.sent() || "undefined" == typeof location || !location.hostname) return [2, ""];
                                                                        for (e = (null != X ? X : location.hostname).split("."), t = [], n = "AMP_TLDTEST", r = e.length - 2; r >= 0; --r) t.push(e.slice(r).join("."));
                                                                        r = 0, s.label = 2;
                                                                    case 2:
                                                                        if (!(r < t.length)) return [3, 7];
                                                                        return [4, (o = new ew({
                                                                            domain: "." + (i = t[r])
                                                                        })).set(n, 1)];
                                                                    case 3:
                                                                        return s.sent(), [4, o.get(n)];
                                                                    case 4:
                                                                        if (!s.sent()) return [3, 6];
                                                                        return [4, o.remove(n)];
                                                                    case 5:
                                                                        return s.sent(), [2, "." + i];
                                                                    case 6:
                                                                        return r++, [3, 2];
                                                                    case 7:
                                                                        return [2, ""]
                                                                }
                                                            })
                                                        })];
                                                    case 3:
                                                        r = $.sent(), $.label = 4;
                                                    case 4:
                                                        n = r, $.label = 5;
                                                    case 5:
                                                        return t = v.pi.apply(void 0, [(C.domain = n, C.expiration = 365, C.sameSite = "Lax", C.secure = !1, C.upgrade = !0, C), h.cookieOptions]), [4, (Z = i = e$(h.identityStorage, t), void 0 === (Y = null === (M = null === (_ = h.cookieOptions) || void 0 === _ ? void 0 : _.upgrade) || void 0 === M || M) && (Y = !0), (0, v.mG)(void 0, void 0, void 0, function () {
                                                            var e, t, n, r, i, o, s, a, u;
                                                            return (0, v.Jh)(this, function (c) {
                                                                switch (c.label) {
                                                                    case 0:
                                                                        return e = "".concat(y.xp.toLowerCase(), "_").concat(f.substring(0, 6)), [4, Z.getRaw(e)];
                                                                    case 1:
                                                                        if (!(t = c.sent())) return [2, {
                                                                            optOut: !1
                                                                        }];
                                                                        if (!Y) return [3, 3];
                                                                        return [4, Z.remove(e)];
                                                                    case 2:
                                                                        c.sent(), c.label = 3;
                                                                    case 3:
                                                                        return r = (n = (0, v.CR)(t.split("."), 6))[0], i = n[1], o = n[2], s = n[3], a = n[4], u = n[5], [2, {
                                                                            deviceId: r,
                                                                            userId: eN(i),
                                                                            sessionId: eR(s),
                                                                            lastEventId: eR(u),
                                                                            lastEventTime: eR(a),
                                                                            optOut: !!o
                                                                        }]
                                                                }
                                                            })
                                                        }))];
                                                    case 6:
                                                        return o = $.sent(), [4, i.get(eS(f))];
                                                    case 7:
                                                        return s = $.sent(), a = ei(), u = null !== (P = null !== (N = null !== (R = null !== (O = null !== (x = h.deviceId) && void 0 !== x ? x : a.ampDeviceId) && void 0 !== O ? O : a.deviceId) && void 0 !== R ? R : null == s ? void 0 : s.deviceId) && void 0 !== N ? N : o.deviceId) && void 0 !== P ? P : I(), c = null !== (L = null == s ? void 0 : s.lastEventId) && void 0 !== L ? L : o.lastEventId, l = null !== (A = null == s ? void 0 : s.lastEventTime) && void 0 !== A ? A : o.lastEventTime, d = null !== (q = null !== (D = h.optOut) && void 0 !== D ? D : null == s ? void 0 : s.optOut) && void 0 !== q ? q : o.optOut, g = null !== (j = null == s ? void 0 : s.sessionId) && void 0 !== j ? j : o.sessionId, m = null !== (G = null !== (F = h.userId) && void 0 !== F ? F : null == s ? void 0 : s.userId) && void 0 !== G ? G : o.userId, p.previousSessionDeviceId = null !== (U = null == s ? void 0 : s.deviceId) && void 0 !== U ? U : o.deviceId, p.previousSessionUserId = null !== (J = null == s ? void 0 : s.userId) && void 0 !== J ? J : o.userId, b = {
                                                            ipAddress: null === (B = null === (z = h.trackingOptions) || void 0 === z ? void 0 : z.ipAddress) || void 0 === B || B,
                                                            language: null === (V = null === (W = h.trackingOptions) || void 0 === W ? void 0 : W.language) || void 0 === V || V,
                                                            platform: null === (H = null === (K = h.trackingOptions) || void 0 === K ? void 0 : K.platform) || void 0 === H || H
                                                        }, S = null == s ? void 0 : s.pageCounter, w = null == s ? void 0 : s.debugLogsEnabled, void 0 !== h.autocapture && (h.defaultTracking = h.autocapture), [4, (E = new eH(f, h.appVersion, i, t, h.defaultTracking, h.autocapture, u, h.flushIntervalMillis, h.flushMaxRetries, h.flushQueueSize, e, h.ingestionMetadata, h.instanceName, c, l, h.loggerProvider, h.logLevel, h.minIdLength, h.offline, d, h.partnerId, h.plan, h.serverUrl, h.serverZone, g, h.sessionTimeout, h.storageProvider, b, h.transport, h.useBatch, h.fetchRemoteConfig, m, S, w)).storageProvider.isEnabled()];
                                                    case 8:
                                                        return $.sent() || (E.loggerProvider.warn("Storage provider ".concat(E.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage.")), E.storageProvider = new ey), [2, E]
                                                }
                                            })
                                        }))];
                                    case 1:
                                        if (o = d.sent(), !t.fetchRemoteConfig) return [3, 4];
                                        return [4, (g = o, (0, v.mG)(void 0, void 0, void 0, function () {
                                            var e;
                                            return (0, v.Jh)(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, (e = new e9(g)).initialize()];
                                                    case 1:
                                                        return t.sent(), [2, e]
                                                }
                                            })
                                        }))];
                                    case 2:
                                        return [4, d.sent().generateJoinedConfig()];
                                    case 3:
                                        o = d.sent(), d.label = 4;
                                    case 4:
                                        return [4, e.prototype._init.call(this, o)];
                                    case 5:
                                        if (d.sent(), this.logBrowserOptions(o), !A(this.config.defaultTracking)) return [3, 7];
                                        return s = A((m = this.config).defaultTracking) && m.defaultTracking && "object" == typeof m.defaultTracking && m.defaultTracking.attribution && "object" == typeof m.defaultTracking.attribution ? (0, v.pi)({}, m.defaultTracking.attribution) : {}, this.webAttribution = new eu(s, this.config), [4, this.webAttribution.init()];
                                    case 6:
                                        d.sent(), d.label = 7;
                                    case 7:
                                        if (u = Number.isNaN(Number((a = ei()).ampSessionId)) ? void 0 : Number(a.ampSessionId), this.setSessionId(null !== (i = null !== (r = null !== (n = t.sessionId) && void 0 !== n ? n : u) && void 0 !== r ? r : this.config.sessionId) && void 0 !== i ? i : Date.now()), (c = (0, ec.bM)(t.instanceName)).identityStore.setIdentity({
                                                userId: this.config.userId,
                                                deviceId: this.config.deviceId
                                            }), !(this.config.offline !== ed)) return [3, 9];
                                        return [4, this.add(e6()).promise];
                                    case 8:
                                        d.sent(), d.label = 9;
                                    case 9:
                                        return [4, this.add(new C).promise];
                                    case 10:
                                        return d.sent(), [4, this.add(new eg).promise];
                                    case 11:
                                        return d.sent(), [4, this.add(new el).promise];
                                    case 12:
                                        if (d.sent(), e8(this.config), !L(this.config.defaultTracking, "fileDownloads")) return [3, 14];
                                        return this.config.loggerProvider.debug("Adding file download tracking plugin"), [4, this.add(e4()).promise];
                                    case 13:
                                        d.sent(), d.label = 14;
                                    case 14:
                                        if (!L(this.config.defaultTracking, "formInteractions")) return [3, 16];
                                        return this.config.loggerProvider.debug("Adding form interaction plugin"), [4, this.add(e2()).promise];
                                    case 15:
                                        d.sent(), d.label = 16;
                                    case 16:
                                        if (!D(this.config.defaultTracking)) return [3, 18];
                                        return this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(eY(G(this.config))).promise];
                                    case 17:
                                        d.sent(), d.label = 18;
                                    case 18:
                                        if (!j(this.config.autocapture)) return [3, 20];
                                        return this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)"), [4, this.add(nz(F(this.config))).promise];
                                    case 19:
                                        d.sent(), d.label = 20;
                                    case 20:
                                        return this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                                    case 21:
                                        return d.sent(), c.eventBridge.setEventReceiver(function (e) {
                                            l.track(e.eventType, e.eventProperties)
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.getUserId = function () {
                        var e;
                        return null === (e = this.config) || void 0 === e ? void 0 : e.userId
                    }, t.prototype.setUserId = function (e) {
                        if (!this.config) {
                            this.q.push(this.setUserId.bind(this, e));
                            return
                        }
                        this.config.loggerProvider.debug("function setUserId: ", e), (e !== this.config.userId || void 0 === e) && (this.config.userId = e, (0, ec.x)(e, this.config.instanceName))
                    }, t.prototype.getDeviceId = function () {
                        var e;
                        return null === (e = this.config) || void 0 === e ? void 0 : e.deviceId
                    }, t.prototype.setDeviceId = function (e) {
                        if (!this.config) {
                            this.q.push(this.setDeviceId.bind(this, e));
                            return
                        }
                        this.config.loggerProvider.debug("function setDeviceId: ", e), this.config.deviceId = e, (0, ec.Sb)(e, this.config.instanceName)
                    }, t.prototype.reset = function () {
                        this.setDeviceId(I()), this.setUserId(void 0)
                    }, t.prototype.getSessionId = function () {
                        var e;
                        return null === (e = this.config) || void 0 === e ? void 0 : e.sessionId
                    }, t.prototype.setSessionId = function (e) {
                        var t, n = [];
                        if (!this.config) return this.q.push(this.setSessionId.bind(this, e)), (0, g.S)(Promise.resolve());
                        if (e === this.config.sessionId) return (0, g.S)(Promise.resolve());
                        this.config.loggerProvider.debug("function setSessionId: ", e);
                        var r = this.getSessionId(),
                            i = this.config.lastEventTime,
                            o = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1;
                        this.config.sessionId = e, this.config.lastEventTime = void 0, this.config.pageCounter = 0, q(this.config.defaultTracking) && (r && i && n.push(this.track(ej, void 0, {
                            device_id: this.previousSessionDeviceId,
                            event_id: ++o,
                            session_id: r,
                            time: i + 1,
                            user_id: this.previousSessionUserId
                        }).promise), this.config.lastEventTime = this.config.sessionId);
                        var s = this.trackCampaignEventIfNeeded(++o, n);
                        return q(this.config.defaultTracking) && n.push(this.track(eq, void 0, {
                            event_id: s ? ++o : o,
                            session_id: this.config.sessionId,
                            time: this.config.lastEventTime
                        }).promise), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId, (0, g.S)(Promise.all(n))
                    }, t.prototype.extendSession = function () {
                        if (!this.config) {
                            this.q.push(this.extendSession.bind(this));
                            return
                        }
                        this.config.lastEventTime = Date.now()
                    }, t.prototype.setTransport = function (e) {
                        if (!this.config) {
                            this.q.push(this.setTransport.bind(this, e));
                            return
                        }
                        this.config.transportProvider = eX(e)
                    }, t.prototype.identify = function (t, n) {
                        if (ep(t)) {
                            var r = t._q;
                            t._q = [], t = eh(new _, r)
                        }
                        return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id), (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id), e.prototype.identify.call(this, t, n)
                    }, t.prototype.groupIdentify = function (t, n, r, i) {
                        if (ep(r)) {
                            var o = r._q;
                            r._q = [], r = eh(new _, o)
                        }
                        return e.prototype.groupIdentify.call(this, t, n, r, i)
                    }, t.prototype.revenue = function (t, n) {
                        if (ep(t)) {
                            var r = t._q;
                            t._q = [], t = eh(new M, r)
                        }
                        return e.prototype.revenue.call(this, t, n)
                    }, t.prototype.trackCampaignEventIfNeeded = function (e, t) {
                        if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) return !1;
                        var n = this.webAttribution.generateCampaignEvent(e);
                        return t ? t.push(this.track(n).promise) : this.track(n), this.config.loggerProvider.log("Tracking attribution."), !0
                    }, t.prototype.process = function (t) {
                        return (0, v.mG)(this, void 0, void 0, function () {
                            var n, r, i;
                            return (0, v.Jh)(this, function (o) {
                                return n = Date.now(), r = ea(this.config.sessionTimeout, this.config.lastEventTime), i = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign(), t.event_type === eq || t.event_type === ej || t.session_id && t.session_id !== this.getSessionId() || (r || i ? (this.setSessionId(n), i && this.config.loggerProvider.log("Created a new session for new campaign.")) : r || this.trackCampaignEventIfNeeded()), [2, e.prototype.process.call(this, t)]
                            })
                        })
                    }, t.prototype.logBrowserOptions = function (e) {
                        try {
                            var t = (0, v.pi)((0, v.pi)({}, e), {
                                apiKey: e.apiKey.substring(0, 10) + "********"
                            });
                            this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", JSON.stringify(t))
                        } catch (e) {
                            this.config.loggerProvider.error("Error logging browser config", e)
                        }
                    }, t
                }(P),
                nW = function () {
                    var e = new nB;
                    return {
                        init: (0, p.w_)(e.init.bind(e), "init", (0, p.yh)(e), (0, p.zn)(e, ["config"])),
                        add: (0, p.w_)(e.add.bind(e), "add", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.plugins"])),
                        remove: (0, p.w_)(e.remove.bind(e), "remove", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.plugins"])),
                        track: (0, p.w_)(e.track.bind(e), "track", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        logEvent: (0, p.w_)(e.logEvent.bind(e), "logEvent", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        identify: (0, p.w_)(e.identify.bind(e), "identify", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        groupIdentify: (0, p.w_)(e.groupIdentify.bind(e), "groupIdentify", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        setGroup: (0, p.w_)(e.setGroup.bind(e), "setGroup", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        revenue: (0, p.w_)(e.revenue.bind(e), "revenue", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        flush: (0, p.w_)(e.flush.bind(e), "flush", (0, p.yh)(e), (0, p.zn)(e, ["config.apiKey", "timeline.queue.length"])),
                        getUserId: (0, p.w_)(e.getUserId.bind(e), "getUserId", (0, p.yh)(e), (0, p.zn)(e, ["config", "config.userId"])),
                        setUserId: (0, p.w_)(e.setUserId.bind(e), "setUserId", (0, p.yh)(e), (0, p.zn)(e, ["config", "config.userId"])),
                        getDeviceId: (0, p.w_)(e.getDeviceId.bind(e), "getDeviceId", (0, p.yh)(e), (0, p.zn)(e, ["config", "config.deviceId"])),
                        setDeviceId: (0, p.w_)(e.setDeviceId.bind(e), "setDeviceId", (0, p.yh)(e), (0, p.zn)(e, ["config", "config.deviceId"])),
                        reset: (0, p.w_)(e.reset.bind(e), "reset", (0, p.yh)(e), (0, p.zn)(e, ["config", "config.userId", "config.deviceId"])),
                        getSessionId: (0, p.w_)(e.getSessionId.bind(e), "getSessionId", (0, p.yh)(e), (0, p.zn)(e, ["config"])),
                        setSessionId: (0, p.w_)(e.setSessionId.bind(e), "setSessionId", (0, p.yh)(e), (0, p.zn)(e, ["config"])),
                        extendSession: (0, p.w_)(e.extendSession.bind(e), "extendSession", (0, p.yh)(e), (0, p.zn)(e, ["config"])),
                        setOptOut: (0, p.w_)(e.setOptOut.bind(e), "setOptOut", (0, p.yh)(e), (0, p.zn)(e, ["config"])),
                        setTransport: (0, p.w_)(e.setTransport.bind(e), "setTransport", (0, p.yh)(e), (0, p.zn)(e, ["config"]))
                    }
                },
                nV = nW(),
                nK = n(40418),
                nH = ["a", "button", "input", "select", "textarea", "label", "[data-amp-default-track]", ".amp-default-track"],
                n$ = "data-amp-track-",
                nX = nV.add,
                nZ = nV.extendSession,
                nY = nV.flush,
                nQ = nV.getDeviceId,
                n0 = nV.getSessionId,
                n1 = nV.getUserId,
                n2 = nV.groupIdentify,
                n3 = nV.identify,
                n4 = nV.init,
                n5 = nV.logEvent,
                n8 = nV.remove,
                n6 = nV.reset,
                n7 = nV.revenue,
                n9 = nV.setDeviceId,
                re = nV.setGroup,
                rt = nV.setOptOut,
                rn = nV.setSessionId,
                rr = nV.setTransport,
                ri = nV.setUserId,
                ro = nV.track
        },
        36789: function (e, t, n) {
            n.d(t, {
                bM: function () {
                    return d
                },
                Sb: function () {
                    return h
                },
                x: function () {
                    return f
                }
            });
            var r = function () {
                    function e() {}
                    return e.prototype.getApplicationContext = function () {
                        return {
                            versionName: this.versionName,
                            language: i(),
                            platform: "Web",
                            os: void 0,
                            deviceModel: void 0
                        }
                    }, e
                }(),
                i = function () {
                    return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
                },
                o = function () {
                    function e() {
                        this.queue = []
                    }
                    return e.prototype.logEvent = function (e) {
                        this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                    }, e.prototype.setEventReceiver = function (e) {
                        this.receiver = e, this.queue.length > 0 && (this.queue.forEach(function (t) {
                            e(t)
                        }), this.queue = [])
                    }, e
                }(),
                s = function () {
                    return (s = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                a = function (e, t) {
                    var n = typeof e;
                    if (n !== typeof t) return !1;
                    for (var r = 0, i = ["string", "number", "boolean", "undefined"]; r < i.length; r++)
                        if (i[r] === n) return e === t;
                    if (null == e && null == t) return !0;
                    if (null == e || null == t || e.length !== t.length) return !1;
                    var o = Array.isArray(e),
                        s = Array.isArray(t);
                    if (o !== s) return !1;
                    if (o && s) {
                        for (var u = 0; u < e.length; u++)
                            if (!a(e[u], t[u])) return !1
                    } else {
                        if (!a(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
                        var c = !0;
                        return Object.keys(e).forEach(function (n) {
                            a(e[n], t[n]) || (c = !1)
                        }), c
                    }
                    return !0
                };
            Object.entries || (Object.entries = function (e) {
                for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
                return r
            });
            var u = function () {
                    function e() {
                        this.identity = {
                            userProperties: {}
                        }, this.listeners = new Set
                    }
                    return e.prototype.editIdentity = function () {
                        var e = this,
                            t = s({}, this.identity.userProperties),
                            n = s(s({}, this.identity), {
                                userProperties: t
                            });
                        return {
                            setUserId: function (e) {
                                return n.userId = e, this
                            },
                            setDeviceId: function (e) {
                                return n.deviceId = e, this
                            },
                            setUserProperties: function (e) {
                                return n.userProperties = e, this
                            },
                            setOptOut: function (e) {
                                return n.optOut = e, this
                            },
                            updateUserProperties: function (e) {
                                for (var t = n.userProperties || {}, r = 0, i = Object.entries(e); r < i.length; r++) {
                                    var o = i[r],
                                        s = o[0],
                                        a = o[1];
                                    switch (s) {
                                        case "$set":
                                            for (var u = 0, c = Object.entries(a); u < c.length; u++) {
                                                var l = c[u],
                                                    d = l[0],
                                                    f = l[1];
                                                t[d] = f
                                            }
                                            break;
                                        case "$unset":
                                            for (var h = 0, p = Object.keys(a); h < p.length; h++) {
                                                var d = p[h];
                                                delete t[d]
                                            }
                                            break;
                                        case "$clearAll":
                                            t = {}
                                    }
                                }
                                return n.userProperties = t, this
                            },
                            commit: function () {
                                return e.setIdentity(n), this
                            }
                        }
                    }, e.prototype.getIdentity = function () {
                        return s({}, this.identity)
                    }, e.prototype.setIdentity = function (e) {
                        var t = s({}, this.identity);
                        this.identity = s({}, e), a(t, this.identity) || this.listeners.forEach(function (t) {
                            t(e)
                        })
                    }, e.prototype.addIdentityListener = function (e) {
                        this.listeners.add(e)
                    }, e.prototype.removeIdentityListener = function (e) {
                        this.listeners.delete(e)
                    }, e
                }(),
                c = "undefined" != typeof globalThis ? globalThis : void 0 !== n.g ? n.g : self,
                l = function () {
                    function e() {
                        this.identityStore = new u, this.eventBridge = new o, this.applicationContextProvider = new r
                    }
                    return e.getInstance = function (t) {
                        return c.analyticsConnectorInstances || (c.analyticsConnectorInstances = {}), c.analyticsConnectorInstances[t] || (c.analyticsConnectorInstances[t] = new e), c.analyticsConnectorInstances[t]
                    }, e
                }(),
                d = function (e) {
                    return void 0 === e && (e = "$default_instance"), l.getInstance(e)
                },
                f = function (e, t) {
                    d(t).identityStore.editIdentity().setUserId(e).commit()
                },
                h = function (e, t) {
                    d(t).identityStore.editIdentity().setDeviceId(e).commit()
                }
        },
        89866: function (e, t, n) {
            n.d(t, {
                l: function () {
                    return r
                }
            });
            var r = function () {
                var e = "ampIntegrationContext";
                return "undefined" != typeof globalThis && void 0 !== globalThis[e] ? globalThis[e] : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== n.g ? n.g : void 0
            }
        },
        77166: function (e, t, n) {
            n.d(t, {
                V: function () {
                    return i
                }
            });
            var r = n(11735),
                i = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, r.ZT)(t, e), t.prototype.send = function (e, t) {
                        return (0, r.mG)(this, void 0, void 0, function () {
                            var n, i;
                            return (0, r.Jh)(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        if ("undefined" == typeof fetch) throw Error("FetchTransport is not supported");
                                        return [4, fetch(e, {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "*/*"
                                            },
                                            body: JSON.stringify(t),
                                            method: "POST"
                                        })];
                                    case 1:
                                        return [4, (n = r.sent()).text()];
                                    case 2:
                                        i = r.sent();
                                        try {
                                            return [2, this.buildResponse(JSON.parse(i))]
                                        } catch (e) {
                                            return [2, this.buildResponse({
                                                code: n.status
                                            })]
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(n(17358).d)
        },
        50797: function (e, t, n) {
            n.d(t, {
                De: function () {
                    return a
                },
                Dg: function () {
                    return c
                },
                RG: function () {
                    return u
                }
            });
            var r = n(15558),
                i = n(89514),
                o = n(531),
                s = function () {
                    return {
                        flushMaxRetries: 12,
                        flushQueueSize: 200,
                        flushIntervalMillis: 1e4,
                        instanceName: "$default_instance",
                        logLevel: r.i.Warn,
                        loggerProvider: new o.Y,
                        offline: !1,
                        optOut: !1,
                        serverUrl: i.EG,
                        serverZone: "US",
                        useBatch: !1
                    }
                },
                a = function () {
                    function e(e) {
                        this._optOut = !1;
                        var t, n, r, i, o = s();
                        this.apiKey = e.apiKey, this.flushIntervalMillis = null !== (t = e.flushIntervalMillis) && void 0 !== t ? t : o.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || o.flushQueueSize, this.instanceName = e.instanceName || o.instanceName, this.loggerProvider = e.loggerProvider || o.loggerProvider, this.logLevel = null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.offline = void 0 !== e.offline ? e.offline : o.offline, this.optOut = null !== (r = e.optOut) && void 0 !== r ? r : o.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || o.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = null !== (i = e.useBatch) && void 0 !== i ? i : o.useBatch, this.loggerProvider.enable(this.logLevel);
                        var a = u(e.serverUrl, e.serverZone, e.useBatch);
                        this.serverZone = a.serverZone, this.serverUrl = a.serverUrl
                    }
                    return Object.defineProperty(e.prototype, "optOut", {
                        get: function () {
                            return this._optOut
                        },
                        set: function (e) {
                            this._optOut = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                u = function (e, t, n) {
                    if (void 0 === e && (e = ""), void 0 === t && (t = s().serverZone), void 0 === n && (n = s().useBatch), e) return {
                        serverUrl: e,
                        serverZone: void 0
                    };
                    var r, o = ["US", "EU"].includes(t) ? t : s().serverZone;
                    return {
                        serverZone: o,
                        serverUrl: (r = n, "EU" === o ? r ? i.RE : i.y_ : r ? i.h8 : i.EG)
                    }
                },
                c = function () {
                    function e() {
                        this.sdk = {
                            metrics: {
                                histogram: new l
                            }
                        }
                    }
                    return e.prototype.recordHistogram = function (e, t) {
                        this.sdk.metrics.histogram[e] = t
                    }, e
                }(),
                l = function () {}
        },
        89514: function (e, t, n) {
            n.d(t, {
                EG: function () {
                    return s
                },
                RE: function () {
                    return c
                },
                f1: function () {
                    return o
                },
                h8: function () {
                    return u
                },
                q$: function () {
                    return r
                },
                xp: function () {
                    return i
                },
                y_: function () {
                    return a
                }
            });
            var r = "-",
                i = "AMP",
                o = "".concat(i, "_unsent"),
                s = "https://api2.amplitude.com/2/httpapi",
                a = "https://api.eu.amplitude.com/2/httpapi",
                u = "https://api2.amplitude.com/batch",
                c = "https://api.eu.amplitude.com/batch"
        },
        531: function (e, t, n) {
            n.d(t, {
                Y: function () {
                    return o
                }
            });
            var r = n(15558),
                i = "Amplitude Logger ",
                o = function () {
                    function e() {
                        this.logLevel = r.i.None
                    }
                    return e.prototype.disable = function () {
                        this.logLevel = r.i.None
                    }, e.prototype.enable = function (e) {
                        void 0 === e && (e = r.i.Warn), this.logLevel = e
                    }, e.prototype.log = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < r.i.Verbose || console.log("".concat(i, "[Log]: ").concat(e.join(" ")))
                    }, e.prototype.warn = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < r.i.Warn || console.warn("".concat(i, "[Warn]: ").concat(e.join(" ")))
                    }, e.prototype.error = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < r.i.Error || console.error("".concat(i, "[Error]: ").concat(e.join(" ")))
                    }, e.prototype.debug = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < r.i.Debug || console.log("".concat(i, "[Debug]: ").concat(e.join(" ")))
                    }, e
                }()
        },
        17358: function (e, t, n) {
            n.d(t, {
                d: function () {
                    return i
                }
            });
            var r = n(34854),
                i = function () {
                    function e() {}
                    return e.prototype.send = function (e, t) {
                        return Promise.resolve(null)
                    }, e.prototype.buildResponse = function (e) {
                        if ("object" != typeof e) return null;
                        var t, n, i, o, s, a, u, c, l, d, f, h, p, v, g, m, y, b, S, w, I, E, C = e.code || 0,
                            k = this.buildStatus(C);
                        switch (k) {
                            case r.q.Success:
                                return {
                                    status: k, statusCode: C, body: {
                                        eventsIngested: null !== (t = e.events_ingested) && void 0 !== t ? t : 0,
                                        payloadSizeBytes: null !== (n = e.payload_size_bytes) && void 0 !== n ? n : 0,
                                        serverUploadTime: null !== (i = e.server_upload_time) && void 0 !== i ? i : 0
                                    }
                                };
                            case r.q.Invalid:
                                return {
                                    status: k, statusCode: C, body: {
                                        error: null !== (o = e.error) && void 0 !== o ? o : "",
                                        missingField: null !== (s = e.missing_field) && void 0 !== s ? s : "",
                                        eventsWithInvalidFields: null !== (a = e.events_with_invalid_fields) && void 0 !== a ? a : {},
                                        eventsWithMissingFields: null !== (u = e.events_with_missing_fields) && void 0 !== u ? u : {},
                                        eventsWithInvalidIdLengths: null !== (c = e.events_with_invalid_id_lengths) && void 0 !== c ? c : {},
                                        epsThreshold: null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                                        exceededDailyQuotaDevices: null !== (d = e.exceeded_daily_quota_devices) && void 0 !== d ? d : {},
                                        silencedDevices: null !== (f = e.silenced_devices) && void 0 !== f ? f : [],
                                        silencedEvents: null !== (h = e.silenced_events) && void 0 !== h ? h : [],
                                        throttledDevices: null !== (p = e.throttled_devices) && void 0 !== p ? p : {},
                                        throttledEvents: null !== (v = e.throttled_events) && void 0 !== v ? v : []
                                    }
                                };
                            case r.q.PayloadTooLarge:
                                return {
                                    status: k, statusCode: C, body: {
                                        error: null !== (g = e.error) && void 0 !== g ? g : ""
                                    }
                                };
                            case r.q.RateLimit:
                                return {
                                    status: k, statusCode: C, body: {
                                        error: null !== (m = e.error) && void 0 !== m ? m : "",
                                        epsThreshold: null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                                        throttledDevices: null !== (b = e.throttled_devices) && void 0 !== b ? b : {},
                                        throttledUsers: null !== (S = e.throttled_users) && void 0 !== S ? S : {},
                                        exceededDailyQuotaDevices: null !== (w = e.exceeded_daily_quota_devices) && void 0 !== w ? w : {},
                                        exceededDailyQuotaUsers: null !== (I = e.exceeded_daily_quota_users) && void 0 !== I ? I : {},
                                        throttledEvents: null !== (E = e.throttled_events) && void 0 !== E ? E : []
                                    }
                                };
                            case r.q.Timeout:
                            default:
                                return {
                                    status: k, statusCode: C
                                }
                        }
                    }, e.prototype.buildStatus = function (e) {
                        return e >= 200 && e < 300 ? r.q.Success : 429 === e ? r.q.RateLimit : 413 === e ? r.q.PayloadTooLarge : 408 === e ? r.q.Timeout : e >= 400 && e < 500 ? r.q.Invalid : e >= 500 ? r.q.Failed : r.q.Unknown
                    }, e
                }()
        },
        86166: function (e, t, n) {
            n.d(t, {
                w_: function () {
                    return u
                },
                yh: function () {
                    return o
                },
                zn: function () {
                    return a
                }
            });
            var r = n(11735),
                i = n(15558),
                o = function (e) {
                    return function () {
                        var t = (0, r.pi)({}, e.config);
                        return {
                            logger: t.loggerProvider,
                            logLevel: t.logLevel
                        }
                    }
                },
                s = function (e, t) {
                    var n, i;
                    t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
                    try {
                        for (var o = (0, r.XA)(t.split(".")), s = o.next(); !s.done; s = o.next()) {
                            var a = s.value;
                            if (!(a in e)) return;
                            e = e[a]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (i = o.return) && i.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return e
                },
                a = function (e, t) {
                    return function () {
                        var n, i, o = {};
                        try {
                            for (var a = (0, r.XA)(t), u = a.next(); !u.done; u = a.next()) {
                                var c = u.value;
                                o[c] = s(e, c)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (i = a.return) && i.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o
                    }
                },
                u = function (e, t, n, r, o) {
                    return void 0 === o && (o = null),
                        function () {
                            for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
                            var u = n(),
                                c = u.logger,
                                l = u.logLevel;
                            if (l && l < i.i.Debug || !l || !c) return e.apply(o, s);
                            var d = {
                                type: "invoke public method",
                                name: t,
                                args: s,
                                stacktrace: (Error().stack || "").split("\n").slice(3).map(function (e) {
                                    return e.trim()
                                }),
                                time: {
                                    start: new Date().toISOString()
                                },
                                states: {}
                            };
                            r && d.states && (d.states.before = r());
                            var f = e.apply(o, s);
                            return f && f.promise ? f.promise.then(function () {
                                r && d.states && (d.states.after = r()), d.time && (d.time.end = new Date().toISOString()), c.debug(JSON.stringify(d, null, 2))
                            }) : (r && d.states && (d.states.after = r()), d.time && (d.time.end = new Date().toISOString()), c.debug(JSON.stringify(d, null, 2))), f
                        }
                }
        },
        91305: function (e, t, n) {
            n.d(t, {
                S: function () {
                    return r
                }
            });
            var r = function (e) {
                return {
                    promise: e || Promise.resolve()
                }
            }
        },
        24194: function (e, t, n) {
            n.d(t, {
                p: function () {
                    return f
                }
            });
            var r = n(11735),
                i = n(17358),
                o = n(34854),
                s = n(40418),
                a = n(68470),
                u = function (e, t) {
                    return (0, r.mG)(void 0, void 0, void 0, function () {
                        return (0, r.Jh)(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, a.X3)(e, 1, {
                                        upgrade: function (e) {
                                            t.forEach(function (t) {
                                                e.objectStoreNames.contains(t) || e.createObjectStore(t)
                                            })
                                        }
                                    })];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                },
                c = function (e) {
                    var t = e.loggerProvider,
                        n = e.apiKey,
                        i = e.configKeys;
                    return (0, r.mG)(void 0, void 0, void 0, function () {
                        var e, o, s, c, l;
                        return (0, r.Jh)(this, function (d) {
                            switch (d.label) {
                                case 0:
                                    return [4, u(e = "".concat(n.substring(0, 10), "_amp_config"), i)];
                                case 1:
                                    var f;
                                    return o = d.sent(), [4, (f = "".concat(n.substring(0, 10), "_amp_config_meta"), (0, r.mG)(void 0, void 0, void 0, function () {
                                        return (0, r.Jh)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, (0, a.X3)(f, 1, {
                                                        upgrade: function (e) {
                                                            e.objectStoreNames.contains("lastFetchedSessionId") || e.createObjectStore("lastFetchedSessionId")
                                                        }
                                                    })];
                                                case 1:
                                                    return [2, e.sent()]
                                            }
                                        })
                                    }))];
                                case 2:
                                    s = d.sent(), d.label = 3;
                                case 3:
                                    return d.trys.push([3, 8, , 9]), [4, s.get("lastFetchedSessionId", "sessionId")];
                                case 4:
                                    if (!((c = d.sent()) && Date.now() - c >= 2592e5)) return [3, 7];
                                    return o.close(), [4, (0, a.Lj)(e)];
                                case 5:
                                    return d.sent(), [4, u(e, i)];
                                case 6:
                                    o = d.sent(), d.label = 7;
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return l = d.sent(), t.warn("Failed to reset store: ".concat(l)), [3, 9];
                                case 9:
                                    return [2, {
                                        storeRemoteConfig: function (e, n) {
                                            return (0, r.mG)(void 0, void 0, void 0, function () {
                                                var i, a, u, c, l, d;
                                                return (0, r.Jh)(this, function (f) {
                                                    switch (f.label) {
                                                        case 0:
                                                            if (f.trys.push([0, 7, , 8]), !n) return [3, 2];
                                                            return [4, s.put("lastFetchedSessionId", n, "sessionId")];
                                                        case 1:
                                                            f.sent(), f.label = 2;
                                                        case 2:
                                                            for (c in i = function (t) {
                                                                    var n, i;
                                                                    return (0, r.Jh)(this, function (s) {
                                                                        switch (s.label) {
                                                                            case 0:
                                                                                return n = e.configs[t], i = o.transaction(t, "readwrite"), [4, Promise.all((0, r.ev)((0, r.ev)([], (0, r.CR)(Object.keys(n).map(function (e) {
                                                                                    return i.store.put((0, r.pi)({}, n[e]), e)
                                                                                })), !1), [i.done], !1))];
                                                                            case 1:
                                                                                return s.sent(), [2]
                                                                        }
                                                                    })
                                                                }, a = e.configs, u = [], a) u.push(c);
                                                            l = 0, f.label = 3;
                                                        case 3:
                                                            if (!(l < u.length)) return [3, 6];
                                                            if (!((c = u[l]) in a)) return [3, 5];
                                                            return [5, i(c)];
                                                        case 4:
                                                            f.sent(), f.label = 5;
                                                        case 5:
                                                            return l++, [3, 3];
                                                        case 6:
                                                            return [3, 8];
                                                        case 7:
                                                            return d = f.sent(), t.warn("Failed to store remote config: ".concat(d)), [3, 8];
                                                        case 8:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        },
                                        getRemoteConfig: function (e, n) {
                                            return (0, r.mG)(void 0, void 0, void 0, function () {
                                                var i;
                                                return (0, r.Jh)(this, function (r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return r.trys.push([0, 2, , 3]), [4, o.get(e, n)];
                                                        case 1:
                                                            return [2, r.sent()];
                                                        case 2:
                                                            return i = r.sent(), t.warn("Failed to fetch remote config: ".concat(i)), [3, 3];
                                                        case 3:
                                                            return [2, void 0]
                                                    }
                                                })
                                            })
                                        },
                                        getLastFetchedSessionId: function () {
                                            return (0, r.mG)(void 0, void 0, void 0, function () {
                                                var e;
                                                return (0, r.Jh)(this, function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return n.trys.push([0, 2, , 3]), [4, s.get("lastFetchedSessionId", "sessionId")];
                                                        case 1:
                                                            return [2, n.sent()];
                                                        case 2:
                                                            return e = n.sent(), t.warn("Failed to fetch lastFetchedSessionId: ".concat(e)), [3, 3];
                                                        case 3:
                                                            return [2, void 0]
                                                    }
                                                })
                                            })
                                        },
                                        remoteConfigHasValues: function (e) {
                                            return (0, r.mG)(void 0, void 0, void 0, function () {
                                                var n;
                                                return (0, r.Jh)(this, function (r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return r.trys.push([0, 2, , 3]), [4, o.getAll(e)];
                                                        case 1:
                                                            return [2, !!r.sent().length];
                                                        case 2:
                                                            return n = r.sent(), t.warn("Failed to fetch remote config: ".concat(n)), [3, 3];
                                                        case 3:
                                                            return [2, !1]
                                                    }
                                                })
                                            })
                                        }
                                    }]
                            }
                        })
                    })
                },
                l = "Remote config fetch rejected due to timeout after 5 seconds",
                d = function () {
                    function e(e) {
                        var t = e.localConfig,
                            n = e.configKeys,
                            s = this;
                        this.retryTimeout = 1e3, this.attempts = 0, this.sessionTargetingMatch = !1, this.fetchTime = 0, this.getRemoteConfig = function (e, t, n) {
                            return (0, r.mG)(s, void 0, void 0, function () {
                                var i, o, s, a, u;
                                return (0, r.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            if (i = Date.now(), !this.remoteConfigIDBStore) return [3, 3];
                                            return [4, this.remoteConfigIDBStore.getLastFetchedSessionId()];
                                        case 1:
                                            if (!((o = r.sent()) && n && o === n)) return [3, 3];
                                            return [4, this.remoteConfigIDBStore.getRemoteConfig(e, t)];
                                        case 2:
                                            return s = r.sent(), this.fetchTime = Date.now() - i, [2, s];
                                        case 3:
                                            return [4, this.fetchWithTimeout(n)];
                                        case 4:
                                            if ((a = r.sent()) && (u = a.configs && a.configs[e])) return this.fetchTime = Date.now() - i, [2, u[t]];
                                            return this.fetchTime = Date.now() - i, [2, void 0]
                                    }
                                })
                            })
                        }, this.fetchWithTimeout = function (e) {
                            return (0, r.mG)(s, void 0, void 0, function () {
                                var t, n, i;
                                return (0, r.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return t = new AbortController, n = setTimeout(function () {
                                                return t.abort()
                                            }, 5e3), [4, this.fetchRemoteConfig(t.signal, e)];
                                        case 1:
                                            return i = r.sent(), clearTimeout(n), [2, i]
                                    }
                                })
                            })
                        }, this.fetchRemoteConfig = function (e, t) {
                            return (0, r.mG)(s, void 0, void 0, function () {
                                var n, s, a, u, c;
                                return (0, r.Jh)(this, function (d) {
                                    switch (d.label) {
                                        case 0:
                                            if (t === this.lastFetchedSessionId && this.attempts >= this.localConfig.flushMaxRetries) return [2, this.completeRequest({
                                                err: "Remote config fetch rejected due to exceeded retry count"
                                            })];
                                            if (e.aborted) return [2, this.completeRequest({
                                                err: l
                                            })];
                                            t !== this.lastFetchedSessionId && (this.lastFetchedSessionId = t, this.attempts = 0), d.label = 1;
                                        case 1:
                                            return d.trys.push([1, 3, , 4]), n = new URLSearchParams({
                                                api_key: this.localConfig.apiKey,
                                                config_keys: this.configKeys.join(",")
                                            }), s = {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "*/*"
                                                },
                                                method: "GET"
                                            }, a = "".concat(this.getServerUrl(), "?").concat(n.toString()), this.attempts += 1, [4, fetch(a, (0, r.pi)((0, r.pi)({}, s), {
                                                signal: e
                                            }))];
                                        case 2:
                                            if (null === (u = d.sent())) return [2, this.completeRequest({
                                                err: "Unexpected error occurred"
                                            })];
                                            switch (new i.d().buildStatus(u.status)) {
                                                case o.q.Success:
                                                    return this.attempts = 0, [2, this.parseAndStoreConfig(u, t)];
                                                case o.q.Failed:
                                                    return [2, this.retryFetch(e, t)];
                                                default:
                                                    return [2, this.completeRequest({
                                                        err: "Network error occurred, remote config fetch failed"
                                                    })]
                                            }
                                            return [3, 4];
                                        case 3:
                                            if (c = d.sent(), e.aborted) return [2, this.completeRequest({
                                                err: l
                                            })];
                                            return [2, this.completeRequest({
                                                err: c.message
                                            })];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, this.retryFetch = function (e, t) {
                            return (0, r.mG)(s, void 0, void 0, function () {
                                var n = this;
                                return (0, r.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, new Promise(function (e) {
                                                return setTimeout(e, n.attempts * n.retryTimeout)
                                            })];
                                        case 1:
                                            return r.sent(), [2, this.fetchRemoteConfig(e, t)]
                                    }
                                })
                            })
                        }, this.parseAndStoreConfig = function (e, t) {
                            return (0, r.mG)(s, void 0, void 0, function () {
                                var n;
                                return (0, r.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, e.json()];
                                        case 1:
                                            if (n = r.sent(), !this.remoteConfigIDBStore) return [3, 3];
                                            return [4, this.remoteConfigIDBStore.storeRemoteConfig(n, t)];
                                        case 2:
                                            r.sent(), r.label = 3;
                                        case 3:
                                            return this.completeRequest({
                                                success: "Remote config successfully fetched"
                                            }), [2, n]
                                    }
                                })
                            })
                        }, this.localConfig = t, this.configKeys = n
                    }
                    return e.prototype.initialize = function () {
                        return (0, r.mG)(this, void 0, void 0, function () {
                            var e;
                            return (0, r.Jh)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this, [4, c({
                                            apiKey: this.localConfig.apiKey,
                                            loggerProvider: this.localConfig.loggerProvider,
                                            configKeys: this.configKeys
                                        })];
                                    case 1:
                                        return e.remoteConfigIDBStore = t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.getServerUrl = function () {
                        return this.localConfig.serverZone === s.J.STAGING ? "https://sr-client-cfg.stag2.amplitude.com/config" : this.localConfig.serverZone === s.J.EU ? "https://sr-client-cfg.eu.amplitude.com/config" : "https://sr-client-cfg.amplitude.com/config"
                    }, e.prototype.completeRequest = function (e) {
                        var t = e.err,
                            n = e.success;
                        if (t) throw Error(t);
                        n && this.localConfig.loggerProvider.log(n)
                    }, e
                }(),
                f = function (e) {
                    var t = e.localConfig,
                        n = e.configKeys;
                    return (0, r.mG)(void 0, void 0, void 0, function () {
                        var e;
                        return (0, r.Jh)(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, (e = new d({
                                        localConfig: t,
                                        configKeys: n
                                    })).initialize()];
                                case 1:
                                    return r.sent(), [2, e]
                            }
                        })
                    })
                }
        },
        15558: function (e, t, n) {
            var r, i;
            n.d(t, {
                i: function () {
                    return r
                }
            }), (i = r || (r = {}))[i.None = 0] = "None", i[i.Error = 1] = "Error", i[i.Warn = 2] = "Warn", i[i.Verbose = 3] = "Verbose", i[i.Debug = 4] = "Debug"
        },
        40418: function (e, t, n) {
            var r, i;
            n.d(t, {
                J: function () {
                    return r
                }
            }), (i = r || (r = {})).US = "US", i.EU = "EU"
        },
        34854: function (e, t, n) {
            var r, i;
            n.d(t, {
                q: function () {
                    return r
                }
            }), (i = r || (r = {})).Unknown = "unknown", i.Skipped = "skipped", i.Success = "success", i.RateLimit = "rate_limit", i.PayloadTooLarge = "payload_too_large", i.Invalid = "invalid", i.Failed = "failed", i.Timeout = "Timeout", i.SystemError = "SystemError"
        },
        87358: function (e, t, n) {
            n.d(t, {
                J8: function () {
                    return D
                }
            });
            var r, i, o = n(11735),
                s = "[Amplitude] Element Tag",
                a = "[Amplitude] Element Text",
                u = "[Amplitude] Element Selector",
                c = "[Amplitude] Page URL",
                l = "https://app.amplitude.com",
                d = {
                    US: l,
                    EU: "https://app.eu.amplitude.com",
                    STAGING: "https://apps.stag2.amplitude.com"
                },
                f = "amp-visual-tagging-selector-highlight";

            function h(e, t, n) {
                for (var i = null, s = [], a = e, u = 0; a && "break" !== function () {
                        var e, c, l, d, f = w((e = a.getAttribute("id")) && r.idName(e) ? {
                                name: "#" + CSS.escape(e),
                                penalty: 0
                            } : null) || w.apply(void 0, (0, o.ev)([], (0, o.CR)(Array.from(a.attributes).filter(function (e) {
                                return r.attr(e.name, e.value)
                            }).map(function (e) {
                                return {
                                    name: "[".concat(CSS.escape(e.name), '="').concat(CSS.escape(e.value), '"]'),
                                    penalty: .5
                                }
                            })), !1)) || w.apply(void 0, (0, o.ev)([], (0, o.CR)(Array.from(a.classList).filter(r.className).map(function (e) {
                                return {
                                    name: "." + CSS.escape(e),
                                    penalty: 1
                                }
                            })), !1)) || w((c = a.tagName.toLowerCase(), r.tagName(c) ? {
                                name: c,
                                penalty: 2
                            } : null)) || [y()],
                            h = function (e) {
                                var t = e.parentNode;
                                if (!t) return null;
                                var n = t.firstChild;
                                if (!n) return null;
                                for (var r = 0; n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);) n = n.nextSibling;
                                return r
                            }(a);
                        if ("all" == t) h && (f = f.concat(f.filter(S).map(function (e) {
                            return b(e, h)
                        })));
                        else if ("two" == t) f = f.slice(0, 1), h && (f = f.concat(f.filter(S).map(function (e) {
                            return b(e, h)
                        })));
                        else if ("one" == t) {
                            var v = (0, o.CR)(f = f.slice(0, 1), 1)[0];
                            h && S(v) && (f = [b(v, h)])
                        } else "none" == t && (f = [y()], h && (f = [b(f[0], h)]));
                        try {
                            for (var g = (l = void 0, (0, o.XA)(f)), m = g.next(); !m.done; m = g.next()) {
                                var v = m.value;
                                v.level = u
                            }
                        } catch (e) {
                            l = {
                                error: e
                            }
                        } finally {
                            try {
                                m && !m.done && (d = g.return) && d.call(g)
                            } finally {
                                if (l) throw l.error
                            }
                        }
                        if (s.push(f), s.length >= r.seedMinLength && (i = p(s, n))) return "break";
                        a = a.parentElement, u++
                    }(););
                return (i || (i = p(s, n)), !i && n) ? n() : i
            }

            function p(e, t) {
                var n, i, s = E(function e(t, n) {
                    var r, i, s, a, u;
                    return void 0 === n && (n = []), (0, o.Jh)(this, function (c) {
                        switch (c.label) {
                            case 0:
                                if (!(t.length > 0)) return [3, 9];
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 6, 7, 8]), i = (r = (0, o.XA)(t[0])).next(), c.label = 2;
                            case 2:
                                if (i.done) return [3, 5];
                                return s = i.value, [5, (0, o.XA)(e(t.slice(1, t.length), n.concat(s)))];
                            case 3:
                                c.sent(), c.label = 4;
                            case 4:
                                return i = r.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return a = {
                                    error: c.sent()
                                }, [3, 8];
                            case 7:
                                try {
                                    i && !i.done && (u = r.return) && u.call(r)
                                } finally {
                                    if (a) throw a.error
                                }
                                return [7];
                            case 8:
                                return [3, 11];
                            case 9:
                                return [4, n];
                            case 10:
                                c.sent(), c.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                }(e));
                if (s.length > r.threshold) return t ? t() : null;
                try {
                    for (var a = (0, o.XA)(s), u = a.next(); !u.done; u = a.next()) {
                        var c = u.value;
                        if (m(c)) return c
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (i = a.return) && i.call(a)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }

            function v(e) {
                for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
                    var i = e[r].level || 0;
                    n = t.level === i - 1 ? "".concat(e[r].name, " > ").concat(n) : "".concat(e[r].name, " ").concat(n), t = e[r]
                }
                return n
            }

            function g(e) {
                return e.map(function (e) {
                    return e.penalty
                }).reduce(function (e, t) {
                    return e + t
                }, 0)
            }

            function m(e) {
                var t = v(e);
                switch (i.querySelectorAll(t).length) {
                    case 0:
                        throw Error("Can't select any node with this selector: ".concat(t));
                    case 1:
                        return !0;
                    default:
                        return !1
                }
            }

            function y() {
                return {
                    name: "*",
                    penalty: 3
                }
            }

            function b(e, t) {
                return {
                    name: e.name + ":nth-child(".concat(t, ")"),
                    penalty: e.penalty + 1
                }
            }

            function S(e) {
                return "html" !== e.name && !e.name.startsWith("#")
            }

            function w() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.filter(I);
                return n.length > 0 ? n : null
            }

            function I(e) {
                return null != e
            }

            function E(e) {
                return (0, o.ev)([], (0, o.CR)(e), !1).sort(function (e, t) {
                    return g(e) - g(t)
                })
            }
            var C = ["input", "select", "textarea"],
                k = function (e) {
                    return !(null == e || "string" == typeof e && (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(e)))
                },
                T = function (e) {
                    var t, n, r = null === (n = null === (t = null == e ? void 0 : e.tagName) || void 0 === t ? void 0 : t.toLowerCase) || void 0 === n ? void 0 : n.call(t);
                    return !C.includes(r)
                },
                _ = function (e) {
                    var t = "";
                    return T(e) && e.childNodes && e.childNodes.length && e.childNodes.forEach(function (e) {
                        var n = "";
                        e && 3 === e.nodeType ? e.textContent && (n = e.textContent) : n = _(e), t += n.split(/(\s+)/).filter(k).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
                    }), t
                },
                M = function (e, t) {
                    var n, s, a = "";
                    try {
                        return a = function (e, t) {
                            if (e.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type.");
                            if ("html" === e.tagName.toLowerCase()) return "html";
                            var n, s = {
                                root: document.body,
                                idName: function (e) {
                                    return !0
                                },
                                className: function (e) {
                                    return !0
                                },
                                tagName: function (e) {
                                    return !0
                                },
                                attr: function (e, t) {
                                    return !1
                                },
                                seedMinLength: 1,
                                optimizedMinLength: 2,
                                threshold: 1e3,
                                maxNumberOfTries: 1e4
                            };
                            i = (n = (r = (0, o.pi)((0, o.pi)({}, s), t)).root).nodeType === Node.DOCUMENT_NODE ? n : n === s.root ? n.ownerDocument : n;
                            var a = h(e, "all", function () {
                                return h(e, "two", function () {
                                    return h(e, "one", function () {
                                        return h(e, "none")
                                    })
                                })
                            });
                            if (a) {
                                var u = E(function e(t, n, s) {
                                    var a, u, c;
                                    return void 0 === s && (s = {
                                        counter: 0,
                                        visited: new Map
                                    }), (0, o.Jh)(this, function (l) {
                                        switch (l.label) {
                                            case 0:
                                                if (!(t.length > 2 && t.length > r.optimizedMinLength)) return [3, 5];
                                                a = 1, l.label = 1;
                                            case 1:
                                                var d;
                                                if (!(a < t.length - 1)) return [3, 5];
                                                if (s.counter > r.maxNumberOfTries || (s.counter += 1, (u = (0, o.ev)([], (0, o.CR)(t), !1)).splice(a, 1), c = v(u), s.visited.has(c))) return [2];
                                                if (!(m(u) && (d = u, i.querySelector(v(d)) === n))) return [3, 4];
                                                return [4, u];
                                            case 2:
                                                return l.sent(), s.visited.set(c, !0), [5, (0, o.XA)(e(u, n, s))];
                                            case 3:
                                                l.sent(), l.label = 4;
                                            case 4:
                                                return a++, [3, 1];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                }(a, e));
                                return u.length > 0 && (a = u[0]), v(a)
                            }
                            throw Error("Selector was not found.")
                        }(e, {
                            className: function (e) {
                                return e !== f
                            }
                        })
                    } catch (e) {
                        t && t.warn("Failed to get selector with finder, use fallback strategy instead: ".concat(e.toString()))
                    }
                    var u = null === (s = null === (n = null == e ? void 0 : e.tagName) || void 0 === n ? void 0 : n.toLowerCase) || void 0 === s ? void 0 : s.call(n);
                    if (u && (a = u), e.id) a = "#".concat(e.id);
                    else if (e.className) {
                        var c = e.className.split(" ").filter(function (e) {
                            return e !== f
                        }).join(".");
                        c && (a = "".concat(a, ".").concat(c))
                    }
                    return a
                },
                x = function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                        var r = e[n];
                        return null == r || "object" == typeof r && 0 === Object.keys(r).length || "string" == typeof r && 0 === r.trim().length || (t[n] = r), t
                    }, {})
                },
                O = function (e) {
                    var t = e.parentElement;
                    if (!t) return "";
                    var n = t.querySelector(":scope>span,h1,h2,h3,h4,h5,h6");
                    if (n) {
                        var r = n.textContent || "";
                        return k(r) ? r : ""
                    }
                    return O(t)
                },
                R = function (e, t) {
                    return e && "querySelectorAll" in e && "function" == typeof e.querySelectorAll ? Array.from(t.reduce(function (t, n) {
                        return n && Array.from(e.querySelectorAll(n)).forEach(function (e) {
                            t.add(e)
                        }), t
                    }, new Set)) : []
                },
                N = function (e, t) {
                    return e ? t.some(function (t) {
                        var n;
                        return null === (n = null == e ? void 0 : e.matches) || void 0 === n ? void 0 : n.call(e, t)
                    }) ? e : N(null == e ? void 0 : e.parentElement, t) : null
                },
                P = function (e, t) {
                    if (!e) return {};
                    var n, r, i, o = null === (i = null === (r = null == e ? void 0 : e.tagName) || void 0 === r ? void 0 : r.toLowerCase) || void 0 === i ? void 0 : i.call(r),
                        l = M(e, t);
                    return x(((n = {})[s] = o, n[a] = _(e), n[u] = l, n[c] = window.location.href.split("?")[0], n))
                },
                L = function () {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).origin,
                            n = this;
                        this.endpoint = l, this.requestCallbacks = {}, this.onSelect = function (e) {
                            n.notify({
                                action: "element-selected",
                                data: e
                            })
                        }, this.onTrack = function (e, t) {
                            "selector-mode-changed" === e ? n.notify({
                                action: "track-selector-mode-changed",
                                data: t
                            }) : "selector-moved" === e && n.notify({
                                action: "track-selector-moved",
                                data: t
                            })
                        }, this.endpoint = void 0 === t ? l : t
                    }
                    return e.prototype.notify = function (e) {
                        var t, n, r, i;
                        null === (n = null === (t = this.logger) || void 0 === t ? void 0 : t.debug) || void 0 === n || n.call(t, "Message sent: ", JSON.stringify(e)), null === (i = null === (r = window.opener) || void 0 === r ? void 0 : r.postMessage) || void 0 === i || i.call(r, e, this.endpoint)
                    }, e.prototype.sendRequest = function (e, t, n) {
                        var r = this;
                        void 0 === n && (n = {
                            timeout: 15e3
                        });
                        var i = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            o = {
                                id: i,
                                action: e,
                                args: t
                            };
                        return new Promise(function (t, s) {
                            r.requestCallbacks[i] = {
                                resolve: t,
                                reject: s
                            }, r.notify(o), (null == n ? void 0 : n.timeout) > 0 && setTimeout(function () {
                                s(Error("".concat(e, " timed out (id: ").concat(i, ")"))), delete r.requestCallbacks[i]
                            }, n.timeout)
                        })
                    }, e.prototype.handleResponse = function (e) {
                        var t;
                        if (!this.requestCallbacks[e.id]) {
                            null === (t = this.logger) || void 0 === t || t.warn("No callback found for request id: ".concat(e.id));
                            return
                        }
                        this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
                    }, e.prototype.setup = function (e) {
                        var t = this,
                            n = void 0 === e ? {} : e,
                            r = n.logger,
                            i = n.endpoint,
                            o = n.isElementSelectable;
                        this.logger = r, i && this.endpoint === l && (this.endpoint = i);
                        var s = null;
                        window.addEventListener("message", function (e) {
                            if (null === (r = null === (n = t.logger) || void 0 === n ? void 0 : n.debug) || void 0 === r || r.call(n, "Message received: ", JSON.stringify(e)), t.endpoint === e.origin) {
                                var n, r, i, a, u, c = null == e ? void 0 : e.data,
                                    l = null == c ? void 0 : c.action;
                                if (l) {
                                    if ("id" in c) null === (a = null === (i = t.logger) || void 0 === i ? void 0 : i.debug) || void 0 === a || a.call(i, "Received Response to previous request: ", JSON.stringify(e)), t.handleResponse(c);
                                    else if ("ping" === l) t.notify({
                                        action: "pong"
                                    });
                                    else if ("initialize-visual-tagging-selector" === l) {
                                        var d, h = null == c ? void 0 : c.data;
                                        (d = "https://cdn.amplitude.com/libs/visual-tagging-selector-0.2.2.js.gz", new Promise(function (e, t) {
                                            var n;
                                            try {
                                                var r = document.createElement("script");
                                                r.type = "text/javascript", r.async = !0, r.src = d, r.addEventListener("load", function () {
                                                    e({
                                                        status: !0
                                                    })
                                                }, {
                                                    once: !0
                                                }), r.addEventListener("error", function () {
                                                    t({
                                                        status: !1,
                                                        message: "Failed to load the script ".concat(d)
                                                    })
                                                }), null === (n = document.head) || void 0 === n || n.appendChild(r)
                                            } catch (e) {
                                                t(e)
                                            }
                                        })).then(function () {
                                            var e;
                                            s = null === (e = null == window ? void 0 : window.amplitudeVisualTaggingSelector) || void 0 === e ? void 0 : e.call(window, {
                                                getEventTagProps: P,
                                                isElementSelectable: function (e) {
                                                    return !o || o((null == h ? void 0 : h.actionType) || "click", e)
                                                },
                                                onSelect: t.onSelect,
                                                onTrack: t.onTrack,
                                                visualHighlightClass: f,
                                                messenger: t
                                            }), t.notify({
                                                action: "selector-loaded"
                                            })
                                        }).catch(function () {
                                            var e;
                                            null === (e = t.logger) || void 0 === e || e.warn("Failed to initialize visual tagging selector")
                                        })
                                    } else "close-visual-tagging-selector" === l && (null === (u = null == s ? void 0 : s.close) || void 0 === u || u.call(s))
                                }
                            }
                        }), this.notify({
                            action: "page-loaded"
                        })
                    }, e
                }(),
                A = ["a", "button", "input", "select", "textarea", "label", "[data-amp-default-track]", ".amp-default-track"],
                D = function (e) {
                    void 0 === e && (e = {});
                    var t, n = e.cssSelectorAllowlist,
                        r = void 0 === n ? A : n,
                        i = e.pageUrlAllowlist,
                        l = e.shouldTrackEventResolver,
                        f = e.dataAttributePrefix,
                        h = void 0 === f ? "data-amp-track-" : f,
                        p = e.visualTaggingOptions,
                        v = void 0 === p ? {
                            enabled: !0,
                            messenger: new L
                        } : p,
                        g = "@amplitude/plugin-autocapture-browser",
                        m = [],
                        y = void 0,
                        b = function (e, t, n) {
                            e.addEventListener(t, n), m.push({
                                element: e,
                                type: t,
                                handler: n
                            })
                        },
                        S = function () {
                            m.forEach(function (e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), m = []
                        },
                        w = function (e, t) {
                            if (!t) return !1;
                            var n, o, s, a, u = null === (s = null === (o = null == t ? void 0 : t.tagName) || void 0 === o ? void 0 : o.toLowerCase) || void 0 === s ? void 0 : s.call(o);
                            if (!u) return !1;
                            if (l) return l(e, t);
                            if (n = window.location.href, !(!i || !i.length || i.some(function (e) {
                                    return "string" == typeof e ? n === e : n.match(e)
                                }))) return !1;
                            var c = (null == t ? void 0 : t.type) || "";
                            if ("string" == typeof c) switch (c.toLowerCase()) {
                                case "hidden":
                                case "password":
                                    return !1
                            }
                            if (r && !r.some(function (e) {
                                    var n;
                                    return !!(null === (n = null == t ? void 0 : t.matches) || void 0 === n ? void 0 : n.call(t, e))
                                })) return !1;
                            switch (u) {
                                case "input":
                                case "select":
                                case "textarea":
                                    return "change" === e || "click" === e;
                                default:
                                    var d = null === (a = null == window ? void 0 : window.getComputedStyle) || void 0 === a ? void 0 : a.call(window, t);
                                    if (d && "pointer" === d.getPropertyValue("cursor") && "click" === e) return !0;
                                    return "click" === e
                            }
                        },
                        I = function (e, t) {
                            var n, r, i, o = null === (i = null === (r = null == t ? void 0 : t.tagName) || void 0 === r ? void 0 : r.toLowerCase) || void 0 === i ? void 0 : i.call(r),
                                l = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                    left: null,
                                    top: null
                                },
                                d = t.getAttribute("aria-label"),
                                f = t.getAttributeNames().reduce(function (e, n) {
                                    if (n.startsWith(h)) {
                                        var r = n.replace(h, ""),
                                            i = t.getAttribute(n);
                                        r && (e[r] = i || "")
                                    }
                                    return e
                                }, {}),
                                p = O(t),
                                v = M(t, y),
                                g = ((n = {})["[Amplitude] Element ID"] = t.id, n["[Amplitude] Element Class"] = t.className, n[s] = o, n[a] = _(t), n["[Amplitude] Element Position Left"] = null == l.left ? null : Math.round(l.left), n["[Amplitude] Element Position Top"] = null == l.top ? null : Math.round(l.top), n["[Amplitude] Element Aria Label"] = d, n["[Amplitude] Element Attributes"] = f, n[u] = v, n["[Amplitude] Element Parent Label"] = p, n[c] = window.location.href.split("?")[0], n["[Amplitude] Page Title"] = "undefined" != typeof document && document.title || "", n["[Amplitude] Viewport Height"] = window.innerHeight, n["[Amplitude] Viewport Width"] = window.innerWidth, n);
                            return "a" === o && "click" === e && t instanceof HTMLAnchorElement && (g["[Amplitude] Element Href"] = t.href), x(g)
                        };
                    return {
                        name: g,
                        type: "enrichment",
                        setup: function (e, n) {
                            return (0, o.mG)(void 0, void 0, void 0, function () {
                                var i, s, a, u, c;
                                return (0, o.Jh)(this, function (l) {
                                    return n ? (y = e.loggerProvider, "undefined" == typeof document || (i = function (e) {
                                        w("click", e) && b(e, "click", function (t) {
                                            ((null == t ? void 0 : t.target) == (null == t ? void 0 : t.currentTarget) || N(null == t ? void 0 : t.target, r) == (null == t ? void 0 : t.currentTarget)) && (null == n || n.track("[Amplitude] Element Clicked", I("click", e)))
                                        }), w("change", e) && b(e, "change", function (t) {
                                            ((null == t ? void 0 : t.target) == (null == t ? void 0 : t.currentTarget) || N(null == t ? void 0 : t.target, r) == (null == t ? void 0 : t.currentTarget)) && (null == n || n.track("[Amplitude] Element Changed", I("change", e)))
                                        })
                                    }, "undefined" != typeof MutationObserver && (t = new MutationObserver(function (e) {
                                        e.forEach(function (e) {
                                            e.addedNodes.forEach(function (e) {
                                                i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && R(e, r).map(i)
                                            })
                                        })
                                    })), s = function () {
                                        R(document.body, r).forEach(i), null == t || t.observe(document.body, {
                                            subtree: !0,
                                            childList: !0
                                        })
                                    }, document.body ? s() : window.addEventListener("load", s), null === (u = null == e ? void 0 : e.loggerProvider) || void 0 === u || u.log("".concat(g, " has been successfully added.")), window.opener && v.enabled && (null === (c = v.messenger) || void 0 === c || c.setup((0, o.pi)((0, o.pi)({
                                        logger: null == e ? void 0 : e.loggerProvider
                                    }, (null == e ? void 0 : e.serverZone) && {
                                        endpoint: d[e.serverZone]
                                    }), {
                                        isElementSelectable: w
                                    }))))) : null === (a = null == e ? void 0 : e.loggerProvider) || void 0 === a || a.warn("".concat(g, " plugin requires a later version of @amplitude/analytics-browser. Events are not tracked.")), [2]
                                })
                            })
                        },
                        execute: function (e) {
                            return (0, o.mG)(void 0, void 0, void 0, function () {
                                return (0, o.Jh)(this, function (t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function () {
                            return (0, o.mG)(void 0, void 0, void 0, function () {
                                return (0, o.Jh)(this, function (e) {
                                    return t && t.disconnect(), S(), [2]
                                })
                            })
                        }
                    }
                }
        },
        11714: function (e, t, n) {
            let r, i, o, s, a, u;
            n.d(t, {
                k: function () {
                    return rt
                }
            });
            var c, l, d, f, h, p, v, g, m, y, b, S, w, I, E, C, k, T, _, M, x, O, R, N, P, L = n(11735),
                A = n(86166),
                D = n(77166),
                q = n(531),
                j = n(50797),
                F = n(15558),
                G = n(89514),
                U = n(40418),
                J = "[Amplitude]",
                z = "".concat(J, " Session Replay ID"),
                B = U.J.US,
                W = "".concat(J, " Session Replay Debug"),
                V = "amp-mask";
            G.xp;
            var K = function () {
                    return {
                        flushMaxRetries: 2,
                        logLevel: F.i.Warn,
                        loggerProvider: new q.Y,
                        transportProvider: new D.V
                    }
                },
                H = function (e) {
                    function t(t, n) {
                        var r = this,
                            i = K();
                        return (r = e.call(this, (0, L.pi)((0, L.pi)({
                            transportProvider: i.transportProvider
                        }, n), {
                            apiKey: t
                        })) || this).flushMaxRetries = void 0 !== n.flushMaxRetries && n.flushMaxRetries <= i.flushMaxRetries ? n.flushMaxRetries : i.flushMaxRetries, r.apiKey = t, r.sampleRate = n.sampleRate || 0, r.serverZone = n.serverZone || B, r.configEndpointUrl = n.configEndpointUrl, r.shouldInlineStylesheet = n.shouldInlineStylesheet, n.privacyConfig && (r.privacyConfig = n.privacyConfig), n.debugMode && (r.debugMode = n.debugMode), r
                    }
                    return (0, L.ZT)(t, e), t
                }(j.De),
                $ = n(89866),
                X = n(36789),
                Z = n(91305);

            function Y(e) {
                let t = null == e ? void 0 : e.host;
                return (null == t ? void 0 : t.shadowRoot) === e
            }

            function Q(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function ee(e) {
                try {
                    var t;
                    let n = e.rules || e.cssRules;
                    return n ? ((t = Array.from(n, et).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
                } catch (e) {
                    return null
                }
            }

            function et(e) {
                let t;
                if ("styleSheet" in e) try {
                    t = ee(e.styleSheet) || function (e) {
                        let {
                            cssText: t
                        } = e;
                        if (t.split('"').length < 3) return t;
                        let n = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
                    }(e)
                } catch (e) {} else if ("selectorText" in e && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
                return t || e.cssText
            }(c = M || (M = {}))[c.Document = 0] = "Document", c[c.DocumentType = 1] = "DocumentType", c[c.Element = 2] = "Element", c[c.Text = 3] = "Text", c[c.CDATA = 4] = "CDATA", c[c.Comment = 5] = "Comment";
            class en {
                constructor() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
                getId(e) {
                    var t;
                    if (!e) return -1;
                    let n = null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id;
                    return null != n ? n : -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    let t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    let n = t.id;
                    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    let n = this.getNode(e);
                    if (n) {
                        let e = this.nodeMetaMap.get(n);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function er({
                element: e,
                maskInputOptions: t,
                tagName: n,
                type: r,
                value: i,
                maskInputFn: o
            }) {
                let s = i || "",
                    a = r && ei(r);
                return (t[n.toLowerCase()] || a && t[a]) && (s = o ? o(s, e) : "*".repeat(s.length)), s
            }

            function ei(e) {
                return e.toLowerCase()
            }
            let eo = "__rrweb_original__";

            function es(e) {
                let t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? ei(t) : null
            }
            let ea = 1,
                eu = RegExp("[^a-z0-9-_:]");

            function ec() {
                return ea++
            }
            let el = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                ed = /^(?:[a-z+]+:)?\/\//i,
                ef = /^www\..*/i,
                eh = /^(data:)([^,]*),(.*)/i;

            function ep(e, t) {
                return (e || "").replace(el, (e, n, r, i, o, s) => {
                    let a = r || o || s,
                        u = n || i || "";
                    if (!a) return e;
                    if (ed.test(a) || ef.test(a) || eh.test(a)) return `url(${u}${a}${u})`;
                    if ("/" === a[0]) return `url(${u}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${u})`;
                    let c = t.split("/"),
                        l = a.split("/");
                    for (let e of (c.pop(), l)) "." !== e && (".." === e ? c.pop() : c.push(e));
                    return `url(${u}${c.join("/")}${u})`
                })
            }
            let ev = /^[^ \t\n\r\u000c]+/,
                eg = /^[, \t\n\r\u000c]+/;

            function em(e, t) {
                if (!t || "" === t.trim()) return t;
                let n = e.createElement("a");
                return n.href = t, n.href
            }

            function ey() {
                let e = document.createElement("a");
                return e.href = "", e.href
            }

            function eb(e, t, n, r) {
                return r ? "src" !== n && ("href" !== n || "use" === t && "#" === r[0]) && ("xlink:href" !== n || "#" === r[0]) && ("background" !== n || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === n ? function (e, t) {
                    if ("" === t.trim()) return t;
                    let n = 0;

                    function r(e) {
                        let r;
                        let i = e.exec(t.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    let i = [];
                    for (; r(eg), !(n >= t.length);) {
                        let o = r(ev);
                        if ("," === o.slice(-1)) o = em(e, o.substring(0, o.length - 1)), i.push(o);
                        else {
                            let r = "";
                            o = em(e, o);
                            let s = !1;
                            for (;;) {
                                let e = t.charAt(n);
                                if ("" === e) {
                                    i.push((o + r).trim());
                                    break
                                }
                                if (s) ")" === e && (s = !1);
                                else {
                                    if ("," === e) {
                                        n += 1, i.push((o + r).trim());
                                        break
                                    }
                                    "(" === e && (s = !0)
                                }
                                r += e, n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(e, r) : "style" === n ? ep(r, ey()) : "object" === t && "data" === n ? em(e, r) : r : em(e, r) : r
            }

            function eS(e, t, n) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function ew(e, t, n) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return !!n && ew(e.parentNode, t, n);
                for (let n = e.classList.length; n--;) {
                    let r = e.classList[n];
                    if (t.test(r)) return !0
                }
                return !!n && ew(e.parentNode, t, n)
            }

            function eI(e, t, n) {
                try {
                    let r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                    if (null === r) return !1;
                    if ("string" == typeof t) {
                        if (r.classList.contains(t) || r.closest(`.${t}`)) return !0
                    } else if (ew(r, t, !0)) return !0;
                    if (n && (r.matches(n) || r.closest(n))) return !0
                } catch (e) {}
                return !1
            }

            function eE(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function eC(e, t) {
                let n;
                let {
                    doc: o,
                    mirror: s,
                    blockClass: a,
                    blockSelector: u,
                    maskTextClass: c,
                    maskTextSelector: l,
                    skipChild: d = !1,
                    inlineStylesheet: f = !0,
                    maskInputOptions: h = {},
                    maskTextFn: p,
                    maskInputFn: v,
                    slimDOMOptions: g,
                    dataURLOptions: m = {},
                    inlineImages: y = !1,
                    recordCanvas: b = !1,
                    onSerialize: S,
                    onIframeLoad: w,
                    iframeLoadTimeout: I = 5e3,
                    onStylesheetLoad: E,
                    stylesheetLoadTimeout: C = 5e3,
                    keepIframeSrcFn: k = () => !1,
                    newlyAddedElement: T = !1
                } = t, {
                    preserveWhiteSpace: _ = !0
                } = t, x = function (e, t) {
                    let {
                        doc: n,
                        mirror: o,
                        blockClass: s,
                        blockSelector: a,
                        maskTextClass: u,
                        maskTextSelector: c,
                        inlineStylesheet: l,
                        maskInputOptions: d = {},
                        maskTextFn: f,
                        maskInputFn: h,
                        dataURLOptions: p = {},
                        inlineImages: v,
                        recordCanvas: g,
                        keepIframeSrcFn: m,
                        newlyAddedElement: y = !1
                    } = t, b = function (e, t) {
                        if (!t.hasNode(e)) return;
                        let n = t.getId(e);
                        return 1 === n ? void 0 : n
                    }(n, o);
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            if ("CSS1Compat" !== e.compatMode) return {
                                type: M.Document,
                                childNodes: [],
                                compatMode: e.compatMode
                            };
                            return {
                                type: M.Document, childNodes: []
                            };
                        case e.DOCUMENT_TYPE_NODE:
                            return {
                                type: M.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: b
                            };
                        case e.ELEMENT_NODE:
                            return function (e, t) {
                                let {
                                    doc: n,
                                    blockClass: o,
                                    blockSelector: s,
                                    inlineStylesheet: a,
                                    maskInputOptions: u = {},
                                    maskInputFn: c,
                                    dataURLOptions: l = {},
                                    inlineImages: d,
                                    recordCanvas: f,
                                    keepIframeSrcFn: h,
                                    newlyAddedElement: p = !1,
                                    rootId: v
                                } = t, g = function (e, t, n) {
                                    try {
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let n = e.classList.length; n--;) {
                                                let r = e.classList[n];
                                                if (t.test(r)) return !0
                                            }
                                        if (n) return e.matches(n)
                                    } catch (e) {}
                                    return !1
                                }(e, o, s), m = function (e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = ei(e.tagName);
                                    return eu.test(t) ? "div" : t
                                }(e), y = {}, b = e.attributes.length;
                                for (let t = 0; t < b; t++) {
                                    let r = e.attributes[t];
                                    eS(m, r.name, r.value) || (y[r.name] = eb(n, m, ei(r.name), r.value))
                                }
                                if ("link" === m && a) {
                                    let t = Array.from(n.styleSheets).find(t => t.href === e.href),
                                        r = null;
                                    t && (r = ee(t)), r && (delete y.rel, delete y.href, y._cssText = ep(r, t.href))
                                }
                                if ("style" === m && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                    let t = ee(e.sheet);
                                    t && (y._cssText = ep(t, ey()))
                                }
                                if ("input" === m || "textarea" === m || "select" === m) {
                                    let t = e.value,
                                        n = e.checked;
                                    "radio" !== y.type && "checkbox" !== y.type && "submit" !== y.type && "button" !== y.type && t ? y.value = er({
                                        element: e,
                                        type: es(e),
                                        tagName: m,
                                        value: t,
                                        maskInputOptions: u,
                                        maskInputFn: c
                                    }) : n && (y.checked = n)
                                }
                                if ("option" === m && (e.selected && !u.select ? y.selected = !0 : delete y.selected), "canvas" === m && f) {
                                    if ("2d" === e.__context) ! function (e) {
                                        let t = e.getContext("2d");
                                        if (!t) return !0;
                                        for (let n = 0; n < e.width; n += 50)
                                            for (let r = 0; r < e.height; r += 50) {
                                                let i = t.getImageData;
                                                if (new Uint32Array((eo in i ? i[eo] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                            }
                                        return !0
                                    }(e) && (y.rr_dataURL = e.toDataURL(l.type, l.quality));
                                    else if (!("__context" in e)) {
                                        let t = e.toDataURL(l.type, l.quality),
                                            n = document.createElement("canvas");
                                        n.width = e.width, n.height = e.height, t !== n.toDataURL(l.type, l.quality) && (y.rr_dataURL = t)
                                    }
                                }
                                if ("img" === m && d) {
                                    r || (i = (r = n.createElement("canvas")).getContext("2d"));
                                    let t = e.crossOrigin;
                                    e.crossOrigin = "anonymous";
                                    let o = () => {
                                        e.removeEventListener("load", o);
                                        try {
                                            r.width = e.naturalWidth, r.height = e.naturalHeight, i.drawImage(e, 0, 0), y.rr_dataURL = r.toDataURL(l.type, l.quality)
                                        } catch (t) {
                                            console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                        }
                                        t ? y.crossOrigin = t : e.removeAttribute("crossorigin")
                                    };
                                    e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o)
                                }
                                if (("audio" === m || "video" === m) && (y.rr_mediaState = e.paused ? "paused" : "played", y.rr_mediaCurrentTime = e.currentTime), !p && (e.scrollLeft && (y.rr_scrollLeft = e.scrollLeft), e.scrollTop && (y.rr_scrollTop = e.scrollTop)), g) {
                                    let {
                                        width: t,
                                        height: n
                                    } = e.getBoundingClientRect();
                                    y = {
                                        class: y.class,
                                        rr_width: `${t}px`,
                                        rr_height: `${n}px`
                                    }
                                }
                                return "iframe" !== m || h(y.src) || (e.contentDocument || (y.rr_src = y.src), delete y.src), {
                                    type: M.Element,
                                    tagName: m,
                                    attributes: y,
                                    childNodes: [],
                                    isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                    needBlock: g,
                                    rootId: v
                                }
                            }(e, {
                                doc: n,
                                blockClass: s,
                                blockSelector: a,
                                inlineStylesheet: l,
                                maskInputOptions: d,
                                maskInputFn: h,
                                dataURLOptions: p,
                                inlineImages: v,
                                recordCanvas: g,
                                keepIframeSrcFn: m,
                                newlyAddedElement: y,
                                rootId: b
                            });
                        case e.TEXT_NODE:
                            return function (e, t) {
                                var n;
                                let {
                                    maskTextClass: r,
                                    maskTextSelector: i,
                                    maskTextFn: o,
                                    rootId: s
                                } = t, a = e.parentNode && e.parentNode.tagName, u = e.textContent, c = "STYLE" === a || void 0, l = "SCRIPT" === a || void 0;
                                if (c && u) {
                                    try {
                                        e.nextSibling || e.previousSibling || (null === (n = e.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) && (u = ee(e.parentNode.sheet))
                                    } catch (t) {
                                        console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                    }
                                    u = ep(u, ey())
                                }
                                return l && (u = "SCRIPT_PLACEHOLDER"), !c && !l && u && eI(e, r, i) && (u = o ? o(u, e.parentElement) : u.replace(/[\S]/g, "*")), {
                                    type: M.Text,
                                    textContent: u || "",
                                    isStyle: c,
                                    rootId: s
                                }
                            }(e, {
                                maskTextClass: u,
                                maskTextSelector: c,
                                maskTextFn: f,
                                rootId: b
                            });
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: M.CDATA, textContent: "", rootId: b
                            };
                        case e.COMMENT_NODE:
                            return {
                                type: M.Comment, textContent: e.textContent || "", rootId: b
                            };
                        default:
                            return !1
                    }
                }(e, {
                    doc: o,
                    mirror: s,
                    blockClass: a,
                    blockSelector: u,
                    maskTextClass: c,
                    maskTextSelector: l,
                    inlineStylesheet: f,
                    maskInputOptions: h,
                    maskTextFn: p,
                    maskInputFn: v,
                    dataURLOptions: m,
                    inlineImages: y,
                    recordCanvas: b,
                    keepIframeSrcFn: k,
                    newlyAddedElement: T
                });
                if (!x) return console.warn(e, "not serialized"), null;
                n = s.hasNode(e) ? s.getId(e) : ! function (e, t) {
                    if (t.comment && e.type === M.Comment) return !0;
                    if (e.type === M.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js")) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (eE(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === eE(e.attributes.name) || "icon" === eE(e.attributes.rel) || "apple-touch-icon" === eE(e.attributes.rel) || "shortcut icon" === eE(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && eE(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (eE(e.attributes.property).match(/^(og|twitter|fb):/) || eE(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === eE(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === eE(e.attributes.name) || "googlebot" === eE(e.attributes.name) || "bingbot" === eE(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            else if (t.headMetaAuthorship && ("author" === eE(e.attributes.name) || "generator" === eE(e.attributes.name) || "framework" === eE(e.attributes.name) || "publisher" === eE(e.attributes.name) || "progid" === eE(e.attributes.name) || eE(e.attributes.property).match(/^article:/) || eE(e.attributes.property).match(/^product:/))) return !0;
                            else if (t.headMetaVerification && ("google-site-verification" === eE(e.attributes.name) || "yandex-verification" === eE(e.attributes.name) || "csrf-token" === eE(e.attributes.name) || "p:domain_verify" === eE(e.attributes.name) || "verify-v1" === eE(e.attributes.name) || "verification" === eE(e.attributes.name) || "shopify-checkout-api-token" === eE(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(x, g) && (_ || x.type !== M.Text || x.isStyle || x.textContent.replace(/^\s+|\s+$/gm, "").length) ? ec() : -2;
                let O = Object.assign(x, {
                    id: n
                });
                if (s.add(e, O), -2 === n) return null;
                S && S(e);
                let R = !d;
                if (O.type === M.Element) {
                    R = R && !O.needBlock, delete O.needBlock;
                    let t = e.shadowRoot;
                    t && Q(t) && (O.isShadowHost = !0)
                }
                if ((O.type === M.Document || O.type === M.Element) && R) {
                    g.headWhitespace && O.type === M.Element && "head" === O.tagName && (_ = !1);
                    let t = {
                        doc: o,
                        mirror: s,
                        blockClass: a,
                        blockSelector: u,
                        maskTextClass: c,
                        maskTextSelector: l,
                        skipChild: d,
                        inlineStylesheet: f,
                        maskInputOptions: h,
                        maskTextFn: p,
                        maskInputFn: v,
                        slimDOMOptions: g,
                        dataURLOptions: m,
                        inlineImages: y,
                        recordCanvas: b,
                        preserveWhiteSpace: _,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: E,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: k
                    };
                    if (O.type === M.Element && "textarea" === O.tagName && void 0 !== O.attributes.value);
                    else
                        for (let n of Array.from(e.childNodes)) {
                            let e = eC(n, t);
                            e && O.childNodes.push(e)
                        }
                    if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                        for (let n of Array.from(e.shadowRoot.childNodes)) {
                            let r = eC(n, t);
                            r && (Q(e.shadowRoot) && (r.isShadow = !0), O.childNodes.push(r))
                        }
                }
                return e.parentNode && Y(e.parentNode) && Q(e.parentNode) && (O.isShadow = !0), O.type === M.Element && "iframe" === O.tagName && function (e, t, n) {
                    let r;
                    let i = e.contentWindow;
                    if (!i) return;
                    let o = !1;
                    try {
                        r = i.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== r) {
                        let r = setTimeout(() => {
                            o || (t(), o = !0)
                        }, n);
                        e.addEventListener("load", () => {
                            clearTimeout(r), o = !0, t()
                        });
                        return
                    }
                    let s = "about:blank";
                    if (i.location.href !== s || e.src === s || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t)
                }(e, () => {
                    let t = e.contentDocument;
                    if (t && w) {
                        let n = eC(t, {
                            doc: t,
                            mirror: s,
                            blockClass: a,
                            blockSelector: u,
                            maskTextClass: c,
                            maskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskTextFn: p,
                            maskInputFn: v,
                            slimDOMOptions: g,
                            dataURLOptions: m,
                            inlineImages: y,
                            recordCanvas: b,
                            preserveWhiteSpace: _,
                            onSerialize: S,
                            onIframeLoad: w,
                            iframeLoadTimeout: I,
                            onStylesheetLoad: E,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: k
                        });
                        n && w(e, n)
                    }
                }, I), O.type === M.Element && "link" === O.tagName && "stylesheet" === O.attributes.rel && function (e, t, n) {
                    let r, i = !1;
                    try {
                        r = e.sheet
                    } catch (e) {
                        return
                    }
                    if (r) return;
                    let o = setTimeout(() => {
                        i || (t(), i = !0)
                    }, n);
                    e.addEventListener("load", () => {
                        clearTimeout(o), i = !0, t()
                    })
                }(e, () => {
                    if (E) {
                        let t = eC(e, {
                            doc: o,
                            mirror: s,
                            blockClass: a,
                            blockSelector: u,
                            maskTextClass: c,
                            maskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskTextFn: p,
                            maskInputFn: v,
                            slimDOMOptions: g,
                            dataURLOptions: m,
                            inlineImages: y,
                            recordCanvas: b,
                            preserveWhiteSpace: _,
                            onSerialize: S,
                            onIframeLoad: w,
                            iframeLoadTimeout: I,
                            onStylesheetLoad: E,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: k
                        });
                        t && E(e, t)
                    }
                }, C), O
            }
            RegExp(/(max|min)-device-(width|height)/.source, "g"), RegExp(/([^\\]):hover/.source, "g");
            var ek = ((l = ek || {})[l.DomContentLoaded = 0] = "DomContentLoaded", l[l.Load = 1] = "Load", l[l.FullSnapshot = 2] = "FullSnapshot", l[l.IncrementalSnapshot = 3] = "IncrementalSnapshot", l[l.Meta = 4] = "Meta", l[l.Custom = 5] = "Custom", l[l.Plugin = 6] = "Plugin", l),
                eT = ((d = eT || {})[d.Mutation = 0] = "Mutation", d[d.MouseMove = 1] = "MouseMove", d[d.MouseInteraction = 2] = "MouseInteraction", d[d.Scroll = 3] = "Scroll", d[d.ViewportResize = 4] = "ViewportResize", d[d.Input = 5] = "Input", d[d.TouchMove = 6] = "TouchMove", d[d.MediaInteraction = 7] = "MediaInteraction", d[d.StyleSheetRule = 8] = "StyleSheetRule", d[d.CanvasMutation = 9] = "CanvasMutation", d[d.Font = 10] = "Font", d[d.Log = 11] = "Log", d[d.Drag = 12] = "Drag", d[d.StyleDeclaration = 13] = "StyleDeclaration", d[d.Selection = 14] = "Selection", d[d.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", d),
                e_ = ((f = e_ || {})[f.MouseUp = 0] = "MouseUp", f[f.MouseDown = 1] = "MouseDown", f[f.Click = 2] = "Click", f[f.ContextMenu = 3] = "ContextMenu", f[f.DblClick = 4] = "DblClick", f[f.Focus = 5] = "Focus", f[f.Blur = 6] = "Blur", f[f.TouchStart = 7] = "TouchStart", f[f.TouchMove_Departed = 8] = "TouchMove_Departed", f[f.TouchEnd = 9] = "TouchEnd", f[f.TouchCancel = 10] = "TouchCancel", f),
                eM = ((h = eM || {})[h.Mouse = 0] = "Mouse", h[h.Pen = 1] = "Pen", h[h.Touch = 2] = "Touch", h),
                ex = ((p = ex || {})[p["2D"] = 0] = "2D", p[p.WebGL = 1] = "WebGL", p[p.WebGL2 = 2] = "WebGL2", p),
                eO = ((v = eO || {}).Start = "start", v.Pause = "pause", v.Resume = "resume", v.Resize = "resize", v.Finish = "finish", v.FullsnapshotRebuilded = "fullsnapshot-rebuilded", v.LoadStylesheetStart = "load-stylesheet-start", v.LoadStylesheetEnd = "load-stylesheet-end", v.SkipStart = "skip-start", v.SkipEnd = "skip-end", v.MouseInteraction = "mouse-interaction", v.EventCast = "event-cast", v.CustomEvent = "custom-event", v.Flush = "flush", v.StateChange = "state-change", v.PlayBack = "play-back", v.Destroy = "destroy", v);

            function eR(e, t, n = document) {
                let r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
            }
            let eN = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                eP = {
                    map: {},
                    getId: () => (console.error(eN), -1),
                    getNode: () => (console.error(eN), null),
                    removeNodeFromMap() {
                        console.error(eN)
                    },
                    has: () => (console.error(eN), !1),
                    reset() {
                        console.error(eN)
                    }
                };

            function eL(e, t, n = {}) {
                let r = null,
                    i = 0;
                return function (...o) {
                    let s = Date.now();
                    i || !1 !== n.leading || (i = s);
                    let a = t - (s - i),
                        u = this;
                    a <= 0 || a > t ? (r && (clearTimeout(r), r = null), i = s, e.apply(u, o)) : r || !1 === n.trailing || (r = setTimeout(() => {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(u, o)
                    }, a))
                }
            }

            function eA(e, t, n, r, i = window) {
                let o = i.Object.getOwnPropertyDescriptor(e, t);
                return i.Object.defineProperty(e, t, r ? n : {
                    set(e) {
                        setTimeout(() => {
                            n.set.call(this, e)
                        }, 0), o && o.set && o.set.call(this, e)
                    }
                }), () => eA(e, t, o || {}, !0)
            }

            function eD(e, t, n) {
                try {
                    if (!(t in e)) return () => {};
                    let r = e[t],
                        i = n(r);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), e[t] = i, () => {
                        e[t] = r
                    }
                } catch (e) {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (eP = new Proxy(eP, {
                get: (e, t, n) => ("map" === t && console.error(eN), Reflect.get(e, t, n))
            }));
            let eq = Date.now;

            function ej(e) {
                var t, n, r, i, o, s;
                let a = e.document;
                return {
                    left: a.scrollingElement ? a.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : (null == a ? void 0 : a.documentElement.scrollLeft) || (null === (n = null === (t = null == a ? void 0 : a.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null === (r = null == a ? void 0 : a.body) || void 0 === r ? void 0 : r.scrollLeft) || 0,
                    top: a.scrollingElement ? a.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == a ? void 0 : a.documentElement.scrollTop) || (null === (o = null === (i = null == a ? void 0 : a.body) || void 0 === i ? void 0 : i.parentElement) || void 0 === o ? void 0 : o.scrollTop) || (null === (s = null == a ? void 0 : a.body) || void 0 === s ? void 0 : s.scrollTop) || 0
                }
            }

            function eF() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function eG() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function eU(e) {
                return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
            }

            function eJ(e, t, n, r) {
                if (!e) return !1;
                let i = eU(e);
                if (!i) return !1;
                try {
                    if ("string" == typeof t) {
                        if (i.classList.contains(t) || r && null !== i.closest("." + t)) return !0
                    } else if (ew(i, t, r)) return !0
                } catch (e) {}
                return !!(n && (i.matches(n) || r && null !== i.closest(n)))
            }

            function ez(e, t) {
                return -2 === t.getId(e)
            }

            function eB(e) {
                return !!e.changedTouches
            }

            function eW(e, t) {
                return !!("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function eV(e, t) {
                return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function eK(e) {
                return !!(null == e ? void 0 : e.shadowRoot)
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (eq = () => new Date().getTime());
            class eH {
                constructor() {
                    this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
                }
                getId(e) {
                    var t;
                    return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    let n;
                    return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function e$(e) {
                var t, n;
                let r = null;
                return (null === (n = null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) || void 0 === n ? void 0 : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (r = e.getRootNode().host), r
            }

            function eX(e) {
                let t = e.ownerDocument;
                return !!t && (t.contains(e) || function (e) {
                    let t = e.ownerDocument;
                    if (!t) return !1;
                    let n = function (e) {
                        let t, n = e;
                        for (; t = e$(n);) n = t;
                        return n
                    }(e);
                    return t.contains(n)
                }(e))
            }
            let eZ = e => o ? (...t) => {
                try {
                    return e(...t)
                } catch (e) {
                    if (o && !0 === o(e)) return;
                    throw e
                }
            } : e;

            function eY(e) {
                return (...t) => {
                    try {
                        return e(...t)
                    } catch (e) {
                        try {
                            e._external_ = !0
                        } catch (e) {}
                        throw e
                    }
                }
            }
            class eQ {
                constructor(e) {
                    this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
                }
                getId(e, t, n, r) {
                    let i = n || this.getIdToRemoteIdMap(e),
                        o = r || this.getRemoteIdToIdMap(e),
                        s = i.get(t);
                    return s || (s = this.generateIdFn(), i.set(t, s), o.set(s, t)), s
                }
                getIds(e, t) {
                    let n = this.getIdToRemoteIdMap(e),
                        r = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getId(e, t, n, r))
                }
                getRemoteId(e, t, n) {
                    let r = n || this.getRemoteIdToIdMap(e);
                    return "number" != typeof t ? t : r.get(t) || -1
                }
                getRemoteIds(e, t) {
                    let n = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getRemoteId(e, t, n))
                }
                reset(e) {
                    if (!e) {
                        this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                        return
                    }
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }
            class e0 {
                constructor(e) {
                    this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new eQ(ec), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new eQ(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    var n;
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), null === (n = this.loadListener) || void 0 === n || n.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
                }
                handleMessage(e) {
                    if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
                    let t = this.crossOriginIframeMap.get(e.source);
                    if (!t) return;
                    let n = this.transformCrossOriginEvent(t, e.data.event);
                    n && this.wrappedEmit(n, e.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    var n;
                    switch (t.type) {
                        case ek.FullSnapshot: {
                            this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
                            let n = t.data.node.id;
                            return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                                timestamp: t.timestamp,
                                type: ek.IncrementalSnapshot,
                                data: {
                                    source: eT.Mutation,
                                    adds: [{
                                        parentId: this.mirror.getId(e),
                                        nextId: null,
                                        node: t.data.node
                                    }],
                                    removes: [],
                                    texts: [],
                                    attributes: [],
                                    isAttachIframe: !0
                                }
                            }
                        }
                        case ek.Meta:
                        case ek.Load:
                        case ek.DomContentLoaded:
                            return !1;
                        case ek.Plugin:
                            return t;
                        case ek.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case ek.IncrementalSnapshot:
                            switch (t.data.source) {
                                case eT.Mutation:
                                    return t.data.adds.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        let n = this.crossOriginIframeRootIdMap.get(e);
                                        n && this.patchRootIdOnNode(t.node, n)
                                    }), t.data.removes.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    }), t.data.attributes.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t.data.texts.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eT.Drag:
                                case eT.TouchMove:
                                case eT.MouseMove:
                                    return t.data.positions.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eT.ViewportResize:
                                    return !1;
                                case eT.MediaInteraction:
                                case eT.MouseInteraction:
                                case eT.Scroll:
                                case eT.CanvasMutation:
                                case eT.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case eT.StyleSheetRule:
                                case eT.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case eT.Font:
                                    return t;
                                case eT.Selection:
                                    return t.data.ranges.forEach(t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    }), t;
                                case eT.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), null === (n = t.data.styles) || void 0 === n || n.forEach(t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    }), t
                            }
                    }
                }
                replace(e, t, n, r) {
                    for (let i of r)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
                    return t
                }
                replaceIds(e, t, n) {
                    return this.replace(this.crossOriginIframeMirror, e, t, n)
                }
                replaceStyleIds(e, t, n) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                        this.replaceIdOnNode(e, t)
                    })
                }
                patchRootIdOnNode(e, t) {
                    e.type === M.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                        this.patchRootIdOnNode(e, t)
                    })
                }
            }
            class e1 {
                constructor() {
                    this.length = 0, this.head = null, this.tail = null
                }
                get(e) {
                    if (e >= this.length) throw Error("Position outside of list range");
                    let t = this.head;
                    for (let n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null;
                    return t
                }
                addNode(e) {
                    let t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                        let n = e.previousSibling.__ln.next;
                        t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
                    } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                        let n = e.nextSibling.__ln.previous;
                        t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    let t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            let e2 = (e, t) => `${e}@${t}`;
            class e3 {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let e = [],
                            t = new Set,
                            n = new e1,
                            r = e => {
                                let t = e,
                                    n = -2;
                                for (; - 2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                                return n
                            },
                            i = i => {
                                if (!i.parentNode || !eX(i) || "TEXTAREA" === i.parentNode.tagName) return;
                                let o = Y(i.parentNode) ? this.mirror.getId(e$(i)) : this.mirror.getId(i.parentNode),
                                    s = r(i);
                                if (-1 === o || -1 === s) return n.addNode(i);
                                let a = eC(i, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        eW(e, this.mirror) && this.iframeManager.addIframe(e), eV(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), eK(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    }
                                });
                                a && (e.push({
                                    parentId: o,
                                    nextId: s,
                                    node: a
                                }), t.add(a.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let e of this.movedSet)(!e5(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                        for (let e of this.addedSet) e8(this.droppedSet, e) || e5(this.removes, e, this.mirror) ? e8(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                        let o = null;
                        for (; n.length;) {
                            let e = null;
                            if (o) {
                                let t = this.mirror.getId(o.value.parentNode),
                                    n = r(o.value); - 1 !== t && -1 !== n && (e = o)
                            }
                            if (!e) {
                                let t = n.tail;
                                for (; t;) {
                                    let n = t;
                                    if (t = t.previous, n) {
                                        let t = this.mirror.getId(n.value.parentNode);
                                        if (-1 === r(n.value)) continue;
                                        if (-1 !== t) {
                                            e = n;
                                            break
                                        } {
                                            let t = n.value;
                                            if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                let r = t.parentNode.host;
                                                if (-1 !== this.mirror.getId(r)) {
                                                    e = n;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; n.head;) n.removeNode(n.head.value);
                                break
                            }
                            o = e.previous, n.removeNode(e.value), i(e.value)
                        }
                        let s = {
                            texts: this.texts.map(e => {
                                let t = e.node;
                                return "TEXTAREA" === t.parentNode.tagName && this.genTextAreaValueMutation(t.parentNode), {
                                    id: this.mirror.getId(t),
                                    value: e.value
                                }
                            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            attributes: this.attributes.map(e => {
                                let {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    let n = JSON.stringify(e.styleDiff),
                                        r = JSON.stringify(e._unchangedStyles);
                                    n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            removes: this.removes,
                            adds: e
                        };
                        (s.texts.length || s.attributes.length || s.removes.length || s.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s))
                    }, this.genTextAreaValueMutation = e => {
                        let t = this.attributeMap.get(e);
                        t || (t = {
                            node: e,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        }, this.attributes.push(t), this.attributeMap.set(e, t)), t.attributes.value = Array.from(e.childNodes, e => e.textContent || "").join("")
                    }, this.processMutation = e => {
                        if (!ez(e.target, this.mirror)) switch (e.type) {
                            case "characterData": {
                                let t = e.target.textContent;
                                eJ(e.target, this.blockClass, this.blockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: eI(e.target, this.maskTextClass, this.maskTextSelector) && t ? this.maskTextFn ? this.maskTextFn(t, eU(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                            case "attributes": {
                                let t = e.target,
                                    n = e.attributeName,
                                    r = e.target.getAttribute(n);
                                if ("value" === n) {
                                    let e = es(t);
                                    r = er({
                                        element: t,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: t.tagName,
                                        type: e,
                                        value: r,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (eJ(e.target, this.blockClass, this.blockSelector, !1) || r === e.oldValue) return;
                                let i = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                    if (t.contentDocument) return;
                                    n = "rr_src"
                                }
                                if (i || (i = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !eS(t.tagName, n) && (i.attributes[n] = eb(this.doc, ei(t.tagName), ei(n), r), "style" === n)) {
                                    let n;
                                    try {
                                        n = document.implementation.createHTMLDocument()
                                    } catch (e) {
                                        n = this.doc
                                    }
                                    let r = n.createElement("span");
                                    for (let n of (e.oldValue && r.setAttribute("style", e.oldValue), Array.from(t.style))) {
                                        let e = t.style.getPropertyValue(n),
                                            o = t.style.getPropertyPriority(n);
                                        e !== r.style.getPropertyValue(n) || o !== r.style.getPropertyPriority(n) ? "" === o ? i.styleDiff[n] = e : i.styleDiff[n] = [e, o] : i._unchangedStyles[n] = [e, o]
                                    }
                                    for (let e of Array.from(r.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                }
                                break
                            }
                            case "childList":
                                if (eJ(e.target, this.blockClass, this.blockSelector, !0)) return;
                                if ("TEXTAREA" === e.target.tagName) {
                                    this.genTextAreaValueMutation(e.target);
                                    return
                                }
                                e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                                    let n = this.mirror.getId(t),
                                        r = Y(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    eJ(e.target, this.blockClass, this.blockSelector, !1) || ez(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (e4(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                        if (Y(t)) return !1;
                                        let r = n.getId(t);
                                        return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                                    }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[e2(n, r)] ? e4(this.movedSet, t) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!(Y(e.target) && Q(e.target)) || void 0
                                    })), this.mapRemoves.push(t))
                                })
                        }
                    }, this.genAdds = (e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                            if (this.mirror.hasNode(e)) {
                                if (ez(e, this.mirror)) return;
                                this.movedSet.add(e);
                                let n = null;
                                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[e2(this.mirror.getId(e), n)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            !eJ(e, this.blockClass, this.blockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), eK(e) && e.shadowRoot.childNodes.forEach(t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            }))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                        this[t] = e[t]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function e4(e, t) {
                e.delete(t), t.childNodes.forEach(t => e4(e, t))
            }

            function e5(e, t, n) {
                return 0 !== e.length && function e(t, n, r) {
                    let {
                        parentNode: i
                    } = n;
                    if (!i) return !1;
                    let o = r.getId(i);
                    return !!t.some(e => e.id === o) || e(t, i, r)
                }(e, t, n)
            }

            function e8(e, t) {
                return 0 !== e.size && function e(t, n) {
                    let {
                        parentNode: r
                    } = n;
                    return !!r && (!!t.has(r) || e(t, r))
                }(e, t)
            }
            let e6 = [];

            function e7(e) {
                try {
                    if ("composedPath" in e) {
                        let t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch (e) {}
                return e && e.target
            }

            function e9(e, t) {
                var n, r;
                let i = new e3;
                e6.push(i), i.init(e);
                let o = window.MutationObserver || window.__rrMutationObserver,
                    s = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                s && window[s] && (o = window[s]);
                let a = new o(eZ(i.processMutations.bind(i)));
                return a.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), a
            }

            function te({
                scrollCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                sampling: o
            }) {
                return eR("scroll", eZ(eL(eZ(o => {
                    let s = e7(o);
                    if (!s || eJ(s, r, i, !0)) return;
                    let a = n.getId(s);
                    if (s === t && t.defaultView) {
                        let n = ej(t.defaultView);
                        e({
                            id: a,
                            x: n.left,
                            y: n.top
                        })
                    } else e({
                        id: a,
                        x: s.scrollLeft,
                        y: s.scrollTop
                    })
                }), o.scroll || 100)), t)
            }

            function tt(e, t) {
                let n = Object.assign({}, e);
                return t || delete n.userTriggered, n
            }
            let tn = ["INPUT", "TEXTAREA", "SELECT"],
                tr = new WeakMap;

            function ti(e) {
                var t;
                return t = [], tu("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || tu("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || tu("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || tu("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)), t
            }

            function to(e, t, n) {
                let r, i;
                return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
                    styleId: i,
                    id: r
                }) : {}
            }

            function ts({
                mirror: e,
                stylesheetManager: t
            }, n) {
                var r, i, o;
                let s = null;
                s = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
                let a = "#document" === n.nodeName ? null === (r = n.defaultView) || void 0 === r ? void 0 : r.Document : null === (o = null === (i = n.ownerDocument) || void 0 === i ? void 0 : i.defaultView) || void 0 === o ? void 0 : o.ShadowRoot,
                    u = (null == a ? void 0 : a.prototype) ? Object.getOwnPropertyDescriptor(null == a ? void 0 : a.prototype, "adoptedStyleSheets") : void 0;
                return null !== s && -1 !== s && a && u ? (Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: u.configurable,
                    enumerable: u.enumerable,
                    get() {
                        var e;
                        return null === (e = u.get) || void 0 === e ? void 0 : e.call(this)
                    },
                    set(e) {
                        var n;
                        let r = null === (n = u.set) || void 0 === n ? void 0 : n.call(this, e);
                        if (null !== s && -1 !== s) try {
                            t.adoptStyleSheets(e, s)
                        } catch (e) {}
                        return r
                    }
                }), eZ(() => {
                    Object.defineProperty(n, "adoptedStyleSheets", {
                        configurable: u.configurable,
                        enumerable: u.enumerable,
                        get: u.get,
                        set: u.set
                    })
                })) : () => {}
            }

            function ta(e, t = {}) {
                let n;
                let r = e.doc.defaultView;
                if (!r) return () => {};
                ! function (e, t) {
                    let {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: i,
                        scrollCb: o,
                        viewportResizeCb: s,
                        inputCb: a,
                        mediaInteractionCb: u,
                        styleSheetRuleCb: c,
                        styleDeclarationCb: l,
                        canvasMutationCb: d,
                        fontCb: f,
                        selectionCb: h
                    } = e;
                    e.mutationCb = (...e) => {
                        t.mutation && t.mutation(...e), n(...e)
                    }, e.mousemoveCb = (...e) => {
                        t.mousemove && t.mousemove(...e), r(...e)
                    }, e.mouseInteractionCb = (...e) => {
                        t.mouseInteraction && t.mouseInteraction(...e), i(...e)
                    }, e.scrollCb = (...e) => {
                        t.scroll && t.scroll(...e), o(...e)
                    }, e.viewportResizeCb = (...e) => {
                        t.viewportResize && t.viewportResize(...e), s(...e)
                    }, e.inputCb = (...e) => {
                        t.input && t.input(...e), a(...e)
                    }, e.mediaInteractionCb = (...e) => {
                        t.mediaInteaction && t.mediaInteaction(...e), u(...e)
                    }, e.styleSheetRuleCb = (...e) => {
                        t.styleSheetRule && t.styleSheetRule(...e), c(...e)
                    }, e.styleDeclarationCb = (...e) => {
                        t.styleDeclaration && t.styleDeclaration(...e), l(...e)
                    }, e.canvasMutationCb = (...e) => {
                        t.canvasMutation && t.canvasMutation(...e), d(...e)
                    }, e.fontCb = (...e) => {
                        t.font && t.font(...e), f(...e)
                    }, e.selectionCb = (...e) => {
                        t.selection && t.selection(...e), h(...e)
                    }
                }(e, t), e.recordDOM && (n = e9(e, e.doc));
                let i = function ({
                        mousemoveCb: e,
                        sampling: t,
                        doc: n,
                        mirror: r
                    }) {
                        let i;
                        if (!1 === t.mousemove) return () => {};
                        let o = "number" == typeof t.mousemove ? t.mousemove : 50,
                            s = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                            a = [],
                            u = eL(eZ(t => {
                                let n = Date.now() - i;
                                e(a.map(e => (e.timeOffset -= n, e)), t), a = [], i = null
                            }), s),
                            c = eZ(eL(eZ(e => {
                                let t = e7(e),
                                    {
                                        clientX: n,
                                        clientY: o
                                    } = eB(e) ? e.changedTouches[0] : e;
                                i || (i = eq()), a.push({
                                    x: n,
                                    y: o,
                                    id: r.getId(t),
                                    timeOffset: eq() - i
                                }), u("undefined" != typeof DragEvent && e instanceof DragEvent ? eT.Drag : e instanceof MouseEvent ? eT.MouseMove : eT.TouchMove)
                            }), o, {
                                trailing: !1
                            })),
                            l = [eR("mousemove", c, n), eR("touchmove", c, n), eR("drag", c, n)];
                        return eZ(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    o = function ({
                        mouseInteractionCb: e,
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        let s = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            a = [],
                            u = null,
                            c = t => o => {
                                let s = e7(o);
                                if (eJ(s, r, i, !0)) return;
                                let a = null,
                                    c = t;
                                if ("pointerType" in o) {
                                    switch (o.pointerType) {
                                        case "mouse":
                                            a = eM.Mouse;
                                            break;
                                        case "touch":
                                            a = eM.Touch;
                                            break;
                                        case "pen":
                                            a = eM.Pen
                                    }
                                    a === eM.Touch ? e_[t] === e_.MouseDown ? c = "TouchStart" : e_[t] === e_.MouseUp && (c = "TouchEnd") : eM.Pen
                                } else eB(o) && (a = eM.Touch);
                                null !== a ? (u = a, (c.startsWith("Touch") && a === eM.Touch || c.startsWith("Mouse") && a === eM.Mouse) && (a = null)) : e_[t] === e_.Click && (a = u, u = null);
                                let l = eB(o) ? o.changedTouches[0] : o;
                                if (!l) return;
                                let d = n.getId(s),
                                    {
                                        clientX: f,
                                        clientY: h
                                    } = l;
                                eZ(e)(Object.assign({
                                    type: e_[c],
                                    id: d,
                                    x: f,
                                    y: h
                                }, null !== a && {
                                    pointerType: a
                                }))
                            };
                        return Object.keys(e_).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== s[e]).forEach(e => {
                            let n = ei(e),
                                r = c(e);
                            if (window.PointerEvent) switch (e_[e]) {
                                case e_.MouseDown:
                                case e_.MouseUp:
                                    n = n.replace("mouse", "pointer");
                                    break;
                                case e_.TouchStart:
                                case e_.TouchEnd:
                                    return
                            }
                            a.push(eR(n, r, t))
                        }), eZ(() => {
                            a.forEach(e => e())
                        })
                    }(e),
                    s = te(e),
                    a = function ({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let n = -1,
                            r = -1;
                        return eR("resize", eZ(eL(eZ(() => {
                            let t = eF(),
                                i = eG();
                            (n !== t || r !== i) && (e({
                                width: Number(i),
                                height: Number(t)
                            }), n = t, r = i)
                        }), 200)), t)
                    }(e, {
                        win: r
                    }),
                    u = function ({
                        inputCb: e,
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        ignoreClass: o,
                        ignoreSelector: s,
                        maskInputOptions: a,
                        maskInputFn: u,
                        sampling: c,
                        userTriggeredOnInput: l
                    }) {
                        function d(e) {
                            let n = e7(e),
                                c = e.isTrusted,
                                d = n && n.tagName;
                            if (n && "OPTION" === d && (n = n.parentElement), !n || !d || 0 > tn.indexOf(d) || eJ(n, r, i, !0) || n.classList.contains(o) || s && n.matches(s)) return;
                            let h = n.value,
                                p = !1,
                                v = es(n) || "";
                            "radio" === v || "checkbox" === v ? p = n.checked : (a[d.toLowerCase()] || a[v]) && (h = er({
                                element: n,
                                maskInputOptions: a,
                                tagName: d,
                                type: v,
                                value: h,
                                maskInputFn: u
                            })), f(n, eZ(tt)({
                                text: h,
                                isChecked: p,
                                userTriggered: c
                            }, l));
                            let g = n.name;
                            "radio" === v && g && p && t.querySelectorAll(`input[type="radio"][name="${g}"]`).forEach(e => {
                                e !== n && f(e, eZ(tt)({
                                    text: e.value,
                                    isChecked: !p,
                                    userTriggered: !1
                                }, l))
                            })
                        }

                        function f(t, r) {
                            let i = tr.get(t);
                            if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                                tr.set(t, r);
                                let i = n.getId(t);
                                eZ(e)(Object.assign(Object.assign({}, r), {
                                    id: i
                                }))
                            }
                        }
                        let h = ("last" === c.input ? ["change"] : ["input", "change"]).map(e => eR(e, eZ(d), t)),
                            p = t.defaultView;
                        if (!p) return () => {
                            h.forEach(e => e())
                        };
                        let v = p.Object.getOwnPropertyDescriptor(p.HTMLInputElement.prototype, "value"),
                            g = [
                                [p.HTMLInputElement.prototype, "value"],
                                [p.HTMLInputElement.prototype, "checked"],
                                [p.HTMLSelectElement.prototype, "value"],
                                [p.HTMLTextAreaElement.prototype, "value"],
                                [p.HTMLSelectElement.prototype, "selectedIndex"],
                                [p.HTMLOptionElement.prototype, "selected"]
                            ];
                        return v && v.set && h.push(...g.map(e => eA(e[0], e[1], {
                            set() {
                                eZ(d)({
                                    target: this,
                                    isTrusted: !1
                                })
                            }
                        }, !1, p))), eZ(() => {
                            h.forEach(e => e())
                        })
                    }(e),
                    c = function ({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: n,
                        mirror: r,
                        sampling: i,
                        doc: o
                    }) {
                        let s = eZ(o => eL(eZ(i => {
                                let s = e7(i);
                                if (!s || eJ(s, t, n, !0)) return;
                                let {
                                    currentTime: a,
                                    volume: u,
                                    muted: c,
                                    playbackRate: l
                                } = s;
                                e({
                                    type: o,
                                    id: r.getId(s),
                                    currentTime: a,
                                    volume: u,
                                    muted: c,
                                    playbackRate: l
                                })
                            }), i.media || 500)),
                            a = [eR("play", s(0), o), eR("pause", s(1), o), eR("seeked", s(2), o), eR("volumechange", s(3), o), eR("ratechange", s(4), o)];
                        return eZ(() => {
                            a.forEach(e => e())
                        })
                    }(e),
                    l = () => {},
                    d = () => {},
                    f = () => {},
                    h = () => {};
                e.recordDOM && (l = function ({
                    styleSheetRuleCb: e,
                    mirror: t,
                    stylesheetManager: n
                }, {
                    win: r
                }) {
                    let i, o;
                    if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
                    let s = r.CSSStyleSheet.prototype.insertRule;
                    r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
                        apply: eZ((r, i, o) => {
                            let [s, a] = o, {
                                id: u,
                                styleId: c
                            } = to(i, t, n.styleMirror);
                            return (u && -1 !== u || c && -1 !== c) && e({
                                id: u,
                                styleId: c,
                                adds: [{
                                    rule: s,
                                    index: a
                                }]
                            }), eY(() => r.apply(i, o))()
                        })
                    });
                    let a = r.CSSStyleSheet.prototype.deleteRule;
                    r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                        apply: eZ((r, i, o) => {
                            let [s] = o, {
                                id: a,
                                styleId: u
                            } = to(i, t, n.styleMirror);
                            return (a && -1 !== a || u && -1 !== u) && e({
                                id: a,
                                styleId: u,
                                removes: [{
                                    index: s
                                }]
                            }), eY(() => r.apply(i, o))()
                        })
                    }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                        apply: eZ((r, i, o) => {
                            let [s] = o, {
                                id: a,
                                styleId: u
                            } = to(i, t, n.styleMirror);
                            return (a && -1 !== a || u && -1 !== u) && e({
                                id: a,
                                styleId: u,
                                replace: s
                            }), r.apply(i, o)
                        })
                    })), r.CSSStyleSheet.prototype.replaceSync && (o = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(o, {
                        apply: eZ((r, i, o) => {
                            let [s] = o, {
                                id: a,
                                styleId: u
                            } = to(i, t, n.styleMirror);
                            return (a && -1 !== a || u && -1 !== u) && e({
                                id: a,
                                styleId: u,
                                replaceSync: s
                            }), r.apply(i, o)
                        })
                    }));
                    let u = {};
                    tc("CSSGroupingRule") ? u.CSSGroupingRule = r.CSSGroupingRule : (tc("CSSMediaRule") && (u.CSSMediaRule = r.CSSMediaRule), tc("CSSConditionRule") && (u.CSSConditionRule = r.CSSConditionRule), tc("CSSSupportsRule") && (u.CSSSupportsRule = r.CSSSupportsRule));
                    let c = {};
                    return Object.entries(u).forEach(([r, i]) => {
                        c[r] = {
                            insertRule: i.prototype.insertRule,
                            deleteRule: i.prototype.deleteRule
                        }, i.prototype.insertRule = new Proxy(c[r].insertRule, {
                            apply: eZ((r, i, o) => {
                                let [s, a] = o, {
                                    id: u,
                                    styleId: c
                                } = to(i.parentStyleSheet, t, n.styleMirror);
                                return (u && -1 !== u || c && -1 !== c) && e({
                                    id: u,
                                    styleId: c,
                                    adds: [{
                                        rule: s,
                                        index: [...ti(i), a || 0]
                                    }]
                                }), r.apply(i, o)
                            })
                        }), i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                            apply: eZ((r, i, o) => {
                                let [s] = o, {
                                    id: a,
                                    styleId: u
                                } = to(i.parentStyleSheet, t, n.styleMirror);
                                return (a && -1 !== a || u && -1 !== u) && e({
                                    id: a,
                                    styleId: u,
                                    removes: [{
                                        index: [...ti(i), s]
                                    }]
                                }), r.apply(i, o)
                            })
                        })
                    }), eZ(() => {
                        r.CSSStyleSheet.prototype.insertRule = s, r.CSSStyleSheet.prototype.deleteRule = a, i && (r.CSSStyleSheet.prototype.replace = i), o && (r.CSSStyleSheet.prototype.replaceSync = o), Object.entries(u).forEach(([e, t]) => {
                            t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                        })
                    })
                }(e, {
                    win: r
                }), d = ts(e, e.doc), f = function ({
                    styleDeclarationCb: e,
                    mirror: t,
                    ignoreCSSAttributes: n,
                    stylesheetManager: r
                }, {
                    win: i
                }) {
                    let o = i.CSSStyleDeclaration.prototype.setProperty;
                    i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                        apply: eZ((i, s, a) => {
                            var u;
                            let [c, l, d] = a;
                            if (n.has(c)) return o.apply(s, [c, l, d]);
                            let {
                                id: f,
                                styleId: h
                            } = to(null === (u = s.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet, t, r.styleMirror);
                            return (f && -1 !== f || h && -1 !== h) && e({
                                id: f,
                                styleId: h,
                                set: {
                                    property: c,
                                    value: l,
                                    priority: d
                                },
                                index: ti(s.parentRule)
                            }), i.apply(s, a)
                        })
                    });
                    let s = i.CSSStyleDeclaration.prototype.removeProperty;
                    return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                        apply: eZ((i, o, a) => {
                            var u;
                            let [c] = a;
                            if (n.has(c)) return s.apply(o, [c]);
                            let {
                                id: l,
                                styleId: d
                            } = to(null === (u = o.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet, t, r.styleMirror);
                            return (l && -1 !== l || d && -1 !== d) && e({
                                id: l,
                                styleId: d,
                                remove: {
                                    property: c
                                },
                                index: ti(o.parentRule)
                            }), i.apply(o, a)
                        })
                    }), eZ(() => {
                        i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s
                    })
                }(e, {
                    win: r
                }), e.collectFonts && (h = function ({
                    fontCb: e,
                    doc: t
                }) {
                    let n = t.defaultView;
                    if (!n) return () => {};
                    let r = [],
                        i = new WeakMap,
                        o = n.FontFace;
                    n.FontFace = function (e, t, n) {
                        let r = new o(e, t, n);
                        return i.set(r, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: n,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }), r
                    };
                    let s = eD(t.fonts, "add", function (t) {
                        return function (n) {
                            return setTimeout(eZ(() => {
                                let t = i.get(n);
                                t && (e(t), i.delete(n))
                            }), 0), t.apply(this, [n])
                        }
                    });
                    return r.push(() => {
                        n.FontFace = o
                    }), r.push(s), eZ(() => {
                        r.forEach(e => e())
                    })
                }(e)));
                let p = function (e) {
                        let {
                            doc: t,
                            mirror: n,
                            blockClass: r,
                            blockSelector: i,
                            selectionCb: o
                        } = e, s = !0, a = eZ(() => {
                            let e = t.getSelection();
                            if (!e || s && (null == e ? void 0 : e.isCollapsed)) return;
                            s = e.isCollapsed || !1;
                            let a = [],
                                u = e.rangeCount || 0;
                            for (let t = 0; t < u; t++) {
                                let {
                                    startContainer: o,
                                    startOffset: s,
                                    endContainer: u,
                                    endOffset: c
                                } = e.getRangeAt(t);
                                eJ(o, r, i, !0) || eJ(u, r, i, !0) || a.push({
                                    start: n.getId(o),
                                    startOffset: s,
                                    end: n.getId(u),
                                    endOffset: c
                                })
                            }
                            o({
                                ranges: a
                            })
                        });
                        return a(), eR("selectionchange", a)
                    }(e),
                    v = [];
                for (let t of e.plugins) v.push(t.observer(t.callback, r, t.options));
                return eZ(() => {
                    e6.forEach(e => e.reset()), null == n || n.disconnect(), i(), o(), s(), a(), u(), c(), l(), d(), f(), h(), p(), v.forEach(e => e())
                })
            }

            function tu(e) {
                return void 0 !== window[e]
            }

            function tc(e) {
                return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            for (var tl = (g = function () {
                    ! function () {
                        /*! *****************************************************************************
                            Copyright (c) Microsoft Corporation.

                            Permission to use, copy, modify, and/or distribute this software for any
                            purpose with or without fee is hereby granted.

                            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                            PERFORMANCE OF THIS SOFTWARE.
                            ***************************************************************************** */
                        function e(e, t, n, r) {
                            return new(n || (n = Promise))(function (i, o) {
                                function s(e) {
                                    try {
                                        u(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                        e(t)
                                    })).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            })
                        }
                        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
                        var i = function (e) {
                            var n, r = new Uint8Array(e),
                                i = r.length,
                                o = "";
                            for (n = 0; n < i; n += 3) o += t[r[n] >> 2] + t[(3 & r[n]) << 4 | r[n + 1] >> 4] + t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6] + t[63 & r[n + 2]];
                            return i % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                        };
                        let o = new Map,
                            s = new Map,
                            a = self;
                        a.onmessage = function (t) {
                            return e(this, void 0, void 0, function* () {
                                if (!("OffscreenCanvas" in globalThis)) return a.postMessage({
                                    id: t.data.id
                                }); {
                                    let {
                                        id: n,
                                        bitmap: r,
                                        width: u,
                                        height: c,
                                        dataURLOptions: l
                                    } = t.data, d = function (t, n, r) {
                                        return e(this, void 0, void 0, function* () {
                                            let e = `${t}-${n}`;
                                            if (!("OffscreenCanvas" in globalThis)) return ""; {
                                                if (s.has(e)) return s.get(e);
                                                let o = new OffscreenCanvas(t, n);
                                                o.getContext("2d");
                                                let a = yield o.convertToBlob(r), u = i((yield a.arrayBuffer()));
                                                return s.set(e, u), u
                                            }
                                        })
                                    }(u, c, l), f = new OffscreenCanvas(u, c);
                                    f.getContext("2d").drawImage(r, 0, 0), r.close();
                                    let h = yield f.convertToBlob(l), p = h.type, v = i((yield h.arrayBuffer()));
                                    if (!o.has(n) && (yield d) === v) return o.set(n, v), a.postMessage({
                                        id: n
                                    });
                                    if (o.get(n) === v) return a.postMessage({
                                        id: n
                                    });
                                    a.postMessage({
                                        id: n,
                                        type: p,
                                        base64: v,
                                        width: u,
                                        height: c
                                    }), o.set(n, v)
                                }
                            })
                        }
                    }()
                }, function (e) {
                    var t;
                    return new Worker(m = m || (t = new Blob(function (e, t) {
                        var n = e.toString().split("\n");
                        n.pop(), n.shift();
                        for (var r = n[0].search(/\S/), i = /(['"])__worker_loader_strict__(['"])/g, o = 0, s = n.length; o < s; ++o) n[o] = n[o].substring(r).replace(i, "$1use strict$2") + "\n";
                        return n
                    }(g, null), {
                        type: "application/javascript"
                    }), URL.createObjectURL(t)), e)
                }), td = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tf = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), th = 0; th < td.length; th++) tf[td.charCodeAt(th)] = th;
            var tp = function (e) {
                var t, n = new Uint8Array(e),
                    r = n.length,
                    i = "";
                for (t = 0; t < r; t += 3) i += td[n[t] >> 2] + td[(3 & n[t]) << 4 | n[t + 1] >> 4] + td[(15 & n[t + 1]) << 2 | n[t + 2] >> 6] + td[63 & n[t + 2]];
                return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            };
            let tv = new Map,
                tg = (e, t, n) => {
                    let r;
                    if (!e || !(ty(e, t) || "object" == typeof e)) return;
                    let i = e.constructor.name,
                        o = ((r = tv.get(n)) || (r = new Map, tv.set(n, r)), r.has(i) || r.set(i, []), r.get(i)),
                        s = o.indexOf(e);
                    return -1 === s && (s = o.length, o.push(e)), s
                },
                tm = (e, t, n) => [...e].map(e => (function e(t, n, r) {
                    if (t instanceof Array) return t.map(t => e(t, n, r));
                    if (null === t);
                    else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                        rr_type: t.constructor.name,
                        args: [Object.values(t)]
                    };
                    else if (t instanceof ArrayBuffer) return {
                        rr_type: t.constructor.name,
                        base64: tp(t)
                    };
                    else if (t instanceof DataView) return {
                        rr_type: t.constructor.name,
                        args: [e(t.buffer, n, r), t.byteOffset, t.byteLength]
                    };
                    else if (t instanceof HTMLImageElement) {
                        let e = t.constructor.name,
                            {
                                src: n
                            } = t;
                        return {
                            rr_type: e,
                            src: n
                        }
                    } else if (t instanceof HTMLCanvasElement) return {
                        rr_type: "HTMLImageElement",
                        src: t.toDataURL()
                    };
                    else if (t instanceof ImageData) return {
                        rr_type: t.constructor.name,
                        args: [e(t.data, n, r), t.width, t.height]
                    };
                    else if (ty(t, n) || "object" == typeof t) return {
                        rr_type: t.constructor.name,
                        index: tg(t, n, r)
                    };
                    return t
                })(e, t, n)),
                ty = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(n => e instanceof t[n]);

            function tb(e, t, n, r) {
                let i = [];
                try {
                    let o = eD(e.HTMLCanvasElement.prototype, "getContext", function (e) {
                        return function (i, ...o) {
                            if (!eJ(this, t, n, !0)) {
                                let e = "experimental-webgl" === i ? "webgl" : i;
                                if ("__context" in this || (this.__context = e), r && ["webgl", "webgl2"].includes(e)) {
                                    if (o[0] && "object" == typeof o[0]) {
                                        let e = o[0];
                                        e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                                    } else o.splice(0, 1, {
                                        preserveDrawingBuffer: !0
                                    })
                                }
                            }
                            return e.apply(this, [i, ...o])
                        }
                    });
                    i.push(o)
                } catch (e) {
                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                }
                return () => {
                    i.forEach(e => e())
                }
            }

            function tS(e, t, n, r, i, o, s) {
                let a = [];
                for (let o of Object.getOwnPropertyNames(e))
                    if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(o)) try {
                        if ("function" != typeof e[o]) continue;
                        let u = eD(e, o, function (e) {
                            return function (...a) {
                                let u = e.apply(this, a);
                                if (tg(u, s, this), "tagName" in this.canvas && !eJ(this.canvas, r, i, !0)) {
                                    let e = tm([...a], s, this),
                                        r = {
                                            type: t,
                                            property: o,
                                            args: e
                                        };
                                    n(this.canvas, r)
                                }
                                return u
                            }
                        });
                        a.push(u)
                    } catch (i) {
                        let r = eA(e, o, {
                            set(e) {
                                n(this.canvas, {
                                    type: t,
                                    property: o,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        a.push(r)
                    }
                return a
            }
            class tw {
                reset() {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                constructor(e) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = (e, t) => {
                        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                    };
                    let {
                        sampling: t = "all",
                        win: n,
                        blockClass: r,
                        blockSelector: i,
                        recordCanvas: o,
                        dataURLOptions: s
                    } = e;
                    this.mutationCb = e.mutationCb, this.mirror = e.mirror, o && "all" === t && this.initCanvasMutationObserver(n, r, i), o && "number" == typeof t && this.initCanvasFPSObserver(t, n, r, i, {
                        dataURLOptions: s
                    })
                }
                initCanvasFPSObserver(e, t, n, r, i) {
                    let o;
                    let s = tb(t, n, r, !0),
                        a = new Map,
                        u = new tl;
                    u.onmessage = e => {
                        let {
                            id: t
                        } = e.data;
                        if (a.set(t, !1), !("base64" in e.data)) return;
                        let {
                            base64: n,
                            type: r,
                            width: i,
                            height: o
                        } = e.data;
                        this.mutationCb({
                            id: t,
                            type: ex["2D"],
                            commands: [{
                                property: "clearRect",
                                args: [0, 0, i, o]
                            }, {
                                property: "drawImage",
                                args: [{
                                    rr_type: "ImageBitmap",
                                    args: [{
                                        rr_type: "Blob",
                                        data: [{
                                            rr_type: "ArrayBuffer",
                                            base64: n
                                        }],
                                        type: r
                                    }]
                                }, 0, 0]
                            }]
                        })
                    };
                    let c = 1e3 / e,
                        l = 0,
                        d = () => {
                            let e = [];
                            return t.document.querySelectorAll("canvas").forEach(t => {
                                eJ(t, n, r, !0) || e.push(t)
                            }), e
                        },
                        f = e => {
                            if (l && e - l < c) {
                                o = requestAnimationFrame(f);
                                return
                            }
                            l = e, d().forEach(e => {
                                var t, n, r, o;
                                return t = this, n = void 0, r = void 0, o = function* () {
                                    var t;
                                    let n = this.mirror.getId(e);
                                    if (a.get(n)) return;
                                    if (a.set(n, !0), ["webgl", "webgl2"].includes(e.__context)) {
                                        let n = e.getContext(e.__context);
                                        (null === (t = null == n ? void 0 : n.getContextAttributes()) || void 0 === t ? void 0 : t.preserveDrawingBuffer) === !1 && n.clear(n.COLOR_BUFFER_BIT)
                                    }
                                    let r = yield createImageBitmap(e);
                                    u.postMessage({
                                        id: n,
                                        bitmap: r,
                                        width: e.width,
                                        height: e.height,
                                        dataURLOptions: i.dataURLOptions
                                    }, [r])
                                }, new(r || (r = Promise))(function (e, i) {
                                    function s(e) {
                                        try {
                                            u(o.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function a(e) {
                                        try {
                                            u(o.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function u(t) {
                                        var n;
                                        t.done ? e(t.value) : ((n = t.value) instanceof r ? n : new r(function (e) {
                                            e(n)
                                        })).then(s, a)
                                    }
                                    u((o = o.apply(t, n || [])).next())
                                })
                            }), o = requestAnimationFrame(f)
                        };
                    o = requestAnimationFrame(f), this.resetObservers = () => {
                        s(), cancelAnimationFrame(o)
                    }
                }
                initCanvasMutationObserver(e, t, n) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    let r = tb(e, t, n, !1),
                        i = function (e, t, n, r) {
                            let i = [];
                            for (let o of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)) try {
                                if ("function" != typeof t.CanvasRenderingContext2D.prototype[o]) continue;
                                let s = eD(t.CanvasRenderingContext2D.prototype, o, function (i) {
                                    return function (...s) {
                                        return eJ(this.canvas, n, r, !0) || setTimeout(() => {
                                            let n = tm([...s], t, this);
                                            e(this.canvas, {
                                                type: ex["2D"],
                                                property: o,
                                                args: n
                                            })
                                        }, 0), i.apply(this, s)
                                    }
                                });
                                i.push(s)
                            } catch (r) {
                                let n = eA(t.CanvasRenderingContext2D.prototype, o, {
                                    set(t) {
                                        e(this.canvas, {
                                            type: ex["2D"],
                                            property: o,
                                            args: [t],
                                            setter: !0
                                        })
                                    }
                                });
                                i.push(n)
                            }
                            return () => {
                                i.forEach(e => e())
                            }
                        }(this.processMutation.bind(this), e, t, n),
                        o = function (e, t, n, r, i) {
                            let o = [];
                            return o.push(...tS(t.WebGLRenderingContext.prototype, ex.WebGL, e, n, r, i, t)), void 0 !== t.WebGL2RenderingContext && o.push(...tS(t.WebGL2RenderingContext.prototype, ex.WebGL2, e, n, r, i, t)), () => {
                                o.forEach(e => e())
                            }
                        }(this.processMutation.bind(this), e, t, n, this.mirror);
                    this.resetObservers = () => {
                        r(), i(), o()
                    }
                }
                startPendingCanvasMutationFlusher() {
                    requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                startRAFTimestamping() {
                    let e = t => {
                        this.rafStamps.latestId = t, requestAnimationFrame(e)
                    };
                    requestAnimationFrame(e)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach((e, t) => {
                        let n = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, n)
                    }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                flushPendingCanvasMutationFor(e, t) {
                    if (this.frozen || this.locked) return;
                    let n = this.pendingCanvasMutations.get(e);
                    if (!n || -1 === t) return;
                    let r = n.map(e =>
                            /*! *****************************************************************************
                            Copyright (c) Microsoft Corporation.

                            Permission to use, copy, modify, and/or distribute this software for any
                            purpose with or without fee is hereby granted.

                            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                            PERFORMANCE OF THIS SOFTWARE.
                            ***************************************************************************** */
                            (function (e, t) {
                                var n = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                                return n
                            })(e, ["type"])),
                        {
                            type: i
                        } = n[0];
                    this.mutationCb({
                        id: t,
                        type: i,
                        commands: r
                    }), this.pendingCanvasMutations.delete(e)
                }
            }
            class tI {
                constructor() {
                    this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
                }
                periodicallyClear() {
                    requestAnimationFrame(() => {
                        this.clear(), this.loop && this.periodicallyClear()
                    })
                }
                inOtherBuffer(e, t) {
                    let n = this.nodeMap.get(e);
                    return n && Array.from(n).some(e => e !== t)
                }
                add(e, t) {
                    this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                clear() {
                    this.nodeMap = new WeakMap
                }
                destroy() {
                    this.loop = !1
                }
            }
            class tE {
                constructor(e) {
                    this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!Q(e) || this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e);
                    let n = e9(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), e);
                    this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(te(Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    }))), setTimeout(() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(ts({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }, 0)
                }
                observeAttachShadow(e) {
                    e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                }
                patchAttachShadow(e, t) {
                    let n = this;
                    this.restoreHandlers.push(eD(e.prototype, "attachShadow", function (e) {
                        return function (r) {
                            let i = e.call(this, r);
                            return this.shadowRoot && eX(this) && n.addShadowRoot(this.shadowRoot, t), i
                        }
                    }))
                }
                reset() {
                    this.restoreHandlers.forEach(e => {
                        try {
                            e()
                        } catch (e) {}
                    }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
                }
            }
            class tC {
                constructor(e) {
                    this.trackedLinkElements = new WeakSet, this.styleMirror = new eH, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    let n = {
                            id: t,
                            styleIds: []
                        },
                        r = [];
                    for (let t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, (e, t) => ({
                                rule: et(e),
                                index: t
                            }))
                        })), n.styleIds.push(e)
                    }
                    r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }

            function tk(e) {
                return Object.assign(Object.assign({}, e), {
                    timestamp: eq()
                })
            }
            let tT = !1,
                t_ = new en;

            function tM(e = {}) {
                let t;
                let {
                    emit: n,
                    checkoutEveryNms: r,
                    checkoutEveryNth: i,
                    blockClass: c = "rr-block",
                    blockSelector: l = null,
                    ignoreClass: d = "rr-ignore",
                    ignoreSelector: f = null,
                    maskTextClass: h = "rr-mask",
                    maskTextSelector: p = null,
                    inlineStylesheet: v = !0,
                    maskAllInputs: g,
                    maskInputOptions: m,
                    slimDOMOptions: y,
                    maskInputFn: b,
                    maskTextFn: S,
                    hooks: w,
                    packFn: I,
                    sampling: E = {},
                    dataURLOptions: C = {},
                    mousemoveWait: k,
                    recordDOM: T = !0,
                    recordCanvas: _ = !1,
                    recordCrossOriginIframes: M = !1,
                    recordAfter: x = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
                    userTriggeredOnInput: O = !1,
                    collectFonts: R = !1,
                    inlineImages: N = !1,
                    plugins: P,
                    keepIframeSrcFn: L = () => !1,
                    ignoreCSSAttributes: A = new Set([]),
                    errorHandler: D
                } = e;
                o = D;
                let q = !M || window.parent === window,
                    j = !1;
                if (!q) try {
                    window.parent.document && (j = !1)
                } catch (e) {
                    j = !0
                }
                if (q && !n) throw Error("emit function is required");
                void 0 !== k && void 0 === E.mousemove && (E.mousemove = k), t_.reset();
                let F = !0 === g ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0
                    } : void 0 !== m ? m : {
                        password: !0
                    },
                    G = !0 === y || "all" === y ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === y,
                        headMetaDescKeywords: "all" === y
                    } : y || {};
                ! function (e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                        let t = e[0];
                        if (!(0 in e)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let U = 0,
                    J = e => {
                        for (let t of P || []) t.eventProcessor && (e = t.eventProcessor(e));
                        return I && !j && (e = I(e)), e
                    };
                s = (e, o) => {
                    var s;
                    if ((null === (s = e6[0]) || void 0 === s ? void 0 : s.isFrozen()) && e.type !== ek.FullSnapshot && !(e.type === ek.IncrementalSnapshot && e.data.source === eT.Mutation) && e6.forEach(e => e.unfreeze()), q) null == n || n(J(e), o);
                    else if (j) {
                        let t = {
                            type: "rrweb",
                            event: J(e),
                            origin: window.location.origin,
                            isCheckout: o
                        };
                        window.parent.postMessage(t, "*")
                    }
                    if (e.type === ek.FullSnapshot) t = e, U = 0;
                    else if (e.type === ek.IncrementalSnapshot) {
                        if (e.data.source === eT.Mutation && e.data.isAttachIframe) return;
                        U++;
                        let n = i && U >= i,
                            o = r && e.timestamp - t.timestamp > r;
                        (n || o) && a(!0)
                    }
                };
                let z = e => {
                        s(tk({
                            type: ek.IncrementalSnapshot,
                            data: Object.assign({
                                source: eT.Mutation
                            }, e)
                        }))
                    },
                    B = e => s(tk({
                        type: ek.IncrementalSnapshot,
                        data: Object.assign({
                            source: eT.Scroll
                        }, e)
                    })),
                    W = e => s(tk({
                        type: ek.IncrementalSnapshot,
                        data: Object.assign({
                            source: eT.CanvasMutation
                        }, e)
                    })),
                    V = new tC({
                        mutationCb: z,
                        adoptedStyleSheetCb: e => s(tk({
                            type: ek.IncrementalSnapshot,
                            data: Object.assign({
                                source: eT.AdoptedStyleSheet
                            }, e)
                        }))
                    }),
                    K = new e0({
                        mirror: t_,
                        mutationCb: z,
                        stylesheetManager: V,
                        recordCrossOriginIframes: M,
                        wrappedEmit: s
                    });
                for (let e of P || []) e.getMirror && e.getMirror({
                    nodeMirror: t_,
                    crossOriginIframeMirror: K.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: K.crossOriginIframeStyleMirror
                });
                let H = new tI;
                u = new tw({
                    recordCanvas: _,
                    mutationCb: W,
                    win: window,
                    blockClass: c,
                    blockSelector: l,
                    mirror: t_,
                    sampling: E.canvas,
                    dataURLOptions: C
                });
                let $ = new tE({
                    mutationCb: z,
                    scrollCb: B,
                    bypassOptions: {
                        blockClass: c,
                        blockSelector: l,
                        maskTextClass: h,
                        maskTextSelector: p,
                        inlineStylesheet: v,
                        maskInputOptions: F,
                        dataURLOptions: C,
                        maskTextFn: S,
                        maskInputFn: b,
                        recordCanvas: _,
                        inlineImages: N,
                        sampling: E,
                        slimDOMOptions: G,
                        iframeManager: K,
                        stylesheetManager: V,
                        canvasManager: u,
                        keepIframeSrcFn: L,
                        processedNodeManager: H
                    },
                    mirror: t_
                });
                a = (e = !1) => {
                    if (!T) return;
                    s(tk({
                        type: ek.Meta,
                        data: {
                            href: window.location.href,
                            width: eG(),
                            height: eF()
                        }
                    }), e), V.reset(), $.init(), e6.forEach(e => e.lock());
                    let t = function (e, t) {
                        let {
                            mirror: n = new en,
                            blockClass: r = "rr-block",
                            blockSelector: i = null,
                            maskTextClass: o = "rr-mask",
                            maskTextSelector: s = null,
                            inlineStylesheet: a = !0,
                            inlineImages: u = !1,
                            recordCanvas: c = !1,
                            maskAllInputs: l = !1,
                            maskTextFn: d,
                            maskInputFn: f,
                            slimDOM: h = !1,
                            dataURLOptions: p,
                            preserveWhiteSpace: v,
                            onSerialize: g,
                            onIframeLoad: m,
                            iframeLoadTimeout: y,
                            onStylesheetLoad: b,
                            stylesheetLoadTimeout: S,
                            keepIframeSrcFn: w = () => !1
                        } = t || {};
                        return eC(e, {
                            doc: e,
                            mirror: n,
                            blockClass: r,
                            blockSelector: i,
                            maskTextClass: o,
                            maskTextSelector: s,
                            skipChild: !1,
                            inlineStylesheet: a,
                            maskInputOptions: !0 === l ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0,
                                password: !0
                            } : !1 === l ? {
                                password: !0
                            } : l,
                            maskTextFn: d,
                            maskInputFn: f,
                            slimDOMOptions: !0 === h || "all" === h ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === h,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === h ? {} : h,
                            dataURLOptions: p,
                            inlineImages: u,
                            recordCanvas: c,
                            preserveWhiteSpace: v,
                            onSerialize: g,
                            onIframeLoad: m,
                            iframeLoadTimeout: y,
                            onStylesheetLoad: b,
                            stylesheetLoadTimeout: S,
                            keepIframeSrcFn: w,
                            newlyAddedElement: !1
                        })
                    }(document, {
                        mirror: t_,
                        blockClass: c,
                        blockSelector: l,
                        maskTextClass: h,
                        maskTextSelector: p,
                        inlineStylesheet: v,
                        maskAllInputs: F,
                        maskTextFn: S,
                        maskInputFn: b,
                        slimDOM: G,
                        dataURLOptions: C,
                        recordCanvas: _,
                        inlineImages: N,
                        onSerialize: e => {
                            eW(e, t_) && K.addIframe(e), eV(e, t_) && V.trackLinkElement(e), eK(e) && $.addShadowRoot(e.shadowRoot, document)
                        },
                        onIframeLoad: (e, t) => {
                            K.attachIframe(e, t), $.observeAttachShadow(e)
                        },
                        onStylesheetLoad: (e, t) => {
                            V.attachLinkElement(e, t)
                        },
                        keepIframeSrcFn: L
                    });
                    if (!t) return console.warn("Failed to snapshot the document");
                    s(tk({
                        type: ek.FullSnapshot,
                        data: {
                            node: t,
                            initialOffset: ej(window)
                        }
                    }), e), e6.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && V.adoptStyleSheets(document.adoptedStyleSheets, t_.getId(document))
                };
                try {
                    let e = [],
                        t = e => {
                            var t;
                            return eZ(ta)({
                                mutationCb: z,
                                mousemoveCb: (e, t) => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: {
                                        source: t,
                                        positions: e
                                    }
                                })),
                                mouseInteractionCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.MouseInteraction
                                    }, e)
                                })),
                                scrollCb: B,
                                viewportResizeCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.ViewportResize
                                    }, e)
                                })),
                                inputCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.Input
                                    }, e)
                                })),
                                mediaInteractionCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.MediaInteraction
                                    }, e)
                                })),
                                styleSheetRuleCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.StyleSheetRule
                                    }, e)
                                })),
                                styleDeclarationCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.StyleDeclaration
                                    }, e)
                                })),
                                canvasMutationCb: W,
                                fontCb: e => s(tk({
                                    type: ek.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: eT.Font
                                    }, e)
                                })),
                                selectionCb: e => {
                                    s(tk({
                                        type: ek.IncrementalSnapshot,
                                        data: Object.assign({
                                            source: eT.Selection
                                        }, e)
                                    }))
                                },
                                blockClass: c,
                                ignoreClass: d,
                                ignoreSelector: f,
                                maskTextClass: h,
                                maskTextSelector: p,
                                maskInputOptions: F,
                                inlineStylesheet: v,
                                sampling: E,
                                recordDOM: T,
                                recordCanvas: _,
                                inlineImages: N,
                                userTriggeredOnInput: O,
                                collectFonts: R,
                                doc: e,
                                maskInputFn: b,
                                maskTextFn: S,
                                keepIframeSrcFn: L,
                                blockSelector: l,
                                slimDOMOptions: G,
                                dataURLOptions: C,
                                mirror: t_,
                                iframeManager: K,
                                stylesheetManager: V,
                                shadowDomManager: $,
                                processedNodeManager: H,
                                canvasManager: u,
                                ignoreCSSAttributes: A,
                                plugins: (null === (t = null == P ? void 0 : P.filter(e => e.observer)) || void 0 === t ? void 0 : t.map(e => ({
                                    observer: e.observer,
                                    options: e.options,
                                    callback: t => s(tk({
                                        type: ek.Plugin,
                                        data: {
                                            plugin: e.name,
                                            payload: t
                                        }
                                    }))
                                }))) || []
                            }, w)
                        };
                    K.addLoadListener(n => {
                        try {
                            e.push(t(n.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    });
                    let n = () => {
                        a(), e.push(t(document)), tT = !0
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(eR("DOMContentLoaded", () => {
                        s(tk({
                            type: ek.DomContentLoaded,
                            data: {}
                        })), "DOMContentLoaded" === x && n()
                    })), e.push(eR("load", () => {
                        s(tk({
                            type: ek.Load,
                            data: {}
                        })), "load" === x && n()
                    }, window))), () => {
                        e.forEach(e => e()), H.destroy(), tT = !1, o = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
            tM.addCustomEvent = (e, t) => {
                if (!tT) throw Error("please add custom event after start recording");
                s(tk({
                    type: ek.Custom,
                    data: {
                        tag: e,
                        payload: t
                    }
                }))
            }, tM.freezePage = () => {
                e6.forEach(e => e.freeze())
            }, tM.takeFullSnapshot = e => {
                if (!tT) throw Error("please take full snapshot after start recording");
                a(e)
            }, tM.mirror = t_;
            var tx = Uint8Array,
                tO = Uint16Array,
                tR = Uint32Array,
                tN = new tx([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                tP = new tx([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                tL = new tx([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                tA = function (e, t) {
                    for (var n = new tO(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
                    for (var i = new tR(n[30]), r = 1; r < 30; ++r)
                        for (var o = n[r]; o < n[r + 1]; ++o) i[o] = o - n[r] << 5 | r;
                    return [n, i]
                },
                tD = tA(tN, 2),
                tq = tD[0],
                tj = tD[1];
            tq[28] = 258, tj[258] = 28;
            for (var tF = tA(tP, 0), tG = (tF[0], tF[1]), tU = new tO(32768), tJ = 0; tJ < 32768; ++tJ) {
                var tz = (43690 & tJ) >>> 1 | (21845 & tJ) << 1;
                tz = (61680 & (tz = (52428 & tz) >>> 2 | (13107 & tz) << 2)) >>> 4 | (3855 & tz) << 4, tU[tJ] = ((65280 & tz) >>> 8 | (255 & tz) << 8) >>> 1
            }
            for (var tB = function (e, t, n) {
                    for (var r, i = e.length, o = 0, s = new tO(t); o < i; ++o) ++s[e[o] - 1];
                    var a = new tO(t);
                    for (o = 0; o < t; ++o) a[o] = a[o - 1] + s[o - 1] << 1;
                    if (n) {
                        r = new tO(1 << t);
                        var u = 15 - t;
                        for (o = 0; o < i; ++o)
                            if (e[o])
                                for (var c = o << 4 | e[o], l = t - e[o], d = a[e[o] - 1]++ << l, f = d | (1 << l) - 1; d <= f; ++d) r[tU[d] >>> u] = c
                    } else
                        for (o = 0, r = new tO(i); o < i; ++o) r[o] = tU[a[e[o] - 1]++] >>> 15 - e[o];
                    return r
                }, tW = new tx(288), tJ = 0; tJ < 144; ++tJ) tW[tJ] = 8;
            for (var tJ = 144; tJ < 256; ++tJ) tW[tJ] = 9;
            for (var tJ = 256; tJ < 280; ++tJ) tW[tJ] = 7;
            for (var tJ = 280; tJ < 288; ++tJ) tW[tJ] = 8;
            for (var tV = new tx(32), tJ = 0; tJ < 32; ++tJ) tV[tJ] = 5;
            var tK = tB(tW, 9, 0),
                tH = tB(tV, 5, 0),
                t$ = function (e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                tX = function (e, t, n) {
                    (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
                    var r = new(e instanceof tO ? tO : e instanceof tR ? tR : tx)(n - t);
                    return r.set(e.subarray(t, n)), r
                },
                tZ = function (e, t, n) {
                    n <<= 7 & t;
                    var r = t / 8 >> 0;
                    e[r] |= n, e[r + 1] |= n >>> 8
                },
                tY = function (e, t, n) {
                    n <<= 7 & t;
                    var r = t / 8 >> 0;
                    e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16
                },
                tQ = function (e, t) {
                    for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
                        s: r,
                        f: e[r]
                    });
                    var i = n.length,
                        o = n.slice();
                    if (!i) return [new tx(0), 0];
                    if (1 == i) {
                        var s = new tx(n[0].s + 1);
                        return s[n[0].s] = 1, [s, 1]
                    }
                    n.sort(function (e, t) {
                        return e.f - t.f
                    }), n.push({
                        s: -1,
                        f: 25001
                    });
                    var a = n[0],
                        u = n[1],
                        c = 0,
                        l = 1,
                        d = 2;
                    for (n[0] = {
                            s: -1,
                            f: a.f + u.f,
                            l: a,
                            r: u
                        }; l != i - 1;) a = n[n[c].f < n[d].f ? c++ : d++], u = n[c != l && n[c].f < n[d].f ? c++ : d++], n[l++] = {
                        s: -1,
                        f: a.f + u.f,
                        l: a,
                        r: u
                    };
                    for (var f = o[0].s, r = 1; r < i; ++r) o[r].s > f && (f = o[r].s);
                    var h = new tO(f + 1),
                        p = t0(n[l - 1], h, 0);
                    if (p > t) {
                        var r = 0,
                            v = 0,
                            g = p - t,
                            m = 1 << g;
                        for (o.sort(function (e, t) {
                                return h[t.s] - h[e.s] || e.f - t.f
                            }); r < i; ++r) {
                            var y = o[r].s;
                            if (h[y] > t) v += m - (1 << p - h[y]), h[y] = t;
                            else break
                        }
                        for (v >>>= g; v > 0;) {
                            var b = o[r].s;
                            h[b] < t ? v -= 1 << t - h[b]++ - 1 : ++r
                        }
                        for (; r >= 0 && v; --r) {
                            var S = o[r].s;
                            h[S] == t && (--h[S], ++v)
                        }
                        p = t
                    }
                    return [new tx(h), p]
                },
                t0 = function (e, t, n) {
                    return -1 == e.s ? Math.max(t0(e.l, t, n + 1), t0(e.r, t, n + 1)) : t[e.s] = n
                },
                t1 = function (e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var n = new tO(++t), r = 0, i = e[0], o = 1, s = function (e) {
                            n[r++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == i && a != t) ++o;
                        else {
                            if (!i && o > 2) {
                                for (; o > 138; o -= 138) s(32754);
                                o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
                            } else if (o > 3) {
                                for (s(i), --o; o > 6; o -= 6) s(8304);
                                o > 2 && (s(o - 3 << 5 | 8208), o = 0)
                            }
                            for (; o--;) s(i);
                            o = 1, i = e[a]
                        } return [n.subarray(0, r), t]
                },
                t2 = function (e, t) {
                    for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
                    return n
                },
                t3 = function (e, t, n) {
                    var r = n.length,
                        i = t$(t + 2);
                    e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
                    for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
                    return (i + 4 + r) * 8
                },
                t4 = function (e, t, n, r, i, o, s, a, u, c, l) {
                    tZ(t, l++, n), ++i[256];
                    for (var d, f, h, p, v = tQ(i, 15), g = v[0], m = v[1], y = tQ(o, 15), b = y[0], S = y[1], w = t1(g), I = w[0], E = w[1], C = t1(b), k = C[0], T = C[1], _ = new tO(19), M = 0; M < I.length; ++M) _[31 & I[M]]++;
                    for (var M = 0; M < k.length; ++M) _[31 & k[M]]++;
                    for (var x = tQ(_, 7), O = x[0], R = x[1], N = 19; N > 4 && !O[tL[N - 1]]; --N);
                    var P = c + 5 << 3,
                        L = t2(i, tW) + t2(o, tV) + s,
                        A = t2(i, g) + t2(o, b) + s + 14 + 3 * N + t2(_, O) + (2 * _[16] + 3 * _[17] + 7 * _[18]);
                    if (P <= L && P <= A) return t3(t, l, e.subarray(u, u + c));
                    if (tZ(t, l, 1 + (A < L)), l += 2, A < L) {
                        d = tB(g, m, 0), f = g, h = tB(b, S, 0), p = b;
                        var D = tB(O, R, 0);
                        tZ(t, l, E - 257), tZ(t, l + 5, T - 1), tZ(t, l + 10, N - 4), l += 14;
                        for (var M = 0; M < N; ++M) tZ(t, l + 3 * M, O[tL[M]]);
                        l += 3 * N;
                        for (var q = [I, k], j = 0; j < 2; ++j)
                            for (var F = q[j], M = 0; M < F.length; ++M) {
                                var G = 31 & F[M];
                                tZ(t, l, D[G]), l += O[G], G > 15 && (tZ(t, l, F[M] >>> 5 & 127), l += F[M] >>> 12)
                            }
                    } else d = tK, f = tW, h = tH, p = tV;
                    for (var M = 0; M < a; ++M)
                        if (r[M] > 255) {
                            var G = r[M] >>> 18 & 31;
                            tY(t, l, d[G + 257]), l += f[G + 257], G > 7 && (tZ(t, l, r[M] >>> 23 & 31), l += tN[G]);
                            var U = 31 & r[M];
                            tY(t, l, h[U]), l += p[U], U > 3 && (tY(t, l, r[M] >>> 5 & 8191), l += tP[U])
                        } else tY(t, l, d[r[M]]), l += f[r[M]];
                    return tY(t, l, d[256]), l + f[256]
                },
                t5 = new tR([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                t8 = new tx(0),
                t6 = function (e, t, n, r, i, o) {
                    var s = e.length,
                        a = new tx(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
                        u = a.subarray(r, a.length - i),
                        c = 0;
                    if (!t || s < 8)
                        for (var l = 0; l <= s; l += 65535) {
                            var d = l + 65535;
                            d < s ? c = t3(u, c, e.subarray(l, d)) : (u[l] = o, c = t3(u, c, e.subarray(l, s)))
                        } else {
                            for (var f = t5[t - 1], h = f >>> 13, p = 8191 & f, v = (1 << n) - 1, g = new tO(32768), m = new tO(v + 1), y = Math.ceil(n / 3), b = 2 * y, S = function (t) {
                                    return (e[t] ^ e[t + 1] << y ^ e[t + 2] << b) & v
                                }, w = new tR(25e3), I = new tO(288), E = new tO(32), C = 0, k = 0, l = 0, T = 0, _ = 0, M = 0; l < s; ++l) {
                                var x = S(l),
                                    O = 32767 & l,
                                    R = m[x];
                                if (g[O] = R, m[x] = O, _ <= l) {
                                    var N = s - l;
                                    if ((C > 7e3 || T > 24576) && N > 423) {
                                        c = t4(e, u, 0, w, I, E, k, T, M, l - M, c), T = C = k = 0, M = l;
                                        for (var P = 0; P < 286; ++P) I[P] = 0;
                                        for (var P = 0; P < 30; ++P) E[P] = 0
                                    }
                                    var L = 2,
                                        A = 0,
                                        D = p,
                                        q = O - R & 32767;
                                    if (N > 2 && x == S(l - q))
                                        for (var j = Math.min(h, N) - 1, F = Math.min(32767, l), G = Math.min(258, N); q <= F && --D && O != R;) {
                                            if (e[l + L] == e[l + L - q]) {
                                                for (var U = 0; U < G && e[l + U] == e[l + U - q]; ++U);
                                                if (U > L) {
                                                    if (L = U, A = q, U > j) break;
                                                    for (var J = Math.min(q, U - 2), z = 0, P = 0; P < J; ++P) {
                                                        var B = l - q + P + 32768 & 32767,
                                                            W = g[B],
                                                            V = B - W + 32768 & 32767;
                                                        V > z && (z = V, R = B)
                                                    }
                                                }
                                            }
                                            R = g[O = R], q += O - R + 32768 & 32767
                                        }
                                    if (A) {
                                        w[T++] = 268435456 | tj[L] << 18 | tG[A];
                                        var K = 31 & tj[L],
                                            H = 31 & tG[A];
                                        k += tN[K] + tP[H], ++I[257 + K], ++E[H], _ = l + L, ++C
                                    } else w[T++] = e[l], ++I[e[l]]
                                }
                            }
                            c = t4(e, u, o, w, I, E, k, T, M, l - M, c), o || (c = t3(u, c, t8))
                        }
                    return tX(a, 0, r + t$(c) + i)
                },
                t7 = function () {
                    var e = 1,
                        t = 0;
                    return {
                        p: function (n) {
                            for (var r = e, i = t, o = n.length, s = 0; s != o;) {
                                for (var a = Math.min(s + 5552, o); s < a; ++s) r += n[s], i += r;
                                r %= 65521, i %= 65521
                            }
                            e = r, t = i
                        },
                        d: function () {
                            return (e >>> 8 << 16 | (255 & t) << 8 | t >>> 8) + ((255 & e) << 23) * 2
                        }
                    }
                },
                t9 = function (e, t, n) {
                    for (; n; ++t) e[t] = n, n >>>= 8
                },
                ne = function (e, t) {
                    var n = t.level,
                        r = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
                    e[0] = 120, e[1] = r << 6 | (r ? 32 - 2 * r : 1)
                };
            let nt = e => {
                var t, n, r, i, o;
                return function (e, t) {
                    var n = "";
                    if (!t && "undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
                    for (var r = 0; r < e.length;) {
                        var i = e[r++];
                        i < 128 || t ? n += String.fromCharCode(i) : i < 224 ? n += String.fromCharCode((31 & i) << 6 | 63 & e[r++]) : i < 240 ? n += String.fromCharCode((15 & i) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : n += String.fromCharCode(55296 | (i = ((15 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536) >> 10, 56320 | 1023 & i)
                    }
                    return n
                }((t = function (e, t) {
                    var n = e.length;
                    if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
                    for (var r = new tx(e.length + (e.length >>> 1)), i = 0, o = function (e) {
                            r[i++] = e
                        }, s = 0; s < n; ++s) {
                        if (i + 5 > r.length) {
                            var a = new tx(i + 8 + (n - s << 1));
                            a.set(r), r = a
                        }
                        var u = e.charCodeAt(s);
                        u < 128 ? o(u) : (u < 2048 ? o(192 | u >>> 6) : (u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++s)) >>> 18), o(128 | u >>> 12 & 63)) : o(224 | u >>> 12), o(128 | u >>> 6 & 63)), o(128 | 63 & u))
                    }
                    return tX(r, 0, i)
                }(JSON.stringify(Object.assign(Object.assign({}, e), {
                    v: "v1"
                }))), void 0 === n && (n = {}), (r = t7()).p(t), ne(o = t6(t, null == (i = n).level ? 6 : i.level, null == i.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + i.mem, 2, 4, !0), n), t9(o, o.length - 4, r.d()), o), !0)
            };
            var nn = n(24194),
                nr = "medium";
            (y = x || (x = {}))[y.Document = 0] = "Document", y[y.DocumentType = 1] = "DocumentType", y[y.Element = 2] = "Element", y[y.Text = 3] = "Text", y[y.CDATA = 4] = "CDATA", y[y.Comment = 5] = "Comment", RegExp(/(max|min)-device-(width|height)/.source, "g"), RegExp(/([^\\]):hover/.source, "g");
            var ni = function (e, t, n) {
                    switch (t) {
                        case "light":
                            if ("input" !== e) return !0;
                            var r = n ? function (e) {
                                let t = e.type;
                                return e.hasAttribute("data-rr-is-password") ? "password" : t ? t.toLowerCase() : null
                            }(n) : "";
                            if (!r) return !1;
                            if (["password", "hidden", "email", "tel"].includes(r) || n.autocomplete.startsWith("cc-")) return !0;
                            return !1;
                        case "medium":
                        case "conservative":
                            return !0;
                        default:
                            return ni(e, nr, n)
                    }
                },
                no = function (e, t, n) {
                    var r, i, o;
                    if (void 0 === t && (t = {
                            defaultMaskLevel: nr
                        }), n) {
                        if (n.closest("." + V) || (null !== (r = t.maskSelector) && void 0 !== r ? r : []).some(function (e) {
                                return n.closest(e)
                            })) return !0;
                        if (n.closest(".amp-unmask") || (null !== (i = t.unmaskSelector) && void 0 !== i ? i : []).some(function (e) {
                                return n.closest(e)
                            })) return !1
                    }
                    return ni(e, null !== (o = t.defaultMaskLevel) && void 0 !== o ? o : nr, n)
                },
                ns = function (e, t) {
                    return function (n, r) {
                        return no(e, t, r) ? n.replace(/[^\s]/g, "*") : n
                    }
                },
                na = function (e) {
                    var t = 0;
                    if (0 === e.length) return t;
                    for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
                    return t
                },
                nu = function () {
                    var e = (0, $.l)();
                    return (null == e ? void 0 : e.location) ? e.location.href : ""
                },
                nc = function (e) {
                    return e === U.J.STAGING ? "https://api-sr.stag2.amplitude.com/sessions/v2/track" : e === U.J.EU ? "https://api-sr.eu.amplitude.com/sessions/v2/track" : "https://api-sr.amplitude.com/sessions/v2/track"
                },
                nl = function () {
                    return (0, L.mG)(void 0, void 0, void 0, function () {
                        var e, t, n, r;
                        return (0, L.Jh)(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    if (!(e = (0, $.l)())) return [3, 2];
                                    return [4, e.navigator.storage.estimate()];
                                case 1:
                                    return n = (t = i.sent()).usage, r = t.quota, [2, {
                                        totalStorageSize: n ? Math.round(n / 1024) : 0,
                                        percentOfQuota: n && r ? Math.round((n / r + Number.EPSILON) * 1e3) / 1e3 : 0,
                                        usageDetails: JSON.stringify(t.usageDetails)
                                    }];
                                case 2:
                                    return [2, {
                                        totalStorageSize: 0,
                                        percentOfQuota: 0,
                                        usageDetails: ""
                                    }]
                            }
                        })
                    })
                },
                nd = function (e) {
                    var t = (0, L.pi)({}, e),
                        n = t.apiKey;
                    return t.apiKey = "****".concat(n.substring(n.length - 4)), t
                },
                nf = function (e, t) {
                    var n = document.createDocumentFragment(),
                        r = function (e) {
                            if (void 0 === e && (e = []), "string" == typeof e && (e = [e]), 0 !== (e = e.filter(function (e) {
                                    try {
                                        n.querySelector(e)
                                    } catch (n) {
                                        return t.warn('[session-replay-browser] omitting selector "'.concat(e, '" because it is invalid')), !1
                                    }
                                    return !0
                                })).length) return e
                        };
                    return e.blockSelector = r(e.blockSelector), e.maskSelector = r(e.maskSelector), e.unmaskSelector = r(e.unmaskSelector), e
                },
                nh = function () {
                    function e(e, t) {
                        this.localConfig = new H(e, t)
                    }
                    return e.prototype.initialize = function () {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var e;
                            return (0, L.Jh)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this, [4, (0, nn.p)({
                                            localConfig: this.localConfig,
                                            configKeys: ["sessionReplay"]
                                        })];
                                    case 1:
                                        return e.remoteConfigFetch = t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.generateJoinedConfig = function (e) {
                        var t, n, r;
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var i, o, s, a, u, c, l, d, f, h, p, v, g, m, y, b, S, w, I;
                            return (0, L.Jh)(this, function (E) {
                                switch (E.label) {
                                    case 0:
                                        (i = (0, L.pi)({}, this.localConfig)).optOut = this.localConfig.optOut, i.captureEnabled = !0, E.label = 1;
                                    case 1:
                                        if (E.trys.push([1, 5, , 6]), !this.remoteConfigFetch) return i.captureEnabled = !1, [2, i];
                                        return [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_sampling_config", e)];
                                    case 2:
                                        return s = E.sent(), [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_privacy_config", e)];
                                    case 3:
                                        return a = E.sent(), u = i, [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_interaction_config", e)];
                                    case 4:
                                        return u.interactionConfig = E.sent(), (s || a) && (o = {}, s && (o.sr_sampling_config = s), a && (o.sr_privacy_config = a)), [3, 6];
                                    case 5:
                                        return c = E.sent(), this.localConfig.loggerProvider.warn(c.message), i.captureEnabled = !1, [3, 6];
                                    case 6:
                                        if (!o) return [2, i];
                                        if (l = o.sr_sampling_config, d = o.sr_privacy_config, l && Object.keys(l).length > 0 ? (Object.prototype.hasOwnProperty.call(l, "capture_enabled") ? i.captureEnabled = l.capture_enabled : i.captureEnabled = !1, Object.prototype.hasOwnProperty.call(l, "sample_rate") && (i.sampleRate = l.sample_rate)) : (i.captureEnabled = !0, this.localConfig.loggerProvider.debug("Remote config successfully fetched, but no values set for project, Session Replay capture enabled.")), d) {
                                            f = null !== (t = i.privacyConfig) && void 0 !== t ? t : {}, h = {
                                                defaultMaskLevel: null !== (r = null !== (n = d.defaultMaskLevel) && void 0 !== n ? n : f.defaultMaskLevel) && void 0 !== r ? r : "medium",
                                                blockSelector: [],
                                                maskSelector: [],
                                                unmaskSelector: []
                                            }, p = function (e) {
                                                var t, n, r, i, o, s, a, u, c, l = {};
                                                "string" == typeof e.blockSelector && (e.blockSelector = [e.blockSelector]);
                                                try {
                                                    for (var d = (0, L.XA)(null !== (a = e.blockSelector) && void 0 !== a ? a : []), f = d.next(); !f.done; f = d.next()) {
                                                        var h = f.value;
                                                        l[h] = "block"
                                                    }
                                                } catch (e) {
                                                    t = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        f && !f.done && (n = d.return) && n.call(d)
                                                    } finally {
                                                        if (t) throw t.error
                                                    }
                                                }
                                                try {
                                                    for (var p = (0, L.XA)(null !== (u = e.maskSelector) && void 0 !== u ? u : []), v = p.next(); !v.done; v = p.next()) {
                                                        var h = v.value;
                                                        l[h] = "mask"
                                                    }
                                                } catch (e) {
                                                    r = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        v && !v.done && (i = p.return) && i.call(p)
                                                    } finally {
                                                        if (r) throw r.error
                                                    }
                                                }
                                                try {
                                                    for (var g = (0, L.XA)(null !== (c = e.unmaskSelector) && void 0 !== c ? c : []), m = g.next(); !m.done; m = g.next()) {
                                                        var h = m.value;
                                                        l[h] = "unmask"
                                                    }
                                                } catch (e) {
                                                    o = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        m && !m.done && (s = g.return) && s.call(g)
                                                    } finally {
                                                        if (o) throw o.error
                                                    }
                                                }
                                                return l
                                            }, v = (0, L.pi)((0, L.pi)({}, p(f)), p(d));
                                            try {
                                                for (m = (g = (0, L.XA)(Object.entries(v))).next(); !m.done; m = g.next()) b = (y = (0, L.CR)(m.value, 2))[0], S = y[1], "mask" === S ? h.maskSelector.push(b) : "block" === S ? h.blockSelector.push(b) : "unmask" === S && h.unmaskSelector.push(b)
                                            } catch (e) {
                                                w = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    m && !m.done && (I = g.return) && I.call(g)
                                                } finally {
                                                    if (w) throw w.error
                                                }
                                            }
                                            i.privacyConfig = nf(h, this.localConfig.loggerProvider)
                                        }
                                        return this.localConfig.loggerProvider.debug(JSON.stringify({
                                            name: "session replay joined config",
                                            config: nd(i)
                                        }, null, 2)), [2, i]
                                }
                            })
                        })
                    }, e
                }(),
                np = n(68470),
                nv = "Failed to store session replay events in IndexedDB";
            (b = O || (O = {})).RECORDING = "recording", b.SENT = "sent";
            var ng = "sessionCurrentSequence",
                nm = "sequencesToSend",
                ny = function () {
                    var e = (0, $.l)();
                    return new Promise(function (t, n) {
                        if (!e) return n(Error("Global scope not found"));
                        if (!e.indexedDB) return n(Error("Session Replay: cannot find indexedDB"));
                        try {
                            var r = e.indexedDB.open("keyval-store");
                            r.onupgradeneeded = function () {
                                1 === r.result.version && (r.result.close(), r.transaction && r.transaction.abort(), e.indexedDB.deleteDatabase("keyval-store"), t())
                            }, r.onsuccess = function () {
                                t(r.result)
                            }
                        } catch (e) {
                            n(e)
                        }
                    })
                },
                nb = function (e) {
                    return (0, L.mG)(void 0, void 0, void 0, function () {
                        return (0, L.Jh)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    if (!(e.length > 0)) return [3, 2];
                                    return [4, Promise.all(e.splice(0, 10))];
                                case 1:
                                    return t.sent(), [3, 0];
                                case 2:
                                    return [2]
                            }
                        })
                    })
                },
                nS = function (e) {
                    var t, n;
                    return e.objectStoreNames.contains(ng) || (n = e.createObjectStore(ng, {
                        keyPath: "sessionId"
                    })), e.objectStoreNames.contains(nm) || (t = e.createObjectStore(nm, {
                        keyPath: "sequenceId",
                        autoIncrement: !0
                    })).createIndex("sessionId", "sessionId"), {
                        sequencesStore: t,
                        currentSequenceStore: n
                    }
                },
                nw = function () {
                    function e(e) {
                        var t = e.loggerProvider,
                            n = e.apiKey,
                            r = e.minInterval,
                            i = e.maxInterval,
                            o = this;
                        this.storageKey = "", this.maxPersistedEventsSize = 1e6, this.timeAtLastSplit = null, this.shouldSplitEventsList = function (e, t) {
                            var n = new Blob([t]).size;
                            return new Blob(e).size + n >= o.maxPersistedEventsSize || !!(null !== o.timeAtLastSplit && o.interval && Date.now() - o.timeAtLastSplit > o.interval) && !!e.length && (o.interval = Math.min(o.maxInterval, o.interval + o.minInterval), o.timeAtLastSplit = Date.now(), !0)
                        }, this.getSequencesToSend = function () {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var e, t;
                                return (0, L.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, null === (t = this.db) || void 0 === t ? void 0 : t.getAll(nm)];
                                        case 1:
                                            return [2, n.sent()];
                                        case 2:
                                            return e = n.sent(), this.loggerProvider.warn("".concat(nv, ": ").concat(e)), [3, 3];
                                        case 3:
                                            return [2, void 0]
                                    }
                                })
                            })
                        }, this.storeCurrentSequence = function (e) {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var t, n, r;
                                return (0, L.Jh)(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            if (i.trys.push([0, 4, , 5]), !this.db) return [2, void 0];
                                            return [4, this.db.get(ng, e)];
                                        case 1:
                                            if (!(t = i.sent())) return [2, void 0];
                                            return [4, this.db.put(nm, {
                                                sessionId: e,
                                                events: t.events
                                            })];
                                        case 2:
                                            return n = i.sent(), [4, this.db.put(ng, {
                                                sessionId: e,
                                                events: []
                                            })];
                                        case 3:
                                            return i.sent(), [2, (0, L.pi)((0, L.pi)({}, t), {
                                                sessionId: e,
                                                sequenceId: n
                                            })];
                                        case 4:
                                            return r = i.sent(), this.loggerProvider.warn("".concat(nv, ": ").concat(r)), [3, 5];
                                        case 5:
                                            return [2, void 0]
                                    }
                                })
                            })
                        }, this.addEventToCurrentSequence = function (e, t) {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var n, r, i, o, s, a, u;
                                return (0, L.Jh)(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            0 === this.interval && (this.interval = this.minInterval), c.label = 1;
                                        case 1:
                                            if (c.trys.push([1, 11, , 12]), !(n = null === (u = this.db) || void 0 === u ? void 0 : u.transaction(ng, "readwrite"))) return [2];
                                            return [4, n.store.get(e)];
                                        case 2:
                                            if (r = c.sent()) return [3, 4];
                                            return [4, n.store.put({
                                                sessionId: e,
                                                events: [t]
                                            })];
                                        case 3:
                                            return c.sent(), [2];
                                        case 4:
                                            if (i = void 0, !this.shouldSplitEventsList(r.events, t)) return [3, 6];
                                            return i = r.events, [4, n.store.put({
                                                sessionId: e,
                                                events: [t]
                                            })];
                                        case 5:
                                            return c.sent(), [3, 8];
                                        case 6:
                                            return o = r.events.concat(t), [4, n.store.put({
                                                sessionId: e,
                                                events: o
                                            })];
                                        case 7:
                                            c.sent(), c.label = 8;
                                        case 8:
                                            return [4, n.done];
                                        case 9:
                                            if (c.sent(), !i) return [2, void 0];
                                            return [4, this.storeSendingEvents(e, i)];
                                        case 10:
                                            if (!(s = c.sent())) return [2, void 0];
                                            return [2, {
                                                events: i,
                                                sessionId: e,
                                                sequenceId: s
                                            }];
                                        case 11:
                                            return a = c.sent(), this.loggerProvider.warn("".concat(nv, ": ").concat(a)), [3, 12];
                                        case 12:
                                            return [2, void 0]
                                    }
                                })
                            })
                        }, this.storeSendingEvents = function (e, t) {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var n, r;
                                return (0, L.Jh)(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, null === (r = this.db) || void 0 === r ? void 0 : r.put(nm, {
                                                sessionId: e,
                                                events: t
                                            })];
                                        case 1:
                                            return [2, i.sent()];
                                        case 2:
                                            return n = i.sent(), this.loggerProvider.warn("".concat(nv, ": ").concat(n)), [3, 3];
                                        case 3:
                                            return [2, void 0]
                                    }
                                })
                            })
                        }, this.cleanUpSessionEventsStore = function (e) {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var t, n;
                                return (0, L.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, null === (n = this.db) || void 0 === n ? void 0 : n.delete(nm, e)];
                                        case 1:
                                            return r.sent(), [3, 3];
                                        case 2:
                                            return t = r.sent(), this.loggerProvider.warn("".concat(nv, ": ").concat(t)), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.transitionFromKeyValStore = function (e) {
                            return (0, L.mG)(o, void 0, void 0, function () {
                                var t, n, r, i, o, s, a, u = this;
                                return (0, L.Jh)(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return c.trys.push([0, 6, , 7]), [4, ny()];
                                        case 1:
                                            if (!(t = c.sent())) return [2];
                                            n = function (e, t) {
                                                return (0, L.mG)(u, void 0, void 0, function () {
                                                    var n, r, i = this;
                                                    return (0, L.Jh)(this, function (o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return n = t.sessionSequences, r = [], Object.keys(n).forEach(function (o) {
                                                                    var s = parseInt(o, 10),
                                                                        a = n[s];
                                                                    if (s === t.currentSequenceId) {
                                                                        var u = a.events.map(function (t) {
                                                                            return (0, L.mG)(i, void 0, void 0, function () {
                                                                                return (0, L.Jh)(this, function (n) {
                                                                                    return [2, this.addEventToCurrentSequence(e, t)]
                                                                                })
                                                                            })
                                                                        });
                                                                        r.concat(u)
                                                                    } else a.status !== O.SENT && r.push(i.storeSendingEvents(e, a.events))
                                                                }), [4, nb(r)];
                                                            case 1:
                                                                return o.sent(), [2]
                                                        }
                                                    })
                                                })
                                            }, r = "".concat(G.f1, "_").concat(this.apiKey.substring(0, 10)), c.label = 2;
                                        case 2:
                                            return c.trys.push([2, 4, , 5]), i = t.transaction("keyval").objectStore("keyval").getAll(r), [4, new Promise(function (t) {
                                                i.onsuccess = function (r) {
                                                    return (0, L.mG)(u, void 0, void 0, function () {
                                                        var i, o, s, a = this;
                                                        return (0, L.Jh)(this, function (u) {
                                                            switch (u.label) {
                                                                case 0:
                                                                    if (!(o = (i = r && r.target.result) && i[0])) return [3, 2];
                                                                    return s = [], Object.keys(o).forEach(function (t) {
                                                                        var r = parseInt(t, 10),
                                                                            i = o[r];
                                                                        if (e === r) s.push(n(r, i));
                                                                        else {
                                                                            var u = i.sessionSequences;
                                                                            Object.keys(u).forEach(function (e) {
                                                                                var t = parseInt(e, 10);
                                                                                u[t].status !== O.SENT && s.push(a.storeSendingEvents(r, u[t].events))
                                                                            })
                                                                        }
                                                                    }), [4, nb(s)];
                                                                case 1:
                                                                    u.sent(), u.label = 2;
                                                                case 2:
                                                                    return t(), [2]
                                                            }
                                                        })
                                                    })
                                                }
                                            })];
                                        case 3:
                                            return c.sent(), (o = (0, $.l)()) && o.indexedDB.deleteDatabase("keyval-store"), [3, 5];
                                        case 4:
                                            return s = c.sent(), this.loggerProvider.warn("Failed to transition session replay events from keyval to new store: ".concat(s)), [3, 5];
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return a = c.sent(), this.loggerProvider.warn("Failed to access keyval store: ".concat(a, ". For more information, visit: https://www.docs.developers.amplitude.com/session-replay/sdks/standalone/#indexeddb-best-practices")), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, this.loggerProvider = t, this.apiKey = n, this.maxInterval = null != i ? i : 1e4, this.minInterval = null != r ? r : 500, this.interval = 0
                    }
                    return e.prototype.initialize = function (e, t) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var n, r, i;
                            return (0, L.Jh)(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return n = "replay" === e ? "" : "_".concat(e), r = "".concat(this.apiKey.substring(0, 10), "_amp_session_replay_events").concat(n), i = this, [4, (0, L.mG)(void 0, void 0, void 0, function () {
                                            return (0, L.Jh)(this, function (e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, (0, np.X3)(r, 1, {
                                                            upgrade: nS
                                                        })];
                                                    case 1:
                                                        return [2, e.sent()]
                                                }
                                            })
                                        })];
                                    case 1:
                                        return i.db = o.sent(), this.timeAtLastSplit = Date.now(), [4, this.transitionFromKeyValStore(t)];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e
                }(),
                nI = function (e) {
                    var t = e.loggerProvider,
                        n = e.apiKey,
                        r = e.sessionId,
                        i = e.type,
                        o = e.minInterval,
                        s = e.maxInterval;
                    return (0, L.mG)(void 0, void 0, void 0, function () {
                        var e;
                        return (0, L.Jh)(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [4, (e = new nw({
                                        loggerProvider: t,
                                        apiKey: n,
                                        minInterval: o,
                                        maxInterval: s
                                    })).initialize(i, r)];
                                case 1:
                                    return a.sent(), [2, e]
                            }
                        })
                    })
                },
                nE = n(17358),
                nC = n(34854),
                nk = "1.13.0",
                nT = function () {
                    function e(e) {
                        var t = e.loggerProvider,
                            n = e.payloadBatcher;
                        this.storageKey = "", this.retryTimeout = 1e3, this.scheduled = null, this.queue = [], this.loggerProvider = t, this.payloadBatcher = n || function (e) {
                            return e
                        }
                    }
                    return e.prototype.sendEventsList = function (e) {
                        this.addToQueue((0, L.pi)((0, L.pi)({}, e), {
                            attempts: 0,
                            timeout: 0
                        }))
                    }, e.prototype.addToQueue = function () {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        t.filter(function (t) {
                            return t.attempts < (t.flushMaxRetries || 0) ? (t.attempts += 1, !0) : (e.completeRequest({
                                context: t,
                                err: "".concat("Session replay event batch rejected due to exceeded retry count", ", batch sequence id, ").concat(t.sequenceId)
                            }), !1)
                        }).forEach(function (t) {
                            if (e.queue = e.queue.concat(t), 0 === t.timeout) {
                                e.schedule(0);
                                return
                            }
                            setTimeout(function () {
                                t.timeout = 0, e.schedule(0)
                            }, t.timeout)
                        })
                    }, e.prototype.schedule = function (e) {
                        var t = this;
                        this.scheduled || (this.scheduled = setTimeout(function () {
                            t.flush(!0).then(function () {
                                t.queue.length > 0 && t.schedule(e)
                            })
                        }, e))
                    }, e.prototype.flush = function (e) {
                        return void 0 === e && (e = !1), (0, L.mG)(this, void 0, void 0, function () {
                            var t, n, r = this;
                            return (0, L.Jh)(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return t = [], n = [], this.queue.forEach(function (e) {
                                            return 0 === e.timeout ? t.push(e) : n.push(e)
                                        }), this.queue = n, this.scheduled && (clearTimeout(this.scheduled), this.scheduled = null), [4, Promise.all(t.map(function (t) {
                                            return r.send(t, e)
                                        }))];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.send = function (e, t) {
                        var n, r;
                        return void 0 === t && (t = !0), (0, L.mG)(this, void 0, void 0, function () {
                            var i, o, s, a, u, c, l, d, f, h, p, v;
                            return (0, L.Jh)(this, function (g) {
                                switch (g.label) {
                                    case 0:
                                        if (!(i = e.apiKey)) return [2, this.completeRequest({
                                            context: e,
                                            err: "Session replay event batch not sent due to missing api key"
                                        })];
                                        if (!(o = e.deviceId)) return [2, this.completeRequest({
                                            context: e,
                                            err: "Session replay event batch not sent due to missing device ID"
                                        })];
                                        if (s = nu(), a = nk, u = e.sampleRate, c = new URLSearchParams({
                                                device_id: o,
                                                session_id: "".concat(e.sessionId),
                                                seq_number: "".concat(e.sequenceId),
                                                type: "".concat(e.type)
                                            }), l = "".concat((null === (n = e.version) || void 0 === n ? void 0 : n.type) || "standalone", "/").concat((null === (r = e.version) || void 0 === r ? void 0 : r.version) || a), 0 === (d = this.payloadBatcher({
                                                version: 1,
                                                events: e.events
                                            })).events.length) return this.completeRequest({
                                            context: e
                                        }), [2];
                                        g.label = 1;
                                    case 1:
                                        return g.trys.push([1, 3, , 4]), f = {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "*/*",
                                                Authorization: "Bearer ".concat(i),
                                                "X-Client-Version": a,
                                                "X-Client-Library": l,
                                                "X-Client-Url": s,
                                                "X-Client-Sample-Rate": "".concat(u)
                                            },
                                            body: JSON.stringify(d),
                                            method: "POST"
                                        }, [4, fetch("".concat(nc(e.serverZone), "?").concat(c.toString()), f)];
                                    case 2:
                                        if (null === (h = g.sent())) return this.completeRequest({
                                            context: e,
                                            err: "Unexpected error occurred"
                                        }), [2];
                                        if (t) this.handleReponse(h.status, e);
                                        else {
                                            p = "";
                                            try {
                                                p = JSON.stringify(h.body, null, 2)
                                            } catch (e) {}
                                            this.completeRequest({
                                                context: e,
                                                success: "".concat(h.status, ": ").concat(p)
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return v = g.sent(), this.completeRequest({
                                            context: e,
                                            err: v
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.handleReponse = function (e, t) {
                        switch (new nE.d().buildStatus(e)) {
                            case nC.q.Success:
                                this.handleSuccessResponse(t);
                                break;
                            case nC.q.Failed:
                                this.handleOtherResponse(t);
                                break;
                            default:
                                this.completeRequest({
                                    context: t,
                                    err: "Network error occurred, event batch rejected"
                                })
                        }
                    }, e.prototype.handleSuccessResponse = function (e) {
                        var t = Math.round(new Blob(e.events).size / 1024);
                        this.completeRequest({
                            context: e,
                            success: "Session replay event batch with seq id ".concat(e.sequenceId, " tracked successfully for session id ").concat(e.sessionId, ", size of events: ").concat(t, " KB")
                        })
                    }, e.prototype.handleOtherResponse = function (e) {
                        this.addToQueue((0, L.pi)((0, L.pi)({}, e), {
                            timeout: e.attempts * this.retryTimeout
                        }))
                    }, e.prototype.completeRequest = function (e) {
                        var t = e.context,
                            n = e.err,
                            r = e.success;
                        t.onComplete(t.sequenceId), n ? this.loggerProvider.warn(n) : r && this.loggerProvider.log(r)
                    }, e
                }(),
                n_ = function (e) {
                    var t = e.config,
                        n = e.sessionId,
                        r = e.minInterval,
                        i = e.maxInterval,
                        o = e.type,
                        s = e.payloadBatcher;
                    return (0, L.mG)(void 0, void 0, void 0, function () {
                        var e, a, u;

                        function c(t) {
                            return void 0 === t && (t = !1), (0, L.mG)(this, void 0, void 0, function () {
                                return (0, L.Jh)(this, function (n) {
                                    return [2, e.flush(t)]
                                })
                            })
                        }
                        return (0, L.Jh)(this, function (l) {
                            switch (l.label) {
                                case 0:
                                    return e = new nT({
                                        loggerProvider: t.loggerProvider,
                                        payloadBatcher: s
                                    }), [4, nI({
                                        loggerProvider: t.loggerProvider,
                                        apiKey: t.apiKey,
                                        sessionId: n,
                                        minInterval: r,
                                        maxInterval: i,
                                        type: o
                                    })];
                                case 1:
                                    return a = l.sent(), u = function (n) {
                                        var r = n.events,
                                            i = n.sessionId,
                                            s = n.deviceId,
                                            u = n.sequenceId;
                                        t.debugMode && nl().then(function (e) {
                                            var n = e.totalStorageSize,
                                                r = e.percentOfQuota,
                                                i = e.usageDetails;
                                            t.loggerProvider.debug("Total storage size: ".concat(n, " KB, percentage of quota: ").concat(r, "%, usage details: ").concat(i))
                                        }).catch(function () {}), e.sendEventsList({
                                            events: r,
                                            sequenceId: u,
                                            sessionId: i,
                                            flushMaxRetries: t.flushMaxRetries,
                                            apiKey: t.apiKey,
                                            deviceId: s,
                                            sampleRate: t.sampleRate,
                                            serverZone: t.serverZone,
                                            version: t.version,
                                            type: o,
                                            onComplete: a.cleanUpSessionEventsStore.bind(a)
                                        })
                                    }, [2, {
                                        sendCurrentSequenceEvents: function (e) {
                                            var n = e.sessionId,
                                                r = e.deviceId;
                                            a.storeCurrentSequence(n).then(function (e) {
                                                e && u({
                                                    sequenceId: e.sequenceId,
                                                    events: e.events,
                                                    sessionId: e.sessionId,
                                                    deviceId: r
                                                })
                                            }).catch(function (e) {
                                                t.loggerProvider.warn("Failed to get current sequence of session replay events for session:", e)
                                            })
                                        },
                                        addEvent: function (e) {
                                            var n = e.event,
                                                r = e.sessionId,
                                                i = e.deviceId;
                                            a.addEventToCurrentSequence(r, n.data).then(function (e) {
                                                return e && u({
                                                    sequenceId: e.sequenceId,
                                                    events: e.events,
                                                    sessionId: e.sessionId,
                                                    deviceId: i
                                                })
                                            }).catch(function (e) {
                                                t.loggerProvider.warn("Failed to add event to session replay capture:", e)
                                            })
                                        },
                                        sendStoredEvents: function (e) {
                                            var t = e.deviceId;
                                            return (0, L.mG)(void 0, void 0, void 0, function () {
                                                var e;
                                                return (0, L.Jh)(this, function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, a.getSequencesToSend()];
                                                        case 1:
                                                            return (e = n.sent()) && e.forEach(function (e) {
                                                                u({
                                                                    sequenceId: e.sequenceId,
                                                                    events: e.events,
                                                                    sessionId: e.sessionId,
                                                                    deviceId: t
                                                                })
                                                            }), [2]
                                                    }
                                                })
                                            })
                                        },
                                        flush: c
                                    }]
                            }
                        })
                    })
                },
                nM = function () {
                    function e() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = new Map;
                        e.forEach(function (e) {
                            n.set(e.name, e.manager)
                        }), this.managers = n
                    }
                    return e.prototype.sendStoredEvents = function (e) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, L.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return t = [], this.managers.forEach(function (n) {
                                            t.push(n.sendStoredEvents(e))
                                        }), [4, Promise.all(t)];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.addEvent = function (e) {
                        var t, n = e.sessionId,
                            r = e.event,
                            i = e.deviceId;
                        null === (t = this.managers.get(r.type)) || void 0 === t || t.addEvent({
                            sessionId: n,
                            event: r,
                            deviceId: i
                        })
                    }, e.prototype.sendCurrentSequenceEvents = function (e) {
                        var t = e.sessionId,
                            n = e.deviceId;
                        this.managers.forEach(function (e) {
                            e.sendCurrentSequenceEvents({
                                sessionId: t,
                                deviceId: n
                            })
                        })
                    }, e.prototype.flush = function (e) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, L.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return t = [], this.managers.forEach(function (n) {
                                            t.push(n.flush(e))
                                        }), [4, Promise.all(t)];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e
                }(),
                nx = ((S = nx || {})[S.DomContentLoaded = 0] = "DomContentLoaded", S[S.Load = 1] = "Load", S[S.FullSnapshot = 2] = "FullSnapshot", S[S.IncrementalSnapshot = 3] = "IncrementalSnapshot", S[S.Meta = 4] = "Meta", S[S.Custom = 5] = "Custom", S[S.Plugin = 6] = "Plugin", S),
                nO = ((w = nO || {})[w.Mutation = 0] = "Mutation", w[w.MouseMove = 1] = "MouseMove", w[w.MouseInteraction = 2] = "MouseInteraction", w[w.Scroll = 3] = "Scroll", w[w.ViewportResize = 4] = "ViewportResize", w[w.Input = 5] = "Input", w[w.TouchMove = 6] = "TouchMove", w[w.MediaInteraction = 7] = "MediaInteraction", w[w.StyleSheetRule = 8] = "StyleSheetRule", w[w.CanvasMutation = 9] = "CanvasMutation", w[w.Font = 10] = "Font", w[w.Log = 11] = "Log", w[w.Drag = 12] = "Drag", w[w.StyleDeclaration = 13] = "StyleDeclaration", w[w.Selection = 14] = "Selection", w[w.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", w),
                nR = ((I = nR || {})[I.MouseUp = 0] = "MouseUp", I[I.MouseDown = 1] = "MouseDown", I[I.Click = 2] = "Click", I[I.ContextMenu = 3] = "ContextMenu", I[I.DblClick = 4] = "DblClick", I[I.Focus = 5] = "Focus", I[I.Blur = 6] = "Blur", I[I.TouchStart = 7] = "TouchStart", I[I.TouchMove_Departed = 8] = "TouchMove_Departed", I[I.TouchEnd = 9] = "TouchEnd", I[I.TouchCancel = 10] = "TouchCancel", I),
                nN = ((E = nN || {})[E.Mouse = 0] = "Mouse", E[E.Pen = 1] = "Pen", E[E.Touch = 2] = "Touch", E),
                nP = ((C = nP || {})[C["2D"] = 0] = "2D", C[C.WebGL = 1] = "WebGL", C[C.WebGL2 = 2] = "WebGL2", C),
                nL = ((k = nL || {})[k.Play = 0] = "Play", k[k.Pause = 1] = "Pause", k[k.Seeked = 2] = "Seeked", k[k.VolumeChange = 3] = "VolumeChange", k[k.RateChange = 4] = "RateChange", k),
                nA = ((T = nA || {}).Start = "start", T.Pause = "pause", T.Resume = "resume", T.Resize = "resize", T.Finish = "finish", T.FullsnapshotRebuilded = "fullsnapshot-rebuilded", T.LoadStylesheetStart = "load-stylesheet-start", T.LoadStylesheetEnd = "load-stylesheet-end", T.SkipStart = "skip-start", T.SkipEnd = "skip-end", T.MouseInteraction = "mouse-interaction", T.EventCast = "event-cast", T.CustomEvent = "custom-event", T.Flush = "flush", T.StateChange = "state-change", T.PlayBack = "play-back", T.Destroy = "destroy", T);

            function nD(e, t, n) {
                for (var r = null, i = [], o = e, s = 0; o && "break" !== function () {
                        var e, a, u, c, l = new Date().getTime() - P.getTime();
                        if (void 0 !== R.timeoutMs && l > R.timeoutMs) throw Error("Timeout: Can't find a unique selector after ".concat(l, "ms"));
                        var d = nB((e = o.getAttribute("id")) && R.idName(e) ? {
                                name: "#" + CSS.escape(e),
                                penalty: 0
                            } : null) || nB.apply(void 0, (0, L.ev)([], (0, L.CR)(Array.from(o.attributes).filter(function (e) {
                                return R.attr(e.name, e.value)
                            }).map(function (e) {
                                return {
                                    name: "[".concat(CSS.escape(e.name), '="').concat(CSS.escape(e.value), '"]'),
                                    penalty: .5
                                }
                            })), !1)) || nB.apply(void 0, (0, L.ev)([], (0, L.CR)(Array.from(o.classList).filter(R.className).map(function (e) {
                                return {
                                    name: "." + CSS.escape(e),
                                    penalty: 1
                                }
                            })), !1)) || nB((a = o.tagName.toLowerCase(), R.tagName(a) ? {
                                name: a,
                                penalty: 2
                            } : null)) || [nU()],
                            f = function (e) {
                                var t = e.parentNode;
                                if (!t) return null;
                                var n = t.firstChild;
                                if (!n) return null;
                                for (var r = 0; n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);) n = n.nextSibling;
                                return r
                            }(o);
                        if ("all" == t) f && (d = d.concat(d.filter(nz).map(function (e) {
                            return nJ(e, f)
                        })));
                        else if ("two" == t) d = d.slice(0, 1), f && (d = d.concat(d.filter(nz).map(function (e) {
                            return nJ(e, f)
                        })));
                        else if ("one" == t) {
                            var h = (0, L.CR)(d = d.slice(0, 1), 1)[0];
                            f && nz(h) && (d = [nJ(h, f)])
                        } else "none" == t && (d = [nU()], f && (d = [nJ(d[0], f)]));
                        try {
                            for (var p = (u = void 0, (0, L.XA)(d)), v = p.next(); !v.done; v = p.next()) {
                                var h = v.value;
                                h.level = s
                            }
                        } catch (e) {
                            u = {
                                error: e
                            }
                        } finally {
                            try {
                                v && !v.done && (c = p.return) && c.call(p)
                            } finally {
                                if (u) throw u.error
                            }
                        }
                        if (i.push(d), i.length >= R.seedMinLength && (r = nq(i, n))) return "break";
                        o = o.parentElement, s++
                    }(););
                return (r || (r = nq(i, n)), !r && n) ? n() : r
            }

            function nq(e, t) {
                var n, r, i = nV(function e(t, n) {
                    var r, i, o, s, a;
                    return void 0 === n && (n = []), (0, L.Jh)(this, function (u) {
                        switch (u.label) {
                            case 0:
                                if (!(t.length > 0)) return [3, 9];
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 6, 7, 8]), i = (r = (0, L.XA)(t[0])).next(), u.label = 2;
                            case 2:
                                if (i.done) return [3, 5];
                                return o = i.value, [5, (0, L.XA)(e(t.slice(1, t.length), n.concat(o)))];
                            case 3:
                                u.sent(), u.label = 4;
                            case 4:
                                return i = r.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return s = {
                                    error: u.sent()
                                }, [3, 8];
                            case 7:
                                try {
                                    i && !i.done && (a = r.return) && a.call(r)
                                } finally {
                                    if (s) throw s.error
                                }
                                return [7];
                            case 8:
                                return [3, 11];
                            case 9:
                                return [4, n];
                            case 10:
                                u.sent(), u.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                }(e));
                if (i.length > R.threshold) return t ? t() : null;
                try {
                    for (var o = (0, L.XA)(i), s = o.next(); !s.done; s = o.next()) {
                        var a = s.value;
                        if (nG(a)) return a
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }

            function nj(e) {
                for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
                    var i = e[r].level || 0;
                    n = t.level === i - 1 ? "".concat(e[r].name, " > ").concat(n) : "".concat(e[r].name, " ").concat(n), t = e[r]
                }
                return n
            }

            function nF(e) {
                return e.map(function (e) {
                    return e.penalty
                }).reduce(function (e, t) {
                    return e + t
                }, 0)
            }

            function nG(e) {
                var t = nj(e);
                switch (N.querySelectorAll(t).length) {
                    case 0:
                        throw Error("Can't select any node with this selector: ".concat(t));
                    case 1:
                        return !0;
                    default:
                        return !1
                }
            }

            function nU() {
                return {
                    name: "*",
                    penalty: 3
                }
            }

            function nJ(e, t) {
                return {
                    name: e.name + ":nth-child(".concat(t, ")"),
                    penalty: e.penalty + 1
                }
            }

            function nz(e) {
                return "html" !== e.name && !e.name.startsWith("#")
            }

            function nB() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.filter(nW);
                return n.length > 0 ? n : null
            }

            function nW(e) {
                return null != e
            }

            function nV(e) {
                return (0, L.ev)([], (0, L.CR)(e), !1).sort(function (e, t) {
                    return nF(e) - nF(t)
                })
            }
            var nK = function (e) {
                    var t = e.version,
                        n = e.events,
                        r = [];
                    return n.forEach(function (e) {
                        var t = JSON.parse(e);
                        "click" === t.type && r.push(t)
                    }), {
                        version: t,
                        events: Object.values(r.reduce(function (e, t) {
                            var n = t.x,
                                r = t.y,
                                i = t.selector,
                                o = t.timestamp,
                                s = o - o % 36e5,
                                a = "".concat(n, ":").concat(r, ":").concat(null != i ? i : "", ":").concat(s);
                            return e[a] ? e[a].count += 1 : e[a] = (0, L.pi)((0, L.pi)({}, t), {
                                timestamp: s,
                                count: 1
                            }), e
                        }, {}))
                    }
                },
                nH = function (e) {
                    var t = e.eventsManager,
                        n = e.sessionId,
                        r = e.deviceIdFn;
                    return function (e) {
                        if (e.type === nR.Click) {
                            var i, o = (0, $.l)();
                            if (o) {
                                var s = o.location,
                                    a = o.innerHeight,
                                    u = o.innerWidth;
                                if (s) {
                                    var c = e.x,
                                        l = e.y,
                                        d = tM.mirror.getNode(e.id);
                                    d && (i = function (e, t) {
                                        if (P = new Date, e.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type.");
                                        if ("html" === e.tagName.toLowerCase()) return "html";
                                        var n, r = {
                                            root: document.body,
                                            idName: function (e) {
                                                return !0
                                            },
                                            className: function (e) {
                                                return !0
                                            },
                                            tagName: function (e) {
                                                return !0
                                            },
                                            attr: function (e, t) {
                                                return !1
                                            },
                                            seedMinLength: 1,
                                            optimizedMinLength: 2,
                                            threshold: 1e3,
                                            maxNumberOfTries: 1e4,
                                            timeoutMs: void 0
                                        };
                                        N = (n = (R = (0, L.pi)((0, L.pi)({}, r), void 0)).root).nodeType === Node.DOCUMENT_NODE ? n : n === r.root ? n.ownerDocument : n;
                                        var i = nD(e, "all", function () {
                                            return nD(e, "two", function () {
                                                return nD(e, "one", function () {
                                                    return nD(e, "none")
                                                })
                                            })
                                        });
                                        if (i) {
                                            var o = nV(function e(t, n, r) {
                                                var i, o, s;
                                                return void 0 === r && (r = {
                                                    counter: 0,
                                                    visited: new Map
                                                }), (0, L.Jh)(this, function (a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            if (!(t.length > 2 && t.length > R.optimizedMinLength)) return [3, 5];
                                                            i = 1, a.label = 1;
                                                        case 1:
                                                            var u;
                                                            if (!(i < t.length - 1)) return [3, 5];
                                                            if (r.counter > R.maxNumberOfTries || (r.counter += 1, (o = (0, L.ev)([], (0, L.CR)(t), !1)).splice(i, 1), s = nj(o), r.visited.has(s))) return [2];
                                                            if (!(nG(o) && (u = o, N.querySelector(nj(u)) === n))) return [3, 4];
                                                            return [4, o];
                                                        case 2:
                                                            return a.sent(), r.visited.set(s, !0), [5, (0, L.XA)(e(o, n, r))];
                                                        case 3:
                                                            a.sent(), a.label = 4;
                                                        case 4:
                                                            return i++, [3, 1];
                                                        case 5:
                                                            return [2]
                                                    }
                                                })
                                            }(i, e));
                                            return o.length > 0 && (i = o[0]), nj(i)
                                        }
                                        throw Error("Selector was not found.")
                                    }(d));
                                    var f = ej(o),
                                        h = {
                                            x: c + f.left,
                                            y: l + f.top,
                                            selector: i,
                                            viewportHeight: a,
                                            viewportWidth: u,
                                            pageUrl: s.href,
                                            timestamp: Date.now(),
                                            type: "click"
                                        },
                                        p = r();
                                    p && t.addEvent({
                                        sessionId: n,
                                        event: {
                                            type: "interaction",
                                            data: JSON.stringify(h)
                                        },
                                        deviceId: p
                                    })
                                }
                            }
                        }
                    }
                },
                n$ = function () {
                    function e(e, t) {
                        var n = (0, $.l)();
                        n && n.navigator && "function" == typeof n.navigator.sendBeacon ? this.sendBeacon = function (e, t) {
                            try {
                                if (n.navigator.sendBeacon(e, JSON.stringify(t))) return !0
                            } catch (e) {}
                            return !1
                        } : this.sendBeacon = function () {
                            return !1
                        }, this.sendXhr = function (e, t) {
                            var n = new XMLHttpRequest;
                            return n.open("POST", e, !0), n.setRequestHeader("Accept", "*/*"), n.send(JSON.stringify(t)), !0
                        }, this.basePageUrl = nc(t.serverZone), this.context = e
                    }
                    return e.prototype.send = function (e, t) {
                        var n = this.context,
                            r = n.sessionId,
                            i = n.type,
                            o = new URLSearchParams({
                                device_id: e,
                                session_id: String(r),
                                type: String(i)
                            }),
                            s = "".concat(this.basePageUrl, "?").concat(o.toString());
                        this.sendBeacon(s, t) || this.sendXhr(s, t)
                    }, e
                }(),
                nX = function () {
                    function e(e) {
                        var t = this;
                        this.timestamp = Date.now(), this.hook = function (e) {
                            t.update(e)
                        }, this.send = function (e) {
                            return function (n) {
                                var r = e(),
                                    i = (0, $.l)();
                                i && r && t.transport.send(r, {
                                    maxScrollX: t._maxScrollX,
                                    maxScrollY: t._maxScrollY,
                                    maxScrollWidth: t._maxScrollWidth,
                                    maxScrollHeight: t._maxScrollHeight,
                                    viewportHeight: eF(),
                                    viewportWidth: eG(),
                                    pageUrl: i.location.href,
                                    timestamp: t.timestamp,
                                    type: "scroll"
                                })
                            }
                        }, this._maxScrollX = 0, this._maxScrollY = 0, this._maxScrollWidth = eG(), this._maxScrollHeight = eF(), this.transport = e
                    }
                    return e.default = function (t, n) {
                        return new e(new n$(t, n))
                    }, Object.defineProperty(e.prototype, "maxScrollX", {
                        get: function () {
                            return this._maxScrollX
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "maxScrollY", {
                        get: function () {
                            return this._maxScrollY
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "maxScrollWidth", {
                        get: function () {
                            return this._maxScrollWidth
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "maxScrollHeight", {
                        get: function () {
                            return this._maxScrollHeight
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.update = function (e) {
                        var t = Date.now();
                        if (e.x > this._maxScrollX) {
                            var n = eG();
                            this._maxScrollX = e.x;
                            var r = e.x + n;
                            r > this._maxScrollWidth && (this._maxScrollWidth = r), this.timestamp = t
                        }
                        if (e.y > this._maxScrollY) {
                            var i = eF();
                            this._maxScrollY = e.y;
                            var o = e.y + i;
                            o > this._maxScrollHeight && (this._maxScrollHeight = o), this.timestamp = t
                        }
                    }, e
                }(),
                nZ = function (e) {
                    var t = e.sessionId,
                        n = e.deviceId;
                    this.deviceId = n, this.sessionId = t, t && n && (this.sessionReplayId = "".concat(n, "/").concat(t))
                },
                nY = function () {
                    function e() {
                        var e = this;
                        this.name = "@amplitude/session-replay-browser", this.recordCancelCallback = null, this.pageLeaveFns = [], this.teardownEventListeners = function (t) {
                            var n = (0, $.l)();
                            n && (n.removeEventListener("blur", e.blurListener), n.removeEventListener("focus", e.focusListener), t || n.addEventListener("blur", e.blurListener), t || n.addEventListener("focus", e.focusListener), n.self && "onpagehide" in n.self ? (n.removeEventListener("pagehide", e.pageLeaveListener), t || n.addEventListener("pagehide", e.pageLeaveListener)) : (n.removeEventListener("beforeunload", e.pageLeaveListener), t || n.addEventListener("beforeunload", e.pageLeaveListener)))
                        }, this.blurListener = function () {
                            e.sendEvents()
                        }, this.focusListener = function () {
                            e.recordEvents()
                        }, this.pageLeaveListener = function (t) {
                            e.pageLeaveFns.forEach(function (e) {
                                e(t)
                            })
                        }, this.getDebugInfo = function () {
                            return (0, L.mG)(e, void 0, void 0, function () {
                                var e;
                                return (0, L.Jh)(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.config) return [2];
                                            return [4, nl()];
                                        case 1:
                                            return e = t.sent(), [2, (0, L.pi)((0, L.pi)({}, e), {
                                                config: nd(this.config),
                                                version: nk
                                            })]
                                    }
                                })
                            })
                        }, this.stopRecordingEvents = function () {
                            try {
                                e.loggerProvider.log("Session Replay capture stopping."), e.recordCancelCallback && e.recordCancelCallback(), e.recordCancelCallback = null
                            } catch (t) {
                                e.loggerProvider.warn("Error occurred while stopping replay capture: ".concat(t.toString()))
                            }
                        }, this.loggerProvider = new q.Y
                    }
                    return e.prototype.init = function (e, t) {
                        return (0, Z.S)(this._init(e, t))
                    }, e.prototype._init = function (e, t) {
                        var n, r, i;
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var o, s, a, u, c, l;
                            return (0, L.Jh)(this, function (d) {
                                switch (d.label) {
                                    case 0:
                                        return this.loggerProvider = t.loggerProvider || new q.Y, Object.prototype.hasOwnProperty.call(t, "logLevel") && this.loggerProvider.enable(t.logLevel), this.identifiers = new nZ({
                                            sessionId: t.sessionId,
                                            deviceId: t.deviceId
                                        }), o = this, [4, (0, L.mG)(void 0, void 0, void 0, function () {
                                            var n;
                                            return (0, L.Jh)(this, function (r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return [4, (n = new nh(e, t)).initialize()];
                                                    case 1:
                                                        return r.sent(), [2, n]
                                                }
                                            })
                                        })];
                                    case 1:
                                        return o.joinedConfigGenerator = d.sent(), s = this, [4, this.joinedConfigGenerator.generateJoinedConfig(this.identifiers.sessionId)];
                                    case 2:
                                        return s.config = d.sent(), t.sessionId && (null === (n = this.config.interactionConfig) || void 0 === n ? void 0 : n.enabled) && (a = nX.default({
                                            sessionId: t.sessionId,
                                            type: "interaction"
                                        }, this.config), this.pageLeaveFns = [a.send(this.getDeviceId.bind(this))], this.scrollHook = a.hook.bind(a)), u = [], [4, n_({
                                            config: this.config,
                                            sessionId: this.identifiers.sessionId,
                                            type: "replay"
                                        })];
                                    case 3:
                                        if (c = d.sent(), u.push({
                                                name: "replay",
                                                manager: c
                                            }), !(null === (r = this.config.interactionConfig) || void 0 === r ? void 0 : r.enabled)) return [3, 5];
                                        return [4, n_({
                                            config: this.config,
                                            sessionId: this.identifiers.sessionId,
                                            type: "interaction",
                                            minInterval: null !== (i = this.config.interactionConfig.trackEveryNms) && void 0 !== i ? i : 3e4,
                                            maxInterval: 6e4,
                                            payloadBatcher: nK
                                        })];
                                    case 4:
                                        l = d.sent(), u.push({
                                            name: "interaction",
                                            manager: l
                                        }), d.label = 5;
                                    case 5:
                                        return this.eventsManager = new(nM.bind.apply(nM, (0, L.ev)([void 0], (0, L.CR)(u), !1))), this.loggerProvider.log("Installing @amplitude/session-replay-browser."), this.teardownEventListeners(!1), this.initialize(!0), [2]
                                }
                            })
                        })
                    }, e.prototype.setSessionId = function (e, t) {
                        return (0, Z.S)(this.asyncSetSessionId(e, t))
                    }, e.prototype.asyncSetSessionId = function (e, t) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var n, r, i;
                            return (0, L.Jh)(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        if ((n = this.identifiers && this.identifiers.sessionId) && this.sendEvents(n), r = t || this.getDeviceId(), this.identifiers = new nZ({
                                                sessionId: e,
                                                deviceId: r
                                            }), !(this.joinedConfigGenerator && n)) return [3, 2];
                                        return i = this, [4, this.joinedConfigGenerator.generateJoinedConfig(this.identifiers.sessionId)];
                                    case 1:
                                        i.config = o.sent(), o.label = 2;
                                    case 2:
                                        return this.recordEvents(), [2]
                                }
                            })
                        })
                    }, e.prototype.getSessionReplayDebugPropertyValue = function () {
                        var e = "";
                        return this.config && (e = na(this.config.apiKey).toString()), JSON.stringify({
                            appHash: e
                        })
                    }, e.prototype.getSessionReplayProperties = function () {
                        if (!this.config || !this.identifiers) return this.loggerProvider.error("Session replay init has not been called, cannot get session replay properties."), {};
                        if (this.getShouldRecord()) {
                            var e, t = ((e = {})[z] = this.identifiers.sessionReplayId ? this.identifiers.sessionReplayId : null, e);
                            return this.config.debugMode && (t[W] = this.getSessionReplayDebugPropertyValue()), t
                        }
                        return {}
                    }, e.prototype.sendEvents = function (e) {
                        var t, n = e || (null === (t = this.identifiers) || void 0 === t ? void 0 : t.sessionId),
                            r = this.getDeviceId();
                        this.eventsManager && n && r && this.eventsManager.sendCurrentSequenceEvents({
                            sessionId: n,
                            deviceId: r
                        })
                    }, e.prototype.initialize = function (e) {
                        if (void 0 === e && (e = !1), !(null === (t = this.identifiers) || void 0 === t ? void 0 : t.sessionId)) {
                            this.loggerProvider.log("Session is not being recorded due to lack of session id.");
                            return
                        }
                        var t, n = this.getDeviceId();
                        if (!n) {
                            this.loggerProvider.log("Session is not being recorded due to lack of device id.");
                            return
                        }
                        this.eventsManager && e && this.eventsManager.sendStoredEvents({
                            deviceId: n
                        }), this.recordEvents()
                    }, e.prototype.shouldOptOut = function () {
                        if (null === (e = this.config) || void 0 === e ? void 0 : e.instanceName) {
                            var e, t, n;
                            n = (0, X.bM)(this.config.instanceName).identityStore.getIdentity().optOut
                        }
                        return void 0 !== n ? n : null === (t = this.config) || void 0 === t ? void 0 : t.optOut
                    }, e.prototype.getShouldRecord = function () {
                        if (!this.identifiers || !this.config || !this.identifiers.sessionId) return this.loggerProvider.warn("Session is not being recorded due to lack of config, please call sessionReplay.init."), !1;
                        if (!this.config.captureEnabled) return this.loggerProvider.log("Session ".concat(this.identifiers.sessionId, " not being captured due to capture being disabled for project or because the remote config could not be fetched.")), !1;
                        if (this.shouldOptOut()) return this.loggerProvider.log("Opting session ".concat(this.identifiers.sessionId, " out of recording due to optOut config.")), !1;
                        var e, t, n = (e = this.identifiers.sessionId, t = this.config.sampleRate, 31 * Math.abs(na(e.toString())) % 1e6 / 1e6 < t);
                        return n || this.loggerProvider.log("Opting session ".concat(this.identifiers.sessionId, " out of recording due to sample rate.")), n
                    }, e.prototype.getBlockSelectors = function () {
                        var e, t, n, r = null !== (n = null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.privacyConfig) || void 0 === t ? void 0 : t.blockSelector) && void 0 !== n ? n : [];
                        if (0 !== r.length) return r
                    }, e.prototype.getMaskTextSelectors = function () {
                        if ((null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.privacyConfig) || void 0 === t ? void 0 : t.defaultMaskLevel) === "conservative") return "*";
                        var e, t, n, r, i = null === (r = null === (n = this.config) || void 0 === n ? void 0 : n.privacyConfig) || void 0 === r ? void 0 : r.maskSelector;
                        if (i) return i
                    }, e.prototype.recordEvents = function () {
                        var e, t = this,
                            n = this.getShouldRecord(),
                            r = null === (e = this.identifiers) || void 0 === e ? void 0 : e.sessionId;
                        if (n && r && this.config) {
                            this.stopRecordingEvents();
                            var i = this.config.privacyConfig;
                            this.loggerProvider.log("Session Replay capture beginning."), this.recordCancelCallback = tM({
                                emit: function (e) {
                                    if (t.shouldOptOut()) {
                                        t.loggerProvider.log("Opting session ".concat(r, " out of recording due to optOut config.")), t.stopRecordingEvents(), t.sendEvents();
                                        return
                                    }
                                    var n = JSON.stringify(e),
                                        i = t.getDeviceId();
                                    t.eventsManager && i && t.eventsManager.addEvent({
                                        event: {
                                            type: "replay",
                                            data: n
                                        },
                                        sessionId: r,
                                        deviceId: i
                                    })
                                },
                                packFn: nt,
                                inlineStylesheet: this.config.shouldInlineStylesheet,
                                hooks: {
                                    mouseInteraction: this.eventsManager && nH({
                                        eventsManager: this.eventsManager,
                                        sessionId: r,
                                        deviceIdFn: this.getDeviceId.bind(this)
                                    }),
                                    scroll: this.scrollHook
                                },
                                maskAllInputs: !0,
                                maskTextClass: V,
                                blockClass: "amp-block",
                                blockSelector: this.getBlockSelectors(),
                                maskInputFn: ns("input", i),
                                maskTextFn: ns("text", i),
                                maskTextSelector: this.getMaskTextSelectors(),
                                recordCanvas: !1,
                                errorHandler: function (e) {
                                    if (e.message.includes("insertRule") && e.message.includes("CSSStyleSheet") || e._external_) throw e;
                                    return t.loggerProvider.warn("Error while capturing replay: ", e.toString()), !0
                                }
                            }), this.getDebugInfo().then(function (e) {
                                e && tM.addCustomEvent("debug-info", e)
                            }).catch(function () {})
                        }
                    }, e.prototype.getDeviceId = function () {
                        if (null === (e = this.config) || void 0 === e ? void 0 : e.instanceName) {
                            var e, t, n;
                            n = (0, X.bM)(this.config.instanceName).identityStore.getIdentity().deviceId
                        }
                        return n || (null === (t = this.identifiers) || void 0 === t ? void 0 : t.deviceId)
                    }, e.prototype.getSessionId = function () {
                        var e;
                        return null === (e = this.identifiers) || void 0 === e ? void 0 : e.sessionId
                    }, e.prototype.flush = function (e) {
                        var t;
                        return void 0 === e && (e = !1), (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (n) {
                                return [2, null === (t = this.eventsManager) || void 0 === t ? void 0 : t.flush(e)]
                            })
                        })
                    }, e.prototype.shutdown = function () {
                        this.teardownEventListeners(!0), this.stopRecordingEvents(), this.sendEvents()
                    }, e
                }(),
                nQ = function (e) {
                    return function () {
                        var t = e.config || K();
                        return {
                            logger: t.loggerProvider,
                            logLevel: t.logLevel
                        }
                    }
                },
                n0 = (_ = new nY, {
                    init: (0, A.w_)(_.init.bind(_), "init", nQ(_)),
                    setSessionId: (0, A.w_)(_.setSessionId.bind(_), "setSessionId", nQ(_)),
                    getSessionId: (0, A.w_)(_.getSessionId.bind(_), "getSessionId", nQ(_)),
                    getSessionReplayProperties: (0, A.w_)(_.getSessionReplayProperties.bind(_), "getSessionReplayProperties", nQ(_)),
                    flush: (0, A.w_)(_.flush.bind(_), "flush", nQ(_)),
                    shutdown: (0, A.w_)(_.shutdown.bind(_), "shutdown", nQ(_))
                }),
                n1 = n0.init,
                n2 = n0.setSessionId,
                n3 = n0.getSessionId,
                n4 = n0.getSessionReplayProperties,
                n5 = n0.flush,
                n8 = n0.shutdown,
                n6 = "1.6.16",
                n7 = "@amplitude/plugin-session-replay-enrichment-browser",
                n9 = function () {
                    function e() {
                        this.name = n7, this.type = "enrichment"
                    }
                    return e.prototype.setup = function (e, t) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (t) {
                                return this.config = e, [2]
                            })
                        })
                    }, e.prototype.execute = function (e) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            var t;
                            return (0, L.Jh)(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        if (!(this.config.sessionId && this.config.sessionId !== n3())) return [3, 2];
                                        return [4, n2(this.config.sessionId).promise];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return this.config.sessionId && this.config.sessionId === e.session_id && (t = n4(), e.event_properties = (0, L.pi)((0, L.pi)({}, e.event_properties), t)), [2, Promise.resolve(e)]
                                }
                            })
                        })
                    }, e
                }(),
                re = function () {
                    function e(e) {
                        this.name = "@amplitude/plugin-session-replay-browser", this.type = "destination", this.options = (0, L.pi)({}, e), !1 !== this.options.forceSessionTracking && (this.options.forceSessionTracking = !0)
                    }
                    return e.prototype.setup = function (e, t) {
                        var n, r, i, o;
                        return (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        if (!t) return e.loggerProvider.error("SessionReplayPlugin requires v1.9.1+ of the Amplitude SDK."), [2];
                                        return e.loggerProvider.log("Installing @amplitude/plugin-session-replay, version ".concat(n6, ".")), this.clientRemove = t.remove.bind(t), this.config = e, this.options.forceSessionTracking && ("boolean" == typeof e.defaultTracking ? !1 === e.defaultTracking && (e.defaultTracking = {
                                            pageViews: !1,
                                            formInteractions: !1,
                                            fileDownloads: !1,
                                            sessions: !0
                                        }) : e.defaultTracking = (0, L.pi)((0, L.pi)({}, e.defaultTracking), {
                                            sessions: !0
                                        })), [4, n1(e.apiKey, {
                                            instanceName: this.config.instanceName,
                                            deviceId: this.config.deviceId,
                                            optOut: this.config.optOut,
                                            sessionId: this.config.sessionId,
                                            loggerProvider: this.config.loggerProvider,
                                            logLevel: this.config.logLevel,
                                            flushMaxRetries: this.config.flushMaxRetries,
                                            serverZone: this.config.serverZone,
                                            sampleRate: this.options.sampleRate,
                                            privacyConfig: {
                                                blockSelector: null === (n = this.options.privacyConfig) || void 0 === n ? void 0 : n.blockSelector,
                                                maskSelector: null === (r = this.options.privacyConfig) || void 0 === r ? void 0 : r.maskSelector,
                                                unmaskSelector: null === (i = this.options.privacyConfig) || void 0 === i ? void 0 : i.unmaskSelector,
                                                defaultMaskLevel: null === (o = this.options.privacyConfig) || void 0 === o ? void 0 : o.defaultMaskLevel
                                            },
                                            debugMode: this.options.debugMode,
                                            configEndpointUrl: this.options.configEndpointUrl,
                                            shouldInlineStylesheet: this.options.shouldInlineStylesheet,
                                            version: {
                                                type: "plugin",
                                                version: n6
                                            }
                                        }).promise];
                                    case 1:
                                        return s.sent(), [4, t.add(new n9).promise];
                                    case 2:
                                        return s.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.execute = function (e) {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (t) {
                                return [2, Promise.resolve({
                                    event: e,
                                    code: 200,
                                    message: "success"
                                })]
                            })
                        })
                    }, e.prototype.flush = function () {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, n5(!1)];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.teardown = function () {
                        return (0, L.mG)(this, void 0, void 0, function () {
                            return (0, L.Jh)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.clientRemove(n7).promise];
                                    case 1:
                                        return e.sent(), n8(), this.config = null, this.clientRemove = null, [2]
                                }
                            })
                        })
                    }, e.prototype.getSessionReplayProperties = function () {
                        return n4()
                    }, e
                }(),
                rt = function (e) {
                    return new re(e)
                }
        },
        68470: function (e, t, n) {
            let r, i, o, s;
            n.d(t, {
                Lj: function () {
                    return v
                },
                X3: function () {
                    return p
                }
            });
            let a = (e, t) => t.some(t => e instanceof t),
                u = new WeakMap,
                c = new WeakMap,
                l = new WeakMap,
                d = {
                    get(e, t, n) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return u.get(e);
                            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                        }
                        return f(e[t])
                    },
                    set: (e, t, n) => (e[t] = n, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function f(e) {
                var t;
                if (e instanceof IDBRequest) return function (e) {
                    let t = new Promise((t, n) => {
                        let r = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", o)
                            },
                            i = () => {
                                t(f(e.result)), r()
                            },
                            o = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", i), e.addEventListener("error", o)
                    });
                    return l.set(t, e), t
                }(e);
                if (c.has(e)) return c.get(e);
                let n = "function" == typeof (t = e) ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function (...e) {
                    return t.apply(h(this), e), f(this.request)
                } : function (...e) {
                    return f(t.apply(h(this), e))
                } : (t instanceof IDBTransaction && function (e) {
                    if (u.has(e)) return;
                    let t = new Promise((t, n) => {
                        let r = () => {
                                e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                            },
                            i = () => {
                                t(), r()
                            },
                            o = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                    });
                    u.set(e, t)
                }(t), a(t, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, d) : t;
                return n !== e && (c.set(e, n), l.set(n, e)), n
            }
            let h = e => l.get(e);

            function p(e, t, {
                blocked: n,
                upgrade: r,
                blocking: i,
                terminated: o
            } = {}) {
                let s = indexedDB.open(e, t),
                    a = f(s);
                return r && s.addEventListener("upgradeneeded", e => {
                    r(f(s.result), e.oldVersion, e.newVersion, f(s.transaction), e)
                }), n && s.addEventListener("blocked", e => n(e.oldVersion, e.newVersion, e)), a.then(e => {
                    o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                }).catch(() => {}), a
            }

            function v(e, {
                blocked: t
            } = {}) {
                let n = indexedDB.deleteDatabase(e);
                return t && n.addEventListener("blocked", e => t(e.oldVersion, e)), f(n).then(() => void 0)
            }
            let g = ["get", "getKey", "getAll", "getAllKeys", "count"],
                m = ["put", "add", "delete", "clear"],
                y = new Map;

            function b(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (y.get(t)) return y.get(t);
                let n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    i = m.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || g.includes(n))) return;
                let o = async function (e, ...t) {
                    let o = this.transaction(e, i ? "readwrite" : "readonly"),
                        s = o.store;
                    return r && (s = s.index(t.shift())), (await Promise.all([s[n](...t), i && o.done]))[0]
                };
                return y.set(t, o), o
            }
            d = {
                ...o = d,
                get: (e, t, n) => b(e, t) || o.get(e, t, n),
                has: (e, t) => !!b(e, t) || o.has(e, t)
            };
            let S = ["continue", "continuePrimaryKey", "advance"],
                w = {},
                I = new WeakMap,
                E = new WeakMap,
                C = {
                    get(e, t) {
                        if (!S.includes(t)) return e[t];
                        let n = w[t];
                        return n || (n = w[t] = function (...e) {
                            I.set(this, E.get(this)[t](...e))
                        }), n
                    }
                };
            async function* k(...e) {
                let t = this;
                if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
                let n = new Proxy(t, C);
                for (E.set(n, t), l.set(n, h(t)); t;) yield n, t = await (I.get(n) || t.continue()), I.delete(n)
            }

            function T(e, t) {
                return t === Symbol.asyncIterator && a(e, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === t && a(e, [IDBIndex, IDBObjectStore])
            }
            d = {
                ...s = d,
                get: (e, t, n) => T(e, t) ? k : s.get(e, t, n),
                has: (e, t) => T(e, t) || s.has(e, t)
            }
        },
        11735: function (e, t, n) {
            n.d(t, {
                CR: function () {
                    return l
                },
                FC: function () {
                    return h
                },
                Jh: function () {
                    return u
                },
                KL: function () {
                    return p
                },
                XA: function () {
                    return c
                },
                ZT: function () {
                    return i
                },
                _T: function () {
                    return s
                },
                ev: function () {
                    return d
                },
                mG: function () {
                    return a
                },
                pi: function () {
                    return o
                },
                qq: function () {
                    return f
                }
            });
            var r = function (e, t) {
                return (r = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function () {
                return (o = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
            }

            function a(e, t, n, r) {
                return new(n || (n = Promise))(function (i, o) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                            e(t)
                        })).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }

            function u(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }), o;

                function a(a) {
                    return function (u) {
                        return function (a) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function c(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function l(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function d(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function f(e) {
                return this instanceof f ? (this.v = e, this) : new f(e)
            }

            function h(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, s("next"), s("throw"), s("return", function (e) {
                    return function (t) {
                        return Promise.resolve(t).then(e, c)
                    }
                }), r[Symbol.asyncIterator] = function () {
                    return this
                }, r;

                function s(e, t) {
                    i[e] && (r[e] = function (t) {
                        return new Promise(function (n, r) {
                            o.push([e, t, n, r]) > 1 || a(e, t)
                        })
                    }, t && (r[e] = t(r[e])))
                }

                function a(e, t) {
                    try {
                        var n;
                        (n = i[e](t)).value instanceof f ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n)
                    } catch (e) {
                        l(o[0][3], e)
                    }
                }

                function u(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function p(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = c(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function (t) {
                        return new Promise(function (r, i) {
                            ! function (e, t, n, r) {
                                Promise.resolve(r).then(function (t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }, t)
                            }(r, i, (t = e[n](t)).done, t.value)
                        })
                    }
                }
            }
            "function" == typeof SuppressedError && SuppressedError
        }
    }
]);