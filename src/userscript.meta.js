/**
 * 版本更新描述
 */
const userscript = {
  name: "JSON Viewer",
  author: "Feny",
  version: "v0.7.3",
  match: ["*://*/*"],
  homepage: "https://github.com/xFeny/monkey-jsonviewer",
  icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wvjF8bLX4ZrHZx+XNqlwnmKjH5YUyRvb6kEAd8H058d1b47XV5Ir3eoN++bagaXYrN6KOBn2FfPPx5/aEutX8a+KNWhIubhruZLSNj8u1WMcIOP4QoXOOwNS/wDBM79lDTfjh8YNe+IXj63TxRdeHfKjsE1KMTxtdSbmMmxvlAiVV2IBsUybgAyKR9ZTy6lhsM69Xovm2+iPmKmOqYjEKjT6v5WXU9e8beKrjxZpp/s/xFrfhjWIwWs9X0q42z2kmPlZo2zDcxjqYZ0eNv7obDDf/YL/AG8L745eJNc+G3xCttP0n4qeEWZZ2sVZNP8AENsu0rd2ysS0ZKPG7RMSQsisCcukWd+3x4RtfhpqGk+JNPjS0g1mV7a8iT5UM4XesgHYsofdjglQepJPxwPE1x4V/au8LePtNkeK40ma0lmdDgyorvHMhPo9uxjP+y1bUcHRxmGbS1adn1TXT0/4fcipiqmExCi3pfVdGn19f+GLni/w7ceGf2wPFXga+Vo5rW/vDbI3WWI/v4HA/wBqBg3tk+lfWX7AXia1+F/iDV9B1CRbWHXjFLayyHannpuUxk+rqy4zxlMdWAPQft7fsL33x91nQfiD4DutP0r4oeDXVrT7cWWx1y3UsTZ3LKCyAh5FEigkLLIpHzBk5vwj4JuvE2kLJfeHdY8N6lGAl5pepwBZrOT+JRIuYp0ByBNCzxPg4bIICqYyljMKot62Sa6prr6P/gBDC1MLiHJLS90+jT6ev/Dnmn/BVP8Aaw0nxv4/8P8Aw18KXK69qmk3MlxqEdiRMwuivlpbrtPLopkMnZNy5IIYLyPwa/Z8vvEmv+HtHu4/Ovr+5iS6KDcqAtukwe6om7nuEJxX0XoH7PK/bJG0vRoY5rr/AFslvbLGZf8AfcAf+PGvafgv8CbX4byNqFyI5tWmXYCoytsh6qvqx7t+A4yWiWYUsLhlRpbr72318kVHA1MTiHVqbP7kl0P/2Q==",
  namespace: "http://tampermonkey.net/",
  require: ["https://unpkg.com/dom-to-image@2.6.0/dist/dom-to-image.min.js"],
  description:
    "格式化显示JSON使数据看起来更加漂亮，支持折叠/展开格式化后的数据，支持JSON脑图让调用层级看着更清晰，支持复制JSON脑图节点路径",
};

const note = `
\t v0.6.9 切换为暗黑主题，tab栏和JSONCrak的也跟着改变
// @note\t\t v0.6.6 增加多一种暗黑主题，默认主题色修改
// @note\t\t v0.6.3 修复暗黑主题，tab颜色问题
// @note\t\t v0.6.2 脑图增加JSON Crack
// @note\t\t v0.6.1 增加多一种浅色主题
// @note\t\t v0.6.0 增加简单HTTP 请求功能，可请求GET/POST/PUT/DELETE的API接口，而不单单只能GET请求使用
// @note\t\t v0.5.9 jsonp格式小优化
// @note\t\t v0.5.8 增加JSON手动输入
// @note\t\t v0.5.7 一些小细节优化
// @note\t\t v0.5.6 修复BUG
// @note\t\t v0.5.5 解决@require jquery-simple-tree-table.min.js依赖加载失败问题
// @note\t\t v0.5.4 单击复制修改为CTRL+单击复制JSONPath功能，JSON格式化风格增加table格式
// @note\t\t v0.5.3 增加暗黑主题色
// @note\t\t v0.5.2 单击JSON格式化的key可复制JSONPath
// @note\t\t v0.5.1 修复JSONPath提示有误
// @note\t\t v0.5.0 解决chrome 120+以上内核JSON格式化不执行和引入layer报错问题
// @note\t\t v0.4.9 布局修改，增加保存JSON/脑图为文件，增加JSON过滤，鼠标移入key提示JSONPath
// @note\t\t v0.4.8 代码优化
// @note\t\t v0.4.7 增加对JSONP的判断，代码优化
// @note\t\t v0.4.6 增加复制按钮，JSON脑图CSS样式细节优化，JSON脑图增加收起/展开子节点按钮
// @note\t\t v0.4.5 在json-viewer-updated原基础上进行了一些修改，主要有CSS样式修改，新增折叠/展开全部功能，新增JSON脑图功能，脑图节点点击显示调用路径
`.trim();
userscript.$extra = { note };

export default userscript;
