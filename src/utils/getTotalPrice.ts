import { CartProduct } from "../store/cart/cart.slice";

export function GetFullPrice(products:CartProduct[]){
    return products.reduce((total, products) => total + (products.price * products.quantity), 0)
}