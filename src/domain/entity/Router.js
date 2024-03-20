import { Route } from './Route.js';

export class Router {

  #routes

  constructor() {
    this.#routes = [
      new Route({ name: 'Home', component: 'home-page', isActive: true }),
      new Route({ name: 'JsonViewer', component: 'json-viewer-page', isActive: false }),
    ];
  }

  get routes() {
    return this.#routes;
  }
}