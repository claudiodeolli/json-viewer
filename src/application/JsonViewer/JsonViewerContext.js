import { JsonLoaderGateway } from "../../infra/Gateway/JsonLoaderGateway";
import JsonLoaderGatewayHttp from "../../infra/Gateway/JsonLoaderGatewayHttp";

export class JsonViewerContext {

  /**
   * @param {File} file
   * */
  async renderJson(file) {
    const gateway = new JsonLoaderGateway(JsonLoaderGatewayHttp.getJson);

    const handleData = async (data) => {
      console.log(data);
    };

    window.eventEmitter.subscribe('data', handleData);

    await gateway.getJson(file);
  }

  loadMore() {
    console.log('load more');
    window.worker.postMessage({ command: 'resume' });
  }
}