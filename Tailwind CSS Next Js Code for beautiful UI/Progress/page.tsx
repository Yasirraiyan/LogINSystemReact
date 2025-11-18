import Image from "next/image";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import { AiFillEye } from "react-icons/ai";
import img3 from "../../assets/3.png";
export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16 mb-35 translate-y-20">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mt-4 ml-2">
              Welcome Back <br /> PULSE!
            </h1>
          </div>
          <form className="flex flex-col gap-6 mt-4 ml-2">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-500">E-mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md px-4 py-[7px] pr-4.5 pl-4.5
                  focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 
                  transition-colors w-full"
              />
            </div>

            <div className="flex flex-col ">
              <label className="mb-1 text-gray-500">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="********"
                  className="border border-gray-300 rounded-md px-4 py-[7px] pr-4.5 pl-4.5 w-full
                    focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100"
                />
                <div className="space-x-[13px]">
                  <span className="text-gray-400 absolute left-100 top-2.5 cursor-pointer">
                    |
                  </span>
                  <span className="absolute right-5 top-2.5 cursor-pointer text-gray-400">
                    <AiFillEye />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-yellow-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              className="bg-yellow-400 text-black font-semibold py-2 rounded-full 
                hover:bg-yellow-500 transition active hover:scale-105 cursor-pointer"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div
        className="w-1/2 hidden md:flex relative items-start justify-start 
          bg-gradient-to-br from-[#F4CF16] to-[#FFE774] 
          rounded-3xl mt-7 mb-4 mr-7 h-[760px]"
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

          <div className="mt-20 mb-300 -translate-y-10">
            <div className="flex gap-4 pl-5 mt-12 pt-20 w-full mb-20 -translate-y-10">
              <Image
                src={img2}
                alt="Illustration 2"
                width={400}
                height={337}
                className="rounded-lg  transition-transform duration-300 
                w-[180px] h-[337px] object-cover -translate-x-10"
              />
              <Image
                src={img1}
                alt="Illustration 1"
                width={400}
                height={337}
                className="rounded-lg  transition-transform duration-300 
                w-[399.61px] h-[337px] object-cover -translate-x-10"
              />
              <Image
                src={img3}
                alt="Illustration 3"
                width={400}
                height={337}
                className="rounded-lg  transition-transform duration-300 
                w-[200px] h-[337px] object-cover -translate-x-10 px-0 shadow-[15px_0px_25px_#F4CF16]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
