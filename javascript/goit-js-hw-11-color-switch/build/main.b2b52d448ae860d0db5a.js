(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("1DEj");var e={body:document.querySelector("body"),btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]')},i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r=i.length,c={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){e.body.style.backgroundColor=i[function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}(0,r)]}),1e3))},stop:function(){this.isActive=!1,clearInterval(this.intervalId),e.body.style.backgroundColor=""}};e.btnStart.addEventListener("click",c.start.bind(c)),e.btnStop.addEventListener("click",c.stop.bind(c))}},[["QfWi",1]]]);
//# sourceMappingURL=main.b2b52d448ae860d0db5a.js.map