import { CartProduct } from "../store/cart/cart.slice"
import AnimatedDiv from "./animatedDiv"
import Button from "./ui/button"
import { useAppDispatch } from "../hooks/redux"
import {removeFromCart, increaseQuantity, reduceQuantity} from '../store/cart/cart.slice'
import { Minus, Plus } from "lucide-react"

const CartProductItem = (product:CartProduct) => {
    const dispatch = useAppDispatch()
  return (
    <AnimatedDiv className="flex flex-col md:flex-row bg-main-bg rounded-xl p-3 items-center gap-3 shadow-lg hover:shadow-orange-600/80 text-white justify-between">
        <img src={product.image} width={100}  alt="" />
        <h2 className="truncate text-text max-w-[350px]">
            {product.title}
        </h2>
        <div className="flex items-center gap-5">
            {product.quantity > 1 && <Button text="" icon={<Minus size={20}/>} onClick={() => dispatch(reduceQuantity(product.id))} />}
            <p className="text-lg font-bold">{product.quantity}</p>
            <Button text="" icon={<Plus size={20}/>} onClick={() => dispatch(increaseQuantity(product.id))}/>
        </div>  
        <p className="text-text">
            Price: <span className="text-orange-600">{product.price * product.quantity} $</span>
        </p>
        <Button
            text="Delete from cart"
            onClick={() => dispatch(removeFromCart(product))} 
        />
    </AnimatedDiv>
  )
}

export default CartProductItem