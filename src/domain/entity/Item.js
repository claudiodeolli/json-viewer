class Item {
  /**
   * @param {string} name
   * @param {Item[]} childrenItems
   * @param {boolean} isExpanded
   * */
  constructor(name, childrenItems, isExpanded = false) {
    this.name = name;
    this.childrenItems = childrenItems;
    this.isExpanded = isExpanded;
  }
}

module.exports = Item;