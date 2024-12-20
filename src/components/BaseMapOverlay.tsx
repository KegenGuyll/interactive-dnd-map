import classNames from "classnames"
import { HTMLAttributes } from "react"


type BaseMapOverlayProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const BaseMapOverlay: React.FC<BaseMapOverlayProps> = ({children, className, ...props}: BaseMapOverlayProps) => {

  return (  
    <div
      className={classNames(
        'absolute shadow z-[9999] bg-white p-4 rounded text-black',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default BaseMapOverlay