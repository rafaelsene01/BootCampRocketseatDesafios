import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const producIndex = draft.findIndex(p => p.id === action.product.id);

        if (producIndex >= 0) {
          draft[producIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const producIndex = draft.findIndex(p => p.id === action.id);
        if (producIndex >= 0) {
          draft.splice(producIndex, 1);
        }
      });
    default:
      return state;
  }
}
