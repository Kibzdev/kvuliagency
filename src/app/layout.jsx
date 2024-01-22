
import './globals.css'
import RootLayout from '@/components/Rootlayout'



export const metadata = {

 title: {
    template: 'KvuliAgency',
    default: 'Your go-to partner for cutting-edge website design, seamless web development, and innovative SAAS solutions. We specialize in crafting visually stunning and functionally robust websites and web applications to propel your business to new heights. Explore the art of digital transformation with Kvuli Agency – where creativity meets technology for a web experience like never before',
  }
  
}

export default function Layout({ children }) {
  return (
    <html lang="en"
    className="h-full bg-casal text-base antialiased text-casal-dark"
    >
      <body className="flex min-h-full flex-col" >
        <RootLayout>{children}</RootLayout>
        </body>
    </html>
  )
}
