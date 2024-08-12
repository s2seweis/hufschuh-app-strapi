(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4121],{81610:(F,K,d)=>{"use strict";F.exports=d(96233)},96233:function(F,K,d){(function(s,O){F.exports=O(d(67294),d(78384))})(this,function(s,O){return function(r){var h={};function n(i){if(h[i])return h[i].exports;var a=h[i]={i,l:!1,exports:{}};return r[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=r,n.c=h,n.d=function(i,a,c){n.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:c})},n.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,a){if(1&a&&(i=n(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var l in i)n.d(c,l,function(o){return i[o]}.bind(null,l));return c},n.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(a,"a",a),a},n.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},n.p="",n(n.s=121)}({0:function(r,h,n){r.exports=n(19)()},1:function(r,h){r.exports=s},10:function(r,h,n){var i=n(25),a=n(26),c=n(22),l=n(27);r.exports=function(o,b){return i(o)||a(o,b)||c(o,b)||l()},r.exports.default=r.exports,r.exports.__esModule=!0},121:function(r,h,n){"use strict";n.r(h),n.d(h,"Switch",function(){return j});var i,a,c=n(5),l=n.n(c),o=n(4),b=n.n(o),p=n(3),g=n.n(p),S=n(1),x=n.n(S),e=n(0),t=n.n(e),u=n(2),w=n.n(u),B=n(9),I=n(6),J=["label","onChange","onLabel","offLabel","selected","visibleLabels"],R=w.a.div(i||(i=g()([`
  background: `,`;
  border: none;
  border-radius: 16px;
  position: relative;
  height: `,`rem;
  width: `,`rem;

  & span {
    font-size: `,`;
  }

  &:before {
    content: '';
    background: `,`;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: `,`;
    top: `,`;
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`])),function(T){return T.theme.colors.danger500},1.5,2.5,function(T){return T.visibleLabels?"1rem":0},function(T){return T.theme.colors.neutral0},function(T){return T.theme.spaces[1]},function(T){return T.theme.spaces[1]}),q=w.a.button(a||(a=g()([`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] `,` {
    background: `,`;
  }

  &[aria-checked='true'] `,`:before {
    transform: translateX(1rem);
  }
`])),R,function(T){return T.theme.colors.success500},R),j=x.a.forwardRef(function(T,_){var ee=T.label,ne=T.onChange,V=T.onLabel,z=T.offLabel,G=T.selected,$=T.visibleLabels,te=b()(T,J);return x.a.createElement(q,l()({ref:_,role:"switch","aria-checked":G,"aria-label":ee,onClick:ne,visibleLabels:$,type:"button"},te),x.a.createElement(B.Flex,null,x.a.createElement(R,null,x.a.createElement("span",null,V),x.a.createElement("span",null,z)),$&&x.a.createElement(I.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:G?"success600":"danger600"},G?V:z)))});j.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},j.propTypes={label:t.a.string.isRequired,offLabel:t.a.string,onChange:t.a.func.isRequired,onLabel:t.a.string,selected:t.a.bool.isRequired,visibleLabels:t.a.bool},j.displayName="Switch"},13:function(r,h){function n(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=n=function(a){return typeof a},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=n=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r.exports.default=r.exports,r.exports.__esModule=!0),n(i)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,h,n){"use strict";var i=n(20);function a(){}function c(){}c.resetWarningCache=a,r.exports=function(){function l(p,g,S,x,e,t){if(t!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function o(){return l}l.isRequired=l;var b={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:o,element:l,elementType:l,instanceOf:o,node:l,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:c,resetWarningCache:a};return b.PropTypes=b,b}},2:function(r,h){r.exports=O},20:function(r,h,n){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,h){r.exports=function(n,i){(i==null||i>n.length)&&(i=n.length);for(var a=0,c=new Array(i);a<i;a++)c[a]=n[a];return c},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,h,n){var i=n(21);r.exports=function(a,c){if(a){if(typeof a=="string")return i(a,c);var l=Object.prototype.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(a,c):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,h){r.exports=function(n,i){if(n==null)return{};var a,c,l={},o=Object.keys(n);for(c=0;c<o.length;c++)a=o[c],i.indexOf(a)>=0||(l[a]=n[a]);return l},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,h){r.exports=function(n){if(Array.isArray(n))return n},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,h){r.exports=function(n,i){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var c,l,o=[],b=!0,p=!1;try{for(a=a.call(n);!(b=(c=a.next()).done)&&(o.push(c.value),!i||o.length!==i);b=!0);}catch(g){p=!0,l=g}finally{try{b||a.return==null||a.return()}finally{if(p)throw l}}return o}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,h){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,h){r.exports=function(n,i){return i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,h,n){var i=n(24);r.exports=function(a,c){if(a==null)return{};var l,o,b=i(a,c);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(o=0;o<p.length;o++)l=p[o],c.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(b[l]=a[l])}return b},r.exports.default=r.exports,r.exports.__esModule=!0},5:function(r,h){function n(){return r.exports=n=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(i[l]=c[l])}return i},r.exports.default=r.exports,r.exports.__esModule=!0,n.apply(this,arguments)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,h,n){"use strict";n.r(h),n.d(h,"Box",function(){return x});var i,a=n(3),c=n.n(a),l=n(0),o=n.n(l),b=n(2),p=n.n(b),g=n(7),S={color:!0},x=p.a.div.withConfig({shouldForwardProp:function(e,t){return!S[e]&&t(e)}})(i||(i=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t},function(e){var t=e.theme,u=e.background;return t.colors[u]},function(e){var t=e.theme,u=e.color;return t.colors[u]},function(e){var t=e.theme,u=e.padding;return Object(g.a)("padding",u,t)},function(e){var t=e.theme,u=e.paddingTop;return Object(g.a)("padding-top",u,t)},function(e){var t=e.theme,u=e.paddingRight;return Object(g.a)("padding-right",u,t)},function(e){var t=e.theme,u=e.paddingBottom;return Object(g.a)("padding-bottom",u,t)},function(e){var t=e.theme,u=e.paddingLeft;return Object(g.a)("padding-left",u,t)},function(e){var t=e.theme,u=e.marginLeft;return Object(g.a)("margin-left",u,t)},function(e){var t=e.theme,u=e.marginRight;return Object(g.a)("margin-right",u,t)},function(e){var t=e.theme,u=e.marginTop;return Object(g.a)("margin-top",u,t)},function(e){var t=e.theme,u=e.marginBottom;return Object(g.a)("margin-bottom",u,t)},function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(e){var t=e.theme,u=e.hasRadius,w=e.borderRadius;return u?t.borderRadius:w},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var t=e.borderColor;return e.theme.colors[t]},function(e){var t=e.theme,u=e.borderColor,w=e.borderStyle,B=e.borderWidth;if(u&&!w&&!B)return"1px solid ".concat(t.colors[u])},function(e){var t=e.theme,u=e.shadow;return t.shadows[u]},function(e){return e.pointerEvents},function(e){var t=e._hover,u=e.theme;return t?t(u):void 0},function(e){return e.display},function(e){return e.position},function(e){var t=e.left;return e.theme.spaces[t]||t},function(e){var t=e.right;return e.theme.spaces[t]||t},function(e){var t=e.top;return e.theme.spaces[t]||t},function(e){var t=e.bottom;return e.theme.spaces[t]||t},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var t=e.width;return e.theme.spaces[t]||t},function(e){var t=e.maxWidth;return e.theme.spaces[t]||t},function(e){var t=e.minWidth;return e.theme.spaces[t]||t},function(e){var t=e.height;return e.theme.spaces[t]||t},function(e){var t=e.maxHeight;return e.theme.spaces[t]||t},function(e){var t=e.minHeight;return e.theme.spaces[t]||t},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});x.displayName="Box",x.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},x.propTypes={_hover:o.a.func,background:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.string]),borderColor:o.a.string,children:o.a.oneOfType([o.a.node,o.a.string]),color:o.a.string,flex:o.a.oneOfType([o.a.string,o.a.string]),grow:o.a.oneOfType([o.a.string,o.a.string]),hasRadius:o.a.bool,hiddenS:o.a.bool,hiddenXS:o.a.bool,padding:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingBottom:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingLeft:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingRight:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingTop:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),shadow:o.a.string,shrink:o.a.oneOfType([o.a.string,o.a.string])}},7:function(r,h,n){"use strict";var i=n(10),a=n.n(i),c=n(13),l=n.n(c);h.a=function(o,b,p){var g=b;if(Array.isArray(b)||l()(b)!=="object"||(g=[b==null?void 0:b.desktop,b==null?void 0:b.tablet,b==null?void 0:b.mobile]),g!==void 0){if(Array.isArray(g)){var S=g,x=a()(S,3),e=x[0],t=x[1],u=x[2],w="".concat(o,": ").concat(p.spaces[e],";");return t!==void 0&&(w+="".concat(p.mediaQueries.tablet,`{
          `).concat(o,": ").concat(p.spaces[t],`;
        }`)),u!==void 0&&(w+="".concat(p.mediaQueries.mobile,`{
          `).concat(o,": ").concat(p.spaces[u],`;
        }`)),w}var B=p.spaces[g]||g;return"".concat(o,": ").concat(B,";")}}},9:function(r,h,n){"use strict";n.r(h),n.d(h,"Flex",function(){return e});var i,a=n(3),c=n.n(a),l=n(0),o=n.n(l),b=n(2),p=n.n(b),g=n(6),S=n(7),x={direction:!0},e=p()(g.Box).withConfig({shouldForwardProp:function(t,u){return!x[t]&&u(t)}})(i||(i=c()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.wrap},function(t){var u=t.gap,w=t.theme;return Object(S.a)("gap",u,w)},function(t){return t.justifyContent});e.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},e.propTypes={alignItems:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.number]),direction:o.a.string,gap:o.a.oneOfType([o.a.shape({desktop:o.a.number,mobile:o.a.number,tablet:o.a.number}),o.a.number,o.a.arrayOf(o.a.number),o.a.string]),inline:o.a.bool,justifyContent:o.a.string,reverse:o.a.bool,wrap:o.a.string}}})})},77967:(F,K,d)=>{"use strict";d.r(K),d.d(K,{default:()=>Ee});var s=d(67294),O=d(68547),r=d(92699),h=d(49656),n=d(97132),i=d(78862),a=d(62791),c=d(67826),l=d(9008),o=d(30741),b=d(59522),p=d(41798),g=d(49425),S=d(19408),x=d(26851),e=d(81610),t=d(62031),u=d(84686),w=d(5493),B=d(80768),I=d.n(B),J=d(19352),R=d.n(J),q=d(18568),j=d.n(q),T=d(85407),_=d.n(T),ee=d(8041),ne=d(36968),V=d.n(ne);const z={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},$=(v,y)=>(0,ee.default)(v,m=>{switch(y.type){case"GET_DATA_SUCCEEDED":{m.webhooks=y.data,m.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{m.loadingWebhooks=!v.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{V()(m,["webhooks",...y.keys],y.value);break}case"SET_WEBHOOK_TO_DELETE":{m.webhookToDelete=y.id;break}case"SET_WEBHOOKS_TO_DELETE":{y.value?m.webhooksToDelete.push(y.id):m.webhooksToDelete=v.webhooksToDelete.filter(k=>k!==y.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{v.webhooksToDelete.length===0?m.webhooksToDelete=v.webhooks.map(k=>k.id):m.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{m.webhooks=v.webhooks.filter(k=>!v.webhooksToDelete.includes(k.id)),m.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{m.webhooks=v.webhooks.filter((k,W)=>W!==y.index),m.webhookToDelete=null;break}default:return m}});var te=d(25108),pe=Object.defineProperty,he=Object.defineProperties,me=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,ie=(v,y,m)=>y in v?pe(v,y,{enumerable:!0,configurable:!0,writable:!0,value:m}):v[y]=m,H=(v,y)=>{for(var m in y||(y={}))be.call(y,m)&&ie(v,m,y[m]);if(ae)for(var m of ae(y))ge.call(y,m)&&ie(v,m,y[m]);return v},ye=(v,y)=>he(v,me(y)),U=(v,y,m)=>new Promise((k,W)=>{var A=D=>{try{E(m.next(D))}catch(M){W(M)}},C=D=>{try{E(m.throw(D))}catch(M){W(M)}},E=D=>D.done?k(D.value):Promise.resolve(D.value).then(A,C);E((m=m.apply(v,y)).next())});const ve=()=>{const{isLoading:v,allowedActions:{canCreate:y,canRead:m,canUpdate:k,canDelete:W}}=(0,O.useRBAC)(r.Z.settings.webhooks),A=(0,O.useNotification)(),C=(0,s.useRef)(!0),{formatMessage:E}=(0,n.useIntl)(),[D,M]=(0,s.useState)(!1),[{webhooks:Q,webhooksToDelete:X,webhookToDelete:oe,loadingWebhooks:re},P]=(0,s.useReducer)($,z),{notifyStatus:xe}=(0,u.useNotifyAT)();(0,O.useFocusWhenNavigate)();const{push:Te}=(0,h.useHistory)(),{pathname:se}=(0,h.useLocation)(),Z=Q.length,N=X.length,le=f=>Q.findIndex(L=>L.id===f);(0,s.useEffect)(()=>(C.current=!0,()=>{C.current=!1}),[]),(0,s.useEffect)(()=>{m&&Oe()},[m]);const Oe=()=>U(void 0,null,function*(){try{const{data:f}=yield(0,O.request)("/admin/webhooks",{method:"GET"});C.current&&(P({type:"GET_DATA_SUCCEEDED",data:f}),xe("webhooks have been loaded"))}catch(f){te.log(f),C.current&&(f.code!==20&&A({type:"warning",message:{id:"notification.error"}}),P({type:"TOGGLE_LOADING"}))}}),we=()=>{M(f=>!f)},Se=()=>{oe?ke():Le()},ke=()=>U(void 0,null,function*(){try{yield(0,O.request)(`/admin/webhooks/${oe}`,{method:"DELETE"}),P({type:"WEBHOOK_DELETED",index:le(oe)})}catch(f){f.code!==20&&A({type:"warning",message:{id:"notification.error"}})}M(!1)}),Le=()=>U(void 0,null,function*(){const f={ids:X};try{yield(0,O.request)("/admin/webhooks/batch-delete",{method:"POST",body:f}),C.current&&P({type:"WEBHOOKS_DELETED"})}catch(L){C.current&&L.code!==20&&A({type:"warning",message:{id:"notification.error"}})}M(!1)}),ue=f=>{M(!0),f!=="all"&&P({type:"SET_WEBHOOK_TO_DELETE",id:f})},Ce=(f,L)=>U(void 0,null,function*(){const ce=le(L),Me=Q[ce],de=[ce,"isEnabled"],fe=ye(H({},Me),{isEnabled:f});delete fe.id;try{P({type:"SET_WEBHOOK_ENABLED",keys:de,value:f}),yield(0,O.request)(`/admin/webhooks/${L}`,{method:"PUT",body:fe})}catch(Be){C.current&&(P({type:"SET_WEBHOOK_ENABLED",keys:de,value:!f}),Be.code!==20&&A({type:"warning",message:{id:"notification.error"}}))}}),De=()=>{P({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Pe=(f,L)=>{P({type:"SET_WEBHOOKS_TO_DELETE",value:f,id:L})},Y=f=>{Te(`${se}/${f}`)};return s.createElement(i.Layout,null,s.createElement(O.SettingsPageTitle,{name:"Webhooks"}),s.createElement(t.Main,{"aria-busy":v||re},s.createElement(i.HeaderLayout,{title:E({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:E({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:y&&!re&&s.createElement(O.LinkButton,{startIcon:s.createElement(I(),null),variant:"default",to:`${se}/create`,size:"L"},E({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),N>0&&W&&s.createElement(i.ActionLayout,{startActions:s.createElement(s.Fragment,null,s.createElement(g.Typography,{variant:"epsilon",textColor:"neutral600"},E({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:N})),s.createElement(S.Button,{onClick:()=>ue("all"),startIcon:s.createElement(j(),null),size:"L",variant:"danger-light"},E({id:"global.delete",defaultMessage:"Delete"})))}),s.createElement(i.ContentLayout,null,v||re?s.createElement(w.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},s.createElement(O.LoadingIndicatorPage,null)):s.createElement(s.Fragment,null,Z>0?s.createElement(p.Table,{colCount:5,rowCount:Z+1,footer:s.createElement(p.TFooter,{onClick:()=>y?Y("create"):{},icon:s.createElement(I(),null)},E({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},s.createElement(p.Thead,null,s.createElement(p.Tr,null,s.createElement(p.Th,null,s.createElement(b.BaseCheckbox,{"aria-label":E({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:N>0&&N<Z,value:N===Z,onValueChange:De})),s.createElement(p.Th,{width:"20%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},E({id:"global.name",defaultMessage:"Name"}))),s.createElement(p.Th,{width:"60%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},E({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),s.createElement(p.Th,{width:"20%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},E({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),s.createElement(p.Th,null,s.createElement(x.VisuallyHidden,null,E({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),s.createElement(p.Tbody,null,Q.map(f=>s.createElement(p.Tr,H({key:f.id},(0,O.onRowClick)({fn:()=>Y(f.id),condition:k})),s.createElement(p.Td,H({},O.stopPropagation),s.createElement(b.BaseCheckbox,{"aria-label":`${E({id:"global.select",defaultMessage:"Select"})} ${f.name}`,value:X==null?void 0:X.includes(f.id),onValueChange:L=>Pe(L,f.id),id:"select",name:"select"})),s.createElement(p.Td,null,s.createElement(g.Typography,{fontWeight:"semiBold",textColor:"neutral800"},f.name)),s.createElement(p.Td,null,s.createElement(g.Typography,{textColor:"neutral800"},f.url)),s.createElement(p.Td,null,s.createElement(c.Flex,H({},O.stopPropagation),s.createElement(e.Switch,{onLabel:E({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:E({id:"global.disabled",defaultMessage:"Disabled"}),label:`${f.name} ${E({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:f.isEnabled,onChange:()=>Ce(!f.isEnabled,f.id),visibleLabels:!0}))),s.createElement(p.Td,null,s.createElement(l.Stack,H({horizontal:!0,spacing:1},O.stopPropagation),k&&s.createElement(o.IconButton,{onClick:()=>{Y(f.id)},label:E({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:s.createElement(R(),null),noBorder:!0}),W&&s.createElement(o.IconButton,{onClick:()=>ue(f.id),label:E({id:"global.delete",defaultMessage:"Delete"}),icon:s.createElement(j(),null),noBorder:!0,id:`delete-${f.id}`}))))))):s.createElement(a.EmptyStateLayout,{icon:s.createElement(_(),{width:"160px"}),content:E({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:s.createElement(S.Button,{variant:"secondary",startIcon:s.createElement(I(),null),onClick:()=>y?Y("create"):{}},E({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),s.createElement(O.ConfirmDialog,{isOpen:D,onToggleDialog:we,onConfirm:Se}))},Ee=()=>s.createElement(O.CheckPagePermissions,{permissions:r.Z.settings.webhooks.main},s.createElement(ve,null))}}]);
