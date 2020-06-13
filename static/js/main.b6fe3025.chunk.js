(this["webpackJsonptest-week-1"]=this["webpackJsonptest-week-1"]||[]).push([[0],{1:function(e,t,a){e.exports={general:"counter_general__3e3-B",btn:"counter_btn__3KZ1O",bord:"counter_bord__3fRsQ",numberRed:"counter_numberRed__2B4Yj",regular:"counter_regular__1Nddi",sett:"counter_sett__2Xvv1",error:"counter_error__1vjy8",disabled:"counter_disabled__1JYil",setting:"counter_setting__2lCLZ",inc_decr:"counter_inc_decr__3JYyT",id:"counter_id__b_fcB",inp:"counter_inp__2LciC"}},14:function(e,t,a){},16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),u=(a(21),a(3)),o=a(4),i=a(5),l=a(6),p=a(1),m=a.n(p),d=a(14),h=a.n(d),E=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:h.a.btn,onClick:e.handle},e.name))},_=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.general},r.a.createElement("div",{className:m.a.bord},this.props.maxValue<0||this.props.startValue<0||this.props.maxValue<=this.props.startValue?r.a.createElement("div",{className:m.a.error},r.a.createElement("div",null,"Incorrect value."),r.a.createElement("div",null," 1. Max value or start value must be more than 0"),r.a.createElement("div",null," 2. Max value can`t be same to start value")):r.a.createElement("div",{className:this.props.classNumber},this.props.state.count),r.a.createElement("div",{className:m.a.btn},r.a.createElement("div",{className:this.props.classForSett},r.a.createElement(E,{handle:this.props.increment,name:this.props.namesBtn[0]})),r.a.createElement("div",{className:this.props.classBtn},r.a.createElement(E,{handle:this.props.resetCounter,name:this.props.namesBtn[1],count:this.props.state.count})))))}}]),a}(r.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onNumberChange=function(t){e.props.addMaxValue(t.currentTarget.value)},e.onSetNumberChange=function(t){e.props.addStartValue(t.currentTarget.value)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.general},r.a.createElement("div",{className:m.a.bord},r.a.createElement("div",{className:m.a.setting},r.a.createElement("div",null,"Max value"),r.a.createElement("div",{className:this.props.classSet},r.a.createElement("input",{type:"number",value:this.props.maxValue,className:m.a.inp,onChange:this.onNumberChange}))),r.a.createElement("div",{className:m.a.setting},r.a.createElement("div",null,"Start value"),r.a.createElement("div",{className:this.props.classMin},r.a.createElement("input",{type:"number",value:this.props.startValue,className:m.a.inp,onChange:this.onSetNumberChange}))),r.a.createElement("div",{className:m.a.btn},r.a.createElement("div",{className:this.props.classBtn},r.a.createElement(E,{handle:this.props.setSettings,name:"Save settings"})))))}}]),a}(r.a.Component),V=(a(22),a(9)),v=a(2),N={count:0,maxValue:1,startValue:0},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MAX_VALUE":return Object(v.a)({},e,{maxValue:t.number});case"ADD_START_VALUE":return Object(v.a)({},e,{startValue:t.number});case"INCREMENT_COUNTER":return Object(v.a)({},e,{count:e.count+1});case"RESET_COUNTER":return Object(v.a)({},e,{count:e.startValue});case"INCREMENT_MAX_VALUE":return Object(v.a)({},e,{maxValue:e.maxValue+1});case"DECREMENT_MAX_VALUE":return Object(v.a)({},e,{maxValue:e.maxValue-1});case"INCREMENT_START_VALUE":return Object(v.a)({},e,{startValue:e.startValue+1});case"DECREMENT_START_VALUE":return Object(v.a)({},e,{startValue:e.startValue-1});case"SET_SETTINGS":return Object(v.a)({},e,{count:e.startValue})}return e},T=function(){return{type:"INCREMENT_MAX_VALUE"}},S=function(){return{type:"DECREMENT_MAX_VALUE"}},g=function(){return{type:"INCREMENT_START_VALUE"}},C=function(){return{type:"DECREMENT_START_VALUE"}},x=function(e){return{type:"ADD_MAX_VALUE",number:Number(e)}},A=function(e){return{type:"ADD_START_VALUE",number:Number(e)}},M=function(){return{type:"INCREMENT_COUNTER"}},O=function(){return{type:"RESET_COUNTER"}},R=function(){return{type:"SET_SETTINGS"}},j=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).namesBtn=["Increment","Reset"],e.incrementCounter=function(){return e.props.state.count<e.props.state.maxValue?e.props.incrementCounter():e.props.state.count},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.state.count===this.props.state.maxValue?m.a.numberRed:m.a.regular,t=this.props.state.count===this.props.state.startValue||this.props.state.startValue>=this.props.state.maxValue||this.props.state.startValue<0?m.a.disabled:"",a=this.props.state.startValue>=this.props.state.maxValue||this.props.state.startValue<0?m.a.disabled:"",n=this.props.state.startValue>this.props.state.maxValue?m.a.sett:m.a.regular,s=this.props.state.startValue<0?m.a.sett:m.a.regular;return r.a.createElement("div",{className:"App"},r.a.createElement(b,{addStartValue:this.props.addStartValue,addMaxValue:this.props.addMaxValue,incrementMax:this.props.incrementMax,incrementStart:this.props.incrementStart,decrementMax:this.props.decrementMax,decrementStart:this.props.decrementStart,setSettings:this.props.setSettings,maxValue:this.props.state.maxValue,startValue:this.props.state.startValue,classSet:n,classMin:s,classBtn:a}),r.a.createElement(_,{classNumber:e,classBtn:t,classForSett:a,state:this.props.state,resetCounter:this.props.resetCounter,increment:this.incrementCounter,namesBtn:this.namesBtn,maxValue:this.props.state.maxValue,startValue:this.props.state.startValue}))}}]),a}(r.a.Component),y=Object(V.b)((function(e){return{state:e}}),(function(e){return{addStartValue:function(t){e(A(t))},addMaxValue:function(t){e(x(t))},incrementMax:function(){e(T())},decrementMax:function(){e(S())},decrementStart:function(){e(C())},setSettings:function(){e(R())},resetCounter:function(){e(O())},incrementCounter:function(){e(M())},incrementStart:function(){e(g())}}}))(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(8),B=Object(U.b)(f);c.a.render(r.a.createElement(V.a,{store:B},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6fe3025.chunk.js.map