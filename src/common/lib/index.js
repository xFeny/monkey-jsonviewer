import JsonViewer from "./JsonViewer";
import JsonToTable from "./JsonToTable";

export default class FormaterFactory {
  static getInstance(options) {
    return Object.is(JsonToTable.STYLE.TABLE, options.style) ? new JsonToTable(options) : new JsonViewer(options);
  }
}
