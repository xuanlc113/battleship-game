(this["webpackJsonpreact-testing"]=this["webpackJsonpreact-testing"]||[]).push([[0],{20:function(t,n,r){},29:function(t,n,r){t.exports=r(41)},34:function(t,n,r){},35:function(t,n,r){},36:function(t,n,r){},40:function(t,n,r){},41:function(t,n,r){"use strict";r.r(n);var e=r(0),a=r.n(e),o=r(21),i=r.n(o),u=(r(34),r(35),r(2)),c=(r(36),r(44)),l="ship";function f(t,n){var r=40*n.x,e=40*n.y;return{x:r=Math.round((r+t.x)/40),y:e=Math.round((e+t.y)/40)}}var s=function(t){var n=Object(c.a)({accept:l,drop:function(n,r){var e=f(r.getDifferenceFromInitialOffset(),n),a=e.x,o=e.y;t.board.moveShip(n.id,a,o,n.orientation)},canDrop:function(n,r){var e=f(r.getDifferenceFromInitialOffset(),n),a=e.x,o=e.y;return t.board.canMoveShip(n.id,a,o)}}),r=Object(u.a)(n,2)[1];return a.a.createElement("div",{ref:r,className:"cell ".concat(t.style),onClick:t.clickCell?function(){return t.clickCell(t.pos)}:null})};function h(){var t=function(){var t=[],n=[],r=[],e=0,a=function(t,n,e){var a=r.find((function(n){return n.id===t})),o=r.filter((function(n){return n.id!=t})),i=a.length,u=a.getOrientation(),c=a.getAllCoordsAtNewPos(n,e);if(u){if(e+i-1>9||e<0)return!1}else if(n+i-1>9||n<0)return!1;var l=!0,f=!1,s=void 0;try{for(var h,d=o[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var p=h.value,v=!0,m=!1,g=void 0;try{for(var b,y=c[Symbol.iterator]();!(v=(b=y.next()).done);v=!0){var S=b.value;if(p.containPos(S))return!1}}catch(O){m=!0,g=O}finally{try{v||null==y.return||y.return()}finally{if(m)throw g}}}}catch(O){f=!0,s=O}finally{try{l||null==d.return||d.return()}finally{if(f)throw s}}return!0},o=function(t){var n=!0,e=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;if(u.containPos(t))return u}}catch(c){e=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(e)throw a}}return null};return{addShip:function(t){return r.push(t),!!a(t.id,t.getCoord()[0],t.getCoord()[1])||(r.pop(),!1)},receiveAttack:function(a){var i=o(a,r);null!==i?(i.hit(a),n.push(a),i.isSunk()&&e++):t.push(a)},miss:t,hit:n,allShipsSunk:function(){return r.length===e},getShips:function(){return r},canMoveShip:a,moveShip:function(t,n,e,a){var o=r.find((function(n){return n.id===t}));o.changePosition(n,e,a),r.splice(t,1,o)},containShip:o}}(),n=[5,4,4,3,3,2,2,2];for(var r in n)for(var e=d(r,n[r]);!t.addShip(e);)e=d(r,n[r]);return t}function d(t,n){return function(t,n,r,e,a){var o=[n,r],i=0,c=e,l=function(n){var r=f(),e=Object(u.a)(r,2),a=e[0],o=e[1];return s()?n[0]===a&&n[1]>=o&&n[1]<o+t:n[1]===o&&n[0]>=a&&n[0]<a+t},f=function(){return o},s=function(){return c};return{length:t,hit:function(t){l(t)&&i++},isSunk:function(){return t===i},containPos:l,getOrientation:s,id:a,changePosition:function(t,n,r){o=[t,n],c=r},getCoord:f,getAllCoordsAtNewPos:function(n,r){var a=[];if(e)for(var o=0;o<t;o++)a.push([n,r+o]);else for(var i=0;i<t;i++)a.push([n+i,r]);return a}}}(n,Math.floor(10*Math.random()),Math.floor(10*Math.random()),Math.random()<.5,t)}function p(t,n){var r=!0,e=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value;if(u[0]===n[0]&&u[1]===n[1])return!0}}catch(c){e=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(e)throw a}}return!1}r(20);var v=function(t){var n=Object(e.useState)(!0),r=Object(u.a)(n,2)[1];function o(n){t.board.receiveAttack(n),r((function(t){return!t})),t.next()}return a.a.createElement("div",{className:"board"},function(){for(var n=[],r=0;r<10;r++)for(var e=0;e<10;e++)p(t.board.hit,[e,r])?n.push(a.a.createElement(s,{style:"hit"})):p(t.board.miss,[e,r])?n.push(a.a.createElement(s,{style:"miss"})):n.push(a.a.createElement(s,{style:"empty",clickCell:o,pos:[e,r],board:t.board}));return n}(),!t.turn&&t.children)},m=r(15),g=r(16),b=r(45);function y(){var t=Object(m.a)(["\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  width: ","px;\n  height: 40px;\n  border: 2px royalblue solid;\n  background: rgba(245, 245, 245, 0.6);\n  z-index: ",";\n  cursor: move;\n"]);return y=function(){return t},t}function S(){var t=Object(m.a)(["\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  width: 40px;\n  height: ","px;\n  border: 2px royalblue solid;\n  background: rgba(245, 245, 245, 0.6);\n  z-index: ",";\n  cursor: move;\n"]);return S=function(){return t},t}var O=g.a.div(S(),(function(t){return 40*t.coord[0]}),(function(t){return 40*t.coord[1]}),(function(t){return 40*t.length}),(function(t){return t.isDragging?-1:2})),E=g.a.div(y(),(function(t){return 40*t.coord[0]}),(function(t){return 40*t.coord[1]}),(function(t){return 40*t.length}),(function(t){return t.isDragging?-1:2})),x=function(t){var n=Object(b.a)({item:{type:l,id:t.ship.id,length:t.ship.length,x:t.ship.getCoord()[0],y:t.ship.getCoord()[1],orientation:t.ship.getOrientation()},collect:function(t){return{isDragging:t.isDragging()}}}),r=Object(u.a)(n,2),e=r[0].isDragging,o=r[1];return t.ship.getOrientation()?a.a.createElement(O,{ref:o,length:t.ship.length,coord:t.ship.getCoord(),start:t.start,isDragging:e}):a.a.createElement(E,{ref:o,length:t.ship.length,coord:t.ship.getCoord(),start:t.start,isDragging:e})},j=function(t){return a.a.createElement("div",{className:"board"},function(){for(var n=[],r=0;r<10;r++)for(var e=0;e<10;e++)p(t.board.hit,[e,r])?n.push(a.a.createElement(s,{style:"hit"})):p(t.board.miss,[e,r])?n.push(a.a.createElement(s,{style:"miss"})):n.push(a.a.createElement(s,{style:"empty",board:t.board,pos:[e,r]}));return n}(),t.board.getShips().map((function(n){return a.a.createElement(x,{ship:n,start:t.start})})),t.children)};r(40);function k(t,n){var r=!0,e=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value;if(u[0]===n[0]&&u[1]===n[1])return!0}}catch(c){e=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(e)throw a}}return!1}var C=function(){var t=[],n=!1,r=[],e=function(e,o){e.receiveAttack(o),t.push(o),null!==e.containShip(o)&&(n=!0,0===(r=a(e,o)).length&&(n=!1))},a=function(t,n){var r=o(t,n),e=Object(u.a)(r,2),a=e[0],c=e[1];if(c)return a;var l=i(t,n),f=Object(u.a)(l,2);return a=f[0],(c=f[1])?a:[]},o=function(n,r){for(var e=[],a=Object(u.a)(r,2),o=a[0],i=a[1],c=[o,i-1],l=[o,i+1],f=!1;null!==n.containShip(c);)k(t,c)||(e.push(c),f=!0),c=[o,c[1]-1];for(c[1]>-1&&!k(t,c)&&e.push(c);null!==n.containShip(l);)k(t,l)||(e.push(l),f=!0),l=[o,l[1]+1];return l[1]<10&&!k(t,l)&&e.push(l),[e,f]},i=function(n,r){for(var e=[],a=Object(u.a)(r,2),o=a[0],i=a[1],c=[o-1,i],l=[o+1,i],f=!1;null!==n.containShip(c);)k(t,c)||(e.push(c),f=!0),c=[c[0]-1,i];for(c[0]>-1&&!k(t,c)&&e.push(c);null!==n.containShip(l);)k(t,l)||(e.push(l),f=!0),l=[l[0]+1,i];return l[0]<10&&!k(t,l)&&e.push(l),[e,f]};return{getHistory:function(){return t},attack:function(a,o){if(n&&(n=!1),r.length>0){var i=r.shift();a.receiveAttack(i),t.push(i)}else e(a,o)},attackCoord:e,randomCoords:function(){for(var n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());k(t,[n,r]);)n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return[n,r]},verticalSearch:o,horizontalSearch:i}},M=function(){var t=Object(e.useState)(!1),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(e.useState)(h()),c=Object(u.a)(i,2),l=c[0],f=c[1],s=Object(e.useState)(h()),d=Object(u.a)(s,2),p=d[0],m=d[1],g=Object(e.useState)(C()),b=Object(u.a)(g,2),y=b[0],S=b[1],O=Object(e.useState)(!1),E=Object(u.a)(O,2),x=E[0],k=E[1],M=Object(e.useRef)(!1),w=Object(e.useState)(""),N=Object(u.a)(w,2),D=N[0],A=N[1];return Object(e.useEffect)((function(){M.current?""===D&&(x||setTimeout((function(){y.attack(l,y.randomCoords()),k(!0)}),200)):M.current=!0,function(){l.allShipsSunk()&&(A("computer"),k(!1));p.allShipsSunk()&&(A("player"),k(!1))}()}),[x]),a.a.createElement("div",{className:"game"},a.a.createElement("h1",null,"Battleship"),a.a.createElement("div",{className:"game-status"},a.a.createElement("button",{onClick:function(){return r?(f(h()),m(h()),k(!1),A(""),S(C()),M.current=!1):k(!0),void o((function(t){return!t}))}},r?"New Game":"Start"),a.a.createElement("p",null,""!==D?"".concat(D," wins"):r?x?"your turn":" computer turn":"setup"),a.a.createElement("button",{onClick:function(){return f(h()),void m(h())},disabled:r},"random")),a.a.createElement("div",{className:"play-area"},r?a.a.createElement(j,{board:l,next:function(){return k((function(t){return!t}))},turn:x,start:r},a.a.createElement("div",{className:"click-guard"})):a.a.createElement(j,{board:l,next:function(){return k((function(t){return!t}))}}),a.a.createElement(v,{board:p,next:function(){return k((function(t){return!t}))},turn:x},a.a.createElement("div",{className:"click-guard"}))))},w=r(26),N=r(43);var D=function(){return a.a.createElement(N.a,{backend:w.a},a.a.createElement(M,null))};i.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.822a7453.chunk.js.map