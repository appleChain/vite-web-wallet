(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{HSfu:function(e,n,t){"use strict";t.r(n);t("h5TI");function i(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=["bridge.version","app.info","app.language","app.setWebTitle","app.share","app.scan","wallet.currentAddress","wallet.sendTxByURI","pri.encryption","app.setRRButton","pri.open","pri.sendTx","pri.receiveAirdrop","pri.saveVitexInviteCode","pri.readVitexInviteCode"],s=function(){return new Promise((function(e,n){window.WKWVJBCallbacks=window.WKWVJBCallbacks||[function(n){e(n)}],window.webkit&&window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null)}))},l=function(){var e=this;return new Promise((function(n,t){var i={default:e,call:function(e,n,t){var i="";"function"==typeof n&&(t=n,n={});var a={data:void 0===n?null:n};if("function"==typeof t){var o="dscb"+window.dscb++;window[o]=t,a._dscbstub=o}return a=JSON.stringify(a),window._dsbridge?i=window._dsbridge.call(e,a):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(i=prompt("_dsbridge="+e,a)),JSON.parse(i||"{}").data},register:function(e,n,t){var a=t?window._dsaf:window._dsf;window._dsInit||(window._dsInit=!0,setTimeout((function(){i.call("_dsb.dsinit")}),0)),"object"==o(n)?a._obs[e]=n:a[e]=n},registerAsyn:function(e,n){this.register(e,n,!0)},registerHandler:function(e,n){return i.register(e,n,!0)},callHandler:function(){return i.call.apply(i,arguments)},hasNativeMethod:function(e,n){return this.call("_dsb.hasNativeMethod",{name:e,type:n||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};!function(){if(!window._dsf){var e=window.close,t={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,viteBridge:i,dsBridge:i,close:function(){i.hasNativeMethod("_dsb.closePage")?i.call("_dsb.closePage"):e.call(window)},_handleMessageFromNative:function(e){var n=JSON.parse(e.data),t={id:e.callbackId,complete:!0},a=this._dsf[e.method],o=this._dsaf[e.method],r=function(e,a){t.data=e.apply(a,n),i.call("_dsb.returnValue",t)},s=function(e,a){n.push((function(e,n){t.data=e,t.complete=!1!==n,i.call("_dsb.returnValue",t)})),e.apply(a,n)};if(a)r(a,this._dsf);else if(o)s(o,this._dsaf);else{var l=e.method.split(".");if(l.length<2)return;var d=l.pop(),c=l.join("."),u=this._dsf._obs,f=u[c]||{},p=f[d];if(p&&"function"==typeof p)return void r(p,f);if((p=(f=(u=this._dsaf._obs)[c]||{})[d])&&"function"==typeof p)return void s(p,f)}}};for(var a in t)window[a]=t[a];i.register("_hasJavascriptMethod",(function(e,n){var t=e.split(".");if(t.length<2)return!(!_dsf[t]&&!_dsaf[t]);e=t.pop();var i=t.join("."),a=_dsf._obs[i]||_dsaf._obs[i];return a&&!!a[e]})),window.AndroidDSBridge=i,n(i)}}()}))},d=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selfDefinedMethods:r},a=t.readyCallback,o=t.selfDefinedMethods,d=void 0===o?r:o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var c=new Set([].concat(i(d),r));this._event={},this._ready=!1,this.registerHandlerCacheQueu=[],this.callHandleCacheQueu=[];var u=function(e){n._ready=!0,n.callHandleCacheQueu.forEach((function(n){e.callHandler.apply(e,i(n))})),n.registerHandlerCacheQueu.forEach((function(n){e.registerHandler.apply(e,i(n))})),"function"==typeof a&&a(e)};e._inIosContainer&&s().then((function(e){u(e)})),e._inAndroidContainer&&l().then((function(e){u(e)})),c.forEach((function(t){n[t]=function(i){return new Promise((function(a,o){e._support||o("not support");var r,s=function(e,n){return function(t){var i=JSON.parse(t),a=i.code,o=void 0===a?0:a,r=i.msg,s=void 0===r?"":r,l=i.data,d=void 0===l?null:l;0===o?e(d):n({code:o,msg:s,data:d})}}(a,o),l=[t,void 0===i?"":i,s];n._ready?(console.log("call ".concat(t," when ready,").concat(JSON.stringify(l))),(r=n._originBridge).callHandler.apply(r,l)):(console.log("call ".concat(t," when not ready,").concat(JSON.stringify(l))),n.callHandleCacheQueu.push(l))}))}}))}var n,t,o;return n=e,o=[{key:"_support",get:function(){return e._inAndroidContainer||e._inIosContainer||null!=navigator.userAgent.match(/vite/i)}},{key:"_inIosContainer",get:function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers&&window.webkit.messageHandlers.iOS_Native_InjectJavascript}},{key:"_inAndroidContainer",get:function(){return!(!window._dsbridge&&!window._dsf&&-1==navigator.userAgent.indexOf("_dsbridge"))}}],(t=[{key:"callAnyway",value:function(e,n){var t=this;return new Promise((function(i,a){t._originBridge.callHandler(e,n,function(e,n){return function(t){var i=JSON.parse(t),a=i.code,o=void 0===a?0:a,r=i.msg,s=void 0===r?"":r,l=i.data,d=void 0===l?null:l;0===o?e(d):n({code:o,msg:s,data:d})}}(i,a))}))}},{key:"subscribe",value:function(n,t){var i=this;if(e._support){if("function"!=typeof t)throw new Error("callback must be a function");var a=!!this._event[n];if(!a&&(this._event[n]=[]),!this._event[n].some((function(e){return e===t}))&&(this._event[n].push(t),!a)){var o,r=[n,function(e){i._event[n].forEach((function(t){console.log("emitter",n,e),t(e)}))}];this._ready?(o=this._originBridge).registerHandler.apply(o,r):this.registerHandlerCacheQueu.push(r)}}else console.error("bridge not supported")}},{key:"unSubscribe",value:function(e,n){if("function"!=typeof n)throw new Error("callback must be a function");this._event[e]&&this._event[e].splice(this._event[e].indexOf(n),1)}},{key:"_originBridge",get:function(){return e._inIosContainer?window.WKWebViewJavascriptBridge:e._inAndroidContainer?window.AndroidDSBridge:null}}])&&a(n.prototype,t),o&&a(n,o),e}();var c=function(e){var n={vitex_invite_code:""};return 0===e.length?n:("?"===e[0]&&(e=e.slice(1)),0===e.length?n:(e.split("&").forEach((function(e){var t=e.split("=");t.length>1&&(n[t[0]]=t[1])})),n))}(location.search),u=navigator.userAgent,f=!!(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers&&window.webkit.messageHandlers.iOS_Native_InjectJavascript),p=!(!window._dsbridge&&!window._dsf&&-1==navigator.userAgent.indexOf("_dsbridge")),h=null!=u.match(/vite/i)||f||p,w=null!=u.match(/iPhone|iP(o|a)d/i),g=null!=u.match(/android/i),b=null!=u.match(/micromessage/i);function v(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_lang","zh"),_(this,"map",null),_(this,"bindMap",{}),_(this,"liteners",{}),_(this,"changeLangHandlers",[]),this.map=n,this._lang=t||m}var n,t,i;return n=e,(t=[{key:"bind",value:function(e,n){this.bindMap[n]=document.querySelector(e),this.bindMap[n].innerHTML=this.text(n)}},{key:"watch",value:function(e,n){n(this.text(e)),Array.isArray(this.liteners[e])?this.liteners[e].push(n):this.liteners[e]=[n]}},{key:"onLangChanged",value:function(e){this.changeLangHandlers.push(e)}},{key:"langChanged",value:function(){var e=this;for(var n in this.bindMap)this.bindMap[n].innerHTML=this.text(n);this.changeLangHandlers.forEach((function(e){return e()})),Object.keys(this.liteners).forEach((function(n){e.liteners[n]&&e.liteners[n].forEach((function(t){return t(e.text(n))}))}))}},{key:"text",value:function(e){return this.map[this.lang].message[e]}},{key:"lang",get:function(){return this._lang},set:function(e){this._lang!=e&&(this._lang=e,this.langChanged())}}])&&v(n.prototype,t),i&&v(n,i),e}(),m=navigator.language.toLowerCase().indexOf("zh")>-1?"zh":"en";(new d)["app.info"]().then((function(){location.href="/webview/vitex_invite_inner/index.html".concat(location.search)}),(function(){}));var k=document.getElementById("download_box"),H=document.getElementById("for_app"),A=document.getElementById("i18_web_wallet"),C=document.getElementById("link_download");w?(H.style.display="block",A.style.display="none",C.href="https://itunes.apple.com/us/app/vite-official-hd-wallet/id1437629486?mt=8",k.classList.add("ios")):g?(H.style.display="block",A.style.display="none",C.href="https://testnet-vite-test-1257137467.cos.ap-beijing.myqcloud.com/androidapk/ViteWallet.apk",C.setAttribute("download","vite.apk"),k.classList.add("android")):(H.style.display="none",A.style.display="block");var S,x,O="".concat("https://vite-wallet-test.netlify.com/webview/vitex_invite_inner/index.html","?vitex_invite_code=").concat(c.vitex_invite_code),I="viteapp://open?url=".concat(encodeURI(O)),B=new y({en:{message:{web_wallet:"Use Vite Web Wallet",multi_wallet:"Multi-token Wallet",download:"Download App",install:"Please use your native mobile browser to open this link in case of installation failure",browser:"Open in browser"}},zh:{message:{web_wallet:"访问网页版",multi_wallet:"多币种钱包",download:"下载 App",install:"用 safari 打开本页面",browser:"在浏览器中打开"}}},(c.lang||"").indexOf("zh")>-1?"zh":"en");B.bind("#i18_web_wallet","web_wallet"),B.bind("#i18_multi_wallet","multi_wallet"),B.bind("#i18_download","download"),B.bind("#i18_install","install"),B.bind("#i18_browser","browser"),document.body.classList.add(B.lang),h?location.href=O:b?document.getElementById("open_tips").style.display="block":(S=I,x=0,document.addEventListener("visibilitychange",(function(){document.hidden&&clearTimeout(x)}),!1),location.href=S,x=window.setTimeout((function(){console.log("download")}),3e3))},h5TI:function(e,n,t){}},[["HSfu",0]]]);