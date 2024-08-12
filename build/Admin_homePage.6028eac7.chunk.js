"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3981],{87512:(L,T,n)=>{n.r(T),n.d(T,{default:()=>We});var e=n(67294),f=n(97132),d=n(78384),j=n(15482),O=n(49656),l=n(68547),F=n(78862),W=n(62031),c=n(5493),g=n(34626),V=n(42462),$=n(32104);const A=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var E=n(9008),v=n(67826),h=n(49425),H=n(19408),z=n(77602),P=n.n(z),K=n(45697),r=n.n(K),Z=n(71289),N=n(66952),m=n(16289);const B=({type:t,title:a,number:o,content:s,hasLine:u})=>{const{formatMessage:y}=(0,f.useIntl)();return e.createElement(c.Box,null,e.createElement(v.Flex,null,e.createElement(c.Box,{minWidth:(0,l.pxToRem)(30),marginRight:5},e.createElement(Z.Z,{type:t,number:o})),e.createElement(h.Typography,{variant:"delta",as:"h3"},y(a))),e.createElement(v.Flex,{alignItems:"flex-start"},e.createElement(v.Flex,{justifyContent:"center",minWidth:(0,l.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},u&&e.createElement(N.Z,{type:t,minHeight:t===m.lW?(0,l.pxToRem)(85):(0,l.pxToRem)(65)})),e.createElement(c.Box,{marginTop:2},t===m.lW&&s)))};B.defaultProps={content:void 0,number:void 0,type:m.VM,hasLine:!0},B.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([m.lW,m.hx,m.VM]),hasLine:r().bool};const J=B,U=(t,a)=>t===-1||a<t?m.hx:a>t?m.VM:m.lW,C=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(s=>s.key===a);return e.createElement(c.Box,null,t.map((s,u)=>e.createElement(J,{key:s.key,title:s.title,content:s.content,number:u+1,type:U(o,u),hasLine:u!==t.length-1})))};C.defaultProps={currentSectionKey:void 0},C.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const Y=C;var Q=n(76910),X=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,G=(t,a,o)=>a in t?X(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,_=(t,a)=>{for(var o in a||(a={}))w.call(a,o)&&G(t,o,a[o]);if(b)for(var o of b(a))q.call(a,o)&&G(t,o,a[o]);return t};const ee=()=>{var t;const{guidedTourState:a,setSkipped:o}=(0,l.useGuidedTour)(),{formatMessage:s}=(0,f.useIntl)(),{trackUsage:u}=(0,l.useTracking)(),y=Object.entries(Q.Z).map(([p,i])=>({key:p,title:i.home.title,content:e.createElement(l.LinkButton,{onClick:()=>u(i.home.trackingEvent),to:i.home.cta.target,endIcon:e.createElement(P(),null)},s(i.home.cta.title))})),x=(t=y.map(p=>_({isDone:Object.entries(a[p.key]).every(([,i])=>i)},p)).find(p=>!p.isDone))==null?void 0:t.key,M=()=>{o(!0),u("didSkipGuidedtour")};return e.createElement(c.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(E.Stack,{spacing:6},e.createElement(h.Typography,{variant:"beta",as:"h2"},s({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(Y,{sections:y,currentSectionKey:x})),e.createElement(v.Flex,{justifyContent:"flex-end"},e.createElement(H.Button,{variant:"tertiary",onClick:M},s({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var te=n(13260),R=n(70677),ne=n(43257),ae=n.n(ne),oe=n(77108),re=n.n(oe),le=n(2807),se=n.n(le),ie=n(27962),de=n.n(ie),ce=n(70555),me=n.n(ce),ue=n(4250),pe=n.n(ue),ge=n(30153),fe=n.n(ge);const he=(0,d.default)(se())`
  path {
    fill: #7289da !important;
  }
`,ye=(0,d.default)(de())`
  > path:first-child {
    fill: #ff4500;
  }
`,I=(0,d.default)(me())`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`,Ee=(0,d.default)(pe())`
  path {
    fill: #1da1f2 !important;
  }
`,ve=(0,d.default)(fe())`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:e.createElement(re(),{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:e.createElement(he,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:e.createElement(Ee,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:e.createElement(ve,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(I,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(I,null),alt:"career"}],Te=(0,d.default)(te.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Be=(0,d.default)(g.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ce=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(c.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(c.Box,{paddingBottom:7},e.createElement(E.Stack,{spacing:5},e.createElement(E.Stack,{spacing:3},e.createElement(h.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(h.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(R.Link,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ae(),null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Be,null,Se.map(a=>e.createElement(g.GridItem,{col:6,s:12,key:a.name},e.createElement(Te,{size:"L",startIcon:a.icon,variant:"tertiary",href:a.link,isExternal:!0},a.name)))))},ke=(0,d.default)(h.Typography)`
  word-break: break-word;
`,xe=(0,d.default)(E.Stack)`
  align-items: flex-start;
`,k=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement("div",null,e.createElement(c.Box,{paddingLeft:6,paddingBottom:10},e.createElement(xe,{spacing:5},e.createElement(h.Typography,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ke,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(R.Link,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(H.Button,{size:"L",onClick:a,endIcon:e.createElement(P(),null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};k.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},k.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const Me=k;var Le=n(26163),He=n.n(Le),Pe=n(71533),be=n.n(Pe),Ge=n(63137),Re=n.n(Ge),Ie=n(85340),De=n.n(Ie);const S=d.default.a`
  text-decoration: none;
`,je=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(E.Stack,{spacing:5},e.createElement(S,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(l.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(He(),null),iconBackground:"primary100"})),e.createElement(S,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(be(),null),iconBackground:"warning100"})),e.createElement(S,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(Re(),null),iconBackground:"secondary100"})),e.createElement(S,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(De(),null),iconBackground:"alternative100"})))},Oe=(0,d.default)(c.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,Fe=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,$.bP)(),{guidedTourState:s,isGuidedTourVisible:u,isSkipped:y}=(0,l.useGuidedTour)(),D=!A(s)&&u&&!y,{push:x}=(0,O.useHistory)(),M=i=>{i.preventDefault(),x("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const i=Ve=>Ve.filter($e=>$e.isDisplayed);return i(t).length>1||i(a).length>0},[t,a]);return o?e.createElement(l.LoadingIndicatorPage,null):e.createElement(F.Layout,null,e.createElement(f.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},i=>e.createElement(j.Helmet,{title:i[0]})),e.createElement(W.Main,null,e.createElement(Oe,null,e.createElement("img",{alt:"","aria-hidden":!0,src:V})),e.createElement(c.Box,{padding:10},e.createElement(g.Grid,null,e.createElement(g.GridItem,{col:8,s:12},e.createElement(Me,{onCreateCT:M,hasCreatedContentType:p}))),e.createElement(g.Grid,{gap:6},e.createElement(g.GridItem,{col:8,s:12},D?e.createElement(ee,null):e.createElement(je,null)),e.createElement(g.GridItem,{col:4,s:12},e.createElement(Ce,null))))))},We=(0,e.memo)(Fe)},42462:(L,T,n)=>{L.exports=n.p+"fb376b132d18bf4522ca.png"}}]);
