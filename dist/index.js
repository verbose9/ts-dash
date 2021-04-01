var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "development";
var NODE_ENV = "development";
var SSR = false;

// build/_snowpack/pkg/common/index-ae389540.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n = 60103, p = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q = 60109, r = 60110, t = 60112;
  exports.Suspense = 60113;
  var u = 60115, v = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    exports.Fragment = w("react.fragment");
    exports.StrictMode = w("react.strict_mode");
    exports.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    exports.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var x = typeof Symbol === "function" && Symbol.iterator;
  function y2(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x && a[x] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B2 = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D2() {
  }
  D2.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  var F2 = E.prototype = new D2();
  F2.constructor = E;
  objectAssign(F2, C.prototype);
  F2.isPureReactComponent = true;
  var G2 = {current: null}, H2 = Object.prototype.hasOwnProperty, I2 = {key: true, ref: true, __self: true, __source: true};
  function J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (b != null)
      for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
        H2.call(b, e) && !I2.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (g === 1)
      d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++)
        f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in g = a.defaultProps, g)
        d[e] === void 0 && (d[e] = g[e]);
    return {$$typeof: n, type: a, key: k, ref: h, props: d, _owner: G2.current};
  }
  function K(a, b) {
    return {$$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
  }
  function L(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n;
  }
  function escape(a) {
    var b = {"=": "=0", ":": "=2"};
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var M2 = /\/+/g;
  function N2(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  }
  function O2(a, b, c, e, d) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case p:
              h = true;
          }
      }
    if (h)
      return h = a, d = d(h), a = e === "" ? "." + N2(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M2, "$&/") + "/"), O2(d, b, c, "", function(a2) {
        return a2;
      })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M2, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = e === "" ? "." : e + ":";
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N2(k, g);
        h += O2(k, b, c, f, d);
      }
    else if (f = y2(a), typeof f === "function")
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        k = k.value, f = e + N2(k, g++), h += O2(k, b, c, f, d);
    else if (k === "object")
      throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P2(a, b, c) {
    if (a == null)
      return a;
    var e = [], d = 0;
    O2(a, e, "", "", function(a2) {
      return b.call(c, a2, d++);
    });
    return e;
  }
  function Q(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R2 = {current: null};
  function S2() {
    var a = R2.current;
    if (a === null)
      throw Error(z(321));
    return a;
  }
  var T2 = {ReactCurrentDispatcher: R2, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G2, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P2, forEach: function(a, b, c) {
    P2(a, function() {
      b.apply(this, arguments);
    }, c);
  }, count: function(a) {
    var b = 0;
    P2(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return P2(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!L(a))
      throw Error(z(143));
    return a;
  }};
  exports.Component = C;
  exports.PureComponent = E;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
  exports.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(z(267, a));
    var e = objectAssign({}, a.props), d = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== void 0 && (k = b.ref, h = G2.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        H2.call(b, f) && !I2.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++)
        g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  exports.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = {$$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
    a.Provider = {$$typeof: q, _context: a};
    return a.Consumer = a;
  };
  exports.createElement = J;
  exports.createFactory = function(a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a) {
    return {$$typeof: t, render: a};
  };
  exports.isValidElement = L;
  exports.lazy = function(a) {
    return {$$typeof: v, _payload: {_status: -1, _result: a}, _init: Q};
  };
  exports.memo = function(a, b) {
    return {$$typeof: u, type: a, compare: b === void 0 ? null : b};
  };
  exports.useCallback = function(a, b) {
    return S2().useCallback(a, b);
  };
  exports.useContext = function(a, b) {
    return S2().useContext(a, b);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a, b) {
    return S2().useEffect(a, b);
  };
  exports.useImperativeHandle = function(a, b, c) {
    return S2().useImperativeHandle(a, b, c);
  };
  exports.useLayoutEffect = function(a, b) {
    return S2().useLayoutEffect(a, b);
  };
  exports.useMemo = function(a, b) {
    return S2().useMemo(a, b);
  };
  exports.useReducer = function(a, b, c) {
    return S2().useReducer(a, b, c);
  };
  exports.useRef = function(a) {
    return S2().useRef(a);
  };
  exports.useState = function(a) {
    return S2().useState(a);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/_snowpack/pkg/react.js
var useEffect = react.useEffect;

// build/_snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f, g, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l = performance;
    exports.unstable_now = function() {
      return l.now();
    };
  } else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
      return p.now() - q;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t = null, u = null, w = function() {
      if (t !== null)
        try {
          var a = exports.unstable_now();
          t(true, a);
          t = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
    };
    f = function(a) {
      t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
    };
    g = function(a, b) {
      u = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A = false, B2 = null, C = -1, D2 = 5, E = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A = false;
    };
    f = function(a) {
      B2 = a;
      A || (A = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C = x(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C);
      C = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
            if (n !== void 0 && 0 > I2(n, c))
              r !== void 0 && 0 > I2(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
            else if (r !== void 0 && 0 > I2(r, c))
              a[d] = r, a[v] = c, d = v;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J(M2); b !== null; ) {
      if (b.callback === null)
        K(M2);
      else if (b.startTime <= a)
        K(M2), b.sortIndex = b.expirationTime, H2(L, b);
      else
        break;
      b = J(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f(V2);
      else {
        var b = J(M2);
        b !== null && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L) && K(L);
          T2(b);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m = true;
      else {
        var n = J(M2);
        n !== null && g(U2, n.startTime - b);
        m = false;
      }
      return m;
    } finally {
      O2 = null, P2 = c, Q = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = {id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1};
    c > d ? (a.sortIndex = c, H2(M2, a), J(L) === null && a === J(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L, a), R2 || Q || (R2 = true, f(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var E;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, {configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    }});
    Object.defineProperty(a, b, {enumerable: c.enumerable});
    return {getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    }};
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return objectAssign({}, b, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked});
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = {initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null};
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  react.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = objectAssign({children: void 0}, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = {initialValue: Sa(c)};
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb;
var ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
var Qb;
function Rb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a) {
  Sb = true;
  Tb = a;
}};
function Xb(a, b, c, d, e, f, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return {blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d]};
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            scheduler.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (f !== 0)
    d = f, e = F = 15;
  else if (f = c & 134217727, f !== 0) {
    var k = f & ~g;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
  } else
    f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (f === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f = Zb(e);
    if (f === null)
      e = null;
    else {
      var g = f.tag;
      if (g === 13) {
        e = $b(f);
        if (e !== null)
          return e;
        e = null;
      } else if (g === 3) {
        if (f.stateNode.hydrate)
          return f.tag === 3 ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({event: c, listeners: b}));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return {node: c, offset: b - a};
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {start: d.selectionStart, end: d.selectionEnd} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset}), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({event: b, listeners: d}), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
  a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, {capture: true, passive: e}) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {passive: e}) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t = d2, q; t !== null; ) {
          q = t;
          var v = q.stateNode;
          q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
          if (z)
            break;
          t = t.return;
        }
        0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({event: h2, listeners: w}));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k2 = null, x = d2;
          if (k2 !== x) {
            w = Bd;
            v = "onMouseLeave";
            u = "onMouseEnter";
            t = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
            z = k2 == null ? h2 : ue(k2);
            q = x == null ? h2 : ue(x);
            h2 = new w(v, t + "leave", k2, c, e2);
            h2.target = z;
            h2.relatedTarget = q;
            v = null;
            wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
            z = v;
            if (k2 && x)
              b: {
                w = k2;
                u = x;
                t = 0;
                for (q = w; q; q = gf(q))
                  t++;
                q = 0;
                for (v = u; v; v = gf(v))
                  q++;
                for (; 0 < t - q; )
                  w = gf(w), t--;
                for (; 0 < q - t; )
                  u = gf(u), q--;
                for (; t--; ) {
                  if (w === u || u !== null && w === u.alternate)
                    break b;
                  w = gf(w);
                  u = gf(u);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g2, h2, k2, w, false);
            x !== null && z !== null && hf(g2, z, x, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J = ve;
        else if (me(h2))
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
        if (J && (J = J(a, d2))) {
          ne(g2, J, c, e2);
          break a;
        }
        K && K(a, h2, d2);
        a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({event: L, listeners: K}), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({event: e2, listeners: d2}), e2.data = Q);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return {instance: a, listener: b, currentTarget: c};
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({event: b, listeners: g});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return {$$typeof: Ga, toString: a, valueOf: a};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [];
var Af = -1;
function Bf(a) {
  return {current: a};
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return objectAssign({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = objectAssign({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = {context: a, observedBits: b, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = {lanes: 0, firstContext: b, responders: null};
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
}
function zg(a, b) {
  return {eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = {eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null};
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = {baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects};
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    g === null ? f = l : g.next = l;
    g = k;
    var n = a.alternate;
    if (n !== null) {
      n = n.updateQueue;
      var A = n.lastBaseUpdate;
      A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
    }
  }
  if (f !== null) {
    A = e.baseState;
    g = 0;
    n = l = k = null;
    do {
      h = f.lane;
      var p = f.eventTime;
      if ((d & h) === h) {
        n !== null && (n = n.next = {
          eventTime: p,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C = a, x = f;
          h = b;
          p = c;
          switch (x.tag) {
            case 1:
              C = x.payload;
              if (typeof C === "function") {
                A = C.call(p, A, h);
                break a;
              }
              A = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x.payload;
              h = typeof C === "function" ? C.call(p, A, h) : C;
              if (h === null || h === void 0)
                break a;
              A = objectAssign({}, A, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
      } else
        p = {eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null}, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
      f = f.next;
      if (f === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n === null && (k = A);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : objectAssign({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = {isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
}};
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x(e2, g2, h2, k2) {
    for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var n2 = p(e2, u, h2[z], k2);
      if (n2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && n2.alternate === null && b(e2, u);
      g2 = f(n2, g2, z);
      t === null ? l2 = n2 : t.sibling = n2;
      t = n2;
      u = q;
    }
    if (z === h2.length)
      return c(e2, u), l2;
    if (u === null) {
      for (; z < h2.length; z++)
        u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
      return l2;
    }
    for (u = d(e2, u); z < h2.length; z++)
      q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  function w(e2, g2, h2, k2) {
    var l2 = La(h2);
    if (typeof l2 !== "function")
      throw Error(y(150));
    h2 = l2.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var w2 = p(e2, u, n2.value, k2);
      if (w2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && w2.alternate === null && b(e2, u);
      g2 = f(w2, g2, z);
      t === null ? l2 = w2 : t.sibling = w2;
      t = w2;
      u = q;
    }
    if (n2.done)
      return c(e2, u), l2;
    if (u === null) {
      for (; !n2.done; z++, n2 = h2.next())
        n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
      return l2;
    }
    for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
      n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l2 = typeof f2 === "object" && f2 !== null;
    if (l2)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l2 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l2) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Qg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x(a2, d2, f2, h2);
    if (La(f2))
      return w(a2, d2, f2, h2);
    l2 && Rg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l = k.lane;
      if ((xh & l) === l)
        h !== null && (h = h.next = {lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null}), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n = {
          lane: l,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g = h = n, f = d) : h = h.next = n;
        R.lanes |= l;
        Dg |= l;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l = k[1], n = k[0];
  k = T;
  var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
  A = A.subscribe;
  var w = R;
  a.memoizedState = {refs: p, source: b, subscribe: d};
  h.useEffect(function() {
    p.getSnapshot = c;
    p.setSnapshot = l;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p.getSnapshot, c2 = p.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q) {
        c2(function() {
          throw q;
        });
      }
    });
  }, [b, d]);
  He(C, c) && He(x, b) && He(A, d) || (a = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n}, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
  return n;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a};
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = {tag: a, create: b, destroy: c, deps: d, next: null};
  b = R.updateQueue;
  b === null ? (b = {lastEffect: null}, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = {current: a};
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (S !== null) {
    var g = S.memoizedState;
    f = g.destroy;
    if (d !== null && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = {lane: e, action: c, eagerReducer: null, eagerState: null, next: null}, g = b.pending;
  g === null ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || g !== null && g === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h))
          return;
      } catch (l) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = {pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b};
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = {refs: {getSnapshot: b, setSnapshot: null}, source: a, subscribe: c};
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = {baseLanes: 0}, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = {baseLanes: 0}, ni(b, f !== null ? f.baseLanes : c);
    else
      return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {baseLanes: a}, ni(b, a), null;
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l = c.contextType;
    typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
    var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
    wg = false;
    var p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l;
    A = b.pendingProps;
    p = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C = c.getDerivedStateFromProps;
    (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
    wg = false;
    p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    var x = b.memoizedState;
    h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = (b.flags & 64) !== 0;
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({mode: "visible", children: a}, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = {mode: "hidden", children: b};
  (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, {mode: "visible", children: c});
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = {mode: "hidden", children: c};
  (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = {isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f} : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = objectAssign({}, e, {value: void 0});
        d = objectAssign({}, d, {value: void 0});
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
        if (l === "style") {
          var h = e[l];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = e != null ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
        if (l === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l, c)), c = k;
        else
          l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = {wasMultiple: !!f.multiple};
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {is: d.is}) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = {wasMultiple: !!d.multiple};
              e = objectAssign({}, d, {value: void 0});
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k = h[f];
              f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f = (b.flags & 64) !== 0;
      g = d.rendering;
      if (g === null)
        if (f)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g = ih(a);
              if (g !== null) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                f !== null && (b.updateQueue = f, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f)
          if (a = ih(g), a !== null) {
            if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {value: a, source: b, stack: e};
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = {element: null};
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, {componentStack: c2 !== null ? c2 : ""});
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l = f[h];
    if (l === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l = b;
        Rc(k);
        var n = F;
        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
      }
    } else
      l <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l = k;
          if ((h.mode & 2) === 0) {
            var n = h.alternate;
            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A = (P.current & 1) !== 0, p = g;
          do {
            var C;
            if (C = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null)
                C = x.dehydrated !== null ? true : false;
              else {
                var w = p.memoizedProps;
                C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
              }
            }
            if (C) {
              var z = p.updateQueue;
              if (z === null) {
                var u = new Set();
                u.add(l);
                p.updateQueue = u;
              } else
                z.add(l);
              if ((p.mode & 2) === 0) {
                p.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q = f.pingCache;
              q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
              if (!k.has(h)) {
                k.add(h);
                var v = Yj.bind(null, f, l, h);
                l.then(v, v);
              }
              p.flags |= 4096;
              p.lanes = b;
              break a;
            }
            p = p.return;
          } while (p !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p = g;
        do {
          switch (p.tag) {
            case 3:
              f = k;
              p.flags |= 4096;
              b &= -b;
              p.lanes |= b;
              var J = Pi(p, f, b);
              Bg(p, J);
              break a;
            case 1:
              f = k;
              var K = p.type, Q = p.stateNode;
              if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var L = Si(p, f, b);
                Bg(p, L);
                break a;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k = 31 - Vc(f), l = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f &= ~l;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = {start: g.selectionStart, end: g.selectionEnd};
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
            h = l.anchorNode;
            f = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                  w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                  w.nodeType === 3 && (n += w.nodeValue.length);
                  if ((u = w.firstChild) === null)
                    break;
                  z = w;
                  w = u;
                }
                for (; ; ) {
                  if (w === g)
                    break b;
                  z === h && ++C === f && (A = n);
                  z === k && ++x === l && (p = n);
                  if ((u = w.nextSibling) !== null)
                    break;
                  w = z;
                  z = w.parentNode;
                }
                w = u;
              }
            h = A === -1 || p === -1 ? null : {start: A, end: p};
          } else
            h = null;
      h = h || {start: 0, end: 0};
    } else
      h = null;
    lf = {focusedElem: g, selectionRange: h};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; Z !== null; ) {
          var t = Z.flags;
          t & 16 && pb(Z.stateNode, "");
          if (t & 128) {
            var q = Z.alternate;
            if (q !== null) {
              var v = q.ref;
              v !== null && (typeof v === "function" ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J = h.alternate;
              dj(h);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v = lf;
    q = Ne();
    t = v.focusedElem;
    g = v.selectionRange;
    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
      g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
      q = [];
      for (v = t; v = v.parentNode; )
        v.nodeType === 1 && q.push({element: v, left: v.scrollLeft, top: v.scrollTop});
      typeof t.focus === "function" && t.focus();
      for (t = 0; t < q.length; t++)
        v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t = a; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t, Z.alternate, Z);
          if (K & 128) {
            q = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q = L;
                  break;
                default:
                  q = L;
              }
              typeof Q === "function" ? Q(q) : Q.current = q;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if (typeof g === "function")
      try {
        g();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f === null)
        throw Error(y(330));
      Wi(f, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l = k.firstContext; l !== null; ) {
                  if (l.context === d && (l.observedBits & f) !== 0) {
                    h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    l !== null && (l.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {lanes: b.lanes, firstContext: b.firstContext};
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c};
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = {element: a};
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? {hydrate: true} : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
var hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
var render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
var unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// build/_snowpack/pkg/react-feather.js
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
function _extends$4t() {
  _extends$4t = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4t.apply(this, arguments);
}
function _objectWithoutProperties$4t(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4t(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4t(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Activity = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4t(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4t({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  }));
});
Activity.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Activity.displayName = "Activity";
function _extends$4s() {
  _extends$4s = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4s.apply(this, arguments);
}
function _objectWithoutProperties$4s(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4s(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4s(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Airplay = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4s(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4s({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "12 15 17 21 7 21 12 15"
  }));
});
Airplay.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Airplay.displayName = "Airplay";
function _extends$4r() {
  _extends$4r = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4r.apply(this, arguments);
}
function _objectWithoutProperties$4r(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4r(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4r(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlertCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4r(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4r({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertCircle.displayName = "AlertCircle";
function _extends$4q() {
  _extends$4q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4q.apply(this, arguments);
}
function _objectWithoutProperties$4q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlertOctagon = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertOctagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertOctagon.displayName = "AlertOctagon";
function _extends$4p() {
  _extends$4p = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4p.apply(this, arguments);
}
function _objectWithoutProperties$4p(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4p(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4p(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlertTriangle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4p(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4p({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
AlertTriangle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertTriangle.displayName = "AlertTriangle";
function _extends$4o() {
  _extends$4o = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4o.apply(this, arguments);
}
function _objectWithoutProperties$4o(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4o(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4o(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlignCenter = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4o(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4o({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "10",
    x2: "6",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "18",
    x2: "6",
    y2: "18"
  }));
});
AlignCenter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignCenter.displayName = "AlignCenter";
function _extends$4n() {
  _extends$4n = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4n.apply(this, arguments);
}
function _objectWithoutProperties$4n(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4n(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4n(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlignJustify = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4n(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4n({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
});
AlignJustify.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignJustify.displayName = "AlignJustify";
function _extends$4m() {
  _extends$4m = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4m.apply(this, arguments);
}
function _objectWithoutProperties$4m(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4m(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4m(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlignLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4m(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4m({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
});
AlignLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignLeft.displayName = "AlignLeft";
function _extends$4l() {
  _extends$4l = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4l.apply(this, arguments);
}
function _objectWithoutProperties$4l(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4l(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4l(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AlignRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4l(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4l({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "10",
    x2: "7",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "7",
    y2: "18"
  }));
});
AlignRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignRight.displayName = "AlignRight";
function _extends$4k() {
  _extends$4k = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4k.apply(this, arguments);
}
function _objectWithoutProperties$4k(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4k(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4k(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Anchor = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4k(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4k({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5 12H2a10 10 0 0 0 20 0h-3"
  }));
});
Anchor.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Anchor.displayName = "Anchor";
function _extends$4j() {
  _extends$4j = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4j.apply(this, arguments);
}
function _objectWithoutProperties$4j(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4j(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4j(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Aperture = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4j(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4j({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.31",
    y1: "8",
    x2: "20.05",
    y2: "17.94"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9.69",
    y1: "8",
    x2: "21.17",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "7.38",
    y1: "12",
    x2: "13.12",
    y2: "2.06"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9.69",
    y1: "16",
    x2: "3.95",
    y2: "6.06"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.31",
    y1: "16",
    x2: "2.83",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16.62",
    y1: "12",
    x2: "10.88",
    y2: "21.94"
  }));
});
Aperture.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Aperture.displayName = "Aperture";
function _extends$4i() {
  _extends$4i = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4i.apply(this, arguments);
}
function _objectWithoutProperties$4i(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4i(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4i(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Archive = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4i(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4i({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "21 8 21 21 3 21 3 8"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "3",
    width: "22",
    height: "5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "12"
  }));
});
Archive.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Archive.displayName = "Archive";
function _extends$4h() {
  _extends$4h = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4h.apply(this, arguments);
}
function _objectWithoutProperties$4h(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4h(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4h(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowDownCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4h(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4h({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 12 12 16 16 12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }));
});
ArrowDownCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownCircle.displayName = "ArrowDownCircle";
function _extends$4g() {
  _extends$4g = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4g.apply(this, arguments);
}
function _objectWithoutProperties$4g(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4g(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4g(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowDownLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4g(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4g({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "7",
    x2: "7",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 17 7 17 7 7"
  }));
});
ArrowDownLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownLeft.displayName = "ArrowDownLeft";
function _extends$4f() {
  _extends$4f = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4f.apply(this, arguments);
}
function _objectWithoutProperties$4f(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4f(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4f(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowDownRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4f(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4f({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "17",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 7 17 17 7 17"
  }));
});
ArrowDownRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownRight.displayName = "ArrowDownRight";
function _extends$4e() {
  _extends$4e = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4e.apply(this, arguments);
}
function _objectWithoutProperties$4e(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4e(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4e(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4e(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4e({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "19 12 12 19 5 12"
  }));
});
ArrowDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDown.displayName = "ArrowDown";
function _extends$4d() {
  _extends$4d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4d.apply(this, arguments);
}
function _objectWithoutProperties$4d(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4d(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4d(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowLeftCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4d(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4d({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 8 8 12 12 16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "12",
    x2: "8",
    y2: "12"
  }));
});
ArrowLeftCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowLeftCircle.displayName = "ArrowLeftCircle";
function _extends$4c() {
  _extends$4c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4c.apply(this, arguments);
}
function _objectWithoutProperties$4c(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4c(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4c(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4c({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 19 5 12 12 5"
  }));
});
ArrowLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowLeft.displayName = "ArrowLeft";
function _extends$4b() {
  _extends$4b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4b.apply(this, arguments);
}
function _objectWithoutProperties$4b(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4b(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowRightCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4b(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4b({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 16 16 12 12 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
ArrowRightCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowRightCircle.displayName = "ArrowRightCircle";
function _extends$4a() {
  _extends$4a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4a.apply(this, arguments);
}
function _objectWithoutProperties$4a(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4a(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4a(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4a({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
});
ArrowRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowRight.displayName = "ArrowRight";
function _extends$49() {
  _extends$49 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$49.apply(this, arguments);
}
function _objectWithoutProperties$49(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$49(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$49(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowUpCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$49(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$49({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 12 12 8 8 12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "8"
  }));
});
ArrowUpCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpCircle.displayName = "ArrowUpCircle";
function _extends$48() {
  _extends$48 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$48.apply(this, arguments);
}
function _objectWithoutProperties$48(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$48(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$48(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowUpLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$48(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$48({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "17",
    x2: "7",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 17 7 7 17 7"
  }));
});
ArrowUpLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpLeft.displayName = "ArrowUpLeft";
function _extends$47() {
  _extends$47 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$47.apply(this, arguments);
}
function _objectWithoutProperties$47(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$47(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$47(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowUpRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$47(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$47({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }));
});
ArrowUpRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpRight.displayName = "ArrowUpRight";
function _extends$46() {
  _extends$46 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$46.apply(this, arguments);
}
function _objectWithoutProperties$46(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$46(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$46(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$46(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$46({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "5"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "5 12 12 5 19 12"
  }));
});
ArrowUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUp.displayName = "ArrowUp";
function _extends$45() {
  _extends$45 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$45.apply(this, arguments);
}
function _objectWithoutProperties$45(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$45(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$45(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var AtSign = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$45(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$45({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
  }));
});
AtSign.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AtSign.displayName = "AtSign";
function _extends$44() {
  _extends$44 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$44.apply(this, arguments);
}
function _objectWithoutProperties$44(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$44(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$44(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Award = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$44(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$44({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
  }));
});
Award.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Award.displayName = "Award";
function _extends$43() {
  _extends$43 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$43.apply(this, arguments);
}
function _objectWithoutProperties$43(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$43(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$43(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var BarChart2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$43(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$43({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  }));
});
BarChart2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BarChart2.displayName = "BarChart2";
function _extends$42() {
  _extends$42 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$42.apply(this, arguments);
}
function _objectWithoutProperties$42(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$42(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$42(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var BarChart = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$42(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$42({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "16"
  }));
});
BarChart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BarChart.displayName = "BarChart";
function _extends$41() {
  _extends$41 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$41.apply(this, arguments);
}
function _objectWithoutProperties$41(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$41(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$41(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var BatteryCharging = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$41(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$41({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "13",
    x2: "23",
    y2: "11"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "11 6 7 12 13 12 9 18"
  }));
});
BatteryCharging.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BatteryCharging.displayName = "BatteryCharging";
function _extends$40() {
  _extends$40 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$40.apply(this, arguments);
}
function _objectWithoutProperties$40(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$40(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$40(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Battery = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$40(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$40({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "6",
    width: "18",
    height: "12",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "13",
    x2: "23",
    y2: "11"
  }));
});
Battery.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Battery.displayName = "Battery";
function _extends$3$() {
  _extends$3$ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3$.apply(this, arguments);
}
function _objectWithoutProperties$3$(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3$(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3$(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var BellOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3$(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3$({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.63 13A17.89 17.89 0 0 1 18 8"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18 8a6 6 0 0 0-9.33-5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
BellOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BellOff.displayName = "BellOff";
function _extends$3_() {
  _extends$3_ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3_.apply(this, arguments);
}
function _objectWithoutProperties$3_(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3_(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3_(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Bell = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3_(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3_({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }));
});
Bell.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bell.displayName = "Bell";
function _extends$3Z() {
  _extends$3Z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3Z.apply(this, arguments);
}
function _objectWithoutProperties$3Z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3Z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3Z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Bluetooth = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3Z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3Z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
  }));
});
Bluetooth.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bluetooth.displayName = "Bluetooth";
function _extends$3Y() {
  _extends$3Y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3Y.apply(this, arguments);
}
function _objectWithoutProperties$3Y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3Y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3Y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Bold = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3Y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3Y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }));
});
Bold.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bold.displayName = "Bold";
function _extends$3X() {
  _extends$3X = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3X.apply(this, arguments);
}
function _objectWithoutProperties$3X(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3X(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3X(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var BookOpen = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3X(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3X({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
  }));
});
BookOpen.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BookOpen.displayName = "BookOpen";
function _extends$3W() {
  _extends$3W = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3W.apply(this, arguments);
}
function _objectWithoutProperties$3W(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3W(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3W(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Book = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3W(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3W({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }));
});
Book.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Book.displayName = "Book";
function _extends$3V() {
  _extends$3V = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3V.apply(this, arguments);
}
function _objectWithoutProperties$3V(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3V(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3V(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Bookmark = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3V(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3V({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
});
Bookmark.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bookmark.displayName = "Bookmark";
function _extends$3U() {
  _extends$3U = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3U.apply(this, arguments);
}
function _objectWithoutProperties$3U(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3U(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3U(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Box = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3U(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3U({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Box.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Box.displayName = "Box";
function _extends$3T() {
  _extends$3T = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3T.apply(this, arguments);
}
function _objectWithoutProperties$3T(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3T(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3T(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Briefcase = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3T(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3T({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }));
});
Briefcase.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Briefcase.displayName = "Briefcase";
function _extends$3S() {
  _extends$3S = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3S.apply(this, arguments);
}
function _objectWithoutProperties$3S(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3S(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3S(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Calendar = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3S(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3S({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }));
});
Calendar.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Calendar.displayName = "Calendar";
function _extends$3R() {
  _extends$3R = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3R.apply(this, arguments);
}
function _objectWithoutProperties$3R(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3R(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3R(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CameraOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3R(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3R({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
  }));
});
CameraOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CameraOff.displayName = "CameraOff";
function _extends$3Q() {
  _extends$3Q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3Q.apply(this, arguments);
}
function _objectWithoutProperties$3Q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3Q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3Q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Camera = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3Q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3Q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }));
});
Camera.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Camera.displayName = "Camera";
function _extends$3P() {
  _extends$3P = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3P.apply(this, arguments);
}
function _objectWithoutProperties$3P(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3P(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3P(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Cast = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3P(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3P({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "20",
    x2: "2.01",
    y2: "20"
  }));
});
Cast.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cast.displayName = "Cast";
function _extends$3O() {
  _extends$3O = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3O.apply(this, arguments);
}
function _objectWithoutProperties$3O(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3O(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3O(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CheckCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3O(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3O({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
});
CheckCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CheckCircle.displayName = "CheckCircle";
function _extends$3N() {
  _extends$3N = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3N.apply(this, arguments);
}
function _objectWithoutProperties$3N(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3N(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3N(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CheckSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3N(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3N({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
});
CheckSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CheckSquare.displayName = "CheckSquare";
function _extends$3M() {
  _extends$3M = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3M.apply(this, arguments);
}
function _objectWithoutProperties$3M(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3M(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3M(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Check = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3M(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3M({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Check.displayName = "Check";
function _extends$3L() {
  _extends$3L = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3L.apply(this, arguments);
}
function _objectWithoutProperties$3L(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3L(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3L(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3L(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3L({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronDown.displayName = "ChevronDown";
function _extends$3K() {
  _extends$3K = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3K.apply(this, arguments);
}
function _objectWithoutProperties$3K(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3K(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3K(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3K(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3K({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
ChevronLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronLeft.displayName = "ChevronLeft";
function _extends$3J() {
  _extends$3J = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3J.apply(this, arguments);
}
function _objectWithoutProperties$3J(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3J(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3J(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3J(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3J({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
ChevronRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronRight.displayName = "ChevronRight";
function _extends$3I() {
  _extends$3I = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3I.apply(this, arguments);
}
function _objectWithoutProperties$3I(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3I(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3I(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3I(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3I({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
ChevronUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronUp.displayName = "ChevronUp";
function _extends$3H() {
  _extends$3H = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3H.apply(this, arguments);
}
function _objectWithoutProperties$3H(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3H(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3H(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronsDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3H(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3H({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 13 12 18 17 13"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 6 12 11 17 6"
  }));
});
ChevronsDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsDown.displayName = "ChevronsDown";
function _extends$3G() {
  _extends$3G = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3G.apply(this, arguments);
}
function _objectWithoutProperties$3G(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3G(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3G(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronsLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3G(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3G({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "11 17 6 12 11 7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "18 17 13 12 18 7"
  }));
});
ChevronsLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsLeft.displayName = "ChevronsLeft";
function _extends$3F() {
  _extends$3F = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3F.apply(this, arguments);
}
function _objectWithoutProperties$3F(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3F(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3F(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronsRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3F(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3F({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "13 17 18 12 13 7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "6 17 11 12 6 7"
  }));
});
ChevronsRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsRight.displayName = "ChevronsRight";
function _extends$3E() {
  _extends$3E = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3E.apply(this, arguments);
}
function _objectWithoutProperties$3E(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3E(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3E(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronsUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3E(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3E({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 11 12 6 7 11"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 18 12 13 7 18"
  }));
});
ChevronsUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsUp.displayName = "ChevronsUp";
function _extends$3D() {
  _extends$3D = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3D.apply(this, arguments);
}
function _objectWithoutProperties$3D(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3D(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3D(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Chrome = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3D(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3D({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21.17",
    y1: "8",
    x2: "12",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3.95",
    y1: "6.06",
    x2: "8.54",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10.88",
    y1: "21.94",
    x2: "15.46",
    y2: "14"
  }));
});
Chrome.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Chrome.displayName = "Chrome";
function _extends$3C() {
  _extends$3C = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3C.apply(this, arguments);
}
function _objectWithoutProperties$3C(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3C(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3C(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Circle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3C(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3C({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
});
Circle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Circle.displayName = "Circle";
function _extends$3B() {
  _extends$3B = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3B.apply(this, arguments);
}
function _objectWithoutProperties$3B(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3B(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3B(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Clipboard = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3B(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3B({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "8",
    y: "2",
    width: "8",
    height: "4",
    rx: "1",
    ry: "1"
  }));
});
Clipboard.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Clipboard.displayName = "Clipboard";
function _extends$3A() {
  _extends$3A = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3A.apply(this, arguments);
}
function _objectWithoutProperties$3A(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3A(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3A(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Clock = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3A(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3A({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
});
Clock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Clock.displayName = "Clock";
function _extends$3z() {
  _extends$3z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3z.apply(this, arguments);
}
function _objectWithoutProperties$3z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CloudDrizzle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "19",
    x2: "8",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "19",
    x2: "16",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  }));
});
CloudDrizzle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudDrizzle.displayName = "CloudDrizzle";
function _extends$3y() {
  _extends$3y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3y.apply(this, arguments);
}
function _objectWithoutProperties$3y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CloudLightning = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "13 11 9 17 15 17 11 23"
  }));
});
CloudLightning.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudLightning.displayName = "CloudLightning";
function _extends$3x() {
  _extends$3x = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3x.apply(this, arguments);
}
function _objectWithoutProperties$3x(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3x(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3x(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CloudOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3x(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3x({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
CloudOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudOff.displayName = "CloudOff";
function _extends$3w() {
  _extends$3w = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3w.apply(this, arguments);
}
function _objectWithoutProperties$3w(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3w(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3w(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CloudRain = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3w(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3w({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  }));
});
CloudRain.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudRain.displayName = "CloudRain";
function _extends$3v() {
  _extends$3v = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3v.apply(this, arguments);
}
function _objectWithoutProperties$3v(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3v(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3v(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CloudSnow = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3v(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3v({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "16",
    x2: "8.01",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "20",
    x2: "8.01",
    y2: "20"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12.01",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "16",
    x2: "16.01",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "20",
    x2: "16.01",
    y2: "20"
  }));
});
CloudSnow.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudSnow.displayName = "CloudSnow";
function _extends$3u() {
  _extends$3u = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3u.apply(this, arguments);
}
function _objectWithoutProperties$3u(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3u(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3u(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Cloud = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3u(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3u({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
  }));
});
Cloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cloud.displayName = "Cloud";
function _extends$3t() {
  _extends$3t = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3t.apply(this, arguments);
}
function _objectWithoutProperties$3t(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3t(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3t(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Code = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3t(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3t({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 6 2 12 8 18"
  }));
});
Code.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Code.displayName = "Code";
function _extends$3s() {
  _extends$3s = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3s.apply(this, arguments);
}
function _objectWithoutProperties$3s(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3s(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3s(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Codepen = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3s(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3s({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "15.5"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "22 8.5 12 15.5 2 8.5"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "2 15.5 12 8.5 22 15.5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8.5"
  }));
});
Codepen.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Codepen.displayName = "Codepen";
function _extends$3r() {
  _extends$3r = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3r.apply(this, arguments);
}
function _objectWithoutProperties$3r(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3r(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3r(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Codesandbox = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3r(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3r({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7.5 4.21 12 6.81 16.5 4.21"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7.5 19.79 7.5 14.6 3 12"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "21 12 16.5 14.6 16.5 19.79"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Codesandbox.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Codesandbox.displayName = "Codesandbox";
function _extends$3q() {
  _extends$3q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3q.apply(this, arguments);
}
function _objectWithoutProperties$3q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Coffee = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 8h1a4 4 0 0 1 0 8h-1"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "1",
    x2: "6",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "1",
    x2: "10",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14",
    y1: "1",
    x2: "14",
    y2: "4"
  }));
});
Coffee.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Coffee.displayName = "Coffee";
function _extends$3p() {
  _extends$3p = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3p.apply(this, arguments);
}
function _objectWithoutProperties$3p(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3p(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3p(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Columns = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3p(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3p({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
  }));
});
Columns.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Columns.displayName = "Columns";
function _extends$3o() {
  _extends$3o = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3o.apply(this, arguments);
}
function _objectWithoutProperties$3o(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3o(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3o(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Command = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3o(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3o({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
});
Command.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Command.displayName = "Command";
function _extends$3n() {
  _extends$3n = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3n.apply(this, arguments);
}
function _objectWithoutProperties$3n(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3n(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3n(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Compass = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3n(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3n({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
  }));
});
Compass.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Compass.displayName = "Compass";
function _extends$3m() {
  _extends$3m = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3m.apply(this, arguments);
}
function _objectWithoutProperties$3m(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3m(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3m(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Copy = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3m(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3m({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  }));
});
Copy.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Copy.displayName = "Copy";
function _extends$3l() {
  _extends$3l = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3l.apply(this, arguments);
}
function _objectWithoutProperties$3l(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3l(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3l(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerDownLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3l(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3l({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 10 4 15 9 20"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 4v7a4 4 0 0 1-4 4H4"
  }));
});
CornerDownLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerDownLeft.displayName = "CornerDownLeft";
function _extends$3k() {
  _extends$3k = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3k.apply(this, arguments);
}
function _objectWithoutProperties$3k(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3k(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3k(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerDownRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3k(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3k({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 10 20 15 15 20"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4 4v7a4 4 0 0 0 4 4h12"
  }));
});
CornerDownRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerDownRight.displayName = "CornerDownRight";
function _extends$3j() {
  _extends$3j = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3j.apply(this, arguments);
}
function _objectWithoutProperties$3j(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3j(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3j(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerLeftDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3j(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3j({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "14 15 9 20 4 15"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 4h-7a4 4 0 0 0-4 4v12"
  }));
});
CornerLeftDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerLeftDown.displayName = "CornerLeftDown";
function _extends$3i() {
  _extends$3i = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3i.apply(this, arguments);
}
function _objectWithoutProperties$3i(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3i(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3i(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerLeftUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3i(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3i({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "14 9 9 4 4 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 20h-7a4 4 0 0 1-4-4V4"
  }));
});
CornerLeftUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerLeftUp.displayName = "CornerLeftUp";
function _extends$3h() {
  _extends$3h = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3h.apply(this, arguments);
}
function _objectWithoutProperties$3h(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3h(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3h(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerRightDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3h(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3h({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "10 15 15 20 20 15"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4 4h7a4 4 0 0 1 4 4v12"
  }));
});
CornerRightDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerRightDown.displayName = "CornerRightDown";
function _extends$3g() {
  _extends$3g = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3g.apply(this, arguments);
}
function _objectWithoutProperties$3g(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3g(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3g(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerRightUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3g(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3g({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "10 9 15 4 20 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4 20h7a4 4 0 0 0 4-4V4"
  }));
});
CornerRightUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerRightUp.displayName = "CornerRightUp";
function _extends$3f() {
  _extends$3f = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3f.apply(this, arguments);
}
function _objectWithoutProperties$3f(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3f(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3f(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerUpLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3f(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3f({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 14 4 9 9 4"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20 20v-7a4 4 0 0 0-4-4H4"
  }));
});
CornerUpLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerUpLeft.displayName = "CornerUpLeft";
function _extends$3e() {
  _extends$3e = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3e.apply(this, arguments);
}
function _objectWithoutProperties$3e(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3e(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3e(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CornerUpRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3e(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3e({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 14 20 9 15 4"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4 20v-7a4 4 0 0 1 4-4h12"
  }));
});
CornerUpRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerUpRight.displayName = "CornerUpRight";
function _extends$3d() {
  _extends$3d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3d.apply(this, arguments);
}
function _objectWithoutProperties$3d(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3d(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3d(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Cpu = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3d(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3d({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
});
Cpu.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cpu.displayName = "Cpu";
function _extends$3c() {
  _extends$3c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3c.apply(this, arguments);
}
function _objectWithoutProperties$3c(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3c(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CreditCard = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3c(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3c({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "4",
    width: "22",
    height: "16",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "10",
    x2: "23",
    y2: "10"
  }));
});
CreditCard.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CreditCard.displayName = "CreditCard";
function _extends$3b() {
  _extends$3b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3b.apply(this, arguments);
}
function _objectWithoutProperties$3b(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3b(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Crop = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3b(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3b({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
  }));
});
Crop.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Crop.displayName = "Crop";
function _extends$3a() {
  _extends$3a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3a.apply(this, arguments);
}
function _objectWithoutProperties$3a(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3a(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Crosshair = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3a(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3a({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "22",
    y1: "12",
    x2: "18",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "18"
  }));
});
Crosshair.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Crosshair.displayName = "Crosshair";
function _extends$39() {
  _extends$39 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$39.apply(this, arguments);
}
function _objectWithoutProperties$39(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$39(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$39(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Database = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$39(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$39({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
  }));
});
Database.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Database.displayName = "Database";
function _extends$38() {
  _extends$38 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$38.apply(this, arguments);
}
function _objectWithoutProperties$38(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$38(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$38(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Delete = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$38(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$38({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "9",
    x2: "12",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "18",
    y2: "15"
  }));
});
Delete.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Delete.displayName = "Delete";
function _extends$37() {
  _extends$37 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$37.apply(this, arguments);
}
function _objectWithoutProperties$37(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$37(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$37(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Disc = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$37(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$37({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Disc.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Disc.displayName = "Disc";
function _extends$36() {
  _extends$36 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$36.apply(this, arguments);
}
function _objectWithoutProperties$36(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$36(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$36(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DivideCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$36(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$36({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
});
DivideCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DivideCircle.displayName = "DivideCircle";
function _extends$35() {
  _extends$35 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$35.apply(this, arguments);
}
function _objectWithoutProperties$35(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$35(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$35(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DivideSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$35(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$35({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  }));
});
DivideSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DivideSquare.displayName = "DivideSquare";
function _extends$34() {
  _extends$34 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$34.apply(this, arguments);
}
function _objectWithoutProperties$34(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$34(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$34(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Divide = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$34(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$34({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "6",
    r: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2"
  }));
});
Divide.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Divide.displayName = "Divide";
function _extends$33() {
  _extends$33 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$33.apply(this, arguments);
}
function _objectWithoutProperties$33(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$33(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$33(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DollarSign = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$33(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$33({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }));
});
DollarSign.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DollarSign.displayName = "DollarSign";
function _extends$32() {
  _extends$32 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$32.apply(this, arguments);
}
function _objectWithoutProperties$32(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$32(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$32(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DownloadCloud = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$32(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$32({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 17 12 21 16 17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
  }));
});
DownloadCloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DownloadCloud.displayName = "DownloadCloud";
function _extends$31() {
  _extends$31 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$31.apply(this, arguments);
}
function _objectWithoutProperties$31(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$31(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$31(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Download = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$31(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$31({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }));
});
Download.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Download.displayName = "Download";
function _extends$30() {
  _extends$30 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$30.apply(this, arguments);
}
function _objectWithoutProperties$30(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$30(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$30(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dribbble = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$30(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$30({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
  }));
});
Dribbble.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Dribbble.displayName = "Dribbble";
function _extends$2$() {
  _extends$2$ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2$.apply(this, arguments);
}
function _objectWithoutProperties$2$(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2$(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2$(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Droplet = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2$(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2$({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
  }));
});
Droplet.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Droplet.displayName = "Droplet";
function _extends$2_() {
  _extends$2_ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2_.apply(this, arguments);
}
function _objectWithoutProperties$2_(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2_(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2_(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Edit2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2_(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2_({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }));
});
Edit2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit2.displayName = "Edit2";
function _extends$2Z() {
  _extends$2Z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2Z.apply(this, arguments);
}
function _objectWithoutProperties$2Z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2Z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2Z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Edit3 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2Z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2Z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 20h9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
  }));
});
Edit3.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit3.displayName = "Edit3";
function _extends$2Y() {
  _extends$2Y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2Y.apply(this, arguments);
}
function _objectWithoutProperties$2Y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2Y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2Y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Edit = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2Y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2Y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }));
});
Edit.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit.displayName = "Edit";
function _extends$2X() {
  _extends$2X = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2X.apply(this, arguments);
}
function _objectWithoutProperties$2X(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2X(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2X(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ExternalLink = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2X(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2X({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ExternalLink.displayName = "ExternalLink";
function _extends$2W() {
  _extends$2W = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2W.apply(this, arguments);
}
function _objectWithoutProperties$2W(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2W(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2W(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var EyeOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2W(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2W({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
EyeOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
EyeOff.displayName = "EyeOff";
function _extends$2V() {
  _extends$2V = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2V.apply(this, arguments);
}
function _objectWithoutProperties$2V(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2V(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2V(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Eye = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2V(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2V({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Eye.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Eye.displayName = "Eye";
function _extends$2U() {
  _extends$2U = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2U.apply(this, arguments);
}
function _objectWithoutProperties$2U(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2U(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2U(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Facebook = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2U(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2U({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  }));
});
Facebook.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Facebook.displayName = "Facebook";
function _extends$2T() {
  _extends$2T = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2T.apply(this, arguments);
}
function _objectWithoutProperties$2T(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2T(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2T(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FastForward = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2T(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2T({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "13 19 22 12 13 5 13 19"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "2 19 11 12 2 5 2 19"
  }));
});
FastForward.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FastForward.displayName = "FastForward";
function _extends$2S() {
  _extends$2S = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2S.apply(this, arguments);
}
function _objectWithoutProperties$2S(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2S(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2S(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Feather = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2S(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2S({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "8",
    x2: "2",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17.5",
    y1: "15",
    x2: "9",
    y2: "15"
  }));
});
Feather.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Feather.displayName = "Feather";
function _extends$2R() {
  _extends$2R = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2R.apply(this, arguments);
}
function _objectWithoutProperties$2R(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2R(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2R(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Figma = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2R(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2R({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
  }));
});
Figma.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Figma.displayName = "Figma";
function _extends$2Q() {
  _extends$2Q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2Q.apply(this, arguments);
}
function _objectWithoutProperties$2Q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2Q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2Q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FileMinus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2Q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2Q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "15",
    x2: "15",
    y2: "15"
  }));
});
FileMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FileMinus.displayName = "FileMinus";
function _extends$2P() {
  _extends$2P = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2P.apply(this, arguments);
}
function _objectWithoutProperties$2P(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2P(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2P(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FilePlus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2P(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2P({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "15",
    x2: "15",
    y2: "15"
  }));
});
FilePlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FilePlus.displayName = "FilePlus";
function _extends$2O() {
  _extends$2O = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2O.apply(this, arguments);
}
function _objectWithoutProperties$2O(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2O(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2O(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FileText = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2O(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2O({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "10 9 9 9 8 9"
  }));
});
FileText.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FileText.displayName = "FileText";
function _extends$2N() {
  _extends$2N = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2N.apply(this, arguments);
}
function _objectWithoutProperties$2N(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2N(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2N(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var File = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2N(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2N({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "13 2 13 9 20 9"
  }));
});
File.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
File.displayName = "File";
function _extends$2M() {
  _extends$2M = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2M.apply(this, arguments);
}
function _objectWithoutProperties$2M(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2M(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2M(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Film = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2M(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2M({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "2.18",
    ry: "2.18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "7",
    x2: "7",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "17",
    x2: "7",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "17",
    x2: "22",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "7",
    x2: "22",
    y2: "7"
  }));
});
Film.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Film.displayName = "Film";
function _extends$2L() {
  _extends$2L = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2L.apply(this, arguments);
}
function _objectWithoutProperties$2L(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2L(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2L(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Filter = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2L(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2L({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }));
});
Filter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Filter.displayName = "Filter";
function _extends$2K() {
  _extends$2K = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2K.apply(this, arguments);
}
function _objectWithoutProperties$2K(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2K(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2K(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Flag = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2K(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2K({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "4",
    y2: "15"
  }));
});
Flag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Flag.displayName = "Flag";
function _extends$2J() {
  _extends$2J = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2J.apply(this, arguments);
}
function _objectWithoutProperties$2J(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2J(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2J(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FolderMinus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2J(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2J({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
});
FolderMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FolderMinus.displayName = "FolderMinus";
function _extends$2I() {
  _extends$2I = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2I.apply(this, arguments);
}
function _objectWithoutProperties$2I(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2I(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2I(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FolderPlus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2I(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2I({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
});
FolderPlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FolderPlus.displayName = "FolderPlus";
function _extends$2H() {
  _extends$2H = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2H.apply(this, arguments);
}
function _objectWithoutProperties$2H(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2H(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2H(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Folder = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2H(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2H({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }));
});
Folder.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Folder.displayName = "Folder";
function _extends$2G() {
  _extends$2G = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2G.apply(this, arguments);
}
function _objectWithoutProperties$2G(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2G(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2G(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Framer = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2G(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2G({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
  }));
});
Framer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Framer.displayName = "Framer";
function _extends$2F() {
  _extends$2F = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2F.apply(this, arguments);
}
function _objectWithoutProperties$2F(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2F(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2F(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Frown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2F(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2F({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 16s-1.5-2-4-2-4 2-4 2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Frown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Frown.displayName = "Frown";
function _extends$2E() {
  _extends$2E = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2E.apply(this, arguments);
}
function _objectWithoutProperties$2E(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2E(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2E(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Gift = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2E(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2E({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "20 12 20 22 4 22 4 12"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  }));
});
Gift.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Gift.displayName = "Gift";
function _extends$2D() {
  _extends$2D = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2D.apply(this, arguments);
}
function _objectWithoutProperties$2D(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2D(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2D(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var GitBranch = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2D(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2D({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "3",
    x2: "6",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18 9a9 9 0 0 1-9 9"
  }));
});
GitBranch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitBranch.displayName = "GitBranch";
function _extends$2C() {
  _extends$2C = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2C.apply(this, arguments);
}
function _objectWithoutProperties$2C(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2C(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2C(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var GitCommit = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2C(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2C({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1.05",
    y1: "12",
    x2: "7",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17.01",
    y1: "12",
    x2: "22.96",
    y2: "12"
  }));
});
GitCommit.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitCommit.displayName = "GitCommit";
function _extends$2B() {
  _extends$2B = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2B.apply(this, arguments);
}
function _objectWithoutProperties$2B(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2B(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2B(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var GitMerge = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2B(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2B({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6 21V9a9 9 0 0 0 9 9"
  }));
});
GitMerge.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitMerge.displayName = "GitMerge";
function _extends$2A() {
  _extends$2A = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2A.apply(this, arguments);
}
function _objectWithoutProperties$2A(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2A(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2A(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var GitPullRequest = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2A(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2A({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "9",
    x2: "6",
    y2: "21"
  }));
});
GitPullRequest.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitPullRequest.displayName = "GitPullRequest";
function _extends$2z() {
  _extends$2z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2z.apply(this, arguments);
}
function _objectWithoutProperties$2z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var GitHub = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitHub.displayName = "GitHub";
function _extends$2y() {
  _extends$2y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2y.apply(this, arguments);
}
function _objectWithoutProperties$2y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Gitlab = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
  }));
});
Gitlab.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Gitlab.displayName = "Gitlab";
function _extends$2x() {
  _extends$2x = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2x.apply(this, arguments);
}
function _objectWithoutProperties$2x(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2x(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2x(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Globe = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2x(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2x({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }));
});
Globe.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Globe.displayName = "Globe";
function _extends$2w() {
  _extends$2w = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2w.apply(this, arguments);
}
function _objectWithoutProperties$2w(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2w(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2w(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Grid = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2w(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2w({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }));
});
Grid.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Grid.displayName = "Grid";
function _extends$2v() {
  _extends$2v = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2v.apply(this, arguments);
}
function _objectWithoutProperties$2v(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2v(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2v(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var HardDrive = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2v(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2v({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "22",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "16",
    x2: "6.01",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "16",
    x2: "10.01",
    y2: "16"
  }));
});
HardDrive.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
HardDrive.displayName = "HardDrive";
function _extends$2u() {
  _extends$2u = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2u.apply(this, arguments);
}
function _objectWithoutProperties$2u(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2u(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2u(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Hash = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2u(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2u({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "20",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "15",
    x2: "20",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "3",
    x2: "8",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "3",
    x2: "14",
    y2: "21"
  }));
});
Hash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Hash.displayName = "Hash";
function _extends$2t() {
  _extends$2t = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2t.apply(this, arguments);
}
function _objectWithoutProperties$2t(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2t(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2t(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Headphones = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2t(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2t({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M3 18v-6a9 9 0 0 1 18 0v6"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
  }));
});
Headphones.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Headphones.displayName = "Headphones";
function _extends$2s() {
  _extends$2s = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2s.apply(this, arguments);
}
function _objectWithoutProperties$2s(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2s(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2s(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Heart = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2s(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2s({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
});
Heart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Heart.displayName = "Heart";
function _extends$2r() {
  _extends$2r = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2r.apply(this, arguments);
}
function _objectWithoutProperties$2r(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2r(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2r(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var HelpCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2r(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2r({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
HelpCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
HelpCircle.displayName = "HelpCircle";
function _extends$2q() {
  _extends$2q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2q.apply(this, arguments);
}
function _objectWithoutProperties$2q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Hexagon = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }));
});
Hexagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Hexagon.displayName = "Hexagon";
function _extends$2p() {
  _extends$2p = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2p.apply(this, arguments);
}
function _objectWithoutProperties$2p(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2p(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2p(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Home = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2p(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2p({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }));
});
Home.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Home.displayName = "Home";
function _extends$2o() {
  _extends$2o = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2o.apply(this, arguments);
}
function _objectWithoutProperties$2o(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2o(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2o(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Image = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2o(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2o({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "21 15 16 10 5 21"
  }));
});
Image.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Image.displayName = "Image";
function _extends$2n() {
  _extends$2n = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2n.apply(this, arguments);
}
function _objectWithoutProperties$2n(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2n(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2n(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Inbox = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2n(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2n({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "22 12 16 12 14 15 10 15 8 12 2 12"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }));
});
Inbox.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Inbox.displayName = "Inbox";
function _extends$2m() {
  _extends$2m = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2m.apply(this, arguments);
}
function _objectWithoutProperties$2m(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2m(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2m(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Info = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2m(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2m({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }));
});
Info.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Info.displayName = "Info";
function _extends$2l() {
  _extends$2l = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2l.apply(this, arguments);
}
function _objectWithoutProperties$2l(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2l(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2l(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Instagram = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2l(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2l({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17.5",
    y1: "6.5",
    x2: "17.51",
    y2: "6.5"
  }));
});
Instagram.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Instagram.displayName = "Instagram";
function _extends$2k() {
  _extends$2k = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2k.apply(this, arguments);
}
function _objectWithoutProperties$2k(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2k(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2k(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Italic = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2k(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2k({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "19",
    y1: "4",
    x2: "10",
    y2: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14",
    y1: "20",
    x2: "5",
    y2: "20"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "4",
    x2: "9",
    y2: "20"
  }));
});
Italic.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Italic.displayName = "Italic";
function _extends$2j() {
  _extends$2j = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2j.apply(this, arguments);
}
function _objectWithoutProperties$2j(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2j(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2j(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Key = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2j(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2j({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
  }));
});
Key.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Key.displayName = "Key";
function _extends$2i() {
  _extends$2i = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2i.apply(this, arguments);
}
function _objectWithoutProperties$2i(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2i(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2i(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Layers = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2i(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2i({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
});
Layers.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Layers.displayName = "Layers";
function _extends$2h() {
  _extends$2h = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2h.apply(this, arguments);
}
function _objectWithoutProperties$2h(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2h(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2h(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Layout = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2h(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2h({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  }));
});
Layout.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Layout.displayName = "Layout";
function _extends$2g() {
  _extends$2g = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2g.apply(this, arguments);
}
function _objectWithoutProperties$2g(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2g(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2g(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var LifeBuoy = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2g(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2g({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "9.17",
    y2: "9.17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.83",
    y1: "14.83",
    x2: "19.07",
    y2: "19.07"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "19.07",
    y2: "4.93"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "18.36",
    y2: "5.64"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "9.17",
    y2: "14.83"
  }));
});
LifeBuoy.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LifeBuoy.displayName = "LifeBuoy";
function _extends$2f() {
  _extends$2f = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2f.apply(this, arguments);
}
function _objectWithoutProperties$2f(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2f(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2f(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Link2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2f(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2f({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
Link2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Link2.displayName = "Link2";
function _extends$2e() {
  _extends$2e = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2e.apply(this, arguments);
}
function _objectWithoutProperties$2e(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2e(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2e(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Link = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2e(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2e({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }));
});
Link.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Link.displayName = "Link";
function _extends$2d() {
  _extends$2d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2d.apply(this, arguments);
}
function _objectWithoutProperties$2d(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2d(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2d(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Linkedin = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2d(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2d({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }));
});
Linkedin.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Linkedin.displayName = "Linkedin";
function _extends$2c() {
  _extends$2c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2c.apply(this, arguments);
}
function _objectWithoutProperties$2c(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2c(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var List = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2c(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2c({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  }));
});
List.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
List.displayName = "List";
function _extends$2b() {
  _extends$2b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2b.apply(this, arguments);
}
function _objectWithoutProperties$2b(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2b(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Loader = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2b(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2b({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  }));
});
Loader.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Loader.displayName = "Loader";
function _extends$2a() {
  _extends$2a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2a.apply(this, arguments);
}
function _objectWithoutProperties$2a(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2a(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Lock = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2a(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2a({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
});
Lock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Lock.displayName = "Lock";
function _extends$29() {
  _extends$29 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$29.apply(this, arguments);
}
function _objectWithoutProperties$29(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$29(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$29(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var LogIn = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$29(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$29({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "10 17 15 12 10 7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "12",
    x2: "3",
    y2: "12"
  }));
});
LogIn.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LogIn.displayName = "LogIn";
function _extends$28() {
  _extends$28 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$28.apply(this, arguments);
}
function _objectWithoutProperties$28(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$28(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$28(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var LogOut = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$28(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$28({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  }));
});
LogOut.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LogOut.displayName = "LogOut";
function _extends$27() {
  _extends$27 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$27.apply(this, arguments);
}
function _objectWithoutProperties$27(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$27(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$27(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Mail = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$27(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$27({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
});
Mail.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Mail.displayName = "Mail";
function _extends$26() {
  _extends$26 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$26.apply(this, arguments);
}
function _objectWithoutProperties$26(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$26(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$26(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MapPin = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$26(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$26({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
});
MapPin.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MapPin.displayName = "MapPin";
function _extends$25() {
  _extends$25 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$25.apply(this, arguments);
}
function _objectWithoutProperties$25(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$25(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$25(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Map2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$25(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$25({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "6",
    x2: "16",
    y2: "22"
  }));
});
Map2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Map2.displayName = "Map";
function _extends$24() {
  _extends$24 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$24.apply(this, arguments);
}
function _objectWithoutProperties$24(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$24(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$24(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Maximize2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$24(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$24({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 21 3 21 3 15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "3",
    x2: "14",
    y2: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Maximize2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Maximize2.displayName = "Maximize2";
function _extends$23() {
  _extends$23 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$23.apply(this, arguments);
}
function _objectWithoutProperties$23(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$23(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$23(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Maximize = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$23(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$23({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
});
Maximize.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Maximize.displayName = "Maximize";
function _extends$22() {
  _extends$22 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$22.apply(this, arguments);
}
function _objectWithoutProperties$22(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$22(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$22(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Meh = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$22(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$22({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "15",
    x2: "16",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Meh.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Meh.displayName = "Meh";
function _extends$21() {
  _extends$21 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$21.apply(this, arguments);
}
function _objectWithoutProperties$21(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$21(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$21(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Menu = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$21(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$21({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
});
Menu.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Menu.displayName = "Menu";
function _extends$20() {
  _extends$20 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$20.apply(this, arguments);
}
function _objectWithoutProperties$20(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$20(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$20(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MessageCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$20(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$20({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
});
MessageCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MessageCircle.displayName = "MessageCircle";
function _extends$1$() {
  _extends$1$ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1$.apply(this, arguments);
}
function _objectWithoutProperties$1$(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1$(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1$(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MessageSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1$(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1$({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
});
MessageSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MessageSquare.displayName = "MessageSquare";
function _extends$1_() {
  _extends$1_ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1_.apply(this, arguments);
}
function _objectWithoutProperties$1_(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1_(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1_(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MicOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1_(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1_({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
});
MicOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MicOff.displayName = "MicOff";
function _extends$1Z() {
  _extends$1Z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1Z.apply(this, arguments);
}
function _objectWithoutProperties$1Z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1Z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1Z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Mic = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1Z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1Z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
});
Mic.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Mic.displayName = "Mic";
function _extends$1Y() {
  _extends$1Y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1Y.apply(this, arguments);
}
function _objectWithoutProperties$1Y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1Y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1Y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Minimize2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1Y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1Y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "4 14 10 14 10 20"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "20 10 14 10 14 4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14",
    y1: "10",
    x2: "21",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Minimize2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minimize2.displayName = "Minimize2";
function _extends$1X() {
  _extends$1X = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1X.apply(this, arguments);
}
function _objectWithoutProperties$1X(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1X(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1X(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Minimize = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1X(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1X({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
});
Minimize.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minimize.displayName = "Minimize";
function _extends$1W() {
  _extends$1W = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1W.apply(this, arguments);
}
function _objectWithoutProperties$1W(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1W(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1W(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MinusCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1W(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1W({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
MinusCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MinusCircle.displayName = "MinusCircle";
function _extends$1V() {
  _extends$1V = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1V.apply(this, arguments);
}
function _objectWithoutProperties$1V(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1V(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1V(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MinusSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1V(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1V({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
MinusSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MinusSquare.displayName = "MinusSquare";
function _extends$1U() {
  _extends$1U = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1U.apply(this, arguments);
}
function _objectWithoutProperties$1U(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1U(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1U(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Minus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1U(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1U({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Minus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minus.displayName = "Minus";
function _extends$1T() {
  _extends$1T = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1T.apply(this, arguments);
}
function _objectWithoutProperties$1T(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1T(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1T(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Monitor = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1T(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1T({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  }));
});
Monitor.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Monitor.displayName = "Monitor";
function _extends$1S() {
  _extends$1S = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1S.apply(this, arguments);
}
function _objectWithoutProperties$1S(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1S(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1S(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Moon = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1S(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1S({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
});
Moon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Moon.displayName = "Moon";
function _extends$1R() {
  _extends$1R = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1R.apply(this, arguments);
}
function _objectWithoutProperties$1R(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1R(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1R(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MoreHorizontal = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1R(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1R({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  }));
});
MoreHorizontal.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MoreHorizontal.displayName = "MoreHorizontal";
function _extends$1Q() {
  _extends$1Q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1Q.apply(this, arguments);
}
function _objectWithoutProperties$1Q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1Q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1Q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MoreVertical = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1Q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1Q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
});
MoreVertical.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MoreVertical.displayName = "MoreVertical";
function _extends$1P() {
  _extends$1P = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1P.apply(this, arguments);
}
function _objectWithoutProperties$1P(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1P(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1P(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MousePointer = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1P(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1P({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M13 13l6 6"
  }));
});
MousePointer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MousePointer.displayName = "MousePointer";
function _extends$1O() {
  _extends$1O = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1O.apply(this, arguments);
}
function _objectWithoutProperties$1O(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1O(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1O(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Move = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1O(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1O({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "5 9 2 12 5 15"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "9 5 12 2 15 5"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "15 19 12 22 9 19"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "19 9 22 12 19 15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22"
  }));
});
Move.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Move.displayName = "Move";
function _extends$1N() {
  _extends$1N = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1N.apply(this, arguments);
}
function _objectWithoutProperties$1N(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1N(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1N(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Music = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1N(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1N({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M9 18V5l12-2v13"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "16",
    r: "3"
  }));
});
Music.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Music.displayName = "Music";
function _extends$1M() {
  _extends$1M = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1M.apply(this, arguments);
}
function _objectWithoutProperties$1M(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1M(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1M(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Navigation2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1M(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1M({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "12 2 19 21 12 17 5 21 12 2"
  }));
});
Navigation2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Navigation2.displayName = "Navigation2";
function _extends$1L() {
  _extends$1L = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1L.apply(this, arguments);
}
function _objectWithoutProperties$1L(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1L(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1L(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Navigation = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1L(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1L({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "3 11 22 2 13 21 11 13 3 11"
  }));
});
Navigation.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Navigation.displayName = "Navigation";
function _extends$1K() {
  _extends$1K = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1K.apply(this, arguments);
}
function _objectWithoutProperties$1K(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1K(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1K(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Octagon = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1K(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1K({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }));
});
Octagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Octagon.displayName = "Octagon";
function _extends$1J() {
  _extends$1J = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1J.apply(this, arguments);
}
function _objectWithoutProperties$1J(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1J(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1J(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Package = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1J(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1J({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "16.5",
    y1: "9.4",
    x2: "7.5",
    y2: "4.21"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Package.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Package.displayName = "Package";
function _extends$1I() {
  _extends$1I = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1I.apply(this, arguments);
}
function _objectWithoutProperties$1I(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1I(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1I(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Paperclip = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1I(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1I({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }));
});
Paperclip.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Paperclip.displayName = "Paperclip";
function _extends$1H() {
  _extends$1H = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1H.apply(this, arguments);
}
function _objectWithoutProperties$1H(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1H(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1H(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PauseCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1H(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1H({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "15",
    x2: "10",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14",
    y1: "15",
    x2: "14",
    y2: "9"
  }));
});
PauseCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PauseCircle.displayName = "PauseCircle";
function _extends$1G() {
  _extends$1G = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1G.apply(this, arguments);
}
function _objectWithoutProperties$1G(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1G(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1G(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Pause = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1G(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1G({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  }));
});
Pause.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Pause.displayName = "Pause";
function _extends$1F() {
  _extends$1F = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1F.apply(this, arguments);
}
function _objectWithoutProperties$1F(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1F(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1F(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PenTool = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1F(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1F({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 19l7-7 3 3-7 7-3-3z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M2 2l7.586 7.586"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  }));
});
PenTool.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PenTool.displayName = "PenTool";
function _extends$1E() {
  _extends$1E = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1E.apply(this, arguments);
}
function _objectWithoutProperties$1E(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1E(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1E(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Percent = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1E(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1E({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }));
});
Percent.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Percent.displayName = "Percent";
function _extends$1D() {
  _extends$1D = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1D.apply(this, arguments);
}
function _objectWithoutProperties$1D(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1D(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1D(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneCall = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1D(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1D({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneCall.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneCall.displayName = "PhoneCall";
function _extends$1C() {
  _extends$1C = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1C.apply(this, arguments);
}
function _objectWithoutProperties$1C(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1C(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1C(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneForwarded = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1C(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1C({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "19 1 23 5 19 9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "5",
    x2: "23",
    y2: "5"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneForwarded.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneForwarded.displayName = "PhoneForwarded";
function _extends$1B() {
  _extends$1B = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1B.apply(this, arguments);
}
function _objectWithoutProperties$1B(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1B(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1B(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneIncoming = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1B(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1B({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 2 16 8 22 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "1",
    x2: "16",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneIncoming.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneIncoming.displayName = "PhoneIncoming";
function _extends$1A() {
  _extends$1A = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1A.apply(this, arguments);
}
function _objectWithoutProperties$1A(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1A(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1A(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneMissed = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1A(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1A({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "1",
    x2: "17",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "1",
    x2: "23",
    y2: "7"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneMissed.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneMissed.displayName = "PhoneMissed";
function _extends$1z() {
  _extends$1z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1z.apply(this, arguments);
}
function _objectWithoutProperties$1z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "1",
    x2: "1",
    y2: "23"
  }));
});
PhoneOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneOff.displayName = "PhoneOff";
function _extends$1y() {
  _extends$1y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1y.apply(this, arguments);
}
function _objectWithoutProperties$1y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PhoneOutgoing = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 7 23 1 17 1"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "16",
    y1: "8",
    x2: "23",
    y2: "1"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneOutgoing.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneOutgoing.displayName = "PhoneOutgoing";
function _extends$1x() {
  _extends$1x = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1x.apply(this, arguments);
}
function _objectWithoutProperties$1x(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1x(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1x(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Phone = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1x(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1x({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
Phone.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Phone.displayName = "Phone";
function _extends$1w() {
  _extends$1w = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1w.apply(this, arguments);
}
function _objectWithoutProperties$1w(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1w(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1w(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PieChart = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1w(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1w({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  }));
});
PieChart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PieChart.displayName = "PieChart";
function _extends$1v() {
  _extends$1v = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1v.apply(this, arguments);
}
function _objectWithoutProperties$1v(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1v(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1v(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PlayCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1v(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1v({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "10 8 16 12 10 16 10 8"
  }));
});
PlayCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlayCircle.displayName = "PlayCircle";
function _extends$1u() {
  _extends$1u = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1u.apply(this, arguments);
}
function _objectWithoutProperties$1u(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1u(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1u(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Play = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1u(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1u({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
});
Play.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Play.displayName = "Play";
function _extends$1t() {
  _extends$1t = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1t.apply(this, arguments);
}
function _objectWithoutProperties$1t(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1t(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1t(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PlusCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1t(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1t({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
PlusCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlusCircle.displayName = "PlusCircle";
function _extends$1s() {
  _extends$1s = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1s.apply(this, arguments);
}
function _objectWithoutProperties$1s(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1s(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1s(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var PlusSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1s(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1s({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
PlusSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlusSquare.displayName = "PlusSquare";
function _extends$1r() {
  _extends$1r = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1r.apply(this, arguments);
}
function _objectWithoutProperties$1r(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1r(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1r(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Plus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1r(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1r({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Plus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Plus.displayName = "Plus";
function _extends$1q() {
  _extends$1q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1q.apply(this, arguments);
}
function _objectWithoutProperties$1q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Pocket = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 10 12 14 16 10"
  }));
});
Pocket.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Pocket.displayName = "Pocket";
function _extends$1p() {
  _extends$1p = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1p.apply(this, arguments);
}
function _objectWithoutProperties$1p(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1p(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1p(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Power = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1p(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1p({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M18.36 6.64a9 9 0 1 1-12.73 0"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12"
  }));
});
Power.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Power.displayName = "Power";
function _extends$1o() {
  _extends$1o = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1o.apply(this, arguments);
}
function _objectWithoutProperties$1o(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1o(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1o(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Printer = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1o(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1o({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "6 9 6 2 18 2 18 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }));
});
Printer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Printer.displayName = "Printer";
function _extends$1n() {
  _extends$1n = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1n.apply(this, arguments);
}
function _objectWithoutProperties$1n(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1n(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1n(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Radio = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1n(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1n({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  }));
});
Radio.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Radio.displayName = "Radio";
function _extends$1m() {
  _extends$1m = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1m.apply(this, arguments);
}
function _objectWithoutProperties$1m(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1m(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1m(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RefreshCcw = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1m(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1m({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "1 4 1 10 7 10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 20 23 14 17 14"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
  }));
});
RefreshCcw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RefreshCcw.displayName = "RefreshCcw";
function _extends$1l() {
  _extends$1l = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1l.apply(this, arguments);
}
function _objectWithoutProperties$1l(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1l(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1l(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RefreshCw = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1l(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1l({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "1 20 1 14 7 14"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
  }));
});
RefreshCw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RefreshCw.displayName = "RefreshCw";
function _extends$1k() {
  _extends$1k = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1k.apply(this, arguments);
}
function _objectWithoutProperties$1k(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1k(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1k(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Repeat = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1k(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1k({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 1 21 5 17 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 23 3 19 7 15"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  }));
});
Repeat.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Repeat.displayName = "Repeat";
function _extends$1j() {
  _extends$1j = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1j.apply(this, arguments);
}
function _objectWithoutProperties$1j(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1j(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1j(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Rewind = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1j(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1j({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "11 19 2 12 11 5 11 19"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "22 19 13 12 22 5 22 19"
  }));
});
Rewind.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Rewind.displayName = "Rewind";
function _extends$1i() {
  _extends$1i = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1i.apply(this, arguments);
}
function _objectWithoutProperties$1i(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1i(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1i(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RotateCcw = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1i(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1i({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "1 4 1 10 7 10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
  }));
});
RotateCcw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RotateCcw.displayName = "RotateCcw";
function _extends$1h() {
  _extends$1h = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1h.apply(this, arguments);
}
function _objectWithoutProperties$1h(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1h(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1h(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RotateCw = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1h(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1h({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
  }));
});
RotateCw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RotateCw.displayName = "RotateCw";
function _extends$1g() {
  _extends$1g = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1g.apply(this, arguments);
}
function _objectWithoutProperties$1g(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1g(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1g(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Rss = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1g(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1g({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 11a9 9 0 0 1 9 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4 4a16 16 0 0 1 16 16"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "1"
  }));
});
Rss.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Rss.displayName = "Rss";
function _extends$1f() {
  _extends$1f = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1f.apply(this, arguments);
}
function _objectWithoutProperties$1f(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1f(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1f(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Save = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1f(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1f({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
});
Save.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Save.displayName = "Save";
function _extends$1e() {
  _extends$1e = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1e.apply(this, arguments);
}
function _objectWithoutProperties$1e(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1e(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1e(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Scissors = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1e(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1e({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "4",
    x2: "8.12",
    y2: "15.88"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14.47",
    y1: "14.48",
    x2: "20",
    y2: "20"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8.12",
    y1: "8.12",
    x2: "12",
    y2: "12"
  }));
});
Scissors.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Scissors.displayName = "Scissors";
function _extends$1d() {
  _extends$1d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1d.apply(this, arguments);
}
function _objectWithoutProperties$1d(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1d(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1d(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Search = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1d(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1d({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
});
Search.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Search.displayName = "Search";
function _extends$1c() {
  _extends$1c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1c.apply(this, arguments);
}
function _objectWithoutProperties$1c(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1c(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Send = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1c(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1c({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  }));
});
Send.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Send.displayName = "Send";
function _extends$1b() {
  _extends$1b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1b.apply(this, arguments);
}
function _objectWithoutProperties$1b(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1b(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Server = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1b(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1b({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "14",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "6.01",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "6.01",
    y2: "18"
  }));
});
Server.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Server.displayName = "Server";
function _extends$1a() {
  _extends$1a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1a.apply(this, arguments);
}
function _objectWithoutProperties$1a(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1a(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Settings = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1a(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1a({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }));
});
Settings.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Settings.displayName = "Settings";
function _extends$19() {
  _extends$19 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$19.apply(this, arguments);
}
function _objectWithoutProperties$19(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$19(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$19(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Share2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$19(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$19({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8.59",
    y1: "13.51",
    x2: "15.42",
    y2: "17.49"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15.41",
    y1: "6.51",
    x2: "8.59",
    y2: "10.49"
  }));
});
Share2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Share2.displayName = "Share2";
function _extends$18() {
  _extends$18 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$18.apply(this, arguments);
}
function _objectWithoutProperties$18(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$18(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$18(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Share = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$18(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$18({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 6 12 2 8 6"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15"
  }));
});
Share.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Share.displayName = "Share";
function _extends$17() {
  _extends$17 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$17.apply(this, arguments);
}
function _objectWithoutProperties$17(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$17(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$17(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ShieldOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$17(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$17({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
ShieldOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShieldOff.displayName = "ShieldOff";
function _extends$16() {
  _extends$16 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$16.apply(this, arguments);
}
function _objectWithoutProperties$16(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$16(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$16(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Shield = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$16(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$16({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
});
Shield.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Shield.displayName = "Shield";
function _extends$15() {
  _extends$15 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$15.apply(this, arguments);
}
function _objectWithoutProperties$15(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$15(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$15(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ShoppingBag = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$15(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$15({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }));
});
ShoppingBag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShoppingBag.displayName = "ShoppingBag";
function _extends$14() {
  _extends$14 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$14.apply(this, arguments);
}
function _objectWithoutProperties$14(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$14(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$14(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ShoppingCart = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$14(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$14({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  }));
});
ShoppingCart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShoppingCart.displayName = "ShoppingCart";
function _extends$13() {
  _extends$13 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$13.apply(this, arguments);
}
function _objectWithoutProperties$13(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$13(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$13(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Shuffle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$13(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$13({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 3 21 3 21 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "20",
    x2: "21",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "21 16 21 21 16 21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "21",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "9",
    y2: "9"
  }));
});
Shuffle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Shuffle.displayName = "Shuffle";
function _extends$12() {
  _extends$12 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$12.apply(this, arguments);
}
function _objectWithoutProperties$12(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$12(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$12(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Sidebar = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$12(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$12({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "21"
  }));
});
Sidebar.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sidebar.displayName = "Sidebar";
function _extends$11() {
  _extends$11 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$11.apply(this, arguments);
}
function _objectWithoutProperties$11(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$11(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$11(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var SkipBack = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$11(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$11({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  }));
});
SkipBack.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
SkipBack.displayName = "SkipBack";
function _extends$10() {
  _extends$10 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$10.apply(this, arguments);
}
function _objectWithoutProperties$10(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$10(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var SkipForward = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$10(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$10({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }));
});
SkipForward.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
SkipForward.displayName = "SkipForward";
function _extends$$() {
  _extends$$ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$$.apply(this, arguments);
}
function _objectWithoutProperties$$(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$$(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$$(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Slack = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$$(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$$({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
  }));
});
Slack.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Slack.displayName = "Slack";
function _extends$_() {
  _extends$_ = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$_.apply(this, arguments);
}
function _objectWithoutProperties$_(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$_(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$_(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Slash = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$_(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$_({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "19.07",
    y2: "19.07"
  }));
});
Slash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Slash.displayName = "Slash";
function _extends$Z() {
  _extends$Z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$Z.apply(this, arguments);
}
function _objectWithoutProperties$Z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$Z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$Z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Sliders = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$Z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$Z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  }));
});
Sliders.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sliders.displayName = "Sliders";
function _extends$Y() {
  _extends$Y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$Y.apply(this, arguments);
}
function _objectWithoutProperties$Y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$Y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$Y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Smartphone = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$Y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$Y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Smartphone.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Smartphone.displayName = "Smartphone";
function _extends$X() {
  _extends$X = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$X.apply(this, arguments);
}
function _objectWithoutProperties$X(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$X(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$X(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Smile = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$X(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$X({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Smile.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Smile.displayName = "Smile";
function _extends$W() {
  _extends$W = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$W.apply(this, arguments);
}
function _objectWithoutProperties$W(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$W(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$W(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Speaker = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$W(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$W({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "6",
    x2: "12.01",
    y2: "6"
  }));
});
Speaker.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Speaker.displayName = "Speaker";
function _extends$V() {
  _extends$V = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$V.apply(this, arguments);
}
function _objectWithoutProperties$V(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$V(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$V(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Square = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$V(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$V({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
});
Square.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Square.displayName = "Square";
function _extends$U() {
  _extends$U = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$U.apply(this, arguments);
}
function _objectWithoutProperties$U(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$U(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$U(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Star = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$U(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$U({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
});
Star.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Star.displayName = "Star";
function _extends$T() {
  _extends$T = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$T.apply(this, arguments);
}
function _objectWithoutProperties$T(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$T(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$T(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var StopCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$T(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$T({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }));
});
StopCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
StopCircle.displayName = "StopCircle";
function _extends$S() {
  _extends$S = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$S.apply(this, arguments);
}
function _objectWithoutProperties$S(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$S(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$S(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Sun = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$S(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$S({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  }));
});
Sun.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sun.displayName = "Sun";
function _extends$R() {
  _extends$R = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$R.apply(this, arguments);
}
function _objectWithoutProperties$R(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$R(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$R(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Sunrise = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$R(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$R({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 6 12 2 16 6"
  }));
});
Sunrise.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sunrise.displayName = "Sunrise";
function _extends$Q() {
  _extends$Q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$Q.apply(this, arguments);
}
function _objectWithoutProperties$Q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$Q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$Q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Sunset = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$Q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$Q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 5 12 9 8 5"
  }));
});
Sunset.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sunset.displayName = "Sunset";
function _extends$P() {
  _extends$P = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$P.apply(this, arguments);
}
function _objectWithoutProperties$P(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$P(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$P(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Tablet = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$P(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$P({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Tablet.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tablet.displayName = "Tablet";
function _extends$O() {
  _extends$O = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$O.apply(this, arguments);
}
function _objectWithoutProperties$O(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$O(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$O(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Tag = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$O(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$O({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7.01",
    y2: "7"
  }));
});
Tag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tag.displayName = "Tag";
function _extends$N() {
  _extends$N = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$N.apply(this, arguments);
}
function _objectWithoutProperties$N(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$N(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$N(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Target = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$N(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$N({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }));
});
Target.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Target.displayName = "Target";
function _extends$M() {
  _extends$M = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$M.apply(this, arguments);
}
function _objectWithoutProperties$M(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$M(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$M(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Terminal = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$M(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$M({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "4 17 10 11 4 5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "20",
    y2: "19"
  }));
});
Terminal.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Terminal.displayName = "Terminal";
function _extends$L() {
  _extends$L = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$L.apply(this, arguments);
}
function _objectWithoutProperties$L(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$L(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$L(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Thermometer = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$L(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$L({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
  }));
});
Thermometer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Thermometer.displayName = "Thermometer";
function _extends$K() {
  _extends$K = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$K.apply(this, arguments);
}
function _objectWithoutProperties$K(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$K(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$K(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ThumbsDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$K(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$K({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
  }));
});
ThumbsDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ThumbsDown.displayName = "ThumbsDown";
function _extends$J() {
  _extends$J = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$J.apply(this, arguments);
}
function _objectWithoutProperties$J(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$J(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$J(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ThumbsUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$J(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$J({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  }));
});
ThumbsUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ThumbsUp.displayName = "ThumbsUp";
function _extends$I() {
  _extends$I = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$I.apply(this, arguments);
}
function _objectWithoutProperties$I(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$I(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$I(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ToggleLeft = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$I(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$I({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8",
    cy: "12",
    r: "3"
  }));
});
ToggleLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ToggleLeft.displayName = "ToggleLeft";
function _extends$H() {
  _extends$H = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$H.apply(this, arguments);
}
function _objectWithoutProperties$H(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$H(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$H(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ToggleRight = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$H(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$H({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "3"
  }));
});
ToggleRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ToggleRight.displayName = "ToggleRight";
function _extends$G() {
  _extends$G = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$G.apply(this, arguments);
}
function _objectWithoutProperties$G(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$G(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$G(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Tool = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$G(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$G({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }));
});
Tool.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tool.displayName = "Tool";
function _extends$F() {
  _extends$F = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$F.apply(this, arguments);
}
function _objectWithoutProperties$F(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$F(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$F(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Trash2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$F(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$F({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
Trash2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trash2.displayName = "Trash2";
function _extends$E() {
  _extends$E = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$E.apply(this, arguments);
}
function _objectWithoutProperties$E(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$E(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$E(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Trash = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$E(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$E({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }));
});
Trash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trash.displayName = "Trash";
function _extends$D() {
  _extends$D = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$D.apply(this, arguments);
}
function _objectWithoutProperties$D(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$D(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$D(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Trello = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$D(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$D({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "7",
    y: "7",
    width: "3",
    height: "9"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "14",
    y: "7",
    width: "3",
    height: "5"
  }));
});
Trello.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trello.displayName = "Trello";
function _extends$C() {
  _extends$C = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$C.apply(this, arguments);
}
function _objectWithoutProperties$C(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$C(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$C(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var TrendingDown = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$C(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$C({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 18 13.5 8.5 8.5 13.5 1 6"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 18 23 18 23 12"
  }));
});
TrendingDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
TrendingDown.displayName = "TrendingDown";
function _extends$B() {
  _extends$B = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$B.apply(this, arguments);
}
function _objectWithoutProperties$B(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$B(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$B(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var TrendingUp = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$B(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$B({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "23 6 13.5 15.5 8.5 10.5 1 18"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 6 23 6 23 12"
  }));
});
TrendingUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
TrendingUp.displayName = "TrendingUp";
function _extends$A() {
  _extends$A = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$A.apply(this, arguments);
}
function _objectWithoutProperties$A(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$A(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$A(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Triangle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$A(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$A({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }));
});
Triangle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Triangle.displayName = "Triangle";
function _extends$z() {
  _extends$z = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$z.apply(this, arguments);
}
function _objectWithoutProperties$z(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$z(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$z(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Truck = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$z(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$z({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "3",
    width: "15",
    height: "13"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "16 8 20 8 23 11 23 16 16 16 16 8"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  }));
});
Truck.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Truck.displayName = "Truck";
function _extends$y() {
  _extends$y = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$y.apply(this, arguments);
}
function _objectWithoutProperties$y(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$y(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$y(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Tv = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$y(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$y({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "15",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 2 12 7 7 2"
  }));
});
Tv.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tv.displayName = "Tv";
function _extends$x() {
  _extends$x = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$x.apply(this, arguments);
}
function _objectWithoutProperties$x(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$x(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$x(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Twitch = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$x(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$x({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
  }));
});
Twitch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Twitch.displayName = "Twitch";
function _extends$w() {
  _extends$w = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$w.apply(this, arguments);
}
function _objectWithoutProperties$w(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$w(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$w(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Twitter = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$w(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$w({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  }));
});
Twitter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Twitter.displayName = "Twitter";
function _extends$v() {
  _extends$v = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$v.apply(this, arguments);
}
function _objectWithoutProperties$v(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$v(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$v(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Type = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$v(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$v({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "4 7 4 4 20 4 20 7"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "15",
    y2: "20"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  }));
});
Type.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Type.displayName = "Type";
function _extends$u() {
  _extends$u = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$u.apply(this, arguments);
}
function _objectWithoutProperties$u(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$u(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$u(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Umbrella = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$u(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$u({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
  }));
});
Umbrella.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Umbrella.displayName = "Umbrella";
function _extends$t() {
  _extends$t = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$t.apply(this, arguments);
}
function _objectWithoutProperties$t(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$t(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$t(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Underline = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$t(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$t({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "20",
    y2: "21"
  }));
});
Underline.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Underline.displayName = "Underline";
function _extends$s() {
  _extends$s = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$s.apply(this, arguments);
}
function _objectWithoutProperties$s(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$s(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$s(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Unlock = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$s(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$s({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  }));
});
Unlock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Unlock.displayName = "Unlock";
function _extends$r() {
  _extends$r = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$r.apply(this, arguments);
}
function _objectWithoutProperties$r(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$r(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$r(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var UploadCloud = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$r(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$r({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 16 12 12 8 16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "16 16 12 12 8 16"
  }));
});
UploadCloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UploadCloud.displayName = "UploadCloud";
function _extends$q() {
  _extends$q = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$q.apply(this, arguments);
}
function _objectWithoutProperties$q(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$q(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$q(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Upload = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$q(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$q({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  }));
});
Upload.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Upload.displayName = "Upload";
function _extends$p() {
  _extends$p = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$p.apply(this, arguments);
}
function _objectWithoutProperties$p(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$p(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$p(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var UserCheck = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$p(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$p({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "17 11 19 13 23 9"
  }));
});
UserCheck.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserCheck.displayName = "UserCheck";
function _extends$o() {
  _extends$o = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$o.apply(this, arguments);
}
function _objectWithoutProperties$o(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$o(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$o(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var UserMinus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$o(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$o({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
});
UserMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserMinus.displayName = "UserMinus";
function _extends$n() {
  _extends$n = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$n.apply(this, arguments);
}
function _objectWithoutProperties$n(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$n(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$n(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var UserPlus = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$n(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$n({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "20",
    y1: "8",
    x2: "20",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
});
UserPlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserPlus.displayName = "UserPlus";
function _extends$m() {
  _extends$m = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$m.apply(this, arguments);
}
function _objectWithoutProperties$m(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$m(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$m(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var UserX = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$m(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$m({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "8",
    x2: "23",
    y2: "13"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "8",
    x2: "18",
    y2: "13"
  }));
});
UserX.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserX.displayName = "UserX";
function _extends$l() {
  _extends$l = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$l.apply(this, arguments);
}
function _objectWithoutProperties$l(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$l(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$l(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var User = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$l(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$l({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
});
User.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
User.displayName = "User";
function _extends$k() {
  _extends$k = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$k.apply(this, arguments);
}
function _objectWithoutProperties$k(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$k(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$k(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Users = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$k(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$k({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }));
});
Users.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Users.displayName = "Users";
function _extends$j() {
  _extends$j = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$j.apply(this, arguments);
}
function _objectWithoutProperties$j(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$j(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$j(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var VideoOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$j(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$j({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
VideoOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
VideoOff.displayName = "VideoOff";
function _extends$i() {
  _extends$i = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$i.apply(this, arguments);
}
function _objectWithoutProperties$i(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$i(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$i(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Video = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$i(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$i({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "23 7 16 12 23 17 23 7"
  }), /* @__PURE__ */ react.createElement("rect", {
    x: "1",
    y: "5",
    width: "15",
    height: "14",
    rx: "2",
    ry: "2"
  }));
});
Video.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Video.displayName = "Video";
function _extends$h() {
  _extends$h = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$h.apply(this, arguments);
}
function _objectWithoutProperties$h(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$h(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$h(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Voicemail = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$h(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$h({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "5.5",
    cy: "11.5",
    r: "4.5"
  }), /* @__PURE__ */ react.createElement("circle", {
    cx: "18.5",
    cy: "11.5",
    r: "4.5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "5.5",
    y1: "16",
    x2: "18.5",
    y2: "16"
  }));
});
Voicemail.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Voicemail.displayName = "Voicemail";
function _extends$g() {
  _extends$g = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$g.apply(this, arguments);
}
function _objectWithoutProperties$g(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$g(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$g(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Volume1 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$g(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$g({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
});
Volume1.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume1.displayName = "Volume1";
function _extends$f() {
  _extends$f = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
function _objectWithoutProperties$f(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$f(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$f(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Volume2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$f(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$f({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
});
Volume2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume2.displayName = "Volume2";
function _extends$e() {
  _extends$e = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
function _objectWithoutProperties$e(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$e(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$e(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var VolumeX = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$e(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$e({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "23",
    y1: "9",
    x2: "17",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "17",
    y1: "9",
    x2: "23",
    y2: "15"
  }));
});
VolumeX.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
VolumeX.displayName = "VolumeX";
function _extends$d() {
  _extends$d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
function _objectWithoutProperties$d(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$d(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$d(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Volume = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$d(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$d({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }));
});
Volume.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume.displayName = "Volume";
function _extends$c() {
  _extends$c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
function _objectWithoutProperties$c(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$c(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Watch = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$c(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$c({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "12 9 12 12 13.5 13.5"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
  }));
});
Watch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Watch.displayName = "Watch";
function _extends$b() {
  _extends$b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
function _objectWithoutProperties$b(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$b(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var WifiOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$b(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$b({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M10.71 5.05A16 16 0 0 1 22.58 9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  }));
});
WifiOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
WifiOff.displayName = "WifiOff";
function _extends$a() {
  _extends$a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
function _objectWithoutProperties$a(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$a(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Wifi = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$a(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$a({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M5 12.55a11 11 0 0 1 14.08 0"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M1.42 9a16 16 0 0 1 21.16 0"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  }));
});
Wifi.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Wifi.displayName = "Wifi";
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
function _objectWithoutProperties$9(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Wind = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$9(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$9({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
  }));
});
Wind.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Wind.displayName = "Wind";
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
function _objectWithoutProperties$8(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var XCircle = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$8(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$8({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
});
XCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XCircle.displayName = "XCircle";
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
function _objectWithoutProperties$7(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var XOctagon = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$7(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$7({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
});
XOctagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XOctagon.displayName = "XOctagon";
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
function _objectWithoutProperties$6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var XSquare = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$6(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$6({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }));
});
XSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XSquare.displayName = "XSquare";
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _objectWithoutProperties$5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var X2 = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$5(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$5({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
X2.displayName = "X";
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function _objectWithoutProperties$4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Youtube = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$4(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$4({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("path", {
    d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  }), /* @__PURE__ */ react.createElement("polygon", {
    points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
  }));
});
Youtube.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Youtube.displayName = "Youtube";
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ZapOff = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$3(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$3({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polyline", {
    points: "12.41 6.75 13 2 10.57 4.92"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "18.57 12.91 21 10 15.66 10"
  }), /* @__PURE__ */ react.createElement("polyline", {
    points: "8 8 3 14 12 14 11 22 16 16"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
ZapOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZapOff.displayName = "ZapOff";
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Zap = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$2(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$2({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  }));
});
Zap.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Zap.displayName = "Zap";
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ZoomIn = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends$1({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "11",
    y1: "8",
    x2: "11",
    y2: "14"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
});
ZoomIn.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZoomIn.displayName = "ZoomIn";
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ZoomOut = react.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties(_ref, ["color", "size"]);
  return /* @__PURE__ */ react.createElement("svg", _extends({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ react.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /* @__PURE__ */ react.createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
});
ZoomOut.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZoomOut.displayName = "ZoomOut";

// build/_snowpack/pkg/uuid.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}

// build/_snowpack/pkg/halfmoon.js
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (el.matches(s))
        return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || !function(t) {
  if ("Element" in t) {
    var e = "classList", n = "prototype", i = t.Element[n], s = Object, r = String[n].trim || function() {
      return this.replace(/^\s+|\s+$/g, "");
    }, o = Array[n].indexOf || function(t2) {
      for (var e2 = 0, n2 = this.length; n2 > e2; e2++)
        if (e2 in this && this[e2] === t2)
          return e2;
      return -1;
    }, c = function(t2, e2) {
      this.name = t2, this.code = DOMException[t2], this.message = e2;
    }, a = function(t2, e2) {
      if (e2 === "")
        throw new c("SYNTAX_ERR", "The token must not be empty.");
      if (/\s/.test(e2))
        throw new c("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
      return o.call(t2, e2);
    }, l = function(t2) {
      for (var e2 = r.call(t2.getAttribute("class") || ""), n2 = e2 ? e2.split(/\s+/) : [], i2 = 0, s2 = n2.length; s2 > i2; i2++)
        this.push(n2[i2]);
      this._updateClassName = function() {
        t2.setAttribute("class", this.toString());
      };
    }, u = l[n] = [], h = function() {
      return new l(this);
    };
    if (c[n] = Error[n], u.item = function(t2) {
      return this[t2] || null;
    }, u.contains = function(t2) {
      return ~a(this, t2 + "");
    }, u.add = function() {
      var t2, e2 = arguments, n2 = 0, i2 = e2.length, s2 = false;
      do
        t2 = e2[n2] + "", ~a(this, t2) || (this.push(t2), s2 = true);
      while (++n2 < i2);
      s2 && this._updateClassName();
    }, u.remove = function() {
      var t2, e2, n2 = arguments, i2 = 0, s2 = n2.length, r2 = false;
      do
        for (t2 = n2[i2] + "", e2 = a(this, t2); ~e2; )
          this.splice(e2, 1), r2 = true, e2 = a(this, t2);
      while (++i2 < s2);
      r2 && this._updateClassName();
    }, u.toggle = function(t2, e2) {
      var n2 = this.contains(t2), i2 = n2 ? e2 !== true && "remove" : e2 !== false && "add";
      return i2 && this[i2](t2), e2 === true || e2 === false ? e2 : !n2;
    }, u.replace = function(t2, e2) {
      var n2 = a(t2 + "");
      ~n2 && (this.splice(n2, 1, e2), this._updateClassName());
    }, u.toString = function() {
      return this.join(" ");
    }, s.defineProperty) {
      var f = {get: h, enumerable: true, configurable: true};
      try {
        s.defineProperty(i, e, f);
      } catch (p) {
        p.number !== void 0 && p.number !== -2146823252 || (f.enumerable = false, s.defineProperty(i, e, f));
      }
    } else
      s[n].__defineGetter__ && i.__defineGetter__(e, h);
  }
}(self), function() {
  var t = document.createElement("_");
  if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
    var e = function(t2) {
      var e2 = DOMTokenList.prototype[t2];
      DOMTokenList.prototype[t2] = function(t3) {
        var n2, i = arguments.length;
        for (n2 = 0; i > n2; n2++)
          t3 = arguments[n2], e2.call(this, t3);
      };
    };
    e("add"), e("remove");
  }
  if (t.classList.toggle("c3", false), t.classList.contains("c3")) {
    var n = DOMTokenList.prototype.toggle;
    DOMTokenList.prototype.toggle = function(t2, e2) {
      return 1 in arguments && !this.contains(t2) == !e2 ? e2 : n.call(this, t2);
    };
  }
  "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(t2, e2) {
    var n2 = this.toString().split(" "), i = n2.indexOf(t2 + "");
    ~i && (n2 = n2.slice(i), this.remove.apply(this, n2), this.add(e2), this.add.apply(this, n2.slice(1)));
  }), t = null;
}());
var halfmoon = {
  pageWrapper: document.getElementsByClassName("page-wrapper")[0],
  stickyAlerts: document.getElementsByClassName("sticky-alerts")[0],
  darkModeOn: false,
  createCookie: function(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  },
  readCookie: function(name) {
    var nameEQ = name + "=";
    var ca2 = document.cookie.split(";");
    for (var i = 0; i < ca2.length; i++) {
      var c = ca2[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },
  eraseCookie: function(name) {
    this.createCookie(name, "", -1);
  },
  toggleDarkMode: function() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      this.darkModeOn = false;
      this.createCookie("halfmoon_preferredMode", "light-mode", 365);
    } else {
      document.body.classList.add("dark-mode");
      this.darkModeOn = true;
      this.createCookie("halfmoon_preferredMode", "dark-mode", 365);
    }
  },
  getPreferredMode: function() {
    if (this.readCookie("halfmoon_preferredMode")) {
      return this.readCookie("halfmoon_preferredMode");
    } else {
      return "not-set";
    }
  },
  toggleSidebar: function() {
    if (this.pageWrapper) {
      if (this.pageWrapper.getAttribute("data-sidebar-hidden")) {
        this.pageWrapper.removeAttribute("data-sidebar-hidden");
      } else {
        this.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
      }
    }
  },
  deactivateAllDropdownToggles: function() {
    var activeDropdownToggles = document.querySelectorAll("[data-toggle='dropdown'].active");
    for (var i = 0; i < activeDropdownToggles.length; i++) {
      activeDropdownToggles[i].classList.remove("active");
      activeDropdownToggles[i].closest(".dropdown").classList.remove("show");
    }
  },
  toggleModal: function(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle("show");
    }
  },
  makeId: function(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  toastAlert: function(alertId, timeShown) {
    var alertElement = document.getElementById(alertId);
    if (timeShown === void 0) {
      timeShown = 5e3;
    }
    if (!alertElement.classList.contains("show")) {
      if (!alertElement.classList.contains("alert-block")) {
        alertElement.classList.add("alert-block");
      }
      setTimeout(function() {
        alertElement.classList.add("show");
      }, 250);
      var timeToFade = timeShown + 250;
      setTimeout(function() {
        alertElement.classList.add("fade");
      }, timeToFade);
      var timeToDestroy = timeToFade + 500;
      setTimeout(function() {
        alertElement.classList.remove("alert-block");
        alertElement.classList.remove("show");
        alertElement.classList.remove("fade");
      }, timeToDestroy);
    }
  },
  initStickyAlert: function(param) {
    var content = "content" in param ? param.content : "";
    var title = "title" in param ? param.title : "";
    var alertType = "alertType" in param ? param.alertType : "";
    var fillType = "fillType" in param ? param.fillType : "";
    var hasDismissButton = "hasDismissButton" in param ? param.hasDismissButton : true;
    var timeShown = "timeShown" in param ? param.timeShown : 5e3;
    var alertElement = document.createElement("div");
    alertElement.setAttribute("id", this.makeId(6));
    if (title) {
      content = "<h4 class='alert-heading'>" + title + "</h4>" + content;
    }
    alertElement.classList.add("alert");
    if (alertType) {
      alertElement.classList.add(alertType);
    }
    if (fillType) {
      alertElement.classList.add(fillType);
    }
    if (hasDismissButton) {
      content = "<button class='close' data-dismiss='alert' type='button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + content;
    }
    alertElement.innerHTML = content;
    this.stickyAlerts.insertBefore(alertElement, this.stickyAlerts.childNodes[0]);
    this.toastAlert(alertElement.getAttribute("id"), timeShown);
  },
  clickHandler: function(event) {
  },
  keydownHandler: function(event) {
  }
};
function halfmoonOnDOMContentLoaded() {
  if (!halfmoon.pageWrapper) {
    halfmoon.pageWrapper = document.getElementsByClassName("page-wrapper")[0];
  }
  if (!halfmoon.stickyAlerts) {
    halfmoon.stickyAlerts = document.getElementsByClassName("sticky-alerts")[0];
  }
  if (halfmoon.readCookie("halfmoon_preferredMode")) {
    if (halfmoon.readCookie("halfmoon_preferredMode") == "dark-mode") {
      halfmoon.darkModeOn = true;
    } else {
      halfmoon.darkModeOn = false;
    }
  } else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      halfmoon.darkModeOn = true;
    } else {
      if (document.body.classList.contains("dark-mode")) {
        halfmoon.darkModeOn = true;
      } else {
        halfmoon.darkModeOn = false;
      }
    }
  }
  if (document.body.getAttribute("data-set-preferred-mode-onload") || document.body.getAttribute("data-set-preferred-theme-onload")) {
    if (halfmoon.darkModeOn) {
      if (!document.body.classList.contains("dark-mode")) {
        document.body.classList.add("dark-mode");
      }
    } else {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      }
    }
  }
  if (document.documentElement.clientWidth <= 768) {
    if (halfmoon.pageWrapper) {
      if (!halfmoon.pageWrapper.getAttribute("data-show-sidebar-onload-sm-and-down")) {
        halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
      }
    }
  } else {
    if (halfmoon.pageWrapper) {
      if (halfmoon.pageWrapper.getAttribute("data-sidebar-type") === "overlayed-all") {
        halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
      }
    }
  }
  document.addEventListener("click", function(event) {
    var eventCopy = event;
    var target = event.target;
    if (target.matches("[data-toggle='dropdown']") || target.matches("[data-toggle='dropdown'] *")) {
      if (target.matches("[data-toggle='dropdown'] *")) {
        target = target.closest("[data-toggle='dropdown']");
      }
      if (target.classList.contains("active")) {
        target.classList.remove("active");
        target.closest(".dropdown").classList.remove("show");
      } else {
        halfmoon.deactivateAllDropdownToggles();
        target.classList.add("active");
        target.closest(".dropdown").classList.add("show");
      }
    } else {
      if (!target.matches(".dropdown-menu *")) {
        halfmoon.deactivateAllDropdownToggles();
      }
    }
    if (target.matches(".alert [data-dismiss='alert']") || target.matches(".alert [data-dismiss='alert'] *")) {
      if (target.matches(".alert [data-dismiss='alert'] *")) {
        target = target.closest(".alert [data-dismiss='alert']");
      }
      target.parentNode.classList.add("dispose");
    }
    if (target.matches("[data-toggle='modal']") || target.matches("[data-toggle='modal'] *")) {
      if (target.matches("[data-toggle='modal'] *")) {
        target = target.closest("[data-toggle='modal']");
      }
      var targetModal = document.getElementById(target.getAttribute("data-target"));
      if (targetModal) {
        if (targetModal.classList.contains("modal")) {
          halfmoon.toggleModal(target.getAttribute("data-target"));
        }
      }
    }
    if (target.matches(".modal [data-dismiss='modal']") || target.matches(".modal [data-dismiss='modal'] *")) {
      if (target.matches(".modal [data-dismiss='modal'] *")) {
        target = target.closest(".modal [data-dismiss='modal']");
      }
      target.closest(".modal").classList.remove("show");
    }
    if (target.matches(".modal-dialog")) {
      var parentModal = target.closest(".modal");
      if (!parentModal.getAttribute("data-overlay-dismissal-disabled")) {
        if (parentModal.classList.contains("show")) {
          parentModal.classList.remove("show");
        } else {
          window.location.hash = "#";
        }
      }
    }
    halfmoon.clickHandler(eventCopy);
  }, false);
  document.addEventListener("keydown", function(event) {
    var eventCopy = event;
    if (!(document.querySelector("input:focus") || document.querySelector("textarea:focus") || document.querySelector("select:focus"))) {
      event = event || window.event;
      if (!(event.ctrlKey || event.metaKey)) {
        if (document.body.getAttribute("data-sidebar-shortcut-enabled")) {
          if (event.shiftKey && event.which == 83) {
            var modalOpen = false;
            if (window.location.hash) {
              var hash = window.location.hash.substring(1);
              var elem = document.getElementById(hash);
              if (elem) {
                if (elem.classList.contains("modal")) {
                  modalOpen = true;
                }
              }
            }
            if (document.querySelector(".modal.show")) {
              modalOpen = true;
            }
            if (!modalOpen) {
              halfmoon.toggleSidebar();
              event.preventDefault();
            }
          }
        }
        if (document.body.getAttribute("data-dm-shortcut-enabled")) {
          if (event.shiftKey && event.which == 68) {
            halfmoon.toggleDarkMode();
            event.preventDefault();
          }
        }
      }
    }
    if (event.which === 27) {
      if (document.querySelector("[data-toggle='dropdown'].active")) {
        var elem = document.querySelector("[data-toggle='dropdown'].active");
        elem.classList.remove("active");
        elem.closest(".dropdown").classList.remove("show");
        event.preventDefault();
      } else {
        if (window.location.hash) {
          var hash = window.location.hash.substring(1);
          var elem = document.getElementById(hash);
          if (elem) {
            if (elem.classList.contains("modal")) {
              if (!elem.getAttribute("data-esc-dismissal-disabled")) {
                window.location.hash = "#";
                event.preventDefault();
              }
            }
          }
        }
        if (document.querySelector(".modal.show")) {
          var elem = document.querySelector(".modal.show");
          if (!elem.getAttribute("data-esc-dismissal-disabled")) {
            elem.classList.remove("show");
            event.preventDefault();
          }
        }
      }
    }
    halfmoon.keydownHandler(eventCopy);
  });
  var halfmoonCustomFileInputs = document.querySelectorAll(".custom-file input");
  for (var i = 0; i < halfmoonCustomFileInputs.length; i++) {
    var customFile = halfmoonCustomFileInputs[i];
    var fileNamesContainer = document.createElement("div");
    fileNamesContainer.classList.add("file-names");
    var dataDefaultValue = customFile.getAttribute("data-default-value");
    if (dataDefaultValue) {
      fileNamesContainer.innerHTML = dataDefaultValue;
    } else {
      fileNamesContainer.innerHTML = "No file chosen";
    }
    customFile.parentNode.appendChild(fileNamesContainer);
    customFile.addEventListener("change", function(event) {
      fileNamesContainer = event.target.parentNode.querySelector(".file-names");
      if (event.target.files.length === 1) {
        fileNamesContainer.innerHTML = event.target.files[0].name;
      } else if (event.target.files.length > 1) {
        fileNamesContainer.innerHTML = event.target.files.length + " files";
      } else {
        fileNamesContainer.innerHTML = "No file chosen";
      }
    });
  }
  if (halfmoon.pageWrapper) {
    halfmoon.pageWrapper.classList.add("with-transitions");
  }
}
halfmoon.onDOMContentLoaded = halfmoonOnDOMContentLoaded;
var halfmoonModule = halfmoon;
var halfmoon_1 = halfmoonModule;
var halfmoon_default = halfmoon_1;

// build/dist/components/Navbar.js
var navLinks = [
  {
    name: "Home",
    href: "#"
  },
  {
    name: "Contact me",
    href: "#"
  },
  {
    name: "About me",
    href: "#"
  }
];
function Navbar() {
  useEffect(() => {
    halfmoon_default.onDOMContentLoaded();
  }, []);
  return /* @__PURE__ */ react.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "navbar-content"
  }, /* @__PURE__ */ react.createElement("button", {
    className: "btn btn-action btn-square d-flex align-items-center justify-content-center"
  }, /* @__PURE__ */ react.createElement(Menu, {
    size: 18
  }))), /* @__PURE__ */ react.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "TS Dashboard"), /* @__PURE__ */ react.createElement("ul", {
    className: "navbar-nav d-none d-md-flex"
  }, navLinks.map((link) => /* @__PURE__ */ react.createElement("li", {
    className: "nav-item",
    key: v4()
  }, /* @__PURE__ */ react.createElement("a", {
    href: link.href,
    className: "nav-link"
  }, link.name)))), /* @__PURE__ */ react.createElement("div", {
    className: "ml-auto"
  }, /* @__PURE__ */ react.createElement("button", {
    onClick: () => {
      halfmoon_default.toggleDarkMode();
    },
    className: "btn d-flex align-items-center justify-content-center btn-square"
  }, /* @__PURE__ */ react.createElement(Moon, {
    size: 18
  }))), /* @__PURE__ */ react.createElement("div", {
    className: "navbar-content d-md-none"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "dropdown with-arrow"
  }, /* @__PURE__ */ react.createElement("button", {
    className: "btn d-flex align-items-center justify-content-center btn-square",
    "data-toggle": "dropdown"
  }, /* @__PURE__ */ react.createElement(ChevronDown, {
    size: 18
  })), /* @__PURE__ */ react.createElement("div", {
    className: "dropdown-menu dropdown-menu-right w-200"
  }, navLinks.map((link) => /* @__PURE__ */ react.createElement("a", {
    href: link.href,
    className: "dropdown-item",
    key: v4()
  }, link.name))))));
}

// build/dist/components/Container.js
function Container() {
  return /* @__PURE__ */ react.createElement("div", {
    className: "content-wrapper"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ react.createElement("h1", null, "Welcome to TS Dash")), /* @__PURE__ */ react.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ react.createElement("h1", {
    className: "card-title"
  }, "A useful card"), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("strong", null, "Some Lorem"), " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae maxime impedit error, molestiae delectus! Saepe, molestiae voluptatem! Quaerat, quasi architecto. Corporis blanditiis quos deleniti, excepturi aliquam dolor similique voluptatum voluptatibus illo illum, nihil, accusantium culpa esse provident? Porro nemo illum tempore quos! Minima odio libero eligendi explicabo dicta cum."))));
}

// build/dist/App.js
function App() {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Navbar, null), /* @__PURE__ */ react.createElement(Container, null));
}

// build/dist/index.js
import.meta.env = env_exports;
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App, null)), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=/dist//index.js.map
