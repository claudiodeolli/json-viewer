import { Route } from '../../domain/entity/Route.js';
import { Router } from '../../domain/entity/Router.js';

export class RouterState {
  constructor() {
    this.router = new Router();
  }

  /**
   * 
   * @param {string} route 
   */
  activeRoute(route) {
    this.router.routes.forEach((r) => {
      r.isActive = r.name === route;
    }); 
  }

  /**
   * 
   * @returns {Route}
   */
  getActiveRoute() {
    return this.router.routes.find((route) => route.isActive);
  }
}