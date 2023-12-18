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
    book.style.transform = "translate(50%, 10%)";
    setTimeout(() => {
    prevBtn.style.visibility = "visible";
    }, 500);
};

const closeBook = (isAtBeginning) => {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
        prevBtn.style.visibility = "hidden";
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
                openBook();
                setTimeout(() => {
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                }, 250);
                break;
            case 3:
                openBook();
                setTimeout(() => {
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                }, 250);
                break;
            case 4:
                openBook();
                setTimeout(() => {
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                }, 250);
                break;  
            case 5:
                openBook();
                setTimeout(() => {
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                }, 250);
                break;
            case 6:
                openBook();
                setTimeout(() => {
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                paper5.style.zIndex = 5;
                paper5.classList.add("flipped");
                paper6.style.zIndex = 6;
                paper6.classList.add("flipped")
                }, 250);
                nextBtn.style.visibility = "hidden";
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
                setTimeout(() => {
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 7;
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                book.style.transform = "rotateX(25deg) rotateY(0deg) rotateZ(-10deg)";           
                book.style.transition = "transform 0.5s";
                }, 250);
                break;
            case 3:
                setTimeout(() => {
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.visibility = "visible";
            }, 250);
                break;
            case 4:
                setTimeout(() => {
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.visibility = "visible";
                }, 250);
                break;
            case 5:
                setTimeout(() => {
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.display = "block";
                }, 250);
                break;
            case 6:
                setTimeout(() => {
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.visibility = "visible";
                }, 250);
                break;
            case 7:
                setTimeout(() => {
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.visibility = "visible";
                }, 250);
                break;
            case 8:
                setTimeout(() => {
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                nextBtn.style.visibility = "visible";
                }, 250);
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}


const jumpTo = (page) => {
    if (currentLocation > page) {
        currentLocation = (page + 1)
        goPrevPage()
        setTimeout(() => {
        }, 500);
        return
    }
    currentLocation = (page - 1);
    setTimeout(() => {
    goNextPage()
    return
    }, 250);
}

// EVENT LISTENER

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
heroSection.addEventListener("click", (event) => jumpTo(2));
skillsSection.addEventListener ("click", (event) => jumpTo(3));
proyectsSection.addEventListener("click", (event) => jumpTo(4));
contactSection.addEventListener("click", (event) => jumpTo(7));

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