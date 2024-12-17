import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "../types/productType";

export function useProductByCategory(categoryName:string, productLimit?:number){
    let reqLink = `https://fakestoreapi.com/products/category/${categoryName}`
    if (productLimit) reqLink += `?limit=${productLimit}`
    const {data, isLoading, refetch} = useQuery({
        queryKey: [`${categoryName} product`],
        queryFn: async () => {
            return (await axios.get<ProductType[]>(reqLink)).data
        }
    })

    return {data, isLoading, refetch}
}