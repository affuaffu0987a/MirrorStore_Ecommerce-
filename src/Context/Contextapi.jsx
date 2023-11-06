import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import MirrorApis from "../Components/ProductApi";
import { json } from "react-router-dom";

const AppContext = createContext();

const getLocalStorages = () => {
    let isItems = localStorage.getItem("Items")
    if(!isItems) {
        return [];
    }
    else {
        return JSON.parse(isItems)
    }
}

const initialState = {
    ShoppingcartDetails:getLocalStorages(),
    totalPrice: 0,
    qty: 0,
}


const AppPorvider = ({ children }) => {
    const [AllMirror, setMirror] = useState(MirrorApis)
    const [AddCartList, dispatch] = useReducer(reducer, initialState)
    console.log(AddCartList);

    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(AddCartList.ShoppingcartDetails))
    }, [AddCartList.ShoppingcartDetails])

    return (
        <AppContext.Provider value={{ ...AddCartList,AllMirror, dispatch, setMirror,}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppPorvider };