// REFERENCES TO DOM ELEMENTS

const prevBtn = document.querySelector("#prev-page");
const nextBtn = document.querySelector("#next-page");
const book = document.querySelector("#book");


const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");


const heroSection = document.querySelector("#b1");
const skillsSection = document.querySelector("#b2");
const proyectsSection = document.querySelector("#f4");
const contactSection = document.querySelector("#b4");


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
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                nextBtn.style.display = "block";
                break;
            case 8:
                openBook();
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

/*
const markDown = () => {
    markdownBody.style.zIndex = "90";
    setTimeout(() => {
        markdownBody.style.height = "4.6rem";
        markerTip.innerHTML = `
            .markdown::before {
                position: absolute;
                content: '';
                width: 2.2rem;
                height: 2.2rem;
                top: 3.5rem;
                background-color: red;
                transform: rotate(45deg);
                z-index: -1;
            }
        `;
        document.head.appendChild(markdownTip);
    }, 500)
};
*/

const markdownBody = document.querySelector(".marker");
const navMarkdown = document.querySelectorAll(".marker");

navMarkdown.forEach(markDown => {
    markDown.addEventListener("click", () => {
        let markDownElement = document.getElementById(markDown.id);
        let markdownTip = document.createElement('style');
                markdownBody.style.zIndex = "90";
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
    })
});

// EVENT LISTENER

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
//.addEventListener("click", markDown);

/*
heroSection.addEventListener("click", markDown);
skillsSection.addEventListener ("click", markDown)
proyectsSection.addEventListener("click", markDown);
contactSection.addEventListener("click", markDown);
*/

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
     
     /*CSS.registerProperty({
         name: '--pixelbox-background-shadow-position',
         syntax: '<string>',
         initialValue: 'bottom-right',
         inherits: false
     });
     */
 } else {
     console.log("Not Supported");
 } 

 CSS.paintWorklet.addModule('pixelbox.js');