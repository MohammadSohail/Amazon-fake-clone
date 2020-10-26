//Context is primarily used when some data needs to be accessible by 
//many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

/*
what is meant by the 'StateProvider' is the app store/state, and the reducer is the way for us to update 
that state and push new data in to the store for us to grab it, and we do that using an action of some sort
*/

import React, { createContext, useContext, useReducer } from 'react';

//prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);