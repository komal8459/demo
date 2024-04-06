// alert("jjj");


const  passwordbox = document.getElementById("password");
const length =12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const number="0123456789";
const symbol="@#$%^&*()_-{}[]|?=+~";

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(math.random()*uppercase.length)];
    password += lowercase[Math.floor(math.random()*uppercase.length)];
    password += number[Math.floor(math.random()*uppercase.length)];
    password += symbol[Math.floor(math.random()*uppercase.length)];
}