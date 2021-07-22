const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// eventhappening

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
   //trim
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

 //username
  if (usernameValue === '') {
    setErrorFor( username,"username can't be blank");    
  }else{
    setSuccessFor(username);
  }
  //password
  if(passwordValue === ''){
     setErrorFor(password,"password can't be blank");
  }else{
     setSuccessFor(password);
  }
 //email
 if (emailValue === '') {
    setErrorFor( email,"email can't be blank");
 }else {
    setSuccessFor(email);    
 }
 //password2
  if(password2Value === ''){
     setErrorFor(password2,"password can't be blank");
  }else if(passwordValue !== password2Value){
     setErrorFor(password2,'wrong password');
  }else{
     setSuccessFor(password2);
  }
  
  
}
function setErrorFor(input, message) {
   const formcontrol = input.parentElement;
   const small = formcontrol.querySelector('small');
   formcontrol.className = 'formcontrol error';
   small.innerText = message ;
}
function setSuccessFor(input){
   const formcontrol = input.parentElement;
   formcontrol.className = 'formcontrol success';
}