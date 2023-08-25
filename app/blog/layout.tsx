import '../../app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Banner from '../blog/_components/Banner'

import { TopBar, NavBar, Footer } from '../components';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The Data Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={` ${inter.className}
      bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900
      dark:text-white h-full selection:bg-gray-50 `}
      >
        <TopBar />
        <Banner />
        <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
