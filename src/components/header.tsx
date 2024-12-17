import {Heart, Menu, ShoppingCart, Store, User} from 'lucide-react'
import { Link } from 'react-router'
import { routes } from '../constants/routes'
import { useState } from 'react'
import HeaderDropDownMenu from './ui/headerDropDownMenu'
import SearchInput from './ui/searchInput'
import { useAppSelector } from '../hooks/redux'

const Header = () => {
    const [isActive, setActive] = useState(false)

    const {cart, favorites} = useAppSelector(state => state)

    const handleActive = () => {
        setActive(!isActive)
    }


  return (
        <header className='bg-main-bg p-5 text-text flex justify-between items-center'>
            <Link 
                to={routes.homePage} 
                className='font-bold flex items-center gap-3 hover:text-hover-text transition-colors duration-200 z-50'
            >
                <Store size={50}/>
                SVX-Shop
            </Link>
            <SearchInput/>
            <div className='hidden md:flex gap-5'>
                <Link to={routes.favorites} className='relative'>
                    <Heart size={30} className='hover:text-hover-text'/>
                    {favorites.length > 0 &&  <div className='rounded-full bg-orange flex items-center justify-center w-[25px] h-[25px] absolute -top-2 left-5'>
                        {favorites.length}
                    </div>}
                </Link>
            
                <Link to={routes.cart} className='relative'>
                    <ShoppingCart size={30} className='hover:text-hover-text'/>
                    {cart.length > 0 &&
                        <div className='rounded-full bg-orange flex items-center justify-center w-[25px] h-[25px] absolute -top-2 left-5'>
                            {cart.length}
                        </div>
                    }
                </Link>
                <User size={30} className='hover:text-hover-text' />
            </div>
            <div className='md:hidden z-50' onClick={handleActive}>
                <Menu size={30}/>
            </div>
            <HeaderDropDownMenu isActive={isActive}/>
        </header>
    )
}

export default Header