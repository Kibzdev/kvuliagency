import React from 'react'
import GridPattern from './GridPattern'
import Container from './Container'
import FadeIn from './FadeIn'
import clsx from 'clsx'
import Image from 'next/image'


const Testimonials = ({ children, client, className}) => {
  return (
    <div
       className={clsx(
        "relative isolate bg-celeste py-16 sm:py-28 md:py-32",
        className
       )}
    >
      <GridPattern className="absolute inset-0 -z-10 h-full w-full fill-celeste stroke-celeste-light [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]" 
      yOffset={-256}/>
      <Container>
        <FadeIn>
           <figure className="mx-auto max-w-4xl">
              <blockquote className="relative font-display text-3xl font-medium tracking-tight text-casal sm:text-4xl">
                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">{children}</p>
              </blockquote>
              <figcaption className='mt-10'>
            <Image
             src={client.logo}
             alt={client.logo}
             unoptimized
            />
           </figcaption>
           </figure>
         
        </FadeIn>
      </Container>
    </div>
  )
}

export default Testimonials