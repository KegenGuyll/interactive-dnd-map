import classNames from "classnames"
import React, { HTMLAttributes } from "react"


type BaseMapOverlayProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  header?: React.ReactNode
  childrenContainerStyle?: string
  hideChildren?: boolean
}

const BaseMapOverlay: React.FC<BaseMapOverlayProps> = ({children, childrenContainerStyle, hideChildren = false, header, className, ...props}: BaseMapOverlayProps) => {

  return (  
    <div
      className={classNames(
        'absolute shadow z-[9999] bg-white rounded text-black overflow-y-auto',
        className
      )}
      {...props}
    >
      <div>
        {header && (
          <div className="flex sticky top-0 p-2 md:pb-2 md:p-4 bg-white z-30">
            {header}
          </div>
        )}
        {!hideChildren && (
          <div className={classNames('p-2 pt-0', childrenContainerStyle)}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default BaseMapOverlay