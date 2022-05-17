// ========================= Loading Animation ============================ //
// import { Loader_page } from './main.js'

window.addEventListener("load",  () => {    
  document.querySelector('body').classList.add('loaded');  
}); 

// Loader_page();




// ========================= Effect Sound ========================= //
const all_button = document.querySelectorAll('.btn');

let i = 0;

for(i; i < all_button.length; i++) {
  all_button[i].addEventListener('click', () => {
    const sound = new Audio('assets/sounds/click.wav');
    sound.play();
  });  
};



// ========================= Contact Form ===============================//
const scriptURL = 'https://script.google.com/macros/s/AKfycbz2FTqVBAt-xYuiyK1Ogj7xD2_qkUH9-L_MB8w-r4B8dkBafHCBfWb0W4TySKvj95gC1A/exec'
const form = document.forms['contact-engxzu']
const btn_send = document.querySelector('.btn-kirim');
const btn_loading = document.querySelector('.btn-loading');
const btn_alert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault()
  // ketika tombol submit di klik 
  // tampilkan tombol loading , hilangkan tombol kirim
  btn_loading.classList.toggle("d-none");
  btn_send.classList.toggle("d-none");
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btn_loading.classList.toggle("d-none");
      btn_send.classList.toggle("d-none");
      // tampilkan alert
      btn_alert.classList.toggle('d-none');
      // reset tulisan input form nya
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

// Engxzu Subscribe 
const script_url = 'https://script.google.com/macros/s/AKfycbyOvltVtJwnXM68gjj9b3cKGJiEvMTVw3-EAuzuGlysxenbaH59fXluVJRFm8uGdOQK_Q/exec'
const form_subscribe = document.forms['engxzu-subsribe'];
const popAlert = document.querySelector('.pop-alert');
const inputEmail = document.getElementById('inputemail');
const inputTitle = document.querySelector('.title-alert');
const btnSubmit = document.querySelector('.btn-send');

btnSubmit.addEventListener('click', ()=> {
  const inputVal = inputEmail.value;
  inputTitle.innerHTML = inputVal;
})


form_subscribe.addEventListener('submit', e => {
  e.preventDefault()
  // tampilkan tombol loading , hilangkan tombol kirim
  fetch(script_url, { method: 'POST', body: new FormData(form_subscribe)})
    .then(response => {
      sound_successful()

      popAlert.classList.toggle('d-none');
      // createAlert();

      form_subscribe.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
});


function sound_successful() {
  const sound_success = new Audio('assets/sounds/success.wav');
  sound_success.play();  
}



// ========================= Keyboard Mechanical Sounds ========================= //
window.addEventListener('keydown', keyboardSounds, false);

function sounds_type() {
  const sounds = new Audio('assets/sounds/keyboard.mp3');
  sounds.play();
}


function keyboardSounds(key) {
  if(key.keyCode == "33" || key.keyCode == "38" || key.keyCode == "34" || key.keyCode == "40") {
    sounds_type();
  }; 
}


// ========================= Smooth Scroll Jquery ========================= //  
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// ========================= scroll to top ========================= //

const toTop = document.querySelector("#contact .top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 300) {
    toTop.classList.remove('d-none');
    toTop.classList.add("scroll");
  } else {
    toTop.classList.remove("scroll");
    toTop.classList.add('d-none')
  }
});


