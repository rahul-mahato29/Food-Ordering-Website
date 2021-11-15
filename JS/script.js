let menuBar  = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar');

menuBar.addEventListener('click', ()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
function fadeOut(){
    setInterval(loader, 3000);
}
  
window.onload = fadeOut();