import clsx from "clsx"
import React from 'react'

const Border = ({
 className,
 position ="top",
 invert = false,
 as: Component = "div",
 ...props
}) => {
  return (
   <Component className={clsx(
    className,
    "relative before:absolute after:absolute",
    invert
    ? "before:bg-celeste-light ater:bg-celeste-dark-shade"
     : "before:bg-casal-dark after:bg-casal-light",

     position === "top" && 
     "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 afterafter:right-0 after:top-0 after:h-px",
     position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
  )}
  {...props}
   
   />
  )
}

export default Border