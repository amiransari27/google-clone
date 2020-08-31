import React, { useContext,createContext, useReducer } from 'react'

const  StateContext = createContext(null)

export const StateProvider = (props) => {

    const {initialState, reducer, children} = props
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = ()=> useContext(StateContext)