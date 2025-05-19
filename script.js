
const username=document.getElementById('username');
const password=document.getElementById('password');
const submit=document.getElementById('submit');

function login()
{
    if(username.value==''||password.value=='')
    {
        alert("Please fill all field first");
    }
    if(username.value==="yasirraiyan"&&password.value==="Yasyan480")
    {
        console.log("Log In Successful");
    }
   
}
submit.addEventListener('click',login)
