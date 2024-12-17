import { useParams } from "react-router"
import { useProductById } from "../hooks/uesProductById"
import Button from "../components/ui/button"
import { Heart, ShoppingBasket } from "lucide-react"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { addToCart, removeFromCart } from "../store/cart/cart.slice"
import { isInStore } from "../utils/isInStore"
import { addToFavorites, removeFromFavorites } from "../store/favorites/favorites.slice"

const ProductPage = () => {
    const {productId} = useParams()
    const {data:productData, isLoading, refetch, isFetching} = useProductById(productId ?? '')
    const {cart, favorites} = useAppSelector(state => state)

    const dispatch = useAppDispatch()
     

    useEffect(() => {
        refetch()
    }, [refetch, productId])


  return (
    <div className="bg-secondary-bg min-h-screen p-5">
        {isLoading || isFetching? <p className="text-text text-xl">Loading...</p> :  
            <div className="max-w-[1100px] p-5 rounded-xl bg-main-bg mx-auto m-5 flex flex-col lg:flex-row gap-5 min-h-[700px]">
                <img src={productData?.image} width={200}  className='w-[100%] max-h-[600px] my-auto rounded-xl' alt="" />
                <div className="max-w-[700px] w-full p-5 flex flex-col justify-between">
                    <h1 className="text-heading text-xl font-bold mb-5">
                        {productData?.title}
                    </h1>
                    <p className="text-secondary-text">
                        {productData?.description}
                    </p>
                    <p className="text-text font-bold font-xl mt-5">
                        Price: <span className="text-orange-500">{productData?.price} $</span>
                    </p>
                    <div className="flex gap-4">
                        {isInStore(cart, productData?.id)?
                            <Button 
                            text="Remove from cart" 
                            icon={<ShoppingBasket/>} 
                            className="max-w-[250px] w-full font-bold bg-red-600 hover:bg-red-900"
                            onClick={() => dispatch(removeFromCart(productData))}
                        />
                            :
                            <Button 
                                text="Add to cart" 
                                icon={<ShoppingBasket/>} 
                                className="max-w-[200px] w-full font-bold"
                                onClick={() => dispatch(addToCart(productData))}
                            />
                        
                        }
                        {isInStore(favorites, productData?.id)? 
                            <Button text="" 
                                icon={<Heart/>} 
                                className="w-[50px] h-[50px] bg-red-600 hover:bg-red-900" 
                                onClick={() => dispatch(removeFromFavorites(productData))}
                            />
                            :
                            <Button 
                                text=""
                                icon={<Heart/>} 
                                className="w-[50px] h-[50px]"
                                onClick={() => dispatch(addToFavorites(productData))}    
                            />
                        }
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default ProductPage