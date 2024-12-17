import Button from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router'
import { routes } from '../constants/routes'
import { ICategorySectionProps } from '../types/categorySection'
import { useProductByCategory } from '../hooks/useProductsByCat'
import ProductCard from './productCard'
import AnimatedDiv from './animatedDiv'


const CategorySection = ({categoryName}:ICategorySectionProps) => {
  const {data:productData, isLoading} = useProductByCategory(categoryName, 5)

  const navigate = useNavigate()
  const handelButtonClick = (catName:string) => {
    navigate(`${routes.category}/${catName}`)
  }

  return (
    <AnimatedDiv
        className='w-full bg-main-bg px-2 py-5 rounded-lg flex flex-col items-center gap-3'
    >
        <h1 className='text-center text-heading text-2xl font-bold capitalize mb-4'>
            {categoryName}
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5 flex-wrap'>
          {isLoading? <p>Loading...</p> :
            productData?.map((product, index) => (
              <ProductCard key={index} {...product}/>
            ))

          }
        </div>
        <Button text='Show More' icon={<ArrowRight/>} onClick={() => handelButtonClick(categoryName)}/>
    </AnimatedDiv>
  )
}

export default CategorySection