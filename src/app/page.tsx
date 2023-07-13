export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 relative z-[1]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl sm:text-6xl text-[#1D1F20] font-medium text-center"><span className="text-[#E1AE2A]">Your</span> Vision. <span className="text-[#658EBE]">Our</span> Code.</h1>
        <h2 className="text-base text-[#1D1F20] opacity-50 text-center">We help bring your vision to life and onto the blockchain.</h2>
        <a href="mailto:contact@devplex.org">
          <button className="bg-white border-[2px] border-[#E1AE2A] rounded-[50px] text-[#1D1F20] text-base font-medium py-3 px-10 shadow-[0_4px_30px_#1D1F2020] hover:bg-[#f7f7f7]">Let's Get Started</button>
        </a>
      </div>
    </main>
  )
}
