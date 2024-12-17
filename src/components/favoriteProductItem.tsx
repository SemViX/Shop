import { useAppDispatch } from "../hooks/redux"
import { ProductType } from "../types/productType"
import Button from "./ui/button"
import {removeFromFavorites} from '../store/favorites/favorites.slice'
import { Link } from "react-router"
import { routes } from "../constants/routes"
import AnimatedDiv from "./animatedDiv"


const FavoriteProductItem = (product:ProductType) => {
    const dispatch = useAppDispatch()
    
  return (
    <AnimatedDiv>
       <Link to={`${routes.product}/${product.id}`}
            className="flex flex-col md:flex-row bg-main-bg rounded-xl p-3 items-center gap-3 shadow-lg hover:shadow-orange-600/80 justify-between"
       >
            <img src={product.image} width={100}  alt="" />
            <h2 className="truncate text-text">
                {product.title}
            </h2>
            <p className="line-clamp-3 max-w-[300px] text-secondary-text">
                {product.description}
            </p>
            <p className="text-text">
                Price: <span className="text-orange-600">{product.price} $</span>
            </p>
            <Button 
                text="Delete from favorites"
                onClick={() => dispatch(removeFromFavorites(product))} 
            />
       </Link>
    </AnimatedDiv>
  )
}

export default FavoriteProductItem