const dataUser = document.querySelectorAll('.data-user');
const namaUser = document.querySelectorAll('.name-user');
const imgProfile = document.querySelectorAll('.img-user');
const userEmail = document.getElementById('email-user');
const loginGoogle = document.querySelectorAll('.g-signin2');
const cardEmail = document.querySelector('.card-bg');
const userText = document.querySelector('.user-text');
const noData = document.querySelector('.no-data');


window.addEventListener("load",  () => {    
  document.querySelector('body').classList.add('loaded');  
}); 


function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  // console.log('Full Name: ' + profile.getName());  
  // console.log('Given Name: ' + profile.getGivenName());
  // console.log('Family Name: ' + profile.getFamilyName());
  // console.log("Image URL: " + profile.getImageUrl());
  // console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  for (let i = 0; i < namaUser.length; i++) {
    namaUser[i].innerHTML = profile.getName();
  }


  for (let i = 0; i < imgProfile.length; i++) {
    imgProfile[i].src = profile.getImageUrl();
  }

  for (let i = 0; i < loginGoogle.length; i++) {
    loginGoogle[i].classList.toggle('d-none');
  }

  for (let i = 0; i < dataUser.length; i++) {
    dataUser[i].classList.remove('d-none');
  }

  userEmail.innerHTML = `<i class="fas fa-envelope teal fa-lg"></i> &nbsp;&nbsp;` + profile.getEmail();


  cardEmail.classList.toggle('d-none');
  userText.classList.toggle('d-none');
  noData.classList.add('d-none');
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.reload();
  }); 

  for (let i = 0; dataUser.length; i++) {
    dataUser[i].classList.toggle("d-none");
  }

  for (let i = 0; i < loginGoogle.length; i++) {
    loginGoogle[i].classList.remove('d-none');
  }

  cardEmail.classList.toggle('d-none');
  userText.classList.toggle('d-none')
}


// https://console.cloud.google.com/apis/credentials?project=signinapp-337809&supportedpurview=project
// 624088565432-59abmu5l5o34k5et2lqtumgrqp1pe40m.apps.googleusercontent.com