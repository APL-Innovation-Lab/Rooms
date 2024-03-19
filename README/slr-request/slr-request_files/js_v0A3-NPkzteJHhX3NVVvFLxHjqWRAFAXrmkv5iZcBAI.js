!function s(a,n,i){function o(t,e){if(!n[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=n[t]={exports:{}},a[t][0].call(r.exports,function(e){return o(a[t][1][e]||e)},r,r.exports,s,a,n,i)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)o(i[e]);return o}({1:[function(e,t,r){"use strict";var s;if("document"in window.self)if("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))(a=document.createElement("_")).classList.add("c1","c2"),a.classList.contains("c2")||((i=function(e){var s=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var t=arguments.length,r=0;r<t;r++)s.call(this,arguments[r])}})("add"),i("remove")),a.classList.toggle("c3",!1),a.classList.contains("c3")&&(s=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:s.call(this,e)});else if("Element"in(i=window.self)){var a="classList",n="prototype",i=i.Element[n],o=Object,c=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},l=Array[n].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},u=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},d=function(e,t){if(""===t)throw new u("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new u("INVALID_CHARACTER_ERR","String contains an invalid character");return l.call(e,t)},p=function(e){for(var t=c.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],s=0,a=r.length;s<a;s++)this.push(r[s]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},b=p[n]=[],f=function(){return new p(this)};if(u[n]=Error[n],b.item=function(e){return this[e]||null},b.contains=function(e){return-1!==d(this,e+="")},b.add=function(){for(var e,t=arguments,r=0,s=t.length,a=!1;-1===d(this,e=t[r]+"")&&(this.push(e),a=!0),++r<s;);a&&this._updateClassName()},b.remove=function(){var e,t,r=arguments,s=0,a=r.length,n=!1;do{for(t=d(this,e=r[s]+"");-1!==t;)this.splice(t,1),n=!0,t=d(this,e)}while(++s<a);n&&this._updateClassName()},b.toggle=function(e,t){var r=this.contains(e+=""),s=r?!0!==t&&"remove":!1!==t&&"add";return s&&this[s](e),!0===t||!1===t?t:!r},b.toString=function(){return this.join(" ")},o.defineProperty){b={get:f,enumerable:!0,configurable:!0};try{o.defineProperty(i,a,b)}catch(e){-2146823252===e.number&&(b.enumerable=!1,o.defineProperty(i,a,b))}}else o[n].__defineGetter__&&i.__defineGetter__(a,f)}},{}],2:[function(e,t,r){"use strict";var s;"function"!=typeof(s=window.Element.prototype).matches&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=0;t[r]&&t[r]!==this;)++r;return Boolean(t[r])}),"function"!=typeof s.closest&&(s.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})},{}],3:[function(e,t,r){"use strict";for(var s={polyfill:function(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var e={get:function(e){var t=s.keys[this.which||this.keyCode];return t=Array.isArray(t)?t[+this.shiftKey]:t}};return Object.defineProperty(KeyboardEvent.prototype,"key",e),e},keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}},a=1;a<25;a++)s.keys[111+a]="F"+a;var n="";for(a=65;a<91;a++)n=String.fromCharCode(a),s.keys[a]=[n.toLowerCase(),n.toUpperCase()];"function"==typeof define&&define.amd?define("keyboardevent-key-polyfill",s):void 0!==r&&void 0!==t?t.exports=s:window&&(window.keyboardeventKeyPolyfill=s)},{}],4:[function(e,t,r){"use strict";var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(Object.assign){var e=new String("abc");if(e[5]="de","5"!==Object.getOwnPropertyNames(e)[0]){for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var s,a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"===a.join(""))return s={},"abcdefghijklmnopqrst".split("").forEach(function(e){s[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")?1:void 0}}}catch(e){}}()?Object.assign:function(e,t){for(var r,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var n in r=Object(arguments[a]))l.call(r,n)&&(s[n]=r[n]);if(c)for(var i=c(r),o=0;o<i.length;o++)u.call(r,i[o])&&(s[i[o]]=r[i[o]])}return s}},{}],5:[function(e,t,r){"use strict";const c=e("object-assign"),l=e("../delegate"),u=e("../delegateAll"),d=/^(.+):delegate\((.+)\)$/;function p(e,t){var r=e[t];return delete e[t],r}t.exports=function(o,e){const r=Object.keys(o).reduce(function(e,t){r=o[t=t],(i=t.match(d))&&(t=i[1],s=i[2]),"object"==typeof r&&(a={capture:p(r,"capture"),passive:p(r,"passive")}),n={selector:s,delegate:"object"==typeof r?u(r):s?l(s,r):r,options:a};var r,s,a,n,i=-1<t.indexOf(" ")?t.split(" ").map(function(e){return c({type:e},n)}):(n.type=t,[n]);return e.concat(i)},[]);return c({add:function(t){r.forEach(function(e){t.addEventListener(e.type,e.delegate,e.options)})},remove:function(t){r.forEach(function(e){t.removeEventListener(e.type,e.delegate,e.options)})}},e)}},{"../delegate":7,"../delegateAll":8,"object-assign":4}],6:[function(e,t,r){"use strict";t.exports=function(e){return function(t){return e.some(function(e){return!1===e.call(this,t)},this)}}},{}],7:[function(e,t,r){"use strict";e("element-closest"),t.exports=function(r,s){return function(e){var t=e.target.closest(r);if(t)return s.call(t,e)}}},{"element-closest":2}],8:[function(e,t,r){"use strict";const s=e("../delegate"),a=e("../compose");t.exports=function(r){var e=Object.keys(r);return 1===e.length&&"*"===e[0]?r["*"]:(e=e.reduce(function(e,t){return e.push(s(t,r[t])),e},[]),a(e))}},{"../compose":6,"../delegate":7}],9:[function(e,t,r){"use strict";t.exports=function(t,r){return function(e){if(t!==e.target&&!t.contains(e.target))return r.call(this,e)}}},{}],10:[function(e,t,r){"use strict";t.exports={behavior:e("./behavior"),delegate:e("./delegate"),delegateAll:e("./delegateAll"),ignore:e("./ignore"),keymap:e("./keymap")}},{"./behavior":5,"./delegate":7,"./delegateAll":8,"./ignore":9,"./keymap":11}],11:[function(e,t,r){"use strict";e("keyboardevent-key-polyfill");const n={Alt:"altKey",Control:"ctrlKey",Ctrl:"ctrlKey",Shift:"shiftKey"};t.exports=function(a){const e=Object.keys(a).some(function(e){return-1<e.indexOf("+")});return function(r){var s=function(e,t){var r=e.key;if(t)for(var s in n)!0===e[n[s]]&&(r=[s,r].join("+"));return r}(r,e);return[s,s.toLowerCase()].reduce(function(e,t){return e=t in a?a[s].call(this,r):e},void 0)}},t.exports.MODIFIERS=n},{"keyboardevent-key-polyfill":3}],12:[function(e,t,r){"use strict";t.exports=function(t,r){function s(e){return e.currentTarget.removeEventListener(e.type,s,r),t.call(this,e)}return s}},{}],13:[function(e,t,r){"use strict";var s=/(^\s+)|(\s+$)/g,a=/\s+/,n=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(s,"")};t.exports=function(e,t){if("string"!=typeof e)throw new Error("Expected a string but got "+typeof e);var r=((t=t||window.document).getElementById||function(e){return this.querySelector('[id="'+e.replace(/"/g,'\\"')+'"]')}).bind(t);return 1===(e=n(e).split(a)).length&&""===e[0]?[]:e.map(function(e){var t=r(e);if(t)return t;throw new Error('no element with id: "'+e+'"')})}},{}],14:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/toggle-form-input");var n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=s({[n]:{[`.${e}-show-password`]:function(e){e.preventDefault(),a(this)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/toggle-form-input":55}],15:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/is-in-viewport");var o=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const c=`.${e}-accordion, .${e}-accordion--bordered`,l=`.${e}-accordion__button[aria-controls]`,u="aria-expanded",d=t=>{return s(l,t).filter(e=>e.closest(c)===t)},p=(t,e)=>{var r=t.closest(c);if(!r)throw new Error(l+" is missing outer "+c);var e=n(t,e),s=r.hasAttribute("data-allow-multiple");e&&!s&&d(r).forEach(e=>{e!==t&&n(e,!1)})};e=a({[o]:{[l](){p(this),"true"!==this.getAttribute(u)||i(this)||this.scrollIntoView()}}},{init(e){s(l,e).forEach(e=>{var t="true"===e.getAttribute(u);p(e,t)})},ACCORDION:c,BUTTON:l,show:e=>p(e,!0),hide:e=>p(e,!1),toggle:p,getButtons:d});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56}],16:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const n=`.${e}-banner__header`,i=e+"-banner__header--expanded";t.exports=s({[a]:{[n+" [aria-controls]"]:function(e){e.preventDefault(),this.closest(n).classList.toggle(i)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],17:[function(e,t,r){"use strict";var s=e("receptor/keymap"),e=e("../../uswds-core/src/js/utils/behavior")({keydown:{'a[class*="usa-button"]':s({" ":e=>{e.preventDefault(),e.target.click()}})}});t.exports=e},{"../../uswds-core/src/js/utils/behavior":45,"receptor/keymap":11}],18:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/utils/debounce"),e=e("../../uswds-core/src/js/config")["prefix"],i=e+"-character-count";const o="."+i,c=`.${e}-character-count__field`,l=`.${e}-character-count__message`,u="The content is too long.",d=e+"-character-count__status--invalid",p=i+"__status",b=i+"__sr-status",f="."+p,h="."+b,m="characters allowed",v=e=>{e=e.closest(o);if(!e)throw new Error(c+" is missing outer "+o);var t=e.querySelector(l);if(t)return{characterCountEl:e,messageEl:t};throw new Error(o+" is missing inner "+l)},g=e=>{var t=document.createElement("div"),r=document.createElement("div"),s=e.dataset.maxlength+" "+m;t.classList.add(""+p,"usa-hint"),r.classList.add(""+b,"usa-sr-only"),t.setAttribute("aria-hidden",!0),r.setAttribute("aria-live","polite"),t.textContent=s,r.textContent=s,e.append(t,r)},y=(e,t)=>{let r="";var s;return r=0===e?t+" "+m:(s=Math.abs(t-e))+` ${"character"+(1===s?"":"s")} `+(t<e?"over limit":"left")},w=n((e,t)=>{e.textContent=t},1e3),A=e=>{var t=v(e)["characterCountEl"],r=e.value.length,s=parseInt(t.getAttribute("data-maxlength"),10),a=t.querySelector(f),t=t.querySelector(h),n=y(r,s);s&&(s=r&&s<r,a.textContent=n,w(t,n),s&&!e.validationMessage&&e.setCustomValidity(u),s||e.validationMessage!==u||e.setCustomValidity(""),a.classList.toggle(d,s))},E=e=>{var t,{characterCountEl:r,messageEl:s}=v(e);s.classList.add("usa-sr-only"),s.removeAttribute("aria-live"),s=e,e=v(s).characterCountEl,(t=s.getAttribute("maxlength"))&&(s.removeAttribute("maxlength"),e.setAttribute("data-maxlength",t)),g(r)};e=a({input:{[c](){A(this)}}},{init(e){s(c,e).forEach(e=>E(e))},MESSAGE_INVALID_CLASS:d,VALIDATION_MESSAGE:u,STATUS_MESSAGE_CLASS:p,STATUS_MESSAGE_SR_ONLY_CLASS:b,DEFAULT_STATUS_LABEL:m,createStatusMessages:g,getCountMessage:y,updateCountMessage:A});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/debounce":46,"../../uswds-core/src/js/utils/select":53}],19:[function(e,t,I){"use strict";var r=e("receptor/keymap");const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior");const b=e("../../uswds-core/src/js/utils/sanitizer");var n=e("../../uswds-core/src/js/config")["prefix"],e=e("../../uswds-core/src/js/events")["CLICK"],n=n+"-combo-box";const f=n+"--pristine",h=n+"__select",m=n+"__input",v=n+"__clear-input",O=v+"__wrapper",B=n+"__input-button-separator",g=n+"__toggle-list",H=g+"__wrapper",y=n+"__list",w=n+"__list-option",A=w+"--focused",E=w+"--selected",x=n+"__status",j="."+n,P="."+h,u="."+m,d="."+v,p="."+g,F="."+y,i="."+w,L="."+A,R="."+E,Y="."+x,U=".*{{query}}.*";const _=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},S=e=>{var t,r,s,a,n,i,o,c,l,e=e.closest(j);if(e)return t=e.querySelector(P),r=e.querySelector(u),s=e.querySelector(F),a=e.querySelector(Y),n=e.querySelector(L),i=e.querySelector(R),o=e.querySelector(p),c=e.querySelector(d),l=e.classList.contains(f),{comboBoxEl:e,selectEl:t,inputEl:r,listEl:s,statusEl:a,focusedOptionEl:n,selectedOptionEl:i,toggleListBtnEl:o,clearInputBtnEl:c,isPristine:l,disableFiltering:"true"===e.dataset.disableFiltering};throw new Error("Element is missing outer "+j)},C=e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!0,r.disabled=!0,t.disabled=!0,e.disabled=!0};const o=e=>{e=e.closest(j);if(!e.dataset.enhanced){const u=e.querySelector("select");if(!u)throw new Error(j+" is missing inner select");var t=u.id,s=document.querySelector(`label[for="${t}"]`),a=t+"--list",n=t+"-label",i=t+"--assistiveHint";const d=[];var o=e.dataset["defaultValue"],c=e.dataset["placeholder"];let r;if(c&&d.push({placeholder:c}),o)for(let e=0,t=u.options.length;e<t;e+=1){var l=u.options[e];if(l.value===o){r=l;break}}if(!s||!s.matches(`label[for="${t}"]`))throw new Error(j+` for ${t} is either missing a label or a "for" attribute`);s.setAttribute("id",n),s.setAttribute("id",n),u.setAttribute("aria-hidden","true"),u.setAttribute("tabindex","-1"),u.classList.add("usa-sr-only",h),u.id="",u.value="",["required","aria-label","aria-labelledby"].forEach(e=>{var t;u.hasAttribute(e)&&(t=u.getAttribute(e),d.push({[e]:t}),u.removeAttribute(e))});const p=document.createElement("input");p.setAttribute("id",t),p.setAttribute("aria-owns",a),p.setAttribute("aria-controls",a),p.setAttribute("aria-autocomplete","list"),p.setAttribute("aria-describedby",i),p.setAttribute("aria-expanded","false"),p.setAttribute("autocapitalize","off"),p.setAttribute("autocomplete","off"),p.setAttribute("class",m),p.setAttribute("type","text"),p.setAttribute("role","combobox"),d.forEach(r=>Object.keys(r).forEach(e=>{var t=b.escapeHTML`${r[e]}`;p.setAttribute(e,t)})),e.insertAdjacentElement("beforeend",p),e.insertAdjacentHTML("beforeend",b.escapeHTML`
    <span class="${O}" tabindex="-1">
        <button type="button" class="${v}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${B}">&nbsp;</span>
      <span class="${H}" tabindex="-1">
        <button type="button" tabindex="-1" class="${g}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${a}"
        class="${y}"
        role="listbox"
        aria-labelledby="${n}"
        hidden>
      </ul>
      <div class="${x} usa-sr-only" role="status"></div>
      <span id="${i}" class="usa-sr-only">
        When autocomplete results are available use up and down arrows to review and enter to select.
        Touch device users, explore by touch or with swipe gestures.
      </span>`),r&&(c=S(e)["inputEl"],_(u,r.value),_(c,r.text),e.classList.add(f)),u.disabled&&(C(e),u.disabled=!1),u.hasAttribute("aria-disabled")&&(s=e,{inputEl:s,toggleListBtnEl:t,clearInputBtnEl:a}=S(s),a.hidden=!0,a.setAttribute("aria-disabled",!0),t.setAttribute("aria-disabled",!0),s.setAttribute("aria-disabled",!0),u.removeAttribute("aria-disabled")),e.dataset.enhanced="true"}},D=function(e,t){var{skipFocus:r,preventScroll:s}=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},{inputEl:e,listEl:a,focusedOptionEl:n}=S(e);n&&(n.classList.remove(A),n.setAttribute("tabIndex","-1")),t?(e.setAttribute("aria-activedescendant",t.id),t.setAttribute("tabIndex","0"),t.classList.add(A),s||(n=t.offsetTop+t.offsetHeight,a.scrollTop+a.offsetHeight<n&&(a.scrollTop=n-a.offsetHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)),r||t.focus({preventScroll:s})):(e.setAttribute("aria-activedescendant",""),e.focus())},T=function(e){let s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};const n=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");e=`^(?:${e.replace(/{{(.*?)}}/g,(e,t)=>{var t=t.trim(),r=a[t];return"query"!==t&&r?(t=new RegExp(r,"i"),(r=s.match(t))?n(r[1]):""):n(s)})})$`;return new RegExp(e,"i")},c=e=>{const{comboBoxEl:t,selectEl:r,inputEl:s,listEl:a,statusEl:n,isPristine:i,disableFiltering:o}=S(e);let c,l;const u=a.id+"--option-";var d=(s.value||"").toLowerCase(),e=t.dataset.filter||U,p=T(e,d,t.dataset);const b=[];for(let e=0,t=r.options.length;e<t;e+=1){var f=r.options[e],h=u+b.length;f.value&&(o||i||!d||p.test(f.text))&&(r.value&&f.value===r.value&&(c=h),o&&!l&&p.test(f.text)&&(l=h),b.push(f))}var e=b.length,m=b.map((e,t)=>{var r=u+t,s=[w];let a="-1",n="false";r===c&&(s.push(E,A),a="0",n="true"),c||0!==t||(s.push(A),a="0");var i=document.createElement("li");return i.setAttribute("aria-setsize",b.length),i.setAttribute("aria-posinset",t+1),i.setAttribute("aria-selected",n),i.setAttribute("id",r),i.setAttribute("class",s.join(" ")),i.setAttribute("tabindex",a),i.setAttribute("role","option"),i.setAttribute("data-value",e.value),i.textContent=e.text,i}),v=document.createElement("li");v.setAttribute("class",w+"--no-results"),v.textContent="No results found",a.hidden=!1,e?(a.innerHTML="",m.forEach(e=>a.insertAdjacentElement("beforeend",e))):(a.innerHTML="",a.insertAdjacentElement("beforeend",v)),s.setAttribute("aria-expanded","true"),n.textContent=e?e+` result${1<e?"s":""} available.`:"No results.";let g;i&&c?g=a.querySelector("#"+c):o&&l&&(g=a.querySelector("#"+l)),g&&D(a,g,{skipFocus:!0})},l=e=>{var{inputEl:e,listEl:t,statusEl:r,focusedOptionEl:s}=S(e);r.innerHTML="",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendant",""),s&&s.classList.remove(A),t.scrollTop=0,t.hidden=!0},$=e=>{var{comboBoxEl:t,selectEl:r,inputEl:s}=S(e);_(r,e.dataset.value),_(s,e.textContent),t.classList.add(f),l(t),s.focus()},k=e=>{var{comboBoxEl:r,selectEl:s,inputEl:a}=S(e),n=s.value,i=(a.value||"").toLowerCase();if(n)for(let e=0,t=s.options.length;e<t;e+=1){var o=s.options[e];if(o.value===n)return i!==o.text&&_(a,o.text),void r.classList.add(f)}i&&_(a)};var M=e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=(r.hidden&&c(t),r.querySelector(L)||r.querySelector(i));r&&D(t,r),e.preventDefault()},q=e=>{var t=e.target,r=t.nextSibling;r&&D(t,r),e.preventDefault()},N=e=>{var{comboBoxEl:t,listEl:r,focusedOptionEl:s}=S(e.target),s=s&&s.previousSibling,r=!r.hidden;D(t,s),r&&e.preventDefault(),s||l(t)};a=a({[e]:{[u](){var e,t;this.disabled||(e=this,{comboBoxEl:e,listEl:t}=S(e),t.hidden&&c(e))},[p](){var e,t,r;this.disabled||(e=this,{comboBoxEl:e,listEl:t,inputEl:r}=S(e),(t.hidden?c:l)(e),r.focus())},[i](){this.disabled||$(this)},[d](){var e,t,r,s;this.disabled||(e=this,{comboBoxEl:e,listEl:s,selectEl:t,inputEl:r}=S(e),s=!s.hidden,t.value&&_(t),r.value&&_(r),e.classList.remove(f),s&&c(e),r.focus())}},focusout:{[j](e){this.contains(e.relatedTarget)||(k(this),l(this))}},keydown:{[j]:r({Escape:e=>{var{comboBoxEl:e,inputEl:t}=S(e.target);l(e),k(e),t.focus()}}),[u]:r({Enter:e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=!r.hidden;(e=>{var{comboBoxEl:r,selectEl:s,inputEl:a,statusEl:e}=S(e),n=(e.textContent="",(a.value||"").toLowerCase());if(n)for(let e=0,t=s.options.length;e<t;e+=1){var i=s.options[e];if(i.text.toLowerCase()===n)return _(s,i.value),_(a,i.text),r.classList.add(f)}k(r)})(t),r&&l(t),e.preventDefault()},ArrowDown:M,Down:M}),[i]:r({ArrowUp:N,Up:N,ArrowDown:q,Down:q,Enter:e=>{$(e.target),e.preventDefault()}," ":e=>{$(e.target),e.preventDefault()},"Shift+Tab":()=>{}})},input:{[u](){this.closest(j).classList.remove(f),c(this)}},mouseover:{[i](){var e;(e=this).classList.contains(A)||D(e,e,{preventScroll:!0})}}},{init(e){s(j,e).forEach(e=>{o(e)})},getComboBoxContext:S,enhanceComboBox:o,generateDynamicRegExp:T,disable:C,enable:e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!1,r.disabled=!1,t.disabled=!1,e.disabled=!1},displayList:c,hideList:l,COMBO_BOX_CLASS:n});t.exports=a},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],20:[function(e,A,E){"use strict";const t=e("receptor/keymap");var _=e("../../uswds-core/src/js/utils/behavior");const S=e("../../uswds-core/src/js/utils/select"),P=e("../../uswds-core/src/js/utils/select-or-matches");var r=e("../../uswds-core/src/js/config")["prefix"],F=e("../../uswds-core/src/js/events")["CLICK"];const R=e("../../uswds-core/src/js/utils/active-element");var Y=e("../../uswds-core/src/js/utils/is-ios-device");const C=e("../../uswds-core/src/js/utils/sanitizer");e=r+"-date-picker";const U=e+"__wrapper",V=e+"--initialized",K=e+"--active",W=e+"__internal-input",z=e+"__external-input",Q=e+"__button",n=e+"__calendar",G=e+"__status",D=n+"__date",Z=D+"--focused",X=D+"--selected",J=D+"--previous-month",ee=D+"--current-month",te=D+"--next-month",re=D+"--range-date",se=D+"--today",ae=D+"--range-date-start",ne=D+"--range-date-end",ie=D+"--within-range",oe=n+"__previous-year",ce=n+"__previous-month",le=n+"__next-year",ue=n+"__next-month",de=n+"__month-selection",pe=n+"__year-selection",p=n+"__month",be=p+"--focused",fe=p+"--selected",x=n+"__year",he=x+"--focused",me=x+"--selected",ve=n+"__previous-year-chunk",ge=n+"__next-year-chunk",ye=n+"__date-picker",we=n+"__month-picker",Ae=n+"__year-picker",T=n+"__table",Ee=n+"__row",$=n+"__cell",k=$+"--center-items",xe=n+"__month-label",je=n+"__day-of-week",f="."+e,Le="."+Q,_e="."+W,h="."+z,m="."+n,Se="."+G;r="."+D;const o="."+Z;e="."+ee;const Ce="."+oe,De="."+ce,Te="."+le,$e="."+ue;var ke="."+pe,Me="."+de,qe="."+p;const v="."+x,Ne="."+ve,Ie="."+ge,M="."+ye;var Oe="."+we;const Be="."+Ae,c="."+be,l="."+he,He="Please enter a valid date",Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=12,Re="MM/DD/YYYY",Ye="YYYY-MM-DD";function Ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>e+":not([disabled])").join(", ")}var Ve=Ue(Ce,De,ke,Me,Te,$e,o),Ke=Ue(c),We=Ue(Ne,Ie,l);const ze=(e,t)=>(t!==e.getMonth()&&e.setDate(0),e),Qe=(e,t,r)=>{var s=new Date(0);return s.setFullYear(e,t,r),s},Ge=()=>{var e=new Date,t=e.getDate(),r=e.getMonth(),e=e.getFullYear();return Qe(e,r,t)},Ze=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth(),1),t},Xe=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth()+1,0),t},q=(e,t)=>{e=new Date(e.getTime());return e.setDate(e.getDate()+t),e},Je=(e,t)=>q(e,-t),et=(e,t)=>q(e,7*t),tt=e=>{var t=e.getDay();return Je(e,t)},N=(e,t)=>{var e=new Date(e.getTime()),r=(e.getMonth()+12+t)%12;return e.setMonth(e.getMonth()+t),ze(e,r),e},rt=(e,t)=>N(e,-t),st=(e,t)=>N(e,12*t),at=(e,t)=>st(e,-t),b=(e,t)=>{e=new Date(e.getTime());return e.setMonth(t),ze(e,t),e},L=(e,t)=>{var e=new Date(e.getTime()),r=e.getMonth();return e.setFullYear(t),ze(e,r),e},nt=(e,t)=>{let r=t<e?t:e;return new Date(r.getTime())},it=(e,t)=>{let r=e<t?t:e;return new Date(r.getTime())},ot=(e,t)=>e&&t&&e.getFullYear()===t.getFullYear(),I=(e,t)=>ot(e,t)&&e.getMonth()===t.getMonth(),O=(e,t)=>I(e,t)&&e.getDate()===t.getDate(),u=(e,t,r)=>{let s=e;return e<t?s=t:r&&r<e&&(s=r),new Date(s.getTime())},ct=(e,t,r)=>t<=e&&(!r||e<=r),lt=(e,t,r)=>Xe(e)<t||r&&Ze(e)>r,ut=(e,t,r)=>Xe(b(e,11))<t||r&&Ze(b(e,0))>r,g=function(s){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];let i,o,c,l,u;if(s){let e,t,r;a===Re?[e,t,r]=s.split("/"):[r,e,t]=s.split("-"),r&&(u=parseInt(r,10),Number.isNaN(u)||(l=u,n&&(l=Math.max(0,l),r.length<3)&&(s=(a=Ge().getFullYear())-a%10**r.length,l=s+u))),e&&(u=parseInt(e,10),Number.isNaN(u)||(o=u,n&&(o=Math.max(1,o),o=Math.min(12,o)))),o&&t&&null!=l&&(u=parseInt(t,10),Number.isNaN(u)||(c=u,n&&(a=Qe(l,o,0).getDate(),c=Math.max(1,c),c=Math.min(a,c)))),o&&c&&null!=l&&(i=Qe(l,o-1,c))}return i},B=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,r=(e,t)=>("0000"+e).slice(-t),s=e.getMonth()+1,a=e.getDate(),e=e.getFullYear();return t===Re?[r(s,2),r(a,2),r(e,4)].join("/"):[r(e,4),r(s,2),r(a,2)].join("-")},dt=(e,t)=>{var r=[],s=[];let a=0;for(;a<e.length;){s=[];const i=document.createElement("tr");for(;a<e.length&&s.length<t;){var n=document.createElement("td");n.insertAdjacentElement("beforeend",e[a]),s.push(n),a+=1}s.forEach(e=>{i.insertAdjacentElement("beforeend",e)}),r.push(i)}return r},pt=e=>{const t=document.createElement("tbody");return e.forEach(e=>{t.insertAdjacentElement("beforeend",e)}),t},bt=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},H=e=>{e=e.closest(f);if(!e)throw new Error("Element is missing outer "+f);var t=e.querySelector(_e),r=e.querySelector(h),s=e.querySelector(m),a=e.querySelector(Le),n=e.querySelector(Se),i=e.querySelector(v),o=g(r.value,Re,!0),c=g(t.value),l=g(s.dataset.value),u=g(e.dataset.minDate),d=g(e.dataset.maxDate),p=g(e.dataset.rangeDate),b=g(e.dataset.defaultDate);if(u&&d&&d<u)throw new Error("Minimum date cannot be after maximum date");return{calendarDate:l,minDate:u,toggleBtnEl:a,selectedDate:c,maxDate:d,firstYearChunkEl:i,datePickerEl:e,inputDate:o,internalInputEl:t,externalInputEl:r,calendarEl:s,rangeDate:p,defaultDate:b,statusEl:n}},ft=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!0,e.disabled=!0},ht=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.setAttribute("aria-disabled",!0),e.setAttribute("aria-disabled",!0)};const mt=e=>{var t,r,s,a,{externalInputEl:e,minDate:n,maxDate:i}=H(e),e=e.value;let o=!1;return o=e&&(o=!0,[t,r,s]=(e=e.split("/")).map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),t)&&r&&null!=s&&(a=Qe(s,t-1,r)).getMonth()===t-1&&a.getDate()===r&&a.getFullYear()===s&&4===e[2].length&&ct(a,n,i)?!1:o},vt=e=>{var e=H(e)["externalInputEl"],t=mt(e);t&&!e.validationMessage&&e.setCustomValidity(He),t||e.validationMessage!==He||e.setCustomValidity("")},gt=(e,t)=>{var r,s,a=g(t);a&&(a=B(a,Re),{datePickerEl:e,internalInputEl:r,externalInputEl:s}=H(e),bt(r,t),bt(s,a),vt(e))},d=(e,t)=>{const{datePickerEl:r,calendarEl:s,statusEl:a,selectedDate:d,maxDate:p,minDate:b,rangeDate:f}=H(e),h=Ge();let n=t||h;e=s.hidden;const m=q(n,0);var i=n.getMonth(),t=n.getFullYear();const v=rt(n,1),g=N(n,1);var o=B(n),c=Ze(n),l=I(n,b),u=I(n,p),y=d||n;const w=f&&nt(y,f),A=f&&it(y,f),E=f&&q(w,1),x=f&&Je(A,1);for(var y=Pe[i],j=(n=tt(c),[]);j.length<28||n.getMonth()===i||j.length%7!=0;)j.push((e=>{var t=[D],r=e.getDate(),s=e.getMonth(),a=e.getFullYear(),n=e.getDay(),i=B(e);let o="-1";var c=!ct(e,b,p),l=O(e,d),e=(I(e,v)&&t.push(J),I(e,m)&&t.push(ee),I(e,g)&&t.push(te),l&&t.push(X),O(e,h)&&t.push(se),f&&(O(e,f)&&t.push(re),O(e,w)&&t.push(ae),O(e,A)&&t.push(ne),ct(e,E,x))&&t.push(ie),O(e,m)&&(o="0",t.push(Z)),Pe[s]),n=Fe[n],u=document.createElement("button");return u.setAttribute("type","button"),u.setAttribute("tabindex",o),u.setAttribute("class",t.join(" ")),u.setAttribute("data-day",r),u.setAttribute("data-month",s+1),u.setAttribute("data-year",a),u.setAttribute("data-value",i),u.setAttribute("aria-label",C.escapeHTML`${r} ${e} ${a} ${n}`),u.setAttribute("aria-selected",l?"true":"false"),!0==c&&(u.disabled=!0),u.textContent=r,u})(n)),n=q(n,1);var c=dt(j,7),L=s.cloneNode(),o=(L.dataset.value=o,L.style.top=r.offsetHeight+"px",L.hidden=!1,L.innerHTML=C.escapeHTML`
    <div tabindex="-1" class="${ye}">
      <div class="${Ee}">
        <div class="${$} ${k}">
          <button
            type="button"
            class="${oe}"
            aria-label="Navigate back one year"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ce}"
            aria-label="Navigate back one month"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${xe}">
          <button
            type="button"
            class="${de}" aria-label="${y}. Click to select month"
          >${y}</button>
          <button
            type="button"
            class="${pe}" aria-label="${t}. Click to select year"
          >${t}</button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ue}"
            aria-label="Navigate forward one month"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${le}"
            aria-label="Navigate forward one year"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
      </div>
    </div>
    `,document.createElement("table")),l=(o.setAttribute("class",T),o.setAttribute("role","presentation"),document.createElement("thead"));o.insertAdjacentElement("beforeend",l);const _=document.createElement("tr"),S=(l.insertAdjacentElement("beforeend",_),{Sunday:"S",Monday:"M",Tuesday:"T",Wednesday:"W",Thursday:"Th",Friday:"Fr",Saturday:"S"});Object.keys(S).forEach(e=>{var t=document.createElement("th");t.setAttribute("class",je),t.setAttribute("scope","presentation"),t.setAttribute("aria-label",e),t.textContent=S[e],_.insertAdjacentElement("beforeend",t)});u=pt(c);o.insertAdjacentElement("beforeend",u);L.querySelector(M).insertAdjacentElement("beforeend",o),s.parentNode.replaceChild(L,s),r.classList.add(K);l=[];return O(d,m)&&l.push("Selected date"),e?(l.push("You can navigate by day using left and right arrows","Weeks by using up and down arrows","Months by using page up and page down keys","Years by using shift plus page up and shift plus page down","Home and end keys navigate to the beginning and end of a week"),a.textContent=""):l.push(y+" "+t),a.textContent=l.join(". "),L},yt=e=>{var{datePickerEl:e,calendarEl:t,statusEl:r}=H(e);e.classList.remove(K),t.hidden=!0,r.textContent=""},wt=e=>{var{calendarEl:e,inputDate:t,minDate:r,maxDate:s}=H(e);!e.hidden&&t&&(t=u(t,r,s),d(e,t))},At=(e,t)=>{const{calendarEl:r,statusEl:s,calendarDate:o,minDate:c,maxDate:l}=H(e),u=o.getMonth(),d=null==t?u:t;var e=Pe.map((e,t)=>{var r=b(o,t),r=lt(r,c,l);let s="-1";var a=[p],n=t===u,i=(t===d&&(s="0",a.push(be)),n&&a.push(fe),document.createElement("button"));return i.setAttribute("type","button"),i.setAttribute("tabindex",s),i.setAttribute("class",a.join(" ")),i.setAttribute("data-value",t),i.setAttribute("data-label",e),i.setAttribute("aria-selected",n?"true":"false"),!0===r&&(i.disabled=!0),i.textContent=e,i}),t=document.createElement("div"),a=(t.setAttribute("tabindex","-1"),t.setAttribute("class",we),document.createElement("table")),e=(a.setAttribute("class",T),a.setAttribute("role","presentation"),dt(e,3)),e=pt(e),e=(a.insertAdjacentElement("beforeend",e),t.insertAdjacentElement("beforeend",a),r.cloneNode());return e.insertAdjacentElement("beforeend",t),r.parentNode.replaceChild(e,r),s.textContent="Select a month.",e},y=(e,t)=>{var{calendarEl:e,statusEl:r,calendarDate:s,minDate:a,maxDate:n}=H(e),i=s.getFullYear(),o=null==t?i:t,t=o,c=(t-=t%j,t=Math.max(0,t),ut(L(s,t-1),a,n)),l=ut(L(s,t+j),a,n),u=[];let d=t;for(;u.length<j;){var p=ut(L(s,d),a,n);let e="-1";var b=[x],f=d===i,h=(d===o&&(e="0",b.push(he)),f&&b.push(me),document.createElement("button"));h.setAttribute("type","button"),h.setAttribute("tabindex",e),h.setAttribute("class",b.join(" ")),h.setAttribute("data-value",d),h.setAttribute("aria-selected",f?"true":"false"),!0===p&&(h.disabled=!0),h.textContent=d,u.push(h),d+=1}var m=e.cloneNode(),v=document.createElement("div"),g=(v.setAttribute("tabindex","-1"),v.setAttribute("class",Ae),document.createElement("table")),y=(g.setAttribute("role","presentation"),g.setAttribute("class",T),document.createElement("tbody")),w=document.createElement("tr"),A=document.createElement("button"),c=(A.setAttribute("type","button"),A.setAttribute("class",ve),A.setAttribute("aria-label",`Navigate back ${j} years`),!0===c&&(A.disabled=!0),A.innerHTML=C.escapeHTML`&nbsp`,document.createElement("button")),l=(c.setAttribute("type","button"),c.setAttribute("class",ge),c.setAttribute("aria-label",`Navigate forward ${j} years`),!0===l&&(c.disabled=!0),c.innerHTML=C.escapeHTML`&nbsp`,document.createElement("table")),E=(l.setAttribute("class",T),l.setAttribute("role","presentation"),dt(u,3)),E=pt(E),E=(l.insertAdjacentElement("beforeend",E),document.createElement("td")),A=(E.insertAdjacentElement("beforeend",A),document.createElement("td")),l=(A.setAttribute("colspan","3"),A.insertAdjacentElement("beforeend",l),document.createElement("td"));return l.insertAdjacentElement("beforeend",c),w.insertAdjacentElement("beforeend",E),w.insertAdjacentElement("beforeend",A),w.insertAdjacentElement("beforeend",l),y.insertAdjacentElement("beforeend",w),g.insertAdjacentElement("beforeend",y),v.insertAdjacentElement("beforeend",g),m.insertAdjacentElement("beforeend",v),e.parentNode.replaceChild(m,e),r.textContent=C.escapeHTML`Showing years ${t} to ${t+j-1}. Select a year.`,m},Et=e=>{var{datePickerEl:t,externalInputEl:r}=H(e.target);yt(t),r.focus(),e.preventDefault()};var s=i=>e=>{var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(e.target),n=i(r),n=u(n,s,a);O(r,n)||d(t,n).querySelector(o).focus(),e.preventDefault()},xt=s(e=>{return e=e,t=1,et(e,-t);var t}),jt=s(e=>et(e,1)),Lt=s(e=>Je(e,1)),_t=s(e=>q(e,1)),St=s(e=>tt(e)),Ct=s(e=>{return t=(e=e).getDay(),q(e,6-t);var t}),Dt=s(e=>N(e,1)),Tt=s(e=>rt(e,1)),$t=s(e=>st(e,1)),s=s(e=>at(e,1));var a=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=b(s,r),r=o(r),r=Math.max(0,Math.min(11,r)),s=b(s,r),r=u(s,a,n);I(i,r)||At(t,r.getMonth()).querySelector(c).focus(),e.preventDefault()},kt=a(e=>e-3),Mt=a(e=>e+3),qt=a(e=>e-1),Nt=a(e=>e+1),It=a(e=>e-e%3),Ot=a(e=>e+2-e%3),Bt=a(()=>11),a=a(()=>0);var i=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=L(s,r),r=o(r),r=Math.max(0,r),s=L(s,r),r=u(s,a,n);ot(i,r)||y(t,r.getFullYear()).querySelector(l).focus(),e.preventDefault()},Ht=i(e=>e-3),Pt=i(e=>e+3),Ft=i(e=>e-1),Rt=i(e=>e+1),Yt=i(e=>e-e%3),Ut=i(e=>e+2-e%3),Vt=i(e=>e-j),i=i(e=>e+j);var w=n=>{const a=e=>{var e=H(e)["calendarEl"],e=S(n,e),t=e.length-1,r=e[0],s=e[t],a=e.indexOf(R());return{focusableElements:e,isNotFound:-1===a,firstTabStop:r,isFirstTab:0===a,lastTabStop:s,isLastTab:a===t}};return{tabAhead(e){var{firstTabStop:t,isLastTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())},tabBack(e){var{lastTabStop:t,isFirstTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())}}},Ve=w(Ve),Ke=w(Ke),w=w(We),We={[F]:{[Le](){var e,t,r,s,a,n;(e=this).disabled||({calendarEl:t,inputDate:n,minDate:r,maxDate:s,defaultDate:a}=H(e),t.hidden?(n=u(n||a||Ge(),r,s),d(t,n).querySelector(o).focus()):yt(e))},[r](){var e,t,r;(e=this).disabled||({datePickerEl:t,externalInputEl:r}=H(e),gt(e,e.dataset.value),yt(t),r.focus())},[qe](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.dataset.value,10),a=b(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[v](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.innerHTML,10),a=L(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[De](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=rt(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(De);(e=e.disabled?s.querySelector(M):e).focus()}},[$e](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=N(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector($e);(e=e.disabled?s.querySelector(M):e).focus()}},[Ce](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=at(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Ce);(e=e.disabled?s.querySelector(M):e).focus()}},[Te](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=st(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Te);(e=e.disabled?s.querySelector(M):e).focus()}},[Ne](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)-j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ne);(e=e.disabled?r.querySelector(Be):e).focus()}},[Ie](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)+j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ie);(e=e.disabled?r.querySelector(Be):e).focus()}},[Me](){At(this).querySelector(c).focus()},[ke](){y(this).querySelector(l).focus()}},keyup:{[m](e){var t=this.dataset.keydownKeyCode;""+e.keyCode!==t&&e.preventDefault()}},keydown:{[h](e){13===e.keyCode&&vt(this)},[r]:t({Up:xt,ArrowUp:xt,Down:jt,ArrowDown:jt,Left:Lt,ArrowLeft:Lt,Right:_t,ArrowRight:_t,Home:St,End:Ct,PageDown:Dt,PageUp:Tt,"Shift+PageDown":$t,"Shift+PageUp":s,Tab:Ve.tabAhead}),[M]:t({Tab:Ve.tabAhead,"Shift+Tab":Ve.tabBack}),[qe]:t({Up:kt,ArrowUp:kt,Down:Mt,ArrowDown:Mt,Left:qt,ArrowLeft:qt,Right:Nt,ArrowRight:Nt,Home:It,End:Ot,PageDown:Bt,PageUp:a}),[Oe]:t({Tab:Ke.tabAhead,"Shift+Tab":Ke.tabBack}),[v]:t({Up:Ht,ArrowUp:Ht,Down:Pt,ArrowDown:Pt,Left:Ft,ArrowLeft:Ft,Right:Rt,ArrowRight:Rt,Home:Yt,End:Ut,PageDown:i,PageUp:Vt}),[Be]:t({Tab:w.tabAhead,"Shift+Tab":w.tabBack}),[m](e){this.dataset.keydownKeyCode=e.keyCode},[f](e){t({Escape:Et})(e)}},focusout:{[h](){vt(this)},[f](e){this.contains(e.relatedTarget)||yt(this)}},input:{[h](){{var t=this,{internalInputEl:r,inputDate:s}=H(t);let e="";s&&!mt(t)&&(e=B(s)),r.value!==e&&bt(r,e)}wt(this)}}},F=(Y()||(We.mouseover={[e](){var e,t,r;(e=this).disabled||(r=(t=e.closest(m)).dataset.value,(e=e.dataset.value)!==r&&(r=g(e),d(t,r).querySelector(o).focus()))},[qe](){var e,t;(e=this).disabled||e.classList.contains(be)||(t=parseInt(e.dataset.value,10),At(e,t).querySelector(c).focus())},[v](){var e,t;(e=this).disabled||e.classList.contains(he)||(t=parseInt(e.dataset.value,10),y(e,t).querySelector(l).focus())}}),_(We,{init(e){P(f,e).forEach(e=>{var t=(e=e.closest(f)).dataset.defaultValue,r=e.querySelector("input");if(!r)throw new Error(f+" is missing inner input");r.value&&(r.value="");var s=g(e.dataset.minDate||r.getAttribute("min"));e.dataset.minDate=s?B(s):"0000-01-01",(s=g(e.dataset.maxDate||r.getAttribute("max")))&&(e.dataset.maxDate=B(s));(s=document.createElement("div")).classList.add(U);var a=r.cloneNode();a.classList.add(z),a.type="text",s.appendChild(a),s.insertAdjacentHTML("beforeend",C.escapeHTML`
    <button type="button" class="${Q}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${n}" role="dialog" aria-modal="true" hidden></div>
    <div class="usa-sr-only ${G}" role="status" aria-live="polite"></div>`),r.setAttribute("aria-hidden","true"),r.setAttribute("tabindex","-1"),r.style.display="none",r.classList.add(W),r.removeAttribute("id"),r.removeAttribute("name"),r.required=!1,e.appendChild(s),e.classList.add(V),t&&gt(e,t),r.disabled&&(ft(e),r.disabled=!1),r.hasAttribute("aria-disabled")&&(ht(e),r.removeAttribute("aria-disabled"))})},getDatePickerContext:H,disable:ft,ariaDisable:ht,enable:e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!1,e.disabled=!1},isDateInputInvalid:mt,setCalendarValue:gt,validateDateInput:vt,renderCalendar:d,updateCalendarIfVisible:wt}));A.exports=F},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/active-element":44,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-ios-device":49,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],21:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/config")["prefix"];const{getDatePickerContext:o,isDateInputInvalid:c,updateCalendarIfVisible:l}=e("../../usa-date-picker/src/index");e=i+"-date-range-picker";const u=e+"__range-start",d=e+"__range-end",p="."+(i+"-date-picker"),b="."+e,f="."+u,h="."+d,m=e=>{var t,r,e=e.closest(b);if(e)return t=e.querySelector(f),r=e.querySelector(h),{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r};throw new Error("Element is missing outer "+b)},v=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),t=o(t)["internalInputEl"],s=t.value;s&&!c(t)?(r.dataset.minDate=s,r.dataset.rangeDate=s,r.dataset.defaultDate=s):(r.dataset.minDate=e.dataset.minDate||"",r.dataset.rangeDate="",r.dataset.defaultDate=""),l(r)},g=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),r=o(r)["internalInputEl"],s=r.value;s&&!c(r)?(t.dataset.maxDate=s,t.dataset.rangeDate=s,t.dataset.defaultDate=s):(t.dataset.maxDate=e.dataset.maxDate||"",t.dataset.rangeDate="",t.dataset.defaultDate=""),l(t)};i=s({"input change":{[f](){v(this)},[h](){g(this)}}},{init(e){n(b,e).forEach(e=>{var e=(e=e).closest(b),[t,r]=a(p,e);if(!t)throw new Error(`${b} is missing inner two '${p}' elements`);if(!r)throw new Error(`${b} is missing second '${p}' element`);t.classList.add(u),r.classList.add(d),e.dataset.minDate||(e.dataset.minDate="0000-01-01");var s=e.dataset["minDate"];(s=(t.dataset.minDate=s,r.dataset.minDate=s,e.dataset)["maxDate"])&&(t.dataset.maxDate=s,r.dataset.maxDate=s),v(e),g(e)})}});t.exports=i},{"../../usa-date-picker/src/index":20,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52}],22:[function(e,t,I){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var s=e("../../uswds-core/src/js/utils/behavior");const g=e("../../uswds-core/src/js/utils/sanitizer");e=e("../../uswds-core/src/js/config").prefix;const y=e+"-file-input",c="."+y,l=e+"-file-input__input",u=e+"-file-input__target",a="."+l,d=e+"-file-input__box",p=e+"-file-input__instructions",w=e+"-file-input__preview",o=e+"-file-input__preview-heading",b=e+"-file-input--disabled",f=e+"-file-input__choose",A=e+"-file-input__accepted-files-message",h=e+"-file-input__drag-text",n=e+"-file-input--drag",E="is-loading",x="has-invalid-file",j=e+"-file-input__preview-image",L=j+"--generic",_=j+"--pdf",S=j+"--word",C=j+"--video",D=j+"--excel",T=e+"-sr-only",$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";let k=Boolean(!0),M="",m="";const v=e=>{var t,e=e.closest(c);if(e)return t=e.querySelector(a),{dropZoneEl:e,inputEl:t};throw new Error("Element is missing outer "+c)};const i=e=>{var t=e.charCodeAt(0);return 32===t?"-":65<=t&&t<=90?"img_"+e.toLowerCase():"__"+t.toString(16).slice(-4)},O=e=>e.replace(/[^a-z0-9]/g,i),B=e=>e+"-"+Math.floor(Date.now().toString()/1e3),q=e=>{return e.hasAttribute("multiple")?"files":"file"},H=e=>{var t,r,s,a=e.hasAttribute("aria-disabled")||e.hasAttribute("disabled"),n=(t=e,r=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),t.classList.remove(y),t.classList.add(l),r.classList.add(y),n.classList.add(d),i.classList.add(u),i.prepend(n),t.parentNode.insertBefore(i,t),t.parentNode.insertBefore(r,i),i.appendChild(t),r.appendChild(i),i),i=(r=(t=e).closest(c),i=q(t),s=document.createElement("div"),i=`Drag ${i} here or`,o="choose from folder",M=i+" "+o,s.classList.add(p),s.setAttribute("aria-hidden","true"),t.setAttribute("aria-label",M),s.innerHTML=g.escapeHTML`<span class="${h}">${i}</span> <span class="${f}">${o}</span>`,t.parentNode.insertBefore(s,t),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(r.querySelector("."+h).outerHTML=""),s),o=v(e)["dropZoneEl"];return a?o.classList.add(b):(t=e,r=document.createElement("div"),s=q(t),a=t.closest(c),t=t.closest("."+u),m=`No ${s} selected.`,r.classList.add(T),r.setAttribute("aria-live","polite"),r.textContent=m,a.insertBefore(r,t)),{instructions:i,dropTarget:n}},N=(e,t)=>{var r=e.querySelectorAll("."+w),s=e.querySelector("."+o),a=e.querySelector("."+A);s&&(s.outerHTML=""),a&&(a.outerHTML="",e.classList.remove(x)),null!==r&&(t&&t.removeAttribute("hidden"),Array.prototype.forEach.call(r,e=>{e.parentNode.removeChild(e)}))},P=(e,t,r)=>{const s=e;let a=m;1===t.length?a="You have selected the file: "+r:1<t.length&&(a=`You have selected ${t.length} files: `+r.join(", ")),setTimeout(()=>{s.textContent=a},1e3)},F=(e,t)=>{var r=document.createElement("div"),s=e.closest("."+u),a=s.querySelector("."+p);let n="Change file",i="";1===t.length?i=g.escapeHTML`Selected file <span class="usa-file-input__choose">${n}</span>`:1<t.length&&(n="Change files",i=g.escapeHTML`${t.length} files selected <span class="usa-file-input__choose">${n}</span>`),a.setAttribute("hidden","true"),r.classList.add(o),r.innerHTML=i,s.insertBefore(r,a),e.setAttribute("aria-label",n)},R=(e,t,r,s)=>{var a=e,n=t,i=r,o=s,c=n.getAttribute("accept");if(o.classList.remove(x),c){var l=c.split(","),c=document.createElement("div");let t=!0;var u=a.target.files||a.dataTransfer.files;for(let e=0;e<u.length;e+=1){var d=u[e];if(!t)break;for(let e=0;e<l.length;e+=1){var p=l[e];if(t=0<d.name.indexOf(p)||((e,t)=>{let r=!1;e=e.indexOf(t);return r=0<=e?!0:r})(d.type,p.replace(/\*/g,""))){k=!0;break}}}t||(N(o,i),n.value="",o.insertBefore(c,n),c.textContent=n.dataset.errormessage||"This is not a valid file type.",c.classList.add(A),o.classList.add(x),k=!1,a.preventDefault(),a.stopPropagation())}if(!0===k){var i=t,b=r,n=s,f=(c=e).target.files,c=n.closest("."+y).querySelector("."+T),h=[];N(n,b);for(let e=0;e<f.length;e+=1){const m=new FileReader,v=f[e].name;let t;h.push(v),m.onloadstart=function(){t=B(O(v)),b.insertAdjacentHTML("afterend",g.escapeHTML`<div class="${w}" aria-hidden="true">
          <img id="${t}" src="${$}" alt="" class="${j} ${E}"/>${v}
        <div>`)},m.onloadend=function(){var e=document.getElementById(t);0<v.indexOf(".pdf")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${_}")`):0<v.indexOf(".doc")||0<v.indexOf(".pages")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${S}")`):0<v.indexOf(".xls")||0<v.indexOf(".numbers")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${D}")`):0<v.indexOf(".mov")||0<v.indexOf(".mp4")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${C}")`):e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${L}")`),e.classList.remove(E),e.src=m.result},f[e]&&m.readAsDataURL(f[e])}0===f.length?i.setAttribute("aria-label",M):F(i,f),P(c,f,h)}};e=s({},{init(e){r(c,e).forEach(t=>{const{instructions:r,dropTarget:s}=H(t);s.addEventListener("dragover",function(){this.classList.add(n)},!1),s.addEventListener("dragleave",function(){this.classList.remove(n)},!1),s.addEventListener("drop",function(){this.classList.remove(n)},!1),t.addEventListener("change",e=>R(e,t,r,s),!1)})},teardown(e){r(a,e).forEach(e=>{var t=e.parentElement.parentElement;t.parentElement.replaceChild(e,t),e.className=y})},getFileInputContext:v,disable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!0,e.classList.add(b)},ariaDisable:e=>{e=v(e).dropZoneEl;e.classList.add(b)},enable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!1,e.classList.remove(b),e.removeAttribute("aria-disabled")}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52}],23:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=`.${n}-footer--big`,o=i+" nav"+` .${n}-footer__primary-link`;function c(s){var e=document.querySelector(i);e&&e.querySelectorAll(o).forEach(e=>{var t=e.getAttribute("class"),r=e.getAttribute("data-tag")||e.tagName,r=document.createElement(s?"button":r);r.setAttribute("class",t),r.classList.toggle(n+"-footer__primary-link--button",s),r.textContent=e.textContent,s&&(r.setAttribute("data-tag",e.tagName),t=n+"-footer-menu-list-"+Math.floor(1e5*Math.random()),r.setAttribute("aria-controls",t),r.setAttribute("aria-expanded","false"),e.nextElementSibling.setAttribute("id",t),r.setAttribute("type","button")),e.after(r),e.remove()})}const l=e=>{c(e.matches)};t.exports=s({[a]:{[o]:function(){var e;window.innerWidth<480&&(e="true"===this.getAttribute("aria-expanded"),this.closest(i).querySelectorAll(o).forEach(e=>{e.setAttribute("aria-expanded",!1)}),this.setAttribute("aria-expanded",!e))}}},{HIDE_MAX_WIDTH:480,init(){c(window.innerWidth<480),this.mediaQueryList=window.matchMedia("(max-width: 479.9px)"),this.mediaQueryList.addListener(l)},teardown(){this.mediaQueryList.removeListener(l)}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],24:[function(e,t,N){"use strict";var r=e("receptor/keymap"),s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/utils/scrollbar-width"),l=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const u=`.${e}-header`,d=`.${e}-nav`;var p=`.${e}-nav-container`;const b=`.${e}-nav__primary`,f=`.${e}-nav__primary-item`,h=`button.${e}-nav__link`;var m=d+" a";const v="data-nav-hidden",g=`.${e}-menu-btn`,y=`.${e}-nav__close`;var w=y+`, .${e}-overlay`;const A=[d,`.${e}-overlay`].join(", "),E=`body *:not(${u}, ${p}, ${d}, ${d} *):not([aria-hidden])`,x=(v,"usa-js-mobile-nav--active");let j,L,_;const S=()=>document.body.classList.contains(x);e=c();const C=window.getComputedStyle(document.body).getPropertyValue("padding-right"),D=parseInt(C.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",T=()=>{const t=document.querySelector(u).parentNode;(_=document.querySelectorAll(E)).forEach(e=>{e!==t&&(e.setAttribute("aria-hidden",!0),e.setAttribute(v,""))})},$=()=>{(_=document.querySelectorAll("[data-nav-hidden]"))&&_.forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)})};p=e=>{var t=document["body"];const r="boolean"==typeof e?e:!S();t.classList.toggle(x,r),a(A).forEach(e=>e.classList.toggle("is-visible",r)),j.focusTrap.update(r);var e=t.querySelector(y),s=document.querySelector(g);return t.style.paddingRight=t.style.paddingRight===D?C:D,(r?T:$)(),r&&e?e.focus():!r&&s&&"none"!==getComputedStyle(s).display&&s.focus(),r};const k=()=>{var e=document.body.querySelector(y);S()&&e&&0===e.getBoundingClientRect().width&&j.toggleNav.call(e,!1)},M=()=>j.toggleNav.call(j,!1),q=()=>{L&&(n(L,!1),L=null)};j=s({[l]:{[h](){return L!==this&&q(),L||(L=this,n(L,!0)),!1},body:q,[g]:p,[w]:p,[m](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e)),S()&&j.toggleNav.call(j,!1)}},keydown:{[b]:r({Escape:e=>{var t;q(),t=(e=e).target.closest(f),e.target.matches(h)||(e=t.querySelector(h))&&e.focus()}})},focusout:{[b](e){e.target.closest(b).contains(e.relatedTarget)||q()}}},{init(e){e=e.matches(d)?e:e.querySelector(d);e&&(j.focusTrap=i(e,{Escape:M})),k(),window.addEventListener("resize",k,!1)},teardown(){window.removeEventListener("resize",k,!1),L=!1},focusTrap:null,toggleNav:p}),t.exports=j},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],25:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("receptor/keymap");const n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/utils/behavior"),o=e("../../uswds-core/src/js/config")["prefix"],c=e("../../uswds-core/src/js/events")["CLICK"];const l=e("../../uswds-core/src/js/utils/sanitizer"),u=o+"-current",d=0,p=o+"-in-page-nav",b=o+"-anchor",f=p+"__nav",h=p+"__list",m=p+"__item",v=p+"__link",g=p+"__heading",y=m+"--sub-item",w=e=>{const t=document.querySelectorAll("."+v);e.map(e=>!0===e.isIntersecting&&1<=e.intersectionRatio&&(t.forEach(e=>e.classList.remove(u)),document.querySelector(`a[href="#${e.target.id}"]`).classList.add(u),!0))},A=e=>{var t=document.querySelector("."+p).dataset.scrollOffset||d;window.scroll({behavior:"smooth",top:e.offsetTop-t,block:"start"}),window.location.hash.slice(1)!==e.id&&window.history.pushState(null,"","#"+e.id)},E=e=>{var t=l.escapeHTML`${e.dataset.titleText||"On this page"}`,r=l.escapeHTML`${e.dataset.titleHeadingLevel||"h4"}`,s={root:null,rootMargin:l.escapeHTML`${e.dataset.rootMargin||"0px 0px 0px 0px"}`,threshold:[l.escapeHTML`${e.dataset.threshold||"1"}`]},a=(e=>{e=document.querySelectorAll(e+` h2, ${e} h3`);return Array.from(e).filter(e=>{e=window.getComputedStyle(e);return"none"!==e.getPropertyValue("display")&&"hidden"!==e.getPropertyValue("visibility")})})(l.escapeHTML`${e.dataset.mainContentSelector||"main"}`),n=document.createElement("nav"),r=(n.setAttribute("aria-label",t),n.classList.add(f),document.createElement(r));r.classList.add(g),r.setAttribute("tabindex","0"),r.textContent=t,n.appendChild(r);const i=document.createElement("ul");i.classList.add(h),n.appendChild(i),a.forEach(e=>{var t=document.createElement("li"),r=document.createElement("a"),s=document.createElement("a"),a=e.textContent,n=e.tagName.toLowerCase(),n=(t.classList.add(m),"h3"===n&&t.classList.add(y),(e=>{var t=e.textContent.toLowerCase().replace(/[^a-z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,"");let r,s=0;for(;r=t,1<(s+=1)&&(r+="-"+s),document.getElementById(r););return r})(e));r.setAttribute("href","#"+n),r.setAttribute("class",v),r.textContent=a,s.setAttribute("id",n),s.setAttribute("class",b),e.insertAdjacentElement("afterbegin",s),i.appendChild(t),t.appendChild(r)}),e.appendChild(n);t=document.querySelectorAll("."+b);const o=new window.IntersectionObserver(w,s);t.forEach(e=>{o.observe(e)})};e=i({[c]:{["."+v](e){e.preventDefault(),this.disabled||(e=this,e=document.getElementById(e.hash.slice(1)),A(e))}},keydown:{["."+v]:a({Enter:e=>{e=(e=>{let t;return t=(e&&1===e.nodeType?e.getAttribute("href"):e.target.hash).replace("#","")})(e),e=document.getElementById(e);const t=e.parentElement;t&&(t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)}))),A(e)}})}},{init(e){n("."+p,e).forEach(e=>{E(e),(e=window.location.hash.slice(1))&&(e=document.getElementById(e))&&A(e)})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11,"receptor/once":12}],26:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const n="."+(e+"-masked"),i=e+"-input-mask",o=i+"--content",c="placeholder",p="_#dDmMyY9",b="A",f=(e,t)=>e?t.replace(/\W/g,""):t.replace(/\D/g,""),h=e=>!Number.isNaN(parseInt(e,10)),m=e=>!!e&&e.match(/[A-Z]/i),l=e=>{var t=e,r=t.getAttribute("id"),s=(t.value=(e=>{var t=e.dataset.charset,r=t||e.dataset.placeholder,e=e["value"],s=r.length;let a="",n,i;var o=f(t,e);for(n=0,i=0;n<s;n+=1){var c=h(o[i]),l=m(o[i]),u=0<=p.indexOf(r[n]),d=0<=b.indexOf(r[n]);if(u&&c||t&&d&&l)a+=o[i],i+=1;else{if(!t&&!c&&u||t&&(d&&!l||u&&!c))return a;a+=r[n]}if(void 0===o[i])break}return a})(t),s=(t=e).value,t=""+e.dataset.placeholder.substr(s.length),(e=document.createElement("i")).textContent=s,[e,t]),e=document.getElementById(r+"Mask");e.textContent="",e.replaceChildren(s[0],s[1])};e=a({keyup:{[n](){l(this)}}},{init(e){s(n,e).forEach(e=>{var t,r,s;(s=(e=e).getAttribute(c))&&(e.setAttribute("maxlength",s.length),e.setAttribute("data-placeholder",s),e.removeAttribute(c),(t=document.createElement("span")).classList.add(i),t.setAttribute("data-mask",s),(r=document.createElement("span")).classList.add(o),r.setAttribute("aria-hidden","true"),r.id=e.id+"Mask",r.textContent=s,t.appendChild(r),e.closest("form").insertBefore(t,e),t.appendChild(e))})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],27:[function(e,t,r){"use strict";var s=e("receptor/keymap"),a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const l=`.${e}-language__submenu`,u=`.${e}-language__primary`,d=`.${e}-language__primary-item`,p=`button.${e}-language__link`;let b,f;const h=()=>b.toggleLanguage.call(b,!1),m=()=>{f&&(n(f,!1),f=null)};b=a({[c]:{[p](){return f!==this&&m(),f===this?m():f||(f=this,n(f,!0)),!1},body:m,[`.${e}-language`+" a"](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e))}},keydown:{[u]:s({Escape:e=>{var t;m(),t=(e=e).target.closest(d),e.target.matches(p)||t.querySelector(p).focus()}})},focusout:{[u](e){e.target.closest(u).contains(e.relatedTarget)||m()}}},{init(e){e=e.matches(l)?e:e.querySelector(l);e&&(b.focusTrap=i(e,{Escape:h}))},teardown(){f=!1},focusTrap:null}),t.exports=b},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],28:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches"),u=e("../../uswds-core/src/js/utils/focus-trap");var a=e("../../uswds-core/src/js/utils/scrollbar-width"),e=e("../../uswds-core/src/js/config")["prefix"];const d=e+"-modal",p=d+"-overlay",b=d+"-wrapper",f="data-open-modal",h="data-close-modal",m="data-force-action",v="data-modal-hidden",n="."+d,g=`.${b} *[data-focus]`,y=b+` *[${h}]`,w=(f,y+`, .${p}:not([${m}])`),A=`body > *:not(.${b}):not([aria-hidden])`,E=(v,"usa-js-modal--active"),x="is-hidden";let j;e=a();const L=window.getComputedStyle(document.body).getPropertyValue("padding-right"),_=parseInt(L.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",S=()=>{j.toggleModal.call(j,!1)};function C(e){let t,r=e.target;var s,a,n,i,o=document["body"],c=!document.body.classList.contains(E),l=r?r.getAttribute("aria-controls"):document.querySelector(".usa-modal-wrapper.is-visible"),l=c?document.getElementById(l):document.querySelector(".usa-modal-wrapper.is-visible");return!(!l||(s=l.querySelector(g)?l.querySelector(g):l.querySelector(".usa-modal"),a=document.getElementById(l.getAttribute("data-opener")),n=o.querySelector("*[data-open-modal][aria-controls]"),i=l.getAttribute(m),(r="keydown"===e.type&&null!==l?l.querySelector(y):r)&&(r.hasAttribute(f)&&(null===this.getAttribute("id")?(t="modal-"+(Math.floor(9e5*Math.random())+1e5),this.setAttribute("id",t)):t=this.getAttribute("id"),l.setAttribute("data-opener",t)),r.closest("."+d))&&!r.hasAttribute(h)&&!r.closest(`[${h}]`)))&&(o.classList.toggle(E,c),l.classList.toggle("is-visible",c),l.classList.toggle(x,!c),i&&o.classList.toggle("usa-js-no-click",c),o.style.paddingRight=o.style.paddingRight===_?L:_,c&&s?(j.focusTrap=i?u(l):u(l,{Escape:S}),j.focusTrap.update(c),s.focus(),document.querySelectorAll(A).forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute(v,"")})):!c&&n&&a&&(document.querySelectorAll("[data-modal-hidden]").forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)}),a.focus(),j.focusTrap.update(c)),c)}j={init(e){s(n,e).forEach(e=>{var t=e.id;{var r=e,s=document.createElement("div"),a=document.createElement("div");const u=e.getAttribute("id");var n=e.getAttribute("aria-labelledby"),i=e.getAttribute("aria-describedby"),o=!!e.hasAttribute(m)&&e.hasAttribute(m),c=document.createElement("div");c.setAttribute("data-placeholder-for",u),c.style.display="none",c.setAttribute("aria-hidden","true");for(let e=0;e<r.attributes.length;e+=1){var l=r.attributes[e];c.setAttribute("data-original-"+l.name,l.value)}r.after(c),r.parentNode.insertBefore(s,r),s.appendChild(r),r.parentNode.insertBefore(a,r),a.appendChild(r),s.classList.add(x),s.classList.add(b),a.classList.add(p),s.setAttribute("role","dialog"),s.setAttribute("id",u),n&&s.setAttribute("aria-labelledby",n),i&&s.setAttribute("aria-describedby",i),o&&s.setAttribute(m,"true"),e.removeAttribute("id"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-describedby"),e.setAttribute("tabindex","-1"),s.querySelectorAll(w).forEach(e=>{e.setAttribute("aria-controls",u)}),document.body.appendChild(s)}document.querySelectorAll(`[aria-controls="${t}"]`).forEach(e=>{"A"===e.nodeName&&(e.setAttribute("role","button"),e.addEventListener("click",e=>e.preventDefault())),e.addEventListener("click",C)})})},teardown(e){s(n,e).forEach(e=>{var t=e,r=t,s=(t=r.parentElement.parentElement).getAttribute("id"),a=document.querySelector(`[data-placeholder-for="${s}"]`);if(a){for(let e=0;e<a.attributes.length;e+=1){var n=a.attributes[e];n.name.startsWith("data-original-")&&r.setAttribute(n.name.substr(14),n.value)}a.after(r),a.parentElement.removeChild(a)}t.parentElement.removeChild(t);s=e.id;document.querySelectorAll(`[aria-controls="${s}"]`).forEach(e=>e.removeEventListener("click",C))})},focusTrap:null,toggleModal:C,on(e){this.init(e)},off(e){this.teardown(e)}},t.exports=j},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select-or-matches":52}],29:[function(e,t,r){"use strict";const a=e("receptor/ignore");var s=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/select"),i=e("../../uswds-core/src/js/events")["CLICK"],o=".js-search-button",c=".js-search-form",l="[type=search]",u="header";let d;const p=e=>{e=e.closest(u);return(e||document).querySelector(c)},b=(e,t)=>{var r=p(e);if(!r)throw new Error(`No ${c} found for search toggle in ${u}!`);if(e.hidden=t,r.hidden=!t,t){e=r.querySelector(l);e&&e.focus();const s=a(r,()=>{d&&!function(){b(this,!1),d=void 0}.call(d),document.body.removeEventListener(i,s)});setTimeout(()=>{document.body.addEventListener(i,s)},0)}};e=s({[i]:{".js-search-button":function(){b(this,!0),d=this}}},{init(e){n(o,e).forEach(e=>{b(e,!1)})},teardown(){d=void 0}});t.exports=e},{"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"receptor/ignore":9}],30:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=a({[n]:{[`.${e}-skipnav[href^="#"], .${e}-footer__return-to-top [href^="#"]`]:function(){var e=encodeURI(this.getAttribute("href"));const t=document.getElementById("#"===e?"main-content":e.slice(1));t&&(t.style.outline="0",t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)})))}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"receptor/once":12}],31:[function(e,t,r){"use strict";const o=e("../../uswds-core/src/js/utils/select");var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=e("../../uswds-core/src/js/utils/sanitizer"),c=`.${n}-table`,l="aria-sort",u="ascending",d="descending",p=n+"-table__header__button",b="."+p,f="th[data-sortable]",h=`.${n}-table__announcement-region[aria-live="polite"]`,m=(e,t)=>e.children[t].getAttribute("data-sort-value")||e.children[t].innerText||e.children[t].textContent,v=(s,a)=>(e,t)=>{var r=m(a?e:t,s),t=m(a?t:e,s);return r&&t&&!Number.isNaN(Number(r))&&!Number.isNaN(Number(t))?r-t:r.toString().localeCompare(t,navigator.language,{numeric:!0,ignorePunctuation:!0})},g=e=>{var t=e.innerText,r=e.getAttribute(l)===u,s=t+", sortable column, currently "+(e.getAttribute(l)===u||e.getAttribute(l)===d||!1?r?"sorted "+u:"sorted "+d:"unsorted"),t=`Click to sort by ${t} in ${r?d:u} order.`;e.setAttribute("aria-label",s),e.querySelector(b).setAttribute("title",t)},y=(t,e)=>{var r,s=t.closest(c);let a=e;if("boolean"!=typeof a&&(a=t.getAttribute(l)===u),!s)throw new Error(f+" is missing outer "+c);if(a=((e,t)=>{e.setAttribute(l,!0===t?d:u),g(e);const r=e.closest(c).querySelector("tbody");var s=[].slice.call(r.querySelectorAll("tr"));const a=[].slice.call(e.parentNode.children).indexOf(e);return s.sort(v(a,!t)).forEach(e=>{[].slice.call(e.children).forEach(e=>e.removeAttribute("data-sort-active")),e.children[a].setAttribute("data-sort-active",!0),r.appendChild(e)}),!0})(t,e)){r=s,o(f,r).filter(e=>e.closest(c)===r).forEach(e=>{e!==t&&((e=e).removeAttribute(l),g(e))});var e=s,s=t,n=e.querySelector("caption").innerText,i=s.getAttribute(l)===u,s=s.innerText;if(!(e=e.nextElementSibling)||!e.matches(h))throw new Error("Table containing a sortable column header is not followed by an aria-live region.");n=`The table named "${n}" is now sorted by ${s} in ${i?u:d} order.`,e.innerText=n}};e=s({[a]:{[b](e){e.preventDefault(),y(e.target.closest(f),e.target.closest(f).getAttribute(l)===u)}}},{init(e){var t,e=o(f,e),e=(e.forEach(e=>{return e=e,(t=document.createElement("button")).setAttribute("tabindex","0"),t.classList.add(p),t.innerHTML=i.escapeHTML`
  <svg class="${n}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `,e.appendChild(t),void g(e);var t}),e.filter(e=>e.getAttribute(l)===u||e.getAttribute(l)===d)[0]);void 0!==e&&((t=e.getAttribute(l))===u?y(e,!0):t===d&&y(e,!1))},TABLE:c,SORTABLE_HEADER:f,SORT_BUTTON:b});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53}],32:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select-or-matches");var n=e("../../uswds-core/src/js/config")["prefix"];const{COMBO_BOX_CLASS:f,enhanceComboBox:i}=e("../../usa-combo-box/src/index"),h="."+(n+"-time-picker"),m={filter:"0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",apQueryFilter:"([ap])",hourQueryFilter:"([1-9][0-2]?)",minuteQueryFilter:"[\\d]+:([0-9]{0,2})"},v=e=>{let t;var r;return t=e&&([e,r]=e.split(":").map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),null!=e)&&null!=r?60*e+r:t},o=t=>{const r=t.closest(h),s=r.querySelector("input");if(!s)throw new Error(h+" is missing inner input");const a=document.createElement("select");["id","name","required","aria-label","aria-labelledby","disabled","aria-disabled"].forEach(e=>{var t;s.hasAttribute(e)&&(t=s.getAttribute(e),a.setAttribute(e,t),s.removeAttribute(e))});var n=(e,t)=>("0000"+e).slice(-t),t=Math.max(0,v(r.dataset.minTime)||0),i=Math.min(1439,v(r.dataset.maxTime)||1439),o=Math.floor(Math.max(1,r.dataset.step||30));let c;for(let e=t;e<=i;e+=o){u=e,l=void 0,l=u%60,u=Math.floor(u/60);var{minute:l,hour24:u,hour12:d,ampm:p}={minute:l,hour24:u,hour12:u%12||12,ampm:u<12?"am":"pm"},b=document.createElement("option");b.value=n(u,2)+":"+n(l,2),b.text=d+":"+n(l,2)+p,b.text===s.value&&(c=b.value),a.appendChild(b)}r.classList.add(f),Object.keys(m).forEach(e=>{r.dataset[e]=m[e]}),r.dataset.disableFiltering="true",r.dataset.defaultValue=c,r.appendChild(a),s.remove()};e=s({},{init(e){a(h,e).forEach(e=>{o(e),i(e)})},FILTER_DATASET:m});t.exports=e},{"../../usa-combo-box/src/index":19,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],33:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/config")["prefix"];const b=e("../../uswds-core/src/js/utils/is-in-viewport"),i=`.${n}-tooltip`;e=`.${n}-tooltip__trigger`;const o=n+"-tooltip__trigger",c=n+"-tooltip",f=n+"-tooltip__body",h="is-visible",m=n+"-tooltip__body--wrap",l=e=>{var t=e.parentNode,r=t.querySelector("."+f);return{trigger:e,wrapper:t,body:r}},u=(t,s,e)=>{t.setAttribute("aria-hidden","false"),t.classList.add("is-set");const a=e=>{t.classList.remove(f+"--top"),t.classList.remove(f+"--bottom"),t.classList.remove(f+"--right"),t.classList.remove(f+"--left"),t.classList.add(f+"--"+e)},n=e=>{e.style.top=null,e.style.bottom=null,e.style.right=null,e.style.left=null,e.style.margin=null},i=(e,t)=>parseInt(window.getComputedStyle(e).getPropertyValue(t),10),o=(e,t,r)=>{return 0<i(r,"margin-"+e)?t-i(r,"margin-"+e):t},c=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",e.offsetWidth,s);a("top"),e.style.left="50%",e.style.top="-5px",e.style.margin=`-${t}px 0 0 -${r/2}px`},l=e=>{n(e);var t=o("left",e.offsetWidth,s);a("bottom"),e.style.left="50%",e.style.margin=`5px 0 0 -${t/2}px`},u=e=>{n(e);var t=o("top",e.offsetHeight,s);a("right"),e.style.top="50%",e.style.left=s.offsetLeft+s.offsetWidth+5+"px",e.style.margin=`-${t/2}px 0 0 0`},d=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",s.offsetLeft>e.offsetWidth?s.offsetLeft-e.offsetWidth:e.offsetWidth,s);a("left"),e.style.top="50%",e.style.left="-5px",e.style.margin=`-${t/2}px 0 0 ${s.offsetLeft>e.offsetWidth?r:-r}px`};function p(r,e){e=1<arguments.length&&void 0!==e?e:1;const s=[c,l,u,d];let a=!1;!function e(t){t<s.length&&((0,s[t])(r),b(r)?a=!0:e(t+=1))}(0),a||(r.classList.add(m),e<=2&&p(r,e+=1))}switch(e){case"top":c(t),b(t)||p(t);break;case"bottom":l(t),b(t)||p(t);break;case"right":u(t),b(t)||p(t);break;case"left":d(t),b(t)||p(t)}setTimeout(()=>{t.classList.add(h)},20)},d=e=>{e.classList.remove(h),e.classList.remove("is-set"),e.classList.remove(m),e.setAttribute("aria-hidden","true")},p=e=>{var t="tooltip-"+(Math.floor(9e5*Math.random())+1e5),r=e.getAttribute("title");const s=document.createElement("span");var a=document.createElement("span"),n=e.getAttribute("data-classes");let i=e.getAttribute("data-position");return i||(i="top",e.setAttribute("data-position",i)),e.setAttribute("aria-describedby",t),e.setAttribute("tabindex","0"),e.removeAttribute("title"),e.classList.remove(c),e.classList.add(o),e.parentNode.insertBefore(s,e),s.appendChild(e),s.classList.add(c),s.appendChild(a),n&&n.split(" ").forEach(e=>s.classList.add(e)),a.classList.add(f),a.setAttribute("id",t),a.setAttribute("role","tooltip"),a.setAttribute("aria-hidden","true"),a.textContent=r,{tooltipBody:a,position:i,tooltipContent:r,wrapper:s}};n=a({"mouseover focusin":{[i](e){e=e.target;"BUTTON"===e.nodeName&&e.hasAttribute("title")&&p(e)},[e](e){var{trigger:e,body:t}=l(e.target);u(t,e,e.dataset.position)}},"mouseout focusout":{[e](e){e=l(e.target).body;d(e)}}},{init(e){s(i,e).forEach(e=>{p(e)})},setup:p,getTooltipElements:l,show:u,hide:d});t.exports=n},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select-or-matches":52}],34:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/validate-input");var n=e("../../uswds-core/src/js/config")["prefix"];const i=e("../../uswds-core/src/js/utils/select-or-matches"),o="input[data-validation-element]",c=`.${n}-checklist__item`,l=e=>{var t,s,r,a;a=(t=e).parentNode,r=t.getAttribute("id")+"-sr-summary",t.setAttribute("aria-describedby",r),(t=document.createElement("span")).setAttribute("data-validation-status",""),t.classList.add("usa-sr-only"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic",!0),t.setAttribute("id",r),a.append(t),r=(s=e).parentNode.querySelectorAll(c),a=s.getAttribute("data-validation-element"),s.setAttribute("aria-controls",a),r.forEach(e=>{let t="status incomplete";s.hasAttribute("data-validation-incomplete")&&(t=s.getAttribute("data-validation-incomplete"));var r=`${e.textContent} ${t} `;e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r)})};e=s({"input change":{"input[data-validation-element]"(e){e=e.target,a(e)}}},{init(e){i(o,e).forEach(e=>l(e))}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52,"../../uswds-core/src/js/utils/validate-input":57}],35:[function(e,t,r){"use strict";t.exports={prefix:"usa"}},{}],36:[function(e,t,r){"use strict";t.exports={CLICK:"click"}},{}],37:[function(e,t,r){"use strict";var s=e("../../../usa-accordion/src/index"),a=e("../../../usa-banner/src/index"),n=e("../../../usa-button/src/index"),i=e("../../../usa-character-count/src/index"),o=e("../../../usa-combo-box/src/index"),c=e("../../../usa-date-picker/src/index"),l=e("../../../usa-date-range-picker/src/index"),u=e("../../../usa-file-input/src/index"),d=e("../../../usa-footer/src/index"),p=e("../../../usa-in-page-navigation/src/index"),b=e("../../../usa-input-mask/src/index"),f=e("../../../usa-language-selector/src/index"),h=e("../../../usa-modal/src/index"),m=e("../../../usa-header/src/index"),v=e("../../../_usa-password/src/index"),g=e("../../../usa-search/src/index"),y=e("../../../usa-skipnav/src/index"),w=e("../../../usa-table/src/index"),A=e("../../../usa-time-picker/src/index"),E=e("../../../usa-tooltip/src/index"),e=e("../../../usa-validation/src/index");t.exports={accordion:s,banner:a,button:n,characterCount:i,comboBox:o,datePicker:c,dateRangePicker:l,fileInput:u,footer:d,inPageNavigation:p,inputMask:b,languageSelector:f,modal:h,navigation:m,password:v,search:g,skipnav:y,table:w,timePicker:A,tooltip:E,validator:e}},{"../../../_usa-password/src/index":14,"../../../usa-accordion/src/index":15,"../../../usa-banner/src/index":16,"../../../usa-button/src/index":17,"../../../usa-character-count/src/index":18,"../../../usa-combo-box/src/index":19,"../../../usa-date-picker/src/index":20,"../../../usa-date-range-picker/src/index":21,"../../../usa-file-input/src/index":22,"../../../usa-footer/src/index":23,"../../../usa-header/src/index":24,"../../../usa-in-page-navigation/src/index":25,"../../../usa-input-mask/src/index":26,"../../../usa-language-selector/src/index":27,"../../../usa-modal/src/index":28,"../../../usa-search/src/index":29,"../../../usa-skipnav/src/index":30,"../../../usa-table/src/index":31,"../../../usa-time-picker/src/index":32,"../../../usa-tooltip/src/index":33,"../../../usa-validation/src/index":34}],38:[function(e,t,r){"use strict";"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var t=t||{bubbles:!1,cancelable:!1,detail:null},r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r})},{}],39:[function(e,t,r){"use strict";var s=window.HTMLElement.prototype;const a="hidden";a in s||Object.defineProperty(s,a,{get(){return this.hasAttribute(a)},set(e){e?this.setAttribute(a,""):this.removeAttribute(a)}})},{}],40:[function(e,t,r){"use strict";e("classlist-polyfill"),e("./element-hidden"),e("./number-is-nan"),e("./custom-event"),e("./svg4everybody")},{"./custom-event":38,"./element-hidden":39,"./number-is-nan":41,"./svg4everybody":42,"classlist-polyfill":1}],41:[function(e,t,r){"use strict";Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&e!=e}},{}],42:[function(e,t,r){"use strict";function f(e,t,r,s){if(r){var a=document.createDocumentFragment(),n=!t.hasAttribute("viewBox")&&r.getAttribute("viewBox");n&&t.setAttribute("viewBox",n);for(var i=document.importNode?document.importNode(r,!0):r.cloneNode(!0),o=document.createElementNS(t.namespaceURI||"http://www.w3.org/2000/svg","g");i.childNodes.length;)o.appendChild(i.firstChild);if(s)for(var c=0;s.attributes.length>c;c++){var l=s.attributes[c];"xlink:href"!==l.name&&"href"!==l.name&&o.setAttribute(l.name,l.value)}a.appendChild(o),e.appendChild(a)}}t.exports=function(e){var c,l=Object(e),e=window.top!==window.self,u=(c="polyfill"in l?l.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e,{}),d=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),b=0;c&&function e(){if(!(b&&p.length-b<=0))for(var t=b=0;t<p.length;){var r,s,a=p[t],n=a.parentNode,i=function(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}(n),o=a.getAttribute("xlink:href")||a.getAttribute("href");!o&&l.attributeName&&(o=a.getAttribute(l.attributeName)),i&&o?c&&(!l.validate||l.validate(o,i,a)?(n.removeChild(a),r=(o=o.split("#")).shift(),o=o.join("#"),r.length?((s=u[r])||((s=u[r]=new XMLHttpRequest).open("GET",r),s.send(),s._embeds=[]),s._embeds.push({parent:n,svg:i,id:o}),function(s,a){s.onreadystatechange=function(){var r;4===s.readyState&&((r=s._cachedDocument)||((r=s._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=s.responseText,r.domain!==document.domain&&(r.domain=document.domain),s._cachedTarget={}),s._embeds.splice(0).map(function(e){var t=(t=s._cachedTarget[e.id])||(s._cachedTarget[e.id]=r.getElementById(e.id));f(e.parent,e.svg,t,a)}))},s.onreadystatechange()}(s,a)):f(n,i,document.getElementById(o),a)):(++t,++b)):++t}d(e,67)}()}},{}],43:[function(e,t,r){"use strict";window.uswdsPresent=!0,e("./polyfills");var s=e("./config");const a=e("./index"),n=e("./polyfills/svg4everybody");s.components=a;e=()=>{const t=document.body;Object.keys(a).forEach(e=>{a[e].on(t)}),n()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),r.default=s,r.initComponents=e},{"./config":35,"./index":37,"./polyfills":40,"./polyfills/svg4everybody":42}],44:[function(e,t,r){"use strict";t.exports=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document).activeElement}},{}],45:[function(e,t,r){"use strict";function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){let t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.body;r.forEach(e=>{"function"==typeof this[e]&&this[e].call(this,t)})}}const a=e("object-assign"),n=e("receptor/behavior");t.exports=(e,t)=>n(e,a({on:s("init","add"),off:s("teardown","remove")},t))},{"object-assign":4,"receptor/behavior":5}],46:[function(e,t,r){"use strict";t.exports=function(s){var a=this;let n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500,i=null;return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window.clearTimeout(i),i=window.setTimeout(()=>{s.apply(a,t)},n)}}},{}],47:[function(e,t,r){"use strict";const a=e("object-assign"),n=e("receptor")["keymap"],i=e("./behavior"),o=e("./select"),c=e("./active-element"),l=e=>{const t=o('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e),r=t[0],s=t[t.length-1];return{firstTabStop:r,lastTabStop:s,tabAhead:function(e){c()===s&&(e.preventDefault(),r.focus())},tabBack:function(e){c()===r?(e.preventDefault(),s.focus()):t.includes(c())||(e.preventDefault(),r.focus())}}};t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};const r=l(e);var{Esc:e,Escape:s}=t,e=(s&&!e&&(t.Esc=s),n(a({Tab:r.tabAhead,"Shift+Tab":r.tabBack},t)));return i({keydown:e},{init(){r.firstTabStop&&r.firstTabStop.focus()},update(e){e?this.on():this.off()}})}},{"./active-element":44,"./behavior":45,"./select":53,"object-assign":4,receptor:10}],48:[function(e,t,r){"use strict";t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.documentElement,e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(t.innerHeight||r.clientHeight)&&e.right<=(t.innerWidth||r.clientWidth)}},{}],49:[function(e,t,r){"use strict";t.exports=function(){return"undefined"!=typeof navigator&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!window.MSStream}},{}],50:[function(e,t,r){"use strict";t.exports=function(){"use strict";var n={_entity:/[&<>"'/]/g,_entities:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#x2F;"},getEntity:function(e){return n._entities[e]},escapeHTML:function(e){var t="";for(var r=0;r<e.length;r++){t+=e[r];if(r+1<arguments.length){var s=arguments[r+1]||"";t+=String(s).replace(n._entity,n.getEntity)}}return t},createSafeHTML:function(e){var t=arguments.length;var r=new Array(t>1?t-1:0);for(var s=1;s<t;s++)r[s-1]=arguments[s];var a=n.escapeHTML.apply(n,[e].concat(r));return{__html:a,toString:function(){return"[object WrappedHTMLObject]"},info:"This is a wrapped HTML object. See https://developer.mozilla.or"+"g/en-US/Firefox_OS/Security/Security_Automation for more."}},unwrapSafeHTML:function(){var e=arguments.length;var t=new Array(e);for(var r=0;r<e;r++)t[r]=arguments[r];var s=t.map(function(e){return e.__html});return s.join("")}};return n}()},{}],51:[function(e,t,r){"use strict";t.exports=function(){var e=document.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),document.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth+"px");return e.parentNode.removeChild(e),t}},{}],52:[function(e,t,r){"use strict";const a=e("./select");t.exports=(e,t)=>{var r,s=a(e,t);return"string"==typeof e&&(r=t)&&"object"==typeof r&&1===r.nodeType&&t.matches(e)&&s.push(t),s}},{"./select":53}],53:[function(e,t,r){"use strict";t.exports=(e,t)=>{var r;return"string"!=typeof e?[]:(r=(t=t&&(r=t)&&"object"==typeof r&&1===r.nodeType?t:window.document).querySelectorAll(e),Array.prototype.slice.call(r))}},{}],54:[function(e,t,r){"use strict";t.exports=(e,t)=>{e.setAttribute("autocapitalize","off"),e.setAttribute("autocorrect","off"),e.setAttribute("type",t?"password":"text")}},{}],55:[function(e,t,r){"use strict";const a=e("resolve-id-refs"),n=e("./toggle-field-mask"),i="aria-pressed",o="data-show-text";t.exports=e=>{const t=e.hasAttribute(i)&&"true"!==e.getAttribute(i);a(e.getAttribute("aria-controls")).forEach(e=>n(e,t)),e.hasAttribute(o)||e.setAttribute(o,e.textContent);var r=e.getAttribute(o),s=e.getAttribute("data-hide-text")||r.replace(/\bShow\b/i,e=>`${"S"===e[0]?"H":"h"}ide`);return e.textContent=t?r:s,e.setAttribute(i,t),t}},{"./toggle-field-mask":54,"resolve-id-refs":13}],56:[function(e,t,r){"use strict";const s="aria-expanded";t.exports=(e,t)=>{let r=t;"boolean"!=typeof r&&(r="false"===e.getAttribute(s)),e.setAttribute(s,r);t=e.getAttribute("aria-controls"),e=document.getElementById(t);if(e)return r?e.removeAttribute("hidden"):e.setAttribute("hidden",""),r;throw new Error(`No toggle target found with id: "${t}"`)}},{}],57:[function(e,t,r){"use strict";const c=e("./debounce");e=e("../config").prefix;const l=e+"-checklist__item--checked";t.exports=function(n){var e=n.dataset.validationElement;const i="#"===e.charAt(0)?document.querySelector(e):document.getElementById(e);if(!i)throw new Error(`No validation element found with id: "${e}"`);let o="";Object.entries(n.dataset).forEach(t=>{var[t,r]=t;if(t.startsWith("validate")){var t=t.substr("validate".length).toLowerCase(),r=new RegExp(r),s=`[data-validator="${t}"]`,s=i.querySelector(s);const a=n.parentNode.querySelector("[data-validation-status]");r=r.test(n.value);if(s.classList.toggle(l,r),!s)throw new Error(`No validator checkbox found for: "${t}"`);r=n.dataset.validationComplete||"status complete",t=n.dataset.validationIncomplete||"status incomplete";let e=s.textContent+" ";s.classList.contains(l)?e+=r:e+=t,s.setAttribute("aria-label",e),o+=e+". ",c(()=>{a.textContent=o},1e3)()}})}},{"../config":35,"./debounce":46}]},{},[43]);

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
/**
 * @file
 * JavaScript behaviors for details element.
 */

(function ($, Drupal) {

  'use strict';

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem('webform', 'webform');
      localStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  /**
   * Attach handler to save details open/close state.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDetailsSave = {
    attach: function (context) {
      if (!hasLocalStorage) {
        return;
      }

      // Summary click event handler.
      $('details > summary', context).once('webform-details-summary-save').on('click', function () {
        var $details = $(this).parent();

        // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
        if ($details[0].hasAttribute('data-webform-details-nosave')) {
          return;
        }

        var name = Drupal.webformDetailsSaveGetName($details);
        if (!name) {
          return;
        }

        var open = ($details.attr('open') !== 'open') ? '1' : '0';
        localStorage.setItem(name, open);
      });

      // Initialize details open state via local storage.
      $('details', context).once('webform-details-save').each(function () {
        var $details = $(this);

        var name = Drupal.webformDetailsSaveGetName($details);
        if (!name) {
          return;
        }

        var open = localStorage.getItem(name);
        if (open === null) {
          return;
        }

        if (open === '1') {
          $details.attr('open', 'open');
        }
        else {
          $details.removeAttr('open');
        }
      });
    }

  };

  /**
   * Get the name used to store the state of details element.
   *
   * @param {jQuery} $details
   *   A details element.
   *
   * @return {string}
   *   The name used to store the state of details element.
   */
  Drupal.webformDetailsSaveGetName = function ($details) {
    if (!hasLocalStorage) {
      return '';
    }

    // Ignore details that are vertical tabs pane.
    if ($details.hasClass('vertical-tabs__pane')) {
      return '';
    }

    // Any details element not included a webform must have define its own id.
    var webformId = $details.attr('data-webform-element-id');
    if (webformId) {
      return 'Drupal.webform.' + webformId.replace('--', '.');
    }

    var detailsId = $details.attr('id');
    if (!detailsId) {
      return '';
    }

    var $form = $details.parents('form');
    if (!$form.length || !$form.attr('id')) {
      return '';
    }

    var formId = $form.attr('id');
    if (!formId) {
      return '';
    }

    // ISSUE: When Drupal renders a webform in a modal dialog it appends a unique
    // identifier to webform ids and details ids. (i.e. my-form--FeSFISegTUI)
    // WORKAROUND: Remove the unique id that delimited using double dashes.
    formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
    detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
    return 'Drupal.webform.' + formId + '.' + detailsId;
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for message element integration.
 */

(function ($, Drupal) {

  'use strict';

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem('webform', 'webform');
      localStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  // Determine if session storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasSessionStorage = (function () {
    try {
      sessionStorage.setItem('webform', 'webform');
      sessionStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  /**
   * Behavior for handler message close.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformMessageClose = {
    attach: function (context) {
      $(context).find('.js-webform-message--close').once('webform-message--close').each(function () {
        var $element = $(this);

        var id = $element.attr('data-message-id');
        var storage = $element.attr('data-message-storage');
        var effect = $element.attr('data-message-close-effect') || 'hide';
        switch (effect) {
          case 'slide': effect = 'slideUp'; break;

          case 'fade': effect = 'fadeOut'; break;
        }

        // Check storage status.
        if (isClosed($element, storage, id)) {
          return;
        }

        // Only show element if it's style is not set to 'display: none'
        // and it is not hidden via .js-webform-states-hidden.
        if ($element.attr('style') !== 'display: none;' && !$element.hasClass('js-webform-states-hidden')) {
          $element.show();
        }

        $element.find('.js-webform-message__link').on('click', function (event) {
          $element[effect]();
          setClosed($element, storage, id);
          $element.trigger('close');
          event.preventDefault();
        });
      });
    }
  };

  function isClosed($element, storage, id) {
    if (!id || !storage) {
      return false;
    }

    switch (storage) {
      case 'local':
        if (hasLocalStorage) {
          return localStorage.getItem('Drupal.webform.message.' + id) || false;
        }
        return false;

      case 'session':
        if (hasSessionStorage) {
          return sessionStorage.getItem('Drupal.webform.message.' + id) || false;
        }
        return false;

      default:
        return false;
    }
  }

  function setClosed($element, storage, id) {
    if (!id || !storage) {
      return;
    }

    switch (storage) {
      case 'local':
        if (hasLocalStorage) {
          localStorage.setItem('Drupal.webform.message.' + id, true);
        }
        break;

      case 'session':
        if (hasSessionStorage) {
          sessionStorage.setItem('Drupal.webform.message.' + id, true);
        }
        break;

      case 'user':
      case 'state':
      case 'custom':
        $.get($element.find('.js-webform-message__link').attr('href'));
        return true;
    }
  }

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };
  $.fn.drupalSetSummary = function (callback) {
    var self = this;
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }
    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };
  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }
      $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }
  function fieldsList(form) {
    return [].map.call(form.querySelectorAll('[name][id]'), function (el) {
      return el.id;
    });
  }
  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
      var formFields;
      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
          form.removeAttribute('data-drupal-form-fields');
          $(form).off('.formUpdated');
        });
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          if (!$element.length) {
            return;
          }
          var emptyValue = $element[0].value === '';
          var defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element[0].value);
          }
        });
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };
  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
 * @file
 * Webform behaviors.
 */

(function ($, Drupal) {

  'use strict';

  // Trigger Drupal's attaching of behaviors after the page is
  // completely loaded.
  // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
  // @see https://stackoverflow.com/questions/20899274/how-to-refresh-page-on-back-button-click/20899422#20899422
  var isChrome = (/chrom(e|ium)/.test(window.navigator.userAgent.toLowerCase()));
  if (isChrome) {
    // Track back button in navigation.
    // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
    var backButton = false;
    if (window.performance) {
      var navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
        backButton = true;
      }
      else if (window.performance.navigation
        && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        backButton = true;
      }
    }

    // If the back button is pressed, delay Drupal's attaching of behaviors.
    if (backButton) {
      var attachBehaviors = Drupal.attachBehaviors;
      Drupal.attachBehaviors = function (context, settings) {
        setTimeout(function (context, settings) {
          attachBehaviors(context, settings);
        }, 300);
      };
    }
  }

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }
    return typeof a === 'undefined' || typeof b === 'undefined';
  }
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }
    return a && b;
  }
  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;
      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };
      for (var i = 0; i < il; i++) {
        _loop(i);
      }
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };
  states.Dependent = function (args) {
    var _this = this;
    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };
  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;
      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }
        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }
      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);
      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;
      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;
        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }
      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }
      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };
      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };
  states.Trigger = function (args) {
    $.extend(this, args);
    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);
      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };
  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;
      var trigger = states.Trigger.states[this.state];
      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }
      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);
        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      },
      change: function change() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };
  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;
    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }
    return new states.State(state);
  };
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked', e.value).trigger('change');
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
/**
 * @file
 * JavaScript behaviors for custom webform #states.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.webform = Drupal.webform || {};
  Drupal.webform.states = Drupal.webform.states || {};
  Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
  Drupal.webform.states.slideDown.duration = 'slow';
  Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
  Drupal.webform.states.slideUp.duration = 'fast';

  /* ************************************************************************ */
  // jQuery functions.
  /* ************************************************************************ */

  /**
   * Check if an element has a specified data attribute.
   *
   * @param {string} data
   *   The data attribute name.
   *
   * @return {boolean}
   *   TRUE if an element has a specified data attribute.
   */
  $.fn.hasData = function (data) {
    return (typeof this.data(data) !== 'undefined');
  };

  /**
   * Check if element is within the webform or not.
   *
   * @return {boolean}
   *   TRUE if element is within the webform.
   */
  $.fn.isWebform = function () {
    return $(this).closest('form.webform-submission-form, form[id^="webform"], form[data-is-webform]').length ? true : false;
  };

  /**
   * Check if element is to be treated as a webform element.
   *
   * @return {boolean}
   *   TRUE if element is to be treated as a webform element.
   */
  $.fn.isWebformElement = function () {
    return ($(this).isWebform() || $(this).closest('[data-is-webform-element]').length) ? true : false;
  };

  /* ************************************************************************ */
  // Trigger.
  /* ************************************************************************ */

  // The change event is triggered by cut-n-paste and select menus.
  // Issue #2445271: #states element empty check not triggered on mouse
  // based paste.
  // @see https://www.drupal.org/node/2445271
  Drupal.states.Trigger.states.empty.change = function change() {
    return this.val() === '';
  };

  /* ************************************************************************ */
  // Dependents.
  /* ************************************************************************ */

  // Apply solution included in #1962800 patch.
  // Issue #1962800: Form #states not working with literal integers as
  // values in IE11.
  // @see https://www.drupal.org/project/drupal/issues/1962800
  // @see https://www.drupal.org/files/issues/core-states-not-working-with-integers-ie11_1962800_46.patch
  //
  // This issue causes pattern, less than, and greater than support to break.
  // @see https://www.drupal.org/project/webform/issues/2981724
  var states = Drupal.states;
  Drupal.states.Dependent.prototype.compare = function compare(reference, selector, state) {
    var value = this.values[selector][state.name];

    var name = reference.constructor.name;
    if (!name) {
      name = $.type(reference);

      name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    if (name in states.Dependent.comparisons) {
      return states.Dependent.comparisons[name](reference, value);
    }

    if (reference.constructor.name in states.Dependent.comparisons) {
      return states.Dependent.comparisons[reference.constructor.name](reference, value);
    }

    return _compare2(reference, value);
  };
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }

  // Adds pattern, less than, and greater than support to #state API.
  // @see http://drupalsun.com/julia-evans/2012/03/09/extending-form-api-states-regular-expressions
  Drupal.states.Dependent.comparisons.Object = function (reference, value) {
    if ('pattern' in reference) {
      return (new RegExp(reference['pattern'])).test(value);
    }
    else if ('!pattern' in reference) {
      return !((new RegExp(reference['!pattern'])).test(value));
    }
    else if ('less' in reference) {
      return (value !== '' && parseFloat(reference['less']) > parseFloat(value));
    }
    else if ('less_equal' in reference) {
      return (value !== '' && parseFloat(reference['less_equal']) >= parseFloat(value));
    }
    else if ('greater' in reference) {
      return (value !== '' && parseFloat(reference['greater']) < parseFloat(value));
    }
    else if ('greater_equal' in reference) {
      return (value !== '' && parseFloat(reference['greater_equal']) <= parseFloat(value));
    }
    else if ('between' in reference || '!between' in reference) {
      if (value === '') {
        return false;
      }

      var between = reference['between'] || reference['!between'];
      var betweenParts = between.split(':');
      var greater = betweenParts[0];
      var less = (typeof betweenParts[1] !== 'undefined') ? betweenParts[1] : null;
      var isGreaterThan = (greater === null || greater === '' || parseFloat(value) >= parseFloat(greater));
      var isLessThan = (less === null || less === '' || parseFloat(value) <= parseFloat(less));
      var result = (isGreaterThan && isLessThan);
      return (reference['!between']) ? !result : result;
    }
    else {
      return reference.indexOf(value) !== false;
    }
  };

  /* ************************************************************************ */
  // States events.
  /* ************************************************************************ */

  var $document = $(document);

  $document.on('state:required', function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      var $target = $(e.target);
      // Fix #required file upload.
      // @see Issue #2860529: Conditional required File upload field don't work.
      toggleRequired($target.find('input[type="file"]'), e.value);

      // Fix #required for radios and likert.
      // @see Issue #2856795: If radio buttons are required but not filled form is nevertheless submitted.
      if ($target.is('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .webform-likert-table')) {
        $target.toggleClass('required', e.value);
        toggleRequired($target.find('input[type="radio"]'), e.value);
      }

      // Fix #required for checkboxes.
      // @see Issue #2938414: Checkboxes don't support #states required.
      // @see checkboxRequiredhandler
      if ($target.is('.js-form-type-checkboxes, .js-form-type-webform-checkboxes-other, .js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other')) {
        $target.toggleClass('required', e.value);
        var $checkboxes = $target.find('input[type="checkbox"]');
        if (e.value) {
          // Add event handler.
          $checkboxes.on('click', statesCheckboxesRequiredEventHandler);
          // Initialize and add required attribute.
          checkboxesRequired($target);
        }
        else {
          // Remove event handler.
          $checkboxes.off('click', statesCheckboxesRequiredEventHandler);
          // Remove required attribute.
          toggleRequired($checkboxes, false);
        }
      }

      // Fix #required for tableselect.
      // @see Issue #3212581: Table select does not trigger client side validation
      if ($target.is('.js-webform-tableselect')) {
        $target.toggleClass('required', e.value);
        var isMultiple = $target.is('[multiple]');
        if (isMultiple) {
          // Checkboxes.
          var $tbody = $target.find('tbody');
          var $checkboxes = $tbody.find('input[type="checkbox"]');
          copyRequireMessage($target, $checkboxes);
          if (e.value) {
            $checkboxes.on('click change', statesCheckboxesRequiredEventHandler);
            checkboxesRequired($tbody);
          }
          else {
            $checkboxes.off('click change ', statesCheckboxesRequiredEventHandler);
            toggleRequired($tbody, false);
          }
        }
        else {
          // Radios.
          var $radios = $target.find('input[type="radio"]');
          copyRequireMessage($target, $radios);
          toggleRequired($radios, e.value);
        }
      }

      // Fix required label for elements without the for attribute.
      // @see Issue #3145300: Conditional Visible Select Other not working.
      if ($target.is('.js-form-type-webform-select-other, .js-webform-type-webform-select-other')) {
        var $select = $target.find('select');
        toggleRequired($select, e.value);
        copyRequireMessage($target, $select);
      }
      if ($target.find('> label:not([for])').length) {
        $target.find('> label').toggleClass('js-form-required form-required', e.value);
      }

      // Fix required label for checkboxes and radios.
      // @see Issue #2938414: Checkboxes don't support #states required
      // @see Issue #2731991: Setting required on radios marks all options required.
      // @see Issue #2856315: Conditional Logic - Requiring Radios in a Fieldset.
      // Fix #required for fieldsets.
      // @see Issue #2977569: Hidden fieldsets that become visible with conditional logic cannot be made required.
      if ($target.is('.js-webform-type-radios, .js-webform-type-checkboxes, fieldset')) {
        $target.find('legend span.fieldset-legend:not(.visually-hidden)').toggleClass('js-form-required form-required', e.value);
      }

      // Issue #2986017: Fieldsets shouldn't have required attribute.
      if ($target.is('fieldset')) {
        $target.removeAttr('required aria-required');
      }
    }
  });

  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).trigger('change');
    }
  });

  $document.on('state:readonly', function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      $(e.target).prop('readonly', e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly', e.value).find('input, textarea').prop('readonly', e.value);

      // Trigger webform:readonly.
      $(e.target).trigger('webform:readonly')
        .find('select, input, textarea, button').trigger('webform:readonly');
    }
  });

  $document.on('state:visible state:visible-slide', function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      if (e.value) {
        $(':input', e.target).addBack().each(function () {
          restoreValueAndRequired(this);
          triggerEventHandlers(this);
        });
      }
      else {
        // @see https://www.sitepoint.com/jquery-function-clear-form-data/
        $(':input', e.target).addBack().each(function () {
          backupValueAndRequired(this);
          clearValueAndRequired(this);
          triggerEventHandlers(this);
        });
      }
    }
  });

  $document.on('state:visible-slide', function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      var effect = e.value ? 'slideDown' : 'slideUp';
      var duration = Drupal.webform.states[effect].duration;
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);
    }
  });
  Drupal.states.State.aliases['invisible-slide'] = '!visible-slide';

  $document.on('state:disabled', function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      // Make sure disabled property is set before triggering webform:disabled.
      // Copied from: core/misc/states.js
      $(e.target)
        .prop('disabled', e.value)
        .closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value)
        .find('select, input, textarea, button').prop('disabled', e.value);

      // Never disable hidden file[fids] because the existing values will
      // be completely lost when the webform is submitted.
      var fileElements = $(e.target)
        .find(':input[type="hidden"][name$="[fids]"]');
      if (fileElements.length) {
        // Remove 'disabled' attribute from fieldset which will block
        // all disabled elements from being submitted.
        if ($(e.target).is('fieldset')) {
          $(e.target).prop('disabled', false);
        }
        fileElements.removeAttr('disabled');
      }

      // Trigger webform:disabled.
      $(e.target).trigger('webform:disabled')
        .find('select, input, textarea, button').trigger('webform:disabled');
    }
  });

  /* ************************************************************************ */
  // Behaviors.
  /* ************************************************************************ */

  /**
   * Adds HTML5 validation to required checkboxes.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/3068998
   */
  Drupal.behaviors.webformCheckboxesRequired = {
    attach: function (context) {
      $('.js-form-type-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes', context)
        .once('webform-checkboxes-required')
        .each(function () {
          var $element = $(this);
          $element.find('input[type="checkbox"]').on('click', statesCheckboxesRequiredEventHandler);
          setTimeout(function () {checkboxesRequired($element);});
        });
    }
  };

  /**
   * Adds HTML5 validation to required radios.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  Drupal.behaviors.webformRadiosRequired = {
    attach: function (context) {
      $('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .js-webform-type-webform-scale', context)
        .once('webform-radios-required')
        .each(function () {
          var $element = $(this);
          setTimeout(function () {radiosRequired($element);});
        });
    }
  };

 /**
   * Adds HTML5 validation to required table select.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  Drupal.behaviors.webformTableSelectRequired = {
    attach: function (context) {
      $('.js-webform-tableselect.required', context)
        .once('webform-tableselect-required')
        .each(function () {
          var $element = $(this);
          var $tbody = $element.find('tbody');
          var isMultiple = $element.is('[multiple]');

          if (isMultiple) {
            // Check all checkbox triggers checkbox 'change' event on
            // select and deselect all.
            // @see Drupal.tableSelect
            $tbody.find('input[type="checkbox"]').on('click change', function () {
              checkboxesRequired($tbody);
            });
          }

          setTimeout(function () {
            isMultiple ? checkboxesRequired($tbody) : radiosRequired($element);
          });
        });
    }
  };

  /**
   * Add HTML5 multiple checkboxes required validation.
   *
   * @param {jQuery} $element
   *   An jQuery object containing HTML5 radios.
   *
   * @see https://stackoverflow.com/a/37825072/145846
   */
  function checkboxesRequired($element) {
    var $firstCheckbox = $element.find('input[type="checkbox"]').first();
    var isChecked = $element.find('input[type="checkbox"]').is(':checked');
    toggleRequired($firstCheckbox, !isChecked);
    copyRequireMessage($element, $firstCheckbox);
  }

  /**
   * Add HTML5 radios required validation.
   *
   * @param {jQuery} $element
   *   An jQuery object containing HTML5 radios.
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  function radiosRequired($element) {
    var $radios = $element.find('input[type="radio"]');
    var isRequired = $element.hasClass('required');
    toggleRequired($radios, isRequired);
    copyRequireMessage($element, $radios);
  }

  /* ************************************************************************ */
  // Event handlers.
  /* ************************************************************************ */

  /**
   * Trigger #states API HTML5 multiple checkboxes required validation.
   *
   * @see https://stackoverflow.com/a/37825072/145846
   */
  function statesCheckboxesRequiredEventHandler() {
    var $element = $(this).closest('.js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other');
    checkboxesRequired($element);
  }

  /**
   * Trigger an input's event handlers.
   *
   * @param {element} input
   *   An input.
   */
  function triggerEventHandlers(input) {
    var $input = $(input);
    var type = input.type;
    var tag = input.tagName.toLowerCase();
    // Add 'webform.states' as extra parameter to event handlers.
    // @see Drupal.behaviors.webformUnsaved
    var extraParameters = ['webform.states'];
    if (type === 'checkbox' || type === 'radio') {
      $input
        .trigger('change', extraParameters)
        .trigger('blur', extraParameters);
    }
    else if (tag === 'select') {
      // Do not trigger the onchange event for Address element's country code
      // when it is initialized.
      // @see \Drupal\address\Element\Country
      if ($input.closest('.webform-type-address').length) {
        if (!$input.data('webform-states-address-initialized')
          && $input.attr('autocomplete') === 'country'
          && $input.val() === $input.find("option[selected]").attr('value')) {
          return;
        }
        $input.data('webform-states-address-initialized', true);
      }

      $input
        .trigger('change', extraParameters)
        .trigger('blur', extraParameters);
    }
    else if (type !== 'submit' && type !== 'button' && type !== 'file') {
      // Make sure input mask is removed and then reset when value is restored.
      // @see https://www.drupal.org/project/webform/issues/3124155
      // @see https://www.drupal.org/project/webform/issues/3202795
      var hasInputMask = ($.fn.inputmask && $input.hasClass('js-webform-input-mask'));
      hasInputMask && $input.inputmask('remove');

      $input
        .trigger('input', extraParameters)
        .trigger('change', extraParameters)
        .trigger('keydown', extraParameters)
        .trigger('keyup', extraParameters)
        .trigger('blur', extraParameters);

      hasInputMask && $input.inputmask();
    }
  }

  /* ************************************************************************ */
  // Backup and restore value functions.
  /* ************************************************************************ */

  /**
   * Backup an input's current value and required attribute
   *
   * @param {element} input
   *   An input.
   */
  function backupValueAndRequired(input) {
    var $input = $(input);
    var type = input.type;
    var tag = input.tagName.toLowerCase(); // Normalize case.

    // Backup required.
    if ($input.prop('required') && !$input.hasData('webform-required')) {
      $input.data('webform-required', true);
    }

    // Backup value.
    if (!$input.hasData('webform-value')) {
      if (type === 'checkbox' || type === 'radio') {
        $input.data('webform-value', $input.prop('checked'));
      }
      else if (tag === 'select') {
        var values = [];
        $input.find('option:selected').each(function (i, option) {
          values[i] = option.value;
        });
        $input.data('webform-value', values);
      }
      else if (type !== 'submit' && type !== 'button') {
        $input.data('webform-value', input.value);
      }
    }
  }

  /**
   * Restore an input's value and required attribute.
   *
   * @param {element} input
   *   An input.
   */
  function restoreValueAndRequired(input) {
    var $input = $(input);

    // Restore value.
    var value = $input.data('webform-value');
    if (typeof value !== 'undefined') {
      var type = input.type;
      var tag = input.tagName.toLowerCase(); // Normalize case.

      if (type === 'checkbox' || type === 'radio') {
        $input.prop('checked', value);
      }
      else if (tag === 'select') {
        $.each(value, function (i, option_value) {
          // Prevent "Syntax error, unrecognized expression" error by
          // escaping single quotes.
          // @see https://forum.jquery.com/topic/escape-characters-prior-to-using-selector
          option_value = option_value.replace(/'/g, "\\\'");
          $input.find("option[value='" + option_value + "']").prop('selected', true);
        });
      }
      else if (type !== 'submit' && type !== 'button') {
        input.value = value;
      }
      $input.removeData('webform-value');
    }

    // Restore required.
    var required = $input.data('webform-required');
    if (typeof required !== 'undefined') {
      if (required) {
        $input.prop('required', true);
      }
      $input.removeData('webform-required');
    }
  }

  /**
   * Clear an input's value and required attributes.
   *
   * @param {element} input
   *   An input.
   */
  function clearValueAndRequired(input) {
    var $input = $(input);

    // Check for #states no clear attribute.
    // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
    if ($input.closest('[data-webform-states-no-clear]').length) {
      return;
    }

    // Clear value.
    var type = input.type;
    var tag = input.tagName.toLowerCase(); // Normalize case.
    if (type === 'checkbox' || type === 'radio') {
      $input.prop('checked', false);
    }
    else if (tag === 'select') {
      if ($input.find('option[value=""]').length) {
        $input.val('');
      }
      else {
        input.selectedIndex = -1;
      }
    }
    else if (type !== 'submit' && type !== 'button') {
      input.value = (type === 'color') ? '#000000' : '';
    }

    // Clear required.
    $input.prop('required', false);
  }

  /* ************************************************************************ */
  // Helper functions.
  /* ************************************************************************ */

  /**
   * Toggle an input's required attributes.
   *
   * @param {element} $input
   *   An input.
   * @param {boolean} required
   *   Is input required.
   */
  function toggleRequired($input, required) {
    var isCheckboxOrRadio = ($input.attr('type') === 'radio' || $input.attr('type') === 'checkbox');
    if (required) {
      if (isCheckboxOrRadio) {
        $input.attr({'required': 'required'});
      }
      else {
        $input.attr({'required': 'required', 'aria-required': 'true'});
      }
    }
    else {
      if (isCheckboxOrRadio) {
        $input.removeAttr('required');
      }
      else {
        $input.removeAttr('required aria-required');
      }
    }
  }

  /**
   * Copy the clientside_validation.module's message.
   *
   * @param {jQuery} $source
   *   The source element.
   * @param {jQuery} $destination
   *   The destination element.
   */
  function copyRequireMessage($source, $destination) {
    if ($source.attr('data-msg-required')) {
      $destination.attr('data-msg-required', $source.attr('data-msg-required'));
    }
  }

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for webforms.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Remove single submit event listener.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for removing single submit event listener.
   *
   * @see Drupal.behaviors.formSingleSubmit
   */
  Drupal.behaviors.webformRemoveFormSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        $form.removeAttr('data-drupal-form-submit-last');
      }
      $('body')
        .once('webform-single-submit')
        .on('submit.singleSubmit', 'form.webform-remove-single-submit', onFormSubmit);
    }
  };

  /**
   * Prevent webform autosubmit on wizard pages.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for disabling webform autosubmit.
   *   Wizard pages need to be progressed with the Previous or Next buttons,
   *   not by pressing Enter.
   */
  Drupal.behaviors.webformDisableAutoSubmit = {
    attach: function (context) {
      // Not using context so that inputs loaded via Ajax will have autosubmit
      // disabled.
      // @see http://stackoverflow.com/questions/11235622/jquery-disable-form-submit-on-enter
      $('.js-webform-disable-autosubmit input')
        .not(':button, :submit, :reset, :image, :file')
        .once('webform-disable-autosubmit')
        .on('keyup keypress', function (e) {
          if (e.which === 13) {
            e.preventDefault();
            return false;
          }
        });
    }
  };

  /**
   * Custom required and pattern validation error messages.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the webform custom required and pattern
   *   validation error messages.
   *
   * @see http://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
   **/
  Drupal.behaviors.webformRequiredError = {
    attach: function (context) {
      $(context).find(':input[data-webform-required-error], :input[data-webform-pattern-error]').once('webform-required-error')
        .on('invalid', function () {
          this.setCustomValidity('');
          if (this.valid) {
            return;
          }

          if (this.validity.patternMismatch && $(this).attr('data-webform-pattern-error')) {
            this.setCustomValidity($(this).attr('data-webform-pattern-error'));
          }
          else if (this.validity.valueMissing && $(this).attr('data-webform-required-error')) {
            this.setCustomValidity($(this).attr('data-webform-required-error'));
          }
        })
        .on('input change', function () {
          // Find all related elements by name and reset custom validity.
          // This specifically applies to required radios and checkboxes.
          var name = $(this).attr('name');
          $(this.form).find(':input[name="' + name + '"]').each(function () {
            this.setCustomValidity('');
          });
        });
    }
  };

  // When #state:required is triggered we need to reset the target elements
  // custom validity.
  $(document).on('state:required', function (e) {
    $(e.target).filter('[data-webform-required-error]')
      .each(function () {this.setCustomValidity('');});
  });

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
 * @file
 * JavaScript behaviors for details element.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.webform = Drupal.webform || {};
  Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
  Drupal.webform.detailsToggle.options = Drupal.webform.detailsToggle.options || {};

  /**
   * Attach handler to toggle details open/close state.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDetailsToggle = {
    attach: function (context) {
      $('.js-webform-details-toggle', context).once('webform-details-toggle').each(function () {
        var $form = $(this);
        var $tabs = $form.find('.webform-tabs');

        // Get only the main details elements and ignore all nested details.
        var selector = ($tabs.length) ? '.webform-tab' : '.js-webform-details-toggle, .webform-elements';
        var $details = $form.find('details').filter(function () {
          var $parents = $(this).parentsUntil(selector);
          return ($parents.find('details').length === 0);
        });

        // Toggle is only useful when there are two or more details elements.
        if ($details.length < 2) {
          return;
        }

        var options = $.extend({
          button: '<button type="button" class="webform-details-toggle-state"></button>'
        }, Drupal.webform.detailsToggle.options);

        // Create toggle buttons.
        var $toggle = $(options.button)
          .attr('title', Drupal.t('Toggle details widget state.'))
          .on('click', function (e) {
            // Get details that are not vertical tabs pane.
            var $details = $form.find('details:not(.vertical-tabs__pane)');
            var open;
            if (Drupal.webform.detailsToggle.isFormDetailsOpen($form)) {
              $details.removeAttr('open');
              open = 0;
            }
            else {
              $details.attr('open', 'open');
              open = 1;
            }
            Drupal.webform.detailsToggle.setDetailsToggleLabel($form);

            // Set the saved states for all the details elements.
            // @see webform.element.details.save.js
            if (Drupal.webformDetailsSaveGetName) {
              $details.each(function () {
                // Note: Drupal.webformDetailsSaveGetName checks if localStorage
                // exists and is enabled.
                // @see webform.element.details.save.js
                var name = Drupal.webformDetailsSaveGetName($(this));
                if (name) {
                  localStorage.setItem(name, open);
                }
              });
            }
          })
          .wrap('<div class="webform-details-toggle-state-wrapper"></div>')
          .parent();

        if ($tabs.length) {
          // Add toggle state before the tabs.
          $tabs.find('.item-list:first-child').eq(0).before($toggle);
        }
        else {
          // Add toggle state link to first details element.
          $details.eq(0).before($toggle);
        }

        Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
      });
    }
  };

  /**
   * Determine if a webform's details are all opened.
   *
   * @param {jQuery} $form
   *   A webform.
   *
   * @return {boolean}
   *   TRUE if a webform's details are all opened.
   */
  Drupal.webform.detailsToggle.isFormDetailsOpen = function ($form) {
    return ($form.find('details[open]').length === $form.find('details').length);
  };

  /**
   * Set a webform's details toggle state widget label.
   *
   * @param {jQuery} $form
   *   A webform.
   */
  Drupal.webform.detailsToggle.setDetailsToggleLabel = function ($form) {
    var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);

    var label = (isOpen) ? Drupal.t('Collapse all') : Drupal.t('Expand all');
    $form.find('.webform-details-toggle-state').html(label);

    var text = (isOpen) ? Drupal.t('All details have been expanded.') : Drupal.t('All details have been collapsed.');
    Drupal.announce(text);
  };

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Modernizr, Drupal, once) {
  Drupal.behaviors.date = {
    attach: function attach(context, settings) {
      if (Modernizr.inputtypes.date === false) {
        once('datepicker', '[data-drupal-field-elements="date-time"]').forEach(function (dateTime) {
          var dateInput = dateTime.querySelector('input[type="date"]');
          var timeInput = dateTime.querySelector('input[type="time"]');
          var help = Drupal.theme.dateTimeHelp({
            dateId: "".concat(dateInput.id, "--description"),
            dateDesc: dateInput.dataset.help,
            timeId: "".concat(timeInput.id, "--description"),
            timeDesc: timeInput.dataset.help
          });
          [dateInput, timeInput].forEach(function (input) {
            input.setAttribute('aria-describedby', "".concat(input.id, "--description"));
            input.setAttribute('type', 'text');
          });
          Drupal.DatepickerPolyfill.attachDescription(dateTime, help);
        });
        once('datepicker', '[data-drupal-field-elements="date"]').forEach(function (date) {
          var dateInput = date.querySelector('input[type="date"]');
          var help = Drupal.theme.dateHelp({
            dateDesc: dateInput.dataset.help
          });
          var id = "".concat(date.id, "--description");
          dateInput.setAttribute('aria-describedby', id);
          dateInput.setAttribute('type', 'text');
          Drupal.DatepickerPolyfill.attachDescription(date, help, id);
        });
      }
    }
  };
  Drupal.DatepickerPolyfill = function () {
    function _class() {
      _classCallCheck(this, _class);
    }
    _createClass(_class, null, [{
      key: "attachDescription",
      value: function attachDescription(element, help, id) {
        var description = element.nextElementSibling;
        if (!(description && description.getAttribute('data-drupal-field-elements') === 'description')) {
          description = Drupal.DatepickerPolyfill.descriptionWrapperElement(id);
          element.parentNode.insertBefore(description, element.nextSibling);
        }
        description.insertAdjacentHTML('beforeend', help);
      }
    }, {
      key: "descriptionWrapperElement",
      value: function descriptionWrapperElement(id) {
        var description = document.createElement('div');
        description.classList.add('description');
        description.setAttribute('data-drupal-field-elements', 'description');
        if (id) {
          description.setAttribute('id', id);
        }
        return description;
      }
    }]);
    return _class;
  }();
  Drupal.theme.dateHelp = function (_ref) {
    var dateDesc = _ref.dateDesc;
    return "<div class=\"no-native-datepicker-help\">".concat(dateDesc, "</div>");
  };
  Drupal.theme.dateTimeHelp = function (_ref2) {
    var dateId = _ref2.dateId,
      timeId = _ref2.timeId,
      dateDesc = _ref2.dateDesc,
      timeDesc = _ref2.timeDesc;
    return "<div class=\"no-native-datepicker-help\">\n       <span id=\"".concat(dateId, "\">").concat(dateDesc, "</span> <span id=\"").concat(timeId, "\">").concat(timeDesc, "</span>\n     </div>");
  };
})(Modernizr, Drupal, once);;
/**
 * @file
 * Override polyfill for HTML5 date input and provide support for custom date formats.
 */

(function ($, Modernizr, Drupal) {

  'use strict';

  // @see http://api.jqueryui.com/datepicker/
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.datePicker = Drupal.webform.datePicker || {};
  Drupal.webform.datePicker.options = Drupal.webform.datePicker.options || {};

  /**
   * Attach datepicker fallback on date elements.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior. Accepts in `settings.date` an object listing
   *   elements to process, keyed by the HTML ID of the form element containing
   *   the human-readable value. Each element is an datepicker settings object.
   * @prop {Drupal~behaviorDetach} detach
   *   Detach the behavior destroying datepickers on effected elements.
   */
  Drupal.behaviors.date = {
    attach: function (context, settings) {
      var $context = $(context);
      $context.find('input[data-drupal-date-format]').once('datePicker').each(function () {
        var $input = $(this);

        // Skip if date inputs are supported by the browser and input is not a text field.
        // @see \Drupal\webform\Element\WebformDatetime
        if (window.Modernizr && Modernizr.inputtypes && Modernizr.inputtypes.date === true && $input.attr('type') !== 'text') {
          return;
        }

        var options = $.extend({
          changeMonth: true,
          changeYear: true
        }, Drupal.webform.datePicker.options);

        // Add datepicker button.
        if ($input.hasData && $input.hasData('datepicker-button')) {
          options = $.extend({
            showOn: 'both',
            buttonImage: settings.webform.datePicker.buttonImage,
            buttonImageOnly: true,
            buttonText: Drupal.t('Select date')
          }, Drupal.webform.datePicker.options);
        }

        var dateFormat = $input.data('drupalDateFormat');

        // The date format is saved in PHP style, we need to convert to jQuery
        // datepicker.
        // @see http://stackoverflow.com/questions/16702398/convert-a-php-date-format-to-a-jqueryui-datepicker-date-format
        // @see http://php.net/manual/en/function.date.php
        options.dateFormat = dateFormat
          // Year.
          .replace('Y', 'yy') // A full numeric representation of a year, 4 digits (1999 or 2003)
          .replace('y', 'y') // A two digit representation of a year (99 or 03)
          // Month.
          .replace('F', 'MM') // A full textual representation of a month, such as January or March (January through December)
          .replace('m', 'mm') // Numeric representation of a month, with leading zeros (01 through 12)
          .replace('M', 'M') // A short textual representation of a month, three letters (Jan through Dec)
          .replace('n', 'm') // Numeric representation of a month, without leading zeros (1 through 12)
          // Day.
          .replace('d', 'dd') // Day of the month, 2 digits with leading zeros (01 to 31)
          .replace('D', 'D') // A textual representation of a day, three letters (Mon through Sun)
          .replace('j', 'd') // Day of the month without leading zeros (1 to 31)
          .replace('l', 'DD'); // A full textual representation of the day of the week (Sunday through Saturday)

        // Add min and max date if set on the input.
        if ($input.attr('min')) {
          options.minDate = $input.attr('min');
        }
        if ($input.attr('max')) {
          options.maxDate = $input.attr('max');
        }

        // Add min/max year to data range.
        if (!options.yearRange && $input.data('min-year') && $input.data('max-year')) {
          options.yearRange = $input.data('min-year') + ':' + $input.attr('data-max-year');
        }

        // First day of the week.
        options.firstDay = settings.webform.dateFirstDay;

        // Days of the week.
        // @see https://stackoverflow.com/questions/2968414/disable-specific-days-of-the-week-on-jquery-ui-datepicker
        if ($input.attr('data-days')) {
          var days = $input.attr('data-days').split(',');
          options.beforeShowDay = function (date) {
            var day = date.getDay().toString();
            return [(days.indexOf(day) !== -1) ? true : false];
          };
        }

        // Disable autocomplete.
        $input.attr('autocomplete', 'off');

        $input.datepicker(options);
      });
    }
    // Issue #2983363: Datepicker is being detached when multiple files are
    // uploaded.
    /*
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('input[data-drupal-date-format]').findOnce('datePicker').datepicker('destroy');
      }
    }
    */
  };

})(jQuery, Modernizr, Drupal);
;
