import Utils from "../common/Utils";
/**
 * 表格
 */
function generateTrHtml(json, level = 0, pId = "", pChain = "") {
  let tr = "";
  for (const key in json) {
    let val = json[key];
    const type = Utils.getType(val);
    const chain = pChain + "." + key;
    const tId = key + "_" + Math.random();

    if (["array", "object"].includes(type)) {
      const res = generateTrHtml(val, level + 1, tId, chain);

      let brackets = "";
      if (!res) {
        if (type === "array") {
          brackets = `<span class="json-brackets json-square-brackets">[]</span>`;
        } else {
          brackets = `<span class="json-brackets json-curly-brackets">{}</span>`;
        }
      }

      tr += `
            <tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                <td colspan="${res ? 2 : ""}" 
                json-path="${chain}" 
                style="padding-left: ${level * 19}px">
                  <b class="json-key">${key}:</b>
                  <span class="node-len"></span>
                </td>
                <td>${brackets}</td>
            </tr>`;
      tr += res;
    } else {
      if (type === "string") {
        val = val
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      tr += `<tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                <td json-path="${chain}" 
                style="padding-left: ${level * 19}px">
                  <b class="json-key">${key}:</b>
                </td>`;
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

export default generateTrHtml;
