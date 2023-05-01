"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=require("vue-router"),n=["onClick"],o={class:"sm-btn-item"},a=e.defineComponent({__name:"SwipeBottomNavigation",props:{modelValue:{type:[Number,String,null],required:!0,default:null},options:{type:Array,required:!0,default:function(){return[]}},swiperColor:{type:String,required:!1,default:"#8066C7"},backgroundColor:{type:String,required:!1,default:"#FFFFFF"},iconColor:{type:String,required:!1,default:"#8066C7"},replaceRoute:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!1},modalOpen:{type:[Number,String,null],required:!1,default:null}},emits:["update:modelValue","modalOpen"],setup:function(a,l){var r=l.emit,u=a,i=t.useRouter(),c=t.useRoute(),d=e.ref(0),s=e.ref(0),f=e.ref([]),p=e.ref(!0),m=e.ref(0),v=e.ref(),y=e.ref(),b=e.computed((function(){return{"--swiper-color":u.swiperColor,"--icon-color":u.iconColor,"--background-color":u.backgroundColor}}));function h(){y.value&&Array.isArray(y.value)&&(m.value=y.value[0].offsetWidth),v.value&&(v.value.style.width=m.value+"px",v.value.style.transform="translateX(".concat(m.value*s.value,"px)"))}function g(){h()}function w(e,t){(t!==s.value||e.modal)&&(s.value=t,null!==d.value&&(f.value[d.value].selected=!1),f.value[t].selected=!0,d.value=s.value,function(e){r("update:modelValue",e.id),p.value=!1,setTimeout((function(){p.value=!0}),0),e.path&&Object.keys(e.path).length&&!e.modal&&(r("modalOpen",null),u.replaceRoute?i.replace(e.path).catch((function(){})):i.push(e.path));e.modal&&r("modalOpen",e.modalName)}(e))}e.watch((function(){return s.value}),(function(e){v.value&&(v.value.style.transform="translateX(".concat(m.value*e,"px)"))})),e.watch((function(){return u.modelValue}),(function(e,t){if(e!=t&&p.value){var n=f.value.findIndex((function(t){return t.id==e}));n>-1&&w(f.value[n],n)}})),e.watch(c,(function(t){t&&e.nextTick((function(){var e=f.value.findIndex((function(e){return"string"==typeof e.path?e.path===t.path:(e.path||{}).name===t.name}));e>-1&&w(f.value[e],e)}))}),{immediate:!0}),e.onMounted((function(){h(),window.addEventListener("resize",g)})),e.onBeforeUnmount((function(){return window.removeEventListener("resize",g)})),f.value=u.options.slice();var k=f.value.findIndex((function(e){return e.id==u.modelValue||"object"==typeof e.path&&(e.path||{}).name==(c||{}).name}));return k>-1&&(s.value=k,d.value=k,f.value[k].selected=!0),function(t,a){return e.openBlock(),e.createElementBlock("div",{class:"sm-btn-container-foreground",style:e.normalizeStyle(e.unref(b))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(f.value,(function(a,l){return e.openBlock(),e.createElementBlock("div",{key:"simple-btn-".concat(l),ref_for:!0,ref_key:"btnContainerRef",ref:y,class:"sm-btn-container",onClick:function(e){return w(a,l)}},[e.createElementVNode("div",o,[e.createElementVNode("div",{class:e.normalizeClass(["sm-btn-icon",{"sm-btn-icon-active":a.selected}])},[e.renderSlot(t.$slots,"icon",{props:a},(function(){return[e.createElementVNode("i",{class:e.normalizeClass("".concat(a.icon))},null,2)]}))],2),e.createElementVNode("div",{class:e.normalizeClass(["sm-btn-title",{"sm-btn-title-active":a.selected}])},e.toDisplayString(a.title),3)])],8,n)})),128)),e.createElementVNode("div",{ref_key:"borderSwiperRef",ref:v,class:"border-swiper"},null,512)],4)}}});a.__scopeId="data-v-22a64d79",a.__file="src/components/SwipeBottomNavigation.vue";var l={install:function(e){e.component("SwipeBottomNavigation",a)}};exports.SwipeBottomNavigation=a,exports.default=l;
