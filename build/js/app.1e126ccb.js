!function(n){function e(e){for(var r,c,i=e[0],l=e[1],a=e[2],s=0,p=[];s<i.length;s++)c=i[s],o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(f&&f(e);p.length;)p.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={0:0},u=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var f=l;u.push([31,1]),t()}({31:function(n,e,t){"use strict";t.r(e);var r;t(32),t(54),t(58),t(59),t(61),t(62);document.querySelectorAll(".userSelect").forEach(function(n){n.onclick=function(){!function(n){r=n.toLowerCase();var e=["бабка грекокатолик","автобус","хресна хода"],t=e.indexOf(r),o=Math.floor(3*Math.random()),u=e[o],c=[["t","c","u"],["u","t","c"],["c","u","t"]][o][t];console.log("Твій вибір ".concat(r,", комп вибрав ").concat(u,". ")+" ---- "+{t:"Нічия",u:"Ти виграв!",c:"Ти програв!"}[c]);var i=document.getElementById("results");"бабка грекокатолик"==r&&"c"==c&&(i.innerHTML="Кажда віруюча бабка ходить на хресну ходу! Вона поглинає бабку! Ти програв!"),"бабка грекокатолик"==r&&"u"==c&&(i.innerHTML="Закрити всі вікна в автобусі! Негайно! Дує! Всі задихаються. Ти переміг!"),"автобус"==r&&"c"==c&&(i.innerHTML="Даремно ти сів в той автобус! Бабка закриває вікна! Задихнешся! Ти програв!"),"автобус"==r&&"u"==c&&(i.innerHTML="Дави їх дави! Розходилися тут ті християни! Пів міста перекрили! Ти переміг!"),"хресна хода"==r&&"c"==c&&(i.innerHTML="Жодна віра не допоможе коли тебе переїде автобус! Ти програв!"),"хресна хода"==r&&"u"==c&&(i.innerHTML="О, бабка тут як тут! Прошу до нас пані! Ти переміг!"),r==u&&(i.innerHTML="Овва! Нічия!")}(this.value)}})},61:function(n,e,t){},62:function(n,e){console.log("play"),document.getElementById("playBtn").onclick=function(){document.body.classList="is-playing",console.log("cl")}}});
//# sourceMappingURL=app.1e126ccb.js.map