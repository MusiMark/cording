const body = document.body;
//const div=document.createElement('div');
//const em= document.createElement('em');
//em.innerText="musi is coming"
//div.innerText = "musi mark";
//div.innerHTML ="<strong>marx<strong>"

const div = document.querySelector('div');
const hide = document.querySelector('#hide');
hide.remove();
div.append(hide);
hide.style.color ="red";


//div.textContent ="its now musi"
//const div = document.querySelector('div');
//console.log(div.innerText);
//console.log(div.textContent);
body.appendChild(div);