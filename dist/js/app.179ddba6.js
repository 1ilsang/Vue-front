(function(t){function e(e){for(var n,r,a=e[0],l=e[1],c=e[2],h=0,d=[];h<a.length;h++)r=a[h],s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("c21b"),s=i.n(n);s.a},"1a06":function(t,e,i){t.exports=i.p+"img/mergeNum.dbfc8d8b.png"},"1c16":function(t,e,i){},"1e00":function(t,e,i){"use strict";var n=i("4824"),s=i.n(n);s.a},"21b0":function(t,e,i){"use strict";var n=i("f9a8"),s=i.n(n);s.a},3:function(t,e){},"435b":function(t,e,i){"use strict";var n=i("1c16"),s=i.n(n);s.a},4720:function(t,e,i){},4824:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/sang"}},[t._v("Sang")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/dragon"}},[t._v("Dragon")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/park"}},[t._v("Park")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/ming"}},[t._v("Ming")])],1),i("router-view")],1)},o=[],r=(i("034f"),i("2877")),a={},l=Object(r["a"])(a,s,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("slider"),t._m(0)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"under"}},[n("img",{staticClass:"main-img",attrs:{alt:"Vue logo",src:i("cf05")}}),n("img",{staticClass:"main-img",attrs:{alt:"Vue logo",src:i("9c6c8")}}),n("img",{staticClass:"main-img",attrs:{alt:"Vue logo",src:i("a693")}}),n("img",{staticClass:"main-img",attrs:{alt:"Vue logo",src:i("1a06")}})])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("slider",{attrs:{animation:"fade"}},t._l(t.list,function(e,s){return n("slider-item",{key:s},[0===e?n("img",{attrs:{src:i("cf05")}}):1===e?n("img",{attrs:{src:i("9c6c8")}}):2===e?n("img",{attrs:{src:i("a693")}}):3===e?n("img",{attrs:{src:i("1a06")}}):t._e()])}))],1)},v=[],p=i("8fa5"),m={components:{Slider:p["Slider"],SliderItem:p["SliderItem"]},data:function(){return{list:[0,1,2,3]}}},b=m,g=Object(r["a"])(b,f,v,!1,null,null,null);g.options.__file="Slider.vue";var _=g.exports,y={name:"home",components:{Slider:_}},w=y,k=(i("1e00"),Object(r["a"])(w,h,d,!1,null,"78945090",null));k.options.__file="Home.vue";var x=k.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("랜덤 OX 퀴즈 게임 "),i("button",{on:{click:t.getQuiz}},[t._v("퀴즈 바꾸기")])]),i("div",{attrs:{id:"socketData"}},[i("h1",[t._v(" :: "+t._s(t.quiz)+" :: ")]),i("div",{attrs:{id:"trueOrFalse"}})]),i("div",{staticClass:"backback"},[i("div",{staticClass:"back"},[i("div",{staticClass:"button_base b05_3d_roll",attrs:{id:"trueButton"},on:{click:function(e){t.isAnswer(1)}}},[i("div",[t._v("True!")]),i("div",[t._v("O")])])]),i("div",{staticClass:"back"},[i("div",{staticClass:"button_base b05_3d_roll",attrs:{id:"falseButton"},on:{click:function(e){t.isAnswer(0)}}},[i("div",[t._v("False!")]),i("div",[t._v("X")])])])]),i("h3"),i("Chatt")],1)},S=[],C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"userChatt"}},[t._v("\n        Chatt\n    ")]),i("ul",t._l(t.messages,function(e,n){return i("li",{key:"msg-"+n},[i("div",{attrs:{id:"userList"}},[t._v("\n                익명\n            ")]),t._v("\n            "+t._s(e)+"\n        ")])})),i("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",name:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),i("button",{on:{click:t.sendMessage}},[t._v("전송")])])},E=[],D=i("8055"),T=i.n(D),P=T()("http://".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).SOCKET_NODE_HOST),{autoConnect:!1}),R=P,j={name:"Chatt",data:function(){return{messages:["","","환영합니다! 함께 문제를 풀어요!","","즐거운 시간 되세요.",""],message:""}},methods:{sendMessage:function(){""!==this.message&&" "!==this.message&&(this.message.length>15?this.message="15자 미만으로 적어주세요.":(R.emit("message",this.message),this.message=""))},keyupEvent:function(t){13===t.keyCode&&this.sendMessage()}},beforeCreate:function(){var t=this;R.on("message",function(e){t.messages.length>5&&t.messages.shift(),t.messages.push("".concat(e))})},created:function(){window.addEventListener("keyup",this.keyupEvent)}},M=j,L=(i("21b0"),Object(r["a"])(M,C,E,!1,null,"f7fba6d6",null));L.options.__file="Chatt.vue";var I=L.exports,A={name:"Sang",components:{Chatt:I},data:function(){return{quiz:"물고기는 색을 구별할 수 있다.",quizAns:1,description:"물고기는 신호등 정도의 색을 구별할 수 있습니다!"}},methods:{isAnswer:function(t){var e=document.getElementById("trueOrFalse");document.getElementById("trueButton").style.visibility="hidden",document.getElementById("falseButton").style.visibility="hidden",t===this.quizAns?e.innerHTML="<h2>정답입니다!</h2><h3>".concat(this.description,"</h3>"):e.innerHTML="<h2>틀렸습니다!</h2><h3>".concat(this.description,"</h3>")},initDiv:function(){document.getElementById("trueOrFalse").innerHTML="",document.getElementById("trueButton").style.visibility="visible",document.getElementById("falseButton").style.visibility="visible"},getQuiz:function(){var t=this;this.initDiv(),fetch("http://".concat(this.$MYSQL_NODE_HOST,"/quizlist")).then(function(t){if(t.ok)return t.json();throw new Error("Server Err")}).then(function(e){t.quiz=e.quiz,t.quizAns=e.quizAns,t.description=e.description}).catch(function(t){console.log(t)})}},created:function(){console.log("Sang.vue/created:81",this.$MYSQL_NODE_HOST,this.$SOCKET_NODE_HOST)},beforeUpdate:function(){this.initDiv()},beforeMount:function(){!0===R.disconnected&&R.connect(),R.emit("join")},beforeDestroy:function(){R.disconnect()}},B=A,z=(i("5d09"),Object(r["a"])(B,O,S,!1,null,"6fee11ab",null));z.options.__file="Sang.vue";var $=z.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Input Your HTML Code "+t._s(t.a))])])},H=[],q={name:"Dragon",data:function(){return{a:"Dragon"}},methods:{wellcome:function(){console.log("Dragon.vue/wellcome:18",this.a)}},created:function(){}},F=q,V=Object(r["a"])(F,N,H,!1,null,null,null);V.options.__file="Dragon.vue";var W=V.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("2 0 4 8  만 들 기")]),i("div",{staticClass:"board",attrs:{tabIndex:"1"}},[t._l(t.board.cells,function(e){return i("div",t._l(e,function(t){return i("cell")}))}),t._l(t.tiles,function(t){return i("tile-view",{attrs:{tile:t}})}),i("game-end-overlay",{attrs:{board:t.board,onrestart:t.onRestart}})],2)])},Y=[],Q=(i("ac6a"),i("78a7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"cell"},[t._v(t._s(""))])}),G=[],U={data:function(){return{msg:"hello vue"}},components:{}},X=U,J=Object(r["a"])(X,Q,G,!1,null,null,null);J.options.__file="Cell.vue";var Z=J.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{class:t.classes},[t._v(t._s(t.tile.value))])},et=[],it={data:function(){return{}},props:{tile:{type:Object,required:!0}},computed:{classes:function(){var t=this.tile,e=["tile"];return e.push("tile"+this.tile.value),t.mergedInto||e.push("position_"+t.row+"_"+t.column),t.mergedInto&&e.push("merged"),t.isNew()&&e.push("new"),t.hasMoved()&&(e.push("row_from_"+t.fromRow()+"_to_"+t.toRow()),e.push("column_from_"+t.fromColumn()+"_to_"+t.toColumn()),e.push("isMoving")),e.join(" ")}},components:{}},nt=it,st=Object(r["a"])(nt,tt,et,!1,null,null,null);st.options.__file="TileView.vue";var ot=st.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"overlay"},[i("p",{staticClass:"message"},[t._v(t._s(t.contents))]),i("button",{staticClass:"tryAgain",on:{click:t.restart}},[t._v("Try again")])])},at=[],lt={data:function(){return{}},props:{board:{type:Object,required:!0},onrestart:{type:Function,required:!0}},computed:{show:function(){return this.board.hasWon()||this.board.hasLost()},contents:function(){return this.board.hasWon()?"Good Job!":this.board.hasLost()?"Game Over":""}},methods:{restart:function(){this.onrestart&&this.onrestart()}},components:{}},ct=lt,ut=Object(r["a"])(ct,rt,at,!1,null,null,null);ut.options.__file="GameEndOverlay.vue";var ht=ut.exports,dt={data:function(){return{board:new pt}},mounted:function(){window.addEventListener("keydown",this.handleKeyDown.bind(this))},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeyDown.bind(this))},computed:{tiles:function(){return this.board.tiles.filter(function(t){return 0!=t.value})}},methods:{handleKeyDown:function(t){if(!this.board.hasWon()&&t.keyCode>=37&&t.keyCode<=40){t.preventDefault();var e=t.keyCode-37;this.board.move(e)}},onRestart:function(){this.board=new pt}},components:{Cell:Z,TileView:ot,GameEndOverlay:ht}},ft=function(t){for(var e=t.length,i=t[0].length,n=[],s=0;s<e;++s){n.push([]);for(var o=0;o<i;++o)n[s][o]=t[o][i-s-1]}return n},vt=function t(e,i,n){this.value=e||0,this.row=i||-1,this.column=n||-1,this.oldRow=-1,this.oldColumn=-1,this.markForDeletion=!1,this.mergedInto=null,this.id=t.id++};vt.id=0,vt.prototype.moveTo=function(t,e){this.oldRow=this.row,this.oldColumn=this.column,this.row=t,this.column=e},vt.prototype.isNew=function(){return-1==this.oldRow&&!this.mergedInto},vt.prototype.hasMoved=function(){return-1!=this.fromRow()&&(this.fromRow()!=this.toRow()||this.fromColumn()!=this.toColumn())||this.mergedInto},vt.prototype.fromRow=function(){return this.mergedInto?this.row:this.oldRow},vt.prototype.fromColumn=function(){return this.mergedInto?this.column:this.oldColumn},vt.prototype.toRow=function(){return this.mergedInto?this.mergedInto.row:this.row},vt.prototype.toColumn=function(){return this.mergedInto?this.mergedInto.column:this.column};var pt=function t(){this.tiles=[],this.cells=[];for(var e=0;e<t.size;++e)this.cells[e]=[this.addTile(),this.addTile(),this.addTile(),this.addTile()];this.addRandomTile(),this.setPositions(),this.won=!1};pt.prototype.addTile=function(){var t=new vt;return vt.apply(t,arguments),this.tiles.push(t),t},pt.size=4,pt.prototype.moveLeft=function(){for(var t=!1,e=0;e<pt.size;++e){for(var i=this.cells[e].filter(function(t){return 0!=t.value}),n=[],s=0;s<pt.size;++s){var o=i.length?i.shift():this.addTile();if(i.length>0&&i[0].value==o.value){var r=o;o=this.addTile(o.value),r.mergedInto=o;var a=i.shift();a.mergedInto=o,o.value+=a.value}n[s]=o,this.won|=2048==o.value,t|=o.value!=this.cells[e][s].value}this.cells[e]=n}return t},pt.prototype.setPositions=function(){this.cells.forEach(function(t,e){t.forEach(function(t,i){t.oldRow=t.row,t.oldColumn=t.column,t.row=e,t.column=i,t.markForDeletion=!1})})},pt.fourProbability=.1,pt.prototype.addRandomTile=function(){for(var t=[],e=0;e<pt.size;++e)for(var i=0;i<pt.size;++i)0==this.cells[e][i].value&&t.push({r:e,c:i});var n=~~(Math.random()*t.length),s=t[n],o=Math.random()<pt.fourProbability?4:2;this.cells[s.r][s.c]=this.addTile(o)},pt.prototype.move=function(t){this.clearOldTiles();for(var e=0;e<t;++e)this.cells=ft(this.cells);for(var i=this.moveLeft(),n=t;n<4;++n)this.cells=ft(this.cells);return i&&this.addRandomTile(),this.setPositions(),this},pt.prototype.clearOldTiles=function(){this.tiles=this.tiles.filter(function(t){return 0==t.markForDeletion}),this.tiles.forEach(function(t){t.markForDeletion=!0})},pt.prototype.hasWon=function(){return this.won},pt.deltaX=[-1,0,1,0],pt.deltaY=[0,-1,0,1],pt.prototype.hasLost=function(){for(var t=!1,e=0;e<pt.size;++e)for(var i=0;i<pt.size;++i){t|=0==this.cells[e][i].value;for(var n=0;n<4;++n){var s=e+pt.deltaX[n],o=i+pt.deltaY[n];s<0||s>=pt.size||o<0||o>=pt.size||(t|=this.cells[e][i].value==this.cells[s][o].value)}}return!t};var mt=dt,bt=(i("435b"),Object(r["a"])(mt,K,Y,!1,null,"158db7b2",null));bt.options.__file="Ming.vue";var gt=bt.exports,_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:"ball"})},yt=[],wt=(i("6c7b"),{data:function(){return{canvas:null,ctx:null,ball:{ballRadius:10,x:0,y:0,dx:2,dy:2},paddle:{width:0,height:0,x:0},paddleAction:{leftPressed:!1,rightPressed:!1},brickSpec:{brickRowCount:3,brickColumnCount:5,brickWidth:75,brickHeight:20,brickPadding:10,brickOffsetTop:30,brickOffsetLeft:30},bricks:[],score:0,live:3}},created:function(){var t=this;window.addEventListener("keydown",function(e){var i=e.keyCode;37===i?t.paddleAction.leftPressed=!0:t.paddleAction.rightPressed=!0},!1),window.addEventListener("keyup",function(e){var i=e.keyCode;37===i?t.paddleAction.leftPressed=!1:t.paddleAction.rightPressed=!1},!1),this.initBricks()},mounted:function(){this.canvas=this.$refs.ball,this.ctx=this.$refs.ball.getContext("2d"),this.ball.x=this.canvas.width/2,this.ball.y=this.canvas.height-30,this.paddle.width=75,this.paddle.height=10,this.paddle.x=(this.canvas.width-this.paddle.width)/2,this.draw()},methods:{drawBall:function(){this.ctx.beginPath(),this.ctx.arc(this.ball.x,this.ball.y,this.ball.ballRadius,0,2*Math.PI),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()},drawPaddle:function(){this.ctx.beginPath(),this.ctx.rect(this.paddle.x,this.canvas.height-this.paddle.height,this.paddle.width,this.paddle.height),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()},drawBricks:function(){for(var t=0;t<this.brickSpec.brickColumnCount;t++)for(var e=0;e<this.brickSpec.brickRowCount;e++){var i=t*(this.brickSpec.brickWidth+this.brickSpec.brickPadding)+this.brickSpec.brickOffsetLeft,n=e*(this.brickSpec.brickHeight+this.brickSpec.brickPadding)+this.brickSpec.brickOffsetTop;1===this.bricks[t][e].status&&(this.bricks[t][e].x=i,this.bricks[t][e].y=n,this.ctx.beginPath(),this.ctx.rect(i,n,this.brickSpec.brickWidth,this.brickSpec.brickHeight),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath())}},draw:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawScore(),this.drawBall(),this.drawPaddle(),this.drawBricks(),this.collisionDetection(),(this.ball.x+this.ball.dx<this.ball.ballRadius||this.ball.x+this.ball.dx>this.canvas.width-this.ball.ballRadius)&&(this.ball.dx=-this.ball.dx),this.ball.y+this.ball.dy<this.ball.ballRadius?this.ball.dy=-this.ball.dy:this.ball.y+this.ball.dy>this.canvas.height-this.ball.ballRadius&&(this.paddle.x<this.ball.x&&this.ball.x<this.paddle.x+this.paddle.width?this.ball.dy=-this.ball.dy:(this.live--,this.live?(this.ball.x=this.canvas.width/2,this.ball.y=this.canvas.height-30,this.ball.dx=2,this.ball.dy=-2,this.paddle.x=(this.canvas.width-this.paddle.width)/2):(alert("GAME OVER"),document.location.reload()))),this.paddleAction.leftPressed&&this.paddle.x>0?this.paddle.x-=7:this.paddleAction.rightPressed&&this.paddle.x<this.canvas.width-this.paddle.width&&(this.paddle.x+=7),this.ball.x+=this.ball.dx,this.ball.y+=this.ball.dy,requestAnimationFrame(this.draw)},initBricks:function(){for(var t=0;t<this.brickSpec.brickColumnCount;t++){this.bricks[t]=[];for(var e=0;e<this.brickSpec.brickRowCount;e++)this.bricks[t][e]={x:0,y:0,status:1}}},collisionDetection:function(){for(var t=0;t<this.brickSpec.brickColumnCount;t++)for(var e=0;e<this.brickSpec.brickRowCount;e++){var i=this.bricks[t][e];1===i.status&&this.ball.x>i.x&&this.ball.x<i.x+this.brickSpec.brickWidth&&this.ball.y>i.y&&this.ball.y<i.y+this.brickSpec.brickHeight&&(i.status=0,this.score++,this.ball.dy=-this.ball.dy)}},drawScore:function(){this.ctx.font="16px Arial",this.ctx.fillStyle="#0095DD",this.ctx.fillText("Score: "+this.score,8,20)},drawLive:function(){this.ctx.font="16px Arial",this.ctx.fillStyle="#0095DD",this.ctx.fillText("Lives: "+this.lives,this.canvas.width-65,20)}},computed:{},beforeMount:function(){this.initBricks()}}),kt=wt,xt=(i("d969"),Object(r["a"])(kt,_t,yt,!1,null,null,null));xt.options.__file="Park.vue";var Ot=xt.exports;n["a"].use(u["a"]);var St=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:x},{path:"/sang",name:"Sang",component:$},{path:"/dragon",name:"Dragon",component:W},{path:"/ming",name:"Ming",component:gt},{path:"/park",name:"Park",component:Ot}]});n["a"].config.productionTip=!1,n["a"].prototype.$MYSQL_NODE_HOST=Object({NODE_ENV:"production",BASE_URL:"/"}).MYSQL_NODE_HOST,n["a"].prototype.$SOCKET_NODE_HOST=Object({NODE_ENV:"production",BASE_URL:"/"}).SOCKET_NODE_HOST,new n["a"]({router:St,render:function(t){return t(c)}}).$mount("#app")},"5c08":function(t,e,i){},"5d09":function(t,e,i){"use strict";var n=i("5c08"),s=i.n(n);s.a},"78a7":function(t,e,i){},"9c6c8":function(t,e,i){t.exports=i.p+"img/ox.dec55e2b.png"},a693:function(t,e,i){t.exports=i.p+"img/Wakeboarder.56a67497.png"},c21b:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.53046dc8.png"},d969:function(t,e,i){"use strict";var n=i("4720"),s=i.n(n);s.a},f9a8:function(t,e,i){}});
//# sourceMappingURL=app.179ddba6.js.map