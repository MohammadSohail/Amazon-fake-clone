//reducer is like a data cable that connects data layers and the components together.

export const initialState = {
    basket: [],
    user: null
};

// selector

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0 );

const reducer = (state, action) => {

    console.log(action);
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            const idx = state.basket.findIndex ( basketItem => basketItem.id === action.id)
            let newBasket = [...state.basket]

            if(idx >= 0) {
                newBasket.splice(idx, 1); 

            }else {
                console.warn (
                    `Can't remove product ( id: ${action.id}) as it's not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;