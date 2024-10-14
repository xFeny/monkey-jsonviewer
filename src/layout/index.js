import "./layout.scss";

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
