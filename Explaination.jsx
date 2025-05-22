// React লাইব্রেরি থেকে useState হুক ইম্পোর্ট করছি
import React, { useState } from "react";

// Login নামের ফাংশনাল কম্পোনেন্ট তৈরি করছি
function Login() {

  // username স্টেট ভ্যারিয়েবল তৈরি করছি, শুরুতে ফাঁকা স্ট্রিং ''
  // setusername ফাংশনের মাধ্যমে আমরা username আপডেট করবো
  const [username, setusername] = useState('');

  // password স্টেট ভ্যারিয়েবল তৈরি করছি, শুরুতে ফাঁকা স্ট্রিং ''
  // setpassword ফাংশনের মাধ্যমে আমরা password আপডেট করবো
  const [password, setpassword] = useState('');

  // handleLogin ফাংশনটি তখন কল হবে যখন ইউজার "Log In" বাটনে ক্লিক করবে
  const handleLogin = () => {
    // যদি ইউজারনেম ও পাসওয়ার্ড ঠিক থাকে (হার্ডকোড করা ভ্যালুর সাথে ম্যাচ করে)
    if (username === "yasirraiyan" && password === "Yasyan480") {
      // কনসোলে সফল লগইন বার্তা দেখাবে
      console.log("Successfully Logged In");
      // ইউজারকে alert দেখাবে
      alert("Successfully Logged In");
    } else {
      // যদি ইউজারনেম বা পাসওয়ার্ড ভুল হয়, তাহলে ভুল বার্তা দেখাবে
      console.log("Login Failed");
      alert("Invalid Username or Password");
    }
  };

  // JSX অংশ যেটা ইউজারকে ব্রাউজারে দেখাবে
  return (
    <div className="App">
      {/* শিরোনাম */}
      <h1>Log In App</h1>

      {/* ইউজারনেম ইনপুট */}
      <label>UserName:</label>
      <input
        type="text" // ইনপুট টাইপ টেক্সট
        placeholder="Enter your username" // ইনপুট ফাঁকা থাকলে এই টেক্সট দেখাবে
        value={username} // username স্টেটের ভ্যালু দেখাবে ইনপুটে
        onChange={(e) => setusername(e.target.value)} // ইউজার কিছু টাইপ করলে সেটাকে স্টেটে সেট করবে
        required // ফর্ম সাবমিটের সময় ইনপুট ফাঁকা থাকা যাবে না
      />

      <br /><br /> {/* লাইন ব্রেক */}

      {/* পাসওয়ার্ড ইনপুট */}
      <label>Password:</label>
      <input
        type="password" // ইনপুট টাইপ পাসওয়ার্ড (টাইপ করা লেখা হাইড থাকবে)
        placeholder="Enter your password" // ইনপুট ফাঁকা থাকলে দেখাবে
        value={password} // password স্টেটের ভ্যালু দেখাবে ইনপুটে
        onChange={(e) => setpassword(e.target.value)} // ইউজার কিছু টাইপ করলে সেটাকে স্টেটে সেট করবে
        required // ফর্ম সাবমিটের সময় ইনপুট ফাঁকা থাকা যাবে না
      />

      <br /><br /> {/* লাইন ব্রেক */}

      {/* লগইন বাটন */}
      <button onClick={handleLogin}>Log In</button> {/* ক্লিক করলে handleLogin ফাংশন চলবে */}
    </div>
  );
}

// Login কম্পোনেন্ট এক্সপোর্ট করছি যাতে অন্য ফাইলে এটি ব্যবহার করা যায়
export default Login;
