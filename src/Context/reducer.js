const reducer = (state, action) => {
    const { totalPrice, qty,ShoppingcartDetails } = state
    let products;
    let updateQty;
    let upadteprice;
    let index;
    switch (action.type) {
        case "ADD_CART":
            let check = ShoppingcartDetails.find(elem => action.payload.id === elem.id)
            if (check) {
                return state
            }
            else {
                products = action.payload.Allproducts;
                products["qty"] = 1;
                updateQty = qty + 1;
                upadteprice = totalPrice + products.Price
                return {
                    ShoppingcartDetails: [...ShoppingcartDetails, products],
                    qty: updateQty,
                    totalPrice: upadteprice
                }
            }
            break;
        case "ROMOVE_PRODUCT":
            let filtered = ShoppingcartDetails.filter(elems => elems.id !== action.payload.id)
            products = action.payload.cardList;
            updateQty = qty - products.qty;
            upadteprice = totalPrice - products.Price * products.qty;
            return {
                ShoppingcartDetails: [...filtered],
                qty: updateQty,
                totalPrice: upadteprice,
            }
            break;
        case "QUANTITY_PlUS":
            products = action.payload.cardList;
            products.qty = products.qty + 1;
            upadteprice = totalPrice + products.Price;
            updateQty = qty + 1;
            index = ShoppingcartDetails.findIndex(card => card.id === action.payload.id)
            ShoppingcartDetails[index] = products;
            return {
                ShoppingcartDetails: [...ShoppingcartDetails],
                totalPrice: upadteprice,
                qty: updateQty
            }
            break;
        case "QUANTITY_MINUS":
            products = action.payload.cardList;
            products.qty = products.qty - 1;
            upadteprice = totalPrice - products.Price;
            updateQty = qty - 1;
            index = ShoppingcartDetails.findIndex(card => card.id === action.payload.id)
            ShoppingcartDetails[index] = products;
            return {
                ShoppingcartDetails: [...ShoppingcartDetails],
                totalPrice: upadteprice,
                qty: updateQty
            }
            break;
        case "REMOVE_ALL":
            return {
                ShoppingcartDetails: [],
                totalPrice: 0,
                qty: 0
            }
            break;
        case "PAYMENT_SUCCESSFUL":
            return {
                ShoppingcartDetails: [],
                totalPrice: 0,
                qty: 0
            }
            break;
        default:
            return state;
    }
}

export default reducer;