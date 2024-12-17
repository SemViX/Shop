import { Link } from "react-router"
import { headerLinks } from "../../constants/routes"

interface IMenuProps{
    isActive: boolean
}

const HeaderDropDownMenu = ({isActive}:IMenuProps) => {
  return (
    <div className={`${isActive? 'opacity-1 h-[250px]': 'opacity-0 h-0'} md:hidden bg-orange absolute top-0 left-0 right-0 transition-all duration-500 flex items-center justify-center`}>
        <ul className="text-center">
            {
                headerLinks.map((item, index) => (
                    <li key={index} className="border-b-2 mb-3 text-xl">
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))
            }
        </ul>
       
    </div>
  )
}

export default HeaderDropDownMenu