import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const producIndex = draft.findIndex(p => p.id === action.id);
        if (producIndex >= 0) {
          draft.splice(producIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const producIndex = draft.findIndex(p => p.id === action.id);
        if (producIndex >= 0) {
          draft[producIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
