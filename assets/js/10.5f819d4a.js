(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"about-页面2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about-页面2","aria-hidden":"true"}},[s._v("#")]),s._v(" about 页面2")]),s._v(" "),n("h2",{attrs:{id:"页面二级标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面二级标题","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面二级标题")]),s._v(" "),n("h3",{attrs:{id:"页面三级标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面三级标题","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面三级标题")]),s._v(" "),n("h3",{attrs:{id:"页面三级标题-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面三级标题-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面三级标题")]),s._v(" "),n("h3",{attrs:{id:"页面三级标题-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面三级标题-3","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面三级标题")]),s._v(" "),n("p",[s._v("侧边栏分组\n你可以通过使用对象来将侧边栏划分成多个组：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// .vuepress/config.js\nmodule.exports = {\n  themeConfig: {\n    sidebar: [\n      {\n        title: 'Group 1',\n        collapsable: false,\n        children: [\n          '/'\n        ]\n      },\n      {\n        title: 'Group 2',\n        children: [ /* ... */ ]\n      }\n    ]\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。")]),s._v(" "),n("h2",{attrs:{id:"多个侧边栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多个侧边栏","aria-hidden":"true"}},[s._v("#")]),s._v(" 多个侧边栏")]),s._v(" "),n("p",[s._v("如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├─ README.md\n├─ contact.md\n├─ about.md\n├─ foo/\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar/\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("接着，遵循以下的侧边栏配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// .vuepress/config.js\nmodule.exports = {\n  themeConfig: {\n    sidebar: {\n      '/foo/': [\n        '',     /* /foo/ */\n        'one',  /* /foo/one.html */\n        'two'   /* /foo/two.html */\n      ],\n\n      '/bar/': [\n        '',      /* /bar/ */\n        'three', /* /bar/three.html */\n        'four'   /* /bar/four.html */\n      ],\n\n      // fallback\n      '/': [\n        '',        /* / */\n        'contact', /* /contact.html */\n        'about'    /* /about.html */\n      ]\n    }\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("WARNING")]),s._v(" "),n("p",[s._v("确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。")]),s._v(" "),n("h2",{attrs:{id:"自动生成侧栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动生成侧栏","aria-hidden":"true"}},[s._v("#")]),s._v(" 自动生成侧栏")]),s._v(" "),n("p",[s._v("如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\nsidebar: auto\n---\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}],!1,null,null,null);a.default=t.exports}}]);