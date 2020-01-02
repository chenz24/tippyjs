(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{197:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return r}));t(4),t(0);var n=t(23),c=t(93);t(1);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}const p={},b={_frontmatter:p},m=c.default;function r(e){let{components:a}=e,t=o(e,["components"]);return Object(n.b)(m,s({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A tippy instance is an individual tippy object. It has a bunch of properties and\nmethods that contain information and functionality to manipulate the tippy\nprogrammatically."),Object(n.b)("h3",null,"Accessing an instance"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"tippy()")," creates new instances. It returns a single instance or an array of\ninstances depending on the type of argument it's supplied."),Object(n.b)("h4",null,"Element"),Object(n.b)("p",null,"The instance is directly returned, as this represents a single target:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// type Instance"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"instance")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token dom variable"}),"document"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token func method"}),"querySelector"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'"),"button",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"String, NodeList, Element[]"),Object(n.b)("p",null,"An array of instances are returned, as these represent multiple targets:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// type Instance[]"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"instances1")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'"),"button",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"instances2")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"["),"element1",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," element2",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"instances3")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token dom variable"}),"document"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token func method"}),"querySelectorAll"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'"),".btn",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,Object(n.b)("code",s({parentName:"h4"},{className:"language-text"}),"_tippy")," property"),Object(n.b)("p",null,"If you need to access the instance later, this property can be useful if you\ndidn't assign the instance(s) to a variable:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"button")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token dom variable"}),"document"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token func method"}),"querySelector"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'"),"button",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"button",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",s({parentName:"code"},{className:"token constant"}),"instance")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token object"}),"button"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token access property"}),"_tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Both the reference element and the popper element have the instance attached as\nthis property."),Object(n.b)("h3",null,"Shape and properties"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"instance")," is a plain object. It's best to log it out yourself and investigate\nin DevTools:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token console"}),"console"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token func method"}),"log"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"instance",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tippy-instance-mdx-7fabe7ca4a7b1303dae5.js.map