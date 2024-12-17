import { IButtonProps } from "../../types/button"


const Button = ({text, icon, className, onClick}:IButtonProps) => {
  return (
    <button
      onClick={onClick} 
      className={` ${className} bg-button hover:bg-button-hover p-2 flex items-center justify-center gap-2 text-text hover:text-secondary-text
                 rounded-xl`}
    >
      {text}
      {icon?? icon}

    </button>
  )
}

export default Button