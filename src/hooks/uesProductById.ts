import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "../types/productType";

export function useProductById(productId:string){
    const {data, isLoading, refetch, isFetching} = useQuery({
        queryKey: ['product by id'],
        queryFn: async () => {
            return (await axios.get<ProductType>(`https://fakestoreapi.com/products/${productId}`)).data
        },
    })

    return {data, isLoading, refetch, isFetching}
}