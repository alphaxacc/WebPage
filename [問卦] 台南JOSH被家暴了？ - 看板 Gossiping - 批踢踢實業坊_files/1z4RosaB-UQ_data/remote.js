(function(g){var window=this;'use strict';var bYa=function(a,b,c){null!=c&&(g.sd(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.ue=b,g.te=c,g.qd(a,g.ue),g.qd(a,g.te))},cYa=function(a,b,c){b=g.Ad(b,c);
null!=b&&(g.sd(a,c,0),a.i.i.push(b?1:0))},dYa=function(a,b){return g.nf(a,b)},eYa=function(a,b){b=b instanceof g.qg?b:g.wg(b,/^data:image\//i.test(b));
a.src=g.rg(b)},gYa=function(a){g.F.call(this,a,-1,fYa)},hYa=function(a){g.F.call(this,a)},kYa=function(){return[1,
iYa,2,jYa]},lYa=function(){return[1,
g.sr,hYa,kYa]},mYa=function(a){g.F.call(this,a)},nYa=function(a){g.F.call(this,a)},pYa=function(){return[1,
g.ur,2,g.ur,3,oYa]},qYa=function(a){g.F.call(this,a)},sYa=function(){return[1,
g.ur,2,g.ur,3,rYa,4,oYa]},uYa=function(){return[1,
g.Ie,nYa,pYa,tYa,2,g.Ie,qYa,sYa,tYa]},yYa=function(){return[1,
vYa,g.Mi,2,wYa,g.Mi,3,xYa,g.Mi]},BYa=function(){return[1,
zYa,g.Li,2,AYa,g.Li,3,g.Ie,gYa,lYa,g.Li]},DYa=function(){return[1,
g.sr,g.Ii,yYa,2,CYa,g.Ji,BYa]},HYa=function(){return[1,
g.ur,5,EYa,2,CYa,mYa,uYa,3,FYa,6,GYa,4,g.sr,g.Hi,DYa]},W6=function(a){g.ul(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ua()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Il(a.j,b,c)},IYa=function(a){if(a===g.Mo)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},JYa=function(a){if(a instanceof g.Ko)return a;
if("function"==typeof a.Og)return a.Og(!1);if(g.Na(a)){var b=0,c=new g.Ko;c.next=function(){for(;;){if(b>=a.length)return g.g2;if(b in a)return g.Lo(a[b++]);b++}};
var d=c.next;c.Lj=function(){return g.No(d.call(c))};
return c}throw Error("Not implemented");},KYa=function(a,b,c){if(g.Na(a))try{g.vc(a,b,c)}catch(e){IYa(e)}else for(a=JYa(a);;){var d=void 0;
try{d=a.Lj()}catch(e){if(e===g.Mo)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){IYa(e)}}},LYa=function(a,b){var c=[];
KYa(b,function(d){try{var e=g.br.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Sga(e)&&c.push(d)},a);
return c},MYa=function(a,b){LYa(a,b).forEach(function(c){g.br.prototype.remove.call(this,c)},a)},NYa=function(a){if(a.ea){if(a.ea.locationOverrideToken)return{locationOverrideToken:a.ea.locationOverrideToken};
if(null!=a.ea.latitudeE7&&null!=a.ea.longitudeE7)return{latitudeE7:a.ea.latitudeE7,longitudeE7:a.ea.longitudeE7}}return null},OYa=function(a,b){g.bc(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},PYa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return PYa(a)},QYa=function(a,b,c,d){var e=new g.ml(null,void 0);
a&&g.nl(e,a);b&&g.ol(e,b);c&&g.pl(e,c);d&&(e.J=d);return e},$6=function(a,b){g.eu[a]=!0;
var c=g.cu();c&&c.publish.apply(c,arguments);g.eu[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Kq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",RYa(this,a.capabilities||""),SYa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},RYa=function(a,b){a.capabilities.clear();
g.Ro(b.split(","),g.Ta(dYa,TYa)).forEach(function(c){a.capabilities.add(c)})},SYa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},UYa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},VYa=function(a){return new b7(a)},WYa=function(a){return Array.isArray(a)?g.En(a,VYa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.En(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},XYa=function(a){return g.En(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Xb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Xb(a,function(c){return c7(c,b)})},YYa=function(){var a=(0,g.Gx)();
a&&MYa(a,a.i.Og(!0))},i7=function(){var a=g.Jx("yt-remote-connected-devices")||[];
g.sc(a);return a},ZYa=function(a){if(g.cc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.En(a,function(d,e){return 0==e?d:d.substring(c.length)})},$Ya=function(a){g.Ix("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.Jx("yt-remote-device-id");a||(a=f7(),g.Ix("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.bc(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.bc(a,b);g.Lx()&&g.uc(a,b);a=ZYa(a);if(g.cc(a))try{g.uka("remote_sid")}catch(c){}else try{g.gt("remote_sid",a.join(","),-1)}catch(c){}},aZa=function(){return g.Jx("yt-remote-session-browser-channel")},bZa=function(){return g.Jx("yt-remote-local-screens")||[]},cZa=function(){g.Ix("yt-remote-lounge-token-expiration",!0,86400)},dZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.En(bZa(),function(d){return d.loungeToken}),c=g.En(a,function(d){return d.loungeToken});
g.Fn(c,function(d){return!g.bc(b,d)})&&cZa();
g.Ix("yt-remote-local-screens",a,31536E3)},eZa=function(a,b){g.Ix("yt-remote-session-browser-channel",a);
g.Ix("yt-remote-session-screen-id",b);a=i7();b=k7();g.bc(a,b)||a.push(b);$Ya(a);l7()},m7=function(a){a||(g.Kx("yt-remote-session-screen-id"),g.Kx("yt-remote-session-video-id"));
l7();a=i7();g.fc(a,k7());$Ya(a)},fZa=function(){if(!n7){var a=g.kr();
a&&(n7=new g.Zq(a))}},gZa=function(){fZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},hZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},iZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?jZa(a.shift(),function(){p7(a)}):q7()},kZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},jZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Gk(d,g.Pq(a));(document.head||document.documentElement).appendChild(d)},lZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=iZa();
a&&a(!1,"No cast extension found")},r7=function(){if(mZa){var a=2,b=iZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;jZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},nZa=function(){r7();
var a=lZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},pZa=function(){r7();
var a=lZa();a.push.apply(a,g.v(oZa.map(kZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},qZa=function(){this.i=s7();
this.i.Qy("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},rZa=function(){this.i=s7();
this.i.Qy("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},sZa=function(){this.i=s7();
this.i.Qy("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.H.call(this);
this.I=null!=c?(0,g.Sa)(a,c):a;this.Yf=b;this.C=(0,g.Sa)(this.AR,this);this.i=!1;this.j=0;this.u=this.Pb=null;this.B=[]},u7=function(a,b,c){g.H.call(this);
this.B=null!=c?a.bind(c):a;this.Yf=b;this.u=null;this.i=!1;this.j=0;this.Pb=null},v7=function(a){a.Pb=g.zi(function(){a.Pb=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Yf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new tZa(y7,a))},tZa=function(a,b){g.Se.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Jl(this);this.I=new g.yi;this.I.setInterval(250)},vZa=function(a,b,c){a.ou=1;
a.zn=W6(b.clone());a.Lq=c;a.C=!0;uZa(a,null)},B7=function(a,b,c,d,e){a.ou=1;
a.zn=W6(b.clone());a.Lq=null;a.C=c;e&&(a.NO=!1);uZa(a,d)},uZa=function(a,b){a.Rt=Date.now();
C7(a);a.Vo=a.zn.clone();X6(a.Vo,"t",a.J);a.fC=0;a.Of=a.i.jE(a.i.Sx()?b:null);0<a.WC&&(a.qB=new u7((0,g.Sa)(a.NP,a,a.Of),a.WC));a.B.Pa(a.Of,"readystatechange",a.BR);b=a.rp?g.uf(a.rp):{};a.Lq?(a.cC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Of.send(a.Vo,a.cC,a.Lq,b)):(a.cC="GET",a.NO&&!g.We&&(b.Connection="close"),a.Of.send(a.Vo,a.cC,null,b));a.i.Mj(1)},xZa=function(a,b){var c=a.fC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return wZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.fC=d+c;return b},zZa=function(a,b){a.Rt=Date.now();
C7(a);var c=b?window.location.hostname:"";a.Vo=a.zn.clone();g.ul(a.Vo,"DOMAIN",c);g.ul(a.Vo,"t",a.J);try{a.bk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.hn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in yZa)f=G7[f]=yZa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Lg(g.ig("b/12014412"),d);a.bk.open();a.bk.write(g.Hg(c));a.bk.close();a.bk.parentWindow.m=(0,g.Sa)(a.LX,a);a.bk.parentWindow.d=(0,g.Sa)(a.WN,a,!0);a.bk.parentWindow.rpcClose=(0,g.Sa)(a.WN,a,!1);c=a.bk.createElement("DIV");a.bk.parentWindow.document.body.appendChild(c);d=g.vg(a.Vo.toString());d=g.fh(g.rg(d));d=g.Lg(g.ig("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Ng(c,d);a.i.Mj(1)},C7=function(a){a.hI=Date.now()+
a.j;
AZa(a,a.j)},AZa=function(a,b){if(null!=a.Fu)throw Error("WatchDog timer not null");
a.Fu=x7((0,g.Sa)(a.TX,a),b)},H7=function(a){a.Fu&&(g.C.clearTimeout(a.Fu),a.Fu=null)},F7=function(a){a.i.yf()||a.Lp||a.i.Ky(a)},E7=function(a){H7(a);
g.Pe(a.qB);a.qB=null;a.I.stop();g.Ll(a.B);if(a.Of){var b=a.Of;a.Of=null;b.abort();b.dispose()}a.bk&&(a.bk=null)},I7=function(a,b){try{a.i.PN(a,b),a.i.Mj(4)}catch(c){}},CZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;BZa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){CZa(a,b,c,d,f)},f)})}},BZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
eYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},DZa=function(a){this.i=a;
this.j=new w7},EZa=function(a){var b=K7(a.i,a.zv,"/mail/images/cleardot.gif");
W6(b);CZa(b.toString(),5E3,(0,g.Sa)(a.qS,a),3,2E3);a.Mj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.rh=new A7(a,void 0,void 0,void 0),a.rh.rp=a.XC,b=a.i,b=K7(b,b.Sx()?a.bv:null,a.YC),z7(5),!g.Lc||g.Ec(10))X6(b,"TYPE","xmlhttp"),B7(a.rh,b,!1,a.bv,!1);else{X6(b,"TYPE","html");var c=a.rh;a=!!a.bv;c.ou=3;c.zn=W6(b.clone());zZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},FZa=function(a,b){this.i=a;
this.map=b;this.context=null},GZa=function(a,b,c,d){g.Se.call(this,"timingevent",a);
this.size=b;this.Ix=d},HZa=function(a){g.Se.call(this,"serverreachability",a)},KZa=function(a){IZa(a);
if(3==a.i){var b=a.Uw++,c=a.Bz.clone();g.ul(c,"SID",a.u);g.ul(c,"RID",b);g.ul(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.ou=2;b.zn=W6(c.clone());eYa(new Image,b.zn.toString());b.Rt=Date.now();C7(b)}JZa(a)},LZa=function(a){a.VS(1,0);
a.Bz=K7(a,null,a.ZC);P7(a)},IZa=function(a){a.Dn&&(a.Dn.abort(),a.Dn=null);
a.Pe&&(a.Pe.cancel(),a.Pe=null);a.Sl&&(g.C.clearTimeout(a.Sl),a.Sl=null);Q7(a);a.Zg&&(a.Zg.cancel(),a.Zg=null);a.Nn&&(g.C.clearTimeout(a.Nn),a.Nn=null)},MZa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new FZa(a.MU++,b));2!=a.i&&3!=a.i||P7(a)},NZa=function(a){var b=0;
a.Pe&&b++;a.Zg&&b++;return b},P7=function(a){a.Zg||a.Nn||(a.Nn=x7((0,g.Sa)(a.UN,a),0),a.Ls=0)},PZa=function(a,b){if(1==a.i){if(!b){a.Uw=Math.floor(1E5*Math.random());
b=a.Uw++;var c=new A7(a,"",b,void 0);c.rp=a.xk;var d=R7(a),e=a.Bz.clone();g.ul(e,"RID",b);g.ul(e,"CVER","1");O7(a,e);vZa(c,e,d);a.Zg=c;a.i=2}}else 3==a.i&&(b?OZa(a,b):0==a.j.length||a.Zg||OZa(a))},OZa=function(a,b){if(b)if(6<a.Mp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.Uw-1;b=R7(a)}else c=b.N,b=b.Lq;else c=a.Uw++,b=R7(a);var d=a.Bz.clone();g.ul(d,"SID",a.u);g.ul(d,"RID",c);g.ul(d,"AID",a.ut);O7(a,d);c=new A7(a,a.u,c,a.Ls+1);c.rp=a.xk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Zg=c;vZa(c,d,b)},O7=function(a,b){a.Pf&&(a=a.Pf.pL())&&g.bf(a,function(c,d){g.ul(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Mp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={zr:e.zr},f++){e.zr=a.j[f].i;var h=a.j[f].map;e.zr=6>=a.Mp?f:e.zr-d;try{g.bf(h,function(l){return function(m,n){c.push("req"+l.zr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.zr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},QZa=function(a){a.Pe||a.Sl||(a.J=1,a.Sl=x7((0,g.Sa)(a.TN,a),0),a.qs=0)},S7=function(a){if(a.Pe||a.Sl||3<=a.qs)return!1;
a.J++;a.Sl=x7((0,g.Sa)(a.TN,a),RZa(a,a.qs));a.qs++;return!0},L7=function(a,b,c){a.aC=c;
a.yk=b.Il;a.I||LZa(a)},Q7=function(a){null!=a.Up&&(g.C.clearTimeout(a.Up),a.Up=null)},RZa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Pf&&(c=null);var d=(0,g.Sa)(a.ZY,a);c||(c=new g.ml("//www.google.com/images/cleardot.gif"),W6(c));BZa(c.toString(),1E4,d)}else z7(2);SZa(a,b)},SZa=function(a,b){a.i=0;
a.Pf&&a.Pf.EK(b);JZa(a);IZa(a)},JZa=function(a){a.i=0;
a.yk=-1;if(a.Pf)if(0==a.B.length&&0==a.j.length)a.Pf.TD();else{var b=g.ic(a.B),c=g.ic(a.j);a.B.length=0;a.j.length=0;a.Pf.TD(b,c)}},K7=function(a,b,c){var d=g.vl(c);
if(""!=d.i)b&&g.ol(d,b+"."+d.i),g.pl(d,d.u);else{var e=window.location;d=QYa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Tv&&g.bf(a.Tv,function(f,h){g.ul(d,h,f)});
g.ul(d,"VER",a.Mp);O7(a,d);return d},TZa=function(){},UZa=function(){this.i=[];
this.j=[]},VZa=function(){},s7=function(){if(!U7){U7=new g.Bi(new VZa);
var a=g.ys("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},WZa=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.H.call(this);
this.i=new g.K(this.CX,0,this);g.J(this,this.i);this.Yf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Sa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Sa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.u=new g.Yq;this.j=new V7(this.AY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.ya=c;this.ea=d;this.Ha=e;this.xa=new qZa;this.Ia=new rZa;this.La=new sZa},XZa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.aC,sessionId:a.i.u,arrayId:a.i.ut}},YZa=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&PZa(a.i),KZa(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.ea(),c=a.i.xk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.xk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.nj(4,a))||"";b&&(this.port=":"+b);this.domain=g.oj(a)||"";a=g.zb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.zj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.B,d,!0),onError:g.Ta(a.u,e),onTimeout:g.Ta(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ys(b,a)},b_a=function(){var a=ZZa;
$Za();b8.push(a);a_a()},c8=function(a,b){$Za();
var c=c_a(a,String(b));g.cc(b8)?d_a(c):(a_a(),g.vc(b8,function(d){d(c)}))},$Za=function(){b8||(b8=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",b8,void 0))},d_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},a_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.vc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},c_a=function(a,b){var c=(Date.now()-e_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Sw.call(this);
this.I=a;this.screens=[]},f_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},g_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ro(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=f_a(a,b[d])||c;return c},h_a=function(a,b){var c=a.screens.length;
a.screens=g.Ro(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Sw.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Pb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},i_a=function(a){if(a.screens.length){var b=g.En(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Sa)(a.AT,a),(0,g.Sa)(a.zT,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return g_a(a,[]);
var b=WYa(bZa());b=g.Ro(b,function(c){return!c.uuid});
return g_a(a,b)},k8=function(a,b){dZa(g.En(a.screens,UYa));
b&&cZa()},m8=function(a,b){g.Sw.call(this);
this.I=b;b=(b=g.Jx("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.bc(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.ej(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Sa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Sa)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.lf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.ej(a.i)),a.i=b,a.Z("screenChange"));j_a(a)},p8=function(a){isNaN(a.u)||g.Us(a.u);
a.u=g.Ss((0,g.Sa)(a.YG,a),0<a.B&&a.B<g.Ua()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},k_a=function(a){var b={};
g.vc(a.I(),function(c){c.token?b[c.token]=c.id:this.ue("Requesting availability of screen w/o lounge token.")});
return b},j_a=function(a){a=g.lf(g.cf(a.i,function(b){return b}));
g.sc(a);a.length?g.Ix("yt-remote-online-screen-ids",a.join(","),60):g.Kx("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};l_a(this)},n_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Ih(),l=c?h7(h,c):null;c&&(a.J||l)||(l=h7(h,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?m_a(a,c,(0,g.Sa)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},o_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},p_a=function(a,b,c){n8(a.i,b,c)},m_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ys($7(a.B,"/pairing/get_lounge_token_batch"),e)},q_a=function(a){a.screens=a.j.Ih();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},l_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Sa)(a.JT,a));q_a(a);a.J||(a.u=WYa(g.Jx("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Sa)(a.Ih,a,!0));a.i.subscribe("screenChange",(0,g.Sa)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||r_a(a));s8(a);a.C[b.uuid]=b.id;g.Ix("yt-remote-device-id-map",a.C,31536E3);return b},r_a=function(a){a=g.Ro(a.u,function(b){return"shortLived"!=b.idType});
g.Ix("yt-remote-automatic-screen-cache",g.En(a,UYa))},s8=function(a){a.C=g.Jx("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Sw.call(this);
this.ya=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},s_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.ea=(0,g.Sa)(this.GR,this);this.xa=(0,g.Sa)(this.XX,this);this.Y=g.Ss(function(){t_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.va=!1;this.W="unknown"},x8=function(a,b){g.Us(a.J);
a.J=0;0==b?u_a(a):a.J=g.Ss(function(){u_a(a)},b)},u_a=function(a){v_a(a,"getLoungeToken");
g.Us(a.C);a.C=g.Ss(function(){w_a(a,null)},3E4)},v_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ej(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ka,(0,g.Sa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.ej(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.DL(b,function(c){u8(a,c)},function(){return a.Ag()},5)):a.Ag(Error("Waiting for session status timed out."))},y_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);x_a(a,d,function(e){e?(a.va=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.Cs(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Ag())},5)},t_a=function(a,b){g.Us(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?y_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Cs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.Cs(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Ag(Error("Waiting for session status timed out."))},w_a=function(a,b){g.Us(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(s_a(a,b.loungeToken),a.va=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},x_a=function(a,b,c,d){g.Us(a.I);
a.I=0;p_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Ss(function(){x_a(a,b,c,d-1)},300)})},z_a=function(a){g.Us(a.N);
a.N=0;g.Us(a.I);a.I=0;g.Us(a.Y);a.Y=0;g.Us(a.C);a.C=0;g.Us(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.xa="";this.La=c;this.Ia=null;this.Y=g.Ka;this.W=NaN;this.Ha=(0,g.Sa)(this.HR,this);this.C=g.Ka;this.J=this.I=0;this.ea=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},A_a=function(a){a.C=a.u.rJ(a.xa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=g.Ka;
a.ea=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=g.Ka;
a.Ag(b)})},B_a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.La;gZa()&&(b.env_useStageMdx=1);return g.xj(b)},C8=function(a){return new Promise(function(b){a.xa=f7();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,B_a(a));b(c);A_a(a)}else a.Y=function(){g.Us(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,B_a(a));b(d);A_a(a)},a.W=g.Ss(function(){a.Y()},100)})},D_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){C_a(a,d,function(f){f?(a.ea=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.Cs(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},E_a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){n_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},C_a=function(a,b,c,d){g.Us(a.I);
a.I=0;p_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Ss(function(){C_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Us(a.J),a.J=0,0==b?F_a(a):a.J=g.Ss(function(){F_a(a)},b))},F_a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ea=!1,a.va="unknown",s_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},G_a=function(a){g.Us(a.I);
a.I=0;g.Us(a.J);a.J=0;a.C();a.C=function(){};
g.Us(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Ss((0,g.Sa)(this.vt,this,null),150)},E8=function(a,b){g.Sw.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Sa)(this.QW,this)},H_a=function(a,b){return b?g.Xb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},ZZa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.Pe(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Sa)(a.SN,a,b)),b.subscribe("sessionFailed",function(){return I_a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.vt(null)):a.Z("yt-remote-cast2-session-change",null))},I_a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},J_a=function(a){var b=a.j.qJ(),c=a.i&&a.i.i;
a=g.En(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=H_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},O_a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):K_a()?L_a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?M_a(a,c):(window.__onGCastApiAvailable=function(e,f){e?M_a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Kx("yt-remote-cast-available"),g.Kx("yt-remote-cast-receiver"),
N_a(),c(!1))},d.loadCastApiSetupScript?g.Mx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&nZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?pZa():(r7(),p7(oZa.map(kZa))))):I8("Cannot initialize because not running Chrome")},N_a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);P_a(!1);g.hu(N8);N8.length=0},O8=function(){return!!g.Jx("yt-remote-cast-installed")},Q_a=function(){var a=g.Jx("yt-remote-cast-receiver");
return a?a.friendlyName:null},R_a=function(){I8("clearCurrentReceiver");
g.Kx("yt-remote-cast-receiver")},S_a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.gu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},K_a=function(){var a=0<=g.zb().search(/ (CrMo|Chrome|CriOS)\//);
return g.tz||a},T_a=function(a,b){M8().init(a,b)},L_a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Ix("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Ix("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Ix("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.Kx("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},M_a=function(a,b){L8(!0);
J8(!1);T_a(a,function(c){c?(P_a(!0),g.iu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Kx("yt-remote-cast-available"),g.Kx("yt-remote-cast-receiver"),N_a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Ix("yt-remote-cast-installed",a)},P8=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},P_a=function(a){I8("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Xk=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Xk=!1;a.hasNext=!1;a.J=0;a.I=g.Ua();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Hc()?(g.Ua()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Ua()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ua()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.vf(a.trackData);b.hasPrevious=a.Xk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.Sw.call(this);
this.u=0;this.B=a;this.I=[];this.C=new UZa;this.j=this.i=null;this.W=(0,g.Sa)(this.wV,this);this.J=(0,g.Sa)(this.gx,this);this.N=(0,g.Sa)(this.vV,this);this.Y=(0,g.Sa)(this.EV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.pH,this),U_a(this))):c=3;0!=c&&(b?this.pH(c):g.Ss((0,g.Sa)(function(){this.pH(c)},this),0));
(a=S_a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},U_a=function(a){g.vc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Ta(this.OW,b),this))},a)},V_a=function(a){g.vc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){V_a(a);
a.B.setPlayerContextData(Y8(b));U_a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.gx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.gx(a.j.media[0]))},W_a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Sa)(function(d){this.ue("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ue("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.Sw.call(this);var e=this;this.C=NaN;this.va=!1;this.N=this.J=this.Y=this.ea=NaN;this.W=[];this.B=this.I=this.u=this.xc=this.i=null;this.Ha=a;this.ya=d;this.W.push(g.Nt(window,"beforeunload",function(){e.Hs(2)}));
this.j=[];this.xc=new S8;this.Ia=b.id;this.xa=b.idType;this.i=X_a(this,c);this.i.subscribe("handlerOpened",this.AV,this);this.i.subscribe("handlerClosed",this.xV,this);this.i.subscribe("handlerError",this.yV,this);this.i.subscribe("handlerMessage",this.zV,this);this.i.CB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.xc.videoId;g.Lx()&&g.Ix("yt-remote-session-video-id",f)},this)},Y_a=function(a){return g.Xb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},X_a=function(a,b){return new W7($7(a.Ha,"/bc"),b,!1,function(){return a.vJ()},"shortLived"==a.xa)},j9=function(a,b){a.Z("proxyStateChange",b)},Z_a=function(a){a.C=g.Ss(function(){i9("Connecting timeout");
a.Hs(1)},2E4)},k9=function(a){g.Us(a.C);
a.C=NaN},l9=function(a){g.Us(a.ea);
a.ea=NaN},$_a=function(a){m9(a);
a.Y=g.Ss(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Us(a.Y);
a.Y=NaN},b0a=function(a,b){var c=null;
if(b){var d=Y_a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ha("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.CL()&&a.xc.reset(),j9(a,1),n9(a,"getNowPlaying"),a0a(a)):a.Hs(1)},c0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.xc.videoId&&(g.qf(b.params)?a.xc.trackData=null:a.xc.trackData=b.params,a.Z("remotePlayerChange"))},d0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.xc.listId=b.params.listId||a.xc.listId;X8(a.xc,d,e);a.Z("remoteQueueChange",c)},f0a=function(a,b){b.params=b.params||{};
d0a(a,b,"NOW_PLAYING_MAY_CHANGE");e0a(a,b);a.Z("autoplayDismissed")},e0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.xc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.xc.playerState&&(c=-1E3);a.xc.playerState=c;c=Number(b.params.loadedTime);a.xc.N=isNaN(c)?0:c;a.xc.Vj(Number(b.params.duration));c=a.xc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.xc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.xc.playerState?$_a(a):m9(a);a.Z("remotePlayerChange")},g0a=function(a,b){if(-1E3!=a.xc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.xc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.xc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},h0a=function(a,b){var c="true"==b.params.muted;
a.xc.volume=parseInt(b.params.volume,10);a.xc.muted=c;a.Z("remotePlayerChange")},i0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},j0a=function(a,b){var c="true"==b.params.hasNext;
a.xc.Xk="true"==b.params.hasPrevious;a.xc.hasNext=c;a.Z("previousNextChange")},a0a=function(a){g.Us(a.N);
a.N=g.Ss(function(){a.Hs(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.ej(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.We=a;this.i=[];this.i.push(this.We.$_s("screenChange",(0,g.Sa)(this.LR,this)));this.i.push(this.We.$_s("onlineScreenChange",(0,g.Sa)(this.uW,this)))},n0a=function(a,b){fZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;YYa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),gZa()&&(p9.i="/api/loungedev"));q9||(q9=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",q9,void 0));k0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ha("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);O_a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.ej(b)),u9.push(g.gu("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.gu("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.gu("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.gu("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.gu("yt-remote-cast2-session-change",l0a)),u9.push(g.gu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),R_a())})),u9.push(g.gu("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.ej(a)),a?(g.Ix("yt-remote-session-app",a.app),g.Ix("yt-remote-session-name",a.name)):(g.Kx("yt-remote-session-app"),g.Kx("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||m0a())}},o0a=function(){var a=r9().We.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return XYa(a)},A9=function(){var a=p0a();
!a&&O8()&&Q_a()&&(a={key:"cast-selector-receiver",name:Q_a()});return a},p0a=function(){var a=o0a(),b=y9();
b||(b=w9());return g.Xb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Ih();return h7(b,a)},l0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.CB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ia("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},q0a=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},r0a=function(){return g.Ia("yt.mdx.remote.connectData_")},v9=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ia("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||q0a("");g.Ha("yt.mdx.remote.connection_",a,void 0);q9&&(g.vc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.Lx();
if(!a)return null;var b=r9();if(!b)return null;b=b.Ih();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{q0a(a.id);var c=g.Ia("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,r0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},m0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),R_a(),t9("Skipping connecting because no session screen found."))},k0a=function(){var a=x9();
if(g.qf(a)){a=k7();var b=g.Jx("yt-remote-session-name")||"",c=g.Jx("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.H.call(this);
var d=this;this.j=a;this.G=b;this.Wb=c;this.events=new g.lC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){s0a(d,e)});
this.C=!1;this.I=new g.JI(64);this.i=new g.K(this.ZO,500,this);this.u=new g.K(this.aP,1E3,this);this.N=new t7(this.sZ,0,this);this.B={};this.W=new g.K(this.FP,1E3,this);this.J=new u7(this.seekTo,1E3,this);this.ea=g.Ka;g.J(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.fW);this.events.S(b,"captionschanged",this.tV);this.events.S(b,"captionssettingschanged",this.fP);this.events.S(b,"videoplayerreset",this.VA);this.events.S(b,"mdxautoplaycancel",function(){d.Wb.YK()});
a=this.Wb;a.isDisposed();a.subscribe("proxyStateChange",this.ON,this);a.subscribe("remotePlayerChange",this.kx,this);a.subscribe("remoteQueueChange",this.VA,this);a.subscribe("previousNextChange",this.LN,this);a.subscribe("nowAutoplaying",this.FN,this);a.subscribe("autoplayDismissed",this.iN,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.N);g.J(this,this.W);g.J(this,this.J);this.fP();this.VA();this.kx()},s0a=function(a,b){if(J9(a)){a.Wb.unsubscribe("remotePlayerChange",a.kx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Wb);if(c!==d.volume||b!==d.muted)a.Wb.setVolume(c,b),a.W.start();a.Wb.subscribe("remotePlayerChange",a.kx,a)}},t0a=function(a){a.Rb(0);
a.i.stop();a.Xb(new g.JI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.xf(c,b));a.Wb.uJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Wb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Wb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,NYa(c));a.Xb(new g.JI(1))},u0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{ZL:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Wb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",qa:"\u4f60\u5df2\u767b\u51fa\u5e33\u6236"},{D:"div",K:"ytp-mdx-popup-description",qa:"\u4f60\u89c0\u770b\u7684\u5f71\u7247\u53ef\u80fd\u6703\u65b0\u589e\u81f3\u96fb\u8996\u7684\u89c0\u770b\u8a18\u9304\uff0c\u4e26\u5f71\u97ff\u7cfb\u7d71\u5728\u96fb\u8996\u4e0a\u63a8\u85a6\u7684\u5167\u5bb9\u3002\u5982\u8981\u907f\u514d\u9019\u7a2e\u60c5\u6cc1\uff0c\u8acb\u6309\u4e00\u4e0b [\u53d6\u6d88] \u4e26\u5728\u96fb\u8166\u4e0a\u767b\u5165 YouTube\u3002"},
{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"\u53d6\u6d88"},{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-confirm"],qa:"\u78ba\u8a8d"}]}]}]});this.i=new g.JK(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",this.u)},N9=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.ZJ()]},{D:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.i=new g.JK(this,250);g.J(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);v0a(this,a.zb())},v0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.dH("\u300c$RECEIVER_NAME\u300d\u767c\u751f\u932f\u8aa4",c):b.Hc()||g.U(b,4)?g.dH("\u6b63\u5728\u300c$RECEIVER_NAME\u300d\u4e0a\u64ad\u653e",c):g.dH("\u5df2\u9023\u7dda\u81f3\u300c$RECEIVER_NAME\u300d",c);a.Ma("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.qP.call(this,"\u64ad\u653e\u87a2\u5e55\uff1a",0,a,b);
this.G=a;this.So={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.qM.call(this,a);
this.il={key:f7(),name:"\u9019\u53f0\u96fb\u8166"};this.gi=null;this.subscriptions=[];this.KG=this.Wb=null;this.So=[this.il];this.Fn=this.il;this.Gd=new g.JI(64);this.xM=0;this.Bf=-1;this.vx=!1;this.sx=this.Mt=null;if(!g.XD(this.player.T())&&!g.YD(this.player.T())){a=this.player;var b=g.TL(a);b&&(b=b.Wn())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.cM(a,b.element,4);this.Mt=new M9;g.J(this,this.Mt);g.cM(a,this.Mt.element,4);this.vx=!!w9()}},Q9=function(a){a.sx&&(a.player.removeEventListener("presentingplayerstatechange",
a.sx),a.sx=null)},w0a=function(a,b,c){a.Gd=c;
a.player.Z("presentingplayerstatechange",new g.MG(c,b))},R9=function(a,b){if(b.key!==a.Fn.key)if(b.key===a.il.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.vx||!a.Mt);(c?0:g.mE(a.player.T())||g.pE(a.player.T()))&&x0a(a);a.Fn=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.YD(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.kM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=NYa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.ej(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Ih(),(b=h7(a,b.key))&&D9(b,1))}}},x0a=function(a){a.player.zb().Hc()?a.player.pauseVideo():(a.sx=function(b){!a.vx&&g.OG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.sx));
a.Mt&&a.Mt.hd();z9()||(H9=!0)};
g.Yc.prototype.C=g.da(0,function(){var a=g.bd(this);return 4294967296*g.bd(this)+(a>>>0)});
var iYa=g.se(function(a,b,c){if(1!==a.j)return!1;g.D(b,c,g.id(a));return!0},g.ve),AYa=g.se(function(a,b,c,d){if(1!==a.j)return!1;
g.Hd(b,c,d,g.id(a));return!0},g.ve),jYa=g.se(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.Zc(a.i));return!0},g.we),zYa=g.se(function(a,b,c,d){if(0!==a.j)return!1;
g.Hd(b,c,d,g.Zc(a.i));return!0},g.we),rYa=g.se(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.ad(a.i));return!0},g.xe),wYa=g.se(function(a,b,c,d){if(0!==a.j)return!1;
g.Hd(b,c,d,g.ad(a.i));return!0},g.xe),EYa=g.se(function(a,b,c){if(1!==a.j)return!1;
g.D(b,c,a.i.C());return!0},function(a,b,c){bYa(a,c,g.Ad(b,c))}),GYa=g.se(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Cd(b,c);if(2==a.j){c=g.Yc.prototype.C;var d=g.ad(a.i);for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Cd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)bYa(a,c,b[d])}),oYa=g.se(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,!!g.ad(a.i));return!0},cYa),xYa=g.se(function(a,b,c,d){if(0!==a.j)return!1;
g.Hd(b,c,d,!!g.ad(a.i));return!0},cYa),FYa=g.se(function(a,b,c){if(2!==a.j)return!1;
a=g.kd(a);g.Cd(b,c).push(a);return!0},function(a,b,c){b=g.Cd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.vd(a,c,g.fb(e))}}),vYa=g.se(function(a,b,c,d){if(2!==a.j)return!1;
g.Hd(b,c,d,g.kd(a));return!0},g.ye),CYa=g.se(function(a,b,c,d,e){if(2!==a.j)return!1;
g.hd(a,g.Id(b,d,c),e);return!0},g.ze),fYa=[1];
g.w(gYa,g.F);g.w(hYa,g.F);g.w(mYa,g.F);g.w(nYa,g.F);var tYa=[1,2];g.w(qYa,g.F);var yZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},TYa={O_:"atp",fca:"ska",Kaa:"que",y9:"mus",eca:"sus",k5:"dsp",kba:"seq",b9:"mic",h4:"dpa",f0:"cds",w9:"mlm",e4:"dsdtr",e$:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",mZa=hZa("loadCastFramework")||hZa("loadCastApplicationFramework"),oZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(t7,g.H);g.k=t7.prototype;g.k.zR=function(a){this.B=arguments;this.i=!1;this.Pb?this.u=g.Ua()+this.Yf:this.Pb=g.zi(this.C,this.Yf)};
g.k.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.j};
g.k.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.k.ra=function(){this.stop();t7.re.ra.call(this)};
g.k.AR=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u?(this.Pb=g.zi(this.C,this.u-g.Ua()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.w(u7,g.H);g.k=u7.prototype;g.k.pJ=function(a){this.u=arguments;this.Pb||this.j?this.i=!0:v7(this)};
g.k.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.j++};
g.k.resume=function(){this.j--;this.j||!this.i||this.Pb||(this.i=!1,v7(this))};
g.k.ra=function(){g.H.prototype.ra.call(this);this.stop()};w7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var y7=new g.Qf;g.w(tZa,g.Se);g.k=A7.prototype;g.k.rp=null;g.k.Wm=!1;g.k.Fu=null;g.k.hI=null;g.k.Rt=null;g.k.ou=null;g.k.zn=null;g.k.Vo=null;g.k.Lq=null;g.k.Of=null;g.k.fC=0;g.k.bk=null;g.k.cC=null;g.k.hn=null;g.k.Zu=-1;g.k.NO=!0;g.k.Lp=!1;g.k.WC=0;g.k.qB=null;var wZa={},D7={};g.k=A7.prototype;g.k.setTimeout=function(a){this.j=a};
g.k.BR=function(a){a=a.target;var b=this.qB;b&&3==g.Mj(a)?b.pJ():this.NP(a)};
g.k.NP=function(a){try{if(a==this.Of)a:{var b=g.Mj(this.Of),c=this.Of.j,d=this.Of.getStatus();if(g.Lc&&!g.Ec(10)||g.We&&!g.Dc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Rj(this.Of))break a;this.Lp||4!=b||7==c||(8==c||0>=d?this.i.Mj(3):this.i.Mj(2));H7(this);var e=this.Of.getStatus();this.Zu=e;var f=g.Rj(this.Of);if(this.Wm=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Lp&&this.fC<f.length;){var h=xZa(this,f);if(h==D7){4==b&&(this.hn=4,z7(15),a=!1);break}else if(h==wZa){this.hn=4;z7(16);a=!1;
break}else I7(this,h)}4==b&&0==f.length&&(this.hn=1,z7(17),a=!1);this.Wm=this.Wm&&a;a||(E7(this),F7(this))}else I7(this,f);this.Wm&&!this.Lp&&(4==b?this.i.Ky(this):(this.Wm=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.hn=3,z7(13)):(this.hn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Of&&g.Rj(this.Of)}finally{}};
g.k.LX=function(a){x7((0,g.Sa)(this.KX,this,a),0)};
g.k.KX=function(a){this.Lp||(H7(this),I7(this,a),C7(this))};
g.k.WN=function(a){x7((0,g.Sa)(this.JX,this,a),0)};
g.k.JX=function(a){this.Lp||(E7(this),this.Wm=a,this.i.Ky(this),this.i.Mj(4))};
g.k.cancel=function(){this.Lp=!0;E7(this)};
g.k.TX=function(){this.Fu=null;var a=Date.now();0<=a-this.hI?(2!=this.ou&&this.i.Mj(3),E7(this),this.hn=2,z7(18),F7(this)):AZa(this,this.hI-a)};
g.k.getLastError=function(){return this.hn};g.k=DZa.prototype;g.k.XC=null;g.k.rh=null;g.k.rB=!1;g.k.bP=null;g.k.Az=null;g.k.FF=null;g.k.YC=null;g.k.Zh=null;g.k.Il=-1;g.k.bv=null;g.k.zv=null;g.k.connect=function(a){this.YC=a;a=K7(this.i,null,this.YC);z7(3);this.bP=Date.now();var b=this.i.N;null!=b?(this.bv=b[0],(this.zv=b[1])?(this.Zh=1,EZa(this)):(this.Zh=2,M7(this))):(X6(a,"MODE","init"),this.rh=new A7(this,void 0,void 0,void 0),this.rh.rp=this.XC,B7(this.rh,a,!1,null,!0),this.Zh=0)};
g.k.qS=function(a){if(a)this.Zh=2,M7(this);else{z7(4);var b=this.i;b.yk=b.Dn.Il;T7(b,9)}a&&this.Mj(2)};
g.k.jE=function(a){return this.i.jE(a)};
g.k.abort=function(){this.rh&&(this.rh.cancel(),this.rh=null);this.Il=-1};
g.k.yf=function(){return!1};
g.k.PN=function(a,b){this.Il=a.Zu;if(0==this.Zh)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.yk=this.Il;T7(a,2);return}this.bv=c[0];this.zv=c[1]}else a=this.i,a.yk=this.Il,T7(a,2);else if(2==this.Zh)if(this.rB)z7(7),this.FF=Date.now();else if("11111"==b){if(z7(6),this.rB=!0,this.Az=Date.now(),a=this.Az-this.bP,!g.Lc||g.Ec(10)||500>a)this.Il=200,this.rh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.Az=this.FF=Date.now(),this.rB=!1};
g.k.Ky=function(){this.Il=this.rh.Zu;if(this.rh.Wm)0==this.Zh?this.zv?(this.Zh=1,EZa(this)):(this.Zh=2,M7(this)):2==this.Zh&&((!g.Lc||g.Ec(10)?!this.rB:200>this.FF-this.Az)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.Zh?z7(9):2==this.Zh&&z7(10);var a=this.i;this.rh.getLastError();a.yk=this.Il;T7(a,2)}};
g.k.Sx=function(){return this.i.Sx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Mj=function(a){this.i.Mj(a)};g.k=N7.prototype;g.k.xk=null;g.k.Tv=null;g.k.Zg=null;g.k.Pe=null;g.k.ZC=null;g.k.Bz=null;g.k.oK=null;g.k.Ly=null;g.k.Uw=0;g.k.MU=0;g.k.Pf=null;g.k.Nn=null;g.k.Sl=null;g.k.Up=null;g.k.Dn=null;g.k.aC=null;g.k.ut=-1;g.k.wM=-1;g.k.yk=-1;g.k.Ls=0;g.k.qs=0;g.k.Mp=8;g.Va(GZa,g.Se);g.Va(HZa,g.Se);g.k=N7.prototype;g.k.connect=function(a,b,c,d,e){z7(0);this.ZC=b;this.Tv=c||{};d&&void 0!==e&&(this.Tv.OSID=d,this.Tv.OAID=e);this.I?(x7((0,g.Sa)(this.KK,this,a),100),LZa(this)):this.KK(a)};
g.k.KK=function(a){this.Dn=new DZa(this);this.Dn.XC=this.xk;this.Dn.j=this.C;this.Dn.connect(a)};
g.k.yf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.UN=function(a){this.Nn=null;PZa(this,a)};
g.k.TN=function(){this.Sl=null;this.Pe=new A7(this,this.u,"rpc",this.J);this.Pe.rp=this.xk;this.Pe.WC=0;var a=this.oK.clone();g.ul(a,"RID","rpc");g.ul(a,"SID",this.u);g.ul(a,"CI",this.aC?"0":"1");g.ul(a,"AID",this.ut);O7(this,a);if(!g.Lc||g.Ec(10))g.ul(a,"TYPE","xmlhttp"),B7(this.Pe,a,!0,this.Ly,!1);else{g.ul(a,"TYPE","html");var b=this.Pe,c=!!this.Ly;b.ou=3;b.zn=W6(a.clone());zZa(b,c)}};
g.k.PN=function(a,b){if(0!=this.i&&(this.Pe==a||this.Zg==a))if(this.yk=a.Zu,this.Zg==a&&3==this.i)if(7<this.Mp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Sl){if(this.Pe)if(this.Pe.Rt+3E3<this.Zg.Rt)Q7(this),this.Pe.cancel(),this.Pe=null;else break a;S7(this);z7(19)}}else this.wM=a[1],0<this.wM-this.ut&&37500>a[2]&&this.aC&&0==this.qs&&!this.Up&&(this.Up=x7((0,g.Sa)(this.qV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Pe==
a&&Q7(this),!g.kb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.ut=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.Ly=c[2],c=c[3],null!=c?this.Mp=c:this.Mp=6,this.i=3,this.Pf&&this.Pf.GK(),this.oK=K7(this,this.Sx()?this.Ly:null,this.ZC),QZa(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Pf&&this.Pf.FK(c),this.qs=0)};
g.k.qV=function(){null!=this.Up&&(this.Up=null,this.Pe.cancel(),this.Pe=null,S7(this),z7(20))};
g.k.Ky=function(a){if(this.Pe==a){Q7(this);this.Pe=null;var b=2}else if(this.Zg==a)this.Zg=null,b=1;else return;this.yk=a.Zu;if(0!=this.i)if(a.Wm)if(1==b){b=Date.now()-a.Rt;var c=y7;c.dispatchEvent(new GZa(c,a.Lq?a.Lq.length:0,b,this.Ls));P7(this);this.B.length=0}else QZa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.yk)){if(d=1==b)this.Zg||this.Nn||1==this.i||2<=this.Ls?d=!1:(this.Nn=x7((0,g.Sa)(this.UN,this,a),RZa(this,this.Ls)),this.Ls++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.k.VS=function(a){if(!g.bc(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.ZY=function(a){a?z7(2):(z7(1),SZa(this,8))};
g.k.jE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Gj;a.N=!1;return a};
g.k.isActive=function(){return!!this.Pf&&this.Pf.isActive(this)};
g.k.Mj=function(a){var b=y7;b.dispatchEvent(new HZa(b,a))};
g.k.Sx=function(){return!(!g.Lc||g.Ec(10))};
g.k=TZa.prototype;g.k.GK=function(){};
g.k.FK=function(){};
g.k.EK=function(){};
g.k.TD=function(){};
g.k.pL=function(){return{}};
g.k.isActive=function(){return!0};g.k=UZa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.k.clear=function(){this.i=[];this.j=[]};
g.k.contains=function(a){return g.bc(this.i,a)||g.bc(this.j,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.iSa)(b,a);0<=c?(g.ec(b,c),b=!0):b=!1;return b||g.fc(this.j,a)};
g.k.Ai=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};VZa.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Ni(c.value),c={serializedIncrementBatch:g.Hc(g.re(c,HYa))},g.cv("streamzIncremented",c,{jH:b})}};var U7;g.Va(V7,g.H);g.k=V7.prototype;g.k.CX=function(){this.Yf=Math.min(3E5,2*this.Yf);this.u();this.j&&this.start()};
g.k.start=function(){var a=this.Yf+15E3*Math.random();g.nq(this.i,a);this.j=Date.now()+a};
g.k.stop=function(){this.i.stop();this.j=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Yf=5E3};g.Va(W7,TZa);g.k=W7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.hg=function(a){return this.u.hg(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.Y||(this.Y=!0,g.Pe(this.u),YZa(this),g.Pe(this.j),this.j=null,this.ea=function(){return""})};
g.k.isDisposed=function(){return this.Y};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.Pf=null);d.Pf=this;this.i=d;X7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.xk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.xk=f}e?(3!=e.getState()&&0==NZa(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.ut)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.xf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),MZa(this.i,a))};
g.k.GK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)MZa(this.i,a[b])}this.Z("handlerOpened")};
g.k.EK=function(a){var b=2==a&&401==this.i.yk;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.k.TD=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.xa.i.GI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.i.DC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.i.DC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.pL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.xf(a,this.C);return a};
g.k.FK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),KZa(this.i)):this.Z("handlerMessage",new WZa(a[0],a[1]))};
g.k.CB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ha&&this.i){var b=this.i.xk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.xk=b}};
g.k.AY=function(){this.j.isActive();0==NZa(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var e_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Va(g8,g.Sw);g8.prototype.Ih=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.w(h8,g.Sw);g.k=h8.prototype;g.k.start=function(){!this.i&&isNaN(this.Pb)&&this.hO()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Pb)||(g.Us(this.Pb),this.Pb=NaN)};
g.k.ra=function(){this.stop();g.Sw.prototype.ra.call(this)};
g.k.hO=function(){this.Pb=NaN;this.i=g.Ys($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Sa)(this.DR,this),onError:(0,g.Sa)(this.CR,this),onTimeout:(0,g.Sa)(this.ER,this)})};
g.k.DR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.k.CR=function(a){this.i=null;a.status&&404==a.status?this.j>=y0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=y0a[this.j],this.Pb=g.Ss((0,g.Sa)(this.hO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.ER=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var y0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(j8,g8);g.k=j8.prototype;g.k.start=function(){i8(this)&&this.Z("screenChange");!g.Jx("yt-remote-lounge-token-expiration")&&i_a(this);g.Us(this.i);this.i=g.Ss((0,g.Sa)(this.start,this),1E4)};
g.k.add=function(a,b){i8(this);f_a(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||i_a(this)};
g.k.remove=function(a,b){var c=i8(this);h_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.YB=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.ra=function(){g.Us(this.i);j8.re.ra.call(this)};
g.k.AT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.k.zT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Sw);g.k=m8.prototype;g.k.start=function(){var a=parseInt(g.Jx("yt-remote-fast-check-period")||"0",10);(this.B=g.Ua()-144E5<a?0:a)?p8(this):(this.B=g.Ua()+3E5,g.Ix("yt-remote-fast-check-period",this.B),this.YG())};
g.k.isEmpty=function(){return g.qf(this.i)};
g.k.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.cf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.k.ra=function(){g.Us(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.Sw.prototype.ra.call(this)};
g.k.YG=function(){g.Us(this.u);this.u=NaN;this.j&&this.j.abort();var a=k_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.lf(a).join(",")},(0,g.Sa)(this.iX,this,a),(0,g.Sa)(this.hX,this))}else o8(this,{}),p8(this)};
g.k.iX=function(a,b){this.j=null;var c=g.lf(k_a(this));if(g.tc(c,g.lf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.ue("Changing Screen set during request."),this.YG()};
g.k.hX=function(a){this.ue("Screen availability failed: "+a);this.j=null;p8(this)};
g.k.ue=function(a){c8("OnlineScreenService",a)};g.Va(q8,g8);g.k=q8.prototype;g.k.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.j.add(a,b,c)};
g.k.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.k.YB=function(a,b,c,d){this.j.contains(a)?this.j.YB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.k.Ih=function(a){return a?this.screens:g.hc(this.screens,g.Ro(this.u,function(b){return!this.contains(b)},this))};
g.k.qJ=function(){return g.Ro(this.Ih(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.rJ=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Pe(l);e(r8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Pe(l);f(m)});
l.start();return(0,g.Sa)(l.stop,l)};
g.k.FR=function(a,b,c,d){g.Ys($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Sa)(function(e,f){e=new b7(f.screen||{});if(!e.name||o_a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);o_a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Sa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Sa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.Pe(this.j);g.Pe(this.i);q8.re.ra.call(this)};
g.k.JT=function(){q_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Va(t8,g.Sw);g.k=t8.prototype;g.k.getScreen=function(){return this.B};
g.k.Ag=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){c8(this.ya,a)};
g.k.sJ=function(){return null};
g.k.oH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Sa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Sa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.oH("");t8.re.ra.call(this)};g.w(w8,t8);g.k=w8.prototype;g.k.nH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");z_a(this);this.va=!1;this.W="unknown";this.j.removeUpdateListener(this.ea);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.j=a;this.j.addUpdateListener(this.ea);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);v_a(this,"getMdxSessionStatus")};
g.k.vt=function(a){this.info("launchWithParams no-op for Cast: "+g.ej(a))};
g.k.stop=function(){this.j?this.j.stop((0,g.Sa)(function(){this.Ag()},this),(0,g.Sa)(function(){this.Ag(Error("Failed to stop receiver app."))},this)):this.Ag(Error("Stopping cast device without session."))};
g.k.oH=function(){};
g.k.ra=function(){this.info("disposeInternal");z_a(this);this.j&&(this.j.removeUpdateListener(this.ea),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.j=null;t8.prototype.ra.call(this)};
g.k.XX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ej(b)),a){case "mdxSessionStatus":t_a(this,b);break;case "loungeToken":w_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.k.DL=function(a,b,c,d){g.Us(this.N);this.N=0;n_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Sa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Ss((0,g.Sa)(this.DL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.sJ=function(){return this.j};
g.k.GR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Ag())};g.w(z8,t8);g.k=z8.prototype;g.k.nH=function(a){this.j=a;this.j.addUpdateListener(this.Ha)};
g.k.vt=function(a){this.Ia=a;this.Y()};
g.k.stop=function(){G_a(this);this.j?this.j.stop((0,g.Sa)(this.Ag,this,null),(0,g.Sa)(this.Ag,this,"Failed to stop DIAL device.")):this.Ag()};
g.k.ra=function(){G_a(this);this.j&&this.j.removeUpdateListener(this.Ha);this.j=null;t8.prototype.ra.call(this)};
g.k.HR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=g.Ka,this.Ag())};g.w(D8,t8);D8.prototype.stop=function(){this.Ag()};
D8.prototype.nH=function(){};
D8.prototype.vt=function(){g.Us(this.j);this.j=NaN;var a=h7(this.u.Ih(),this.i.label);a?u8(this,a):this.Ag(Error("No such screen"))};
D8.prototype.ra=function(){g.Us(this.j);this.j=NaN;t8.prototype.ra.call(this)};g.w(E8,g.Sw);g.k=E8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Sa)(this.TW,this);c=new chrome.cast.ApiConfig(c,(0,g.Sa)(this.QN,this),e,d,a);c.customDialLaunchCallback=(0,g.Sa)(this.MV,this);
chrome.cast.initialize(c,(0,g.Sa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),b_a(),this.j.subscribe("onlineScreenChange",(0,g.Sa)(this.tJ,this)),this.u=J_a(this),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Sa)(function(f){this.ue("Failed to set initial custom receivers: "+g.ej(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Sa)(function(f){this.ue("Failed to initialize API: "+g.ej(f));
b(!1)},this))};
g.k.EY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Ih(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=H_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Sa)(function(d){this.ue("Failed to set initial custom receivers: "+g.ej(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.oH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.k.FY=function(a){this.isDisposed()?this.ue("Setting connection data on disposed cast v2"):this.i?this.i.vt(a):this.ue("Setting connection data without a session")};
g.k.JR=function(){this.isDisposed()?this.ue("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Sa)(this.QN,this),(0,g.Sa)(this.lX,this))};
g.k.ra=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Sa)(this.tJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=ZZa,b=g.Ia("yt.mdx.remote.debug.handlers_");g.fc(b||[],a);g.Pe(this.i);g.Sw.prototype.ra.call(this)};
g.k.ue=function(a){c8("Controller",a)};
g.k.SN=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.QW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.ue("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ue("Stopping receiver w/o session: "+a.friendlyName)}else this.ue("onReceiverAction_ called without receiver.")};
g.k.MV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ue("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ue("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ue('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=D_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Cs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=E_a(b,c)):a=E_a(b,c)):a=C8(b);return a};
g.k.QN=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.ue("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Ih(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Pe(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Sa)(this.SN,this,this.i)),this.i.subscribe("sessionFailed",function(){return I_a(b,b.i)}),this.i.vt(null));
this.i.nH(a)}}};
g.k.IR=function(){return this.i?this.i.sJ():null};
g.k.lX=function(a){this.isDisposed()||(this.ue("Failed to estabilish a session: "+g.ej(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.TW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.k.tJ=function(){this.isDisposed()||(this.u=J_a(this),F8("Updating custom receivers: "+g.ej(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Sa)(function(){this.ue("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.FY;E8.prototype.setConnectedScreenStatus=E8.prototype.EY;E8.prototype.stopSession=E8.prototype.JR;E8.prototype.getCastSession=E8.prototype.IR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.k=S8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Xk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.k.Hc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Vj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.k.clone=function(){return new S8(Y8(this))};g.w($8,g.Sw);g.k=$8.prototype;g.k.getState=function(){return this.u};
g.k.play=function(){b9(this)?(this.i?this.i.play(null,g.Ka,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.k.pause=function(){b9(this)?(this.i?this.i.pause(null,g.Ka,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.k.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Hc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ka,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Ta(this.seekTo,a))};
g.k.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.Ka,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.k.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Sa)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Sa)(function(){this.ue("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Sa)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Sa)(function(){this.ue("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ta(this.setVolume,a,b))};
g.k.uJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ej(b.style),g.xf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ta(this.uJ,a,b))};
g.k.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ta(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.ej(h));f9(this,"setPlaylist",m);d||d9(this,l)};
g.k.jB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ta(this.jB,a,b))};
g.k.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ta(this.nextVideo,a,b))};
g.k.xs=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.xs)};
g.k.YK=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.YK)};
g.k.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.Sw.prototype.dispose.call(this)};
g.k.ra=function(){V_a(this);this.B=null;this.C.clear();Z8(this,null);g.Sw.prototype.ra.call(this)};
g.k.pH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.OW=function(a,b){this.Z(a,b)};
g.k.wV=function(a){if(!a)this.gx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.k.gx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),W_a(this),this.Z("remotePlayerChange")};
g.k.vV=function(a){a?(W_a(this),this.Z("remotePlayerChange")):this.gx(null)};
g.k.JH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.EV=function(){var a=S_a();a&&Z8(this,a)};
g.k.ue=function(a){c8("CP",a)};g.w(h9,g.Sw);g.k=h9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.ya&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.xc.listId=c);this.xc.videoId=d;this.xc.index=l||0;this.xc.state=3;V8(this.xc,
n);this.B="UNSUPPORTED";c=this.ya?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.ej(m));this.i.connect({method:c,params:g.ej(m)},a,aZa())}else i9("Connecting without params"),this.i.connect({},a,aZa());Z_a(this)};
g.k.CB=function(a){this.i.CB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ha("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.Sw.prototype.dispose.call(this)};
g.k.ra=function(){k9(this);m9(this);l9(this);g.Us(this.J);this.J=NaN;g.Us(this.N);this.N=NaN;this.u=null;g.Ot(this.W);this.W.length=0;this.i.dispose();g.Sw.prototype.ra.call(this);this.B=this.I=this.j=this.xc=this.i=null};
g.k.AV=function(){var a=this;i9("Channel opened");this.va&&(this.va=!1,l9(this),this.ea=g.Ss(function(){i9("Timing out waiting for a screen.");a.Hs(1)},15E3));
eZa(XZa(this.i),this.Ia)};
g.k.xV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.k.yV=function(a,b){m7();isNaN(this.nw())?(b&&"shortLived"==this.xa&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,i9("Channel error: "+a+" with reconnection in "+this.nw()+" ms"),j9(this,2))};
g.k.iM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.zV=function(a){a.params?i9("Received: action="+a.action+", params="+g.ej(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.En(a,function(c){return new a7(c)});
a=!!g.Xb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
b0a(this,a);a=this.iM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.gc(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
b0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Xb(this.j,function(c){return c.equals(b)})||OYa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.gc(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":d0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":f0a(this,a);break;case "onStateChange":e0a(this,a);break;case "onAdStateChange":g0a(this,a);break;case "onVolumeChanged":h0a(this,a);break;case "onSubtitlesTrackChanged":c0a(this,a);break;case "nowAutoplaying":i0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":j0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.k.pT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.nw())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Hs=function(a){i9("Disconnecting with "+a);g.Ha("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();YZa(this.i,a);this.dispose()};
g.k.nT=function(){var a=this.xc;this.u&&(a=this.xc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.k.GY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.xc.videoId&&(this.u=c.videoId,g.Us(this.J),this.J=g.Ss(function(){if(b.u){var e=b.u;b.u=null;b.xc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.xc.listId==c.listId&&this.xc.videoId==c.videoId&&this.xc.index==c.index||d.push("remoteQueueChange");this.xc.playerState==c.playerState&&this.xc.volume==c.volume&&this.xc.muted==c.muted&&W8(this.xc)==W8(c)&&g.ej(this.xc.trackData)==g.ej(c.trackData)||d.push("remotePlayerChange");this.xc.reset(a);g.vc(d,function(e){this.Z(e)},this)};
g.k.CL=function(){var a=this.i.I.id,b=g.Xb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.nw=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.k.jT=function(){return this.B||"UNSUPPORTED"};
g.k.kT=function(){return this.I||""};
g.k.KR=function(){if(!isNaN(this.nw())){var a=this.i.j;g.oq(a.i);a.start()}};
g.k.DY=function(a,b){n9(this,a,b);a0a(this)};
g.k.vJ=function(){var a=g.ht("SID","")||"",b=g.ht("SAPISID","")||"",c=g.ht("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Hc(g.gb(a),2);b=g.Hc(g.gb(b),2);c=g.Hc(g.gb(c),2);return g.Hc(g.gb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.hg;h9.prototype.getProxyState=h9.prototype.pT;h9.prototype.disconnect=h9.prototype.Hs;h9.prototype.getPlayerContextData=h9.prototype.nT;h9.prototype.setPlayerContextData=h9.prototype.GY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.CL;h9.prototype.getReconnectTimeout=h9.prototype.nw;h9.prototype.getAutoplayMode=h9.prototype.jT;h9.prototype.getAutoplayVideoId=h9.prototype.kT;h9.prototype.reconnect=h9.prototype.KR;
h9.prototype.sendMessage=h9.prototype.DY;h9.prototype.getXsrfToken=h9.prototype.vJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.iM;g.w(o9,g8);g.k=o9.prototype;g.k.Ih=function(a){return this.We.$_gs(a)};
g.k.contains=function(a){return!!this.We.$_c(a)};
g.k.get=function(a){return this.We.$_g(a)};
g.k.start=function(){this.We.$_st()};
g.k.add=function(a,b,c){this.We.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.We.$_r(a,b,c)};
g.k.YB=function(a,b,c,d){this.We.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.We.$_ubk(this.i[a]);this.i.length=0;this.We=null;g8.prototype.ra.call(this)};
g.k.LR=function(){this.Z("screenChange")};
g.k.uW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.FR;q8.prototype.$_gsppc=q8.prototype.rJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.YB;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Ih;q8.prototype.$_gos=q8.prototype.qJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.hg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.H);g.k=I9.prototype;g.k.ra=function(){g.H.prototype.ra.call(this);this.i.stop();this.u.stop();this.N.stop();this.ea();var a=this.Wb;a.unsubscribe("proxyStateChange",this.ON,this);a.unsubscribe("remotePlayerChange",this.kx,this);a.unsubscribe("remoteQueueChange",this.VA,this);a.unsubscribe("previousNextChange",this.LN,this);a.unsubscribe("nowAutoplaying",this.FN,this);a.unsubscribe("autoplayDismissed",this.iN,this);this.Wb=this.j=null};
g.k.Ej=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.Wb.u)if(J9(this)){var c=a;if(!a9(this.Wb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Wb).Hc()?this.Wb.pause():this.Wb.play();break;case "control_play":this.Wb.play();break;case "control_pause":this.Wb.pause();break;case "control_seek":this.J.pJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.tV=function(a){this.N.zR(a)};
g.k.sZ=function(a){this.Ej("control_subtitles_set_track",g.qf(a)?null:a)};
g.k.fP=function(){var a=this.G.getOption("captions","track");g.qf(a)||K9(this,a)};
g.k.Rb=function(a){this.j.Rb(a,this.G.getVideoData().lengthSeconds)};
g.k.fW=function(){g.qf(this.B)||u0a(this,this.B);this.C=!1};
g.k.ON=function(a,b){this.u.stop();2===b&&this.aP()};
g.k.kx=function(){if(J9(this)){this.i.stop();var a=a9(this.Wb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Bf=1;break;case 1082:case 1083:this.j.Bf=0;break;default:this.j.Bf=-1}switch(a.playerState){case 1081:case 1:this.Xb(new g.JI(8));this.ZO();break;case 1085:case 3:this.Xb(new g.JI(9));break;case 1083:case 0:this.Xb(new g.JI(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Xb(new g.JI(4));break;case 2:this.Xb(new g.JI(4));this.Rb(W8(a));
break;case -1:this.Xb(new g.JI(64));break;case -1E3:this.Xb(new g.JI(128,{errorCode:"mdx.remoteerror",errorMessage:"\u9019\u90e8\u5f71\u7247\u4e0d\u63d0\u4f9b\u9060\u7aef\u64ad\u653e\u3002\u3000",tE:2}))}a=a9(this.Wb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,u0a(this,a));a=a9(this.Wb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||
this.FP()}else t0a(this)};
g.k.LN=function(){this.G.Z("mdxpreviousnextchange")};
g.k.VA=function(){J9(this)||t0a(this)};
g.k.FN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.k.iN=function(){this.G.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J9(this)&&this.Wb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a9(this.Wb).playerState?L9(this,a):b&&this.Wb.seekTo(a)};
g.k.FP=function(){var a=this;if(J9(this)){var b=a9(this.Wb);this.events.wc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){s0a(a,c)})}};
g.k.ZO=function(){this.i.stop();if(!this.Wb.isDisposed()){var a=a9(this.Wb);a.Hc()&&this.Xb(new g.JI(8));this.Rb(W8(a));this.i.start()}};
g.k.aP=function(){this.u.stop();this.i.stop();var a=this.Wb.B.getReconnectTimeout();2==this.Wb.u&&!isNaN(a)&&this.u.start()};
g.k.Xb=function(a){this.u.stop();var b=this.I;if(!g.OI(b,a)){var c=g.U(a,2);c!==g.U(this.I,2)&&this.G.Xt(c);this.I=a;w0a(this.j,b,a)}};g.w(M9,g.V);M9.prototype.hd=function(){this.i.show()};
M9.prototype.Db=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Db()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Db()};g.w(N9,g.V);N9.prototype.onStateChange=function(a){v0a(this,a.state)};g.w(O9,g.qP);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.So=g.wc(a,this.i,this),g.rP(this,g.En(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Yh(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.uj=function(a){return"cast-selector-receiver"===a?"\u6295\u653e\u2026":this.So[a].name};
O9.prototype.Hf=function(a){g.qP.prototype.Hf.call(this,a);this.G.setOption("remote","currentReceiver",this.So[a]);this.qb.Db()};g.w(P9,g.qM);g.k=P9.prototype;
g.k.create=function(){var a=this.player.T(),b=g.VD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};n0a(b,a);this.subscriptions.push(g.gu("yt-remote-before-disconnect",this.sV,this));this.subscriptions.push(g.gu("yt-remote-connection-change",this.UW,this));this.subscriptions.push(g.gu("yt-remote-receiver-availability-change",this.NN,
this));this.subscriptions.push(g.gu("yt-remote-auto-connect",this.SW,this));this.subscriptions.push(g.gu("yt-remote-receiver-resumed",this.RW,this));this.subscriptions.push(g.gu("mdx-privacy-popup-confirm",this.jY,this));this.subscriptions.push(g.gu("mdx-privacy-popup-cancel",this.iY,this));this.NN()};
g.k.load=function(){this.player.cancelPlayback();g.qM.prototype.load.call(this);this.gi=new I9(this,this.player,this.Wb);var a=(a=r0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);w0a(this,this.Gd,this.Gd);this.player.wl(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.Fn=this.il;g.Qe(this.gi,this.Wb);this.Wb=this.gi=null;g.qM.prototype.unload.call(this);this.player.wl(5);Q9(this)};
g.k.ra=function(){g.hu(this.subscriptions);g.qM.prototype.ra.call(this)};
g.k.jl=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.gi.Ej.apply(this.gi,[a].concat(g.v(b)))};
g.k.getAdState=function(){return this.Bf};
g.k.Xk=function(){return this.Wb?a9(this.Wb).Xk:!1};
g.k.hasNext=function(){return this.Wb?a9(this.Wb).hasNext:!1};
g.k.Rb=function(a,b){this.xM=a||0;this.player.Z("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.xM};
g.k.getProgressState=function(){var a=a9(this.Wb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.kf():!a.isAdPlaying()&&this.player.kf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.k.nextVideo=function(){this.Wb&&this.Wb.nextVideo()};
g.k.jB=function(){this.Wb&&this.Wb.jB()};
g.k.sV=function(a){1===a&&(this.KG=this.Wb?a9(this.Wb):null)};
g.k.UW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Fn;this.loaded&&this.unload();this.Wb=a;this.KG=null;b.key!==this.il.key&&(this.Fn=b,this.load())}else g.Pe(this.Wb),this.Wb=null,this.loaded&&(this.unload(),(a=this.KG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.NN=function(){var a=[this.il],b=a.concat,c=o0a();O8()&&g.Jx("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.So=b.call(a,c);a=A9()||this.il;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.SW=function(){var a=A9();R9(this,a)};
g.k.RW=function(){this.Fn=A9()};
g.k.jY=function(){this.vx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.k.iY=function(){this.vx=!1;Q9(this);R9(this,this.il);this.Fn=this.il;H9=!1;B9=null;this.player.playVideo()};
g.k.sf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.So;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Fn:this.il;case "quickCast":return 2===this.So.length&&"cast-selector-receiver"===this.So[1].key?(b&&Q8(),!0):!1}};
g.k.JH=function(){this.Wb.JH()};
g.k.aj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.pM("remote",P9);})(_yt_player);
