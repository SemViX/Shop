import { ProductType } from "../types/productType";

export function findProductIndex(products:ProductType[], productId:number){
    return products.findIndex((product) => product.id === productId)
}