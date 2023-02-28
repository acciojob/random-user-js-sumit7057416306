//your code here
let user = document.querySelector('.user');
let info = document.getElementById('additional-info');

async function getUsers() {
    let res = await fetch("https://randomuser.me/api/");
    let data = await res.json();
    console.log("userInfo",data.results[0]);
    let userInfo = data.results[0];

    let img = document.createElement('img');
    img.src = userInfo.picture.large;

    let fullName = document.createElement('h3');
    fullName.innerHTML = userInfo.name.first+" "+userInfo.name.last;

    info.dataset.age = userInfo.dob.age;
    info.dataset.email = userInfo.email;
    info.dataset.phone = userInfo.phone;

    user.appendChild(img);
    user.appendChild(fullName);
}

getUsers()

let getUserBtn = document.getElementById('getUser');

getUserBtn.addEventListener('click',()=>{
    user.querySelector('img').remove();
    user.querySelector('h3').remove();
    info.querySelector('p').innerText = '';
    getUsers();
})

let age = document.getElementById('age');
age.addEventListener('click',()=>{
    let p = document.getElementById('info');
    p.innerText = info.dataset.age;
})

let email = document.getElementById('email');
email.addEventListener('click',()=>{
    let p = document.getElementById('info');
    p.innerText = info.dataset.email;
})

let phone = document.getElementById('phone');
phone.addEventListener('click',()=>{
    let p = document.getElementById('info');
    p.innerText = info.dataset.phone;
})
