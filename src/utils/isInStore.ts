import { ProductType } from "../types/productType";

export function isInStore(store:ProductType[], productId:number | undefined){
    if (productId) return store.some(product => product.id === productId)
}