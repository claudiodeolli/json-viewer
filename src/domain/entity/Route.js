export class Route {
  /**
   * @param {string} name
   * @param {string} component
   */
  constructor({ name, component, input = [], isActive = false }) {
    this.name = name;
    this.component = component;
    this.input = input;
    this.isActive = isActive;
  }
}