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
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
        prevBtn.style.visibility = "hidden";
    } else {
        book.style.transform = "translateX(100%)";
    }
};

        // NAVIGATION OF THE BOOK

/* You may wonder why the book starts at 8 and the goNextPage decrements while the goPrevPage increments the value of currentLocation.
Doesn't it sound counterintuitive? There's a logical explanation for this. Because the z-index property is being used to keep the book
 as a stack of papers that only display as you go through pages, it's necessary for the value of currentLocation to maintain 
 this index in order to display the content of the book correctly. */


let currentLocation = 7;
let numOfPapers = 7;
let maxLocation = numOfPapers + 1;

const papers = {
    0: paper7,
    1: paper6,
    2: paper5,
    3: paper4,
    4: paper3,
    5: paper2,
    6: paper1
}

    // FUNCTION TO NAVIGATE TO THE NEXT PAGE

const nextPageActions = (page_number) => {
    openBook();
    let page = papers[page_number]
    page.classList.add("flipped");
    page.style.zIndex = currentLocation;
}
  
const goNextPage = () => {
    if (currentLocation < maxLocation) {
        for (let i = 6; i >= currentLocation; i--) {
            switch (i) {
            case 1:
                nextPageActions(i);
                nextBtn.style.visibility = "hidden";
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
    let page = papers[page_number]
    page.classList.remove("flipped");
    //page.style.zIndex = currentLocation;
}

const goPrevPage = () => {
    if (currentLocation >= 0) {
        for (let i = currentLocation; i <= 6; i++) {
            switch (i) {
                case 1:
                    prevPageActions(5);
                    break;
                default:
                    setTimeout(() => {
                    prevPageActions(i);
                    }, 250);
                    break; 
            }
        }
        currentLocation++;
    }
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
            markerElement.style.height = "11.6vh";
            markerElement.style.transition = "height 0.5s";
            markdownTip.innerHTML = `
                .marker::before {
                    position: absolute;
                    content: '';
                    width: 2.2vw;
                    height: 5vh;
                    top: 2.2vh;
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
    }   markdownTip.innerHTML = `
                .marker::before {
                    position: absolute;
                    content: '';
                    width: 2.2vw;
                    height: 6.125vh;
                    top: 0.5vh;
                    background-color: inherit;
                    transform: rotate(45deg);
                    z-index: -1;
                    animation: goUp 0.4s forwards;
                }
            `;
        markerElement.style.height = "7.125vh";
        markerElement.style.transition = "height 0.5s";
}

const markerRed = () => { navMarkDown(5, 0) };
const markerGreen = () => { navMarkDown(4, 1) };
const markerYellow = () => { navMarkDown(3, 2) };
const markerBlue = () => { navMarkDown(0, 3) };


// EVENT LISTENER

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
heroSection.addEventListener("click", (event) => jumpTo(5));
skillsSection.addEventListener ("click", (event) => jumpTo(4));
proyectsSection.addEventListener("click", (event) => jumpTo(3));
contactSection.addEventListener("click", (event) => jumpTo(0));

