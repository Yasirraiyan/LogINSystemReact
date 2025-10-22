//import Image from "next/image";
import Image from "next/image";
import Img from "../img.png";
import Frame from "../Frame.png";
import img from "../Image.png.png";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-white px-16">
        <div className="w-full max-w-md ">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black  ">
              Welcome Back
              <br />
              PULSE!
            </h1>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-500">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className={`border border-gray-300 rounded-md px-4 py-2 pt-1.75 pb-1.75 pr-4.5 pl-4.5 w-full focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors`}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-500">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="********"
                  className={`border border-gray-300 rounded-md px-4 py-2 pt-1.75 pb-1.75 pr-4.5 pl-4.5 w-full focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100 transition-colors`}
                />
                <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400">
                  {" "}
                  👁️
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="text-yellow-500">
                Forgot Password
              </a>
            </div>
            <button className="bg-amber-300 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 active:bg-green-400">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 relative hidden md:flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-200 mt-4 mb-4 mr-4 rounded-md">
        <div className="items-center px-8">
          <h2 className="text-3xl font-bold mb-4 pl-5 -mt-2">
            The Simplest way to manage <br />
            your workforce
          </h2>
          <p className="text-gray-700 mb-4 pl-5">
            Enter your credentials to manage your account
          </p>
          <Image src={img} alt="Illustration" width={846} height={401} />
        </div>
      </div>
    </div>
  );
}
