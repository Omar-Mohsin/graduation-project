import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components'
import { Providers } from '@/redux/Providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Water Melone',
  description: 'E-commerce website for water melone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
