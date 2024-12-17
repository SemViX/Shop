import CartProductItem from "../components/cartProductItem"
import Button from "../components/ui/button"
import { useAppSelector } from "../hooks/redux"
import { GetFullPrice } from "../utils/getTotalPrice"

const CartPage = () => {
    const cartProducts = useAppSelector(state => state.cart)
  return (
    <div className="bg-secondary-bg min-h-screen p-5">
        <h1 className="text-heading text-2xl text-center font-bold">
            Cart
        </h1>
        <div className="flex flex-col gap-3 mt-5">
            {cartProducts.map((product) => (
                <CartProductItem {...product} />
            ))}
        </div>
        <div className="mt-7 flex flex-col md:flex-row justify-between gap-5">
            <p className="text-orange-600 text-xl font-bold">
                Total price: {GetFullPrice(cartProducts)} $
            </p>
            <Button text='Buy' className="min-w-[100px]"/>
        </div>
    </div>
  )
}

export default CartPage