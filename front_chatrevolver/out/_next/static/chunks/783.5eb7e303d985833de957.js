(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [783],
  {
    5391: function (e, t, r) {
      parcelRequire = (function (t, n, i, o) {
        var a,
          s = "function" == typeof parcelRequire && parcelRequire;
        function c(e, i) {
          if (!n[e]) {
            if (!t[e]) {
              var o = "function" == typeof parcelRequire && parcelRequire;
              if (!i && o) return o(e, !0);
              if (s) return s(e, !0);
              if ("string" == typeof e) return r(5784)(e);
              var a = new Error("Cannot find module '" + e + "'");
              throw ((a.code = "MODULE_NOT_FOUND"), a);
            }
            (u.resolve = function (r) {
              return t[e][1][r] || r;
            }),
              (u.cache = {});
            var p = (n[e] = new c.Module(e));
            t[e][0].call(p.exports, u, p, p.exports, this);
          }
          return n[e].exports;
          function u(e) {
            return c(u.resolve(e));
          }
        }
        (c.isParcelRequire = !0),
          (c.Module = function (e) {
            (this.id = e), (this.bundle = c), (this.exports = {});
          }),
          (c.modules = t),
          (c.cache = n),
          (c.parent = s),
          (c.register = function (e, r) {
            t[e] = [
              function (e, t) {
                t.exports = r;
              },
              {},
            ];
          });
        for (var p = 0; p < i.length; p++)
          try {
            c(i[p]);
          } catch (t) {
            a || (a = t);
          }
        if (i.length) {
          var u = c(i[i.length - 1]);
          e.exports = u;
        }
        if (((parcelRequire = c), a)) throw a;
        return c;
      })(
        {
          EgBh: [
            function (e, t, r) {
              var n = {};
              (n.useBlobBuilder = (function () {
                try {
                  return new Blob([]), !1;
                } catch (n) {
                  return !0;
                }
              })()),
                (n.useArrayBufferView =
                  !n.useBlobBuilder &&
                  (function () {
                    try {
                      return 0 === new Blob([new Uint8Array([])]).size;
                    } catch (n) {
                      return !0;
                    }
                  })()),
                (t.exports.binaryFeatures = n);
              var i = t.exports.BlobBuilder;
              function o() {
                (this._pieces = []), (this._parts = []);
              }
              "undefined" != typeof window &&
                (i = t.exports.BlobBuilder =
                  window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder),
                (o.prototype.append = function (e) {
                  "number" == typeof e ? this._pieces.push(e) : (this.flush(), this._parts.push(e));
                }),
                (o.prototype.flush = function () {
                  if (this._pieces.length > 0) {
                    var e = new Uint8Array(this._pieces);
                    n.useArrayBufferView || (e = e.buffer), this._parts.push(e), (this._pieces = []);
                  }
                }),
                (o.prototype.getBuffer = function () {
                  if ((this.flush(), n.useBlobBuilder)) {
                    for (var e = new i(), t = 0, r = this._parts.length; t < r; t++) e.append(this._parts[t]);
                    return e.getBlob();
                  }
                  return new Blob(this._parts);
                }),
                (t.exports.BufferBuilder = o);
            },
            {},
          ],
          kdPp: [
            function (e, t, r) {
              var n = e("./bufferbuilder").BufferBuilder,
                i = e("./bufferbuilder").binaryFeatures,
                o = {
                  unpack: function (e) {
                    return new a(e).unpack();
                  },
                  pack: function (e) {
                    var t = new s();
                    return t.pack(e), t.getBuffer();
                  },
                };
              function a(e) {
                (this.index = 0),
                  (this.dataBuffer = e),
                  (this.dataView = new Uint8Array(this.dataBuffer)),
                  (this.length = this.dataBuffer.byteLength);
              }
              function s() {
                this.bufferBuilder = new n();
              }
              function c(e) {
                var t = e.charCodeAt(0);
                return t <= 2047
                  ? "00"
                  : t <= 65535
                  ? "000"
                  : t <= 2097151
                  ? "0000"
                  : t <= 67108863
                  ? "00000"
                  : "000000";
              }
              (t.exports = o),
                (a.prototype.unpack = function () {
                  var e,
                    t = this.unpack_uint8();
                  if (t < 128) return t;
                  if ((224 ^ t) < 32) return (224 ^ t) - 32;
                  if ((e = 160 ^ t) <= 15) return this.unpack_raw(e);
                  if ((e = 176 ^ t) <= 15) return this.unpack_string(e);
                  if ((e = 144 ^ t) <= 15) return this.unpack_array(e);
                  if ((e = 128 ^ t) <= 15) return this.unpack_map(e);
                  switch (t) {
                    case 192:
                      return null;
                    case 193:
                      return;
                    case 194:
                      return !1;
                    case 195:
                      return !0;
                    case 202:
                      return this.unpack_float();
                    case 203:
                      return this.unpack_double();
                    case 204:
                      return this.unpack_uint8();
                    case 205:
                      return this.unpack_uint16();
                    case 206:
                      return this.unpack_uint32();
                    case 207:
                      return this.unpack_uint64();
                    case 208:
                      return this.unpack_int8();
                    case 209:
                      return this.unpack_int16();
                    case 210:
                      return this.unpack_int32();
                    case 211:
                      return this.unpack_int64();
                    case 212:
                    case 213:
                    case 214:
                    case 215:
                      return;
                    case 216:
                      return (e = this.unpack_uint16()), this.unpack_string(e);
                    case 217:
                      return (e = this.unpack_uint32()), this.unpack_string(e);
                    case 218:
                      return (e = this.unpack_uint16()), this.unpack_raw(e);
                    case 219:
                      return (e = this.unpack_uint32()), this.unpack_raw(e);
                    case 220:
                      return (e = this.unpack_uint16()), this.unpack_array(e);
                    case 221:
                      return (e = this.unpack_uint32()), this.unpack_array(e);
                    case 222:
                      return (e = this.unpack_uint16()), this.unpack_map(e);
                    case 223:
                      return (e = this.unpack_uint32()), this.unpack_map(e);
                  }
                }),
                (a.prototype.unpack_uint8 = function () {
                  var e = 255 & this.dataView[this.index];
                  return this.index++, e;
                }),
                (a.prototype.unpack_uint16 = function () {
                  var e = this.read(2),
                    t = 256 * (255 & e[0]) + (255 & e[1]);
                  return (this.index += 2), t;
                }),
                (a.prototype.unpack_uint32 = function () {
                  var e = this.read(4),
                    t = 256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3];
                  return (this.index += 4), t;
                }),
                (a.prototype.unpack_uint64 = function () {
                  var e = this.read(8),
                    t =
                      256 *
                        (256 * (256 * (256 * (256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3]) + e[4]) + e[5]) + e[6]) +
                      e[7];
                  return (this.index += 8), t;
                }),
                (a.prototype.unpack_int8 = function () {
                  var e = this.unpack_uint8();
                  return e < 128 ? e : e - 256;
                }),
                (a.prototype.unpack_int16 = function () {
                  var e = this.unpack_uint16();
                  return e < 32768 ? e : e - 65536;
                }),
                (a.prototype.unpack_int32 = function () {
                  var e = this.unpack_uint32();
                  return e < Math.pow(2, 31) ? e : e - Math.pow(2, 32);
                }),
                (a.prototype.unpack_int64 = function () {
                  var e = this.unpack_uint64();
                  return e < Math.pow(2, 63) ? e : e - Math.pow(2, 64);
                }),
                (a.prototype.unpack_raw = function (e) {
                  if (this.length < this.index + e)
                    throw new Error(
                      "BinaryPackFailure: index is out of range " + this.index + " " + e + " " + this.length
                    );
                  var t = this.dataBuffer.slice(this.index, this.index + e);
                  return (this.index += e), t;
                }),
                (a.prototype.unpack_string = function (e) {
                  for (var t, r, n = this.read(e), i = 0, o = ""; i < e; )
                    (t = n[i]) < 128
                      ? ((o += String.fromCharCode(t)), i++)
                      : (192 ^ t) < 32
                      ? ((r = ((192 ^ t) << 6) | (63 & n[i + 1])), (o += String.fromCharCode(r)), (i += 2))
                      : ((r = ((15 & t) << 12) | ((63 & n[i + 1]) << 6) | (63 & n[i + 2])),
                        (o += String.fromCharCode(r)),
                        (i += 3));
                  return (this.index += e), o;
                }),
                (a.prototype.unpack_array = function (e) {
                  for (var t = new Array(e), r = 0; r < e; r++) t[r] = this.unpack();
                  return t;
                }),
                (a.prototype.unpack_map = function (e) {
                  for (var t = {}, r = 0; r < e; r++) {
                    var n = this.unpack(),
                      i = this.unpack();
                    t[n] = i;
                  }
                  return t;
                }),
                (a.prototype.unpack_float = function () {
                  var e = this.unpack_uint32(),
                    t = ((e >> 23) & 255) - 127;
                  return (0 === e >> 31 ? 1 : -1) * ((8388607 & e) | 8388608) * Math.pow(2, t - 23);
                }),
                (a.prototype.unpack_double = function () {
                  var e = this.unpack_uint32(),
                    t = this.unpack_uint32(),
                    r = ((e >> 20) & 2047) - 1023;
                  return (
                    (0 === e >> 31 ? 1 : -1) *
                    (((1048575 & e) | 1048576) * Math.pow(2, r - 20) + t * Math.pow(2, r - 52))
                  );
                }),
                (a.prototype.read = function (e) {
                  var t = this.index;
                  if (t + e <= this.length) return this.dataView.subarray(t, t + e);
                  throw new Error("BinaryPackFailure: read index out of range");
                }),
                (s.prototype.getBuffer = function () {
                  return this.bufferBuilder.getBuffer();
                }),
                (s.prototype.pack = function (e) {
                  var t = typeof e;
                  if ("string" === t) this.pack_string(e);
                  else if ("number" === t) Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
                  else if ("boolean" === t)
                    !0 === e ? this.bufferBuilder.append(195) : !1 === e && this.bufferBuilder.append(194);
                  else if ("undefined" === t) this.bufferBuilder.append(192);
                  else {
                    if ("object" !== t) throw new Error('Type "' + t + '" not yet supported');
                    if (null === e) this.bufferBuilder.append(192);
                    else {
                      var r = e.constructor;
                      if (r == Array) this.pack_array(e);
                      else if (r == Blob || r == File || e instanceof Blob || e instanceof File) this.pack_bin(e);
                      else if (r == ArrayBuffer)
                        i.useArrayBufferView ? this.pack_bin(new Uint8Array(e)) : this.pack_bin(e);
                      else if ("BYTES_PER_ELEMENT" in e)
                        i.useArrayBufferView ? this.pack_bin(new Uint8Array(e.buffer)) : this.pack_bin(e.buffer);
                      else if (r == Object || r.toString().startsWith("class")) this.pack_object(e);
                      else if (r == Date) this.pack_string(e.toString());
                      else {
                        if ("function" != typeof e.toBinaryPack)
                          throw new Error('Type "' + r.toString() + '" not yet supported');
                        this.bufferBuilder.append(e.toBinaryPack());
                      }
                    }
                  }
                  this.bufferBuilder.flush();
                }),
                (s.prototype.pack_bin = function (e) {
                  var t = e.length || e.byteLength || e.size;
                  if (t <= 15) this.pack_uint8(160 + t);
                  else if (t <= 65535) this.bufferBuilder.append(218), this.pack_uint16(t);
                  else {
                    if (!(t <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(219), this.pack_uint32(t);
                  }
                  this.bufferBuilder.append(e);
                }),
                (s.prototype.pack_string = function (e) {
                  var t = (function (e) {
                    return e.length > 600 ? new Blob([e]).size : e.replace(/[^\u0000-\u007F]/g, c).length;
                  })(e);
                  if (t <= 15) this.pack_uint8(176 + t);
                  else if (t <= 65535) this.bufferBuilder.append(216), this.pack_uint16(t);
                  else {
                    if (!(t <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(217), this.pack_uint32(t);
                  }
                  this.bufferBuilder.append(e);
                }),
                (s.prototype.pack_array = function (e) {
                  var t = e.length;
                  if (t <= 15) this.pack_uint8(144 + t);
                  else if (t <= 65535) this.bufferBuilder.append(220), this.pack_uint16(t);
                  else {
                    if (!(t <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(221), this.pack_uint32(t);
                  }
                  for (var r = 0; r < t; r++) this.pack(e[r]);
                }),
                (s.prototype.pack_integer = function (e) {
                  if (e >= -32 && e <= 127) this.bufferBuilder.append(255 & e);
                  else if (e >= 0 && e <= 255) this.bufferBuilder.append(204), this.pack_uint8(e);
                  else if (e >= -128 && e <= 127) this.bufferBuilder.append(208), this.pack_int8(e);
                  else if (e >= 0 && e <= 65535) this.bufferBuilder.append(205), this.pack_uint16(e);
                  else if (e >= -32768 && e <= 32767) this.bufferBuilder.append(209), this.pack_int16(e);
                  else if (e >= 0 && e <= 4294967295) this.bufferBuilder.append(206), this.pack_uint32(e);
                  else if (e >= -2147483648 && e <= 2147483647) this.bufferBuilder.append(210), this.pack_int32(e);
                  else if (e >= -0x8000000000000000 && e <= 0x8000000000000000)
                    this.bufferBuilder.append(211), this.pack_int64(e);
                  else {
                    if (!(e >= 0 && e <= 0x10000000000000000)) throw new Error("Invalid integer");
                    this.bufferBuilder.append(207), this.pack_uint64(e);
                  }
                }),
                (s.prototype.pack_double = function (e) {
                  var t = 0;
                  e < 0 && ((t = 1), (e = -e));
                  var r = Math.floor(Math.log(e) / Math.LN2),
                    n = e / Math.pow(2, r) - 1,
                    i = Math.floor(n * Math.pow(2, 52)),
                    o = Math.pow(2, 32),
                    a = (t << 31) | ((r + 1023) << 20) | ((i / o) & 1048575),
                    s = i % o;
                  this.bufferBuilder.append(203), this.pack_int32(a), this.pack_int32(s);
                }),
                (s.prototype.pack_object = function (e) {
                  var t = Object.keys(e).length;
                  if (t <= 15) this.pack_uint8(128 + t);
                  else if (t <= 65535) this.bufferBuilder.append(222), this.pack_uint16(t);
                  else {
                    if (!(t <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(223), this.pack_uint32(t);
                  }
                  for (var r in e) e.hasOwnProperty(r) && (this.pack(r), this.pack(e[r]));
                }),
                (s.prototype.pack_uint8 = function (e) {
                  this.bufferBuilder.append(e);
                }),
                (s.prototype.pack_uint16 = function (e) {
                  this.bufferBuilder.append(e >> 8), this.bufferBuilder.append(255 & e);
                }),
                (s.prototype.pack_uint32 = function (e) {
                  var t = 4294967295 & e;
                  this.bufferBuilder.append((4278190080 & t) >>> 24),
                    this.bufferBuilder.append((16711680 & t) >>> 16),
                    this.bufferBuilder.append((65280 & t) >>> 8),
                    this.bufferBuilder.append(255 & t);
                }),
                (s.prototype.pack_uint64 = function (e) {
                  var t = e / Math.pow(2, 32),
                    r = e % Math.pow(2, 32);
                  this.bufferBuilder.append((4278190080 & t) >>> 24),
                    this.bufferBuilder.append((16711680 & t) >>> 16),
                    this.bufferBuilder.append((65280 & t) >>> 8),
                    this.bufferBuilder.append(255 & t),
                    this.bufferBuilder.append((4278190080 & r) >>> 24),
                    this.bufferBuilder.append((16711680 & r) >>> 16),
                    this.bufferBuilder.append((65280 & r) >>> 8),
                    this.bufferBuilder.append(255 & r);
                }),
                (s.prototype.pack_int8 = function (e) {
                  this.bufferBuilder.append(255 & e);
                }),
                (s.prototype.pack_int16 = function (e) {
                  this.bufferBuilder.append((65280 & e) >> 8), this.bufferBuilder.append(255 & e);
                }),
                (s.prototype.pack_int32 = function (e) {
                  this.bufferBuilder.append((e >>> 24) & 255),
                    this.bufferBuilder.append((16711680 & e) >>> 16),
                    this.bufferBuilder.append((65280 & e) >>> 8),
                    this.bufferBuilder.append(255 & e);
                }),
                (s.prototype.pack_int64 = function (e) {
                  var t = Math.floor(e / Math.pow(2, 32)),
                    r = e % Math.pow(2, 32);
                  this.bufferBuilder.append((4278190080 & t) >>> 24),
                    this.bufferBuilder.append((16711680 & t) >>> 16),
                    this.bufferBuilder.append((65280 & t) >>> 8),
                    this.bufferBuilder.append(255 & t),
                    this.bufferBuilder.append((4278190080 & r) >>> 24),
                    this.bufferBuilder.append((16711680 & r) >>> 16),
                    this.bufferBuilder.append((65280 & r) >>> 8),
                    this.bufferBuilder.append(255 & r);
                });
            },
            { "./bufferbuilder": "EgBh" },
          ],
          iSxC: [
            function (e, t, r) {
              "use strict";
              function n(e) {
                return (n =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.extractVersion = a),
                (r.wrapPeerConnectionEvent = function (e, t, r) {
                  if (e.RTCPeerConnection) {
                    var n = e.RTCPeerConnection.prototype,
                      i = n.addEventListener;
                    n.addEventListener = function (e, n) {
                      if (e !== t) return i.apply(this, arguments);
                      var o = function (e) {
                        var t = r(e);
                        t && (n.handleEvent ? n.handleEvent(t) : n(t));
                      };
                      return (
                        (this._eventMap = this._eventMap || {}),
                        this._eventMap[t] || (this._eventMap[t] = new Map()),
                        this._eventMap[t].set(n, o),
                        i.apply(this, [e, o])
                      );
                    };
                    var o = n.removeEventListener;
                    (n.removeEventListener = function (e, r) {
                      if (e !== t || !this._eventMap || !this._eventMap[t]) return o.apply(this, arguments);
                      if (!this._eventMap[t].has(r)) return o.apply(this, arguments);
                      var n = this._eventMap[t].get(r);
                      return (
                        this._eventMap[t].delete(r),
                        0 === this._eventMap[t].size && delete this._eventMap[t],
                        0 === Object.keys(this._eventMap).length && delete this._eventMap,
                        o.apply(this, [e, n])
                      );
                    }),
                      Object.defineProperty(n, "on" + t, {
                        get: function () {
                          return this["_on" + t];
                        },
                        set: function (e) {
                          this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]),
                            e && this.addEventListener(t, (this["_on" + t] = e));
                        },
                        enumerable: !0,
                        configurable: !0,
                      });
                  }
                }),
                (r.disableLog = function (e) {
                  return "boolean" != typeof e
                    ? new Error("Argument type: " + n(e) + ". Please use a boolean.")
                    : ((i = e), e ? "adapter.js logging disabled" : "adapter.js logging enabled");
                }),
                (r.disableWarnings = function (e) {
                  return "boolean" != typeof e
                    ? new Error("Argument type: " + n(e) + ". Please use a boolean.")
                    : ((o = !e), "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
                }),
                (r.log = function () {
                  if ("object" === ("undefined" == typeof window ? "undefined" : n(window))) {
                    if (i) return;
                    "undefined" != typeof console &&
                      "function" == typeof console.log &&
                      console.log.apply(console, arguments);
                  }
                }),
                (r.deprecated = function (e, t) {
                  o && console.warn(e + " is deprecated, please use " + t + " instead.");
                }),
                (r.detectBrowser = function (e) {
                  var t = { browser: null, version: null };
                  if (void 0 === e || !e.navigator) return (t.browser = "Not a browser."), t;
                  var { navigator: r } = e;
                  if (r.mozGetUserMedia) (t.browser = "firefox"), (t.version = a(r.userAgent, /Firefox\/(\d+)\./, 1));
                  else if (
                    r.webkitGetUserMedia ||
                    (!1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer)
                  )
                    (t.browser = "chrome"), (t.version = a(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
                  else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/))
                    (t.browser = "edge"), (t.version = a(r.userAgent, /Edge\/(\d+).(\d+)$/, 2));
                  else {
                    if (!e.RTCPeerConnection || !r.userAgent.match(/AppleWebKit\/(\d+)\./))
                      return (t.browser = "Not a supported browser."), t;
                    (t.browser = "safari"),
                      (t.version = a(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
                      (t.supportsUnifiedPlan =
                        e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype);
                  }
                  return t;
                }),
                (r.compactObject = function e(t) {
                  return s(t)
                    ? Object.keys(t).reduce(function (r, n) {
                        var i = s(t[n]),
                          o = i ? e(t[n]) : t[n],
                          a = i && !Object.keys(o).length;
                        return void 0 === o || a
                          ? r
                          : Object.assign(
                              r,
                              (function (e, t, r) {
                                return (
                                  t in e
                                    ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (e[t] = r),
                                  e
                                );
                              })({}, n, o)
                            );
                      }, {})
                    : t;
                }),
                (r.walkStats = c),
                (r.filterStats = function (e, t, r) {
                  var n = r ? "outbound-rtp" : "inbound-rtp",
                    i = new Map();
                  if (null === t) return i;
                  var o = [];
                  return (
                    e.forEach(function (e) {
                      "track" === e.type && e.trackIdentifier === t.id && o.push(e);
                    }),
                    o.forEach(function (t) {
                      e.forEach(function (r) {
                        r.type === n && r.trackId === t.id && c(e, r, i);
                      });
                    }),
                    i
                  );
                });
              var i = !0,
                o = !0;
              function a(e, t, r) {
                var n = e.match(t);
                return n && n.length >= r && parseInt(n[r], 10);
              }
              function s(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
              }
              function c(e, t, r) {
                t &&
                  !r.has(t.id) &&
                  (r.set(t.id, t),
                  Object.keys(t).forEach(function (n) {
                    n.endsWith("Id")
                      ? c(e, e.get(t[n]), r)
                      : n.endsWith("Ids") &&
                        t[n].forEach(function (t) {
                          c(e, e.get(t), r);
                        });
                  }));
              }
            },
            {},
          ],
          s6SN: [
            function (e, t, r) {
              "use strict";
              function n() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (n = function () {
                    return e;
                  }),
                  e
                );
              }
              function i(e) {
                return (i =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetUserMedia = function (e, t) {
                  var r = e && e.navigator;
                  if (r.mediaDevices) {
                    var n = function (e) {
                        if ("object" !== i(e) || e.mandatory || e.optional) return e;
                        var t = {};
                        return (
                          Object.keys(e).forEach(function (r) {
                            if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                              var n = "object" === i(e[r]) ? e[r] : { ideal: e[r] };
                              void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                              var o = function (e, t) {
                                return e
                                  ? e + t.charAt(0).toUpperCase() + t.slice(1)
                                  : "deviceId" === t
                                  ? "sourceId"
                                  : t;
                              };
                              if (void 0 !== n.ideal) {
                                t.optional = t.optional || [];
                                var a = {};
                                "number" == typeof n.ideal
                                  ? ((a[o("min", r)] = n.ideal),
                                    t.optional.push(a),
                                    ((a = {})[o("max", r)] = n.ideal),
                                    t.optional.push(a))
                                  : ((a[o("", r)] = n.ideal), t.optional.push(a));
                              }
                              void 0 !== n.exact && "number" != typeof n.exact
                                ? ((t.mandatory = t.mandatory || {}), (t.mandatory[o("", r)] = n.exact))
                                : ["min", "max"].forEach(function (e) {
                                    void 0 !== n[e] &&
                                      ((t.mandatory = t.mandatory || {}), (t.mandatory[o(e, r)] = n[e]));
                                  });
                            }
                          }),
                          e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
                          t
                        );
                      },
                      a = function (e, a) {
                        if (t.version >= 61) return a(e);
                        if ((e = JSON.parse(JSON.stringify(e))) && "object" === i(e.audio)) {
                          var s = function (e, t, r) {
                            t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                          };
                          s((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"),
                            s(e.audio, "noiseSuppression", "googNoiseSuppression"),
                            (e.audio = n(e.audio));
                        }
                        if (e && "object" === i(e.video)) {
                          var c = e.video.facingMode;
                          c = c && ("object" === i(c) ? c : { ideal: c });
                          var p,
                            u = t.version < 66;
                          if (
                            c &&
                            ("user" === c.exact ||
                              "environment" === c.exact ||
                              "user" === c.ideal ||
                              "environment" === c.ideal) &&
                            (!r.mediaDevices.getSupportedConstraints ||
                              !r.mediaDevices.getSupportedConstraints().facingMode ||
                              u) &&
                            (delete e.video.facingMode,
                            "environment" === c.exact || "environment" === c.ideal
                              ? (p = ["back", "rear"])
                              : ("user" !== c.exact && "user" !== c.ideal) || (p = ["front"]),
                            p)
                          )
                            return r.mediaDevices.enumerateDevices().then(function (t) {
                              var r = (t = t.filter(function (e) {
                                return "videoinput" === e.kind;
                              })).find(function (e) {
                                return p.some(function (t) {
                                  return e.label.toLowerCase().includes(t);
                                });
                              });
                              return (
                                !r && t.length && p.includes("back") && (r = t[t.length - 1]),
                                r && (e.video.deviceId = c.exact ? { exact: r.deviceId } : { ideal: r.deviceId }),
                                (e.video = n(e.video)),
                                o("chrome: " + JSON.stringify(e)),
                                a(e)
                              );
                            });
                          e.video = n(e.video);
                        }
                        return o("chrome: " + JSON.stringify(e)), a(e);
                      },
                      s = function (e) {
                        return t.version >= 64
                          ? e
                          : {
                              name:
                                {
                                  PermissionDeniedError: "NotAllowedError",
                                  PermissionDismissedError: "NotAllowedError",
                                  InvalidStateError: "NotAllowedError",
                                  DevicesNotFoundError: "NotFoundError",
                                  ConstraintNotSatisfiedError: "OverconstrainedError",
                                  TrackStartError: "NotReadableError",
                                  MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                  MediaDeviceKillSwitchOn: "NotAllowedError",
                                  TabCaptureError: "AbortError",
                                  ScreenCaptureError: "AbortError",
                                  DeviceCaptureError: "AbortError",
                                }[e.name] || e.name,
                              message: e.message,
                              constraint: e.constraint || e.constraintName,
                              toString: function () {
                                return this.name + (this.message && ": ") + this.message;
                              },
                            };
                      };
                    if (
                      ((r.getUserMedia = function (e, t, n) {
                        a(e, function (e) {
                          r.webkitGetUserMedia(e, t, function (e) {
                            n && n(s(e));
                          });
                        });
                      }.bind(r)),
                      r.mediaDevices.getUserMedia)
                    ) {
                      var c = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                      r.mediaDevices.getUserMedia = function (e) {
                        return a(e, function (e) {
                          return c(e).then(
                            function (t) {
                              if ((e.audio && !t.getAudioTracks().length) || (e.video && !t.getVideoTracks().length))
                                throw (
                                  (t.getTracks().forEach(function (e) {
                                    e.stop();
                                  }),
                                  new DOMException("", "NotFoundError"))
                                );
                              return t;
                            },
                            function (e) {
                              return Promise.reject(s(e));
                            }
                          );
                        });
                      };
                    }
                  }
                });
              var o = (function (e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var t = n();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                  i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                  if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                  }
                return (r.default = e), t && t.set(e, r), r;
              })(e("../utils.js")).log;
            },
            { "../utils.js": "iSxC" },
          ],
          VHa8: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetDisplayMedia = function (e, t) {
                  (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
                    (e.navigator.mediaDevices &&
                      ("function" == typeof t
                        ? (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                            return t(r).then(function (t) {
                              var n = r.video && r.video.width,
                                i = r.video && r.video.height,
                                o = r.video && r.video.frameRate;
                              return (
                                (r.video = {
                                  mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: t,
                                    maxFrameRate: o || 3,
                                  },
                                }),
                                n && (r.video.mandatory.maxWidth = n),
                                i && (r.video.mandatory.maxHeight = i),
                                e.navigator.mediaDevices.getUserMedia(r)
                              );
                            });
                          })
                        : console.error("shimGetDisplayMedia: getSourceId argument is not a function")));
                });
            },
            {},
          ],
          uI5X: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimMediaStream = function (e) {
                  e.MediaStream = e.MediaStream || e.webkitMediaStream;
                }),
                (r.shimOnTrack = function (e) {
                  if ("object" !== c(e) || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype)
                    n.wrapPeerConnectionEvent(e, "track", function (e) {
                      return (
                        e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e
                      );
                    });
                  else {
                    Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                      get: function () {
                        return this._ontrack;
                      },
                      set: function (e) {
                        this._ontrack && this.removeEventListener("track", this._ontrack),
                          this.addEventListener("track", (this._ontrack = e));
                      },
                      enumerable: !0,
                      configurable: !0,
                    });
                    var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                      var r = this;
                      return (
                        this._ontrackpoly ||
                          ((this._ontrackpoly = function (t) {
                            t.stream.addEventListener("addtrack", function (n) {
                              var i;
                              i = e.RTCPeerConnection.prototype.getReceivers
                                ? r.getReceivers().find(function (e) {
                                    return e.track && e.track.id === n.track.id;
                                  })
                                : { track: n.track };
                              var o = new Event("track");
                              (o.track = n.track),
                                (o.receiver = i),
                                (o.transceiver = { receiver: i }),
                                (o.streams = [t.stream]),
                                r.dispatchEvent(o);
                            }),
                              t.stream.getTracks().forEach(function (n) {
                                var i;
                                i = e.RTCPeerConnection.prototype.getReceivers
                                  ? r.getReceivers().find(function (e) {
                                      return e.track && e.track.id === n.id;
                                    })
                                  : { track: n };
                                var o = new Event("track");
                                (o.track = n),
                                  (o.receiver = i),
                                  (o.transceiver = { receiver: i }),
                                  (o.streams = [t.stream]),
                                  r.dispatchEvent(o);
                              });
                          }),
                          this.addEventListener("addstream", this._ontrackpoly)),
                        t.apply(this, arguments)
                      );
                    };
                  }
                }),
                (r.shimGetSendersWithDtmf = function (e) {
                  if (
                    "object" === c(e) &&
                    e.RTCPeerConnection &&
                    !("getSenders" in e.RTCPeerConnection.prototype) &&
                    "createDTMFSender" in e.RTCPeerConnection.prototype
                  ) {
                    var t = function (e, t) {
                      return {
                        track: t,
                        get dtmf() {
                          return (
                            void 0 === this._dtmf &&
                              ("audio" === t.kind ? (this._dtmf = e.createDTMFSender(t)) : (this._dtmf = null)),
                            this._dtmf
                          );
                        },
                        _pc: e,
                      };
                    };
                    if (!e.RTCPeerConnection.prototype.getSenders) {
                      e.RTCPeerConnection.prototype.getSenders = function () {
                        return (this._senders = this._senders || []), this._senders.slice();
                      };
                      var r = e.RTCPeerConnection.prototype.addTrack;
                      e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                        var i = r.apply(this, arguments);
                        return i || ((i = t(this, e)), this._senders.push(i)), i;
                      };
                      var n = e.RTCPeerConnection.prototype.removeTrack;
                      e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        n.apply(this, arguments);
                        var t = this._senders.indexOf(e);
                        -1 !== t && this._senders.splice(t, 1);
                      };
                    }
                    var i = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                      var r = this;
                      (this._senders = this._senders || []),
                        i.apply(this, [e]),
                        e.getTracks().forEach(function (e) {
                          r._senders.push(t(r, e));
                        });
                    };
                    var o = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function (e) {
                      var t = this;
                      (this._senders = this._senders || []),
                        o.apply(this, [e]),
                        e.getTracks().forEach(function (e) {
                          var r = t._senders.find(function (t) {
                            return t.track === e;
                          });
                          r && t._senders.splice(t._senders.indexOf(r), 1);
                        });
                    };
                  } else if (
                    "object" === c(e) &&
                    e.RTCPeerConnection &&
                    "getSenders" in e.RTCPeerConnection.prototype &&
                    "createDTMFSender" in e.RTCPeerConnection.prototype &&
                    e.RTCRtpSender &&
                    !("dtmf" in e.RTCRtpSender.prototype)
                  ) {
                    var a = e.RTCPeerConnection.prototype.getSenders;
                    (e.RTCPeerConnection.prototype.getSenders = function () {
                      var e = this,
                        t = a.apply(this, []);
                      return (
                        t.forEach(function (t) {
                          return (t._pc = e);
                        }),
                        t
                      );
                    }),
                      Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                        get: function () {
                          return (
                            void 0 === this._dtmf &&
                              ("audio" === this.track.kind
                                ? (this._dtmf = this._pc.createDTMFSender(this.track))
                                : (this._dtmf = null)),
                            this._dtmf
                          );
                        },
                      });
                  }
                }),
                (r.shimGetStats = function (e) {
                  if (e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection.prototype.getStats;
                    e.RTCPeerConnection.prototype.getStats = function () {
                      var e = this,
                        [r, n, i] = arguments;
                      if (arguments.length > 0 && "function" == typeof r) return t.apply(this, arguments);
                      if (0 === t.length && (0 === arguments.length || "function" != typeof r))
                        return t.apply(this, []);
                      var o = function (e) {
                          var t = {};
                          return (
                            e.result().forEach(function (e) {
                              var r = {
                                id: e.id,
                                timestamp: e.timestamp,
                                type:
                                  { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[e.type] ||
                                  e.type,
                              };
                              e.names().forEach(function (t) {
                                r[t] = e.stat(t);
                              }),
                                (t[r.id] = r);
                            }),
                            t
                          );
                        },
                        a = function (e) {
                          return new Map(
                            Object.keys(e).map(function (t) {
                              return [t, e[t]];
                            })
                          );
                        };
                      return arguments.length >= 2
                        ? t.apply(this, [
                            function (e) {
                              n(a(o(e)));
                            },
                            r,
                          ])
                        : new Promise(function (r, n) {
                            t.apply(e, [
                              function (e) {
                                r(a(o(e)));
                              },
                              n,
                            ]);
                          }).then(n, i);
                    };
                  }
                }),
                (r.shimSenderReceiverGetStats = function (e) {
                  if ("object" === c(e) && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) {
                    if (!("getStats" in e.RTCRtpSender.prototype)) {
                      var t = e.RTCPeerConnection.prototype.getSenders;
                      t &&
                        (e.RTCPeerConnection.prototype.getSenders = function () {
                          var e = this,
                            r = t.apply(this, []);
                          return (
                            r.forEach(function (t) {
                              return (t._pc = e);
                            }),
                            r
                          );
                        });
                      var r = e.RTCPeerConnection.prototype.addTrack;
                      r &&
                        (e.RTCPeerConnection.prototype.addTrack = function () {
                          var e = r.apply(this, arguments);
                          return (e._pc = this), e;
                        }),
                        (e.RTCRtpSender.prototype.getStats = function () {
                          var e = this;
                          return this._pc.getStats().then(function (t) {
                            return n.filterStats(t, e.track, !0);
                          });
                        });
                    }
                    if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                      var i = e.RTCPeerConnection.prototype.getReceivers;
                      i &&
                        (e.RTCPeerConnection.prototype.getReceivers = function () {
                          var e = this,
                            t = i.apply(this, []);
                          return (
                            t.forEach(function (t) {
                              return (t._pc = e);
                            }),
                            t
                          );
                        }),
                        n.wrapPeerConnectionEvent(e, "track", function (e) {
                          return (e.receiver._pc = e.srcElement), e;
                        }),
                        (e.RTCRtpReceiver.prototype.getStats = function () {
                          var e = this;
                          return this._pc.getStats().then(function (t) {
                            return n.filterStats(t, e.track, !1);
                          });
                        });
                    }
                    if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
                      var o = e.RTCPeerConnection.prototype.getStats;
                      e.RTCPeerConnection.prototype.getStats = function () {
                        if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                          var t,
                            r,
                            n,
                            i = arguments[0];
                          return (
                            this.getSenders().forEach(function (e) {
                              e.track === i && (t ? (n = !0) : (t = e));
                            }),
                            this.getReceivers().forEach(function (e) {
                              return e.track === i && (r ? (n = !0) : (r = e)), e.track === i;
                            }),
                            n || (t && r)
                              ? Promise.reject(
                                  new DOMException(
                                    "There are more than one sender or receiver for the track.",
                                    "InvalidAccessError"
                                  )
                                )
                              : t
                              ? t.getStats()
                              : r
                              ? r.getStats()
                              : Promise.reject(
                                  new DOMException(
                                    "There is no sender or receiver for the track.",
                                    "InvalidAccessError"
                                  )
                                )
                          );
                        }
                        return o.apply(this, arguments);
                      };
                    }
                  }
                }),
                (r.shimAddTrackRemoveTrackWithNative = p),
                (r.shimAddTrackRemoveTrack = function (e, t) {
                  if (e.RTCPeerConnection) {
                    if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return p(e);
                    var r = e.RTCPeerConnection.prototype.getLocalStreams;
                    e.RTCPeerConnection.prototype.getLocalStreams = function () {
                      var e = this,
                        t = r.apply(this);
                      return (
                        (this._reverseStreams = this._reverseStreams || {}),
                        t.map(function (t) {
                          return e._reverseStreams[t.id];
                        })
                      );
                    };
                    var n = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (t) {
                      var r = this;
                      if (
                        ((this._streams = this._streams || {}),
                        (this._reverseStreams = this._reverseStreams || {}),
                        t.getTracks().forEach(function (e) {
                          if (
                            r.getSenders().find(function (t) {
                              return t.track === e;
                            })
                          )
                            throw new DOMException("Track already exists.", "InvalidAccessError");
                        }),
                        !this._reverseStreams[t.id])
                      ) {
                        var i = new e.MediaStream(t.getTracks());
                        (this._streams[t.id] = i), (this._reverseStreams[i.id] = t), (t = i);
                      }
                      n.apply(this, [t]);
                    };
                    var i = e.RTCPeerConnection.prototype.removeStream;
                    (e.RTCPeerConnection.prototype.removeStream = function (e) {
                      (this._streams = this._streams || {}),
                        (this._reverseStreams = this._reverseStreams || {}),
                        i.apply(this, [this._streams[e.id] || e]),
                        delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id],
                        delete this._streams[e.id];
                    }),
                      (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                        var n = this;
                        if ("closed" === this.signalingState)
                          throw new DOMException(
                            "The RTCPeerConnection's signalingState is 'closed'.",
                            "InvalidStateError"
                          );
                        var i = [].slice.call(arguments, 1);
                        if (
                          1 !== i.length ||
                          !i[0].getTracks().find(function (e) {
                            return e === t;
                          })
                        )
                          throw new DOMException(
                            "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                            "NotSupportedError"
                          );
                        if (
                          this.getSenders().find(function (e) {
                            return e.track === t;
                          })
                        )
                          throw new DOMException("Track already exists.", "InvalidAccessError");
                        (this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {});
                        var o = this._streams[r.id];
                        if (o)
                          o.addTrack(t),
                            Promise.resolve().then(function () {
                              n.dispatchEvent(new Event("negotiationneeded"));
                            });
                        else {
                          var a = new e.MediaStream([t]);
                          (this._streams[r.id] = a), (this._reverseStreams[a.id] = r), this.addStream(a);
                        }
                        return this.getSenders().find(function (e) {
                          return e.track === t;
                        });
                      }),
                      ["createOffer", "createAnswer"].forEach(function (t) {
                        var r = e.RTCPeerConnection.prototype[t],
                          n = s({}, t, function () {
                            var e = this,
                              t = arguments;
                            return arguments.length && "function" == typeof arguments[0]
                              ? r.apply(this, [
                                  function (r) {
                                    var n = c(e, r);
                                    t[0].apply(null, [n]);
                                  },
                                  function (e) {
                                    t[1] && t[1].apply(null, e);
                                  },
                                  arguments[2],
                                ])
                              : r.apply(this, arguments).then(function (t) {
                                  return c(e, t);
                                });
                          });
                        e.RTCPeerConnection.prototype[t] = n[t];
                      });
                    var o = e.RTCPeerConnection.prototype.setLocalDescription;
                    e.RTCPeerConnection.prototype.setLocalDescription = function () {
                      return arguments.length && arguments[0].type
                        ? ((arguments[0] =
                            ((e = this),
                            (r = (t = arguments[0]).sdp),
                            Object.keys(e._reverseStreams || []).forEach(function (t) {
                              var n = e._reverseStreams[t],
                                i = e._streams[n.id];
                              r = r.replace(new RegExp(n.id, "g"), i.id);
                            }),
                            new RTCSessionDescription({ type: t.type, sdp: r }))),
                          o.apply(this, arguments))
                        : o.apply(this, arguments);
                      var e, t, r;
                    };
                    var a = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                    Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                      get: function () {
                        var e = a.get.apply(this);
                        return "" === e.type ? e : c(this, e);
                      },
                    }),
                      (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        var t,
                          r = this;
                        if ("closed" === this.signalingState)
                          throw new DOMException(
                            "The RTCPeerConnection's signalingState is 'closed'.",
                            "InvalidStateError"
                          );
                        if (!e._pc)
                          throw new DOMException(
                            "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                            "TypeError"
                          );
                        if (e._pc !== this)
                          throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                        (this._streams = this._streams || {}),
                          Object.keys(this._streams).forEach(function (n) {
                            r._streams[n].getTracks().find(function (t) {
                              return e.track === t;
                            }) && (t = r._streams[n]);
                          }),
                          t &&
                            (1 === t.getTracks().length
                              ? this.removeStream(this._reverseStreams[t.id])
                              : t.removeTrack(e.track),
                            this.dispatchEvent(new Event("negotiationneeded")));
                      });
                  }
                  function c(e, t) {
                    var r = t.sdp;
                    return (
                      Object.keys(e._reverseStreams || []).forEach(function (t) {
                        var n = e._reverseStreams[t],
                          i = e._streams[n.id];
                        r = r.replace(new RegExp(i.id, "g"), n.id);
                      }),
                      new RTCSessionDescription({ type: t.type, sdp: r })
                    );
                  }
                }),
                (r.shimPeerConnection = function (e, t) {
                  !e.RTCPeerConnection &&
                    e.webkitRTCPeerConnection &&
                    (e.RTCPeerConnection = e.webkitRTCPeerConnection),
                    e.RTCPeerConnection &&
                      t.version < 53 &&
                      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                        var r = e.RTCPeerConnection.prototype[t],
                          n = s({}, t, function () {
                            return (
                              (arguments[0] = new ("addIceCandidate" === t
                                ? e.RTCIceCandidate
                                : e.RTCSessionDescription)(arguments[0])),
                              r.apply(this, arguments)
                            );
                          });
                        e.RTCPeerConnection.prototype[t] = n[t];
                      });
                }),
                (r.fixNegotiationNeeded = function (e, t) {
                  n.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
                    var r = e.target;
                    if (
                      !(t.version < 72 || (r.getConfiguration && "plan-b" === r.getConfiguration().sdpSemantics)) ||
                      "stable" === r.signalingState
                    )
                      return e;
                  });
                }),
                Object.defineProperty(r, "shimGetUserMedia", {
                  enumerable: !0,
                  get: function () {
                    return i.shimGetUserMedia;
                  },
                }),
                Object.defineProperty(r, "shimGetDisplayMedia", {
                  enumerable: !0,
                  get: function () {
                    return o.shimGetDisplayMedia;
                  },
                });
              var n = (function (e) {
                  if (e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var t = a();
                  if (t && t.has(e)) return t.get(e);
                  var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                      o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                    }
                  return (r.default = e), t && t.set(e, r), r;
                })(e("../utils.js")),
                i = e("./getusermedia"),
                o = e("./getdisplaymedia");
              function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (a = function () {
                    return e;
                  }),
                  e
                );
              }
              function s(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (e[t] = r),
                  e
                );
              }
              function c(e) {
                return (c =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function p(e) {
                e.RTCPeerConnection.prototype.getLocalStreams = function () {
                  var e = this;
                  return (
                    (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                    Object.keys(this._shimmedLocalStreams).map(function (t) {
                      return e._shimmedLocalStreams[t][0];
                    })
                  );
                };
                var t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                  if (!r) return t.apply(this, arguments);
                  this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                  var n = t.apply(this, arguments);
                  return (
                    this._shimmedLocalStreams[r.id]
                      ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n)
                      : (this._shimmedLocalStreams[r.id] = [r, n]),
                    n
                  );
                };
                var r = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (e) {
                  var t = this;
                  (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                    e.getTracks().forEach(function (e) {
                      if (
                        t.getSenders().find(function (t) {
                          return t.track === e;
                        })
                      )
                        throw new DOMException("Track already exists.", "InvalidAccessError");
                    });
                  var n = this.getSenders();
                  r.apply(this, arguments);
                  var i = this.getSenders().filter(function (e) {
                    return -1 === n.indexOf(e);
                  });
                  this._shimmedLocalStreams[e.id] = [e].concat(i);
                };
                var n = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function (e) {
                  return (
                    (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                    delete this._shimmedLocalStreams[e.id],
                    n.apply(this, arguments)
                  );
                };
                var i = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function (e) {
                  var t = this;
                  return (
                    (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                    e &&
                      Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                        var n = t._shimmedLocalStreams[r].indexOf(e);
                        -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
                          1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r];
                      }),
                    i.apply(this, arguments)
                  );
                };
              }
            },
            { "../utils.js": "iSxC", "./getusermedia": "s6SN", "./getdisplaymedia": "VHa8" },
          ],
          NZ1C: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.filterIceServers = function (e, t) {
                  var r = !1;
                  return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                    if (e && (e.urls || e.url)) {
                      var t = e.urls || e.url;
                      e.url && !e.urls && n.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                      var i = "string" == typeof t;
                      return (
                        i && (t = [t]),
                        (t = t.filter(function (e) {
                          if (0 === e.indexOf("stun:")) return !1;
                          var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                          return t && !r ? ((r = !0), !0) : t && !r;
                        })),
                        delete e.url,
                        (e.urls = i ? t[0] : t),
                        !!t.length
                      );
                    }
                  });
                });
              var n = (function (e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                  n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                  if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                  }
                return (r.default = e), t && t.set(e, r), r;
              })(e("../utils"));
              function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (i = function () {
                    return e;
                  }),
                  e
                );
              }
            },
            { "../utils": "iSxC" },
          ],
          YHvh: [
            function (e, t, r) {
              "use strict";
              var n = {
                generateIdentifier: function () {
                  return Math.random().toString(36).substr(2, 10);
                },
              };
              (n.localCName = n.generateIdentifier()),
                (n.splitLines = function (e) {
                  return e
                    .trim()
                    .split("\n")
                    .map(function (e) {
                      return e.trim();
                    });
                }),
                (n.splitSections = function (e) {
                  return e.split("\nm=").map(function (e, t) {
                    return (t > 0 ? "m=" + e : e).trim() + "\r\n";
                  });
                }),
                (n.getDescription = function (e) {
                  var t = n.splitSections(e);
                  return t && t[0];
                }),
                (n.getMediaSections = function (e) {
                  var t = n.splitSections(e);
                  return t.shift(), t;
                }),
                (n.matchPrefix = function (e, t) {
                  return n.splitLines(e).filter(function (e) {
                    return 0 === e.indexOf(t);
                  });
                }),
                (n.parseCandidate = function (e) {
                  for (
                    var t,
                      r = {
                        foundation: (t =
                          0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                        component: parseInt(t[1], 10),
                        protocol: t[2].toLowerCase(),
                        priority: parseInt(t[3], 10),
                        ip: t[4],
                        address: t[4],
                        port: parseInt(t[5], 10),
                        type: t[7],
                      },
                      n = 8;
                    n < t.length;
                    n += 2
                  )
                    switch (t[n]) {
                      case "raddr":
                        r.relatedAddress = t[n + 1];
                        break;
                      case "rport":
                        r.relatedPort = parseInt(t[n + 1], 10);
                        break;
                      case "tcptype":
                        r.tcpType = t[n + 1];
                        break;
                      case "ufrag":
                        (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                        break;
                      default:
                        r[t[n]] = t[n + 1];
                    }
                  return r;
                }),
                (n.writeCandidate = function (e) {
                  var t = [];
                  t.push(e.foundation),
                    t.push(e.component),
                    t.push(e.protocol.toUpperCase()),
                    t.push(e.priority),
                    t.push(e.address || e.ip),
                    t.push(e.port);
                  var r = e.type;
                  return (
                    t.push("typ"),
                    t.push(r),
                    "host" !== r &&
                      e.relatedAddress &&
                      e.relatedPort &&
                      (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)),
                    e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)),
                    (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
                    "candidate:" + t.join(" ")
                  );
                }),
                (n.parseIceOptions = function (e) {
                  return e.substr(14).split(" ");
                }),
                (n.parseRtpMap = function (e) {
                  var t = e.substr(9).split(" "),
                    r = { payloadType: parseInt(t.shift(), 10) };
                  return (
                    (t = t[0].split("/")),
                    (r.name = t[0]),
                    (r.clockRate = parseInt(t[1], 10)),
                    (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
                    (r.numChannels = r.channels),
                    r
                  );
                }),
                (n.writeRtpMap = function (e) {
                  var t = e.payloadType;
                  void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                  var r = e.channels || e.numChannels || 1;
                  return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n";
                }),
                (n.parseExtmap = function (e) {
                  var t = e.substr(9).split(" ");
                  return {
                    id: parseInt(t[0], 10),
                    direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                    uri: t[1],
                  };
                }),
                (n.writeExtmap = function (e) {
                  return (
                    "a=extmap:" +
                    (e.id || e.preferredId) +
                    (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") +
                    " " +
                    e.uri +
                    "\r\n"
                  );
                }),
                (n.parseFmtp = function (e) {
                  for (var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++)
                    r[(t = n[i].trim().split("="))[0].trim()] = t[1];
                  return r;
                }),
                (n.writeFmtp = function (e) {
                  var t = "",
                    r = e.payloadType;
                  if (
                    (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
                    e.parameters && Object.keys(e.parameters).length)
                  ) {
                    var n = [];
                    Object.keys(e.parameters).forEach(function (t) {
                      e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t);
                    }),
                      (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
                  }
                  return t;
                }),
                (n.parseRtcpFb = function (e) {
                  var t = e.substr(e.indexOf(" ") + 1).split(" ");
                  return { type: t.shift(), parameter: t.join(" ") };
                }),
                (n.writeRtcpFb = function (e) {
                  var t = "",
                    r = e.payloadType;
                  return (
                    void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
                    e.rtcpFeedback &&
                      e.rtcpFeedback.length &&
                      e.rtcpFeedback.forEach(function (e) {
                        t +=
                          "a=rtcp-fb:" +
                          r +
                          " " +
                          e.type +
                          (e.parameter && e.parameter.length ? " " + e.parameter : "") +
                          "\r\n";
                      }),
                    t
                  );
                }),
                (n.parseSsrcMedia = function (e) {
                  var t = e.indexOf(" "),
                    r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
                    n = e.indexOf(":", t);
                  return (
                    n > -1
                      ? ((r.attribute = e.substr(t + 1, n - t - 1)), (r.value = e.substr(n + 1)))
                      : (r.attribute = e.substr(t + 1)),
                    r
                  );
                }),
                (n.parseSsrcGroup = function (e) {
                  var t = e.substr(13).split(" ");
                  return {
                    semantics: t.shift(),
                    ssrcs: t.map(function (e) {
                      return parseInt(e, 10);
                    }),
                  };
                }),
                (n.getMid = function (e) {
                  var t = n.matchPrefix(e, "a=mid:")[0];
                  if (t) return t.substr(6);
                }),
                (n.parseFingerprint = function (e) {
                  var t = e.substr(14).split(" ");
                  return { algorithm: t[0].toLowerCase(), value: t[1] };
                }),
                (n.getDtlsParameters = function (e, t) {
                  return { role: "auto", fingerprints: n.matchPrefix(e + t, "a=fingerprint:").map(n.parseFingerprint) };
                }),
                (n.writeDtlsParameters = function (e, t) {
                  var r = "a=setup:" + t + "\r\n";
                  return (
                    e.fingerprints.forEach(function (e) {
                      r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
                    }),
                    r
                  );
                }),
                (n.parseCryptoLine = function (e) {
                  var t = e.substr(9).split(" ");
                  return { tag: parseInt(t[0], 10), cryptoSuite: t[1], keyParams: t[2], sessionParams: t.slice(3) };
                }),
                (n.writeCryptoLine = function (e) {
                  return (
                    "a=crypto:" +
                    e.tag +
                    " " +
                    e.cryptoSuite +
                    " " +
                    ("object" == typeof e.keyParams ? n.writeCryptoKeyParams(e.keyParams) : e.keyParams) +
                    (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
                    "\r\n"
                  );
                }),
                (n.parseCryptoKeyParams = function (e) {
                  if (0 !== e.indexOf("inline:")) return null;
                  var t = e.substr(7).split("|");
                  return {
                    keyMethod: "inline",
                    keySalt: t[0],
                    lifeTime: t[1],
                    mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                    mkiLength: t[2] ? t[2].split(":")[1] : void 0,
                  };
                }),
                (n.writeCryptoKeyParams = function (e) {
                  return (
                    e.keyMethod +
                    ":" +
                    e.keySalt +
                    (e.lifeTime ? "|" + e.lifeTime : "") +
                    (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
                  );
                }),
                (n.getCryptoParameters = function (e, t) {
                  return n.matchPrefix(e + t, "a=crypto:").map(n.parseCryptoLine);
                }),
                (n.getIceParameters = function (e, t) {
                  var r = n.matchPrefix(e + t, "a=ice-ufrag:")[0],
                    i = n.matchPrefix(e + t, "a=ice-pwd:")[0];
                  return r && i ? { usernameFragment: r.substr(12), password: i.substr(10) } : null;
                }),
                (n.writeIceParameters = function (e) {
                  return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
                }),
                (n.parseRtpParameters = function (e) {
                  for (
                    var t = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
                      r = n.splitLines(e)[0].split(" "),
                      i = 3;
                    i < r.length;
                    i++
                  ) {
                    var o = r[i],
                      a = n.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                    if (a) {
                      var s = n.parseRtpMap(a),
                        c = n.matchPrefix(e, "a=fmtp:" + o + " ");
                      switch (
                        ((s.parameters = c.length ? n.parseFmtp(c[0]) : {}),
                        (s.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(n.parseRtcpFb)),
                        t.codecs.push(s),
                        s.name.toUpperCase())
                      ) {
                        case "RED":
                        case "ULPFEC":
                          t.fecMechanisms.push(s.name.toUpperCase());
                      }
                    }
                  }
                  return (
                    n.matchPrefix(e, "a=extmap:").forEach(function (e) {
                      t.headerExtensions.push(n.parseExtmap(e));
                    }),
                    t
                  );
                }),
                (n.writeRtpDescription = function (e, t) {
                  var r = "";
                  (r += "m=" + e + " "),
                    (r += t.codecs.length > 0 ? "9" : "0"),
                    (r += " UDP/TLS/RTP/SAVPF "),
                    (r +=
                      t.codecs
                        .map(function (e) {
                          return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
                        })
                        .join(" ") + "\r\n"),
                    (r += "c=IN IP4 0.0.0.0\r\n"),
                    (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
                    t.codecs.forEach(function (e) {
                      (r += n.writeRtpMap(e)), (r += n.writeFmtp(e)), (r += n.writeRtcpFb(e));
                    });
                  var i = 0;
                  return (
                    t.codecs.forEach(function (e) {
                      e.maxptime > i && (i = e.maxptime);
                    }),
                    i > 0 && (r += "a=maxptime:" + i + "\r\n"),
                    (r += "a=rtcp-mux\r\n"),
                    t.headerExtensions &&
                      t.headerExtensions.forEach(function (e) {
                        r += n.writeExtmap(e);
                      }),
                    r
                  );
                }),
                (n.parseRtpEncodingParameters = function (e) {
                  var t,
                    r = [],
                    i = n.parseRtpParameters(e),
                    o = -1 !== i.fecMechanisms.indexOf("RED"),
                    a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
                    s = n
                      .matchPrefix(e, "a=ssrc:")
                      .map(function (e) {
                        return n.parseSsrcMedia(e);
                      })
                      .filter(function (e) {
                        return "cname" === e.attribute;
                      }),
                    c = s.length > 0 && s[0].ssrc,
                    p = n.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                      return e
                        .substr(17)
                        .split(" ")
                        .map(function (e) {
                          return parseInt(e, 10);
                        });
                    });
                  p.length > 0 && p[0].length > 1 && p[0][0] === c && (t = p[0][1]),
                    i.codecs.forEach(function (e) {
                      if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                        var n = { ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10) };
                        c && t && (n.rtx = { ssrc: t }),
                          r.push(n),
                          o &&
                            (((n = JSON.parse(JSON.stringify(n))).fec = {
                              ssrc: c,
                              mechanism: a ? "red+ulpfec" : "red",
                            }),
                            r.push(n));
                      }
                    }),
                    0 === r.length && c && r.push({ ssrc: c });
                  var u = n.matchPrefix(e, "b=");
                  return (
                    u.length &&
                      ((u =
                        0 === u[0].indexOf("b=TIAS:")
                          ? parseInt(u[0].substr(7), 10)
                          : 0 === u[0].indexOf("b=AS:")
                          ? 1e3 * parseInt(u[0].substr(5), 10) * 0.95 - 16e3
                          : void 0),
                      r.forEach(function (e) {
                        e.maxBitrate = u;
                      })),
                    r
                  );
                }),
                (n.parseRtcpParameters = function (e) {
                  var t = {},
                    r = n
                      .matchPrefix(e, "a=ssrc:")
                      .map(function (e) {
                        return n.parseSsrcMedia(e);
                      })
                      .filter(function (e) {
                        return "cname" === e.attribute;
                      })[0];
                  r && ((t.cname = r.value), (t.ssrc = r.ssrc));
                  var i = n.matchPrefix(e, "a=rtcp-rsize");
                  (t.reducedSize = i.length > 0), (t.compound = 0 === i.length);
                  var o = n.matchPrefix(e, "a=rtcp-mux");
                  return (t.mux = o.length > 0), t;
                }),
                (n.parseMsid = function (e) {
                  var t,
                    r = n.matchPrefix(e, "a=msid:");
                  if (1 === r.length) return { stream: (t = r[0].substr(7).split(" "))[0], track: t[1] };
                  var i = n
                    .matchPrefix(e, "a=ssrc:")
                    .map(function (e) {
                      return n.parseSsrcMedia(e);
                    })
                    .filter(function (e) {
                      return "msid" === e.attribute;
                    });
                  return i.length > 0 ? { stream: (t = i[0].value.split(" "))[0], track: t[1] } : void 0;
                }),
                (n.parseSctpDescription = function (e) {
                  var t,
                    r = n.parseMLine(e),
                    i = n.matchPrefix(e, "a=max-message-size:");
                  i.length > 0 && (t = parseInt(i[0].substr(19), 10)), isNaN(t) && (t = 65536);
                  var o = n.matchPrefix(e, "a=sctp-port:");
                  if (o.length > 0) return { port: parseInt(o[0].substr(12), 10), protocol: r.fmt, maxMessageSize: t };
                  if (n.matchPrefix(e, "a=sctpmap:").length > 0) {
                    var a = n.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
                    return { port: parseInt(a[0], 10), protocol: a[1], maxMessageSize: t };
                  }
                }),
                (n.writeSctpDescription = function (e, t) {
                  var r = [];
                  return (
                    (r =
                      "DTLS/SCTP" !== e.protocol
                        ? [
                            "m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
                            "c=IN IP4 0.0.0.0\r\n",
                            "a=sctp-port:" + t.port + "\r\n",
                          ]
                        : [
                            "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                            "c=IN IP4 0.0.0.0\r\n",
                            "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
                          ]),
                    void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
                    r.join("")
                  );
                }),
                (n.generateSessionId = function () {
                  return Math.random().toString().substr(2, 21);
                }),
                (n.writeSessionBoilerplate = function (e, t, r) {
                  var i = void 0 !== t ? t : 2;
                  return (
                    "v=0\r\no=" +
                    (r || "thisisadapterortc") +
                    " " +
                    (e || n.generateSessionId()) +
                    " " +
                    i +
                    " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                  );
                }),
                (n.writeMediaSection = function (e, t, r, i) {
                  var o = n.writeRtpDescription(e.kind, t);
                  if (
                    ((o += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
                    (o += n.writeDtlsParameters(
                      e.dtlsTransport.getLocalParameters(),
                      "offer" === r ? "actpass" : "active"
                    )),
                    (o += "a=mid:" + e.mid + "\r\n"),
                    e.direction
                      ? (o += "a=" + e.direction + "\r\n")
                      : e.rtpSender && e.rtpReceiver
                      ? (o += "a=sendrecv\r\n")
                      : e.rtpSender
                      ? (o += "a=sendonly\r\n")
                      : e.rtpReceiver
                      ? (o += "a=recvonly\r\n")
                      : (o += "a=inactive\r\n"),
                    e.rtpSender)
                  ) {
                    var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                    (o += "a=" + a),
                      (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a),
                      e.sendEncodingParameters[0].rtx &&
                        ((o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a),
                        (o +=
                          "a=ssrc-group:FID " +
                          e.sendEncodingParameters[0].ssrc +
                          " " +
                          e.sendEncodingParameters[0].rtx.ssrc +
                          "\r\n"));
                  }
                  return (
                    (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n"),
                    e.rtpSender &&
                      e.sendEncodingParameters[0].rtx &&
                      (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"),
                    o
                  );
                }),
                (n.getDirection = function (e, t) {
                  for (var r = n.splitLines(e), i = 0; i < r.length; i++)
                    switch (r[i]) {
                      case "a=sendrecv":
                      case "a=sendonly":
                      case "a=recvonly":
                      case "a=inactive":
                        return r[i].substr(2);
                    }
                  return t ? n.getDirection(t) : "sendrecv";
                }),
                (n.getKind = function (e) {
                  return n.splitLines(e)[0].split(" ")[0].substr(2);
                }),
                (n.isRejected = function (e) {
                  return "0" === e.split(" ", 2)[1];
                }),
                (n.parseMLine = function (e) {
                  var t = n.splitLines(e)[0].substr(2).split(" ");
                  return { kind: t[0], port: parseInt(t[1], 10), protocol: t[2], fmt: t.slice(3).join(" ") };
                }),
                (n.parseOLine = function (e) {
                  var t = n.matchPrefix(e, "o=")[0].substr(2).split(" ");
                  return {
                    username: t[0],
                    sessionId: t[1],
                    sessionVersion: parseInt(t[2], 10),
                    netType: t[3],
                    addressType: t[4],
                    address: t[5],
                  };
                }),
                (n.isValidSDP = function (e) {
                  if ("string" != typeof e || 0 === e.length) return !1;
                  for (var t = n.splitLines(e), r = 0; r < t.length; r++)
                    if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                  return !0;
                }),
                "object" == typeof t && (t.exports = n);
            },
            {},
          ],
          NJ2u: [
            function (e, t, r) {
              "use strict";
              var n = e("sdp");
              function i(e, t, r, i, o) {
                var a = n.writeRtpDescription(e.kind, t);
                if (
                  ((a += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
                  (a += n.writeDtlsParameters(
                    e.dtlsTransport.getLocalParameters(),
                    "offer" === r ? "actpass" : o || "active"
                  )),
                  (a += "a=mid:" + e.mid + "\r\n"),
                  e.rtpSender && e.rtpReceiver
                    ? (a += "a=sendrecv\r\n")
                    : e.rtpSender
                    ? (a += "a=sendonly\r\n")
                    : e.rtpReceiver
                    ? (a += "a=recvonly\r\n")
                    : (a += "a=inactive\r\n"),
                  e.rtpSender)
                ) {
                  var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
                  e.rtpSender._initialTrackId = s;
                  var c = "msid:" + (i ? i.id : "-") + " " + s + "\r\n";
                  (a += "a=" + c),
                    (a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c),
                    e.sendEncodingParameters[0].rtx &&
                      ((a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c),
                      (a +=
                        "a=ssrc-group:FID " +
                        e.sendEncodingParameters[0].ssrc +
                        " " +
                        e.sendEncodingParameters[0].rtx.ssrc +
                        "\r\n"));
                }
                return (
                  (a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n"),
                  e.rtpSender &&
                    e.sendEncodingParameters[0].rtx &&
                    (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"),
                  a
                );
              }
              function o(e, t) {
                var r = { codecs: [], headerExtensions: [], fecMechanisms: [] },
                  n = function (e, t) {
                    e = parseInt(e, 10);
                    for (var r = 0; r < t.length; r++)
                      if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r];
                  },
                  i = function (e, t, r, i) {
                    var o = n(e.parameters.apt, r),
                      a = n(t.parameters.apt, i);
                    return o && a && o.name.toLowerCase() === a.name.toLowerCase();
                  };
                return (
                  e.codecs.forEach(function (n) {
                    for (var o = 0; o < t.codecs.length; o++) {
                      var a = t.codecs[o];
                      if (n.name.toLowerCase() === a.name.toLowerCase() && n.clockRate === a.clockRate) {
                        if (
                          "rtx" === n.name.toLowerCase() &&
                          n.parameters &&
                          a.parameters.apt &&
                          !i(n, a, e.codecs, t.codecs)
                        )
                          continue;
                        ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(n.numChannels, a.numChannels)),
                          r.codecs.push(a),
                          (a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
                            for (var t = 0; t < n.rtcpFeedback.length; t++)
                              if (n.rtcpFeedback[t].type === e.type && n.rtcpFeedback[t].parameter === e.parameter)
                                return !0;
                            return !1;
                          }));
                        break;
                      }
                    }
                  }),
                  e.headerExtensions.forEach(function (e) {
                    for (var n = 0; n < t.headerExtensions.length; n++) {
                      var i = t.headerExtensions[n];
                      if (e.uri === i.uri) {
                        r.headerExtensions.push(i);
                        break;
                      }
                    }
                  }),
                  r
                );
              }
              function a(e, t, r) {
                return (
                  -1 !==
                  {
                    offer: {
                      setLocalDescription: ["stable", "have-local-offer"],
                      setRemoteDescription: ["stable", "have-remote-offer"],
                    },
                    answer: {
                      setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                      setRemoteDescription: ["have-local-offer", "have-remote-pranswer"],
                    },
                  }[t][e].indexOf(r)
                );
              }
              function s(e, t) {
                var r = e.getRemoteCandidates().find(function (e) {
                  return (
                    t.foundation === e.foundation &&
                    t.ip === e.ip &&
                    t.port === e.port &&
                    t.priority === e.priority &&
                    t.protocol === e.protocol &&
                    t.type === e.type
                  );
                });
                return r || e.addRemoteCandidate(t), !r;
              }
              function c(e, t) {
                var r = new Error(t);
                return (
                  (r.name = e),
                  (r.code = {
                    NotSupportedError: 9,
                    InvalidStateError: 11,
                    InvalidAccessError: 15,
                    TypeError: void 0,
                    OperationError: void 0,
                  }[e]),
                  r
                );
              }
              t.exports = function (e, t) {
                function r(t, r) {
                  r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", { track: t }));
                }
                function p(t, r, n, i) {
                  var o = new Event("track");
                  (o.track = r),
                    (o.receiver = n),
                    (o.transceiver = { receiver: n }),
                    (o.streams = i),
                    e.setTimeout(function () {
                      t._dispatchEvent("track", o);
                    });
                }
                var u = function (r) {
                  var i = this,
                    o = document.createDocumentFragment();
                  if (
                    (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
                      i[e] = o[e].bind(o);
                    }),
                    (this.canTrickleIceCandidates = null),
                    (this.needNegotiation = !1),
                    (this.localStreams = []),
                    (this.remoteStreams = []),
                    (this._localDescription = null),
                    (this._remoteDescription = null),
                    (this.signalingState = "stable"),
                    (this.iceConnectionState = "new"),
                    (this.connectionState = "new"),
                    (this.iceGatheringState = "new"),
                    (r = JSON.parse(JSON.stringify(r || {}))),
                    (this.usingBundle = "max-bundle" === r.bundlePolicy),
                    "negotiate" === r.rtcpMuxPolicy)
                  )
                    throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                  switch ((r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"), r.iceTransportPolicy)) {
                    case "all":
                    case "relay":
                      break;
                    default:
                      r.iceTransportPolicy = "all";
                  }
                  switch (r.bundlePolicy) {
                    case "balanced":
                    case "max-compat":
                    case "max-bundle":
                      break;
                    default:
                      r.bundlePolicy = "balanced";
                  }
                  if (
                    ((r.iceServers = (function (e, t) {
                      var r = !1;
                      return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                        if (e && (e.urls || e.url)) {
                          var n = e.urls || e.url;
                          e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                          var i = "string" == typeof n;
                          return (
                            i && (n = [n]),
                            (n = n.filter(function (e) {
                              return 0 !== e.indexOf("turn:") ||
                                -1 === e.indexOf("transport=udp") ||
                                -1 !== e.indexOf("turn:[") ||
                                r
                                ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp")
                                : ((r = !0), !0);
                            })),
                            delete e.url,
                            (e.urls = i ? n[0] : n),
                            !!n.length
                          );
                        }
                      });
                    })(r.iceServers || [], t)),
                    (this._iceGatherers = []),
                    r.iceCandidatePoolSize)
                  )
                    for (var a = r.iceCandidatePoolSize; a > 0; a--)
                      this._iceGatherers.push(
                        new e.RTCIceGatherer({ iceServers: r.iceServers, gatherPolicy: r.iceTransportPolicy })
                      );
                  else r.iceCandidatePoolSize = 0;
                  (this._config = r),
                    (this.transceivers = []),
                    (this._sdpSessionId = n.generateSessionId()),
                    (this._sdpSessionVersion = 0),
                    (this._dtlsRole = void 0),
                    (this._isClosed = !1);
                };
                Object.defineProperty(u.prototype, "localDescription", {
                  configurable: !0,
                  get: function () {
                    return this._localDescription;
                  },
                }),
                  Object.defineProperty(u.prototype, "remoteDescription", {
                    configurable: !0,
                    get: function () {
                      return this._remoteDescription;
                    },
                  }),
                  (u.prototype.onicecandidate = null),
                  (u.prototype.onaddstream = null),
                  (u.prototype.ontrack = null),
                  (u.prototype.onremovestream = null),
                  (u.prototype.onsignalingstatechange = null),
                  (u.prototype.oniceconnectionstatechange = null),
                  (u.prototype.onconnectionstatechange = null),
                  (u.prototype.onicegatheringstatechange = null),
                  (u.prototype.onnegotiationneeded = null),
                  (u.prototype.ondatachannel = null),
                  (u.prototype._dispatchEvent = function (e, t) {
                    this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
                  }),
                  (u.prototype._emitGatheringStateChange = function () {
                    var e = new Event("icegatheringstatechange");
                    this._dispatchEvent("icegatheringstatechange", e);
                  }),
                  (u.prototype.getConfiguration = function () {
                    return this._config;
                  }),
                  (u.prototype.getLocalStreams = function () {
                    return this.localStreams;
                  }),
                  (u.prototype.getRemoteStreams = function () {
                    return this.remoteStreams;
                  }),
                  (u.prototype._createTransceiver = function (e, t) {
                    var r = this.transceivers.length > 0,
                      n = {
                        track: null,
                        iceGatherer: null,
                        iceTransport: null,
                        dtlsTransport: null,
                        localCapabilities: null,
                        remoteCapabilities: null,
                        rtpSender: null,
                        rtpReceiver: null,
                        kind: e,
                        mid: null,
                        sendEncodingParameters: null,
                        recvEncodingParameters: null,
                        stream: null,
                        associatedRemoteMediaStreams: [],
                        wantReceive: !0,
                      };
                    if (this.usingBundle && r)
                      (n.iceTransport = this.transceivers[0].iceTransport),
                        (n.dtlsTransport = this.transceivers[0].dtlsTransport);
                    else {
                      var i = this._createIceAndDtlsTransports();
                      (n.iceTransport = i.iceTransport), (n.dtlsTransport = i.dtlsTransport);
                    }
                    return t || this.transceivers.push(n), n;
                  }),
                  (u.prototype.addTrack = function (t, r) {
                    if (this._isClosed)
                      throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                    var n;
                    if (
                      this.transceivers.find(function (e) {
                        return e.track === t;
                      })
                    )
                      throw c("InvalidAccessError", "Track already exists.");
                    for (var i = 0; i < this.transceivers.length; i++)
                      this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (n = this.transceivers[i]);
                    return (
                      n || (n = this._createTransceiver(t.kind)),
                      this._maybeFireNegotiationNeeded(),
                      -1 === this.localStreams.indexOf(r) && this.localStreams.push(r),
                      (n.track = t),
                      (n.stream = r),
                      (n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport)),
                      n.rtpSender
                    );
                  }),
                  (u.prototype.addStream = function (e) {
                    var r = this;
                    if (t >= 15025)
                      e.getTracks().forEach(function (t) {
                        r.addTrack(t, e);
                      });
                    else {
                      var n = e.clone();
                      e.getTracks().forEach(function (e, t) {
                        var r = n.getTracks()[t];
                        e.addEventListener("enabled", function (e) {
                          r.enabled = e.enabled;
                        });
                      }),
                        n.getTracks().forEach(function (e) {
                          r.addTrack(e, n);
                        });
                    }
                  }),
                  (u.prototype.removeTrack = function (t) {
                    if (this._isClosed)
                      throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                    if (!(t instanceof e.RTCRtpSender))
                      throw new TypeError(
                        "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
                      );
                    var r = this.transceivers.find(function (e) {
                      return e.rtpSender === t;
                    });
                    if (!r) throw c("InvalidAccessError", "Sender was not created by this connection.");
                    var n = r.stream;
                    r.rtpSender.stop(),
                      (r.rtpSender = null),
                      (r.track = null),
                      (r.stream = null),
                      -1 ===
                        this.transceivers
                          .map(function (e) {
                            return e.stream;
                          })
                          .indexOf(n) &&
                        this.localStreams.indexOf(n) > -1 &&
                        this.localStreams.splice(this.localStreams.indexOf(n), 1),
                      this._maybeFireNegotiationNeeded();
                  }),
                  (u.prototype.removeStream = function (e) {
                    var t = this;
                    e.getTracks().forEach(function (e) {
                      var r = t.getSenders().find(function (t) {
                        return t.track === e;
                      });
                      r && t.removeTrack(r);
                    });
                  }),
                  (u.prototype.getSenders = function () {
                    return this.transceivers
                      .filter(function (e) {
                        return !!e.rtpSender;
                      })
                      .map(function (e) {
                        return e.rtpSender;
                      });
                  }),
                  (u.prototype.getReceivers = function () {
                    return this.transceivers
                      .filter(function (e) {
                        return !!e.rtpReceiver;
                      })
                      .map(function (e) {
                        return e.rtpReceiver;
                      });
                  }),
                  (u.prototype._createIceGatherer = function (t, r) {
                    var n = this;
                    if (r && t > 0) return this.transceivers[0].iceGatherer;
                    if (this._iceGatherers.length) return this._iceGatherers.shift();
                    var i = new e.RTCIceGatherer({
                      iceServers: this._config.iceServers,
                      gatherPolicy: this._config.iceTransportPolicy,
                    });
                    return (
                      Object.defineProperty(i, "state", { value: "new", writable: !0 }),
                      (this.transceivers[t].bufferedCandidateEvents = []),
                      (this.transceivers[t].bufferCandidates = function (e) {
                        var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                        (i.state = r ? "completed" : "gathering"),
                          null !== n.transceivers[t].bufferedCandidateEvents &&
                            n.transceivers[t].bufferedCandidateEvents.push(e);
                      }),
                      i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates),
                      i
                    );
                  }),
                  (u.prototype._gather = function (t, r) {
                    var i = this,
                      o = this.transceivers[r].iceGatherer;
                    if (!o.onlocalcandidate) {
                      var a = this.transceivers[r].bufferedCandidateEvents;
                      (this.transceivers[r].bufferedCandidateEvents = null),
                        o.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates),
                        (o.onlocalcandidate = function (e) {
                          if (!(i.usingBundle && r > 0)) {
                            var a = new Event("icecandidate");
                            a.candidate = { sdpMid: t, sdpMLineIndex: r };
                            var s = e.candidate,
                              c = !s || 0 === Object.keys(s).length;
                            if (c) ("new" !== o.state && "gathering" !== o.state) || (o.state = "completed");
                            else {
                              "new" === o.state && (o.state = "gathering"),
                                (s.component = 1),
                                (s.ufrag = o.getLocalParameters().usernameFragment);
                              var p = n.writeCandidate(s);
                              (a.candidate = Object.assign(a.candidate, n.parseCandidate(p))),
                                (a.candidate.candidate = p),
                                (a.candidate.toJSON = function () {
                                  return {
                                    candidate: a.candidate.candidate,
                                    sdpMid: a.candidate.sdpMid,
                                    sdpMLineIndex: a.candidate.sdpMLineIndex,
                                    usernameFragment: a.candidate.usernameFragment,
                                  };
                                });
                            }
                            var u = n.getMediaSections(i._localDescription.sdp);
                            (u[a.candidate.sdpMLineIndex] += c
                              ? "a=end-of-candidates\r\n"
                              : "a=" + a.candidate.candidate + "\r\n"),
                              (i._localDescription.sdp = n.getDescription(i._localDescription.sdp) + u.join(""));
                            var d = i.transceivers.every(function (e) {
                              return e.iceGatherer && "completed" === e.iceGatherer.state;
                            });
                            "gathering" !== i.iceGatheringState &&
                              ((i.iceGatheringState = "gathering"), i._emitGatheringStateChange()),
                              c || i._dispatchEvent("icecandidate", a),
                              d &&
                                (i._dispatchEvent("icecandidate", new Event("icecandidate")),
                                (i.iceGatheringState = "complete"),
                                i._emitGatheringStateChange());
                          }
                        }),
                        e.setTimeout(function () {
                          a.forEach(function (e) {
                            o.onlocalcandidate(e);
                          });
                        }, 0);
                    }
                  }),
                  (u.prototype._createIceAndDtlsTransports = function () {
                    var t = this,
                      r = new e.RTCIceTransport(null);
                    r.onicestatechange = function () {
                      t._updateIceConnectionState(), t._updateConnectionState();
                    };
                    var n = new e.RTCDtlsTransport(r);
                    return (
                      (n.ondtlsstatechange = function () {
                        t._updateConnectionState();
                      }),
                      (n.onerror = function () {
                        Object.defineProperty(n, "state", { value: "failed", writable: !0 }),
                          t._updateConnectionState();
                      }),
                      { iceTransport: r, dtlsTransport: n }
                    );
                  }),
                  (u.prototype._disposeIceAndDtlsTransports = function (e) {
                    var t = this.transceivers[e].iceGatherer;
                    t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                    var r = this.transceivers[e].iceTransport;
                    r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                    var n = this.transceivers[e].dtlsTransport;
                    n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport);
                  }),
                  (u.prototype._transceive = function (e, r, i) {
                    var a = o(e.localCapabilities, e.remoteCapabilities);
                    r &&
                      e.rtpSender &&
                      ((a.encodings = e.sendEncodingParameters),
                      (a.rtcp = { cname: n.localCName, compound: e.rtcpParameters.compound }),
                      e.recvEncodingParameters.length && (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
                      e.rtpSender.send(a)),
                      i &&
                        e.rtpReceiver &&
                        a.codecs.length > 0 &&
                        ("video" === e.kind &&
                          e.recvEncodingParameters &&
                          t < 15019 &&
                          e.recvEncodingParameters.forEach(function (e) {
                            delete e.rtx;
                          }),
                        e.recvEncodingParameters.length
                          ? (a.encodings = e.recvEncodingParameters)
                          : (a.encodings = [{}]),
                        (a.rtcp = { compound: e.rtcpParameters.compound }),
                        e.rtcpParameters.cname && (a.rtcp.cname = e.rtcpParameters.cname),
                        e.sendEncodingParameters.length && (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
                        e.rtpReceiver.receive(a));
                  }),
                  (u.prototype.setLocalDescription = function (e) {
                    var t,
                      r,
                      i = this;
                    if (-1 === ["offer", "answer"].indexOf(e.type))
                      return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
                    if (!a("setLocalDescription", e.type, i.signalingState) || i._isClosed)
                      return Promise.reject(
                        c("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState)
                      );
                    if ("offer" === e.type)
                      (t = n.splitSections(e.sdp)),
                        (r = t.shift()),
                        t.forEach(function (e, t) {
                          var r = n.parseRtpParameters(e);
                          i.transceivers[t].localCapabilities = r;
                        }),
                        i.transceivers.forEach(function (e, t) {
                          i._gather(e.mid, t);
                        });
                    else if ("answer" === e.type) {
                      (t = n.splitSections(i._remoteDescription.sdp)), (r = t.shift());
                      var s = n.matchPrefix(r, "a=ice-lite").length > 0;
                      t.forEach(function (e, t) {
                        var a = i.transceivers[t],
                          c = a.iceGatherer,
                          p = a.iceTransport,
                          u = a.dtlsTransport,
                          d = a.localCapabilities,
                          l = a.remoteCapabilities;
                        if ((!n.isRejected(e) || 0 !== n.matchPrefix(e, "a=bundle-only").length) && !a.rejected) {
                          var f = n.getIceParameters(e, r),
                            h = n.getDtlsParameters(e, r);
                          s && (h.role = "server"),
                            (i.usingBundle && 0 !== t) ||
                              (i._gather(a.mid, t),
                              "new" === p.state && p.start(c, f, s ? "controlling" : "controlled"),
                              "new" === u.state && u.start(h));
                          var v = o(d, l);
                          i._transceive(a, v.codecs.length > 0, !1);
                        }
                      });
                    }
                    return (
                      (i._localDescription = { type: e.type, sdp: e.sdp }),
                      "offer" === e.type
                        ? i._updateSignalingState("have-local-offer")
                        : i._updateSignalingState("stable"),
                      Promise.resolve()
                    );
                  }),
                  (u.prototype.setRemoteDescription = function (i) {
                    var u = this;
                    if (-1 === ["offer", "answer"].indexOf(i.type))
                      return Promise.reject(c("TypeError", 'Unsupported type "' + i.type + '"'));
                    if (!a("setRemoteDescription", i.type, u.signalingState) || u._isClosed)
                      return Promise.reject(
                        c("InvalidStateError", "Can not set remote " + i.type + " in state " + u.signalingState)
                      );
                    var d = {};
                    u.remoteStreams.forEach(function (e) {
                      d[e.id] = e;
                    });
                    var l = [],
                      f = n.splitSections(i.sdp),
                      h = f.shift(),
                      v = n.matchPrefix(h, "a=ice-lite").length > 0,
                      m = n.matchPrefix(h, "a=group:BUNDLE ").length > 0;
                    u.usingBundle = m;
                    var y = n.matchPrefix(h, "a=ice-options:")[0];
                    return (
                      (u.canTrickleIceCandidates = !!y && y.substr(14).split(" ").indexOf("trickle") >= 0),
                      f.forEach(function (a, c) {
                        var p = n.splitLines(a),
                          f = n.getKind(a),
                          y = n.isRejected(a) && 0 === n.matchPrefix(a, "a=bundle-only").length,
                          g = p[0].substr(2).split(" ")[2],
                          _ = n.getDirection(a, h),
                          b = n.parseMsid(a),
                          C = n.getMid(a) || n.generateIdentifier();
                        if (y || ("application" === f && ("DTLS/SCTP" === g || "UDP/DTLS/SCTP" === g)))
                          u.transceivers[c] = { mid: C, kind: f, protocol: g, rejected: !0 };
                        else {
                          var S, T, P, w, k, E, R, O, M;
                          !y &&
                            u.transceivers[c] &&
                            u.transceivers[c].rejected &&
                            (u.transceivers[c] = u._createTransceiver(f, !0));
                          var D,
                            x,
                            j = n.parseRtpParameters(a);
                          y || ((D = n.getIceParameters(a, h)), ((x = n.getDtlsParameters(a, h)).role = "client")),
                            (R = n.parseRtpEncodingParameters(a));
                          var I = n.parseRtcpParameters(a),
                            L = n.matchPrefix(a, "a=end-of-candidates", h).length > 0,
                            A = n
                              .matchPrefix(a, "a=candidate:")
                              .map(function (e) {
                                return n.parseCandidate(e);
                              })
                              .filter(function (e) {
                                return 1 === e.component;
                              });
                          if (
                            (("offer" === i.type || "answer" === i.type) &&
                              !y &&
                              m &&
                              c > 0 &&
                              u.transceivers[c] &&
                              (u._disposeIceAndDtlsTransports(c),
                              (u.transceivers[c].iceGatherer = u.transceivers[0].iceGatherer),
                              (u.transceivers[c].iceTransport = u.transceivers[0].iceTransport),
                              (u.transceivers[c].dtlsTransport = u.transceivers[0].dtlsTransport),
                              u.transceivers[c].rtpSender &&
                                u.transceivers[c].rtpSender.setTransport(u.transceivers[0].dtlsTransport),
                              u.transceivers[c].rtpReceiver &&
                                u.transceivers[c].rtpReceiver.setTransport(u.transceivers[0].dtlsTransport)),
                            "offer" !== i.type || y)
                          )
                            "answer" !== i.type ||
                              y ||
                              ((T = (S = u.transceivers[c]).iceGatherer),
                              (P = S.iceTransport),
                              (w = S.dtlsTransport),
                              (k = S.rtpReceiver),
                              (E = S.sendEncodingParameters),
                              (O = S.localCapabilities),
                              (u.transceivers[c].recvEncodingParameters = R),
                              (u.transceivers[c].remoteCapabilities = j),
                              (u.transceivers[c].rtcpParameters = I),
                              A.length &&
                                "new" === P.state &&
                                ((!v && !L) || (m && 0 !== c)
                                  ? A.forEach(function (e) {
                                      s(S.iceTransport, e);
                                    })
                                  : P.setRemoteCandidates(A)),
                              (m && 0 !== c) ||
                                ("new" === P.state && P.start(T, D, "controlling"), "new" === w.state && w.start(x)),
                              !o(S.localCapabilities, S.remoteCapabilities).codecs.filter(function (e) {
                                return "rtx" === e.name.toLowerCase();
                              }).length &&
                                S.sendEncodingParameters[0].rtx &&
                                delete S.sendEncodingParameters[0].rtx,
                              u._transceive(
                                S,
                                "sendrecv" === _ || "recvonly" === _,
                                "sendrecv" === _ || "sendonly" === _
                              ),
                              !k || ("sendrecv" !== _ && "sendonly" !== _)
                                ? delete S.rtpReceiver
                                : ((M = k.track),
                                  b
                                    ? (d[b.stream] || (d[b.stream] = new e.MediaStream()),
                                      r(M, d[b.stream]),
                                      l.push([M, k, d[b.stream]]))
                                    : (d.default || (d.default = new e.MediaStream()),
                                      r(M, d.default),
                                      l.push([M, k, d.default]))));
                          else {
                            ((S = u.transceivers[c] || u._createTransceiver(f)).mid = C),
                              S.iceGatherer || (S.iceGatherer = u._createIceGatherer(c, m)),
                              A.length &&
                                "new" === S.iceTransport.state &&
                                (!L || (m && 0 !== c)
                                  ? A.forEach(function (e) {
                                      s(S.iceTransport, e);
                                    })
                                  : S.iceTransport.setRemoteCandidates(A)),
                              (O = e.RTCRtpReceiver.getCapabilities(f)),
                              t < 15019 &&
                                (O.codecs = O.codecs.filter(function (e) {
                                  return "rtx" !== e.name;
                                })),
                              (E = S.sendEncodingParameters || [{ ssrc: 1001 * (2 * c + 2) }]);
                            var B,
                              N = !1;
                            "sendrecv" === _ || "sendonly" === _
                              ? ((N = !S.rtpReceiver),
                                (k = S.rtpReceiver || new e.RTCRtpReceiver(S.dtlsTransport, f)),
                                N &&
                                  ((M = k.track),
                                  (b && "-" === b.stream) ||
                                    (b
                                      ? (d[b.stream] ||
                                          ((d[b.stream] = new e.MediaStream()),
                                          Object.defineProperty(d[b.stream], "id", {
                                            get: function () {
                                              return b.stream;
                                            },
                                          })),
                                        Object.defineProperty(M, "id", {
                                          get: function () {
                                            return b.track;
                                          },
                                        }),
                                        (B = d[b.stream]))
                                      : (d.default || (d.default = new e.MediaStream()), (B = d.default))),
                                  B && (r(M, B), S.associatedRemoteMediaStreams.push(B)),
                                  l.push([M, k, B])))
                              : S.rtpReceiver &&
                                S.rtpReceiver.track &&
                                (S.associatedRemoteMediaStreams.forEach(function (t) {
                                  var r,
                                    n,
                                    i = t.getTracks().find(function (e) {
                                      return e.id === S.rtpReceiver.track.id;
                                    });
                                  i &&
                                    ((r = i),
                                    (n = t).removeTrack(r),
                                    n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", { track: r })));
                                }),
                                (S.associatedRemoteMediaStreams = [])),
                              (S.localCapabilities = O),
                              (S.remoteCapabilities = j),
                              (S.rtpReceiver = k),
                              (S.rtcpParameters = I),
                              (S.sendEncodingParameters = E),
                              (S.recvEncodingParameters = R),
                              u._transceive(u.transceivers[c], !1, N);
                          }
                        }
                      }),
                      void 0 === u._dtlsRole && (u._dtlsRole = "offer" === i.type ? "active" : "passive"),
                      (u._remoteDescription = { type: i.type, sdp: i.sdp }),
                      "offer" === i.type
                        ? u._updateSignalingState("have-remote-offer")
                        : u._updateSignalingState("stable"),
                      Object.keys(d).forEach(function (t) {
                        var r = d[t];
                        if (r.getTracks().length) {
                          if (-1 === u.remoteStreams.indexOf(r)) {
                            u.remoteStreams.push(r);
                            var n = new Event("addstream");
                            (n.stream = r),
                              e.setTimeout(function () {
                                u._dispatchEvent("addstream", n);
                              });
                          }
                          l.forEach(function (e) {
                            var t = e[0],
                              n = e[1];
                            r.id === e[2].id && p(u, t, n, [r]);
                          });
                        }
                      }),
                      l.forEach(function (e) {
                        e[2] || p(u, e[0], e[1], []);
                      }),
                      e.setTimeout(function () {
                        u &&
                          u.transceivers &&
                          u.transceivers.forEach(function (e) {
                            e.iceTransport &&
                              "new" === e.iceTransport.state &&
                              e.iceTransport.getRemoteCandidates().length > 0 &&
                              (console.warn(
                                "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
                              ),
                              e.iceTransport.addRemoteCandidate({}));
                          });
                      }, 4e3),
                      Promise.resolve()
                    );
                  }),
                  (u.prototype.close = function () {
                    this.transceivers.forEach(function (e) {
                      e.iceTransport && e.iceTransport.stop(),
                        e.dtlsTransport && e.dtlsTransport.stop(),
                        e.rtpSender && e.rtpSender.stop(),
                        e.rtpReceiver && e.rtpReceiver.stop();
                    }),
                      (this._isClosed = !0),
                      this._updateSignalingState("closed");
                  }),
                  (u.prototype._updateSignalingState = function (e) {
                    this.signalingState = e;
                    var t = new Event("signalingstatechange");
                    this._dispatchEvent("signalingstatechange", t);
                  }),
                  (u.prototype._maybeFireNegotiationNeeded = function () {
                    var t = this;
                    "stable" === this.signalingState &&
                      !0 !== this.needNegotiation &&
                      ((this.needNegotiation = !0),
                      e.setTimeout(function () {
                        if (t.needNegotiation) {
                          t.needNegotiation = !1;
                          var e = new Event("negotiationneeded");
                          t._dispatchEvent("negotiationneeded", e);
                        }
                      }, 0));
                  }),
                  (u.prototype._updateIceConnectionState = function () {
                    var e,
                      t = { new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
                    if (
                      (this.transceivers.forEach(function (e) {
                        e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
                      }),
                      (e = "new"),
                      t.failed > 0
                        ? (e = "failed")
                        : t.checking > 0
                        ? (e = "checking")
                        : t.disconnected > 0
                        ? (e = "disconnected")
                        : t.new > 0
                        ? (e = "new")
                        : t.connected > 0
                        ? (e = "connected")
                        : t.completed > 0 && (e = "completed"),
                      e !== this.iceConnectionState)
                    ) {
                      this.iceConnectionState = e;
                      var r = new Event("iceconnectionstatechange");
                      this._dispatchEvent("iceconnectionstatechange", r);
                    }
                  }),
                  (u.prototype._updateConnectionState = function () {
                    var e,
                      t = { new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
                    if (
                      (this.transceivers.forEach(function (e) {
                        e.iceTransport &&
                          e.dtlsTransport &&
                          !e.rejected &&
                          (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
                      }),
                      (t.connected += t.completed),
                      (e = "new"),
                      t.failed > 0
                        ? (e = "failed")
                        : t.connecting > 0
                        ? (e = "connecting")
                        : t.disconnected > 0
                        ? (e = "disconnected")
                        : t.new > 0
                        ? (e = "new")
                        : t.connected > 0 && (e = "connected"),
                      e !== this.connectionState)
                    ) {
                      this.connectionState = e;
                      var r = new Event("connectionstatechange");
                      this._dispatchEvent("connectionstatechange", r);
                    }
                  }),
                  (u.prototype.createOffer = function () {
                    var r = this;
                    if (r._isClosed)
                      return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
                    var o = r.transceivers.filter(function (e) {
                        return "audio" === e.kind;
                      }).length,
                      a = r.transceivers.filter(function (e) {
                        return "video" === e.kind;
                      }).length,
                      s = arguments[0];
                    if (s) {
                      if (s.mandatory || s.optional)
                        throw new TypeError("Legacy mandatory/optional constraints not supported.");
                      void 0 !== s.offerToReceiveAudio &&
                        (o =
                          !0 === s.offerToReceiveAudio ? 1 : !1 === s.offerToReceiveAudio ? 0 : s.offerToReceiveAudio),
                        void 0 !== s.offerToReceiveVideo &&
                          (a =
                            !0 === s.offerToReceiveVideo
                              ? 1
                              : !1 === s.offerToReceiveVideo
                              ? 0
                              : s.offerToReceiveVideo);
                    }
                    for (
                      r.transceivers.forEach(function (e) {
                        "audio" === e.kind
                          ? --o < 0 && (e.wantReceive = !1)
                          : "video" === e.kind && --a < 0 && (e.wantReceive = !1);
                      });
                      o > 0 || a > 0;

                    )
                      o > 0 && (r._createTransceiver("audio"), o--), a > 0 && (r._createTransceiver("video"), a--);
                    var p = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                    r.transceivers.forEach(function (i, o) {
                      var a = i.track,
                        s = i.kind,
                        c = i.mid || n.generateIdentifier();
                      (i.mid = c), i.iceGatherer || (i.iceGatherer = r._createIceGatherer(o, r.usingBundle));
                      var p = e.RTCRtpSender.getCapabilities(s);
                      t < 15019 &&
                        (p.codecs = p.codecs.filter(function (e) {
                          return "rtx" !== e.name;
                        })),
                        p.codecs.forEach(function (e) {
                          "H264" === e.name &&
                            void 0 === e.parameters["level-asymmetry-allowed"] &&
                            (e.parameters["level-asymmetry-allowed"] = "1"),
                            i.remoteCapabilities &&
                              i.remoteCapabilities.codecs &&
                              i.remoteCapabilities.codecs.forEach(function (t) {
                                e.name.toLowerCase() === t.name.toLowerCase() &&
                                  e.clockRate === t.clockRate &&
                                  (e.preferredPayloadType = t.payloadType);
                              });
                        }),
                        p.headerExtensions.forEach(function (e) {
                          ((i.remoteCapabilities && i.remoteCapabilities.headerExtensions) || []).forEach(function (t) {
                            e.uri === t.uri && (e.id = t.id);
                          });
                        });
                      var u = i.sendEncodingParameters || [{ ssrc: 1001 * (2 * o + 1) }];
                      a && t >= 15019 && "video" === s && !u[0].rtx && (u[0].rtx = { ssrc: u[0].ssrc + 1 }),
                        i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)),
                        (i.localCapabilities = p),
                        (i.sendEncodingParameters = u);
                    }),
                      "max-compat" !== r._config.bundlePolicy &&
                        (p +=
                          "a=group:BUNDLE " +
                          r.transceivers
                            .map(function (e) {
                              return e.mid;
                            })
                            .join(" ") +
                          "\r\n"),
                      (p += "a=ice-options:trickle\r\n"),
                      r.transceivers.forEach(function (e, t) {
                        (p += i(e, e.localCapabilities, "offer", e.stream, r._dtlsRole)),
                          (p += "a=rtcp-rsize\r\n"),
                          !e.iceGatherer ||
                            "new" === r.iceGatheringState ||
                            (0 !== t && r.usingBundle) ||
                            (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                              (e.component = 1), (p += "a=" + n.writeCandidate(e) + "\r\n");
                            }),
                            "completed" === e.iceGatherer.state && (p += "a=end-of-candidates\r\n"));
                      });
                    var u = new e.RTCSessionDescription({ type: "offer", sdp: p });
                    return Promise.resolve(u);
                  }),
                  (u.prototype.createAnswer = function () {
                    var r = this;
                    if (r._isClosed)
                      return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
                    if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState)
                      return Promise.reject(
                        c("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState)
                      );
                    var a = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                    r.usingBundle &&
                      (a +=
                        "a=group:BUNDLE " +
                        r.transceivers
                          .map(function (e) {
                            return e.mid;
                          })
                          .join(" ") +
                        "\r\n"),
                      (a += "a=ice-options:trickle\r\n");
                    var s = n.getMediaSections(r._remoteDescription.sdp).length;
                    r.transceivers.forEach(function (e, n) {
                      if (!(n + 1 > s)) {
                        if (e.rejected)
                          return (
                            "application" === e.kind
                              ? "DTLS/SCTP" === e.protocol
                                ? (a += "m=application 0 DTLS/SCTP 5000\r\n")
                                : (a += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n")
                              : "audio" === e.kind
                              ? (a += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                              : "video" === e.kind &&
                                (a += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                            void (a += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n")
                          );
                        var c;
                        e.stream &&
                          ("audio" === e.kind
                            ? (c = e.stream.getAudioTracks()[0])
                            : "video" === e.kind && (c = e.stream.getVideoTracks()[0]),
                          c &&
                            t >= 15019 &&
                            "video" === e.kind &&
                            !e.sendEncodingParameters[0].rtx &&
                            (e.sendEncodingParameters[0].rtx = { ssrc: e.sendEncodingParameters[0].ssrc + 1 }));
                        var p = o(e.localCapabilities, e.remoteCapabilities);
                        !p.codecs.filter(function (e) {
                          return "rtx" === e.name.toLowerCase();
                        }).length &&
                          e.sendEncodingParameters[0].rtx &&
                          delete e.sendEncodingParameters[0].rtx,
                          (a += i(e, p, "answer", e.stream, r._dtlsRole)),
                          e.rtcpParameters && e.rtcpParameters.reducedSize && (a += "a=rtcp-rsize\r\n");
                      }
                    });
                    var p = new e.RTCSessionDescription({ type: "answer", sdp: a });
                    return Promise.resolve(p);
                  }),
                  (u.prototype.addIceCandidate = function (e) {
                    var t,
                      r = this;
                    return e && void 0 === e.sdpMLineIndex && !e.sdpMid
                      ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"))
                      : new Promise(function (i, o) {
                          if (!r._remoteDescription)
                            return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                          if (e && "" !== e.candidate) {
                            var a = e.sdpMLineIndex;
                            if (e.sdpMid)
                              for (var p = 0; p < r.transceivers.length; p++)
                                if (r.transceivers[p].mid === e.sdpMid) {
                                  a = p;
                                  break;
                                }
                            var u = r.transceivers[a];
                            if (!u) return o(c("OperationError", "Can not add ICE candidate"));
                            if (u.rejected) return i();
                            var d = Object.keys(e.candidate).length > 0 ? n.parseCandidate(e.candidate) : {};
                            if ("tcp" === d.protocol && (0 === d.port || 9 === d.port)) return i();
                            if (d.component && 1 !== d.component) return i();
                            if (
                              (0 === a || (a > 0 && u.iceTransport !== r.transceivers[0].iceTransport)) &&
                              !s(u.iceTransport, d)
                            )
                              return o(c("OperationError", "Can not add ICE candidate"));
                            var l = e.candidate.trim();
                            0 === l.indexOf("a=") && (l = l.substr(2)),
                              ((t = n.getMediaSections(r._remoteDescription.sdp))[a] +=
                                "a=" + (d.type ? l : "end-of-candidates") + "\r\n"),
                              (r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join(""));
                          } else for (var f = 0; f < r.transceivers.length && (r.transceivers[f].rejected || (r.transceivers[f].iceTransport.addRemoteCandidate({}), ((t = n.getMediaSections(r._remoteDescription.sdp))[f] += "a=end-of-candidates\r\n"), (r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("")), !r.usingBundle)); f++);
                          i();
                        });
                  }),
                  (u.prototype.getStats = function (t) {
                    if (t && t instanceof e.MediaStreamTrack) {
                      var r = null;
                      if (
                        (this.transceivers.forEach(function (e) {
                          e.rtpSender && e.rtpSender.track === t
                            ? (r = e.rtpSender)
                            : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver);
                        }),
                        !r)
                      )
                        throw c("InvalidAccessError", "Invalid selector.");
                      return r.getStats();
                    }
                    var n = [];
                    return (
                      this.transceivers.forEach(function (e) {
                        ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (
                          t
                        ) {
                          e[t] && n.push(e[t].getStats());
                        });
                      }),
                      Promise.all(n).then(function (e) {
                        var t = new Map();
                        return (
                          e.forEach(function (e) {
                            e.forEach(function (e) {
                              t.set(e.id, e);
                            });
                          }),
                          t
                        );
                      })
                    );
                  }),
                  ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(
                    function (t) {
                      var r = e[t];
                      if (r && r.prototype && r.prototype.getStats) {
                        var n = r.prototype.getStats;
                        r.prototype.getStats = function () {
                          return n.apply(this).then(function (e) {
                            var t = new Map();
                            return (
                              Object.keys(e).forEach(function (r) {
                                (e[r].type = (function (e) {
                                  return (
                                    {
                                      inboundrtp: "inbound-rtp",
                                      outboundrtp: "outbound-rtp",
                                      candidatepair: "candidate-pair",
                                      localcandidate: "local-candidate",
                                      remotecandidate: "remote-candidate",
                                    }[e.type] || e.type
                                  );
                                })(e[r])),
                                  t.set(r, e[r]);
                              }),
                              t
                            );
                          });
                        };
                      }
                    }
                  );
                var d = ["createOffer", "createAnswer"];
                return (
                  d.forEach(function (e) {
                    var t = u.prototype[e];
                    u.prototype[e] = function () {
                      var e = arguments;
                      return "function" == typeof e[0] || "function" == typeof e[1]
                        ? t.apply(this, [arguments[2]]).then(
                            function (t) {
                              "function" == typeof e[0] && e[0].apply(null, [t]);
                            },
                            function (t) {
                              "function" == typeof e[1] && e[1].apply(null, [t]);
                            }
                          )
                        : t.apply(this, arguments);
                    };
                  }),
                  (d = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (e) {
                    var t = u.prototype[e];
                    u.prototype[e] = function () {
                      var e = arguments;
                      return "function" == typeof e[1] || "function" == typeof e[2]
                        ? t.apply(this, arguments).then(
                            function () {
                              "function" == typeof e[1] && e[1].apply(null);
                            },
                            function (t) {
                              "function" == typeof e[2] && e[2].apply(null, [t]);
                            }
                          )
                        : t.apply(this, arguments);
                    };
                  }),
                  ["getStats"].forEach(function (e) {
                    var t = u.prototype[e];
                    u.prototype[e] = function () {
                      var e = arguments;
                      return "function" == typeof e[1]
                        ? t.apply(this, arguments).then(function () {
                            "function" == typeof e[1] && e[1].apply(null);
                          })
                        : t.apply(this, arguments);
                    };
                  }),
                  u
                );
              };
            },
            { sdp: "YHvh" },
          ],
          YdKx: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetUserMedia = function (e) {
                  var t = e && e.navigator,
                    r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                  t.mediaDevices.getUserMedia = function (e) {
                    return r(e).catch(function (e) {
                      return Promise.reject(
                        (function (e) {
                          return {
                            name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
                            message: e.message,
                            constraint: e.constraint,
                            toString: function () {
                              return this.name;
                            },
                          };
                        })(e)
                      );
                    });
                  };
                });
            },
            {},
          ],
          P3bV: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetDisplayMedia = function (e) {
                  "getDisplayMedia" in e.navigator &&
                    e.navigator.mediaDevices &&
                    ((e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
                      (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
                });
            },
            {},
          ],
          XRic: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimPeerConnection = function (e, t) {
                  if (
                    e.RTCIceGatherer &&
                    (e.RTCIceCandidate ||
                      (e.RTCIceCandidate = function (e) {
                        return e;
                      }),
                    e.RTCSessionDescription ||
                      (e.RTCSessionDescription = function (e) {
                        return e;
                      }),
                    t.version < 15025)
                  ) {
                    var r = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                    Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                      set: function (e) {
                        r.set.call(this, e);
                        var t = new Event("enabled");
                        (t.enabled = e), this.dispatchEvent(t);
                      },
                    });
                  }
                  !e.RTCRtpSender ||
                    "dtmf" in e.RTCRtpSender.prototype ||
                    Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                      get: function () {
                        return (
                          void 0 === this._dtmf &&
                            ("audio" === this.track.kind
                              ? (this._dtmf = new e.RTCDtmfSender(this))
                              : "video" === this.track.kind && (this._dtmf = null)),
                          this._dtmf
                        );
                      },
                    }),
                    e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
                  var a = (0, o.default)(e, t.version);
                  (e.RTCPeerConnection = function (e) {
                    return (
                      e &&
                        e.iceServers &&
                        ((e.iceServers = (0, i.filterIceServers)(e.iceServers, t.version)),
                        n.log("ICE servers after filtering:", e.iceServers)),
                      new a(e)
                    );
                  }),
                    (e.RTCPeerConnection.prototype = a.prototype);
                }),
                (r.shimReplaceTrack = function (e) {
                  !e.RTCRtpSender ||
                    "replaceTrack" in e.RTCRtpSender.prototype ||
                    (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
                }),
                Object.defineProperty(r, "shimGetUserMedia", {
                  enumerable: !0,
                  get: function () {
                    return a.shimGetUserMedia;
                  },
                }),
                Object.defineProperty(r, "shimGetDisplayMedia", {
                  enumerable: !0,
                  get: function () {
                    return s.shimGetDisplayMedia;
                  },
                });
              var n = (function (e) {
                  if (e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var t = c();
                  if (t && t.has(e)) return t.get(e);
                  var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                      o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                    }
                  return (r.default = e), t && t.set(e, r), r;
                })(e("../utils")),
                i = e("./filtericeservers"),
                o = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(e("rtcpeerconnection-shim")),
                a = e("./getusermedia"),
                s = e("./getdisplaymedia");
              function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (c = function () {
                    return e;
                  }),
                  e
                );
              }
            },
            {
              "../utils": "iSxC",
              "./filtericeservers": "NZ1C",
              "rtcpeerconnection-shim": "NJ2u",
              "./getusermedia": "YdKx",
              "./getdisplaymedia": "P3bV",
            },
          ],
          GzSv: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetUserMedia = function (e, t) {
                  var r = e && e.navigator,
                    i = e && e.MediaStreamTrack;
                  if (
                    ((r.getUserMedia = function (e, t, i) {
                      n.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
                        r.mediaDevices.getUserMedia(e).then(t, i);
                    }),
                    !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints()))
                  ) {
                    var a = function (e, t, r) {
                        t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                      },
                      s = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                    if (
                      ((r.mediaDevices.getUserMedia = function (e) {
                        return (
                          "object" === o(e) &&
                            "object" === o(e.audio) &&
                            ((e = JSON.parse(JSON.stringify(e))),
                            a(e.audio, "autoGainControl", "mozAutoGainControl"),
                            a(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                          s(e)
                        );
                      }),
                      i && i.prototype.getSettings)
                    ) {
                      var c = i.prototype.getSettings;
                      i.prototype.getSettings = function () {
                        var e = c.apply(this, arguments);
                        return (
                          a(e, "mozAutoGainControl", "autoGainControl"),
                          a(e, "mozNoiseSuppression", "noiseSuppression"),
                          e
                        );
                      };
                    }
                    if (i && i.prototype.applyConstraints) {
                      var p = i.prototype.applyConstraints;
                      i.prototype.applyConstraints = function (e) {
                        return (
                          "audio" === this.kind &&
                            "object" === o(e) &&
                            ((e = JSON.parse(JSON.stringify(e))),
                            a(e, "autoGainControl", "mozAutoGainControl"),
                            a(e, "noiseSuppression", "mozNoiseSuppression")),
                          p.apply(this, [e])
                        );
                      };
                    }
                  }
                });
              var n = (function (e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                  n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                  if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                  }
                return (r.default = e), t && t.set(e, r), r;
              })(e("../utils"));
              function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (i = function () {
                    return e;
                  }),
                  e
                );
              }
              function o(e) {
                return (o =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
            },
            { "../utils": "iSxC" },
          ],
          UuGU: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimGetDisplayMedia = function (e, t) {
                  (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
                    (e.navigator.mediaDevices &&
                      (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                        if (!r || !r.video) {
                          var n = new DOMException("getDisplayMedia without video constraints is undefined");
                          return (n.name = "NotFoundError"), (n.code = 8), Promise.reject(n);
                        }
                        return (
                          !0 === r.video ? (r.video = { mediaSource: t }) : (r.video.mediaSource = t),
                          e.navigator.mediaDevices.getUserMedia(r)
                        );
                      }));
                });
            },
            {},
          ],
          Fzdr: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimOnTrack = function (e) {
                  "object" === s(e) &&
                    e.RTCTrackEvent &&
                    "receiver" in e.RTCTrackEvent.prototype &&
                    !("transceiver" in e.RTCTrackEvent.prototype) &&
                    Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                      get: function () {
                        return { receiver: this.receiver };
                      },
                    });
                }),
                (r.shimPeerConnection = function (e, t) {
                  if ("object" === s(e) && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                    !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection),
                      t.version < 53 &&
                        ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                          var r = e.RTCPeerConnection.prototype[t],
                            n = (function (e, t, r) {
                              return (
                                t in e
                                  ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (e[t] = r),
                                e
                              );
                            })({}, t, function () {
                              return (
                                (arguments[0] = new ("addIceCandidate" === t
                                  ? e.RTCIceCandidate
                                  : e.RTCSessionDescription)(arguments[0])),
                                r.apply(this, arguments)
                              );
                            });
                          e.RTCPeerConnection.prototype[t] = n[t];
                        });
                    var r = {
                        inboundrtp: "inbound-rtp",
                        outboundrtp: "outbound-rtp",
                        candidatepair: "candidate-pair",
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate",
                      },
                      n = e.RTCPeerConnection.prototype.getStats;
                    e.RTCPeerConnection.prototype.getStats = function () {
                      var [e, i, o] = arguments;
                      return n
                        .apply(this, [e || null])
                        .then(function (e) {
                          if (t.version < 53 && !i)
                            try {
                              e.forEach(function (e) {
                                e.type = r[e.type] || e.type;
                              });
                            } catch (n) {
                              if ("TypeError" !== n.name) throw n;
                              e.forEach(function (t, n) {
                                e.set(n, Object.assign({}, t, { type: r[t.type] || t.type }));
                              });
                            }
                          return e;
                        })
                        .then(i, o);
                    };
                  }
                }),
                (r.shimSenderGetStats = function (e) {
                  if (
                    "object" === s(e) &&
                    e.RTCPeerConnection &&
                    e.RTCRtpSender &&
                    (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))
                  ) {
                    var t = e.RTCPeerConnection.prototype.getSenders;
                    t &&
                      (e.RTCPeerConnection.prototype.getSenders = function () {
                        var e = this,
                          r = t.apply(this, []);
                        return (
                          r.forEach(function (t) {
                            return (t._pc = e);
                          }),
                          r
                        );
                      });
                    var r = e.RTCPeerConnection.prototype.addTrack;
                    r &&
                      (e.RTCPeerConnection.prototype.addTrack = function () {
                        var e = r.apply(this, arguments);
                        return (e._pc = this), e;
                      }),
                      (e.RTCRtpSender.prototype.getStats = function () {
                        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
                      });
                  }
                }),
                (r.shimReceiverGetStats = function (e) {
                  if (
                    "object" === s(e) &&
                    e.RTCPeerConnection &&
                    e.RTCRtpSender &&
                    (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))
                  ) {
                    var t = e.RTCPeerConnection.prototype.getReceivers;
                    t &&
                      (e.RTCPeerConnection.prototype.getReceivers = function () {
                        var e = this,
                          r = t.apply(this, []);
                        return (
                          r.forEach(function (t) {
                            return (t._pc = e);
                          }),
                          r
                        );
                      }),
                      n.wrapPeerConnectionEvent(e, "track", function (e) {
                        return (e.receiver._pc = e.srcElement), e;
                      }),
                      (e.RTCRtpReceiver.prototype.getStats = function () {
                        return this._pc.getStats(this.track);
                      });
                  }
                }),
                (r.shimRemoveStream = function (e) {
                  !e.RTCPeerConnection ||
                    "removeStream" in e.RTCPeerConnection.prototype ||
                    (e.RTCPeerConnection.prototype.removeStream = function (e) {
                      var t = this;
                      n.deprecated("removeStream", "removeTrack"),
                        this.getSenders().forEach(function (r) {
                          r.track && e.getTracks().includes(r.track) && t.removeTrack(r);
                        });
                    });
                }),
                (r.shimRTCDataChannel = function (e) {
                  e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
                }),
                (r.shimAddTransceiver = function (e) {
                  if ("object" === s(e) && e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection.prototype.addTransceiver;
                    t &&
                      (e.RTCPeerConnection.prototype.addTransceiver = function () {
                        this.setParametersPromises = [];
                        var e = arguments[1],
                          r = e && "sendEncodings" in e;
                        r &&
                          e.sendEncodings.forEach(function (e) {
                            if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid))
                              throw new TypeError("Invalid RID value provided.");
                            if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1))
                              throw new RangeError("scale_resolution_down_by must be >= 1.0");
                            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
                              throw new RangeError("max_framerate must be >= 0.0");
                          });
                        var n = t.apply(this, arguments);
                        if (r) {
                          var { sender: i } = n,
                            o = i.getParameters();
                          ("encodings" in o &&
                            (1 !== o.encodings.length || 0 !== Object.keys(o.encodings[0]).length)) ||
                            ((o.encodings = e.sendEncodings),
                            (i.sendEncodings = e.sendEncodings),
                            this.setParametersPromises.push(
                              i
                                .setParameters(o)
                                .then(function () {
                                  delete i.sendEncodings;
                                })
                                .catch(function () {
                                  delete i.sendEncodings;
                                })
                            ));
                        }
                        return n;
                      });
                  }
                }),
                (r.shimGetParameters = function (e) {
                  if ("object" === s(e) && e.RTCRtpSender) {
                    var t = e.RTCRtpSender.prototype.getParameters;
                    t &&
                      (e.RTCRtpSender.prototype.getParameters = function () {
                        var e = t.apply(this, arguments);
                        return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
                      });
                  }
                }),
                (r.shimCreateOffer = function (e) {
                  if ("object" === s(e) && e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection.prototype.createOffer;
                    e.RTCPeerConnection.prototype.createOffer = function () {
                      var e = arguments,
                        r = this;
                      return this.setParametersPromises && this.setParametersPromises.length
                        ? Promise.all(this.setParametersPromises)
                            .then(function () {
                              return t.apply(r, e);
                            })
                            .finally(function () {
                              r.setParametersPromises = [];
                            })
                        : t.apply(this, arguments);
                    };
                  }
                }),
                (r.shimCreateAnswer = function (e) {
                  if ("object" === s(e) && e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection.prototype.createAnswer;
                    e.RTCPeerConnection.prototype.createAnswer = function () {
                      var e = arguments,
                        r = this;
                      return this.setParametersPromises && this.setParametersPromises.length
                        ? Promise.all(this.setParametersPromises)
                            .then(function () {
                              return t.apply(r, e);
                            })
                            .finally(function () {
                              r.setParametersPromises = [];
                            })
                        : t.apply(this, arguments);
                    };
                  }
                }),
                Object.defineProperty(r, "shimGetUserMedia", {
                  enumerable: !0,
                  get: function () {
                    return i.shimGetUserMedia;
                  },
                }),
                Object.defineProperty(r, "shimGetDisplayMedia", {
                  enumerable: !0,
                  get: function () {
                    return o.shimGetDisplayMedia;
                  },
                });
              var n = (function (e) {
                  if (e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var t = a();
                  if (t && t.has(e)) return t.get(e);
                  var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                      o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                    }
                  return (r.default = e), t && t.set(e, r), r;
                })(e("../utils")),
                i = e("./getusermedia"),
                o = e("./getdisplaymedia");
              function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (a = function () {
                    return e;
                  }),
                  e
                );
              }
              function s(e) {
                return (s =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
            },
            { "../utils": "iSxC", "./getusermedia": "GzSv", "./getdisplaymedia": "UuGU" },
          ],
          t1lL: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimLocalStreamsAPI = function (e) {
                  if ("object" === o(e) && e.RTCPeerConnection) {
                    if (
                      ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                        (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                          return this._localStreams || (this._localStreams = []), this._localStreams;
                        }),
                      !("addStream" in e.RTCPeerConnection.prototype))
                    ) {
                      var t = e.RTCPeerConnection.prototype.addTrack;
                      (e.RTCPeerConnection.prototype.addStream = function (e) {
                        var r = this;
                        this._localStreams || (this._localStreams = []),
                          this._localStreams.includes(e) || this._localStreams.push(e),
                          e.getAudioTracks().forEach(function (n) {
                            return t.call(r, n, e);
                          }),
                          e.getVideoTracks().forEach(function (n) {
                            return t.call(r, n, e);
                          });
                      }),
                        (e.RTCPeerConnection.prototype.addTrack = function (e) {
                          for (var r = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            i[o - 1] = arguments[o];
                          return (
                            i &&
                              i.forEach(function (e) {
                                r._localStreams
                                  ? r._localStreams.includes(e) || r._localStreams.push(e)
                                  : (r._localStreams = [e]);
                              }),
                            t.apply(this, arguments)
                          );
                        });
                    }
                    "removeStream" in e.RTCPeerConnection.prototype ||
                      (e.RTCPeerConnection.prototype.removeStream = function (e) {
                        var t = this;
                        this._localStreams || (this._localStreams = []);
                        var r = this._localStreams.indexOf(e);
                        if (-1 !== r) {
                          this._localStreams.splice(r, 1);
                          var n = e.getTracks();
                          this.getSenders().forEach(function (e) {
                            n.includes(e.track) && t.removeTrack(e);
                          });
                        }
                      });
                  }
                }),
                (r.shimRemoteStreamsAPI = function (e) {
                  if (
                    "object" === o(e) &&
                    e.RTCPeerConnection &&
                    ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
                      (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                        return this._remoteStreams ? this._remoteStreams : [];
                      }),
                    !("onaddstream" in e.RTCPeerConnection.prototype))
                  ) {
                    Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                      get: function () {
                        return this._onaddstream;
                      },
                      set: function (e) {
                        var t = this;
                        this._onaddstream &&
                          (this.removeEventListener("addstream", this._onaddstream),
                          this.removeEventListener("track", this._onaddstreampoly)),
                          this.addEventListener("addstream", (this._onaddstream = e)),
                          this.addEventListener(
                            "track",
                            (this._onaddstreampoly = function (e) {
                              e.streams.forEach(function (e) {
                                if ((t._remoteStreams || (t._remoteStreams = []), !t._remoteStreams.includes(e))) {
                                  t._remoteStreams.push(e);
                                  var r = new Event("addstream");
                                  (r.stream = e), t.dispatchEvent(r);
                                }
                              });
                            })
                          );
                      },
                    });
                    var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                      var e = this;
                      return (
                        this._onaddstreampoly ||
                          this.addEventListener(
                            "track",
                            (this._onaddstreampoly = function (t) {
                              t.streams.forEach(function (t) {
                                if (
                                  (e._remoteStreams || (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0))
                                ) {
                                  e._remoteStreams.push(t);
                                  var r = new Event("addstream");
                                  (r.stream = t), e.dispatchEvent(r);
                                }
                              });
                            })
                          ),
                        t.apply(e, arguments)
                      );
                    };
                  }
                }),
                (r.shimCallbacksAPI = function (e) {
                  if ("object" === o(e) && e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection.prototype,
                      r = t.createOffer,
                      n = t.createAnswer,
                      i = t.setLocalDescription,
                      a = t.setRemoteDescription,
                      s = t.addIceCandidate;
                    (t.createOffer = function (e, t) {
                      var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                        i = r.apply(this, [n]);
                      return t ? (i.then(e, t), Promise.resolve()) : i;
                    }),
                      (t.createAnswer = function (e, t) {
                        var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                          i = n.apply(this, [r]);
                        return t ? (i.then(e, t), Promise.resolve()) : i;
                      });
                    var c = function (e, t, r) {
                      var n = i.apply(this, [e]);
                      return r ? (n.then(t, r), Promise.resolve()) : n;
                    };
                    (t.setLocalDescription = c),
                      (c = function (e, t, r) {
                        var n = a.apply(this, [e]);
                        return r ? (n.then(t, r), Promise.resolve()) : n;
                      }),
                      (t.setRemoteDescription = c),
                      (c = function (e, t, r) {
                        var n = s.apply(this, [e]);
                        return r ? (n.then(t, r), Promise.resolve()) : n;
                      }),
                      (t.addIceCandidate = c);
                  }
                }),
                (r.shimGetUserMedia = function (e) {
                  var t = e && e.navigator;
                  if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                    var r = t.mediaDevices,
                      n = r.getUserMedia.bind(r);
                    t.mediaDevices.getUserMedia = function (e) {
                      return n(a(e));
                    };
                  }
                  !t.getUserMedia &&
                    t.mediaDevices &&
                    t.mediaDevices.getUserMedia &&
                    (t.getUserMedia = function (e, r, n) {
                      t.mediaDevices.getUserMedia(e).then(r, n);
                    }.bind(t));
                }),
                (r.shimConstraints = a),
                (r.shimRTCIceServerUrls = function (e) {
                  if (e.RTCPeerConnection) {
                    var t = e.RTCPeerConnection;
                    (e.RTCPeerConnection = function (e, r) {
                      if (e && e.iceServers) {
                        for (var i = [], o = 0; o < e.iceServers.length; o++) {
                          var a = e.iceServers[o];
                          !a.hasOwnProperty("urls") && a.hasOwnProperty("url")
                            ? (n.deprecated("RTCIceServer.url", "RTCIceServer.urls"),
                              ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                              delete a.url,
                              i.push(a))
                            : i.push(e.iceServers[o]);
                        }
                        e.iceServers = i;
                      }
                      return new t(e, r);
                    }),
                      (e.RTCPeerConnection.prototype = t.prototype),
                      "generateCertificate" in t &&
                        Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                          get: function () {
                            return t.generateCertificate;
                          },
                        });
                  }
                }),
                (r.shimTrackEventTransceiver = function (e) {
                  "object" === o(e) &&
                    e.RTCTrackEvent &&
                    "receiver" in e.RTCTrackEvent.prototype &&
                    !("transceiver" in e.RTCTrackEvent.prototype) &&
                    Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                      get: function () {
                        return { receiver: this.receiver };
                      },
                    });
                }),
                (r.shimCreateOfferLegacy = function (e) {
                  var t = e.RTCPeerConnection.prototype.createOffer;
                  e.RTCPeerConnection.prototype.createOffer = function (e) {
                    if (e) {
                      void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                      var r = this.getTransceivers().find(function (e) {
                        return "audio" === e.receiver.track.kind;
                      });
                      !1 === e.offerToReceiveAudio && r
                        ? "sendrecv" === r.direction
                          ? r.setDirection
                            ? r.setDirection("sendonly")
                            : (r.direction = "sendonly")
                          : "recvonly" === r.direction &&
                            (r.setDirection ? r.setDirection("inactive") : (r.direction = "inactive"))
                        : !0 !== e.offerToReceiveAudio || r || this.addTransceiver("audio"),
                        void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                      var n = this.getTransceivers().find(function (e) {
                        return "video" === e.receiver.track.kind;
                      });
                      !1 === e.offerToReceiveVideo && n
                        ? "sendrecv" === n.direction
                          ? n.setDirection
                            ? n.setDirection("sendonly")
                            : (n.direction = "sendonly")
                          : "recvonly" === n.direction &&
                            (n.setDirection ? n.setDirection("inactive") : (n.direction = "inactive"))
                        : !0 !== e.offerToReceiveVideo || n || this.addTransceiver("video");
                    }
                    return t.apply(this, arguments);
                  };
                }),
                (r.shimAudioContext = function (e) {
                  "object" !== o(e) || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
                });
              var n = (function (e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                  n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                  if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                  }
                return (r.default = e), t && t.set(e, r), r;
              })(e("../utils"));
              function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (i = function () {
                    return e;
                  }),
                  e
                );
              }
              function o(e) {
                return (o =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function a(e) {
                return e && void 0 !== e.video ? Object.assign({}, e, { video: n.compactObject(e.video) }) : e;
              }
            },
            { "../utils": "iSxC" },
          ],
          GOQK: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.shimRTCIceCandidate = function (e) {
                  if (e.RTCIceCandidate && (!e.RTCIceCandidate || !("foundation" in e.RTCIceCandidate.prototype))) {
                    var t = e.RTCIceCandidate;
                    (e.RTCIceCandidate = function (e) {
                      if (
                        ("object" === a(e) &&
                          e.candidate &&
                          0 === e.candidate.indexOf("a=") &&
                          ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)),
                        e.candidate && e.candidate.length)
                      ) {
                        var r = new t(e),
                          i = n.default.parseCandidate(e.candidate),
                          o = Object.assign(r, i);
                        return (
                          (o.toJSON = function () {
                            return {
                              candidate: o.candidate,
                              sdpMid: o.sdpMid,
                              sdpMLineIndex: o.sdpMLineIndex,
                              usernameFragment: o.usernameFragment,
                            };
                          }),
                          o
                        );
                      }
                      return new t(e);
                    }),
                      (e.RTCIceCandidate.prototype = t.prototype),
                      i.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                        return (
                          t.candidate &&
                            Object.defineProperty(t, "candidate", {
                              value: new e.RTCIceCandidate(t.candidate),
                              writable: "false",
                            }),
                          t
                        );
                      });
                  }
                }),
                (r.shimMaxMessageSize = function (e, t) {
                  if (e.RTCPeerConnection) {
                    "sctp" in e.RTCPeerConnection.prototype ||
                      Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                        get: function () {
                          return void 0 === this._sctp ? null : this._sctp;
                        },
                      });
                    var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                      if (((this._sctp = null), "chrome" === t.browser && t.version >= 76)) {
                        var { sdpSemantics: e } = this.getConfiguration();
                        "plan-b" === e &&
                          Object.defineProperty(this, "sctp", {
                            get: function () {
                              return void 0 === this._sctp ? null : this._sctp;
                            },
                            enumerable: !0,
                            configurable: !0,
                          });
                      }
                      if (
                        (function (e) {
                          if (!e || !e.sdp) return !1;
                          var t = n.default.splitSections(e.sdp);
                          return (
                            t.shift(),
                            t.some(function (e) {
                              var t = n.default.parseMLine(e);
                              return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
                            })
                          );
                        })(arguments[0])
                      ) {
                        var i,
                          o = (function (e) {
                            var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                            if (null === t || t.length < 2) return -1;
                            var r = parseInt(t[1], 10);
                            return r != r ? -1 : r;
                          })(arguments[0]),
                          a =
                            ((p = o),
                            (u = 65536),
                            "firefox" === t.browser &&
                              (u =
                                t.version < 57
                                  ? -1 === p
                                    ? 16384
                                    : 2147483637
                                  : t.version < 60
                                  ? 57 === t.version
                                    ? 65535
                                    : 65536
                                  : 2147483637),
                            u),
                          s = (function (e, r) {
                            var i = 65536;
                            "firefox" === t.browser && 57 === t.version && (i = 65535);
                            var o = n.default.matchPrefix(e.sdp, "a=max-message-size:");
                            return (
                              o.length > 0
                                ? (i = parseInt(o[0].substr(19), 10))
                                : "firefox" === t.browser && -1 !== r && (i = 2147483637),
                              i
                            );
                          })(arguments[0], o);
                        i =
                          0 === a && 0 === s
                            ? Number.POSITIVE_INFINITY
                            : 0 === a || 0 === s
                            ? Math.max(a, s)
                            : Math.min(a, s);
                        var c = {};
                        Object.defineProperty(c, "maxMessageSize", {
                          get: function () {
                            return i;
                          },
                        }),
                          (this._sctp = c);
                      }
                      var p, u;
                      return r.apply(this, arguments);
                    };
                  }
                }),
                (r.shimSendThrowTypeError = function (e) {
                  if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
                    var t = e.RTCPeerConnection.prototype.createDataChannel;
                    (e.RTCPeerConnection.prototype.createDataChannel = function () {
                      var e = t.apply(this, arguments);
                      return r(e, this), e;
                    }),
                      i.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                        return r(e.channel, e.target), e;
                      });
                  }
                  function r(e, t) {
                    var r = e.send;
                    e.send = function () {
                      var n = arguments[0],
                        i = n.length || n.size || n.byteLength;
                      if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize)
                        throw new TypeError(
                          "Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)"
                        );
                      return r.apply(e, arguments);
                    };
                  }
                }),
                (r.shimConnectionState = function (e) {
                  if (e.RTCPeerConnection && !("connectionState" in e.RTCPeerConnection.prototype)) {
                    var t = e.RTCPeerConnection.prototype;
                    Object.defineProperty(t, "connectionState", {
                      get: function () {
                        return (
                          { completed: "connected", checking: "connecting" }[this.iceConnectionState] ||
                          this.iceConnectionState
                        );
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                      Object.defineProperty(t, "onconnectionstatechange", {
                        get: function () {
                          return this._onconnectionstatechange || null;
                        },
                        set: function (e) {
                          this._onconnectionstatechange &&
                            (this.removeEventListener("connectionstatechange", this._onconnectionstatechange),
                            delete this._onconnectionstatechange),
                            e && this.addEventListener("connectionstatechange", (this._onconnectionstatechange = e));
                        },
                        enumerable: !0,
                        configurable: !0,
                      }),
                      ["setLocalDescription", "setRemoteDescription"].forEach(function (e) {
                        var r = t[e];
                        t[e] = function () {
                          return (
                            this._connectionstatechangepoly ||
                              ((this._connectionstatechangepoly = function (e) {
                                var t = e.target;
                                if (t._lastConnectionState !== t.connectionState) {
                                  t._lastConnectionState = t.connectionState;
                                  var r = new Event("connectionstatechange", e);
                                  t.dispatchEvent(r);
                                }
                                return e;
                              }),
                              this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)),
                            r.apply(this, arguments)
                          );
                        };
                      });
                  }
                }),
                (r.removeExtmapAllowMixed = function (e, t) {
                  if (
                    e.RTCPeerConnection &&
                    !(("chrome" === t.browser && t.version >= 71) || ("safari" === t.browser && t.version >= 605))
                  ) {
                    var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
                      if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
                        var n = t.sdp
                          .split("\n")
                          .filter(function (e) {
                            return "a=extmap-allow-mixed" !== e.trim();
                          })
                          .join("\n");
                        e.RTCSessionDescription && t instanceof e.RTCSessionDescription
                          ? (arguments[0] = new e.RTCSessionDescription({ type: t.type, sdp: n }))
                          : (t.sdp = n);
                      }
                      return r.apply(this, arguments);
                    };
                  }
                }),
                (r.shimAddIceCandidateNullOrEmpty = function (e, t) {
                  if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                    var r = e.RTCPeerConnection.prototype.addIceCandidate;
                    r &&
                      0 !== r.length &&
                      (e.RTCPeerConnection.prototype.addIceCandidate = function () {
                        return arguments[0]
                          ? (("chrome" === t.browser && t.version < 78) ||
                              ("firefox" === t.browser && t.version < 68) ||
                              "safari" === t.browser) &&
                            arguments[0] &&
                            "" === arguments[0].candidate
                            ? Promise.resolve()
                            : r.apply(this, arguments)
                          : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                      });
                  }
                });
              var n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(e("sdp")),
                i = (function (e) {
                  if (e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var t = o();
                  if (t && t.has(e)) return t.get(e);
                  var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
                    }
                  return (r.default = e), t && t.set(e, r), r;
                })(e("./utils"));
              function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (o = function () {
                    return e;
                  }),
                  e
                );
              }
              function a(e) {
                return (a =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
            },
            { sdp: "YHvh", "./utils": "iSxC" },
          ],
          KtlG: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.adapterFactory = function () {
                  var { window: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 },
                    r = n.log,
                    p = n.detectBrowser(e),
                    u = {
                      browserDetails: p,
                      commonShim: c,
                      extractVersion: n.extractVersion,
                      disableLog: n.disableLog,
                      disableWarnings: n.disableWarnings,
                    };
                  switch (p.browser) {
                    case "chrome":
                      if (!i || !i.shimPeerConnection || !t.shimChrome)
                        return r("Chrome shim is not included in this adapter release."), u;
                      if (null === p.version) return r("Chrome shim can not determine version, not shimming."), u;
                      r("adapter.js shimming chrome."),
                        (u.browserShim = i),
                        c.shimAddIceCandidateNullOrEmpty(e, p),
                        i.shimGetUserMedia(e, p),
                        i.shimMediaStream(e, p),
                        i.shimPeerConnection(e, p),
                        i.shimOnTrack(e, p),
                        i.shimAddTrackRemoveTrack(e, p),
                        i.shimGetSendersWithDtmf(e, p),
                        i.shimGetStats(e, p),
                        i.shimSenderReceiverGetStats(e, p),
                        i.fixNegotiationNeeded(e, p),
                        c.shimRTCIceCandidate(e, p),
                        c.shimConnectionState(e, p),
                        c.shimMaxMessageSize(e, p),
                        c.shimSendThrowTypeError(e, p),
                        c.removeExtmapAllowMixed(e, p);
                      break;
                    case "firefox":
                      if (!a || !a.shimPeerConnection || !t.shimFirefox)
                        return r("Firefox shim is not included in this adapter release."), u;
                      r("adapter.js shimming firefox."),
                        (u.browserShim = a),
                        c.shimAddIceCandidateNullOrEmpty(e, p),
                        a.shimGetUserMedia(e, p),
                        a.shimPeerConnection(e, p),
                        a.shimOnTrack(e, p),
                        a.shimRemoveStream(e, p),
                        a.shimSenderGetStats(e, p),
                        a.shimReceiverGetStats(e, p),
                        a.shimRTCDataChannel(e, p),
                        a.shimAddTransceiver(e, p),
                        a.shimGetParameters(e, p),
                        a.shimCreateOffer(e, p),
                        a.shimCreateAnswer(e, p),
                        c.shimRTCIceCandidate(e, p),
                        c.shimConnectionState(e, p),
                        c.shimMaxMessageSize(e, p),
                        c.shimSendThrowTypeError(e, p);
                      break;
                    case "edge":
                      if (!o || !o.shimPeerConnection || !t.shimEdge)
                        return r("MS edge shim is not included in this adapter release."), u;
                      r("adapter.js shimming edge."),
                        (u.browserShim = o),
                        o.shimGetUserMedia(e, p),
                        o.shimGetDisplayMedia(e, p),
                        o.shimPeerConnection(e, p),
                        o.shimReplaceTrack(e, p),
                        c.shimMaxMessageSize(e, p),
                        c.shimSendThrowTypeError(e, p);
                      break;
                    case "safari":
                      if (!s || !t.shimSafari) return r("Safari shim is not included in this adapter release."), u;
                      r("adapter.js shimming safari."),
                        (u.browserShim = s),
                        c.shimAddIceCandidateNullOrEmpty(e, p),
                        s.shimRTCIceServerUrls(e, p),
                        s.shimCreateOfferLegacy(e, p),
                        s.shimCallbacksAPI(e, p),
                        s.shimLocalStreamsAPI(e, p),
                        s.shimRemoteStreamsAPI(e, p),
                        s.shimTrackEventTransceiver(e, p),
                        s.shimGetUserMedia(e, p),
                        s.shimAudioContext(e, p),
                        c.shimRTCIceCandidate(e, p),
                        c.shimMaxMessageSize(e, p),
                        c.shimSendThrowTypeError(e, p),
                        c.removeExtmapAllowMixed(e, p);
                      break;
                    default:
                      r("Unsupported browser!");
                  }
                  return u;
                });
              var n = u(e("./utils")),
                i = u(e("./chrome/chrome_shim")),
                o = u(e("./edge/edge_shim")),
                a = u(e("./firefox/firefox_shim")),
                s = u(e("./safari/safari_shim")),
                c = u(e("./common_shim"));
              function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                  (p = function () {
                    return e;
                  }),
                  e
                );
              }
              function u(e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                  n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                  if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                  }
                return (r.default = e), t && t.set(e, r), r;
              }
            },
            {
              "./utils": "iSxC",
              "./chrome/chrome_shim": "uI5X",
              "./edge/edge_shim": "XRic",
              "./firefox/firefox_shim": "Fzdr",
              "./safari/safari_shim": "t1lL",
              "./common_shim": "GOQK",
            },
          ],
          tI1X: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
              var n = (0, e("./adapter_factory.js").adapterFactory)({
                window: "undefined" == typeof window ? void 0 : window,
              });
              r.default = n;
            },
            { "./adapter_factory.js": "KtlG" },
          ],
          sXtV: [
            function (e, t, r) {
              "use strict";
              var n =
                (this && this.__importDefault) ||
                function (e) {
                  return e && e.__esModule ? e : { default: e };
                };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.webRTCAdapter = void 0);
              var i = n(e("webrtc-adapter"));
              r.webRTCAdapter = i.default;
            },
            { "webrtc-adapter": "tI1X" },
          ],
          I31f: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.Supports = void 0);
              var n = e("./adapter");
              r.Supports = new ((function () {
                function e() {
                  (this.isIOS = ["iPad", "iPhone", "iPod"].includes(navigator.platform)),
                    (this.supportedBrowsers = ["firefox", "chrome", "safari"]),
                    (this.minFirefoxVersion = 59),
                    (this.minChromeVersion = 72),
                    (this.minSafariVersion = 605);
                }
                return (
                  (e.prototype.isWebRTCSupported = function () {
                    return "undefined" != typeof RTCPeerConnection;
                  }),
                  (e.prototype.isBrowserSupported = function () {
                    var e = this.getBrowser(),
                      t = this.getVersion();
                    return (
                      !!this.supportedBrowsers.includes(e) &&
                      ("chrome" === e
                        ? t >= this.minChromeVersion
                        : "firefox" === e
                        ? t >= this.minFirefoxVersion
                        : "safari" === e && !this.isIOS && t >= this.minSafariVersion)
                    );
                  }),
                  (e.prototype.getBrowser = function () {
                    return n.webRTCAdapter.browserDetails.browser;
                  }),
                  (e.prototype.getVersion = function () {
                    return n.webRTCAdapter.browserDetails.version || 0;
                  }),
                  (e.prototype.isUnifiedPlanSupported = function () {
                    var e,
                      t = this.getBrowser(),
                      r = n.webRTCAdapter.browserDetails.version || 0;
                    if ("chrome" === t && r < 72) return !1;
                    if ("firefox" === t && r >= 59) return !0;
                    if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return !1;
                    var i = !1;
                    try {
                      (e = new RTCPeerConnection()).addTransceiver("audio"), (i = !0);
                    } catch (o) {
                    } finally {
                      e && e.close();
                    }
                    return i;
                  }),
                  (e.prototype.toString = function () {
                    return (
                      "Supports: \n    browser:" +
                      this.getBrowser() +
                      " \n    version:" +
                      this.getVersion() +
                      " \n    isIOS:" +
                      this.isIOS +
                      " \n    isWebRTCSupported:" +
                      this.isWebRTCSupported() +
                      " \n    isBrowserSupported:" +
                      this.isBrowserSupported() +
                      " \n    isUnifiedPlanSupported:" +
                      this.isUnifiedPlanSupported()
                    );
                  }),
                  e
                );
              })())();
            },
            { "./adapter": "sXtV" },
          ],
          BHXf: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                i =
                  (this && this.__setModuleDefault) ||
                  (Object.create
                    ? function (e, t) {
                        Object.defineProperty(e, "default", { enumerable: !0, value: t });
                      }
                    : function (e, t) {
                        e.default = t;
                      }),
                o =
                  (this && this.__importStar) ||
                  function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                      for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return i(t, e), t;
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.util = void 0);
              var a = o(e("peerjs-js-binarypack")),
                s = e("./supports"),
                c = {
                  iceServers: [
                    { urls: "stun:stun.l.google.com:19302" },
                    { urls: "turn:0.peerjs.com:3478", username: "peerjs", credential: "peerjsp" },
                  ],
                  sdpSemantics: "unified-plan",
                };
              r.util = new ((function () {
                function e() {
                  (this.CLOUD_HOST = "0.peerjs.com"),
                    (this.CLOUD_PORT = 443),
                    (this.chunkedBrowsers = { Chrome: 1, chrome: 1 }),
                    (this.chunkedMTU = 16300),
                    (this.defaultConfig = c),
                    (this.browser = s.Supports.getBrowser()),
                    (this.browserVersion = s.Supports.getVersion()),
                    (this.supports = (function () {
                      var e,
                        t = {
                          browser: s.Supports.isBrowserSupported(),
                          webRTC: s.Supports.isWebRTCSupported(),
                          audioVideo: !1,
                          data: !1,
                          binaryBlob: !1,
                          reliable: !1,
                        };
                      if (!t.webRTC) return t;
                      try {
                        (e = new RTCPeerConnection(c)), (t.audioVideo = !0);
                        var r = void 0;
                        try {
                          (r = e.createDataChannel("_PEERJSTEST", { ordered: !0 })),
                            (t.data = !0),
                            (t.reliable = !!r.ordered);
                          try {
                            (r.binaryType = "blob"), (t.binaryBlob = !s.Supports.isIOS);
                          } catch (a) {}
                        } catch (a) {
                        } finally {
                          r && r.close();
                        }
                      } catch (a) {
                      } finally {
                        e && e.close();
                      }
                      return t;
                    })()),
                    (this.pack = a.pack),
                    (this.unpack = a.unpack),
                    (this._dataCount = 1);
                }
                return (
                  (e.prototype.noop = function () {}),
                  (e.prototype.validateId = function (e) {
                    return !e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e);
                  }),
                  (e.prototype.chunk = function (e) {
                    for (var t = [], n = e.size, i = Math.ceil(n / r.util.chunkedMTU), o = 0, a = 0; a < n; ) {
                      var s = Math.min(n, a + r.util.chunkedMTU),
                        c = e.slice(a, s),
                        p = { __peerData: this._dataCount, n: o, data: c, total: i };
                      t.push(p), (a = s), o++;
                    }
                    return this._dataCount++, t;
                  }),
                  (e.prototype.blobToArrayBuffer = function (e, t) {
                    var r = new FileReader();
                    return (
                      (r.onload = function (e) {
                        e.target && t(e.target.result);
                      }),
                      r.readAsArrayBuffer(e),
                      r
                    );
                  }),
                  (e.prototype.binaryStringToArrayBuffer = function (e) {
                    for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) t[r] = 255 & e.charCodeAt(r);
                    return t.buffer;
                  }),
                  (e.prototype.randomToken = function () {
                    return Math.random().toString(36).substr(2);
                  }),
                  (e.prototype.isSecure = function () {
                    return "https:" === location.protocol;
                  }),
                  e
                );
              })())();
            },
            { "peerjs-js-binarypack": "kdPp", "./supports": "I31f" },
          ],
          JJlS: [
            function (e, t, r) {
              "use strict";
              var n = Object.prototype.hasOwnProperty,
                i = "~";
              function o() {}
              function a(e, t, r) {
                (this.fn = e), (this.context = t), (this.once = r || !1);
              }
              function s(e, t, r, n, o) {
                if ("function" != typeof r) throw new TypeError("The listener must be a function");
                var s = new a(r, n || e, o),
                  c = i ? i + t : t;
                return (
                  e._events[c]
                    ? e._events[c].fn
                      ? (e._events[c] = [e._events[c], s])
                      : e._events[c].push(s)
                    : ((e._events[c] = s), e._eventsCount++),
                  e
                );
              }
              function c(e, t) {
                0 == --e._eventsCount ? (e._events = new o()) : delete e._events[t];
              }
              function p() {
                (this._events = new o()), (this._eventsCount = 0);
              }
              Object.create && ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
                (p.prototype.eventNames = function () {
                  var e,
                    t,
                    r = [];
                  if (0 === this._eventsCount) return r;
                  for (t in (e = this._events)) n.call(e, t) && r.push(i ? t.slice(1) : t);
                  return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
                }),
                (p.prototype.listeners = function (e) {
                  var t = i ? i + e : e,
                    r = this._events[t];
                  if (!r) return [];
                  if (r.fn) return [r.fn];
                  for (var n = 0, o = r.length, a = new Array(o); n < o; n++) a[n] = r[n].fn;
                  return a;
                }),
                (p.prototype.listenerCount = function (e) {
                  var t = i ? i + e : e,
                    r = this._events[t];
                  return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (p.prototype.emit = function (e, t, r, n, o, a) {
                  var s = i ? i + e : e;
                  if (!this._events[s]) return !1;
                  var c,
                    p,
                    u = this._events[s],
                    d = arguments.length;
                  if (u.fn) {
                    switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
                      case 1:
                        return u.fn.call(u.context), !0;
                      case 2:
                        return u.fn.call(u.context, t), !0;
                      case 3:
                        return u.fn.call(u.context, t, r), !0;
                      case 4:
                        return u.fn.call(u.context, t, r, n), !0;
                      case 5:
                        return u.fn.call(u.context, t, r, n, o), !0;
                      case 6:
                        return u.fn.call(u.context, t, r, n, o, a), !0;
                    }
                    for (p = 1, c = new Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                    u.fn.apply(u.context, c);
                  } else {
                    var l,
                      f = u.length;
                    for (p = 0; p < f; p++)
                      switch ((u[p].once && this.removeListener(e, u[p].fn, void 0, !0), d)) {
                        case 1:
                          u[p].fn.call(u[p].context);
                          break;
                        case 2:
                          u[p].fn.call(u[p].context, t);
                          break;
                        case 3:
                          u[p].fn.call(u[p].context, t, r);
                          break;
                        case 4:
                          u[p].fn.call(u[p].context, t, r, n);
                          break;
                        default:
                          if (!c) for (l = 1, c = new Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                          u[p].fn.apply(u[p].context, c);
                      }
                  }
                  return !0;
                }),
                (p.prototype.on = function (e, t, r) {
                  return s(this, e, t, r, !1);
                }),
                (p.prototype.once = function (e, t, r) {
                  return s(this, e, t, r, !0);
                }),
                (p.prototype.removeListener = function (e, t, r, n) {
                  var o = i ? i + e : e;
                  if (!this._events[o]) return this;
                  if (!t) return c(this, o), this;
                  var a = this._events[o];
                  if (a.fn) a.fn !== t || (n && !a.once) || (r && a.context !== r) || c(this, o);
                  else {
                    for (var s = 0, p = [], u = a.length; s < u; s++)
                      (a[s].fn !== t || (n && !a[s].once) || (r && a[s].context !== r)) && p.push(a[s]);
                    p.length ? (this._events[o] = 1 === p.length ? p[0] : p) : c(this, o);
                  }
                  return this;
                }),
                (p.prototype.removeAllListeners = function (e) {
                  var t;
                  return (
                    e
                      ? ((t = i ? i + e : e), this._events[t] && c(this, t))
                      : ((this._events = new o()), (this._eventsCount = 0)),
                    this
                  );
                }),
                (p.prototype.off = p.prototype.removeListener),
                (p.prototype.addListener = p.prototype.on),
                (p.prefixed = i),
                (p.EventEmitter = p),
                "undefined" != typeof t && (t.exports = p);
            },
            {},
          ],
          WOs9: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__read) ||
                  function (e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n,
                      i,
                      o = r.call(e),
                      a = [];
                    try {
                      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) a.push(n.value);
                    } catch (s) {
                      i = { error: s };
                    } finally {
                      try {
                        n && !n.done && (r = o.return) && r.call(o);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    return a;
                  },
                i =
                  (this && this.__spreadArray) ||
                  function (e, t) {
                    for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
                    return e;
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.LogLevel = void 0);
              var o,
                a = "PeerJS: ";
              !(function (e) {
                (e[(e.Disabled = 0)] = "Disabled"),
                  (e[(e.Errors = 1)] = "Errors"),
                  (e[(e.Warnings = 2)] = "Warnings"),
                  (e[(e.All = 3)] = "All");
              })((o = r.LogLevel || (r.LogLevel = {})));
              var s = (function () {
                function e() {
                  this._logLevel = o.Disabled;
                }
                return (
                  Object.defineProperty(e.prototype, "logLevel", {
                    get: function () {
                      return this._logLevel;
                    },
                    set: function (e) {
                      this._logLevel = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.log = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._logLevel >= o.All && this._print.apply(this, i([o.All], n(e)));
                  }),
                  (e.prototype.warn = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._logLevel >= o.Warnings && this._print.apply(this, i([o.Warnings], n(e)));
                  }),
                  (e.prototype.error = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._logLevel >= o.Errors && this._print.apply(this, i([o.Errors], n(e)));
                  }),
                  (e.prototype.setLogFunction = function (e) {
                    this._print = e;
                  }),
                  (e.prototype._print = function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    var s = i([a], n(t));
                    for (var c in s) s[c] instanceof Error && (s[c] = "(" + s[c].name + ") " + s[c].message);
                    e >= o.All
                      ? console.log.apply(console, i([], n(s)))
                      : e >= o.Warnings
                      ? console.warn.apply(console, i(["WARNING"], n(s)))
                      : e >= o.Errors && console.error.apply(console, i(["ERROR"], n(s)));
                  }),
                  e
                );
              })();
              r.default = new s();
            },
            {},
          ],
          ZRYf: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.ServerMessageType = r.SocketEventType = r.SerializationType = r.PeerErrorType = r.PeerEventType = r.ConnectionType = r.ConnectionEventType = void 0),
                (function (e) {
                  (e.Open = "open"),
                    (e.Stream = "stream"),
                    (e.Data = "data"),
                    (e.Close = "close"),
                    (e.Error = "error"),
                    (e.IceStateChanged = "iceStateChanged");
                })(r.ConnectionEventType || (r.ConnectionEventType = {})),
                (function (e) {
                  (e.Data = "data"), (e.Media = "media");
                })(r.ConnectionType || (r.ConnectionType = {})),
                (function (e) {
                  (e.Open = "open"),
                    (e.Close = "close"),
                    (e.Connection = "connection"),
                    (e.Call = "call"),
                    (e.Disconnected = "disconnected"),
                    (e.Error = "error");
                })(r.PeerEventType || (r.PeerEventType = {})),
                (function (e) {
                  (e.BrowserIncompatible = "browser-incompatible"),
                    (e.Disconnected = "disconnected"),
                    (e.InvalidID = "invalid-id"),
                    (e.InvalidKey = "invalid-key"),
                    (e.Network = "network"),
                    (e.PeerUnavailable = "peer-unavailable"),
                    (e.SslUnavailable = "ssl-unavailable"),
                    (e.ServerError = "server-error"),
                    (e.SocketError = "socket-error"),
                    (e.SocketClosed = "socket-closed"),
                    (e.UnavailableID = "unavailable-id"),
                    (e.WebRTC = "webrtc");
                })(r.PeerErrorType || (r.PeerErrorType = {})),
                (function (e) {
                  (e.Binary = "binary"), (e.BinaryUTF8 = "binary-utf8"), (e.JSON = "json");
                })(r.SerializationType || (r.SerializationType = {})),
                (function (e) {
                  (e.Message = "message"), (e.Disconnected = "disconnected"), (e.Error = "error"), (e.Close = "close");
                })(r.SocketEventType || (r.SocketEventType = {})),
                (function (e) {
                  (e.Heartbeat = "HEARTBEAT"),
                    (e.Candidate = "CANDIDATE"),
                    (e.Offer = "OFFER"),
                    (e.Answer = "ANSWER"),
                    (e.Open = "OPEN"),
                    (e.Error = "ERROR"),
                    (e.IdTaken = "ID-TAKEN"),
                    (e.InvalidKey = "INVALID-KEY"),
                    (e.Leave = "LEAVE"),
                    (e.Expire = "EXPIRE");
                })(r.ServerMessageType || (r.ServerMessageType = {}));
            },
            {},
          ],
          wJlv: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var e = function (t, r) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        })(t, r);
                    };
                    return function (t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                      function n() {
                        this.constructor = t;
                      }
                      e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                    };
                  })(),
                i =
                  (this && this.__read) ||
                  function (e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n,
                      i,
                      o = r.call(e),
                      a = [];
                    try {
                      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) a.push(n.value);
                    } catch (u) {
                      i = { error: u };
                    } finally {
                      try {
                        n && !n.done && (r = o.return) && r.call(o);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    return a;
                  },
                o =
                  (this && this.__spreadArray) ||
                  function (e, t) {
                    for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
                    return e;
                  },
                a =
                  (this && this.__values) ||
                  function (e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                      r = t && e[t],
                      n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length)
                      return {
                        next: function () {
                          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                      };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                  },
                s =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.Socket = void 0);
              var c = e("eventemitter3"),
                p = s(e("./logger")),
                u = e("./enums"),
                d = (function (e) {
                  function t(t, r, n, i, o, a) {
                    void 0 === a && (a = 5e3);
                    var s = e.call(this) || this;
                    (s.pingInterval = a), (s._disconnected = !0), (s._messagesQueue = []);
                    var c = t ? "wss://" : "ws://";
                    return (s._baseUrl = c + r + ":" + n + i + "peerjs?key=" + o), s;
                  }
                  return (
                    n(t, e),
                    (t.prototype.start = function (e, t) {
                      var r = this;
                      this._id = e;
                      var n = this._baseUrl + "&id=" + e + "&token=" + t;
                      !this._socket &&
                        this._disconnected &&
                        ((this._socket = new WebSocket(n)),
                        (this._disconnected = !1),
                        (this._socket.onmessage = function (e) {
                          var t;
                          try {
                            (t = JSON.parse(e.data)), p.default.log("Server message received:", t);
                          } catch (n) {
                            return void p.default.log("Invalid server message", e.data);
                          }
                          r.emit(u.SocketEventType.Message, t);
                        }),
                        (this._socket.onclose = function (e) {
                          r._disconnected ||
                            (p.default.log("Socket closed.", e),
                            r._cleanup(),
                            (r._disconnected = !0),
                            r.emit(u.SocketEventType.Disconnected));
                        }),
                        (this._socket.onopen = function () {
                          r._disconnected ||
                            (r._sendQueuedMessages(), p.default.log("Socket open"), r._scheduleHeartbeat());
                        }));
                    }),
                    (t.prototype._scheduleHeartbeat = function () {
                      var e = this;
                      this._wsPingTimer = setTimeout(function () {
                        e._sendHeartbeat();
                      }, this.pingInterval);
                    }),
                    (t.prototype._sendHeartbeat = function () {
                      if (this._wsOpen()) {
                        var e = JSON.stringify({ type: u.ServerMessageType.Heartbeat });
                        this._socket.send(e), this._scheduleHeartbeat();
                      } else p.default.log("Cannot send heartbeat, because socket closed");
                    }),
                    (t.prototype._wsOpen = function () {
                      return !!this._socket && 1 === this._socket.readyState;
                    }),
                    (t.prototype._sendQueuedMessages = function () {
                      var e,
                        t,
                        r = o([], i(this._messagesQueue));
                      this._messagesQueue = [];
                      try {
                        for (var n = a(r), s = n.next(); !s.done; s = n.next()) {
                          var c = s.value;
                          this.send(c);
                        }
                      } catch (p) {
                        e = { error: p };
                      } finally {
                        try {
                          s && !s.done && (t = n.return) && t.call(n);
                        } finally {
                          if (e) throw e.error;
                        }
                      }
                    }),
                    (t.prototype.send = function (e) {
                      if (!this._disconnected)
                        if (this._id)
                          if (e.type) {
                            if (this._wsOpen()) {
                              var t = JSON.stringify(e);
                              this._socket.send(t);
                            }
                          } else this.emit(u.SocketEventType.Error, "Invalid message");
                        else this._messagesQueue.push(e);
                    }),
                    (t.prototype.close = function () {
                      this._disconnected || (this._cleanup(), (this._disconnected = !0));
                    }),
                    (t.prototype._cleanup = function () {
                      this._socket &&
                        ((this._socket.onopen = this._socket.onmessage = this._socket.onclose = null),
                        this._socket.close(),
                        (this._socket = void 0)),
                        clearTimeout(this._wsPingTimer);
                    }),
                    t
                  );
                })(c.EventEmitter);
              r.Socket = d;
            },
            { eventemitter3: "JJlS", "./logger": "WOs9", "./enums": "ZRYf" },
          ],
          HCdX: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__assign) ||
                  function () {
                    return (n =
                      Object.assign ||
                      function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                          for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                      }).apply(this, arguments);
                  },
                i =
                  (this && this.__awaiter) ||
                  function (e, t, r, n) {
                    return new (r || (r = Promise))(function (i, o) {
                      function a(e) {
                        try {
                          c(n.next(e));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function s(e) {
                        try {
                          c(n.throw(e));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function c(e) {
                        var t;
                        e.done
                          ? i(e.value)
                          : ((t = e.value),
                            t instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t);
                                })).then(a, s);
                      }
                      c((n = n.apply(e, t || [])).next());
                    });
                  },
                o =
                  (this && this.__generator) ||
                  function (e, t) {
                    var r,
                      n,
                      i,
                      o,
                      a = {
                        label: 0,
                        sent: function () {
                          if (1 & i[0]) throw i[1];
                          return i[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (o = { next: s(0), throw: s(1), return: s(2) }),
                      "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                          return this;
                        }),
                      o
                    );
                    function s(o) {
                      return function (s) {
                        return (function (o) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; a; )
                            try {
                              if (
                                ((r = 1),
                                n &&
                                  (i =
                                    2 & o[0]
                                      ? n.return
                                      : o[0]
                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                      : n.next) &&
                                  !(i = i.call(n, o[1])).done)
                              )
                                return i;
                              switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                case 0:
                                case 1:
                                  i = o;
                                  break;
                                case 4:
                                  return a.label++, { value: o[1], done: !1 };
                                case 5:
                                  a.label++, (n = o[1]), (o = [0]);
                                  continue;
                                case 7:
                                  (o = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue;
                                  }
                                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                    a.label = o[1];
                                    break;
                                  }
                                  if (6 === o[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = o);
                                    break;
                                  }
                                  if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(o);
                                    break;
                                  }
                                  i[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              o = t.call(e, a);
                            } catch (s) {
                              (o = [6, s]), (n = 0);
                            } finally {
                              r = i = 0;
                            }
                          if (5 & o[0]) throw o[1];
                          return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, s]);
                      };
                    }
                  },
                a =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.Negotiator = void 0);
              var s = e("./util"),
                c = a(e("./logger")),
                p = e("./enums"),
                u = (function () {
                  function e(e) {
                    this.connection = e;
                  }
                  return (
                    (e.prototype.startConnection = function (e) {
                      var t = this._startPeerConnection();
                      if (
                        ((this.connection.peerConnection = t),
                        this.connection.type === p.ConnectionType.Media &&
                          e._stream &&
                          this._addTracksToConnection(e._stream, t),
                        e.originator)
                      ) {
                        if (this.connection.type === p.ConnectionType.Data) {
                          var r = this.connection,
                            n = { ordered: !!e.reliable },
                            i = t.createDataChannel(r.label, n);
                          r.initialize(i);
                        }
                        this._makeOffer();
                      } else this.handleSDP("OFFER", e.sdp);
                    }),
                    (e.prototype._startPeerConnection = function () {
                      c.default.log("Creating RTCPeerConnection.");
                      var e = new RTCPeerConnection(this.connection.provider.options.config);
                      return this._setupListeners(e), e;
                    }),
                    (e.prototype._setupListeners = function (e) {
                      var t = this,
                        r = this.connection.peer,
                        n = this.connection.connectionId,
                        i = this.connection.type,
                        o = this.connection.provider;
                      c.default.log("Listening for ICE candidates."),
                        (e.onicecandidate = function (e) {
                          e.candidate &&
                            e.candidate.candidate &&
                            (c.default.log("Received ICE candidates for " + r + ":", e.candidate),
                            o.socket.send({
                              type: p.ServerMessageType.Candidate,
                              payload: { candidate: e.candidate, type: i, connectionId: n },
                              dst: r,
                            }));
                        }),
                        (e.oniceconnectionstatechange = function () {
                          switch (e.iceConnectionState) {
                            case "failed":
                              c.default.log("iceConnectionState is failed, closing connections to " + r),
                                t.connection.emit(
                                  p.ConnectionEventType.Error,
                                  new Error("Negotiation of connection to " + r + " failed.")
                                ),
                                t.connection.close();
                              break;
                            case "closed":
                              c.default.log("iceConnectionState is closed, closing connections to " + r),
                                t.connection.emit(
                                  p.ConnectionEventType.Error,
                                  new Error("Connection to " + r + " closed.")
                                ),
                                t.connection.close();
                              break;
                            case "disconnected":
                              c.default.log("iceConnectionState changed to disconnected on the connection with " + r);
                              break;
                            case "completed":
                              e.onicecandidate = s.util.noop;
                          }
                          t.connection.emit(p.ConnectionEventType.IceStateChanged, e.iceConnectionState);
                        }),
                        c.default.log("Listening for data channel"),
                        (e.ondatachannel = function (e) {
                          c.default.log("Received data channel");
                          var t = e.channel;
                          o.getConnection(r, n).initialize(t);
                        }),
                        c.default.log("Listening for remote stream"),
                        (e.ontrack = function (e) {
                          c.default.log("Received remote stream");
                          var i = e.streams[0],
                            a = o.getConnection(r, n);
                          if (a.type === p.ConnectionType.Media) {
                            var s = a;
                            t._addStreamToMediaConnection(i, s);
                          }
                        });
                    }),
                    (e.prototype.cleanup = function () {
                      c.default.log("Cleaning up PeerConnection to " + this.connection.peer);
                      var e = this.connection.peerConnection;
                      if (e) {
                        (this.connection.peerConnection = null),
                          (e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = function () {});
                        var t = "closed" !== e.signalingState,
                          r = !1;
                        if (this.connection.type === p.ConnectionType.Data) {
                          var n = this.connection.dataChannel;
                          n && (r = !!n.readyState && "closed" !== n.readyState);
                        }
                        (t || r) && e.close();
                      }
                    }),
                    (e.prototype._makeOffer = function () {
                      return i(this, void 0, Promise, function () {
                        var e, t, r, i, a, u, d;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              (e = this.connection.peerConnection), (t = this.connection.provider), (o.label = 1);
                            case 1:
                              return o.trys.push([1, 7, , 8]), [4, e.createOffer(this.connection.options.constraints)];
                            case 2:
                              (r = o.sent()),
                                c.default.log("Created offer."),
                                this.connection.options.sdpTransform &&
                                  "function" == typeof this.connection.options.sdpTransform &&
                                  (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp),
                                (o.label = 3);
                            case 3:
                              return o.trys.push([3, 5, , 6]), [4, e.setLocalDescription(r)];
                            case 4:
                              return (
                                o.sent(),
                                c.default.log("Set localDescription:", r, "for:" + this.connection.peer),
                                (i = {
                                  sdp: r,
                                  type: this.connection.type,
                                  connectionId: this.connection.connectionId,
                                  metadata: this.connection.metadata,
                                  browser: s.util.browser,
                                }),
                                this.connection.type === p.ConnectionType.Data &&
                                  ((a = this.connection),
                                  (i = n(n({}, i), {
                                    label: a.label,
                                    reliable: a.reliable,
                                    serialization: a.serialization,
                                  }))),
                                t.socket.send({
                                  type: p.ServerMessageType.Offer,
                                  payload: i,
                                  dst: this.connection.peer,
                                }),
                                [3, 6]
                              );
                            case 5:
                              return (
                                "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" !=
                                  (u = o.sent()) &&
                                  (t.emitError(p.PeerErrorType.WebRTC, u),
                                  c.default.log("Failed to setLocalDescription, ", u)),
                                [3, 6]
                              );
                            case 6:
                              return [3, 8];
                            case 7:
                              return (
                                (d = o.sent()),
                                t.emitError(p.PeerErrorType.WebRTC, d),
                                c.default.log("Failed to createOffer, ", d),
                                [3, 8]
                              );
                            case 8:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype._makeAnswer = function () {
                      return i(this, void 0, Promise, function () {
                        var e, t, r, n, i;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              (e = this.connection.peerConnection), (t = this.connection.provider), (o.label = 1);
                            case 1:
                              return o.trys.push([1, 7, , 8]), [4, e.createAnswer()];
                            case 2:
                              (r = o.sent()),
                                c.default.log("Created answer."),
                                this.connection.options.sdpTransform &&
                                  "function" == typeof this.connection.options.sdpTransform &&
                                  (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp),
                                (o.label = 3);
                            case 3:
                              return o.trys.push([3, 5, , 6]), [4, e.setLocalDescription(r)];
                            case 4:
                              return (
                                o.sent(),
                                c.default.log("Set localDescription:", r, "for:" + this.connection.peer),
                                t.socket.send({
                                  type: p.ServerMessageType.Answer,
                                  payload: {
                                    sdp: r,
                                    type: this.connection.type,
                                    connectionId: this.connection.connectionId,
                                    browser: s.util.browser,
                                  },
                                  dst: this.connection.peer,
                                }),
                                [3, 6]
                              );
                            case 5:
                              return (
                                (n = o.sent()),
                                t.emitError(p.PeerErrorType.WebRTC, n),
                                c.default.log("Failed to setLocalDescription, ", n),
                                [3, 6]
                              );
                            case 6:
                              return [3, 8];
                            case 7:
                              return (
                                (i = o.sent()),
                                t.emitError(p.PeerErrorType.WebRTC, i),
                                c.default.log("Failed to create answer, ", i),
                                [3, 8]
                              );
                            case 8:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype.handleSDP = function (e, t) {
                      return i(this, void 0, Promise, function () {
                        var r, n, i, a;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              (t = new RTCSessionDescription(t)),
                                (r = this.connection.peerConnection),
                                (n = this.connection.provider),
                                c.default.log("Setting remote description", t),
                                (i = this),
                                (o.label = 1);
                            case 1:
                              return o.trys.push([1, 5, , 6]), [4, r.setRemoteDescription(t)];
                            case 2:
                              return (
                                o.sent(),
                                c.default.log("Set remoteDescription:" + e + " for:" + this.connection.peer),
                                "OFFER" !== e ? [3, 4] : [4, i._makeAnswer()]
                              );
                            case 3:
                              o.sent(), (o.label = 4);
                            case 4:
                              return [3, 6];
                            case 5:
                              return (
                                (a = o.sent()),
                                n.emitError(p.PeerErrorType.WebRTC, a),
                                c.default.log("Failed to setRemoteDescription, ", a),
                                [3, 6]
                              );
                            case 6:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype.handleCandidate = function (e) {
                      return i(this, void 0, Promise, function () {
                        var t, r, n, i, a, s;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              c.default.log("handleCandidate:", e),
                                (t = e.candidate),
                                (r = e.sdpMLineIndex),
                                (n = e.sdpMid),
                                (i = this.connection.peerConnection),
                                (a = this.connection.provider),
                                (o.label = 1);
                            case 1:
                              return (
                                o.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  i.addIceCandidate(new RTCIceCandidate({ sdpMid: n, sdpMLineIndex: r, candidate: t })),
                                ]
                              );
                            case 2:
                              return o.sent(), c.default.log("Added ICE candidate for:" + this.connection.peer), [3, 4];
                            case 3:
                              return (
                                (s = o.sent()),
                                a.emitError(p.PeerErrorType.WebRTC, s),
                                c.default.log("Failed to handleCandidate, ", s),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype._addTracksToConnection = function (e, t) {
                      if ((c.default.log("add tracks from stream " + e.id + " to peer connection"), !t.addTrack))
                        return c.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
                      e.getTracks().forEach(function (r) {
                        t.addTrack(r, e);
                      });
                    }),
                    (e.prototype._addStreamToMediaConnection = function (e, t) {
                      c.default.log("add stream " + e.id + " to media connection " + t.connectionId), t.addStream(e);
                    }),
                    e
                  );
                })();
              r.Negotiator = u;
            },
            { "./util": "BHXf", "./logger": "WOs9", "./enums": "ZRYf" },
          ],
          tQFK: [
            function (e, t, r) {
              "use strict";
              var n =
                (this && this.__extends) ||
                (function () {
                  var e = function (t, r) {
                    return (e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                      })(t, r);
                  };
                  return function (t, r) {
                    if ("function" != typeof r && null !== r)
                      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                      this.constructor = t;
                    }
                    e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                  };
                })();
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseConnection = void 0);
              var i = (function (e) {
                function t(t, r, n) {
                  var i = e.call(this) || this;
                  return (i.peer = t), (i.provider = r), (i.options = n), (i._open = !1), (i.metadata = n.metadata), i;
                }
                return (
                  n(t, e),
                  Object.defineProperty(t.prototype, "open", {
                    get: function () {
                      return this._open;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  t
                );
              })(e("eventemitter3").EventEmitter);
              r.BaseConnection = i;
            },
            { eventemitter3: "JJlS" },
          ],
          dbHP: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var e = function (t, r) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        })(t, r);
                    };
                    return function (t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                      function n() {
                        this.constructor = t;
                      }
                      e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                    };
                  })(),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                          for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__values) ||
                  function (e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                      r = t && e[t],
                      n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length)
                      return {
                        next: function () {
                          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                      };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                  },
                a =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.MediaConnection = void 0);
              var s = e("./util"),
                c = a(e("./logger")),
                p = e("./negotiator"),
                u = e("./enums"),
                d = (function (e) {
                  function t(r, n, i) {
                    var o = e.call(this, r, n, i) || this;
                    return (
                      (o._localStream = o.options._stream),
                      (o.connectionId = o.options.connectionId || t.ID_PREFIX + s.util.randomToken()),
                      (o._negotiator = new p.Negotiator(o)),
                      o._localStream && o._negotiator.startConnection({ _stream: o._localStream, originator: !0 }),
                      o
                    );
                  }
                  return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "type", {
                      get: function () {
                        return u.ConnectionType.Media;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "localStream", {
                      get: function () {
                        return this._localStream;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "remoteStream", {
                      get: function () {
                        return this._remoteStream;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.addStream = function (t) {
                      c.default.log("Receiving stream", t),
                        (this._remoteStream = t),
                        e.prototype.emit.call(this, u.ConnectionEventType.Stream, t);
                    }),
                    (t.prototype.handleMessage = function (e) {
                      var t = e.type,
                        r = e.payload;
                      switch (e.type) {
                        case u.ServerMessageType.Answer:
                          this._negotiator.handleSDP(t, r.sdp), (this._open = !0);
                          break;
                        case u.ServerMessageType.Candidate:
                          this._negotiator.handleCandidate(r.candidate);
                          break;
                        default:
                          c.default.warn("Unrecognized message type:" + t + " from peer:" + this.peer);
                      }
                    }),
                    (t.prototype.answer = function (e, t) {
                      var r, n;
                      if ((void 0 === t && (t = {}), this._localStream))
                        c.default.warn(
                          "Local stream already exists on this MediaConnection. Are you answering a call twice?"
                        );
                      else {
                        (this._localStream = e),
                          t && t.sdpTransform && (this.options.sdpTransform = t.sdpTransform),
                          this._negotiator.startConnection(i(i({}, this.options._payload), { _stream: e }));
                        var a = this.provider._getMessages(this.connectionId);
                        try {
                          for (var s = o(a), p = s.next(); !p.done; p = s.next()) {
                            var u = p.value;
                            this.handleMessage(u);
                          }
                        } catch (d) {
                          r = { error: d };
                        } finally {
                          try {
                            p && !p.done && (n = s.return) && n.call(s);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                        this._open = !0;
                      }
                    }),
                    (t.prototype.close = function () {
                      this._negotiator && (this._negotiator.cleanup(), (this._negotiator = null)),
                        (this._localStream = null),
                        (this._remoteStream = null),
                        this.provider && (this.provider._removeConnection(this), (this.provider = null)),
                        this.options && this.options._stream && (this.options._stream = null),
                        this.open && ((this._open = !1), e.prototype.emit.call(this, u.ConnectionEventType.Close));
                    }),
                    (t.ID_PREFIX = "mc_"),
                    t
                  );
                })(e("./baseconnection").BaseConnection);
              r.MediaConnection = d;
            },
            {
              "./util": "BHXf",
              "./logger": "WOs9",
              "./negotiator": "HCdX",
              "./enums": "ZRYf",
              "./baseconnection": "tQFK",
            },
          ],
          GGp6: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var e = function (t, r) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        })(t, r);
                    };
                    return function (t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                      function n() {
                        this.constructor = t;
                      }
                      e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                    };
                  })(),
                i =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.EncodingQueue = void 0);
              var o = e("eventemitter3"),
                a = i(e("./logger")),
                s = (function (e) {
                  function t() {
                    var t = e.call(this) || this;
                    return (
                      (t.fileReader = new FileReader()),
                      (t._queue = []),
                      (t._processing = !1),
                      (t.fileReader.onload = function (e) {
                        (t._processing = !1), e.target && t.emit("done", e.target.result), t.doNextTask();
                      }),
                      (t.fileReader.onerror = function (e) {
                        a.default.error("EncodingQueue error:", e),
                          (t._processing = !1),
                          t.destroy(),
                          t.emit("error", e);
                      }),
                      t
                    );
                  }
                  return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "queue", {
                      get: function () {
                        return this._queue;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "size", {
                      get: function () {
                        return this.queue.length;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "processing", {
                      get: function () {
                        return this._processing;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.enque = function (e) {
                      this.queue.push(e), this.processing || this.doNextTask();
                    }),
                    (t.prototype.destroy = function () {
                      this.fileReader.abort(), (this._queue = []);
                    }),
                    (t.prototype.doNextTask = function () {
                      0 !== this.size &&
                        (this.processing ||
                          ((this._processing = !0), this.fileReader.readAsArrayBuffer(this.queue.shift())));
                    }),
                    t
                  );
                })(o.EventEmitter);
              r.EncodingQueue = s;
            },
            { eventemitter3: "JJlS", "./logger": "WOs9" },
          ],
          GBTQ: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var e = function (t, r) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        })(t, r);
                    };
                    return function (t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                      function n() {
                        this.constructor = t;
                      }
                      e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                    };
                  })(),
                i =
                  (this && this.__values) ||
                  function (e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                      r = t && e[t],
                      n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length)
                      return {
                        next: function () {
                          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                      };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                  },
                o =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.DataConnection = void 0);
              var a = e("./util"),
                s = o(e("./logger")),
                c = e("./negotiator"),
                p = e("./enums"),
                u = e("./baseconnection"),
                d = e("./encodingQueue"),
                l = (function (e) {
                  function t(r, n, i) {
                    var o = e.call(this, r, n, i) || this;
                    return (
                      (o.stringify = JSON.stringify),
                      (o.parse = JSON.parse),
                      (o._buffer = []),
                      (o._bufferSize = 0),
                      (o._buffering = !1),
                      (o._chunkedData = {}),
                      (o._encodingQueue = new d.EncodingQueue()),
                      (o.connectionId = o.options.connectionId || t.ID_PREFIX + a.util.randomToken()),
                      (o.label = o.options.label || o.connectionId),
                      (o.serialization = o.options.serialization || p.SerializationType.Binary),
                      (o.reliable = !!o.options.reliable),
                      o._encodingQueue.on("done", function (e) {
                        o._bufferedSend(e);
                      }),
                      o._encodingQueue.on("error", function () {
                        s.default.error(
                          "DC#" + o.connectionId + ": Error occured in encoding from blob to arraybuffer, close DC"
                        ),
                          o.close();
                      }),
                      (o._negotiator = new c.Negotiator(o)),
                      o._negotiator.startConnection(o.options._payload || { originator: !0 }),
                      o
                    );
                  }
                  return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "type", {
                      get: function () {
                        return p.ConnectionType.Data;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "dataChannel", {
                      get: function () {
                        return this._dc;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "bufferSize", {
                      get: function () {
                        return this._bufferSize;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.initialize = function (e) {
                      (this._dc = e), this._configureDataChannel();
                    }),
                    (t.prototype._configureDataChannel = function () {
                      var e = this;
                      (a.util.supports.binaryBlob && !a.util.supports.reliable) ||
                        (this.dataChannel.binaryType = "arraybuffer"),
                        (this.dataChannel.onopen = function () {
                          s.default.log("DC#" + e.connectionId + " dc connection success"),
                            (e._open = !0),
                            e.emit(p.ConnectionEventType.Open);
                        }),
                        (this.dataChannel.onmessage = function (t) {
                          s.default.log("DC#" + e.connectionId + " dc onmessage:", t.data), e._handleDataMessage(t);
                        }),
                        (this.dataChannel.onclose = function () {
                          s.default.log("DC#" + e.connectionId + " dc closed for:", e.peer), e.close();
                        });
                    }),
                    (t.prototype._handleDataMessage = function (t) {
                      var r = this,
                        n = t.data,
                        i = n.constructor,
                        o = n;
                      if (
                        this.serialization === p.SerializationType.Binary ||
                        this.serialization === p.SerializationType.BinaryUTF8
                      ) {
                        if (i === Blob)
                          return void a.util.blobToArrayBuffer(n, function (e) {
                            var t = a.util.unpack(e);
                            r.emit(p.ConnectionEventType.Data, t);
                          });
                        if (i === ArrayBuffer) o = a.util.unpack(n);
                        else if (i === String) {
                          var s = a.util.binaryStringToArrayBuffer(n);
                          o = a.util.unpack(s);
                        }
                      } else this.serialization === p.SerializationType.JSON && (o = this.parse(n));
                      o.__peerData ? this._handleChunk(o) : e.prototype.emit.call(this, p.ConnectionEventType.Data, o);
                    }),
                    (t.prototype._handleChunk = function (e) {
                      var t = e.__peerData,
                        r = this._chunkedData[t] || { data: [], count: 0, total: e.total };
                      if (((r.data[e.n] = e.data), r.count++, (this._chunkedData[t] = r), r.total === r.count)) {
                        delete this._chunkedData[t];
                        var n = new Blob(r.data);
                        this._handleDataMessage({ data: n });
                      }
                    }),
                    (t.prototype.close = function () {
                      (this._buffer = []),
                        (this._bufferSize = 0),
                        (this._chunkedData = {}),
                        this._negotiator && (this._negotiator.cleanup(), (this._negotiator = null)),
                        this.provider && (this.provider._removeConnection(this), (this.provider = null)),
                        this.dataChannel &&
                          ((this.dataChannel.onopen = null),
                          (this.dataChannel.onmessage = null),
                          (this.dataChannel.onclose = null),
                          (this._dc = null)),
                        this._encodingQueue &&
                          (this._encodingQueue.destroy(),
                          this._encodingQueue.removeAllListeners(),
                          (this._encodingQueue = null)),
                        this.open && ((this._open = !1), e.prototype.emit.call(this, p.ConnectionEventType.Close));
                    }),
                    (t.prototype.send = function (t, r) {
                      if (this.open)
                        if (this.serialization === p.SerializationType.JSON) this._bufferedSend(this.stringify(t));
                        else if (
                          this.serialization === p.SerializationType.Binary ||
                          this.serialization === p.SerializationType.BinaryUTF8
                        ) {
                          var n = a.util.pack(t);
                          if (!r && n.size > a.util.chunkedMTU) return void this._sendChunks(n);
                          a.util.supports.binaryBlob ? this._bufferedSend(n) : this._encodingQueue.enque(n);
                        } else this._bufferedSend(t);
                      else
                        e.prototype.emit.call(
                          this,
                          p.ConnectionEventType.Error,
                          new Error(
                            "Connection is not open. You should listen for the `open` event before sending messages."
                          )
                        );
                    }),
                    (t.prototype._bufferedSend = function (e) {
                      (!this._buffering && this._trySend(e)) ||
                        (this._buffer.push(e), (this._bufferSize = this._buffer.length));
                    }),
                    (t.prototype._trySend = function (r) {
                      var n = this;
                      if (!this.open) return !1;
                      if (this.dataChannel.bufferedAmount > t.MAX_BUFFERED_AMOUNT)
                        return (
                          (this._buffering = !0),
                          setTimeout(function () {
                            (n._buffering = !1), n._tryBuffer();
                          }, 50),
                          !1
                        );
                      try {
                        this.dataChannel.send(r);
                      } catch (e) {
                        return (
                          s.default.error("DC#:" + this.connectionId + " Error when sending:", e),
                          (this._buffering = !0),
                          this.close(),
                          !1
                        );
                      }
                      return !0;
                    }),
                    (t.prototype._tryBuffer = function () {
                      if (this.open && 0 !== this._buffer.length) {
                        var e = this._buffer[0];
                        this._trySend(e) &&
                          (this._buffer.shift(), (this._bufferSize = this._buffer.length), this._tryBuffer());
                      }
                    }),
                    (t.prototype._sendChunks = function (e) {
                      var t,
                        r,
                        n = a.util.chunk(e);
                      s.default.log("DC#" + this.connectionId + " Try to send " + n.length + " chunks...");
                      try {
                        for (var o = i(n), c = o.next(); !c.done; c = o.next()) {
                          var p = c.value;
                          this.send(p, !0);
                        }
                      } catch (u) {
                        t = { error: u };
                      } finally {
                        try {
                          c && !c.done && (r = o.return) && r.call(o);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    }),
                    (t.prototype.handleMessage = function (e) {
                      var t = e.payload;
                      switch (e.type) {
                        case p.ServerMessageType.Answer:
                          this._negotiator.handleSDP(e.type, t.sdp);
                          break;
                        case p.ServerMessageType.Candidate:
                          this._negotiator.handleCandidate(t.candidate);
                          break;
                        default:
                          s.default.warn("Unrecognized message type:", e.type, "from peer:", this.peer);
                      }
                    }),
                    (t.ID_PREFIX = "dc_"),
                    (t.MAX_BUFFERED_AMOUNT = 8388608),
                    t
                  );
                })(u.BaseConnection);
              r.DataConnection = l;
            },
            {
              "./util": "BHXf",
              "./logger": "WOs9",
              "./negotiator": "HCdX",
              "./enums": "ZRYf",
              "./baseconnection": "tQFK",
              "./encodingQueue": "GGp6",
            },
          ],
          in7L: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__awaiter) ||
                  function (e, t, r, n) {
                    return new (r || (r = Promise))(function (i, o) {
                      function a(e) {
                        try {
                          c(n.next(e));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function s(e) {
                        try {
                          c(n.throw(e));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function c(e) {
                        var t;
                        e.done
                          ? i(e.value)
                          : ((t = e.value),
                            t instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t);
                                })).then(a, s);
                      }
                      c((n = n.apply(e, t || [])).next());
                    });
                  },
                i =
                  (this && this.__generator) ||
                  function (e, t) {
                    var r,
                      n,
                      i,
                      o,
                      a = {
                        label: 0,
                        sent: function () {
                          if (1 & i[0]) throw i[1];
                          return i[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (o = { next: s(0), throw: s(1), return: s(2) }),
                      "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                          return this;
                        }),
                      o
                    );
                    function s(o) {
                      return function (s) {
                        return (function (o) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; a; )
                            try {
                              if (
                                ((r = 1),
                                n &&
                                  (i =
                                    2 & o[0]
                                      ? n.return
                                      : o[0]
                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                      : n.next) &&
                                  !(i = i.call(n, o[1])).done)
                              )
                                return i;
                              switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                case 0:
                                case 1:
                                  i = o;
                                  break;
                                case 4:
                                  return a.label++, { value: o[1], done: !1 };
                                case 5:
                                  a.label++, (n = o[1]), (o = [0]);
                                  continue;
                                case 7:
                                  (o = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue;
                                  }
                                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                    a.label = o[1];
                                    break;
                                  }
                                  if (6 === o[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = o);
                                    break;
                                  }
                                  if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(o);
                                    break;
                                  }
                                  i[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              o = t.call(e, a);
                            } catch (s) {
                              (o = [6, s]), (n = 0);
                            } finally {
                              r = i = 0;
                            }
                          if (5 & o[0]) throw o[1];
                          return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, s]);
                      };
                    }
                  },
                o =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.API = void 0);
              var a = e("./util"),
                s = o(e("./logger")),
                c = (function () {
                  function e(e) {
                    this._options = e;
                  }
                  return (
                    (e.prototype._buildUrl = function (e) {
                      return (
                        (this._options.secure ? "https://" : "http://") +
                        this._options.host +
                        ":" +
                        this._options.port +
                        this._options.path +
                        this._options.key +
                        "/" +
                        e +
                        "?ts=" +
                        new Date().getTime() +
                        Math.random()
                      );
                    }),
                    (e.prototype.retrieveId = function () {
                      return n(this, void 0, Promise, function () {
                        var e, t, r, n;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              (e = this._buildUrl("id")), (i.label = 1);
                            case 1:
                              return i.trys.push([1, 3, , 4]), [4, fetch(e)];
                            case 2:
                              if (200 !== (t = i.sent()).status) throw new Error("Error. Status:" + t.status);
                              return [2, t.text()];
                            case 3:
                              throw (
                                ((r = i.sent()),
                                s.default.error("Error retrieving ID", r),
                                (n = ""),
                                "/" === this._options.path &&
                                  this._options.host !== a.util.CLOUD_HOST &&
                                  (n =
                                    " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),
                                new Error("Could not get an ID from the server." + n))
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype.listAllPeers = function () {
                      return n(this, void 0, Promise, function () {
                        var e, t, r, n;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              (e = this._buildUrl("peers")), (i.label = 1);
                            case 1:
                              return i.trys.push([1, 3, , 4]), [4, fetch(e)];
                            case 2:
                              if (200 !== (t = i.sent()).status) {
                                if (401 === t.status)
                                  throw (
                                    ("",
                                    (r =
                                      this._options.host === a.util.CLOUD_HOST
                                        ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key."
                                        : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature."),
                                    new Error("It doesn't look like you have permission to list peers IDs. " + r))
                                  );
                                throw new Error("Error. Status:" + t.status);
                              }
                              return [2, t.json()];
                            case 3:
                              throw (
                                ((n = i.sent()),
                                s.default.error("Error retrieving list peers", n),
                                new Error("Could not get list peers from the server." + n))
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    }),
                    e
                  );
                })();
              r.API = c;
            },
            { "./util": "BHXf", "./logger": "WOs9" },
          ],
          Hxpd: [
            function (e, t, r) {
              "use strict";
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var e = function (t, r) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        })(t, r);
                    };
                    return function (t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                      function n() {
                        this.constructor = t;
                      }
                      e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
                    };
                  })(),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                          for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__values) ||
                  function (e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                      r = t && e[t],
                      n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length)
                      return {
                        next: function () {
                          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                      };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                  },
                a =
                  (this && this.__read) ||
                  function (e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n,
                      i,
                      o = r.call(e),
                      a = [];
                    try {
                      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) a.push(n.value);
                    } catch (u) {
                      i = { error: u };
                    } finally {
                      try {
                        n && !n.done && (r = o.return) && r.call(o);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    return a;
                  },
                s =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.Peer = void 0);
              var c = e("eventemitter3"),
                p = e("./util"),
                u = s(e("./logger")),
                d = e("./socket"),
                l = e("./mediaconnection"),
                f = e("./dataconnection"),
                h = e("./enums"),
                v = e("./api"),
                m = (function (e) {
                  function t(r, n) {
                    var o,
                      a = e.call(this) || this;
                    return (
                      (a._id = null),
                      (a._lastServerId = null),
                      (a._destroyed = !1),
                      (a._disconnected = !1),
                      (a._open = !1),
                      (a._connections = new Map()),
                      (a._lostMessages = new Map()),
                      r && r.constructor == Object ? (n = r) : r && (o = r.toString()),
                      (n = i(
                        {
                          debug: 0,
                          host: p.util.CLOUD_HOST,
                          port: p.util.CLOUD_PORT,
                          path: "/",
                          key: t.DEFAULT_KEY,
                          token: p.util.randomToken(),
                          config: p.util.defaultConfig,
                        },
                        n
                      )),
                      (a._options = n),
                      "/" === a._options.host && (a._options.host = window.location.hostname),
                      a._options.path &&
                        ("/" !== a._options.path[0] && (a._options.path = "/" + a._options.path),
                        "/" !== a._options.path[a._options.path.length - 1] && (a._options.path += "/")),
                      void 0 === a._options.secure && a._options.host !== p.util.CLOUD_HOST
                        ? (a._options.secure = p.util.isSecure())
                        : a._options.host == p.util.CLOUD_HOST && (a._options.secure = !0),
                      a._options.logFunction && u.default.setLogFunction(a._options.logFunction),
                      (u.default.logLevel = a._options.debug || 0),
                      (a._api = new v.API(n)),
                      (a._socket = a._createServerConnection()),
                      p.util.supports.audioVideo || p.util.supports.data
                        ? o && !p.util.validateId(o)
                          ? (a._delayedAbort(h.PeerErrorType.InvalidID, 'ID "' + o + '" is invalid'), a)
                          : (o
                              ? a._initialize(o)
                              : a._api
                                  .retrieveId()
                                  .then(function (e) {
                                    return a._initialize(e);
                                  })
                                  .catch(function (e) {
                                    return a._abort(h.PeerErrorType.ServerError, e);
                                  }),
                            a)
                        : (a._delayedAbort(
                            h.PeerErrorType.BrowserIncompatible,
                            "The current browser does not support WebRTC"
                          ),
                          a)
                    );
                  }
                  return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "id", {
                      get: function () {
                        return this._id;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "options", {
                      get: function () {
                        return this._options;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "open", {
                      get: function () {
                        return this._open;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "socket", {
                      get: function () {
                        return this._socket;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "connections", {
                      get: function () {
                        var e,
                          t,
                          r = Object.create(null);
                        try {
                          for (var n = o(this._connections), i = n.next(); !i.done; i = n.next()) {
                            var s = a(i.value, 2),
                              c = s[0],
                              p = s[1];
                            r[c] = p;
                          }
                        } catch (f) {
                          e = { error: f };
                        } finally {
                          try {
                            i && !i.done && (t = n.return) && t.call(n);
                          } finally {
                            if (e) throw e.error;
                          }
                        }
                        return r;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "destroyed", {
                      get: function () {
                        return this._destroyed;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "disconnected", {
                      get: function () {
                        return this._disconnected;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype._createServerConnection = function () {
                      var e = this,
                        t = new d.Socket(
                          this._options.secure,
                          this._options.host,
                          this._options.port,
                          this._options.path,
                          this._options.key,
                          this._options.pingInterval
                        );
                      return (
                        t.on(h.SocketEventType.Message, function (t) {
                          e._handleMessage(t);
                        }),
                        t.on(h.SocketEventType.Error, function (t) {
                          e._abort(h.PeerErrorType.SocketError, t);
                        }),
                        t.on(h.SocketEventType.Disconnected, function () {
                          e.disconnected ||
                            (e.emitError(h.PeerErrorType.Network, "Lost connection to server."), e.disconnect());
                        }),
                        t.on(h.SocketEventType.Close, function () {
                          e.disconnected ||
                            e._abort(h.PeerErrorType.SocketClosed, "Underlying socket is already closed.");
                        }),
                        t
                      );
                    }),
                    (t.prototype._initialize = function (e) {
                      (this._id = e), this.socket.start(e, this._options.token);
                    }),
                    (t.prototype._handleMessage = function (e) {
                      var t,
                        r,
                        n = e.type,
                        i = e.payload,
                        a = e.src;
                      switch (n) {
                        case h.ServerMessageType.Open:
                          (this._lastServerId = this.id), (this._open = !0), this.emit(h.PeerEventType.Open, this.id);
                          break;
                        case h.ServerMessageType.Error:
                          this._abort(h.PeerErrorType.ServerError, i.msg);
                          break;
                        case h.ServerMessageType.IdTaken:
                          this._abort(h.PeerErrorType.UnavailableID, 'ID "' + this.id + '" is taken');
                          break;
                        case h.ServerMessageType.InvalidKey:
                          this._abort(h.PeerErrorType.InvalidKey, 'API KEY "' + this._options.key + '" is invalid');
                          break;
                        case h.ServerMessageType.Leave:
                          u.default.log("Received leave message from " + a),
                            this._cleanupPeer(a),
                            this._connections.delete(a);
                          break;
                        case h.ServerMessageType.Expire:
                          this.emitError(h.PeerErrorType.PeerUnavailable, "Could not connect to peer " + a);
                          break;
                        case h.ServerMessageType.Offer:
                          var s = i.connectionId;
                          if (
                            ((m = this.getConnection(a, s)) &&
                              (m.close(), u.default.warn("Offer received for existing Connection ID:" + s)),
                            i.type === h.ConnectionType.Media)
                          )
                            (m = new l.MediaConnection(a, this, {
                              connectionId: s,
                              _payload: i,
                              metadata: i.metadata,
                            })),
                              this._addConnection(a, m),
                              this.emit(h.PeerEventType.Call, m);
                          else {
                            if (i.type !== h.ConnectionType.Data)
                              return void u.default.warn("Received malformed connection type:" + i.type);
                            (m = new f.DataConnection(a, this, {
                              connectionId: s,
                              _payload: i,
                              metadata: i.metadata,
                              label: i.label,
                              serialization: i.serialization,
                              reliable: i.reliable,
                            })),
                              this._addConnection(a, m),
                              this.emit(h.PeerEventType.Connection, m);
                          }
                          var c = this._getMessages(s);
                          try {
                            for (var p = o(c), d = p.next(); !d.done; d = p.next()) {
                              var v = d.value;
                              m.handleMessage(v);
                            }
                          } catch (y) {
                            t = { error: y };
                          } finally {
                            try {
                              d && !d.done && (r = p.return) && r.call(p);
                            } finally {
                              if (t) throw t.error;
                            }
                          }
                          break;
                        default:
                          if (!i)
                            return void u.default.warn("You received a malformed message from " + a + " of type " + n);
                          var m;
                          (s = i.connectionId),
                            (m = this.getConnection(a, s)) && m.peerConnection
                              ? m.handleMessage(e)
                              : s
                              ? this._storeMessage(s, e)
                              : u.default.warn("You received an unrecognized message:", e);
                      }
                    }),
                    (t.prototype._storeMessage = function (e, t) {
                      this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(t);
                    }),
                    (t.prototype._getMessages = function (e) {
                      var t = this._lostMessages.get(e);
                      return t ? (this._lostMessages.delete(e), t) : [];
                    }),
                    (t.prototype.connect = function (e, t) {
                      if ((void 0 === t && (t = {}), this.disconnected))
                        return (
                          u.default.warn(
                            "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."
                          ),
                          void this.emitError(
                            h.PeerErrorType.Disconnected,
                            "Cannot connect to new Peer after disconnecting from server."
                          )
                        );
                      var r = new f.DataConnection(e, this, t);
                      return this._addConnection(e, r), r;
                    }),
                    (t.prototype.call = function (e, t, r) {
                      if ((void 0 === r && (r = {}), this.disconnected))
                        return (
                          u.default.warn(
                            "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."
                          ),
                          void this.emitError(
                            h.PeerErrorType.Disconnected,
                            "Cannot connect to new Peer after disconnecting from server."
                          )
                        );
                      if (t) {
                        r._stream = t;
                        var n = new l.MediaConnection(e, this, r);
                        return this._addConnection(e, n), n;
                      }
                      u.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
                    }),
                    (t.prototype._addConnection = function (e, t) {
                      u.default.log("add connection " + t.type + ":" + t.connectionId + " to peerId:" + e),
                        this._connections.has(e) || this._connections.set(e, []),
                        this._connections.get(e).push(t);
                    }),
                    (t.prototype._removeConnection = function (e) {
                      var t = this._connections.get(e.peer);
                      if (t) {
                        var r = t.indexOf(e);
                        -1 !== r && t.splice(r, 1);
                      }
                      this._lostMessages.delete(e.connectionId);
                    }),
                    (t.prototype.getConnection = function (e, t) {
                      var r,
                        n,
                        i = this._connections.get(e);
                      if (!i) return null;
                      try {
                        for (var a = o(i), s = a.next(); !s.done; s = a.next()) {
                          var c = s.value;
                          if (c.connectionId === t) return c;
                        }
                      } catch (l) {
                        r = { error: l };
                      } finally {
                        try {
                          s && !s.done && (n = a.return) && n.call(a);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                      return null;
                    }),
                    (t.prototype._delayedAbort = function (e, t) {
                      var r = this;
                      setTimeout(function () {
                        r._abort(e, t);
                      }, 0);
                    }),
                    (t.prototype._abort = function (e, t) {
                      u.default.error("Aborting!"),
                        this.emitError(e, t),
                        this._lastServerId ? this.disconnect() : this.destroy();
                    }),
                    (t.prototype.emitError = function (e, t) {
                      var r;
                      u.default.error("Error:", t),
                        ((r = "string" == typeof t ? new Error(t) : t).type = e),
                        this.emit(h.PeerEventType.Error, r);
                    }),
                    (t.prototype.destroy = function () {
                      this.destroyed ||
                        (u.default.log("Destroy peer with ID:" + this.id),
                        this.disconnect(),
                        this._cleanup(),
                        (this._destroyed = !0),
                        this.emit(h.PeerEventType.Close));
                    }),
                    (t.prototype._cleanup = function () {
                      var e, t;
                      try {
                        for (var r = o(this._connections.keys()), n = r.next(); !n.done; n = r.next()) {
                          var i = n.value;
                          this._cleanupPeer(i), this._connections.delete(i);
                        }
                      } catch (p) {
                        e = { error: p };
                      } finally {
                        try {
                          n && !n.done && (t = r.return) && t.call(r);
                        } finally {
                          if (e) throw e.error;
                        }
                      }
                      this.socket.removeAllListeners();
                    }),
                    (t.prototype._cleanupPeer = function (e) {
                      var t,
                        r,
                        n = this._connections.get(e);
                      if (n)
                        try {
                          for (var i = o(n), a = i.next(); !a.done; a = i.next()) a.value.close();
                        } catch (u) {
                          t = { error: u };
                        } finally {
                          try {
                            a && !a.done && (r = i.return) && r.call(i);
                          } finally {
                            if (t) throw t.error;
                          }
                        }
                    }),
                    (t.prototype.disconnect = function () {
                      if (!this.disconnected) {
                        var e = this.id;
                        u.default.log("Disconnect peer with ID:" + e),
                          (this._disconnected = !0),
                          (this._open = !1),
                          this.socket.close(),
                          (this._lastServerId = e),
                          (this._id = null),
                          this.emit(h.PeerEventType.Disconnected, e);
                      }
                    }),
                    (t.prototype.reconnect = function () {
                      if (this.disconnected && !this.destroyed)
                        u.default.log("Attempting reconnection to server with ID " + this._lastServerId),
                          (this._disconnected = !1),
                          this._initialize(this._lastServerId);
                      else {
                        if (this.destroyed)
                          throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
                        if (this.disconnected || this.open)
                          throw new Error(
                            "Peer " + this.id + " cannot reconnect because it is not disconnected from the server!"
                          );
                        u.default.error("In a hurry? We're still trying to make the initial connection!");
                      }
                    }),
                    (t.prototype.listAllPeers = function (e) {
                      var t = this;
                      void 0 === e && (e = function (e) {}),
                        this._api
                          .listAllPeers()
                          .then(function (t) {
                            return e(t);
                          })
                          .catch(function (e) {
                            return t._abort(h.PeerErrorType.ServerError, e);
                          });
                    }),
                    (t.DEFAULT_KEY = "peerjs"),
                    t
                  );
                })(c.EventEmitter);
              r.Peer = m;
            },
            {
              eventemitter3: "JJlS",
              "./util": "BHXf",
              "./logger": "WOs9",
              "./socket": "wJlv",
              "./mediaconnection": "dbHP",
              "./dataconnection": "GBTQ",
              "./enums": "ZRYf",
              "./api": "in7L",
            },
          ],
          iTK6: [
            function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 }), (r.peerjs = void 0);
              var n = e("./util"),
                i = e("./peer");
              (r.peerjs = { Peer: i.Peer, util: n.util }),
                (r.default = i.Peer),
                (window.peerjs = r.peerjs),
                (window.Peer = i.Peer);
            },
            { "./util": "BHXf", "./peer": "Hxpd" },
          ],
        },
        {},
        ["iTK6"]
      );
    },
  },
]);
