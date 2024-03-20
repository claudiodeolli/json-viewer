export class Route {
  /**
   * @param {string} name
   * @param {string} component
   */
  constructor({ name, component, isActive = false }) {
    this.name = name;
    this.component = component;
    this.isActive = isActive;
  }
}