import { IAnimatedDivProps } from "../types/animatedDiv"
import {motion} from 'motion/react'

const AnimatedDiv = ({children, className}:IAnimatedDivProps) => {
  return (
    <motion.div
        className={className}
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}

    >
        {children}
    </motion.div>
  )
}

export default AnimatedDiv