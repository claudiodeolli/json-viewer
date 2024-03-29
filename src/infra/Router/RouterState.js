import { Route } from '../../domain/entity/Route.js';
import { Router } from '../../domain/entity/Router.js';

export class RouterState {
  static instance;
  
  constructor() {
    if (RouterState.instance) {
      return RouterState.instance;
    }
    
    this.router = new Router();
    RouterState.instance = this;
  }

  /**
   * 
   * @param {string} route
   * @param {Array} input
   */
  activeRoute(route, input) {
    this.router.routes.forEach((r) => {
      r.isActive = r.name === route;

      if (r.isActive && input && input.length) {
        r.input = input;
      }
    });
  }

  /**
   * 
   * @returns {Route}
   */
  getActiveRoute() {
    return this.router.routes.find((route) => route.isActive);
  }


  /**
   * 
   * @param {Array} data
   */
  getActiveRouteData() {
    const activeRoute = this.router.routes.find((r) => r.isActive);
    return activeRoute.input;
  }
}