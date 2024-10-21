import Utils from "../common/Utils";
/**
 * 表格
 */
function generateTrHtml(json, level = 0, pId = "", pChain = "") {
  let tr = "";
  for (const key in json) {
    let val = json[key],
      type = Utils.getType(val),
      tId = key + "_" + Math.random(),
      chain = pChain + "." + key;
    if (["array", "object"].includes(type)) {
      let brackets = "",
        len = Object.keys(val).length,
        res = generateTrHtml(val, level + 1, tId, chain);

      if (!res) {
        if (type === "array") {
          brackets = `<span class="json-brackets json-square-brackets">[]</span>`;
        } else {
          brackets = `<span class="json-brackets json-curly-brackets">{}</span>`;
        }
      }

      tr += `
                <tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                    <td class="json-key" colspan="${ len > 0 ? 2 : "" }" 
                    json-path="${chain}" 
                    style="padding-left: ${level * 19}px">${key}:
                      <span class="node-len"></span>
                    </td>
                    <td>${brackets}</td>
                </tr>`;
      tr += res;
    } else {
      val =
        type === "string"
          ? val
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
          : val;
      tr += `<tr data-node-id="${tId}" data-node-pid="${pId}" type="${type}">
                <td class="json-key" 
                json-path="${chain}" 
                style="padding-left: ${level * 19}px">${key}:</td>`;
      if (Utils.isUrl(val)) {
        tr += `<td class="json-${type}">
          <a target="_blank" href="${val}">"${val}"</a>
        </td>`;
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
