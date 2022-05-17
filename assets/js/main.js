
// ========================= Loading Animation ============================ //
 window.addEventListener("load", function() {    
    document.querySelector('body').classList.add('loaded');  
}); 


// export function Loader_page() {
//   window.addEventListener("load", () => {    
//     document.querySelector('body').classList.add('loaded');  
//   }); 
// }

// ========================= Menu Btn & CLose Btn ========================= //
const menu_btn = document.querySelector("#menu-btn");
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
menu_btn.addEventListener("click", function() {
  menu_btn.classList.add('d-none');
  close_btn.classList.toggle('d-none');
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

close_btn.addEventListener('click', function()  {
  menu_btn.classList.remove('d-none');
  close_btn.classList.add('d-none');
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
})


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

// ========================= Dark Theme ========================= //

// const icon = document.getElementById("icon");
// icon.onclick = function(){
//   document.body.classList.toggle("dark-theme");
//   if(document.body.classList.contains("dark-theme")){
//     icon.src = "assets/img/light.png";
//   }
//   else {
//     icon.src = "assets/img/dark.png";
//   }
// }

// ========================= Change Color ========================= //
const btn_tosqa = document.querySelector('.btn-success');
const btn_blue = document.querySelector('.btn-blue');
const btn_dark = document.querySelector('.btn-dark');

const imageBlue = document.querySelector('.blueimg');
const imageGreen = document.querySelector('.greenimg');
const imageBlack = document.querySelector('.blackimg');

const modalGreen = document.querySelector('.modal-green');
const modalBlue = document.querySelector('.modal-blue');
const modalBlack = document.querySelector('.modal-black');

// get Element
btn_tosqa.addEventListener('click', () => {
  window.location.reload();
});
btn_blue.addEventListener('click', () => {
  document.body.classList.add('blue-theme');
});


btn_dark.addEventListener('click', () => {
  if (document.body.classList.toggle('blue-theme')) {
    document.body.classList.remove('blue-theme');
  }

  document.body.classList.add('dark-theme');
});

