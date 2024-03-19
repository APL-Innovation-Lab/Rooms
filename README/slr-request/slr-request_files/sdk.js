if(BC_Widgets === undefined) {
  var BC_Widgets = [];

  // This is an ugly hack to workaround older copies of Mootools.
  if(typeof JSON !== "undefined" && typeof JSON.stringify === "undefined" && typeof JSON.parse === "undefined" &&
     typeof JSON.encode === "function" && typeof JSON.decode === "function") {
    JSON.stringify = JSON.encode;
    JSON.parse = JSON.decode;
  } else {
    var JSON;JSON||(JSON={});
    (function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
      e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
        "}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
      {"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();
  }

  function addEvent(element, evnt, funct){
    if (element.attachEvent)
      return element.attachEvent('on'+evnt, funct);
    else
      return element.addEventListener(evnt, funct, false);
  }

  function offset(el) {
    var
      boundingRect = el.getBoundingClientRect(),
      body = document.body || document.getElementsByTagName("body")[0],
      clientTop = document.documentElement.clientTop || body.clientTop || 0,
      clientLeft = document.documentElement.clientLeft || body.clientLeft || 0,
      scrollTop = (window.pageYOffset || document.documentElement.scrollTop || body.scrollTop),
      scrollLeft = (window.pageXOffset || document.documentElement.scrollLeft || body.scrollLeft);
    return {
      top: boundingRect.top + scrollTop - clientTop,
      left: boundingRect.left + scrollLeft - clientLeft
    }
  }

  if(window.postMessage && document.createElement('div').getBoundingClientRect) {
    addEvent(window,'click',function(e) {
      var popups = document.querySelectorAll('.bc-popup');
      for(var i = 0; i < popups.length; i++) {
        if(popups[i].style.display == 'block') {
          popups[i].style.display = 'none';
        }
      }
      if(BC_Widgets) {
        for (var j = 0; j < BC_Widgets.length; j++) {
          BC_Widgets[j].contentWindow.postMessage('BC_OnDropdownClose=true', '*');
        }
      }
    });

    addEvent(window, 'message', function(e) {
      if(typeof e.data === "string" && e.data) {
        var x = e.data.indexOf('=');
        if (x > 0) {
          var d = [ e.data.substring(0,x), e.data.substring(x+1) ];
          if(d[0] == 'BC_UpdateButtonPopup') {
            var params = JSON.parse(d[1]),
              iframe = (document.getElementById('bc-popup-'+params.widget_id) || document.createElement('iframe')),
                current_widget = null, html = '';
            for (var j = 0; j < BC_Widgets.length; j++) {
              if(BC_Widgets[j].id == 'bc-widget-'+params.widget_id) {
                current_widget = BC_Widgets[j]
                current_widget.style.height = params.bodyHeight + 'px';
              }
            }
            var css = '* { -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; } body { background: transparent; margin: 0; padding: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 12px; } .dropdown { width: 158px; position: absolute; overflow: auto; background: #fff; border-radius: 5px; top: 0; right: 0; left: 0; text-align: left; border: 1px solid #CCC; -webkit-transition: all .1s; -moz-transition: all .1s; -o-transition: all .1s; transition: all .1s; } .dropdown ul, .dropdown li { list-style: none; margin: 0; padding: 0; } .dropdown ul { padding-top: 5px; padding-bottom: 4px; } .dropdown li a { padding-left: 10px; padding-top: 4px; padding-bottom: 4px; } .dropdown li a:nth-child(even) { background-color: #ccc; } .dropdown a { color: #999996; text-decoration: none; display: block; } .dropdown a:hover { color: #6E6E5E; text-decoration: none; background-color: #EBEAE3; border-radius: 2px; }';
            html += '<div class="dropdown" unselectable="on"><ul class="lists" unselectable="on">';
            for (var i = 0; i < params.shelfLinks.length; i++) {
              html += '<li unselectable="on">'+params.shelfLinks[i]+'</li>';
            }
            html += '</ul></div>';
            if(iframe.className != 'bc-popup') {
              iframe.id = 'bc-popup-'+params.widget_id;
              iframe.className = 'bc-popup';
              iframe.width = 160;
              iframe.height = 130;
              iframe.style.position = 'absolute';
              iframe.setAttribute('data-button-bottom', params.buttonPosition.bottom);
              iframe.setAttribute('data-button-left', params.buttonPosition.left);
              iframe.style.display = 'none';
              iframe.style.zIndex = 1000;
              iframe.frameBorder = 0;
              iframe.allowTransparency = true;
              addEvent(iframe, 'load', function(e){
                iframe.contentWindow.document.body.innerHTML = html;
                var head = iframe.contentWindow.document.head || iframe.contentWindow.document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

                style.type = 'text/css';
                if (style.styleSheet){
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                head.appendChild(style);

              });
              var wrapperDiv = document.createElement('div');
              wrapperDiv.style.position = 'relative';
              wrapperDiv.appendChild(iframe); // will move frame node to wrapperDiv
              current_widget.parentNode.insertBefore(wrapperDiv, current_widget);
            } else {
              iframe.contentWindow.document.body.innerHTML = html;
            }
          } else if(d[0] == 'BC_ToggleAddToShelf') {
            var existingIframe = document.getElementById('bc-widget-'+d[1]),
              popup = document.getElementById('bc-popup-'+d[1]);
            if(popup.style.display == 'block') {
              popup.style.display = 'none';
            } else {
              popup.style.top = popup.getAttribute('data-button-bottom')*1 - 6 + 'px';
              popup.style.left = popup.getAttribute('data-button-left')*1 + 44 + 'px';
              popup.style.display = 'block';
              popup.contentWindow.focus();
            }
          } else if(d[0] == 'BC_Click') {
            x = d[1].indexOf(',');
            var s = [ d[1].substring(0,x), d[1].substring(x+1) ];
            var popups = document.querySelectorAll('.bc-popup');
            for(var i = 0; i < popups.length; i++) {
              if(popups[i].style.display == 'block') {
                popups[i].style.display = 'none';
              }
            }
            for (var j = 0; j < BC_Widgets.length; j++) {
              if(BC_Widgets[j].id == 'bc-widget-'+s[0]) {
                BC_Widgets[j].contentWindow.postMessage('BC_Click='+s[1], '*');
              }
            }
          } else {
            //alert(d);
          }
        }
      }

    });
    addEvent(window, 'load', function(e) {
      var iframes = document.getElementsByTagName('iframe'), frame, id;
      for (var i = 0; i < iframes.length; i++) {
        frame = iframes[i];
        if ( frame.className.indexOf('bc-widget') > -1 ) {
          BC_Widgets.push(frame);
        }
      }
      for (var i = 0; i < BC_Widgets.length; i++) {
        frame = BC_Widgets[i];
        id = (Math.random() * (1 << 30)).toString(16).replace('.', '');
        frame.id = 'bc-widget-'+id;
        frame.contentWindow.postMessage('BC_Start='+id, '*');
      }
    });
  }
}

if(BiblioCommons === undefined) {
  /**
  * easyXDM
  * http://easyxdm.net/
  * Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  * THE SOFTWARE.
  *
  * NOTE: Made one change: var b=this was changed to var b=window for compatibility with "use strict";
  */
  (function(N,d,p,K,k,H){var b=this;var n=Math.floor(Math.random()*10000);var q=Function.prototype;var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var R=/[\-\w]+\/\.\.\//;var F=/([^:])\/\//g;var I="";var o={};var M=N.easyXDM;var U="easyXDM_";var E;var y=false;var i;var h;function C(X,Z){var Y=typeof X[Z];return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])}function r(X){return Object.prototype.toString.call(X)==="[object Array]"}function c(){var Z="Shockwave Flash",ad="application/x-shockwave-flash";if(!t(navigator.plugins)&&typeof navigator.plugins[Z]=="object"){var ab=navigator.plugins[Z].description;if(ab&&!t(navigator.mimeTypes)&&navigator.mimeTypes[ad]&&navigator.mimeTypes[ad].enabledPlugin){i=ab.match(/\d+/g)}}if(!i){var Y;try{Y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");i=Array.prototype.slice.call(Y.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);Y=null}catch(ac){}}if(!i){return false}var X=parseInt(i[0],10),aa=parseInt(i[1],10);h=X>9&&aa>0;return true}var v,x;if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)};x=function(Z,X,Y){Z.removeEventListener(X,Y,false)}}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)};x=function(X,Z,Y){X.detachEvent("on"+Z,Y)}}else{throw new Error("Browser not supported")}}var W=false,J=[],L;if("readyState" in d){L=d.readyState;W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))}else{W=!!d.body}function s(){if(W){return}W=true;for(var X=0;X<J.length;X++){J[X]()}J.length=0}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()}});if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return}try{d.documentElement.doScroll("left")}catch(X){K(g,1);return}s()};g()}}v(N,"load",s)}function G(Y,X){if(W){Y.call(X);return}J.push(function(){Y.call(X)})}function m(){var Z=parent;if(I!==""){for(var X=0,Y=I.split(".");X<Y.length;X++){Z=Z[Y[X]]}}return Z.easyXDM}function e(X){N.easyXDM=M;I=X;if(I){U="easyXDM_"+I.replace(".","_")+"_"}return o}function z(X){return X.match(Q)[3]}function f(X){return X.match(Q)[4]||""}function j(Z){var X=Z.toLowerCase().match(Q);var aa=X[2],ab=X[3],Y=X[4]||"";if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""}return aa+"//"+ab+Y}function B(X){X=X.replace(F,"$1/");if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)}X=p.protocol+"//"+p.host+Y+X}while(R.test(X)){X=X.replace(R,"")}return X}function P(X,aa){var ac="",Z=X.indexOf("#");if(Z!==-1){ac=X.substring(Z);X=X.substring(0,Z)}var ab=[];for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac}var S=(function(X){X=X.substring(1).split("&");var Z={},aa,Y=X.length;while(Y--){aa=X[Y].split("=");Z[aa[0]]=k(aa[1])}return Z}(/xdm_e=/.test(p.search)?p.search:p.hash));function t(X){return typeof X==="undefined"}var O=function(){var Y={};var Z={a:[1,2,3]},X='{"a":[1,2,3]}';if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()}}}if(Y.stringify&&Y.parse){O=function(){return Y};return Y}return null};function T(X,Y,Z){var ab;for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];if(typeof ab==="object"){T(X[aa],ab,Z)}else{if(!Z){X[aa]=Y[aa]}}}else{X[aa]=Y[aa]}}}return X}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));X.name=U+"TEST"+n;E=X!==Y.elements[X.name];d.body.removeChild(Y)}function A(Y){if(t(E)){a()}var ac;if(E){ac=d.createElement('<iframe name="'+Y.props.name+'"/>')}else{ac=d.createElement("IFRAME");ac.name=Y.props.name}ac.id=ac.name=Y.props.name;delete Y.props.name;if(typeof Y.container=="string"){Y.container=d.getElementById(Y.container)}if(!Y.container){T(ac.style,{position:"absolute",top:"-2000px",left:"0px"});Y.container=d.body}var ab=Y.props.src;Y.props.src="javascript:false";T(ac,Y.props);ac.border=ac.frameBorder=0;ac.allowTransparency=true;Y.container.appendChild(ac);if(Y.onLoad){v(ac,"load",Y.onLoad)}if(Y.usePost){var aa=Y.container.appendChild(d.createElement("form")),X;aa.target=ac.name;aa.action=ab;aa.method="POST";if(typeof(Y.usePost)==="object"){for(var Z in Y.usePost){if(Y.usePost.hasOwnProperty(Z)){if(E){X=d.createElement('<input name="'+Z+'"/>')}else{X=d.createElement("INPUT");X.name=Z}X.value=Y.usePost[Z];aa.appendChild(X)}}}aa.submit();aa.parentNode.removeChild(aa)}else{ac.src=ab}Y.props.src=ab;return ac}function V(aa,Z){if(typeof aa=="string"){aa=[aa]}var Y,X=aa.length;while(X--){Y=aa[X];Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(Y.test(Z)){return true}}return false}function l(Z){var ae=Z.protocol,Y;Z.isHost=Z.isHost||t(S.xdm_p);y=Z.hash||false;if(!Z.props){Z.props={}}if(!Z.isHost){Z.channel=S.xdm_c.replace(/["'<>\\]/g,"");Z.secret=S.xdm_s;Z.remote=S.xdm_e.replace(/["'<>\\]/g,"");ae=S.xdm_p;if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)}}else{Z.remote=B(Z.remote);Z.channel=Z.channel||"default"+n++;Z.secret=Math.random().toString(16).substring(2);if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"}else{if(Z.remoteHelper){ae="2"}else{ae="0"}}}}}}}Z.protocol=ae;switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;var aa=X.length;while(aa--){ad=X[aa];if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;break}}if(!Z.local){Z.local=N}}var ab={xdm_c:Z.channel,xdm_p:0};if(Z.local===N){Z.usePolling=true;Z.useParent=true;Z.local=p.protocol+"//"+p.host+p.pathname+p.search;ab.xdm_e=Z.local;ab.xdm_pa=1}else{ab.xdm_e=B(Z.local)}if(Z.container){Z.useResize=false;ab.xdm_po=1}Z.remote=P(Z.remote,ab)}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"1":Y=[new o.stack.PostMessageTransport(Z)];break;case"2":Z.remoteHelper=B(Z.remoteHelper);Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"3":Y=[new o.stack.NixTransport(Z)];break;case"4":Y=[new o.stack.SameOriginTransport(Z)];break;case"5":Y=[new o.stack.FrameElementTransport(Z)];break;case"6":if(!i){c()}Y=[new o.stack.FlashTransport(Z)];break}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));return Y}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)},outgoing:function(ac,ad){this.down.outgoing(ac,ad)},callback:function(ac){this.up.callback(ac)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var Y=0,X=aa.length;Y<X;Y++){ab=aa[Y];T(ab,Z,true);if(Y!==0){ab.down=aa[Y-1]}if(Y!==X-1){ab.up=aa[Y+1]}}return ab}function w(X){X.up.down=X.down;X.down.up=X.up;X.up=X.down=null}T(o,{version:"2.4.17.0",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')}}};(function(){var X={};o.Fn={set:function(Y,Z){X[Y]=Z},get:function(Z,Y){var aa=X[Z];if(Y){delete X[Z]}return aa}}}());o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)},callback:function(aa){if(Y.onReady){Y.onReady(aa)}}}])),Z=j(Y.remote);this.origin=j(Y.remote);this.destroy=function(){X.destroy()};this.postMessage=function(aa){X.outgoing(aa,Z)};X.init()};o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];if(typeof aa==="function"){Y.local[ab]={method:aa}}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)}}}]));this.origin=j(Z.remote);this.destroy=function(){X.destroy()};X.init()};o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa(ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});ab=A(Y);o.Fn.set(Y.channel,function(ac){aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}})}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)});K(function(){Z.up.callback(true)},0)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;function af(ah,ag){K(function(){ac.up.incoming(ah,ad)},0)}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;var ak=o.stack.FlashTransport[ah].queue;for(var al=0;al<ak.length;al++){ak[al]()}ak.length=0});if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer}else{ae=d.createElement("div");T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});d.body.appendChild(ae)}var ai="callback=flash_loaded"+ah.replace(/[\-.]/g,"_")+"&proto="+b.location.protocol+"&domain="+z(b.location.href)+"&port="+f(b.location.href)+"&ns="+I;ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());if(ag){ag()}},destroy:function(){try{Y.destroyChannel(aa.channel)}catch(ag){}Y=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){ad=aa.remote;o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)})});o.Fn.set("flash_"+aa.channel+"_onMessage",af);aa.swf=B(aa.swf);var ah=z(aa.swf);var ag=function(){o.stack.FlashTransport[ah].init=true;Y=o.stack.FlashTransport[ah].swf;Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});X=A(aa)}};if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};Z(ah)}else{o.stack.FlashTransport[ah].queue.push(ag)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;function X(ae){if(ae.origin){return j(ae.origin)}if(ae.uri){return j(ae.uri)}if(ae.domain){return p.protocol+"//"+ae.domain}throw"Unable to retrieve the origin of the event"}function ab(af){var ae=X(af);if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);if(ae){ae()}},destroy:function(){x(N,"message",ab);if(ad){Y=null;ad.parentNode.removeChild(ad);ad=null}},onDOMReady:function(){Z=j(aa.remote);if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;x(N,"message",ae);v(N,"message",ab);K(function(){ac.up.callback(true)},0)}};v(N,"message",ae);T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});ad=A(aa)}else{v(N,"message",ab);Y=("postMessage" in N.parent)?N.parent:N.parent.document;Y.postMessage(aa.channel+"-ready",Z);K(function(){ac.up.callback(true)},0)}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});ab=A(Y);ab.fn=function(ac){delete ab.fn;aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}}}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)});Z.up.callback(true)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.NameTransport=function(ab){var ac;var ae,ai,aa,ag,ah,Y,X;function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;ai.contentWindow.sendMessage(al,ak)}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)}}else{af("ready");ac.up.callback(true)}}function aj(ak){ac.up.incoming(ak,Y)}function Z(){if(ah){K(function(){ah(true)},0)}}return(ac={outgoing:function(al,am,ak){ah=ak;af(al)},destroy:function(){ai.parentNode.removeChild(ai);ai=null;if(ae){aa.parentNode.removeChild(aa);aa=null}},onDOMReady:function(){ae=ab.isHost;ag=0;Y=j(ab.remote);ab.local=B(ab.local);if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);ad()}});X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});aa=A(ab)}else{ab.remoteHelper=ab.remote;o.Fn.set(ab.channel,aj)}var ak=function(){var al=ai||this;x(al,"load",ak);o.Fn.set(ab.channel+"_load",Z);(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()}else{K(am,50)}}())};ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:ak})},init:function(){G(ac.onDOMReady,ac)}})};o.stack.HashTransport=function(Z){var ac;var ah=this,af,aa,X,ad,am,ab,al;var ag,Y;function ak(ao){if(!al){return}var an=Z.remote+"#"+(am++)+"_"+ao;((af||!ag)?al.contentWindow:al).location=an}function ae(an){ad=an;ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)}function aj(){if(!ab){return}var an=ab.location.href,ap="",ao=an.indexOf("#");if(ao!=-1){ap=an.substring(ao)}if(ap&&ap!=ad){ae(ap)}}function ai(){aa=setInterval(aj,X)}return(ac={outgoing:function(an,ao){ak(an)},destroy:function(){N.clearInterval(aa);if(af||!ag){al.parentNode.removeChild(al)}al=null},onDOMReady:function(){af=Z.isHost;X=Z.interval;ad="#"+Z.channel;am=0;ag=Z.useParent;Y=j(Z.remote);if(af){T(Z.props,{src:Z.remote,name:U+Z.channel+"_provider"});if(ag){Z.onLoad=function(){ab=N;ai();ac.up.callback(true)}}else{var ap=0,an=Z.delay/50;(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]}catch(aq){}if(ab){ai();ac.up.callback(true)}else{K(ao,50)}}())}al=A(Z)}else{ab=N;ai();if(ag){al=parent;ac.up.callback(true)}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)}});al=A(Z)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.ReliableBehavior=function(Y){var aa,ac;var ab=0,X=0,Z="";return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");af=af.substring(ae+1);if(ag[0]==ab){Z="";if(ac){ac(true);ac=null}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);if(X!=ag[1]){X=ag[1];aa.up.incoming(af,ad)}}},outgoing:function(af,ad,ae){Z=af;ac=ae;aa.down.outgoing(X+","+(++ab)+"_"+af,ad)}})};o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;function ae(){if(Z.remove&&ad.length===0){w(ac);return}if(ag||ad.length===0||af){return}ag=true;var ah=ad.shift();ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;if(ah.callback){K(function(){ah.callback(ai)},0)}ae()})}return(ac={init:function(){if(t(Z)){Z={}}if(Z.maxLength){X=Z.maxLength;ab=true}if(Z.lazy){Y=true}else{ac.down.init()}},callback:function(ai){ag=false;var ah=ac.up;ae();ah.callback(ai)},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);aa+=ak.substring(aj+1);if(ah===0){if(Z.encode){aa=k(aa)}ac.up.incoming(aa,ai);aa=""}}else{ac.up.incoming(ak,ai)}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)}var ah=[],aj;if(ab){while(al.length!==0){aj=al.substring(0,X);al=al.substring(aj.length);ah.push(aj)}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})}}else{ad.push({data:al,origin:ai,callback:ak})}if(Y){ac.down.init()}else{ae()}},destroy:function(){af=true;ac.down.destroy()}})};o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;function X(){aa=Math.random().toString(16).substring(2);ac.down.outgoing(aa)}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");if(ae===-1){if(af===aa){ac.up.callback(true)}else{if(!Y){Y=af;if(!ab.initiate){X()}ac.down.outgoing(af)}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)},callback:function(ad){if(ab.initiate){X()}}})};o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();var ae=0,ac={};function X(ag){ag.jsonrpc="2.0";aa.down.outgoing(af.stringify(ag))}function ab(ag,ai){var ah=Array.prototype.slice;return function(){var aj=arguments.length,al,ak={method:ai};if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-2)}else{al={success:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-1)}ac[""+(++ae)]=al;ak.id=ae}else{ak.params=ah.call(arguments,0)}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]}X(ak)}}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})}return}var ak,ah;if(am){ak=function(ao){ak=q;X({id:am,result:ao})};ah=function(ao,ap){ah=q;var aq={id:am,error:{code:-32099,message:ao}};if(ap){aq.error.data=ap}X(aq)}}else{ak=ah=q}if(!r(al)){al=[al]}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));if(!t(ag)){ak(ag)}}catch(aj){ah(aj.message)}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);if(ai.method){if(Y.handle){Y.handle(ai,X)}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)}}else{var aj=ac[ai.id];if(ai.error){if(aj.error){aj.error(ai.error)}}else{if(aj.success){aj.success(ai.result)}}delete ac[ai.id]}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)}}}aa.down.init()},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]}}aa.down.destroy()}})};b.easyXDM=o})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);

  /*jshint browser: true jquery: true */
  var BiblioCommons = (function(window,document,location,setTimeout,decodeURIComponent,encodeURIComponent,undefined) {
    var BiblioCommons = {};
    BiblioCommons.easyXDM = easyXDM.noConflict("BiblioCommons");

    // Shim of Array.prototype.forEach
    // from corrected post at http://sk80.co.uk/2012/07/my-shim-was-not-to-standards/
    if(!Array.prototype.hasOwnProperty("forEach")){Array.prototype.forEach=function(e,t){var n,r="a"[0]==="a",i=Object.prototype,s=i.toString,o=function(e){if(e===n||e===null){throw new TypeError(e+" is null or not an object")}if(!r&&s.call(e)==="[object String]"){e=e.split("")}return Object(e)},u=function(e){return e<0?-1:1},a=function(e){var t=+e,n=0,r=Math.pow(2,32);if(!isNaN(t)&&isFinite(t)){n=u(t)*Math.floor(Math.abs(t))%r;if(n>=r/2){n-=r}}return n};var f=0,l=o(this),c=a(l.length);if(s.call(e)!=="[object Function]"){throw new TypeError(e+" is not a function")}while(f<c){if(i.hasOwnProperty.call(l,f)){e.call(t,l[f],f,l)}f+=1}}}

    BiblioCommons.util = {
      create: function(p) {
        if (!p) throw Error('no type');
        function F() {}
        F.prototype = p;
        return new F();
      },
      getCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      },
      getStyle: function(el, cssprop){
        if (el.currentStyle) //IE
          return el.currentStyle[cssprop]
        else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
          return document.defaultView.getComputedStyle(el, "")[cssprop]
        else //try and get inline style
          return el.style[cssprop]
      },
      generateGuid: function() {
        return "bc-widget-" + (Math.random() * (1 << 30)).toString(16).replace('.', '');
      },
      hasAttribute: function(element, attribute) {
        return (typeof element.hasAttribute === "function") ? element.hasAttribute(attribute) : element.getAttribute(attribute) !== null
      },
      parseQuery: function(queryString) {
        var queryHash = {};
        queryString.split("&").forEach(function(element, index, array) {
          var parts = element.split("=",2);
          queryHash[parts[0]] = parts[1];
        });
        return queryHash;
      },
      userFromCookies: function() {
        return {
          session: BiblioCommons.util.getCookie("bc_session"),
          username: BiblioCommons.util.getCookie("bc_username"),
          language: BiblioCommons.util.getCookie("bc_language"),
          barcode: BiblioCommons.util.getCookie("bc_barcode")
        }
      },
      parseArrayIfNecessary: function(thing) {
        if (thing.indexOf("[") == 0) {
          return JSON.parse(thing);
        } else {
          return thing;
        }
      },
      addEventListener: typeof window.addEventListener == "function" ? function(elem, event, func) { elem.addEventListener(event, func, false) } : window.attachEvent ? function(elem, event, func) { elem.attachEvent("on"+event, func) } : function() { }
    };

    // Because IE sometimes thinks it has Object.create in Compatibility Mode when it doesn't work properly...
    if(typeof Object.create === "function") {
      var testObject = {
        testProperty: "testValue"
      };
      var testChild = Object.create(testObject);
      if(typeof testChild.testProperty === "string") {
        BiblioCommons.util.create = Object.create; // it's safe to use
      }// else, keep the incompatible one, as Object.create is insane.
    }

    /* 'getElementsByClassName' polyfill refactored in 2011 by Tubal Martin (http://www.margenn.com)
     * Original developed by Robert Nyman in 2008 http://code.google.com/p/getelementsbyclassname/ */
    BiblioCommons.util.getElementsByClassName=document.getElementsByClassName?function(e,t,n){var r=n&&n.getElementsByClassName?n:document,i=r.getElementsByClassName(e),s=t?new RegExp("\\b"+t+"\\b","i"):null,o=[],u=0,a=i.length,f;for(;u<a;u++){f=i[u];if(!s||s.test(f.nodeName)){o.push(f)}}return o}:document.querySelectorAll?function(e,t,n){var r=(n||document).querySelectorAll((t||"")+"."+e.split(" ").join(".")),i=[],s=0,o=r.length;for(;s<o;s++){i.push(r[s])}return i}:document.evaluate?function(e,t,n){var r=e.split(" "),i="",s=[],o=0,u=r.length,a,f;for(;o<u;o++){i+="[contains(concat(' ', normalize-space(@class), ' '), ' "+r[o]+" ')]"}a=document.evaluate(".//"+(t||"*")+i,n||document,null,0,null);while(f=a.iterateNext()){s.push(f)}return s}:function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i=[],s=t=="*"&&n.all?n.all:n.getElementsByTagName(t),o=[],u=0,a=0,f=r.length,l=s.length,c,h,p,d;for(;u<f;u++){i.push(new RegExp("(^|\\s)"+r[u]+"(\\s|$)"))}d=i.length;for(;a<l;a++){c=s[a];h=false;for(p=0;p<d;p++){h=i[p].test(c.className);if(!h){break}}if(h){o.push(c)}}return o};

    BiblioCommons.util.getScriptDomain = function() {
      var scripts = document.querySelectorAll('script[src*="bibliocommons.com"]');
      if (scripts.length === 0) { return ""; }
      var matches = scripts[0].src.match(/.*\/\/([^/]+)/);
      return matches && matches.length == 2 ? matches[1] : "";
    };

    BiblioCommons.SDK = {
      init: function() {
        if(document.location.href.indexOf("bibliocommons.com/widgets/") > -1) {
          // This is a widget

          BiblioCommons.SDK.constants = {
            scriptDomain: document.location.host,
            queryParams: document.location.href.indexOf("?") > -1 ? BiblioCommons.util.parseQuery(document.location.href.split("?",2)[1]) : {},
            easyXdmSwf: ('https:' == document.location.protocol ? 'https://' : 'http://')+document.location.host+"/javascripts/lib/easyxdm.swf"
          };

          BiblioCommons.SDK.widget_id = BiblioCommons.SDK.constants.queryParams["widget_id"];
          // But which widget is it? (Try saying that 10 times fast!)
          for (var key in BiblioCommons.SDK.widgets) {
            if (BiblioCommons.SDK.widgets.hasOwnProperty(key)) {
              var w = BiblioCommons.SDK.widgets[key];
              if(!BiblioCommons.hasOwnProperty("current_widget")) {
                if(document.location.href.indexOf(w.widgetUrl) > -1) {
                  BiblioCommons.current_widget = w;
                }
              }
            }
          }
          // And now let's initialize its functionality via easyXDM ...
          // TODO: Refactor this into calling functions on BiblioCommons.current_widget
          BiblioCommons.SDK.rpc = new BiblioCommons.easyXDM.Rpc({
              remote: BiblioCommons.util.getScriptDomain(),
              onReady: function() {
                BiblioCommons.current_widget.widgetSelfInitialization();
                BiblioCommons.SDK.updateWidgetDimensions();
              },
              serializer: JSON
            }, {
            local: {
              setDestination: function(destinationUnchecked, successFn, errorFn){
                var destinationUrl = BiblioCommons.util.parseArrayIfNecessary(destinationUnchecked);
                $("a[href*='/user/']").each(function() {
                  this.href = this.href + "?destination=" + encodeURIComponent(destinationUrl);
                });
                BiblioCommons.destination = destinationUrl;
                successFn();
              },
              setStyles: function(styles, successFn, errorFn) {
                // expects [ { selector: "body", css: { color: "#000000" } }, { selector: "a", css: { color: "#FF0000" } } ]
                BiblioCommons.util.parseArrayIfNecessary(styles).forEach(function(e,i,a){
                  $(e.selector).css(e.css);
                });
                successFn();
              }
            },
            remote: {
              setWidthAndHeight:{
                // here we tell the Rpc object to stub a method helloWorld for us
              },
              redirectTo:{}
            }
          });
        } else {
          // This is a parent page
          BiblioCommons.SDK.constants = {
            scriptDomain: BiblioCommons.util.getScriptDomain(),
            queryParams: document.location.href.indexOf("?") > -1 ? BiblioCommons.util.parseQuery(document.location.href.split("?",2)[1]) : {},
            easyXdmSwf: ('https:' == document.location.protocol ? 'https://' : 'http://')+BiblioCommons.util.getScriptDomain()+"/javascripts/lib/easyxdm.swf"
          };
          BiblioCommons.user = BiblioCommons.util.userFromCookies();
          BiblioCommons.divs = BiblioCommons.util.getElementsByClassName('bc-widget', 'div');
          BiblioCommons.divs.forEach(function(e,i,a){
            for (var key in BiblioCommons.SDK.widgets) {
              if (BiblioCommons.SDK.widgets.hasOwnProperty(key)) {
                var w = BiblioCommons.SDK.widgets[key];
                if(!BiblioCommons.util.hasAttribute(e, "data-bc-widget-id")) {
                  if(e.className.indexOf(w.divClassName) > -1) {
                    BiblioCommons.SDK.createAndInitializeWidgetType(w, e);
                  }
                }
              }
            }
          });
        }
      },
      assembleWidgetUrl: function(widget) {
        var url = 'https://' +BiblioCommons.SDK.constants.scriptDomain+widget.widgetUrl;
        url += "?widget_id="+widget.widget_id;
        if (BiblioCommons.user.session) {
          url += "&session_id="+BiblioCommons.user.session;
        }
        if(widget.widgetAttributes !== null && typeof widget.widgetAttributes.forEach === "function") {
          widget.widgetAttributes.forEach(function(e,i,a){
            if(e.type === "Boolean" && BiblioCommons.util.hasAttribute(widget.element, "data-bc-widget-"+e.name)) {
              url += "&"+ e.name+"=true";
            }else if(e.type === "Numbers" && BiblioCommons.util.hasAttribute(widget.element, "data-bc-widget-"+e.name)) {
              var attrValue = widget.element.getAttribute("data-bc-widget-" + e.name);
              var matches = attrValue.match(/([0-9]+)/g);
              if(matches != null) {
                url += "&"+ e.name+"="+matches[matches.length - 1];
              }
            } else if (e.type === "String" && BiblioCommons.util.hasAttribute(widget.element, "data-bc-widget-"+e.name)) {
              url += "&" + e.name + "=" + encodeURIComponent(widget.element.getAttribute("data-bc-widget-" + e.name));
            }
          });
        }
        return url;
      },
      updateWidgetDimensions: function() {
        if(BiblioCommons.hasOwnProperty("current_widget")) { // Could be called before we're ready! :)
          if (BiblioCommons.current_widget.skipResizing) {
            return;
          }
          var ua = jQuery(BiblioCommons.current_widget.trackForResizing),
            odd = jQuery('ul.openDropDown'), popout = jQuery('div.popout-box'),
            newWidth = ua.outerWidth(true), newHeight = ua.outerHeight(true);
          if (odd) { newHeight += odd.outerHeight(true); }
          if (popout && popout.css('visibility') != 'hidden') {
            if(popout.position().top + popout.outerHeight() > -10) {
              newHeight += popout.position().top + popout.outerHeight() + 10;
            }
            if (popout.outerWidth() + popout.position().left > newWidth) {
              newWidth = popout.outerWidth() + popout.position().left;
            }
          }
          BiblioCommons.SDK.rpc.setWidthAndHeight(newWidth, newHeight, BiblioCommons.SDK.widget_id, function(){
            // on success...
          }, function() {
            // on failure...
          });
        }
      },
      createAndInitializeWidgetType: function(widgetType, element) {
        var widget = BiblioCommons.util.create(widgetType);
        widget.element = element;
        widget.widget_id = BiblioCommons.util.generateGuid();
        element.id = widget.widget_id;
        widget.rpc = new BiblioCommons.easyXDM.Rpc({
            remote: BiblioCommons.SDK.assembleWidgetUrl(widget),
            onReady: function() {
              widget.rpc.setDestination(document.location.href);
              this.widget.afterCreate(this.widget);
            },
            widget: widget,
            swf: BiblioCommons.SDK.constants.easyXdmSwf,
            container: widget.element,
            props: widget.getIframeProperties(),
            serializer: JSON
          },
          {
            local: {
              setWidthAndHeight: function(width, height, target_id, successFn, errorFn){
                // if we want to return a response, we can use `return ....`,
                // or we can use the provided callbacks if the operation is async
                // or an error occurred -- just pass the value desired
                var elem = document.getElementById(target_id);
                if (elem && !isNaN(width) && !isNaN(height)) {
                  try {
                    var iframes = elem.getElementsByTagName("iframe");
                    iframes[0].style.width = width+5 + 'px';
                    iframes[0].style.height = height+5 + 'px';
                    successFn();
                  } catch (ex) {
                    errorFn("Problem setting width or height, or in running success callback.");
                  }
                } else {
                  errorFn("Width and Height are not a number or element cannot be found for target_id");
                }
              },
              redirectTo: function(redirectUrl) {
                window.location.href = redirectUrl;
              }
            },
            remote: {
              setDestination:{
                // here we tell the Rpc object to stub a method setDestination for us
              },
              setStyles:{}
            }
          });
        return widget;
      }
    };

    // TODO: reduce duplication below using prototypal inheritance
    // Also note that getIframeProperties is a function because of
    // http://elsamman.com/?p=32
    BiblioCommons.SDK.widgets = {
      GenericWidget: {
        name: "Generic Widget",
        widget_id: null,
        element: null,
        rpc: null,
        divClassName: "bc-generic-widget",
        widgetUrl: "/widgets/generic",
        trackForResizing: "body",
        getIframeProperties: function() { return {
          allowTransparency: false,
          marginWidth: 0,
          marginHeight: 0,
          frameBorder: 0,
          vspace: 0,
          hspace: 0,
          style: {
            height: "20px",
            width: "100%"
          }
        };},
        widgetAttributes: [],
        afterCreate: function(widget){},
        widgetSelfInitialization: function(){}
      },
      AccountWidget: {
        name: "Account Widget",
        widget_id: null,
        element: null,
        rpc: null,
        divClassName: "bc-account-widget",
        widgetUrl: "/widgets/account",
        trackForResizing: "body, #useraccount_widget, form.loginForm",
        getIframeProperties: function() { return {
          allowTransparency: false,
          marginWidth: 0,
          marginHeight: 0,
          frameBorder: 0,
          vspace: 0,
          hspace: 0,
          style: {
            height: "220px",
            width: "100%"
          }
        };},
        widgetAttributes: [
          { name: "expanded", type: "Boolean" }
        ],
        afterCreate: function(widget){},
        widgetSelfInitialization: function(){
          Spinner.hide();
          $("form.loginForm").removeClass('left').off('submit').on('submit', function(e){
            e.preventDefault();
            Spinner.show();
            $.post($(this).attr('action'), $(this).serialize()+"&destination="+encodeURIComponent(BiblioCommons.destination), function(data){
              if(data.hasOwnProperty("redirect")) {
                BiblioCommons.SDK.rpc.redirectTo(data.redirect);
              } else {
                Spinner.hide();
                if(data.hasOwnProperty("html")) {
                  var widgetBody = $("#WidgetBody");
                  widgetBody.html(data.html);
                  widgetBody.find("h1").hide();
                  Messages.show(data.messages);
                  BiblioCommons.SDK.updateWidgetDimensions();
                }
              }
            }, "json");
            return false;
          });
        }
      },
      LoginNavWidget: {
        name: "Login/Nav Widget",
        widget_id: null,
        element: null,
        rpc: null,
        divClassName: "bc-login-nav-widget",
        widgetUrl: "/widgets/user_nav",
        trackForResizing: "#userAction",
        getIframeProperties: function() { return {
          allowTransparency: true,
          marginWidth: 0,
          marginHeight: 0,
          frameBorder: 0,
          vspace: 0,
          hspace: 0,
          style: {
            height: "20px",
            width: "100%",
            position: "absolute",
            right: 0
          }
        };},
        widgetAttributes: [
          { name: "expanded", type: "Boolean" },
          { name: "link-color", type: "String" }
        ],
        afterCreate: function(widget) {
          widget.element.style.position = "relative";
          widget.element.style.height = "20px";
          var tempLink = document.createElement("a");
          tempLink = widget.element.appendChild(tempLink);
          var styles = [
            { selector: "body", css: { color: BiblioCommons.util.getStyle(widget.element, "color") } },
            { selector: "a", css: { color: BiblioCommons.util.getStyle(tempLink, "color") } }
          ];
          widget.rpc.setStyles(styles);
          widget.element.removeChild(tempLink);
        },
        widgetSelfInitialization: function(){}
      }
    };
    return BiblioCommons;
  })(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
  BiblioCommons.util.addEventListener(window,"load",BiblioCommons.SDK.init);
  //
  //setTimeout(function() {
  //  BiblioCommons.SDK.init();
  //}, 1000);

  // My Account Widget
  (function MyAccountWidget() {
    var DOMContentLoaded = function(cb) {
      if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
        setTimeout(cb, 0);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', cb, false);
      } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', cb, false);
      }
    }
    DOMContentLoaded(function() {
      var element = document.querySelector('.bc-widget.bc-my-account-nav');
      var MY_ACCOUNT_NAV = 'loadBiblioCommonsMyAccountNav';
      if (element) {
        if (element.getAttribute('data-initialized')) {
          // It's already set to be loaded
          return;
        }

        // Must be HTTPS for our cookies to be picked up
        var url = 'https://' + BiblioCommons.util.getScriptDomain() + '/widgets/my_account_nav_embed.json?callback=' + MY_ACCOUNT_NAV;

        element.setAttribute('data-initialized', true);

        // IF element is on page -- request the JSON data
        // We're using plain JS because we don't know if they have jQuery
        function loadWidget(response) {
          var addCSS = function(source) {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', source);
            document.getElementsByTagName('head')[0].appendChild(link);
          };

          var addJS = function(source) {
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', source);
            document.getElementsByTagName('head')[0].appendChild(script);
          }

          if (response.css) {
            response.css.forEach(addCSS);
          }

          if (response.js) {
            addJS(response.js);
          }

          if (response.html) {
            element.innerHTML = response.html;
          }
        }

        window[MY_ACCOUNT_NAV] = loadWidget;

        var jsonpScript = document.createElement('script');
        jsonpScript.type = 'text/javascript';
        jsonpScript.src = url;

        document.getElementsByTagName('head')[0].appendChild(jsonpScript); 
      }
    });
  })();
};