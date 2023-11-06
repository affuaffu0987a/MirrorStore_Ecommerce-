import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import MirrorApis from "../Components/ProductApi";

const AppContext = createContext();
let initialState = {
    ShoppingcartDetails: [],
    totalPrice: 0,
    qty: 0,
}

const GetLocalStorage = () => {
    let isItems = localStorage.getItem("Items")
    if (isItems && isItems.length > 0) {
        return JSON.parse(isItems)
    }
    else {
        return JSON.stringify(isItems);
    }
}
initialState = GetLocalStorage()


const AppPorvider = ({ children }) => {
    const [AllMirror, setMirror] = useState(MirrorApis)
    const [AddCartList, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(AddCartList))
    }, [AddCartList])

    return (
        <AppContext.Provider value={{ AllMirror, dispatch, setMirror,...AddCartList}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppPorvider };