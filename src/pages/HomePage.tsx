import CategorySection from "../components/categorySection"
import { useCategories } from "../hooks/useCategories"

const HomePage = () => {
    const {data:categories, isLoading} = useCategories()
  return (
    <div className="bg-secondary-bg min-h-screen p-3 md:p-10   ">
        <div className="flex flex-col gap-5">
            {isLoading?  <p>Loading...</p> :   
                categories?.map((category:string, index:number) => (
                    <CategorySection key={index} categoryName={category}/>
                ))
            }
        </div>
    </div>
  )
}

export default HomePage