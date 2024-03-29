export default class JsonLoaderGatewayHttp {

  /**
   * @param {File} file
   * @returns {Promise<Object>}
   */
  static getJson(file) {
    return new Promise((resolve, reject) => {
      window.worker.postMessage(file);
      window.worker.onmessage = (event) => {
        window.eventEmitter.emit('data', event.data);
      };
      window.worker.onerror = (error) => {
        reject(error);
      };
    });
  }
}