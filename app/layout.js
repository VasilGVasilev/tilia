'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  const pathName = usePathname();

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-tilia-dark" className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-tilia-dark overflow-x-hidden'>

        <Navbar
        />
 
        {/* fixed navbar requires py same for all non home pages */}
        {pathName === '/' ? (<></>) : (
        <div className='py-[6%] sm:py-[4%] md:py-[3.2%] bg-tilia-dark'></div>
        )}
        <main className='app'>
          {children}
        </main>
        <Footer toTopHandle={toTopHandle}/>
      </body>
  </html>
  )
}