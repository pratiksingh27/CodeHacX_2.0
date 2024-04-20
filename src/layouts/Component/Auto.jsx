import Marquee from "react-fast-marquee";


export default function Auto() {
  return (
    <>
        <div className="py-4 flex flex-col justify-center items-center bg-[#181818] text-neutral-200">
            <div className="w-[75%] flex flex-col">
                <div className="flex space-y-2 flex-col text-center mb-14">
                    <span className="text-5xl font-bold">
                        patner
                    </span>
                    <span className="text-2xl">
                        community collab
                    </span>
                </div>
                <Marquee pauseOnHover>
                    <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
                        Tailwindcss
                    </div>
                    <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
                        Tailwindcss
                    </div>
                    
                    
                </Marquee>
                <Marquee direction="right" pauseOnHover>
                <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
                        Tailwindcss
                    </div>
                    <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
                        Tailwindcss
                    </div>
                </Marquee>
            </div>
        </div>
    </>
  )
}
