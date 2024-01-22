import Link from "next/link";
import clsx from "clsx";

const Button = ({invert, href, className, children, ...props}) => {

    className = clsx(
        className,
        "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
        invert ? 
        "bg-celeste text-casal-light hover:bg-casal" 
        :"bg-casal-light text-celeste-light hover:celeste"
    );

    let inner = <span>{children}</span>

    if(href) {
        return(
            <Link href={href} className={className} {...props}>
            {inner}
            </Link>
        )
    }
  return (
 <button className={className} {...props}>
 {inner}
 </button>
  )
}

export default Button