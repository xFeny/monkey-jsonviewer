// ==UserScript==
// @name         JSON Viewer
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @author       Feny
// @description  格式化显示 JSON 使数据看起来更加漂亮。支持 JSON 主题色切换。支持 JSON 脑图，清晰明了的查看 JSON 层级。支持通过 JSON Crack 查看 JSON。支持手动输入 JSON，HTTP 请求获取 JSON
// @license      MIT
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wvjF8bLX4ZrHZx+XNqlwnmKjH5YUyRvb6kEAd8H058d1b47XV5Ir3eoN++bagaXYrN6KOBn2FfPPx5/aEutX8a+KNWhIubhruZLSNj8u1WMcIOP4QoXOOwNS/wDBM79lDTfjh8YNe+IXj63TxRdeHfKjsE1KMTxtdSbmMmxvlAiVV2IBsUybgAyKR9ZTy6lhsM69Xovm2+iPmKmOqYjEKjT6v5WXU9e8beKrjxZpp/s/xFrfhjWIwWs9X0q42z2kmPlZo2zDcxjqYZ0eNv7obDDf/YL/AG8L745eJNc+G3xCttP0n4qeEWZZ2sVZNP8AENsu0rd2ysS0ZKPG7RMSQsisCcukWd+3x4RtfhpqGk+JNPjS0g1mV7a8iT5UM4XesgHYsofdjglQepJPxwPE1x4V/au8LePtNkeK40ma0lmdDgyorvHMhPo9uxjP+y1bUcHRxmGbS1adn1TXT0/4fcipiqmExCi3pfVdGn19f+GLni/w7ceGf2wPFXga+Vo5rW/vDbI3WWI/v4HA/wBqBg3tk+lfWX7AXia1+F/iDV9B1CRbWHXjFLayyHannpuUxk+rqy4zxlMdWAPQft7fsL33x91nQfiD4DutP0r4oeDXVrT7cWWx1y3UsTZ3LKCyAh5FEigkLLIpHzBk5vwj4JuvE2kLJfeHdY8N6lGAl5pepwBZrOT+JRIuYp0ByBNCzxPg4bIICqYyljMKot62Sa6prr6P/gBDC1MLiHJLS90+jT6ev/Dnmn/BVP8Aaw0nxv4/8P8Aw18KXK69qmk3MlxqEdiRMwuivlpbrtPLopkMnZNy5IIYLyPwa/Z8vvEmv+HtHu4/Ovr+5iS6KDcqAtukwe6om7nuEJxX0XoH7PK/bJG0vRoY5rr/AFslvbLGZf8AfcAf+PGvafgv8CbX4byNqFyI5tWmXYCoytsh6qvqx7t+A4yWiWYUsLhlRpbr72318kVHA1MTiHVqbP7kl0P/2Q==
// @homepage     https://github.com/xFeny/monkey-jsonviewer
// @match        *://*/*
// @require      https://unpkg.com/jsmind@0.8.5/es6/jsmind.js
// @require      data:application/javascript,%3Bwindow.jsmind%3DjsMind%3B
// @require      https://unpkg.com/dom-to-image@2
// @require      data:application/javascript,%3Bwindow.domtoimage%3Ddomtoimage%3B
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
// ==/UserScript==

(e=>{window.addEventListener("message",r=>{const{data:n}=r;if(!n?.addStyle)return;if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})})(` @charset "UTF-8";.monkey-jsonviewer body,.monkey-jsonviewer ul{margin:0;padding:0}.monkey-jsonviewer li::marker{content:""}.monkey-jsonviewer input:focus,.monkey-jsonviewer select:focus,.monkey-jsonviewer textarea:focus{outline:0}.monkey-jsonviewer a:hover{text-decoration:underline}.monkey-jsonviewer .jsonp{color:#93983a}.monkey-jsonviewer #jsoncrackEmbed{border:0;width:100%;height:100%}.monkey-jsonviewer .tippy-box[data-theme~=layer]{color:#fff;padding:5px;font-size:12px;line-height:20px;background-color:#2e59a7}.monkey-jsonviewer .tippy-box[data-theme~=layer] .tippy-arrow{color:#2e59a7}.monkey-jsonviewer .tippy-box[data-theme~=imagebox]{background-color:#d9d9d9}.monkey-jsonviewer .tippy-box[data-theme~=imagebox] .tippy-arrow{color:#d9d9d9}@media screen and (max-width: 640px){.monkey-jsonviewer .rightbox{right:0!important}.monkey-jsonviewer .rightbox .tools{display:none!important}}@media screen and (max-width: 400px){.monkey-jsonviewer .searchbox{display:none!important}}.monkey-jsonviewer .json-viewer-layout{top:0;left:0;z-index:10;width:100vw;height:100vh;display:flex;position:fixed;flex-direction:column}.monkey-jsonviewer .json-viewer-layout .panel{display:flex;line-height:28px;-webkit-user-select:none;user-select:none;flex-direction:column;background-color:#ececec}.monkey-jsonviewer .json-viewer-layout .tabs,.monkey-jsonviewer .json-viewer-layout .toolbar{display:flex;border-bottom:1px solid #ccc}.monkey-jsonviewer .json-viewer-layout .tabs>div,.monkey-jsonviewer .json-viewer-layout .toolbar>div{cursor:pointer;padding:0 10px;font-size:12px;transition:background-color .2s ease}.monkey-jsonviewer .json-viewer-layout .tabs>div:hover,.monkey-jsonviewer .json-viewer-layout .toolbar>div:hover{background-color:#d4d4d4}.monkey-jsonviewer .json-viewer-layout .tabs-item{border-top:3px solid #ececec}.monkey-jsonviewer .json-viewer-layout .tabs-item:hover{border-top-color:#c3c3c6}.monkey-jsonviewer .json-viewer-layout .tabs-item.active{color:#0060df;border-top-color:#0060df;background-color:#f1f1f1}.monkey-jsonviewer .json-viewer-layout .toolbar{line-height:23px}.monkey-jsonviewer .json-viewer-layout .toolbar .searchbox{padding:0;display:flex;flex-grow:1}.monkey-jsonviewer .json-viewer-layout .toolbar .searchbox:hover{background-color:transparent}.monkey-jsonviewer .json-viewer-layout .toolbar .searchbox input{flex-grow:1;border:none;outline:none;font-size:12px;padding-left:23px;border-left:1.5px solid #ccc;background-size:14px;background-repeat:no-repeat;background-position:7px center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAipJREFUWEftljuIE1EUhv8zpJB0FqugItiIdmKnnQ+wjPhq3EILRYt1JTDnDvhgUJG55zY+ELO7hRZupYWCCIK6nXYiNoqlrIUKaxes5siFBGKYSSbJTnaLTDMwl/Ofj8Pc/z+ENX5ojftjfQFYay8AuEFEU2VMRlV/A7hujGm09f+bgIj8APCtjOYdmjuZeWsewCMAZwBcYub7qwkiIjMA7gF4zMxnMwHiOK5Wq9UXAA6r6kljzLPVgLDWniCipwDeNJvNWhzHzUwA/zFJku1BEHiIPUS0PwzDD6NAOOf2qep7AJ/SNK1FUfS9Uy/zFojIXgAeYhsRbQ7D8NcwEM65Tar6E8AygBozf+zWyb2GSZIcCYLgORH9DcNw45AAf1R1Q5qmR6Moep2l0dMHrLWniegJgK/MvHsQCBH5AmCXqk4bYxbzavsakYjMArgD4B0zHyoCISJvARwEcJmZ7/aq6Qvgi0XkJoCrqrpgjDnfS9BaO09E5wDcYuZr/YALAbQgHgLwTpnrER13vcHMF/s19+eFAVoQS/7NzAeyxJ1zS6qaez7wT9hdICITgMkEJhOYTMCq6jEimmXmV90+UboRtdzQ7wZ+aW1UKpUr9Xp9pQ0yFoCuXFhW1agdt2MD8BDOOb83zgPYAWAxCILbqvqg1CzIChMRmQPgI3qFiD773Z+ZTxVJwoHTME9URI4TUV1VtwCYYeaXYwUo2mzkOB6l0dA7YRlNOzX/ATTlNjBwsoHnAAAAAElFTkSuQmCC)}.monkey-jsonviewer .json-viewer-layout .toolbar .searchbox .clear{flex:0 0 auto;align-self:center;margin:0 4px;padding:0;border:0;width:16px;height:16px;background-color:transparent;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANZJREFUOE+t0zFKg0EQhuEndbpgIVZ26eIJFK1SeQcPYKuWmlJIb6lHkJRpFFKnE2zTpBAknaUgA/+Q5SfBwGaaZWfne3dmdraj0job9Ae4wwAn+MUcn3jCotS0Aad4RW9LYj+4xkuel4ArPO9Y0RlmEZuAY3ygi/cGct6Clf4V+vhOwCNuG0EEXuAB941v1OzfkOAxbhIwwWVxYwoCEhZrCQzfFMMELHHUSjkhCchsMuwLh3sDVJfwXxOj/ihpaxOrnzEaUzVI2dmqUU5I1Wfa8Susw/4A1fw8ES1B6icAAAAASUVORK5CYII=)}.monkey-jsonviewer .json-viewer-layout .rightbox{right:200px;display:flex;font-size:12px;position:absolute}.monkey-jsonviewer .json-viewer-layout .rightbox>div{padding:0 5px;margin-top:2px}.monkey-jsonviewer .json-viewer-layout .rightbox>div span{cursor:pointer;display:inline;padding:5px 10px;border-radius:3px;transition:background-color .2s ease}.monkey-jsonviewer .json-viewer-layout .rightbox>div span:hover{background-color:#ccc}.monkey-jsonviewer .json-viewer-layout .rightbox>div span:after{content:"";width:0;height:0;right:-5px;position:relative;border-style:solid;display:inline-block;vertical-align:middle;border-width:7px 5px 0 5px;border-color:#999 transparent transparent transparent;transform:rotate(0);transition:transform .3s ease}.monkey-jsonviewer .json-viewer-layout .rightbox>div span.active:after{transform:rotate(180deg)}.monkey-jsonviewer .json-viewer-layout .rightbox>div ul{color:#333;cursor:pointer;text-align:center;border-radius:3px}.monkey-jsonviewer .json-viewer-layout .rightbox>div ul li{font-size:12px;padding:5px 20px;background-color:#dfdfdf;transition:background-color .2s ease}.monkey-jsonviewer .json-viewer-layout .rightbox>div ul li:hover{border-radius:3px;background-color:#ccc}.monkey-jsonviewer .json-viewer-layout .rightbox>div ul li.active:before{left:15px;content:"\u221A";display:inline;position:absolute}.monkey-jsonviewer .json-viewer-layout .rightbox>div .tippy-box{background-color:#dfdfdf!important}.monkey-jsonviewer .json-viewer-layout .rightbox>div .tippy-box .tippy-content{padding:5px}.monkey-jsonviewer .json-viewer-layout .rightbox>div .tippy-box .tippy-arrow{color:#dfdfdf!important}.monkey-jsonviewer .json-viewer-layout .container{flex-grow:1;overflow:auto;line-height:1.4;font-size:13.5px;font-family:monospace}.monkey-jsonviewer .json-viewer-layout .container>div{display:none}.monkey-jsonviewer .json-viewer-layout .container>div.active{display:block}.monkey-jsonviewer .json-viewer-layout .container #formatBox{padding:5px 8px}.monkey-jsonviewer .json-viewer-layout .container #rawTextBox{font-size:13px;padding:5px 8px}.monkey-jsonviewer .json-viewer-layout .container #rawTextBox pre{margin:0;padding:0;white-space:pre-wrap;overflow-wrap:break-word}.monkey-jsonviewer .json-viewer-layout #mindBox{width:100vw;height:calc(100vh - 57px)}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode{display:flex;align-items:center;padding:0 7px 0 22px;color:#475872!important;box-shadow:none!important;background-color:transparent!important}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode.root{padding:0;color:transparent!important}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode:before{content:"";top:50%!important;margin-top:1px;position:absolute;border-radius:50%;transform:translateY(-50%);background-color:#8149bf80}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode.root:before{left:50%;width:18px;height:18px;transform:translate(-18px,-50%)}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode:hover{text-shadow:0px 0px 1px currentColor}.monkey-jsonviewer .json-viewer-layout #mindBox jmnode:not(.root):before{left:0;width:15px;height:15px}.monkey-jsonviewer .json-viewer-layout #mindBox jmexpander{margin-top:1px;line-height:9px}.monkey-jsonviewer .json-viewer-layout #mindBox .datatype{opacity:.6;font-size:12px;margin-top:2px;padding-left:5px}.monkey-jsonviewer .httpRequest{padding:30px 20px;width:700px}.monkey-jsonviewer .httpRequest>div{display:flex;height:35px;margin-bottom:20px}.monkey-jsonviewer .httpRequest input,.monkey-jsonviewer .httpRequest select{border-radius:0;padding-left:10px;border:1px solid #ccc}.monkey-jsonviewer .httpRequest input{flex-grow:1}.monkey-jsonviewer .httpRequest input[name=url],.monkey-jsonviewer .httpRequest input:first-child,.monkey-jsonviewer .httpRequest select{border-right:none}.monkey-jsonviewer .httpRequest button{cursor:pointer;padding:0 15px;border:1px solid #ccc}.monkey-jsonviewer .httpRequest button:active{background-color:#cfcfcf}.monkey-jsonviewer .dark-theme .json-viewer-layout li,.monkey-jsonviewer .dark-theme .json-viewer-layout pre,.monkey-jsonviewer .dark-theme .json-viewer-layout td:first-child,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout li,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout pre,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout td:first-child{color:#ccc}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel{color:#c4c4c4;background-color:#333}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel>div,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel>div{border-bottom-color:#464646}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel .tabs-item:hover,.monkey-jsonviewer .dark-theme .json-viewer-layout .panel .toolbar-item:hover,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel .tabs-item:hover,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel .toolbar-item:hover{background-color:#464646}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel .tabs-item,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel .tabs-item{border-top-color:#333}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel .tabs-item:hover,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel .tabs-item:hover{border-top-color:#c3c3c6}.monkey-jsonviewer .dark-theme .json-viewer-layout .panel .tabs-item.active,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .panel .tabs-item.active{color:#c4c4c4;border-top-color:#64b7ff;background-color:#464646}.monkey-jsonviewer .dark-theme .json-viewer-layout .searchbox input,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .searchbox input{color:#ccc;background-color:#464646;border-left-color:#333}.monkey-jsonviewer .dark-theme .json-viewer-layout .searchbox .clear,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .searchbox .clear{filter:invert(.8)}.monkey-jsonviewer .dark-theme .json-viewer-layout .rightbox>div span:hover,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .rightbox>div span:hover{background-color:#464646}.monkey-jsonviewer .dark-theme .json-viewer-layout .rightbox .tippy-box,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .rightbox .tippy-box{background-color:#4e4e4e!important}.monkey-jsonviewer .dark-theme .json-viewer-layout .rightbox .tippy-box .tippy-arrow,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .rightbox .tippy-box .tippy-arrow{color:#4e4e4e!important}.monkey-jsonviewer .dark-theme .json-viewer-layout .rightbox .tippy-box li,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .rightbox .tippy-box li{background-color:#4e4e4e!important}.monkey-jsonviewer .dark-theme .json-viewer-layout .rightbox .tippy-box li:hover,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .rightbox .tippy-box li:hover{background-color:#464646!important}.monkey-jsonviewer .dark-theme .json-viewer-layout .jsonp,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout .jsonp{color:#f1d700}.monkey-jsonviewer .dark-theme .json-viewer-layout jmnode,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout jmnode{filter:brightness(2)}.monkey-jsonviewer .dark-theme .json-viewer-layout jmexpander,.monkey-jsonviewer .dark-plus-theme .json-viewer-layout jmexpander{background-color:#dfdfdf}.js-mind-child-node{width:300px;height:300px;margin:10px;overflow-y:scroll;position:relative;padding:5px 20px;background-color:#f8f9fa}.js-mind-child-node div{color:#475872;line-height:25px}.js-mind-copy{top:5px;right:10px;width:20px;height:20px;cursor:pointer;position:absolute;background-size:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYRJREFUWEftlzFOw0AQRefbF+EMVJFA1kzcUNGRW8ABkFBASBQgUZAiLSUiHb29W1DTQUFFzxFQvGglO8JW1uuElQIGl8545/n/0eQbtOELG+5PNYA8z28AHIaAMsZMhsPhke+sBYDW+mE+nz9FUaR9D3X5vSgKjuN4m5n32+oXAEopQ0QiIkEAlFJMREpEWm3uP0BD/ndjzAzArFLaq0Appdf2pnWVBdbWLw9vEdEYwJSZL+39VoA8z3cAPHq7Ez3HcTxKkuSlqnXNQJZlp1EU7YnIwAvQobGzxAXQvO+1YF2I/gBYz7qokKZprS6YAhsH6PL2y2qCKfC3AbTWB8aY+y4qABgx88y3iFbeA99dxc1/w5UBurz9/xD2Q4EqEzZX6rozYDfoskzYNoS7RHRORDbLhbhstjwRkVqecAI4fFREdBYqqNoevw7gCsAHMx+H8MSe4YxkDgsGAC6KorgD8BoAogql18w8qWVC1+GlZ+NAw/lWztRt1e9nfZwGkHjlIz4Bw1VmMCtaHCkAAAAASUVORK5CYII=)}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.monkey-js-css-beautify body{padding-top:20px;padding-left:5px}.monkey-js-css-beautify body .beautify_checkbox{top:0;left:0;z-index:999;width:100vw;display:flex;position:fixed;padding:5px 10px;-webkit-user-select:none;user-select:none;align-items:center;background-color:#f3f3f3;border-bottom:1px solid #ccc}.monkey-js-css-beautify body .beautify_checkbox label{font-size:13px}.monkey-js-css-beautify body .beautify_checkbox input[type=checkbox]{top:1.5px;width:14px;height:14px;margin-right:5px;position:relative}.format-container{flex-grow:1}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#fff;color:#000}.xml .hljs-meta{color:silver}.hljs-comment,.hljs-quote{color:#007400}.hljs-attribute,.hljs-keyword,.hljs-literal,.hljs-name,.hljs-selector-tag,.hljs-tag{color:#aa0d91}.hljs-template-variable,.hljs-variable{color:#3f6e74}.hljs-code,.hljs-meta .hljs-string,.hljs-string{color:#c41a16}.hljs-link,.hljs-regexp{color:#0e0eff}.hljs-bullet,.hljs-number,.hljs-symbol,.hljs-title{color:#1c00cf}.hljs-meta,.hljs-section{color:#643820}.hljs-built_in,.hljs-class .hljs-title,.hljs-params,.hljs-title.class_,.hljs-type{color:#5c2699}.hljs-attr{color:#836c28}.hljs-subst{color:#000}.hljs-formula{background-color:#eee;font-style:italic}.hljs-addition{background-color:#baeeba}.hljs-deletion{background-color:#ffc8bd}.hljs-selector-class,.hljs-selector-id{color:#9b703f}.hljs-doctag,.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}div.json-formater-item{border-left:.5px dotted #d9d9d9}.json-formater-copy{width:13px;height:13px;cursor:pointer;margin-left:.15em;display:inline-block;background-size:13px;vertical-align:text-bottom;background-repeat:no-repeat;transition:background-image ease .3s;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYRJREFUWEftlzFOw0AQRefbF+EMVJFA1kzcUNGRW8ABkFBASBQgUZAiLSUiHb29W1DTQUFFzxFQvGglO8JW1uuElQIGl8545/n/0eQbtOELG+5PNYA8z28AHIaAMsZMhsPhke+sBYDW+mE+nz9FUaR9D3X5vSgKjuN4m5n32+oXAEopQ0QiIkEAlFJMREpEWm3uP0BD/ndjzAzArFLaq0Appdf2pnWVBdbWLw9vEdEYwJSZL+39VoA8z3cAPHq7Ez3HcTxKkuSlqnXNQJZlp1EU7YnIwAvQobGzxAXQvO+1YF2I/gBYz7qokKZprS6YAhsH6PL2y2qCKfC3AbTWB8aY+y4qABgx88y3iFbeA99dxc1/w5UBurz9/xD2Q4EqEzZX6rozYDfoskzYNoS7RHRORDbLhbhstjwRkVqecAI4fFREdBYqqNoevw7gCsAHMx+H8MSe4YxkDgsGAC6KorgD8BoAogql18w8qWVC1+GlZ+NAw/lWztRt1e9nfZwGkHjlIz4Bw1VmMCtaHCkAAAAASUVORK5CYII=)}.json-formater-copy.success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhZJREFUWEftlU1IFGEYx//Pu2R0kLrYwUMg7M5EHjwklNUOLoInxYMg7W6HTkEIgkLMLF6CsllDokN4Vfy4SnSqk+7sRghBFBT7IWKHQATFSxCLM09sabjjO/thLnuZ9zjPx//3/t9n3pfQ5EVN1ocP4DvgO9AwB/RMsJNYjAF4wEwz01rukeyXbwjAZEbttpmXAKhHokQ8bN4prLghzhwgkVHCzLQE8JUyMeblpFa411AAIxXshxCLAC6fFOKbZriw3jAA3VKHiLgk3uoS+UWMqKnlX9c8AwkreA0i0GM7vFu0i2svI1v7ld4M3VLuEmEBwLnjeQTsMyiaDOfeetVLZ8BIhz4CdP2w6CuxM2JqG99kTYz3oftwaE4S23Zsij3vza1Wgj8BYKSDvYBwF0khdEt9SMSzEoHvJETUvJ39UO219XBA2QHQ5iougzAsZRyEFxKBHAJONHlr41M18VLc6wgmAXoqafAHgoUYAuOZJP6Z2Il5HVfNQ1hK1NPKKAGvZBAAOiXf1wGOJcOFzVp2/u+CqpRsZNQ4/t5oVRalAkWOT/Xlf1TLrPseSKRDAw7TIhEuyS3kd2gJxM0b2d16xT1nwN1IT4U0IWiegY6yGPObg4sXYjNdX36eRrxmgMOZ6CLQE4AHGdgTjOXzdvvE48jawWnF6wI4EkmsKlfNSD77P6LHa8/8NawXzAfwHfAdaLoDvwHyYK0h/tY7mwAAAABJRU5ErkJggg==)}.json-formater-arrow{width:0;opacity:.2;display:inline-block}.json-formater-arrow:hover{opacity:.35}.json-formater-arrow:before{width:0;height:0;left:-13px;content:"";cursor:pointer;position:relative;border-style:solid;display:inline-block;vertical-align:middle;transform:rotate(90deg);border-width:5px 0 5px 8px;transition:transform .3s ease;border-color:transparent transparent transparent currentColor}.json-formater-closed .json-formater-arrow:before{transform:rotate(0)}.json-formater-placeholder{display:none;color:#ccc;cursor:pointer;font-size:12px;-webkit-user-select:none;user-select:none;margin-left:.3em}.json-formater-placeholder span{margin:0 .5em}.json-formater-placeholder span:hover{text-decoration:underline}.json-color{width:.7em;height:.7em;margin-right:.3em;display:inline-block;vertical-align:middle;border:1px solid #ccc}.json-key{cursor:pointer}.json-comma{margin-left:.15em;font-family:Courier New,monospace}.json-colon{margin:0 .3em 0 .15em}.json-object-bracket{color:#6d9331;font-weight:700}.json-array-bracket{color:#8e9331;font-weight:700}.default-theme{background-color:#fefefe}.default-theme .json-key{color:#910f93}.default-theme .json-string,.default-theme .json-string a{color:#2e7c16}.default-theme .json-bigint,.default-theme .json-number{color:#164ff1}.default-theme .json-boolean{color:#c41a16}.default-theme .json-null{color:#228fec}.light-theme{background-color:#fefefe}.light-theme .json-key{color:#0040cf}.light-theme .json-string,.light-theme .json-string a{color:#a31515}.light-theme .json-bigint,.light-theme .json-number{color:#0b7500}.light-theme .json-boolean{color:#00f}.light-theme .json-null{color:#05f}.dark-theme div.json-formater-item,.dark-plus-theme div.json-formater-item{border-left-color:#3a3d40}.dark-theme .json-colon,.dark-theme .json-comma,.dark-plus-theme .json-colon,.dark-plus-theme .json-comma{color:#ccc}.dark-theme .json-formater-arrow,.dark-plus-theme .json-formater-arrow{color:#fff;opacity:.35}.dark-theme .json-formater-arrow:hover,.dark-plus-theme .json-formater-arrow:hover{opacity:.5}.dark-theme{background-color:#252526}.dark-theme .json-object-bracket{color:#ce70d6}.dark-theme .json-array-bracket{color:#f1d700}.dark-theme .json-key{color:#9cdcfe}.dark-theme .json-string,.dark-theme .json-string a{color:#ce9178}.dark-theme .json-bigint,.dark-theme .json-number{color:#b5cea8}.dark-theme .json-boolean{color:#358cd6}.dark-theme .json-null{color:#569cd6}.dark-plus-theme{background-color:#1e1f22}.dark-plus-theme .json-object-bracket{color:#bb9667}.dark-plus-theme .json-array-bracket{color:#bbbda3}.dark-plus-theme .json-key{color:#c77dbb}.dark-plus-theme .json-string,.dark-plus-theme .json-string a{color:#6aab73}.dark-plus-theme .json-bigint,.dark-plus-theme .json-number{color:#28aab4}.dark-plus-theme .json-boolean{color:#ce8951}.dark-plus-theme .json-null{color:#c78d61}.json-tree-table{border-collapse:collapse;width:-webkit-fill-available}.json-tree-table tr.selected *{color:#fff!important;background-color:#3875d7}.json-tree-table tr:hover{background-color:#f0f9fe}.json-tree-table tr td:first-child{width:120px}.dark-theme .json-tree-table tr:hover,.dark-plus-theme .json-tree-table tr:hover{background-color:#353b48}/**
* @license BSD
* @copyright 2014-2023 hizzgdev@163.com
* 
* Project Home:
*   https://github.com/hizzgdev/jsmind/
*/.jsmind-inner{position:relative;overflow:auto;width:100%;height:100%;outline:none}.jsmind-inner{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jsmind-inner canvas{position:absolute}svg.jsmind{position:absolute;z-index:1}canvas.jsmind{position:absolute;z-index:1}jmnodes{position:absolute;z-index:2;background-color:#0000}jmnode{position:absolute;cursor:default;max-width:400px}jmexpander{position:absolute;width:11px;height:11px;display:block;overflow:hidden;line-height:12px;font-size:10px;text-align:center;border-radius:6px;border-width:1px;border-style:solid;cursor:pointer}.jmnode-overflow-wrap jmnodes{min-width:420px}.jmnode-overflow-hidden jmnode{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}jmnode{padding:10px;background-color:#fff;color:#333;border-radius:5px;box-shadow:1px 1px 1px #666;font:16px/1.125 Verdana,Arial,Helvetica,sans-serif}jmnode:hover{box-shadow:2px 2px 8px #000;background-color:#ebebeb;color:#333}jmnode.selected{background-color:#11f;color:#fff;box-shadow:2px 2px 8px #000}jmnode.root{font-size:24px}jmexpander{border-color:gray}jmexpander:hover{border-color:#000}@media screen and (max-device-width: 1024px){jmnode{padding:5px;border-radius:3px;font-size:14px}jmnode.root{font-size:21px}}jmnodes.theme-primary jmnode{background-color:#428bca;color:#fff;border-color:#357ebd}jmnodes.theme-primary jmnode:hover{background-color:#3276b1;border-color:#285e8e}jmnodes.theme-primary jmnode.selected{background-color:#f1c40f;color:#fff}jmnodes.theme-warning jmnode{background-color:#f0ad4e;border-color:#eea236;color:#fff}jmnodes.theme-warning jmnode:hover{background-color:#ed9c28;border-color:#d58512}jmnodes.theme-warning jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-danger jmnode{background-color:#d9534f;border-color:#d43f3a;color:#fff}jmnodes.theme-danger jmnode:hover{background-color:#d2322d;border-color:#ac2925}jmnodes.theme-danger jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-success jmnode{background-color:#5cb85c;border-color:#4cae4c;color:#fff}jmnodes.theme-success jmnode:hover{background-color:#47a447;border-color:#398439}jmnodes.theme-success jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-info jmnode{background-color:#5dc0de;border-color:#46b8da;color:#fff}jmnodes.theme-info jmnode:hover{background-color:#39b3d7;border-color:#269abc}jmnodes.theme-info jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-greensea jmnode{background-color:#1abc9c;color:#fff}jmnodes.theme-greensea jmnode:hover{background-color:#16a085}jmnodes.theme-greensea jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-nephrite jmnode{background-color:#2ecc71;color:#fff}jmnodes.theme-nephrite jmnode:hover{background-color:#27ae60}jmnodes.theme-nephrite jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-belizehole jmnode{background-color:#3498db;color:#fff}jmnodes.theme-belizehole jmnode:hover{background-color:#2980b9}jmnodes.theme-belizehole jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-wisteria jmnode{background-color:#9b59b6;color:#fff}jmnodes.theme-wisteria jmnode:hover{background-color:#8e44ad}jmnodes.theme-wisteria jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-asphalt jmnode{background-color:#34495e;color:#fff}jmnodes.theme-asphalt jmnode:hover{background-color:#2c3e50}jmnodes.theme-asphalt jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-orange jmnode{background-color:#f1c40f;color:#fff}jmnodes.theme-orange jmnode:hover{background-color:#f39c12}jmnodes.theme-orange jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-pumpkin jmnode{background-color:#e67e22;color:#fff}jmnodes.theme-pumpkin jmnode:hover{background-color:#d35400}jmnodes.theme-pumpkin jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-pomegranate jmnode{background-color:#e74c3c;color:#fff}jmnodes.theme-pomegranate jmnode:hover{background-color:#c0392b}jmnodes.theme-pomegranate jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-clouds jmnode{background-color:#ecf0f1;color:#333}jmnodes.theme-clouds jmnode:hover{background-color:#bdc3c7}jmnodes.theme-clouds jmnode.selected{background-color:#11f;color:#fff}jmnodes.theme-asbestos jmnode{background-color:#95a5a6;color:#fff}jmnodes.theme-asbestos jmnode:hover{background-color:#7f8c8d}jmnodes.theme-asbestos jmnode.selected{background-color:#11f;color:#fff}.scroll-top{width:48px;height:48px;z-index:999;position:fixed;right:30px;bottom:30px;display:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA39JREFUaEPtmV2ITVEUx39rJjT5KPKC5DPKK6UGZZ7Eq0whNUiKFPfcKW9mnmjm7ssLaSLygEx5xItMESnKC4V8FV4IJUkyS+fMHZ07zjl3733PvT6a+3S6Z629/r+99sfa+wgpPw1YDtxLe9/k/1eI4X5STMkSokXWNlloYjgpMZSmIxPgbxBfS8M4QK0eavT78Qw0uodrtd+wDGjAMqBcEVAQw6NaYnzeNwRAi2xBOQlMrYj6jLJTygz6iMzyyR1Ai+xCGUgMqnTmDZErgBYoIJjMXhY2S4mLeWUiNwAt0INwyEqY0iNleq1saxjlAqAB64BrToKEHVLijJNPgnHdALqPaUziOsoKRzGfaKFD+nng6FdlXj+Ay9AZq1Q5L2W2/jEA3c8sWqOSe3aCiK/A3cr/K4G2FKEbxXDZF6KuDKROXKWXFvqlxJdQmBaZzDDdKZP8thhW/RmAgKfA4qrgSq+U6UkSlAostEuJOz4Q3hnQgPXAld+CCh1pB5DogKTcSBAalhpHmw1wGtgxJuhbMczJEqIBbxLmzFUxbGg2gCYE9AVADF6jwctJDzKd73xI7DG/IQQTmCFH+OiaBT+AAyykhWcpBZv7JA4bGmaRHOV5cwBqX7mc5Qe9coyX0TK6n/m0RnVSV4bA1KuTLCi/DBTYhHCpRm+Fe8Bo/b8JmJxp71lqOwNowB7guGuqLe33iuGEpW1k5gTgVDK7qIjbZmyESU1aA1TOuA99dTn5CQulxAsbH3uAeqpOGyXVNrvEcMrGzR4gIGnjsonhYzMkhg4bx3EAm17ysGlIBh4DSzzE+LgMiGG3jaPLEApv2Q7YNFq3jcOmZg9gt/u6aH8PzEx0aGWu9PHapjFrgKimCaIDTHiQqf4pNxHW2AT8ZaMEiZdgSreUKdm25QRQgRi7nIZzI7xZcPmeNkAL5xjmVpVQx1049HUGiCAKFBH6K8GjFUP3MIW2CGJpjd4bFEPnmM54grA761tYWpteAJXgy1A6w6p09Opcu1nED7ZlAcQP/BqwGZjORAblMO9sh03czhsgLZgW6EL4JoYL0b0RTArPBfFnH6G5ZyAVYKTkGBlWQVR2bxDDgvjzvwQQXqGsDQ/sGkTXKdHzOECsB3LtjdjKMjqE/qMMjJwn5olh+98+hM6gvAqXy0aN+4Yuo/HG/weAPmC1GNrzHDbxtn4Coc0pQNdM3UAAAAAASUVORK5CYII=)} `);

System.addImportMap({ imports: {"highlight.js":"user:highlight.js","beautifier":"user:beautifier","jsmind":"user:jsmind","dom-to-image":"user:dom-to-image"} });
System.set("user:highlight.js", (()=>{const _=hljs;('default' in _)||(_.default=_);return _})());
System.set("user:beautifier", (()=>{const _=beautifier;('default' in _)||(_.default=_);return _})());
System.set("user:jsmind", (()=>{const _=jsmind;('default' in _)||(_.default=_);return _})());
System.set("user:dom-to-image", (()=>{const _=domtoimage;('default' in _)||(_.default=_);return _})());

System.register("./__entry.js", ['./__monkey.entry-nk87lZoo.js'], (function (exports, module) {
	'use strict';
	return {
		setters: [null],
		execute: (function () {



		})
	};
}));

System.register("./__monkey.entry-nk87lZoo.js", [], (function (exports, module) {
  'use strict';
  return {
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
      var commonjsGlobal = exports("d", typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {});
      function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
      }
      var jsonBigint = { exports: {} };
      var stringify = { exports: {} };
      var bignumber = { exports: {} };
      (function(module) {
        (function(globalObject) {
          var BigNumber2, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
          function clone(configObject) {
            var div, convertBase, parseNumeric, P = BigNumber3.prototype = { constructor: BigNumber3, toString: null, valueOf: null }, ONE = new BigNumber3(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              // non-breaking space
              suffix: ""
            }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
            function BigNumber3(v, b) {
              var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
              if (!(x instanceof BigNumber3)) return new BigNumber3(v, b);
              if (b == null) {
                if (v && v._isBigNumber === true) {
                  x.s = v.s;
                  if (!v.c || v.e > MAX_EXP) {
                    x.c = x.e = null;
                  } else if (v.e < MIN_EXP) {
                    x.c = [x.e = 0];
                  } else {
                    x.e = v.e;
                    x.c = v.c.slice();
                  }
                  return;
                }
                if ((isNum = typeof v == "number") && v * 0 == 0) {
                  x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                  if (v === ~~v) {
                    for (e = 0, i = v; i >= 10; i /= 10, e++) ;
                    if (e > MAX_EXP) {
                      x.c = x.e = null;
                    } else {
                      x.e = e;
                      x.c = [v];
                    }
                    return;
                  }
                  str = String(v);
                } else {
                  if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                  x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                if ((i = str.search(/e/i)) > 0) {
                  if (e < 0) e = i;
                  e += +str.slice(i + 1);
                  str = str.substring(0, i);
                } else if (e < 0) {
                  e = str.length;
                }
              } else {
                intCheck(b, 2, ALPHABET.length, "Base");
                if (b == 10 && alphabetHasNormalDecimalDigits) {
                  x = new BigNumber3(v);
                  return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == "number") {
                  if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                  x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                  if (BigNumber3.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                    throw Error(tooManyDigits + v);
                  }
                } else {
                  x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                for (len = str.length; i < len; i++) {
                  if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == ".") {
                      if (i > e) {
                        e = len;
                        continue;
                      }
                    } else if (!caseChanged) {
                      if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                        caseChanged = true;
                        i = -1;
                        e = 0;
                        continue;
                      }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                  }
                }
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                else e = str.length;
              }
              for (i = 0; str.charCodeAt(i) === 48; i++) ;
              for (len = str.length; str.charCodeAt(--len) === 48; ) ;
              if (str = str.slice(i, ++len)) {
                len -= i;
                if (isNum && BigNumber3.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                  throw Error(tooManyDigits + x.s * v);
                }
                if ((e = e - i - 1) > MAX_EXP) {
                  x.c = x.e = null;
                } else if (e < MIN_EXP) {
                  x.c = [x.e = 0];
                } else {
                  x.e = e;
                  x.c = [];
                  i = (e + 1) % LOG_BASE;
                  if (e < 0) i += LOG_BASE;
                  if (i < len) {
                    if (i) x.c.push(+str.slice(0, i));
                    for (len -= LOG_BASE; i < len; ) {
                      x.c.push(+str.slice(i, i += LOG_BASE));
                    }
                    i = LOG_BASE - (str = str.slice(i)).length;
                  } else {
                    i -= len;
                  }
                  for (; i--; str += "0") ;
                  x.c.push(+str);
                }
              } else {
                x.c = [x.e = 0];
              }
            }
            BigNumber3.clone = clone;
            BigNumber3.ROUND_UP = 0;
            BigNumber3.ROUND_DOWN = 1;
            BigNumber3.ROUND_CEIL = 2;
            BigNumber3.ROUND_FLOOR = 3;
            BigNumber3.ROUND_HALF_UP = 4;
            BigNumber3.ROUND_HALF_DOWN = 5;
            BigNumber3.ROUND_HALF_EVEN = 6;
            BigNumber3.ROUND_HALF_CEIL = 7;
            BigNumber3.ROUND_HALF_FLOOR = 8;
            BigNumber3.EUCLID = 9;
            BigNumber3.config = BigNumber3.set = function(obj) {
              var p, v;
              if (obj != null) {
                if (typeof obj == "object") {
                  if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    DECIMAL_PLACES = v;
                  }
                  if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                    v = obj[p];
                    intCheck(v, 0, 8, p);
                    ROUNDING_MODE = v;
                  }
                  if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                    v = obj[p];
                    if (v && v.pop) {
                      intCheck(v[0], -MAX, 0, p);
                      intCheck(v[1], 0, MAX, p);
                      TO_EXP_NEG = v[0];
                      TO_EXP_POS = v[1];
                    } else {
                      intCheck(v, -MAX, MAX, p);
                      TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                    }
                  }
                  if (obj.hasOwnProperty(p = "RANGE")) {
                    v = obj[p];
                    if (v && v.pop) {
                      intCheck(v[0], -MAX, -1, p);
                      intCheck(v[1], 1, MAX, p);
                      MIN_EXP = v[0];
                      MAX_EXP = v[1];
                    } else {
                      intCheck(v, -MAX, MAX, p);
                      if (v) {
                        MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                      } else {
                        throw Error(bignumberError + p + " cannot be zero: " + v);
                      }
                    }
                  }
                  if (obj.hasOwnProperty(p = "CRYPTO")) {
                    v = obj[p];
                    if (v === !!v) {
                      if (v) {
                        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                          CRYPTO = v;
                        } else {
                          CRYPTO = !v;
                          throw Error(bignumberError + "crypto unavailable");
                        }
                      } else {
                        CRYPTO = v;
                      }
                    } else {
                      throw Error(bignumberError + p + " not true or false: " + v);
                    }
                  }
                  if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                    v = obj[p];
                    intCheck(v, 0, 9, p);
                    MODULO_MODE = v;
                  }
                  if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    POW_PRECISION = v;
                  }
                  if (obj.hasOwnProperty(p = "FORMAT")) {
                    v = obj[p];
                    if (typeof v == "object") FORMAT = v;
                    else throw Error(bignumberError + p + " not an object: " + v);
                  }
                  if (obj.hasOwnProperty(p = "ALPHABET")) {
                    v = obj[p];
                    if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                      alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                      ALPHABET = v;
                    } else {
                      throw Error(bignumberError + p + " invalid: " + v);
                    }
                  }
                } else {
                  throw Error(bignumberError + "Object expected: " + obj);
                }
              }
              return {
                DECIMAL_PLACES,
                ROUNDING_MODE,
                EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
                RANGE: [MIN_EXP, MAX_EXP],
                CRYPTO,
                MODULO_MODE,
                POW_PRECISION,
                FORMAT,
                ALPHABET
              };
            };
            BigNumber3.isBigNumber = function(v) {
              if (!v || v._isBigNumber !== true) return false;
              if (!BigNumber3.DEBUG) return true;
              var i, n, c = v.c, e = v.e, s = v.s;
              out: if ({}.toString.call(c) == "[object Array]") {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                  if (c[0] === 0) {
                    if (e === 0 && c.length === 1) return true;
                    break out;
                  }
                  i = (e + 1) % LOG_BASE;
                  if (i < 1) i += LOG_BASE;
                  if (String(c[0]).length == i) {
                    for (i = 0; i < c.length; i++) {
                      n = c[i];
                      if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                    }
                    if (n !== 0) return true;
                  }
                }
              } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
                return true;
              }
              throw Error(bignumberError + "Invalid BigNumber: " + v);
            };
            BigNumber3.maximum = BigNumber3.max = function() {
              return maxOrMin(arguments, -1);
            };
            BigNumber3.minimum = BigNumber3.min = function() {
              return maxOrMin(arguments, 1);
            };
            BigNumber3.random = function() {
              var pow2_53 = 9007199254740992;
              var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
                return mathfloor(Math.random() * pow2_53);
              } : function() {
                return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
              };
              return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber3(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                  if (crypto.getRandomValues) {
                    a = crypto.getRandomValues(new Uint32Array(k *= 2));
                    for (; i < k; ) {
                      v = a[i] * 131072 + (a[i + 1] >>> 11);
                      if (v >= 9e15) {
                        b = crypto.getRandomValues(new Uint32Array(2));
                        a[i] = b[0];
                        a[i + 1] = b[1];
                      } else {
                        c.push(v % 1e14);
                        i += 2;
                      }
                    }
                    i = k / 2;
                  } else if (crypto.randomBytes) {
                    a = crypto.randomBytes(k *= 7);
                    for (; i < k; ) {
                      v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                      if (v >= 9e15) {
                        crypto.randomBytes(7).copy(a, i);
                      } else {
                        c.push(v % 1e14);
                        i += 7;
                      }
                    }
                    i = k / 7;
                  } else {
                    CRYPTO = false;
                    throw Error(bignumberError + "crypto unavailable");
                  }
                }
                if (!CRYPTO) {
                  for (; i < k; ) {
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                  }
                }
                k = c[--i];
                dp %= LOG_BASE;
                if (k && dp) {
                  v = POWS_TEN[LOG_BASE - dp];
                  c[i] = mathfloor(k / v) * v;
                }
                for (; c[i] === 0; c.pop(), i--) ;
                if (i < 0) {
                  c = [e = 0];
                } else {
                  for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) ;
                  for (i = 1, v = c[0]; v >= 10; v /= 10, i++) ;
                  if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
              };
            }();
            BigNumber3.sum = function() {
              var i = 1, args = arguments, sum = new BigNumber3(args[0]);
              for (; i < args.length; ) sum = sum.plus(args[i++]);
              return sum;
            };
            convertBase = /* @__PURE__ */ function() {
              var decimal = "0123456789";
              function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [0], arrL, i = 0, len = str.length;
                for (; i < len; ) {
                  for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) ;
                  arr[0] += alphabet.indexOf(str.charAt(i++));
                  for (j = 0; j < arr.length; j++) {
                    if (arr[j] > baseOut - 1) {
                      if (arr[j + 1] == null) arr[j + 1] = 0;
                      arr[j + 1] += arr[j] / baseOut | 0;
                      arr[j] %= baseOut;
                    }
                  }
                }
                return arr.reverse();
              }
              return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                if (i >= 0) {
                  k = POW_PRECISION;
                  POW_PRECISION = 0;
                  str = str.replace(".", "");
                  y = new BigNumber3(baseIn);
                  x = y.pow(str.length - i);
                  POW_PRECISION = k;
                  y.c = toBaseOut(
                    toFixedPoint(coeffToString(x.c), x.e, "0"),
                    10,
                    baseOut,
                    decimal
                  );
                  y.e = y.c.length;
                }
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                e = k = xc.length;
                for (; xc[--k] == 0; xc.pop()) ;
                if (!xc[0]) return alphabet.charAt(0);
                if (i < 0) {
                  --e;
                } else {
                  x.c = xc;
                  x.e = e;
                  x.s = sign;
                  x = div(x, y, dp, rm, baseOut);
                  xc = x.c;
                  r = x.r;
                  e = x.e;
                }
                d = e + dp + 1;
                i = xc[d];
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                if (d < 1 || !xc[0]) {
                  str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                } else {
                  xc.length = d;
                  if (r) {
                    for (--baseOut; ++xc[--d] > baseOut; ) {
                      xc[d] = 0;
                      if (!d) {
                        ++e;
                        xc = [1].concat(xc);
                      }
                    }
                  }
                  for (k = xc.length; !xc[--k]; ) ;
                  for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++])) ;
                  str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                return str;
              };
            }();
            div = /* @__PURE__ */ function() {
              function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for (x = x.slice(); i--; ) {
                  xlo = x[i] % SQRT_BASE;
                  xhi = x[i] / SQRT_BASE | 0;
                  m = khi * xlo + xhi * klo;
                  temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                  carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                  x[i] = temp % base;
                }
                if (carry) x = [carry].concat(x);
                return x;
              }
              function compare2(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) {
                  cmp = aL > bL ? 1 : -1;
                } else {
                  for (i = cmp = 0; i < aL; i++) {
                    if (a[i] != b[i]) {
                      cmp = a[i] > b[i] ? 1 : -1;
                      break;
                    }
                  }
                }
                return cmp;
              }
              function subtract(a, b, aL, base) {
                var i = 0;
                for (; aL--; ) {
                  a[aL] -= i;
                  i = a[aL] < b[aL] ? 1 : 0;
                  a[aL] = i * base + a[aL] - b[aL];
                }
                for (; !a[0] && a.length > 1; a.splice(0, 1)) ;
              }
              return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                if (!xc || !xc[0] || !yc || !yc[0]) {
                  return new BigNumber3(
                    // Return NaN if either NaN, or both Infinity or 0.
                    !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
                      // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                      xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                    )
                  );
                }
                q = new BigNumber3(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                  base = BASE;
                  e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                  s = s / LOG_BASE | 0;
                }
                for (i = 0; yc[i] == (xc[i] || 0); i++) ;
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                  qc.push(1);
                  more = true;
                } else {
                  xL = xc.length;
                  yL = yc.length;
                  i = 0;
                  s += 2;
                  n = mathfloor(base / (yc[0] + 1));
                  if (n > 1) {
                    yc = multiply(yc, n, base);
                    xc = multiply(xc, n, base);
                    yL = yc.length;
                    xL = xc.length;
                  }
                  xi = yL;
                  rem = xc.slice(0, yL);
                  remL = rem.length;
                  for (; remL < yL; rem[remL++] = 0) ;
                  yz = yc.slice();
                  yz = [0].concat(yz);
                  yc0 = yc[0];
                  if (yc[1] >= base / 2) yc0++;
                  do {
                    n = 0;
                    cmp = compare2(yc, rem, yL, remL);
                    if (cmp < 0) {
                      rem0 = rem[0];
                      if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                      n = mathfloor(rem0 / yc0);
                      if (n > 1) {
                        if (n >= base) n = base - 1;
                        prod = multiply(yc, n, base);
                        prodL = prod.length;
                        remL = rem.length;
                        while (compare2(prod, rem, prodL, remL) == 1) {
                          n--;
                          subtract(prod, yL < prodL ? yz : yc, prodL, base);
                          prodL = prod.length;
                          cmp = 1;
                        }
                      } else {
                        if (n == 0) {
                          cmp = n = 1;
                        }
                        prod = yc.slice();
                        prodL = prod.length;
                      }
                      if (prodL < remL) prod = [0].concat(prod);
                      subtract(rem, prod, remL, base);
                      remL = rem.length;
                      if (cmp == -1) {
                        while (compare2(yc, rem, yL, remL) < 1) {
                          n++;
                          subtract(rem, yL < remL ? yz : yc, remL, base);
                          remL = rem.length;
                        }
                      }
                    } else if (cmp === 0) {
                      n++;
                      rem = [0];
                    }
                    qc[i++] = n;
                    if (rem[0]) {
                      rem[remL++] = xc[xi] || 0;
                    } else {
                      rem = [xc[xi]];
                      remL = 1;
                    }
                  } while ((xi++ < xL || rem[0] != null) && s--);
                  more = rem[0] != null;
                  if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                  for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) ;
                  round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                } else {
                  q.e = e;
                  q.r = +more;
                }
                return q;
              };
            }();
            function format(n, i, rm, id) {
              var c0, e, ne, len, str;
              if (rm == null) rm = ROUNDING_MODE;
              else intCheck(rm, 0, 8);
              if (!n.c) return n.toString();
              c0 = n.c[0];
              ne = n.e;
              if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
              } else {
                n = round(new BigNumber3(n), i, rm);
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                  for (; len < i; str += "0", len++) ;
                  str = toExponential(str, e);
                } else {
                  i -= ne;
                  str = toFixedPoint(str, e, "0");
                  if (e + 1 > len) {
                    if (--i > 0) for (str += "."; i--; str += "0") ;
                  } else {
                    i += e - len;
                    if (i > 0) {
                      if (e + 1 == len) str += ".";
                      for (; i--; str += "0") ;
                    }
                  }
                }
              }
              return n.s < 0 && c0 ? "-" + str : str;
            }
            function maxOrMin(args, n) {
              var k, y, i = 1, x = new BigNumber3(args[0]);
              for (; i < args.length; i++) {
                y = new BigNumber3(args[i]);
                if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
                  x = y;
                }
              }
              return x;
            }
            function normalise(n, c, e) {
              var i = 1, j = c.length;
              for (; !c[--j]; c.pop()) ;
              for (j = c[0]; j >= 10; j /= 10, i++) ;
              if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
                n.c = n.e = null;
              } else if (e < MIN_EXP) {
                n.c = [n.e = 0];
              } else {
                n.e = e;
                n.c = c;
              }
              return n;
            }
            parseNumeric = /* @__PURE__ */ function() {
              var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
                if (isInfinityOrNaN.test(s)) {
                  x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                  if (!isNum) {
                    s = s.replace(basePrefix, function(m, p1, p2) {
                      base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                      return !b || b == base ? p1 : m;
                    });
                    if (b) {
                      base = b;
                      s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                    }
                    if (str != s) return new BigNumber3(s, base);
                  }
                  if (BigNumber3.DEBUG) {
                    throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                  }
                  x.s = null;
                }
                x.c = x.e = null;
              };
            }();
            function round(x, sd, rm, r) {
              var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
              if (xc) {
                out: {
                  for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) ;
                  i = sd - d;
                  if (i < 0) {
                    i += LOG_BASE;
                    j = sd;
                    n = xc[ni = 0];
                    rd = mathfloor(n / pows10[d - j - 1] % 10);
                  } else {
                    ni = mathceil((i + 1) / LOG_BASE);
                    if (ni >= xc.length) {
                      if (r) {
                        for (; xc.length <= ni; xc.push(0)) ;
                        n = rd = 0;
                        d = 1;
                        i %= LOG_BASE;
                        j = i - LOG_BASE + 1;
                      } else {
                        break out;
                      }
                    } else {
                      n = k = xc[ni];
                      for (d = 1; k >= 10; k /= 10, d++) ;
                      i %= LOG_BASE;
                      j = i - LOG_BASE + d;
                      rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                    }
                  }
                  r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                  // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                  // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                  xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                  r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                  (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                  if (sd < 1 || !xc[0]) {
                    xc.length = 0;
                    if (r) {
                      sd -= x.e + 1;
                      xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                      x.e = -sd || 0;
                    } else {
                      xc[0] = x.e = 0;
                    }
                    return x;
                  }
                  if (i == 0) {
                    xc.length = ni;
                    k = 1;
                    ni--;
                  } else {
                    xc.length = ni + 1;
                    k = pows10[LOG_BASE - i];
                    xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                  }
                  if (r) {
                    for (; ; ) {
                      if (ni == 0) {
                        for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) ;
                        j = xc[0] += k;
                        for (k = 1; j >= 10; j /= 10, k++) ;
                        if (i != k) {
                          x.e++;
                          if (xc[0] == BASE) xc[0] = 1;
                        }
                        break;
                      } else {
                        xc[ni] += k;
                        if (xc[ni] != BASE) break;
                        xc[ni--] = 0;
                        k = 1;
                      }
                    }
                  }
                  for (i = xc.length; xc[--i] === 0; xc.pop()) ;
                }
                if (x.e > MAX_EXP) {
                  x.c = x.e = null;
                } else if (x.e < MIN_EXP) {
                  x.c = [x.e = 0];
                }
              }
              return x;
            }
            function valueOf(n) {
              var str, e = n.e;
              if (e === null) return n.toString();
              str = coeffToString(n.c);
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
              return n.s < 0 ? "-" + str : str;
            }
            P.absoluteValue = P.abs = function() {
              var x = new BigNumber3(this);
              if (x.s < 0) x.s = 1;
              return x;
            };
            P.comparedTo = function(y, b) {
              return compare(this, new BigNumber3(y, b));
            };
            P.decimalPlaces = P.dp = function(dp, rm) {
              var c, n, v, x = this;
              if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber3(x), dp + x.e + 1, rm);
              }
              if (!(c = x.c)) return null;
              n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
              if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) ;
              if (n < 0) n = 0;
              return n;
            };
            P.dividedBy = P.div = function(y, b) {
              return div(this, new BigNumber3(y, b), DECIMAL_PLACES, ROUNDING_MODE);
            };
            P.dividedToIntegerBy = P.idiv = function(y, b) {
              return div(this, new BigNumber3(y, b), 0, 1);
            };
            P.exponentiatedBy = P.pow = function(n, m) {
              var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
              n = new BigNumber3(n);
              if (n.c && !n.isInteger()) {
                throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
              }
              if (m != null) m = new BigNumber3(m);
              nIsBig = n.e > 14;
              if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                y = new BigNumber3(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
                return m ? y.mod(m) : y;
              }
              nIsNeg = n.s < 0;
              if (m) {
                if (m.c ? !m.c[0] : !m.s) return new BigNumber3(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
              } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                if (x.e > -1) k = 1 / k;
                return new BigNumber3(nIsNeg ? 1 / k : k);
              } else if (POW_PRECISION) {
                k = mathceil(POW_PRECISION / LOG_BASE + 2);
              }
              if (nIsBig) {
                half = new BigNumber3(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
              } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
              }
              y = new BigNumber3(ONE);
              for (; ; ) {
                if (nIsOdd) {
                  y = y.times(x);
                  if (!y.c) break;
                  if (k) {
                    if (y.c.length > k) y.c.length = k;
                  } else if (isModExp) {
                    y = y.mod(m);
                  }
                }
                if (i) {
                  i = mathfloor(i / 2);
                  if (i === 0) break;
                  nIsOdd = i % 2;
                } else {
                  n = n.times(half);
                  round(n, n.e + 1, 1);
                  if (n.e > 14) {
                    nIsOdd = isOdd(n);
                  } else {
                    i = +valueOf(n);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                  }
                }
                x = x.times(x);
                if (k) {
                  if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) {
                  x = x.mod(m);
                }
              }
              if (isModExp) return y;
              if (nIsNeg) y = ONE.div(y);
              return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
            };
            P.integerValue = function(rm) {
              var n = new BigNumber3(this);
              if (rm == null) rm = ROUNDING_MODE;
              else intCheck(rm, 0, 8);
              return round(n, n.e + 1, rm);
            };
            P.isEqualTo = P.eq = function(y, b) {
              return compare(this, new BigNumber3(y, b)) === 0;
            };
            P.isFinite = function() {
              return !!this.c;
            };
            P.isGreaterThan = P.gt = function(y, b) {
              return compare(this, new BigNumber3(y, b)) > 0;
            };
            P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
              return (b = compare(this, new BigNumber3(y, b))) === 1 || b === 0;
            };
            P.isInteger = function() {
              return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
            };
            P.isLessThan = P.lt = function(y, b) {
              return compare(this, new BigNumber3(y, b)) < 0;
            };
            P.isLessThanOrEqualTo = P.lte = function(y, b) {
              return (b = compare(this, new BigNumber3(y, b))) === -1 || b === 0;
            };
            P.isNaN = function() {
              return !this.s;
            };
            P.isNegative = function() {
              return this.s < 0;
            };
            P.isPositive = function() {
              return this.s > 0;
            };
            P.isZero = function() {
              return !!this.c && this.c[0] == 0;
            };
            P.minus = function(y, b) {
              var i, j, t, xLTy, x = this, a = x.s;
              y = new BigNumber3(y, b);
              b = y.s;
              if (!a || !b) return new BigNumber3(NaN);
              if (a != b) {
                y.s = -b;
                return x.plus(y);
              }
              var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
              if (!xe || !ye) {
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber3(yc ? x : NaN);
                if (!xc[0] || !yc[0]) {
                  return yc[0] ? (y.s = -b, y) : new BigNumber3(xc[0] ? x : (
                    // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                    ROUNDING_MODE == 3 ? -0 : 0
                  ));
                }
              }
              xe = bitFloor(xe);
              ye = bitFloor(ye);
              xc = xc.slice();
              if (a = xe - ye) {
                if (xLTy = a < 0) {
                  a = -a;
                  t = xc;
                } else {
                  ye = xe;
                  t = yc;
                }
                t.reverse();
                for (b = a; b--; t.push(0)) ;
                t.reverse();
              } else {
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for (a = b = 0; b < j; b++) {
                  if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                  }
                }
              }
              if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
              }
              b = (j = yc.length) - (i = xc.length);
              if (b > 0) for (; b--; xc[i++] = 0) ;
              b = BASE - 1;
              for (; j > a; ) {
                if (xc[--j] < yc[j]) {
                  for (i = j; i && !xc[--i]; xc[i] = b) ;
                  --xc[i];
                  xc[j] += BASE;
                }
                xc[j] -= yc[j];
              }
              for (; xc[0] == 0; xc.splice(0, 1), --ye) ;
              if (!xc[0]) {
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [y.e = 0];
                return y;
              }
              return normalise(y, xc, ye);
            };
            P.modulo = P.mod = function(y, b) {
              var q, s, x = this;
              y = new BigNumber3(y, b);
              if (!x.c || !y.s || y.c && !y.c[0]) {
                return new BigNumber3(NaN);
              } else if (!y.c || x.c && !x.c[0]) {
                return new BigNumber3(x);
              }
              if (MODULO_MODE == 9) {
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
              } else {
                q = div(x, y, 0, MODULO_MODE);
              }
              y = x.minus(q.times(y));
              if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
              return y;
            };
            P.multipliedBy = P.times = function(y, b) {
              var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber3(y, b)).c;
              if (!xc || !yc || !xc[0] || !yc[0]) {
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                  y.c = y.e = y.s = null;
                } else {
                  y.s *= x.s;
                  if (!xc || !yc) {
                    y.c = y.e = null;
                  } else {
                    y.c = [0];
                    y.e = 0;
                  }
                }
                return y;
              }
              e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
              y.s *= x.s;
              xcL = xc.length;
              ycL = yc.length;
              if (xcL < ycL) {
                zc = xc;
                xc = yc;
                yc = zc;
                i = xcL;
                xcL = ycL;
                ycL = i;
              }
              for (i = xcL + ycL, zc = []; i--; zc.push(0)) ;
              base = BASE;
              sqrtBase = SQRT_BASE;
              for (i = ycL; --i >= 0; ) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for (k = xcL, j = i + k; j > i; ) {
                  xlo = xc[--k] % sqrtBase;
                  xhi = xc[k] / sqrtBase | 0;
                  m = yhi * xlo + xhi * ylo;
                  xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                  c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                  zc[j--] = xlo % base;
                }
                zc[j] = c;
              }
              if (c) {
                ++e;
              } else {
                zc.splice(0, 1);
              }
              return normalise(y, zc, e);
            };
            P.negated = function() {
              var x = new BigNumber3(this);
              x.s = -x.s || null;
              return x;
            };
            P.plus = function(y, b) {
              var t, x = this, a = x.s;
              y = new BigNumber3(y, b);
              b = y.s;
              if (!a || !b) return new BigNumber3(NaN);
              if (a != b) {
                y.s = -b;
                return x.minus(y);
              }
              var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
              if (!xe || !ye) {
                if (!xc || !yc) return new BigNumber3(a / 0);
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber3(xc[0] ? x : a * 0);
              }
              xe = bitFloor(xe);
              ye = bitFloor(ye);
              xc = xc.slice();
              if (a = xe - ye) {
                if (a > 0) {
                  ye = xe;
                  t = yc;
                } else {
                  a = -a;
                  t = xc;
                }
                t.reverse();
                for (; a--; t.push(0)) ;
                t.reverse();
              }
              a = xc.length;
              b = yc.length;
              if (a - b < 0) {
                t = yc;
                yc = xc;
                xc = t;
                b = a;
              }
              for (a = 0; b; ) {
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
              }
              if (a) {
                xc = [a].concat(xc);
                ++ye;
              }
              return normalise(y, xc, ye);
            };
            P.precision = P.sd = function(sd, rm) {
              var c, n, v, x = this;
              if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber3(x), sd, rm);
              }
              if (!(c = x.c)) return null;
              v = c.length - 1;
              n = v * LOG_BASE + 1;
              if (v = c[v]) {
                for (; v % 10 == 0; v /= 10, n--) ;
                for (v = c[0]; v >= 10; v /= 10, n++) ;
              }
              if (sd && x.e + 1 > n) n = x.e + 1;
              return n;
            };
            P.shiftedBy = function(k) {
              intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
              return this.times("1e" + k);
            };
            P.squareRoot = P.sqrt = function() {
              var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber3("0.5");
              if (s !== 1 || !c || !c[0]) {
                return new BigNumber3(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
              }
              s = Math.sqrt(+valueOf(x));
              if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += "0";
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) {
                  n = "5e" + e;
                } else {
                  n = s.toExponential();
                  n = n.slice(0, n.indexOf("e") + 1) + e;
                }
                r = new BigNumber3(n);
              } else {
                r = new BigNumber3(s + "");
              }
              if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                for (; ; ) {
                  t = r;
                  r = half.times(t.plus(div(x, t, dp, 1)));
                  if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                    if (r.e < e) --s;
                    n = n.slice(s - 3, s + 1);
                    if (n == "9999" || !rep && n == "4999") {
                      if (!rep) {
                        round(t, t.e + DECIMAL_PLACES + 2, 0);
                        if (t.times(t).eq(x)) {
                          r = t;
                          break;
                        }
                      }
                      dp += 4;
                      s += 4;
                      rep = 1;
                    } else {
                      if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                        round(r, r.e + DECIMAL_PLACES + 2, 1);
                        m = !r.times(r).eq(x);
                      }
                      break;
                    }
                  }
                }
              }
              return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
            };
            P.toExponential = function(dp, rm) {
              if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
              }
              return format(this, dp, rm, 1);
            };
            P.toFixed = function(dp, rm) {
              if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
              }
              return format(this, dp, rm);
            };
            P.toFormat = function(dp, rm, format2) {
              var str, x = this;
              if (format2 == null) {
                if (dp != null && rm && typeof rm == "object") {
                  format2 = rm;
                  rm = null;
                } else if (dp && typeof dp == "object") {
                  format2 = dp;
                  dp = rm = null;
                } else {
                  format2 = FORMAT;
                }
              } else if (typeof format2 != "object") {
                throw Error(bignumberError + "Argument not an object: " + format2);
              }
              str = x.toFixed(dp, rm);
              if (x.c) {
                var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) {
                  i = g1;
                  g1 = g2;
                  g2 = i;
                  len -= i;
                }
                if (g1 > 0 && len > 0) {
                  i = len % g1 || g1;
                  intPart = intDigits.substr(0, i);
                  for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
                  if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                  if (isNeg) intPart = "-" + intPart;
                }
                str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
                  new RegExp("\\d{" + g2 + "}\\B", "g"),
                  "$&" + (format2.fractionGroupSeparator || "")
                ) : fractionPart) : intPart;
              }
              return (format2.prefix || "") + str + (format2.suffix || "");
            };
            P.toFraction = function(md) {
              var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
              if (md != null) {
                n = new BigNumber3(md);
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                  throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
                }
              }
              if (!xc) return new BigNumber3(x);
              d = new BigNumber3(ONE);
              n1 = d0 = new BigNumber3(ONE);
              d1 = n0 = new BigNumber3(ONE);
              s = coeffToString(xc);
              e = d.e = s.length - x.e - 1;
              d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
              md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
              exp = MAX_EXP;
              MAX_EXP = 1 / 0;
              n = new BigNumber3(s);
              n0.c[0] = 0;
              for (; ; ) {
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
              }
              d2 = div(md.minus(d0), d1, 0, 1);
              n0 = n0.plus(d2.times(n1));
              d0 = d0.plus(d2.times(d1));
              n0.s = n1.s = x.s;
              e = e * 2;
              r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
                div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
              ) < 1 ? [n1, d1] : [n0, d0];
              MAX_EXP = exp;
              return r;
            };
            P.toNumber = function() {
              return +valueOf(this);
            };
            P.toPrecision = function(sd, rm) {
              if (sd != null) intCheck(sd, 1, MAX);
              return format(this, sd, rm, 2);
            };
            P.toString = function(b) {
              var str, n = this, s = n.s, e = n.e;
              if (e === null) {
                if (s) {
                  str = "Infinity";
                  if (s < 0) str = "-" + str;
                } else {
                  str = "NaN";
                }
              } else {
                if (b == null) {
                  str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
                } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                  n = round(new BigNumber3(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                  str = toFixedPoint(coeffToString(n.c), n.e, "0");
                } else {
                  intCheck(b, 2, ALPHABET.length, "Base");
                  str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = "-" + str;
              }
              return str;
            };
            P.valueOf = P.toJSON = function() {
              return valueOf(this);
            };
            P._isBigNumber = true;
            if (configObject != null) BigNumber3.set(configObject);
            return BigNumber3;
          }
          function bitFloor(n) {
            var i = n | 0;
            return n > 0 || n === i ? i : i - 1;
          }
          function coeffToString(a) {
            var s, z, i = 1, j = a.length, r = a[0] + "";
            for (; i < j; ) {
              s = a[i++] + "";
              z = LOG_BASE - s.length;
              for (; z--; s = "0" + s) ;
              r += s;
            }
            for (j = r.length; r.charCodeAt(--j) === 48; ) ;
            return r.slice(0, j + 1 || 1);
          }
          function compare(x, y) {
            var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
            if (!i || !j) return null;
            a = xc && !xc[0];
            b = yc && !yc[0];
            if (a || b) return a ? b ? 0 : -j : i;
            if (i != j) return i;
            a = i < 0;
            b = k == l;
            if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
            if (!b) return k > l ^ a ? 1 : -1;
            j = (k = xc.length) < (l = yc.length) ? k : l;
            for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
            return k == l ? 0 : k > l ^ a ? 1 : -1;
          }
          function intCheck(n, min, max, name) {
            if (n < min || n > max || n !== mathfloor(n)) {
              throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
            }
          }
          function isOdd(n) {
            var k = n.c.length - 1;
            return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
          }
          function toExponential(str, e) {
            return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
          }
          function toFixedPoint(str, e, z) {
            var len, zs;
            if (e < 0) {
              for (zs = z + "."; ++e; zs += z) ;
              str = zs + str;
            } else {
              len = str.length;
              if (++e > len) {
                for (zs = z, e -= len; --e; zs += z) ;
                str += zs;
              } else if (e < len) {
                str = str.slice(0, e) + "." + str.slice(e);
              }
            }
            return str;
          }
          BigNumber2 = clone();
          BigNumber2["default"] = BigNumber2.BigNumber = BigNumber2;
          if (module.exports) {
            module.exports = BigNumber2;
          } else {
            if (!globalObject) {
              globalObject = typeof self != "undefined" && self ? self : window;
            }
            globalObject.BigNumber = BigNumber2;
          }
        })(commonjsGlobal);
      })(bignumber);
      var bignumberExports = bignumber.exports;
      (function(module) {
        var BigNumber2 = bignumberExports;
        var JSON2 = module.exports;
        (function() {
          var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            // table of character substitutions
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          }, rep;
          function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
              var c = meta[a];
              return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
          }
          function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber2 || BigNumber2.isBigNumber(value));
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
              value = value.toJSON(key);
            }
            if (typeof rep === "function") {
              value = rep.call(holder, key, value);
            }
            switch (typeof value) {
              case "string":
                if (isBigNumber) {
                  return value;
                } else {
                  return quote(value);
                }
              case "number":
                return isFinite(value) ? String(value) : "null";
              case "boolean":
              case "null":
              case "bigint":
                return String(value);
              case "object":
                if (!value) {
                  return "null";
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                  length = value.length;
                  for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                  }
                  v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                  gap = mind;
                  return v;
                }
                if (rep && typeof rep === "object") {
                  length = rep.length;
                  for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                      k = rep[i];
                      v = str(k, value);
                      if (v) {
                        partial.push(quote(k) + (gap ? ": " : ":") + v);
                      }
                    }
                  }
                } else {
                  Object.keys(value).forEach(function(k2) {
                    var v2 = str(k2, value);
                    if (v2) {
                      partial.push(quote(k2) + (gap ? ": " : ":") + v2);
                    }
                  });
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
            }
          }
          if (typeof JSON2.stringify !== "function") {
            JSON2.stringify = function(value, replacer, space) {
              var i;
              gap = "";
              indent = "";
              if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                  indent += " ";
                }
              } else if (typeof space === "string") {
                indent = space;
              }
              rep = replacer;
              if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
              }
              return str("", { "": value });
            };
          }
        })();
      })(stringify);
      var stringifyExports = stringify.exports;
      var BigNumber = null;
      const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
      const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
      var json_parse$1 = function(options) {
        var _options = {
          strict: false,
          // not being strict means do not generate syntax errors for "duplicate key"
          storeAsString: false,
          // toggles whether the values should be stored as BigNumber (default) or a string
          alwaysParseAsBig: false,
          // toggles whether all numbers should be Big
          useNativeBigInt: false,
          // toggles whether to use native BigInt instead of bignumber.js
          protoAction: "error",
          constructorAction: "error"
        };
        if (options !== void 0 && options !== null) {
          if (options.strict === true) {
            _options.strict = true;
          }
          if (options.storeAsString === true) {
            _options.storeAsString = true;
          }
          _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
          _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
          if (typeof options.constructorAction !== "undefined") {
            if (options.constructorAction === "error" || options.constructorAction === "ignore" || options.constructorAction === "preserve") {
              _options.constructorAction = options.constructorAction;
            } else {
              throw new Error(
                `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
              );
            }
          }
          if (typeof options.protoAction !== "undefined") {
            if (options.protoAction === "error" || options.protoAction === "ignore" || options.protoAction === "preserve") {
              _options.protoAction = options.protoAction;
            } else {
              throw new Error(
                `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
              );
            }
          }
        }
        var at, ch, escapee = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "	"
        }, text, error = function(m) {
          throw {
            name: "SyntaxError",
            message: m,
            at,
            text
          };
        }, next = function(c) {
          if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
          }
          ch = text.charAt(at);
          at += 1;
          return ch;
        }, number = function() {
          var number2, string2 = "";
          if (ch === "-") {
            string2 = "-";
            next("-");
          }
          while (ch >= "0" && ch <= "9") {
            string2 += ch;
            next();
          }
          if (ch === ".") {
            string2 += ".";
            while (next() && ch >= "0" && ch <= "9") {
              string2 += ch;
            }
          }
          if (ch === "e" || ch === "E") {
            string2 += ch;
            next();
            if (ch === "-" || ch === "+") {
              string2 += ch;
              next();
            }
            while (ch >= "0" && ch <= "9") {
              string2 += ch;
              next();
            }
          }
          number2 = +string2;
          if (!isFinite(number2)) {
            error("Bad number");
          } else {
            if (BigNumber == null) BigNumber = bignumberExports;
            if (string2.length > 15)
              return _options.storeAsString ? string2 : _options.useNativeBigInt ? BigInt(string2) : new BigNumber(string2);
            else
              return !_options.alwaysParseAsBig ? number2 : _options.useNativeBigInt ? BigInt(number2) : new BigNumber(number2);
          }
        }, string = function() {
          var hex, i, string2 = "", uffff;
          if (ch === '"') {
            var startAt = at;
            while (next()) {
              if (ch === '"') {
                if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
                next();
                return string2;
              }
              if (ch === "\\") {
                if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
                next();
                if (ch === "u") {
                  uffff = 0;
                  for (i = 0; i < 4; i += 1) {
                    hex = parseInt(next(), 16);
                    if (!isFinite(hex)) {
                      break;
                    }
                    uffff = uffff * 16 + hex;
                  }
                  string2 += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                  string2 += escapee[ch];
                } else {
                  break;
                }
                startAt = at;
              }
            }
          }
          error("Bad string");
        }, white = function() {
          while (ch && ch <= " ") {
            next();
          }
        }, word = function() {
          switch (ch) {
            case "t":
              next("t");
              next("r");
              next("u");
              next("e");
              return true;
            case "f":
              next("f");
              next("a");
              next("l");
              next("s");
              next("e");
              return false;
            case "n":
              next("n");
              next("u");
              next("l");
              next("l");
              return null;
          }
          error("Unexpected '" + ch + "'");
        }, value, array = function() {
          var array2 = [];
          if (ch === "[") {
            next("[");
            white();
            if (ch === "]") {
              next("]");
              return array2;
            }
            while (ch) {
              array2.push(value());
              white();
              if (ch === "]") {
                next("]");
                return array2;
              }
              next(",");
              white();
            }
          }
          error("Bad array");
        }, object = function() {
          var key, object2 = /* @__PURE__ */ Object.create(null);
          if (ch === "{") {
            next("{");
            white();
            if (ch === "}") {
              next("}");
              return object2;
            }
            while (ch) {
              key = string();
              white();
              next(":");
              if (_options.strict === true && Object.hasOwnProperty.call(object2, key)) {
                error('Duplicate key "' + key + '"');
              }
              if (suspectProtoRx.test(key) === true) {
                if (_options.protoAction === "error") {
                  error("Object contains forbidden prototype property");
                } else if (_options.protoAction === "ignore") {
                  value();
                } else {
                  object2[key] = value();
                }
              } else if (suspectConstructorRx.test(key) === true) {
                if (_options.constructorAction === "error") {
                  error("Object contains forbidden constructor property");
                } else if (_options.constructorAction === "ignore") {
                  value();
                } else {
                  object2[key] = value();
                }
              } else {
                object2[key] = value();
              }
              white();
              if (ch === "}") {
                next("}");
                return object2;
              }
              next(",");
              white();
            }
          }
          error("Bad object");
        };
        value = function() {
          white();
          switch (ch) {
            case "{":
              return object();
            case "[":
              return array();
            case '"':
              return string();
            case "-":
              return number();
            default:
              return ch >= "0" && ch <= "9" ? number() : word();
          }
        };
        return function(source, reviver) {
          var result;
          text = source + "";
          at = 0;
          ch = " ";
          result = value();
          white();
          if (ch) {
            error("Syntax error");
          }
          return typeof reviver === "function" ? function walk(holder, key) {
            var v, value2 = holder[key];
            if (value2 && typeof value2 === "object") {
              Object.keys(value2).forEach(function(k) {
                v = walk(value2, k);
                if (v !== void 0) {
                  value2[k] = v;
                } else {
                  delete value2[k];
                }
              });
            }
            return reviver.call(holder, key, value2);
          }({ "": result }, "") : result;
        };
      };
      var parse = json_parse$1;
      var json_stringify = stringifyExports.stringify;
      var json_parse = parse;
      jsonBigint.exports = function(options) {
        return {
          parse: json_parse(options),
          stringify: json_stringify
        };
      };
      jsonBigint.exports.parse = json_parse();
      jsonBigint.exports.stringify = json_stringify;
      var jsonBigintExports = jsonBigint.exports;
      const JSONbig = /* @__PURE__ */ getDefaultExportFromCjs(jsonBigintExports);
      var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
      var _GM_getValue = exports("b", /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)());
      var _GM_openInTab = /* @__PURE__ */ (() => typeof GM_openInTab != "undefined" ? GM_openInTab : void 0)();
      var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
      var _GM_setClipboard = exports("c", /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)());
      var _GM_setValue = exports("_", /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)());
      var _unsafeWindow = exports("a", /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)());
      const JSON = JSONbig({ useNativeBigInt: true });
      NodeList.prototype.filter = Array.prototype.filter;
      NodeList.prototype.some = Array.prototype.some;
      NodeList.prototype.map = Array.prototype.map;
      function getDefaultDisplay(ele) {
        let temp, display = ele.defaultDisplay;
        const doc = ele.ownerDocument, nodeName = ele.nodeName;
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = getComputedStyle(temp).display;
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        ele.defaultDisplay = display;
        return display;
      }
      const Utils = exports("U", {
        isImg(str) {
          const regexp = /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
          return regexp.test(str);
        },
        isJSON(str) {
          try {
            JSON.parse(str);
            return true;
          } catch (e) {
            console.log("is not json");
            return false;
          }
        },
        parse(text, reviver) {
          return JSON.parse(text, reviver);
        },
        stringify(value, replacer, space) {
          return JSON.stringify(value, replacer, space);
        },
        getType(v) {
          return Object.prototype.toString.call(v).match(/\s(.+)]/)[1].toLowerCase();
        },
        getPrototype(val) {
          return Object.prototype.toString.call(val).match(/\s(.+)]/)[1];
        },
        findMaxKeysObject(arr) {
          let maxKeysCount = 0;
          let maxKeysObject;
          for (const obj of arr) {
            const keysCount = Object.keys(obj).length;
            if (keysCount > maxKeysCount) {
              maxKeysCount = keysCount;
              maxKeysObject = obj;
            }
          }
          return maxKeysObject;
        },
        randomColor: (opacity) => {
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        },
        downloadText(content, filename) {
          const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          link.click();
          URL.revokeObjectURL(url);
        },
        matchJsonp(rawText) {
          const tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
          if (tokens && tokens[1] && tokens[2]) {
            return {
              rawText: tokens[2],
              jsonpFun: tokens[1]
            };
          }
          return {
            rawText,
            jsonpFun: null
          };
        },
        debounce(fn, delay = 300) {
          let timer;
          return function() {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, arguments), delay);
          };
        },
        setClipboard(text) {
          if (_GM_setClipboard) {
            _GM_setClipboard(text);
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
          } else {
            let textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "absolute";
            textArea.style.opacity = 0;
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            textArea.remove();
          }
        },
        addEvent(eventType, selector, callback) {
          const types = eventType.split(" ");
          types.forEach((type) => {
            function handler(event) {
              let target = event.target;
              if (!target.matches) return;
              while (!target.matches(selector)) {
                target = target.parentNode;
                if (!target || !target.matches) return;
              }
              Object.defineProperty(event, "currentTarget", {
                configurable: true,
                get() {
                  return target;
                }
              });
              const returnValue = callback.call(target, event);
              if (returnValue === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              event.stopImmediatePropagation();
            }
            document.addEventListener(type, handler, true);
          });
        },
        isVisible(ele) {
          return !!(ele.offsetWidth || ele.offsetHeight || ele.getClientRects().length);
        },
        createElement(name, attrs) {
          const element = document.createElement(name);
          if (attrs) this.attr(element, attrs);
          return element;
        },
        attr(ele, attrs, value) {
          if (!ele) return;
          if (typeof attrs === "object") {
            for (const name in attrs) ele.setAttribute(name, attrs[name]);
            return;
          }
          if (value === void 0) return ele.getAttribute(attrs);
          if (value === false || value === null) return ele.removeAttribute(attrs);
          ele.setAttribute(attrs, value);
        },
        query(selector, context) {
          const ctx = context || document;
          if (selector instanceof HTMLElement) return selector;
          return ctx.querySelector(selector);
        },
        queryAll(selector, context) {
          const ctx = context || document;
          if (selector instanceof HTMLElement) {
            return new NodeList(selector);
          }
          if (selector instanceof NodeList) {
            return selector;
          }
          return ctx.querySelectorAll(selector);
        },
        addClass(ele, className) {
          if (!ele) return;
          if (ele instanceof HTMLElement) {
            return ele.classList.add(className);
          }
          if (ele instanceof NodeList || ele instanceof Array) {
            ele.forEach((el) => this.addClass(el, className));
          }
        },
        removeClass(ele, className) {
          if (!ele) return;
          if (ele instanceof HTMLElement) {
            const classList = ele.classList;
            if (className === void 0) {
              while (classList.length > 0) {
                classList.remove(classList.item(0));
              }
              return;
            }
            return classList.remove(className);
          }
          if (ele instanceof NodeList || ele instanceof Array) {
            ele.forEach((el) => this.removeClass(el, className));
          }
        },
        toggleClass(ele, className) {
          if (!ele) return;
          this.hasClass(ele, className) ? this.removeClass(ele, className) : this.addClass(ele, className);
        },
        hasClass(ele, className) {
          if (!ele) return false;
          if (ele instanceof HTMLElement) {
            return ele.classList.contains(className);
          }
          if (ele instanceof NodeList) {
            return ele.some((el) => this.hasClass(el, className));
          }
        },
        show(ele) {
          const style = ele.style;
          const display = getComputedStyle(ele).display;
          if (style.display === "none") style.display = "";
          if (style.display === "" && display === "none") {
            style.display = getDefaultDisplay(ele);
          }
        },
        hide(ele) {
          if (ele.defaultDisplay === void 0) {
            const computedDisplay = getComputedStyle(ele).display;
            if (!Object.is(computedDisplay, "none")) {
              ele.defaultDisplay = computedDisplay;
            }
          }
          ele.style.display = "none";
        }
      });
      const URL$1 = exports("e", {
        JSON_CRACK_WIDGET: "https://jsoncrack.feny.ink/widget",
        EXAMPLE_JSON: "https://fetch-api.feny.ink/example.json",
        ONLINE_REQUEST: "https://fetch-api.feny.ink/httpRequest",
        LAYUI_JS: "https://unpkg.com/layui@2.7.6/dist/layui.js"
      });
      const layout = `
<template data-for="viewFormater">
    <div class="toolbar-item btn" id="saveJson">保存</div>
    <div class="toolbar-item btn" id="copyJson">复制</div>
    <div class="toolbar-item btn" id="sort">排序</div>
    <div class="toolbar-item btn" id="collapseAll">全部折叠</div>
    <div class="toolbar-item btn" id="expandAll">全部展开</div>
    <div class="searchbox">
        <input type="text" placeholder="JSON 过滤"/>
        <button class="clear" hidden></button>
    </div>
</template>
<template data-for="viewMind">
    <div class="toolbar-item btn" id="saveJson">保存</div>
    <div class="toolbar-item btn" id="collapseAll">全部折叠</div>
    <div class="toolbar-item btn" id="expandAll">全部展开</div>
    <div class="toolbar-item btn" id="jsoncrack">JSON Crack</div>
</template>
<template data-for="viewRawText">
    <div class="toolbar-item btn" id="saveJson">保存</div>
    <div class="toolbar-item btn" id="copyJson">复制</div>
    <div class="toolbar-item btn" id="beautify">美化输出</div>
</template>
<div class="json-viewer-layout">
    <div class="panel">
        <div class="tabs">
            <div class="tabs-item btn active" id="viewFormater">JSON 格式化</div>
            <div class="tabs-item btn" id="viewMind">JSON 脑图</div>
            <div class="tabs-item btn" id="viewRawText">原始数据</div>
        </div>
        <div class="toolbar"></div>
        <div class="rightbox">
            <div class="style">
                <span>风格</span>
                <template data-type="style">
                    <ul>
                        <li data-type="style" data-value="default">默认</li>
                        <li data-type="style" data-value="table">表格</li>
                    </ul>
                </template>
            </div>
            <div class="theme">
                <span>主题</span>
                <template data-type="theme">
                    <ul>
                        <li data-type="theme" data-value="default">默认</li>
                        <li data-type="theme" data-value="light">浅色</li>
                        <li data-type="theme" data-value="dark">暗黑</li>
                        <li data-type="theme" data-value="dark-plus">暗黑+</li>
                    </ul>
                </template>
            </div>
            <div class="tools">
                <span>工具</span>
                <template data-type="tools">
                    <ul>
                        <li data-type="tools" data-value="inputJson">JSON 输入</li>
                        <li data-type="tools" data-value="fetchApi">HTTP 请求</li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="active" data-for="viewFormater" id="formatBox"></div>
        <div data-for="viewMind" id="mindBox"></div>
        <div data-for="viewRawText"  id="rawTextBox">
            <pre></pre>
        </div>
    </div>
</div>`;
      const { EXAMPLE_JSON, LAYUI_JS } = URL$1;
      (function() {
        const openInTab = () => _GM_openInTab(EXAMPLE_JSON);
        _GM_registerMenuCommand("测试JSON( Alt + j )", openInTab);
        window.addEventListener("keydown", function(event) {
          const { key, altKey } = event;
          if (altKey && key.toLowerCase() === "j") openInTab();
        });
        const innerText = document.body.innerText;
        const { rawText, jsonpFun } = Utils.matchJsonp(innerText);
        _unsafeWindow.RAW_TEXT = rawText;
        _unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
        if (!Utils.isJSON(_unsafeWindow.RAW_TEXT)) {
          __vitePreload(() => module.import('./index-B4FGc6_W-B75oCiSJ.js'), void 0 );
          return;
        }
        Utils.hide(Utils.query("pre"));
        Utils.addClass(Utils.query("html"), "monkey-jsonviewer");
        window.postMessage({ addStyle: true });
        setTimeout(() => {
          const meta = Utils.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          });
          document.head.appendChild(meta);
          const script = Utils.createElement("script", {
            src: LAYUI_JS,
            type: "text/javascript"
          });
          document.head.appendChild(script);
          _GM_addStyle(`
      jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
      jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `);
          document.body.insertAdjacentHTML("afterbegin", layout);
          _unsafeWindow.GLOBAL_JSON = Utils.parse(_unsafeWindow.RAW_TEXT);
          const temp = Utils.query('template[data-for="viewFormater"]');
          Utils.query(".toolbar").innerHTML = temp.innerHTML;
          __vitePreload(() => module.import('./index-Cnk1sPgX-slE5496n.js'), void 0 ).then(() => {
            __vitePreload(() => module.import('./index-Cpmiif0F-Dv28Yz_U.js'), void 0 );
            __vitePreload(() => module.import('./index-BUdlPZfJ-HmuETNUs.js'), void 0 );
          });
        });
      })();

    })
  };
}));

System.register("./index-B4FGc6_W-B75oCiSJ.js", ['highlight.js', 'beautifier', './__monkey.entry-nk87lZoo.js'], (function (exports, module) {
  'use strict';
  var hljs, css_beautify, js_beautify, Utils;
  return {
    setters: [module => {
      hljs = module.default;
    }, module => {
      css_beautify = module.css_beautify;
      js_beautify = module.js_beautify;
    }, module => {
      Utils = module.U;
    }],
    execute: (function () {

      const layout = `
<div class="beautify_checkbox">
    <input type="checkbox" id="beautify"/>
    <label for="beautify">美化输出</label>
</div>`;
      (function() {
        const docType = [
          "application/x-javascript",
          "application/javascript",
          "text/javascript",
          "text/css"
        ];
        const contentType = document.contentType;
        if (!docType.includes(contentType)) return;
        const preElement = Utils.query("pre");
        if (!preElement) return;
        window.postMessage({ addStyle: true });
        Utils.addClass(Utils.query("html"), "monkey-js-css-beautify");
        setTimeout(() => {
          const rawText = preElement.innerText;
          document.body.insertAdjacentHTML("afterbegin", layout);
          const checkbox = Utils.query(".beautify_checkbox input");
          checkbox.addEventListener("click", function() {
            if (this.checked) {
              beautifyCode(contentType, preElement, rawText);
            } else {
              preElement.innerText = rawText;
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
        if ("css" === language) {
          const cssBeautify = css_beautify ? css_beautify : window.css_beautify;
          beautifyCode2 = cssBeautify(rawText);
          beautifyCode2 = hljs.highlight(beautifyCode2, {
            language
          }).value;
        } else {
          const jsBeautify = js_beautify ? js_beautify : window.js_beautify;
          beautifyCode2 = jsBeautify(rawText);
          beautifyCode2 = hljs.highlight(beautifyCode2, {
            language: "javascript"
          }).value;
        }
        element.innerHTML = `<code>${beautifyCode2}</code>`;
      }

    })
  };
}));

System.register("./index-Cnk1sPgX-slE5496n.js", ['./__monkey.entry-nk87lZoo.js', './tippy.esm-Ot9MORvr-DNGa7Opj.js'], (function (exports, module) {
  'use strict';
  var _GM_setValue, Utils, _unsafeWindow, _GM_getValue, _GM_setClipboard, tippy;
  return {
    setters: [module => {
      _GM_setValue = module._;
      Utils = module.U;
      _unsafeWindow = module.a;
      _GM_getValue = module.b;
      _GM_setClipboard = module.c;
    }, module => {
      tippy = module.t;
    }],
    execute: (function () {

      var __defProp = Object.defineProperty;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      const _JsonFormat = class _JsonFormat {
        constructor(options, tag, clazz) {
          __publicField(this, "DEFAULTS", {
            sort: null,
            json: null,
            style: null,
            theme: "default",
            container: null,
            expander: null,
            onExpand: null,
            collapser: null,
            onCollapse: null
          });
          this.options = Object.assign(this.DEFAULTS, options);
          if (!options.container) throw new Error("Container is required");
          if (!options.json) throw new Error("json is required");
          this.render(tag, clazz);
          this.bindEvent();
          this.setTheme(this.options.theme);
        }
        render(tag, clazz) {
          this.$container = Utils.query(this.options.container);
          this.$container.innerHTML = "";
          const box = this.createElement(tag, { class: clazz });
          this.createNode(box, this.options.json, "Root", "Root", 1);
          this.$container.appendChild(box);
        }
        setTheme(theme) {
          const classList = document.body.classList;
          classList.forEach((clas) => {
            if (clas.includes("theme")) classList.remove(clas);
          });
          classList.add(`${theme}-theme`);
        }
        keySort(json) {
          const { sort } = this.options;
          const ASC = _JsonFormat.SORT.ASC;
          if (sort == null) return json;
          if (Array.isArray(json)) return json;
          const entries = Object.entries(json);
          const asc = ([prev], [next]) => prev.localeCompare(next);
          const desc = ([prev], [next]) => next.localeCompare(prev);
          const result = Object.is(ASC, sort) ? entries.sort(asc) : entries.sort(desc);
          return Object.fromEntries(result);
        }
        sort() {
          if (this.options.sort === null) {
            this.options.sort = _JsonFormat.SORT.ASC;
            this.reload();
            return "升序";
          }
          if (this.options.sort === _JsonFormat.SORT.ASC) {
            this.options.sort = _JsonFormat.SORT.DESC;
            this.reload();
            return "降序";
          }
          if (this.options.sort === _JsonFormat.SORT.DESC) {
            this.options.sort = null;
            this.reload();
            return "排序";
          }
        }
        reload() {
          const box = this.$container.firstChild;
          box.innerHTML = null;
          this.createNode(box, this.options.json, "Root", "Root", 1);
          this.$container.appendChild(box);
          this.bindEvent();
        }
        creatValueNode(type, value) {
          const node = this.createElement("span", {
            class: `json-${type}`
          });
          node.textContent = `${value}`;
          if (type === "string") {
            value = this.escape(value);
            node.textContent = `"${value}"`;
          }
          if (this.isUrl(value)) {
            node.textContent = "";
            const a = this.createElement("a", {
              target: "_blank",
              href: value
            });
            a.textContent = `"${value}"`;
            node.appendChild(a);
          }
          if (this.isColor(value)) {
            const span = this.createElement("span", {
              class: "json-color",
              style: `background-color: ${value}`
            });
            node.prepend(span);
          }
          return node;
        }
        creatPlaceholder(json) {
          const placeholder = this.createElement("span", {
            class: "json-formater-placeholder"
          });
          const type = this.getType(json);
          const length = Object.keys(json).length;
          const span = this.createElement("span");
          span.textContent = `${length}${length > 1 ? " items" : " item"}`;
          if (Object.is(type, "object")) {
            span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
          }
          placeholder.appendChild(span);
          if (_JsonFormat.STYLE.table === this.options.style) {
            let text = document.createTextNode(Object.is(type, "object") ? "{" : "[");
            placeholder.prepend(text);
            text = document.createTextNode(Object.is(type, "object") ? "}" : "]");
            placeholder.appendChild(text);
          }
          return placeholder;
        }
        createBracket(type) {
          const node = this.createElement("span", {
            class: `json-${type}-bracket`
          });
          node.textContent = Object.is(type, "array") ? "[]" : "{}";
          return node;
        }
        bindEvent() {
          const { expander, collapser, onExpand, onCollapse } = this.options;
          if (expander) this.addEvent(`click`, expander, () => this.expandAll());
          if (collapser) this.addEvent(`click`, collapser, () => this.collapseAll());
          this.addEvent("click", ".json-formater-copy", (e) => {
            const target = e.currentTarget;
            const className = "success";
            if (!target.json || Utils.hasClass(target, className)) return;
            Utils.setClipboard(Utils.stringify(target.json, null, 2));
            Utils.addClass(target, className);
            setTimeout(() => Utils.removeClass(target, className), 1500);
          });
          this.addEvent("click", ".json-formater-placeholder", (e) => {
            const node = this.closest(e.currentTarget, ".json-formater-item");
            this.show(node);
          });
          this.addEvent("click", ".json-formater-arrow", (e) => {
            const node = this.closest(e.currentTarget, ".json-formater-item");
            if (Utils.hasClass(node, "json-formater-opened")) {
              this.hide(node);
              if (onCollapse) onCollapse(node, this);
            } else {
              this.show(node);
              if (onExpand) onExpand(node, this);
            }
          });
        }
        expandAll() {
          this.nodes().forEach((node) => this.show(node));
        }
        collapseAll() {
          this.nodes().forEach((node) => this.hide(node));
        }
        show(node) {
          Utils.removeClass(node, "json-formater-closed");
          Utils.addClass(node, "json-formater-opened");
          this.showDescs(node);
          this.showAfter(node);
        }
        showDescs(node) {
          const children = this.findChildren(node);
          if (children.length === 0) return;
          children.forEach((child) => {
            Utils.show(child);
            const isTable = Object.is(_JsonFormat.STYLE.table, this.options.style);
            const hasClass = Utils.hasClass(child, "json-formater-opened");
            if (isTable && hasClass) this.showDescs(child);
          });
        }
        showAfter(node) {
          const nodeId = node.dataset.nodeId;
          const selector = `*[data-node-id=${nodeId}] .json-formater-placeholder`;
          const desc = Utils.query(selector, node);
          if (desc) Utils.hide(desc);
        }
        hide(node) {
          Utils.removeClass(node, "json-formater-opened");
          Utils.addClass(node, "json-formater-closed");
          this.hideDescs(node);
          this.hideAfter(node);
        }
        hideDescs(node) {
          const children = this.findChildren(node);
          if (children.length === 0) return;
          children.forEach((child) => {
            Utils.hide(child);
            const isTable = Object.is(_JsonFormat.STYLE.table, this.options.style);
            if (isTable) this.hideDescs(child);
          });
        }
        hideAfter(node) {
          const id = node.dataset.nodeId;
          const selector = `*[data-node-id="${id}"] .json-formater-placeholder`;
          const desc = Utils.query(selector, node);
          if (desc) Utils.show(desc);
        }
        findChildren(node) {
          const pid = node.dataset.nodeId;
          return Utils.queryAll(`*[data-node-pid="${pid}"]`, this.$container);
        }
        findByID(id) {
          return Utils.query(`*[data-node-id="${id}"]`, this.$container);
        }
        openByID(id) {
          this.show(this.findByID(id));
        }
        closeByID(id) {
          this.hide(this.findByID(id));
        }
        nodes() {
          const arrows = Utils.queryAll(".json-formater-arrow", this.$container);
          return arrows.map((ele) => this.closest(ele, ".json-formater-item"));
        }
        createElement(name, attrs) {
          return Utils.createElement(name, attrs);
        }
        addEvent(type, selector, fn) {
          Utils.queryAll(selector).forEach((el) => el.addEventListener(type, fn));
        }
        closest(element, selector) {
          while (element) {
            if (element.matches(selector)) return element;
            element = element.parentElement;
          }
          return null;
        }
        JSONPath(path, key) {
          if (this.isNumber(key)) return `${path}[${key}]`;
          if (key.includes(".")) return `${path}["${key}"]`;
          return `${path}.${key}`;
        }
        isNumber(str) {
          return /^\d+$/.test(str);
        }
        getType(value) {
          return Object.prototype.toString.call(value).match(/\s(.+)]/)[1].toLowerCase();
        }
        isIterate(value) {
          const type = this.getType(value);
          return ["array", "object"].includes(type);
        }
        canIterate(value) {
          if (!this.isIterate(value)) return false;
          return Object.keys(value).length > 0;
        }
        isUrl(str) {
          const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
          return regexp.test(str);
        }
        escape(str) {
          return str.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        isColor(colorString) {
          const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
          const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;
          return hexCodeRegex.test(colorString) || rgbRegex.test(colorString) || rgbaRegex.test(colorString);
        }
        random() {
          let randomString = "";
          const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
          }
          return randomString;
        }
        splitArray(arr, num) {
          const result = [];
          const partSize = Math.ceil(arr.length / num);
          let start = 0;
          for (let i = 0; i < num; i++) {
            const end = Math.min(start + partSize, arr.length);
            const slice = arr.slice(start, end);
            if (slice.length !== 0) result.push(slice);
            start = end;
          }
          return result;
        }
      };
      __publicField(_JsonFormat, "STYLE", {
        table: "table",
        viewer: "viewer"
      });
      __publicField(_JsonFormat, "SORT", {
        ASC: "ASC",
        DESC: "DESC"
      });
      let JsonFormat = _JsonFormat;
      class JsonViewer extends JsonFormat {
        constructor(options) {
          options.style = JsonFormat.STYLE.viewer;
          super(options, "div", "json-view-formater");
        }
        createNode(box, json, JSONPath, pid) {
          const type = this.getType(json);
          const isIterate = this.isIterate(json);
          const canIterate = this.canIterate(json);
          if (canIterate) {
            this.depthNode(box, type, json, JSONPath, pid);
          } else if (isIterate) {
            const bracket = this.createBracket(type);
            box.appendChild(bracket);
          } else {
            const valueNode = this.creatValueNode(type, json);
            box.appendChild(valueNode);
          }
        }
        depthNode(box, type, json, path, pid) {
          json = this.keySort(json);
          const startBracket = this.startBracket(type);
          box.appendChild(startBracket);
          this.otherNode(box, json);
          let length = Object.keys(json).length;
          for (var key in json) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
              const value = json[key];
              const id = this.random();
              const canComma = --length > 0;
              const JSONPath = this.JSONPath(path, key);
              const node = this.createElement("div", {
                JSONPath,
                "data-node-id": id,
                "data-node-pid": pid,
                style: `padding-left: 20px`,
                "data-type": this.getType(value),
                class: `json-formater-item${this.canIterate(value) ? " json-formater-opened" : ""}`
              });
              this.createKeyNode(node, key, value);
              this.createNode(node, value, JSONPath, id);
              if (canComma) {
                const comma = this.createElement("span", {
                  class: "json-comma"
                });
                comma.textContent = ",";
                node.appendChild(comma);
              }
              box.appendChild(node);
            }
          }
          const endBracket = this.endBracket(type);
          box.appendChild(endBracket);
        }
        startBracket(type) {
          const span = this.createElement("span", {
            class: `json-${type}-bracket`
          });
          span.textContent = Object.is(type, "array") ? "[" : "{";
          return span;
        }
        endBracket(type) {
          const span = this.createElement("span", {
            class: `json-${type}-bracket`
          });
          span.textContent = Object.is(type, "array") ? "]" : "}";
          return span;
        }
        createKeyNode(node, key, value) {
          if (this.canIterate(value)) {
            const arrow = this.createElement("span", {
              class: "json-formater-arrow"
            });
            node.appendChild(arrow);
          }
          if (!this.isNumber(key)) {
            const span = this.createElement("span", {
              class: "json-key"
            });
            span.textContent = `"${key}"`;
            node.appendChild(span);
            const colon = this.createElement("span", {
              class: "json-colon"
            });
            colon.textContent = ":";
            node.appendChild(colon);
          }
        }
        otherNode(node, json) {
          const nodeId = node.dataset.nodeId;
          if (nodeId && nodeId !== "Root" && this.canIterate(json)) {
            const copy = this.createElement("span", {
              title: "复制",
              class: "json-formater-copy"
            });
            copy.json = json;
            node.appendChild(copy);
            const placeholder = this.creatPlaceholder(json);
            node.appendChild(placeholder);
          }
        }
      }
      class JsonToTable extends JsonFormat {
        constructor(options) {
          options.style = JsonFormat.STYLE.table;
          super(options, "table", "json-tree-table");
        }
        createNode(table, json, path, pid, depth) {
          json = this.keySort(json);
          for (const key in json) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
              let value = json[key];
              const type = this.getType(value);
              const JSONPath = this.JSONPath(path, key);
              const args = { key, value, type, depth, JSONPath, pid };
              const item = this.createItem(args);
              table.appendChild(item);
              if (this.canIterate(value)) {
                const nodeId = item.dataset.nodeId;
                this.createNode(table, value, JSONPath, nodeId, depth + 1);
              }
            }
          }
        }
        createItem(args) {
          const { key, value, type, depth, JSONPath, pid } = args;
          const id = this.random();
          const isIterate = this.isIterate(value);
          const canIterate = this.canIterate(value);
          const node = this.createElement("tr", {
            "data-type": type,
            "data-node-id": id,
            "data-node-pid": pid,
            class: `json-formater-item${this.canIterate(value) ? " json-formater-opened" : ""}`
          });
          const keyNode = this.createKeyNode(key, value, depth, JSONPath);
          node.appendChild(keyNode);
          const td = this.createElement("td");
          if (!isIterate) {
            td.appendChild(this.creatValueNode(type, value));
            node.appendChild(td);
          }
          if (isIterate && !canIterate) {
            td.appendChild(this.createBracket(type));
            node.appendChild(td);
          }
          return node;
        }
        createKeyNode(key, value, depth, JSONPath) {
          const node = this.createElement("td", {
            JSONPath,
            colspan: this.canIterate(value) ? 2 : 0,
            style: `padding-left: ${depth * 20}px`
          });
          const k = this.createElement("span", {
            class: "json-key"
          });
          k.textContent = `${key}`;
          node.appendChild(k);
          const colon = this.createElement("span", {
            class: "json-colon"
          });
          colon.textContent = ":";
          node.appendChild(colon);
          if (this.canIterate(value)) {
            const icon = this.createElement("span", {
              class: "json-formater-arrow"
            });
            node.prepend(icon);
            const copy = this.createElement("span", {
              title: "复制",
              class: "json-formater-copy"
            });
            copy.json = value;
            node.appendChild(copy);
            const placeholder = this.creatPlaceholder(value);
            node.appendChild(placeholder);
          }
          return node;
        }
        bindEvent() {
          super.bindEvent();
          this.addEvent("mousedown", "table tr", function(event) {
            const { tagName, className } = event.target;
            if (event.ctrlKey || tagName === "A" || tagName === "SPAN" && className !== "json-key") {
              return;
            }
            const filter = Utils.queryAll(".selected").filter((ele) => ele !== this);
            Utils.removeClass(filter, "selected");
            Utils.toggleClass(this, "selected");
          });
        }
      }
      class FormaterFactory {
        static getInstance(options) {
          return Object.is(JsonToTable.STYLE.table, options.style) ? new JsonToTable(options) : new JsonViewer(options);
        }
      }
      const evnet = {
        urlHover() {
          Utils.addEvent("mouseenter", "a[href]", function() {
            const href = Utils.attr(this, "href");
            if (!Utils.isImg(href)) return;
            tippy(this, {
              duration: 800,
              content: `<img style="max-width: 500px;" src="${href}" />`,
              allowHTML: true,
              theme: "imagebox"
            }).show();
          });
          return this;
        },
        tipsJsonPath() {
          Utils.addEvent("mouseenter", ".json-key", (event) => {
            const target = event.target;
            const jsonPath = this.getJsonPath(target);
            const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${jsonPath}`;
            tippy(target, {
              content,
              duration: 800,
              allowHTML: true,
              theme: "layer"
            }).show();
          });
          return this;
        },
        copyJsonPath() {
          Utils.addEvent("click", ".json-key", (event) => {
            if (!event.ctrlKey) return;
            const jsonPath = this.getJsonPath(event.target);
            _GM_setClipboard(jsonPath);
            layer.msg("复制成功", { time: 1500 });
          });
          return this;
        },
        getJsonPath(ele) {
          return Utils.attr(ele.parentElement, "JSONPath");
        },
        init() {
          this.urlHover().tipsJsonPath().copyJsonPath();
        }
      };
      const format = exports("default", {
        changeStyle(style) {
          _GM_setValue("style", style);
          this.setStyle();
          return this;
        },
        setStyle() {
          const input = Utils.query(".searchbox input");
          if (input) input.value = "";
          const clear = Utils.query(".searchbox .clear");
          Utils.attr(clear, "hidden", true);
          this.render(_unsafeWindow.GLOBAL_JSON);
          return this;
        },
        render(json) {
          const container = Utils.query("#formatBox");
          const style = _GM_getValue("style") || "default";
          const theme = _GM_getValue("theme") || "default";
          const options = { json, style, theme, container };
          _unsafeWindow.JSON_FORMATER = FormaterFactory.getInstance(options);
          if (_unsafeWindow.GLOBAL_JSONP_FUN) {
            const start = Utils.createElement("div", {
              class: "jsonp"
            });
            start.textContent = `${_unsafeWindow.GLOBAL_JSONP_FUN}(`;
            container.prepend(start);
            const end = start.cloneNode(true);
            end.textContent = ")";
            container.append(end);
          }
          return this;
        },
        filter(json, text) {
          text = text.toLowerCase();
          function match(json2, text2) {
            const newJson = Array.isArray(json2) ? new Array() : new Object();
            for (const key in json2) {
              if (Object.prototype.hasOwnProperty.call(json2, key)) {
                const value = json2[key];
                const type = Utils.getType(value);
                const _key = key.toLowerCase();
                const _value = Utils.stringify(value).toLowerCase();
                if (!_key.includes(text2) && !_value.includes(text2)) {
                  continue;
                }
                if (["array", "object"].includes(type)) {
                  const result = match(value, text2);
                  const _result = Utils.stringify(result).toLowerCase();
                  if (_key.includes(text2) || _result.includes(text2)) {
                    newJson[key] = result;
                  }
                } else {
                  newJson[key] = value;
                }
              }
            }
            return newJson;
          }
          return match(json, text);
        },
        input() {
          const that = this;
          const debounceInput = Utils.debounce(function() {
            const value = this.value;
            _unsafeWindow.FILTER_VALUE = value;
            const clear = Utils.query(".searchbox .clear");
            Utils.attr(clear, "hidden", !value);
            const newJson = that.filter(_unsafeWindow.GLOBAL_JSON, value);
            that.render(newJson);
          }, 400);
          Utils.addEvent("input", ".searchbox input", debounceInput);
          return that;
        },
        clear() {
          Utils.addEvent("click", ".searchbox .clear", () => {
            this.setStyle();
            _unsafeWindow.FILTER_VALUE = "";
          });
          return this;
        },
        init() {
          this.setStyle().input().clear();
          evnet.init();
        }
      });
      format.init();
      window.addEventListener("message", function(event) {
        const { data } = event;
        if (!data) return;
        if (data.reload) return format.setStyle();
        const { type, value } = data;
        if (type === "style") format.changeStyle(value);
      });

    })
  };
}));

System.register("./index-Cpmiif0F-Dv28Yz_U.js", ['./tippy.esm-Ot9MORvr-DNGa7Opj.js', 'jsmind', './__monkey.entry-nk87lZoo.js', 'dom-to-image'], (function (exports, module) {
  'use strict';
  var tippy, require$$0, commonjsGlobal, Utils, _unsafeWindow, _GM_setClipboard, _GM_getValue, URL$1, _GM_setValue, require$$1;
  return {
    setters: [module => {
      tippy = module.t;
    }, module => {
      require$$0 = module.default;
    }, module => {
      commonjsGlobal = module.d;
      Utils = module.U;
      _unsafeWindow = module.a;
      _GM_setClipboard = module.c;
      _GM_getValue = module.b;
      URL$1 = module.e;
      _GM_setValue = module._;
    }, module => {
      require$$1 = module.default;
    }],
    execute: (function () {

      /**
      * @license BSD-3-Clause
      * @copyright 2014-2023 hizzgdev@163.com
      *
      * Project Home:
      *   https://github.com/hizzgdev/jsmind/
      */
      (function(module, exports) {
        !function(e, t) {
          t(require$$0, require$$1);
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
        transform(json) {
          const children = [];
          if (typeof json === "object") {
            for (const key in json) {
              let val = json[key];
              const isArray = Array.isArray(val);
              const type = Utils.getPrototype(val);
              if (isArray && val.length > 0) val = Utils.findMaxKeysObject(val);
              const isObject = Object.is(Utils.getType(val), "object");
              const keys = isObject ? Object.keys(val) : null;
              children.push({
                keys,
                isArray,
                chain: key,
                id: key + "_" + Math.random(),
                topic: `${key}<span class="datatype">${type}</span>`,
                children: this.transform(val)
              });
            }
          }
          return children;
        },
        getChain(node) {
          let chain = node.data.chain;
          if (!node.parent) return chain;
          const parent = node.parent;
          const parentChain = this.getChain(parent);
          if (parent.data.isArray) return `${parentChain}[i].${chain}`;
          if (chain.includes(".")) return `${parentChain}["${chain}"]`;
          return `${parentChain}.${chain}`;
        },
        show(json) {
          let isArray = Array.isArray(json);
          if (isArray) {
            if (typeof json[0] !== "object") {
              layer.msg("无法生成脑图", { time: 1e3 });
              return this;
            }
            json = Utils.findMaxKeysObject(json);
          }
          if (!this.isFirst) return this;
          _unsafeWindow.GLOBAL_JSMIND.show({
            meta: {
              version: "1.0",
              name: "JSON脑图",
              author: "1220301855@qq.com"
            },
            format: "node_tree",
            /* 数据内容 */
            data: {
              isArray,
              id: "root",
              chain: "Root",
              topic: "Root",
              direction: "left",
              keys: Object.keys(json),
              children: this.transform(json)
            }
          });
          this.isFirst = false;
          return this;
        },
        event() {
          const that = this;
          Utils.addEvent("click mouseover", "jmnode", handler);
          function handler(event) {
            const nodeid = Utils.attr(this, "nodeid");
            const node = _unsafeWindow.GLOBAL_JSMIND.get_node(nodeid);
            const chain = that.getChain(node);
            if (event.type === "click") {
              if (event.ctrlKey) {
                _GM_setClipboard(chain);
                layer.msg("复制成功", { time: 1500 });
                return;
              }
              const keys = node.data.keys;
              if (!keys || keys.length === 0) return;
              that.popup(chain, keys);
            } else {
              const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${chain}`;
              tippy(this, {
                content,
                duration: 800,
                allowHTML: true,
                theme: "layer"
              }).show();
            }
          }
          return this;
        },
        popup(chain, keys) {
          layer.open({
            type: 1,
            move: false,
            shadeClose: true,
            title: " 节点",
            content: function() {
              const chain2 = Utils.createElement("div");
              const chainCon = Utils.createElement("div");
              chain2.appendChild(chainCon);
              const copy = Utils.createElement("div", {
                title: "复制",
                class: "js-mind-copy"
              });
              const content = Utils.createElement("div", {
                class: "js-mind-child-node"
              });
              content.appendChild(copy);
              keys.forEach((i) => {
                const child = Utils.createElement("div");
                child.textContent = i;
                content.appendChild(child);
              });
              return content.outerHTML;
            }(),
            success(layero) {
              layero.on("click", ".js-mind-copy", function() {
                _GM_setClipboard(chain + "\n\n" + keys.join("\n"));
                layer.msg("复制成功", { time: 1500 });
              });
            }
          });
        },
        init(json) {
          if (_unsafeWindow.GLOBAL_JSMIND) return;
          _unsafeWindow.GLOBAL_JSMIND = new require$$0({
            mode: "side",
            editable: false,
            container: "mindBox",
            view: {
              hmargin: 50,
              vmargin: 50,
              engine: "svg",
              draggable: true,
              support_html: false,
              line_color: "#C4C9D0"
            },
            layout: {
              vspace: 5,
              hspace: 130
            }
          });
          this.show(json).event();
        }
      };
      const $mindBox = Utils.query("#mindBox");
      const $formatBox = Utils.query("#formatBox");
      const $rawTextBox = Utils.query("#rawTextBox");
      const $rawTextPre = Utils.query("pre", $rawTextBox);
      const tabs = {
        firstFormat: true,
        isBeautify: false,
        _setRawText() {
          let rawText = _unsafeWindow.RAW_TEXT;
          if (_unsafeWindow.GLOBAL_JSONP_FUN) {
            rawText = `${_unsafeWindow.GLOBAL_JSONP_FUN}(${rawText})`;
          }
          $rawTextPre.textContent = rawText;
        },
        saveJson() {
          if (Utils.isVisible($mindBox)) return _unsafeWindow.GLOBAL_JSMIND.shoot();
          const content = $rawTextPre.textContent || _unsafeWindow.RAW_TEXT;
          const filename = (/* @__PURE__ */ new Date()).getTime() + ".json";
          Utils.downloadText(content, filename);
        },
        copyJson() {
          const content = $rawTextPre.textContent || _unsafeWindow.RAW_TEXT;
          _GM_setClipboard(content);
          layer.msg("复制成功", { time: 1500 });
        },
        sort(el) {
          const text = _unsafeWindow.JSON_FORMATER.sort();
          el.textContent = text;
        },
        collapseAll() {
          Utils.isVisible($formatBox) ? _unsafeWindow.JSON_FORMATER.collapseAll() : _unsafeWindow.GLOBAL_JSMIND.collapse_all();
        },
        expandAll() {
          var _a;
          if (Utils.isVisible($formatBox)) {
            _unsafeWindow.JSON_FORMATER.expandAll();
            return;
          }
          _unsafeWindow.GLOBAL_JSMIND.expand_all();
          _unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center((_a = _unsafeWindow.GLOBAL_JSMIND) == null ? void 0 : _a.get_root());
        },
        viewFormater() {
          const value = _unsafeWindow.FILTER_VALUE || "";
          Utils.query(".searchbox input").value = value;
          const clear = Utils.query(".searchbox .clear");
          Utils.attr(clear, "hidden", !value);
        },
        viewMind() {
          jsonMind.init(_unsafeWindow.GLOBAL_JSON);
          _unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(_unsafeWindow.GLOBAL_JSMIND.get_root());
        },
        viewRawText() {
          if (!this.firstFormat) return;
          this.firstFormat = false;
          this._setRawText();
        },
        beautify() {
          this.isBeautify = !this.isBeautify;
          if (!this.isBeautify) return this._setRawText();
          let str = Utils.stringify(_unsafeWindow.GLOBAL_JSON, null, 2);
          if (_unsafeWindow.GLOBAL_JSONP_FUN) {
            str = `${_unsafeWindow.GLOBAL_JSONP_FUN}(${str})`;
          }
          $rawTextPre.textContent = str;
        },
        jsoncrack() {
          const theme2 = (_GM_getValue("theme") || "light").replace(/-.*/, "");
          layer.closeAll();
          layer.open({
            type: 1,
            move: false,
            title: false,
            area: ["100vw", "100vh"],
            content: `<iframe id="jsoncrackEmbed" src="${URL$1.JSON_CRACK_WIDGET}"></iframe>`,
            success() {
              const jsonCrackEmbed = Utils.query("#jsoncrackEmbed");
              window == null ? void 0 : window.addEventListener("message", () => {
                var _a;
                const msg = {
                  options: { theme: theme2 },
                  json: _unsafeWindow.RAW_TEXT
                };
                (_a = jsonCrackEmbed == null ? void 0 : jsonCrackEmbed.contentWindow) == null ? void 0 : _a.postMessage(msg, "*");
              });
            }
          });
        },
        init() {
          Utils.addEvent("click", ".btn", (e) => {
            const target = e.target;
            const id = target.id;
            if (Utils.hasClass(target, "tabs-item")) {
              const clas = "active";
              Utils.removeClass(Utils.queryAll(".tabs-item"), clas);
              Utils.addClass(target, clas);
              Utils.removeClass(Utils.queryAll("div[data-for]"), clas);
              Utils.addClass(Utils.query(`div[data-for="${id}"]`), clas);
              const template = Utils.query(`template[data-for='${id}']`);
              Utils.query(".toolbar").innerHTML = template.innerHTML;
            }
            this[id](target);
          });
        }
      };
      window.addEventListener("message", function(event) {
        const { data } = event;
        if (!(data == null ? void 0 : data.reload)) return;
        $mindBox.innerHTML = "";
        jsonMind.isFirst = true;
        tabs.isBeautify = false;
        tabs.firstFormat = true;
        _unsafeWindow.GLOBAL_JSMIND = void 0;
        if (Utils.isVisible($rawTextBox)) return tabs.viewRawText();
        if (Utils.isVisible($mindBox)) return jsonMind.init(_unsafeWindow.GLOBAL_JSON);
      });
      const theme = {
        changeTheme(theme2) {
          _GM_setValue("theme", theme2);
          this.setTheme();
        },
        setTheme() {
          const theme2 = _GM_getValue("theme") || "default";
          _unsafeWindow.JSON_FORMATER.setTheme(theme2);
        }
      };
      const http_form = `
<form class="httpRequest">
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
</form>`;
      const tools = {
        inputJson() {
          const that = this;
          layer.prompt(
            {
              move: false,
              formType: 2,
              btn: ["确认"],
              shadeClose: true,
              title: "JSON 输入",
              maxlength: 1e6,
              area: ["400px", "300px"]
            },
            function(text) {
              if (!text) return layer.msg("内容不能为空", { time: 1500 });
              const { rawText, jsonpFun } = Utils.matchJsonp(text);
              try {
                const json = Utils.parse(rawText);
                that.reload(json, rawText, jsonpFun);
              } catch (e) {
                layer.msg("JSON格式不正确", { time: 1500 });
                console.log("格式化异常: ", e);
              }
            }
          );
          return this;
        },
        fetchApi() {
          const that = this;
          layer.open({
            type: 1,
            closeBtn: 0,
            shadeClose: true,
            title: "HTTP 请求",
            content: http_form,
            success() {
              const form = Utils.query("form");
              form.addEventListener("submit", function(event) {
                handler(event, form);
              });
            }
          });
          function handler(event, formEl) {
            event.preventDefault();
            const formData = new FormData(formEl);
            const form = {};
            for (const [name, value] of formData) {
              form[name] = value;
            }
            if (form.url === "") return layer.msg("请求URL不能为空");
            let headers = form.headers;
            let params = form.params;
            try {
              if (headers) headers = JSON.parse(headers);
            } catch (e) {
              return layer.msg("请求头格式不合法");
            }
            try {
              if (params) params = JSON.parse(params);
            } catch (e) {
              return layer.msg("请求参数格式不合法");
            }
            layer.load(0, { shade: false });
            fetch(URL$1.ONLINE_REQUEST, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: Utils.stringify(form)
            }).then(async (response) => {
              const result = await response.json();
              if (typeof result === "string") {
                try {
                  const { rawText, jsonpFun } = Utils.matchJsonp(result);
                  const json = Utils.parse(rawText);
                  that.reload(json, rawText, jsonpFun);
                } catch (e) {
                  layer.closeAll();
                  console.log("HTTP 请求异常：", e);
                }
              } else {
                that.reload(result, Utils.stringify(result), null);
              }
            }).catch((e) => {
              layer.closeAll();
              console.log("HTTP 请求异常：", e);
            });
          }
          return this;
        },
        reload(json, rawText, jsonpFun) {
          _unsafeWindow.GLOBAL_JSON = json;
          _unsafeWindow.RAW_TEXT = rawText;
          _unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
          window.postMessage({ reload: true });
          layer.closeAll();
        }
      };
      const active = "active";
      const handleBar = {
        currentTippy: null,
        handle() {
          const that = this;
          const tagName = "span";
          [".style", ".theme", ".tools"].forEach((selector) => {
            tippy(selector, {
              duration: 500,
              allowHTML: true,
              interactive: true,
              trigger: "click",
              appendTo: Utils.query(selector).parentNode,
              onTrigger(instance) {
                that.currentTippy = instance;
                const target = instance.reference;
                Utils.addClass(Utils.query(tagName, target), active);
                const template = Utils.query("template", target);
                const ul = template.content.cloneNode(true);
                const type = template.dataset.type;
                const value = _GM_getValue(type) || "default";
                const current = Utils.query(`li[data-value=${value}]`, ul);
                Utils.addClass(current, active);
                const tempDiv = Utils.createElement("div");
                while (ul.firstChild) tempDiv.appendChild(ul.firstChild);
                instance.setContent(tempDiv.innerHTML);
              },
              onHide(instance) {
                const target = instance.reference;
                Utils.removeClass(Utils.query(tagName, target));
              }
            });
          });
          return this;
        },
        checked() {
          const selector = ".rightbox li";
          Utils.addEvent("click", selector, (event) => {
            const target = event.target;
            if (Utils.hasClass(target, active)) return;
            const type = target.dataset.type;
            const value = target.dataset.value;
            window.postMessage({ type, value });
            if (Object.is(type, "tools")) return this.currentTippy.hide();
            Utils.removeClass(Utils.queryAll(selector));
            Utils.addClass(target, active);
          });
          return this;
        },
        init() {
          this.handle().checked();
        }
      };
      tabs.init();
      theme.setTheme();
      handleBar.init();
      window.addEventListener("message", function(event) {
        const { data } = event;
        if (!data) return;
        const { type, value } = data;
        if (!type) return;
        if (type === "tools") return tools[value]();
        if (type === "theme") return theme.changeTheme(value);
      });

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

System.register("./index-BUdlPZfJ-HmuETNUs.js", ['./__monkey.entry-nk87lZoo.js'], (function (exports, module) {
  'use strict';
  var Utils;
  return {
    setters: [module => {
      Utils = module.U;
    }],
    execute: (function () {

      const scroll = Utils.createElement("div", {
        class: "scroll-top"
      });
      document.body.appendChild(scroll);
      const $container = Utils.query(".container");
      $container.addEventListener("scroll", function() {
        this.scrollTop > 500 ? Utils.show(scroll) : Utils.hide(scroll);
      });
      scroll.addEventListener("click", function() {
        $container.scrollTop = 0;
      });

    })
  };
}));

System.import("./__entry.js", "./");