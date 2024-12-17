import { useParams } from "react-router"
import { useProductByCategory } from "../hooks/useProductsByCat"
import ProductCard from "../components/productCard"

const CategoryPage = () => {
  const {categoryName} = useParams()
  const {data:productData, isLoading} = useProductByCategory(categoryName ?? '')
  return (
    <div className="min-h-screen bg-secondary-bg p-10">
      <h1 className="text-center text-heading text-2xl font-bold capitalize">
        {categoryName}
      </h1>
      <div className="my-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center">
        {isLoading? <p className="text-center text-text">Loading...</p> :
          productData?.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPage