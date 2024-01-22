import React from 'react'
import Container from "./Container"
import FadeIn from "./FadeIn"
import Button from "./Button"
import Offices from "./Offices"

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-casal-dark px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-celeste [text-wrap:balance] sm:text-4xl">Tell us about your project </h2>
          </div>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Say Hello
            </Button>
          </div>
          <div className="mt-10 border-t border-celeste/10 pt-10">
            <h3 className="font-display text-base font-semibold text-celeste">Our Offices</h3>
            <Offices 
            invert
            className="mt-6 grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2"
            />
          </div>
      </FadeIn>
    </Container>
  )
}

export default ContactSection