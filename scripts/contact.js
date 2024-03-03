let inputContainer = [];

let firstname = document.querySelector('#firstname');
inputContainer.push(firstname);
firstname.errorClass='firstnameerror';

let lastname = document.querySelector('#lastname');
inputContainer.push(lastname);
lastname.errorClass='lastnameerror';

let email = document.querySelector('#email');
inputContainer.push(email);
email.errorClass='emailerror';

let number = document.querySelector('#number');
inputContainer.push(number);
number.errorClass='numbererror';

let message = document.querySelector('#message');
inputContainer.push(message);
message.errorClass='messageerror';

let submit = document.querySelector('#submit');
submit.addEventListener('click', formValidation);

let form = document.querySelector('form');


let home = document.querySelector('#home');

let about = document.querySelector('#about');

let contactus = document.querySelector('#contact');

let homeLink ='../index.html';

let aboutLink ='../about.html';

let contactLink ='../find.html';


home.addEventListener('click', toHome);

about.addEventListener('click', toAbout);

contactus.addEventListener('click', toContactus);

function toHome () {
  location.href = homeLink;
}

function toAbout() {
  location.href = aboutLink;
}

function toContactus() {
  location.href = contactLink;
}


function formValidation(event) {
  event.preventDefault();

  for (let item of inputContainer) {

    if (item.value == "") {
      errorMarker(item);
    }
    else {
      errorRemover(item);

    }
  }
}



function errorMarker(item) {

  switch (item.id) {
    case 'firstname':
      markBorder(item);
      writeError(item);
      break;

    case 'lastname':
      markBorder(item);
      writeError(item);
      break;

    case 'email':
      markBorder(item);
      writeError(item);
      break;

    case 'number':
      markBorder(item);
      writeError(item);
      break;

    case 'message':
      markBorder(item);
      writeError(item);

  }

}


function markBorder(item) {

  if (!item.className.includes('redborder')) {
    item.className += ' redborder';
  }

}



function writeError(item) {

  if (!item.className.includes(item.errorClass)) {
    item.parentNode.classList.add(item.errorClass); 
  }

}



function errorRemover(item) {
  
  if(item.id == 'number'){
  let phoneNumberInput = item.value;
  let regex = /^(08|09|07)[0-9]{9}$/;

if (regex.test(phoneNumberInput)) {
  if (item.className.includes('redborder')) {
    item.classList.remove('redborder');
  }
  
  if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
  }
} 
    
  }else if(item.id == email){
    let emailInput = item.value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (regex.test(emailInput)) {
  if (item.className.includes('redborder')) {
    item.classList.remove('redborder');
  }
  
  if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
  }
}

    
            } 
  else{
        
   if (item.className.includes('redborder')) {
    item.classList.remove('redborder');
    }
  
    if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
    }
  } 

}


function contactLoad() {
  console.log('contact class added')
  contactus.classList.add('contactload');
}

window.addEventListener("DOMContentLoaded", contactLoad);