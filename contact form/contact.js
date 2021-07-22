const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const number = document.getElementById('number');

// eventhappening

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
   //trim
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();

 //username
  if (usernameValue === '') {
    setErrorFor( username,"username can't be blank");    
  }else{
    setSuccessFor(username);
  }
  //username2
  if (username2Value === ''){
     setErrorFor ( username2,"username can't be blank")
  }else{
     setSuccessFor(username2)
  }
 //email
 if (emailValue === '') {
    setErrorFor( email,"email can't be blank");
 }else {
    setSuccessFor(email);    
 }
 //numbe
 if (numberValue === '') {
    setErrorFor( number,"Phone number can't be blank");
 }else {
    setSuccessFor(number);
 }
}
function setErrorFor(input, message) {
   const inputbox = input.parentElement;
   const small = inputbox.querySelector('small');
   inputbox.className = 'inputbox error';
   small.innerText = message ;
}
function setSuccessFor(input){
   const inputbox = input.parentElement;
   inputbox.className = 'inputbox success';
}