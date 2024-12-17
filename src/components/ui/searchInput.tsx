import { Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useAllProducts } from "../../hooks/useAllProducts"
import { ProductType } from "../../types/productType"
import {motion} from 'motion/react'
import { Link } from "react-router"
import { routes } from "../../constants/routes"
const SearchInput = () => {

        const inputRef = useRef<HTMLInputElement>(null)
        const containerRef = useRef<HTMLDivElement>(null)
        const [value, setValue] = useState('')
        const [sortedProduct, setSortedProduct] = useState<ProductType[]>([])
        const products = useAllProducts()

        const clearInput = () => {
            setValue('')
        }

        useEffect(() => {
            const filteredProd = products.data?.filter((product ) => product.title.includes(value)) ?? []
            setSortedProduct(filteredProd)
        }, [value, products.data])

        useEffect(() => {
            const handleClickOutside = (event:MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)){
                    clearInput()
                }
            }

            document.addEventListener('mousedown', handleClickOutside)

            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [])

        const setFocus = () => {
            inputRef.current?.focus()
        }
  return (
    <div className='relative hidden md:flex justify-between bg-white rounded-xl p-2 min-w-[350px] text-black' onClick={setFocus} ref={containerRef}>
        <input 
            type="text" 
            className='bg-transparent outline-none w-full text-base' 
            maxLength={30}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
            placeholder='Search'
        />
        <Search/>
        {value.length > 0 && 
            <motion.div
                initial={{y:-10, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
                className="absolute top-[50px] left-0 w-full rounded-xl bg-main-bg p-4 border-border border-2"
            >
                {sortedProduct.length === 0? <p className="text-text font-bold capitalize">no results</p> :
                    <div className="flex flex-col gap-4">
                        {
                            sortedProduct.slice(0, 5).map((product) => (
                                <Link to={`${routes.product}/${product.id}`}
                                    className="flex items-center text-text hover:text-hover-text"
                                    onClick={clearInput}
                                >
                                    <img src={product.image} width={50} height={50} alt="" />
                                    <h4 className="truncate ml-2">{product.title}</h4>
                                </Link>
                            ))
                        }
                    </div>
                }
            </motion.div>
        }
    </div>
  )
}

export default SearchInput