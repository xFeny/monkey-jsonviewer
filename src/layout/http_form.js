/**
 * HTTP 请求布局
 */
export default `
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
</form>
`;
