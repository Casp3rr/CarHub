import './global.css';


import {Footer} from "@/components/Footer";
import NavBar from "@/components/NavBar";


export const  metadata = {
  title: 'Car Showcase',
  description: 'discover the best cars for you'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
