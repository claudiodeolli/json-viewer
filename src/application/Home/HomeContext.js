export class HomeContext {
  /**
   * @param {Event} event
   * */
  static async handleFileUpload(event) {
    const file = event.target.files[0];
    window.eventEmitter.subscribe('data', (data) => {
      console.log(data);
    });

    await window.gateway.getJson(file);
  }
}