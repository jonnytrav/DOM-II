// Your code goes here
let navAccess = document.querySelector('nav').querySelectorAll('a');

class NavBtn {
    constructor(element){
        this.element = element;
        this.element.addEventListener('mouseover', this.mouseOver);
        this.element.addEventListener('mouseout', this.mouseOut);
    }
    mouseOver(event){
        event.target.style.color = '#fdd22e';
    }
    mouseOut(event){
        event.target.style.color = '#000000';
    }
}

// navAccess[0].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
// navAccess[1].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
// navAccess[2].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});
// navAccess[3].addEventListener('mouseover', (event) => {event.target.style.color = '#fdd22e'});

// navAccess[0].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
// navAccess[1].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
// navAccess[2].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
// navAccess[3].addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
 
// 4 MOUSEOVER AND MOUSEOUT EVENT LISTENERS USING CLASS INSTANTIATION//
const navItems = [];

for (let i=0; i<navAccess.length; i++) {
    let tempBtn = new NavBtn(navAccess[i]);
    navItems.push(tempBtn);
}


//DID NOT CREATE A CLASS FOR THESE//
//SWAPS BACKGROUND COLOR WITH TEXT COLOR ON MOUSEOVER AND MOUSEOUT//
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



//DRAG AND DRAGEND EVENT LISTENER FOR NAV ITEMS//
navAccess[0].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[0].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[1].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[1].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[2].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[2].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

navAccess[3].addEventListener('drag', (event) => { event.target.style.cursor = "not-allowed"});
navAccess[3].addEventListener('dragend', (event) => { event.target.style.cursor = "pointer"});

//CLIPBOARD COPY EVENT LISTENER RELOADS PAGE WHEN ANYTHING IS COPIED//
document.querySelector('html').addEventListener('copy', (event) => { document.location.reload() });

//TURNS H1 RED WHEN YOU DRAG FUNBUS IMG//
let headerr = document.querySelector('h1');
document.querySelector('.funBus').addEventListener('drag', (event) => { headerr.style.color = 'red' });
document.querySelector('.funBus').addEventListener('dragend', (event) => { headerr.style.color = 'black' });

//CHANGE COLOR OF H1 WHEN RESIZING//
window.addEventListener('resize', function(event){
    headerr.style.color = '#fdd22e'; 
});

//SCROLL EVENT LISTENER TO CHANGE 'WELCOME TO FUNBUS' H2 TO GOLD//
const hh2 = document.querySelectorAll('h2');
window.addEventListener('scroll', function(event){
    hh2[0].style.color = '#fdd22e';
});
// function reserveSpot() {
//     var x = document.querySelector("snackbar");
//     x.className = "show";

//     setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000) ;
// }

// btnAccess[0].addEventListener('click', reserveSpot);
// btnAccess[1].addEventListener('click', reserveSpot);
// btnAccess[2].addEventListener('click', reserveSpot);

