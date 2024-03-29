class StateHook extends EventTarget {
  #_value = null;
  constructor(value) {
    super();
    this.#_value = value;
  }

  get value() {
    return this.#_value;
  }

  set value(newValue) {
    return null;
  }

  update(newValue) {
    this.#_value = newValue;
    const updateEvent = new CustomEvent("update");
    this.dispatchEvent(updateEvent);
  }
}