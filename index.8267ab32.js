var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={};e=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var n,r={},o={};n="object"==typeof t&&t&&t.Object===Object&&t;var f="object"==typeof self&&self&&self.Object===Object&&self,i=n||f||Function("return this")();r=function(){return o.Date.now()};var a={},l={},u={},c=/\s/;u=function(t){for(var e=t.length;e--&&c.test(t.charAt(e)););return e};var v=/^\s+/;l=function(t){return t?t.slice(0,u(t)+1).replace(v,""):t};var b,s={},p={};b=(o=i).Symbol;var y={},d=Object.prototype,j=d.hasOwnProperty,g=d.toString,O=b?b.toStringTag:void 0;y=function(t){var e=j.call(t,O),n=t[O];try{t[O]=void 0;var r=!0}catch(t){}var o=g.call(t);return r&&(e?t[O]=n:delete t[O]),o};var h={},m=Object.prototype.toString;h=function(t){return m.call(t)};var w=b?b.toStringTag:void 0;p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?y(t):h(t)};var S={};S=function(t){return null!=t&&"object"==typeof t};s=function(t){return"symbol"==typeof t||S(t)&&"[object Symbol]"==p(t)};var N=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,$=/^0o[0-7]+$/i,x=parseInt;a=function(t){if("number"==typeof t)return t;if(s(t))return NaN;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=l(t);var r=T.test(t);return r||$.test(t)?x(t.slice(2),r?2:8):N.test(t)?NaN:+t};var M=Math.max,A=Math.min;
//# sourceMappingURL=index.8267ab32.js.map
