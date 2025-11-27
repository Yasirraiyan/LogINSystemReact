import Image from "next/image";
import Frame from "../Frame.png";
import Img from "./img.png";
import { AiFillEye } from "react-icons/ai";
import pulse from "../../assets/PULSE.png";
export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden shadow-3xl shadow-amber-900 from-top-left ">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-amber-200 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-30 rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 opacity-40 blur-3xl pointer-events-none origin-bottom-left scale-125"></div>
      <div className="absolute top-0.5 left-5 z-50 px-40">
        <Image
          src={pulse}
          alt="Pulse Logo"
          width={120}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-center bg-white px-16 overflow-hidden">
        <div
          className="w-full max-w-md width={461px}
          height={459px} top={298px} left={315px} gap={42px}"
        >
          <div className="mb-8">
            <div>{/*<img src={Img}></img>*/}</div>
            <h1 className="text-4xl font-bold text-black mt-4 ml-2 gap={26px} width={460px} height={104px}">
              Welcome Back <br /> PULSE!
            </h1>
          </div>
          <form className="flex flex-col gap-6 mt-4 ml-2">
            <div className="flex flex-col">
              <label className="mb-1 text-slate-500 font-inter">E-mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-slate-400 rounded-md px-[18px] py-[7px] pt-[7px] pr-[18px] pb-[7px] pl-[18px] gap-[10px] font-inter font-medium text-base focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors width={460px} height={54px}"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-slate-500">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-slate-500 rounded-md px-[18px] py-[7px] pt-[7px] pr-[18px] pb-[7px] pl-[18px] gap-[10px] font-inter font-medium text-base focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors width={460px} height={54px}"
                />
                <div className="space-x-[13px]">
                  <span className="text-slate-500 absolute left-100 top-2.5 cursor-pointer width={1px} height={40px} ">
                    |
                  </span>
                  <span className="absolute right-5 top-2.5 cursor-pointer text-slate-500 width={24px} height={24px]">
                    <AiFillEye />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm height={24px} width={460px}">
              <label className="flex items-center gap-2 text-base text-slate-500">
                <input type="checkbox" />
                Remember me
              </label>
              <a
                href="#"
                className="text-[#B39600] hover:underline   font-medium text-base leading-[150%] tracking-[0] font-sans"
              >
                Forgot Password?
              </a>
            </div>
            {/*<button className="bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition transform active:bg-green-400 transition cursor-pointer hover:scale-105 cursor-pointer  bg-gradient-to-r from-[#F3CD0E] to-[#FBEBAB])'">
              Sign in
            </button>*/}
            <button
              style={{
                background:
                  "linear-gradient(90deg, #F3CD0E 0%, #FBEBAB 170.44%)",
                color: "black",
              }}
              className=" pt-[18px] pr-[186px] pl-[186px] pb-[18px] gap-[16px] font-semibold py-2 px-6 rounded-[49px] hover:bg-yellow-500 active:bg-green-400 transition transform hover:scale-105 cursor-pointer width={460px} height={54px} "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className=" w-1/2 hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-400 via-yellow-300/30 to-yellow-100/0 mt-7 mb-4 mr-7 width={947} height={960} top={494.5} left={50.5}   rounded-md style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)', background: 'linear-gradient(to bottom right, from-[#F4CF16] to-[#FFF2B3]) ' }}">
        <div className="items-center px-8 py-2 space-y-6 -translate-y-3 ">
          <div className="mt-30 width={620.9} height={152} top={112.8} left={75.41} gap={22}">
            <h2 className="text-3xl font-bold mb-4 pl-5 mt-30">
              The Simplest way to manage <br />
              your workforce.
            </h2>
            <p className="text-gray-700 mb-4 pl-5 -mt-2">
              Enter your credentials to access your account.
            </p>
          </div>
          {
            <Image
              src={Frame}
              alt="Illustration"
              width={846}
              height={401}
              className="mt-30 pt-20"
            />
          }
        </div>
      </div>
    </div>
  );
}
