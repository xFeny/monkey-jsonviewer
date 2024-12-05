/**
 * JSON Viewer 布局
 */
export default `
<template data-for="viewFormater">
  <div class="toolbar-item btn" id="saveJson">保存</div>
  <div class="toolbar-item btn" id="copyJson">复制</div>
  <div class="toolbar-item btn" id="sorted">排序</div>
  <div class="toolbar-item btn" id="collapseAll">全部折叠</div>
  <div class="toolbar-item btn" id="expandAll">全部展开</div>
  <div class="searchbox">
    <input class="filter" type="text" placeholder="JSON 过滤" />
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
            <li data-type="tools" data-value="fetchJson">HTTP 请求</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="active" data-for="viewFormater" id="formatBox"></div>
    <div data-for="viewMind" id="mindBox"></div>
    <div data-for="viewRawText" id="rawTextBox">
      <pre></pre>
    </div>
  </div>
</div>
`;
