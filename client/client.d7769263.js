function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d=!1;function h(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function p(t,e){if(d){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:h(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t,e,n){d&&!n?p(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function w(){return y(" ")}function E(){return y("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const N=["width","height"];function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set&&-1===N.indexOf(r)?t[r]=e[r]:T(t,r,e[r])}function L(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function I(t){return Array.from(t.childNodes)}function P(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){P(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function O(t,e,n){return k(t,e,n,_)}function C(t,e,n){return k(t,e,n,v)}function H(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>y(e)),!0)}function M(t){return H(t," ")}function U(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function j(t,e){const n=U(t,"HTML_TAG_START",0),r=U(t,"HTML_TAG_END",n);if(n===r)return new Y(void 0,e);P(t);const s=t.splice(n,r-n+1);b(s[0]),b(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Y(o,e)}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function z(t,e,n,r){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let B,q;function K(){if(void 0===B){B=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){B=!0}}return B}function W(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=K();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=x(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=x(n.contentWindow,"resize",e),e()}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),b(n)}}function J(t,e){const n=[];let r=0;for(const s of e.childNodes)if(8===s.nodeType){const e=s.textContent.trim();e===`HEAD_${t}_END`?(r-=1,n.push(s)):e===`HEAD_${t}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class V{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=v(e.nodeName):this.e=_(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(b)}}class Y extends V{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}}function F(t,e){return new t(e)}function X(t){q=t}function Q(){if(!q)throw new Error("Function called outside component initialization");return q}function Z(t){Q().$$.on_mount.push(t)}function tt(t){Q().$$.after_update.push(t)}function et(t){Q().$$.on_destroy.push(t)}const nt=[],rt=[];let st=[];const ot=[],it=Promise.resolve();let at=!1;function ct(t){st.push(t)}const lt=new Set;let ut=0;function ft(){if(0!==ut)return;const t=q;do{try{for(;ut<nt.length;){const t=nt[ut];ut++,X(t),dt(t.$$)}}catch(t){throw nt.length=0,ut=0,t}for(X(null),nt.length=0,ut=0;rt.length;)rt.pop()();for(let t=0;t<st.length;t+=1){const e=st[t];lt.has(e)||(lt.add(e),e())}st.length=0}while(nt.length);for(;ot.length;)ot.pop()();at=!1,lt.clear(),X(t)}function dt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}const ht=new Set;let pt;function mt(){pt={r:0,c:[],p:pt}}function gt(){pt.r||s(pt.c),pt=pt.p}function bt(t,e){t&&t.i&&(ht.delete(t),t.i(e))}function $t(t,e,n,r){if(t&&t.o){if(ht.has(t))return;ht.add(t),pt.c.push((()=>{ht.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function _t(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function vt(t){return"object"==typeof t&&null!==t?t:{}}function yt(t){t&&t.c()}function wt(t,e){t&&t.l(e)}function Et(t,e,r,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,r),i||ct((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(ct)}function xt(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];st.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),st=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){-1===t.$$.dirty[0]&&(nt.push(t),at||(at=!0,it.then(ft)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(e,n,o,i,a,c,l,u=[-1]){const f=q;X(e);const h=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(h.root);let p=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),p&&St(e,t)),n})):[],h.update(),p=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){d=!0;const t=I(n.target);h.fragment&&h.fragment.l(t),t.forEach(b)}else h.fragment&&h.fragment.c();n.intro&&bt(e.$$.fragment),Et(e,n.target,n.anchor,n.customElement),d=!1,ft()}X(f)}class Nt{$destroy(){xt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const At=[];function Lt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!At.length;for(const t of s)t[1](),At.push(t,e);if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&r&&(r(),r=null)}}}}const It={};var Pt={owner:"Iuleoo",repo:"Upptime",sites:[{name:"Google",url:"https://www.google.com"},{name:"Wikipedia",url:"https://zh.wikipedia.org"},{name:"YAYAL",url:"https://www.yayal.cc"},{name:"Cloudflare DNS",url:"1.1.1.1",port:53,check:"tcp-ping"}],"status-website":{cname:"upptime.yayal.cc",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Welcome**",introMessage:"这是[**YAYAL**](https://www.yayal.cc/)的服务状态页面",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},i18n:{activeIncidents:"当前事件",allSystemsOperational:"所有系统运行正常",incidentReport:"事件 #$NUMBER 追踪 →",activeIncidentSummary:"Opened at $DATE 更新 $POSTS 动态",incidentTitle:"事件 $NUMBER 详情",incidentDetails:"事件追踪",incidentFixed:"已解决",incidentOngoing:"处理中",incidentOpenedAt:"发生时间",incidentClosedAt:"解决时间",incidentViewOnGitHub:"前往 GitHub 关注动态",incidentCommentSummary:"$DATE 由 $AUTHOR 发布",incidentBack:"← 查看所有事件",pastIncidents:"已解决事件",pastIncidentsResolved:"$MINUTES 分钟解决，产生 $POSTS 条记录",liveStatus:"服务状态看板",overallUptime:"服务可用率: $UPTIME",overallUptimeTitle:"服务可用率",averageResponseTime:"平均响应: $TIMEms",averageResponseTimeTitle:"接口响应",sevelDayResponseTime:"7日响应趋势",responseTimeMs:"响应时长（ms）",up:"正常",down:"中断",degraded:"性能下降",ms:"ms",loading:"加载中",navGitHub:"GitHub",footer:"本页面开源托管于 [Github]($REPO), 基于 [Upptime](https://upptime.js.org) 构建",rateLimitExceededTitle:"访问频率受限",rateLimitExceededIntro:"您已达到每小时访问上限，请稍候重试或绑定 GitHub 令牌继续访问。",rateLimitExceededWhatDoesErrorMean:"为何出现此提示？",rateLimitExceededErrorMeaning:"因使用 GitHub 接口获取数据，每个 IP 每小时限访问 60 次。",rateLimitExceededErrorHowCanFix:"如何恢复访问？",rateLimitExceededErrorFix:"等待 1 小时自动恢复，或绑定个人令牌可提升至每小时 5,000 次。",rateLimitExceededGeneratePAT:"获取个人令牌指南。",rateLimitExceededHasSet:"您已绑定访问令牌。",rateLimitExceededRemoveToken:"解除绑定",rateLimitExceededGitHubPAT:"GitHub 访问令牌",rateLimitExceededCopyPastePAT:"输入您的令牌",rateLimitExceededSaveToken:"保存设置",errorTitle:"数据加载失败",errorIntro:"获取最新状态时出现异常。",errorText:"建议稍后刷新重试。",errorHome:"返回主页",pastScheduledMaintenance:"维护记录",scheduledMaintenance:"计划性维护",scheduledMaintenanceSummaryStarted:"维护进行中 $DATE 开始，持续 $DURATION 分钟",scheduledMaintenanceSummaryStarts:"维护预告 $DATE 开始，预计 $DURATION 分钟",startedAt:"开始于",startsAt:"计划于",duration:"时长",durationMin:"$DURATION 分钟",incidentCompleted:"维护完成",incidentScheduled:"维护预告",duration24H:"24小时",duration7D:"7天",duration30D:"30天",duration1Y:"1年",durationAll:"全部时段",locale:"zh-CN"},path:"https://upptime.yayal.cc"};function Rt(t,e,n){const r=t.slice();return r[1]=e[n],r}function kt(e){let n,r,s,o=Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&function(){let e,n;return{c(){e=_("img"),this.h()},l(t){e=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){T(e,"alt",""),c(e.src,n=Pt["status-website"].logoUrl)||T(e,"src",n),T(e,"class","svelte-a08hsz")},m(t,n){g(t,e,n)},p:t,d(t){t&&b(e)}}}(),i=Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&function(){let e,n,r=Pt["status-website"].name+"";return{c(){e=_("div"),n=y(r)},l(t){e=O(t,"DIV",{});var s=I(e);n=H(s,r),s.forEach(b)},m(t,r){g(t,e,r),p(e,n)},p:t,d(t){t&&b(e)}}}();return{c(){n=_("div"),r=_("a"),o&&o.c(),s=w(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=I(n);r=O(e,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=M(a),i&&i.l(a),a.forEach(b),e.forEach(b),this.h()},h(){T(r,"href",Pt["status-website"].logoHref||Pt.path),T(r,"class","logo svelte-a08hsz")},m(t,e){g(t,n,e),p(n,r),o&&o.m(r,null),p(r,s),i&&i.m(r,null)},p(t,e){Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&o.p(t,e),Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&b(n),o&&o.d(),i&&i.d()}}}function Ot(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=_("li"),n=_("a"),r=y(i),o=w(),this.h()},l(t){e=O(t,"LI",{});var s=I(e);n=O(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=I(n);r=H(a,i),a.forEach(b),o=M(s),s.forEach(b),this.h()},h(){T(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),T(n,"href",t[1].href.replace("$OWNER",Pt.owner).replace("$REPO",Pt.repo)),T(n,"target",t[1].target||"_self"),T(n,"class","svelte-a08hsz")},m(t,s){g(t,e,s),p(e,n),p(n,r),p(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&T(n,"aria-current",s)},d(t){t&&b(e)}}}function Ct(e){let n,r,s,o,i,a=Pt["status-website"]&&Pt["status-website"].logoUrl&&kt(),c=Pt["status-website"]&&Pt["status-website"].navbar&&function(t){let e,n=Pt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ot(Rt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,n);g(t,e,n)},p(t,s){if(1&s){let o;for(n=Pt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Rt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Ot(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&b(e)}}}(e),l=Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&function(){let e,n,r,s=Pt.i18n.navGitHub+"";return{c(){e=_("li"),n=_("a"),r=y(s),this.h()},l(t){e=O(t,"LI",{});var o=I(e);n=O(o,"A",{href:!0,class:!0});var i=I(n);r=H(i,s),i.forEach(b),o.forEach(b),this.h()},h(){T(n,"href",`https://github.com/${Pt.owner}/${Pt.repo}`),T(n,"class","svelte-a08hsz")},m(t,s){g(t,e,s),p(e,n),p(n,r)},p:t,d(t){t&&b(e)}}}();return{c(){n=_("nav"),r=_("div"),a&&a.c(),s=w(),o=_("ul"),c&&c.c(),i=w(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=I(n);r=O(e,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=M(u),o=O(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=M(f),l&&l.l(f),f.forEach(b),u.forEach(b),e.forEach(b),this.h()},h(){T(o,"class","svelte-a08hsz"),T(r,"class","container svelte-a08hsz"),T(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e),p(n,r),a&&a.m(r,null),p(r,s),p(r,o),c&&c.m(o,null),p(o,i),l&&l.m(o,null)},p(t,[e]){Pt["status-website"]&&Pt["status-website"].logoUrl&&a.p(t,e),Pt["status-website"]&&Pt["status-website"].navbar&&c.p(t,e),Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&b(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ht(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Mt extends Nt{constructor(t){super(),Tt(this,t,Ht,Ct,i,{segment:0})}}var Ut={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function jt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Dt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ut[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+jt(Dt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Gt(jt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Dt(s[8])+'" alt="'+Dt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Dt(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Gt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Dt(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function zt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Bt(t,e,n){const r=t.slice();return r[3]=e[n],r}function qt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Kt(e){let n,r,s,o,i,a;return{c(){n=_("script"),r=y("// If `prefers-color-scheme` is not supported, fall back to light mode.\n      // In this case, light.css will be downloaded with `highest` priority.\n      if (typeof window !== \"undefined\" && typeof document !== \"undefined\" && \"matchMedia\" in window && window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {\n        document.documentElement.style.display = 'none';\n        document.head.insertAdjacentHTML(\n          'beforeend',\n          '<link rel=\"stylesheet\" href={`${config.path}/themes/light.css`} onload=\"document.documentElement.style.display = \\'\\'\">',\n        );\n      }"),s=w(),o=_("link"),i=w(),a=_("link"),this.h()},l(t){n=O(t,"SCRIPT",{});var e=I(n);r=H(e,"// If `prefers-color-scheme` is not supported, fall back to light mode.\n      // In this case, light.css will be downloaded with `highest` priority.\n      if (typeof window !== \"undefined\" && typeof document !== \"undefined\" && \"matchMedia\" in window && window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {\n        document.documentElement.style.display = 'none';\n        document.head.insertAdjacentHTML(\n          'beforeend',\n          '<link rel=\"stylesheet\" href={`${config.path}/themes/light.css`} onload=\"document.documentElement.style.display = \\'\\'\">',\n        );\n      }"),e.forEach(b),s=M(t),o=O(t,"LINK",{rel:!0,href:!0,media:!0}),i=M(t),a=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(o,"rel","stylesheet"),T(o,"href",`${Pt.path}/themes/light.css`),T(o,"media","(prefers-color-scheme: light)"),T(a,"rel","stylesheet"),T(a,"href",`${Pt.path}/themes/dark.css`),T(a,"media","(prefers-color-scheme: dark)")},m(t,e){g(t,n,e),p(n,r),g(t,s,e),g(t,o,e),g(t,i,e),g(t,a,e)},p:t,d(t){t&&b(n),t&&b(s),t&&b(o),t&&b(i),t&&b(a)}}}function Wt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",`${Pt.path}/themes/${Pt["status-website"].theme}.css`)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Jt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",(Pt["status-website"]||{}).themeUrl)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Vt(e){let n,r;return{c(){n=_("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),I(n).forEach(b),this.h()},h(){c(n.src,r=e[8].src)||T(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Yt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(n,"rel",e[3].rel),T(n,"href",e[3].href),T(n,"media",e[3].media)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ft(e){let n;return{c(){n=_("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){T(n,"name",e[3].name),T(n,"content",e[3].content)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Xt(e){let n,r,s,o,i,a,c,u,f,d,h,m,v,y,x,S,N,A,L=Gt(Pt.i18n.footer.replace(/\$REPO/,`https://github.com/${Pt.owner}/${Pt.repo}`))+"",P=(Pt["status-website"]||{}).customHeadHtml&&function(){let e,n,r=(Pt["status-website"]||{}).customHeadHtml+"";return{c(){e=new Y(!1),n=E(),this.h()},l(t){e=j(t,!1),n=E(),this.h()},h(){e.a=n},m(t,s){e.m(r,t,s),g(t,n,s)},p:t,d(t){t&&b(n),t&&e.d()}}}();let R=((Pt["status-website"]||{}).themeUrl?Jt:(Pt["status-website"]||{}).theme?Wt:Kt)(e),k=(Pt["status-website"]||{}).scripts&&function(t){let e,n=(Pt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Vt(qt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,n);g(t,e,n)},p(t,e){},d(t){$(r,t),t&&b(e)}}}(e),C=(Pt["status-website"]||{}).links&&function(t){let e,n=(Pt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Yt(Bt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,n);g(t,e,n)},p(t,e){},d(t){$(r,t),t&&b(e)}}}(e),H=(Pt["status-website"]||{}).metaTags&&function(t){let e,n=(Pt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ft(zt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,n);g(t,e,n)},p(t,e){},d(t){$(r,t),t&&b(e)}}}(e),U=Pt["status-website"].css&&function(){let e,n,r=`<style>${Pt["status-website"].css}</style>`;return{c(){e=new Y(!1),n=E(),this.h()},l(t){e=j(t,!1),n=E(),this.h()},h(){e.a=n},m(t,s){e.m(r,t,s),g(t,n,s)},p:t,d(t){t&&b(n),t&&e.d()}}}(),D=Pt["status-website"].js&&function(){let e,n,r=`<script>${Pt["status-website"].js}<\/script>`;return{c(){e=new Y(!1),n=E(),this.h()},l(t){e=j(t,!1),n=E(),this.h()},h(){e.a=n},m(t,s){e.m(r,t,s),g(t,n,s)},p:t,d(t){t&&b(n),t&&e.d()}}}(),G=(Pt["status-website"]||{}).customBodyHtml&&function(){let e,n,r=(Pt["status-website"]||{}).customBodyHtml+"";return{c(){e=new Y(!1),n=E(),this.h()},l(t){e=j(t,!1),n=E(),this.h()},h(){e.a=n},m(t,s){e.m(r,t,s),g(t,n,s)},p:t,d(t){t&&b(n),t&&e.d()}}}();m=new Mt({props:{segment:e[0]}});const z=e[2].default,B=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(z,e,e[1],null);return{c(){P&&P.c(),n=E(),R.c(),r=_("link"),s=_("link"),o=_("link"),k&&k.c(),i=E(),C&&C.c(),a=E(),H&&H.c(),c=E(),U&&U.c(),u=E(),D&&D.c(),f=E(),d=w(),G&&G.c(),h=w(),yt(m.$$.fragment),v=w(),y=_("main"),B&&B.c(),x=w(),S=_("footer"),N=_("p"),this.h()},l(t){const e=J("svelte-z1n8lm",document.head);P&&P.l(e),n=E(),R.l(e),r=O(e,"LINK",{rel:!0,href:!0}),s=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=E(),C&&C.l(e),a=E(),H&&H.l(e),c=E(),U&&U.l(e),u=E(),D&&D.l(e),f=E(),e.forEach(b),d=M(t),G&&G.l(t),h=M(t),wt(m.$$.fragment,t),v=M(t),y=O(t,"MAIN",{class:!0});var l=I(y);B&&B.l(l),l.forEach(b),x=M(t),S=O(t,"FOOTER",{class:!0});var p=I(S);N=O(p,"P",{}),I(N).forEach(b),p.forEach(b),this.h()},h(){T(r,"rel","stylesheet"),T(r,"href",`${Pt.path}/global.css`),T(s,"rel","icon"),T(s,"type","image/svg"),T(s,"href",(Pt["status-website"]||{}).faviconSvg||(Pt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),T(o,"rel","icon"),T(o,"type","image/png"),T(o,"href",(Pt["status-website"]||{}).favicon||"/logo-192.png"),T(y,"class","container"),T(S,"class","svelte-jbr799")},m(t,e){P&&P.m(document.head,null),p(document.head,n),R.m(document.head,null),p(document.head,r),p(document.head,s),p(document.head,o),k&&k.m(document.head,null),p(document.head,i),C&&C.m(document.head,null),p(document.head,a),H&&H.m(document.head,null),p(document.head,c),U&&U.m(document.head,null),p(document.head,u),D&&D.m(document.head,null),p(document.head,f),g(t,d,e),G&&G.m(t,e),g(t,h,e),Et(m,t,e),g(t,v,e),g(t,y,e),B&&B.m(y,null),g(t,x,e),g(t,S,e),p(S,N),N.innerHTML=L,A=!0},p(t,[e]){(Pt["status-website"]||{}).customHeadHtml&&P.p(t,e),R.p(t,e),(Pt["status-website"]||{}).scripts&&k.p(t,e),(Pt["status-website"]||{}).links&&C.p(t,e),(Pt["status-website"]||{}).metaTags&&H.p(t,e),Pt["status-website"].css&&U.p(t,e),Pt["status-website"].js&&D.p(t,e),(Pt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(B,z,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(z,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(bt(m.$$.fragment,t),bt(B,t),A=!0)},o(t){$t(m.$$.fragment,t),$t(B,t),A=!1},d(t){P&&P.d(t),b(n),R.d(t),b(r),b(s),b(o),k&&k.d(t),b(i),C&&C.d(t),b(a),H&&H.d(t),b(c),U&&U.d(t),b(u),D&&D.d(t),b(f),t&&b(d),G&&G.d(t),t&&b(h),xt(m,t),t&&b(v),t&&b(y),B&&B.d(t),t&&b(x),t&&b(S)}}}function Qt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Zt extends Nt{constructor(t){super(),Tt(this,t,Qt,Xt,i,{segment:0})}}function te(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=y(r)},l(t){e=O(t,"PRE",{});var s=I(e);n=H(s,r),s.forEach(b)},m(t,r){g(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&b(e)}}}function ee(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&te(e);return{c(){r=w(),s=_("h1"),o=y(e[0]),i=w(),a=_("p"),c=y(f),l=w(),d&&d.c(),u=E(),this.h()},l(t){J("svelte-1moakz",document.head).forEach(b),r=M(t),s=O(t,"H1",{class:!0});var n=I(s);o=H(n,e[0]),n.forEach(b),i=M(t),a=O(t,"P",{class:!0});var h=I(a);c=H(h,f),h.forEach(b),l=M(t),d&&d.l(t),u=E(),this.h()},h(){T(s,"class","svelte-17w3omn"),T(a,"class","svelte-17w3omn")},m(t,e){g(t,r,e),g(t,s,e),p(s,o),g(t,i,e),g(t,a,e),p(a,c),g(t,l,e),d&&d.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&f!==(f=t[1].message+"")&&D(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=te(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&b(r),t&&b(s),t&&b(i),t&&b(a),t&&b(l),d&&d.d(t),t&&b(u)}}}function ne(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class re extends Nt{constructor(t){super(),Tt(this,t,ne,ee,i,{status:0,error:1})}}function se(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=F(i,a())),{c(){n&&yt(n.$$.fragment),r=E()},l(t){n&&wt(n.$$.fragment,t),r=E()},m(t,e){n&&Et(n,t,e),g(t,r,e),s=!0},p(t,e){const s=16&e?_t(o,[vt(t[4].props)]):{};if(16&e&&i!==(i=t[4].component)){if(n){mt();const t=n;$t(t.$$.fragment,1,0,(()=>{xt(t,1)})),gt()}i?(n=F(i,a()),yt(n.$$.fragment),bt(n.$$.fragment,1),Et(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&bt(n.$$.fragment,t),s=!0)},o(t){n&&$t(n.$$.fragment,t),s=!1},d(t){t&&b(r),n&&xt(n,t)}}}function oe(t){let e,n;return e=new re({props:{error:t[0],status:t[1]}}),{c(){yt(e.$$.fragment)},l(t){wt(e.$$.fragment,t)},m(t,r){Et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){xt(e,t)}}}function ie(t){let e,n,r,s;const o=[oe,se],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){i[e].m(t,n),g(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(mt(),$t(i[c],1,1,(()=>{i[c]=null})),gt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),bt(n,1),n.m(r.parentNode,r))},i(t){s||(bt(n),s=!0)},o(t){$t(n),s=!1},d(t){i[e].d(t),t&&b(r)}}}function ae(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ie]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Zt({props:o}),{c(){yt(n.$$.fragment)},l(t){wt(n.$$.fragment,t)},m(t,e){Et(n,t,e),r=!0},p(t,[e]){const r=12&e?_t(s,[4&e&&{segment:t[2][0]},8&e&&vt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(bt(n.$$.fragment,t),r=!0)},o(t){$t(n.$$.fragment,t),r=!1},d(t){xt(n,t)}}}function ce(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return tt(l),u=It,f=r,Q().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class le extends Nt{constructor(t){super(),Tt(this,t,ce,ae,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ue=[],fe=[{js:()=>Promise.all([import("./index.66c85b2a.js"),__inject_styles(["client-31a52aa5.css","createOctokit-a85f76c7.css","index-b0b6455a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.18340e3d.js"),__inject_styles(["client-31a52aa5.css","rate-limit-exceeded-88af4d80.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.6b533406.js"),__inject_styles(["client-31a52aa5.css","createOctokit-a85f76c7.css","_number_-d4d16748.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.c9ce2860.js"),__inject_styles(["client-31a52aa5.css","createOctokit-a85f76c7.css","_number_-971b332f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.32122003.js"),__inject_styles(["client-31a52aa5.css","error-37eeedae.css"])]).then((function(t){return t[0]}))}],de=(he=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:he(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:he(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var he;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function pe(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function me(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ge,be=1;const $e="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},_e={};let ve,ye;const we=t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]}));function Ee(t){const e=Object.create(null);return t.length?we(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function xe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ve))return null;let e=t.pathname.slice(ve.length);if(""===e&&(e="/"),!ue.some((t=>t.test(e))))for(let n=0;n<de.length;n+=1){const r=de[n],s=r.pattern.exec(e);if(s){const n=Ee(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function Se(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=me(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=xe(s);if(o){Ae(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),$e.pushState({id:ge},"",s.href)}}function Te(){return{x:pageXOffset,y:pageYOffset}}function Ne(t){if(_e[ge]=Te(),t.state){const e=xe(new URL(location.href));e?Ae(e,t.state.id):location.href=location.href}else!function(t){be=t}(be+1),function(t){ge=t}(be),$e.replaceState({id:ge},"",location.href)}function Ae(t,e,n,r){return pe(this,void 0,void 0,(function*(){const s=!!e;if(s)ge=e;else{const t=Te();_e[ge]=t,ge=e=++be,_e[ge]=n?t:{x:0,y:0}}if(yield ye(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=_e[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),_e[ge]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Le(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ie,Pe=null;function Re(t){const e=me(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=xe(new URL(t,Le(document)));if(e)Pe&&t===Pe.href||(Pe={href:t,promise:Fe(e)}),Pe.promise}(e.href)}function ke(t){clearTimeout(Ie),Ie=setTimeout((()=>{Re(t)}),20)}function Oe(t,e={noscroll:!1,replaceState:!1}){const n=xe(new URL(t,Le(document)));if(n){const r=Ae(n,null,e.noscroll);return $e[e.replaceState?"replaceState":"pushState"]({id:ge},"",t),r}return location.href=t,new Promise((()=>{}))}const Ce="undefined"!=typeof __SAPPER__&&__SAPPER__;let He,Me,Ue,je=!1,De=[],Ge="{}";const ze={page:function(t){const e=Lt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Lt(null),session:Lt(Ce&&Ce.session)};let Be,qe,Ke;function We(t){var e,n;return e=t.target,Ke=e,n=Ce.baseUrl,ve=n,ye=Ve,"scrollRestoration"in $e&&($e.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{$e.scrollRestoration="auto"})),addEventListener("load",(()=>{$e.scrollRestoration="manual"})),addEventListener("click",Se),addEventListener("popstate",Ne),addEventListener("touchstart",Re),addEventListener("mousemove",ke),Ce.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ce;Ue||(Ue=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ue},level1:{props:{status:o,error:i},component:re},segments:s},c=Ee(n);Ye([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;$e.replaceState({id:be},"",e);const n=xe(new URL(location.href));if(n)return Ae(n,be,!0,t)}))}function Je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ve(t){return pe(this,void 0,void 0,(function*(){He&&ze.preloading.set(!0);const e=function(t){return Pe&&Pe.href===t.href?Pe.promise:Fe(t)}(t),n=Me={},r=yield e,{redirect:s}=r;if(n===Me)if(s)yield Oe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ye(n,e,Je(e,t.page))}}))}function Ye(t,e,n){return pe(this,void 0,void 0,(function*(){ze.page.set(n),ze.preloading.set(!1),He?He.$set(e):(e.stores={page:{subscribe:ze.page.subscribe},preloading:{subscribe:ze.preloading.subscribe},session:ze.session},e.level0={props:yield Ue},e.notify=ze.page.notify,He=new le({target:Ke,props:e,hydrate:!0})),De=t,Ge=JSON.stringify(n.query),je=!0,qe=!1}))}function Fe(t){return pe(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ue){const t=()=>({});Ue=Ce.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Be)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>pe(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Ge)return!0;const s=De[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(qe||u||!De[a]||De[a].part!==e.i){u=!1;const{default:r,preload:s}=yield fe[e.i].js();let o;o=je||!Ce.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Be):{}:Ce.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=De[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}ze.session.subscribe((t=>pe(void 0,void 0,void 0,(function*(){if(Be=t,!je)return;qe=!0;const e=xe(new URL(location.href)),n=Me={},{redirect:r,props:s,branch:o}=yield Fe(e);n===Me&&(r?yield Oe(r.location,{replaceState:!0}):yield Ye(o,s,Je(s,e.page)))})))),"loading"!==document.readyState?We({target:document.querySelector("#sapper")}):document.addEventListener("DOMContentLoaded",(function(){We({target:document.querySelector("#sapper")})}));export{D as A,L as B,x as C,s as D,rt as E,j as F,c as G,Y as H,f as I,z as J,J as K,Gt as L,v as M,C as N,Oe as O,G as P,S as Q,e as R,Nt as S,A as T,tt as U,et as V,u as W,_t as X,vt as Y,ct as Z,W as _,w as a,O as b,M as c,I as d,_ as e,b as f,T as g,g as h,Tt as i,mt as j,gt as k,bt as l,y as m,H as n,Z as o,p,t as q,Pt as r,i as s,$t as t,E as u,$ as v,yt as w,wt as x,Et as y,xt as z};

import __inject_styles from './inject_styles.803b7e80.js';