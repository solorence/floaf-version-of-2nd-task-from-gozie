let homemain = document.querySelector('.homemain');

let aboutmain = document.querySelector('.aboutmain');

let contactmain = document.querySelector('.contactmain');


let Ihome = document.querySelector('.homemain .Ihome');

let Iabout = document.querySelector('.homemain .Iabout');

let Icontactus = document.querySelector('.homemain .Icontact');

/*let homeLink ='../index.html';

let aboutLink ='../about.html';

let contactLink ='../find.html'; */


/*......... event callbacks ...........*/


function ItoHome () {
  
}

function ItoAbout() {
  location.href = aboutLink;
}

function ItoContactus() {
  location.href = contactLink;
}


function homeLoad() {
  console.log ('homeload class added')
  home.classList.add('homeload');
}


/*......... Event listeners...........*/

Ihome.addEventListener('click', ItoHome);

Iabout.addEventListener('click', ItoAbout);

Icontactus.addEventListener('click', ItoContactus);


window.addEventListener("DOMContentLoaded", homeLoad);