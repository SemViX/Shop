import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import { routes } from "./constants/routes"
import CategoryPage from "./pages/CategoryPage"
import ProductPage from "./pages/ProductPage"
import FavoritesPage from "./pages/FavoritesPage"
import CartPage from "./pages/CartPage"


function App() {

  return (
    <Routes>
      <Route path={routes.homePage} element={<Layout/>}>
        <Route path={routes.homePage} element={<HomePage/>} index />
        <Route path={routes.favorites} element={<FavoritesPage/>} />
        <Route path={routes.cart} element={<CartPage/>} />
        <Route path={`${routes.category}/:categoryName`} element={<CategoryPage/>}/>
        <Route path={`${routes.product}/:productId`} element={<ProductPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
