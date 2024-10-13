/**
 * 版本更新描述
 */

const note = `
         v0.6.3 修复暗黑主题，tab颜色问题
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
`;

const versionInfo = {
  note: note.trim(),
};

export default versionInfo;
