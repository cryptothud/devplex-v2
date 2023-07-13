import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import { BsTwitter, BsDiscord } from "react-icons/bs"

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devplex',
  description: 'We help bring your vision to life and onto the blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Image src={"/images/background.svg"} width={1920} height={1080} alt="Background" className="fixed min-w-[100vw] min-h-[100vh] object-cover object-center z-[0] pointer-events-none" />
        <div className="fixed w-screen top-0 left-0 py-4 px-4 sm:px-8 z-[2] flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 select-none pointer-events-none">
            <Image src={"/images/devplex-color.svg"} alt="Logo" width={70} height={70} className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px]" />
            <h1 className="text-[#1D1F20] text-3xl sm:text-4xl font-medium">Devplex</h1>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <a className="flex justify-center items-center hover:opacity-90" href="https://twitter.com/CryptoThud" target="_blank">
              <BsTwitter size={22} color={"#1D1F20"} />
            </a>
            <a className="flex justify-center items-center hover:opacity-90" href="https://discord.com/users/654481823585271852" target="_blank">
              <BsDiscord size={22} color={"#1D1F20"} />
            </a>
          </div>
        </div>
        {children}
      </body>
    </html >
  )
}
