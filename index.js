// REFERENCES TO DOM ELEMENTS

const prevBtn = document.querySelector("#prev-page");
const nextBtn = document.querySelector("#next-page");
const candleBtn = document.getElementById('candle-btn');
const book = document.querySelector("#book");


const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");


// FUNCTION DARK/LIGHT MODE

let darkMode =localStorage.getItem('darkMode');
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
let currentLocation = 1;
let numOfPapers = 7;
let maxLocation = numOfPapers + 1;

const openBook = () => {
    book.style.transform = "translate(50%, 5%)";
    setTimeout(() => {
        prevBtn.style.display = "block";
    }, 500); 
};


const closeBook = (isAtBeginning) => {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
        prevBtn.style.display = "none";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

const goNextPage = () => {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;  
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                nextBtn.style.display = "none";
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

const goPrevPage = () => {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 7;
                book.style.transform = "rotateX(25deg) rotateY(0deg) rotateZ(-10deg)";
                book.style.transition = "transform 0.5s";
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                nextBtn.style.display = "block";
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

// NAV FUNCTIONS

// NAV BUTTONS
const heroBtn = document.querySelector("#about-me");
const skillsBtn = document.querySelector("#skills");
const projectsBtn = document.querySelector("#projects");
const contactBtn = document.querySelector("#contact");

/*
const navMarkdown = document.querySelectorAll(".marker");

navMarkdown.forEach(markDown => {
    markDown.addEventListener("click", () => {
        let markDownElement = document.getElementById(markDown.id);
        let markdownTip = document.createElement('style');
                markDownElement.style.zIndex = "90";
                setTimeout(() => {
                    markDownElement.style.height = "4.6rem";
                    markdownTip.innerHTML = `
                        .marker::before {
                            position: absolute;
                            content: '';
                            width: 2.2rem;
                            height: 2.2rem;
                            top: 3.5rem;
                            background-color: inherit;
                            transform: rotate(45deg);
                            z-index: -1;
                        }
                    `;
                    document.head.appendChild(markdownTip);
                }, 500); 
                console.log("funciono") 
    })
});
*/

//const navMarkUp = "";

const travelToSection = () => {

    const heroSection = 2;
    const skillsSection = 3;
    const projectsSection = 4;
    const contactSection = 7;
};


// EVENT LISTENER1

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
heroBtn.addEventListener("click", travelToSection);
skillsBtn.addEventListener("click", travelToSection);
projectsBtn.addEventListener("click", travelToSection);
contactBtn.addEventListener("click", travelToSection);



// CSS HOUDINI PIXEL BOX LIBRARY FUNCTIONS

if ('paintWorklet' in CSS && 'registerProperty' in CSS && 'CSSUnitValue' in window) {
        
    CSS.registerProperty({
         name: '--pixelbox-border',
         syntax: '<length>',
         initialValue: '2px',
         inherits: false
     });

     CSS.registerProperty({
         name: '--pixelbox-border-radius',
         syntax: '<length>',
         initialValue: '0px',
         inherits: false
     });

     CSS.registerProperty({
         name: '--pixelbox-border-color',
         syntax: '<color>',
         initialValue: '#000000',
         inherits: false
     });
    
     CSS.registerProperty({
         name: '--pixelbox-background-color',
         syntax: '<color>',
         initialValue: '#ffffff',
         inherits: false
     });

     CSS.registerProperty({
         name: '--pixelbox-background-shadow-border',
         syntax: '<length>',
         initialValue: '0px',
         inherits: false
     });
     
     CSS.registerProperty({
         name: '--pixelbox-background-shadow-color',
         syntax: '<color>',
         initialValue: '#adafbc',
         inherits: false
     });
 } else {
     console.log("Not Supported");
 } 

 CSS.paintWorklet.addModule('pixelbox.js');