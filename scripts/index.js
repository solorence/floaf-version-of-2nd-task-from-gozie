/*............ commons ...........*/


let homemain = document.querySelector('.homemain');

let aboutmain = document.querySelector('.aboutmain');

let contactmain = document.querySelector('.contactmain');


/*......... object grabs  ...........*/


let Ihome = document.querySelector('.Ihome');

let Iabout = document.querySelector('.Iabout');

let Icontactus = document.querySelector('.Icontact');

/*..............*/

let Ahome = document.querySelector('.Ahome');

let Aabout = document.querySelector('.Aabout');

let Acontactus = document.querySelector('.Acontact');

/*..............*/

let Chome = document.querySelector('.Chome');

let Cabout = document.querySelector('.Cabout');

let Ccontactus = document.querySelector('.Ccontact');



/*......... event callbacks ...........*/


function toHome () {
  console.log ('ihome clicked')
  homemain.style.display = 'block';
  aboutmain.style.display = 'none';
  contactmain.style.display = 'none';
}


function toAbout() {
  homemain.style.display = 'none';
  aboutmain.style.display = 'block';
  contactmain.style.display = 'none';
}


function toContactus() {
  homemain.style.display = 'none';
  aboutmain.style.display = 'none';
  contactmain.style.display = 'block';
}



/*......... Event listeners...........*/

Ihome.addEventListener('click', toHome);

Iabout.addEventListener('click', toAbout);

Icontactus.addEventListener('click', toContactus);

/*..............*/

Ahome.addEventListener('click', toHome);

Aabout.addEventListener('click', toAbout);

Acontactus.addEventListener('click', toContactus);

/*..............*/

Chome.addEventListener('click', toHome);

Cabout.addEventListener('click', toAbout);

Ccontactus.addEventListener('click', toContactus);


/*..........FormValidation...........*/

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
  if (!(item.style.borderColor == 'red') )  {
    item.style.borderColor = 'red';
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
  if (item.style.borderColor == 'red') {
    item.style.borderColor = 'black';
  }
  
  if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
  }
}else{
  markBorder(item);
  writeError(item);
}
    
  }else if(item.id == 'email'){
    let emailInput = item.value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[@][a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (regex.test(emailInput)) {
  if (item.style.borderColor == 'red') {
    item.style.borderColor = 'black';
  }
  
  if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
  }
}else {
  markBorder(item);
  writeError(item);
}

  } 
  
  else if(item.id == 'firstname' || item.id == 'lastname' || item.id == 'message') {
        
   if (item.style.borderColor == 'red') {
      item.style.borderColor = 'black';
    }
  
    if (item.parentNode.className.includes(item.errorClass)) {
    item.parentNode.classList.remove(item.errorClass);
    }
  } 

}