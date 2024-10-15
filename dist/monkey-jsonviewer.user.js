// ==UserScript==
// @name         JSON Viewer
// @namespace    http://tampermonkey.net/
// @version      v0.7.5
// @author       Feny
// @description  格式化显示JSON使数据看起来更加漂亮，支持折叠/展开格式化后的数据，支持JSON脑图让调用层级看着更清晰，支持复制JSON脑图节点路径
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wvjF8bLX4ZrHZx+XNqlwnmKjH5YUyRvb6kEAd8H058d1b47XV5Ir3eoN++bagaXYrN6KOBn2FfPPx5/aEutX8a+KNWhIubhruZLSNj8u1WMcIOP4QoXOOwNS/wDBM79lDTfjh8YNe+IXj63TxRdeHfKjsE1KMTxtdSbmMmxvlAiVV2IBsUybgAyKR9ZTy6lhsM69Xovm2+iPmKmOqYjEKjT6v5WXU9e8beKrjxZpp/s/xFrfhjWIwWs9X0q42z2kmPlZo2zDcxjqYZ0eNv7obDDf/YL/AG8L745eJNc+G3xCttP0n4qeEWZZ2sVZNP8AENsu0rd2ysS0ZKPG7RMSQsisCcukWd+3x4RtfhpqGk+JNPjS0g1mV7a8iT5UM4XesgHYsofdjglQepJPxwPE1x4V/au8LePtNkeK40ma0lmdDgyorvHMhPo9uxjP+y1bUcHRxmGbS1adn1TXT0/4fcipiqmExCi3pfVdGn19f+GLni/w7ceGf2wPFXga+Vo5rW/vDbI3WWI/v4HA/wBqBg3tk+lfWX7AXia1+F/iDV9B1CRbWHXjFLayyHannpuUxk+rqy4zxlMdWAPQft7fsL33x91nQfiD4DutP0r4oeDXVrT7cWWx1y3UsTZ3LKCyAh5FEigkLLIpHzBk5vwj4JuvE2kLJfeHdY8N6lGAl5pepwBZrOT+JRIuYp0ByBNCzxPg4bIICqYyljMKot62Sa6prr6P/gBDC1MLiHJLS90+jT6ev/Dnmn/BVP8Aaw0nxv4/8P8Aw18KXK69qmk3MlxqEdiRMwuivlpbrtPLopkMnZNy5IIYLyPwa/Z8vvEmv+HtHu4/Ovr+5iS6KDcqAtukwe6om7nuEJxX0XoH7PK/bJG0vRoY5rr/AFslvbLGZf8AfcAf+PGvafgv8CbX4byNqFyI5tWmXYCoytsh6qvqx7t+A4yWiWYUsLhlRpbr72318kVHA1MTiHVqbP7kl0P/2Q==
// @homepage     https://github.com/xFeny/monkey-jsonviewer
// @match        *://*/*
// @require      https://unpkg.com/dom-to-image@2.6.0/dist/dom-to-image.min.js
// @require      https://unpkg.com/jquery@3.7.1/dist/jquery.min.js
// @require      data:application/javascript,%3Bwindow.jquery%3DjQuery%3B
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.js
// @require      data:application/javascript,%3Bwindow.jsmind%3DjsMind%3B
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.screenshot.js
// @require      https://unpkg.com/beautifier@0.1.7
// @require      data:application/javascript,%3Bwindow.beautifier%3Djs_beautify%3Bwindow.js_beautify%3Djs_beautify%3Bwindow.css_beautify%3Dcss_beautify%3B
// @require      https://unpkg.com/@highlightjs/cdn-assets@11.10.0/highlight.min.js
// @require      data:application/javascript,%3Bwindow.hljs%3Dhljs%3B
// @require      https://unpkg.com/systemjs@6.15.1/dist/system.min.js
// @require      https://unpkg.com/systemjs@6.15.1/dist/extras/named-register.min.js
// @require      data:application/javascript,%3B(typeof%20System!%3D'undefined')%26%26(System%3Dnew%20System.constructor())%3B
// @resource     highlightjs  https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/xcode.min.css
// @resource     jsmind       https://unpkg.com/jsmind@0.8.5/style/jsmind.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        unsafeWindow
// @note         v0.7.4 增加对JS、CSS美化输出
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

(o=>{window.addEventListener("message",a=>{const{data:t}=a;if(t&&t.isJSON){if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const r=document.createElement("style");r.textContent=o,document.head.append(r)}})})(' @charset "UTF-8";body{padding-top:20px;padding-left:5px}body .beautify_checkbox{top:0;left:0;z-index:999;width:100vw;padding:5px 10px;position:fixed;display:flex;align-items:center;background-color:#f3f3f3;border-bottom:1px solid #ccc}body .beautify_checkbox label{font-size:13px}body .beautify_checkbox input[type=checkbox]{width:14px;height:14px;position:relative;top:1.5px;margin-right:5px}body li::marker,html li::marker{content:""}body input:focus,body select:focus,body textarea:focus,html input:focus,html select:focus,html textarea:focus{outline:0}.hidden{display:none!important}.layui-layer-tips{width:auto!important}.format-container{z-index:10;position:fixed;width:100vw;height:100vh;display:flex;flex-direction:column}.format-container .tabs,.format-container .toolbar{display:flex;line-height:28px;background-color:#ececec;border-bottom:1px solid #ccc}.format-container .toolbar{line-height:23px}.format-container .toolbar .searchbox{display:flex;flex-grow:1}.format-container .toolbar .searchbox input{flex-grow:1;border:none;outline:none;font-size:12px;padding-left:23px;background-size:12px;background-repeat:no-repeat;background-position:7px center;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIGZpbGw9InJnYmEoMTM1LCAxMzUsIDEzNywgMC45KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgb3BhY2l0eT0iLjQiIGQ9Ik01IDkuMmwyIDEuNlY2LjFMOC41NSA0aC01LjFMNSA2LjF2My4xeiIvPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTEuMTggMi42QTEgMSAwIDAgMSAyIDFIMTBhMSAxIDAgMCAxIC44IDEuNkw4IDYuNHY0LjgyYzAgLjYzLS43Mi45OC0xLjIyLjZsLTIuNS0xLjk5QS43NS43NSAwIDAgMSA0IDkuMjVWNi40MUwxLjE4IDIuNnpNMiAyTDUgNi4wOXYzLjA0bDIgMS41OVY2LjA5TDEwLjAxIDJIMnoiLz4KPC9zdmc+Cg==)}.format-container .toolbar .searchbox .clear{flex:0 0 auto;align-self:center;margin:0 4px;padding:0;border:0;width:16px;height:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9ImNvbnRleHQtZmlsbCIgZmlsbC1vcGFjaXR5PSJjb250ZXh0LWZpbGwtb3BhY2l0eSI+CiAgPHBhdGggZD0iTTYuNTg2IDhsLTIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNCAxLjQxNEw4IDkuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNC0xLjQxNEw5LjQxNCA4bDIuMjkzLTIuMjkzYTEgMSAwIDEgMC0xLjQxNC0xLjQxNEw4IDYuNTg2IDUuNzA3IDQuMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNEw2LjU4NiA4ek04IDBhOCA4IDAgMSAxIDAgMTZBOCA4IDAgMCAxIDggMHoiLz4KPC9zdmc+Cg==)}.format-container .tabs-item{border-width:3px;border-top:3px solid #ececec}.format-container .tabs-item.active{color:#0060df;border-top-color:#0060df;background-color:#e9e9e9}.format-container .tabs-item:hover{border-top-color:#c3c3c6}.format-container .tabs-item,.format-container .toolbar-item{cursor:pointer;padding:0 10px;font-size:12px}.format-container .tabs-item:hover,.format-container .toolbar-item:hover{background-color:#d4d4d4}.format-container .tabs .selectbox{position:absolute;right:200px;display:flex;font-size:13px}.format-container .inputJson,.format-container .fetchApi{cursor:pointer;color:#0060df;margin-left:15px}.format-container .tabs-container{flex-grow:1;overflow:auto;line-height:1.4;font-size:13.5px;font-family:monospace}.format-container .tabs-container>div{display:none}.format-container .tabs-container>div.active{display:block}.format-container .tabs-container #formatContainer{padding:10px}.format-container .tabs-container #rawTextContainer{padding:0 10px}.format-container .tabs-container #rawTextContainer pre{display:block!important;overflow-wrap:break-word;white-space:pre-wrap}.format-container .jsonp{color:#93983a}.format-container ul.json-object,.format-container ul.json-array{margin:0 0 0 2px;list-style-type:none;border-left:1px dotted #5d6d7e;padding-left:24px}.format-container .json-brackets{font-weight:700}.format-container .json-key{color:#910f93;cursor:pointer}.format-container .json-string,.format-container .json-string a{color:#2e7c16}.format-container .json-number{color:#164ff1}.format-container .json-boolean{color:#905}.format-container .json-null{color:#228fec}.format-container a.json-toggle{position:rElative;color:inherit;opacity:.2;text-decoration:none}.format-container a.json-toggle:hover{opacity:.35}.format-container a.json-toggle:active{opacity:.5}.format-container a.json-toggle:focus{outline:none}.format-container a.json-toggle:before{top:2.5px;left:-15px;position:absolute;content:"";display:block;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.format-container a.json-toggle.collapsed:before{transform:rotate(0)}.format-container a.json-placeholder{color:#ccc;font-size:12px;padding:0 1em;text-decoration:none}.format-container a.json-placeholder:hover{text-decoration:underline}.format-container .json-curly-brackets{color:#6d9331}.format-container .json-square-brackets{color:#8e9331}.format-container #jmContainer{width:100vw;height:calc(100vh - 57px)}.format-container #jmContainer jmnode{display:flex;align-items:center;padding:0 7px 0 22px;color:#475872!important;box-shadow:none!important;background-color:transparent!important}.format-container #jmContainer jmnode.root{padding:0;color:transparent!important}.format-container #jmContainer jmnode:before{content:"";top:50%!important;margin-top:1.5px;position:absolute;border-radius:50%;transform:translateY(-50%)}.format-container #jmContainer jmnode.root:before{left:50%;width:18px;height:18px;transform:translate(-18px,-50%)}.format-container #jmContainer jmnode:hover{text-shadow:0px 0px 1px currentColor}.format-container #jmContainer jmnode:not(.root):before{left:0;width:15px;height:15px}.format-container #jmContainer jmexpander{margin-top:1px;line-height:9px}.format-container #jmContainer .datatype{opacity:.6;font-size:12px;margin-top:2px;padding-left:5px}.format-container table{width:-webkit-fill-available;margin-left:20px;border-collapse:collapse}.format-container table tr:hover{background-color:#f0f9fe}.format-container table tr.selected td,.format-container table tr.selected td a{color:#fff!important;background-color:#3875d7}.format-container table tr td:first-child{width:120px}.format-container table .tree-len{color:#ccc;font-size:13px}.format-container table .simple-tree-table-icon{color:#000;opacity:.2;width:0!important;margin:0!important;line-height:0!important}.format-container table .simple-tree-table-icon:before{top:.5px;left:-15px;position:relative;content:"";width:0;height:0;display:none;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.format-container table .simple-tree-table-icon::hover{opacity:.35}.format-container table .simple-tree-table-icon:after{content:""!important}.format-container table .simple-tree-table-icon::active{opacity:.5}.format-container table .simple-tree-table-opened .simple-tree-table-icon:before{display:block}.format-container table .simple-tree-table-closed .simple-tree-table-icon:before{display:block;transform:rotate(0)}.httpRequest{padding:20px}.httpRequest input,.httpRequest select{border-radius:0;padding-left:10px;border:1px solid #ccc}.requestbox,.textarea{width:700px;display:flex}.requestbox{height:35px;margin-bottom:15px}.requestbox input{flex-grow:1}.requestbox button{cursor:pointer;padding:0 15px;border:1px solid #ccc}.requestbox button:active{background-color:#cfcfcf}.textarea input{flex-grow:1;height:30px}.light .json-key{color:#0040cf}.light .json-string,.light .json-string a{color:#a31515}.light .json-number{color:#0b7500}.light .json-boolean{color:#00f}.light .json-null{color:#05f}body.dark .format-container li,body.dark .format-container pre,body.dark_IntelliJ .format-container li,body.dark_IntelliJ .format-container pre{color:#ccc}body.dark .format-container .tabs,body.dark .format-container .toolbar,body.dark_IntelliJ .format-container .tabs,body.dark_IntelliJ .format-container .toolbar{color:#c4c4c4;border-bottom-color:#464646;background-color:#333}body.dark .format-container .tabs .tabs-item,body.dark .format-container .toolbar .tabs-item,body.dark_IntelliJ .format-container .tabs .tabs-item,body.dark_IntelliJ .format-container .toolbar .tabs-item{border-top-color:#333}body.dark .format-container .tabs .tabs-item.active,body.dark .format-container .toolbar .tabs-item.active,body.dark_IntelliJ .format-container .tabs .tabs-item.active,body.dark_IntelliJ .format-container .toolbar .tabs-item.active{color:#c4c4c4;border-top-color:#64b7ff;background-color:#464646}body.dark .format-container .tabs .tabs-item:hover,body.dark .format-container .tabs .toolbar-item:hover,body.dark .format-container .toolbar .tabs-item:hover,body.dark .format-container .toolbar .toolbar-item:hover,body.dark_IntelliJ .format-container .tabs .tabs-item:hover,body.dark_IntelliJ .format-container .tabs .toolbar-item:hover,body.dark_IntelliJ .format-container .toolbar .tabs-item:hover,body.dark_IntelliJ .format-container .toolbar .toolbar-item:hover{border-top-color:#64b7ff;background-color:#464646}body.dark .format-container .searchbox input,body.dark_IntelliJ .format-container .searchbox input{color:#ccc;background-color:#464646;border-left:1.5px solid #333333}body.dark .format-container .searchbox .clear,body.dark_IntelliJ .format-container .searchbox .clear{filter:invert(.8)}body.dark .format-container .selectbox select,body.dark_IntelliJ .format-container .selectbox select{border:0;color:#333;background-color:#ccc}body.dark .format-container .selectbox .inputJson,body.dark .format-container .selectbox .fetchApi,body.dark_IntelliJ .format-container .selectbox .inputJson,body.dark_IntelliJ .format-container .selectbox .fetchApi{color:#85c6ff}body.dark .format-container .jsonp,body.dark_IntelliJ .format-container .jsonp{color:#f1d700}body.dark .format-container .json-toggle,body.dark_IntelliJ .format-container .json-toggle{opacity:.35}body.dark .format-container .json-toggle:hover,body.dark_IntelliJ .format-container .json-toggle:hover{opacity:.5}body.dark .format-container jmnode,body.dark_IntelliJ .format-container jmnode{filter:brightness(2)}body.dark .format-container jmexpander,body.dark_IntelliJ .format-container jmexpander{background-color:#dfdfdf}body.dark .format-container table tr:hover,body.dark_IntelliJ .format-container table tr:hover{background-color:#353b48}body.dark .format-container .simple-tree-table-icon,body.dark_IntelliJ .format-container .simple-tree-table-icon{color:#fff;opacity:.5}body.dark .format-container .tabs-container{background-color:#252526}body.dark .format-container .json-curly-brackets{color:#ce70d6}body.dark .format-container .json-square-brackets{color:#f1d700}body.dark .format-container .json-key{color:#9cdcfe}body.dark .format-container .json-string,body.dark .format-container .json-string a{color:#ce9178}body.dark .format-container .json-number{color:#b5cea8}body.dark .format-container .json-boolean{color:#358cd6}body.dark .format-container .json-null{color:#569cd6}body.dark_IntelliJ .format-container .tabs-container{background-color:#1e1f22}body.dark_IntelliJ .format-container .json-curly-brackets{color:#bb9667}body.dark_IntelliJ .format-container .json-square-brackets{color:#bbbda3}body.dark_IntelliJ .format-container .json-key{color:#c77dbb}body.dark_IntelliJ .format-container .json-string,body.dark_IntelliJ .format-container .json-string a{color:#499472}body.dark_IntelliJ .format-container .json-number{color:#27abb7}body.dark_IntelliJ .format-container .json-boolean{color:#ce8d66}body.dark_IntelliJ .format-container .json-null{color:#c06235}.scroll-top{width:48px;height:48px;z-index:999;position:fixed;right:30px;bottom:30px;display:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA39JREFUaEPtmV2ITVEUx39rJjT5KPKC5DPKK6UGZZ7Eq0whNUiKFPfcKW9mnmjm7ssLaSLygEx5xItMESnKC4V8FV4IJUkyS+fMHZ07zjl3733PvT6a+3S6Z629/r+99sfa+wgpPw1YDtxLe9/k/1eI4X5STMkSokXWNlloYjgpMZSmIxPgbxBfS8M4QK0eavT78Qw0uodrtd+wDGjAMqBcEVAQw6NaYnzeNwRAi2xBOQlMrYj6jLJTygz6iMzyyR1Ai+xCGUgMqnTmDZErgBYoIJjMXhY2S4mLeWUiNwAt0INwyEqY0iNleq1saxjlAqAB64BrToKEHVLijJNPgnHdALqPaUziOsoKRzGfaKFD+nng6FdlXj+Ay9AZq1Q5L2W2/jEA3c8sWqOSe3aCiK/A3cr/K4G2FKEbxXDZF6KuDKROXKWXFvqlxJdQmBaZzDDdKZP8thhW/RmAgKfA4qrgSq+U6UkSlAostEuJOz4Q3hnQgPXAld+CCh1pB5DogKTcSBAalhpHmw1wGtgxJuhbMczJEqIBbxLmzFUxbGg2gCYE9AVADF6jwctJDzKd73xI7DG/IQQTmCFH+OiaBT+AAyykhWcpBZv7JA4bGmaRHOV5cwBqX7mc5Qe9coyX0TK6n/m0RnVSV4bA1KuTLCi/DBTYhHCpRm+Fe8Bo/b8JmJxp71lqOwNowB7guGuqLe33iuGEpW1k5gTgVDK7qIjbZmyESU1aA1TOuA99dTn5CQulxAsbH3uAeqpOGyXVNrvEcMrGzR4gIGnjsonhYzMkhg4bx3EAm17ysGlIBh4DSzzE+LgMiGG3jaPLEApv2Q7YNFq3jcOmZg9gt/u6aH8PzEx0aGWu9PHapjFrgKimCaIDTHiQqf4pNxHW2AT8ZaMEiZdgSreUKdm25QRQgRi7nIZzI7xZcPmeNkAL5xjmVpVQx1049HUGiCAKFBH6K8GjFUP3MIW2CGJpjd4bFEPnmM54grA761tYWpteAJXgy1A6w6p09Opcu1nED7ZlAcQP/BqwGZjORAblMO9sh03czhsgLZgW6EL4JoYL0b0RTArPBfFnH6G5ZyAVYKTkGBlWQVR2bxDDgvjzvwQQXqGsDQ/sGkTXKdHzOECsB3LtjdjKMjqE/qMMjJwn5olh+98+hM6gvAqXy0aN+4Yuo/HG/weAPmC1GNrzHDbxtn4Coc0pQNdM3UAAAAAASUVORK5CYII=)} ');

System.addImportMap({ imports: {"jquery":"user:jquery","highlight.js":"user:highlight.js","beautifier":"user:beautifier","jsmind":"user:jsmind","jsmind/screenshot":"user:jsmind/screenshot"} });
System.set("user:jquery", (()=>{const _=jquery;('default' in _)||(_.default=_);return _})());
System.set("user:highlight.js", (()=>{const _=hljs;('default' in _)||(_.default=_);return _})());
System.set("user:beautifier", (()=>{const _=beautifier;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind/screenshot", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());

System.register("./__entry.js", ['./__monkey.entry-CxvJWx78.js'], (function (exports, module) {
	'use strict';
	return {
		setters: [null],
		execute: (function () {



		})
	};
}));

System.register("./__monkey.entry-CxvJWx78.js", ['jquery'], (function (exports, module) {
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
        // 检查字符串是否为URL
        isUrl: function(string) {
          const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
          return regexp.test(string);
        },
        // 检查是否是图片链接
        isImg: function(pathImg) {
          const regexp = /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
          return regexp.test(pathImg);
        },
        // 检验内容是否是json格式的内容
        isJSON: function(str) {
          try {
            JSON.parse(str);
            return true;
          } catch (e) {
            console.log("is not json");
            return false;
          }
        },
        // 获取数据类型
        getType: function(value) {
          return Object.prototype.toString.call(value).match(/\s(.+)]/)[1].toLowerCase();
        },
        // 获取数组中对象key最多的对象
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
        // 随机rgb颜色
        randomColor: (opacity) => {
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        },
        /**
         * 是否满足JSON
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
        }
      });
      const URL = exports("d", {
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
          __vitePreload(() => module.import('./index-C5a-a6xH-HuJjBh3Q.js'), void 0 );
          return;
        }
        window.postMessage({ isJSON: true });
        setTimeout(() => {
          _unsafeWindow.GLOBAL_SOURCE_ELEMENT.hide();
          try {
            _unsafeWindow.GLOBAL_JSON = eval(`(${rawText})`);
          } catch (e) {
            _unsafeWindow.GLOBAL_JSON = JSON.parse(rawText);
          }
          $(document.head).append(`<link href="${URL.LAYUI_CSS}" rel="stylesheet">`).append(`<script src="${URL.LAYUI_JS}">`);
          _GM_addStyle(
            `jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
     jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `
          );
          __vitePreload(() => module.import('./index-B6iB3N_--CxgiotWU.js'), void 0 );
          __vitePreload(() => module.import('./index-uqF6Z8HY-B8gCy8n4.js'), void 0 ).then((format) => format.default.init()).then(() => __vitePreload(() => module.import('./index-BN5Ziz2P-DXwcBi8V.js'), void 0 )).then(() => __vitePreload(() => module.import('./index-Cgl7hcfy-DaTAQqy4.js'), void 0 ));
        });
        const openInTab = () => _GM_openInTab(URL.EXAMPLE_JSON);
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

System.register("./index-C5a-a6xH-HuJjBh3Q.js", ['jquery', 'highlight.js', 'beautifier', './_virtual_plugin-monkey-loader-sbGfF__7-Bf_IV2LY.js'], (function (exports, module) {
  'use strict';
  var $, hljs, js_beautify, css_beautify, cssLoader;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      hljs = module.default;
    }, module => {
      js_beautify = module.js_beautify;
      css_beautify = module.css_beautify;
    }, module => {
      cssLoader = module.c;
    }],
    execute: (function () {

      cssLoader("highlightjs");
      const docType = [
        "application/x-javascript",
        "application/javascript",
        "text/javascript",
        "text/css"
      ];
      const contentType = document.contentType;
      if (docType.includes(document.contentType)) {
        window.postMessage({ isJSON: true });
        setTimeout(() => {
          const preElement = $("pre").first();
          if (preElement.length == 0) {
            return;
          }
          const rawText = preElement.text();
          const layout = '<div class="beautify_checkbox"><input type="checkbox" id="beautify"/><label for="beautify">美化输出</label></div>';
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
      }
      function beautifyCode(contentType2, element, rawText) {
        const language = contentType2.substring(contentType2.indexOf("/") + 1);
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

System.register("./index-B6iB3N_--CxgiotWU.js", [], (function (exports, module) {
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
            <div class="selectbox">
                <div class="formatStyle">
                    <label>风格:</label>
                    <select>
                        <option value="default">默认</option>
                        <option value="treaTable">表格</option>
                    </select>
                </div>
                <div class="theme" style="margin: 0 15px">
                    <label>主题: </label>
                    <select>
                        <option value="default">默认</option>
                        <option value="light">浅色</option>
                        <option value="dark">暗黑</option>
                        <option value="dark_IntelliJ">暗黑+</option>
                    </select>
                </div>
                <span class="inputJson">JSON 输入</span>
                <span class="fetchApi">HTTP 请求</span>
            </div>
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

System.register("./index-uqF6Z8HY-B8gCy8n4.js", ['jquery', './__monkey.entry-CxvJWx78.js'], (function (exports, module) {
  'use strict';
  var $, _GM_setValue, _GM_getValue, _unsafeWindow, Utils, _GM_setClipboard;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      _GM_setValue = module._;
      _GM_getValue = module.a;
      _unsafeWindow = module.b;
      Utils = module.U;
      _GM_setClipboard = module.c;
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
      function treeTableTrHTML(json, level = 0, pId = "", pChain = "") {
        let tr = "";
        for (const key in json) {
          let val = json[key], type = Utils.getType(val), tId = key + "_" + Math.random(), chain = pChain + "." + key;
          if (["array", "object"].includes(type)) {
            let brackets = "", len = Object.keys(val).length, res = treeTableTrHTML(val, level + 1, tId, chain);
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
          $("#formatContainer").on(
            {
              mouseenter: function() {
                var that = $(this), href = that.attr("href");
                if (Utils.isImg(href)) {
                  layer.tips(`<img src="${href}" />`, that, {
                    time: 0,
                    anim: 5,
                    maxWidth: 500,
                    tips: [3, "#d9d9d9"]
                  });
                }
              },
              mouseleave: () => layer.closeAll()
            },
            "a[href]"
          );
          return this;
        },
        /**
         * 鼠标移入key提示JSONPath
         * @returns this
         */
        tipsJsonPath: function() {
          var that = this;
          $("#formatContainer").on(
            {
              mouseenter: function() {
                const jsonPath = that.getJsonPath(this);
                const tips = `<b>ctrl + 点击复制</b><br/>${jsonPath}`;
                layer.tips(tips, this, {
                  time: 0,
                  anim: 5,
                  maxWidth: 500,
                  tips: [1, "#2e59a7"]
                });
              },
              mouseleave: () => layer.closeAll()
            },
            ".json-key"
          );
          return this;
        },
        /**
         * 复制key的JSONPath
         * @returns
         */
        copyJsonPath: function() {
          var that = this;
          $("#formatContainer").on("click", ".json-key", function(event) {
            if (event.ctrlKey) {
              const jsonPath = that.getJsonPath(this);
              _GM_setClipboard(jsonPath);
              layer.msg("复制成功", { time: 1500 });
            }
          });
          return this;
        },
        /**
         * 给定htmlElement获取JSONPath
         * @param {*} element
         * @returns
         */
        getJsonPath: function(element) {
          const style = _GM_getValue("formatStyle") || "default";
          const jsonPath = style == "default" ? $(element).parent().attr("json-path") : $(element).attr("json-path");
          return jsonPath.split(".").reduce(
            (prev, next) => /^\d+$/.test(next) ? prev + `[${next}]` : prev + "." + next
          );
        },
        init: function() {
          this.urlHover().tipsJsonPath().copyJsonPath();
        }
      };
      const formatStyle = exports("default", {
        // 切换风格
        changeStyle: function() {
          const that = this;
          $(".formatStyle select").on("change", function(e) {
            layer.load(0, { shade: false });
            const val = $(e.target).val();
            _GM_setValue("formatStyle", val);
            that.setStyle();
          });
          return this;
        },
        // 设置风格
        setStyle: function() {
          const style = _GM_getValue("formatStyle") || "default";
          $(".formatStyle select").val(style);
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
            const trHTML = treeTableTrHTML(_unsafeWindow.GLOBAL_JSON);
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
          this.setStyle().changeStyle();
          evnet.init();
        }
      });
      window.addEventListener("message", function(event) {
        const { data } = event;
        if (data && data.reload) {
          formatStyle.setStyle();
        }
      });

    })
  };
}));

System.register("./index-BN5Ziz2P-DXwcBi8V.js", ['jquery', './__monkey.entry-CxvJWx78.js', 'jsmind', 'jsmind/screenshot', './_virtual_plugin-monkey-loader-sbGfF__7-Bf_IV2LY.js'], (function (exports, module) {
  'use strict';
  var $, _unsafeWindow, _GM_setClipboard, _GM_getValue, URL$1, Utils, _GM_setValue, jsMind, cssLoader;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      _unsafeWindow = module.b;
      _GM_setClipboard = module.c;
      _GM_getValue = module.a;
      URL$1 = module.d;
      Utils = module.U;
      _GM_setValue = module._;
    }, module => {
      jsMind = module.default;
    }, null, module => {
      cssLoader = module.c;
    }],
    execute: (function () {

      cssLoader("jsmind");
      const jsonMind = {
        isFirst: true,
        // JSON数据转换为jsMind所需要的数据结构
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
        // 脑图节点调用链
        mindChain: function(node) {
          let chain = node.data.chain;
          if (!node.parent) {
            return chain;
          }
          const parent = node.parent, parentChain = this.mindChain(parent);
          chain = parent.data.isArray ? `${parentChain}[0].${chain}` : `${parentChain}.${chain}`;
          return chain;
        },
        //  显示脑图
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
        // 脑图节点事件
        event: function() {
          const jsonMind2 = this;
          $("jmnode").on("dblclick mouseover mouseout", function(event) {
            const that2 = $(this), node = _unsafeWindow.GLOBAL_JSMIND.get_node(that2.attr("nodeid"));
            if (!node.parent) {
              return;
            }
            switch (event.type) {
              case "dblclick":
                _GM_setClipboard(jsonMind2.mindChain(node));
                layer.msg("节点路径复制成功", { time: 1500 });
                break;
              case "mouseover":
                const s = `<b>节点路径（双击复制）</b><br/>${jsonMind2.mindChain(node)}`;
                layer.tips(s, that2, {
                  time: 0,
                  tips: [2, "#2e59a7"]
                });
                break;
              default:
                layer.closeAll();
                break;
            }
          });
          return this;
        },
        init: function(json2) {
          if (!_unsafeWindow.GLOBAL_JSMIND) {
            _unsafeWindow.GLOBAL_JSMIND = new jsMind({
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
         */
        download: {
          download: function(content, filename) {
            const link = document.createElement("a");
            link.href = content;
            link.download = filename;
            link.click();
          },
          saveJSON: function(text2) {
            const blob = new Blob([text2], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const filename = (/* @__PURE__ */ new Date()).getTime() + ".json";
            this.download(url, filename);
            URL.revokeObjectURL(url);
          },
          savePNG: () => _unsafeWindow.GLOBAL_JSMIND.shoot()
        },
        saveJson: function() {
          if ($("#jmContainer").is(":visible")) {
            this.download.savePNG();
          } else {
            this.download.saveJSON(this.$rawText.text());
          }
        },
        // 复制JSON文本内容
        copyJson: function() {
          _GM_setClipboard(this.$rawText.text());
          layer.msg("复制成功", { time: 1500 });
        },
        // 全部折叠
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
        // 全部展开
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
        // 显示JSON脑图
        viewJsonMind: function() {
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          _unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
            _unsafeWindow.GLOBAL_JSMIND.get_root()
          );
        },
        // 查看原始JSON内容
        viewRawText: function() {
          if (this.firstFormat) {
            this.$rawText.html(_unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
            this.firstFormat = false;
          }
        },
        // 美化
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
      const jsonFilter = {
        // 过滤 JSON
        filterJSON: function(filter) {
          const style = _GM_getValue("formatStyle") || "default";
          if (!filter) {
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
            if (!newChain.toLowerCase().includes(filter.toLowerCase())) {
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
            if (!text2.toLowerCase().includes(filter.toLowerCase())) {
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
        // JSON 过滤
        input: function() {
          const that2 = this;
          $("input").on("input", function() {
            const val = $(this).val();
            val === "" ? $(".clear").attr("hidden", true) : $(".clear").attr("hidden", false);
            that2.filterJSON(val);
          });
          return that2;
        },
        // 清空输入框内容
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
        // 切换主题
        changeTheme: function() {
          const that2 = this;
          $(".theme select").on("change", function(e) {
            const val = $(e.target).val();
            _GM_setValue("theme", val);
            that2.setTheme();
          });
          return this;
        },
        // 设置主题
        setTheme: function() {
          const theme2 = _GM_getValue("theme") || "default";
          $("body").removeClass().addClass(theme2);
          $(".theme select").val(theme2);
          return this;
        },
        init: function() {
          this.setTheme().changeTheme();
        }
      };
      const tools = {
        inputJson: function() {
          const that = this;
          $(".inputJson").off("click").on("click", function() {
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
          });
          return this;
        },
        fetchApi: function() {
          const that2 = this;
          $(".fetchApi").off("click").on("click", function() {
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
          this.inputJson().fetchApi();
        }
      };
      theme.init();
      tools.init();
      tabsEvent.init();
      jsonFilter.init();

    })
  };
}));

System.register("./_virtual_plugin-monkey-loader-sbGfF__7-Bf_IV2LY.js", [], (function (exports, module) {
  'use strict';
  return {
    execute: (function () {

      const cssLoader = exports("c", (e) => {
        const t = GM_getResourceText(e);
        return GM_addStyle(t), t;
      });

    })
  };
}));

System.register("./index-Cgl7hcfy-DaTAQqy4.js", ['jquery'], (function (exports, module) {
  'use strict';
  var $;
  return {
    setters: [module => {
      $ = module.default;
    }],
    execute: (function () {

      $(document.body).append('<div class="scroll-top"></div>').find(".tabs-container").on("scroll", function(e) {
        const scrollTop = $(this).scrollTop();
        scrollTop > 500 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      }).parents().find(".scroll-top").on("click", function() {
        $(".tabs-container").animate(
          {
            scrollTop: "0"
          },
          1e3
        );
      });

    })
  };
}));

System.import("./__entry.js", "./");