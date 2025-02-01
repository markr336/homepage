// Grid
const grid = document.querySelector('.grid')

for (let i = 0; i < 20; i++) {
  const row = document.createElement('div')
  row.classList.add(`row${i}`)
  grid.appendChild(row)
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    row.appendChild(cell)
  }
}


// Animate when container comes into view
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});

// Slideshow


document.querySelector('.purple').style.display = 'flex'
let cardIndex = 1

const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.prev')

nextButton.addEventListener('click', nextCard)
previousButton.addEventListener('click', prevCard)

function nextCard() {
  let cards = document.querySelectorAll('.projectCard')
  let dots = document.querySelectorAll('.dot')

  if (cardIndex == cards.length) {
    cardIndex = 1
  }
  else {
    cardIndex++
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
    cards[i].classList.add('slideFromRight')
    cards[i].classList.remove('slideFromLeft')
    cards[i].classList.remove('slideAppear')
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }

  cards[cardIndex - 1].style.display = 'flex'
  dots[cardIndex - 1].classList.add('active')
}

function prevCard() {
  let cards = document.querySelectorAll('.projectCard')
  let dots = document.querySelectorAll('.dot')
  console.log(cardIndex)
  if (cardIndex == 1) {
    cardIndex = cards.length
  }
  else {
    cardIndex--
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
    cards[i].classList.remove('slideFromRight')
    cards[i].classList.add('slideFromLeft')
    cards[i].classList.remove('slideAppear')
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }
  cards[cardIndex - 1].style.display = 'flex'
  dots[cardIndex - 1].classList.add('active')
}

function showSlide(n) {
  cardIndex = n
  let cards = document.querySelectorAll('.projectCard')
  let dots = document.querySelectorAll('.dot')

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
    cards[i].classList.remove('slideFromRight')
    cards[i].classList.remove('slideFromLeft')
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }

  cards[cardIndex - 1].style.display = 'flex'
  cards[cardIndex - 1].classList.add('slideAppear')
  dots[cardIndex - 1].classList.add('active')
}

// Typewriter welcome message

document.addEventListener('DOMContentLoaded',function(event){
  let dataText = [ 'いらっしゃいませ', 'Добредојдовте', 'مرحباً', '欢迎', 'Bienvenido', 'Boas-vindas', 'Willkommen','Powitanie', 'Welcome'];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 500);
    }
  }

  function StartTextAnimation(i) {
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
      });
    }
  }
  
  StartTextAnimation(0);
});