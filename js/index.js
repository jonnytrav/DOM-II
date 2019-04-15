// Your code goes here
let navAccess = document.querySelector('nav').getElementsByTagName('a');

navAccess[0].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
navAccess[1].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
navAccess[2].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
navAccess[3].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});

navAccess[0].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
navAccess[1].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
navAccess[2].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
navAccess[3].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});



let btnAccess = document.getElementsByClassName('btn');

btnAccess[0].addEventListener('mouseover', (event) => {event.target.style.background = '#FFFFFF'});
btnAccess[0].addEventListener('mouseover', (event) => {event.target.style.color = '#17A2B8'});
btnAccess[0].addEventListener('mouseleave', (event) => {event.target.style.background = '#17A2B8'});
btnAccess[0].addEventListener('mouseleave', (event) => {event.target.style.color = '#FFFFFF'});

btnAccess[1].addEventListener('mouseover', (event) => {event.target.style.background = '#FFFFFF'});
btnAccess[1].addEventListener('mouseover', (event) => {event.target.style.color = '#17A2B8'});
btnAccess[1].addEventListener('mouseleave', (event) => {event.target.style.background = '#17A2B8'});
btnAccess[1].addEventListener('mouseleave', (event) => {event.target.style.color = '#FFFFFF'});

btnAccess[2].addEventListener('mouseover', (event) => {event.target.style.background = '#FFFFFF'});
btnAccess[2].addEventListener('mouseover', (event) => {event.target.style.color = '#17A2B8'});
btnAccess[2].addEventListener('mouseleave', (event) => {event.target.style.background = '#17A2B8'});
btnAccess[2].addEventListener('mouseleave', (event) => {event.target.style.color = '#FFFFFF'});


document.querySelector('html').addEventListener('copy', (event) => {document.location.reload()});


navAccess[0].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[0].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[1].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[1].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[2].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[2].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[3].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[3].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});



// function reserveSpot() {
//     var x = document.querySelector("snackbar");
//     x.className = "show";

//     setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000) ;
// }

// buttonAccess[0].addEventListener('click', reserveSpot);
// buttonAccess[1].addEventListener('click', reserveSpot);
// buttonAccess[2].addEventListener('click', reserveSpot);