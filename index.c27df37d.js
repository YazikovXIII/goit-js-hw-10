!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t},n=function(e){var n=void 0===e?"undefined":t(r)(e);return null!=e&&("object"==n||"function"==n)};var o,i={},u={};o="object"==typeof e&&e&&e.Object===Object&&e;var f="object"==typeof self&&self&&self.Object===Object&&self,a=o||f||Function("return this")();i=function(){return u.Date.now()};var l={},c={},d={},v=/\s/;d=function(t){for(var e=t.length;e--&&v.test(t.charAt(e)););return e};var b=/^\s+/;c=function(t){return t?t.slice(0,d(t)+1).replace(b,""):t};var s,y={},p={};s=(u=a).Symbol;var j={},g=Object.prototype,O=g.hasOwnProperty,h=g.toString,m=s?s.toStringTag:void 0;j=function(t){var e=O.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[m]=n:delete t[m]),o};var S={},w=Object.prototype.toString;S=function(t){return w.call(t)};var N=s?s.toStringTag:void 0;p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":N&&N in Object(t)?j(t):S(t)};var M={};M=function(t){return null!=t&&"object"==typeof t};y=function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||M(e)&&"[object Symbol]"==p(e)};var T=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,$=/^0o[0-7]+$/i,x=parseInt;l=function(t){if("number"==typeof t)return t;if(y(t))return NaN;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=c(t);var r=_.test(t);return r||$.test(t)?x(t.slice(2),r?2:8):T.test(t)?NaN:+t};var P=Math.max,A=Math.min}();
//# sourceMappingURL=index.c27df37d.js.map
