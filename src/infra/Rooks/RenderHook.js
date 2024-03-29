class RenderHook {
  constructor(getElement) {
    this._getElement = getElement;
    this._modifier = null;
    window.addEventListener("load", () => this.render());
  }

  use(state) {
    state.addEventListener("update", (e) => {
      this.render();
    });
    return this;
  }

  modify(modifier) {
    this._modifier = modifier;
    return this;
  }

  render() {
    const theElement = this._getElement();
    if (!theElement) return;
    if (typeof this._modifier === "function") this._modifier(theElement);
  }
}