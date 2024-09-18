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


const strings = ["a Web Developer.", "a Programmer.", "an ECE Engineer."];


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
/*
const proj_1=document.getElementById('proj-1');
const proj_2=document.getElementById('proj-2');
const proj_3=document.getElementById('proj-3');

const bb=document.getElementById('bb');
const modal=document.getElementById('modal');
const close=document.getElementById('close');
proj_1.addEventListener('click',function(){
    bb.style.display='block';
    modal.style.display='block';
});
proj_2.addEventListener('click',function(){
    bb.style.display='block';
    modal.style.display='block';
});
close.addEventListener('click',function(){
    bb.style.display='none';
    modal.style.display='none';
});*/
// Get all "Read More" buttons
const readMoreBtns = document.querySelectorAll('.read-more');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Get all close buttons
const closeBtns = document.querySelectorAll('.close');
const bb = document.querySelectorAll('.bb');
// Loop through each "Read More" button
readMoreBtns.forEach((btn, index) => {
    // When the button is clicked, show the corresponding modal
    btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
        bb[index].style.display='block';
    });
});

// Loop through each close button
closeBtns.forEach((btn, index) => {
    // When the close button is clicked, hide the corresponding modal
    btn.addEventListener('click', () => {
        modals[index].style.display = 'none';
        bb[index].style.display='none';
    });
});

// Optional: Close modal if user clicks outside of modal-content
window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            bb[index].style.display='none';
        }
    });
});
