import FavoriteProductItem from "../components/favoriteProductItem"
import { useAppSelector } from "../hooks/redux"

const FavoritesPage = () => {
    const favoritesProduct = useAppSelector(state => state.favorites)

  return (
    <div className="bg-secondary-bg min-h-screen p-5">
        <h1 className="text-2xl font-bold text-heading text-center">
            Favorites
        </h1>
        <div className="flex flex-col gap-3 mt-5">
            {
                favoritesProduct.map((product) => (
                    <FavoriteProductItem key={product.title} {...product} />
                ))
            }
        </div>
    </div>
  )
}

export default FavoritesPage