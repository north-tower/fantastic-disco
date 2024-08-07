import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* <video className="absolute inset-0 w-full h-full object-cover z-[-1] animate-slow-motion" 
      autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/7722624/7722624-uhd_1440_2560_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5 ">
              <p className="text-lg text-white">Based in Kenya.Operate worldwide</p>

            
              <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-xl 
              font-extrabold text-transparent sm:text-4xl">Empower your business
with <br /> top-class software development</p>
</div>
            <div className="mt-36">



              {/* <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Stream Now </a>
              <a href="/" aria-label="" className="underline-offset-2 inline-flex items-center font-semibold text-blue-600 underline transition-colors duration-200 hover:underline">Watch how it works</a> */}
            </div>
     
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce 
            rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -top-20 h-28 w-28 rounded-xl bg-white text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-white text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <img className="-mb-20" src="/images/2fugLKmm9JsRrFhS_F57Z.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
