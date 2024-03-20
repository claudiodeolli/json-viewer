class ItemState {
  /**
   * 
   * @param {Item} item 
   */
  toggleItem(item) {
    if (item.isExpanded) {
      item.isExpanded = false;
      return;
    }

    item.isExpanded = true;
  }
}

module.exports = ItemState;