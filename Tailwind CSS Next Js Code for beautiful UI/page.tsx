import Image from "next/image";
import Frame from "./Frame.png";
import Img from "./img.png";

export default function Home() {
  return (
    // simple validation: valid email

    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-white px-16">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div>
              <img src={Img}></img>
            </div>
            <h1 className="text-4xl font-bold text-black text-center">
              Welcome Back <br /> PULSE!
            </h1>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-500">E-mail</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className={`
    border border-gray-300 rounded-md px-4 py-2 w-full
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
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-4 focus:ring-yellow-400  focus:bg-green-100"
                />
                <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400">
                  👁️
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-yellow-500">
                Forgot Password?
              </a>
            </div>
            <button className="bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition active:bg-green-400 transition">
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="flex-1 relative hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-200 to-yellow-100">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold mb-4">
            The Simplest way to manage your workforce.
          </h2>
          <p className="text-gray-700 mb-8">
            Enter your credentials to access your account.
          </p>
          <Image src={Frame} alt="Illustration" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}


Explaination of cOde:
-----------------------

  {/* 
  flex flex-col: 
  1 1st flex → পুরো div কে flex container বানায়
  2 2nd flex-col → child elements (h1, button) vertical (উপরে থেকে নিচে) সাজায়
*/}
 
   {/*
   return(
    <div className="flex min-h-screen ">
      
      {/* niche নামাতে margin-top 50px ব্যবহার করুন mb-12 margin bottom gap barai button r heading e */}
     
     <div className="flex-1 flex flex-col justify-center items-center bg-white px-6 md:px-16 ">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div>
            <img src={Img}></img>
            </div>
      <h1 className="text-5xl text-center font-bold mx-4 px-5 mb-12">Welcome Back <br/>PULSE!</h1>
      </h1>
    
      <form className="flex flex-col gap-6">
        <div className="flex flex -col">
      <label className="text-5xl font-medium mx-2 px-2 mb-3 items-start ">Email</label>
      {/*mb-6 margin bottom eta space dibe label r input box er majhe*/}
      <input type="email" placeholder="Enter our email eg: example@gmail.com" className="hover:bg-green-100 px-4 py-2 border border-gray-300 w-full max-w-md rounded-md mb-6"></input>
    <br />
    <br />
<label className="text-5xl font-medium mx-2 px-2 mb-3 items-start">Password</label>
    <input type="password" placeholder="Enter your password eg:*********"className="hover:bg-green-100 px-4 py-2 border border gray-300 w-full max-w-md rounded md mb-6"></input>
   
<label>Remember me</label>
{/*transition means when click color change hover when cursor keep in color change*/}
      <button className="bg-yellow-400 w-[400px] text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition active:bg-green-400 transition">Signin</button>
        <br/>
        
      </div>
    </div>
    </>
  );
  */}
 */

