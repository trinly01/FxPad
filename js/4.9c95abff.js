(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"q-pb-md"},[s("q-btn-toggle",{staticStyle:{border:"1px solid #027be3"},attrs:{dense:"",spread:"","no-caps":"",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"fx",value:"fx"},{label:"memes",value:"memes"}]},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"fx"===t.tab,expression:"tab === 'fx'"}],staticClass:"col"},[s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn1",attrs:{name:"drumroll"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn2",attrs:{name:"rimshot"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn3",attrs:{name:"dj horn"}})],1)]),s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn4",attrs:{name:"buzzer"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn5",attrs:{name:"applause"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn6",attrs:{name:"inception bwah"}})],1)]),s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn7",attrs:{name:"sad trombone"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn8",attrs:{name:"crickets"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn9",attrs:{name:"alert"}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"memes"===t.tab,expression:"tab === 'memes'"}],staticClass:"col"},[s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn11",attrs:{name:"laugh"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn12",attrs:{name:"dramatic"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn13",attrs:{name:"hello darkness"}})],1)]),s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn14",attrs:{name:"oh, yeah"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn15",attrs:{name:"here comes the money"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn16",attrs:{name:"really good"}})],1)]),s("div",{staticClass:"row q-gutter-sm q-pb-sm"},[s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn17",attrs:{name:"jeopardy"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn18",attrs:{name:"sexy sax"}})],1),s("div",{staticClass:"col"},[s("fx-button",{ref:"fx-btn19",attrs:{name:"curb your enthusiasm"}})],1)])])])])},n=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-btn",{attrs:{loading:t.isPlaying,round:"",size:"lg"},nativeOn:{click:function(a){return t.play(a)}}},[t._v("\n  "+t._s(t.effects[t.name].icon)+"\n  "),s("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[0,-12]}},[t._v("\n    "+t._s(t.name)+"\n  ")])],1)},i=[],r=(s("b0c0"),s("1e5c")),c=r.Howl,l=(r.Howler,{props:["name"],created:function(){var t=this;this.sound=new c({src:[this.effects[this.name].audio]}),this.sound.on("end",(function(){t.isPlaying=!1}))},methods:{play:function(){this.isPlaying?(this.sound.stop(),this.isPlaying=!1):(this.sound.play(),this.isPlaying=!0)}},data:function(){return{isPlaying:!1,effects:{drumroll:{icon:"🥁",audio:"drumroll.mp3"},rimshot:{icon:"🍅",audio:"badum-tss.mp3"},"dj horn":{icon:"🥳",audio:"airhorn.mp3"},buzzer:{icon:"✋",audio:"buzzer.mp3"},applause:{icon:"❤️",audio:"applause.mp3"},"inception bwah":{icon:"👀",audio:"inceptionbutton.mp3"},"sad trombone":{icon:"🎺",audio:"sadtrombone.mp3"},crickets:{icon:"🦗",audio:"crickets.mp3"},alert:{icon:"🚨",audio:"alert.mp3"},laugh:{icon:"😝",audio:"no.mp3"},dramatic:{icon:"🔪",audio:"dun.mp3"},"hello darkness":{icon:"🌚",audio:"darkness.mp3"},"oh, yeah":{icon:"🍺",audio:"yeah.mp3"},"here comes the money":{icon:"💰",audio:"money.mp3"},"really good":{icon:"🎹",audio:"good.mp3"},jeopardy:{icon:"⏱",audio:"jeopardy.mp3"},"sexy sax":{icon:"😏",audio:"sax.mp3"},"curb your enthusiasm":{icon:"👓",audio:"curb.mp3"}}}}}),u=l,d=s("2877"),m=s("9c40"),f=s("05c0"),b=s("eebe"),p=s.n(b),x=Object(d["a"])(u,o,i,!1,null,null,null),v=x.exports;p()(x,"components",{QBtn:m["a"],QTooltip:f["a"]});var h={mounted:function(){var t=this;window.addEventListener("keyup",(function(a){switch(console.log(a.key),a.key){case"f":t.tab="fx";break;case"m":t.tab="memes";break}t.$refs["fx-btn"+("fx"===t.tab?a.key:+a.key+10)].play()}))},components:{FxButton:v},name:"PageIndex",data:function(){return{tab:"fx"}}},y=h,g=s("9989"),C=s("6a67"),w=Object(d["a"])(y,e,n,!1,null,null,null);a["default"]=w.exports;p()(w,"components",{QPage:g["a"],QBtnToggle:C["a"]})}}]);