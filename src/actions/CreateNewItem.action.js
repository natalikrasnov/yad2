export const addItemAction = (item) => ({
  type: "ADD_ITEM",
  data: item,
});

export const setItemsAction = (items) => ({
  type: "SET_ITEMS",
  items,
});
