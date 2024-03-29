import { RouterState } from '../../infra/Router/RouterState.js';

export default class RouterPage extends HTMLElement{

  #routerState;
  
  constructor() {
    super();
    this.#routerState = new RouterState();
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
}

customElements.define('router-page', RouterPage);