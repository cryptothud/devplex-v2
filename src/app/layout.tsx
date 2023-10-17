import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import { BsTwitter, BsDiscord, BsFillSunFill } from "react-icons/bs"

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devplex',
  description: 'We help bring your vision to life and onto the blockchain.',

  openGraph: {
    title: 'Devplex',
    description: 'We help bring your vision to life and onto the blockchain.',
    images: 'https://i.ibb.co/kmKzh3q/New-Project-18.png'
  },

  twitter: {
    title: 'Devplex',
    description: 'We help bring your vision to life and onto the blockchain.',
    images: 'https://i.ibb.co/kmKzh3q/New-Project-18.png'
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.className}>
        <Image src={"/images/background.svg"} width={1920} height={1080} alt="Background" className="background absolute min-w-[100vw] min-h-[100vh] object-cover object-center z-[0] pointer-events-none" />
        <Navbar />
        {children}
      </body>
    </html >
  )
}
