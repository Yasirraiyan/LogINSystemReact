<!DOCTYPE html> <!-- এই লাইনটা বলে দেয় যে এটা একটি HTML5 ডকুমেন্ট -->
<html lang="en"> <!-- HTML ডকুমেন্ট শুরু, 'lang="en"' মানে এই ডকুমেন্টের ভাষা ইংরেজি -->

<head> <!-- head ট্যাগে মেটা ইনফরমেশন থাকে, যেমন ক্যারেকটার সেটিং, টাইটেল ইত্যাদি -->
    <meta charset="UTF-8"> <!-- এটি বলে দেয় যে আমরা UTF-8 ক্যারেকটার এনকোডিং ব্যবহার করছি -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- এটি মোবাইল রেসপনসিভ বানানোর জন্য, যাতে ছোট ডিভাইসেও ঠিকমত দেখায় -->

    <title>Document</title> <!-- ব্রাউজারে ট্যাবে যে নামটি দেখাবে সেটি -->
</head>

<body> <!-- মূল কনটেন্ট যেটা ইউজার দেখতে পাবে সেটা body ট্যাগে থাকে -->

    <div classname="App" id="app"> 
        <!-- div হচ্ছে কন্টেইনার। এখানে ভুল হয়েছে, classname না হয়ে 'class' হওয়া উচিত -->
        
        <h1>Welcome to our login app</h1> <!-- হেডিং লেখা, ব্রাউজারে বড় করে দেখাবে -->

        <label>Username:</label> <!-- ইউজারনেম ইনপুট ফিল্ডের লেবেল -->
        <input type="text" id="username" placeholder="Enter your Username" required/>
        <!-- ইউজারের নাম ইনপুট দেওয়ার জায়গা, id="username" দিয়ে পরে JavaScript থেকে access করব -->
        
        <br> <!-- লাইন ব্রেক -->
        <br> <!-- আরেকটা লাইন ব্রেক -->

        <label>Password:</label> <!-- পাসওয়ার্ড ইনপুটের লেবেল -->
        <input type="password" id="password" placeholder="Enter your password" required/>
        <!-- পাসওয়ার্ড ইনপুট ফিল্ড, টাইপ password দিলে ইনপুট হাইড হয়ে থাকে -->

        <button id="submit">Submit</button>
        <!-- সাবমিট করার জন্য একটা বাটন, id দিয়ে পরে JavaScript এ access করব -->
    </div>

    <script>
        // এখানে JavaScript কোড শুরু

        const username = document.getElementById('username');
        // ইউজারনেম ইনপুট ফিল্ডটা DOM থেকে বের করে username ভেরিয়েবলে রাখছি

        const password = document.getElementById('password');
        // একইভাবে password ইনপুট DOM থেকে নিয়ে password ভেরিয়েবলে রাখছি

        const button = document.getElementById('submit');
        // সাবমিট বাটনটা DOM থেকে বের করে button ভেরিয়েবলে রাখছি

        function login() {
            // login নামের একটা ফাংশন বানানো হলো, যেটা পরে বাটনে ক্লিক করলে কল হবে

            if (username.value === "Yasir" && password.value === "11234") {
                // চেক করছে, ইউজারনেম 'Yasir' এবং পাসওয়ার্ড '11234' হলে...
                
                console.log("Success");
                // কনসোলে Success মেসেজ দেখাবে (ডেভেলপার কনসোলে)

                alert('Successful');
                // ইউজারকে popup alert দিয়ে Successful দেখাবে
            } 
            else {
                // অন্য যেকোনো ইউজারনেম বা পাসওয়ার্ড হলে

                console.log("Failed");
                // কনসোলে Failed মেসেজ দেখাবে

                alert("Invalid Username or Password");
                // ইউজারকে alert দিবে ভুল ইউজারনেম বা পাসওয়ার্ড বলে
            }
        }

        button.addEventListener("click", login);
        // যখন ইউজার বাটনে ক্লিক করবে, তখন login() ফাংশনটা চালু হবে
    </script>

</body>
</html>
