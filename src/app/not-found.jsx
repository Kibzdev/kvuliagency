import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
        <FadeIn className="flex flex-col items-center">
            <p className="font-display text-4xl font-semibold text-casal-dark-shade "> 
            404
            </p>
            <h1 className="mt-4 font-display text-2xl font-semibold text-casal-dark-shade">
                Page Not Found
            </h1>
           <p className="mt-2 text-sm text-casal">
             Sorry we could not find the page you are looking for
           </p>
           <Link 
           href="/"
           className="mt-4 text-sm font-semibold text-casal-dark transition hover:text-casal-light"
           >
             Go to the home page
           </Link>
        </FadeIn>
    </Container>
  )
}

export default NotFound