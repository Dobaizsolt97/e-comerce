import SHOP_DATA from "./shop.data";

const INITITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
