!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function w(e){return c=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function S(){var e=g();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?y(e):(i=r=void 0,a)}function T(){var e=g(),n=O(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?a:h(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var w={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),message:document.querySelector("textarea")},O="feedback-form-state",S={email:"",message:""};function h(){localStorage.setItem(O,JSON.stringify(S))}w.input.addEventListener("input",e(t)((function(e){inputValue=e.target.value,S.email=inputValue,h()}),500)),w.message.addEventListener("input",e(t)((function(e){messageValue=e.target.value,S.message=messageValue,h()}),500)),w.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),localStorage.removeItem(O),w.form.reset()})),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e),n=t.email,i=t.message;w.input.value=n,w.message.value=i}else w.input.value="",w.message.value=""}))}();
//# sourceMappingURL=03-feedback.5013a30b.js.map
