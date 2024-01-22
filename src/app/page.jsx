import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";


export default function Home() {
  return (
    <main className="text-casal">
     <Container className="mt-24 sm:mt-32">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-casal-dark-shade [text-wrap:balance] sm:text-7xl">
        Unlock Limitless Possibilities for Your Business!
        </h1>
        <p className="mt-6 text-xl text-casal">
        our teams work synergistically to bring your ideas to life. We thrive on collaboration,
         ensuring that each project benefits from a rich tapestry of skills and perspectives. 
        </p>
      </FadeIn>
     </Container>
     <Clients/>
    <Testimonials className="mt-24 sm:mt-32 lg:mt-40"
      client={{ name: "Phobia", logo: logoPhobiaDark}}>
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
    </Testimonials>
    <Services/>
    <ContactSection/>
    </main>
  )
}
