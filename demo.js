// form এবং input গুলো DOM থেকে select করছি
let form = document.getElementById("form");

let username = document.getElementById("username");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let email = document.getElementById("email");

// যখন form সাবমিট করা হয়
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ফর্ম reload/submit না করে থামিয়ে দেয়
  validateInputs();   // ইনপুট চেক করার ফাংশন কল করি
});

// যখন পাসওয়ার্ড টাইপ করা হচ্ছে
password.addEventListener("input", () => {
  let passwordValue = password.value.trim(); // ইনপুটের whitespace মুছে clean করা
  const formControl = password.parentElement; // .form-control এলিমেন্ট access করি
  const small = formControl.querySelector("small"); // ছোট error message tag select করি

  // পাসওয়ার্ডের দৈর্ঘ্য অনুযায়ী স্ট্রেংথ মেসেজ দেখানো হচ্ছে
  if (passwordValue.length < 5) {
    small.innerText = "Weak Password";
    small.style.color = "red";
    small.style.visibility = "visible";
  } else if (passwordValue.length < 8) {
    small.innerText = "Medium Password";
    small.style.color = "orange";
    small.style.visibility = "visible";
  } else {
    small.innerText = "Strong Password";
    small.style.color = "green";
    small.style.visibility = "visible";
  }
});

// যখন দ্বিতীয় পাসওয়ার্ড টাইপ করা হচ্ছে (confirm password)
password2.addEventListener("input", () => {
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  const formControl = password2.parentElement;
  const small = formControl.querySelector("small");

  // দুইটি পাসওয়ার্ড মিলছে কিনা চেক করা হচ্ছে
  if (password2Value === passwordValue) {
    small.innerText = "Password Matches";
    small.style.color = "green";
    small.style.visibility = "visible";
  } else {
    small.innerText = "Password Does Not Match";
    small.style.color = "red";
    small.style.visibility = "visible";
  }
});

// সব ইনপুট validate করার ফাংশন
function validateInputs() {
  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  let emailValue = email.value.trim();

  // ইউজারনেম খালি কিনা চেক
  if (usernameValue === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }

  // পাসওয়ার্ড খালি কিনা চেক
  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }

  // কনফার্ম পাসওয়ার্ড খালি বা mismatch কিনা চেক
  if (password2Value === "") {
    setError(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }

  // ইমেইল খালি কিনা চেক
  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else {
    setSuccess(email);
  }
}

// Error মেসেজ দেখানোর ফাংশন
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // small tag এর মধ্যে error মেসেজ সেট করি
  small.innerText = message;
  small.style.color = "red";
  small.style.visibility = "visible";
}

// Success হলে error মেসেজ লুকিয়ে ফেলি
function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // success হলে মেসেজ clear করে দিই
  small.innerText = "";
  small.style.visibility = "hidden";
}
