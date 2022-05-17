
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
// ============================== Quiz ======================================= //
  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label class="radio">
                <input type="radio" name="question${questionNumber}" value="${letter}">
                <div class="radiocheck"></div>
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        //  style untuk input
          // color the answers green
          answerContainers[questionNumber].style.color = '#018068';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';      
        submitButton.style.display = 'inline-block';
        previousButton.style.display = 'none';
        restartButton.style.display = 'none';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
        restartButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const restartButton = document.getElementById('restart');
    const myQuestions = [
      {
        question: "1. what kind of discount do i get?",
        answers: {
          A: "I hope it was right",
          B: "Twenty percent",
          C: "It wasn't very difficult"
        },
        correctAnswer: "B"
      },
      {
        question: "2. Would you like to play game?",
        answers: {
          A: "Oh, come on, it's fun.",
          B: "Don't you know?",
          C: "I suppose it is."
        },
        correctAnswer: "A"
      },
      {
        question: "3. Can i get you something from the restaurant?",
        answers: {
          A: "it's the same place.",
          B: "Yes, I would like something.",
          C: "Sorry, i did that.",
        },
        correctAnswer: "B"
      },
      {
        question: "4. Oh, my god! You cleaned!",
        answers: {
          A: "It's very good.",
          B: "I can't remember.",
          C: "I didn't actually do this.",
        },
        correctAnswer: "C"
      },
      {
        question: "5. Should i give him another chance?",
        answers: {
          A: "It's up to you.",
          B: "Not much.",
          C: "You suppose.",
        },
        correctAnswer: "A"
      },
      {
        question: "6. Martin's mother is _____ fat that she decided to go on a diet.",
        answers: {
          A: "such",
          B: "too",
          C: "so.",
          D: "very",
        },
        correctAnswer: "D"
      },
      {
        question: "7. I can destroy it _____ and for all.",
        answers: {
          A: "here",
          B: "once",
          C: "so",
          D: "very",
        },
        correctAnswer: "B"
      },
      {
        question: "8. I never _____ an episode.",
        answers: {
          A: "lost",
          B: "missed",
          C: "jumped",
          D: "caught",
        },
        correctAnswer: "B"
      },
      {
        question: "9. We don't _____ to be rude, but you seem to be much younger than your husband.",
        answers: {
          A: "hope",
          B: "think",
          C: "mean",
          D: "suppose",
        },
        correctAnswer: "C"
      },
      {
        question: "10. You caught me ____ surprise last night.",
        answers: {
          A: "by",
          B: "with",
          C: "for",
          D: "on",
        },
        correctAnswer: "A"
      },
      {
        question: "11. I would love to _____ it a read.",
        answers: {
          A: "make",
          B: "do",
          C: "get",
          D: "give",
        },
        correctAnswer: "D"
      },
      {
        question: "12. Michael is really looking forward _____ from you.",
        answers: {
          A: "to hear",
          B: "hearing",
          C: "to hearing",
          D: "to have heard",
        },
        correctAnswer: "C"
      },
      {
        question: "13. _____ great things are going, sooner or later, it's gonna get ruined.",
        answers: {
          A: "Whatever",
          B: "No matter how",
          C: "However much",
          D: "Although",
        },
        correctAnswer: "B"
      },
      {
        question: "14. It was not so long ago ___ he accused me of putting you at risk.",
        answers: {
          A: "that",
          B: "since",
          C: "after",
          D: "then",
        },
        correctAnswer: "A"
      },
      {
        question: "15. We didn't _____ cake.",
        answers: {
          A: "book",
          B: "order",
          C: "command",
          D: "ask",
        },
        correctAnswer: "B"
      },
      {
        question: "16. You're _____ to make me cry.",
        answers: {
          A: "thinking",
          B: "round",
          C: "planned",
          D: "about",
        },
        correctAnswer: "D"
      },
      {
        question: "17. We have been together for _____ a year now.",
        answers: {
          A: "quite",
          B: "almost",
          C: "beyond",
          D: "already",
        },
        correctAnswer: "B"
      },
      {
        question: "18. I haven't _____ my seatbelt yet.",
        answers: {
          A: "dressed",
          B: "fastened",
          C: "locked",
          D: "tied",
        },
        correctAnswer: "B"
      },
      {
        question: "19.Thank you for giving me the _____ to help.",
        answers: {
          A: "place",
          B: "position",
          C: "opportunity",
          D: "possibility",
        },
        correctAnswer: "C"
      },
      {
        question: "20. Shut up! Give the artist a ____ respect!",
        answers: {
          A: "little",
          B: "small",
          C: "light",
          D: "mere",
        },
        correctAnswer: "A"
      },
      {
        question: "21. I found everything that I _____ looking for my whole life.",
        answers: {
          A: "have ever been",
          B: "had ever been",
          C: "ever were",
          D: "was always",
        },
        correctAnswer: "B"
      },
      {
        question: "22. You're not listening to my _______ of it.",
        answers: {
          A: "side",
          B: "position",
          C: "shade",
          D: "place",
        },
        correctAnswer: "A"
      },
      {
        question: "23. Our students are _____ advanced.",
        answers: {
          A: "greatly",
          B: "highly",
          C: "strongly",
          D: "readily",
        },
        correctAnswer: "B"
      },
      {
        question: "24. i think you should ____ your steps.",
        answers: {
          A: "retrace",
          B: "regress",
          C: "resume",
          D: "return",
        },
        correctAnswer: "A"
      },
      {
        question: "25. Powerful lyrics - just ____ with me.",
        answers: {
          A: "indentifies",
          B: "moves",
          C: "resonates",
          D: "sounds",
        },
        correctAnswer: "C"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    restartButton.addEventListener('click', () => {
        window.location.reload();
    })
    submitButton.addEventListener('click', () => {
        showResults();
        submitButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    });
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();

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
  imageGreen.classList.add('d-none');
  imageBlue.classList.remove('d-none');
  imageBlack.classList.add('d-none');
  modalGreen.classList.add('d-none');
  modalBlue.classList.remove('d-none');
  modalBlack.classList.add('d-none');
});


btn_dark.addEventListener('click', () => {
  if (document.body.classList.toggle('blue-theme')) {
    document.body.classList.remove('blue-theme');
  }
  imageGreen.classList.add('d-none');
  imageBlack.classList.remove('d-none');
  imageBlue.classList.add('d-none');
  modalGreen.classList.add('d-none');
  modalBlue.classList.add('d-none');
  modalBlack.classList.remove('d-none');

  document.body.classList.add('dark-theme');
});
  