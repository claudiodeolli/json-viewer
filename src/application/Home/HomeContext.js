import RouterPage from "../../presentation/RouterPage/RouterPage";

export class HomeContext {
  /**
   * @param {Event} event
   * */
  static async handleFileUpload(event) {
    const file = event.target.files[0];
    new RouterPage().changePage('JsonViewer', [file]);
  }
}