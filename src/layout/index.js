import "./layout.scss";

const layout = `
<div class="format-container">
    <div class="panel">
        <div class="tabs">
            <div class="tabs-item btn active" id="format">JSON格式化</div>
            <div class="tabs-item btn" id="viewJsonMind">JSON脑图</div>
            <div class="tabs-item btn" id="viewRawText">原始数据</div>
            <div class="rightbox">
                
            </div>
            <div class="rightbox">
                <div class="style">
                    <span>风格</span>
                    <span class="ulbox" data-type="style">
                        <ul>
                            <li data-type="style" data-value="default">默认</option>
                            <li data-type="style" data-value="table">表格</option>
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