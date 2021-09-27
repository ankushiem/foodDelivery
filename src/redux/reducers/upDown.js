import { ActionTypes } from "../contants/actiontypes";

const initialState={
    cartByIds:{}
};

const changeTheNumber = (state=initialState , action) => {
    switch(action.type){
        case ActionTypes.INCREMENT: {
            const {itemId} = action.payload;
            const {cartByIds} = state;
            const cartItem = cartByIds[itemId] || {quantity:0};
            cartItem.quantity +=1;

            const newCart = {
                ...cartByIds,
                [itemId]: cartItem
            };

            return {
                ...state,
                cartByIds: newCart
            };
        }
        case ActionTypes.DECREMENT: {
            const {itemId} = action.payload;
            const {cartByIds} = state;
            const cartItem = cartByIds[itemId] ;
            if(!cartItem){
                return state;
            }
            cartItem.quantity -=1;
            const newCart = {
                ...cartByIds,
                [itemId]: cartItem
            };

            return {
                ...state,
                cartByIds: newCart
            };
        }
        default: return state;
    }
}

export default changeTheNumber;