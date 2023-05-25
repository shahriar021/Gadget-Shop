import React, { createContext,useContext,useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,price:action.price,qyt:action.qty,size:action.size,img:action.img}]

        case "REMOVE":
            let newState = [...state]
            newState.splice(action.index,1)
            return newState

        case "DROP":
            let blankarray = []
            return blankarray

    
        default:
            console.log("error")    
    }
}

export const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,[])

    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>    
        </CartDispatchContext.Provider>    
    )
}


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);