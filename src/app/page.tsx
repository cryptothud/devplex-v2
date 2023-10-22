"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, FreeMode, Pagination } from "swiper";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-24 relative z-[1]">
      <div className="flex flex-col gap-4 items-center justify-center h-screen relative">
        <h1 className="text-4xl sm:text-6xl main-text-color font-medium text-center"><span className="text-[#E1AE2A]">Your</span> Vision. <span className="text-[#658EBE]">Our</span> Code.</h1>
        <h2 className="text-base main-text-color opacity-50 text-center tracking-wide">We help bring your vision to life and onto the blockchain.</h2>
        <a href="mailto:contact@devplex.org">
          <button className="main-button border-[2px] border-[#E1AE2A] rounded-[50px] main-text-color text-base font-medium py-3 px-10 main-shadow">Let's Get Started</button>
        </a>
        <Arrows />
      </div>
      <Projects />
    </main>
  )
}

const Arrows = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if the user is at the top of the page (you can adjust the threshold)
      setIsAtTop(scrollY < 100);
    };

    const appHeight = async () => {
      try {
        const doc = document.documentElement
        doc.style.setProperty(`--app-height`, `${window.innerHeight}px`)
      } catch (e) {
        //don't need to do anything here. only to prevent random bug
      }
    }

    appHeight()

    window.addEventListener('resize', appHeight)
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', appHeight)
    };
  }, []);

  return (
    <div className={`absolute bottom-4 w-full flex justify-center duration-300 ${isAtTop ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}>
      <div className="arrow cursor-pointer" onClick={() => window.scrollTo(isAtTop ? {
        top: 2000,
        behavior: 'smooth'
      } : null)}>
        <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0L4.66506 3.75H0.334936L2.5 0Z" fill="#635BFF" />
        </svg>
        <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0L4.66506 3.75H0.334936L2.5 0Z" fill="#635BFF" />
        </svg>
        <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0L4.66506 3.75H0.334936L2.5 0Z" fill="#635BFF" />
        </svg>
      </div>
    </div >
  )

}

const Projects = () => {
  return (
    <div className="projects-wrapper pt-20 pb-24 sm:pb-40">
      <div className="w-screen overflow-hidden relative">
        <div className="left-fade" />
        <div
          className="animate-projects flex gap-4 py-3"
        >
          <Swiper
            speed={7500}
            slidesPerView={"auto"}
            loop={true}
            freeMode={true}
            loopedSlides={projects.length}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
            grabCursor={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title + index}>
                <div
                  className={`project flex gap-3 flex-col justify-start w-[200px] min-w-[200px] sm:w-[300px] sm:min-w-[300px] h-[300px] sm:h-[360px] overflow-hidden p-3 sm:p-6 rounded-3xl hover:translate-y-[-5px] duration-200`}
                >
                  <Zoom zoomMargin={30}>
                    <Image alt={project.title} src={project.image} width="800" height="400" className="rounded-2xl h-full object-cover w-full" quality={100} />
                  </Zoom>
                  <h1 className="text-base sm:text-xl main-text-color text-center tracking-wide">{project.title}</h1>
                  <h1 className="text-xs sm:text-sm main-text-color text-center tracking-wide">{project.description}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="right-fade" />
      </div>
    </div>
  )
}

const projects = [
  {
    title: `LUV Market`,
    description: `Full-stack crypto shop. Purchase physical goods, services, and NFTs with USD or cryptocurrency and have them shipped directly to you.`,
    image: "/images/portfolio/LUV-Market.png"
  },
  {
    title: `Gruuvies Claim`,
    description: `Full-stack "claim tokens" dApp. Users can select their NFTs every month to receive a customize-able amount of SPL tokens.`,
    image: "/images/portfolio/Gruuvies-Claim.png"
  },
  {
    title: `TTCC Staking`,
    description: `Whitelabeled staking service where your NFT stays in your wallet and unlocked while it passively earns SPL tokens.`,
    image: "/images/portfolio/TTCC-Staking.png"
  },
  {
    title: `Gruuvboxes`,
    description: `Full-stack mystery boxes dApp. Spin the wheel for a chance to receive SOL, SPL tokens, merch, and more.`,
    image: "/images/portfolio/Gruuvboxes.png"
  },
  {
    title: `Aire`,
    description: `Front-end landing page for cryptocurrency item shop.`,
    image: "/images/portfolio/Aire.png"
  },
  {
    title: `AP Social Media`,
    description: `Full-stack social media app to create posts, create topics, join communities, follow friends, and interact with the Solana blockchain.`,
    image: "/images/portfolio/AP.png"
  },
  {
    title: `Great Goats`,
    description: `Full-stack "casino" games dApp. Flip a coin against a bot or other players for a 50/50 chance of doubling your wager.`,
    image: "/images/portfolio/Great-Goats.png"
  },
  {
    title: `Hoopas Staking`,
    description: `Front-end "staking nfts" dApp. Users can select which NFTs they'd like to lockup for an extended period of time.`,
    image: "/images/portfolio/Hoopas-Staking.png"
  },
  {
    title: `Jikan Evolve`,
    description: `Full-stack upgrade-your-nfts dApp. Select any Jikan NFT to upgrade it's art by minting a new NFT and sending it directly to the user.`,
    image: "/images/portfolio/Jikan-Evolve.png"
  },
  {
    title: `Lootbyte`,
    description: `Full-stack mystery boxes dApp. Spin the wheel for a chance to receive SOL, SPL tokens, merch, and more.`,
    image: "/images/portfolio/Lootbyte.png"
  },
  {
    title: `Ryoshimoto`,
    description: `Front-end landing page for Ethereum NFT mint & contract deployment.`,
    image: "/images/portfolio/Ryoshimoto.png"
  },
  {
    title: `SFL`,
    description: `Full-stack fantasy sports website & cross-mint integration to compete for the last-person-standing prize pool.`,
    image: "/images/portfolio/SFL.png"
  },
  {
    title: `Spoonverse`,
    description: `Multi-project NFT staking service with integration to play mini-games.`,
    image: "/images/portfolio/Spoonverse.png"
  },
  {
    title: `TTCC Adventures`,
    description: `Send your NFT on "missions" which locks the NFT up for a pre-determined amount of time, and receives a reward one the NFT unlocks.`,
    image: "/images/portfolio/TTCC-Adventures.png"
  },
  {
    title: `TTCC Shop`,
    description: `Full-stack trait/NFT store, mystery boxes, and SPL token market.`,
    image: "/images/portfolio/TTCC-Shop.png"
  },
  {
    title: `Sojoswap`,
    description: `Front-end uniswap clone.`,
    image: "/images/portfolio/Uniswap-Clone.png"
  }
]