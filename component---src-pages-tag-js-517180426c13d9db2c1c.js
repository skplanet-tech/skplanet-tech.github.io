(self.webpackChunkskplanet_tech_blog=self.webpackChunkskplanet_tech_blog||[]).push([[221],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",s="hour",o="day",c="week",u="month",l="quarter",h="year",m="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},A={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,u),i=n-a<0,s=e.clone().add(r+(i?-1:1),u);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:m,h:s,m:i,s:a,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",D={};D[w]=p;var y=function(t){return t instanceof Y},E=function t(e,n,r){var a;if(!e)return w;if("string"==typeof e){var i=e.toLowerCase();D[i]&&(a=i),n&&(D[i]=n,a=i);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var o=e.name;D[o]=e,a=o}return!r&&a&&(w=a),a||!r&&w},M=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new Y(n)},S=A;S.l=E,S.i=y,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function p(t){this.$L=E(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),d=function(t,e){var a=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(o)},f=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,v=this.$D,A="set"+(this.$u?"UTC":"");switch(l){case h:return r?d(1,0):d(31,11);case u:return r?d(1,p):d(0,p+1);case c:var w=this.$locale().weekStart||0,D=(g<w?g+7:g)-w;return d(r?v-D:v+(6-D),p);case o:case m:return f(A+"Hours",0);case s:return f(A+"Minutes",1);case i:return f(A+"Seconds",2);case a:return f(A+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=S.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[o]=l+"Date",n[m]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[s]=l+"Hours",n[i]=l+"Minutes",n[a]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],f=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var g=this.clone().set(m,1);g.$d[d](f),g.init(),this.$d=g.set(m,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,l){var m,d=this;r=Number(r);var f=S.p(l),g=function(t){var e=M(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(f===u)return this.set(u,this.$M+r);if(f===h)return this.set(h,this.$y+r);if(f===o)return g(1);if(f===c)return g(7);var p=(m={},m[i]=e,m[s]=n,m[a]=t,m)[f]||1,v=this.$d.getTime()+r*p;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,s=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},h=function(t){return S.s(i%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:S.s(i,2,"0"),h:h(1),hh:h(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return r.replace(g,(function(t,e){return e||f[t]||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,m,d){var f,g=S.p(m),p=M(r),v=(p.utcOffset()-this.utcOffset())*e,A=this-p,w=S.m(this,p);return w=(f={},f[h]=w/12,f[u]=w,f[l]=w/3,f[c]=(A-v)/6048e5,f[o]=(A-v)/864e5,f[s]=A/n,f[i]=A/e,f[a]=A/t,f)[g]||A,d?w:S.a(w)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return D[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=E(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),C=Y.prototype;return M.prototype=C,[["$ms",r],["$s",a],["$m",i],["$H",s],["$W",o],["$M",u],["$y",h],["$D",m]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,Y,M),t.$i=!0),M},M.locale=E,M.isDayjs=y,M.unix=function(t){return M(1e3*t)},M.en=D[w],M.Ls=D,M.p={},M}()},2112:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(7294),a=n(1883);var i=t=>{let{location:e}=t;const{pathname:n}=e,i="/"===n;return r.createElement("div",{className:"menu"},r.createElement(a.Link,{to:"/",className:i?"active":""},"Tech"),r.createElement("a",{href:"https://careers.skplanet.com/home",target:"_blank",rel:"noreferrer"},"Recruit"))};var s=t=>{let{title:e,location:n}=t;return r.createElement("header",{className:"global-header"},r.createElement("div",{className:"main-heading"},r.createElement("div",{className:"logo"},r.createElement("img",{src:"data:image/png;base64,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",alt:"logo"}),r.createElement(a.Link,{to:"/"},"테크블로그")),r.createElement(i,{location:n})))};var o=t=>{let{onChange:e}=t;return r.createElement("footer",{className:"footer",onClick:e},"COPYRIGHT © ",""+(new Date).getFullYear()," SK Planet. ALL RIGHT RESERVED.")};var c=t=>{let{changed:e}=t;return r.createElement("div",{className:e?"banner-blue":"banner"},r.createElement("div",{className:"text"},"SK플래닛 구성원의",r.createElement("br",null),"Data, Tech, UX 이야기가 담겨 있는",r.createElement("br",null),"SK플래닛 테크 블로그입니다."))};var u=t=>{let{location:e,title:n,children:a}=t;const i="/"===e.pathname,[u,l]=r.useState(!1);return r.createElement("div",{className:"global-wrapper","data-is-root-path":i},r.createElement(s,{title:n,location:e}),i&&r.createElement(c,{changed:u}),r.createElement("main",null,a),r.createElement(o,{onChange:()=>{l(!u)}}))}},9357:function(t,e,n){"use strict";var r=n(7294),a=n(1883);e.Z=t=>{var e,n,i;let{description:s,title:o,children:c}=t;const{site:u}=(0,a.useStaticQuery)("2841359383"),l=s||u.siteMetadata.description,h=null===(e=u.siteMetadata)||void 0===e?void 0:e.title;return r.createElement(r.Fragment,null,r.createElement("title",null,h||o),r.createElement("meta",{name:"description",content:l}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:l}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(i=n.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:o}),r.createElement("meta",{name:"twitter:description",content:l}),r.createElement("meta",{name:"google-site-verification",content:"vMqBtqtAuaCt-E77Hy3kVwYFp3Ve9kaAMI1cBnYSfa4"}),r.createElement("meta",{name:"viewport",content:"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, viewport-fit=cover"}),r.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"}),c)}},6298:function(t,e,n){"use strict";n.d(e,{x:function(){return r}});const r={jayoon:{name:"공자윤",team:"Biz플랫폼개발팀",description:"글쓰기를 좋아하는 프론트엔드 개발자입니다.",thumbnail:n.p+"static/jayoon-d5c764119394a065460a4c01aa4969a5.jpg",link:"https://jayoon-kong.github.io"}}},6976:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return l}});var r=n(7294),a=n(1883),i=n(7484),s=n.n(i),o=n(2112),c=n(9357),u=n(6298);const l=()=>r.createElement(c.Z,{title:"Tech"});e.default=t=>{var e;let{data:n,location:i}=t;const{search:c}=i,l=c.replace("?tag=",""),h=(null===(e=n.site.siteMetadata)||void 0===e?void 0:e.title)||"SK플래닛 테크블로그",m=n.allMarkdownRemark.nodes.filter((t=>t.frontmatter.tags.includes(l)));return 0===m.length?r.createElement(o.Z,{location:i,title:h},r.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.createElement(o.Z,{location:i,title:h},r.createElement("div",{className:"tag-box"},r.createElement("span",null,l),r.createElement("h1",null,l)),r.createElement("ol",{style:{listStyle:"none"}},m.map((t=>{const e=t.frontmatter.title||t.fields.slug,n=t.frontmatter.author,i=u.x[n.toLowerCase()];return r.createElement("li",{key:t.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},t.frontmatter.tags&&r.createElement("div",{className:"tags"},t.frontmatter.tags.map((t=>r.createElement("span",{key:t},t)))),r.createElement("header",null,r.createElement("h2",{className:"title"},r.createElement(a.Link,{to:t.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},e)))),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt},itemProp:"description"})),r.createElement("small",null,s()(t.frontmatter.date).format("YYYY.MM.DD")," |"," ",i.name)))}))))}}}]);
//# sourceMappingURL=component---src-pages-tag-js-517180426c13d9db2c1c.js.map