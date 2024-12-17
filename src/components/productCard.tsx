import { Link } from "react-router"
import { ProductType } from "../types/productType"
import { routes } from "../constants/routes"

const ProductCard = (product:ProductType) => {
  return (
    <Link to={`${routes.product}/${product.id}`} className="text-text p-2 bg-secondary-bg min-h-[250px] max-w-[400px] md:max-w-[250px] rounded-xl border-2 border-border flex flex-col gap-5 items-center hover:border-border-hover shadow-xl hover:shadow-orange-700/80">
        <img src={product.image} width={100} alt="" className="w-[100%]"/>
        <h2 className="">
            {product.title}
        </h2>
        <p className="text-secondary-text line-clamp-3">
            {product.description}
        </p>
        <span className="bg-orange p-2 rounded-2xl mt-auto mb-3">
           Price: {product.price} $
        </span>
    </Link>
  )
}

export default ProductCard