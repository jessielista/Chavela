// I want to try to make a button/s so that the chavela quote changes. I want to pick like 4 quotes. 
// put them into an array and iterate through them. Doesn't need to be random....it could just loop through like 
// with the reviews, accept the button will just go in one direction and once it meets certain condition it will reset to 0

// maybe have a microphone cursor appear when hovvering on the quote to signal to click to change quote
// also maybe I should link to her music some place on the page to make it more interactive, or when the page loads I can automatically play a song...but also have a mute button at the top. 

// ================ QUOTE ITERATION =============
const item1 = "Voy a gritar con toda mi alma para que el mundo sepa que estoy viva. Viva de tanto vivir. Viva de tanto amar.";
const item2 = "Lo supe siempre. No hay nadie que aguante l a libertad ajena; a nadie le gusta vivir con una persona libre. Si eres libre, ése es el precio que tienes que pagar: la soledad.";
const item3 = "El amor es un paso. El adiós es otro… y ambos deben ser firmes, nada es para siempre en la vida.";
const item4 = "Si los diplomáticos cantaran, no habría guerras.";
const item5 ="La música no tiene fronteras, pero sí un final común: el amor y la rebeldía.";

const quotes = [item1, item2, item3, item4, item5];
const btn = document.getElementById('btn');

// set starting item
let currentItem = 0;

// load initial item --> okat this works, because when i input a different array index, it changes
window.addEventListener("DOMContentLoaded", function () {
  const quotation = quotes[currentItem];
});

// show quote based on item
function show(currentItem) {
  const item = quotes[currentItem];
  author.textContent = item;
};

btn.addEventListener('click', function (x) {
  currentItem++
  if (currentItem > quotes.length - 1) {
    currentItem = 0
  };
  show(currentItem)
  // console.log('hmm how do I make this work, call back function?')
})

// ============= SIDE BAR ===============
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})










//  this should probbaly turn into a function? 
//  console.log(' " ' + item1 + ' " ');

// btn.addEventListener('click', function(getRandomQuote) {
  
//   // const item = reviews[person]
//   // document.body.style.backgroundColor = colors[randomNumber]
//   // color.textContent = (' " ' + item1 + ' " ')
// });

// function showQuote(quotation) {

// };

// function getRandomQuote() {
//   return Math.floor(Math.random() * colors.length)
// };