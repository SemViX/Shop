import { Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="min-h-[150px] bg-main-bg p-14 text-text flex flex-col md:flex-row justify-between">
        <div className="text-xl font-bold">
            SemViX Shop
        </div>
        <div className="flex gap-3">
            <a target="_blank" className='hover:text-orange-500' href="https://instagram.com">
                <Instagram size={30}/>
            </a>
            <a className='hover:text-orange-500' target="blank" href="https://facebook.com">
                <Facebook size={30}/>
            </a>
            <a className='hover:text-orange-500' target="blank" href="https://youtube.com">
                <Youtube size={30}/>
            </a>
        </div>
    </footer>
  )
}

export default Footer