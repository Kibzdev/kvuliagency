import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
const Logo = ({ invert, href, className, children, ...props}) => {
 className = clsx(
  className,
  "dark",
  invert ? "text-celeste hover:text-blue-600" : "text-casal-light  hover:text-casal"
 );
 const inner = <span className='relative'>{children}</span>
 if (href){
  return (
    <Link href={href} className={className} {...props}>{inner}</Link>
  )
 }

  return (
    <h2 className={clsx (
      "cursor-pointer text-2xl font-semibold duration-300",
      className
    )}
    {...props}>{inner}</h2>
  )
}

export default Logo