'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-tilia-white" className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-tilia-white overflow-x-hidden'>
        
        {/* tried to extract dynamically ref.current.offsetHeight but didnt work so this hacky bar to push down the content otherwise hidden by Navbar */}
                <div  className={`py-[52px] sm:py-[58px] bg-tilia-white`}></div>
        <Navbar
        />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
  </html>
  )
}