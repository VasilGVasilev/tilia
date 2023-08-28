'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  const pathName = usePathname();

  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-tilia-white" className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-tilia-white overflow-x-hidden'>

        <Navbar
        />
 
        {/* fixed navbar requires py same for all non home pages */}
        {pathName === '/' ? (<></>) : (
        <div className='py-12 sm:py-[64px] bg-tilia-white'></div>
        )}
        <main>
          {children}
        </main>
        <Footer/>
      </body>
  </html>
  )
}