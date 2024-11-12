import JsonViewer from "./JsonViewer";
import JsonToTable from "./JsonToTable";

export default class FormaterFactory {
  static getInstance(options) {
    return options.style && options.style === "table"
      ? new JsonToTable(options)
      : new JsonViewer(options);
  }
}
