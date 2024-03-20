const Item = require('../../domain/entity/Item.js');
const ItemState = require('./ItemState.js');

describe('ItemState', () => {
  let itemState;
  let item;

  beforeEach(() => {
    itemState = new ItemState();
    item = new Item();
    item.isExpanded = false;
  });

  test('toggleItem should set isExpanded to true if it was false', () => {
    itemState.toggleItem(item);
    expect(item.isExpanded).toBe(true);
  });

  test('toggleItem should set isExpanded to false if it was true', () => {
    item.isExpanded = true;
    itemState.toggleItem(item);
    expect(item.isExpanded).toBe(false);
  });
});