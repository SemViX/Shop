import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export function useCategories(){
    const {data, refetch, isLoading} = useQuery({
        queryKey:['categories'],
        queryFn: async () => {
            return (await axios.get<string[]>('https://fakestoreapi.com/products/categories')).data
        }
    })
    
    return {data, refetch, isLoading}
}