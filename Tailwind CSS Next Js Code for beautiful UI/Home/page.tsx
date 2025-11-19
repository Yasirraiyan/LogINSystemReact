import Image from "next/image";
import Frame from "../Frame.png";
import Img from "./img.png";
import { AiFillEye } from "react-icons/ai";
import pulse from "../../assets/PULSE.png";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="absolute top-0.5 left-5 z-50 px-40">
        <Image
          src={pulse}
          alt="Pulse Logo"
          width={120}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-center bg-white px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div>{/*<img src={Img}></img>*/}</div>
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
                className={`
       border border-gray-300 rounded-md px-4 py-2 pt-1.75 pb-1.75 pr-4.5 pl-4.5 w-full
    focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100
    transition-colors
  `}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-500">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="********"
                  className="border border-gray-300 rounded-md px-4 py-2 pt-1.75 pb-1.75 pr-4.5 pl-4.5 w-full focus:outline-none focus:ring-4 focus:ring-yellow-400  focus:bg-green-100"
                />
                <div className="space-x-[13px]">
                  <span className="text-gray-400 absolute left-100 top-2.5 cursor-pointer ">
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
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-yellow-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition active:bg-green-400 transition cursor-pointer">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div
        className=" w-1/2  hidden md:flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-100 mt-7 mb-4 mr-7 rounded-md bg-gradient-to-b from bg-yellow-400 to bg-yellow-200
        width={947} height={960} rounded-4xl style={{
       clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
       background: 'linear-gradient(to bottom right, #facc15, #fef3c7)'
     }}"
      >
        <div className="items-center px-8 py-2 space-y-6 -translate-y-3">
          <div className="mt-30">
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
              width={947}
              height={960}
              className="mt-30 pt-20"
            />
          }
        </div>
      </div>
    </div>
  );
}
