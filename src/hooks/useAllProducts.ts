import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "../types/productType";

export function useAllProducts(){
    const products = useQuery({
        queryKey: ['all products'],
        queryFn: async() => {
            return (await axios.get<ProductType[]>('https://fakestoreapi.com/products')).data
        }
    })

    return products
}