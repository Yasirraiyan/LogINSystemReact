import Image from "next/image";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import { AiFillEye } from "react-icons/ai";
import img3 from "../../assets/3.png";
import pulse from "../../assets/PULSE.png";
export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden shadow-3xl shadow-amber-900 from-top-left ">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-amber-300 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-30 h-50 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 opacity-40 blur-3xl pointer-events-none origin-bottom-left scale-125"></div>
      <div className="absolute top-0 left-5 z-50 px-35">
        <Image
          src={pulse}
          alt="Pulse Logo"
          width={224.03}
          height={70.95}
          className="object-contain"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16   overflow-hidden">
        <div
          className="w-full max-w-md width={461px}
          height={459px} top={298px} left={315px} gap={42px}"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mt-4 ml-2 gap={26px} width={521px} height={104px}">
              Welcome Back <br /> PULSE!
            </h1>
          </div>
          <form className="flex flex-col gap-6 mt-4 ml-2 ">
            <div className="flex flex-col">
              <label className="mb-1 text-slate-500 font-inter">E-mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-slate-400 rounded-md px-[18px] py-[7px] pt-[7px] pr-[18px] pb-[7px] pl-[18px] gap-[10px] font-inter font-medium text-base focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors width={460px} height={54px}"
              />
            </div>
            <div className="flex flex-col ">
              <label className="mb-1 text-slate-500">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full border border-slate-500 rounded-md px-[18px] py-[7px] pt-[7px] pr-[18px] pb-[7px] pl-[18px] gap-[10px] font-inter font-medium text-base focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors width={460px} height={54px}"
                />
                <div className="space-x-[13px]">
                  <span className="text-slate-400 absolute left-100 top-2.5 cursor-pointer width={1px} height={40px} ">
                    |
                  </span>
                  <span className="absolute right-5 top-2.5 cursor-pointer text-slate-500 width={24px} height={24px]">
                    <AiFillEye />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm height={24px} width={460px}">
              <label className="flex items-center gap-2 text-slate-500 text-base">
                <input type="checkbox" /> Remember me
              </label>
              <a
                href="#"
                className="text-[#B39600] hover:underline   font-medium text-base leading-[150%] tracking-[0] font-sans"
              >
                Forgot Password?
              </a>
            </div>

            {/* <button
              className=" bg-yellow-400  text-black font-semibold py-2 rounded-full 
                hover:bg-yellow-500 transition active hover:scale-105 cursor-pointer"
            >
              Sign in
            </button>
 */}
            <button
              style={{
                background:
                  "linear-gradient(90deg, #F3CD0E 0%, #FBEBAB 170.44%)",
                color: "black",
              }}
              className=" pt-[18px] pr-[186px] pl-[186px] pb-[18px] gap-[16px] font-semibold py-2 px-6 rounded-[49px] hover:bg-yellow-500 active:bg-green-400 transition transform hover:scale-105 cursor-pointer width={460px} height={54px}"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-1/2 hidden md:flex relative items-start justify-start 
          bg-gradient-to-br from-[#f4cf16] to-[#FFE774] 
          rounded-3xl mt-7 mb-4 mr-7 h-[760px] scroll-position-fixed"
      >
        <div className="items-start px-8 py-4 space-y-6 -translate-y-3 w-full">
          <div className="mt-30 -translate-y-5">
            <h2 className="text-3xl font-bold mb-4 pl-5 mt-30 text-black">
              The Simplest way to manage <br /> your workforce.
            </h2>
            <p className="text-gray-700 mb-4 pl-5 -mt-2">
              Enter your credentials to access your account.
            </p>
          </div>
          <div className="mt-20 mb-300 -translate-y-10 scroll-position-fixed">
            <div className="flex gap-4 pl-5 mt-12 pt-20 w-full mb-20 -translate-y-10">
              <Image
                src={img2}
                alt="Illustration 2"
                width={400}
                height={337}
                className="rounded-[20.03px] transition-transform duration-300 
                w-[180px] h-[337px] object-cover -translate-x-13"
              />
              <Image
                src={img1}
                alt="Illustration 1"
                width={400}
                height={337}
                className="rounded-[20.03px]  transition-transform duration-300 
                w-[399.61px] h-[337.52px] object-cover -translate-x-13"
              />
              <Image
                src={img3}
                alt="Illustration 3"
                width={400}
                height={337}
                className="rounded-[20.03px] transition-transform duration-300 
                w-[200px] h-[337px] object-cover -translate-x-13 px-0 shadow-[20px_0px_40px_-5px_#F4CF16]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
