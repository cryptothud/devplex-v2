"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsTwitter, BsDiscord } from "react-icons/bs"
import { HiMoon } from "react-icons/hi"
import { BiSun, BiMoon } from "react-icons/bi"
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'

export const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false)
    const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' })

    useEffect(() => {
        const doc = document.documentElement
        if (isDarkMode === true) {
            doc.classList.remove("light")
            doc.classList.add("dark")
            setDarkMode(isDarkMode)
        } else {
            doc.classList.remove("dark")
            doc.classList.add("light")
            setDarkMode(isDarkMode)
        }
    }, [isDarkMode])

    const handleDarkMode = () => {
        const doc = document.documentElement
        if (doc.classList.contains("dark")) {
            doc.classList.remove("dark")
            doc.classList.add("light")
            setDarkMode(false)
        } else {
            doc.classList.remove("light")
            doc.classList.add("dark")
            setDarkMode(true)
        }
        return
    }

    return (
        <>
            <Head>
                <meta name="theme-color" content={darkMode ? "#1D1F20" : "#fafafa"} />
            </Head>
            <div className="fixed w-screen top-0 left-0 py-4 px-4 sm:px-8 z-[2] flex justify-between items-center">
                <div className="flex justify-center items-center gap-2 select-none pointer-events-none">
                    <Image src={darkMode ? "/images/devplex-light.svg" : "/images/devplex-color.svg"} alt="Logo" width={70} height={70} className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px]" />
                    <h1 className="main-text-color text-3xl sm:text-4xl font-medium">Devplex</h1>
                </div>
                <div className="flex justify-center gap-2 items-center">
                    <a className="flex justify-center items-center hover:opacity-90 cursor-pointer" href="https://twitter.com/CryptoThud" target="_blank">
                        <BsTwitter size={22} color={darkMode ? "#fafafa" : "#1D1F20"} />
                    </a>
                    <a className="flex justify-center items-center hover:opacity-90 cursor-pointer" href="https://discord.com/users/654481823585271852" target="_blank">
                        <BsDiscord size={22} color={darkMode ? "#fafafa" : "#1D1F20"} />
                    </a>
                    <a className="flex justify-center items-center hover:opacity-90 cursor-pointer" onClick={handleDarkMode}>
                        {darkMode ? <BiSun size={22} color={darkMode ? "#fafafa" : "#1D1F20"} /> : <HiMoon size={22} color={darkMode ? "#fafafa" : "#1D1F20"} />}
                    </a>
                </div>
            </div>
        </>
    )
}