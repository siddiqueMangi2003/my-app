import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { link } from 'fs'
import Head from "./head"

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head/>
      <body>
      <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
  
<NavBar/>
        
        {children}
</main>
  </main>
  </body>
    </html>
  )
}

//supa base : pass: eqGngw!45Ak2F54