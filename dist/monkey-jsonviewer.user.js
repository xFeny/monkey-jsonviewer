// ==UserScript==
// @name         JSON Viewer
// @namespace    http://tampermonkey.net/
// @version      v0.7.9
// @author       Feny
// @description  格式化显示JSON使数据看起来更加漂亮，支持折叠/展开格式化后的数据，支持JSON脑图让调用层级看着更清晰，支持复制JSON脑图节点路径
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wvjF8bLX4ZrHZx+XNqlwnmKjH5YUyRvb6kEAd8H058d1b47XV5Ir3eoN++bagaXYrN6KOBn2FfPPx5/aEutX8a+KNWhIubhruZLSNj8u1WMcIOP4QoXOOwNS/wDBM79lDTfjh8YNe+IXj63TxRdeHfKjsE1KMTxtdSbmMmxvlAiVV2IBsUybgAyKR9ZTy6lhsM69Xovm2+iPmKmOqYjEKjT6v5WXU9e8beKrjxZpp/s/xFrfhjWIwWs9X0q42z2kmPlZo2zDcxjqYZ0eNv7obDDf/YL/AG8L745eJNc+G3xCttP0n4qeEWZZ2sVZNP8AENsu0rd2ysS0ZKPG7RMSQsisCcukWd+3x4RtfhpqGk+JNPjS0g1mV7a8iT5UM4XesgHYsofdjglQepJPxwPE1x4V/au8LePtNkeK40ma0lmdDgyorvHMhPo9uxjP+y1bUcHRxmGbS1adn1TXT0/4fcipiqmExCi3pfVdGn19f+GLni/w7ceGf2wPFXga+Vo5rW/vDbI3WWI/v4HA/wBqBg3tk+lfWX7AXia1+F/iDV9B1CRbWHXjFLayyHannpuUxk+rqy4zxlMdWAPQft7fsL33x91nQfiD4DutP0r4oeDXVrT7cWWx1y3UsTZ3LKCyAh5FEigkLLIpHzBk5vwj4JuvE2kLJfeHdY8N6lGAl5pepwBZrOT+JRIuYp0ByBNCzxPg4bIICqYyljMKot62Sa6prr6P/gBDC1MLiHJLS90+jT6ev/Dnmn/BVP8Aaw0nxv4/8P8Aw18KXK69qmk3MlxqEdiRMwuivlpbrtPLopkMnZNy5IIYLyPwa/Z8vvEmv+HtHu4/Ovr+5iS6KDcqAtukwe6om7nuEJxX0XoH7PK/bJG0vRoY5rr/AFslvbLGZf8AfcAf+PGvafgv8CbX4byNqFyI5tWmXYCoytsh6qvqx7t+A4yWiWYUsLhlRpbr72318kVHA1MTiHVqbP7kl0P/2Q==
// @homepage     https://github.com/xFeny/monkey-jsonviewer
// @match        *://*/*
// @require      https://unpkg.com/dom-to-image@2
// @require      https://unpkg.com/jquery@3.7.1/dist/jquery.min.js
// @require      data:application/javascript,%3Bwindow.jquery%3DjQuery%3B
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.js
// @require      data:application/javascript,%3Bwindow.jsmind%3DjsMind%3B
// @require      https://unpkg.com/beautifier@0.1.7
// @require      data:application/javascript,%3Bwindow.beautifier%3Djs_beautify%3Bwindow.js_beautify%3Djs_beautify%3Bwindow.css_beautify%3Dcss_beautify%3B
// @require      https://unpkg.com/@highlightjs/cdn-assets@11.10.0/highlight.min.js
// @require      data:application/javascript,%3Bwindow.hljs%3Dhljs%3B
// @require      https://unpkg.com/systemjs@6.15.1/dist/system.min.js
// @require      https://unpkg.com/systemjs@6.15.1/dist/extras/named-register.min.js
// @require      data:application/javascript,%3B(typeof%20System!%3D'undefined')%26%26(System%3Dnew%20System.constructor())%3B
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        unsafeWindow
// @note         v0.7.6 操作栏右侧布局修改
// @note		 v0.7.4 增加对JS、CSS美化输出 v0.7.4 增加对JS、CSS美化输出
// @note		 v0.6.9 切换为暗黑主题，tab栏和JSONCrak的也跟着改变
// @note		 v0.6.6 增加多一种暗黑主题，默认主题色修改
// @note		 v0.6.3 修复暗黑主题，tab颜色问题
// @note		 v0.6.2 脑图增加JSON Crack
// @note		 v0.6.1 增加多一种浅色主题
// @note		 v0.6.0 增加简单HTTP 请求功能，可请求GET/POST/PUT/DELETE的API接口，而不单单只能GET请求使用
// @note		 v0.5.9 jsonp格式小优化
// @note		 v0.5.8 增加JSON手动输入
// @note		 v0.5.7 一些小细节优化
// @note		 v0.5.6 修复BUG
// @note		 v0.5.5 解决@require jquery-simple-tree-table.min.js依赖加载失败问题
// @note		 v0.5.4 单击复制修改为CTRL+单击复制JSONPath功能，JSON格式化风格增加table格式
// @note		 v0.5.3 增加暗黑主题色
// @note		 v0.5.2 单击JSON格式化的key可复制JSONPath
// @note		 v0.5.1 修复JSONPath提示有误
// @note		 v0.5.0 解决chrome 120+以上内核JSON格式化不执行和引入layer报错问题
// @note		 v0.4.9 布局修改，增加保存JSON/脑图为文件，增加JSON过滤，鼠标移入key提示JSONPath
// @note		 v0.4.8 代码优化
// @note		 v0.4.7 增加对JSONP的判断，代码优化
// @note		 v0.4.6 增加复制按钮，JSON脑图CSS样式细节优化，JSON脑图增加收起/展开子节点按钮
// @note		 v0.4.5 在json-viewer-updated原基础上进行了一些修改，主要有CSS样式修改，新增折叠/展开全部功能，新增JSON脑图功能，脑图节点点击显示调用路径
// ==/UserScript==

(o=>{window.addEventListener("message",t=>{const{data:e}=t;if(e&&e.addStyle){if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const r=document.createElement("style");r.textContent=o,document.head.append(r)}})})(` @charset "UTF-8";.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}body{padding-top:20px;padding-left:5px}body .beautify_checkbox{top:0;left:0;z-index:999;width:100vw;display:flex;position:fixed;padding:5px 10px;align-items:center;background-color:#f3f3f3;border-bottom:1px solid #ccc}body .beautify_checkbox label{font-size:13px}body .beautify_checkbox input[type=checkbox]{top:1.5px;width:14px;height:14px;margin-right:5px;position:relative}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#fff;color:#000}.xml .hljs-meta{color:silver}.hljs-comment,.hljs-quote{color:#007400}.hljs-attribute,.hljs-keyword,.hljs-literal,.hljs-name,.hljs-selector-tag,.hljs-tag{color:#aa0d91}.hljs-template-variable,.hljs-variable{color:#3f6e74}.hljs-code,.hljs-meta .hljs-string,.hljs-string{color:#c41a16}.hljs-link,.hljs-regexp{color:#0e0eff}.hljs-bullet,.hljs-number,.hljs-symbol,.hljs-title{color:#1c00cf}.hljs-meta,.hljs-section{color:#643820}.hljs-built_in,.hljs-class .hljs-title,.hljs-params,.hljs-title.class_,.hljs-type{color:#5c2699}.hljs-attr{color:#836c28}.hljs-subst{color:#000}.hljs-formula{background-color:#eee;font-style:italic}.hljs-addition{background-color:#baeeba}.hljs-deletion{background-color:#ffc8bd}.hljs-selector-class,.hljs-selector-id{color:#9b703f}.hljs-doctag,.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}body li::marker{content:""}body input:focus,body select:focus,body textarea:focus{outline:0}.hidden{display:none!important}.layui-layer-tips{width:auto!important}.format-container{top:0;left:0;z-index:10;width:100vw;height:100vh;display:flex;position:fixed;flex-direction:column}.format-container .panel{display:flex;line-height:28px;flex-direction:column;background-color:#ececec}.format-container .tabs,.format-container .toolbar{display:flex;border-bottom:1px solid #ccc}.format-container .tabs>div,.format-container .toolbar>div{cursor:pointer;padding:0 10px;font-size:12px}.format-container .tabs>div:hover,.format-container .toolbar>div:hover{background-color:#d4d4d4}.format-container .tabs-item{border-top:3px solid #ececec}.format-container .tabs-item:hover{border-top-color:#c3c3c6}.format-container .tabs-item.active{color:#0060df;border-top-color:#0060df;background-color:#f1f1f1}.format-container .toolbar{line-height:23px}.format-container .toolbar .searchbox{padding:0;display:flex;flex-grow:1}.format-container .toolbar .searchbox input{flex-grow:1;border:none;outline:none;font-size:12px;padding-left:23px;border-left:1.5px solid #ccc;background-size:12px;background-repeat:no-repeat;background-position:7px center;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIGZpbGw9InJnYmEoMTM1LCAxMzUsIDEzNywgMC45KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgb3BhY2l0eT0iLjQiIGQ9Ik01IDkuMmwyIDEuNlY2LjFMOC41NSA0aC01LjFMNSA2LjF2My4xeiIvPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTEuMTggMi42QTEgMSAwIDAgMSAyIDFIMTBhMSAxIDAgMCAxIC44IDEuNkw4IDYuNHY0LjgyYzAgLjYzLS43Mi45OC0xLjIyLjZsLTIuNS0xLjk5QS43NS43NSAwIDAgMSA0IDkuMjVWNi40MUwxLjE4IDIuNnpNMiAyTDUgNi4wOXYzLjA0bDIgMS41OVY2LjA5TDEwLjAxIDJIMnoiLz4KPC9zdmc+Cg==)}.format-container .toolbar .searchbox .clear{flex:0 0 auto;align-self:center;margin:0 4px;padding:0;border:0;width:16px;height:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9ImNvbnRleHQtZmlsbCIgZmlsbC1vcGFjaXR5PSJjb250ZXh0LWZpbGwtb3BhY2l0eSI+CiAgPHBhdGggZD0iTTYuNTg2IDhsLTIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNCAxLjQxNEw4IDkuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNC0xLjQxNEw5LjQxNCA4bDIuMjkzLTIuMjkzYTEgMSAwIDEgMC0xLjQxNC0xLjQxNEw4IDYuNTg2IDUuNzA3IDQuMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNEw2LjU4NiA4ek04IDBhOCA4IDAgMSAxIDAgMTZBOCA4IDAgMCAxIDggMHoiLz4KPC9zdmc+Cg==)}.format-container .rightbox{right:200px;display:flex;font-size:13px;position:absolute}.format-container .rightbox>div{padding:0 5px;margin-top:2px}.format-container .rightbox>div span{cursor:pointer;display:inline;padding:5px 10px;border-radius:3px}.format-container .rightbox>div span:hover{background-color:#ccc}.format-container .rightbox>div span:after{content:"";right:-5px;top:40%;position:relative;border-top:5px solid #999;border-left:5px solid transparent;border-right:5px solid transparent;z-index:999}.format-container .rightbox>div .ulbox{display:none}.format-container .rightbox>div ul{color:#333;cursor:pointer;text-align:center;border-radius:3px}.format-container .rightbox>div ul li{font-size:13px;padding:5px 20px;background-color:#dfdfdf}.format-container .rightbox>div ul li:hover{border-radius:3px;background-color:#ccc}.format-container .rightbox>div ul li.active:before{left:15px;content:"\u221A";display:inline;position:absolute}.format-container .rightbox>div .tippy-box{background-color:#dfdfdf!important}.format-container .rightbox>div .tippy-box .tippy-arrow{color:#dfdfdf!important}.format-container .tabs-container{flex-grow:1;overflow:auto;line-height:1.4;font-size:13.5px;font-family:monospace}.format-container .tabs-container>div{display:none}.format-container .tabs-container>div.active{display:block}.format-container .tabs-container #formatContainer{padding:10px}.format-container .tabs-container #rawTextContainer{padding:0 10px}.format-container .tabs-container #rawTextContainer pre{display:block!important;overflow-wrap:break-word;white-space:pre-wrap}.format-container .jsonp{color:#93983a}.format-container ul.json-object,.format-container ul.json-array{margin:0 0 0 2px;list-style-type:none;border-left:1px dotted #5d6d7e;padding-left:24px}.format-container .json-brackets{font-weight:700}.format-container .json-key{color:#910f93;cursor:pointer}.format-container .json-string,.format-container .json-string a{color:#2e7c16}.format-container .json-number{color:#164ff1}.format-container .json-boolean{color:#905}.format-container .json-null{color:#228fec}.format-container a.json-toggle{position:rElative;color:inherit;opacity:.2;text-decoration:none}.format-container a.json-toggle:hover{opacity:.35}.format-container a.json-toggle:active{opacity:.5}.format-container a.json-toggle:focus{outline:none}.format-container a.json-toggle:before{top:2.5px;left:-15px;position:absolute;content:"";display:block;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.format-container a.json-toggle.collapsed:before{transform:rotate(0)}.format-container a.json-placeholder{color:#ccc;font-size:12px;padding:0 1em;text-decoration:none}.format-container a.json-placeholder:hover{text-decoration:underline}.format-container .json-curly-brackets{color:#6d9331}.format-container .json-square-brackets{color:#8e9331}.format-container #jmContainer{width:100vw;height:calc(100vh - 57px)}.format-container #jmContainer jmnode{display:flex;align-items:center;padding:0 7px 0 22px;color:#475872!important;box-shadow:none!important;background-color:transparent!important}.format-container #jmContainer jmnode.root{padding:0;color:transparent!important}.format-container #jmContainer jmnode:before{content:"";top:50%!important;margin-top:1px;position:absolute;border-radius:50%;transform:translateY(-50%);background-color:#8149bf80}.format-container #jmContainer jmnode.root:before{left:50%;width:18px;height:18px;transform:translate(-18px,-50%)}.format-container #jmContainer jmnode:hover{text-shadow:0px 0px 1px currentColor}.format-container #jmContainer jmnode:not(.root):before{left:0;width:15px;height:15px}.format-container #jmContainer jmexpander{margin-top:1px;line-height:9px}.format-container #jmContainer .datatype{opacity:.6;font-size:12px;margin-top:2px;padding-left:5px}.format-container table{margin-left:20px;width:-webkit-fill-available;border-collapse:collapse}.format-container table tr:hover{background-color:#f0f9fe}.format-container table tr.selected td,.format-container table tr.selected td a{color:#fff!important;background-color:#3875d7}.format-container table tr td:first-child{width:120px}.format-container table .tree-len{color:#ccc;font-size:13px}.format-container table .simple-tree-table-icon{color:#000;opacity:.2;width:0!important;margin:0!important;line-height:0!important}.format-container table .simple-tree-table-icon:before{top:.5px;left:-15px;position:relative;content:"";width:0;height:0;display:none;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.format-container table .simple-tree-table-icon:hover{opacity:.35}.format-container table .simple-tree-table-icon:after{content:""!important}.format-container table .simple-tree-table-icon:active{opacity:.5}.format-container table .simple-tree-table-opened .simple-tree-table-icon:before{display:block}.format-container table .simple-tree-table-closed .simple-tree-table-icon:before{display:block;transform:rotate(0)}.httpRequest{padding:20px}.httpRequest input,.httpRequest select{border-radius:0;padding-left:10px;border:1px solid #ccc}.requestbox,.textarea{width:700px;display:flex}.requestbox{height:35px;margin-bottom:15px}.requestbox input{flex-grow:1}.requestbox button{cursor:pointer;padding:0 15px;border:1px solid #ccc}.requestbox button:active{background-color:#cfcfcf}.textarea input{flex-grow:1;height:30px}.light .json-key{color:#0040cf}.light .json-string,.light .json-string a{color:#a31515}.light .json-number{color:#0b7500}.light .json-boolean{color:#00f}.light .json-null{color:#05f}body.dark .format-container li,body.dark .format-container pre,body.dark_plus .format-container li,body.dark_plus .format-container pre{color:#ccc}body.dark .format-container .panel,body.dark_plus .format-container .panel{color:#c4c4c4;background-color:#333}body.dark .format-container .panel>div,body.dark_plus .format-container .panel>div{border-bottom-color:#464646}body.dark .format-container .panel .tabs-item:hover,body.dark .format-container .panel .toolbar-item:hover,body.dark_plus .format-container .panel .tabs-item:hover,body.dark_plus .format-container .panel .toolbar-item:hover{background-color:#464646}body.dark .format-container .panel .tabs-item,body.dark_plus .format-container .panel .tabs-item{border-top-color:#333}body.dark .format-container .panel .tabs-item:hover,body.dark_plus .format-container .panel .tabs-item:hover{border-top-color:#c3c3c6}body.dark .format-container .panel .tabs-item.active,body.dark_plus .format-container .panel .tabs-item.active{color:#c4c4c4;border-top-color:#64b7ff;background-color:#464646}body.dark .format-container .searchbox input,body.dark_plus .format-container .searchbox input{color:#ccc;background-color:#464646;border-left-color:#333}body.dark .format-container .searchbox .clear,body.dark_plus .format-container .searchbox .clear{filter:invert(.8)}body.dark .format-container .rightbox>div span:hover,body.dark_plus .format-container .rightbox>div span:hover{background-color:#464646}body.dark .format-container .rightbox .tippy-box,body.dark_plus .format-container .rightbox .tippy-box{background-color:#4e4e4e!important}body.dark .format-container .rightbox .tippy-box .tippy-arrow,body.dark_plus .format-container .rightbox .tippy-box .tippy-arrow{color:#4e4e4e!important}body.dark .format-container .rightbox .tippy-box li,body.dark_plus .format-container .rightbox .tippy-box li{background-color:#4e4e4e!important}body.dark .format-container .rightbox .tippy-box li:hover,body.dark_plus .format-container .rightbox .tippy-box li:hover{background-color:#464646!important}body.dark .format-container .jsonp,body.dark_plus .format-container .jsonp{color:#f1d700}body.dark .format-container .json-toggle,body.dark_plus .format-container .json-toggle{opacity:.35}body.dark .format-container .json-toggle:hover,body.dark_plus .format-container .json-toggle:hover{opacity:.5}body.dark .format-container jmnode,body.dark_plus .format-container jmnode{filter:brightness(2)}body.dark .format-container jmexpander,body.dark_plus .format-container jmexpander{background-color:#dfdfdf}body.dark .format-container table tr:hover,body.dark_plus .format-container table tr:hover{background-color:#353b48}body.dark .format-container .simple-tree-table-icon,body.dark_plus .format-container .simple-tree-table-icon{color:#fff;opacity:.5}body.dark .format-container .tabs-container{background-color:#252526}body.dark .format-container .json-curly-brackets{color:#ce70d6}body.dark .format-container .json-square-brackets{color:#f1d700}body.dark .format-container .json-key{color:#9cdcfe}body.dark .format-container .json-string,body.dark .format-container .json-string a{color:#ce9178}body.dark .format-container .json-number{color:#b5cea8}body.dark .format-container .json-boolean{color:#358cd6}body.dark .format-container .json-null{color:#569cd6}body.dark_plus .format-container .tabs-container{background-color:#1e1f22}body.dark_plus .format-container .json-curly-brackets{color:#bb9667}body.dark_plus .format-container .json-square-brackets{color:#bbbda3}body.dark_plus .format-container .json-key{color:#c77dbb}body.dark_plus .format-container .json-string,body.dark_plus .format-container .json-string a{color:#499472}body.dark_plus .format-container .json-number{color:#27abb7}body.dark_plus .format-container .json-boolean{color:#ce8d66}body.dark_plus .format-container .json-null{color:#c06235}.tippy-box[data-theme~=layer]{color:#fff;padding:5px;font-size:12px;line-height:20px;background-color:#2e59a7}.tippy-box[data-theme~=layer] .tippy-arrow{color:#2e59a7}.tippy-box[data-theme~=imagebox]{background-color:#d9d9d9}.tippy-box[data-theme~=imagebox] .tippy-arrow{color:#d9d9d9}/**
* @license BSD
* @copyright 2014-2023 hizzgdev@163.com
* 
* Project Home:
*   https://github.com/hizzgdev/jsmind/
*/.jsmind-inner{position:relative;overflow:auto;width:100%;height:100%;outline:none}.jsmind-inner{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jsmind-inner canvas{position:absolute}svg.jsmind{position:absolute;z-index:1}canvas.jsmind{position:absolute;z-index:1}jmnodes{position:absolute;z-index:2;background-color:#0000}jmnode{position:absolute;cursor:default;max-width:400px}jmexpander{position:absolute;width:11px;height:11px;display:block;overflow:hidden;line-height:12px;font-size:10px;text-align:center;border-radius:6px;border-width:1px;border-style:solid;cursor:pointer}.jmnode-overflow-wrap jmnodes{min-width:420px}.jmnode-overflow-hidden jmnode{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}jmnode{padding:10px;background-color:#fff;color:#333;border-radius:5px;box-shadow:1px 1px 1px #666;font:16px/1.125 Verdana,Arial,Helvetica,sans-serif}jmnode:hover{box-shadow:2px 2px 8px #000;background-color:#ebebeb;color:#333}jmnode.selected{background-color:#11f;color:#fff;box-shadow:2px 2px 8px #000}jmnode.root{font-size:24px}jmexpander{border-color:gray}jmexpander:hover{border-color:#000}@media screen and (max-device-width: 1024px){jmnode{padding:5px;border-radius:3px;font-size:14px}jmnode.root{font-size:21px}}jmnodes.theme-primary jmnode{background-color:#428bca;color:#fff;border-color:#357ebd}jmnodes.theme-primary jmnode:hover{background-color:#3276b1;border-color:#285e8e}jmnodes.theme-primary jmnode.selected{background-color:#f1c40f;color:#fff}jmnodes.theme-warning jmnode{background-color:#f0ad4e;border-color:#eea236;color:#fff}jmnodes.theme-warning jmnode:hover{background-color:#ed9c28;border-color:#d58512}jmnodes.theme-warning jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-danger jmnode{background-color:#d9534f;border-color:#d43f3a;color:#fff}jmnodes.theme-danger jmnode:hover{background-color:#d2322d;border-color:#ac2925}jmnodes.theme-danger jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-success jmnode{background-color:#5cb85c;border-color:#4cae4c;color:#fff}jmnodes.theme-success jmnode:hover{background-color:#47a447;border-color:#398439}jmnodes.theme-success jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-info jmnode{background-color:#5dc0de;border-color:#46b8da;color:#fff}jmnodes.theme-info jmnode:hover{background-color:#39b3d7;border-color:#269abc}jmnodes.theme-info jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-greensea jmnode{background-color:#1abc9c;color:#fff}jmnodes.theme-greensea jmnode:hover{background-color:#16a085}jmnodes.theme-greensea jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-nephrite jmnode{background-color:#2ecc71;color:#fff}jmnodes.theme-nephrite jmnode:hover{background-color:#27ae60}jmnodes.theme-nephrite jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-belizehole jmnode{background-color:#3498db;color:#fff}jmnodes.theme-belizehole jmnode:hover{background-color:#2980b9}jmnodes.theme-belizehole jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-wisteria jmnode{background-color:#9b59b6;color:#fff}jmnodes.theme-wisteria jmnode:hover{background-color:#8e44ad}jmnodes.theme-wisteria jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-asphalt jmnode{background-color:#34495e;color:#fff}jmnodes.theme-asphalt jmnode:hover{background-color:#2c3e50}jmnodes.theme-asphalt jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-orange jmnode{background-color:#f1c40f;color:#fff}jmnodes.theme-orange jmnode:hover{background-color:#f39c12}jmnodes.theme-orange jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-pumpkin jmnode{background-color:#e67e22;color:#fff}jmnodes.theme-pumpkin jmnode:hover{background-color:#d35400}jmnodes.theme-pumpkin jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-pomegranate jmnode{background-color:#e74c3c;color:#fff}jmnodes.theme-pomegranate jmnode:hover{background-color:#c0392b}jmnodes.theme-pomegranate jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-clouds jmnode{background-color:#ecf0f1;color:#333}jmnodes.theme-clouds jmnode:hover{background-color:#bdc3c7}jmnodes.theme-clouds jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-asbestos jmnode{background-color:#95a5a6;color:#fff}jmnodes.theme-asbestos jmnode:hover{background-color:#7f8c8d}jmnodes.theme-asbestos jmnode.selected{background-color:#11f;color:#fff}.scroll-top{width:48px;height:48px;z-index:999;position:fixed;right:30px;bottom:30px;display:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA39JREFUaEPtmV2ITVEUx39rJjT5KPKC5DPKK6UGZZ7Eq0whNUiKFPfcKW9mnmjm7ssLaSLygEx5xItMESnKC4V8FV4IJUkyS+fMHZ07zjl3733PvT6a+3S6Z629/r+99sfa+wgpPw1YDtxLe9/k/1eI4X5STMkSokXWNlloYjgpMZSmIxPgbxBfS8M4QK0eavT78Qw0uodrtd+wDGjAMqBcEVAQw6NaYnzeNwRAi2xBOQlMrYj6jLJTygz6iMzyyR1Ai+xCGUgMqnTmDZErgBYoIJjMXhY2S4mLeWUiNwAt0INwyEqY0iNleq1saxjlAqAB64BrToKEHVLijJNPgnHdALqPaUziOsoKRzGfaKFD+nng6FdlXj+Ay9AZq1Q5L2W2/jEA3c8sWqOSe3aCiK/A3cr/K4G2FKEbxXDZF6KuDKROXKWXFvqlxJdQmBaZzDDdKZP8thhW/RmAgKfA4qrgSq+U6UkSlAostEuJOz4Q3hnQgPXAld+CCh1pB5DogKTcSBAalhpHmw1wGtgxJuhbMczJEqIBbxLmzFUxbGg2gCYE9AVADF6jwctJDzKd73xI7DG/IQQTmCFH+OiaBT+AAyykhWcpBZv7JA4bGmaRHOV5cwBqX7mc5Qe9coyX0TK6n/m0RnVSV4bA1KuTLCi/DBTYhHCpRm+Fe8Bo/b8JmJxp71lqOwNowB7guGuqLe33iuGEpW1k5gTgVDK7qIjbZmyESU1aA1TOuA99dTn5CQulxAsbH3uAeqpOGyXVNrvEcMrGzR4gIGnjsonhYzMkhg4bx3EAm17ysGlIBh4DSzzE+LgMiGG3jaPLEApv2Q7YNFq3jcOmZg9gt/u6aH8PzEx0aGWu9PHapjFrgKimCaIDTHiQqf4pNxHW2AT8ZaMEiZdgSreUKdm25QRQgRi7nIZzI7xZcPmeNkAL5xjmVpVQx1049HUGiCAKFBH6K8GjFUP3MIW2CGJpjd4bFEPnmM54grA761tYWpteAJXgy1A6w6p09Opcu1nED7ZlAcQP/BqwGZjORAblMO9sh03czhsgLZgW6EL4JoYL0b0RTArPBfFnH6G5ZyAVYKTkGBlWQVR2bxDDgvjzvwQQXqGsDQ/sGkTXKdHzOECsB3LtjdjKMjqE/qMMjJwn5olh+98+hM6gvAqXy0aN+4Yuo/HG/weAPmC1GNrzHDbxtn4Coc0pQNdM3UAAAAAASUVORK5CYII=)} `);

System.addImportMap({ imports: {"jquery":"user:jquery","highlight.js":"user:highlight.js","beautifier":"user:beautifier","jsmind":"user:jsmind"} });
System.set("user:jquery", (()=>{const _=jquery;('default' in _)||(_.default=_);return _})());
System.set("user:highlight.js", (()=>{const _=hljs;('default' in _)||(_.default=_);return _})());
System.set("user:beautifier", (()=>{const _=beautifier;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());

System.register("./__entry.js", ['./__monkey.entry-BV3dTQL8.js'], (function (exports, module) {
	'use strict';
	return {
		setters: [null],
		execute: (function () {



		})
	};
}));

System.register("./__monkey.entry-BV3dTQL8.js", ['jquery'], (function (exports, module) {
  'use strict';
  var $;
  return {
    setters: [module => {
      $ = module.default;
    }],
    execute: (function () {

      const scriptRel = function detectScriptRel() {
        const relList = typeof document !== "undefined" && document.createElement("link").relList;
        return relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
      }();
      const assetsURL = function(dep) {
        return "/" + dep;
      };
      const seen = {};
      const __vitePreload = function preload(baseModule, deps, importerUrl) {
        let promise = Promise.resolve();
        if (deps && deps.length > 0) {
          document.getElementsByTagName("link");
          const cspNonceMeta = document.querySelector(
            "meta[property=csp-nonce]"
          );
          const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
          promise = Promise.allSettled(
            deps.map((dep) => {
              dep = assetsURL(dep);
              if (dep in seen) return;
              seen[dep] = true;
              const isCss = dep.endsWith(".css");
              const cssSelector = isCss ? '[rel="stylesheet"]' : "";
              if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
              }
              const link = document.createElement("link");
              link.rel = isCss ? "stylesheet" : scriptRel;
              if (!isCss) {
                link.as = "script";
              }
              link.crossOrigin = "";
              link.href = dep;
              if (cspNonce) {
                link.setAttribute("nonce", cspNonce);
              }
              document.head.appendChild(link);
              if (isCss) {
                return new Promise((res, rej) => {
                  link.addEventListener("load", res);
                  link.addEventListener(
                    "error",
                    () => rej(new Error(`Unable to preload CSS for ${dep}`))
                  );
                });
              }
            })
          );
        }
        function handlePreloadError(err) {
          const e = new Event("vite:preloadError", {
            cancelable: true
          });
          e.payload = err;
          window.dispatchEvent(e);
          if (!e.defaultPrevented) {
            throw err;
          }
        }
        return promise.then((res) => {
          for (const item of res || []) {
            if (item.status !== "rejected") continue;
            handlePreloadError(item.reason);
          }
          return baseModule().catch(handlePreloadError);
        });
      };
      const Utils = exports("U", {
        /**
         * 检查字符串是否为URL
         * @param {*} str 字符串
         * @returns
         */
        isUrl: function(str) {
          const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
          return regexp.test(str);
        },
        /**
         * 检查是否为图片链接
         * @param {*} str 字符串
         * @returns
         */
        isImg: function(str) {
          const regexp = /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
          return regexp.test(str);
        },
        /**
         * 是否为json格式的内容
         * @param {*} str 字符串
         * @returns
         */
        isJSON: function(str) {
          try {
            JSON.parse(str);
            return true;
          } catch (e) {
            console.log("is not json");
            return false;
          }
        },
        /**
         * 获取数据类型
         * @param {*} v
         * @returns
         */
        getType: function(v) {
          return Object.prototype.toString.call(v).match(/\s(.+)]/)[1].toLowerCase();
        },
        /**
         * 获取数组中对象key最多的对象
         * @param {*} arr 对象数组
         * @returns
         */
        findMaxKeysObject: function(arr) {
          let maxKeysCount = 0, maxKeysObject;
          for (const obj of arr) {
            const keysCount = Object.keys(obj).length;
            if (keysCount > maxKeysCount) {
              maxKeysCount = keysCount;
              maxKeysObject = obj;
            }
          }
          return maxKeysObject;
        },
        /**
         * 随机rgb颜色
         * @param {*} opacity 透明度
         * @returns
         */
        randomColor: (opacity) => {
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        },
        /**
         * 文档类型判断
         * @returns
         */
        isJSONDocument: function(contentType) {
          const docType = [
            "application/vnd.api+json",
            "application/x-javascript",
            "application/javascript",
            "application/json",
            "text/javascript",
            "text/plain",
            "text/json",
            "text/css"
          ];
          if (!docType.includes(contentType)) {
            return false;
          }
          return true;
        },
        /**
         * 下载文本内容
         * @param {*} content 文本内容
         * @param {*} filename 文件名
         */
        downloadText: function(content, filename) {
          const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          link.click();
          URL.revokeObjectURL(url);
        }
      });
      const URL$1 = exports("d", {
        JSON_CRACK_WIDGET: "https://jsoncrack.feny.ink/widget",
        EXAMPLE_JSON: "https://fetch-api.feny.ink/example.json",
        LAYUI_JS: "https://unpkg.com/layui@2.7.6/dist/layui.js",
        LAYUI_CSS: "https://unpkg.com/layui@2.7.6/dist/css/layui.css",
        ONLINE_HTTP_REQUEST: "https://fetch-api.feny.ink/httpRequest"
      });
      var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
      var _GM_getValue = exports("a", /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)());
      var _GM_openInTab = /* @__PURE__ */ (() => typeof GM_openInTab != "undefined" ? GM_openInTab : void 0)();
      var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
      var _GM_setClipboard = exports("c", /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)());
      var _GM_setValue = exports("_", /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)());
      var _unsafeWindow = exports("b", /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)());
      (function() {
        if (!Utils.isJSONDocument(document.contentType)) {
          return;
        }
        _unsafeWindow.GLOBAL_SOURCE_ELEMENT = $("pre").first();
        if (_unsafeWindow.GLOBAL_SOURCE_ELEMENT.length === 0) {
          const text = document.body.innerText;
          if (!Utils.isJSON(text)) {
            return;
          }
          const pre = document.createElement("pre");
          pre.innerText = text;
          document.body.insertAdjacentHTML("afterbegin", pre);
          _unsafeWindow.GLOBAL_SOURCE_ELEMENT = $(pre);
        }
        let rawText = _unsafeWindow.GLOBAL_SOURCE_ELEMENT.text();
        if (!rawText) {
          return;
        }
        let tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
        if (tokens && tokens[1] && tokens[2]) {
          _unsafeWindow.GLOBAL_JSONP_FUN = tokens[1];
          rawText = tokens[2];
        }
        if (!Utils.isJSON(rawText)) {
          __vitePreload(() => module.import('./index-DGytUOX_-D8Hm-GfS.js'), void 0 );
          return;
        }
        window.postMessage({ addStyle: true });
        $(document.head).append(`<link href="${URL$1.LAYUI_CSS}" rel="stylesheet"/>`).append(`<script src="${URL$1.LAYUI_JS}" type="text/javascript"><\/script>`);
        _GM_addStyle(`
    jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
    jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `);
        setTimeout(() => {
          _unsafeWindow.GLOBAL_SOURCE_ELEMENT.hide();
          try {
            _unsafeWindow.GLOBAL_JSON = eval(`(${rawText})`);
          } catch (e) {
            _unsafeWindow.GLOBAL_JSON = JSON.parse(rawText);
          }
          __vitePreload(() => module.import('./index-E31Rf2gx-DpdWBgQa.js'), void 0 );
          __vitePreload(() => module.import('./index-ub_rLyWJ-DP-kKrZ0.js'), void 0 ).then((format) => format.default.init()).then(() => __vitePreload(() => module.import('./index-Bs6ZJcP_-BZOQtGod.js'), void 0 )).then(() => __vitePreload(() => module.import('./index-D3l8MoSf-Dhsxm64a.js'), void 0 ));
        });
        const openInTab = () => _GM_openInTab(URL$1.EXAMPLE_JSON);
        _GM_registerMenuCommand("测试JSON( Alt + j )", openInTab);
        document.addEventListener("keydown", function(event) {
          if (event.altKey && event.key === "j") {
            openInTab();
          }
        });
      })();

    })
  };
}));

System.register("./index-DGytUOX_-D8Hm-GfS.js", ['jquery', 'highlight.js', 'beautifier'], (function (exports, module) {
  'use strict';
  var $, hljs, js_beautify, css_beautify;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      hljs = module.default;
    }, module => {
      js_beautify = module.js_beautify;
      css_beautify = module.css_beautify;
    }],
    execute: (function () {

      (function() {
        const docType = [
          "application/x-javascript",
          "application/javascript",
          "text/javascript",
          "text/css"
        ];
        const contentType = document.contentType;
        if (!docType.includes(document.contentType)) {
          return;
        }
        const preElement = $("pre").first();
        if (preElement.length === 0) {
          return;
        }
        window.postMessage({ addStyle: true });
        setTimeout(() => {
          const rawText = preElement.text();
          const layout = `<div class="beautify_checkbox">
        <input type="checkbox" id="beautify"/>
        <label for="beautify">美化输出</label>
      </div>`;
          document.body.insertAdjacentHTML("afterbegin", layout);
          const checkbox = document.querySelector(".beautify_checkbox input");
          checkbox.addEventListener("click", function() {
            if (this.checked) {
              beautifyCode(contentType, preElement, rawText);
            } else {
              preElement.html(rawText);
            }
          });
        });
      })();
      function beautifyCode(contentType, element, rawText) {
        const language = contentType.substring(contentType.indexOf("/") + 1);
        if (!["css", "javascript", "x-javascript"].includes(language)) {
          return;
        }
        let beautifyCode2;
        switch (language) {
          case "css":
            const cssBeautify = css_beautify ? css_beautify : window.css_beautify;
            beautifyCode2 = cssBeautify(rawText);
            beautifyCode2 = hljs.highlight(beautifyCode2, {
              language
            }).value;
            break;
          case "javascript":
          case "x-javascript":
            const jsBeautify = js_beautify ? js_beautify : window.js_beautify;
            beautifyCode2 = jsBeautify(rawText);
            beautifyCode2 = hljs.highlight(beautifyCode2, {
              language: "javascript"
            }).value;
            break;
        }
        element.html(`<code>${beautifyCode2}</code>`);
      }

    })
  };
}));

System.register("./index-E31Rf2gx-DpdWBgQa.js", [], (function (exports, module) {
    'use strict';
    return {
        execute: (function () {

            const layout = `
<div class="format-container">
    <div class="panel">
        <div class="tabs">
            <div class="tabs-item btn active" id="format">JSON格式化</div>
            <div class="tabs-item btn" id="viewJsonMind">JSON脑图</div>
            <div class="tabs-item btn" id="viewRawText">原始数据</div>
        </div>
        <div class="toolbar">
            <div class="toolbar-item btn" id="saveJson">保存</div>
            <div class="toolbar-item btn" id="copyJson">复制</div>
            <div class="toolbar-item btn" id="collapseAll">全部折叠</div>
            <div class="toolbar-item btn" id="expandAll">全部展开</div>
            <div class="toolbar-item btn" id="jsoncrack" style="display: none;">JSON Crack</div>
            <div class="toolbar-item btn" id="beautify" style="display: none;">美化输出</div>
            <div class="searchbox">
                <input type="text" placeholder="过滤 JSON "/>
                <button class="clear" hidden></button>
            </div>
        </div>
        <div class="rightbox">
            <div class="style">
                <span>风格</span>
                <span class="ulbox" data-type="style">
                    <ul>
                        <li data-type="style" data-value="default">默认</li>
                        <li data-type="style" data-value="table">表格</li>
                    </ul>
                </span>
            </div>
            <div class="theme">
                <span>主题</span>
                <span class="ulbox" data-type="theme">
                    <ul>
                        <li data-type="theme" data-value="default">默认</li>
                        <li data-type="theme" data-value="light">浅色</li>
                        <li data-type="theme" data-value="dark">暗黑</li>
                        <li data-type="theme" data-value="dark_plus">暗黑+</li>
                    </ul>
                </span>
            </div>
            <div class="tools">
                <span>工具</span>
                <span class="ulbox" data-type="tools">
                    <ul>
                        <li data-type="tools" data-value="inputJson">JSON 输入</li>
                        <li data-type="tools" data-value="fetchApi">HTTP 请求</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
    <div class="tabs-container">
        <div class="active" id="formatContainer"></div>
        <div id="jmContainer"></div>
        <div id="rawTextContainer"><pre></pre></div>
    </div>
</div>`;
            document.body.insertAdjacentHTML("afterbegin", layout);

        })
    };
}));

System.register("./index-ub_rLyWJ-DP-kKrZ0.js", ['jquery', './__monkey.entry-BV3dTQL8.js', './tippy.esm-Ot9MORvr-DNGa7Opj.js'], (function (exports, module) {
  'use strict';
  var $, _GM_setValue, _GM_getValue, _unsafeWindow, Utils, _GM_setClipboard, tippy;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      _GM_setValue = module._;
      _GM_getValue = module.a;
      _unsafeWindow = module.b;
      Utils = module.U;
      _GM_setClipboard = module.c;
    }, module => {
      tippy = module.t;
    }],
    execute: (function () {

      (function($2) {
        function isCollapsable(arg) {
          return arg instanceof Object && Object.keys(arg).length > 0;
        }
        function json2html(json, parentPath = "") {
          let html = "", type = Utils.getType(json);
          switch (type) {
            case "array":
            case "object":
              let len = json.length || Object.keys(json).length;
              if (len > 0) {
                html += `<span class="json-brackets ${type == "array" ? "json-square-brackets" : "json-curly-brackets"}">`;
                html += type === "array" ? '[</span><ol class="json-array">' : '{</span><ul class="json-object">';
                for (var key in json) {
                  if (json.hasOwnProperty(key)) {
                    let comma = --len > 0 ? "," : "", jsonPath = parentPath + "." + key, collapse = isCollapsable(json[key]) ? '<a href class="json-toggle"></a>' : "", res = json2html(json[key], jsonPath);
                    let toHtml = type === "array" ? res : `<span class="json-key">"${key}"</span>: ${res}`;
                    html += [
                      `<li json-path="${jsonPath}">`,
                      collapse,
                      toHtml,
                      comma,
                      "</li>"
                    ].join("");
                  }
                }
                if (type === "array") {
                  html += `</ol><span class="json-brackets json-square-brackets">]</span>`;
                } else {
                  html += `</ul><span class="json-brackets json-curly-brackets">}</span>`;
                }
              } else {
                html += `<span class="json-brackets ${type == "array" ? "json-square-brackets" : "json-curly-brackets"}">`;
                html += type === "array" ? "[]" : "{}";
                html += "</span>";
              }
              break;
            default:
              json = type === "string" ? json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : json;
              if (Utils.isUrl(json)) {
                html += `<a target="_blank" href="${json}" class="json-string">"${json}"</a>`;
              } else {
                json = type === "string" ? `"${json}"` : json;
                html += `<span class="json-${type}">${json}</span>`;
              }
              break;
          }
          return html;
        }
        $2.fn.jsonViewer = function(json, jsonpFn) {
          return this.each(function() {
            var html = json2html(json);
            if (jsonpFn !== void 0 && jsonpFn !== null) {
              html = `<div class="jsonp">${jsonpFn}(</div>${html}<div class="jsonp">)</div>`;
            }
            $2(this).html(html);
            $2(this).off("click");
            $2(this).on("click", "a.json-toggle", function() {
              var target = $2(this).toggleClass("collapsed").siblings("ul.json-object, ol.json-array");
              target.toggle();
              if (target.is(":visible")) {
                target.siblings(".json-placeholder").remove();
              } else {
                var count = target.children('li:not([class*="hidden"])').length;
                var placeholder = count + (count > 1 ? " items" : " item");
                target.after(
                  '<a href class="json-placeholder">' + placeholder + "</a>"
                );
              }
              return false;
            });
            $2(this).on("click", "a.json-placeholder", function() {
              $2(this).siblings("a.json-toggle").click();
              $2(this).siblings("a.json-placeholder").remove();
              return false;
            });
          });
        };
      })($);
      !function(e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var i = t[o] = { i: o, l: false, exports: {} };
          return e[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        n.m = e, n.c = t, n.d = function(e2, t2, o) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2) for (var i in e2) n.d(o, i, (function(t3) {
            return e2[t3];
          }).bind(null, i));
          return o;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "/dist", n(n.s = 5);
      }([function(e, t) {
        e.exports = $;
      }, function(e, t, n) {
        var o = n(2), i = n(3);
        "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
        var a = { insert: "head", singleton: false };
        o(i, a);
        e.exports = i.locals || {};
      }, function(e, t, n) {
        var o, i = function() {
          return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
        }, a = /* @__PURE__ */ function() {
          var e2 = {};
          return function(t2) {
            if (void 0 === e2[t2]) {
              var n2 = document.querySelector(t2);
              if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement) try {
                n2 = n2.contentDocument.head;
              } catch (e3) {
                n2 = null;
              }
              e2[t2] = n2;
            }
            return e2[t2];
          };
        }(), r = [];
        function s(e2) {
          for (var t2 = -1, n2 = 0; n2 < r.length; n2++) if (r[n2].identifier === e2) {
            t2 = n2;
            break;
          }
          return t2;
        }
        function c(e2, t2) {
          for (var n2 = {}, o2 = [], i2 = 0; i2 < e2.length; i2++) {
            var a2 = e2[i2], c2 = t2.base ? a2[0] + t2.base : a2[0], l2 = n2[c2] || 0, u2 = "".concat(c2, " ").concat(l2);
            n2[c2] = l2 + 1;
            var d2 = s(u2), f2 = { css: a2[1], media: a2[2], sourceMap: a2[3] };
            -1 !== d2 ? (r[d2].references++, r[d2].updater(f2)) : r.push({ identifier: u2, updater: y(f2, t2), references: 1 }), o2.push(u2);
          }
          return o2;
        }
        function l(e2) {
          var t2 = document.createElement("style"), o2 = e2.attributes || {};
          if (void 0 === o2.nonce) {
            var i2 = n.nc;
            i2 && (o2.nonce = i2);
          }
          if (Object.keys(o2).forEach(function(e3) {
            t2.setAttribute(e3, o2[e3]);
          }), "function" == typeof e2.insert) e2.insert(t2);
          else {
            var r2 = a(e2.insert || "head");
            if (!r2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            r2.appendChild(t2);
          }
          return t2;
        }
        var u, d = (u = [], function(e2, t2) {
          return u[e2] = t2, u.filter(Boolean).join("\n");
        });
        function f(e2, t2, n2, o2) {
          var i2 = n2 ? "" : o2.media ? "@media ".concat(o2.media, " {").concat(o2.css, "}") : o2.css;
          if (e2.styleSheet) e2.styleSheet.cssText = d(t2, i2);
          else {
            var a2 = document.createTextNode(i2), r2 = e2.childNodes;
            r2[t2] && e2.removeChild(r2[t2]), r2.length ? e2.insertBefore(a2, r2[t2]) : e2.appendChild(a2);
          }
        }
        function h(e2, t2, n2) {
          var o2 = n2.css, i2 = n2.media, a2 = n2.sourceMap;
          if (i2 ? e2.setAttribute("media", i2) : e2.removeAttribute("media"), a2 && btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a2)))), " */")), e2.styleSheet) e2.styleSheet.cssText = o2;
          else {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(o2));
          }
        }
        var p = null, v = 0;
        function y(e2, t2) {
          var n2, o2, i2;
          if (t2.singleton) {
            var a2 = v++;
            n2 = p || (p = l(t2)), o2 = f.bind(null, n2, a2, false), i2 = f.bind(null, n2, a2, true);
          } else n2 = l(t2), o2 = h.bind(null, n2, t2), i2 = function() {
            !function(e3) {
              if (null === e3.parentNode) return false;
              e3.parentNode.removeChild(e3);
            }(n2);
          };
          return o2(e2), function(t3) {
            if (t3) {
              if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap) return;
              o2(e2 = t3);
            } else i2();
          };
        }
        e.exports = function(e2, t2) {
          (t2 = t2 || {}).singleton || "boolean" == typeof t2.singleton || (t2.singleton = i());
          var n2 = c(e2 = e2 || [], t2);
          return function(e3) {
            if (e3 = e3 || [], "[object Array]" === Object.prototype.toString.call(e3)) {
              for (var o2 = 0; o2 < n2.length; o2++) {
                var i2 = s(n2[o2]);
                r[i2].references--;
              }
              for (var a2 = c(e3, t2), l2 = 0; l2 < n2.length; l2++) {
                var u2 = s(n2[l2]);
                0 === r[u2].references && (r[u2].updater(), r.splice(u2, 1));
              }
              n2 = a2;
            }
          };
        };
      }, function(e, t, n) {
        (t = n(4)(false)).push([e.i, ".simple-tree-table-icon{display:inline-block;width:1.5em;line-height:1.5em;margin:0.1em;background-color:#eee;text-align:center;cursor:pointer}.simple-tree-table-opened .simple-tree-table-icon:after{content:'-'}.simple-tree-table-closed .simple-tree-table-icon:after{content:'+'}\n", ""]), e.exports = t;
      }, function(e, t, n) {
        e.exports = function(e2) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = function(e3, t4) {
                var n3 = e3[1] || "", o = e3[3];
                if (!o) return n3;
                if (t4 && "function" == typeof btoa) {
                  var i = (r = o, s = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")), a = o.sources.map(function(e4) {
                    return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e4, " */");
                  });
                  return [n3].concat(a).concat([i]).join("\n");
                }
                var r, s, c;
                return [n3].join("\n");
              }(t3, e2);
              return t3[2] ? "@media ".concat(t3[2], " {").concat(n2, "}") : n2;
            }).join("");
          }, t2.i = function(e3, n2, o) {
            "string" == typeof e3 && (e3 = [[null, e3, ""]]);
            var i = {};
            if (o) for (var a = 0; a < this.length; a++) {
              var r = this[a][0];
              null != r && (i[r] = true);
            }
            for (var s = 0; s < e3.length; s++) {
              var c = [].concat(e3[s]);
              o && i[c[0]] || (n2 && (c[2] ? c[2] = "".concat(n2, " and ").concat(c[2]) : c[2] = n2), t2.push(c));
            }
          }, t2;
        };
      }, function(e, t, n) {
        n.r(t);
        var o = n(0), i = n.n(o);
        function a(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
          }
        }
        function s(e2, t2, n2) {
          return t2 && r(e2.prototype, t2), e2;
        }
        var c = function() {
          function e2() {
            var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a(this, e2), this.opts = { type: t2.type || "session", key: t2.key }, this.inst = new l(this.opts);
          }
          return s(e2, [{ key: "get", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return this.inst.get(this.opts.key) || e3;
          } }, { key: "set", value: function(e3) {
            this.inst.set(this.opts.key, e3);
          } }, { key: "remove", value: function() {
            this.inst.remove(this.opts.key);
          } }]), e2;
        }(), l = function() {
          function e2() {
            var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a(this, e2), this.storage = { local: window.localStorage, session: window.sessionStorage }[t2.type];
          }
          return s(e2, [{ key: "get", value: function(e3) {
            try {
              var t2 = this.storage.getItem(e3);
              return t2 ? JSON.parse(t2) : null;
            } catch (e4) {
              return console.log(e4), null;
            }
          } }, { key: "set", value: function(e3, t2) {
            try {
              this.storage.setItem(e3, JSON.stringify(t2));
            } catch (e4) {
              console.log(e4);
            }
          } }, { key: "remove", value: function(e3) {
            this.storage.removeItem(e3);
          } }]), e2;
        }(), u = (n(1), "simple-tree-table");
        function d(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function f(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
          }
        }
        var h = { expander: null, collapser: null, opened: "all", margin: 20, iconPosition: "> :first-child", iconTemplate: "<span />", store: null, storeKey: null }, p = function() {
          function e2(t3) {
            var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            d(this, e2), this.options = i.a.extend({}, h, n3), this.$table = i()(t3), this.$expander = i()(this.options.expander), this.$collapser = i()(this.options.collapser), this.options.store && this.options.storeKey && (this.store = new c({ type: this.options.store, key: this.options.storeKey })), this.init(), this.load();
          }
          var t2, n2, o2;
          return t2 = e2, o2 = [{ key: "getDefaults", value: function() {
            return h;
          } }, { key: "setDefaults", value: function(e3) {
            return i.a.extend(h, e3);
          } }], (n2 = [{ key: "init", value: function() {
            this.$table.addClass(u), this.build(), this.unbind(), this.bind();
          } }, { key: "destroy", value: function() {
            var e3 = function(e4, t3) {
              var n3 = new RegExp("".concat(u, "(-\\S+)?"), "g");
              return (t3.match(n3) || []).join(" ");
            };
            this.$table.removeClass(e3), this.nodes().removeClass(e3), this.$table.find(".".concat(u, "-icon")).remove(), this.unbind();
          } }, { key: "build", value: function() {
            var e3 = this;
            this.nodes().not("[data-node-depth]").each(function(t3, n3) {
              var o3 = i()(n3), a2 = e3.depth(o3);
              o3.data("node-depth", a2), 1 == a2 && o3.addClass("".concat(u, "-root"));
            }), this.nodes().filter(function(t3, n3) {
              return 0 == i()(n3).find(e3.options.iconPosition).find(".".concat(u, "-handler")).length;
            }).each(function(t3, n3) {
              var o3 = i()(n3), a2 = e3.depth(o3), r2 = e3.options.margin * (a2 - 1), s2 = i()(e3.options.iconTemplate).addClass("".concat(u, "-handler ").concat(u, "-icon")).css("margin-left", "".concat(r2, "px"));
              o3.find(e3.options.iconPosition).prepend(s2);
            }), this.nodes().not(".".concat(u, "-empty, .").concat(u, "-opened, .").concat(u, "-closed")).each(function(t3, n3) {
              var o3 = i()(n3);
              e3.hasChildren(o3) ? e3.opensDefault(o3) ? o3.addClass("".concat(u, "-opened")) : o3.addClass("".concat(u, "-closed")) : o3.addClass("".concat(u, "-empty"));
            }), this.nodes().filter(".".concat(u, "-opened")).each(function(t3, n3) {
              e3.show(i()(n3));
            }), this.nodes().filter(".".concat(u, "-closed")).each(function(t3, n3) {
              e3.hide(i()(n3));
            });
          } }, { key: "opensDefault", value: function(e3) {
            var t3 = this.options.opened;
            return t3 && ("all" == t3 || -1 != t3.indexOf(e3.data("node-id")));
          } }, { key: "bind", value: function() {
            var e3 = this;
            this.$expander.on("click.".concat(u), function(t3) {
              e3.expand();
            }), this.$collapser.on("click.".concat(u), function(t3) {
              e3.collapse();
            }), this.$table.on("click.".concat(u), "tr .".concat(u, "-handler"), function(t3) {
              var n3 = i()(t3.currentTarget).closest("tr");
              n3.hasClass("".concat(u, "-opened")) ? e3.close(n3) : e3.open(n3);
            });
          } }, { key: "unbind", value: function() {
            this.$expander.off(".".concat(u)), this.$collapser.off(".".concat(u)), this.$table.off(".".concat(u, " node:open node:close"));
          } }, { key: "expand", value: function() {
            var e3 = this;
            this.nodes().each(function(t3, n3) {
              e3.show(i()(n3));
            }), this.save();
          } }, { key: "collapse", value: function() {
            var e3 = this;
            this.nodes().each(function(t3, n3) {
              e3.hide(i()(n3));
            }), this.save();
          } }, { key: "nodes", value: function() {
            return this.$table.find("tr[data-node-id]");
          } }, { key: "depth", value: function(e3) {
            var t3 = e3.data("node-depth");
            if (t3) return t3;
            var n3 = this.findByID(e3.data("node-pid"));
            return 0 != n3.length ? this.depth(n3) + 1 : 1;
          } }, { key: "open", value: function(e3) {
            this.show(e3), this.save(), e3.trigger("node:open", [e3]);
          } }, { key: "show", value: function(e3) {
            e3.hasClass("".concat(u, "-empty")) || (e3.removeClass("".concat(u, "-closed")).addClass("".concat(u, "-opened")), this.showDescs(e3));
          } }, { key: "showDescs", value: function(e3) {
            var t3 = this;
            this.findChildren(e3).each(function(e4, n3) {
              var o3 = i()(n3);
              o3.show(), o3.hasClass("".concat(u, "-opened")) && t3.showDescs(o3);
            });
          } }, { key: "close", value: function(e3) {
            this.hide(e3), this.save(), e3.trigger("node:close", [e3]);
          } }, { key: "hide", value: function(e3) {
            e3.hasClass("".concat(u, "-empty")) || (e3.removeClass("".concat(u, "-opened")).addClass("".concat(u, "-closed")), this.hideDescs(e3));
          } }, { key: "hideDescs", value: function(e3) {
            var t3 = this;
            this.findChildren(e3).each(function(e4, n3) {
              var o3 = i()(n3);
              o3.hide(), t3.hideDescs(o3);
            });
          } }, { key: "hasChildren", value: function(e3) {
            return 0 != this.findChildren(e3).length;
          } }, { key: "findChildren", value: function(e3) {
            var t3 = e3.data("node-id");
            return this.$table.find('tr[data-node-pid="'.concat(t3, '"]'));
          } }, { key: "findDescendants", value: function(e3) {
            var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], o3 = this.findChildren(e3);
            return n3.push(o3), o3.each(function(e4, o4) {
              t3.findDescendants(i()(o4), n3);
            }), n3;
          } }, { key: "findByID", value: function(e3) {
            return this.$table.find('tr[data-node-id="'.concat(e3, '"]'));
          } }, { key: "openByID", value: function(e3) {
            this.open(this.findByID(e3));
          } }, { key: "closeByID", value: function(e3) {
            this.close(this.findByID(e3));
          } }, { key: "load", value: function() {
            var e3 = this;
            if (this.store) {
              var t3 = this.store.get();
              t3 && (this.nodes().each(function(t4, n3) {
                e3.show(i()(n3));
              }), this.nodes().filter(function(e4, n3) {
                return -1 != t3.indexOf(i()(n3).data("node-id"));
              }).each(function(t4, n3) {
                e3.hide(i()(n3));
              }));
            }
          } }, { key: "save", value: function() {
            if (this.store) {
              var e3 = this.nodes().filter(".".concat(u, "-closed")).map(function(e4, t3) {
                return i()(t3).data("node-id");
              }).get();
              this.store.set(e3);
            }
          } }]) && f(t2.prototype, n2), o2 && f(t2, o2), e2;
        }();
        i.a.fn.simpleTreeTable = function(e2) {
          return this.each(function(t2, n2) {
            var o2 = i()(n2);
            o2.data(u) && o2.data(u).destroy(), o2.data(u, new p(o2, e2));
          });
        }, i.a.SimpleTreeTable = p;
      }]);
      function generateTrHtml(json, level = 0, pId = "", pChain = "") {
        let tr = "";
        for (const key in json) {
          let val = json[key], type = Utils.getType(val), tId = key + "_" + Math.random(), chain = pChain + "." + key;
          if (["array", "object"].includes(type)) {
            let brackets = "", len = Object.keys(val).length, res = generateTrHtml(val, level + 1, tId, chain);
            if (!res) {
              if (type === "array") {
                brackets = `<span class="json-brackets json-square-brackets">[]</span>`;
              } else {
                brackets = `<span class="json-brackets json-curly-brackets">{}</span>`;
              }
            }
            tr += `
                <tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                    <td class="json-key" json-path="${chain}" style="padding-left: ${level * 19}px">${key}:
                        <span class="tree-len">${len > 0 ? type === "array" ? "[" + len + "]" : "{" + len + "}" : ""}</span>
                    </td>
                    <td>${brackets}</td>
                </tr>`;
            tr += res;
          } else {
            val = type === "string" ? val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : val;
            tr += `<tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                <td class="json-key" json-path="${chain}" style="padding-left: ${level * 19}px">${key}:</td>`;
            if (Utils.isUrl(val)) {
              tr += `<td class="json-${type}"><a target="_blank" href="${val}">"${val}"</a></td>`;
            } else {
              val = type === "string" ? `"${val}"` : val;
              tr += `<td class="json-${type}">${val}</td>`;
            }
            tr += "</tr>";
          }
        }
        return tr;
      }
      const evnet = {
        /**
         * a标签鼠标移入，看是否是图片，是图片生成预览图
         * @returns this
         */
        urlHover: function() {
          $("#formatContainer").on("mouseenter", "a[href]", function() {
            const that = $(this), href = that.attr("href");
            if (Utils.isImg(href)) {
              tippy(this, {
                content: `<img style="max-width: 500px;" src="${href}" />`,
                allowHTML: true,
                theme: "imagebox"
              }).show();
            }
          });
          return this;
        },
        /**
         * 鼠标移入key提示JSONPath
         * @returns this
         */
        tipsJsonPath: function() {
          const that = this;
          $("#formatContainer").on("mouseenter", ".json-key", function() {
            const jsonPath = that.getJsonPath(this);
            const content = `<b>ctrl + 点击复制</b><br/>${jsonPath}`;
            tippy(this, {
              content,
              allowHTML: true,
              theme: "layer"
            }).show();
          });
          return that;
        },
        /**
         * 复制key的JSONPath
         * @returns
         */
        copyJsonPath: function() {
          const that = this;
          $("#formatContainer").on("click", ".json-key", function(event) {
            if (event.ctrlKey) {
              const jsonPath = that.getJsonPath(this);
              _GM_setClipboard(jsonPath);
              layer.msg("复制成功", { time: 1500 });
            }
          });
          return that;
        },
        /**
         * 给定HtmlElement获取JSONPath
         * @param {*} element
         * @returns
         */
        getJsonPath: function(element) {
          const style = _GM_getValue("style") || "default";
          const jsonPath = style == "default" ? $(element).parent().attr("json-path") : $(element).attr("json-path");
          return jsonPath.split(".").reduce(
            (prev, next) => /^\d+$/.test(next) ? prev + `[${next}]` : prev + "." + next
          );
        },
        init: function() {
          this.urlHover().tipsJsonPath().copyJsonPath();
        }
      };
      const format_style = exports("default", {
        /**
         * 切换JSON 格式化风格
         * @param {*} style 格式化风格，default/table
         * @returns
         */
        changeStyle: function(style) {
          layer.load(0, { shade: false });
          _GM_setValue("style", style);
          this.setStyle();
          return this;
        },
        /**
         * 设置JSON 格式化风格
         * @returns
         */
        setStyle: function() {
          const style = _GM_getValue("style") || "default";
          $("input").val("");
          $("#formatContainer").html("");
          if (style === "default") {
            $("#formatContainer").jsonViewer(
              _unsafeWindow.GLOBAL_JSON,
              _unsafeWindow.GLOBAL_JSONP_FUN
            );
            try {
              layer.closeAll();
            } catch (error) {
            }
          } else {
            const trHTML = generateTrHtml(_unsafeWindow.GLOBAL_JSON);
            let appendHtml = `<table id="treeTable">${trHTML}</table>`;
            if (_unsafeWindow.GLOBAL_JSONP_FUN !== void 0 && _unsafeWindow.GLOBAL_JSONP_FUN !== null) {
              appendHtml = `<div class="jsonp">${_unsafeWindow.GLOBAL_JSONP_FUN}(</div>${appendHtml}<div class="jsonp">)</div>`;
            }
            $("#formatContainer").append(appendHtml);
            setTimeout(() => {
              $("#treeTable").simpleTreeTable({
                expander: "#expandAll",
                collapser: "#collapseAll"
              });
              try {
                layer.closeAll();
              } catch (error) {
              }
            });
            $("#treeTable").on("mousedown", "tr", function() {
              $(".selected").not(this).removeClass("selected");
              $(this).toggleClass("selected");
            });
          }
          return this;
        },
        init: function() {
          const that = this;
          that.setStyle();
          evnet.init();
          window.addEventListener("message", function(event) {
            const { data } = event;
            if (!data) {
              return;
            }
            if (data.reload) {
              that.setStyle();
              return;
            }
            const { type, value } = data;
            if (type === "style") {
              that.changeStyle(value);
              return;
            }
          });
        }
      });

    })
  };
}));

System.register("./index-Bs6ZJcP_-BZOQtGod.js", ['jquery', './tippy.esm-Ot9MORvr-DNGa7Opj.js', 'jsmind', './__monkey.entry-BV3dTQL8.js'], (function (exports, module) {
  'use strict';
  var $, tippy, require$$0, _unsafeWindow, Utils, _GM_setClipboard, _GM_getValue, URL$1, _GM_setValue;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      tippy = module.t;
    }, module => {
      require$$0 = module.default;
    }, module => {
      _unsafeWindow = module.b;
      Utils = module.U;
      _GM_setClipboard = module.c;
      _GM_getValue = module.a;
      URL$1 = module.d;
      _GM_setValue = module._;
    }],
    execute: (function () {

      var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
      var domToImage = { exports: {} };
      var hasRequiredDomToImage;
      function requireDomToImage() {
        if (hasRequiredDomToImage) return domToImage.exports;
        hasRequiredDomToImage = 1;
        (function(module) {
          (function(global2) {
            var util = newUtil();
            var inliner = newInliner();
            var fontFaces = newFontFaces();
            var images = newImages();
            var defaultOptions = {
              // Default is to fail on error, no placeholder
              imagePlaceholder: void 0,
              // Default cache bust is false, it will use the cache
              cacheBust: false
            };
            var domtoimage = {
              toSvg,
              toPng,
              toJpeg,
              toBlob,
              toPixelData,
              impl: {
                fontFaces,
                images,
                util,
                inliner,
                options: {}
              }
            };
            module.exports = domtoimage;
            function toSvg(node, options) {
              options = options || {};
              copyOptions(options);
              return Promise.resolve(node).then(function(node2) {
                return cloneNode(node2, options.filter, true);
              }).then(embedFonts).then(inlineImages).then(applyOptions).then(function(clone) {
                return makeSvgDataUri(
                  clone,
                  options.width || util.width(node),
                  options.height || util.height(node)
                );
              });
              function applyOptions(clone) {
                if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
                if (options.width) clone.style.width = options.width + "px";
                if (options.height) clone.style.height = options.height + "px";
                if (options.style)
                  Object.keys(options.style).forEach(function(property) {
                    clone.style[property] = options.style[property];
                  });
                return clone;
              }
            }
            function toPixelData(node, options) {
              return draw(node, options || {}).then(function(canvas) {
                return canvas.getContext("2d").getImageData(
                  0,
                  0,
                  util.width(node),
                  util.height(node)
                ).data;
              });
            }
            function toPng(node, options) {
              return draw(node, options || {}).then(function(canvas) {
                return canvas.toDataURL();
              });
            }
            function toJpeg(node, options) {
              options = options || {};
              return draw(node, options).then(function(canvas) {
                return canvas.toDataURL("image/jpeg", options.quality || 1);
              });
            }
            function toBlob(node, options) {
              return draw(node, options || {}).then(util.canvasToBlob);
            }
            function copyOptions(options) {
              if (typeof options.imagePlaceholder === "undefined") {
                domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
              } else {
                domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
              }
              if (typeof options.cacheBust === "undefined") {
                domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
              } else {
                domtoimage.impl.options.cacheBust = options.cacheBust;
              }
            }
            function draw(domNode, options) {
              return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function(image) {
                var canvas = newCanvas(domNode);
                canvas.getContext("2d").drawImage(image, 0, 0);
                return canvas;
              });
              function newCanvas(domNode2) {
                var canvas = document.createElement("canvas");
                canvas.width = options.width || util.width(domNode2);
                canvas.height = options.height || util.height(domNode2);
                if (options.bgcolor) {
                  var ctx = canvas.getContext("2d");
                  ctx.fillStyle = options.bgcolor;
                  ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
                return canvas;
              }
            }
            function cloneNode(node, filter2, root) {
              if (!root && filter2 && !filter2(node)) return Promise.resolve();
              return Promise.resolve(node).then(makeNodeCopy).then(function(clone) {
                return cloneChildren(node, clone, filter2);
              }).then(function(clone) {
                return processClone(node, clone);
              });
              function makeNodeCopy(node2) {
                if (node2 instanceof HTMLCanvasElement) return util.makeImage(node2.toDataURL());
                return node2.cloneNode(false);
              }
              function cloneChildren(original, clone, filter3) {
                var children = original.childNodes;
                if (children.length === 0) return Promise.resolve(clone);
                return cloneChildrenInOrder(clone, util.asArray(children), filter3).then(function() {
                  return clone;
                });
                function cloneChildrenInOrder(parent, children2, filter4) {
                  var done = Promise.resolve();
                  children2.forEach(function(child) {
                    done = done.then(function() {
                      return cloneNode(child, filter4);
                    }).then(function(childClone) {
                      if (childClone) parent.appendChild(childClone);
                    });
                  });
                  return done;
                }
              }
              function processClone(original, clone) {
                if (!(clone instanceof Element)) return clone;
                return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function() {
                  return clone;
                });
                function cloneStyle() {
                  copyStyle(window.getComputedStyle(original), clone.style);
                  function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;
                    else copyProperties(source, target);
                    function copyProperties(source2, target2) {
                      util.asArray(source2).forEach(function(name) {
                        target2.setProperty(
                          name,
                          source2.getPropertyValue(name),
                          source2.getPropertyPriority(name)
                        );
                      });
                    }
                  }
                }
                function clonePseudoElements() {
                  [":before", ":after"].forEach(function(element) {
                    clonePseudoElement(element);
                  });
                  function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue("content");
                    if (content === "" || content === "none") return;
                    var className = util.uid();
                    clone.className = clone.className + " " + className;
                    var styleElement = document.createElement("style");
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);
                    function formatPseudoElementStyle(className2, element2, style2) {
                      var selector = "." + className2 + ":" + element2;
                      var cssText = style2.cssText ? formatCssText(style2) : formatCssProperties(style2);
                      return document.createTextNode(selector + "{" + cssText + "}");
                      function formatCssText(style3) {
                        var content2 = style3.getPropertyValue("content");
                        return style3.cssText + " content: " + content2 + ";";
                      }
                      function formatCssProperties(style3) {
                        return util.asArray(style3).map(formatProperty).join("; ") + ";";
                        function formatProperty(name) {
                          return name + ": " + style3.getPropertyValue(name) + (style3.getPropertyPriority(name) ? " !important" : "");
                        }
                      }
                    }
                  }
                }
                function copyUserInput() {
                  if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                  if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
                }
                function fixSvg() {
                  if (!(clone instanceof SVGElement)) return;
                  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                  if (!(clone instanceof SVGRectElement)) return;
                  ["width", "height"].forEach(function(attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;
                    clone.style.setProperty(attribute, value);
                  });
                }
              }
            }
            function embedFonts(node) {
              return fontFaces.resolveAll().then(function(cssText) {
                var styleNode = document.createElement("style");
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
              });
            }
            function inlineImages(node) {
              return images.inlineAll(node).then(function() {
                return node;
              });
            }
            function makeSvgDataUri(node, width, height) {
              return Promise.resolve(node).then(function(node2) {
                node2.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
                return new XMLSerializer().serializeToString(node2);
              }).then(util.escapeXhtml).then(function(xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + "</foreignObject>";
              }).then(function(foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + "</svg>";
              }).then(function(svg) {
                return "data:image/svg+xml;charset=utf-8," + svg;
              });
            }
            function newUtil() {
              return {
                escape,
                parseExtension,
                mimeType,
                dataAsUrl,
                isDataUrl,
                canvasToBlob,
                resolveUrl,
                getAndEncode,
                uid: uid(),
                delay,
                asArray,
                escapeXhtml,
                makeImage,
                width,
                height
              };
              function mimes() {
                var WOFF = "application/font-woff";
                var JPEG = "image/jpeg";
                return {
                  "woff": WOFF,
                  "woff2": WOFF,
                  "ttf": "application/font-truetype",
                  "eot": "application/vnd.ms-fontobject",
                  "png": "image/png",
                  "jpg": JPEG,
                  "jpeg": JPEG,
                  "gif": "image/gif",
                  "tiff": "image/tiff",
                  "svg": "image/svg+xml"
                };
              }
              function parseExtension(url) {
                var match2 = /\.([^\.\/]*?)$/g.exec(url);
                if (match2) return match2[1];
                else return "";
              }
              function mimeType(url) {
                var extension = parseExtension(url).toLowerCase();
                return mimes()[extension] || "";
              }
              function isDataUrl(url) {
                return url.search(/^(data:)/) !== -1;
              }
              function toBlob2(canvas) {
                return new Promise(function(resolve) {
                  var binaryString = window.atob(canvas.toDataURL().split(",")[1]);
                  var length = binaryString.length;
                  var binaryArray = new Uint8Array(length);
                  for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);
                  resolve(new Blob([binaryArray], {
                    type: "image/png"
                  }));
                });
              }
              function canvasToBlob(canvas) {
                if (canvas.toBlob)
                  return new Promise(function(resolve) {
                    canvas.toBlob(resolve);
                  });
                return toBlob2(canvas);
              }
              function resolveUrl(url, baseUrl) {
                var doc = document.implementation.createHTMLDocument();
                var base = doc.createElement("base");
                doc.head.appendChild(base);
                var a = doc.createElement("a");
                doc.body.appendChild(a);
                base.href = baseUrl;
                a.href = url;
                return a.href;
              }
              function uid() {
                var index = 0;
                return function() {
                  return "u" + fourRandomChars() + index++;
                  function fourRandomChars() {
                    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                  }
                };
              }
              function makeImage(uri) {
                return new Promise(function(resolve, reject) {
                  var image = new Image();
                  image.onload = function() {
                    resolve(image);
                  };
                  image.onerror = reject;
                  image.src = uri;
                });
              }
              function getAndEncode(url) {
                var TIMEOUT = 3e4;
                if (domtoimage.impl.options.cacheBust) {
                  url += (/\?/.test(url) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
                }
                return new Promise(function(resolve) {
                  var request = new XMLHttpRequest();
                  request.onreadystatechange = done;
                  request.ontimeout = timeout;
                  request.responseType = "blob";
                  request.timeout = TIMEOUT;
                  request.open("GET", url, true);
                  request.send();
                  var placeholder;
                  if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                      placeholder = split[1];
                    }
                  }
                  function done() {
                    if (request.readyState !== 4) return;
                    if (request.status !== 200) {
                      if (placeholder) {
                        resolve(placeholder);
                      } else {
                        fail("cannot fetch resource: " + url + ", status: " + request.status);
                      }
                      return;
                    }
                    var encoder = new FileReader();
                    encoder.onloadend = function() {
                      var content = encoder.result.split(/,/)[1];
                      resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                  }
                  function timeout() {
                    if (placeholder) {
                      resolve(placeholder);
                    } else {
                      fail("timeout of " + TIMEOUT + "ms occured while fetching resource: " + url);
                    }
                  }
                  function fail(message) {
                    console.error(message);
                    resolve("");
                  }
                });
              }
              function dataAsUrl(content, type) {
                return "data:" + type + ";base64," + content;
              }
              function escape(string) {
                return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
              }
              function delay(ms) {
                return function(arg) {
                  return new Promise(function(resolve) {
                    setTimeout(function() {
                      resolve(arg);
                    }, ms);
                  });
                };
              }
              function asArray(arrayLike) {
                var array = [];
                var length = arrayLike.length;
                for (var i = 0; i < length; i++) array.push(arrayLike[i]);
                return array;
              }
              function escapeXhtml(string) {
                return string.replace(/#/g, "%23").replace(/\n/g, "%0A");
              }
              function width(node) {
                var leftBorder = px(node, "border-left-width");
                var rightBorder = px(node, "border-right-width");
                return node.scrollWidth + leftBorder + rightBorder;
              }
              function height(node) {
                var topBorder = px(node, "border-top-width");
                var bottomBorder = px(node, "border-bottom-width");
                return node.scrollHeight + topBorder + bottomBorder;
              }
              function px(node, styleProperty) {
                var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
                return parseFloat(value.replace("px", ""));
              }
            }
            function newInliner() {
              var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
              return {
                inlineAll,
                shouldProcess,
                impl: {
                  readUrls,
                  inline
                }
              };
              function shouldProcess(string) {
                return string.search(URL_REGEX) !== -1;
              }
              function readUrls(string) {
                var result = [];
                var match2;
                while ((match2 = URL_REGEX.exec(string)) !== null) {
                  result.push(match2[1]);
                }
                return result.filter(function(url) {
                  return !util.isDataUrl(url);
                });
              }
              function inline(string, url, baseUrl, get) {
                return Promise.resolve(url).then(function(url2) {
                  return baseUrl ? util.resolveUrl(url2, baseUrl) : url2;
                }).then(get || util.getAndEncode).then(function(data) {
                  return util.dataAsUrl(data, util.mimeType(url));
                }).then(function(dataUrl) {
                  return string.replace(urlAsRegex(url), "$1" + dataUrl + "$3");
                });
                function urlAsRegex(url2) {
                  return new RegExp(`(url\\(['"]?)(` + util.escape(url2) + `)(['"]?\\))`, "g");
                }
              }
              function inlineAll(string, baseUrl, get) {
                if (nothingToInline()) return Promise.resolve(string);
                return Promise.resolve(string).then(readUrls).then(function(urls) {
                  var done = Promise.resolve(string);
                  urls.forEach(function(url) {
                    done = done.then(function(string2) {
                      return inline(string2, url, baseUrl, get);
                    });
                  });
                  return done;
                });
                function nothingToInline() {
                  return !shouldProcess(string);
                }
              }
            }
            function newFontFaces() {
              return {
                resolveAll,
                impl: {
                  readAll
                }
              };
              function resolveAll() {
                return readAll().then(function(webFonts) {
                  return Promise.all(
                    webFonts.map(function(webFont) {
                      return webFont.resolve();
                    })
                  );
                }).then(function(cssStrings) {
                  return cssStrings.join("\n");
                });
              }
              function readAll() {
                return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function(rules) {
                  return rules.map(newWebFont);
                });
                function selectWebFontRules(cssRules) {
                  return cssRules.filter(function(rule) {
                    return rule.type === CSSRule.FONT_FACE_RULE;
                  }).filter(function(rule) {
                    return inliner.shouldProcess(rule.style.getPropertyValue("src"));
                  });
                }
                function getCssRules(styleSheets) {
                  var cssRules = [];
                  styleSheets.forEach(function(sheet) {
                    try {
                      util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                      console.log("Error while reading CSS rules from " + sheet.href, e.toString());
                    }
                  });
                  return cssRules;
                }
                function newWebFont(webFontRule) {
                  return {
                    resolve: function resolve() {
                      var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                      return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function() {
                      return webFontRule.style.getPropertyValue("src");
                    }
                  };
                }
              }
            }
            function newImages() {
              return {
                inlineAll,
                impl: {
                  newImage
                }
              };
              function newImage(element) {
                return {
                  inline
                };
                function inline(get) {
                  if (util.isDataUrl(element.src)) return Promise.resolve();
                  return Promise.resolve(element.src).then(get || util.getAndEncode).then(function(data) {
                    return util.dataAsUrl(data, util.mimeType(element.src));
                  }).then(function(dataUrl) {
                    return new Promise(function(resolve, reject) {
                      element.onload = resolve;
                      element.onerror = reject;
                      element.src = dataUrl;
                    });
                  });
                }
              }
              function inlineAll(node) {
                if (!(node instanceof Element)) return Promise.resolve(node);
                return inlineBackground(node).then(function() {
                  if (node instanceof HTMLImageElement)
                    return newImage(node).inline();
                  else
                    return Promise.all(
                      util.asArray(node.childNodes).map(function(child) {
                        return inlineAll(child);
                      })
                    );
                });
                function inlineBackground(node2) {
                  var background = node2.style.getPropertyValue("background");
                  if (!background) return Promise.resolve(node2);
                  return inliner.inlineAll(background).then(function(inlined) {
                    node2.style.setProperty(
                      "background",
                      inlined,
                      node2.style.getPropertyPriority("background")
                    );
                  }).then(function() {
                    return node2;
                  });
                }
              }
            }
          })();
        })(domToImage);
        return domToImage.exports;
      }
      /**
      * @license BSD-3-Clause
      * @copyright 2014-2023 hizzgdev@163.com
      *
      * Project Home:
      *   https://github.com/hizzgdev/jsmind/
      */
      (function(module, exports) {
        !function(e, t) {
          t(require$$0, requireDomToImage());
        }(commonjsGlobal, function(e, t) {
          function i(e2) {
            return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
          }
          var n = i(e), o = i(t);
          if (!n.default) throw new Error("jsMind is not defined");
          if (!o.default) throw new Error("dom-to-image is required");
          const r = n.default.$, s = { filename: null, watermark: { left: r.w.location, right: "https://github.com/hizzgdev/jsmind" }, background: "transparent" };
          class a {
            constructor(e2, t2) {
              var i2 = {};
              n.default.util.json.merge(i2, s), n.default.util.json.merge(i2, t2), this.version = "0.2.0", this.jm = e2, this.options = i2, this.dpr = e2.view.device_pixel_ratio;
            }
            shoot() {
              let e2 = this.create_canvas(), t2 = e2.getContext("2d");
              t2.scale(this.dpr, this.dpr), Promise.resolve(t2).then(() => this.draw_background(t2)).then(() => this.draw_lines(t2)).then(() => this.draw_nodes(t2)).then(() => this.draw_watermark(e2, t2)).then(() => this.download(e2)).then(() => this.clear(e2));
            }
            create_canvas() {
              let e2 = r.c("canvas");
              const t2 = this.jm.view.size.w, i2 = this.jm.view.size.h;
              return e2.width = t2 * this.dpr, e2.height = i2 * this.dpr, e2.style.width = t2 + "px", e2.style.height = i2 + "px", e2.style.visibility = "hidden", this.jm.view.e_panel.appendChild(e2), e2;
            }
            clear(e2) {
              e2.parentNode.removeChild(e2);
            }
            draw_background(e2) {
              return new Promise((function(t2, i2) {
                const n2 = this.options.background;
                n2 && "transparent" !== n2 && (e2.fillStyle = this.options.background, e2.fillRect(0, 0, this.jm.view.size.w, this.jm.view.size.h)), t2(e2);
              }).bind(this));
            }
            draw_lines(e2) {
              return new Promise((function(t2, i2) {
                this.jm.view.graph.copy_to(e2, function() {
                  t2(e2);
                });
              }).bind(this));
            }
            draw_nodes(e2) {
              return o.default.toSvg(this.jm.view.e_nodes, { style: { zoom: 1 } }).then(this.load_image).then(function(t2) {
                return e2.drawImage(t2, 0, 0), e2;
              });
            }
            draw_watermark(e2, t2) {
              return t2.textBaseline = "bottom", t2.fillStyle = "#000", t2.font = "11px Verdana,Arial,Helvetica,sans-serif", this.options.watermark.left && (t2.textAlign = "left", t2.fillText(this.options.watermark.left, 5.5, e2.height - 2.5)), this.options.watermark.right && (t2.textAlign = "right", t2.fillText(this.options.watermark.right, e2.width - 5.5, e2.height - 2.5)), t2;
            }
            load_image(e2) {
              return new Promise(function(t2, i2) {
                let n2 = new Image();
                n2.onload = function() {
                  t2(n2);
                }, n2.onerror = i2, n2.src = e2;
              });
            }
            download(e2) {
              var t2 = (this.options.filename || this.jm.mind.name) + ".png";
              if (navigator.msSaveBlob && e2.msToBlob) {
                var i2 = e2.msToBlob();
                navigator.msSaveBlob(i2, t2);
              } else {
                var n2 = e2.toDataURL(), o2 = r.c("a");
                if ("download" in o2) {
                  o2.style.visibility = "hidden", o2.href = n2, o2.download = t2, r.d.body.appendChild(o2);
                  var s2 = r.d.createEvent("MouseEvents");
                  s2.initEvent("click", true, true), o2.dispatchEvent(s2), r.d.body.removeChild(o2);
                } else location.href = n2;
              }
            }
          }
          let d = new n.default.plugin("screenshot", function(e2, t2) {
            var i2 = new a(e2, t2);
            e2.screenshot = i2, e2.shoot = function() {
              i2.shoot();
            };
          });
          n.default.register_plugin(d);
        });
      })();
      const jsonMind = {
        isFirst: true,
        /**
         * JSON数据转换为jsMind所需要的数据结构
         * @param {*} json JSON 数据
         * @returns
         */
        convert: function(json2) {
          const children = [];
          if (typeof json2 === "object") {
            for (const key in json2) {
              let val = json2[key], isArray = Array.isArray(val);
              if (isArray && val.length > 0) {
                val = Utils.findMaxKeysObject(val);
              }
              const type = Object.prototype.toString.call(val).match(/\s(.+)]/)[1];
              children.push({
                isArray,
                chain: key,
                id: key + "_" + Math.random(),
                topic: `${key}<span class="datatype">${type}</span>`,
                children: this.convert(val)
              });
            }
          }
          return children;
        },
        /**
         * 脑图节点调用链
         * @param {*} node 脑图节点对象
         * @returns
         */
        mindChain: function(node) {
          let chain = node.data.chain;
          if (!node.parent) {
            return chain;
          }
          const parent = node.parent, parentChain = this.mindChain(parent);
          chain = parent.data.isArray ? `${parentChain}[0].${chain}` : `${parentChain}.${chain}`;
          return chain;
        },
        /**
         * 显示脑图
         * @param {*} json JSON 数据
         * @returns
         */
        show: function(json2) {
          let isArr = Array.isArray(json2);
          if (isArr) {
            if (typeof json2[0] !== "object") {
              layer.msg("数据结构无法生成脑图", { time: 1e3 });
              return this;
            }
            json2 = Utils.findMaxKeysObject(json2);
          }
          if (!this.isFirst) {
            return this;
          }
          _unsafeWindow.GLOBAL_JSMIND.show({
            meta: {
              name: "JSON脑图",
              author: "1220301855@qq.com",
              version: "1.0"
            },
            format: "node_tree",
            /* 数据内容 */
            data: {
              id: "root",
              topic: "Response",
              direction: "left",
              children: this.convert(json2),
              chain: isArr ? "Response[0]" : "Response"
            }
          });
          this.isFirst = false;
          return this;
        },
        /**
         * 脑图节点事件
         * @returns
         */
        event: function() {
          const jsonMind2 = this;
          $("jmnode").on("dblclick mouseover", function(event) {
            const that2 = $(this), node = _unsafeWindow.GLOBAL_JSMIND.get_node(that2.attr("nodeid"));
            if (!node.parent) {
              return;
            }
            if (event.type === "dblclick") {
              _GM_setClipboard(jsonMind2.mindChain(node));
              layer.msg("节点路径复制成功", { time: 1500 });
            } else {
              const content = `<b>节点路径（双击复制）</b><br/>${jsonMind2.mindChain(
          node
        )}`;
              tippy(this, {
                content,
                allowHTML: true,
                theme: "layer"
              }).show();
            }
          });
          return this;
        },
        init: function(json2) {
          if (!_unsafeWindow.GLOBAL_JSMIND) {
            _unsafeWindow.GLOBAL_JSMIND = new require$$0({
              mode: "side",
              editable: false,
              container: "jmContainer",
              view: {
                hmargin: 50,
                // 思维导图距容器外框的最小水平距离
                vmargin: 50,
                // 思维导图距容器外框的最小垂直距离
                engine: "svg",
                // 思维导图各节点之间线条的绘制引擎
                draggable: true,
                // 当容器不能完全容纳思维导图时，是否允许拖动画布代替鼠标滚动
                support_html: false,
                line_color: "#C4C9D0"
              },
              zoom: {
                // 配置缩放
                min: 0.1,
                // 最小的缩放比例
                max: 2.1,
                // 最大的缩放比例
                step: 0.1
                // 缩放比例间隔
              },
              layout: {
                vspace: 7,
                // 节点之间的垂直间距
                hspace: 150
                // 节点之间的水平空间
              }
            });
          }
          this.show(json2).event();
        }
      };
      const tabsEvent = {
        firstFormat: true,
        isBeautify: false,
        $rawText: $("#rawTextContainer"),
        /**
         * 保存为文件
         * 如果是JSON 格式化可见，保存JSON数据为.json文件
         * 如果是JSON 脑图可见，保存脑图为图片
         */
        saveJson: function() {
          if ($("#jmContainer").is(":visible")) {
            _unsafeWindow.GLOBAL_JSMIND.shoot();
          } else {
            const content = this.$rawText.text();
            const filename = (/* @__PURE__ */ new Date()).getTime() + ".json";
            Utils.downloadText(content, filename);
          }
        },
        /**
         * 复制JSON文本内容
         */
        copyJson: function() {
          _GM_setClipboard(this.$rawText.text());
          layer.msg("复制成功", { time: 1500 });
        },
        /**
         * 点击了`全部折叠`
         * 如果是JSON 格式化可见，折叠JSON
         * 如果是JSON 脑图可见，折叠脑图节点
         */
        collapseAll: function() {
          if ($("#formatContainer").is(":visible")) {
            try {
              $("a.json-toggle").not(".collapsed").click();
            } catch (e) {
            }
          } else {
            _unsafeWindow.GLOBAL_JSMIND.collapse_all();
          }
        },
        /**
         * 点击了`全部展开`
         * 如果是JSON 格式化可见，展开JSON
         * 如果是JSON 脑图可见，展开脑图节点
         */
        expandAll: function() {
          if ($("#formatContainer").is(":visible")) {
            try {
              $("a.json-placeholder").click().remove();
            } catch (e) {
            }
          } else {
            _unsafeWindow.GLOBAL_JSMIND.expand_all();
            _unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
              _unsafeWindow.GLOBAL_JSMIND.get_root()
            );
          }
        },
        format: function() {
        },
        /**
         * tabs点击了`JSON脑图`
         */
        viewJsonMind: function() {
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          _unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
            _unsafeWindow.GLOBAL_JSMIND.get_root()
          );
        },
        /**
         * tabs点击了`原始数据`
         */
        viewRawText: function() {
          if (this.firstFormat) {
            this.$rawText.html(_unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
            this.firstFormat = false;
          }
        },
        /**
         * 点击了`美化输出`
         */
        beautify: function() {
          this.isBeautify = !this.isBeautify;
          if (this.isBeautify) {
            let str = JSON.stringify(_unsafeWindow.GLOBAL_JSON, null, 2);
            if (_unsafeWindow.GLOBAL_JSONP_FUN !== void 0 && _unsafeWindow.GLOBAL_JSONP_FUN !== null) {
              str = `${_unsafeWindow.GLOBAL_JSONP_FUN}(${str})`;
            }
            this.$rawText.find("pre").text(str);
          } else {
            this.$rawText.html(_unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
          }
        },
        /**
         * 点击了`JSON Crack`
         */
        jsoncrack: function() {
          let theme2 = _GM_getValue("theme") || "light";
          theme2 = theme2.replace(/_.*/, "");
          layer.closeAll();
          const index = layer.open({
            type: 1,
            title: false,
            maxmin: true,
            shadeClose: true,
            area: ["900px", "600px"],
            content: `<iframe style="width: 100%;height: 100%;border: 0;" id="jsoncrackEmbed" src="${URL$1.JSON_CRACK_WIDGET}"></iframe>`,
            success: function(layero) {
              const jsonCrackEmbed = layero.find("#jsoncrackEmbed")[0];
              window == null ? void 0 : window.addEventListener("message", () => {
                jsonCrackEmbed.contentWindow.postMessage(
                  {
                    options: { theme: theme2 },
                    json: JSON.stringify(_unsafeWindow.GLOBAL_JSON)
                  },
                  "*"
                );
              });
            }
          });
          layer.full(index);
        },
        init: function() {
          this.viewRawText();
          $(".btn").on("click", (e) => {
            const target = e.target, id = target.id;
            if (target.classList.contains("tabs-item")) {
              const index = $(target).index();
              $(target).addClass("active").siblings().removeClass("active");
              $(".tabs-container > div").removeClass("active").eq(index).addClass("active");
              const beautifyEl = $("#beautify"), searchEl = $(".searchbox"), copyJsonEl = $("#copyJson"), jsoncrackEl = $("#jsoncrack"), aEl = $("#collapseAll, #expandAll");
              id === "format" ? searchEl.show() : searchEl.hide();
              id === "viewJsonMind" ? copyJsonEl.hide() && jsoncrackEl.show() : copyJsonEl.show() && jsoncrackEl.hide();
              id === "viewRawText" ? beautifyEl.show() && aEl.hide() : beautifyEl.hide() && aEl.show();
            }
            this[id](target);
          });
          return this;
        }
      };
      window.addEventListener("message", function(event) {
        const { data } = event;
        if (data && data.reload) {
          jsonMind.isFirst = true;
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          tabsEvent.isBeautify = false;
          tabsEvent.$rawText.html(_unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
        }
      });
      const filter = {
        /**
         * 根据`filter`过滤 JSON
         * @param {*} filter 过滤值
         * @returns
         */
        filterJSON: function(filter2) {
          const style = _GM_getValue("style") || "default";
          if (!filter2) {
            style == "default" ? $("#formatContainer li").removeClass("hidden") : $(".json-key").parent().removeClass("hidden");
            return;
          }
          const chainSet = /* @__PURE__ */ new Set();
          document.querySelectorAll("#formatContainer *[json-path]").forEach((el) => {
            let chain = $(el).attr("json-path");
            if (!chain) {
              return;
            }
            const newChain = chain.substr(chain.lastIndexOf("."));
            if (!newChain.toLowerCase().includes(filter2.toLowerCase())) {
              return;
            }
            chainSet.add(chain);
            while (chain = chain.substr(0, chain.lastIndexOf("."))) {
              chainSet.add(chain);
            }
          });
          document.querySelectorAll(
            "#formatContainer *[class*='json-']:not([class*='json-key']):not([class*='json-brackets'])"
          ).forEach((el) => {
            const target = $(el);
            let chain = style == "default" ? target.parent().attr("json-path") : target.siblings(".json-key").attr("json-path");
            if (!chain) {
              return;
            }
            const text2 = target.text();
            if (!text2.toLowerCase().includes(filter2.toLowerCase())) {
              return;
            }
            chainSet.add(chain);
            while (chain = chain.substring(0, chain.lastIndexOf("."))) {
              chainSet.add(chain);
            }
          });
          style == "default" ? $("#formatContainer li").addClass("hidden") : $(".json-key").parent().addClass("hidden");
          chainSet.forEach((chain) => {
            style == "default" ? $(`#formatContainer *[json-path="${chain}"]`).removeClass("hidden") : $(`#formatContainer *[json-path="${chain}"]`).parent().removeClass("hidden");
          });
        },
        /**
         * JSON 过滤输入框事件监听
         * @returns
         */
        input: function() {
          const that2 = this;
          $("input").on("input", function() {
            const val = $(this).val();
            val === "" ? $(".clear").attr("hidden", true) : $(".clear").attr("hidden", false);
            that2.filterJSON(val);
          });
          return that2;
        },
        /**
         * 清空输入框内容
         * @returns
         */
        clear: function() {
          const that2 = this;
          $(".clear").click(function() {
            that2.filterJSON();
            $("input").val("");
            $(this).attr("hidden", true);
          });
          return this;
        },
        init: function() {
          this.input().clear();
        }
      };
      const theme = {
        /**
         * 切换主题色
         * @param {*} theme  主题色：default、light、dark、dark_plus
         * @returns
         */
        changeTheme: function(theme2) {
          _GM_setValue("theme", theme2);
          this.setTheme();
          return this;
        },
        /**
         * 设置主题
         * @returns
         */
        setTheme: function() {
          const theme2 = _GM_getValue("theme") || "default";
          $("body").removeClass().addClass(theme2);
          return this;
        },
        init: function() {
          const that2 = this;
          that2.setTheme();
          window.addEventListener("message", function(event) {
            const { data } = event;
            if (!data) {
              return;
            }
            const { type, value } = data;
            if (type === "theme") {
              that2.changeTheme(value);
            }
          });
        }
      };
      const tools = {
        inputJson: function() {
          const that = this;
          layer.prompt(
            {
              title: "JSON 输入",
              formType: 2,
              shadeClose: true,
              maxlength: 1e6
            },
            function(text) {
              if (!text) {
                layer.msg("内容不能为空", { time: 1500 });
                return;
              }
              const rawText = text, oldJSONPFun = _unsafeWindow.GLOBAL_JSONP_FUN;
              const match = text.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
              if (match && match[1] && match[2]) {
                _unsafeWindow.GLOBAL_JSONP_FUN = match[1];
                text = match[2];
              }
              try {
                const json = JSON.parse(JSON.stringify(eval(`(${text})`)));
                that.reload(json, rawText);
              } catch (e) {
                console.log(e);
                _unsafeWindow.GLOBAL_JSONP_FUN = oldJSONPFun;
                layer.msg("JSON不合法", { time: 1500 });
              }
            }
          );
          return this;
        },
        fetchApi: function() {
          const that2 = this;
          layer.open({
            type: 1,
            closeBtn: 0,
            //不显示关闭按钮
            shadeClose: true,
            //开启遮罩关闭
            title: "HTTP 请求",
            content: `<form class="httpRequest">
                            <div class="requestbox">
                                <select name="method">
                                    <option value="POST">POST</option>
                                    <option value="GET">GET</option>
                                    <option value="PUT">PUT</option>
                                    <option value="DELETE">DELETE</option>
                                </select>
                                <input name="url" placeholder="请求地址" />
                                <select name="contentType">
                                    <option value="application/x-www-form-urlencoded;charset=UTF-8">urlencoded</option>
                                    <option value="application/json;charset=UTF-8">application/json</option>
                                </select>
                                <button type="submit">发送</button>
                            </div>
                            <div class="textarea">
                                <input name="headers" placeholder='请求头 {"token": "test"}' />
                                <input name="params" placeholder='请求参数 {"id": "test", ""name": "test"}' />
                            </div>
                        </form>`
          });
          $("form").on("submit", function(event) {
            event.preventDefault();
            const serialize = $(this).serializeArray();
            const form = {};
            for (const key in serialize) {
              const it = serialize[key];
              form[it.name] = it.value;
            }
            if (form.url === "") {
              layer.msg("请求URL不能为空");
              return;
            }
            let headers = form.headers;
            let params = form.params;
            try {
              if (headers) {
                headers = JSON.parse(headers);
              }
            } catch (e) {
              layer.msg("请求头格式不合法");
              return;
            }
            try {
              if (params) {
                params = JSON.parse(params);
              }
            } catch (e) {
              layer.msg("请求参数格式不合法");
              return;
            }
            layer.load(0, { shade: false });
            $.ajax({
              url: URL$1.ONLINE_HTTP_REQUEST,
              type: "POST",
              data: JSON.stringify(form),
              contentType: "application/json"
            }).then(
              (response) => {
                _unsafeWindow.GLOBAL_JSONP_FUN = null;
                that2.reload(response, JSON.stringify(response));
              },
              (error) => {
                layer.closeAll();
                console.log(error);
              }
            );
          });
          return this;
        },
        reload: function(json2, rawText2) {
          _unsafeWindow.GLOBAL_JSON = json2;
          _unsafeWindow.GLOBAL_SOURCE_ELEMENT.text(rawText2);
          window.postMessage({ reload: true });
          layer.closeAll();
        },
        init: function() {
          const that2 = this;
          window.addEventListener("message", function(event) {
            const { data } = event;
            if (!data) {
              return;
            }
            const { type, value } = data;
            if (type === "tools") {
              that2[value]();
            }
          });
        }
      };
      const handleBar = {
        instance: null,
        /**
         * 对右侧操作栏的点击事件初始化
         * @returns
         */
        tippy: function() {
          const that2 = this;
          [".style", ".theme", ".tools"].forEach((selector) => {
            tippy(selector, {
              duration: 100,
              allowHTML: true,
              interactive: true,
              trigger: "click",
              onTrigger: function(instance) {
                const ulbox = $(instance.reference).find(".ulbox");
                const type = ulbox.data("type");
                const dataValue = _GM_getValue(type) || "default";
                ulbox.find("li").removeClass();
                ulbox.find(`li[data-value=${dataValue}]`).addClass("active");
                instance.setContent(ulbox.html());
                that2.instance = instance;
              }
            });
          });
          return this;
        },
        /**
         * 点击了对应选项
         * 如点击了`主题`-`暗黑`，通过window.postMessage进行主题色更新
         * @returns
         */
        checked: function() {
          const that2 = this;
          $(document.body).on("click", ".rightbox li", function() {
            const el = $(this);
            const hasClass = el.hasClass("active");
            if (hasClass) {
              return;
            }
            const type = el.data("type");
            const value = el.data("value");
            if (type !== "tools") {
              el.addClass("active").siblings().removeClass();
            } else {
              that2.instance.hide();
            }
            window.postMessage({ type, value });
          });
          return this;
        },
        init: function() {
          this.tippy().checked();
        }
      };
      tabsEvent.init();
      theme.init();
      tools.init();
      filter.init();
      handleBar.init();

    })
  };
}));

System.register("./tippy.esm-Ot9MORvr-DNGa7Opj.js", [], (function (exports, module) {
  'use strict';
  return {
    execute: (function () {

      exports("t", tippy);

      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement$1(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$2(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      const applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$2,
        requires: ["computeStyles"]
      };
      function getBasePlacement$1(placement) {
        return placement.split("-")[0];
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getUAString() {
        var uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
          return uaData.brands.map(function(item) {
            return item.brand + "/" + item.version;
          }).join(" ");
        }
        return navigator.userAgent;
      }
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        if (isFixedStrategy === void 0) {
          isFixedStrategy = false;
        }
        var clientRect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (includeScale && isHTMLElement(element)) {
          scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
          scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
        }
        var _ref = isElement$1(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
        var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
        var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
        var width = clientRect.width / scaleX;
        var height = clientRect.height / scaleY;
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getDocumentElement(element) {
        return ((isElement$1(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = /firefox/i.test(getUAString());
        var isIE = /Trident/i.test(getUAString());
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        if (isShadowRoot(currentNode)) {
          currentNode = currentNode.host;
        }
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement$1(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect$1(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          return;
        }
        state.elements.arrow = arrowElement;
      }
      const arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect: effect$1,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref, win) {
        var x = _ref.x, y = _ref.y;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
          x,
          y
        }) : {
          x,
          y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
          x,
          y
        }, getWindow(popper2)) : {
          x,
          y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        var commonStyles = {
          placement: getBasePlacement$1(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      const computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      var passive = {
        passive: true
      };
      function effect(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      const eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect,
        data: {}
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getViewportRect(element, strategy) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          var layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element, strategy) {
        var rect = getBoundingClientRect(element, false, strategy === "fixed");
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent, strategy) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement$1(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
        });
      }
      function getClippingRect(element, boundary, rootBoundary, strategy) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent, strategy);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent, strategy));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement$1(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement$1(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement$1(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement$1(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement$1(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      const flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      const hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement$1(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      const offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      const popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement$1(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      const preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce$1(fn2) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn2());
              });
            });
          }
          return pending;
        };
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper2(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn2 === "function") {
                  state = fn2({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce$1(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
              var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect3 = _ref.effect;
              if (typeof effect3 === "function") {
                var cleanupFn = effect3({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn2) {
              return fn2();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      var BOX_CLASS = "tippy-box";
      var CONTENT_CLASS = "tippy-content";
      var BACKDROP_CLASS = "tippy-backdrop";
      var ARROW_CLASS = "tippy-arrow";
      var SVG_ARROW_CLASS = "tippy-svg-arrow";
      var TOUCH_OPTIONS = {
        passive: true,
        capture: true
      };
      var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
        return document.body;
      };
      function getValueAtIndexOrReturn(value, index, defaultValue) {
        if (Array.isArray(value)) {
          var v = value[index];
          return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
        }
        return value;
      }
      function isType(value, type) {
        var str = {}.toString.call(value);
        return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
      }
      function invokeWithArgsOrReturn(value, args) {
        return typeof value === "function" ? value.apply(void 0, args) : value;
      }
      function debounce(fn5, ms) {
        if (ms === 0) {
          return fn5;
        }
        var timeout;
        return function(arg) {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            fn5(arg);
          }, ms);
        };
      }
      function splitBySpaces(value) {
        return value.split(/\s+/).filter(Boolean);
      }
      function normalizeToArray(value) {
        return [].concat(value);
      }
      function pushIfUnique(arr, value) {
        if (arr.indexOf(value) === -1) {
          arr.push(value);
        }
      }
      function unique(arr) {
        return arr.filter(function(item, index) {
          return arr.indexOf(item) === index;
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function arrayFrom(value) {
        return [].slice.call(value);
      }
      function removeUndefinedProps(obj) {
        return Object.keys(obj).reduce(function(acc, key) {
          if (obj[key] !== void 0) {
            acc[key] = obj[key];
          }
          return acc;
        }, {});
      }
      function div() {
        return document.createElement("div");
      }
      function isElement(value) {
        return ["Element", "Fragment"].some(function(type) {
          return isType(value, type);
        });
      }
      function isNodeList(value) {
        return isType(value, "NodeList");
      }
      function isMouseEvent(value) {
        return isType(value, "MouseEvent");
      }
      function isReferenceElement(value) {
        return !!(value && value._tippy && value._tippy.reference === value);
      }
      function getArrayOfElements(value) {
        if (isElement(value)) {
          return [value];
        }
        if (isNodeList(value)) {
          return arrayFrom(value);
        }
        if (Array.isArray(value)) {
          return value;
        }
        return arrayFrom(document.querySelectorAll(value));
      }
      function setTransitionDuration(els, value) {
        els.forEach(function(el) {
          if (el) {
            el.style.transitionDuration = value + "ms";
          }
        });
      }
      function setVisibilityState(els, state) {
        els.forEach(function(el) {
          if (el) {
            el.setAttribute("data-state", state);
          }
        });
      }
      function getOwnerDocument(elementOrElements) {
        var _element$ownerDocumen;
        var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
        return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
      }
      function isCursorOutsideInteractiveBorder(popperTreeData, event) {
        var clientX = event.clientX, clientY = event.clientY;
        return popperTreeData.every(function(_ref) {
          var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
          var interactiveBorder = props.interactiveBorder;
          var basePlacement = getBasePlacement(popperState.placement);
          var offsetData = popperState.modifiersData.offset;
          if (!offsetData) {
            return true;
          }
          var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
          var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
          var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
          var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
          var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
          var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
          var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
          var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
          return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
        });
      }
      function updateTransitionEndListener(box, action, listener) {
        var method = action + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
          box[method](event, listener);
        });
      }
      function actualContains(parent, child) {
        var target = child;
        while (target) {
          var _target$getRootNode;
          if (parent.contains(target)) {
            return true;
          }
          target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
        }
        return false;
      }
      var currentInput = {
        isTouch: false
      };
      var lastMouseMoveTime = 0;
      function onDocumentTouchStart() {
        if (currentInput.isTouch) {
          return;
        }
        currentInput.isTouch = true;
        if (window.performance) {
          document.addEventListener("mousemove", onDocumentMouseMove);
        }
      }
      function onDocumentMouseMove() {
        var now = performance.now();
        if (now - lastMouseMoveTime < 20) {
          currentInput.isTouch = false;
          document.removeEventListener("mousemove", onDocumentMouseMove);
        }
        lastMouseMoveTime = now;
      }
      function onWindowBlur() {
        var activeElement = document.activeElement;
        if (isReferenceElement(activeElement)) {
          var instance = activeElement._tippy;
          if (activeElement.blur && !instance.state.isVisible) {
            activeElement.blur();
          }
        }
      }
      function bindGlobalEventListeners() {
        document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
        window.addEventListener("blur", onWindowBlur);
      }
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      var isIE11 = isBrowser ? (
        // @ts-ignore
        !!window.msCrypto
      ) : false;
      var pluginProps = {
        animateFill: false,
        followCursor: false,
        inlinePositioning: false,
        sticky: false
      };
      var renderProps = {
        allowHTML: false,
        animation: "fade",
        arrow: true,
        content: "",
        inertia: false,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
      };
      var defaultProps = Object.assign({
        appendTo: TIPPY_DEFAULT_APPEND_TO,
        aria: {
          content: "auto",
          expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: true,
        ignoreAttributes: false,
        interactive: false,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function onAfterUpdate() {
        },
        onBeforeUpdate: function onBeforeUpdate() {
        },
        onCreate: function onCreate() {
        },
        onDestroy: function onDestroy() {
        },
        onHidden: function onHidden() {
        },
        onHide: function onHide() {
        },
        onMount: function onMount() {
        },
        onShow: function onShow() {
        },
        onShown: function onShown() {
        },
        onTrigger: function onTrigger() {
        },
        onUntrigger: function onUntrigger() {
        },
        onClickOutside: function onClickOutside() {
        },
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: false,
        touch: true,
        trigger: "mouseenter focus",
        triggerTarget: null
      }, pluginProps, renderProps);
      var defaultKeys = Object.keys(defaultProps);
      var setDefaultProps = function setDefaultProps2(partialProps) {
        var keys = Object.keys(partialProps);
        keys.forEach(function(key) {
          defaultProps[key] = partialProps[key];
        });
      };
      function getExtendedPassedProps(passedProps) {
        var plugins = passedProps.plugins || [];
        var pluginProps2 = plugins.reduce(function(acc, plugin) {
          var name = plugin.name, defaultValue = plugin.defaultValue;
          if (name) {
            var _name;
            acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
          }
          return acc;
        }, {});
        return Object.assign({}, passedProps, pluginProps2);
      }
      function getDataAttributeProps(reference2, plugins) {
        var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
          plugins
        }))) : defaultKeys;
        var props = propKeys.reduce(function(acc, key) {
          var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
          if (!valueAsString) {
            return acc;
          }
          if (key === "content") {
            acc[key] = valueAsString;
          } else {
            try {
              acc[key] = JSON.parse(valueAsString);
            } catch (e) {
              acc[key] = valueAsString;
            }
          }
          return acc;
        }, {});
        return props;
      }
      function evaluateProps(reference2, props) {
        var out = Object.assign({}, props, {
          content: invokeWithArgsOrReturn(props.content, [reference2])
        }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
        out.aria = Object.assign({}, defaultProps.aria, out.aria);
        out.aria = {
          expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
          content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
        };
        return out;
      }
      var innerHTML = function innerHTML2() {
        return "innerHTML";
      };
      function dangerouslySetInnerHTML(element, html) {
        element[innerHTML()] = html;
      }
      function createArrowElement(value) {
        var arrow2 = div();
        if (value === true) {
          arrow2.className = ARROW_CLASS;
        } else {
          arrow2.className = SVG_ARROW_CLASS;
          if (isElement(value)) {
            arrow2.appendChild(value);
          } else {
            dangerouslySetInnerHTML(arrow2, value);
          }
        }
        return arrow2;
      }
      function setContent(content, props) {
        if (isElement(props.content)) {
          dangerouslySetInnerHTML(content, "");
          content.appendChild(props.content);
        } else if (typeof props.content !== "function") {
          if (props.allowHTML) {
            dangerouslySetInnerHTML(content, props.content);
          } else {
            content.textContent = props.content;
          }
        }
      }
      function getChildren(popper2) {
        var box = popper2.firstElementChild;
        var boxChildren = arrayFrom(box.children);
        return {
          box,
          content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
          }),
          arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
          }),
          backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
          })
        };
      }
      function render(instance) {
        var popper2 = div();
        var box = div();
        box.className = BOX_CLASS;
        box.setAttribute("data-state", "hidden");
        box.setAttribute("tabindex", "-1");
        var content = div();
        content.className = CONTENT_CLASS;
        content.setAttribute("data-state", "hidden");
        setContent(content, instance.props);
        popper2.appendChild(box);
        box.appendChild(content);
        onUpdate(instance.props, instance.props);
        function onUpdate(prevProps, nextProps) {
          var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
          if (nextProps.theme) {
            box2.setAttribute("data-theme", nextProps.theme);
          } else {
            box2.removeAttribute("data-theme");
          }
          if (typeof nextProps.animation === "string") {
            box2.setAttribute("data-animation", nextProps.animation);
          } else {
            box2.removeAttribute("data-animation");
          }
          if (nextProps.inertia) {
            box2.setAttribute("data-inertia", "");
          } else {
            box2.removeAttribute("data-inertia");
          }
          box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
          if (nextProps.role) {
            box2.setAttribute("role", nextProps.role);
          } else {
            box2.removeAttribute("role");
          }
          if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
            setContent(content2, instance.props);
          }
          if (nextProps.arrow) {
            if (!arrow2) {
              box2.appendChild(createArrowElement(nextProps.arrow));
            } else if (prevProps.arrow !== nextProps.arrow) {
              box2.removeChild(arrow2);
              box2.appendChild(createArrowElement(nextProps.arrow));
            }
          } else if (arrow2) {
            box2.removeChild(arrow2);
          }
        }
        return {
          popper: popper2,
          onUpdate
        };
      }
      render.$$tippy = true;
      var idCounter = 1;
      var mouseMoveListeners = [];
      var mountedInstances = [];
      function createTippy(reference2, passedProps) {
        var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
        var showTimeout;
        var hideTimeout;
        var scheduleHideAnimationFrame;
        var isVisibleFromClick = false;
        var didHideDueToDocumentMouseDown = false;
        var didTouchMove = false;
        var ignoreOnFirstUpdate = false;
        var lastTriggerEvent;
        var currentTransitionEndListener;
        var onFirstUpdate;
        var listeners = [];
        var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
        var currentTarget;
        var id = idCounter++;
        var popperInstance = null;
        var plugins = unique(props.plugins);
        var state = {
          // Is the instance currently enabled?
          isEnabled: true,
          // Is the tippy currently showing and not transitioning out?
          isVisible: false,
          // Has the instance been destroyed?
          isDestroyed: false,
          // Is the tippy currently mounted to the DOM?
          isMounted: false,
          // Has the tippy finished transitioning in?
          isShown: false
        };
        var instance = {
          // properties
          id,
          reference: reference2,
          popper: div(),
          popperInstance,
          props,
          state,
          plugins,
          // methods
          clearDelayTimeouts,
          setProps,
          setContent: setContent2,
          show,
          hide: hide2,
          hideWithInteractivity,
          enable,
          disable,
          unmount,
          destroy
        };
        if (!props.render) {
          return instance;
        }
        var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
        popper2.setAttribute("data-tippy-root", "");
        popper2.id = "tippy-" + instance.id;
        instance.popper = popper2;
        reference2._tippy = instance;
        popper2._tippy = instance;
        var pluginsHooks = plugins.map(function(plugin) {
          return plugin.fn(instance);
        });
        var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
        addListeners();
        handleAriaExpandedAttribute();
        handleStyles();
        invokeHook("onCreate", [instance]);
        if (props.showOnCreate) {
          scheduleShow();
        }
        popper2.addEventListener("mouseenter", function() {
          if (instance.props.interactive && instance.state.isVisible) {
            instance.clearDelayTimeouts();
          }
        });
        popper2.addEventListener("mouseleave", function() {
          if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
            getDocument().addEventListener("mousemove", debouncedOnMouseMove);
          }
        });
        return instance;
        function getNormalizedTouchSettings() {
          var touch = instance.props.touch;
          return Array.isArray(touch) ? touch : [touch, 0];
        }
        function getIsCustomTouchBehavior() {
          return getNormalizedTouchSettings()[0] === "hold";
        }
        function getIsDefaultRenderFn() {
          var _instance$props$rende;
          return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
        }
        function getCurrentTarget() {
          return currentTarget || reference2;
        }
        function getDocument() {
          var parent = getCurrentTarget().parentNode;
          return parent ? getOwnerDocument(parent) : document;
        }
        function getDefaultTemplateChildren() {
          return getChildren(popper2);
        }
        function getDelay(isShow) {
          if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
            return 0;
          }
          return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
        }
        function handleStyles(fromHide) {
          if (fromHide === void 0) {
            fromHide = false;
          }
          popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
          popper2.style.zIndex = "" + instance.props.zIndex;
        }
        function invokeHook(hook, args, shouldInvokePropsHook) {
          if (shouldInvokePropsHook === void 0) {
            shouldInvokePropsHook = true;
          }
          pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) {
              pluginHooks[hook].apply(pluginHooks, args);
            }
          });
          if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
          }
        }
        function handleAriaContentAttribute() {
          var aria = instance.props.aria;
          if (!aria.content) {
            return;
          }
          var attr = "aria-" + aria.content;
          var id2 = popper2.id;
          var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
          nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) {
              node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
            } else {
              var nextValue = currentValue && currentValue.replace(id2, "").trim();
              if (nextValue) {
                node.setAttribute(attr, nextValue);
              } else {
                node.removeAttribute(attr);
              }
            }
          });
        }
        function handleAriaExpandedAttribute() {
          if (hasAriaExpanded || !instance.props.aria.expanded) {
            return;
          }
          var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
          nodes.forEach(function(node) {
            if (instance.props.interactive) {
              node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
            } else {
              node.removeAttribute("aria-expanded");
            }
          });
        }
        function cleanupInteractiveMouseListeners() {
          getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
          mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
          });
        }
        function onDocumentPress(event) {
          if (currentInput.isTouch) {
            if (didTouchMove || event.type === "mousedown") {
              return;
            }
          }
          var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
          if (instance.props.interactive && actualContains(popper2, actualTarget)) {
            return;
          }
          if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
            return actualContains(el, actualTarget);
          })) {
            if (currentInput.isTouch) {
              return;
            }
            if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
              return;
            }
          } else {
            invokeHook("onClickOutside", [instance, event]);
          }
          if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide();
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
              didHideDueToDocumentMouseDown = false;
            });
            if (!instance.state.isMounted) {
              removeDocumentPress();
            }
          }
        }
        function onTouchMove() {
          didTouchMove = true;
        }
        function onTouchStart() {
          didTouchMove = false;
        }
        function addDocumentPress() {
          var doc = getDocument();
          doc.addEventListener("mousedown", onDocumentPress, true);
          doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
          doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
          doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
        }
        function removeDocumentPress() {
          var doc = getDocument();
          doc.removeEventListener("mousedown", onDocumentPress, true);
          doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
          doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
          doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
        }
        function onTransitionedOut(duration, callback) {
          onTransitionEnd(duration, function() {
            if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
              callback();
            }
          });
        }
        function onTransitionedIn(duration, callback) {
          onTransitionEnd(duration, callback);
        }
        function onTransitionEnd(duration, callback) {
          var box = getDefaultTemplateChildren().box;
          function listener(event) {
            if (event.target === box) {
              updateTransitionEndListener(box, "remove", listener);
              callback();
            }
          }
          if (duration === 0) {
            return callback();
          }
          updateTransitionEndListener(box, "remove", currentTransitionEndListener);
          updateTransitionEndListener(box, "add", listener);
          currentTransitionEndListener = listener;
        }
        function on(eventType, handler, options) {
          if (options === void 0) {
            options = false;
          }
          var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
          nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
              node,
              eventType,
              handler,
              options
            });
          });
        }
        function addListeners() {
          if (getIsCustomTouchBehavior()) {
            on("touchstart", onTrigger2, {
              passive: true
            });
            on("touchend", onMouseLeave, {
              passive: true
            });
          }
          splitBySpaces(instance.props.trigger).forEach(function(eventType) {
            if (eventType === "manual") {
              return;
            }
            on(eventType, onTrigger2);
            switch (eventType) {
              case "mouseenter":
                on("mouseleave", onMouseLeave);
                break;
              case "focus":
                on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                break;
              case "focusin":
                on("focusout", onBlurOrFocusOut);
                break;
            }
          });
        }
        function removeListeners() {
          listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
          });
          listeners = [];
        }
        function onTrigger2(event) {
          var _lastTriggerEvent;
          var shouldScheduleClickHide = false;
          if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
            return;
          }
          var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
          lastTriggerEvent = event;
          currentTarget = event.currentTarget;
          handleAriaExpandedAttribute();
          if (!instance.state.isVisible && isMouseEvent(event)) {
            mouseMoveListeners.forEach(function(listener) {
              return listener(event);
            });
          }
          if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
            shouldScheduleClickHide = true;
          } else {
            scheduleShow(event);
          }
          if (event.type === "click") {
            isVisibleFromClick = !shouldScheduleClickHide;
          }
          if (shouldScheduleClickHide && !wasFocused) {
            scheduleHide(event);
          }
        }
        function onMouseMove(event) {
          var target = event.target;
          var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
          if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
            return;
          }
          var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper22) {
            var _instance$popperInsta;
            var instance2 = popper22._tippy;
            var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state2) {
              return {
                popperRect: popper22.getBoundingClientRect(),
                popperState: state2,
                props
              };
            }
            return null;
          }).filter(Boolean);
          if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
          }
        }
        function onMouseLeave(event) {
          var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
          if (shouldBail) {
            return;
          }
          if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
          }
          scheduleHide(event);
        }
        function onBlurOrFocusOut(event) {
          if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
            return;
          }
          if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
            return;
          }
          scheduleHide(event);
        }
        function isEventListenerStopped(event) {
          return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
        }
        function createPopperInstance() {
          destroyPopperInstance();
          var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
          var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
          var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
          } : reference2;
          var tippyModifier = {
            name: "$$tippy",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function fn5(_ref2) {
              var state2 = _ref2.state;
              if (getIsDefaultRenderFn()) {
                var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
                  if (attr === "placement") {
                    box.setAttribute("data-placement", state2.placement);
                  } else {
                    if (state2.attributes.popper["data-popper-" + attr]) {
                      box.setAttribute("data-" + attr, "");
                    } else {
                      box.removeAttribute("data-" + attr);
                    }
                  }
                });
                state2.attributes.popper = {};
              }
            }
          };
          var modifiers = [{
            name: "offset",
            options: {
              offset: offset2
            }
          }, {
            name: "preventOverflow",
            options: {
              padding: {
                top: 2,
                bottom: 2,
                left: 5,
                right: 5
              }
            }
          }, {
            name: "flip",
            options: {
              padding: 5
            }
          }, {
            name: "computeStyles",
            options: {
              adaptive: !moveTransition
            }
          }, tippyModifier];
          if (getIsDefaultRenderFn() && arrow2) {
            modifiers.push({
              name: "arrow",
              options: {
                element: arrow2,
                padding: 3
              }
            });
          }
          modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
          instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
            placement,
            onFirstUpdate,
            modifiers
          }));
        }
        function destroyPopperInstance() {
          if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
          }
        }
        function mount() {
          var appendTo = instance.props.appendTo;
          var parentNode;
          var node = getCurrentTarget();
          if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
            parentNode = node.parentNode;
          } else {
            parentNode = invokeWithArgsOrReturn(appendTo, [node]);
          }
          if (!parentNode.contains(popper2)) {
            parentNode.appendChild(popper2);
          }
          instance.state.isMounted = true;
          createPopperInstance();
        }
        function getNestedPopperTree() {
          return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
        }
        function scheduleShow(event) {
          instance.clearDelayTimeouts();
          if (event) {
            invokeHook("onTrigger", [instance, event]);
          }
          addDocumentPress();
          var delay = getDelay(true);
          var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
          if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
            delay = touchDelay;
          }
          if (delay) {
            showTimeout = setTimeout(function() {
              instance.show();
            }, delay);
          } else {
            instance.show();
          }
        }
        function scheduleHide(event) {
          instance.clearDelayTimeouts();
          invokeHook("onUntrigger", [instance, event]);
          if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
          }
          if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
            return;
          }
          var delay = getDelay(false);
          if (delay) {
            hideTimeout = setTimeout(function() {
              if (instance.state.isVisible) {
                instance.hide();
              }
            }, delay);
          } else {
            scheduleHideAnimationFrame = requestAnimationFrame(function() {
              instance.hide();
            });
          }
        }
        function enable() {
          instance.state.isEnabled = true;
        }
        function disable() {
          instance.hide();
          instance.state.isEnabled = false;
        }
        function clearDelayTimeouts() {
          clearTimeout(showTimeout);
          clearTimeout(hideTimeout);
          cancelAnimationFrame(scheduleHideAnimationFrame);
        }
        function setProps(partialProps) {
          if (instance.state.isDestroyed) {
            return;
          }
          invokeHook("onBeforeUpdate", [instance, partialProps]);
          removeListeners();
          var prevProps = instance.props;
          var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
          }));
          instance.props = nextProps;
          addListeners();
          if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
          }
          if (prevProps.triggerTarget && !nextProps.triggerTarget) {
            normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
              node.removeAttribute("aria-expanded");
            });
          } else if (nextProps.triggerTarget) {
            reference2.removeAttribute("aria-expanded");
          }
          handleAriaExpandedAttribute();
          handleStyles();
          if (onUpdate) {
            onUpdate(prevProps, nextProps);
          }
          if (instance.popperInstance) {
            createPopperInstance();
            getNestedPopperTree().forEach(function(nestedPopper) {
              requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
          }
          invokeHook("onAfterUpdate", [instance, partialProps]);
        }
        function setContent2(content) {
          instance.setProps({
            content
          });
        }
        function show() {
          var isAlreadyVisible = instance.state.isVisible;
          var isDestroyed = instance.state.isDestroyed;
          var isDisabled = !instance.state.isEnabled;
          var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
          var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
          if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
            return;
          }
          if (getCurrentTarget().hasAttribute("disabled")) {
            return;
          }
          invokeHook("onShow", [instance], false);
          if (instance.props.onShow(instance) === false) {
            return;
          }
          instance.state.isVisible = true;
          if (getIsDefaultRenderFn()) {
            popper2.style.visibility = "visible";
          }
          handleStyles();
          addDocumentPress();
          if (!instance.state.isMounted) {
            popper2.style.transition = "none";
          }
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([box, content], 0);
          }
          onFirstUpdate = function onFirstUpdate2() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) {
              return;
            }
            ignoreOnFirstUpdate = true;
            void popper2.offsetHeight;
            popper2.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
              var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
              setTransitionDuration([_box, _content], duration);
              setVisibilityState([_box, _content], "visible");
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance);
            (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook("onMount", [instance]);
            if (instance.props.animation && getIsDefaultRenderFn()) {
              onTransitionedIn(duration, function() {
                instance.state.isShown = true;
                invokeHook("onShown", [instance]);
              });
            }
          };
          mount();
        }
        function hide2() {
          var isAlreadyHidden = !instance.state.isVisible;
          var isDestroyed = instance.state.isDestroyed;
          var isDisabled = !instance.state.isEnabled;
          var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
          if (isAlreadyHidden || isDestroyed || isDisabled) {
            return;
          }
          invokeHook("onHide", [instance], false);
          if (instance.props.onHide(instance) === false) {
            return;
          }
          instance.state.isVisible = false;
          instance.state.isShown = false;
          ignoreOnFirstUpdate = false;
          isVisibleFromClick = false;
          if (getIsDefaultRenderFn()) {
            popper2.style.visibility = "hidden";
          }
          cleanupInteractiveMouseListeners();
          removeDocumentPress();
          handleStyles(true);
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
              setTransitionDuration([box, content], duration);
              setVisibilityState([box, content], "hidden");
            }
          }
          handleAriaContentAttribute();
          handleAriaExpandedAttribute();
          if (instance.props.animation) {
            if (getIsDefaultRenderFn()) {
              onTransitionedOut(duration, instance.unmount);
            }
          } else {
            instance.unmount();
          }
        }
        function hideWithInteractivity(event) {
          getDocument().addEventListener("mousemove", debouncedOnMouseMove);
          pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
          debouncedOnMouseMove(event);
        }
        function unmount() {
          if (instance.state.isVisible) {
            instance.hide();
          }
          if (!instance.state.isMounted) {
            return;
          }
          destroyPopperInstance();
          getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
          });
          if (popper2.parentNode) {
            popper2.parentNode.removeChild(popper2);
          }
          mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance;
          });
          instance.state.isMounted = false;
          invokeHook("onHidden", [instance]);
        }
        function destroy() {
          if (instance.state.isDestroyed) {
            return;
          }
          instance.clearDelayTimeouts();
          instance.unmount();
          removeListeners();
          delete reference2._tippy;
          instance.state.isDestroyed = true;
          invokeHook("onDestroy", [instance]);
        }
      }
      function tippy(targets, optionalProps) {
        if (optionalProps === void 0) {
          optionalProps = {};
        }
        var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
        bindGlobalEventListeners();
        var passedProps = Object.assign({}, optionalProps, {
          plugins
        });
        var elements = getArrayOfElements(targets);
        var instances = elements.reduce(function(acc, reference2) {
          var instance = reference2 && createTippy(reference2, passedProps);
          if (instance) {
            acc.push(instance);
          }
          return acc;
        }, []);
        return isElement(targets) ? instances[0] : instances;
      }
      tippy.defaultProps = defaultProps;
      tippy.setDefaultProps = setDefaultProps;
      tippy.currentInput = currentInput;
      Object.assign({}, applyStyles$1, {
        effect: function effect2(_ref) {
          var state = _ref.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
        }
      });
      tippy.setDefaultProps({
        render
      });

    })
  };
}));

System.register("./index-D3l8MoSf-Dhsxm64a.js", ['jquery'], (function (exports, module) {
  'use strict';
  var $;
  return {
    setters: [module => {
      $ = module.default;
    }],
    execute: (function () {

      const $body = $(document.body);
      const $container = $(".tabs-container");
      $body.append('<div class="scroll-top"></div>');
      $container.on("scroll", function() {
        const scrollTop = $(this).scrollTop();
        const scrollElment = $(".scroll-top");
        scrollTop > 500 ? scrollElment.fadeIn() : scrollElment.fadeOut();
      });
      $body.on("click", ".scroll-top", function() {
        $container.animate({ scrollTop: "0" }, 1e3);
      });

    })
  };
}));

System.import("./__entry.js", "./");