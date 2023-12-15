import "./Catalogue";
import { smoothScroll } from "../main/Main";

function hideElementsByClass(className) {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach((element) => {
      element.style.display = 'none';
    });
}
  
function unhideElementsByClass(className) {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach((element) => {
      element.style.display = ''; // Setting display to an empty string resets it to the default value
    });
}


export function showMale() {
    unhideElementsByClass("catalogue__male");
    hideElementsByClass("catalogue__female");
    hideElementsByClass("catalogue__kids");
}

export function showFemale() {
    hideElementsByClass("catalogue__male");
    unhideElementsByClass("catalogue__female");
    hideElementsByClass("catalogue__kids");
}

export function showKids() {
    hideElementsByClass("catalogue__male");
    hideElementsByClass("catalogue__female");
    unhideElementsByClass("catalogue__kids");
}