import Link from "next/link";
import clsx from "clsx"
    import {
        BsFacebook,
        BsTwitter,
        BsGithub,
        BsYoutube,
        BsLinkedin,
      } from "react-icons/bs";

export const SocialMediaProfiles =[
    {
        title: "Youtube",
        href: "https://www.youtube.com/@reactjsBD/",
        icon: BsYoutube,
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/Noorlalu143/",
        icon: BsFacebook,
      },
      {
        title: "Instagram",
        href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
        icon: BsLinkedin,
      },
      { title: "Twitter", href: "https://twitter.com", icon: BsTwitter },

]
const SocialMedia = ({ className, invert = false}) => {
  return (
   <ul
     role="list"
     className={clsx(
      "flex gap-x-10", invert ? "text-white" : "text-casal",
      className
     )}
   >
    {
      SocialMediaProfiles.map((item)=> (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-white" : "hover:text-casal-light"
            )}
          
          >
            <item.icon className="h-6 w-6 fill-current"/>
          </Link>
        </li>
      ))
    }

   </ul>
  )
}

export default SocialMedia