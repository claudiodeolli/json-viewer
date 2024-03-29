import { RouterState } from '../../infra/Router/RouterState.js';

export default class RouterPage extends HTMLElement {
  #routerState;
  static instance;

  constructor() {
    super();
    if (RouterPage.instance) {
      return RouterPage.instance;
    }
    this.#routerState = new RouterState();
    RouterPage.instance = this;
  }

  connectedCallback() {
    this.render()
  }

  /**
   * @returns {HTMLElement}
   */
  render() {
    const activeRoute = this.#routerState.getActiveRoute();
    this.setAttribute('class', 'flex h-full w-full');
    this.innerHTML = `<${activeRoute.component}></${activeRoute.component}>`;
  }

  /**
   * 
   * @param {string} route 
   * @param {Array} input
   */
  changePage(route, input) {
    this.#routerState.activeRoute(route, input);
    this.render();
  }
}

customElements.define('router-page', RouterPage);