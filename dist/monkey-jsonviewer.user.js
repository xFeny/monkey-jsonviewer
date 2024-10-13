// ==UserScript==
// @name         JSON Viewer
// @namespace    npm/vite-plugin-monkey
// @version      v0.6.4
// @author       Feny
// @description  格式化显示JSON使数据看起来更加漂亮，支持折叠/展开格式化后的数据，支持JSON脑图让调用层级看着更清晰，支持复制JSON脑图节点路径
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wvjF8bLX4ZrHZx+XNqlwnmKjH5YUyRvb6kEAd8H058d1b47XV5Ir3eoN++bagaXYrN6KOBn2FfPPx5/aEutX8a+KNWhIubhruZLSNj8u1WMcIOP4QoXOOwNS/wDBM79lDTfjh8YNe+IXj63TxRdeHfKjsE1KMTxtdSbmMmxvlAiVV2IBsUybgAyKR9ZTy6lhsM69Xovm2+iPmKmOqYjEKjT6v5WXU9e8beKrjxZpp/s/xFrfhjWIwWs9X0q42z2kmPlZo2zDcxjqYZ0eNv7obDDf/YL/AG8L745eJNc+G3xCttP0n4qeEWZZ2sVZNP8AENsu0rd2ysS0ZKPG7RMSQsisCcukWd+3x4RtfhpqGk+JNPjS0g1mV7a8iT5UM4XesgHYsofdjglQepJPxwPE1x4V/au8LePtNkeK40ma0lmdDgyorvHMhPo9uxjP+y1bUcHRxmGbS1adn1TXT0/4fcipiqmExCi3pfVdGn19f+GLni/w7ceGf2wPFXga+Vo5rW/vDbI3WWI/v4HA/wBqBg3tk+lfWX7AXia1+F/iDV9B1CRbWHXjFLayyHannpuUxk+rqy4zxlMdWAPQft7fsL33x91nQfiD4DutP0r4oeDXVrT7cWWx1y3UsTZ3LKCyAh5FEigkLLIpHzBk5vwj4JuvE2kLJfeHdY8N6lGAl5pepwBZrOT+JRIuYp0ByBNCzxPg4bIICqYyljMKot62Sa6prr6P/gBDC1MLiHJLS90+jT6ev/Dnmn/BVP8Aaw0nxv4/8P8Aw18KXK69qmk3MlxqEdiRMwuivlpbrtPLopkMnZNy5IIYLyPwa/Z8vvEmv+HtHu4/Ovr+5iS6KDcqAtukwe6om7nuEJxX0XoH7PK/bJG0vRoY5rr/AFslvbLGZf8AfcAf+PGvafgv8CbX4byNqFyI5tWmXYCoytsh6qvqx7t+A4yWiWYUsLhlRpbr72318kVHA1MTiHVqbP7kl0P/2Q==
// @match        *://*/*
// @require      https://unpkg.com/dom-to-image@2.6.0/dist/dom-to-image.min.js
// @require      https://unpkg.com/jquery@3.7.1/dist/jquery.min.js
// @require      data:application/javascript,%3Bwindow.jQuery%3DjQuery%3B%3Bwindow.jquery%3DjQuery%3B
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.js
// @require      data:application/javascript,%3Bwindow.jsMind%3DjsMind%3Bwindow.jsmind%3DjsMind%3B
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.screenshot.js
// @require      https://unpkg.com/systemjs@6.15.1/dist/system.min.js
// @require      https://unpkg.com/systemjs@6.15.1/dist/extras/named-register.min.js
// @require      data:application/javascript,%3B(typeof%20System!%3D'undefined')%26%26(System%3Dnew%20System.constructor())%3B
// @resource     jsmind  https://unpkg.com/jsmind@0.8.5/style/jsmind.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        unsafeWindow
// @note         v0.6.4 使用vite-plugin-monkey构建脚本
// @note         v0.6.3 修复暗黑主题，tab颜色问题
// @note         v0.6.2 脑图增加JSON Crack
// @note         v0.6.1 增加多一种浅色主题
// @note         v0.6.0 增加简单HTTP 请求功能，可请求GET/POST/PUT/DELETE的API接口，而不单单只能GET请求使用
// @note         v0.5.9 jsonp格式小优化
// @note         v0.5.8 增加JSON手动输入
// @note         v0.5.7 一些小细节优化
// @note         v0.5.6 修复BUG
// @note         v0.5.5 解决@require jquery-simple-tree-table.min.js依赖加载失败问题
// @note         v0.5.4 单击复制修改为CTRL+单击复制JSONPath功能，JSON格式化风格增加table格式
// @note         v0.5.3 增加暗黑主题色
// @note         v0.5.2 单击JSON格式化的key可复制JSONPath
// @note         v0.5.1 修复JSONPath提示有误
// @note         v0.5.0 解决chrome 120+以上内核JSON格式化不执行和引入layer报错问题
// @note         v0.4.9 布局修改，增加保存JSON/脑图为文件，增加JSON过滤，鼠标移入key提示JSONPath
// @note         v0.4.8 代码优化
// @note         v0.4.7 增加对JSONP的判断，代码优化
// @note         v0.4.6 增加复制按钮，JSON脑图CSS样式细节优化，JSON脑图增加收起/展开子节点按钮
// @note         v0.4.5 在json-viewer-updated原基础上进行了一些修改，主要有CSS样式修改，新增折叠/展开全部功能，新增JSON脑图功能，脑图节点点击显示调用路径
// ==/UserScript==

(e=>{if(!["application/vnd.api+json","application/javascript","application/json","text/javascript","text/plain","text/json"].includes(document.contentType))return;if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(' @charset "UTF-8";body,html{margin:0;padding:0;font-size:14px}body td,html td{font-size:14px}body li::marker,html li::marker{content:""}body input:focus,body select:focus,body textarea:focus,html input:focus,html select:focus,html textarea:focus{outline:0}.hidden{display:none!important}.scroll-top{width:48px;height:48px;z-index:999;position:fixed;right:30px;bottom:30px;display:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA39JREFUaEPtmV2ITVEUx39rJjT5KPKC5DPKK6UGZZ7Eq0whNUiKFPfcKW9mnmjm7ssLaSLygEx5xItMESnKC4V8FV4IJUkyS+fMHZ07zjl3733PvT6a+3S6Z629/r+99sfa+wgpPw1YDtxLe9/k/1eI4X5STMkSokXWNlloYjgpMZSmIxPgbxBfS8M4QK0eavT78Qw0uodrtd+wDGjAMqBcEVAQw6NaYnzeNwRAi2xBOQlMrYj6jLJTygz6iMzyyR1Ai+xCGUgMqnTmDZErgBYoIJjMXhY2S4mLeWUiNwAt0INwyEqY0iNleq1saxjlAqAB64BrToKEHVLijJNPgnHdALqPaUziOsoKRzGfaKFD+nng6FdlXj+Ay9AZq1Q5L2W2/jEA3c8sWqOSe3aCiK/A3cr/K4G2FKEbxXDZF6KuDKROXKWXFvqlxJdQmBaZzDDdKZP8thhW/RmAgKfA4qrgSq+U6UkSlAostEuJOz4Q3hnQgPXAld+CCh1pB5DogKTcSBAalhpHmw1wGtgxJuhbMczJEqIBbxLmzFUxbGg2gCYE9AVADF6jwctJDzKd73xI7DG/IQQTmCFH+OiaBT+AAyykhWcpBZv7JA4bGmaRHOV5cwBqX7mc5Qe9coyX0TK6n/m0RnVSV4bA1KuTLCi/DBTYhHCpRm+Fe8Bo/b8JmJxp71lqOwNowB7guGuqLe33iuGEpW1k5gTgVDK7qIjbZmyESU1aA1TOuA99dTn5CQulxAsbH3uAeqpOGyXVNrvEcMrGzR4gIGnjsonhYzMkhg4bx3EAm17ysGlIBh4DSzzE+LgMiGG3jaPLEApv2Q7YNFq3jcOmZg9gt/u6aH8PzEx0aGWu9PHapjFrgKimCaIDTHiQqf4pNxHW2AT8ZaMEiZdgSreUKdm25QRQgRi7nIZzI7xZcPmeNkAL5xjmVpVQx1049HUGiCAKFBH6K8GjFUP3MIW2CGJpjd4bFEPnmM54grA761tYWpteAJXgy1A6w6p09Opcu1nED7ZlAcQP/BqwGZjORAblMO9sh03czhsgLZgW6EL4JoYL0b0RTArPBfFnH6G5ZyAVYKTkGBlWQVR2bxDDgvjzvwQQXqGsDQ/sGkTXKdHzOECsB3LtjdjKMjqE/qMMjJwn5olh+98+hM6gvAqXy0aN+4Yuo/HG/weAPmC1GNrzHDbxtn4Coc0pQNdM3UAAAAAASUVORK5CYII=)}.layui-layer-tips{width:auto!important}.flex-container{z-index:10;position:fixed;width:100vw;height:100vh;display:flex;flex-direction:column}.flex-container .tabs,.flex-container .toolbar{display:flex;line-height:28px;background-color:#ececec;border-bottom:1px solid #ccc}.flex-container .toolbar{line-height:23px}.flex-container .toolbar .searchbox{display:flex;flex-grow:1}.flex-container .toolbar .searchbox input{flex-grow:1;border:none;outline:none;font-size:12px;padding-left:23px;background-size:12px;background-repeat:no-repeat;background-position:7px center;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIGZpbGw9InJnYmEoMTM1LCAxMzUsIDEzNywgMC45KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgb3BhY2l0eT0iLjQiIGQ9Ik01IDkuMmwyIDEuNlY2LjFMOC41NSA0aC01LjFMNSA2LjF2My4xeiIvPgogIDxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTEuMTggMi42QTEgMSAwIDAgMSAyIDFIMTBhMSAxIDAgMCAxIC44IDEuNkw4IDYuNHY0LjgyYzAgLjYzLS43Mi45OC0xLjIyLjZsLTIuNS0xLjk5QS43NS43NSAwIDAgMSA0IDkuMjVWNi40MUwxLjE4IDIuNnpNMiAyTDUgNi4wOXYzLjA0bDIgMS41OVY2LjA5TDEwLjAxIDJIMnoiLz4KPC9zdmc+Cg==)}.flex-container .toolbar .searchbox .clear{flex:0 0 auto;align-self:center;margin:0 4px;padding:0;border:0;width:16px;height:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9ImNvbnRleHQtZmlsbCIgZmlsbC1vcGFjaXR5PSJjb250ZXh0LWZpbGwtb3BhY2l0eSI+CiAgPHBhdGggZD0iTTYuNTg2IDhsLTIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNCAxLjQxNEw4IDkuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNC0xLjQxNEw5LjQxNCA4bDIuMjkzLTIuMjkzYTEgMSAwIDEgMC0xLjQxNC0xLjQxNEw4IDYuNTg2IDUuNzA3IDQuMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNEw2LjU4NiA4ek04IDBhOCA4IDAgMSAxIDAgMTZBOCA4IDAgMCAxIDggMHoiLz4KPC9zdmc+Cg==)}.flex-container .tabs-item{border-width:3px;border-top:3px solid #ececec}.flex-container .tabs-item.active{color:#0060df;border-top-color:#0060df;background-color:#e9e9e9}.flex-container .tabs-item:hover{border-top-color:#c3c3c6}.flex-container .tabs-item,.flex-container .toolbar-item{cursor:pointer;padding:0 10px;font-size:12px}.flex-container .tabs-item:hover,.flex-container .toolbar-item:hover{background-color:#d4d4d4}.flex-container .tabs .selectbox{position:absolute;right:200px;display:flex;font-size:13px}.flex-container .inputJson,.flex-container .fetchApi{cursor:pointer;color:#0060df;margin-left:15px}.flex-container .tabs-container{flex-grow:1;overflow:auto;line-height:1.4;font-family:monospace}.flex-container .tabs-container>div{display:none}.flex-container .tabs-container>div.active{display:block}.flex-container .tabs-container #formatContainer{padding:10px}.flex-container .tabs-container #rawTextContainer{padding:0 10px}.flex-container .tabs-container #rawTextContainer pre{display:block!important;overflow-wrap:break-word;white-space:pre-wrap}.flex-container .jsonp{color:#93983a}.flex-container ul.json-object,.flex-container ul.json-array{margin:0 0 0 2px;list-style-type:none;border-left:1px dotted #5d6d7e;padding-left:24px}.flex-container .json-brackets{font-weight:700}.flex-container .json-key{color:#910f93;cursor:pointer}.flex-container .json-string,.flex-container .json-string a{color:#4b8a4c}.flex-container .json-number{color:#1a01cc}.flex-container .json-boolean{color:#905}.flex-container .json-null{color:#0031bc}.flex-container a.json-toggle{position:rElative;color:inherit;opacity:.2;text-decoration:none}.flex-container a.json-toggle:hover{opacity:.35}.flex-container a.json-toggle:active{opacity:.5}.flex-container a.json-toggle:focus{outline:none}.flex-container a.json-toggle:before{top:2.5px;left:-15px;position:absolute;content:"";display:block;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.flex-container a.json-toggle.collapsed:before{transform:rotate(0)}.flex-container a.json-placeholder{color:#ccc;font-size:12px;padding:0 1em;text-decoration:none}.flex-container a.json-placeholder:hover{text-decoration:underline}.flex-container .json-curly-brackets{color:#6d9331}.flex-container .json-square-brackets{color:#8e9331}.flex-container #jmContainer{width:100vw;height:calc(100vh - 57px)}.flex-container #jmContainer jmnode{display:flex;align-items:center;padding:0 7px 0 22px;color:#475872!important;box-shadow:none!important;background-color:transparent!important}.flex-container #jmContainer jmnode.root{padding:0;color:transparent!important}.flex-container #jmContainer jmnode:before{top:50%!important;content:"";position:absolute;border-radius:50%;transform:translateY(-50%)}.flex-container #jmContainer jmnode.root:before{left:50%;width:18px;height:18px;transform:translate(-18px,-50%)}.flex-container #jmContainer jmnode:hover{text-shadow:0px 0px 1px currentColor}.flex-container #jmContainer jmnode:not(.root):before{left:0;width:15px;height:15px}.flex-container #jmContainer jmexpander{margin-top:1px;line-height:9px;background-color:#dfdfdf}.flex-container #jmContainer .mind-array{opacity:.6;font-size:12px;padding-left:5px}.flex-container table{width:-webkit-fill-available;margin-left:20px;border-collapse:collapse}.flex-container table tr:hover{background-color:#f0f9fe}.flex-container table tr.selected td,.flex-container table tr.selected td a{color:#fff!important;background-color:#3875d7}.flex-container table tr td:first-child{width:120px}.flex-container table .tree-len{color:#ccc;font-size:13px}.flex-container table .simple-tree-table-icon{color:#000;opacity:.2;width:0!important;margin:0!important;line-height:0!important}.flex-container table .simple-tree-table-icon:before{top:.5px;left:-15px;position:relative;content:"";width:0;height:0;display:none;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent currentColor;transform:rotate(90deg)}.flex-container table .simple-tree-table-icon::hover{opacity:.35}.flex-container table .simple-tree-table-icon:after{content:""!important}.flex-container table .simple-tree-table-icon::active{opacity:.5}.flex-container table .simple-tree-table-opened .simple-tree-table-icon:before{display:block}.flex-container table .simple-tree-table-closed .simple-tree-table-icon:before{display:block;transform:rotate(0)}.httpRequest{padding:20px}.httpRequest input,.httpRequest select{border-radius:0;padding-left:10px;border:1px solid #ccc}.requestbox,.textarea{width:700px;display:flex}.requestbox{height:35px;margin-bottom:15px}.requestbox input{flex-grow:1}.requestbox button{cursor:pointer;padding:0 15px;border:1px solid #ccc}.requestbox button:active{background-color:#cfcfcf}.textarea input{flex-grow:1;height:30px}.light .json-key{color:#0451a5}.light .json-string,.light .json-string a{color:#a31515}.light .json-number{color:#0b7500}.light .json-boolean{color:#00f}.light .json-null{color:#05f}body.dark .tabs-container{background-color:#333}body.dark li,body.dark pre{color:#ccc}body.dark .jsonp{color:#f1d700}body.dark .json-toggle{opacity:.35}body.dark .json-toggle:hover{opacity:.5}body.dark .json-curly-brackets{color:#ce70d6}body.dark .json-square-brackets{color:#f1d700}body.dark .json-key{color:#9cdcfe}body.dark .json-string,body.dark .json-string a{color:#ce9178}body.dark .json-number{color:#b5cea8}body.dark .json-boolean{color:#358cd6}body.dark .json-null{color:#569cd6}body.dark jmnode{color:#7cdcfe!important}body.dark table tr:hover{background-color:#353b48}body.dark .simple-tree-table-icon{color:#fff;opacity:.5} ');

System.addImportMap({ imports: {"jquery":"user:jquery","jsmind":"user:jsmind","jsmind/screenshot":"user:jsmind/screenshot"} });
System.set("user:jquery", (()=>{const _=jquery;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind/screenshot", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());

System.register("./__entry.js", ['./__monkey.entry-DJjsLgK8.js'], (function (exports, module) {
	'use strict';
	return {
		setters: [null],
		execute: (function () {



		})
	};
}));

System.register("./__monkey.entry-DJjsLgK8.js", ['jquery'], (function (exports, module) {
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
            console.log("is not json", e);
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
            "application/javascript",
            "application/json",
            "text/javascript",
            "text/plain",
            "text/json"
          ];
          if (!docType.includes(contentType)) {
            return false;
          }
          return true;
        }
      });
      var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
      var _GM_getValue = exports("c", /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)());
      var _GM_setClipboard = exports("_", /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)());
      var _GM_setValue = exports("b", /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)());
      var _unsafeWindow = exports("a", /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)());
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
          return;
        }
        _unsafeWindow.GLOBAL_SOURCE_ELEMENT.hide();
        try {
          _unsafeWindow.GLOBAL_JSON = eval(`(${rawText})`);
        } catch (e) {
          _unsafeWindow.GLOBAL_JSON = JSON.parse(rawText);
        }
        const LAYUI_JS = "//unpkg.com/layui@2.7.6/dist/layui.js";
        const LAYUI_CSS = "//unpkg.com/layui@2.7.6/dist/css/layui.css";
        $("head").append(`<link href="${LAYUI_CSS}" rel="stylesheet">`).append(`<script src="${LAYUI_JS}">`);
        _GM_addStyle(`
    jmnode.root::before{
      background-color: ${Utils.randomColor(0.5)}
    }

    jmnode:not(.root)::before{
      background-color: ${Utils.randomColor(0.5)}
    }
  `);
        __vitePreload(() => module.import('./layout-DTea31Wm-BaKXQvNI.js'), void 0 );
        __vitePreload(() => module.import('./formatStyle-G8UeWY1h-C6u4ZziO.js'), void 0 ).then((formatStyle) => {
          formatStyle.default.init();
        });
      })();

    })
  };
}));

System.register("./layout-DTea31Wm-BaKXQvNI.js", ['jquery'], (function (exports, module) {
        'use strict';
        var $;
        return {
                setters: [module => {
                        $ = module.default;
                }],
                execute: (function () {

                        const UI = `
        <div class="scroll-top"></div>
        <div class="flex-container">
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
                        $("body").append(UI);

                })
        };
}));

System.register("./formatStyle-G8UeWY1h-C6u4ZziO.js", ['jquery', './__monkey.entry-DJjsLgK8.js', 'jsmind', 'jsmind/screenshot'], (function (exports, module) {
  'use strict';
  var $, _GM_setClipboard, _unsafeWindow, _GM_setValue, _GM_getValue, Utils, jsMind;
  return {
    setters: [module => {
      $ = module.default;
    }, module => {
      _GM_setClipboard = module._;
      _unsafeWindow = module.a;
      _GM_setValue = module.b;
      _GM_getValue = module.c;
      Utils = module.U;
    }, module => {
      jsMind = module.default;
    }, null],
    execute: (function () {

      (function($2) {
        function isCollapsable(arg) {
          return arg instanceof Object && Object.keys(arg).length > 0;
        }
        function json2html(json2, parentPath = "") {
          let html = "", type = Utils.getType(json2);
          switch (type) {
            case "array":
            case "object":
              let len = json2.length || Object.keys(json2).length;
              if (len > 0) {
                html += `<span class="json-brackets ${type == "array" ? "json-square-brackets" : "json-curly-brackets"}">`;
                html += type === "array" ? '[</span><ol class="json-array">' : '{</span><ul class="json-object">';
                for (var key in json2) {
                  if (json2.hasOwnProperty(key)) {
                    let comma = --len > 0 ? "," : "", jsonPath = parentPath + "." + key, collapse = isCollapsable(json2[key]) ? '<a href class="json-toggle"></a>' : "", res = json2html(json2[key], jsonPath);
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
              json2 = type === "string" ? json2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : json2;
              if (Utils.isUrl(json2)) {
                html += `<a target="_blank" href="${json2}" class="json-string">"${json2}"</a>`;
              } else {
                json2 = type === "string" ? `"${json2}"` : json2;
                html += `<span class="json-${type}">${json2}</span>`;
              }
              break;
          }
          return html;
        }
        $2.fn.jsonViewer = function(json2, jsonpFn) {
          return this.each(function() {
            var html = json2html(json2);
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
      const theme = {
        // 切换主题
        changeTheme: function() {
          const that2 = this;
          $(".theme select").change(function(e) {
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
      const cssLoader = (e) => {
        const t = GM_getResourceText(e);
        return GM_addStyle(t), t;
      };
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
                topic: `${key}<span class="mind-array">${type}</span>`,
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
          jm.show({
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
          $("jmnode").on("dblclick mouseover mouseout", function(event) {
            const that2 = $(this), node = jm.get_node(that2.attr("nodeid"));
            if (!node.parent) {
              return;
            }
            switch (event.type) {
              case "dblclick":
                _GM_setClipboard(jsonMind.mindChain(node));
                layer.msg("节点路径复制成功", { time: 1500 });
                break;
              case "mouseover":
                const s = `<b>节点路径（双击复制）</b><br/>${jsonMind.mindChain(node)}`;
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
          if (!window.jm) {
            window.jm = new jsMind({
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
      const btnEvent = {
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
          savePNG: () => jm.shoot()
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
            jm.collapse_all();
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
            jm.expand_all();
            jm.scroll_node_to_center(jm.get_root());
          }
        },
        format: function() {
        },
        // 显示JSON脑图
        viewJsonMind: function() {
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          jm.scroll_node_to_center(jm.get_root());
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
          layer.closeAll();
          const index = layer.open({
            type: 1,
            title: false,
            maxmin: true,
            shadeClose: true,
            area: ["900px", "600px"],
            content: '<iframe style="width: 100%;height: 100%;border: 0;" id="jsoncrackEmbed" src="https://jsoncrack.feny.ink/widget"></iframe>',
            success: function(layero) {
              const jsonCrackEmbed = layero.find("#jsoncrackEmbed")[0];
              window == null ? void 0 : window.addEventListener("message", () => {
                jsonCrackEmbed.contentWindow.postMessage(
                  {
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
      const otherEvent = {
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
        // 返回顶部
        scrollTop: function() {
          $(".scroll-top").click(function() {
            $(".tabs-container").animate(
              {
                scrollTop: "0"
              },
              1e3
            );
          });
          $(".tabs-container").scroll(function(e) {
            const scrollTop = $(this).scrollTop();
            scrollTop > 500 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
          });
          return this;
        },
        // 所有a标签，看是否是图片，是图片生成预览图
        urlHover: function() {
          $("#formatContainer").on(
            {
              mouseenter: function() {
                var that2 = $(this), href = that2.attr("href");
                if (Utils.isImg(href)) {
                  layer.tips(`<img src="${href}" />`, that2, {
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
        // 提示key的JSONPath
        tipsJsonPath: function() {
          var that2 = this;
          $("#formatContainer").on(
            {
              mouseenter: function() {
                const jsonPath = that2.getJsonPath(this);
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
        // 单击key复制JSONPath
        copyJsonPath: function() {
          var that2 = this;
          $("#formatContainer").on("click", ".json-key", function(event) {
            if (event.ctrlKey) {
              const jsonPath = that2.getJsonPath(this);
              _GM_setClipboard(jsonPath);
              layer.msg("复制成功", { time: 1500 });
            }
          });
          return this;
        },
        getJsonPath: function(element) {
          const style = _GM_getValue("formatStyle") || "default";
          const jsonPath = style == "default" ? $(element).parent().attr("json-path") : $(element).attr("json-path");
          return jsonPath.split(".").reduce(
            (prev, next) => /^\d+$/.test(next) ? prev + `[${next}]` : prev + "." + next
          );
        },
        inputJson: function() {
          const that = this;
          $(".inputJson").off("click").click(function() {
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
            $("form").submit(function(event) {
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
                url: "https://fetch-api.feny.ink/httpRequest",
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
          btnEvent.isBeautify = false;
          btnEvent.$rawText.html(_unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
          formatStyle.setStyle();
          jsonMind.isFirst = true;
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          layer.closeAll();
        },
        init: function() {
          this.input().clear().scrollTop().urlHover().tipsJsonPath().copyJsonPath().inputJson().fetchApi();
        }
      };
      function treeTableHtml(json2, level = 0, pId = "", pChain = "") {
        let tr = "";
        for (const key in json2) {
          let val = json2[key], type = Utils.getType(val), tId = key + "_" + Math.random(), chain = pChain + "." + key;
          if (["array", "object"].includes(type)) {
            let brackets = "", len = Object.keys(val).length, res = treeTableHtml(val, level + 1, tId, chain);
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
      const formatStyle = exports("default", {
        // 切换风格
        changeStyle: function() {
          const that2 = this;
          $(".formatStyle select").change(function(e) {
            const val = $(e.target).val();
            _GM_setValue("formatStyle", val);
            that2.setStyle();
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
          } else {
            let appendHtml = `<table id="treeTable">${treeTableHtml(
        _unsafeWindow.GLOBAL_JSON
      )}</table>`;
            if (_unsafeWindow.GLOBAL_JSONP_FUN !== void 0 && _unsafeWindow.GLOBAL_JSONP_FUN !== null) {
              appendHtml = `<div class="jsonp">${_unsafeWindow.GLOBAL_JSONP_FUN}(</div>${appendHtml}<div class="jsonp">)</div>`;
            }
            $("#formatContainer").append(appendHtml);
            $("#treeTable").simpleTreeTable({
              expander: "#expandAll",
              collapser: "#collapseAll"
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
          theme.init();
          btnEvent.init();
          setTimeout(() => otherEvent.init(), 1e3);
        }
      });

    })
  };
}));

System.import("./__entry.js", "./");