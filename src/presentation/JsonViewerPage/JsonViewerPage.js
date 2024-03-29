import { RouterState } from "../../infra/Router/RouterState";
import { JsonViewerContext } from "../../application/JsonViewer/JsonViewerContext";

class JsonViewerPage extends HTMLElement {

  #input;
  #JsonViewerContext;

  constructor() {
    super();
    this.#JsonViewerContext = new JsonViewerContext();
    this.#input = new RouterState().getActiveRouteData();
  }

  connectedCallback() {
    this.#render();
  }

  async #render() {
    this.setAttribute('class', 'flex flex-col gap-5 items-center justify-center h-full w-full');
    this.innerHTML = `
      <h1>Viewer</h1>
      <button id="loadMore">Load more</button>
    `;

    this.querySelector('#loadMore').addEventListener('click', () => this.#JsonViewerContext.loadMore());
    await this.#JsonViewerContext.renderJson(this.#input[0]);
  }
}

customElements.define('json-viewer-page', JsonViewerPage);