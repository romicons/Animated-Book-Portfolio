// REFERENCES TO DOM ELEMENTS

const prevBtn = document.querySelector("#prev-page");
const nextBtn = document.querySelector("#next-page");
const book = document.querySelector("#book");
const candleBtn = document.getElementById('candle-btn');
const heroSection = document.querySelector("#red");
const skillsSection = document.querySelector("#green");
const proyectsSection = document.querySelector("#yellow");
const contactSection = document.querySelector("#blue");


const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");

zIndex = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
  5: 3,
  6: 2,
  7: 1
}

// FUNCTION DARK/LIGHT MODE

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#candle-btn');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  document.querySelector('.flame').classList.add('flame-active');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.querySelector('.flame').classList.remove('flame-active');
  localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// BOOK LOGIC

// FUNCTION TO OPEN THE BOOK

const openBook = () => {
  book.style.transform = "translate(50%, 10%)";
  setTimeout(() => {
    prevBtn.style.visibility = "visible";
  }, 500);
};

// FUNCTION TO CLOSE THE BOOK

const closeBook = (isAtBeginning) => {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
    prevBtn.style.visibility = "hidden";
  } else {
    book.style.transform = "translateX(100%)";
  }
}

// NAVIGATION OF THE BOOK

/* You may wonder why the book starts at 8 and the goNextPage decrements while the goPrevPage increments the value of currentLocation.
Doesn't it sound counterintuitive? There's a logical explanation for this. Because the z-index property is being used to keep the book
 as a stack of papers that only display as you go through pages, it's necessary for the value of currentLocation to maintain
 this index in order to display the content of the book correctly. */


let currentLocation = 8;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

const papers = {
  1: paper7,
  2: paper6,
  3: paper5,
  4: paper4,
  5: paper3,
  6: paper2,
  7: paper1
}

// FUNCTION TO NAVIGATE TO THE NEXT PAGE

const nextPageActions = (page_number) => {
  console.log("nextPageActions -> ", page_number, currentLocation)
  openBook();
  let page = papers[page_number]
  page.classList.add("flipped");
  page.style.zIndex = currentLocation;
  console.log("page -> ", page)
}

const goNextPage = () => {
  if (currentLocation < maxLocation) {
    for (let i = 7; i >= currentLocation; i--) {
      console.log("goNextPage ", i)
      switch (i) {
        case 1:
          nextPageActions(i);
          break;
        default:
          setTimeout(() => {
            nextPageActions(i);
          }, 250);
          break;
      }
    }
    currentLocation--;
  }
}

// FUNCTION TO NAVIGATE TO THE PREVIOUS PAGE

const prevPageActions = (page_number) => {
  console.log("prevPageActions -> ", page_number)
  let page = papers[page_number]
  page.classList.remove("flipped");
  page.style.zIndex = parseInt(page_number);
  console.log("page -> ", page)
}

const goPrevPage = () => {
  if (currentLocation >= 1) {
    console.log("goPrevOfPage ", currentLocation)
    switch (currentLocation) {
      case 1:
        prevPageActions(1);
        break;
      default:
        setTimeout(() => {
          prevPageActions(currentLocation);
        }, 250);
        break;
    }
  }
  currentLocation++;
}

// FUNCTION TO JUMP ACROSS THE BOOK WITH THE MARKERS

const jumpTo = (page) => {
  if (currentLocation < page) {
    currentLocation = (page - 1)
    setTimeout(() => {
      goPrevPage()
    }, 500);
    return
  }
  currentLocation = (page + 1);
  setTimeout(() => {
    goNextPage()
    return
  }, 250);
}

// FUNCTION TO ANIMATE THE MARKERS

let navMarker = document.querySelectorAll('.marker');
let markerElements = Array.from(navMarker);
let markdownTip = document.createElement('style');


navMarkDown = (page, markerIndex) => {
  // WHEN THE USER IS ON A SECTION, THE MARKER GOES DOWN
  let markerElement = markerElements[markerIndex];
  if (currentLocation === page && markerElement) {
    markerElement.style.zIndex = "10";
    setTimeout(() => {
      markerElement.style.height = "4.6rem";
      markerElement.style.transition = "height 0.5s";
      markdownTip.innerHTML = `
                .marker::before {
                    position: absolute;
                    content: '';
                    width: 2.2rem;
                    height: 2.2rem;
                    top: 1.2rem;
                    background-color: inherit;
                    transform: rotate(45deg);
                    z-index: -1;
                    animation: goDown 0.4s forwards;
                }
            `;
      document.head.appendChild(markdownTip);
    }, 500);
  } else {
    // THE MARKER GOES UP
    markerElement.style.zIndex = "0";
  } markdownTip.innerHTML = `
                .marker::before {
                    position: absolute;
                    content: '';
                    width: 2.2rem;
                    height: 2.2rem;
                    top: 0.5rem;
                    background-color: inherit;
                    transform: rotate(45deg);
                    z-index: -1;
                    animation: goUp 0.4s forwards;
                }
            `;
  markerElement.style.height = "3.125rem";
  markerElement.style.transition = "height 0.5s";
}

const markerRed = () => { navMarkDown(6, 0) };
const markerGreen = () => { navMarkDown(5, 1) };
const markerYellow = () => { navMarkDown(4, 2) };
const markerBlue = () => { navMarkDown(1, 3) };


// EVENT LISTENER

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
heroSection.addEventListener("click", (event) => jumpTo(6));
skillsSection.addEventListener("click", (event) => jumpTo(5));
proyectsSection.addEventListener("click", (event) => jumpTo(4));
contactSection.addEventListener("click", (event) => jumpTo(1));

markerRed();
markerGreen();
markerYellow();
markerBlue();
