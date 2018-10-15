require = function o(r, s, c) {
    function l(n, t) {
        if (!s[n]) {
            if (!r[n]) {
                var e = "function" == typeof require && require;
                if (!t && e)
                    return e(n, !0);
                if (u)
                    return u(n, !0);
                var i = new Error("Cannot find module '" + n + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            var a = s[n] = {
                exports: {}
            };
            r[n][0].call(a.exports, function(t) {
                var e = r[n][1][t];
                return l(e || t)
            }, a, a.exports, o, r, s, c)
        }
        return s[n].exports
    }
    for (var u = "function" == typeof require && require, t = 0; t < c.length; t++)
        l(c[t]);
    return l
}({
    AndroidPaymentExecutor: [function(t, e, n) {
        "use strict";
        function i() {
            this.className = "com/bianfeng/platform/jssupport/PaymentInterfaceExecutor"
        }
        cc._RF.push(e, "1ba84ZawxRMR7HWrl0NABOT", "AndroidPaymentExecutor"),
        i.prototype.payForProduct = function(t) {
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", t)
        }
        ,
        i.prototype.payForProduct = function(t, e, n, i, a, o, r, s, c, l, u, h) {
            var f = new Object;
            f.orderId = t,
            f.productId = e,
            f.productName = n,
            f.productPrice = i,
            f.productCount = a,
            f.roleId = o,
            f.roleName = r,
            f.roleGrade = s,
            f.roleBalance = c,
            f.serverId = l,
            f.notifyUrl = u,
            f.ext = h;
            var d = JSON.stringify(f);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", d)
        }
        ,
        i.prototype.payForSingle = function(t, e, n, i, a, o) {
            var r = new Object;
            r.orderId = t,
            r.productId = e,
            r.productName = n,
            r.productPrice = i,
            r.productCount = a,
            r.ext = o;
            var s = JSON.stringify(r);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", s)
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    AndroidPlatformExecutor: [function(n, t, e) {
        "use strict";
        function i() {
            this.className = "com/bianfeng/platform/jssupport/PlatformSdkExecutor"
        }
        cc._RF.push(t, "968c0o8cBhNf4GILwMAFtzE", "AndroidPlatformExecutor"),
        i.prototype.init = function() {
            jsb.reflection.callStaticMethod(this.className, "init", "()V")
        }
        ,
        i.prototype.setListener = function(t) {
            this.listener = t,
            jsb.reflection.callStaticMethod(this.className, "setListener", "(Ljava/lang/String;)V", "androidCallBack")
        }
        ,
        i.prototype.callback = function(t, e) {
            this.listener(t, e)
        }
        ,
        i.prototype.getSdkVersion = function() {
            return jsb.reflection.callStaticMethod(this.className, "getSdkVersion", "()Ljava/lang/String;")
        }
        ,
        i.prototype.getPlatformId = function() {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformId", "()Ljava/lang/String;")
        }
        ,
        i.prototype.getPlatformName = function() {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformName", "()Ljava/lang/String;")
        }
        ,
        i.prototype.getPlatformVersion = function() {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformVersion", "()Ljava/lang/String;")
        }
        ,
        t.exports = new i,
        window.androidCallBack = function(t, e) {
            n("AndroidPlatformExecutor").callback(t, e)
        }
        ,
        cc._RF.pop()
    }
    , {
        AndroidPlatformExecutor: "AndroidPlatformExecutor"
    }],
    AndroidUserExecutor: [function(t, e, n) {
        "use strict";
        function i() {
            this.className = "com/bianfeng/platform/jssupport/UserInterfaceExecutor"
        }
        cc._RF.push(e, "b2bdaNwiS9JE4yqgvPCgvJV", "AndroidUserExecutor"),
        i.prototype.login = function() {
            jsb.reflection.callStaticMethod(this.className, "login", "()V")
        }
        ,
        i.prototype.isSupportFunction = function(t) {
            return jsb.reflection.callStaticMethod(this.className, "isSupportFunction", "(Ljava/lang/String;)Z", t)
        }
        ,
        i.prototype.callFunction = function(t) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;)V", t)
        }
        ,
        i.prototype.callFunctionArray = function(t, e) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;Ljava/lang/String;)V", t, e)
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    BrowserPaymentExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "66882gdHe9DS6VDeHeHDEpw", "BrowserPaymentExecutor"),
        i.prototype.payForProduct = function(t, e, n, i, a, o, r, s, c, l, u, h) {
            var f = new Object;
            f.orderId = t,
            f.productId = e,
            f.productName = n,
            f.productPrice = i,
            f.productCount = a,
            f.roleId = o,
            f.roleName = r,
            f.roleGrade = s,
            f.roleBalance = c,
            f.serverId = l,
            f.notifyUrl = u,
            f.ext = h;
            JSON.stringify(f)
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    BrowserPlatformExecutor: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "96c2bL8C65DDKYJtbdI5ntA", "BrowserPlatformExecutor");
        var i = t("UserWrapper");
        function a() {
            a.androidClass = "org/cocos2dx/javascript/AppActivity"
        }
        a.androidClass = "org/cocos2dx/javascript/AppActivity",
        a.prototype.init = function() {
            this.listener(i.ACTION_RET_INIT_FAIL, "unimpl")
        }
        ,
        a.prototype.setListener = function(t) {
            this.listener = t
        }
        ,
        a.prototype.callback = function(t, e) {
            this.listener(t, e)
        }
        ,
        a.prototype.getSdkVersion = function() {
            return 0
        }
        ,
        a.prototype.getPlatformId = function() {
            return 0
        }
        ,
        a.prototype.getPlatformName = function() {
            return "browser"
        }
        ,
        a.prototype.getPlatformVersion = function() {
            return 0
        }
        ,
        e.exports = new a,
        cc._RF.pop()
    }
    , {
        BrowserPlatformExecutor: "BrowserPlatformExecutor",
        UserWrapper: "UserWrapper"
    }],
    BrowserUserExecutor: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "92235ohiBBCI7Js0PHzEdQ4", "BrowserUserExecutor");
        var i = t("UserWrapper")
          , a = t("BrowserPlatformExecutor");
        function o() {}
        var r = new o;
        o.prototype.login = function() {
            a.listener(i.ACTION_RET_LOGIN_FAIL, "unimpl")
        }
        ,
        o.prototype.isSupportFunction = function(t) {
            return !1
        }
        ,
        o.prototype.callFunction = function(t) {}
        ,
        o.prototype.callFunctionArray = function(t, e) {
            cc.log(e)
        }
        ,
        e.exports = r,
        cc._RF.pop()
    }
    , {
        BrowserPlatformExecutor: "BrowserPlatformExecutor",
        UserWrapper: "UserWrapper"
    }],
    1: [function(t, e, n) {
        "use strict";
        n.byteLength = function(t) {
            return 3 * t.length / 4 - h(t)
        }
        ,
        n.toByteArray = function(t) {
            var e, n, i, a, o, r = t.length;
            a = h(t),
            o = new u(3 * r / 4 - a),
            n = 0 < a ? r - 4 : r;
            var s = 0;
            for (e = 0; e < n; e += 4)
                i = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)],
                o[s++] = i >> 16 & 255,
                o[s++] = i >> 8 & 255,
                o[s++] = 255 & i;
            2 === a ? (i = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4,
            o[s++] = 255 & i) : 1 === a && (i = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2,
            o[s++] = i >> 8 & 255,
            o[s++] = 255 & i);
            return o
        }
        ,
        n.fromByteArray = function(t) {
            for (var e, n = t.length, i = n % 3, a = "", o = [], r = 0, s = n - i; r < s; r += 16383)
                o.push(f(t, r, s < r + 16383 ? s : r + 16383));
            1 === i ? (e = t[n - 1],
            a += c[e >> 2],
            a += c[e << 4 & 63],
            a += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
            a += c[e >> 10],
            a += c[e >> 4 & 63],
            a += c[e << 2 & 63],
            a += "=");
            return o.push(a),
            o.join("")
        }
        ;
        for (var c = [], l = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a)
            c[a] = i[a],
            l[i.charCodeAt(a)] = a;
        function h(t) {
            var e = t.length;
            if (0 < e % 4)
                throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
        }
        function f(t, e, n) {
            for (var i, a, o = [], r = e; r < n; r += 3)
                i = (t[r] << 16 & 16711680) + (t[r + 1] << 8 & 65280) + (255 & t[r + 2]),
                o.push(c[(a = i) >> 18 & 63] + c[a >> 12 & 63] + c[a >> 6 & 63] + c[63 & a]);
            return o.join("")
        }
        l["-".charCodeAt(0)] = 62,
        l["_".charCodeAt(0)] = 63
    }
    , {}],
    2: [function(e, t, L) {
        (function(t) {
            "use strict";
            var i = e("base64-js")
              , o = e("ieee754")
              , r = e("isarray");
            function n() {
                return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function s(t, e) {
                if (n() < e)
                    throw new RangeError("Invalid typed array length");
                return h.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = h.prototype : (null === t && (t = new h(e)),
                t.length = e),
                t
            }
            function h(t, e, n) {
                if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h))
                    return new h(t,e,n);
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, t)
                }
                return a(this, t, e, n)
            }
            function a(t, e, n, i) {
                if ("number" == typeof e)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, i) {
                    if (e.byteLength,
                    n < 0 || e.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (i || 0))
                        throw new RangeError("'length' is out of bounds");
                    e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,n) : new Uint8Array(e,n,i);
                    h.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = h.prototype : t = u(t, e);
                    return t
                }(t, e, n, i) : "string" == typeof e ? function(t, e, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!h.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | d(e, n)
                      , a = (t = s(t, i)).write(e, n);
                    a !== i && (t = t.slice(0, a));
                    return t
                }(t, e, n) : function(t, e) {
                    if (h.isBuffer(e)) {
                        var n = 0 | f(e.length);
                        return 0 === (t = s(t, n)).length || e.copy(t, 0, 0, n),
                        t
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                            return "number" != typeof e.length || (i = e.length) != i ? s(t, 0) : u(t, e);
                        if ("Buffer" === e.type && r(e.data))
                            return u(t, e.data)
                    }
                    var i;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }
            function c(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function l(t, e) {
                if (c(e),
                t = s(t, e < 0 ? 0 : 0 | f(e)),
                !h.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n)
                        t[n] = 0;
                return t
            }
            function u(t, e) {
                var n = e.length < 0 ? 0 : 0 | f(e.length);
                t = s(t, n);
                for (var i = 0; i < n; i += 1)
                    t[i] = 255 & e[i];
                return t
            }
            function f(t) {
                if (t >= n())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                return 0 | t
            }
            function d(t, e) {
                if (h.isBuffer(t))
                    return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                    return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n)
                    return 0;
                for (var i = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Q(t).length;
                    default:
                        if (i)
                            return K(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function p(t, e, n) {
                var i = t[e];
                t[e] = t[n],
                t[n] = i
            }
            function g(t, e, n, i, a) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof n ? (i = n,
                n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                isNaN(n) && (n = a ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length) {
                    if (a)
                        return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!a)
                        return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = h.from(e, i)),
                h.isBuffer(e))
                    return 0 === e.length ? -1 : m(t, e, n, i, a);
                if ("number" == typeof e)
                    return e &= 255,
                    h.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, i, a);
                throw new TypeError("val must be string, number or Buffer")
            }
            function m(t, e, n, i, a) {
                var o, r = 1, s = t.length, c = e.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    s /= r = 2,
                    c /= 2,
                    n /= 2
                }
                function l(t, e) {
                    return 1 === r ? t[e] : t.readUInt16BE(e * r)
                }
                if (a) {
                    var u = -1;
                    for (o = n; o < s; o++)
                        if (l(t, o) === l(e, -1 === u ? 0 : o - u)) {
                            if (-1 === u && (u = o),
                            o - u + 1 === c)
                                return u * r
                        } else
                            -1 !== u && (o -= o - u),
                            u = -1
                } else
                    for (s < n + c && (n = s - c),
                    o = n; 0 <= o; o--) {
                        for (var h = !0, f = 0; f < c; f++)
                            if (l(t, o + f) !== l(e, f)) {
                                h = !1;
                                break
                            }
                        if (h)
                            return o
                    }
                return -1
            }
            function A(t, e, n, i) {
                n = Number(n) || 0;
                var a = t.length - n;
                i ? a < (i = Number(i)) && (i = a) : i = a;
                var o = e.length;
                if (o % 2 != 0)
                    throw new TypeError("Invalid hex string");
                o / 2 < i && (i = o / 2);
                for (var r = 0; r < i; ++r) {
                    var s = parseInt(e.substr(2 * r, 2), 16);
                    if (isNaN(s))
                        return r;
                    t[n + r] = s
                }
                return r
            }
            function y(t, e, n, i) {
                return k(function(t) {
                    for (var e = [], n = 0; n < t.length; ++n)
                        e.push(255 & t.charCodeAt(n));
                    return e
                }(e), t, n, i)
            }
            function C(t, e, n) {
                return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n))
            }
            function E(t, e, n) {
                n = Math.min(t.length, n);
                for (var i = [], a = e; a < n; ) {
                    var o, r, s, c, l = t[a], u = null, h = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                    if (a + h <= n)
                        switch (h) {
                        case 1:
                            l < 128 && (u = l);
                            break;
                        case 2:
                            128 == (192 & (o = t[a + 1])) && 127 < (c = (31 & l) << 6 | 63 & o) && (u = c);
                            break;
                        case 3:
                            o = t[a + 1],
                            r = t[a + 2],
                            128 == (192 & o) && 128 == (192 & r) && 2047 < (c = (15 & l) << 12 | (63 & o) << 6 | 63 & r) && (c < 55296 || 57343 < c) && (u = c);
                            break;
                        case 4:
                            o = t[a + 1],
                            r = t[a + 2],
                            s = t[a + 3],
                            128 == (192 & o) && 128 == (192 & r) && 128 == (192 & s) && 65535 < (c = (15 & l) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & s) && c < 1114112 && (u = c)
                        }
                    null === u ? (u = 65533,
                    h = 1) : 65535 < u && (u -= 65536,
                    i.push(u >>> 10 & 1023 | 55296),
                    u = 56320 | 1023 & u),
                    i.push(u),
                    a += h
                }
                return function(t) {
                    var e = t.length;
                    if (e <= v)
                        return String.fromCharCode.apply(String, t);
                    var n = ""
                      , i = 0;
                    for (; i < e; )
                        n += String.fromCharCode.apply(String, t.slice(i, i += v));
                    return n
                }(i)
            }
            L.Buffer = h,
            L.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return h.alloc(+t)
            }
            ,
            L.INSPECT_MAX_BYTES = 50,
            h.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(),
            L.kMaxLength = n(),
            h.poolSize = 8192,
            h._augment = function(t) {
                return t.__proto__ = h.prototype,
                t
            }
            ,
            h.from = function(t, e, n) {
                return a(null, t, e, n)
            }
            ,
            h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype,
            h.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                value: null,
                configurable: !0
            })),
            h.alloc = function(t, e, n) {
                return i = null,
                o = e,
                r = n,
                c(a = t),
                a <= 0 ? s(i, a) : void 0 !== o ? "string" == typeof r ? s(i, a).fill(o, r) : s(i, a).fill(o) : s(i, a);
                var i, a, o, r
            }
            ,
            h.allocUnsafe = function(t) {
                return l(null, t)
            }
            ,
            h.allocUnsafeSlow = function(t) {
                return l(null, t)
            }
            ,
            h.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }
            ,
            h.compare = function(t, e) {
                if (!h.isBuffer(t) || !h.isBuffer(e))
                    throw new TypeError("Arguments must be Buffers");
                if (t === e)
                    return 0;
                for (var n = t.length, i = e.length, a = 0, o = Math.min(n, i); a < o; ++a)
                    if (t[a] !== e[a]) {
                        n = t[a],
                        i = e[a];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }
            ,
            h.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            h.concat = function(t, e) {
                if (!r(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return h.alloc(0);
                var n;
                if (void 0 === e)
                    for (n = e = 0; n < t.length; ++n)
                        e += t[n].length;
                var i = h.allocUnsafe(e)
                  , a = 0;
                for (n = 0; n < t.length; ++n) {
                    var o = t[n];
                    if (!h.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(i, a),
                    a += o.length
                }
                return i
            }
            ,
            h.byteLength = d,
            h.prototype._isBuffer = !0,
            h.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2)
                    p(this, e, e + 1);
                return this
            }
            ,
            h.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4)
                    p(this, e, e + 3),
                    p(this, e + 1, e + 2);
                return this
            }
            ,
            h.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8)
                    p(this, e, e + 7),
                    p(this, e + 1, e + 6),
                    p(this, e + 2, e + 5),
                    p(this, e + 3, e + 4);
                return this
            }
            ,
            h.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : function(t, e, n) {
                    var i = !1;
                    if ((void 0 === e || e < 0) && (e = 0),
                    e > this.length)
                        return "";
                    if ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if ((n >>>= 0) <= (e >>>= 0))
                        return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                        case "hex":
                            return I(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return E(this, e, n);
                        case "ascii":
                            return b(this, e, n);
                        case "latin1":
                        case "binary":
                            return S(this, e, n);
                        case "base64":
                            return C(this, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, e, n);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(),
                            i = !0
                        }
                }
                .apply(this, arguments)
            }
            ,
            h.prototype.equals = function(t) {
                if (!h.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === h.compare(this, t)
            }
            ,
            h.prototype.inspect = function() {
                var t = ""
                  , e = L.INSPECT_MAX_BYTES;
                return 0 < this.length && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "),
                this.length > e && (t += " ... ")),
                "<Buffer " + t + ">"
            }
            ,
            h.prototype.compare = function(t, e, n, i, a) {
                if (!h.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0),
                void 0 === n && (n = t ? t.length : 0),
                void 0 === i && (i = 0),
                void 0 === a && (a = this.length),
                e < 0 || n > t.length || i < 0 || a > this.length)
                    throw new RangeError("out of range index");
                if (a <= i && n <= e)
                    return 0;
                if (a <= i)
                    return -1;
                if (n <= e)
                    return 1;
                if (this === t)
                    return 0;
                for (var o = (a >>>= 0) - (i >>>= 0), r = (n >>>= 0) - (e >>>= 0), s = Math.min(o, r), c = this.slice(i, a), l = t.slice(e, n), u = 0; u < s; ++u)
                    if (c[u] !== l[u]) {
                        o = c[u],
                        r = l[u];
                        break
                    }
                return o < r ? -1 : r < o ? 1 : 0
            }
            ,
            h.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }
            ,
            h.prototype.indexOf = function(t, e, n) {
                return g(this, t, e, n, !0)
            }
            ,
            h.prototype.lastIndexOf = function(t, e, n) {
                return g(this, t, e, n, !1)
            }
            ,
            h.prototype.write = function(t, e, n, i) {
                if (void 0 === e)
                    i = "utf8",
                    n = this.length,
                    e = 0;
                else if (void 0 === n && "string" == typeof e)
                    i = e,
                    n = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                    isFinite(n) ? (n |= 0,
                    void 0 === i && (i = "utf8")) : (i = n,
                    n = void 0)
                }
                var a = this.length - e;
                if ((void 0 === n || a < n) && (n = a),
                0 < t.length && (n < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var o, r, s, c, l, u, h, f, d, p = !1; ; )
                    switch (i) {
                    case "hex":
                        return A(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return f = e,
                        d = n,
                        k(K(t, (h = this).length - f), h, f, d);
                    case "ascii":
                        return y(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return y(this, t, e, n);
                    case "base64":
                        return c = this,
                        l = e,
                        u = n,
                        k(Q(t), c, l, u);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return r = e,
                        s = n,
                        k(function(t, e) {
                            for (var n, i, a, o = [], r = 0; r < t.length && !((e -= 2) < 0); ++r)
                                n = t.charCodeAt(r),
                                i = n >> 8,
                                a = n % 256,
                                o.push(a),
                                o.push(i);
                            return o
                        }(t, (o = this).length - r), o, r, s);
                    default:
                        if (p)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                        p = !0
                    }
            }
            ,
            h.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var v = 4096;
            function b(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var a = e; a < n; ++a)
                    i += String.fromCharCode(127 & t[a]);
                return i
            }
            function S(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var a = e; a < n; ++a)
                    i += String.fromCharCode(t[a]);
                return i
            }
            function I(t, e, n) {
                var i = t.length;
                (!e || e < 0) && (e = 0),
                (!n || n < 0 || i < n) && (n = i);
                for (var a = "", o = e; o < n; ++o)
                    a += M(t[o]);
                return a
            }
            function w(t, e, n) {
                for (var i = t.slice(e, n), a = "", o = 0; o < i.length; o += 2)
                    a += String.fromCharCode(i[o] + 256 * i[o + 1]);
                return a
            }
            function R(t, e, n) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (n < t + e)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function P(t, e, n, i, a, o) {
                if (!h.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (a < e || e < o)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + i > t.length)
                    throw new RangeError("Index out of range")
            }
            function x(t, e, n, i) {
                e < 0 && (e = 65535 + e + 1);
                for (var a = 0, o = Math.min(t.length - n, 2); a < o; ++a)
                    t[n + a] = (e & 255 << 8 * (i ? a : 1 - a)) >>> 8 * (i ? a : 1 - a)
            }
            function T(t, e, n, i) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var a = 0, o = Math.min(t.length - n, 4); a < o; ++a)
                    t[n + a] = e >>> 8 * (i ? a : 3 - a) & 255
            }
            function F(t, e, n, i, a, o) {
                if (n + i > t.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function D(t, e, n, i, a) {
                return a || F(t, 0, n, 4),
                o.write(t, e, n, i, 23, 4),
                n + 4
            }
            function U(t, e, n, i, a) {
                return a || F(t, 0, n, 8),
                o.write(t, e, n, i, 52, 8),
                n + 8
            }
            h.prototype.slice = function(t, e) {
                var n, i = this.length;
                if ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : i < t && (t = i),
                (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : i < e && (e = i),
                e < t && (e = t),
                h.TYPED_ARRAY_SUPPORT)
                    (n = this.subarray(t, e)).__proto__ = h.prototype;
                else {
                    var a = e - t;
                    n = new h(a,void 0);
                    for (var o = 0; o < a; ++o)
                        n[o] = this[o + t]
                }
                return n
            }
            ,
            h.prototype.readUIntLE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || R(t, e, this.length);
                for (var i = this[t], a = 1, o = 0; ++o < e && (a *= 256); )
                    i += this[t + o] * a;
                return i
            }
            ,
            h.prototype.readUIntBE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || R(t, e, this.length);
                for (var i = this[t + --e], a = 1; 0 < e && (a *= 256); )
                    i += this[t + --e] * a;
                return i
            }
            ,
            h.prototype.readUInt8 = function(t, e) {
                return e || R(t, 1, this.length),
                this[t]
            }
            ,
            h.prototype.readUInt16LE = function(t, e) {
                return e || R(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            h.prototype.readUInt16BE = function(t, e) {
                return e || R(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            h.prototype.readUInt32LE = function(t, e) {
                return e || R(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            h.prototype.readUInt32BE = function(t, e) {
                return e || R(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            h.prototype.readIntLE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || R(t, e, this.length);
                for (var i = this[t], a = 1, o = 0; ++o < e && (a *= 256); )
                    i += this[t + o] * a;
                return (a *= 128) <= i && (i -= Math.pow(2, 8 * e)),
                i
            }
            ,
            h.prototype.readIntBE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || R(t, e, this.length);
                for (var i = e, a = 1, o = this[t + --i]; 0 < i && (a *= 256); )
                    o += this[t + --i] * a;
                return (a *= 128) <= o && (o -= Math.pow(2, 8 * e)),
                o
            }
            ,
            h.prototype.readInt8 = function(t, e) {
                return e || R(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            h.prototype.readInt16LE = function(t, e) {
                e || R(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            h.prototype.readInt16BE = function(t, e) {
                e || R(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            h.prototype.readInt32LE = function(t, e) {
                return e || R(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            h.prototype.readInt32BE = function(t, e) {
                return e || R(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            h.prototype.readFloatLE = function(t, e) {
                return e || R(t, 4, this.length),
                o.read(this, t, !0, 23, 4)
            }
            ,
            h.prototype.readFloatBE = function(t, e) {
                return e || R(t, 4, this.length),
                o.read(this, t, !1, 23, 4)
            }
            ,
            h.prototype.readDoubleLE = function(t, e) {
                return e || R(t, 8, this.length),
                o.read(this, t, !0, 52, 8)
            }
            ,
            h.prototype.readDoubleBE = function(t, e) {
                return e || R(t, 8, this.length),
                o.read(this, t, !1, 52, 8)
            }
            ,
            h.prototype.writeUIntLE = function(t, e, n, i) {
                (t = +t,
                e |= 0,
                n |= 0,
                i) || P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var a = 1
                  , o = 0;
                for (this[e] = 255 & t; ++o < n && (a *= 256); )
                    this[e + o] = t / a & 255;
                return e + n
            }
            ,
            h.prototype.writeUIntBE = function(t, e, n, i) {
                (t = +t,
                e |= 0,
                n |= 0,
                i) || P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var a = n - 1
                  , o = 1;
                for (this[e + a] = 255 & t; 0 <= --a && (o *= 256); )
                    this[e + a] = t / o & 255;
                return e + n
            }
            ,
            h.prototype.writeUInt8 = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 1, 255, 0),
                h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[e] = 255 & t,
                e + 1
            }
            ,
            h.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 2, 65535, 0),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : x(this, t, e, !0),
                e + 2
            }
            ,
            h.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 2, 65535, 0),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : x(this, t, e, !1),
                e + 2
            }
            ,
            h.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 4, 4294967295, 0),
                h.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : T(this, t, e, !0),
                e + 4
            }
            ,
            h.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 4, 4294967295, 0),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : T(this, t, e, !1),
                e + 4
            }
            ,
            h.prototype.writeIntLE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var a = Math.pow(2, 8 * n - 1);
                    P(this, t, e, n, a - 1, -a)
                }
                var o = 0
                  , r = 1
                  , s = 0;
                for (this[e] = 255 & t; ++o < n && (r *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                    this[e + o] = (t / r >> 0) - s & 255;
                return e + n
            }
            ,
            h.prototype.writeIntBE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var a = Math.pow(2, 8 * n - 1);
                    P(this, t, e, n, a - 1, -a)
                }
                var o = n - 1
                  , r = 1
                  , s = 0;
                for (this[e + o] = 255 & t; 0 <= --o && (r *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                    this[e + o] = (t / r >> 0) - s & 255;
                return e + n
            }
            ,
            h.prototype.writeInt8 = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 1, 127, -128),
                h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            h.prototype.writeInt16LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 2, 32767, -32768),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : x(this, t, e, !0),
                e + 2
            }
            ,
            h.prototype.writeInt16BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 2, 32767, -32768),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : x(this, t, e, !1),
                e + 2
            }
            ,
            h.prototype.writeInt32LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 4, 2147483647, -2147483648),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : T(this, t, e, !0),
                e + 4
            }
            ,
            h.prototype.writeInt32BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || P(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : T(this, t, e, !1),
                e + 4
            }
            ,
            h.prototype.writeFloatLE = function(t, e, n) {
                return D(this, t, e, !0, n)
            }
            ,
            h.prototype.writeFloatBE = function(t, e, n) {
                return D(this, t, e, !1, n)
            }
            ,
            h.prototype.writeDoubleLE = function(t, e, n) {
                return U(this, t, e, !0, n)
            }
            ,
            h.prototype.writeDoubleBE = function(t, e, n) {
                return U(this, t, e, !1, n)
            }
            ,
            h.prototype.copy = function(t, e, n, i) {
                if (n || (n = 0),
                i || 0 === i || (i = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                0 < i && i < n && (i = n),
                i === n)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                t.length - e < i - n && (i = t.length - e + n);
                var a, o = i - n;
                if (this === t && n < e && e < i)
                    for (a = o - 1; 0 <= a; --a)
                        t[a + e] = this[a + n];
                else if (o < 1e3 || !h.TYPED_ARRAY_SUPPORT)
                    for (a = 0; a < o; ++a)
                        t[a + e] = this[a + n];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                return o
            }
            ,
            h.prototype.fill = function(t, e, n, i) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e,
                    e = 0,
                    n = this.length) : "string" == typeof n && (i = n,
                    n = this.length),
                    1 === t.length) {
                        var a = t.charCodeAt(0);
                        a < 256 && (t = a)
                    }
                    if (void 0 !== i && "string" != typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !h.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i)
                } else
                    "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= e)
                    return this;
                var o;
                if (e >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (o = e; o < n; ++o)
                        this[o] = t;
                else {
                    var r = h.isBuffer(t) ? t : K(new h(t,i).toString())
                      , s = r.length;
                    for (o = 0; o < n - e; ++o)
                        this[o + e] = r[o % s]
                }
                return this
            }
            ;
            var N = /[^+\/0-9A-Za-z-_]/g;
            function M(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function K(t, e) {
                var n;
                e = e || 1 / 0;
                for (var i = t.length, a = null, o = [], r = 0; r < i; ++r) {
                    if (55295 < (n = t.charCodeAt(r)) && n < 57344) {
                        if (!a) {
                            if (56319 < n) {
                                -1 < (e -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            if (r + 1 === i) {
                                -1 < (e -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            a = n;
                            continue
                        }
                        if (n < 56320) {
                            -1 < (e -= 3) && o.push(239, 191, 189),
                            a = n;
                            continue
                        }
                        n = 65536 + (a - 55296 << 10 | n - 56320)
                    } else
                        a && -1 < (e -= 3) && o.push(239, 191, 189);
                    if (a = null,
                    n < 128) {
                        if ((e -= 1) < 0)
                            break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }
            function Q(t) {
                return i.toByteArray(function(t) {
                    var e;
                    if ((t = (e = t,
                    e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).replace(N, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function k(t, e, n, i) {
                for (var a = 0; a < i && !(a + n >= e.length || a >= t.length); ++a)
                    e[a + n] = t[a];
                return a
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "base64-js": 1,
        ieee754: 4,
        isarray: 3
    }],
    3: [function(t, e, n) {
        var i = {}.toString;
        e.exports = Array.isArray || function(t) {
            return "[object Array]" == i.call(t)
        }
    }
    , {}],
    4: [function(t, e, n) {
        n.read = function(t, e, n, i, a) {
            var o, r, s = 8 * a - i - 1, c = (1 << s) - 1, l = c >> 1, u = -7, h = n ? a - 1 : 0, f = n ? -1 : 1, d = t[e + h];
            for (h += f,
            o = d & (1 << -u) - 1,
            d >>= -u,
            u += s; 0 < u; o = 256 * o + t[e + h],
            h += f,
            u -= 8)
                ;
            for (r = o & (1 << -u) - 1,
            o >>= -u,
            u += i; 0 < u; r = 256 * r + t[e + h],
            h += f,
            u -= 8)
                ;
            if (0 === o)
                o = 1 - l;
            else {
                if (o === c)
                    return r ? NaN : 1 / 0 * (d ? -1 : 1);
                r += Math.pow(2, i),
                o -= l
            }
            return (d ? -1 : 1) * r * Math.pow(2, o - i)
        }
        ,
        n.write = function(t, e, n, i, a, o) {
            var r, s, c, l = 8 * o - a - 1, u = (1 << l) - 1, h = u >> 1, f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
            r = u) : (r = Math.floor(Math.log(e) / Math.LN2),
            e * (c = Math.pow(2, -r)) < 1 && (r--,
            c *= 2),
            2 <= (e += 1 <= r + h ? f / c : f * Math.pow(2, 1 - h)) * c && (r++,
            c /= 2),
            u <= r + h ? (s = 0,
            r = u) : 1 <= r + h ? (s = (e * c - 1) * Math.pow(2, a),
            r += h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, a),
            r = 0)); 8 <= a; t[n + d] = 255 & s,
            d += p,
            s /= 256,
            a -= 8)
                ;
            for (r = r << a | s,
            l += a; 0 < l; t[n + d] = 255 & r,
            d += p,
            r /= 256,
            l -= 8)
                ;
            t[n + d - p] |= 128 * g
        }
    }
    , {}],
    GameItemNodeCache: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e152d9C35tFTprqe+GejRVR", "GameItemNodeCache");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemFrame: [cc.SpriteFrame]
            },
            onLoad: function() {},
            getItemFrame: function(t) {
                return this.itemFrame[t]
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GameItemNode: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "05338ua06pJnI5SNuFb3D/7", "GameItemNode");
        t("GameItemNodeCache");
        cc.Class({
            extends: cc.Component,
            properties: {
                spItem: cc.Sprite,
                resultRun: cc.Node
            },
            onLoad: function() {
                this.oriPos = {},
                this.oriPos.x = this.spItem.node.x,
                this.oriPos.y = this.spItem.node.y,
                this.oriPos.w = this.spItem.node.width,
                this.oriPos.h = this.spItem.node.height,
                this.oriOpacity = 150,
                this.oriScale = this.spItem.node.scale,
                this.addTouchEvent(this.spItem),
                this.spItem.node.active = !1,
                this.spItem.node.opacity = 255,
                this.resultRun.opacity = this.oriOpacity,
                this.canTouch = !1,
                this.itemId = -1
            },
            addTouchEvent: function(r) {
                var s, c, l = this, n = this.oriPos.x, i = this.oriPos.y, u = 10;
                r.node.on("touchstart", function(t) {
                    1 == l.canTouch && (s = r.node.x,
                    c = r.node.y)
                }, r),
                r.node.on("touchmove", function(t) {
                    if (1 == l.canTouch) {
                        var e = t.getDeltaX()
                          , n = t.getDeltaY();
                        if (r.node.x += e,
                        r.node.y += n,
                        50 != r.node.getLocalZOrder()) {
                            var i = cc.v2(r.node.x, r.node.y)
                              , a = cc.v2(s, c)
                              , o = cc.pDistance(i, a);
                            u < o && l.node.setLocalZOrder(50)
                        } else
                            l.node.getLocalZOrder()
                    }
                }, r),
                r.node.on("touchend", function(t) {
                    if (cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playButtonSound(),
                    50 != l.node.getLocalZOrder())
                        255 != l.spItem.node.opacity && (l.resultRun.active = !1,
                        l.spItem.node.opacity = 255,
                        l.canTouch = !0,
                        l.father.removeItemFromPaodao(l.itemId, l.nodeId),
                        1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial4")),
                        l.node.setLocalZOrder(l.nodeId);
                    else if (50 == l.node.getLocalZOrder()) {
                        var e = l.getDragPosId({
                            x: r.node.x,
                            y: r.node.y
                        });
                        -2 == e ? l.dragToRecycle() : -1 == e ? (l.dragToPaodao(),
                        r.node.y = i,
                        r.node.x = n,
                        l.node.setLocalZOrder(l.nodeId)) : 0 <= e && e <= 14 ? l.dragToOther(e, function() {
                            r.node.y = i,
                            r.node.x = n,
                            l.node.setLocalZOrder(l.nodeId)
                        }) : (r.node.y = i,
                        r.node.x = n,
                        l.node.setLocalZOrder(l.nodeId))
                    }
                }, r)
            },
            setParam: function(t, e, n, i) {
                this.father = t,
                this.layPutSize = e,
                this.laySellSize = n,
                this.nodeId = i,
                this.node.setLocalZOrder(this.nodeId),
                this.dragMatrix = this.getDragMatrix(this.nodeId),
                this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                },
                this.laySellMatrix = {
                    bl: {
                        x: this.laySellSize.x - this.node.x - this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y - this.laySellSize.height / 2
                    },
                    tr: {
                        x: this.laySellSize.x - this.node.x + this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y + this.laySellSize.height / 2
                    }
                },
                null == this.oriPos && (this.oriPos = {},
                this.oriPos.x = this.spItem.node.x,
                this.oriPos.y = this.spItem.node.y,
                this.oriPos.w = this.spItem.node.width,
                this.oriPos.h = this.spItem.node.height,
                this.oriOpacity = 150,
                this.oriScale = this.spItem.node.scale,
                this.spItem.node.active = !1,
                this.spItem.node.opacity = 255,
                this.canTouch = !1,
                this.itemId = -1)
            },
            getDragMatrix: function(t) {
                for (var e = -1 * Math.floor(t / 3), n = t % 3 * -1, i = [], a = 0; a <= 14; a++) {
                    var o = Math.floor(a / 3)
                      , r = a % 3
                      , s = {
                        index: a,
                        pos: {
                            x: 0,
                            y: 0
                        },
                        bl: {
                            x: 0,
                            y: 0
                        },
                        tr: {
                            x: 0,
                            y: 0
                        }
                    };
                    s.pos.x = 150 * (n + r),
                    s.pos.y = -112 * (e + o),
                    s.bl.x = 150 * (n + r) - 71.5,
                    s.bl.y = -112 * (e + o) - 36 + this.spItem.node.y,
                    s.tr.x = 150 * (n + r) + 71.5,
                    s.tr.y = -112 * (e + o) + 36 + this.spItem.node.y,
                    i.push(s)
                }
                return i
            },
            getDragPosId: function(t) {
                var e = -100;
                if (1 == this.isInRect(t, this.layPutMatrix))
                    return -1;
                if (1 == this.isInRect(t, this.laySellMatrix))
                    return -2;
                for (var n = this.dragMatrix.length - 1; 0 <= n; n--) {
                    var i = this.dragMatrix[n];
                    if (1 == this.isInRect(t, i)) {
                        e = i.index;
                        break
                    }
                }
                return e
            },
            isInRect: function(t, e) {
                return t.x >= e.bl.x && t.y >= e.bl.y && t.x <= e.tr.x && t.y <= e.tr.y
            },
            dragToRecycle: function() {
                var t = playerManager.getObjData("Panel" + this.nodeId)
                  , e = parseInt(t.price);
                e = e < 0 ? Math.floor(.8 * Math.abs(e)) : Math.floor(.85 * e),
                playerManager.addNumData("Coin", e),
                cc.director.emit("updateCoin");
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene")
                  , i = cc.instantiate(n.effgetcoinPre);
                i.parent = this.node,
                i.x = (this.laySellMatrix.bl.x + this.laySellMatrix.tr.x) / 2,
                i.y = (this.laySellMatrix.bl.y + this.laySellMatrix.tr.y) / 2,
                this.removeItemFromPanel()
            },
            dragToPaodao: function() {
                this.father.isRiverFull() || (this.resultRun.active = !0,
                this.spItem.node.opacity = this.oriOpacity,
                this.canTouch = !1,
                this.father.addItemToPaodao(this.itemId, this.nodeId),
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playRaceStartSound(),
                1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial3"))
            },
            dragToOther: function(t, e) {
                var n = this
                  , i = this.father.getItemNodeByNodeId(t)
                  , a = playerManager.getObjData("Panel" + n.nodeId);
                if (-1 == i.itemId) {
                    i.moveItemToPanel(n.itemId, a.price);
                    var o = cc.sequence(cc.scaleTo(.03, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.03, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.05, 1 * this.oriScale, 1 * this.oriScale), cc.moveTo(.03, this.dragMatrix[t].pos.x, this.dragMatrix[t].pos.y), cc.callFunc(function() {
                        i.spItem.node.opacity = 255,
                        n.itemId = -1,
                        n.removeItemFromPanel()
                    }, n));
                    this.spItem.node.runAction(o)
                } else if (this.itemId == i.itemId && 255 == i.spItem.node.opacity && 29 != i.itemId && t != n.nodeId) {
                    var r = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    r.playMergeSound();
                    var s = fish_data[n.itemId + 1].price;
                    i.moveItemToPanel(n.itemId + 1, -1 * s),
                    this.conbinAnimation(t, this.itemId, function() {
                        i.spItem.node.opacity = 255,
                        n.itemId = -1,
                        n.removeItemFromPanel(),
                        i.itemId > playerManager.getNumData("UnlockLevel") && (playerManager.addNumData("UnlockLevel", 1),
                        r.showUnlockDialog(playerManager.getNumData("UnlockLevel")),
                        r.playUnlockSound())
                    }),
                    1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial2")
                } else
                    e && e()
            },
            conbinAnimation: function(t, e, n) {
                var i = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache")
                  , a = (this.father.getItemNodeByNodeId(t),
                new cc.Node("effectNode1"))
                  , o = a.addComponent(cc.Sprite);
                o.spriteFrame = i.getItemFrame(e),
                o.type = cc.Sprite.Type.SIMPLE,
                o.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                a.width = this.oriPos.w,
                a.height = this.oriPos.h,
                a.x = this.dragMatrix[t].pos.x,
                a.y = this.spItem.node.y,
                this.node.addChild(a);
                var r = cc.sequence(cc.moveTo(.1, a.x - 100, a.y), cc.moveTo(.2, a.x, a.y), cc.removeSelf());
                a.runAction(r);
                var s = new cc.Node("effectNode2")
                  , c = s.addComponent(cc.Sprite);
                c.spriteFrame = i.getItemFrame(e),
                c.type = cc.Sprite.Type.SIMPLE,
                c.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                s.width = this.oriPos.w,
                s.height = this.oriPos.h,
                s.x = this.dragMatrix[t].pos.x,
                s.y = this.spItem.node.y,
                this.node.addChild(s);
                var l = cc.sequence(cc.moveTo(.1, s.x + 100, s.y), cc.moveTo(.2, s.x, s.y), cc.callFunc(function() {
                    n && n()
                }, this), cc.removeSelf());
                s.runAction(l)
            },
            loadItemToPanel: function(t) {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = t,
                this.spItem.spriteFrame = e.getItemFrame(t),
                this.spItem.node.active = !0,
                this.canTouch = !0,
                this.spItem.node.width = this.oriPos.w,
                this.spItem.node.height = this.oriPos.h,
                this.spItem.node.x = this.oriPos.x,
                this.spItem.node.y = this.oriPos.y,
                this.node.setLocalZOrder(t)
            },
            addItemToPanel: function(t, e) {
                var n = this
                  , i = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = t,
                this.spItem.spriteFrame = i.getItemFrame(t),
                this.spItem.node.active = !0,
                this.canTouch = !0,
                this.spItem.node.width = this.oriPos.w,
                this.spItem.node.height = this.oriPos.h,
                this.spItem.node.x = this.father.btnBuy.node.x - this.node.x,
                this.spItem.node.y = this.father.btnBuy.node.y - this.node.y,
                this.node.setLocalZOrder(50);
                var a = cc.sequence(cc.moveTo(.15, this.oriPos.x, this.oriPos.y), cc.scaleTo(.1, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.1, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.2, 1 * this.oriScale, 1 * this.oriScale), cc.callFunc(function() {
                    n.node.setLocalZOrder(n.itemId)
                }, n));
                this.spItem.node.runAction(a),
                playerManager.setObjData("Panel" + n.nodeId, {
                    level: t,
                    state: 0,
                    price: "" + e
                })
            },
            moveItemToPanel: function(t, e) {
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = t,
                this.spItem.spriteFrame = n.getItemFrame(t),
                this.spItem.node.active = !0,
                this.canTouch = !0,
                this.spItem.node.opacity = this.oriOpacity,
                this.spItem.node.width = this.oriPos.w,
                this.spItem.node.height = this.oriPos.h,
                playerManager.setObjData("Panel" + this.nodeId, {
                    level: t,
                    state: 0,
                    price: "" + e
                })
            },
            removeItemFromPanel: function() {
                this.spItem.node.active = !1,
                this.canTouch = !1,
                this.spItem.node.opacity = 255,
                this.itemId = -1,
                this.spItem.node.x = this.oriPos.x,
                this.spItem.node.y = this.oriPos.y,
                this.node.setLocalZOrder(this.nodeId),
                playerManager.setObjData("Panel" + this.nodeId, {
                    level: -1,
                    state: 0,
                    price: "0"
                })
            },
            canPut: function() {
                return !this.spItem.node.active
            }
        }),
        cc._RF.pop()
    }
    , {
        GameItemNodeCache: "GameItemNodeCache"
    }],
    GameItemPaodao: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0078c+hSQ5GuL31PpZH7MSC", "GameItemPaodao");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemFrame: [cc.SpriteFrame]
            },
            onLoad: function() {
                var t = this;
                this.beginPos = {
                    x: -290,
                    y: 242
                },
                this.coinPos = {
                    x: 290,
                    y: 6
                },
                this.curState = 0,
                this.schedule(function() {
                    t.checkAcelTime()
                }, 1)
            },
            update: function(t) {},
            checkAcelTime: function(t) {
                if (null != this.itemId)
                    if (playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState) {
                        var e = 2 / fish_data[this.itemId].time;
                        this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = e,
                        this.curState = 0
                    } else if (0 < playerManager.getNumData("AcelTime") && 0 == this.curState) {
                        e = 2 / fish_data[this.itemId].time;
                        e *= 2,
                        this.curState = 1,
                        this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = e
                    }
            },
            setParam: function(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                this.beginPos = {
                    x: -290,
                    y: 242
                },
                this.coinPos = {
                    x: 290,
                    y: 6
                },
                this.father = t,
                this.itemId = e,
                this.node.x = this.beginPos.x,
                this.node.y = this.beginPos.y,
                this.node.rotation = 180,
                this.getComponent(cc.Sprite).spriteFrame = this.itemFrame[e];
                var i = 2 / fish_data[e].time;
                0 < playerManager.getNumData("AcelTime") && (cc.log("speed up"),
                i *= 2,
                this.curState = 1);
                var a = this.getComponent(cc.Animation);
                a.getAnimationState("fish_swim_anim").speed = i,
                a.play("fish_swim_anim", n)
            },
            getCoin: function() {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").addCoinInPaodao(this.itemId)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GamePaodao: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b9a2d6X7IdI4JrR8yrC0rRi", "GamePaodao");
        var i = t("GameItemNode")
          , a = t("arrowIcon")
          , o = t("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnSelect: cc.Button,
                btnBuy: cc.Button,
                labelPaodaoCount: cc.Label,
                labelCoin: cc.Label,
                labelBuyCoin: cc.Label,
                labelProduct: cc.Label,
                layoutPut: cc.Layout,
                layoutSell: cc.Layout,
                scriptGameItemNode: [i],
                arrowIconScript: a,
                itemPrefab: cc.Prefab,
                addCoinPrefab: cc.Prefab,
                effdoublecoinPre: cc.Prefab,
                spStart: cc.Sprite,
                spStartFull: cc.Sprite,
                spOh: cc.Sprite
            },
            onLoad: function() {
                var t = this
                  , n = this;
                this.customEvent = {
                    updateCoin: "refreshCoin",
                    effectCoin: "playCoinEffect"
                };
                var e = function() {
                    var e = t.customEvent[i];
                    cc.director.on(i, function(t) {
                        n[e]()
                    })
                };
                for (var i in this.customEvent)
                    e();
                this.itemPrefabArr = [],
                this.layPutSize = {},
                this.layPutSize.x = this.layoutPut.node.x,
                this.layPutSize.y = this.layoutPut.node.y,
                this.layPutSize.width = this.layoutPut.node.width,
                this.layPutSize.height = this.layoutPut.node.height,
                this.laySellSize = {},
                this.laySellSize.x = this.layoutSell.node.x,
                this.laySellSize.y = this.layoutSell.node.y,
                this.laySellSize.width = this.layoutSell.node.width,
                this.laySellSize.height = this.layoutSell.node.height,
                this.isCoinEffectPlay = !1,
                this.STATE = {
                    Ready: 0,
                    BuyItem: 1
                },
                this.state = this.STATE.Ready;
                for (var a = this.scriptGameItemNode.length - 1; 0 <= a; a--)
                    this.scriptGameItemNode[a] = this.node.getChildByName("bgSprite" + (a + 1)).getComponent("GameItemNode"),
                    this.scriptGameItemNode[a].setParam(this, this.layPutSize, this.laySellSize, a);
                this.refreshCoin(),
                this.refreshPaodaoCount(),
                this.scheduleOnce(function() {
                    n.loadItemNode()
                }, .1),
                this.spStart.node.setLocalZOrder(1),
                this.spStartFull.node.setLocalZOrder(1),
                this.curState = 0,
                this.schedule(function() {
                    n.checkAcelTime()
                }, 1)
            },
            onDestroy: function() {
                for (var t in this.customEvent)
                    cc.director.off(t)
            },
            update: function(t) {},
            checkAcelTime: function(t) {
                playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState ? (this.curState = 0,
                this.removeDoubleCoinEffect()) : 0 < playerManager.getNumData("AcelTime") && 0 == this.curState && (this.curState = 1,
                this.playDoubleCoinEffect())
            },
            refreshCoin: function() {
                this.labelCoin.string = o.unit_format(playerManager.getNumData("Coin")),
                this.labelBuyCoin.string = o.unit_format(playerManager.getNumData("Price0"))
            },
            playCoinEffect: function() {
                var t = this;
                if (0 == t.isCoinEffectPlay) {
                    t.isCoinEffectPlay = !0;
                    var e = cc.sequence(cc.scaleTo(.03, 1, 1), cc.scaleTo(.03, 1.3, 1.3), cc.scaleTo(.05, 1, 1), cc.callFunc(function() {
                        t.isCoinEffectPlay = !1
                    }, t));
                    this.labelCoin.node.runAction(e)
                }
            },
            playDoubleCoinEffect: function() {
                this.removeDoubleCoinEffect(),
                this.effdoublecoin = cc.instantiate(this.effdoublecoinPre),
                this.node.addChild(this.effdoublecoin, 100)
            },
            removeDoubleCoinEffect: function() {
                null != this.effdoublecoin && (this.effdoublecoin.removeFromParent(!0),
                this.effdoublecoin = null)
            },
            refreshPaodaoCount: function() {
                this.labelPaodaoCount.string = this.itemPrefabArr.length + "/10";
                for (var t = 0, e = this.itemPrefabArr.length - 1; 0 <= e; e--) {
                    var n = this.itemPrefabArr[e].getComponent("GameItemPaodao");
                    t += fish_data[n.itemId].coinsec
                }
                this.labelProduct.string = o.unit_format(t) + " /sec",
                this.arrowIconScript.setData(this.itemPrefabArr.length),
                10 <= this.itemPrefabArr.length ? this.spStartFull.node.active = !0 : this.spStartFull.node.active = !1
            },
            loadItemNode: function() {
                for (var t = 0; t <= 14; t++) {
                    var e = playerManager.getObjData("Panel" + t)
                      , n = this.scriptGameItemNode[t];
                    0 <= e.level && (n.loadItemToPanel(e.level),
                    1 == e.state && (n.spItem.node.opacity = n.oriOpacity,
                    n.resultRun.active = !0,
                    n.canTouch = !1,
                    this.loadItemPaodao(e.level)))
                }
            },
            loadItemPaodao: function(t) {
                var e = cc.instantiate(this.itemPrefab)
                  , n = Math.floor(200 * Math.random()) / 100;
                e.getComponent("GameItemPaodao").setParam(this, t, n),
                this.node.addChild(e),
                this.itemPrefabArr[this.itemPrefabArr.length] = e,
                this.refreshPaodaoCount()
            },
            addItemToPaodao: function(t, e) {
                if (10 <= this.itemPrefabArr.length)
                    return !1;
                var n = cc.instantiate(this.itemPrefab);
                n.getComponent("GameItemPaodao").setParam(this, t),
                this.node.addChild(n),
                this.itemPrefabArr[this.itemPrefabArr.length] = n,
                this.refreshPaodaoCount();
                var i = playerManager.getObjData("Panel" + e);
                return playerManager.setObjData("Panel" + e, {
                    level: t,
                    state: 1,
                    price: i.price
                }),
                !0
            },
            removeItemFromPaodao: function(t, e) {
                for (var n = this.itemPrefabArr.length - 1; 0 <= n; n--) {
                    if (this.itemPrefabArr[n].getComponent("GameItemPaodao").itemId == t) {
                        this.itemPrefabArr[n].removeFromParent(!0),
                        this.itemPrefabArr.splice(n, 1);
                        var i = playerManager.getObjData("Panel" + e);
                        playerManager.setObjData("Panel" + e, {
                            level: t,
                            state: 0,
                            price: i.price
                        });
                        break
                    }
                }
                this.refreshPaodaoCount()
            },
            getItemNodeByNodeId: function(t) {
                return this.scriptGameItemNode[t]
            },
            onButtonBuy: function(t, e) {
                if (this.isPoolFull() || this.state == this.STATE.BuyItem)
                    return !1;
                this.state = this.STATE.BuyItem;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                n.playPurchaseSound();
                for (var i = 0; i < this.scriptGameItemNode.length; i++) {
                    var a = this.scriptGameItemNode[i];
                    if (1 == a.canPut()) {
                        var o = fish_data[0]
                          , r = playerManager.getNumData("Price0");
                        1 == playerManager.coinEnough(r) && (playerManager.addNumData("Coin", -1 * r),
                        a.addItemToPanel(0, r),
                        r = parseInt(r * (1 + o.rise)),
                        playerManager.setNumData("Price0", r),
                        null != n.fishdialog && n.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getNumData("Coin")),
                        this.refreshCoin());
                        break
                    }
                }
                return 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial5"),
                this.state = this.STATE.Ready,
                !0
            },
            buyItem: function(t) {
                for (var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), n = 0; n < this.scriptGameItemNode.length; n++) {
                    var i = this.scriptGameItemNode[n];
                    if (1 == i.canPut()) {
                        var a = playerManager.getNumData("Price" + t);
                        1 == playerManager.coinEnough(a) && (playerManager.addNumData("Coin", -1 * a),
                        i.addItemToPanel(t, a),
                        null != e.fishdialog && e.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getNumData("Coin")));
                        break
                    }
                }
            },
            putItem: function(t) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                for (var e = 0; e < this.scriptGameItemNode.length; e++) {
                    var n = this.scriptGameItemNode[e];
                    if (1 == n.canPut()) {
                        var i = playerManager.getNumData("Price" + t);
                        n.addItemToPanel(t, i);
                        break
                    }
                }
            },
            isPoolFull: function() {
                for (var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), e = !0, n = 0; n < this.scriptGameItemNode.length; n++) {
                    if (1 == this.scriptGameItemNode[n].canPut()) {
                        e = !1;
                        break
                    }
                }
                return 1 == e && t.showToast("The pool is full"),
                e
            },
            isRiverFull: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                return 10 <= this.itemPrefabArr.length && (t.showToast("The river is full"),
                !0)
            },
            addCoinInPaodao: function(t) {
                var e = fish_data[t].coinround
                  , n = cc.instantiate(this.addCoinPrefab);
                n.getComponent("addcoin").setData(e),
                n.parent = this.node,
                n.setLocalZOrder(100)
            }
        }),
        cc._RF.pop()
    }
    , {
        GameItemNode: "GameItemNode",
        arrowIcon: "arrowIcon",
        "number-util": "number-util"
    }],
    GameScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a34c5fSLgFJYaRfVBIvePAa", "GameScene");
        var i = t("GamePaodao")
          , a = t("audioManager")
          , o = t("instant-util")
          , l = t("number-util")
          , r = t("analytics-data")
          , s = 0
          , c = 1
          , u = 2
          , h = 3
          , f = 4
          , d = 5;
        cc.Class({
            extends: cc.Component,
            properties: {
                btnBack: cc.Button,
                btnStore: cc.Button,
                btnShare: cc.Button,
                btnTutorial: cc.Button,
                btnMoregame: cc.Button,
                bgShare: cc.Node,
                rewardTime: cc.Node,
                labelZuan: cc.Label,
                labelCD: cc.Label,
                giftPoint: cc.Node,
                prefabListDialog: cc.Prefab,
                noCoinDlg: cc.Prefab,
                alertDlg: cc.Prefab,
                notification: cc.Prefab,
                unlockDlg: cc.Prefab,
                inviteFriendsDlg: cc.Prefab,
                speedUpDlg: cc.Prefab,
                tutotialPre: cc.Prefab,
                offcoinPre: cc.Prefab,
                bonustimePre: cc.Prefab,
                tutorialPre: [cc.Prefab],
                effgetcoinPre: cc.Prefab,
                scriptGamePaodao: i,
                audioManager: a,
                customSharePre: cc.Prefab,
                moregameDlg: cc.Prefab,
                _dailyData: null
            },
            onLoad: function() {
                var t = this;
                r.game_page_event(),
                this.shareAnim = this.bgShare.getComponent(cc.Animation),
                this.shareAnim.play(),
                this.btnMoregame.node.active = !1;
                var n = this;
                this.updateCDTimeWithOffline(["AcelTimeCD", "AcelTime"]),
                0 < playerManager.getNumData("AcelTimeCD") && (n.setShareBtnEnable(!1),
                n.rewardTime.getComponent("count-down-node").setData(playerManager.getNumData("AcelTimeCD"), function(t) {
                    playerManager.setNumData("AcelTimeCD", t),
                    0 == t && n.setShareBtnEnable(!0)
                })),
                this.labelCD.node.active = !1,
                this.check2XCD(),
                1 == playerManager.getObjData("animTutorial") && (this.tutorialCount = 0,
                this.startTutorial(this.tutorialCount)),
                this.customEvent = {
                    game_eventshow: "getOfflineCoin"
                };
                var e = function() {
                    var e = t.customEvent[i];
                    cc.director.on(i, function(t) {
                        n[e]()
                    })
                };
                for (var i in this.customEvent)
                    e();
                this.getOfflineCoin(),
                this.getMessageReward(),
                playerManager.getNumData("UnlockLevel") >= fish_data.length - 1 && (this.btnMoregame.node.active = !0),
                this.schedule(function() {
                    r.invite_friends_info_start_event(),
                    server_util.getActivityList(function(t) {
                        r.invite_friends_info_success_event(),
                        t && (cc.sys.localStorage.setItem("dailyData1", JSON.stringify(t)),
                        n.setGiftPoint(t))
                    }
                    .bind(this), function(t) {
                        n.giftPoint.active = !1,
                        t.code && r.invite_friends_info_err_event(t.code)
                    }
                    .bind(this))
                }, 300, null, .1),
                server_util.getGameList("1", function(t) {
                    globalManager.gameListInGame = t.list
                })
            },
            update: function(t) {},
            onDestroy: function() {
                for (var t in cc.log("onDestory"),
                this.customEvent)
                    cc.director.off(t);
                l.playerdataCountDownClear("AcelTime"),
                playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)),
                o.setLeaderboardScore(playerManager.getScore()),
                server_util.setLeaderboardScore(playerManager.getScore())
            },
            check2XCD: function() {
                var e = this;
                0 < playerManager.getNumData("AcelTime") ? (e.labelCD.node.active = !0,
                e.labelCD.string = "coins 2x " + l.time_format(playerManager.getNumData("AcelTime")),
                l.playerdataCountDown("AcelTime", 1, function(t) {
                    e.labelCD && (e.labelCD.string = "coins 2x " + l.time_format(t)),
                    0 == t && e.labelCD && (e.labelCD.node.active = !1)
                })) : e.labelCD.node.active = !1
            },
            updateCDTimeWithOffline: function(t) {
                var e = Math.floor((new Date).getTime() / 1e3)
                  , n = playerManager.getObjData("lastOffline");
                if (0 < e - n && -1 != n) {
                    var i = e - n;
                    for (var a in t)
                        playerManager.addNumData(t[a], -1 * i),
                        playerManager.getNumData(t[a]) < 0 && playerManager.setNumData(t[a], 0)
                }
            },
            getOfflineCoin: function() {
                var t = Math.floor((new Date).getTime() / 1e3)
                  , e = playerManager.getObjData("lastOffline");
                if (0 < t - e && -1 != e) {
                    for (var n = 1800 < t - e ? 1800 : t - e, i = 0, a = 0; a <= 14; a++) {
                        var o = playerManager.getObjData("Panel" + a);
                        0 <= o.level && 1 == o.state && (i += fish_data[o.level].coinsec)
                    }
                    0 < i && 180 < n ? (null != this.offcoin_dialog && this.offcoin_dialog.getComponent("getoffcoin_dlg").closeDialog(),
                    this.offcoin_dialog = cc.instantiate(this.offcoinPre),
                    this.offcoin_dialog.parent = this.node) : 0 < i && (i *= n,
                    playerManager.addNumData("Coin", i),
                    cc.director.emit("updateCoin"))
                }
            },
            onButtonBack: function(t, e) {
                cc.director.loadScene("LoginScene")
            },
            onButtonTutorial: function(t, e) {
                this.showTutorialDialog()
            },
            onButtonStore: function(t, e) {},
            onButtonWatchVideo: function() {
                var e = this;
                r.game_share_event(),
                r.watch_video_event();
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.showRewardAd(function() {
                    cc.log("showAd success"),
                    r.watch_video_success_event(),
                    o.requestRewardAd("2123873081225075_2123877704557946"),
                    e.showSpeedUpDialog(),
                    e.setShareBtnEnable(!1),
                    playerManager.addNumData("AcelTime", 120),
                    e.check2XCD(),
                    e.rewardTime.getComponent("count-down-node").setData(300, function(t) {
                        playerManager.setNumData("AcelTimeCD", t),
                        0 == t && e.setShareBtnEnable(!0)
                    }),
                    e.closeBonusTimeDlg()
                }, function() {
                    cc.log("RewardAd load err"),
                    o.requestRewardAd("2123873081225075_2123877704557946"),
                    e.showSpeedUpDialog(),
                    e.setShareBtnEnable(!1),
                    playerManager.addNumData("AcelTime", 30),
                    e.check2XCD(),
                    e.rewardTime.getComponent("count-down-node").setData(300, function(t) {
                        playerManager.setNumData("AcelTimeCD", t),
                        0 == t && e.setShareBtnEnable(!0)
                    }),
                    e.closeBonusTimeDlg(),
                    t.showToast("No available Ad, 30s bonus time for free.")
                })
            },
            onButtonShare: function(t, e) {
                r.game_share_event();
                var n = this
                  , i = function() {
                    r.speed_up_with_share_event(),
                    o.chooseContext(function(t) {
                        r.game_share_success_event(),
                        n.showSpeedUpDialog(),
                        n.setShareBtnEnable(!1),
                        playerManager.addNumData("AcelTime", 120),
                        n.check2XCD(),
                        n.rewardTime.getComponent("count-down-node").setData(300, function(t) {
                            playerManager.setNumData("AcelTimeCD", t),
                            0 == t && n.setShareBtnEnable(!0)
                        }),
                        n.closeBonusTimeDlg()
                    }, function(t, e) {
                        n.showToast(e),
                        r.game_share_fail_event(t)
                    }
                    .bind(n))
                }
                  , a = function() {
                    cc.log("bonus callback1"),
                    r.speed_up_without_share_event(),
                    n.showSpeedUpDialog(),
                    n.setShareBtnEnable(!1),
                    playerManager.addNumData("AcelTime", 120),
                    n.check2XCD(),
                    n.rewardTime.getComponent("count-down-node").setData(300, function(t) {
                        playerManager.setNumData("AcelTimeCD", t),
                        0 == t && n.setShareBtnEnable(!0)
                    }),
                    n.closeBonusTimeDlg()
                };
                this.showBonusTimeDlg(i, a)
            },
            setShareBtnEnable: function(t) {
                t ? (this.bgShare.opacity = 255,
                this.btnShare.interactable = !0,
                this.shareAnim.play()) : (this.bgShare.opacity = 167,
                this.btnShare.interactable = !1,
                this.shareAnim.stop())
            },
            onButtonListDialog: function(t, e) {
                1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial5"),
                this.fishdialog ? (this.fishdialog.parent = this.node,
                this.fishdialog.getComponent("fishlist-dialog").setListData(),
                this.fishdialog.active = !0) : (this.fishdialog = cc.instantiate(this.prefabListDialog),
                this.fishdialog.parent = this.node)
            },
            showToast: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2.5;
                t && (this.toast && this.toast.removeFromParent(),
                this.toast = cc.instantiate(this.alertDlg),
                this.toast.getComponent("toast").setData(t),
                this.toast.parent = this.node,
                this.toast.runAction(cc.sequence(cc.delayTime(e), cc.removeSelf(!0))),
                this.toast.setLocalZOrder(100))
            },
            showNotification: function(t, e) {
                var n = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(),
                this.notificationDlg = cc.instantiate(this.notification),
                this.notificationDlg.getComponent("notification").setData(t, e, function() {
                    n.notificationDlg = null
                }),
                this.notificationDlg.parent = this.node,
                this.notificationDlg.setLocalZOrder(100)
            },
            showTutorialDialog: function() {
                cc.instantiate(this.tutotialPre).parent = this.node
            },
            showNoCoinDialog: function() {
                var t = cc.instantiate(this.noCoinDlg);
                t.parent = this.node,
                t.setLocalZOrder(100)
            },
            showUnlockDialog: function(t) {
                var e = cc.instantiate(this.unlockDlg);
                e.getComponent("unlock-dialog").setData(t),
                e.parent = this.node,
                e.setLocalZOrder(100),
                r.achieve_level_event(t),
                playerManager.getNumData("UnlockLevel") >= fish_data.length - 1 && (this.btnMoregame.node.active = !0)
            },
            showInviteFriendsDialog: function() {
                var t = cc.instantiate(this.inviteFriendsDlg);
                t.parent = this.node,
                t.setLocalZOrder(100)
            },
            showSpeedUpDialog: function() {
                var t = cc.instantiate(this.speedUpDlg);
                t.parent = this.node,
                t.setLocalZOrder(100),
                t.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf(!0)))
            },
            startTutorial: function(t) {
                cc.log("GameScene startTutorial:" + t);
                var e = cc.instantiate(this.tutorialPre[t]);
                this.node.addChild(e),
                e.setLocalZOrder(100)
            },
            nextTutorial: function() {
                this.tutorialCount++,
                this.tutorialCount < this.tutorialPre.length && this.startTutorial(this.tutorialCount)
            },
            addCoinInPaodao: function(t) {
                this.scriptGamePaodao.addCoinInPaodao(t),
                this.audioManager.playSound(c)
            },
            playUnlockSound: function() {
                this.audioManager.playSound(d)
            },
            playPurchaseSound: function() {
                this.audioManager.playSound(h)
            },
            playMergeSound: function() {
                this.audioManager.playSound(u)
            },
            playRaceStartSound: function() {
                this.audioManager.playSound(f)
            },
            playButtonSound: function() {
                this.audioManager.playSound(s)
            },
            showCustomShare: function(e, t, n) {
                var i = cc.instantiate(this.customSharePre);
                o.customImageShare(i, function(t) {
                    i.getComponent("customShare").setIcon(t, e)
                }, t, n)
            },
            showBonusTimeDlg: function(t, e) {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0),
                this.bonustime_dlg = null),
                this.bonustime_dlg = cc.instantiate(this.bonustimePre),
                this.bonustime_dlg.parent = this.node,
                this.bonustime_dlg.setLocalZOrder(100),
                this.bonustime_dlg.getComponent("bonustime_dlg").setData(t, e)
            },
            closeBonusTimeDlg: function() {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0),
                this.bonustime_dlg = null)
            },
            getMessageReward: function() {
                var t = o.getEntryPointData();
                if (cc.log("ext=" + JSON.stringify(t)),
                t && t.type && "messenger" == t.type && t.player_id == o.getPlayerID()) {
                    var e = playerManager.getObjData("messageRewardIds");
                    cc.log("messageIds=" + JSON.stringify(e));
                    for (var n = !1, i = 0; i < e.length; i++)
                        if (e[i] == t.task_id) {
                            n = !0;
                            break
                        }
                    if (!n) {
                        var a = parseInt(t.coin);
                        playerManager.addNumData("Coin", a),
                        cc.director.emit("updateCoin"),
                        e.push(t.task_id),
                        playerManager.setObjData("messageRewardIds", e),
                        this.showNotification("Compensation Gifts\n+" + l.unit_format(a) + " coins", 5)
                    }
                }
            },
            moreGameClick: function() {
                this.moregamedialog ? (this.moregamedialog.parent = this.node,
                this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg),
                this.moregamedialog.parent = this.node,
                this.moregamedialog.getComponent("moregame-dialog").setData(2))
            },
            setGiftPoint: function(t) {
                var e = !1;
                if ((t = t || JSON.parse(cc.sys.localStorage.getItem("dailyData1"))).length <= 0)
                    this.giftPoint.active = e;
                else {
                    var n = playerManager.getObjData("dailyTask");
                    if (!l.isOneDay(n.taskTime, Date.parse(new Date)))
                        return e = !0,
                        void (this.giftPoint.active = e);
                    for (var i = n.taskProgress, a = 0; a < t.length; a++) {
                        var o = t[a];
                        if ("2" == o.task_obj_type) {
                            o.reward_num = 1,
                            o.do_num = 1;
                            for (var r = 0; r < i.length; r++)
                                if (i[r].task_id == o.task_id) {
                                    o.reward_num = i[r].reward_num,
                                    o.do_num = i[r].do_num;
                                    break
                                }
                        }
                        if (0 < parseInt(o.reward_num))
                            return e = !0,
                            void (this.giftPoint.active = e)
                    }
                    for (var s = playerManager.getObjData("dailyPoint").rewardState, c = 0; c < s.length; c++)
                        if (!s[c])
                            return e = !0,
                            void (this.giftPoint.active = e);
                    this.giftPoint.active = e
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        GamePaodao: "GamePaodao",
        "analytics-data": "analytics-data",
        audioManager: "audioManager",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    IosPaymentExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "637a4HiycRKWLtNihBUgN5U", "IosPaymentExecutor"),
        i.prototype.payForProduct = function(t, e, n, i, a, o, r, s, c, l, u, h) {}
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    IosPlatformExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "32773vK6hdCeZLShZooooQk", "IosPlatformExecutor"),
        i.prototype.init = function() {
            jsb.reflection.callStaticMethod("YmnSdk", "init")
        }
        ,
        i.prototype.setListener = function(t) {
            window.callbackCode = t
        }
        ,
        i.prototype.getSdkVersion = function() {
            return 1
        }
        ,
        i.prototype.getPlatformId = function() {
            return 2
        }
        ,
        i.prototype.getPlatformName = function() {
            return 3
        }
        ,
        i.prototype.getPlatformVersion = function() {
            return 4
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    IosUserExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "dc284OuxRVJwoRHZhspDNlx", "IosUserExecutor"),
        i.prototype.login = function() {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", "facebook_auto_login")
        }
        ,
        i.prototype.isSupportFunction = function(t) {
            return jsb.reflection.callStaticMethod("YmnSdk", "isSupportFunction:", t)
        }
        ,
        i.prototype.callFunction = function(t) {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", t)
        }
        ,
        i.prototype.callFunctionArray = function(t, e) {
            console.log("call here");
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:withData:", t, e)
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    OsUtil: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "c0ef6VDcdlGeqeXR0m0WSfx", "OsUtil"),
        i.prototype.getOsName = function() {
            return cc.sys.isBrowser ? "Browser" : cc.sys.os == cc.sys.OS_ANDROID ? "Android" : cc.sys.os == cc.sys.OS_IOS ? "Ios" : cc.sys.os == cc.sys.OS_WINDOWS ? "Windows" : null
        }
        ,
        i.prototype.getOsTarget = function(t) {
            return this.getOsName() + t
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    PaymentInterface: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ff47c150VVGZrIoqmVp1YdF", "PaymentInterface");
        var f = t(t("OsUtil").getOsTarget("PaymentExecutor"));
        function i() {}
        i.prototype.payForProduct = function(t) {
            f.payForProduct(t)
        }
        ,
        i.prototype.payForProduct = function(t, e, n, i, a, o, r, s, c, l, u, h) {
            f.payForProduct(t, e, n, i, a, o, r, s, c, l, u, h)
        }
        ,
        i.prototype.payForSingle = function(t, e, n, i, a, o) {
            f.payForSingle(t, e, n, i, a, o)
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {
        OsUtil: "OsUtil"
    }],
    PaymentWrapper: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cabd3sG1MhFtacuoHOQ2snb", "PaymentWrapper"),
        e.exports = new function() {
            this.PAYRESULT_SUCCESS = 200,
            this.PAYRESULT_FAIL = 201,
            this.PAYRESULT_CANCEL = 202,
            this.PAYRESULT_NETWORK_ERROR = 203,
            this.PAYRESULT_PRODUCTIONINFOR_INCOMPLETE = 204,
            this.PAYRESULT_INIT_SUCCESS = 205,
            this.PAYRESULT_INIT_FAIL = 206,
            this.PAYRESULT_NOW_PAYING = 207
        }
        ,
        cc._RF.pop()
    }
    , {}],
    PlatformSdk: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0dbc4vqxo5LQZKSFslHj1rv", "PlatformSdk");
        var i = t(t("OsUtil").getOsTarget("PlatformExecutor"));
        function a() {}
        a.prototype.init = function() {
            i.init()
        }
        ,
        a.prototype.setListener = function(t) {
            i.setListener(t)
        }
        ,
        a.prototype.getSdkVersion = function() {
            return i.getSdkVersion()
        }
        ,
        a.prototype.getPlatformId = function() {
            return i.getPlatformId()
        }
        ,
        a.prototype.getPlatformName = function() {
            return i.getPlatformName()
        }
        ,
        a.prototype.getPlatformVersion = function() {
            return i.getPlatformVersion()
        }
        ,
        e.exports = new a,
        cc._RF.pop()
    }
    , {
        OsUtil: "OsUtil"
    }],
    Tutorial1: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77bc4oS4JRHuoV3Xlp5Ab9H", "Tutorial1");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.count = 0;
                var t = this.getComponent(cc.Animation);
                t.getAnimationState("tutorial_anim1");
                t.play("tutorial_anim1"),
                this.clicktime = 0
            },
            update: function(t) {
                0 < this.clicktime && (this.clicktime = this.clicktime - t)
            },
            onButtonBuy: function(t, e) {
                if (!(0 < this.clicktime)) {
                    var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    n.scriptGamePaodao.onButtonBuy(),
                    this.count++,
                    2 <= this.count && (cc.log("Tutorial1 nextTutorial"),
                    this.node.removeFromParent(!0),
                    n.nextTutorial()),
                    this.clicktime = .2
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Tutorial2: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a63b4JzW0dCSbRMgEi2/Xof", "Tutorial2");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this
                  , n = this;
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim2");
                e.play("tutorial_anim2"),
                this.customEvent = {
                    nextTutorial2: "nexttutorial"
                };
                var i = function() {
                    var e = t.customEvent[a];
                    cc.director.on(a, function(t) {
                        n[e]()
                    })
                };
                for (var a in this.customEvent)
                    i()
            },
            onDestroy: function() {
                for (var t in cc.log("onDestory Tutorial2"),
                this.customEvent)
                    cc.director.off(t)
            },
            update: function(t) {},
            nexttutorial: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(),
                this.node.removeFromParent(!0),
                t.nextTutorial()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Tutorial3: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ffb59WbB/VIUJSH6tqUc++Y", "Tutorial3");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this
                  , n = this;
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim3");
                e.play("tutorial_anim3"),
                this.customEvent = {
                    nextTutorial3: "nexttutorial"
                };
                var i = function() {
                    var e = t.customEvent[a];
                    cc.director.on(a, function(t) {
                        n[e]()
                    })
                };
                for (var a in this.customEvent)
                    i()
            },
            onDestroy: function() {
                for (var t in cc.log("onDestory Tutorial3"),
                this.customEvent)
                    cc.director.off(t)
            },
            update: function(t) {},
            nexttutorial: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(),
                this.node.removeFromParent(!0),
                t.nextTutorial()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Tutorial4: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77c5aGp/n1E37W1RDJUEmm1", "Tutorial4");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this
                  , n = this;
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim4");
                e.play("tutorial_anim4"),
                this.customEvent = {
                    nextTutorial4: "nexttutorial"
                };
                var i = function() {
                    var e = t.customEvent[a];
                    cc.director.on(a, function(t) {
                        n[e]()
                    })
                };
                for (var a in this.customEvent)
                    i()
            },
            onDestroy: function() {
                for (var t in cc.log("onDestory Tutorial4"),
                this.customEvent)
                    cc.director.off(t)
            },
            update: function(t) {},
            nexttutorial: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(),
                this.node.removeFromParent(!0),
                t.nextTutorial()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Tutorial5: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2a9e2y0e3JMyrSpO31iybHz", "Tutorial5");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this
                  , n = this;
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim4");
                e.play("tutorial_anim4"),
                this.customEvent = {
                    nextTutorial5: "nexttutorial"
                };
                var i = function() {
                    var e = t.customEvent[a];
                    cc.director.on(a, function(t) {
                        n[e]()
                    })
                };
                for (var a in this.customEvent)
                    i()
            },
            onDestroy: function() {
                for (var t in cc.log("onDestory Tutorial5"),
                this.customEvent)
                    cc.director.off(t)
            },
            update: function(t) {},
            nexttutorial: function() {
                if (this.count++,
                !(this.count < 2)) {
                    var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    this.onDestroy(),
                    this.node.removeFromParent(!0),
                    t.nextTutorial()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Tutorial6: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "85b404eFWBNCZQlHd9Z7OEn", "Tutorial6");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this;
                this.scheduleOnce(function() {
                    t.nexttutorial()
                }, 2),
                playerManager.setObjData("animTutorial", !1)
            },
            onDestroy: function() {
                cc.log("onDestory Tutorial6")
            },
            update: function(t) {},
            nexttutorial: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(),
                this.node.removeFromParent(!0),
                t.nextTutorial()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    UserInterface: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9b79eg56/lIsYpDoef0ucNk", "UserInterface");
        var i = t(t("OsUtil").getOsTarget("UserExecutor"));
        function a() {}
        a.prototype.login = function() {
            i.login()
        }
        ,
        a.prototype.isSupportFunction = function(t) {
            return i.isSupportFunction(t)
        }
        ,
        a.prototype.callFunction = function(t) {
            i.callFunction(t)
        }
        ,
        a.prototype.callFunctionArray = function(t, e) {
            i.callFunctionArray(t, e)
        }
        ,
        e.exports = new a,
        cc._RF.pop()
    }
    , {
        OsUtil: "OsUtil"
    }],
    UserWrapper: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "63cd4LqAVdHtoViVeFb6i96", "UserWrapper"),
        e.exports = new function() {
            this.ACTION_RET_INIT_SUCCESS = 100,
            this.ACTION_RET_INIT_FAIL = 101,
            this.ACTION_RET_LOGIN_SUCCESS = 102,
            this.ACTION_RET_LOGIN_TIMEOUT = 103,
            this.ACTION_RET_LOGIN_NO_NEED = 104,
            this.ACTION_RET_LOGIN_FAIL = 105,
            this.ACTION_RET_LOGIN_CANCEL = 106,
            this.ACTION_RET_LOGOUT_SUCCESS = 107,
            this.ACTION_RET_LOGOUT_FAIL = 108,
            this.ACTION_RET_PLATFORM_ENTER = 109,
            this.ACTION_RET_PLATFORM_BACK = 110,
            this.ACTION_RET_PAUSE_PAGE = 111,
            this.ACTION_RET_EXIT_PAGE = 112,
            this.ACTION_RET_ANTIADDICTIONQUERY = 113,
            this.ACTION_RET_REALNAMEREGISTER = 114,
            this.ACTION_RET_ACCOUNTSWITCH_SUCCESS = 115,
            this.ACTION_RET_ACCOUNTSWITCH_FAIL = 116
        }
        ,
        cc._RF.pop()
    }
    , {}],
    WindowsPaymentExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "004b8AyghFCuY1tLrNZTBsh", "WindowsPaymentExecutor"),
        i.prototype.payForProduct = function(t, e, n, i, a, o, r, s, c, l, u, h) {}
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    WindowsPlatformExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "760c7cWcRJGmqq4yIxOXqie", "WindowsPlatformExecutor"),
        i.prototype.init = function() {}
        ,
        i.prototype.setListener = function(t) {}
        ,
        i.prototype.getSdkVersion = function() {
            return 1
        }
        ,
        i.prototype.getPlatformId = function() {
            return 2
        }
        ,
        i.prototype.getPlatformName = function() {
            return 3
        }
        ,
        i.prototype.getPlatformVersion = function() {
            return 4
        }
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    WindowsUserExecutor: [function(t, e, n) {
        "use strict";
        function i() {}
        cc._RF.push(e, "66010SrVAxKl7uwTZPgnIqV", "WindowsUserExecutor"),
        i.prototype.login = function() {}
        ,
        i.prototype.isSupportFunction = function(t) {
            return !1
        }
        ,
        i.prototype.callFunction = function(t) {}
        ,
        i.prototype.callFunction = function(t, e) {}
        ,
        e.exports = new i,
        cc._RF.pop()
    }
    , {}],
    addcoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3cb1d5uYcBCErO7VXUkY20a", "addcoin");
        var a = t("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                layoutPut: cc.Layout,
                effgetcoinPre: cc.Prefab,
                effNode: cc.Node,
                coinLabel: cc.Label
            },
            onLoad: function() {
                this.layPutSize = {},
                this.layPutSize.x = this.layoutPut.node.x,
                this.layPutSize.y = this.layoutPut.node.y,
                this.layPutSize.width = this.layoutPut.node.width,
                this.layPutSize.height = this.layoutPut.node.height,
                this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                }
            },
            setData: function(t) {
                this.layPutSize = {},
                this.layPutSize.x = this.layoutPut.node.x,
                this.layPutSize.y = this.layoutPut.node.y,
                this.layPutSize.width = this.layoutPut.node.width,
                this.layPutSize.height = this.layoutPut.node.height,
                this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                };
                var e = parseInt(Math.random() * (this.layPutMatrix.tr.x + .9999 - this.layPutMatrix.bl.x) + this.layPutMatrix.bl.x, 10)
                  , n = parseInt(Math.random() * (this.layPutMatrix.tr.y + .9999 - this.layPutMatrix.bl.y) + this.layPutMatrix.bl.y, 10);
                this.coinLabel.string = "+" + a.unit_format(t),
                this.coinLabel.node.x = e,
                this.coinLabel.node.y = n;
                var i = cc.sequence(cc.moveBy(.8, 0, 20), cc.removeSelf());
                this.node.runAction(i),
                playerManager.addNumData("Coin", t),
                cc.director.emit("updateCoin"),
                cc.director.emit("effectCoin"),
                cc.instantiate(this.effgetcoinPre).parent = this.effNode
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {
        "number-util": "number-util"
    }],
    "analytics-data": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "806eftFF+5E2KrsoycKWvm+", "analytics-data");
        var i = t("instant-util");
        e.exports = {
            login_page_event: function() {
                i.logEvent("on_login_page")
            },
            game_page_event: function() {
                i.logEvent("on_game_page")
            },
            login_share_event: function() {
                i.logEvent("login_share")
            },
            game_share_event: function() {
                i.logEvent("game_share")
            },
            game_share_success_event: function() {
                i.logEvent("game_share_success")
            },
            game_share_fail_event: function(t) {
                "limit" == t ? i.logEvent("game_share_limit") : i.logEvent("game_share_fail")
            },
            speed_up_with_share_event: function() {
                i.logEvent("speed_up_with_share")
            },
            speed_up_without_share_event: function() {
                i.logEvent("speed_up_without_share")
            },
            watch_video_event: function() {
                i.logEvent("watch_video")
            },
            watch_video_success_event: function() {
                i.logEvent("watch_video_success")
            },
            share_get_coin_event: function() {
                i.logEvent("share_get_coin")
            },
            share_get_coin_fail_event: function(t) {
                "limit" == t ? i.logEvent("share_get_coin_limit") : i.logEvent("share_get_coin_fail")
            },
            entry_with_type_event: function(t) {
                "share" == t ? i.logEvent("entry_with_share") : "update" == t && i.logEvent("entry_with_update")
            },
            entry_with_context_event: function(t, e) {
                t && i.logEvent("entry_with_context", null, {
                    contextId: t,
                    group: e
                })
            },
            share_offline_coin_event: function(t) {
                i.logEvent("share_offline_coin", null, {
                    isShare: t
                })
            },
            share_offline_coin_success_event: function() {
                i.logEvent("share_offline_coin_success")
            },
            share_offline_coin_fail_event: function(t) {
                "limit" == t ? i.logEvent("share_offline_coin_limit") : i.logEvent("share_offline_coin_fail")
            },
            get_offline_coin_without_share_event: function() {
                i.logEvent("offline_coin_without_share")
            },
            create_shortcut_event: function() {
                i.logEvent("create_shortcut", null, {
                    platform: i.getPlatform()
                })
            },
            entry_with_share_event: function() {
                i.logEvent("new_player_link_click")
            },
            fb_set_data_fail_event: function(t) {
                i.logEvent("fb_set_data_fail", null, {
                    msg: t
                })
            },
            fb_get_data_fail_event: function(t) {
                i.logEvent("fb_get_data_fail", null, {
                    msg: t
                })
            },
            achieve_level_event: function(t) {
                if (t)
                    switch (t) {
                    case 4:
                        this.achieve_level_5_event();
                        break;
                    case 9:
                        this.achieve_level_10_event();
                        break;
                    case 19:
                        this.achieve_level_20_event();
                        break;
                    case 29:
                        this.achieve_level_30_event()
                    }
            },
            achieve_level_5_event: function() {
                i.logEvent("achieve_level_5")
            },
            achieve_level_10_event: function() {
                i.logEvent("achieve_level_10")
            },
            achieve_level_20_event: function() {
                i.logEvent("achieve_level_20")
            },
            achieve_level_30_event: function() {
                i.logEvent("achieve_level_30")
            },
            data_loading_event: function() {
                i.logEvent("data_loading")
            },
            invite_friends_info_start_event: function() {
                i.logEvent("invite_friends_info_start")
            },
            invite_friends_info_success_event: function() {
                i.logEvent("invite_friends_info_success")
            },
            invite_friends_info_err_event: function(t) {
                i.logEvent("invite_friends_info_err", null, {
                    code: t
                })
            },
            invite_friends_event: function() {
                i.logEvent("invite_friends_share")
            },
            invite_friends_success_event: function() {
                i.logEvent("invite_friends_success_share")
            },
            invite_new_success_event: function() {
                i.logEvent("invite_new_success")
            },
            unlock_fish_share_event: function() {
                i.logEvent("unlock_fish_share")
            },
            task_btn_start_event: function(t) {
                t = t || "undefined",
                i.logEvent("task_btn_start_" + t)
            },
            task_btn_claim_event: function(t) {
                t = t || "undefined",
                i.logEvent("task_btn_claim_" + t)
            },
            gift_claim_event: function(t) {
                i.logEvent("gift_claim_" + t)
            },
            switchgameasync_event: function(t) {
                i.logEvent("click_to_" + t)
            },
            all_share_click_event: function() {
                i.logEvent("all_share_click")
            }
        },
        cc._RF.pop()
    }
    , {
        "instant-util": "instant-util"
    }],
    arrowIcon: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c017aj/2mhB664BY7B82c2y", "arrowIcon"),
        cc.Class({
            extends: cc.Component,
            properties: {
                arrowSprite: [cc.Sprite]
            },
            onLoad: function() {},
            update: function(t) {},
            setData: function(t) {
                for (var e = 0; e < this.arrowSprite.length; e++)
                    this.arrowSprite[e].node.active = !1;
                for (e = 0; e < t; e++)
                    this.arrowSprite[e].node.active = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    audioManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "94b4eNTDqVDVIlSfE32YTHX", "audioManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sounds: {
                    url: cc.AudioClip,
                    default: []
                },
                bgm: {
                    url: cc.AudioClip,
                    default: null
                }
            },
            onLoad: function() {
                cc.audioEngine.play(this.bgm, !0, .01)
            },
            playSound: function(t) {
                playerManager.getObjData("enableSound") && cc.audioEngine.play(this.sounds[t], !1, 1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    bonustime_dlg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6d0f7+TO+NKv4VSYO4b5yNB", "bonustime_dlg");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                shareBtn: cc.Node,
                share_toggle: {
                    default: null,
                    type: cc.Toggle
                }
            },
            onLoad: function() {},
            setData: function(t, e) {
                this.callback = t,
                this.callback1 = e
            },
            shareClick: function() {
                this.share_toggle.isChecked ? this.callback && this.callback() : this.callback1 && this.callback1()
            },
            closeDialog: function() {
                this.node.removeFromParent(!1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "count-down-node": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f3376OGyF9MuYe1ZY+sZ8dN", "count-down-node");
        var o = t("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                count_time_label: {
                    default: null,
                    type: cc.Label
                }
            },
            setData: function(t, i) {
                var a = this;
                a.node.active = !0;
                var e = parseInt(t / 60)
                  , n = t - 60 * e;
                a.count_time_label.string = e + ":" + (n < 10 ? "0" + n : n),
                this.countDownId = o.countTime(t, function(t) {
                    if (cc.isValid(a.node)) {
                        var e = parseInt(t / 60)
                          , n = t - 60 * e;
                        a.count_time_label && (a.count_time_label.string = e + ":" + (n < 10 ? "0" + n : n)),
                        i(t),
                        0 == t && a.node && (a.node.active = !1)
                    } else
                        o.clearInterval(this.countDownId)
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {
        "number-util": "number-util"
    }],
    customShare: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dee5fVbOYBH0YTTqqs1ZvIS", "customShare");
        t("webimg-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                playerIcon: cc.Sprite,
                fishIcon: cc.Sprite
            },
            onLoad: function() {},
            update: function(t) {},
            setIcon: function(t, e) {
                this.playerIcon.spriteFrame = new cc.SpriteFrame(t),
                this.playerIcon.type = cc.Sprite.Type.SIMPLE,
                this.playerIcon.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.fishIcon.spriteFrame = n.getItemFrame(e),
                this.fishIcon.type = cc.Sprite.Type.SIMPLE,
                this.fishIcon.sizeMode = cc.Sprite.SizeMode.CUSTOM
            }
        }),
        cc._RF.pop()
    }
    , {
        "webimg-util": "webimg-util"
    }],
    "daily-bonus-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2ac00wO7yFBRK430rmFeBr/", "daily-bonus-dialog");
        var u = t("number-util")
          , h = (t("instant-util"),
        t("analytics-data"))
          , i = [{
            task_id: "1013",
            task_title: "Ask friends for help",
            task_desc: "Earn points with a friend's click.",
            task_obj_type: "5",
            total_progress: "1",
            total_task_times: "9999",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1024",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {
                reward_id: "1025",
                reward_type: "2",
                reward_title: "",
                reward_desc: "",
                number: "20"
            }],
            progress: "0",
            task_times: "2",
            reward_num: "0"
        }, {
            task_id: "1004",
            task_title: "Login game",
            task_desc: "",
            task_obj_type: "2",
            total_progress: "1",
            total_task_times: "1",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1010",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {
                reward_id: "1011",
                reward_type: "2",
                reward_title: "",
                reward_desc: "",
                number: "5"
            }],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }, {
            task_id: "1005",
            task_title: "Watch video",
            task_desc: "",
            task_obj_type: "3",
            total_progress: "1",
            total_task_times: "9",
            scene: "0",
            config: {
                interval: 600
            },
            reward: [{
                reward_id: "1012",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {
                reward_id: "1013",
                reward_type: "2",
                reward_title: "",
                reward_desc: "",
                number: "10"
            }],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }]
          , a = "dailyData1"
          , f = [15, 30, 60, 100]
          , d = [.25, .5, 1, 2];
        cc.Class({
            extends: cc.Component,
            properties: {
                gifts_btns: {
                    default: [],
                    type: cc.Node
                },
                daily_bonus_prefab: {
                    default: null,
                    type: cc.Prefab
                },
                task_layout: {
                    default: null,
                    type: cc.Node
                },
                progress: {
                    default: null,
                    type: cc.ProgressBar
                },
                point_label: {
                    default: null,
                    type: cc.RichText
                },
                hint_label: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.addPoint(0);
                var t = cc.sys.localStorage.getItem(a);
                cc.log("localData=" + t),
                t = t ? JSON.parse(t) : i;
                var e = this.setData(t);
                this.task_layout.getComponent("list-adapter").initListView(this.daily_bonus_prefab, "daily-node", e, this.addPoint.bind(this)),
                h.invite_friends_info_start_event(),
                server_util.getActivityList(function(t) {
                    if (h.invite_friends_info_success_event(),
                    t) {
                        cc.sys.localStorage.setItem(a, JSON.stringify(t));
                        var e = this.setData(t);
                        this.task_layout.getComponent("list-adapter").refreshListView(e),
                        this.hint_label.active = t.length < 4
                    }
                }
                .bind(this), function(t) {
                    t.code && h.invite_friends_info_err_event(t.code),
                    this.hint_label.active = !0
                }
                .bind(this))
            },
            setData: function(t) {
                if (t && !(t.length <= 0)) {
                    var e = playerManager.getObjData("dailyTask");
                    if (u.isOneDay(e.taskTime, Date.parse(new Date))) {
                        var n = e.taskProgress;
                        t.map(function(t) {
                            "2" == t.task_obj_type && (t.reward_num = 1,
                            t.do_num = 1);
                            for (var e = 0; e < n.length; e++)
                                if ("5" != t.task_obj_type && n[e].task_id == t.task_id) {
                                    t.reward_num = n[e].reward_num,
                                    t.do_num = n[e].do_num;
                                    break
                                }
                        })
                    } else
                        t.map(function(t) {
                            "2" == t.task_obj_type && (t.reward_num = 1,
                            t.do_num = 1)
                        });
                    return t
                }
            },
            start: function() {
                this.progress.totalLength = cc.director.getWinSize().width - 240,
                cc.log("totalL=" + this.progress.totalLength)
            },
            addPoint: function(t) {
                var e = playerManager.getObjData("dailyPoint")
                  , n = e.point + t;
                this.point_label.string = "<i>" + n + "</i>",
                cc.log("point=" + n);
                var i = e.rewardState;
                if (n < 100) {
                    for (var a = 0; a < f.length; a++)
                        if (n < f[a]) {
                            var o = 0 < a ? f[a - 1] : 0
                              , r = .25 / (f[a] - o) * (n - o) + .25 * a;
                            cc.log("progress=" + r),
                            this.progress.progress = r;
                            break
                        }
                } else
                    this.progress.progress = 1;
                for (var s = i.length; s < f.length; s++)
                    f[s] <= n && i.push(!1);
                for (var c = 0; c < i.length; c++)
                    i[c] ? this.giftState(c, !0, !0) : this.giftState(c, !0, !1);
                playerManager.setObjData("dailyPoint", {
                    point: n,
                    rewardState: i
                })
            },
            giftClick: function(t, e) {
                h.gift_claim_event(e);
                var n = playerManager.getNumData("UnlockLevel") - 4;
                n = 0 <= n ? n : 0;
                var i = playerManager.getNumData("Price" + n);
                i = parseInt(i * d[e]),
                playerManager.addNumData("Coin", i),
                cc.director.emit("updateCoin");
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.showToast("+" + u.unit_format(i) + " coins"),
                this.giftState(e, !0, !1);
                var o = playerManager.getObjData("dailyPoint")
                  , r = o.point
                  , s = o.rewardState;
                if (s[e] = !0,
                4 == s.length) {
                    var c = !0;
                    if (s.map(function(t) {
                        t || (c = !1)
                    }),
                    c) {
                        r -= 100,
                        s = [];
                        for (var l = 0; l < f.length; l++)
                            this.giftState(l, !1, !0)
                    }
                }
                playerManager.setObjData("dailyPoint", {
                    point: r,
                    rewardState: s
                }),
                this.addPoint(0),
                a.setGiftPoint()
            },
            giftState: function(t, e, n) {
                this.gifts_btns[t].getComponent("gift-node").setState(e, n),
                this.gifts_btns[t].getComponent(cc.Button).interactable = !n
            },
            closeClick: function() {
                this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    "daily-node": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7ab54DNQcdB/7Y3WiDKITmS", "daily-node");
        var i = t("instant-util")
          , a = t("number-util")
          , o = t("analytics-data")
          , r = 2
          , s = 1
          , c = 2
          , l = 3
          , u = 4
          , h = 5
          , f = 0
          , d = 1
          , p = 2;
        cc.Class({
            extends: cc.Component,
            properties: {
                title_label: {
                    default: null,
                    type: cc.Label
                },
                des_label: {
                    default: null,
                    type: cc.Label
                },
                reward_label: {
                    default: null,
                    type: cc.Label
                },
                reward_layout: {
                    default: null,
                    type: cc.Node
                },
                point_label: {
                    default: null,
                    type: cc.Label
                },
                coins_label: {
                    default: null,
                    type: cc.Label
                },
                count_label: {
                    default: null,
                    type: cc.Label
                },
                task_sprite: {
                    default: null,
                    type: cc.Sprite
                },
                task_icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                btn_states: {
                    default: [],
                    type: cc.SpriteFrame
                },
                btn_bg: {
                    default: null,
                    type: cc.Sprite
                },
                btn_node: {
                    default: null,
                    type: cc.Button
                },
                btn_label: {
                    default: null,
                    type: cc.Label
                },
                btn_count_down: {
                    default: null,
                    type: cc.Node
                },
                _task: null,
                _adTimeCd: 0,
                _point: null,
                _price: null,
                _btnState: null,
                _totalProgress: null,
                _doNum: null,
                _rewardNum: null,
                _callback: null
            },
            onLoad: function() {},
            start: function() {},
            setData: function(t, e) {
                this._task = t,
                e && (this._callback = e),
                this.saveData(t),
                this._totalProgress = parseInt(t.total_task_times),
                this._doNum = parseInt(t.do_num ? t.do_num : 0),
                this._rewardNum = parseInt(t.reward_num),
                this.title_label.string = t.task_title,
                this.des_label.string = t.task_desc,
                t.reward.map(function(t) {
                    t.reward_type == r && (this._point = parseInt(t.number),
                    this.point_label.string = t.number + " points")
                }
                .bind(this));
                var n = playerManager.getNumData("UnlockLevel") - 4;
                n = 0 <= n ? n : 0,
                this._price = playerManager.getNumData("Price" + n),
                this.coins_label.string = a.unit_format(this._price);
                var i = parseInt(t.task_obj_type);
                switch (this.task_sprite.spriteFrame = this.task_icons[i - 1],
                this.btn_node.interactable = !0,
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").setGiftPoint(),
                i) {
                case s:
                    this.count_label.node.active = 0 < t.task_times,
                    this.count_label.string = "(" + t.task_times + ")",
                    0 < this._rewardNum ? (this._btnState = f,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim") : (this._btnState = p,
                    this.btn_bg.spriteFrame = this.btn_states[p],
                    this.btn_label.string = "Request");
                    break;
                case h:
                    this.count_label.node.active = 0 < this._rewardNum,
                    this.count_label.string = "(" + this._rewardNum + ")",
                    0 < this._rewardNum ? (this._btnState = f,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim") : (this._btnState = p,
                    this.btn_bg.spriteFrame = this.btn_states[p],
                    this.btn_label.string = "Request"),
                    this.btn_node.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.05, 1.05), cc.scaleTo(.2, 1, 1), cc.delayTime(.5))));
                    break;
                case l:
                    0 < this._rewardNum ? (this._btnState = f,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim") : this._doNum >= this._totalProgress ? (this._btnState = d,
                    this.btn_bg.spriteFrame = this.btn_states[d],
                    this.btn_node.interactable = !1,
                    this.btn_label.string = "Tomorrow") : (this._btnState = p,
                    this.btn_bg.spriteFrame = this.btn_states[p],
                    this.btn_label.string = "Watch",
                    this.startCountDown(l));
                    break;
                case u:
                    this.coins_label.node.active = !1,
                    0 < this._rewardNum ? (this._btnState = f,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim") : this._doNum >= this._totalProgress ? (this._btnState = d,
                    this.btn_bg.spriteFrame = this.btn_states[d],
                    this.btn_node.interactable = !1,
                    this.btn_label.string = "Tomorrow") : (this._btnState = p,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim",
                    this.startCountDown(u)),
                    this.reward_layout.active = !1,
                    this.reward_label.string = "Whose fish is bigger?",
                    this.reward_label.node.active = !0;
                    break;
                case c:
                    this.coins_label.string = a.unit_format(parseInt(.25 * this._price)),
                    0 < this._rewardNum ? (this._btnState = f,
                    this.btn_bg.spriteFrame = this.btn_states[f],
                    this.btn_label.string = "Claim") : (this._btnState = d,
                    this.btn_bg.spriteFrame = this.btn_states[d],
                    this.btn_node.interactable = !1,
                    this.btn_label.string = "Tomorrow");
                    break;
                default:
                    this.node.active = !1
                }
            },
            claimClick: function() {
                var t = parseInt(this._task.task_obj_type);
                if (this._btnState == f) {
                    o.task_btn_claim_event(t),
                    this._callback(this._point);
                    var e = 0;
                    switch (t) {
                    case s:
                    case h:
                        e = this._price,
                        server_util.receiveTask(this._task.task_id),
                        this._rewardNum--,
                        this._task.reward_num = this._rewardNum,
                        this.setData(this._task);
                        break;
                    case l:
                        0 < this._rewardNum && (e = this._price * this._rewardNum,
                        this._rewardNum = 0,
                        this._task.reward_num = this._rewardNum,
                        this.setData(this._task));
                        break;
                    case u:
                        0 < this._rewardNum && (e = .1 * this._price * this._rewardNum,
                        this._rewardNum = 0,
                        this._task.reward_num = this._rewardNum,
                        this.setData(this._task));
                        break;
                    case c:
                        e = parseInt(.25 * this._price),
                        this._rewardNum--,
                        this._task.reward_num = this._rewardNum,
                        this.setData(this._task)
                    }
                    if (playerManager.addNumData("Coin", e),
                    cc.director.emit("updateCoin"),
                    t != u)
                        cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + a.unit_format(e) + " coins")
                } else if (this._btnState == p)
                    switch (o.task_btn_start_event(t),
                    t) {
                    case s:
                    case h:
                        this.inviteClick();
                        break;
                    case l:
                        this.watchVideo();
                        break;
                    case u:
                        this.shareClick()
                    }
            },
            watchVideo: function() {
                o.watch_video_event(),
                i.showRewardAd(function() {
                    cc.log("showAd success"),
                    o.watch_video_success_event(),
                    i.requestRewardAd("2123873081225075_2123877704557946");
                    var t = 600;
                    this._task.config && this._task.config.interval && (t = parseInt(this._task.config.interval)),
                    this.setCountDownTime(t, l),
                    this._rewardNum++,
                    this._doNum++,
                    this._task.reward_num = this._rewardNum,
                    this._task.do_num = this._doNum,
                    cc.log("this._task.reward_num=" + this._task.reward_num),
                    this.setData(this._task),
                    this.claimClick()
                }
                .bind(this), function() {
                    cc.log("RewardAd load err"),
                    i.requestRewardAd("2123873081225075_2123877704557946"),
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("No available Ad right now, try again later.")
                })
            },
            startCountDown: function(t) {
                var e = Math.floor((new Date).getTime() / 1e3);
                if (t == l) {
                    var n = playerManager.getNumData("ADTime")
                      , i = playerManager.getNumData("ADTimeCD") - (e - n);
                    this._adTimeCd = i
                } else if (t == u) {
                    n = playerManager.getNumData("ShareTime"),
                    i = playerManager.getNumData("ShareTimeCD") - (e - n);
                    this._adTimeCd = i
                }
                cc.log("type=" + t + "   cd=" + i),
                0 < this._adTimeCd && (this._btnState = d,
                this.btn_bg.spriteFrame = this.btn_states[d],
                this.btn_node.interactable = !1,
                this.btn_count_down.getComponent("count-down-node").setData(this._adTimeCd, function(t) {
                    0 == (this._adTimeCd = t) && (cc.log("time=0"),
                    this.setData(this._task))
                }
                .bind(this)))
            },
            setCountDownTime: function(t, e) {
                e == l ? (playerManager.setNumData("ADTime", Math.floor((new Date).getTime() / 1e3)),
                playerManager.setNumData("ADTimeCD", t)) : e == u && (playerManager.setNumData("ShareTime", Math.floor((new Date).getTime() / 1e3)),
                playerManager.setNumData("ShareTimeCD", t))
            },
            shareClick: function() {
                var t = {
                    type: "update",
                    inviter: i.getPlayerID()
                };
                i.chooseContext(function() {
                    var t = 30;
                    this._task.config && this._task.config.interval && (t = parseInt(this._task.config.interval)),
                    this.setCountDownTime(t, u),
                    this._rewardNum++,
                    this._doNum++,
                    this._task.reward_num = this._rewardNum,
                    this._task.do_num = this._doNum,
                    cc.log("this._task.reward_num=" + this._task.reward_num),
                    this.setData(this._task),
                    this.claimClick()
                }
                .bind(this), function(t, e) {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(e)
                }, t)
            },
            inviteClick: function() {
                var t = {
                    type: "share",
                    inviter: i.getPlayerID()
                };
                i.share(function() {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Wait your friends enter game!")
                }, "data:image/jpeg;base64,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", "My friend, I really need this free gift, could you help me?", t)
            },
            saveData: function(t) {
                for (var e = playerManager.getObjData("dailyTask"), n = e.taskProgress, i = !1, a = 0; a < n.length; a++)
                    if (n[a].task_id == t.task_id) {
                        var o = {
                            task_id: t.task_id,
                            reward_num: t.reward_num,
                            do_num: t.do_num
                        };
                        n[a] = o,
                        i = !0;
                        break
                    }
                if (!i) {
                    var r = {
                        task_id: t.task_id,
                        reward_num: t.reward_num,
                        do_num: t.do_num
                    };
                    n.push(r)
                }
                e = {
                    taskTime: Date.parse(new Date),
                    taskProgress: n
                },
                playerManager.setObjData("dailyTask", e)
            },
            onDestroy: function() {
                var t = parseInt(this._task.task_obj_type);
                this.setCountDownTime(this._adTimeCd, t)
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    effectDoubleCoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "32b0bPaNXVHcIedhKsEyEii", "effectDoubleCoin");
        cc.Class({
            extends: cc.Component,
            properties: {
                effFrame: cc.SpriteFrame
            },
            onLoad: function() {
                for (var a = this, t = 0; t < 120; t++) {
                    (function t() {
                        var e = new cc.Node("effectNode1");
                        e.addComponent(cc.Sprite).spriteFrame = a.effFrame,
                        e.x = 1200 * Math.random() - 600,
                        e.y = 1e3,
                        e.scale = Math.random() + .5,
                        a.node.addChild(e);
                        var n = 5 * Math.random()
                          , i = cc.sequence(cc.delayTime(n), cc.spawn(cc.moveTo(2, e.x, -1e3), cc.repeat(cc.sequence(cc.scaleTo(.2, -1, 1), cc.scaleTo(.2, 1, 1)), 10)), cc.callFunc(function() {
                            t(),
                            e.removeFromParent(!0)
                        }, a));
                        e.runAction(i)
                    }
                    )()
                }
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    effectGetCoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cde11yaJ1BOVL7De6jvSoCc", "effectGetCoin");
        cc.Class({
            extends: cc.Component,
            properties: {
                effFrame: cc.SpriteFrame
            },
            onLoad: function() {
                for (var t = this, e = 0; e < 10; e++) {
                    var n = new cc.Node("effectNode1");
                    n.addComponent(cc.Sprite).spriteFrame = this.effFrame,
                    n.x = 100 * Math.random() - 50,
                    n.y = 100 * Math.random() - 50,
                    this.node.addChild(n),
                    n.opacity = 0;
                    var i = .2 * Math.random()
                      , a = cc.sequence(cc.delayTime(i), cc.fadeIn(.05), cc.scaleTo(.1, 1.4, 1.4), cc.scaleTo(.1, .5, .5), cc.removeSelf());
                    n.runAction(a)
                }
                this.scheduleOnce(function() {
                    t.node.removeFromParent(!0)
                }, .6)
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    emitter: [function(t, e, n) {
        "use strict";
        function i(t) {
            if (t)
                return function(t) {
                    for (var e in i.prototype)
                        t[e] = i.prototype[e];
                    return t
                }(t)
        }
        cc._RF.push(e, "8b01eKYHK9C9LN75m3JCn6O", "emitter"),
        e.exports = i,
        (window.EventEmitter = i).prototype.on = i.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks[t] = this._callbacks[t] || []).push(e),
            this
        }
        ,
        i.prototype.once = function(t, e) {
            var n = this;
            function i() {
                n.off(t, i),
                e.apply(this, arguments)
            }
            return this._callbacks = this._callbacks || {},
            i.fn = e,
            this.on(t, i),
            this
        }
        ,
        i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n, i = this._callbacks[t];
            if (!i)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[t],
                this;
            for (var a = 0; a < i.length; a++)
                if ((n = i[a]) === e || n.fn === e) {
                    i.splice(a, 1);
                    break
                }
            return this
        }
        ,
        i.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks[t];
            if (n)
                for (var i = 0, a = (n = n.slice(0)).length; i < a; ++i)
                    n[i].apply(this, e);
            return this
        }
        ,
        i.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks[t] || []
        }
        ,
        i.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
        ,
        cc._RF.pop()
    }
    , {}],
    "fbinstant-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0f0380alQhPE6h2GVgM4q4j", "fbinstant-util");
        var a = "data:image/jpeg;base64,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"
          , o = "90% can't get past level 20!!!"
          , r = t("number-util");
        e.exports = {
            getSupportedAPIs: function() {
                return "undefined" == typeof FBInstant ? [] : FBInstant.getSupportedAPIs()
            },
            getPlayerID: function() {
                if ("undefined" == typeof FBInstant)
                    return "1234567891";
                var t = FBInstant.player.getID();
                return cc.log("playerID=" + t),
                t
            },
            getPlayerInfo: function(t) {
                if ("undefined" != typeof FBInstant) {
                    var e = {};
                    e.playerId = FBInstant.player.getID(),
                    e.playerName = FBInstant.player.getName(),
                    e.photo = FBInstant.player.getPhoto(),
                    t && t(e)
                } else
                    t && t({
                        playerId: "1234567891",
                        playerName: "bibibabibobi",
                        photo: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/32713932_168979427273388_4735634539752194048_n.jpg?_nc_cat=0&oh=3187ef52a84de863937b566048026fbb&oe=5C0CE0C5"
                    })
            },
            getPlayerFrineds: function(i) {
                if ("undefined" != typeof FBInstant) {
                    var a = [];
                    FBInstant.player.getConnectedPlayersAsync().then(function(t) {
                        for (var e in t) {
                            var n = t[e];
                            a.push[{
                                id: n.getID(),
                                name: n.getName()
                            }]
                        }
                        i && i(a)
                    })
                } else
                    i && i([{
                        id: "123456789test1",
                        name: "zyq"
                    }, {
                        id: "123456789test",
                        name: "bibibabibobi"
                    }])
            },
            getContextLeaderboard: function(e) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function(t) {
                    return t.getEntriesAsync()
                }).then(function(t) {
                    e(t)
                })
            },
            getFriendsLeaderboard: function(e) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function(t) {
                    return t.getConnectedPlayerEntriesAsync()
                }).then(function(t) {
                    cc.log("getFriendsLeaderboard=" + JSON.stringify(t)),
                    e(t)
                })
            },
            getSelfLeaderboard: function(e) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function(t) {
                    return t.getPlayerEntryAsync()
                }).then(function(t) {
                    e(t)
                })
            },
            setLeaderboardScore: function(e, n) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function(t) {
                    return cc.log("getLeaderboardAsync success"),
                    t.setScoreAsync(e, n)
                }).then(function(t) {})
            },
            getLeaderboardName: function() {
                if ("undefined" != typeof FBInstant)
                    return cc.log("getLeaderboardName = friend-leaderboard." + FBInstant.context.getID()),
                    "friend-leaderboard." + FBInstant.context.getID()
            },
            chooseContext: function(n, i, a) {
                if ("undefined" != typeof FBInstant) {
                    var o = this
                      , r = playerManager.getObjData("sharedContextIds");
                    cc.log("sharedContextIds=" + JSON.stringify(r)),
                    FBInstant.context.chooseAsync().then(function() {
                        var t = o.getContextID();
                        o.isSharedToday(t) ? i("limit", "you've shared it with this player today") : (r[t] = Date.parse(new Date),
                        playerManager.setObjData("sharedContextIds", r),
                        o.updateContext(n, i, a))
                    }, function(t) {
                        if (cc.log("chooseContext=" + JSON.stringify(t)),
                        "SAME_CONTEXT" == t.code) {
                            var e = o.getContextID();
                            o.isSharedToday(e) ? i("limit", "you've shared it with this player today") : (r[e] = Date.parse(new Date),
                            playerManager.setObjData("sharedContextIds", r),
                            o.updateContext(n, i, a))
                        } else
                            i()
                    })
                } else
                    n && n()
            },
            isSharedToday: function(t) {
                var e = playerManager.getObjData("sharedContextIds");
                if (e)
                    for (var n in e) {
                        if (n == t)
                            return r.isOneDay(e[n], Date.parse(new Date))
                    }
                return !1
            },
            updateContext: function(t, e, n) {
                "undefined" != typeof FBInstant && (this.logEvent("all_share_click"),
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play",
                    image: a,
                    text: {
                        default: o
                    },
                    template: "play_turn",
                    data: n || {
                        type: "update"
                    },
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function() {
                    t && t()
                }, function() {
                    e && e()
                }))
            },
            createContext: function(t, e) {
                "undefined" != typeof FBInstant && FBInstant.context.createAsync(this.getPlayerID()).then(function() {
                    cc.log("ContextID=" + FBInstant.context.getID()),
                    t()
                }, function() {
                    cc.log("createContext fail"),
                    e()
                })
            },
            share: function(e, t, n, i) {
                "undefined" != typeof FBInstant && (this.logEvent("all_share_click"),
                FBInstant.shareAsync({
                    intent: "REQUEST",
                    image: t || a,
                    text: n || o,
                    data: i || {
                        type: "share"
                    }
                }).then(function(t) {
                    e(t)
                }))
            },
            requestInterstitialAd: function(t, e) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    n.interstitial = null,
                    FBInstant.getInterstitialAdAsync(t).then(function(t) {
                        if (void 0 !== t)
                            return (n.interstitial = t).loadAsync()
                    }).then(function() {
                        e && e()
                    }).catch(function(t) {})
                }
            },
            showInterstitialAd: function(t, e) {
                this.interstitial ? this.interstitial.showAsync().then(function() {
                    t && t()
                }
                .bind(this)) : e()
            },
            requestRewardAd: function(t) {
                if ("undefined" != typeof FBInstant) {
                    var e = this;
                    e.rewardedVideo = null,
                    FBInstant.getRewardedVideoAsync(t).then(function(t) {
                        if (void 0 !== t)
                            return (e.rewardedVideo = t).loadAsync()
                    }).then(function() {}).catch(function(t) {})
                }
            },
            showRewardAd: function(t, e) {
                "undefined" != typeof FBInstant && this.rewardedVideo ? this.rewardedVideo.showAsync().then(function() {
                    t && t()
                }
                .bind(this)) : e && e()
            },
            isRewardAdReady: function() {
                return !!this.rewardedVideo
            },
            setData: function(t) {
                if ("undefined" != typeof FBInstant) {
                    var e = this;
                    FBInstant.player.setDataAsync(t).then(function() {
                        cc.log("setData success")
                    }).catch(function(t) {
                        cc.log("fb_set_data_fail:" + JSON.stringify(t)),
                        e.logEvent("fb_set_data_fail", null, {
                            msg: t
                        })
                    })
                }
            },
            getData: function(t, e) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    FBInstant.player.getDataAsync(t).then(function(t) {
                        cc.log("load data success = " + JSON.stringify(t)),
                        e && e(t)
                    }).catch(function(t) {
                        cc.log("get data err"),
                        n.logEvent("fb_get_data_fail", null, {
                            msg: t
                        })
                    })
                }
            },
            getStats: function(t, e) {
                "undefined" != typeof FBInstant && FBInstant.player.getStatsAsync(t).then(function(t) {
                    e && e(t)
                })
            },
            setStats: function(t, e) {
                "undefined" != typeof FBInstant && FBInstant.player.setStatsAsync(t).then(function() {
                    e && e()
                })
            },
            incrementStats: function(t, e) {
                "undefined" != typeof FBInstant && FBInstant.player.incrementStatsAsync(t).then(function(t) {
                    e && e(t)
                })
            },
            quite: function() {
                "undefined" != typeof FBInstant && FBInstant.quit()
            },
            pause: function(t) {
                "undefined" != typeof FBInstant && FBInstant.onPause(function() {
                    t && t()
                })
            },
            logEvent: function(t, e, n) {
                if ("undefined" != typeof FBInstant)
                    return FBInstant.logEvent(t, e, n)
            },
            getContextID: function() {
                if ("undefined" != typeof FBInstant) {
                    var t = FBInstant.context.getID();
                    return cc.log("getContextID=" + t),
                    t
                }
            },
            getType: function() {
                if ("undefined" != typeof FBInstant) {
                    var t = FBInstant.context.getType();
                    return cc.log("getType=" + t),
                    t
                }
            },
            startGame: function(t) {
                "undefined" != typeof FBInstant ? FBInstant.startGameAsync().then(function() {
                    t()
                }) : t && t()
            },
            getFriends: function(n) {
                if ("undefined" != typeof FBInstant) {
                    var i = this;
                    FBInstant.player.getConnectedPlayersAsync().then(function(t) {
                        var e = [];
                        t.map(function(t) {
                            cc.log("get ig friends list = " + t.getID()),
                            e.push({
                                id: t.getID(),
                                name: t.getName(),
                                photo: t.getPhoto()
                            })
                        }),
                        i.getPlayerInfo(function(t) {
                            cc.log("get ig friends list = " + t.playerName),
                            e.push({
                                id: t.playerId,
                                name: t.playerName,
                                photo: t.photo
                            }),
                            n && n(e)
                        })
                    })
                } else
                    n && n([{
                        id: "123456789test1",
                        name: "zyq"
                    }, {
                        id: "123456789test",
                        name: "bibibabibobi"
                    }])
            },
            getEntryPointData: function() {
                if ("undefined" != typeof FBInstant)
                    return FBInstant.getEntryPointData()
            },
            createShortcut: function(e) {
                "undefined" != typeof FBInstant && (cc.log("call createShortcut"),
                FBInstant.canCreateShortcutAsync().then(function(t) {
                    cc.log("canCreateShortcut=" + t),
                    t && FBInstant.createShortcutAsync().then(function() {
                        e()
                    }).catch(function() {})
                }))
            },
            getPlatform: function() {
                if ("undefined" != typeof FBInstant)
                    return FBInstant.getPlatform()
            },
            customImageShare: function(n, i, a, t) {
                var o = this;
                "undefined" != typeof FBInstant ? cc.loader.load(FBInstant.player.getPhoto(), function(t, e) {
                    i && i(e),
                    cc.director.getScene().addChild(n),
                    n.setLocalZOrder(-1),
                    o.captureScreen(n, n.width, n.height, function(t, e) {
                        n.removeFromParent(!0);
                        o.share(a, t, ["Look，I've got such fabulous fish！", "I've got this fish. Can you surpass me?", "Play with me and get big fish together!"][r.randomNum(0, 2)])
                    })
                }) : a && a()
            },
            captureScreen: function(t, r, s, c, e, l) {
                var n = window.gl
                  , i = t._sgNode || t
                  , u = n || cc._renderContext;
                r = Math.floor(r),
                s = Math.floor(s);
                var h = new cc.RenderTexture(r,s,cc.Texture2D.PIXEL_FORMAT_RGBA8888,cc.sys.isBrowser ? u.DEPTH_STENCIL : u.DEPTH24_STENCIL8_OES);
                cc.sys.isBrowser && h.setAutoDraw(!0);
                var f = t.y;
                t.scaleY = -t.scaleY,
                t.y = s;
                var a = cc.macro.ENABLE_CULLING;
                cc.macro.ENABLE_CULLING = !1,
                h.beginWithClear(0, 0, 0, 255, 0, 0),
                i.visit(),
                h.end(),
                cc.macro.ENABLE_CULLING = a,
                t.scaleY = -t.scaleY,
                t.y = f,
                cc.sys.isBrowser && (h.scaleY = -1,
                e && e());
                var d = "";
                cc.sys.isBrowser ? setTimeout(function() {
                    try {
                        var e = null
                          , n = null;
                        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS)
                            d = h.sprite.getTexture().getHtmlElementObj().toDataURL("image/png");
                        else {
                            var t = h.sprite.getTexture()._glID;
                            f = s - (l = l || 0),
                            e = u.getParameter(u.FRAMEBUFFER_BINDING);
                            var i = u.createFramebuffer();
                            n = i,
                            u.bindFramebuffer(u.FRAMEBUFFER, i),
                            u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, t, 0);
                            var a = new Uint8Array(r * f * 4);
                            u.readPixels(0, 0, r, f, u.RGBA, u.UNSIGNED_BYTE, a),
                            u.deleteFramebuffer(i),
                            n = null;
                            var o = document.createElement("canvas");
                            o.id = "captureCanvas",
                            o.width = r,
                            o.height = f,
                            o.getContext("2d").putImageData(new ImageData(Uint8ClampedArray.from(a),r,f), 0, 0),
                            d = o.toDataURL("image/png")
                        }
                        c && c(d, h)
                    } catch (t) {
                        console.log(t),
                        n && (u.deleteFramebuffer(n),
                        n = null),
                        e && (u.bindFramebuffer(u.FRAMEBUFFER, e),
                        e = null),
                        c && c(d, h)
                    }
                }, 0) : c && c(d, h)
            },
            switchGameAsync: function(t, e) {
                "undefined" != typeof FBInstant && FBInstant.switchGameAsync(t).catch(function(t) {
                    e && e(t)
                })
            }
        },
        cc._RF.pop()
    }
    , {
        "number-util": "number-util"
    }],
    "fish-cfg": [function(t, i, e) {
        "use strict";
        cc._RF.push(i, "40244FMFCRPPbAWyL8iSG95", "fish-cfg"),
        function() {
            if (window.fish_data)
                i.exports = window.fish_data;
            else {
                for (var t = [{
                    name: "P1",
                    price: 100,
                    coinround: 25,
                    coinsec: 4,
                    time: 6.25,
                    rise: .07
                }, {
                    name: "P2",
                    price: 1500,
                    coinround: 50,
                    coinsec: 9,
                    time: 5.56,
                    rise: .175
                }, {
                    name: "P3",
                    price: 6750,
                    coinround: 100,
                    coinsec: 19,
                    time: 5.26,
                    rise: .175
                }, {
                    name: "P4",
                    price: 17955,
                    coinround: 200,
                    coinsec: 40,
                    time: 5,
                    rise: .175
                }, {
                    name: "P5",
                    price: 47760,
                    coinround: 400,
                    coinsec: 84,
                    time: 4.76,
                    rise: .175
                }], e = 6; e <= 30; e++) {
                    var n = t[e - 2];
                    t.push({
                        name: "P" + e,
                        price: Math.floor(2.66 * n.price),
                        coinround: 2 * n.coinround,
                        coinsec: Math.ceil(2.1 * n.coinsec),
                        time: Math.floor(200 * n.coinround / Math.ceil(2.1 * n.coinsec)) / 100,
                        rise: .175
                    })
                }
                window.fish_data = t,
                i.exports = t
            }
        }(),
        cc._RF.pop()
    }
    , {}],
    "fish-item": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e63dcFbkOFGwKtFkmnXrxgJ", "fish-item");
        var i = t("number-util")
          , a = t("instant-util")
          , o = cc.Enum({
            Lock: 0,
            UnLock: 1,
            CanLock: 2
        });
        cc.Class({
            extends: cc.Component,
            properties: {
                img_fish: {
                    default: null,
                    type: cc.Sprite
                },
                price_label: {
                    default: null,
                    type: cc.Label
                },
                lock_btn: {
                    default: null,
                    type: cc.Node
                },
                unlock_btn: {
                    default: null,
                    type: cc.Node
                },
                unlock_icon: {
                    default: null,
                    type: cc.Sprite
                },
                unlock_level: {
                    default: null,
                    type: cc.Label
                },
                toast_prefab: {
                    default: null,
                    type: cc.Prefab
                },
                get_one_btn: {
                    default: null,
                    type: cc.Node
                },
                get_coin_btn: {
                    default: null,
                    type: cc.Node
                }
            },
            setData: function(t, e) {
                this.index = t.index,
                this.callback = e,
                this.loadRes(this.index, this.img_fish),
                this.showBtnState(t.state);
                var n = playerManager.getNumData("UnlockLevel") - 4;
                0 < n && this.index == n && i.isOneDay(playerManager.getNumData("getCoinTime"), Date.parse(new Date)),
                0 <= n - 2 && this.index == n - 2 && i.isOneDay(playerManager.getNumData("getFreeTime"), Date.parse(new Date)),
                this.index <= playerManager.getNumData("UnlockLevel") ? this.img_fish.node.color = new cc.Color(255,255,255) : this.img_fish.node.color = new cc.Color(0,0,0)
            },
            buyClick: function() {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (t.playPurchaseSound(),
                !t.scriptGamePaodao.isPoolFull()) {
                    var e = fish_data[this.index]
                      , n = playerManager.getNumData("Price" + this.index);
                    cc.log("fish.rise=" + JSON.stringify(fish_data[this.index])),
                    1 == playerManager.coinEnough(n) && (n = parseInt(n * (1 + e.rise)),
                    this.price_label.string = i.unit_format(n),
                    t.scriptGamePaodao.buyItem(this.index),
                    playerManager.setNumData("Price" + this.index, n),
                    t.scriptGamePaodao.refreshCoin())
                }
            },
            getOneClick: function() {
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.chooseContext(function(t) {
                    n.showToast("share success"),
                    n.scriptGamePaodao.putItem(this.index),
                    playerManager.setNumData("getFreeTime", Date.parse(new Date)),
                    this.get_one_btn.active = !1
                }
                .bind(this), function(t, e) {
                    n.showToast(e)
                }
                .bind(this))
            },
            getCoinClick: function() {
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.chooseContext(function(t) {
                    n.showToast("share success");
                    var e = playerManager.getNumData("Price" + this.index);
                    e = parseInt(.8 * e),
                    this.price_label.string = i.unit_format(e),
                    playerManager.setNumData("Price" + this.index, e),
                    n.scriptGamePaodao.refreshCoin(),
                    playerManager.setNumData("getCoinTime", Date.parse(new Date)),
                    this.get_coin_btn.active = !1
                }
                .bind(this), function(t, e) {
                    n.showToast(e)
                }
                .bind(this))
            },
            showBtnState: function(t) {
                switch (this.lock_btn.active = !1,
                this.unlock_btn.active = !1,
                t) {
                case o.Lock:
                    this.lock_btn.active = !0;
                    var e = this.index + 4 >= fish_data.length ? fish_data.length - 1 : this.index + 4;
                    this.loadRes(e, this.unlock_icon),
                    this.unlock_level.string = this.index + 4 >= fish_data.length ? "?" : e + 1 + "";
                    break;
                case o.UnLock:
                    this.unlock_btn.active = !0;
                    var n = playerManager.getNumData("Price" + this.index);
                    this.price_label.string = i.unit_format(n)
                }
            },
            loadRes: function(t, e) {
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                e.spriteFrame = n.getItemFrame(t)
            }
        }),
        cc._RF.pop()
    }
    , {
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    "fishlist-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7c7e8vBqhdP7IXPso/dQdVG", "fishlist-dialog");
        t("instant-util");
        var i = t("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                coin_label: {
                    default: null,
                    type: cc.Label
                },
                list_layout: {
                    default: null,
                    type: cc.Node
                },
                fish_item_prefab: {
                    default: null,
                    type: cc.Prefab
                }
            },
            onLoad: function() {
                var t = this
                  , n = this;
                this.customEvent = {
                    updateCoin: "refreshCoin"
                };
                var e = function() {
                    var e = t.customEvent[i];
                    cc.director.on(i, function(t) {
                        n[e]()
                    })
                };
                for (var i in this.customEvent)
                    e();
                this.setListData()
            },
            onDestroy: function() {
                for (var t in this.customEvent)
                    cc.director.off(t)
            },
            setListData: function() {
                this.list_layout.getComponent("list-adapter").removeAllListView(),
                this.coin_label.string = i.unit_format(playerManager.getNumData("Coin"));
                var t = []
                  , e = playerManager.getNumData("UnlockLevel") - 4;
                e = 0 <= e ? e : 0;
                for (var n = 0; n < fish_data.length; n++) {
                    t.push({
                        index: n,
                        state: n <= e ? 1 : 0
                    })
                }
                this.list_layout.getComponent("list-adapter").initListView(this.fish_item_prefab, "fish-item", t)
            },
            refreshCoin: function(t) {
                t = null == t ? i.unit_format(playerManager.getNumData("Coin")) : i.unit_format(t),
                this.coin_label.string = t
            },
            closeDialog: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    getoffcoin_dlg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9e8d8thXl9LaZtQUXQGg0GI", "getoffcoin_dlg");
        var o = t("number-util")
          , i = t("instant-util")
          , a = t("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                labelCoin: cc.Label,
                shareBtn: cc.Node,
                share_toggle: {
                    default: null,
                    type: cc.Toggle
                }
            },
            onLoad: function() {
                for (var t = Math.floor((new Date).getTime() / 1e3), e = playerManager.getObjData("lastOffline"), n = 1800 < t - e ? 1800 : t - e, i = this.allearn = 0; i <= 14; i++) {
                    var a = playerManager.getObjData("Panel" + i);
                    0 <= a.level && 1 == a.state && (this.allearn = this.allearn + fish_data[a.level].coinsec)
                }
                this.allearn = this.allearn * n,
                this.labelCoin.string = o.unit_format(this.allearn),
                playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3))
            },
            watchVideo: function() {
                var e = this;
                a.watch_video_event();
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                i.showRewardAd(function() {
                    cc.log("showAd success"),
                    a.watch_video_success_event(),
                    i.requestRewardAd("2123873081225075_2123877704557946");
                    var t = .5 * Math.random() + 1.5;
                    t = Math.floor(100 * t) / 100,
                    n.showToast("+" + o.unit_format(e.allearn) + " Coins x " + t, 4),
                    playerManager.addNumData("Coin", e.allearn * t),
                    cc.director.emit("updateCoin"),
                    e.closeDialog(null, !1)
                }, function() {
                    cc.log("RewardAd load err"),
                    i.requestRewardAd("2123873081225075_2123877704557946"),
                    n.showToast("No available Ad right now, try again later."),
                    e.closeDialog(null, !1)
                })
            },
            shareClick: function() {
                var e = this;
                a.share_offline_coin_event(e.share_toggle.isChecked);
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (e.share_toggle.isChecked)
                    cc.log("offcoin callback"),
                    i.chooseContext(function() {
                        a.share_offline_coin_success_event();
                        var t = .5 * Math.random() + 1.5;
                        t = Math.floor(100 * t) / 100,
                        n.showToast("+" + o.unit_format(e.allearn) + " Coins x " + t, 4),
                        playerManager.addNumData("Coin", e.allearn * t),
                        cc.director.emit("updateCoin"),
                        e.closeDialog(null, !1)
                    }, function(t, e) {
                        a.share_offline_coin_fail_event(t),
                        n.showToast(e)
                    });
                else {
                    a.get_offline_coin_without_share_event(),
                    cc.log("offcoin callback1");
                    var t = .5 * Math.random() + 1.1;
                    t = Math.floor(100 * t) / 100,
                    n.showToast("+" + o.unit_format(e.allearn) + " Coins x " + t, 4),
                    playerManager.addNumData("Coin", e.allearn * t),
                    cc.director.emit("updateCoin"),
                    e.closeDialog(null, !1)
                }
            },
            closeDialog: function(t) {
                1 == (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (playerManager.addNumData("Coin", this.allearn),
                cc.director.emit("updateCoin")),
                this.node.removeFromParent(!1),
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").offcoin_dialog = null
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    "gift-node": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4a6fag+C+pL5KyLREjd3zih", "gift-node"),
        cc.Class({
            extends: cc.Component,
            properties: {
                open_sprite: {
                    default: null,
                    type: cc.Sprite
                },
                close_sprite: {
                    default: null,
                    type: cc.Sprite
                }
            },
            onLoad: function() {},
            start: function() {},
            setState: function(t, e) {
                cc.log("isOpen=" + t + "   isReceive=" + e),
                this.animate = this.getComponent(cc.Animation),
                t ? (this.open_sprite.node.active = !0,
                this.close_sprite.node.active = !1,
                e ? (this.animate.stop(),
                this.node.rotation = 0) : this.animate.play()) : (this.open_sprite.node.active = !1,
                this.close_sprite.node.active = !0,
                this.animate.stop(),
                this.node.rotation = 0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    globalManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ebfcbBGT/xFC4t82jzjGFqv", "globalManager"),
        t("md5"),
        function() {
            if (window.globalManager)
                e.exports = window.globalManager;
            else {
                var a = Math.round(1e10 * Math.random()).toString()
                  , o = {
                    appId: "2123873081225075",
                    appIdTest: "911353079048822",
                    appid_reg: /2123873081225075/,
                    firstInGame: !0,
                    fbPlayerId: null,
                    gamelist: [{
                        app_id: "527721167689261",
                        name: "Juice Master",
                        img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/41286169_920761251443235_2508817730489024512_n.jpg?_nc_cat=0&oh=610bd9524a8a3ee175e6bb8b19ad74b6&oe=5C3960BD",
                        url: ""
                    }, {
                        app_id: "2095791540676791",
                        name: "Car Tycoon",
                        img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/40515193_2153404564925308_1599571423054004224_n.jpg?_nc_cat=1&oh=6fb3c3f9295512ec5c16dec80b33e29f&oe=5C2BC2B4",
                        url: ""
                    }],
                    gameListInGame: [{
                        app_id: "527721167689261",
                        name: "Juice Master",
                        img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/41286169_920761251443235_2508817730489024512_n.jpg?_nc_cat=0&oh=610bd9524a8a3ee175e6bb8b19ad74b6&oe=5C3960BD",
                        url: ""
                    }, {
                        app_id: "2095791540676791",
                        name: "Car Tycoon",
                        img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/40515193_2153404564925308_1599571423054004224_n.jpg?_nc_cat=1&oh=6fb3c3f9295512ec5c16dec80b33e29f&oe=5C2BC2B4",
                        url: ""
                    }]
                };
                o.encrypt = function(t, e) {
                    if (t += "",
                    null == e || e.length <= 0)
                        return null;
                    t = escape(t);
                    for (var n = "", i = 0; i < e.length; i++)
                        n += e.charCodeAt(i).toString();
                    var a = Math.floor(n.length / 5)
                      , o = parseInt(n.charAt(a) + n.charAt(2 * a) + n.charAt(3 * a) + n.charAt(4 * a) + n.charAt(5 * a))
                      , r = Math.ceil(e.length / 2)
                      , s = Math.pow(2, 31) - 1;
                    if (o < 2)
                        return null;
                    var c = Math.round(1e9 * Math.random()) % 1e8;
                    for (n += c; 10 < n.length; )
                        n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
                    n = (o * n + r) % s;
                    var l = ""
                      , u = "";
                    for (i = 0; i < t.length; i++)
                        u += (l = parseInt(t.charCodeAt(i) ^ Math.floor(n / s * 255))) < 16 ? "0" + l.toString(16) : l.toString(16),
                        n = (o * n + r) % s;
                    for (c = c.toString(16); c.length < 8; )
                        c = "0" + c;
                    return u += c
                }
                ,
                o.decrypt = function(t, e) {
                    if (!(null == t || t.length < 8 || null == e || e.length <= 0)) {
                        for (var n = "", i = 0; i < e.length; i++)
                            n += e.charCodeAt(i).toString();
                        var a = Math.floor(n.length / 5)
                          , o = parseInt(n.charAt(a) + n.charAt(2 * a) + n.charAt(3 * a) + n.charAt(4 * a) + n.charAt(5 * a))
                          , r = Math.round(e.length / 2)
                          , s = Math.pow(2, 31) - 1
                          , c = parseInt(t.substring(t.length - 8, t.length), 16);
                        for (t = t.substring(0, t.length - 8),
                        n += c; 10 < n.length; )
                            n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
                        n = (o * n + r) % s;
                        var l = ""
                          , u = "";
                        for (i = 0; i < t.length; i += 2)
                            l = parseInt(parseInt(t.substring(i, i + 2), 16) ^ Math.floor(n / s * 255)),
                            u += String.fromCharCode(l),
                            n = (o * n + r) % s;
                        return unescape(u)
                    }
                }
                ,
                o.encryptKey = function(t) {
                    return cc.MD5(t)
                }
                ,
                o.getDT = function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
                      , e = arguments[1]
                      , n = t[1];
                    n = "subVersion";
                    var i = o.getLocalData(n, null, !0);
                    if (null == i) {
                        var a = Math.round(1e10 * Math.random()).toString();
                        return o.saveLocalData(n, a, !0),
                        e && e(n),
                        a
                    }
                    return i
                }
                ,
                o.saveLocalData = function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    null != o.fbPlayerId && (t += o.fbPlayerId,
                    t = o.encryptKey(t),
                    0 == n && (e = o.encrypt(e, a)),
                    cc.sys.localStorage.setItem(t, e))
                }
                ,
                o.getLocalData = function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    if (null == o.fbPlayerId)
                        return e;
                    t += o.fbPlayerId,
                    t = o.encryptKey(t);
                    var i = cc.sys.localStorage.getItem(t);
                    return null == i && null != e ? i = e : null != i && 0 == n && (i = o.decrypt(i, a)),
                    i
                }
                ,
                o.initDT = function() {
                    a = o.getDT("V2.0.0", function() {
                        for (var t = 1; t <= 10; t++)
                            o.saveLocalData("key" + t, Math.round(1e10 * Math.random()).toString(), !0)
                    })
                }
                ,
                window.globalManager = o,
                e.exports = o
            }
        }(),
        cc._RF.pop()
    }
    , {
        md5: "md5"
    }],
    "http-client": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "756b3hdRixPh7UlwC6GQnCQ", "http-client");
        e.exports = {
            httpPostRequest: function(t, e, n, i) {
                var a = JSON.stringify(e);
                cc.log("httpPostRequest:" + t + ", after param = " + a);
                var o = cc.loader.getXMLHttpRequest();
                o.timeoutId = setTimeout(function() {
                    i && cc.log("httpRequest timeout")
                }, 6e3),
                o.open("POST", t),
                o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                o.send(a),
                o.onreadystatechange = function() {
                    if (clearTimeout(o.timeoutId),
                    4 == o.readyState && 200 <= o.status && o.status < 400) {
                        cc.log("httpRequest.readyState=" + o.readyState),
                        cc.log("httpRequest.status=" + o.status);
                        o.statusText;
                        var t = o.responseText;
                        cc.log("responseText = " + t);
                        var e = null;
                        try {
                            e = JSON.parse(t)
                        } catch (t) {
                            cc.log("服务端未知错误")
                        }
                        e && (0 == e.code ? n && n(e.data) : i && i(e))
                    }
                }
                ,
                o.onerror = function(t) {
                    clearTimeout(o.timeoutId);
                    var e = o.responseText;
                    e || (e = "network error"),
                    i && i(e)
                }
            },
            httpGetRequest: function(t, e, n, i) {
                for (var a in e)
                    t += a + "=" + e.key;
                var o = cc.loader.getXMLHttpRequest();
                o.onreadystatechange = function() {
                    if (4 === o.readyState && 200 <= o.status && o.status < 400) {
                        var t = o.responseText;
                        cc.log("responseText = " + t);
                        var e = null;
                        try {
                            e = JSON.parse(t)
                        } catch (t) {
                            cc.log("服务端未知错误")
                        }
                        e && n && n(e)
                    }
                }
                ,
                o.open("GET", t, !0),
                cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                o.timeoutId = setTimeout(function() {
                    i && cc.log("httpRequest timeout")
                }, 6e3),
                o.send()
            }
        },
        cc._RF.pop()
    }
    , {}],
    "instant-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1d9b4T4x31MFKzOCrskJ0yO", "instant-util");
        var i = t("fbinstant-util")
          , a = /^192\..*|localhost/.exec(location.hostname);
        "undefined" != typeof FBInstant ? e.exports = i : null != a && (e.exports = i),
        cc._RF.pop()
    }
    , {
        "fbinstant-util": "fbinstant-util"
    }],
    "invite-friends-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "82ad3P6sClKE56sVBRwCK8X", "invite-friends-dialog");
        var i = t("instant-util")
          , a = t("number-util")
          , o = t("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                task_layout: {
                    default: null,
                    type: cc.Node
                },
                task_node: {
                    default: null,
                    type: cc.Prefab
                },
                invite_progress: {
                    default: null,
                    type: cc.ProgressBar
                },
                progress_label: {
                    default: null,
                    type: cc.RichText
                },
                gift_toggle: {
                    default: null,
                    type: cc.Toggle
                },
                tip_label: {
                    default: null,
                    type: cc.Label
                },
                _allPlayers: null,
                _rewardPlayers: null,
                _listData: [],
                _taskId: null
            },
            onLoad: function() {
                o.invite_friends_info_start_event(),
                server_util.getActivityList(function(t) {
                    if (o.invite_friends_info_success_event(),
                    t && t[0]) {
                        var e = parseInt(t[0].task_times)
                          , n = parseInt(t[0].reward_num)
                          , i = t[0].task_id;
                        this.setData(e, n, i),
                        this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this))
                    }
                }
                .bind(this), function(t) {
                    this.setData(0, 0, 0),
                    this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this)),
                    t.code && o.invite_friends_info_err_event(t.code)
                }
                .bind(this)),
                this.giftAnimate = this.gift_toggle.node.getComponent(cc.Animation),
                this.setInviterProgress(0)
            },
            setData: function(t, e, n) {
                var i = playerManager.getObjData("inviteRewards")
                  , a = t - e;
                if (i)
                    for (var o = i.length - 1; o < t; o++) {
                        var r = o < a ? 1 : 0;
                        i.push(r)
                    }
                else {
                    (i = []).push(playerManager.getObjData("freeReward") ? 1 : 0);
                    for (var s = 0; s < t; s++) {
                        var c = s < a ? 1 : 0;
                        i.push(c)
                    }
                }
                cc.log("inviteRewards=" + JSON.stringify(i)),
                playerManager.setObjData("inviteRewards", i),
                this._listData = [],
                this._allPlayers = t,
                this._rewardPlayers = e,
                this._taskId = n;
                var l = playerManager.getNumData("UnlockLevel") - 4;
                l = 0 <= l ? l : 0;
                var u = playerManager.getNumData("Price" + l);
                cc.log("price=" + u);
                for (var h = 0; h < i.length; h++)
                    0 == i[h] && this._listData.push({
                        type: h,
                        price: u,
                        taskId: n,
                        canClaim: !0
                    });
                var f = t + 1;
                if (this._listData.length < 4)
                    for (var d = this._listData.length; d < 4; d++)
                        this._listData.push({
                            type: f,
                            price: u,
                            taskId: n,
                            canClaim: !1
                        }),
                        f++
            },
            refreshListView: function(t) {
                0 < t.type && this._rewardPlayers--,
                this.setData(this._allPlayers, this._rewardPlayers, this._taskId),
                this.task_layout.getComponent("list-adapter").refreshListView(this._listData)
            },
            inviteFriendClick: function() {
                if ("undefined" != typeof FBInstant) {
                    o.invite_friends_event();
                    var t = {
                        type: "share",
                        inviter: i.getPlayerID()
                    };
                    i.chooseContext(function() {
                        cc.log("share finish"),
                        o.invite_friends_success_event(),
                        cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Sent! Wait your friends enter game!"),
                        this.setInviterProgress(1)
                    }
                    .bind(this), function(t, e) {
                        cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(e)
                    }, t)
                } else
                    this.setInviterProgress(1)
            },
            setInviterProgress: function(t) {
                var e = playerManager.getObjData("inviteReceiveTime");
                if (a.isOneDay(e, Date.parse(new Date)))
                    this.invite_progress.progress = 1,
                    this.progress_label.string = "<b><i>8/8</i></b>",
                    this.gift_toggle.isChecked = !1,
                    this.gift_toggle.interactable = !1,
                    this.tip_label.string = "New gift tomorrow!",
                    this.giftAnimate.stop(),
                    playerManager.setNumData("inviteCount", 0);
                else {
                    var n = playerManager.getNumData("inviteCount");
                    8 < (n += t) && (n = 8),
                    playerManager.setNumData("inviteCount", n),
                    n < 8 ? (this.invite_progress.progress = n / 8,
                    this.progress_label.string = "<b><i>" + n + "/8</i></b>",
                    this.gift_toggle.isChecked = !1,
                    this.gift_toggle.interactable = !1,
                    this.giftAnimate.stop()) : (this.invite_progress.progress = 1,
                    this.progress_label.string = "<b><i>8/8</i></b>",
                    this.gift_toggle.isChecked = !0,
                    this.gift_toggle.interactable = !0,
                    this.giftAnimate.play()),
                    this.tip_label.string = "Earn friendship, win rewards!"
                }
            },
            giftClick: function() {
                var t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0;
                var e = playerManager.getNumData("Price" + t);
                playerManager.addNumData("Coin", e),
                cc.director.emit("updateCoin"),
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + a.unit_format(e) + " coins"),
                playerManager.setObjData("inviteReceiveTime", Date.parse(new Date)),
                this.setInviterProgress(-8)
            },
            closeClick: function() {
                this.node.removeFromParent(!1)
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    "list-adapter": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "09ba3ffzBVCFoq/4RIrLUTc", "list-adapter"),
        cc.Class({
            extends: cc.Component,
            properties: {
                _prefab: null,
                _scriptName: null,
                _items: [],
                _callback: null
            },
            initListView: function(t, e, n, i) {
                this._prefab = t,
                this._scriptName = e,
                this._callback = i,
                this.createItem(n)
            },
            refreshListView: function(t) {
                this.node.removeAllChildren(!0),
                this.createItem(t)
            },
            addListView: function(t) {
                this.createItem([t])
            },
            removeAllListView: function() {
                this.refreshListView()
            },
            destory: function() {},
            setPosition: function(t) {},
            createItem: function(t) {
                if (t)
                    for (var e = 0; e < t.length; e++) {
                        var n = null;
                        (n = cc.instantiate(this._prefab)).parent = this.node,
                        n.getComponent(this._scriptName).setData(t[e], this._callback)
                    }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    loading: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b99aeZWplBPv5Yv1wF8pKAr", "loading");
        cc.Class({
            extends: cc.Component,
            properties: {
                spItem: [cc.Sprite]
            },
            onLoad: function() {
                var t = this;
                this.curCount = 0,
                this.maxCount = this.spItem.length,
                this.schedule(function() {
                    t.myupdate()
                }, .05)
            },
            myupdate: function(t) {
                for (var e = this, n = 0; n < e.spItem.length; n++)
                    e.spItem[n].node.color = new cc.Color(255,255,255);
                e.spItem[e.curCount].node.color = new cc.Color(65,64,66),
                e.curCount++,
                e.curCount = e.curCount % this.maxCount
            },
            onDestroy: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    "login-world": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "00686neljhElYHh8Nk8vMdQ", "login-world");
        var a = t("instant-util")
          , o = t("analytics-data");
        t("fish-cfg"),
        t("playerManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                _dialogs: {
                    default: {}
                },
                rank_dialog_prefab: {
                    default: null,
                    type: cc.Prefab
                },
                sounds_toggle: {
                    default: null,
                    type: cc.Toggle
                },
                start_label: {
                    default: null,
                    type: cc.Label
                },
                start_shadow_label: {
                    default: null,
                    type: cc.Label
                },
                id_label: {
                    default: null,
                    type: cc.Label
                },
                alertDlg: {
                    default: null,
                    type: cc.Prefab
                },
                notification: {
                    default: null,
                    type: cc.Prefab
                },
                moregameDlg: {
                    default: null,
                    type: cc.Prefab
                },
                loadDlg: {
                    default: null,
                    type: cc.Prefab
                }
            },
            onLoad: function() {
                this.dataloading = !0;
                var i = this;
                this.GameSceneload = !1,
                a.startGame(function() {
                    globalManager.fbPlayerId = a.getPlayerID(),
                    globalManager.initDT(),
                    o.login_page_event(),
                    playerManager.loadAllData(function(t) {
                        var e = playerManager.getObjData("enableSound");
                        if (i.sounds_toggle.isChecked = !e,
                        o.achieve_level_event(playerManager.getNumData("UnlockLevel")),
                        t) {
                            i.start_label.string = "Play Now",
                            i.start_shadow_label.string = "Play Now";
                            var n = a.getEntryPointData();
                            n && n.type && o.entry_with_share_event()
                        } else if (!cc.sys.localStorage.getItem("createshortcut")) {
                            -1 < a.getSupportedAPIs().toString().toLowerCase().indexOf("createshortcut") && a.createShortcut(function() {
                                cc.sys.localStorage.setItem("createshortcut", !0),
                                o.create_shortcut_event()
                            })
                        }
                        i.dataloading = !1,
                        1 == i.GameSceneload && i.closeLoading()
                    }),
                    1 != globalManager.firstInGame && a.requestInterstitialAd("2123873081225075_2123907301221653", function() {
                        i.AdPop()
                    }),
                    globalManager.firstInGame = !1,
                    a.requestRewardAd("2123873081225075_2123877704557946"),
                    a.getPlayerInfo(function(t) {
                        var e = t.playerName
                          , n = t.playerId;
                        i.id_label.string = "ID:" + n,
                        server_util.login(e, n, t.photo, function() {
                            a.setLeaderboardScore(playerManager.getScore()),
                            server_util.setLeaderboardScore(playerManager.getScore()),
                            i.saveInviter()
                        })
                    }),
                    o.entry_with_context_event(a.getContextID(), a.getType())
                }),
                cc.director.preloadScene("GameScene", function(t) {
                    cc.log("load GameScene success"),
                    i.GameSceneload = !0,
                    0 == i.dataloading && i.closeLoading()
                })
            },
            start: function() {},
            onDestroy: function() {},
            startGameClick: function() {
                0 == this.dataloading && this.GameSceneload ? cc.director.loadScene("GameScene") : this.showLoading(function() {
                    cc.director.loadScene("GameScene")
                })
            },
            shareClick: function() {
                o.login_share_event(),
                a.share(function() {
                    cc.log("share success")
                })
            },
            AdPop: function() {
                a.showInterstitialAd(function() {
                    a.requestInterstitialAd("2123873081225075_2123907301221653")
                }, function() {
                    cc.log("interstitialAd load err"),
                    a.requestInterstitialAd("2123873081225075_2123907301221653"),
                    this.showToast("No available Ad right now, try again later.")
                }
                .bind(this))
            },
            moreGameClick: function() {
                this.moregamedialog ? (this.moregamedialog.parent = this.node,
                this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg),
                this.moregamedialog.parent = this.node,
                this.moregamedialog.getComponent("moregame-dialog").setData(1))
            },
            rankClick: function() {
                this.showPrefabDialog(this.rank_dialog_prefab)
            },
            idClick: function() {
                this.id_label.node.active = !this.id_label.node.active
            },
            showPrefabDialog: function(t) {
                null != this._dialogs[t.name] && this._dialogs[t.name].destroy(),
                cc.supportJit ? (cc.supportJit = !1,
                this._dialogs[t.name] = cc.instantiate(t),
                cc.supportJit = !0) : this._dialogs[t.name] = cc.instantiate(t),
                this._dialogs[t.name].parent = this.node
            },
            showToast: function(t) {
                this.toast && this.toast.removeFromParent(),
                this.toast = cc.instantiate(this.alertDlg),
                this.toast.getComponent("toast").setData(t),
                this.toast.parent = this.node,
                this.toast.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf(!0))),
                this.toast.setLocalZOrder(100)
            },
            showNotification: function(t, e) {
                var n = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(),
                this.notificationDlg = cc.instantiate(this.notification),
                this.notificationDlg.getComponent("notification").setData(t, e, function() {
                    n.notificationDlg = null
                }),
                this.notificationDlg.parent = this.node,
                this.notificationDlg.setLocalZOrder(100)
            },
            closeSound: function() {
                var t = playerManager.getObjData("enableSound");
                playerManager.setObjData("enableSound", !t)
            },
            showLoading: function(t) {
                o.data_loading_event(),
                this.loadcallback = t,
                this.loading && this.loading.removeFromParent(!0),
                this.loading = cc.instantiate(this.loadDlg),
                this.loading.parent = this.node
            },
            closeLoading: function() {
                this.loading && (this.loading.removeFromParent(!0),
                this.loading = null,
                this.loadcallback && this.loadcallback())
            },
            saveInviter: function() {
                var t = a.getEntryPointData();
                cc.log("ext=" + JSON.stringify(t)),
                t && t.type && t.inviter && (o.invite_new_success_event(),
                server_util.saveInviter(t.inviter))
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "fish-cfg": "fish-cfg",
        "instant-util": "instant-util",
        playerManager: "playerManager"
    }],
    md5: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "abc2bn/pSlFVoNN3OWIKKno", "md5");
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        cc.MD5 = function(t) {
            function d(t, e, n) {
                return t & e | ~t & n
            }
            function p(t, e, n) {
                return n & t | ~n & e
            }
            function g(t, e, n) {
                return t ^ e ^ n
            }
            function m(t, e, n) {
                return e ^ (t | ~n)
            }
            function A(t, e) {
                return t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
            }
            function i(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    if (t.charCodeAt(n) <= 127)
                        e.push(t.charCodeAt(n));
                    else
                        for (var i = encodeURIComponent(t.charAt(n)).substr(1).split("%"), a = 0; a < i.length; a++)
                            e.push(parseInt(i[a], 16));
                return e
            }
            function e(t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++)
                    e[n] = t[n];
                return e
            }
            var y = null
              , n = null;
            function C(t, e) {
                return 4294967295 & t + e
            }
            return "string" == typeof t ? y = i(t) : t.constructor == Array ? 0 === t.length ? y = t : "string" == typeof t[0] ? y = function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e = e.concat(i(t[n]));
                return e
            }(t) : "number" == typeof t[0] ? y = t : n = a(t[0]) : "undefined" != typeof ArrayBuffer ? t instanceof ArrayBuffer ? y = e(new Uint8Array(t)) : t instanceof Uint8Array || t instanceof Int8Array ? y = e(t) : t instanceof Uint32Array || t instanceof Int32Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Float32Array || t instanceof Float64Array ? y = e(new Uint8Array(t.buffer)) : n = void 0 === t ? "undefined" : a(t) : n = void 0 === t ? "undefined" : a(t),
            n && alert("MD5 type mismatch, cannot process " + n),
            function() {
                function t(t, e, n, i) {
                    var a, o, r = h;
                    h = u,
                    l = C(u = l, (a = C(c, C(t, C(e, n)))) << (o = i) & 4294967295 | a >>> 32 - o),
                    c = r
                }
                var e = y.length;
                y.push(128);
                var n = y.length % 64;
                if (56 < n) {
                    for (var i = 0; i < 64 - n; i++)
                        y.push(0);
                    n = y.length % 64
                }
                for (i = 0; i < 56 - n; i++)
                    y.push(0);
                y = y.concat(function(t) {
                    for (var e = [], n = 0; n < 8; n++)
                        e.push(255 & t),
                        t >>>= 8;
                    return e
                }(8 * e));
                var a = 1732584193
                  , o = 4023233417
                  , r = 2562383102
                  , s = 271733878
                  , c = 0
                  , l = 0
                  , u = 0
                  , h = 0;
                for (i = 0; i < y.length / 64; i++) {
                    c = a;
                    var f = 64 * i;
                    t(d(l = o, u = r, h = s), 3614090360, A(y, f), 7),
                    t(d(l, u, h), 3905402710, A(y, f + 4), 12),
                    t(d(l, u, h), 606105819, A(y, f + 8), 17),
                    t(d(l, u, h), 3250441966, A(y, f + 12), 22),
                    t(d(l, u, h), 4118548399, A(y, f + 16), 7),
                    t(d(l, u, h), 1200080426, A(y, f + 20), 12),
                    t(d(l, u, h), 2821735955, A(y, f + 24), 17),
                    t(d(l, u, h), 4249261313, A(y, f + 28), 22),
                    t(d(l, u, h), 1770035416, A(y, f + 32), 7),
                    t(d(l, u, h), 2336552879, A(y, f + 36), 12),
                    t(d(l, u, h), 4294925233, A(y, f + 40), 17),
                    t(d(l, u, h), 2304563134, A(y, f + 44), 22),
                    t(d(l, u, h), 1804603682, A(y, f + 48), 7),
                    t(d(l, u, h), 4254626195, A(y, f + 52), 12),
                    t(d(l, u, h), 2792965006, A(y, f + 56), 17),
                    t(d(l, u, h), 1236535329, A(y, f + 60), 22),
                    t(p(l, u, h), 4129170786, A(y, f + 4), 5),
                    t(p(l, u, h), 3225465664, A(y, f + 24), 9),
                    t(p(l, u, h), 643717713, A(y, f + 44), 14),
                    t(p(l, u, h), 3921069994, A(y, f), 20),
                    t(p(l, u, h), 3593408605, A(y, f + 20), 5),
                    t(p(l, u, h), 38016083, A(y, f + 40), 9),
                    t(p(l, u, h), 3634488961, A(y, f + 60), 14),
                    t(p(l, u, h), 3889429448, A(y, f + 16), 20),
                    t(p(l, u, h), 568446438, A(y, f + 36), 5),
                    t(p(l, u, h), 3275163606, A(y, f + 56), 9),
                    t(p(l, u, h), 4107603335, A(y, f + 12), 14),
                    t(p(l, u, h), 1163531501, A(y, f + 32), 20),
                    t(p(l, u, h), 2850285829, A(y, f + 52), 5),
                    t(p(l, u, h), 4243563512, A(y, f + 8), 9),
                    t(p(l, u, h), 1735328473, A(y, f + 28), 14),
                    t(p(l, u, h), 2368359562, A(y, f + 48), 20),
                    t(g(l, u, h), 4294588738, A(y, f + 20), 4),
                    t(g(l, u, h), 2272392833, A(y, f + 32), 11),
                    t(g(l, u, h), 1839030562, A(y, f + 44), 16),
                    t(g(l, u, h), 4259657740, A(y, f + 56), 23),
                    t(g(l, u, h), 2763975236, A(y, f + 4), 4),
                    t(g(l, u, h), 1272893353, A(y, f + 16), 11),
                    t(g(l, u, h), 4139469664, A(y, f + 28), 16),
                    t(g(l, u, h), 3200236656, A(y, f + 40), 23),
                    t(g(l, u, h), 681279174, A(y, f + 52), 4),
                    t(g(l, u, h), 3936430074, A(y, f), 11),
                    t(g(l, u, h), 3572445317, A(y, f + 12), 16),
                    t(g(l, u, h), 76029189, A(y, f + 24), 23),
                    t(g(l, u, h), 3654602809, A(y, f + 36), 4),
                    t(g(l, u, h), 3873151461, A(y, f + 48), 11),
                    t(g(l, u, h), 530742520, A(y, f + 60), 16),
                    t(g(l, u, h), 3299628645, A(y, f + 8), 23),
                    t(m(l, u, h), 4096336452, A(y, f), 6),
                    t(m(l, u, h), 1126891415, A(y, f + 28), 10),
                    t(m(l, u, h), 2878612391, A(y, f + 56), 15),
                    t(m(l, u, h), 4237533241, A(y, f + 20), 21),
                    t(m(l, u, h), 1700485571, A(y, f + 48), 6),
                    t(m(l, u, h), 2399980690, A(y, f + 12), 10),
                    t(m(l, u, h), 4293915773, A(y, f + 40), 15),
                    t(m(l, u, h), 2240044497, A(y, f + 4), 21),
                    t(m(l, u, h), 1873313359, A(y, f + 32), 6),
                    t(m(l, u, h), 4264355552, A(y, f + 60), 10),
                    t(m(l, u, h), 2734768916, A(y, f + 24), 15),
                    t(m(l, u, h), 1309151649, A(y, f + 52), 21),
                    t(m(l, u, h), 4149444226, A(y, f + 16), 6),
                    t(m(l, u, h), 3174756917, A(y, f + 44), 10),
                    t(m(l, u, h), 718787259, A(y, f + 8), 15),
                    t(m(l, u, h), 3951481745, A(y, f + 36), 21),
                    a = C(a, c),
                    o = C(o, l),
                    r = C(r, u),
                    s = C(s, h)
                }
                return function(t, e, n, i) {
                    for (var a, o = "", r = 0, s = 0, c = 3; 0 <= c; c--)
                        r = 255 & (s = arguments[c]),
                        r <<= 8,
                        r |= 255 & (s >>>= 8),
                        r <<= 8,
                        r |= 255 & (s >>>= 8),
                        r <<= 8,
                        o += (a = ((r |= s >>>= 8) >>> 0).toString(16),
                        "00000000".substr(0, 8 - a.length) + a);
                    return o
                }(s, r, o, a).toUpperCase()
            }()
        }
        ,
        cc._RF.pop()
    }
    , {}],
    "moregame-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a7548VpoGZDiJZDWrB0E4zC", "moregame-dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                desc_label: {
                    default: null,
                    type: cc.Label
                },
                list_layout: {
                    default: null,
                    type: cc.Node
                },
                item_prefab: {
                    default: null,
                    type: cc.Prefab
                }
            },
            onLoad: function() {},
            onDestroy: function() {},
            setData: function(t) {
                1 == t ? (this.setListData(globalManager.gamelist),
                this.desc_label.string = "Here is the passport to other amazing games.\nTry now!") : 2 == t && (this.setListData(globalManager.gameListInGame),
                this.desc_label.string = "Congratulations! You are on the top of Big Fish!\nI believe you do have the talent in other games.\nTry now!")
            },
            setListData: function(t) {
                this.list_layout.getComponent("list-adapter").removeAllListView();
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    e.push({
                        gamename: i.name,
                        appid: i.app_id,
                        iconurl: i.img
                    })
                }
                this.list_layout.getComponent("list-adapter").initListView(this.item_prefab, "moregame-item", e)
            },
            closeDialog: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "moregame-item": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a018dIb+I9AP4G7IPM5dP/L", "moregame-item");
        var i = t("analytics-data")
          , a = t("instant-util")
          , o = t("webimg-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                img_icon: cc.Sprite,
                name_label: cc.Label,
                play_btn: cc.Button
            },
            setData: function(t, e) {
                this.mydata = t,
                this.name_label.string = t.gamename,
                o.load_webimg(t.iconurl, this.img_icon)
            },
            buyClick: function() {
                i.switchgameasync_event(this.mydata.gamename),
                a.switchGameAsync(this.mydata.appid, function(t) {})
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "webimg-util": "webimg-util"
    }],
    "native-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "76075+izWdG951U8gWf8cLW", "native-util");
        var i = t("PlatformSdk")
          , a = t("UserInterface");
        e.exports = {
            init: function() {
                i.setListener(this.callback.bind(this)),
                i.init()
            },
            fbLogin: function() {
                a.login()
            },
            callback: function(t, e) {
                t
            }
        },
        cc._RF.pop()
    }
    , {
        PlatformSdk: "PlatformSdk",
        UserInterface: "UserInterface"
    }],
    "no-coin-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7e1c9cTNZtJEIcwArcarMD0", "no-coin-dialog");
        var r = t("number-util")
          , o = t("instant-util")
          , s = t("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                add_coint_label: {
                    default: null,
                    type: cc.Label
                },
                count_time_node: {
                    default: null,
                    type: cc.Node
                },
                btn_bg: {
                    default: null,
                    type: cc.Node
                },
                ad_btn: {
                    default: null,
                    type: cc.Button
                }
            },
            onLoad: function() {
                var t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0,
                cc.log("price=" + playerManager.getNumData("Price" + t));
                var e = r.unit_format(2 * playerManager.getNumData("Price" + t));
                this.add_coint_label.string = "+" + e,
                this.setWatchVideoEnable(!0);
                var n = Math.floor((new Date).getTime() / 1e3)
                  , i = playerManager.getNumData("ADTime");
                cc.log("nowtime = " + n),
                cc.log("lasttime = " + i);
                var a = playerManager.getNumData("ADTimeCD") - (n - i);
                if (this.adTimeCd = a,
                cc.log("cd=" + a),
                0 < a) {
                    this.setWatchVideoEnable(!1);
                    var o = this;
                    this.count_time_node.getComponent("count-down-node").setData(a, function(t) {
                        0 == (o.adTimeCd = t) && this.setWatchVideoEnable(!0)
                    }
                    .bind(this))
                }
            },
            closeWatchVideoDialog: function() {
                playerManager.setNumData("ADTime", Math.floor((new Date).getTime() / 1e3)),
                playerManager.setNumData("ADTimeCD", this.adTimeCd),
                cc.log("ADTimeCD = " + this.adTimeCd),
                this.node.destroy()
            },
            watchVideo: function() {
                var i = this;
                s.watch_video_event();
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.showRewardAd(function() {
                    cc.log("showAd success"),
                    s.watch_video_success_event(),
                    o.requestRewardAd("2123873081225075_2123877704557946");
                    var t = playerManager.getNumData("UnlockLevel") - 4;
                    t = 0 <= t ? t : 0;
                    var e = 2 * playerManager.getNumData("Price" + t);
                    a.showToast("+" + r.unit_format(e) + " coins"),
                    playerManager.addNumData("Coin", e),
                    cc.director.emit("updateCoin");
                    var n = r.countTime(1200, function(t) {
                        cc.isValid(i.node) ? i.adTimeCd = t : (cc.log("clearInterval =" + n),
                        clearInterval(n))
                    });
                    cc.log("countDownId=" + n),
                    i.adTimeCd = 1200,
                    i.closeWatchVideoDialog()
                }, function() {
                    cc.log("RewardAd load err"),
                    o.requestRewardAd("2123873081225075_2123877704557946"),
                    a.showToast("No available Ad right now, try again later."),
                    i.closeWatchVideoDialog()
                })
            },
            shareTo: function() {
                s.share_get_coin_event(),
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showInviteFriendsDialog(),
                this.closeWatchVideoDialog()
            },
            setWatchVideoEnable: function(t) {
                t ? (this.btn_bg.opacity = 255,
                this.ad_btn.interactable = !0) : (this.btn_bg.opacity = 167,
                this.ad_btn.interactable = !1)
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    notification: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a5abbAhswJEZaNVWhA9tuob", "notification");
        cc.Class({
            extends: cc.Component,
            properties: {
                bg_layout: {
                    default: null,
                    type: cc.Node
                },
                text_label: {
                    default: null,
                    type: cc.Label
                }
            },
            onLoad: function() {},
            start: function() {},
            setData: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5
                  , n = arguments[2]
                  , i = this;
                this.text_label.string = t,
                this.callback = n,
                i.playAnim(!1),
                this.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                    i.closedlg()
                }, i)))
            },
            playAnim: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                  , e = this.node.getComponent(cc.Animation);
                1 == t ? e.play("notification1_anim", 0) : e.play("notification_anim", 0)
            },
            closedlg: function() {
                var t = this;
                this.playAnim(!0),
                this.node.runAction(cc.sequence(cc.delayTime(.35), cc.callFunc(function() {
                    t.callback && t.callback()
                }, t), cc.removeSelf()))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "number-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "02fafbsqUREbJv8xzpAbqxZ", "number-util");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , r = {};
        e.exports = {
            unit_format: function(t) {
                var e = "";
                if (6 < (t = t.toString()).length) {
                    var n = parseInt(t.length / 3);
                    1 == (n -= 0 == t.length % 3 ? 2 : 1) ? e = "K" : 2 == n ? e = "M" : 3 == n ? e = "B" : 4 == n ? e = "T" : 5 == n ? e = "KT" : 6 == n ? e = "MT" : 7 == n && (e = "BT"),
                    t /= Math.pow(1e3, n)
                }
                return this.number_format(t, 0, ",") + e
            },
            number_format: function(t, e, n) {
                t = (t + "").replace(/[^0-9+-Ee.]/g, "");
                var i, a, o, r = isFinite(+t) ? +t : 0, s = isFinite(+e) ? Math.abs(e) : 0, c = void 0 === n ? "," : n, l = "";
                l = (s ? (i = r,
                a = s,
                o = Math.pow(10, a),
                "" + Math.ceil(i * o) / o) : "" + Math.round(r)).split(".");
                for (var u = /(-?\d+)(\d{3})/; u.test(l[0]); )
                    l[0] = l[0].replace(u, "$1" + c + "$2");
                return (l[1] || "").length < s && (l[1] = l[1] || "",
                l[1] += new Array(s - l[1].length + 1).join("0")),
                l.join(".")
            },
            setNumberLength: function(t, e) {
                for (t = t.toString(); t.length < e; )
                    t = "0" + t;
                return t
            },
            time_format: function(t) {
                var e = this.setNumberLength(Math.floor(t / 3600), 2);
                return t %= 3600,
                e + ":" + this.setNumberLength(Math.floor(t / 60), 2) + ":" + this.setNumberLength(t % 60, 2)
            },
            sortByType: function(t, e) {
                var a;
                return t.sort((a = e,
                function(t, e) {
                    var n, i;
                    if ("object" === (void 0 === t ? "undefined" : o(t)) && "object" === (void 0 === e ? "undefined" : o(e)) && t && e)
                        return (n = t[a]) === (i = e[a]) ? 0 : (void 0 === n ? "undefined" : o(n)) === (void 0 === i ? "undefined" : o(i)) ? n < i ? -1 : 1 : (void 0 === n ? "undefined" : o(n)) < (void 0 === i ? "undefined" : o(i)) ? -1 : 1;
                    throw "error"
                }
                ))
            },
            countTime: function(t, e) {
                var n = setInterval(function() {
                    0 <= t ? (e(t),
                    t--) : (cc.log("stop Interval=" + n),
                    clearInterval(n))
                }
                .bind(this), 1e3);
                return n
            },
            clearInterval: function(e) {
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function(t) {
                cc.log("clearInterval=" + t),
                clearInterval(t)
            }),
            playerdataCountDown: function(e, t, n) {
                var i = this;
                function a() {
                    r[e] = window.setTimeout(function(t) {
                        playerManager.addNumData(e, -1),
                        n && n(playerManager.getNumData(e)),
                        0 < playerManager.getNumData(e) ? a() : r[e] = null
                    }
                    .bind(i), 1e3 * t)
                }
                null == r[e] || this.playerdataCountDownClear(e),
                a()
            },
            playerdataCountDownClear: function(t) {
                null != r[t] && (window.clearTimeout(r[t]),
                r[t] = null)
            },
            isOneDay: function(t, e) {
                cc.log("perTime=" + t),
                cc.log("nowTime=" + e);
                var n = new Date(t)
                  , i = new Date(e);
                return n.getFullYear() == i.getFullYear() && n.getMonth() == i.getMonth() && n.getDate() == i.getDate()
            },
            randomNum: function(t, e) {
                switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * t + 1, 10);
                case 2:
                    return parseInt(Math.random() * (e - t + 1) + t, 10);
                default:
                    return 0
                }
            }
        },
        cc._RF.pop()
    }
    , {}],
    playerManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f8b1f3zdNlF9aBhUGRcZzQm", "playerManager");
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , f = t("analytics-data")
          , d = t("instant-util");
        t("server-util"),
        function() {
            if (window.playerManager)
                e.exports = window.playerManager;
            else {
                var l = l || {}
                  , u = {
                    firstLogin: !0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    enableSound: !0,
                    Coin: "2000",
                    UnlockLevel: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0
                };
                u.AcelTime = 0,
                u.ShareTime = 0,
                u.lastOffline = -1,
                u.sharedContextIds = {},
                u.getCoinTime = 0,
                u.getFreeTime = 0,
                u.freeReward = !1,
                u.inviteRewards = {},
                u.inviteCount = 0,
                u.inviteReceiveTime = 0,
                u.dailyTask = {
                    taskTime: 0,
                    taskProgress: []
                },
                u.dailyPoint = {
                    point: 0,
                    rewardState: []
                },
                u.messageRewardIds = [];
                for (var t = 0; t < fish_data.length; t++)
                    u["Price" + t] = fish_data[t].price + "";
                for (t = 0; t < 15; t++)
                    u["Panel" + t] = {
                        level: -1,
                        state: 0,
                        price: "0"
                    };
                var i = {
                    firstLogin: !0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    enableSound: !0,
                    Coin: "2000",
                    UnlockLevel: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0,
                    ShareTime: 0,
                    ShareTimeCD: 0,
                    lastOffline: -1,
                    sharedContextIds: {},
                    getCoinTime: 0,
                    getFreeTime: 0,
                    freeReward: !1,
                    inviteRewards: null,
                    inviteCount: 0,
                    inviteReceiveTime: 0,
                    dailyTask: {
                        taskTime: 0,
                        taskProgress: []
                    },
                    dailyPoint: {
                        point: 0,
                        rewardState: []
                    },
                    messageRewardIds: []
                };
                for (t = 0; t < fish_data.length; t++)
                    i["Price" + t] = fish_data[t].price + "";
                for (t = 0; t < 15; t++)
                    i["Panel" + t] = {
                        level: -1,
                        state: 0,
                        price: "0"
                    };
                l.playerData = i,
                l.coinEnough = function(t) {
                    if (0 <= l.playerData.Coin - t)
                        return !0;
                    var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    return e.noCoinDlg && (e.showInviteFriendsDialog(),
                    e.showToast("Insufficient coins")),
                    !1
                }
                ,
                l.setNumData = function(t, e) {
                    l.playerData[t] = e;
                    var n = {};
                    n[t] = e + "",
                    n[t + "savetime"] = (new Date).getTime() + "",
                    d.setData(n),
                    globalManager.saveLocalData(t, n[t]),
                    globalManager.saveLocalData(t + "savetime", n[t + "savetime"]),
                    server_util.setGameData(t, e)
                }
                ,
                l.getNumData = function(t) {
                    return parseInt(l.playerData[t])
                }
                ,
                l.addNumData = function(t, e) {
                    e = isNaN(e) ? 0 : e;
                    var n = parseInt(l.playerData[t]);
                    n = isNaN(n) ? 0 : n,
                    l.playerData[t] = "" + (n + e);
                    var i = {};
                    i[t] = l.playerData[t],
                    i[t + "savetime"] = (new Date).getTime() + "",
                    d.setData(i),
                    globalManager.saveLocalData(t, i[t]),
                    globalManager.saveLocalData(t + "savetime", i[t + "savetime"]),
                    server_util.setGameData(t, i[t])
                }
                ,
                l.setObjData = function(t, e) {
                    l.playerData[t] = e;
                    var n = {};
                    n[t] = e,
                    n[t + "savetime"] = (new Date).getTime() + "";
                    var i = e;
                    "object" == h(u[t]) && (i = JSON.stringify(e)),
                    globalManager.saveLocalData(t, i),
                    globalManager.saveLocalData(t + "savetime", n[t + "savetime"]),
                    d.setData(n),
                    server_util.setGameData(t, e)
                }
                ,
                l.getObjData = function(t) {
                    return l.playerData[t]
                }
                ,
                l.loadAllData = function(c) {
                    "undefined" != typeof FBInstant ? d.getData(["firstLogin", "firstLoginsavetime"], function(t) {
                        if (0 == l.getDataAuto(t, "firstLogin")) {
                            l.playerData.animTutorial = !1;
                            var e = []
                              , a = {};
                            for (var n in l.playerData) {
                                var i = l.playerData[n];
                                "firstLogin" != n && (e.push(n),
                                e.push(n + "savetime"),
                                a[n] = 1,
                                a[n + "savetime"] = 1)
                            }
                            0 < e.length ? d.getData(e, function(t) {
                                for (var e in t) {
                                    t[e];
                                    l.playerData[e] = l.getDataAuto(t, e),
                                    a[e]--
                                }
                                var n = "";
                                for (var i in a)
                                    1 == a[i] && (n += i);
                                "" != n && f.fb_get_data_fail_event(n),
                                c(!1)
                            }) : c(!1)
                        } else {
                            l.playerData.firstLogin = !1;
                            e = [];
                            for (var n in l.playerData) {
                                i = l.playerData[n];
                                e.push(n)
                            }
                            if (0 < e.length) {
                                for (var o = {}, r = e.length - 1; 0 <= r; r--) {
                                    n = e[r],
                                    i = l.playerData[n];
                                    o[n] = i,
                                    o[n + "savetime"] = (new Date).getTime() + "";
                                    var s = i;
                                    "object" == h(u[n]) && (s = JSON.stringify(i)),
                                    globalManager.saveLocalData(n, s),
                                    globalManager.saveLocalData(n + "savetime", o[n + "savetime"])
                                }
                                c(!0),
                                d.setData(o, function(t) {})
                            } else
                                c(!0)
                        }
                    }) : setTimeout(function() {
                        c && c(!0)
                    }, 1e3)
                }
                ,
                l.getScore = function() {
                    for (var t = 0, e = 0; e < 15; e++) {
                        var n = i["Panel" + e].level;
                        0 <= n && (t += Math.pow(2, n))
                    }
                    return t
                }
                ,
                l.forceUpdateData = function(t) {
                    for (var e in t) {
                        var n = !1;
                        "string" == typeof t[e] && (n = 0 <= t[e].indexOf("savetime")),
                        n ? t[e] = Number(t[e]) : "boolean" == typeof u[e] ? t[e] = Boolean(t[e]) : "number" == typeof u[e] ? t[e] = Number(t[e]) : "object" == h(u[e]) && (cc.log("data[k]=" + t[e]),
                        t[e] = JSON.parse(t[e])),
                        this.setObjData(e, t[e])
                    }
                }
                ,
                l.compareSaveTime = function(t, e) {
                    return null != t && "" != t || (t = 0),
                    t = Number(t),
                    null != e && "" != e || (e = 0),
                    t = Number(t),
                    0 == (e = Number(e)) && 0 == t ? 1 : t <= e ? 2 : 1
                }
                ,
                l.getDataAuto = function(t, e) {
                    var n, i, a, o, r, s = this.compareSaveTime(t[e + "savetime"], globalManager.getLocalData(e + "savetime")), c = void 0;
                    return 1 == s ? (cc.log("key " + e + " load from fb."),
                    c = t[e]) : 2 == s && (cc.log("key " + e + " load from local."),
                    c = globalManager.getLocalData(e),
                    "boolean" == typeof u[e] ? (cc.log("boolean=" + c),
                    o = c,
                    r = u[e],
                    c = null == o || "" == o ? r : "false" != o && ("true" == o || void 0)) : "number" == typeof u[e] ? (cc.log("number=" + c),
                    n = c,
                    i = u[e],
                    a = Number(n),
                    c = isNaN(a) ? i : a) : "object" == h(u[e]) && (cc.log("object=" + c),
                    c = function(t, e) {
                        var n;
                        try {
                            return "object" == (void 0 === (n = JSON.parse(t)) ? "undefined" : h(n)) && n ? n : e
                        } catch (t) {
                            return e
                        }
                    }(c, u[e]))),
                    cc.log("value2=" + c),
                    c
                }
                ,
                l.resetData = function() {
                    for (var t in u) {
                        var e = u[t];
                        this.setObjData(t, e)
                    }
                }
                ,
                cc.game.on(cc.game.EVENT_HIDE, function(t) {
                    cc.log("game onPause2"),
                    l.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3))
                }),
                cc.game.on(cc.game.EVENT_SHOW, function(t) {
                    cc.log("game onResume"),
                    cc.director.emit("game_eventshow")
                }),
                cc.director.on("forceUpdateData", function(t) {
                    l.forceUpdateData(t.detail)
                }),
                cc.director.on("resetData", function(t) {
                    l.resetData()
                }),
                window.playerManager = l,
                e.exports = l
            }
        }(),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "server-util": "server-util"
    }],
    "pomelo-client": [function(z, Z, t) {
        "use strict";
        cc._RF.push(Z, "475261YaN5DH5scskqiHBzi", "pomelo-client"),
        function() {
            z("protocol");
            var r = window.protobuf
              , s = window.decodeIO_protobuf
              , c = null
              , l = null
              , u = Protocol.Package
              , o = Protocol.Message
              , t = window.EventEmitter
              , h = window.rsa;
            "undefined" != typeof window && "undefined" != typeof sys && sys.localStorage && (window.localStorage = sys.localStorage);
            "function" != typeof Object.create && (Object.create = function(t) {
                function e() {}
                return e.prototype = t,
                new e
            }
            );
            var e = window
              , f = Object.create(t.prototype);
            e.pomelo = f;
            var d, p = null, i = 0, a = {}, g = {}, m = {}, A = {}, y = {}, C = {}, E = {}, v = 0, n = 0, b = 0, S = 0, I = null, w = null, R = null, P = null, x = null, T = !1, F = null, D = null, U = 0, N = 5e3, M = {
                sys: {
                    type: "js-websocket",
                    version: "0.0.1",
                    rsa: {}
                },
                user: {}
            }, K = null;
            f.init = function(t, e) {
                K = e;
                var n = t.host
                  , i = t.port
                  , a = t.local;
                x = t.encode || k,
                P = t.decode || Q;
                var o = a ? "ws://" + n : "wss://" + n;
                if (i && (o += ":" + i),
                M.user = t.user,
                t.encrypt) {
                    d = !0,
                    h.generate(1024, "10001");
                    var r = {
                        rsa_n: h.n.toString(16),
                        rsa_e: h.e
                    };
                    M.sys.rsa = r
                }
                R = t.handshakeCallback,
                L(t, o, e)
            }
            ;
            var Q = f.decode = function(t) {
                var e = o.decode(t);
                if (!(0 < e.id) || (e.route = m[e.id],
                delete m[e.id],
                e.route))
                    return e.body = q(e),
                    e
            }
              , k = f.encode = function(t, e, n) {
                var i = t ? o.TYPE_REQUEST : o.TYPE_NOTIFY;
                if (r && E[e])
                    n = r.encode(e, n);
                else if (c && c.lookup(e)) {
                    n = new (c.build(e))(n).encodeNB()
                } else
                    n = Protocol.strencode(JSON.stringify(n));
                var a = 0;
                return A && A[e] && (e = A[e],
                a = 1),
                o.encode(t, i, a, e, n)
            }
              , L = function e(n, t, i) {
                cc.log("connect to " + t);
                var a = (n = n || {}).maxReconnectAttempts || 10;
                if (D = t,
                window.localStorage && window.localStorage.getItem("protos") && 0 === v) {
                    var o = JSON.parse(window.localStorage.getItem("protos"));
                    v = o.version || 0,
                    C = o.server || {},
                    E = o.client || {},
                    r && r.init({
                        encoderProtos: E,
                        decoderProtos: C
                    }),
                    s && (c = s.loadJson(E),
                    l = s.loadJson(C))
                }
                M.sys.protoVersion = v;
                (p = new WebSocket(t)).binaryType = "arraybuffer",
                p.onopen = function(t) {
                    T && f.emit("reconnect"),
                    B();
                    var e = u.encode(u.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(M)));
                    G(e)
                }
                ,
                p.onmessage = function(t) {
                    j(u.decode(t.data), i),
                    b && (S = Date.now() + b)
                }
                ,
                p.onerror = function(t) {
                    f.emit("io-error", t),
                    cc.error("socket error: ", t)
                }
                ,
                p.onclose = function(t) {
                    f.emit("close", t),
                    f.emit("disconnect", t),
                    cc.error("socket close: ", t),
                    n.reconnect && U < a && (T = !0,
                    U++,
                    F = setTimeout(function() {
                        e(n, D, i)
                    }, N),
                    N *= 2)
                }
            };
            f.disconnect = function() {
                p && (p.disconnect && p.disconnect(),
                p.close && p.close(),
                cc.log("disconnect"),
                p = null),
                I && (clearTimeout(I),
                I = null),
                w && (clearTimeout(w),
                w = null)
            }
            ,
            f.isconnect = function() {
                return !!p
            }
            ;
            var B = function() {
                T = !1,
                N = 5e3,
                U = 0,
                clearTimeout(F)
            };
            f.request = function(t, e, n) {
                2 === arguments.length && "function" == typeof e ? (n = e,
                e = {}) : e = e || {},
                (t = t || e.route) && (V(++i, t, e),
                a[i] = n,
                m[i] = t)
            }
            ,
            f.notify = function(t, e) {
                V(0, t, e = e || {})
            }
            ;
            var V = function(t, e, n) {
                if (d) {
                    n = JSON.stringify(n);
                    var i = h.signString(n, "sha256");
                    (n = JSON.parse(n)).__crypto__ = i
                }
                x && (n = x(t, e, n));
                var a = u.encode(u.TYPE_DATA, n);
                G(a)
            }
              , G = function(t) {
                p.send(t.buffer)
            }
              , Y = function t() {
                var e = S - Date.now();
                100 < e ? w = setTimeout(t, e) : (cc.error("server heartbeat timeout"),
                f.emit("heartbeat timeout"),
                f.disconnect())
            };
            g[u.TYPE_HANDSHAKE] = function(t) {
                if (501 !== (t = JSON.parse(Protocol.strdecode(t))).code)
                    if (200 === t.code) {
                        O(t);
                        var e = u.encode(u.TYPE_HANDSHAKE_ACK);
                        G(e),
                        K && K(p)
                    } else
                        f.emit("error", "handshake fail");
                else
                    f.emit("error", "client version not fullfill")
            }
            ,
            g[u.TYPE_HEARTBEAT] = function(t) {
                if (n) {
                    var e = u.encode(u.TYPE_HEARTBEAT);
                    w && (clearTimeout(w),
                    w = null),
                    I || (I = setTimeout(function() {
                        I = null,
                        G(e),
                        S = Date.now() + b,
                        w = setTimeout(Y, b)
                    }, n))
                }
            }
            ,
            g[u.TYPE_DATA] = function(t) {
                var e = t;
                P && (e = P(e)),
                J(f, e)
            }
            ,
            g[u.TYPE_KICK] = function(t) {
                t = JSON.parse(Protocol.strdecode(t)),
                f.emit("onKick", t)
            }
            ;
            var j = function(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        g[n.type](n.body)
                    }
                else
                    g[t.type](t.body)
            }
              , J = function(t, e) {
                if (e.id) {
                    var n = a[e.id];
                    delete a[e.id],
                    "function" == typeof n && n(e.body)
                } else
                    t.emit(e.route, e.body)
            }
              , q = function(t) {
                var e = t.route;
                if (t.compressRoute) {
                    if (!y[e])
                        return {};
                    e = t.route = y[e]
                }
                return r && C[e] ? r.decode(e, t.body) : l && l.lookup(e) ? l.build(e).decode(t.body) : JSON.parse(Protocol.strdecode(t.body))
            }
              , O = function(t) {
                t.sys && t.sys.heartbeat ? (n = 1e3 * t.sys.heartbeat,
                b = 2 * n) : b = n = 0,
                H(t),
                "function" == typeof R && R(t.user)
            }
              , H = function(t) {
                if (t && t.sys) {
                    A = t.sys.dict;
                    var e = t.sys.protos;
                    if (A)
                        for (var n in y = {},
                        A = A)
                            y[A[n]] = n;
                    e && (v = e.version || 0,
                    C = e.server || {},
                    E = e.client || {},
                    window.localStorage.setItem("protos", JSON.stringify(e)),
                    r && r.init({
                        encoderProtos: e.client,
                        decoderProtos: e.server
                    }),
                    s && (c = s.loadJson(E),
                    l = s.loadJson(C)))
                }
            };
            Z.exports = f
        }(),
        cc._RF.pop()
    }
    , {
        protocol: "protocol"
    }],
    protobuf: [function(t, e, n) {
        "use strict";
        var i, a;
        cc._RF.push(e, "a10b8piHCFHG5/Pfi2BNF/g", "protobuf"),
        i = "undefined" == typeof window ? e.exports : {},
        (a = i).init = function(t) {
            a.encoder.init(t.encoderProtos),
            a.decoder.init(t.decoderProtos)
        }
        ,
        a.encode = function(t, e) {
            return a.encoder.encode(t, e)
        }
        ,
        a.decode = function(t, e) {
            return a.decoder.decode(t, e)
        }
        ,
        e.exports = a,
        "undefined" != typeof window && (window.protobuf = a),
        (("undefined" != typeof protobuf ? protobuf : e.exports).constants = {}).TYPES = {
            uInt32: 0,
            sInt32: 0,
            int32: 0,
            double: 1,
            string: 2,
            message: 2,
            float: 5
        },
        (("undefined" != typeof protobuf ? protobuf : e.exports).util = {}).isSimpleType = function(t) {
            return "uInt32" === t || "sInt32" === t || "int32" === t || "uInt64" === t || "sInt64" === t || "float" === t || "double" === t
        }
        ,
        function(t, e) {
            var n = t.codec = {}
              , i = new ArrayBuffer(8)
              , a = new Float32Array(i)
              , o = new Float64Array(i)
              , r = new Uint8Array(i);
            function s(t) {
                return t <= 127 ? [t] : t <= 2047 ? [192 | t >> 6, 128 | 63 & t] : [224 | t >> 12, 128 | (4032 & t) >> 6, 128 | 63 & t]
            }
            function c(t) {
                return t <= 127 ? 1 : t <= 2047 ? 2 : 3
            }
            n.encodeUInt32 = function(t) {
                t = parseInt(t);
                if (isNaN(t) || t < 0)
                    return null;
                var e = [];
                do {
                    var n = t % 128
                      , i = Math.floor(t / 128);
                    0 !== i && (n += 128),
                    e.push(n),
                    t = i
                } while (0 !== t);return e
            }
            ,
            n.encodeSInt32 = function(t) {
                t = parseInt(t);
                return isNaN(t) ? null : (t = t < 0 ? 2 * Math.abs(t) - 1 : 2 * t,
                n.encodeUInt32(t))
            }
            ,
            n.decodeUInt32 = function(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var i = parseInt(t[n]);
                    if (e += (127 & i) * Math.pow(2, 7 * n),
                    i < 128)
                        return e
                }
                return e
            }
            ,
            n.decodeSInt32 = function(t) {
                var e = this.decodeUInt32(t);
                return e = (e % 2 + e) / 2 * (e % 2 == 1 ? -1 : 1)
            }
            ,
            n.encodeFloat = function(t) {
                return a[0] = t,
                r
            }
            ,
            n.decodeFloat = function(t, e) {
                if (!t || t.length < e + 4)
                    return null;
                for (var n = 0; n < 4; n++)
                    r[n] = t[e + n];
                return a[0]
            }
            ,
            n.encodeDouble = function(t) {
                return o[0] = t,
                r.subarray(0, 8)
            }
            ,
            n.decodeDouble = function(t, e) {
                if (!t || t.length < e + 8)
                    return null;
                for (var n = 0; n < 8; n++)
                    r[n] = t[e + n];
                return o[0]
            }
            ,
            n.encodeStr = function(t, e, n) {
                for (var i = 0; i < n.length; i++)
                    for (var a = s(n.charCodeAt(i)), o = 0; o < a.length; o++)
                        t[e] = a[o],
                        e++;
                return e
            }
            ,
            n.decodeStr = function(t, e, n) {
                for (var i = [], a = e + n; e < a; ) {
                    var o = 0;
                    t[e] < 128 ? (o = t[e],
                    e += 1) : t[e] < 224 ? (o = ((63 & t[e]) << 6) + (63 & t[e + 1]),
                    e += 2) : (o = ((15 & t[e]) << 12) + ((63 & t[e + 1]) << 6) + (63 & t[e + 2]),
                    e += 3),
                    i.push(o)
                }
                for (var r = "", s = 0; s < i.length; )
                    r += String.fromCharCode.apply(null, i.slice(s, s + 1e4)),
                    s += 1e4;
                return r
            }
            ,
            n.byteLength = function(t) {
                if ("string" != typeof t)
                    return -1;
                for (var e = 0, n = 0; n < t.length; n++) {
                    e += c(t.charCodeAt(n))
                }
                return e
            }
        }("undefined" != typeof protobuf ? protobuf : e.exports),
        function(t, e) {
            var n = t
              , l = t.encoder = {}
              , u = n.codec
              , i = n.constants
              , r = n.util;
            function h(t, e, n, i) {
                for (var a in i)
                    if (n[a]) {
                        var o = n[a];
                        switch (o.option) {
                        case "required":
                        case "optional":
                            e = f(t, e, d(o.type, o.tag)),
                            e = s(i[a], o.type, e, t, n);
                            break;
                        case "repeated":
                            0 < i[a].length && (e = c(i[a], o, e, t, n))
                        }
                    }
                return e
            }
            function s(t, e, n, i, a) {
                switch (e) {
                case "uInt32":
                    n = f(i, n, u.encodeUInt32(t));
                    break;
                case "int32":
                case "sInt32":
                    n = f(i, n, u.encodeSInt32(t));
                    break;
                case "float":
                    f(i, n, u.encodeFloat(t)),
                    n += 4;
                    break;
                case "double":
                    f(i, n, u.encodeDouble(t)),
                    n += 8;
                    break;
                case "string":
                    var o = u.byteLength(t);
                    n = f(i, n, u.encodeUInt32(o)),
                    u.encodeStr(i, n, t),
                    n += o;
                    break;
                default:
                    var r = a.__messages[e] || l.protos["message " + e];
                    if (r) {
                        var s = new ArrayBuffer(2 * u.byteLength(JSON.stringify(t)));
                        o = h(s, o = 0, r, t),
                        n = f(i, n, u.encodeUInt32(o));
                        for (var c = 0; c < o; c++)
                            i[n] = s[c],
                            n++
                    }
                }
                return n
            }
            function c(t, e, n, i, a) {
                var o = 0;
                if (r.isSimpleType(e.type))
                    for (n = f(i, n = f(i, n, d(e.type, e.tag)), u.encodeUInt32(t.length)),
                    o = 0; o < t.length; o++)
                        n = s(t[o], e.type, n, i);
                else
                    for (o = 0; o < t.length; o++)
                        n = f(i, n, d(e.type, e.tag)),
                        n = s(t[o], e.type, n, i, a);
                return n
            }
            function f(t, e, n) {
                for (var i = 0; i < n.length; i++,
                e++)
                    t[e] = n[i];
                return e
            }
            function d(t, e) {
                var n = i.TYPES[t] || 2;
                return u.encodeUInt32(e << 3 | n)
            }
            l.init = function(t) {
                this.protos = t || {}
            }
            ,
            l.encode = function(t, e) {
                var n = this.protos[t];
                if (!function t(e, n) {
                    if (!n)
                        return !1;
                    for (var i in n) {
                        var a = n[i];
                        switch (a.option) {
                        case "required":
                            if (void 0 === e[i])
                                return console.warn("no property exist for required! name: %j, proto: %j, msg: %j", i, a, e),
                                !1;
                        case "optional":
                            if (void 0 !== e[i]) {
                                var o = n.__messages[a.type] || l.protos["message " + a.type];
                                if (o && !t(e[i], o))
                                    return console.warn("inner proto error! name: %j, proto: %j, msg: %j", i, a, e),
                                    !1
                            }
                            break;
                        case "repeated":
                            var o = n.__messages[a.type] || l.protos["message " + a.type];
                            if (e[i] && o)
                                for (var r = 0; r < e[i].length; r++)
                                    if (!t(e[i][r], o))
                                        return !1
                        }
                    }
                    return !0
                }(e, n))
                    return null;
                var i = u.byteLength(JSON.stringify(e))
                  , a = new ArrayBuffer(i)
                  , o = new Uint8Array(a)
                  , r = 0;
                return n && 0 < (r = h(o, r, n, e)) ? o.subarray(0, r) : null
            }
        }("undefined" != typeof protobuf ? protobuf : e.exports),
        function(t, e) {
            var c, n = t, l = t.decoder = {}, u = n.codec, o = n.util, h = 0;
            function f(t, e, n) {
                for (; h < n; ) {
                    var i = (void 0,
                    {
                        type: 7 & (r = u.decodeUInt32(p())),
                        tag: r >> 3
                    })
                      , a = i.tag
                      , o = e.__tags[a];
                    switch (e[o].option) {
                    case "optional":
                    case "required":
                        t[o] = s(e[o].type, e);
                        break;
                    case "repeated":
                        t[o] || (t[o] = []),
                        d(t[o], e[o].type, e)
                    }
                }
                var r;
                return t
            }
            function s(t, e) {
                switch (t) {
                case "uInt32":
                    return u.decodeUInt32(p());
                case "int32":
                case "sInt32":
                    return u.decodeSInt32(p());
                case "float":
                    var n = u.decodeFloat(c, h);
                    return h += 4,
                    n;
                case "double":
                    var i = u.decodeDouble(c, h);
                    return h += 8,
                    i;
                case "string":
                    var a = u.decodeUInt32(p())
                      , o = u.decodeStr(c, h, a);
                    return h += a,
                    o;
                default:
                    var r = e && (e.__messages[t] || l.protos["message " + t]);
                    if (r) {
                        a = u.decodeUInt32(p());
                        var s = {};
                        return f(s, r, h + a),
                        s
                    }
                }
            }
            function d(t, e, n) {
                if (o.isSimpleType(e))
                    for (var i = u.decodeUInt32(p()), a = 0; a < i; a++)
                        t.push(s(e));
                else
                    t.push(s(e, n))
            }
            function p(t) {
                var e, n = [], i = h;
                for (t = t || !1; e = c[i],
                n.push(e),
                i++,
                128 <= e; )
                    ;
                return t || (h = i),
                n
            }
            l.init = function(t) {
                this.protos = t || {}
            }
            ,
            l.setProtos = function(t) {
                t && (this.protos = t)
            }
            ,
            l.decode = function(t, e) {
                var n = this.protos[t];
                return c = e,
                h = 0,
                n ? f({}, n, c.length) : null
            }
        }("undefined" != typeof protobuf ? protobuf : e.exports),
        cc._RF.pop()
    }
    , {}],
    protocol: [function(t, i, e) {
        (function(t) {
            "use strict";
            cc._RF.push(i, "36d2eGVqHVJ0IfC8R5KWOTt", "protocol"),
            function(t, p, e) {
                var g = t
                  , n = g.Package = {}
                  , a = g.Message = {};
                n.TYPE_HANDSHAKE = 1,
                n.TYPE_HANDSHAKE_ACK = 2,
                n.TYPE_HEARTBEAT = 3,
                n.TYPE_DATA = 4,
                n.TYPE_KICK = 5,
                a.TYPE_REQUEST = 0,
                a.TYPE_NOTIFY = 1,
                a.TYPE_RESPONSE = 2,
                a.TYPE_PUSH = 3,
                g.strencode = function(t) {
                    for (var e = new p(3 * t.length), n = 0, i = 0; i < t.length; i++) {
                        var a = t.charCodeAt(i)
                          , o = null;
                        o = a <= 127 ? [a] : a <= 2047 ? [192 | a >> 6, 128 | 63 & a] : [224 | a >> 12, 128 | (4032 & a) >> 6, 128 | 63 & a];
                        for (var r = 0; r < o.length; r++)
                            e[n] = o[r],
                            ++n
                    }
                    var s = new p(n);
                    return m(s, 0, e, 0, n),
                    s
                }
                ,
                g.strdecode = function(t, e) {
                    for (var n = new p(t), i = [], a = 0, o = 0, r = n.length; a < r; )
                        n[a] < 128 ? (o = n[a],
                        a += 1) : n[a] < 224 ? (o = ((63 & n[a]) << 6) + (63 & n[a + 1]),
                        a += 2) : (o = ((15 & n[a]) << 12) + ((63 & n[a + 1]) << 6) + (63 & n[a + 2]),
                        a += 3),
                        i.push(o);
                    return String.fromCharCode.apply(null, i)
                }
                ,
                n.encode = function(t, e) {
                    var n = e ? e.length : 0
                      , i = new p(4 + n)
                      , a = 0;
                    return i[a++] = 255 & t,
                    i[a++] = n >> 16 & 255,
                    i[a++] = n >> 8 & 255,
                    i[a++] = 255 & n,
                    e && m(i, 4, e, 0, n),
                    i
                }
                ,
                n.decode = function(t) {
                    for (var e = 0, n = new p(t), i = 0, a = []; e < n.length; ) {
                        var o = n[e++]
                          , r = (i = (n[e++] << 16 | n[e++] << 8 | n[e++]) >>> 0) ? new p(i) : null;
                        m(r, 0, n, e, i),
                        e += i,
                        a.push({
                            type: o,
                            body: r
                        })
                    }
                    return 1 === a.length ? a[0] : a
                }
                ,
                a.encode = function(t, e, n, i, a) {
                    var o = 1 + (A(e) ? c(t) : 0);
                    if (y(e))
                        if (n) {
                            if ("number" != typeof i)
                                throw new Error("error flag for number route!");
                            o += 2
                        } else if (o += 1,
                        i) {
                            if (255 < (i = g.strencode(i)).length)
                                throw new Error("route maxlength is overflow");
                            o += i.length
                        }
                    a && (o += a.length);
                    var r = new p(o)
                      , s = 0;
                    return s = l(e, n, r, s),
                    A(e) && (s = u(t, r, s)),
                    y(e) && (s = h(n, i, r, s)),
                    a && (s = f(a, r, s)),
                    r
                }
                ,
                a.decode = function(t) {
                    var e = new p(t)
                      , n = e.length || e.byteLength
                      , i = 0
                      , a = 0
                      , o = null
                      , r = e[i++]
                      , s = 1 & r
                      , c = r >> 1 & 7;
                    if (A(c)) {
                        var l = parseInt(e[i])
                          , u = 0;
                        do {
                            a += (127 & (l = parseInt(e[i]))) * Math.pow(2, 7 * u),
                            i++,
                            u++
                        } while (128 <= l)
                    }
                    if (y(c))
                        if (s)
                            o = e[i++] << 8 | e[i++];
                        else {
                            var h = e[i++];
                            h ? (o = new p(h),
                            m(o, 0, e, i, h),
                            o = g.strdecode(o)) : o = "",
                            i += h
                        }
                    var f = n - i
                      , d = new p(f);
                    return m(d, 0, e, i, f),
                    {
                        id: a,
                        type: c,
                        compressRoute: s,
                        route: o,
                        body: d
                    }
                }
                ;
                var m = function(t, e, n, i, a) {
                    if ("function" == typeof n.copy)
                        n.copy(t, e, i, i + a);
                    else
                        for (var o = 0; o < a; o++)
                            t[e++] = n[i++]
                }
                  , A = function(t) {
                    return t === a.TYPE_REQUEST || t === a.TYPE_RESPONSE
                }
                  , y = function(t) {
                    return t === a.TYPE_REQUEST || t === a.TYPE_NOTIFY || t === a.TYPE_PUSH
                }
                  , c = function(t) {
                    for (var e = 0; e += 1,
                    0 < (t >>= 7); )
                        ;
                    return e
                }
                  , l = function(t, e, n, i) {
                    if (t !== a.TYPE_REQUEST && t !== a.TYPE_NOTIFY && t !== a.TYPE_RESPONSE && t !== a.TYPE_PUSH)
                        throw new Error("unkonw message type: " + t);
                    return n[i] = t << 1 | (e ? 1 : 0),
                    i + 1
                }
                  , u = function(t, e, n) {
                    do {
                        var i = t % 128
                          , a = Math.floor(t / 128);
                        0 !== a && (i += 128),
                        e[n++] = i,
                        t = a
                    } while (0 !== t);return n
                }
                  , h = function(t, e, n, i) {
                    if (t) {
                        if (65535 < e)
                            throw new Error("route number is overflow");
                        n[i++] = e >> 8 & 255,
                        n[i++] = 255 & e
                    } else
                        e ? (n[i++] = 255 & e.length,
                        m(n, i, e, 0, e.length),
                        i += e.length) : n[i++] = 0;
                    return i
                }
                  , f = function(t, e, n) {
                    return m(e, n, t, 0, t.length),
                    n + t.length
                };
                i.exports = g,
                "undefined" != typeof window && (window.Protocol = g)
            }("undefined" == typeof window ? i.exports : {}, "undefined" == typeof window ? t : Uint8Array),
            cc._RF.pop()
        }
        ).call(this, t("buffer").Buffer)
    }
    , {
        buffer: 2
    }],
    "rank-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6786eAF0QJLiK3ye/PrgjeS", "rank-dialog");
        var i = t("instant-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                rank_layout: {
                    default: null,
                    type: cc.Node
                },
                rank_item: {
                    default: null,
                    type: cc.Prefab
                },
                self_rank_node: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                i.getFriends(function(t) {
                    server_util.getFrinedsLeaderboard(t, function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            n.index = e + 1,
                            t[e] = n,
                            i.getPlayerID() == n.id && this.initSelfRank(n)
                        }
                        this.initRankList(t)
                    }
                    .bind(this))
                }
                .bind(this))
            },
            initRankList: function(t) {
                this.rank_layout.getComponent("list-adapter").initListView(this.rank_item, "rank-item", t)
            },
            initSelfRank: function(t) {
                this.self_rank_node.getComponent("rank-item").setData(t)
            },
            closeDialog: function() {
                this.node.removeFromParent(!1)
            }
        }),
        cc._RF.pop()
    }
    , {
        "instant-util": "instant-util"
    }],
    "rank-item": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "581a2E8z0lIIYdjuOaa8E8R", "rank-item");
        var i = t("webimg-util")
          , a = t("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                index_label: {
                    default: null,
                    type: cc.RichText
                },
                name_label: {
                    default: null,
                    type: cc.Label
                },
                img_head: {
                    default: null,
                    type: cc.Sprite
                },
                score_label: {
                    default: null,
                    type: cc.Label
                },
                item_bg: {
                    default: null,
                    type: cc.Node
                }
            },
            setData: function(t) {
                var e = t.index;
                cc.log("rank===" + e),
                this.item_bg && (this.item_bg.opacity = e % 2 == 0 ? 0 : 150),
                this.setIndexLabel(e),
                this.score_label.string = a.unit_format(t.score ? t.score : 0),
                this.name_label.string = t.name,
                t.photo && i.load_webimg(t.photo, this.img_head)
            },
            setIndexLabel: function(t) {
                var e = "#FFFFFF";
                1 == t ? e = "#E68C51" : 2 == t ? e = "#EBC259" : 3 == t && (e = "#EEB951"),
                this.index_label.string = "<color=" + e + "><i>" + t + "</i></color>"
            }
        }),
        cc._RF.pop()
    }
    , {
        "number-util": "number-util",
        "webimg-util": "webimg-util"
    }],
    "server-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "43fa8fF6rBLtqOmmYR8HuJk", "server-util");
        var c = t("http-client")
          , i = t("instant-util");
        t("analytics-data");
        t("globalManager"),
        function() {
            if (window.server_util)
                e.exports = window.server_util;
            else {
                var o = o || {}
                  , t = /^192\..*|localhost/.exec(location.hostname)
                  , r = globalManager.appId;
                console.log("host=" + location.hostname + " isLocal=" + t + " isRelease=" + !0 + " appId=" + r),
                o.serverIp = "https://fbgame.ymnsdk.com/",
                o.serverPort = 5014;
                var s;
                o.login = function(t, e, n, i) {
                    s = e,
                    globalManager.fbPlayerId = e;
                    var a = {
                        user_id: s,
                        nickname: t,
                        app_id: r,
                        avatar: n
                    };
                    c.httpPostRequest(o.serverIp + "user/login", a, function(e) {
                        i && i(),
                        null != e.force_data && (null != e.force_data.resetData ? window.setTimeout(function(t) {
                            console.log("pomelo.on(resetData)"),
                            cc.director.emit("resetData")
                        }, 100) : window.setTimeout(function(t) {
                            console.log("pomelo.on(forceUpdateData) data = ", e.force_data),
                            cc.director.emit("forceUpdateData", e.force_data)
                        }, 100))
                    }, function() {}),
                    c.httpPostRequest(o.serverIp + "game/list", a, function(t) {
                        null != t.list && (globalManager.gamelist = t.list)
                    }, function() {})
                }
                ,
                o.relogin = function(t, e) {}
                ,
                o.queryEntry = function(t, e) {}
                ,
                o.setGameData = function(t, e, n) {}
                ,
                o.getGameData = function(t, e) {}
                ,
                o.getGameList = function(t, e) {
                    c.httpPostRequest(o.serverIp + "game/list", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        type: t
                    }, function(t) {
                        e && e(t)
                    }, function() {})
                }
                ,
                o.setLeaderboardScore = function(t, e) {
                    var n = {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        point: t,
                        user_level: playerManager.getNumData("UnlockLevel")
                    };
                    c.httpPostRequest(o.serverIp + "user/setInfo", n, function(t) {
                        e && e()
                    }, function() {})
                }
                ,
                o.getLeaderboard = function(t, e, n) {}
                ,
                o.getFrinedsLeaderboard = function(t, n) {
                    for (var e = [], i = t.length - 1; 0 <= i; i--)
                        e.push(t[i].id);
                    var a = {
                        friends: e,
                        app_id: r,
                        type: "point"
                    };
                    c.httpPostRequest(o.serverIp + "rank/friend", a, function(t) {
                        for (var e = 0; e < t.length; e++)
                            t[e].score = t[e].point,
                            t[e].id = t[e].user_id,
                            t[e].name = t[e].nickname,
                            t[e].photo = t[e].avatar;
                        t.sort(function(t, e) {
                            return e.score - t.score
                        }),
                        n && n(t)
                    }, function() {})
                }
                ,
                o.getDataConfig = function(t, e) {}
                ,
                o.saveInviter = function(t, e) {
                    c.httpPostRequest(o.serverIp + "activity/invite", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        invite_id: t
                    }, function(t) {
                        e && e(t)
                    }, function() {})
                }
                ,
                o.getActivityList = function(e, n) {
                    c.httpPostRequest(o.serverIp + "activity/list", {
                        user_id: i.getPlayerID(),
                        app_id: r
                    }, function(t) {
                        e && e(t)
                    }, function(t) {
                        n && n(t)
                    })
                }
                ,
                o.receiveTask = function(t, e) {
                    c.httpPostRequest(o.serverIp + "activity/receive", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        task_id: t
                    }, function(t) {
                        e && e(t)
                    }, function() {})
                }
                ,
                window.server_util = o,
                e.exports = o
            }
        }(),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        globalManager: "globalManager",
        "http-client": "http-client",
        "instant-util": "instant-util"
    }],
    "task-node": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9dc7aBiCp1OWabl6/dmTrQl", "task-node");
        var i = t("instant-util")
          , a = t("number-util")
          , o = t("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                head_img: {
                    default: null,
                    type: cc.Sprite
                },
                title_label: {
                    default: null,
                    type: cc.Label
                },
                coins_label: {
                    default: null,
                    type: cc.Label
                },
                claim_btn: {
                    default: null,
                    type: cc.Toggle
                },
                head_icons: {
                    default: [],
                    type: cc.SpriteFrame
                },
                add_percent_label: {
                    default: null,
                    type: cc.Label
                },
                _data: null,
                _callback: null,
                _addPercent: 0
            },
            setData: function(t, e) {
                this._data = t,
                this._callback = e;
                var n = "";
                cc.log("data.type=" + t.type),
                0 == t.type ? (n = "Free",
                this.add_percent_label.node.active = !1) : (n = "Invited No." + t.type + " Friend",
                this.add_percent_label.node.active = !0,
                this._addPercent = t.type <= 10 ? .1 * t.type : 1 + .01 * (t.type - 10),
                this.add_percent_label.string = "+" + parseInt(100 * this._addPercent) + "%");
                var i = 0;
                i = t.canClaim ? 0 == t.type ? 0 : 1 : 2,
                this.head_img.spriteFrame = this.head_icons[i],
                this.title_label.string = n,
                this.coins_label.string = a.unit_format(t.price),
                this.claim_btn.isChecked = t.canClaim,
                this.claim_btn.interactable = t.canClaim
            },
            claimClick: function() {
                for (var t = playerManager.getObjData("inviteRewards"), e = 0; e < t.length; e++)
                    if (e == this._data.type) {
                        t[e] = 1;
                        break
                    }
                cc.log("inviteRewards2222=" + JSON.stringify(t)),
                playerManager.setObjData("inviteRewards", t),
                0 == this._data.type ? playerManager.setObjData("freeReward", !0) : 0 < this._data.type && server_util.receiveTask(this._data.taskId);
                var n = parseInt(this._data.price * (1 + this._addPercent));
                cc.log("price=" + n),
                playerManager.addNumData("Coin", n),
                cc.director.emit("updateCoin"),
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + a.unit_format(n) + " coins"),
                this._callback(this._data)
            },
            inviteFriendClick: function() {
                o.invite_friends_event();
                var t = {
                    type: "share",
                    inviter: i.getPlayerID()
                };
                i.chooseContext(function() {
                    cc.log("share finish"),
                    o.invite_friends_success_event(),
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Sent! Wait your friends enter game!")
                }, function(t) {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(t)
                }, t)
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    toast: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "98f21AcsM1Ld4kwc5z85hWu", "toast"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg_layout: {
                    default: null,
                    type: cc.Node
                },
                bottom_label: {
                    default: null,
                    type: cc.Label
                },
                text_label: {
                    default: null,
                    type: cc.Label
                }
            },
            onLoad: function() {},
            start: function() {},
            setData: function(t) {
                cc.log("text=" + t),
                this.text_label.string = t,
                this.bottom_label.string = t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    tutorialDlg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1e97akuhZJOmonMRGwMkCt9", "tutorialDlg"),
        cc.Class({
            extends: cc.Component,
            properties: {
                btnBack: cc.Button
            },
            onLoad: function() {
                playerManager.setObjData("lookTutorial", !1)
            },
            update: function(t) {},
            onButtonBack: function(t, e) {
                this.node.removeFromParent(!0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "unlock-dialog": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "393deBWRoJCpYPcOeHBxelE", "unlock-dialog");
        var i = t("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                fish_img: {
                    default: null,
                    type: cc.Sprite
                },
                _unlockFish: null
            },
            onLoad: function() {
                server_util.setLeaderboardScore(playerManager.getScore())
            },
            setData: function(t) {
                this._unlockFish = t;
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.fish_img.spriteFrame = e.getItemFrame(t)
            },
            shareClick: function() {
                i.unlock_fish_share_event();
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene")
                  , e = this;
                t.showCustomShare(this._unlockFish, function() {
                    e.closeDialog()
                }, function() {
                    e.closeDialog()
                })
            },
            closeDialog: function() {
                this.node.removeFromParent(!1)
            }
        }),
        cc._RF.pop()
    }
    , {
        "analytics-data": "analytics-data"
    }],
    "webimg-util": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "90d75n5RilPx5Q+ok7JHIby", "webimg-util"),
        e.exports = {
            load_webimg: function(t, n) {
                cc.loader.load({
                    url: t,
                    type: "png"
                }, function(t, e) {
                    return t ? (cc.log("load head img err: " + JSON.stringify(t)),
                    t) : (n.spriteFrame = new cc.SpriteFrame(e),
                    n.type = cc.Sprite.Type.SIMPLE,
                    n.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                    0)
                })
            },
            getImgBase64: function() {
                var t = cc.find("Canvas/screenshot").getComponent(cc.Sprite)
                  , e = new cc.RenderTexture(960,640);
                e.begin(),
                t._sgNode.visit(),
                e.end();
                var n = document.createElement("canvas")
                  , i = n.getContext("2d");
                if (n.width = 960,
                n.height = 640,
                cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                    var a = e.getSprite().getTexture().getHtmlElementObj();
                    i.drawImage(a, 0, 0)
                } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                    var o = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, o);
                    var r = e.getSprite().getTexture()._glID;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, r, 0);
                    var s = new Uint8Array(2457600);
                    gl.readPixels(0, 0, 960, 640, gl.RGBA, gl.UNSIGNED_BYTE, s),
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    for (var c = 0; c < 640; c++) {
                        var l = 639 - c
                          , u = new Uint8ClampedArray(s.buffer,960 * l * 4,3840)
                          , h = new ImageData(u,960,1);
                        i.putImageData(h, 0, c)
                    }
                }
                return n.toDataURL("image/png")
            }
        },
        cc._RF.pop()
    }
    , {}]
}, {}, ["GameItemNode", "GameItemNodeCache", "GameItemPaodao", "GamePaodao", "GameScene", "Tutorial1", "Tutorial2", "Tutorial3", "Tutorial4", "Tutorial5", "Tutorial6", "addcoin", "arrowIcon", "bonustime_dlg", "audioManager", "fish-cfg", "globalManager", "playerManager", "daily-bonus-dialog", "effectDoubleCoin", "effectGetCoin", "fishlist-dialog", "getoffcoin_dlg", "invite-friends-dialog", "count-down-node", "daily-node", "fish-item", "gift-node", "moregame-item", "rank-item", "task-node", "loading", "login-world", "moregame-dialog", "no-coin-dialog", "PaymentInterface", "PaymentWrapper", "PlatformSdk", "UserInterface", "UserWrapper", "AndroidPaymentExecutor", "AndroidPlatformExecutor", "AndroidUserExecutor", "BrowserPaymentExecutor", "BrowserPlatformExecutor", "BrowserUserExecutor", "IosPaymentExecutor", "IosPlatformExecutor", "IosUserExecutor", "WindowsPaymentExecutor", "WindowsPlatformExecutor", "WindowsUserExecutor", "OsUtil", "rank-dialog", "customShare", "analytics-data", "fbinstant-util", "http-client", "instant-util", "list-adapter", "md5", "native-util", "notification", "number-util", "server-util", "toast", "webimg-util", "tutorialDlg", "unlock-dialog", "emitter", "pomelo-client", "protobuf", "protocol"]);
