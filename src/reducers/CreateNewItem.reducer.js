export const FormDataInitialState = {};

const CrateItemReducer = (items, action) => {
  switch (action.type) {
    case "SET_ITEMS":
          return { ...action.items };
    case "ADD_ITEM":
      return {...items, ...action.data};
    default:
      return {...items};
  }
};

export default CrateItemReducer;
