import React from 'react'
import FadeIn, { FadeInStagger } from "./FadeIn"
import Border from "./Border";
import clsx from "clsx";

export function  GridList  ({className, children }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",
       className
      )}>
        {children}
      </ul>
    </FadeInStagger>
  ) 
};

export function GridListItem({ title, children, className,  invert = false}) {
  return (
    <li className={clsx(
      "text-base",
      invert ? "text-celeste-light before:bg-celeste after:bg-celeste/10"
      : "text-casal-casal before:bg-casal-dark after:bg-neutral-100",
      className
    )}>
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong 
          className={clsx(
            "font-semibold",
            invert ? "text-white" : "text-casal"
          )}
          >
            {title}.
          </strong>{" "}
          {children}

        </Border>
      </FadeIn>

    </li>
  )
}
