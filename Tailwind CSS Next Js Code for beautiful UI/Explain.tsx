import Image from "next/image";
import Image from "next/image" → Next.js-এর built-in Image কম্পোনেন্ট ইমপোর্ট করছে।

এটি responsive images, lazy loading, এবং optimized images ব্যবহারের জন্য ব্যবহার করা হয়।

javascript
Copy code
import Frame from "./Frame.png";
import Img from "./img.png";
Frame এবং Img → লোকাল ইমেজ ফাইল ইমপোর্ট করা হয়েছে।

./Frame.png এবং ./img.png হল প্রজেক্টের একই ফোল্ডারে থাকা ছবি।

javascript
Copy code
export default function Home() {
export default function Home() → এটা হল React functional component, যা Next.js page হিসেবে ব্যবহার করা হবে।

এখানে Home নামের কম্পোনেন্ট ডিফল্ট এক্সপোর্ট করা হয়েছে।

javascript
Copy code
return (
return → React কম্পোনেন্টের UI যা রেন্ডার হবে তা JSX হিসেবে রিটার্ন করা হচ্ছে।

javascript
Copy code
<div className="flex min-h-screen">
div → HTML ডিভ এলিমেন্ট।

className="flex min-h-screen" → Tailwind CSS ব্যবহার:

flex → ফ্লেক্সবক্স লেআউট। ভিতরের এলিমেন্টগুলো flex row হিসেবে সাজবে।

min-h-screen → ডিভের minimum height পুরো viewport height এর সমান হবে।

javascript
Copy code
<div className="flex-1 flex flex-col justify-center items-center bg-white px-16">
flex-1 → এই ডিভ ফ্লেক্স কন্টেইনারে বাকি স্পেস অনুযায়ী expand হবে।

flex flex-col → ভিতরের এলিমেন্টগুলো column আকারে সাজাবে।

justify-center → vertical axis এ center এ রাখবে।

items-center → horizontal axis এ center এ রাখবে।

bg-white → ব্যাকগ্রাউন্ড কালার সাদা।

px-16 → horizontal padding left-right 4rem।

javascript
Copy code
<div className="w-full max-w-md">
w-full → width পুরো ডিভের parent এর সমান।

max-w-md → width maximum medium size (~28rem)।

javascript
Copy code
<div className="flex justify-center mb-8">
flex → এই ডিভের ভিতরের এলিমেন্টগুলো flex row হিসেবে।

justify-center → horizontal axis এ center এ।

mb-8 → margin-bottom 2rem।

javascript
Copy code
<div>
  <img src={Img}></img>
</div>
img → HTML image tag।

src={Img} → imported local image ব্যবহার।

javascript
Copy code
<h1 className="text-4xl font-bold text-black text-center">
  Welcome Back <br /> PULSE!
</h1>
text-4xl → font size বড় (~2.25rem)।

font-bold → ফন্ট weight bold।

text-black → টেক্সট কালার black।

text-center → টেক্সট horizontal center।

<br /> → line break।

javascript
Copy code
<form className="flex flex-col gap-6">
form → HTML ফর্ম।

flex flex-col → ভিতরের input, button column আকারে।

gap-6 → vertical gap ~1.5rem।

javascript
Copy code
<div className="flex flex-col">
  <label className="mb-1 text-gray-500">E-mail</label>
label → input এর label।

mb-1 → margin-bottom 0.25rem।

text-gray-500 → medium gray color।

javascript
Copy code
<input
  type="email"
  placeholder="example@gmail.com"
  className={`
    border border-gray-300 rounded-md px-4 py-2 w-full
    focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-green-100
    transition-colors
  `}
/>
type="email" → input email টাইপ।

placeholder="example@gmail.com" → gray hint text।

Tailwind class:

border border-gray-300 → gray border।

rounded-md → medium rounded corners।

px-4 py-2 → padding left-right 1rem, top-bottom 0.5rem।

w-full → full width parent অনুযায়ী।

focus:outline-none → focus state এ default outline remove।

focus:ring-4 focus:ring-yellow-400 → yellow ring focus state এ।

focus:bg-green-100 → focus state এ light green background।

transition-colors → color change smooth।

javascript
Copy code
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
relative → parent relative positioning, span absolute এর জন্য।

span absolute right-3 top-2.5 → password show/hide icon input এর উপরে fixed।

cursor-pointer → mouse pointer hand।

javascript
Copy code
<div className="flex justify-between items-center text-sm">
  <label className="flex items-center gap-2">
    <input type="checkbox" />
    Remember me
  </label>
  <a href="#" className="text-yellow-500">
    Forgot Password?
  </a>
</div>
flex justify-between items-center → horizontal space distribute।

text-sm → small text।

gap-2 → checkbox আর label এর মধ্যে gap।

text-yellow-500 → link yellow।

javascript
Copy code
<button className="bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition active:bg-green-400 transition">
  Sign in
</button>
bg-yellow-400 → yellow background।

text-black → black text।

font-semibold → font medium-bold।

py-2 → vertical padding।

rounded-md → rounded corners।

hover:bg-yellow-500 → hover effect।

active:bg-green-400 → button press effect।

transition → smooth effect।

javascript
Copy code
<div className="flex-1 relative hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-200 to-yellow-100">
flex-1 → বাকি স্পেস expand।

relative → absolute child এর জন্য।

hidden md:flex → small screen এ hidden, medium screen বা তার উপরে flex।

items-center justify-center → centered content।

bg-gradient-to-b from-yellow-200 to-yellow-100 → vertical gradient।

javascript
Copy code
<Image src={Frame} alt="Illustration" width={400} height={400} />
Next.js Image component।

src={Frame} → imported image।

alt="Illustration" → accessibility।

width & height → fixed size।

💡 Summary of Tailwind CSS Usage:

Layout: flex, flex-col, justify-center, items-center, gap-*

Spacing: px-*, py-*, mb-*

Typography: text-*, font-bold, text-center

Borders & Radius: border, border-gray-*, rounded-*

Backgrounds & Colors: bg-*, bg-gradient-to-b, from-*, to-*

Focus & Hover Effects: focus:outline-none, focus:ring-*, hover:bg-*, transition
