(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("JBxO"),e("FdtR");var o=function(n){return new Promise((function(t){setTimeout((function(){t(n)}),n)}))},i=function(n){return console.log("Resolved after "+n+"ms")};o(2e3).then(i),o(1e3).then(i),o(1500).then(i);e("lmye"),e("D/wG"),e("wCa+");var a=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){setTimeout((function(){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}),1e3)}))},r=function(n){return console.table(n)};c(a,"Mango").then(r),c(a,"Lux").then(r);var u=function(n){return new Promise((function(t,e){var o,i,a=(o=200,i=500,Math.floor(Math.random()*(i-o+1)+o));setTimeout((function(){Math.random()>.3?t({id:n.id,time:a}):e(n.id)}),a)}))},s=function(n){var t=n.id,e=n.time;console.log("Transaction "+t+" processed in "+e+"ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m);e("L1EO")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.4123c61adf3bec6bcd54.js.map