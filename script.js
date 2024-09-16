const nav = document.getElementById('navb');
const hamburger = document.getElementById('hamburger');
const hamburgerN = document.getElementById('hamburgerN');
const navlist = document.getElementById('nav_list');
const logo = document.getElementById('logo');

hamburger.addEventListener('click', function() {
    logo.style.display = 'none';
    nav.style.height = 'auto';
    navlist.style.display = 'flex';
    hamburger.style.display = 'none';
    hamburgerN.style.display = 'flex';
    hamburgerN.style.transition='transition: 1s linear'
    
});

hamburgerN.addEventListener('click', function() {
    logo.style.display = 'flex';
    navlist.style.display = 'none';
    hamburger.style.display = 'flex';
    hamburgerN.style.display = 'none';
    nav.style.boxShadow='none';
});


//Type writer
const typewriterElement = document.getElementById('typewriter');


const strings = ["a Web Developer.", "a Programmer.", "an Engineer."];


let currentStringIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 150; // Speed of typing
let deletingSpeed = 100; // Speed of deleting
let delayBetweenStrings = 1000; // Delay before deleting the string
let isDeleting = false; // Flag to track deleting status

function typewriterEffect() {
    const currentString = strings[currentStringIndex];

    // Update the text content of the element
    if (!isDeleting) {
        
        typewriterElement.innerHTML = currentString.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        // If the full string is typed
        if (currentCharIndex === currentString.length) {
            isDeleting = true; 
            setTimeout(typewriterEffect, delayBetweenStrings); 
            return;
        }
    } else {
        
        typewriterElement.innerHTML = currentString.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        
        if (currentCharIndex === 0) {
            isDeleting = false; 
            currentStringIndex = (currentStringIndex + 1) % strings.length; 
        }
    }

    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typewriterEffect, speed);
}


typewriterEffect();
